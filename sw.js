var CACHE_PREFIX = 'gogodino-quiz-';
var CACHE_NAME = CACHE_PREFIX + 'v5';
var PRECACHE_URLS = [
    '/gogodino/',
    '/gogodino/index.html',
    '/gogodino/manifest.json',
    '/gogodino/css/style.css',
    '/gogodino/js/main.js',
    '/gogodino/js/games/gogodino.js',
    '/gogodino/favicon.svg',
    '/gogodino/icon-192x192.png',
    '/gogodino/icon-512x512.png',
    '/gogodino/icon-maskable-512.png'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(PRECACHE_URLS);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function (e) {
    // 주의: Cache Storage는 origin(도메인) 전체에서 공유되며 서비스워커 scope와 무관하다.
    // 접두사(CACHE_PREFIX)로 걸러내지 않으면 같은 도메인의 다른 앱 캐시까지
    // 여기서 지워버려 두 앱의 설치/오프라인 캐시가 서로 충돌하게 된다.
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (k) { return k.indexOf(CACHE_PREFIX) === 0 && k !== CACHE_NAME; })
                    .map(function (k) { return caches.delete(k); })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function (e) {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        caches.match(e.request).then(function (cached) {
            if (cached) return cached;
            return fetch(e.request).then(function (response) {
                if (response && response.status === 200 && response.type === 'basic') {
                    var clone = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(e.request, clone);
                    });
                }
                return response;
            }).catch(function () {
                if (e.request.mode === 'navigate') return caches.match('/gogodino/index.html');
            });
        })
    );
});
