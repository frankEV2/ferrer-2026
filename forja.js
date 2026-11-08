/* Les peces del ferrer — preferències i efectes visuals de forja.
   Tot és opcional i lleuger: en mòbils, amb «menys moviment» del sistema o amb els efectes
   desactivats a Preferències, no s'anima res pesat. No toca cap dada. */
(function(){
"use strict";
var KEY = 'inv-prefs';
var DEF = {lang:'ca', theme:'auto', fs:'100', fx:'auto', sound:'off'};
var P = {};
try{ P = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }catch(e){ P = {}; }
for(var k in DEF) if(!(k in P)) P[k] = DEF[k];
var root = document.documentElement;
var listeners = [];

function apply(){
  if(P.theme === 'light' || P.theme === 'dark') root.setAttribute('data-theme', P.theme); else root.removeAttribute('data-theme');
  root.style.fontSize = (parseInt(P.fs,10) || 100) + '%';
  root.lang = P.lang === 'es' ? 'es' : 'ca';
  root.classList.toggle('fx', fxOn());
  root.classList.toggle('fxoff', !fxOn());
}
function reduced(){ return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
function finePointer(){ return window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches; }
function fxOn(){
  if(P.fx === 'off') return false;
  if(P.fx === 'on') return true;
  return !reduced() && finePointer() && window.innerWidth >= 760;   // automàtic: només en ordinador
}
window.Prefs = {
  get: function(){ return Object.assign({}, P); },
  set: function(k, v){ P[k] = v; try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} apply(); listeners.forEach(function(f){ f(k, v); }); },
  on: function(f){ listeners.push(f); },
  fxOn: fxOn
};
apply();

/* ================= efectes ================= */
var Forja = window.Forja = {};

/* ---- so d'enclusa (sintetitzat, sense fitxers; desactivat per defecte) ---- */
var actx = null, lastClang = 0;
Forja.clang = function(){
  if(P.sound !== 'on') return;
  var now = Date.now(); if(now - lastClang < 250) return; lastClang = now;
  try{
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if(actx.state === 'suspended') actx.resume();
    var t = actx.currentTime, out = actx.createGain();
    out.gain.value = 0.22; out.connect(actx.destination);
    [[523,1],[1414,.55],[2186,.35],[3170,.22],[4390,.12]].forEach(function(f){   // parcials inharmònics de metall
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.value = f[0] * (0.98 + Math.random()*0.04);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(f[1], t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35 + 1.1*f[1]);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + 1.6);
    });
    var n = actx.createBuffer(1, actx.sampleRate*0.05, actx.sampleRate), d = n.getChannelData(0);   // cop inicial
    for(var i=0;i<d.length;i++) d[i] = (Math.random()*2-1) * Math.pow(1 - i/d.length, 3);
    var src = actx.createBufferSource(), hp = actx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 1800; src.buffer = n; src.connect(hp); hp.connect(out); src.start(t);
  }catch(e){}
};

/* ---- línia del temps: els anys s'encenen en entrar a la pantalla ---- */
Forja.timeline = function(scroller){
  var els = scroller.querySelectorAll('.tly');
  if(!('IntersectionObserver' in window)){ Array.prototype.forEach.call(els, function(e){ e.classList.add('hot'); }); return; }
  var io = new IntersectionObserver(function(en){
    en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('hot'); io.unobserve(x.target); } });
  }, {root:scroller, threshold:0.6});
  Array.prototype.forEach.call(els, function(e){ io.observe(e); });
};

