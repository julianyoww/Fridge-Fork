const CACHE = 'fridge-fork-v8';
const ROOT = new URL('./', self.location.href);
const FILES = ['./','index.html','style.css?v=8','app.js?v=8','theme.js?v=8','install.js?v=8','library.js?v=8','calendar.js?v=8','shopping.js?v=8','matching.js?v=8','recipes.js?v=8','sourcing-policy.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(file => new URL(file, ROOT).href))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('fridge-fork-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match(new URL('index.html', ROOT).href)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
