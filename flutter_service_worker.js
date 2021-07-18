'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/assets/images/headerimage.jpg": "99af299686c235f1ef0719377e0d6c16",
"assets/AssetManifest.json": "20cb2677aeee47e6a92beda8fe9a179f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "fda82da736c33a8871c86edab5cd5835",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/refs/heads/main": "8951e34125db8f2b5a6ebeea585c4a46",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/main": "68c27f75fe6d018185fb1438b4a7c8d7",
".git/logs/HEAD": "68c27f75fe6d018185fb1438b4a7c8d7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/94/fa81f2885456499ee6fb08952b4228c5f1cefb": "e398652ea7258b6f6e820594e58e4f56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ff/567cd05b907af9d4940e23e4a04a19f85f43a2": "2cd7fb052345b62d7622159e82b506f5",
".git/objects/13/a236907762c416f8d791f9fc65504968daabcb": "bc0acde95b436a611b03582058f4cd1b",
".git/objects/75/e1d5affab12ab19db549dabb8b08c515cabb64": "1025a8a83800a7ea95f70a987a668f82",
".git/index": "c4cf1fcafb8266181b6bde459051ff25",
".git/COMMIT_EDITMSG": "fa0196d16cbd5bf80e0c077ed6e96438",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
"version.json": "4ffaee577a42fc0e6afb382be53d012a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fltest/assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"fltest/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"fltest/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"fltest/assets/lib/assets/images/headerimage.jpg": "99af299686c235f1ef0719377e0d6c16",
"fltest/assets/AssetManifest.json": "20cb2677aeee47e6a92beda8fe9a179f",
"fltest/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"fltest/main.dart.js": "b9fff18adc0a52c4d96c4ecc20ac66cd",
"fltest/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"fltest/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"fltest/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"fltest/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"fltest/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"fltest/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"fltest/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"fltest/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"fltest/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"fltest/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"fltest/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"fltest/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"fltest/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"fltest/.git/refs/remotes/origin/main": "1ea66813bb007b17faaa72e899f36118",
"fltest/.git/refs/heads/main": "1ea66813bb007b17faaa72e899f36118",
"fltest/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"fltest/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"fltest/.git/FETCH_HEAD": "cd7861f69ca2327a7d28be682b85fc1d",
"fltest/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"fltest/.git/logs/refs/remotes/origin/HEAD": "6f834b05d606ca8e88d5f69fb237090d",
"fltest/.git/logs/refs/remotes/origin/main": "f876a47a5a68fd71949add4e37a27a03",
"fltest/.git/logs/refs/heads/main": "4f4debb8c05ecfa42888cfe66c675b31",
"fltest/.git/logs/HEAD": "4f4debb8c05ecfa42888cfe66c675b31",
"fltest/.git/objects/c6/e9b2a70fa2af849a22fa5e98c1494658d6cc63": "2ef0f349a8688473198111c22d891055",
"fltest/.git/objects/4b/11b213eb1ee4e7c7dab25353dff0c3109ac9b8": "3ef2fa8ca871fda122803017941f7f0d",
"fltest/.git/objects/37/a52db8801ed7bbd405046cdbf6cb3b1390e1e3": "1b16257b089ac0946860e5f49e8ba0b8",
"fltest/.git/objects/pack/pack-87d096ed9bd8cbb646f8291cda8b29479a530ca8.idx": "2dd2800f9cff866f02e6d50eb24b8769",
"fltest/.git/objects/pack/pack-87d096ed9bd8cbb646f8291cda8b29479a530ca8.pack": "8bc72f732538c676e547a1d34fc1d16f",
"fltest/.git/objects/b7/e995f834ed12e4322fb630f2f82fba7f19cbea": "dcaa22c9f70d620befec061a3a0c3932",
"fltest/.git/objects/42/8af728bded07f4537509087e03c45cb7d3e6ea": "44f83231a64bde9ed83d0fd39972f5aa",
"fltest/.git/objects/62/184b544692695b3277e68b84d0e88ccf3e9253": "f5d11f31f66d96a8e1f747274d6bcaf1",
"fltest/.git/objects/ac/cf62b3d99e9a4abf5a55d948cfcc1ab943b30a": "b3c43bde6f5e5f86502af01fc213f468",
"fltest/.git/objects/7d/0bfe8867154dbbc0d5b49638ca2238b7125601": "233ba60007fd78caad29a9900248307e",
"fltest/.git/objects/86/32cc2ac103a84fa91da134ce059fe94a1f8e02": "756e0fcb727cacd16d1182cc9eae271b",
"fltest/.git/objects/9c/e5fdc02dcff587c0119401a1211b1a9311f168": "ead4a595a3f3c40de9f8322f2a6d7ce8",
"fltest/.git/objects/da/a87fc649196c0948eceedbb39a67a9c4d2d3f6": "bd00859c133a1faec4689ff047d73974",
"fltest/.git/objects/68/010b17a570f0e3f1608765574fe26b282a356f": "1d1931f16731a85c4ad695b10fc6e170",
"fltest/.git/objects/b4/fe54ce0ee8a69fad04edcc7c510dcaeb42ad85": "cfcad423de98a6c27d3d6493aa9231dd",
"fltest/.git/objects/b4/4b8dea93338d680af5c9403bdf0d98411cc61d": "f03fe467ac13d3e039386c2e0f7d2024",
"fltest/.git/objects/53/50a0ad736198359ab8fa1ac354319e203b12f6": "4bf5b52a18f121469576b76afa3bbd17",
"fltest/.git/objects/18/23bcbb4b86abf1cf6f1ff6ffb81d0a2cd742d2": "fe8550c1d795432a3ee7cd2c2718a9ce",
"fltest/.git/ORIG_HEAD": "7400d495dcf751487e786034d89958c2",
"fltest/.git/packed-refs": "e8206104c666e14d5588a4387d552dbd",
"fltest/.git/index": "9f8dc474b3a1be99d86a43e4b103d82b",
"fltest/.git/COMMIT_EDITMSG": "ebae02fae1cdbf9f01a4ec8332b15df8",
"fltest/.git/config": "ed80df4d43b232f3ab22a539192b06e7",
"fltest/version.json": "4ffaee577a42fc0e6afb382be53d012a",
"fltest/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"fltest/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"fltest/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fltest/manifest.json": "7bf8dad8b7e6c77566e8d0ddecda66d4",
"fltest/index.html": "d068ec811fcf6f0cf79612ddd314730c",
"/": "484fef266140c1ecac1515d38809d283",
"manifest.json": "7bf8dad8b7e6c77566e8d0ddecda66d4",
"index.html": "484fef266140c1ecac1515d38809d283"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
