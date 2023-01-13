var cacheName = 'darkshy-cache-v1';
var assetsToCache = ['css/style.css'];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(assetsToCache);
            })
    );
});