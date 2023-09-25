'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "da064fd3792e102aef86eaba24e12615",
"index.html": "582377c28fec4eaa29ce30aa3dc65f26",
"/": "582377c28fec4eaa29ce30aa3dc65f26",
"firebase-messaging-sw.js": "d2c5e9791e41a40b65297b1083d94958",
"main.dart.js": "7569c9ad74c029bd39c6670e0fb78e09",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "535a4f38c1ea7ac7230845d4d0538c99",
"service-worker.js": "d8155836b21b8afca886698c95825058",
"assets/AssetManifest.json": "7792fb91ef7b3eb12f2b25fcecc5fa5a",
"assets/NOTICES": "00eeb692cf4b3c8da554def41b4acaa3",
"assets/FontManifest.json": "a71c1092b4b03ef0790f6b50f5d4fa74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "fc5fb6d614610bd7a17cce228a181301",
"assets/fonts/MaterialIcons-Regular.otf": "159357757e83b629c297e0e4b09f7a12",
"assets/assets/images/login_logo.png": "9bee5e965cdf80cb9f9665935c60af83",
"assets/assets/images/file_image.png": "2f7315a21bd11fb018cb3dd101660909",
"assets/assets/images/card_shade.png": "c7a940035118301774596a9953a1e488",
"assets/assets/images/png.png": "f232e7e445e91d588b515bc5458b378e",
"assets/assets/images/error.png": "cd7fa540d7b7b817de2c9ef7f2fd1dd5",
"assets/assets/images/logo.png": "df8e8b770d376256c86684de936e59f4",
"assets/assets/images/jpg.png": "a8f2b79c134b9bbee7d8cddac55a029d",
"assets/assets/images/profile.png": "e35c8f407260bc47f4ea95031fdf9ff0",
"assets/assets/images/pdf.png": "f46cd2c393ae82cd8f76d528c73008f9",
"assets/assets/images/tutorial_1.png": "7dc3cf30ad96b995b558bc097baf28c5",
"assets/assets/images/splash_logo.png": "1bb2c8b7d686080b7a2361a3a5a8cc3d",
"assets/assets/web/login_background_web.png": "58e131345f7d713716c8b1dd68500685",
"assets/assets/web/logo_web.png": "df8e8b770d376256c86684de936e59f4",
"assets/assets/icons/ic_allocated_order.png": "5b4d03d0bec4399f92951562237a063a",
"assets/assets/icons/ic_nav_dashboard.png": "a6e0a90fb4bc6b332541349291840c53",
"assets/assets/icons/ic_nav_map.png": "5eaba8d4d33a2d49c33103cd8b4ec1e2",
"assets/assets/icons/ic_executing.png": "1154617ffd9e550a9d243ed1e6f2da66",
"assets/assets/icons/ic_doller.png": "9ce809021a23ce6f670c1fc71c1983b1",
"assets/assets/icons/ic_nav_bell.png": "2b5306fc3cc257a99ec395a2c6387156",
"assets/assets/icons/ic_reopen_bottom.png": "d8637821b02e5fa3aa06c490aa67d41a",
"assets/assets/icons/ic_route_more.png": "9f2066cbcc543697bd7ba188f6e75577",
"assets/assets/icons/ic_marker.png": "66020641651f6c4b894c1199528d442c",
"assets/assets/icons/ic_image.png": "af457b747d28acd5ce61b72f257d3043",
"assets/assets/icons/ic_apprved_credit.png": "5b4d03d0bec4399f92951562237a063a",
"assets/assets/icons/ic_status.png": "dd34ac9e5f3bc51137ad73902ed655c2",
"assets/assets/icons/ic_total_order.png": "a53bc6dd35654c93472af6573eb8ae93",
"assets/assets/icons/ic_fie_channel.png": "9598d7d3bac027e741bbd4f89767490b",
"assets/assets/icons/ic_total_products.png": "8acfa4428ef111e624ad943ebdec081b",
"assets/assets/icons/ic_open_in_map.png": "68b86b541269f32e5974b2345992dfa7",
"assets/assets/icons/ic_panding_order.png": "8af56f790899192c8ed6bb816dcbb405",
"assets/assets/icons/ic_add_sales.png": "6701d8515e7f7329a4624f6c0d74152b",
"assets/assets/icons/ic_total_retails.png": "6eb792e4289efb232387bbf55aeeea41",
"assets/assets/icons/ic_es.png": "d2fdbc585fe4649c2d161ae64192b8f4",
"assets/assets/icons/ic_nav_order.png": "fd6f5ff9ca4aa257e39351eeb4a67830",
"assets/assets/icons/locator.png": "7d07e7c5f83e7ee11dd385a3a663ee1a",
"assets/assets/icons/ic_reopen_bottom2.png": "5f02ed8f06a7807ba24cd37c250c4f03",
"assets/assets/icons/ic_more.png": "b28b54411dbcd6fa5dea1e68acbb9a38",
"assets/assets/icons/ic_execute.png": "a48bde741ad8b56f5b3537e49dfeaf65",
"assets/assets/icons/ic_search.png": "13dead6a6ef0c5e3fafce78563867d60",
"assets/assets/icons/ic_en.png": "208f677f9d6b9ddbf7d9404296afcfe5",
"assets/assets/icons/ic_house.png": "0abf250ad8c1d371a23b8c11981cb97a",
"assets/assets/icons/ic_decline.png": "f86fb2013bfaa5b4ffd0ea1b97a56d40",
"assets/assets/icons/ic_nav_stat.png": "a064ff983be2cadb8610b27fd4f3ab0d",
"assets/assets/icons/ic_sales_order.png": "9b70a60ef6d26e36baa620cb9d78a89a",
"assets/assets/icons/ic_total_panding_order.png": "5b4d03d0bec4399f92951562237a063a",
"assets/assets/icons/ic_approved_order.png": "9b70a60ef6d26e36baa620cb9d78a89a",
"assets/assets/icons/ic_mark_as_done.png": "f54023015f266da8f1c0eac7ed9b0c36",
"assets/assets/icons/ic_reopen.png": "dd1a52df85b4269eb8e85e9f124133f7",
"assets/assets/login_design/ellipse_8.png": "eb9a7b4230568256511f03487f274845",
"assets/assets/login_design/ellipse_9.png": "ef3206d662f444c88d7a66106f921773",
"assets/assets/login_design/ellipse_10.png": "b8f06facb558c96866fc125edb40eb9d",
"assets/assets/login_design/ellipse_11.png": "4e412f2d03eb2900f4acaa8dc4ec54bd",
"assets/assets/login_design/ic_login_bg.png": "cef80a88b26d416b430c10d064e45632",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
