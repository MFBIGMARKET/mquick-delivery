const CACHE_NAME = 'mquick-v1';
const ASSETS = [ '/', '/admin.html', '/packer.html', '/rider.html', '/track.html', '/manifest.json', '/icon-192.png', '/icon-512.png' ];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});