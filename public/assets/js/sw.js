var CACHE_NAME = 'y2n-firebase-v1';
var urlsToCache = [
  '/',
  '/assets/js/index.js',
  '/assets/js/sw.js',
  'project1/_assets/js/calculator.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
// Lakukan aktifasi
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('y2nmws-ec474-') && cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

//response dari cache
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response){
          //console.log(response);
          return response || fetch(event.request).then(function(response) {
              return caches.open(staticCacheName).then(function(cache) {
                  cache.put(event.request, response.clone());
                  return response;
              });
          })
      })
  );
      
});

