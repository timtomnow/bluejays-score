// Minimal service worker for Blue Jays Score.
//
// Its job is twofold:
//   1. Satisfy the PWA install criteria (a registered SW with a fetch handler)
//      so Android browsers offer "Install app" rather than a plain shortcut.
//   2. Provide a basic offline fallback for the app shell and the in-app help
//      docs, without ever caching live score data (those requests always go
//      straight to the network — the MLB stats API is a cross-origin feed).
//
// Bump CACHE_VERSION whenever the shell files below change, so old caches are
// dropped on the next visit.
const CACHE_VERSION = 'bluejays-score-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './docs/help/index.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only ever serve the app's own GET requests from cache. Everything else —
  // notably the cross-origin MLB stats API score feed — is always network-only
  // so scores are never stale or cached.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
    return;
  }

  // Network-first for our own files, falling back to cache when offline.
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
  );
});