/* ---- visor de fotos a pantalla completa amb zoom ---- */
Forja.viewer = function(src, list){
  var v = document.getElementById('viewer');
  if(!v){
    v = document.createElement('div'); v.id = 'viewer'; v.className = 'viewer';
    v.setAttribute('role','dialog'); v.setAttribute('aria-modal','true'); v.setAttribute('aria-label','Fotografia');
    v.innerHTML = '<div class="vw-bg"></div><img class="vw-img" alt=""><button class="vw-x" aria-label="Tanca">✕</button>'+
      '<button class="vw-nav vw-p" aria-label="Anterior">‹</button><button class="vw-nav vw-n" aria-label="Següent">›</button><p class="vw-hint">Doble clic o pessic per ampliar</p>';
    document.body.appendChild(v);
  }
  var img = v.querySelector('.vw-img'), bg = v.querySelector('.vw-bg');
  var idx = Math.max(0, list.indexOf(src)), s = 1, x = 0, y = 0, ptrs = {}, start = null;
  function set(){ img.style.transform = 'translate('+x+'px,'+y+'px) scale('+s+')'; img.style.cursor = s > 1 ? 'grab' : 'zoom-in'; }
  function load(i){ idx = (i + list.length) % list.length; img.src = list[idx]; bg.style.backgroundImage = 'url("'+list[idx]+'")'; s = 1; x = y = 0; set();
    v.querySelector('.vw-p').hidden = v.querySelector('.vw-n').hidden = list.length < 2; }
  function close(){ v.classList.remove('on'); setTimeout(function(){ v.hidden = true; }, 250); document.removeEventListener('keydown', key); }
  function key(e){ if(e.key === 'Escape') close(); else if(e.key === 'ArrowRight') load(idx+1); else if(e.key === 'ArrowLeft') load(idx-1); }
  v.querySelector('.vw-x').onclick = close;
  v.querySelector('.vw-p').onclick = function(){ load(idx-1); };
  v.querySelector('.vw-n').onclick = function(){ load(idx+1); };
  bg.onclick = close;
  img.ondblclick = function(e){ if(s > 1){ s = 1; x = y = 0; } else { s = 2.5; var r = img.getBoundingClientRect(); x = (r.left + r.width/2 - e.clientX)*1.5; y = (r.top + r.height/2 - e.clientY)*1.5; } set(); };
  v.onwheel = function(e){ e.preventDefault(); s = Math.min(6, Math.max(1, s * (e.deltaY < 0 ? 1.15 : 0.87))); if(s === 1){ x = y = 0; } set(); };
  img.onpointerdown = function(e){ img.setPointerCapture(e.pointerId); ptrs[e.pointerId] = [e.clientX, e.clientY]; start = {x:x, y:y, s:s, p:JSON.parse(JSON.stringify(ptrs))}; };
  img.onpointermove = function(e){
    if(!(e.pointerId in ptrs) || !start) return;
    ptrs[e.pointerId] = [e.clientX, e.clientY];
    var ids = Object.keys(ptrs);
    if(ids.length >= 2 && Object.keys(start.p).length >= 2){   // pessic
      var a = ptrs[ids[0]], b = ptrs[ids[1]], a0 = start.p[ids[0]] || a, b0 = start.p[ids[1]] || b;
      var d = Math.hypot(a[0]-b[0], a[1]-b[1]), d0 = Math.hypot(a0[0]-b0[0], a0[1]-b0[1]) || 1;
      s = Math.min(6, Math.max(1, start.s * d / d0));
    }else if(s > 1){
      var p0 = start.p[e.pointerId]; x = start.x + e.clientX - p0[0]; y = start.y + e.clientY - p0[1];
    }
    set();
  };
  img.onpointerup = img.onpointercancel = function(e){
    var p0 = start && start.p[e.pointerId];
    delete ptrs[e.pointerId];
    if(s === 1 && p0 && list.length > 1 && Object.keys(ptrs).length === 0){   // lliscar per canviar de foto
      var dx = e.clientX - p0[0]; if(Math.abs(dx) > 60) load(idx + (dx < 0 ? 1 : -1));
    }
    start = Object.keys(ptrs).length ? {x:x, y:y, s:s, p:JSON.parse(JSON.stringify(ptrs))} : null;
    if(s <= 1.02){ s = 1; x = y = 0; set(); }
  };
  load(idx);
  v.hidden = false; void v.offsetWidth; v.classList.add('on');
  document.addEventListener('keydown', key);
  v.querySelector('.vw-x').focus();
};

