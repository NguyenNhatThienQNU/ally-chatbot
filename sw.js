/* Service worker của ứng dụng ALLY: cho phép cài đặt trên Android & iOS và dùng khi không có mạng. */
const VERSION = 'ally-v1.1.0';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './du-lieu/kho-du-lieu.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './fonts/baloo-2-vietnamese-700-normal.woff2',
  './fonts/baloo-2-latin-700-normal.woff2',
  './fonts/baloo-2-vietnamese-800-normal.woff2',
  './fonts/baloo-2-latin-800-normal.woff2',
  './fonts/be-vietnam-pro-vietnamese-400-normal.woff2',
  './fonts/be-vietnam-pro-latin-400-normal.woff2',
  './fonts/be-vietnam-pro-vietnamese-500-normal.woff2',
  './fonts/be-vietnam-pro-latin-500-normal.woff2',
  './fonts/be-vietnam-pro-vietnamese-600-normal.woff2',
  './fonts/be-vietnam-pro-latin-600-normal.woff2',
  './fonts/be-vietnam-pro-vietnamese-700-normal.woff2',
  './fonts/be-vietnam-pro-latin-700-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      .then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => (k.startsWith('ally-') || k.startsWith('banan-')) && k !== VERSION && k !== 'ally-fonts').map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function networkFirst(req, fallbackUrl) {
  return fetch(req)
    .then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    })
    .catch(() => caches.match(req).then((hit) => hit || (fallbackUrl ? caches.match(fallbackUrl) : undefined)));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // Trang chính và dữ liệu: ưu tiên mạng để luôn có bản mới, mất mạng thì dùng bản đã lưu
    if (req.mode === 'navigate') { event.respondWith(networkFirst(req, './index.html')); return; }
    if (url.pathname.endsWith('.json') || url.pathname.endsWith('.webmanifest')) { event.respondWith(networkFirst(req)); return; }
    // Ảnh, biểu tượng: ưu tiên bản đã lưu
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    })));
    return;
  }

  // Phông chữ Google: lưu lại để dùng khi không có mạng
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.open('ally-fonts').then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => { c.put(req, res.clone()); return res; }))));
  }
});
