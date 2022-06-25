'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ad913d2ee5e2a7705b7d0663ecda73e1",
"assets/assets/images/1.jpeg": "139e585c64714c0593fbb8ca3f088163",
"assets/assets/images/10.jpeg": "7e9522f29078f7ffd057e171dba34c1e",
"assets/assets/images/111.png": "ce9cbc73471c37da5c75a0e021550723",
"assets/assets/images/2.jpeg": "6bec36115632c2a359af621999f18d97",
"assets/assets/images/222.png": "297588a0db602340fc727809eb279195",
"assets/assets/images/3.jpeg": "cb16f11ca731c3035a99a8d83157fb8e",
"assets/assets/images/333.png": "ff3eabcd5db011cebac6ad1131b660de",
"assets/assets/images/4.jpeg": "6f0eb4f91b2d942612af6918d7d4ec6c",
"assets/assets/images/444.png": "45716065e96059875f4e94545417d27f",
"assets/assets/images/5.jpeg": "92d4f9bd545d73c529d761aa96069138",
"assets/assets/images/555.png": "7abac01d5d685d93e77f8ff198cdb376",
"assets/assets/images/6.jpeg": "c7b22c9dce283d8b26002be28776458e",
"assets/assets/images/666.png": "3991d4a501d0ab7f6892776685a27714",
"assets/assets/images/7.jpeg": "973b87a94110514cdb5246f24ca3db03",
"assets/assets/images/8.jpeg": "d28164e6386a03953de5d3386c586882",
"assets/assets/images/9.jpeg": "999890ed8aef2fec77f7b24dec02e327",
"assets/assets/images/a1.jpeg": "fcb8ecef1f377b0e6c80905c296021aa",
"assets/assets/images/a10.jpeg": "fc01734270a634e2f8f1f741372dd2a6",
"assets/assets/images/a11.jpeg": "dc464993b82eaf28f334e0ecb61b9501",
"assets/assets/images/a12.jpeg": "76976482ab2cb0409a8fa8a810f1bb72",
"assets/assets/images/a13.jpeg": "3eab4c321cfcf8635e1d3efe3f3c94f2",
"assets/assets/images/a14.jpeg": "06d926ead43f36e202c815122ad01e19",
"assets/assets/images/a15.jpeg": "78554f9092d566a449e2dea7e6e326d1",
"assets/assets/images/a16.jpeg": "3f4627a90d433c9fb90c563472b6fd91",
"assets/assets/images/a17.jpeg": "927a07cb92eb9751ca38b60094ea4519",
"assets/assets/images/a19.jpeg": "a7a6adabb6be11b915d72d2be1c41491",
"assets/assets/images/a2.jpeg": "9e31764713251ba77aec841fcb9e40f6",
"assets/assets/images/a20.jpeg": "afff10d0ab29b34768d22638b56db54e",
"assets/assets/images/a3.jpeg": "ea560231cd9044be8eded96dd7bba3f7",
"assets/assets/images/a4.jpeg": "73ea46713cec8267dfeef901f7c48a45",
"assets/assets/images/a5.jpeg": "cac62cb2a5994405abfd3fdf2846b081",
"assets/assets/images/a6.jpeg": "931b32ddc061dfdc4bc905dc40075b38",
"assets/assets/images/a7.jpeg": "157ba71de7fb1271db13ae5090c119cc",
"assets/assets/images/a8.jpeg": "dc8ae2030d1a3f24711e0a4b0b6d6fba",
"assets/assets/images/a9.jpeg": "6fbdb6a01df96c98e3c763b316a91053",
"assets/assets/images/baner.jpeg": "14f4802404e107fb92dc24a31194cd6d",
"assets/assets/images/baner.png": "c7dc98722ee606aa6b74f94026d89687",
"assets/assets/images/baner1.png": "0e84b569074e34ce7d3bd1c5c3683dbd",
"assets/assets/images/baner2.png": "d79290cef97219de62b5f98dcd21c012",
"assets/assets/images/baner3.png": "6f243f0ea7a0c1ad805f552201c1935e",
"assets/assets/images/baner4.png": "ff1e07355fefc31b36cf7e59d875e2af",
"assets/assets/images/baner5.png": "08d4b295cfd57faa33d9530bdc3d2a01",
"assets/assets/images/baner6.png": "2654638555c48bb40df05c502d4d3348",
"assets/assets/images/caixa.png": "7b7a667d97fa762f85cf1fd4f87d9ae0",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/icon.jpeg": "07f07da948611c887f8b493387f3f56b",
"assets/assets/images/icons.png": "9ae94f5ea4a28e213a2b5fccca40837b",
"assets/assets/images/mercado.png": "a67613814b3b14ba44bfeea516d6b18f",
"assets/assets/images/newbanner.jpeg": "805cea3496fbff889e79315a336e910e",
"assets/assets/images/pic.png": "21081a2fec1b4483b1299e39463f3d05",
"assets/assets/images/pix.png": "fb1598a5d0e925ff56f80da04004ebbc",
"assets/FontManifest.json": "e034dbeaf8018937750c2e58d7d17dcc",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "436af03fdd5067f0763113bc6d78b1a0",
"assets/packages/ant_icons/lib/icons/ant.ttf": "ea823ee1ad8c6c7b1b83dfe7d074bed4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "9ae94f5ea4a28e213a2b5fccca40837b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "106bcc740b174e0ea7561471a267032b",
"/": "106bcc740b174e0ea7561471a267032b",
"main.dart.js": "842476e2e6e3aaaadd5a37ee2da2f407",
"manifest.json": "48024f1dd0cdc5d45d64e83070545805",
"version.json": "704ee28bcb2a08f4c4cbb09cb2fccb47"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