/* ---- espurnes (canvas), resplendor que segueix el cursor, inclinació 3D i paral·laxi ---- */
function init(){
  var body = document.body;
  var cv = document.createElement('canvas'); cv.className = 'embers'; cv.setAttribute('aria-hidden','true');
  body.insertBefore(cv, body.firstChild);
  var g = cv.getContext('2d'), W = 0, H = 0, DPR = 1, parts = [], running = false, raf = 0, lastT = 0;
  function size(){ DPR = Math.min(2, window.devicePixelRatio || 1); W = cv.width = Math.round(innerWidth*DPR); H = cv.height = Math.round(innerHeight*DPR); cv.style.width = innerWidth+'px'; cv.style.height = innerHeight+'px'; }
  function spawn(burst){
    var cx = burst ? W*(0.3 + Math.random()*0.4) : Math.random()*W;
    return {x:cx, y:H + Math.random()*20*DPR, vx:(Math.random()-.5)*(burst?2.4:.35)*DPR, vy:-(burst?(2+Math.random()*4.5):(.35+Math.random()*.9))*DPR,
      r:(burst?1+Math.random()*1.8:.7+Math.random()*1.6)*DPR, life:0, max:burst?60+Math.random()*60:260+Math.random()*320, w:Math.random()*6.28};
  }
  function target(){ return body.classList.contains('covered') ? 34 : (body.classList.contains('lock') ? 0 : 22); }
  function frame(t){
    raf = 0;
    if(!running) return;
    var dt = Math.min(3, (t - lastT)/16.7 || 1); lastT = t;
    g.clearRect(0,0,W,H);
    var want = target();
    while(parts.length < want && Math.random() < .25) parts.push(spawn(false));
    g.globalCompositeOperation = 'lighter';
    for(var i=parts.length-1;i>=0;i--){
      var p = parts[i]; p.life += dt; p.w += .05*dt;
      p.x += (p.vx + Math.sin(p.w)*.25*DPR)*dt; p.y += p.vy*dt; p.vy *= p.max < 130 ? .985 : 1;
      var k = 1 - p.life/p.max;
      if(k <= 0 || p.y < -10){ parts.splice(i,1); continue; }
      var a = Math.min(1, k*1.6), rr = p.r*(0.6 + k*0.6);
      var grd = g.createRadialGradient(p.x,p.y,0,p.x,p.y,rr*4);
      grd.addColorStop(0, 'rgba(255,214,150,'+a+')'); grd.addColorStop(.35, 'rgba(240,120,30,'+(a*.55)+')'); grd.addColorStop(1, 'rgba(200,60,10,0)');
      g.fillStyle = grd; g.beginPath(); g.arc(p.x,p.y,rr*4,0,6.283); g.fill();
    }
    g.globalCompositeOperation = 'source-over';
    if(parts.length || want) raf = requestAnimationFrame(frame); else running = false;
  }
  function start(){ if(running || !fxOn() || document.hidden) return; running = true; lastT = performance.now(); raf = requestAnimationFrame(frame); }
  function stop(){ running = false; if(raf) cancelAnimationFrame(raf); raf = 0; parts = []; g.clearRect(0,0,W,H); }
  Forja.burst = function(n){ if(!fxOn()) return; for(var i=0;i<(n||50);i++) parts.push(spawn(true)); start(); };
  size(); addEventListener('resize', function(){ size(); apply(); fxOn() ? start() : stop(); });
  document.addEventListener('visibilitychange', function(){ document.hidden ? stop() : start(); });
  new MutationObserver(function(){ if(fxOn()) start(); }).observe(body, {attributes:true, attributeFilter:['class']});
  window.Prefs.on(function(k){ if(k === 'fx'){ fxOn() ? start() : stop(); } });

  // entrada cinematogràfica de la portada: des de negre, amb espurnes
  var cover = document.getElementById('cover');
  if(cover && cover.style.display !== 'none' && body.classList.contains('covered')){
    cover.classList.add('intro');
    setTimeout(function(){ Forja.burst(70); }, 700);
  }
  start();

  // resplendor càlid que segueix el cursor + paral·laxi de la portada
  var mx = 50, my = 40, pend = false, photo = cover && cover.querySelector('.cv-photo');
  addEventListener('pointermove', function(e){
    if(!fxOn() || e.pointerType !== 'mouse') return;
    mx = e.clientX/innerWidth*100; my = e.clientY/innerHeight*100;
    if(pend) return; pend = true;
    requestAnimationFrame(function(){
      pend = false;
      root.style.setProperty('--mx', mx+'%'); root.style.setProperty('--my', my+'%');
      if(photo && body.classList.contains('covered')) photo.style.translate = ((50-mx)*0.22).toFixed(1)+'px '+((50-my)*0.16).toFixed(1)+'px';   // «translate» no xoca amb l'animació de zoom
    });
  }, {passive:true});

  // targetes amb inclinació 3D, reflex metàl·lic i halo
  var tilted = null;
  document.addEventListener('pointermove', function(e){
    if(!fxOn() || e.pointerType !== 'mouse') return;
    var c = e.target.closest && e.target.closest('.grid .card, .favrow .card');
    if(tilted && tilted !== c){ tilted.style.transform = ''; tilted.classList.remove('tilt'); tilted = null; }
    if(!c || document.body.classList.contains('sel') || c.closest('.v-list,.v-det')) return;
    var r = c.getBoundingClientRect(), px = (e.clientX - r.left)/r.width, py = (e.clientY - r.top)/r.height;
    c.classList.add('tilt'); tilted = c;
    c.style.transform = 'perspective(800px) rotateX('+((.5-py)*8).toFixed(2)+'deg) rotateY('+((px-.5)*10).toFixed(2)+'deg) translateY(-4px)';
    c.style.setProperty('--gx', (px*100).toFixed(1)+'%'); c.style.setProperty('--gy', (py*100).toFixed(1)+'%');
  }, {passive:true});
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
