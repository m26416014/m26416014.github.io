self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
          '/section.html',
          '/offline.html',
          '/manifest.json',
          '/bootstrap/js/bootstrap.min.js',
          '/bootstrap/css/bootstrap.min.css',
          '/js/jquery.min.js',
          '/favicon.ico',
          '/img/logo.png',
          '/img/icon.png',
          '/img/icon-192.png',
          '/img/icon-512.png'
        // etc
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});