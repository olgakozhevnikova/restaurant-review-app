self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurant-static-v1').then(function(cache) {
			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/styles.css',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'img/1.webp',
				'img/2.webp',
				'img/3.webp',
				'img/4.webp',
				'img/5.webp',
				'img/6.webp',
				'img/7.webp',
				'img/8.webp',
				'img/9.webp',
				'img/10.webp'
			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});