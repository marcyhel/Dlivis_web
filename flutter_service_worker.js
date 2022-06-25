'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8dbede64e45fb672f3ce8a44cfc93f22",
".git/config": "b74c52637eeaf9c86054dbc164e49aa4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9ccaaf92cb734d967ac09ef71c7bb4b",
".git/logs/refs/heads/master": "a9ccaaf92cb734d967ac09ef71c7bb4b",
".git/logs/refs/remotes/origin/master": "07e0e733d385bf1f16432c6502f11b10",
".git/objects/06/097167aac18a2ee1b8193da1ec7546a2588e3b": "c1860f842481022d796f46a23d1de8e6",
".git/objects/07/14d811a81f3cb1b94f64207aac359356bdd488": "a1253b5019e699a48954d6dbed5f00ec",
".git/objects/07/ba114cbc415ddd0512d4500ac9a7ca0b3a3e37": "473c660890d85a14ff743faed8bc7d93",
".git/objects/08/cd2de013290fbae80a07fc222bc11212505c5e": "74ba2a36e94e3973b33ca1ab55f6cff3",
".git/objects/0b/f069b67cf165c3e1a703c6613144b0f6635ad7": "79232e1f9f22aad60bff69fea9933867",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/c0b982be4994a6f563c942ef494b78d224e3db": "db023415f8d9e46d0c6a3fb0bb1c800e",
".git/objects/13/ce2de3ae74eb0ee33eed2cf1df28759dd4b844": "10f1a9d174069fe6169f6b47cd60e228",
".git/objects/15/7bc445d0f6def0ce970713a2ce7235d4b80f2a": "e09540e5b93a130635833c40ba600657",
".git/objects/17/268e428ee209efa5ba421fbf01ec0df422affb": "37929a31ce1e652ea0f4af29c4957711",
".git/objects/17/77252546b7eddac17fe4969619230dc33b5129": "8abdd3342cf29a20033cee6e498fe2ba",
".git/objects/18/3d5cb965bd71aa3987083406620ba33bf07365": "1598a6ed1ef491694d2a123e97acd213",
".git/objects/19/933ea51bac51b91528325e0fbf943e22634bd1": "1cd0d4816d6cbd110a183efe6ec4a68d",
".git/objects/1a/3252e6301426fd6aac36cad683b71f7373dcf3": "fbce583e4645d043d98e042ab5d3f15e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/58c1ec5ef2c20c1f533e046ea8c6c54b409d29": "7d320f5b49c3e10ba6f0b71e46822fb8",
".git/objects/23/ab5fec1c81f61a809d555bb5d3d9c4a167b30f": "f5661cc37ff931af8f647a06279e6278",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/af481fdda52a675c626d1d834150ab65b625d3": "998e2ea0f453dc2fcf2bfcaa28765b55",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/6356e026762068725330310e9724128c263c4b": "389a630a0f67b448dc5d5fc2e26f82fa",
".git/objects/32/c7dcdc2b92349779b570f33516f7a7cdd833b5": "84fc51cb687db9436984c07dd47464a8",
".git/objects/42/85664e246958026e8e2b2d67036dad4dad1e90": "d045e16e27ea2b3607a4367cbabb9bea",
".git/objects/45/64c091ad5f11d706ec78484a2bcf54f7632495": "c4776ce8894052027437aa3a1968fe57",
".git/objects/45/73203a1ec811910eb9cc6f6e775007deb39f61": "42b2c599fc9672cab17ec290e2f1a332",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/b4c1f5660598e66f65ce2d7dfcc9d3547315e3": "03ac1d38e321293469e033484c90e620",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5a/59c9f4c24000a2bc33cdc32b17b0b8c45f16f3": "bd24a730532a287c2c3dfa2bab563258",
".git/objects/63/2d1644f17ba28bd7c197e7ab76f7ae97218c94": "a29528aa15e517433b78e98f00ae4e09",
".git/objects/63/dd53ff73402aabd4688f507e914fed5f6e1a8e": "2f8686c60bef619a5c4db87284fd8dd3",
".git/objects/66/1922e1f161f1b9b3d027f81ff0e500a4992f70": "1da0f6b73296f55bfa563bb040fdbedb",
".git/objects/6e/14e0a88f4ed582b5989506d0535c143098b9dc": "28adf8f9c9acd0bcc7958c248e087257",
".git/objects/70/cb3fe579c49bf6ea4fd405c8dc1669e433702e": "28d07a8470726c3d028dd15649661678",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/7b555badaa06863a9a448b56fbd62f5ef420c8": "a8daa7a4323b5529634d55e1d0117785",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/e75a1a6437029bdd071c0f40dcebb133176fd9": "d33b87bd29c8524408b41d6b0ca08222",
".git/objects/84/a3856edda6072dc23028544e6000c3020afc79": "2e1bab535338363962953b6fe29eeb5c",
".git/objects/86/46d4c88ef34a06a4087e3a34ce7a456a830330": "24b63945e0bae0ae664ea4310b3a36ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8f/033484d249e10bd442c3d8feade32ad5d40e33": "27b0910ab91f6893a27fffbc48d76fa6",
".git/objects/8f/6ec0b690be13032084641be22d670f6e4205b6": "b5d4385b7150b317d657782c842e969d",
".git/objects/91/3594779987476362aa9d3c18806f895fc43962": "1d99103f1efd8f2f2a652f1e6e30f159",
".git/objects/91/7a1a6165714af7456269ce7594ceae12038fd1": "afd4c0984070df3d1bab208d90028533",
".git/objects/99/9f763146b287bde142b35fd97d8d150f1e6f78": "1b1cb3df3508d4e86dac8cc115210c4d",
".git/objects/9c/040af77d57ee1a0320a46d92430c583cafba23": "605a5a876f6dd2f8449bc2dd905fe97d",
".git/objects/9d/41be7c8c4b2e8e02354701e7b767085d027897": "8ac7d79af9fd25e06abaf7f56cd3274c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a001e91bba1899108084443c0736a3473b2f2d": "c112fcdfa9df03c6ed5db52b350d27b2",
".git/objects/a2/253e66ae6bdf7b960ac223596fa474aa1ddb8d": "89d0ad8fdf64dfc19c6af3b6bf173d1c",
".git/objects/a8/24645fc2630dacef0f6e3e6c0c36fa7e8b9a22": "4f2669c124d6495c1f6b319ad003ebe9",
".git/objects/aa/fc11cf3f6c97d40ef248c0a82649f9b0199dfb": "aca9dea23986852bd9a0c6c7f395fb3d",
".git/objects/ac/9d5e7f8dc10483a5bee81e34f54472d856aed9": "c0531fda62435af4925004ebb96ff67e",
".git/objects/ac/b47c66e857159b2694d4f6d5d78d70bee86c10": "efe2c4dbb2f241710da45bb92335539b",
".git/objects/ad/a913d5bc3bd86e91419c3335aab1834c879421": "617dbba820741d1440b282ba6f9c3cc1",
".git/objects/ad/fef35dc200e0aaa0318e0961eef99f5ee032a1": "20d79026cea9e00665da7ee5e1f04709",
".git/objects/ae/3189e4e13292707e6e6734c684524b053acbf8": "60fdf9b4312255e8ac6dc3baf62b1d10",
".git/objects/ae/ea20b31b618166c9e40150e78b039768026478": "d0e8532aa198d37a5c480751278153bb",
".git/objects/b0/11fbdd464dadebebf7f8bd971189bedcbcb1db": "8b65c20e1725bb367cc9655a6a3ef878",
".git/objects/b3/bd515fc3bf9292b85794f4071da1c49d7cd95c": "fa47398155b94dad382a0d66123f705e",
".git/objects/b4/dcc26368e2f108efa916e2a661164d7e1c4a8f": "5b2348fb3d9ba07a96813c6ed42c3fcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/7faa7cff2f4c8acea7f68f28fa838616a1a727": "4005373dd1ef33af63f0ae1ec6e6ab66",
".git/objects/c2/0c882d8f5cb9c9774ffcee48e99d38dbe94abc": "92e92dce697e99995290b12076cbfec2",
".git/objects/c9/0a1504b556993917b6aa139f3f09f9fcd8e4a9": "491c4cd9a8b36473c43bbd0983fa99e6",
".git/objects/cd/8c583d456c5a59622a76f5c16a508339e9a056": "7955b9db4693d5ddcdb5bf02a427e56f",
".git/objects/d0/c2852a1cc8ee07f8c2a637c05341a5b555d948": "2f2fa7b53ddaccefa2caa4a81eb5e5a7",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d4/7038caaa3336580bd9421c6ab93cbac8e1d3f3": "54620c18e8a1494182fb3f0aecda7fcd",
".git/objects/d5/ab4ccaa41463ec1974ad0204496b3d668f9415": "020f4c48039355f209ed9a7644e1d939",
".git/objects/d7/d8a2458a130320c651dbcad902971ee817c1ba": "648a71c284a2cc7c0d9625e891b85607",
".git/objects/da/200f51553eb872eb2121a42ef050738bbb4e2f": "c8ec8a984758a8c4c714ddc0f53f89e6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/8f8614697ead494eea74a717e1de6e34da2114": "1ada9ebda034c1b8f8e9bd16148bd3e0",
".git/objects/e2/63d8472726b7e4d8fb3cc452ce196d0cec92bd": "d6ea915b2de8c242d02aaa28d9d4997e",
".git/objects/e4/9462940fbdbda61959baa570050cd6db67a61a": "e3fb5971f64a9b6feb1b5a62ed564997",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ff6b60e3f35bab012eebc6924a1338793dbfd3": "fde9e1a76efe6fe9009177645df23cd0",
".git/objects/e9/951a28df89c8de5543487e81a241967ec867ab": "34bd79b70ba06dc397de5144a1eec7d8",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/cda87d6ce6568598cdde265b8d2b731920dc36": "eb2a55aad3d0c9e3e8594bd06aa3caa3",
".git/objects/f0/75bebb1cf559cde36762670fa9b0ab6e56295d": "3ae3455c68c5f2bbd7034c8f40619eb3",
".git/objects/f5/8c61ab1b680bd15ba87dffc75d603476aea6e0": "c88889656667b61bbe35126a9d98bf46",
".git/objects/f6/d97e06fa942036605eeba803f58d1af24843de": "005e948e50744092283af8d490805646",
".git/objects/f7/628cbcf30fae793c5129bcf18807e82f40bb5c": "44be6d35b429fe50ea853e553846eeec",
".git/refs/heads/master": "49c1e0b178397d46ee3596483b232ed0",
".git/refs/remotes/origin/master": "49c1e0b178397d46ee3596483b232ed0",
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
"favicon.png": "9ae94f5ea4a28e213a2b5fccca40837b",
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
