/*
    Cache for Scope
*/
let staticCacheName = 'restaurant-cache';
let urlsToCache = [
  './',
  './index.html',
  './restaurant.html',
  './sw.js',
  './css/styles.css',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  './js/sw_reg.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

/*
    Activating Service Worker
*/

self.addEventListener('activate', (event)=>{
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(
                cacheNames.filter((cacheName)=>{
                    return cacheName.startsWith('restaurant-') &&
                    cacheName != staticCacheName;
                }).map((cacheName)=>{
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

/*
    Fetch Offline Viewing Content
*/

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true}).then((response)=>{
            return response || fetch(event.request);
        })
    );
});