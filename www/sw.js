self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hostly-v1').then(cache => {
      cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './css/styles.css'
      ]).catch(err => {
        console.log('Cache addAll error (non-critical):', err);
      });
      return Promise.resolve();
    }).catch(err => {
      console.log('Cache open error:', err);
      return Promise.resolve();
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (!response || response.status !== 200) {
          return response;
        }
        const responseClone = response.clone();
        caches.open('hostly-v1').then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(err => {
        return caches.match(event.request)
          .then(response => {
            return response || new Response('Offline - Resource not cached', { status: 503 });
          })
          .catch(cacheErr => {
            console.log('Service Worker error:', cacheErr);
            return new Response('Service Unavailable', { status: 503 });
          });
      })
  );
});
