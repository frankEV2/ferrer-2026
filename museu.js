/* Les peces del ferrer — capa d'interfície del «museu» (portada, carrusel i filtres del catàleg).
   Només reorganitza i fa de drecera cap als controls que ja existeixen (botons d'accés,
   pestanyes de categoria i filtres avançats). No llegeix ni escriu cap dada. */
(function(){
"use strict";
var $ = function(id){ return document.getElementById(id); };
var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- portada: tres accessos directes ---------- */
Array.prototype.forEach.call(document.querySelectorAll('.cv-acc'), function(b){
  b.addEventListener('click', function(e){
    e.stopPropagation();
    var target = $(b.dataset.acc), cover = $('coverBtn');
    if(cover) cover.click();                      // amaga la portada (com abans)
    setTimeout(function(){ if(target) target.click(); }, 60);
  });
});

/* ---------- obres destacades: fletxes, teclat i tàctil ---------- */
(function(){
  var row = $('featRow'); if(!row) return;
  var wrap = document.createElement('div'); wrap.className = 'featwrap';
  row.parentNode.insertBefore(wrap, row); wrap.appendChild(row);
  var ARR = function(d){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="'+(d<0?'15 5 8 12 15 19':'9 5 16 12 9 19')+'"/></svg>'; };
  var prev = document.createElement('button'), next = document.createElement('button');
  prev.type = next.type = 'button';
  prev.className = 'fnav fprev'; next.className = 'fnav fnext';
  prev.innerHTML = ARR(-1); next.innerHTML = ARR(1);
  prev.setAttribute('aria-label', 'Obra anterior'); next.setAttribute('aria-label', 'Obra següent');
  wrap.append(prev, next);
  row.setAttribute('tabindex', '0');
  row.setAttribute('aria-label', 'Obres destacades: fes servir les fletxes per desplaçar-te');
  // va d'obra en obra, alineant-se amb els punts d'encaix (scroll-snap) perquè el desplaçament no rebota
  function go(d){
    var cs = Array.prototype.slice.call(row.querySelectorAll('.fcard')); if(!cs.length) return;
    var pad = parseFloat(getComputedStyle(row).scrollPaddingLeft) || 0;
    var pos = cs.map(function(c){ return c.offsetLeft - row.firstElementChild.offsetLeft; });
    var i = 0, best = Infinity;
    pos.forEach(function(p, k){ var dd = Math.abs(p - row.scrollLeft); if(dd < best){ best = dd; i = k; } });
    i = Math.max(0, Math.min(cs.length - 1, i + d));
    row.scrollTo({left: pos[i], behavior: reduce ? 'auto' : 'smooth'});
    void pad;
  }
  function paint(){
    var max = row.scrollWidth - row.clientWidth - 2;
    prev.disabled = row.scrollLeft <= 2; next.disabled = row.scrollLeft >= max;
    wrap.classList.toggle('single', max <= 0);
  }
  prev.addEventListener('click', function(){ go(-1); });
  next.addEventListener('click', function(){ go(1); });
  row.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){ e.preventDefault(); go(1); }
    else if(e.key === 'ArrowLeft'){ e.preventDefault(); go(-1); }
  });
  row.addEventListener('scroll', paint, {passive:true});
  window.addEventListener('resize', paint);
  new MutationObserver(paint).observe(row, {childList:true});
  paint();
})();

/* ---------- «Totes les obres»: filtres a sobre del catàleg ---------- */
(function(){
  var bar = $('mFilters'), grid = $('grid'); if(!bar || !grid) return;
  // les pestanyes de categoria i les etiquetes de filtres actius passen a sobre del catàleg
  var cats = document.querySelector('.navrow2'), fsum = $('fsum');
  var top = document.createElement('div'); top.className = 'mf-row';
  if(cats) top.appendChild(cats);
  bar.appendChild(top);
  var sel = document.createElement('div'); sel.className = 'mf-row mf-sel';
  bar.appendChild(sel);
  if(fsum) bar.appendChild(fsum);

  function mk(label, cls){
    var l = document.createElement('label'); l.className = 'mf ' + (cls||'');
    l.innerHTML = '<span>'+label+'</span><select></select>';
    sel.appendChild(l); return l;
  }
  // proxies dels filtres existents (mateixes dades i mateixa lògica)
  var P = [
    {l:mk('Dècada'), dec:true},
    {l:mk('Sèrie'), src:'a_serie'},
    {l:mk('Ubicació','readeronly'), src:'a_ubic'},
    {l:mk('Conservació','mf-2'), src:'a_estat'}
  ];
  function decades(){
    var o = {};
    (window.FerrerUI ? window.FerrerUI.all() : []).forEach(function(p){
      var m = /(?:^|\D)(1[5-9]\d\d|20\d\d)(?:\D|$)/.exec(String(p.any||''));
      if(m){ var d = Math.floor(parseInt(m[1],10)/10)*10; o[d] = (o[d]||0) + 1; }
    });
    return Object.keys(o).map(Number).sort(function(a,b){ return a-b; }).map(function(d){ return [d, o[d]]; });
  }
  function sync(){
    P.forEach(function(x){
      var s = x.l.querySelector('select'), n = 0;
      var lab = x.l.querySelector('span').textContent;
      if(x.dec){
        var y0 = $('a_y0').value, y1 = $('a_y1').value, ds = decades();
        var cur = (y0 && y1 && +y1 === +y0 + 9) ? y0 : '';
        var custom = (y0 || y1) && !cur;
        s.innerHTML = '<option value="">'+lab+': totes</option>' + ds.map(function(d){ return '<option value="'+d[0]+'"'+(String(d[0])===cur?' selected':'')+'>'+d[0]+'s · '+d[1]+'</option>'; }).join('') +
          (custom ? '<option value="__c" selected>'+(y0||'…')+'–'+(y1||'…')+'</option>' : '');
        n = ds.length;
      } else {
        var o = $(x.src); if(!o) return;
        // només els valors que existeixen a l'inventari (cap opció buida)
        var have = {}, key = {a_serie:'serie', a_estat:'estat', a_ubic:'ubic'}[x.src];
        (window.FerrerUI ? window.FerrerUI.all() : []).forEach(function(p){ var v = String(p[key]||'').trim(); if(v) have[v] = (have[v]||0) + 1; });
        s.innerHTML = Array.prototype.filter.call(o.options, function(op){ return !op.value || have[op.value] || op.value === o.value; })
          .map(function(op){ return '<option value="'+op.value.replace(/"/g,'&quot;')+'">'+(op.value ? op.textContent.replace(/</g,'&lt;') : lab+': totes')+(op.value && have[op.value] ? ' · '+have[op.value] : '')+'</option>'; }).join('');
        s.value = o.value;
        n = Object.keys(have).length;
      }
      x.l.hidden = n < 1;                           // cap filtre buit
    });
  }
  P.forEach(function(x){
    var s = x.l.querySelector('select');
    s.addEventListener('change', function(){
      if(x.dec){
        if(s.value === '__c') return;
        var a = $('a_y0'), b = $('a_y1');
        a.value = s.value || ''; b.value = s.value ? (+s.value + 9) : '';
        a.dispatchEvent(new Event('input', {bubbles:true}));
      } else {
        var o = $(x.src); o.value = s.value;
        o.dispatchEvent(new Event('change', {bubbles:true}));
      }
    });
  });
  function count(){
    var n = grid.querySelectorAll('.card').length, c = $('allCount');
    if(c) c.textContent = n ? String(n) : '';
  }
  new MutationObserver(function(){ sync(); count(); }).observe(grid, {childList:true});
  sync(); count();
})();
})();
