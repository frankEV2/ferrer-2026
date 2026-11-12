/* Les peces del ferrer — tutorials: pantalla de consulta + PDF.
   El contingut és a tutorials-data.js (aquí no cal tocar res per afegir o canviar textos).
   index.html només li passa unes quantes funcions seves (window.TutAPI) i obre window.Tutorials.open(). */
(function(){
"use strict";
var st = { api:null, book:'family', lang:'ca', busy:false };

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function fmt(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, '<b class="tk">$1</b>'); }
function plain(s){ return String(s).replace(/\*\*(.+?)\*\*/g, '«$1»'); }
function U(){ return window.TUTORIALS.ui[st.lang]; }
function B(){ return window.TUTORIALS.books[st.book][st.lang]; }
function books(){ return st.api.role() === 'editor' ? ['editor', 'family'] : ['family']; }

/* ---------- estils (només es posen un cop) ---------- */
function css(){
  if(document.getElementById('tutcss')) return;
  var s = document.createElement('style'); s.id = 'tutcss';
  s.textContent =
  '.tutwrap .tk{font-weight:600;color:var(--moss);background:var(--paper-2);border:1px solid var(--rule);border-radius:6px;padding:0 5px;white-space:normal}' +
  '.tutwrap .tutctl{display:flex;flex-direction:column;gap:12px;margin-bottom:14px}' +
  '.tutwrap .tutctl label{display:block;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2);margin-bottom:6px}' +
  '.tutwrap .tuthead h3{font-size:1.5rem;line-height:1.2;margin:4px 0 10px}' +
  '.tutwrap .tutidx{list-style:none;margin:0 0 18px;padding:0;display:grid;gap:6px}' +
  '.tutwrap .tutidx button{width:100%;text-align:left;display:flex;gap:10px;align-items:baseline;padding:10px 12px;border:1px solid var(--rule);background:var(--card);border-radius:var(--r-sm);font:inherit;font-size:.9rem;color:inherit;cursor:pointer}' +
  '.tutwrap .tutidx button:active{background:var(--paper-2)}' +
  '.tutwrap .tutidx i{font-style:normal;font-family:var(--display);color:var(--clay);font-weight:700;min-width:1.6em}' +
  '.tutwrap details.tutch{margin:0 0 10px;border:1px solid var(--rule);border-radius:var(--r);background:var(--card);overflow:hidden}' +
  '.tutwrap details.tutch>summary{cursor:pointer;list-style:none;padding:14px 16px;font-family:var(--display);font-size:1.12rem;display:flex;gap:10px;align-items:baseline}' +
  '.tutwrap details.tutch>summary::-webkit-details-marker{display:none}' +
  '.tutwrap details.tutch>summary::after{content:"+";margin-left:auto;color:var(--clay);font-size:1.3rem}' +
  '.tutwrap details.tutch[open]>summary::after{content:"\\2212"}' +
  '.tutwrap details.tutch>summary i{font-style:normal;color:var(--clay);font-weight:700}' +
  '.tutwrap .tutsec{padding:4px 16px 16px;border-top:1px solid var(--rule)}' +
  '.tutwrap .tutsec h5{font-family:var(--display);font-size:1.02rem;font-weight:600;margin:14px 0 8px;color:var(--ink)}' +
  '.tutwrap .tutrow{margin:0 0 10px;font-size:.88rem;line-height:1.55;color:var(--ink-2)}' +
  '.tutwrap .tutrow>span{display:block;font-size:.66rem;letter-spacing:.09em;text-transform:uppercase;color:var(--clay);font-weight:700;margin-bottom:3px}' +
  '.tutwrap .tutsec ol,.tutwrap .tutsec ul{margin:0;padding-left:1.3em}' +
  '.tutwrap .tutsec li{margin:0 0 4px}' +
  '.tutwrap .tutcare{border-left:3px solid var(--clay);background:var(--paper-2);border-radius:0 var(--r-sm) var(--r-sm) 0;padding:9px 12px}' +
  '.tutwrap .tutbar{display:flex;gap:8px;margin:0 0 14px}' +
  '.tutwrap .tutbar button{flex:1;padding:9px;border:1px solid var(--rule);background:var(--card);border-radius:99px;font:inherit;font-size:.8rem;cursor:pointer;color:inherit}' +
  '.tutwrap .tutpdf{margin:4px 0 18px}';
  document.head.appendChild(s);
}

/* ---------- pantalla ---------- */
function seg(k, opts, cur){
  return '<div class="seg" data-k="' + k + '">' + opts.map(function(o){
    return '<button type="button" data-v="' + o[0] + '" class="' + (o[0] === cur ? 'on' : '') + '">' + esc(o[1]) + '</button>';
  }).join('') + '</div>';
}
function secHtml(s, u){
  var h = '<div class="tutsec"><h5>' + fmt(s.h) + '</h5>';
  if(s.p) h += '<div class="tutrow"><span>' + u.why + '</span>' + fmt(s.p) + '</div>';
  if(s.w) h += '<div class="tutrow"><span>' + u.where + '</span>' + fmt(s.w) + '</div>';
  if(s.s) h += '<div class="tutrow"><span>' + u.steps + '</span><ol>' + s.s.map(function(x){ return '<li>' + fmt(x) + '</li>'; }).join('') + '</ol></div>';
  if(s.l) h += '<div class="tutrow"><span>' + u.points + '</span><ul>' + s.l.map(function(x){ return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></div>';
  if(s.c) h += '<div class="tutrow tutcare"><span>' + u.care + '</span><ul>' + s.c.map(function(x){ return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></div>';
  return h + '</div>';
}
function render(){
  var a = st.api, u = U(), bk = B(), sb = a.sbody, bl = books();
  a.setHead(u.menu, false);
  var h = '<div class="tutwrap" translate="no">' +
    '<div class="tutctl"><div><label>' + u.lang + '</label>' + seg('lang', [['ca', 'Català'], ['es', 'Castellano']], st.lang) + '</div>' +
    (bl.length > 1 ? '<div><label>' + u.pick + '</label>' + seg('book', bl.map(function(b){ return [b, window.TUTORIALS.books[b][st.lang].name]; }), st.book) + '</div>' : '') + '</div>' +
    '<div class="tuthead"><h3 class="serif">' + esc(bk.title) + '</h3><p class="bulknote">' + esc(bk.intro) + '</p></div>' +
    '<button type="button" class="save" id="tutPdfBtn">' + u.pdf + '</button><div class="tutpdf" id="tutPdf"></div>' +
    '<div class="xs"><h4>' + u.toc + '</h4><ol class="tutidx">' + bk.chapters.map(function(c, i){
      return '<li><button type="button" data-i="' + i + '"><i>' + (i + 1) + '</i><span>' + esc(c.t) + '</span></button></li>'; }).join('') + '</ol>' +
    '<div class="tutbar"><button type="button" id="tutOpen">' + u.open + '</button><button type="button" id="tutClose">' + u.close + '</button></div></div>' +
    bk.chapters.map(function(c, i){
      return '<details class="tutch" id="tutc' + i + '"><summary><i>' + (i + 1) + '</i><span>' + esc(c.t) + '</span></summary>' +
        c.secs.map(function(s){ return secHtml(s, u); }).join('') + '</details>'; }).join('') +
    '</div>';
  sb.innerHTML = h;
  Array.prototype.forEach.call(sb.querySelectorAll('.seg'), function(g){
    g.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      if(g.dataset.k === 'lang') st.lang = b.dataset.v; else st.book = b.dataset.v;
      render(); sb.scrollTop = 0;
    });
  });
  Array.prototype.forEach.call(sb.querySelectorAll('.tutidx button'), function(b){
    b.addEventListener('click', function(){
      var d = document.getElementById('tutc' + b.dataset.i); if(!d) return;
      d.open = true; d.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  document.getElementById('tutOpen').addEventListener('click', function(){ Array.prototype.forEach.call(sb.querySelectorAll('details.tutch'), function(d){ d.open = true; }); });
  document.getElementById('tutClose').addEventListener('click', function(){ Array.prototype.forEach.call(sb.querySelectorAll('details.tutch'), function(d){ d.open = false; }); });
  document.getElementById('tutPdfBtn').addEventListener('click', downloadPdf);
}

/* ---------- PDF (A4, jsPDF; mateixa paleta i marcs que el catàleg) ---------- */
function tx(s){
  return String(s == null ? '' : s).replace(/[‘’‚′]/g, "'").replace(/[“”„]/g, '"').replace(/[–—−]/g, '-')
    .replace(/…/g, '...').replace(/•/g, '·').replace(/\r/g, '').replace(/[^\n\x20-\x7E -ÿ]/g, '');
}
function build(bk, u, lang, bookId){
  var doc = new window.jspdf.jsPDF({unit:'mm', format:'a4', compress:true});
  var W = 210, H = 297, M = 18, CW = W - 2 * M, LH = 4.6, BOT = H - 22;
  var C = {paper:[243,238,229], ink:[36,32,28], ink2:[58,51,44], muted:[141,132,120], clay:[165,88,42], ember:[199,123,59],
    dark:[22,19,15], line:[212,199,179], light:[242,231,214], gold:[138,106,72]};
  var fill = function(c){ doc.setFillColor(c[0], c[1], c[2]); }, color = function(c){ doc.setTextColor(c[0], c[1], c[2]); }, stroke = function(c){ doc.setDrawColor(c[0], c[1], c[2]); };
  var CS = 0, y = 0, pages = 0;
  var tw = function(s){ return doc.getTextWidth(s) + CS * Math.max(0, s.length - 1); };
  var T = function(s, x, yy, al){
    s = tx(s);
    if(al === 'right') x -= tw(s); else if(al === 'center') x -= tw(s) / 2;
    doc.text(s, x, yy);
  };
  var font = function(f, stl, size, c, cs){ doc.setFont(f, stl); doc.setFontSize(size); color(c); CS = cs || 0; doc.setCharSpace(CS); };
  // mesura amb la mateixa lletra amb què es dibuixarà (si no, les línies es tallarien malament)
  var wrap = function(s, w, size){ font('helvetica', 'normal', size || 9.5, C.ink2); return doc.splitTextToSize(tx(plain(s)), w); };
  function orn(x, yy, w){
    var c = x + w / 2; stroke(C.ember); doc.setLineWidth(0.3);
    doc.line(x, yy, c - 6, yy); doc.line(c + 6, yy, x + w, yy);
    fill(C.ember); doc.circle(c - 4, yy, 0.55, 'F'); doc.circle(c + 4, yy, 0.55, 'F');
    doc.lines([[1.7, 1.7], [-1.7, 1.7], [-1.7, -1.7]], c, yy - 1.7, [1, 1], 'F', true);
  }
  function frame(dark){ stroke(dark ? [110,82,56] : [205,182,150]); doc.setLineWidth(0.2); doc.rect(8, 8, W - 16, H - 16); }
  function newPage(dark, chrome){
    if(pages) doc.addPage();
    pages++;
    fill(dark ? C.dark : C.paper); doc.rect(0, 0, W, H, 'F'); frame(dark);
    if(chrome){
      font('helvetica', 'bold', 6.5, C.gold, 1.2); T('LES PECES DEL FERRER', M, 15.5); T(bk.name.toUpperCase(), W - M, 15.5, 'right');
      font('helvetica', 'bold', 6, C.muted, 0.8); T(u.foot, M, H - 11.5);
      font('helvetica', 'bold', 9, C.clay, 0.5); T(String(pages), W - M, H - 11.5, 'right');
    }
    y = 28;
  }
  function need(h){ if(y + h > BOT) newPage(false, true); }
  // text amb salts de pàgina línia a línia
  function lines(arr, x, size, c, stl){
    font('helvetica', stl || 'normal', size, c);
    arr.forEach(function(l){ need(LH); T(l, x, y); y += LH; });
  }
  function label(s){ need(LH * 2); font('helvetica', 'bold', 6.5, C.gold, 1); T(s.toUpperCase(), M, y); y += 4; }

  // ---------- portada ----------
  newPage(true, false);
  font('helvetica', 'bold', 8, C.ember, 2.2); T('ANTONI MAS CASTELLTORT', W / 2, 62, 'center');
  orn(M + 30, 72, CW - 60);
  font('times', 'bold', 34, [240,228,206]);
  var tl = doc.splitTextToSize(tx(bk.sub), CW - 20), ty = 100;
  tl.forEach(function(l){ T(l, W / 2, ty, 'center'); ty += 14; });
  font('times', 'normal', 20, C.ember); var gl = doc.splitTextToSize(tx(bk.title), CW - 30);
  ty += 6; gl.forEach(function(l){ T(l, W / 2, ty, 'center'); ty += 10; });
  orn(M + 30, ty + 8, CW - 60);
  font('helvetica', 'bold', 7.5, [200,180,150], 1.6); T(u.cover.toUpperCase(), W / 2, ty + 22, 'center');
  var now = new Date(), ds = now.toLocaleDateString(lang === 'es' ? 'es-ES' : 'ca-ES', {day:'numeric', month:'long', year:'numeric'});
  font('helvetica', 'normal', 9, C.muted); T(u.edition + ' ' + ds, W / 2, H - 28, 'center');

  // ---------- pàgina d'índex (es dibuixa al final, quan se sàpiguen les pàgines) ----------
  newPage(false, true);
  var idxPage = pages, chPage = [];

  // ---------- contingut ----------
  newPage(false, true);
  font('helvetica', 'normal', 9.5, C.ink2);
  var introL = wrap(bk.intro, CW - 10);
  need(introL.length * LH + 10);
  fill(C.light); doc.rect(M, y - 4, CW, introL.length * LH + 6, 'F'); stroke(C.ember); doc.setLineWidth(0.6); doc.line(M, y - 4, M, y + introL.length * LH + 2);
  font('helvetica', 'normal', 9.5, C.ink2); introL.forEach(function(l){ T(l, M + 5, y + 0.5); y += LH; }); y += 8;

  bk.chapters.forEach(function(ch, ci){
    need(46); chPage[ci] = pages;
    if(ci) y += 6;
    font('times', 'bold', 26, C.clay); T(String(ci + 1), M, y + 7);
    font('times', 'bold', 17, C.ink); var cl = doc.splitTextToSize(tx(ch.t), CW - 16);
    cl.forEach(function(l, i){ T(l, M + 14, y + 6 + i * 7); });
    y += 8 + cl.length * 7 - 7 + 3; orn(M, y, CW); y += 8;
    ch.secs.forEach(function(s){
      need(30);
      fill(C.ember); doc.rect(M, y - 2.6, 1.6, 3.4, 'F');
      font('helvetica', 'bold', 11, C.ink); doc.splitTextToSize(tx(plain(s.h)), CW - 6).forEach(function(l){ need(6); T(l, M + 4, y); y += 5.4; });
      y += 1;
      if(s.p){ label(u.why); lines(wrap(s.p, CW), M, 9.5, C.ink2); y += 1.5; }
      if(s.w){ label(u.where); lines(wrap(s.w, CW), M, 9.5, C.ink2); y += 1.5; }
      if(s.s){
        label(u.steps);
        s.s.forEach(function(it, i){
          var ls = wrap(it, CW - 9); need(ls.length * LH + 1);
          font('helvetica', 'bold', 9.5, C.clay); T(String(i + 1) + '.', M + 1, y);
          font('helvetica', 'normal', 9.5, C.ink2); ls.forEach(function(l){ T(l, M + 8, y); y += LH; }); y += 0.8;
        });
        y += 1;
      }
      if(s.l){
        label(u.points);
        s.l.forEach(function(it){
          var ls = wrap(it, CW - 9); need(ls.length * LH + 1);
          fill(C.ember); doc.circle(M + 2, y - 1.2, 0.7, 'F');
          font('helvetica', 'normal', 9.5, C.ink2); ls.forEach(function(l){ T(l, M + 8, y); y += LH; }); y += 0.8;
        });
        y += 1;
      }
      if(s.c){
        font('helvetica', 'normal', 9, C.ink2);
        var cls = s.c.map(function(it){ return wrap(it, CW - 14, 9); });
        var n = cls.reduce(function(a, b){ return a + b.length; }, 0), hh = 9 + n * 4.4 + cls.length * 0.8;
        need(hh + 2);
        fill(C.light); doc.rect(M, y - 3, CW, hh, 'F'); fill(C.ember); doc.rect(M, y - 3, 1.2, hh, 'F');
        font('helvetica', 'bold', 6.5, C.clay, 1); T(u.care.toUpperCase(), M + 5, y + 0.5); y += 5;
        cls.forEach(function(ls){
          font('helvetica', 'normal', 9, C.ink2); ls.forEach(function(l, i){ T((i ? '' : '- ') + l, M + (i ? 8 : 6), y); y += 4.4; }); y += 0.8;
        });
        y += 3;
      }
      y += 5;
    });
  });

  // ---------- índex ----------
  doc.setPage(idxPage);
  font('times', 'bold', 24, C.ink); T(u.index, M, 38); orn(M, 44, CW);
  var iy = 58;
  bk.chapters.forEach(function(ch, ci){
    font('times', 'bold', 15, C.clay); T(String(ci + 1), M, iy);
    font('helvetica', 'normal', 10.5, C.ink); var ls = doc.splitTextToSize(tx(ch.t), CW - 40); T(ls[0], M + 12, iy);
    font('helvetica', 'bold', 10, C.clay); var pw = String(chPage[ci]); T(pw, W - M, iy, 'right');
    var tx0 = M + 12 + doc.getTextWidth(tx(ls[0])) + 3, tx1 = W - M - doc.getTextWidth(pw) - 3;
    stroke(C.line); doc.setLineDashPattern([0.4, 1.2], 0); doc.setLineWidth(0.25); if(tx1 > tx0) doc.line(tx0, iy, tx1, iy); doc.setLineDashPattern([], 0);
    iy += 11;
  });
  doc.setCharSpace(0);
  return {blob: doc.output('blob'), pages: pages};
}

function downloadPdf(){
  if(st.busy) return;
  var a = st.api, u = U(), bk = B(), btn = document.getElementById('tutPdfBtn'), box = document.getElementById('tutPdf');
  var lang = st.lang, bookId = st.book;
  st.busy = true; btn.disabled = true; btn.textContent = u.pdfBusy; box.innerHTML = '';
  a.loadJsPDF().then(function(){
    var r = build(bk, u, lang, bookId);
    var name = 'les-peces-del-ferrer_tutorial-' + (bookId === 'editor' ? 'editor' : 'familia') + '_' + lang + '.pdf';
    var file = null; try{ file = new File([r.blob], name, {type:'application/pdf'}); }catch(e){}
    var canShare = !!(file && navigator.canShare && navigator.canShare({files:[file]}));
    box.innerHTML = '<p class="bulknote">' + u.pdfDone + ' · ' + r.pages + ' ' + (lang === 'es' ? 'páginas' : 'pàgines') + '</p>' +
      (canShare ? '<button type="button" class="save" id="tutShare">' + u.share + '</button>' : '') +
      '<button type="button" class="save' + (canShare ? ' ghost' : '') + '" id="tutSave">' + u.save + '</button>';
    if(canShare) document.getElementById('tutShare').addEventListener('click', function(){
      navigator.share({files:[file], title: bk.title}).catch(function(e){ if(!e || e.name !== 'AbortError') a.saveBlob(name, r.blob); });
    });
    document.getElementById('tutSave').addEventListener('click', function(){ a.saveBlob(name, r.blob); a.toast(u.saved); });
  }).catch(function(){
    box.innerHTML = '<p class="bulknote">' + esc(u.err) + '</p>';
  }).then(function(){ st.busy = false; btn.disabled = false; btn.textContent = u.pdf; });
}

window.Tutorials = {
  open: function(api){
    css(); st.api = api;
    var bl = books();
    if(bl.indexOf(st.book) < 0 || !st.touched){ st.book = bl[0]; st.touched = true; }
    st.lang = api.lang() === 'es' ? 'es' : 'ca';
    api.enter(); render(); api.sbody.scrollTop = 0; api.stagger(null); api.show();
  },
  build: build   // per a proves
};
})();
