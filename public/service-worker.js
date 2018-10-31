var CACHE_NAME = 'y2n-firebase-v1';
var urlsToCache = [
  '/',
  '/assets/js/index.js',
  '/manifest.json',
  '/images/my-foto.jpg',
  '/images/json.png',
  '/project1/_assets/js/calculator.js',
  '/project1/_assets/css/calculator.css',
  '/project1/images/calculator.ico',
  '/project2/images/icon-maps.png',
  '/project2/leaflet/leaflet.js',
  '/projfetch/data/peta.json',
  '/projfetch/js/peta.js',
  '/projfetch/images/karang-resik-tasik.jpg',
  '/projfetch/images/pasir_krisik.jpg',
  '/projfetch/images/situ-gede.jpg',
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
                    return cacheName.startsWith('y2nmws-ec474-') && cacheName != CACHE_NAME;
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
              return caches.open(CACHE_NAME).then(function(cache) {
                  cache.put(event.request, response.clone());
                  return response;
              });
          })
      })
  );
      
});

