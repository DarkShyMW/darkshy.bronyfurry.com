const CACHE_NAME = 'DarkShy-Cache';

// Add whichever assets you want to precache here:
const PRECACHE_ASSETS = [
    '/img/',
    '/css/'
]

// Listener for the install event - precaches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});
