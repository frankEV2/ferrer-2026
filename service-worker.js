// Service worker — xarxa primer (així les actualitzacions arriben i "arrossegar per
// refrescar" carrega la versió nova) i, si no hi ha connexió, l'app es serveix de la caché.
// Puja la versió (CACHE_NAME) cada cop que publiquis canvis.
const CACHE_NAME = 'inventari-escultures-v22';
const APP_SHELL = [
  './',
  './index.html',
  './fitxa.html',
  './portada.jpg',
  './firebase-bundle.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png'
];
// Únics orígens externs que es poden desar a la caché (tipografies).
// Mai es toca Firebase/Firestore: va per xarxa i té la seva pròpia caché.
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

function fromCache(req) {
  return caches.match(req).then((hit) => hit || caches.match('./index.html'));
}

// Xarxa primer; si triga més de 4 s o falla, caixa de la caché.
function networkFirst(req) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (res) => { if (!settled && res) { settled = true; resolve(res); } };
    const timer = setTimeout(() => { fromCache(req).then(finish); }, 4000);
    fetch(req).then((res) => {
      clearTimeout(timer);
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
      }
      finish(res);
    }).catch(() => {
      clearTimeout(timer);
      fromCache(req).then((hit) => finish(hit || Response.error()));
    });
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(req));
    return;
  }
  if (FONT_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      }))
    );
  }
  // Qualsevol altre origen (Firebase, etc.): no s'intercepta.
});
