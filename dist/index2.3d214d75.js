// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"k913x":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redomEsJs = require("./node_modules/redom/dist/redom.es.js");
var _creditCardInputMask = require("credit-card-input-mask");
var _creditCardInputMaskDefault = parcelHelpers.interopDefault(_creditCardInputMask);
function wrapper() {
    const cardNumberInput = (0, _redomEsJs.el)("input.input.input__number#cardNumber", {
        id: "cardNumber",
        oninput: updateCardNumber
    });
    const cardHolderInput = (0, _redomEsJs.el)("input.input.input__holder#cardHolder", {
        id: "cardHolder",
        oninput: updateCardHolder,
        maxlength: 16
    });
    const cardExpiryInput = (0, _redomEsJs.el)("input.input.input__date#cardExpiry", {
        id: "cardExpiry",
        oninput: updateCardExpiry,
        placeholder: "MM/YY",
        maxlength: 4
    });
    const cardCvvInput = (0, _redomEsJs.el)("input.input.input__cvv#cardCvv", {
        id: "cardCvv",
        oninput: updateCardCvv,
        maxlength: 3
    });
    const card = (0, _redomEsJs.el)("div.card", [
        (0, _redomEsJs.el)("p.secure", "Secure Checkout"),
        (0, _redomEsJs.el)("div.credit-card", [
            (0, _redomEsJs.el)("span.card__number", {
                id: "displayCardNumber"
            }, "xxxx xxxx xxxx xxxx"),
            (0, _redomEsJs.el)("div.card__personal", [
                (0, _redomEsJs.el)("span.card__name", {
                    id: "displayCardHolder"
                }, "John Doe"),
                (0, _redomEsJs.el)("span.card__date", {
                    id: "displayCardExpiry"
                }, "04/24")
            ])
        ]),
        (0, _redomEsJs.el)("form.form#form", [
            (0, _redomEsJs.el)("div.form__input-wrap.form__input-wrap_holder", [
                (0, _redomEsJs.el)("label.form__label.form__holder-label", "Card Holder"),
                cardNumberInput
            ]),
            (0, _redomEsJs.el)("div.form__input-wrap.form__input-wrap_number", [
                (0, _redomEsJs.el)("label.form__label.form__number-label", "Card Number"),
                cardHolderInput
            ]),
            (0, _redomEsJs.el)("div.form__input-wrap.form__input-wrap_date", [
                (0, _redomEsJs.el)("label.form__label.form__date-label", "Card Expiry"),
                cardExpiryInput
            ]),
            (0, _redomEsJs.el)("div.form__input-wrap.form__input-wrap_cvv", [
                (0, _redomEsJs.el)("label.form__label.form__cvv-label", "CVV"),
                cardCvvInput
            ]),
            (0, _redomEsJs.el)("button.form__button", "CHECK OUT")
        ])
    ]);
    return (0, _redomEsJs.el)("div.wrapper", card);
}
(0, _redomEsJs.setChildren)(document.body, wrapper());
//*Номер карты
function updateCardNumber(event) {
    const cardHolder = document.getElementById("displayCardHolder");
    const input = event.target;
    const words = input.value.split(" ");
    const formattedName = words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    cardHolder.textContent = formattedName;
}
//*Имя
function updateCardHolder(event) {
    const cardNumber = document.getElementById("displayCardNumber");
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Удалить все символы, кроме цифр
    // Добавить пробел каждые 4 цифры,  $1 будет представлять четыре цифры
    value = value.replace(/(\d{4})/g, "$1 ");
    cardNumber.textContent = value;
    // Создаем объект CreditCardInputMask с указанием элемента и паттерна
    new (0, _creditCardInputMaskDefault.default)({
        element: document.querySelector("#cardHolder"),
        pattern: "{{9999}} {{9999}} {{9999}} {{9999}}"
    });
}
//*год карты
function updateCardExpiry(event) {
    const cardExpiry = document.getElementById("displayCardExpiry");
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Удалить все символы, кроме цифр
    if (value.length >= 2) value = value.slice(0, 2) + "/" + value.slice(2);
    cardExpiry.textContent = value;
    new (0, _creditCardInputMaskDefault.default)({
        element: document.querySelector("#cardExpiry"),
        pattern: "{{99}} / {{99}}"
    });
}
function updateCardCvv(event) {
    // Добавьте логику для обновления CVV, если это необходимо
    const cardCvv = document.getElementById("displayCardCvv");
    const input = event.target;
    let value = input.value.replace(/\D/g, "").slice(0, 3); // Удалить все символы, кроме цифр, и ограничить до трех символов
    cardCvv.textContent = value;
}

},{"./node_modules/redom/dist/redom.es.js":"iahd6","credit-card-input-mask":"bO9Hm","@parcel/transformer-js/src/esmodule-helpers.js":"dTtr8"}],"iahd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "List", ()=>List);
parcelHelpers.export(exports, "ListPool", ()=>ListPool);
parcelHelpers.export(exports, "Place", ()=>Place);
parcelHelpers.export(exports, "Router", ()=>Router);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "listPool", ()=>listPool);
parcelHelpers.export(exports, "mount", ()=>mount);
parcelHelpers.export(exports, "place", ()=>place);
parcelHelpers.export(exports, "router", ()=>router);
parcelHelpers.export(exports, "s", ()=>s);
parcelHelpers.export(exports, "setAttr", ()=>setAttr);
parcelHelpers.export(exports, "setChildren", ()=>setChildren);
parcelHelpers.export(exports, "setData", ()=>setData);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
parcelHelpers.export(exports, "setXlink", ()=>setXlink);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "unmount", ()=>unmount);
function createElement(query, ns) {
    var ref = parse(query);
    var tag = ref.tag;
    var id = ref.id;
    var className = ref.className;
    var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns) element.setAttribute("class", className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    var chunks = query.split(/([.#])/);
    var className = "";
    var id = "";
    for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case ".":
            className += " " + chunks[i + 1];
            break;
        case "#":
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || "div",
        id: id
    };
}
function unmount(parent, child) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    var hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse = parentEl;
    if (childEl.__redom_mounted) trigger(childEl, "onunmount");
    while(traverse){
        var parentHooks = traverse.__redom_lifecycle || {};
        for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
        traverse = traverse.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(var key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}
/* global Node, ShadowRoot */ var hookNames = [
    "onmount",
    "onremount",
    "onunmount"
];
var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
function mount(parent, child, before, replace) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    var wasMounted = childEl.__redom_mounted;
    var oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
    if (before != null) {
        if (replace) {
            var beforeEl = getEl(before);
            if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
            parentEl.replaceChild(childEl, beforeEl);
        } else parentEl.insertBefore(childEl, getEl(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el, eventName) {
    if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
    else if (eventName === "onunmount") el.__redom_mounted = false;
    var hooks = el.__redom_lifecycle;
    if (!hooks) return;
    var view = el.__redom_view;
    var hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(var hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        var traverse = el.firstChild;
        while(traverse){
            var next = traverse.nextSibling;
            trigger(traverse, eventName);
            traverse = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    var remount = parentEl === oldParent;
    var hooksFound = false;
    for(var i = 0, list = hookNames; i < list.length; i += 1){
        var hookName = list[i];
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse = parentEl;
    var triggered = false;
    if (remount || traverse && traverse.__redom_mounted) {
        trigger(childEl, remount ? "onremount" : "onmount");
        triggered = true;
    }
    while(traverse){
        var parent = traverse.parentNode;
        var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
        for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse, remount ? "onremount" : "onmount");
                triggered = true;
            }
            traverse = parent;
        }
    }
}
function setStyle(view, arg1, arg2) {
    var el = getEl(view);
    if (typeof arg1 === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
    else setStyleValue(el, arg1, arg2);
}
function setStyleValue(el, key, value) {
    el.style[key] = value == null ? "" : value;
}
/* global SVGElement */ var xlinkns = "http://www.w3.org/1999/xlink";
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    var el = getEl(view);
    var isObj = typeof arg1 === "object";
    if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
    else {
        var isSVG = el instanceof SVGElement;
        var isFunc = typeof arg2 === "function";
        if (arg1 === "style" && typeof arg2 === "object") setStyle(el, arg2);
        else if (isSVG && isFunc) el[arg1] = arg2;
        else if (arg1 === "dataset") setData(el, arg2);
        else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
        else {
            if (isSVG && arg1 === "xlink") {
                setXlink(el, arg2);
                return;
            }
            if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
            if (arg2 == null) el.removeAttribute(arg1);
            else el.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el, arg1, arg2) {
    if (typeof arg1 === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
    else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
    else el.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el, arg1, arg2) {
    if (typeof arg1 === "object") for(var key in arg1)setData(el, key, arg1[key]);
    else if (arg2 != null) el.dataset[arg1] = arg2;
    else delete el.dataset[arg1];
}
function text(str) {
    return document.createTextNode(str != null ? str : "");
}
function parseArgumentsInternal(element, args, initial) {
    for(var i = 0, list = args; i < list.length; i += 1){
        var arg = list[i];
        if (arg !== 0 && !arg) continue;
        var type = typeof arg;
        if (type === "function") arg(element);
        else if (type === "string" || type === "number") element.appendChild(text(arg));
        else if (isNode(getEl(arg))) mount(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === "object") setAttrInternal(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === "string" ? html(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}
function html(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === "string") element = createElement(query);
    else if (type === "function") {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error("At least one argument required");
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var el = html;
var h = html;
html.extend = function extendHtml() {
    var args = [], len = arguments.length;
    while(len--)args[len] = arguments[len];
    return html.bind.apply(html, [
        this
    ].concat(args));
};
function setChildren(parent) {
    var children = [], len = arguments.length - 1;
    while(len-- > 0)children[len] = arguments[len + 1];
    var parentEl = getEl(parent);
    var current = traverse(parent, children, parentEl.firstChild);
    while(current){
        var next = current.nextSibling;
        unmount(parent, current);
        current = next;
    }
}
function traverse(parent, children, _current) {
    var current = _current;
    var childEls = Array(children.length);
    for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
    for(var i$1 = 0; i$1 < children.length; i$1++){
        var child = children[i$1];
        if (!child) continue;
        var childEl = childEls[i$1];
        if (childEl === current) {
            current = current.nextSibling;
            continue;
        }
        if (isNode(childEl)) {
            var next = current && current.nextSibling;
            var exists = child.__redom_index != null;
            var replace = exists && next === childEls[i$1 + 1];
            mount(parent, child, current, replace);
            if (replace) current = next;
            continue;
        }
        if (child.length != null) current = traverse(parent, child, current);
    }
    return current;
}
function listPool(View, key, initData) {
    return new ListPool(View, key, initData);
}
var ListPool = function ListPool(View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.oldLookup = {};
    this.lookup = {};
    this.oldViews = [];
    this.views = [];
    if (key != null) this.key = typeof key === "function" ? key : propKey(key);
};
ListPool.prototype.update = function update(data, context) {
    var ref = this;
    var View = ref.View;
    var key = ref.key;
    var initData = ref.initData;
    var keySet = key != null;
    var oldLookup = this.lookup;
    var newLookup = {};
    var newViews = Array(data.length);
    var oldViews = this.views;
    for(var i = 0; i < data.length; i++){
        var item = data[i];
        var view = void 0;
        if (keySet) {
            var id = key(item);
            view = oldLookup[id] || new View(initData, item, i, data);
            newLookup[id] = view;
            view.__redom_id = id;
        } else view = oldViews[i] || new View(initData, item, i, data);
        view.update && view.update(item, i, data, context);
        var el = getEl(view.el);
        el.__redom_view = view;
        newViews[i] = view;
    }
    this.oldViews = oldViews;
    this.views = newViews;
    this.oldLookup = oldLookup;
    this.lookup = newLookup;
};
function propKey(key) {
    return function(item) {
        return item[key];
    };
}
function list(parent, View, key, initData) {
    return new List(parent, View, key, initData);
}
var List = function List(parent, View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.views = [];
    this.pool = new ListPool(View, key, initData);
    this.el = ensureEl(parent);
    this.keySet = key != null;
};
List.prototype.update = function update(data, context) {
    if (data === void 0) data = [];
    var ref = this;
    var keySet = ref.keySet;
    var oldViews = this.views;
    this.pool.update(data, context);
    var ref$1 = this.pool;
    var views = ref$1.views;
    var lookup = ref$1.lookup;
    if (keySet) for(var i = 0; i < oldViews.length; i++){
        var oldView = oldViews[i];
        var id = oldView.__redom_id;
        if (lookup[id] == null) {
            oldView.__redom_index = null;
            unmount(this, oldView);
        }
    }
    for(var i$1 = 0; i$1 < views.length; i$1++){
        var view = views[i$1];
        view.__redom_index = i$1;
    }
    setChildren(this, views);
    if (keySet) this.lookup = lookup;
    this.views = views;
};
List.extend = function extendList(parent, View, key, initData) {
    return List.bind(List, parent, View, key, initData);
};
list.extend = List.extend;
/* global Node */ function place(View, initData) {
    return new Place(View, initData);
}
var Place = function Place(View, initData) {
    this.el = text("");
    this.visible = false;
    this.view = null;
    this._placeholder = this.el;
    if (View instanceof Node) this._el = View;
    else if (View.el instanceof Node) {
        this._el = View;
        this.view = View;
    } else this._View = View;
    this._initData = initData;
};
Place.prototype.update = function update(visible, data) {
    var placeholder = this._placeholder;
    var parentNode = this.el.parentNode;
    if (visible) {
        if (!this.visible) {
            if (this._el) {
                mount(parentNode, this._el, placeholder);
                unmount(parentNode, placeholder);
                this.el = getEl(this._el);
                this.visible = visible;
            } else {
                var View = this._View;
                var view = new View(this._initData);
                this.el = getEl(view);
                this.view = view;
                mount(parentNode, view, placeholder);
                unmount(parentNode, placeholder);
            }
        }
        this.view && this.view.update && this.view.update(data);
    } else if (this.visible) {
        if (this._el) {
            mount(parentNode, placeholder, this._el);
            unmount(parentNode, this._el);
            this.el = placeholder;
            this.visible = visible;
            return;
        }
        mount(parentNode, placeholder, this.view);
        unmount(parentNode, this.view);
        this.el = placeholder;
        this.view = null;
    }
    this.visible = visible;
};
/* global Node */ function router(parent, Views, initData) {
    return new Router(parent, Views, initData);
}
var Router = function Router(parent, Views, initData) {
    this.el = ensureEl(parent);
    this.Views = Views;
    this.initData = initData;
};
Router.prototype.update = function update(route, data) {
    if (route !== this.route) {
        var Views = this.Views;
        var View = Views[route];
        this.route = route;
        if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
        else this.view = View && new View(this.initData, data);
        setChildren(this.el, [
            this.view
        ]);
    }
    this.view && this.view.update && this.view.update(data, route);
};
var ns = "http://www.w3.org/2000/svg";
function svg(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === "string") element = createElement(query, ns);
    else if (type === "function") {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error("At least one argument required");
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var s = svg;
svg.extend = function extendSvg() {
    var args = [], len = arguments.length;
    while(len--)args[len] = arguments[len];
    return svg.bind.apply(svg, [
        this
    ].concat(args));
};
svg.ns = ns;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dTtr8"}],"dTtr8":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bO9Hm":[function(require,module,exports) {
"use strict";
var RestrictedInput = require("5b7da5c00506f039");
module.exports = RestrictedInput;

},{"5b7da5c00506f039":"fPKQq"}],"fPKQq":[function(require,module,exports) {
"use strict";
var device_1 = require("ffc328f4f2080bb3");
var supportsInputFormatting = require("57c19f0c2e4fde16");
var ios_1 = require("2c35002368c1422");
var android_chrome_1 = require("e7198257350d64ab");
var kitkat_chromium_based_webview_1 = require("3178dbaa331da4ad");
var ie9_1 = require("4dcbc98b13b654d3");
var base_1 = require("e35b87cbed1c327d");
var noop_1 = require("15cb6ec3b5a63019");
/**
 * Instances of this class can be used to modify the formatter for an input
 * @class
 * @param {object} options The initialization paramaters for this class
 * @param {object} options.element - A Input DOM object that RestrictedInput operates on
 * @param {string} options.pattern - The pattern to enforce on this element
 */ var RestrictedInput = /** @class */ function() {
    function RestrictedInput(options) {
        if (!RestrictedInput.supportsFormatting()) this.strategy = new noop_1.NoopKeyboardStrategy(options);
        else if (device_1.isIos()) this.strategy = new ios_1.IosStrategy(options);
        else if (device_1.isKitKatWebview()) this.strategy = new kitkat_chromium_based_webview_1.KitKatChromiumBasedWebViewStrategy(options);
        else if (device_1.isAndroidChrome()) this.strategy = new android_chrome_1.AndroidChromeStrategy(options);
        else if (device_1.isIE9()) this.strategy = new ie9_1.IE9Strategy(options);
        else this.strategy = new base_1.BaseStrategy(options);
    }
    /**
     * @public
     * @returns {string} the unformatted value of the element
     */ RestrictedInput.prototype.getUnformattedValue = function() {
        return this.strategy.getUnformattedValue();
    };
    /**
     * @public
     * @param {string} pattern - the pattern to enforce on the element
     * @return {void}
     */ RestrictedInput.prototype.setPattern = function(pattern) {
        this.strategy.setPattern(pattern);
    };
    RestrictedInput.supportsFormatting = function() {
        return supportsInputFormatting();
    };
    return RestrictedInput;
}();
module.exports = RestrictedInput;

},{"ffc328f4f2080bb3":"coyu0","57c19f0c2e4fde16":"jxX5h","2c35002368c1422":"5VqXj","e7198257350d64ab":"6xmWb","3178dbaa331da4ad":"5JFC5","4dcbc98b13b654d3":"1MWrj","e35b87cbed1c327d":"dR402","15cb6ec3b5a63019":"fl4aQ"}],"coyu0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIos = exports.isIE9 = exports.isSamsungBrowser = exports.isAndroidChrome = exports.isKitKatWebview = void 0;
// server side rendering check
var UA = typeof window !== "undefined" && window.navigator && window.navigator.userAgent;
// TODO remove this when browser detection is converted to typescript
/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-ignore
var isAndroid = require("e02c2f1bd07d6618");
// @ts-ignore
var isChromeOs = require("46919a64a6a31c37");
// @ts-ignore
var isChrome = require("56aec31e93edfc62");
// @ts-ignore
var isIos = require("f04395b81e0b8098");
exports.isIos = isIos;
// @ts-ignore
var isIE9 = require("4298bcecdfbe7e62");
exports.isIE9 = isIE9;
/* eslint-enable @typescript-eslint/ban-ts-comment */ // Old Android Webviews used specific versions of Chrome with 0.0.0 as their version suffix
// https://developer.chrome.com/multidevice/user-agent#webview_user_agent
var KITKAT_WEBVIEW_REGEX = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
function isOldSamsungBrowserOrSamsungWebview(ua) {
    return !isChrome(ua) && ua.indexOf("Samsung") > -1;
}
function isKitKatWebview(ua) {
    if (ua === void 0) ua = UA;
    return isAndroid(ua) && KITKAT_WEBVIEW_REGEX.test(ua);
}
exports.isKitKatWebview = isKitKatWebview;
function isAndroidChrome(ua) {
    if (ua === void 0) ua = UA;
    return (isAndroid(ua) || isChromeOs(ua)) && isChrome(ua);
}
exports.isAndroidChrome = isAndroidChrome;
function isSamsungBrowser(ua) {
    if (ua === void 0) ua = UA;
    return /SamsungBrowser/.test(ua) || isOldSamsungBrowserOrSamsungWebview(ua);
}
exports.isSamsungBrowser = isSamsungBrowser;

},{"e02c2f1bd07d6618":"jtldm","46919a64a6a31c37":"in5Dg","56aec31e93edfc62":"40nLK","f04395b81e0b8098":"kAfY0","4298bcecdfbe7e62":"7rUWx"}],"jtldm":[function(require,module,exports) {
module.exports = require("683e2b9152cf1377");

},{"683e2b9152cf1377":"94VUa"}],"94VUa":[function(require,module,exports) {
"use strict";
module.exports = function isAndroid(ua) {
    ua = ua || window.navigator.userAgent;
    return /Android/i.test(ua);
};

},{}],"in5Dg":[function(require,module,exports) {
module.exports = require("56b6d3afe756b85e");

},{"56b6d3afe756b85e":"hO6nk"}],"hO6nk":[function(require,module,exports) {
"use strict";
module.exports = function isChromeOS(ua) {
    ua = ua || window.navigator.userAgent;
    return /CrOS/i.test(ua);
};

},{}],"40nLK":[function(require,module,exports) {
module.exports = require("2e77d2cdaecfb681");

},{"2e77d2cdaecfb681":"8wlUP"}],"8wlUP":[function(require,module,exports) {
"use strict";
var isEdge = require("cc4a08083f1942d3");
var isSamsung = require("7f9d542d87ce715e");
var isDuckDuckGo = require("8e897396debb4355");
var isOpera = require("58808e221cf98a7");
var isSilk = require("26c55d85b11fa25e");
module.exports = function isChrome(ua) {
    ua = ua || window.navigator.userAgent;
    return (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) && !isEdge(ua) && !isSamsung(ua) && !isDuckDuckGo(ua) && !isOpera(ua) && !isSilk(ua);
};

},{"cc4a08083f1942d3":"eanR9","7f9d542d87ce715e":"3YCCg","8e897396debb4355":"3J4Uq","58808e221cf98a7":"5k0Nr","26c55d85b11fa25e":"8i4Xu"}],"eanR9":[function(require,module,exports) {
"use strict";
module.exports = function isEdge(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Edge/") !== -1 || ua.indexOf("Edg/") !== -1;
};

},{}],"3YCCg":[function(require,module,exports) {
"use strict";
module.exports = function isSamsungBrowser(ua) {
    ua = ua || window.navigator.userAgent;
    return /SamsungBrowser/i.test(ua);
};

},{}],"3J4Uq":[function(require,module,exports) {
"use strict";
module.exports = function isDuckDuckGo(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("DuckDuckGo/") !== -1;
};

},{}],"5k0Nr":[function(require,module,exports) {
"use strict";
module.exports = function isOpera(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("OPR/") !== -1 || ua.indexOf("Opera/") !== -1 || ua.indexOf("OPT/") !== -1;
};

},{}],"8i4Xu":[function(require,module,exports) {
"use strict";
module.exports = function isSilk(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Silk/") !== -1;
};

},{}],"kAfY0":[function(require,module,exports) {
module.exports = require("7d556d0501305975");

},{"7d556d0501305975":"7ULxF"}],"7ULxF":[function(require,module,exports) {
"use strict";
var isIpadOS = require("e1ff5afcccf3a7d");
module.exports = function isIos(ua, checkIpadOS, document) {
    if (checkIpadOS === void 0) checkIpadOS = true;
    ua = ua || window.navigator.userAgent;
    var iOsTest = /iPhone|iPod|iPad/i.test(ua);
    return checkIpadOS ? iOsTest || isIpadOS(ua, document) : iOsTest;
};

},{"e1ff5afcccf3a7d":"1weq9"}],"1weq9":[function(require,module,exports) {
"use strict";
module.exports = function isIpadOS(ua, document) {
    ua = ua || window.navigator.userAgent;
    document = document || window.document;
    // "ontouchend" is used to determine if a browser is on an iPad, otherwise
    // user-agents for iPadOS behave/identify as a desktop browser
    return /Mac|iPad/i.test(ua) && "ontouchend" in document;
};

},{}],"7rUWx":[function(require,module,exports) {
module.exports = require("67ef016e043b3ea6");

},{"67ef016e043b3ea6":"9wFUI"}],"9wFUI":[function(require,module,exports) {
"use strict";
module.exports = function isIe9(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("MSIE 9") !== -1;
};

},{}],"jxX5h":[function(require,module,exports) {
"use strict";
var device_1 = require("7cba154c0b381aa1");
module.exports = function supportsInputFormatting() {
    // Digits get dropped in samsung browser
    return !device_1.isSamsungBrowser();
};

},{"7cba154c0b381aa1":"coyu0"}],"5VqXj":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IosStrategy = void 0;
var base_1 = require("c887f11c64defc69");
var key_cannot_mutate_value_1 = require("c198b58f639cf342");
var input_selection_1 = require("538d5236c2d02d7");
var IosStrategy = /** @class */ function(_super) {
    __extends(IosStrategy, _super);
    function IosStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosStrategy.prototype.getUnformattedValue = function() {
        return _super.prototype.getUnformattedValue.call(this, true);
    };
    IosStrategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(event) {
            _this.keydownListener(event);
        });
        this.inputElement.addEventListener("input", function(event) {
            var isCustomEvent = event instanceof CustomEvent;
            // Safari AutoFill fires CustomEvents
            // Set state to format before calling format listener
            if (isCustomEvent) _this.stateToFormat = {
                selection: {
                    start: 0,
                    end: 0
                },
                value: _this.inputElement.value
            };
            _this.formatListener();
            if (!isCustomEvent) _this.fixLeadingBlankSpaceOnIos();
        });
        this.inputElement.addEventListener("focus", function() {
            _this.formatListener();
        });
        this.inputElement.addEventListener("paste", function(event) {
            _this.pasteEventHandler(event);
        });
    };
    // When deleting the last character on iOS, the cursor
    // is positioned as if there is a blank space when there
    // is not, setting it to '' in a setTimeout fixes it ¯\_(ツ)_/¯
    IosStrategy.prototype.fixLeadingBlankSpaceOnIos = function() {
        var input = this.inputElement;
        if (input.value === "") setTimeout(function() {
            input.value = "";
        }, 0);
    };
    IosStrategy.prototype.formatListener = function() {
        var input = this.inputElement;
        var stateToFormat = this.getStateToFormat();
        var formattedState = this.formatter.format(stateToFormat);
        input.value = formattedState.value;
        input_selection_1.set(input, formattedState.selection.start, formattedState.selection.end);
    };
    IosStrategy.prototype.keydownListener = function(event) {
        if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
        if (this.isDeletion(event)) this.stateToFormat = this.formatter.simulateDeletion({
            event: event,
            selection: input_selection_1.get(this.inputElement),
            value: this.inputElement.value
        });
    };
    return IosStrategy;
}(base_1.BaseStrategy);
exports.IosStrategy = IosStrategy;

},{"c887f11c64defc69":"dR402","c198b58f639cf342":"cbCy3","538d5236c2d02d7":"2gSp4"}],"dR402":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseStrategy = void 0;
var strategy_interface_1 = require("ba1a91befbe43d7b");
var key_cannot_mutate_value_1 = require("65a7206985773303");
var input_selection_1 = require("7a945b24f191b921");
var is_backspace_1 = require("80922d69e4261553");
var is_delete_1 = require("baccb21aaedf6528");
var formatter_1 = require("b744c2bea1938f97");
function isSimulatedEvent(event) {
    // 1Password sets input.value then fires keyboard events. Dependent on browser
    // here might be falsy values (key = '', keyCode = 0) or these keys might be omitted
    // Chrome autofill inserts keys all at once and fires a single event without key info
    return !event.key && !event.keyCode;
}
var BaseStrategy = /** @class */ function(_super) {
    __extends(BaseStrategy, _super);
    function BaseStrategy(options) {
        var _this = _super.call(this, options) || this;
        _this.formatter = new formatter_1.PatternFormatter(options.pattern);
        _this.onPasteEvent = options.onPasteEvent;
        _this.attachListeners();
        _this.formatIfNotEmpty();
        return _this;
    }
    BaseStrategy.prototype.getUnformattedValue = function(forceUnformat) {
        var value = this.inputElement.value;
        if (forceUnformat || this.isFormatted) value = this.formatter.unformat({
            value: this.inputElement.value,
            selection: {
                start: 0,
                end: 0
            }
        }).value;
        return value;
    };
    BaseStrategy.prototype.formatIfNotEmpty = function() {
        if (this.inputElement.value) this.reformatInput();
    };
    BaseStrategy.prototype.setPattern = function(pattern) {
        this.unformatInput();
        this.formatter = new formatter_1.PatternFormatter(pattern);
        this.formatIfNotEmpty();
    };
    BaseStrategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(e) {
            var event = e;
            if (isSimulatedEvent(event)) _this.isFormatted = false;
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            if (_this.isDeletion(event)) _this.unformatInput();
        });
        this.inputElement.addEventListener("keypress", function(e) {
            var event = e;
            if (isSimulatedEvent(event)) _this.isFormatted = false;
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            _this.unformatInput();
        });
        this.inputElement.addEventListener("keyup", function() {
            _this.reformatInput();
        });
        this.inputElement.addEventListener("input", function(event) {
            // Safari AutoFill fires CustomEvents
            // LastPass sends an `isTrusted: false` property
            // Since the input is changed all at once, set isFormatted
            // to false so that reformatting actually occurs
            if (event instanceof CustomEvent || !event.isTrusted) _this.isFormatted = false;
            _this.reformatInput();
        });
        this.inputElement.addEventListener("paste", function(event) {
            _this.pasteEventHandler(event);
        });
    };
    BaseStrategy.prototype.isDeletion = function(event) {
        return is_delete_1.isDelete(event) || is_backspace_1.isBackspace(event);
    };
    BaseStrategy.prototype.reformatInput = function() {
        if (this.isFormatted) return;
        this.isFormatted = true;
        var input = this.inputElement;
        var formattedState = this.formatter.format({
            selection: input_selection_1.get(input),
            value: input.value
        });
        input.value = formattedState.value;
        input_selection_1.set(input, formattedState.selection.start, formattedState.selection.end);
        this.afterReformatInput(formattedState);
    };
    // If a strategy needs to impliment specific behavior
    // after reformatting has happend, the strategy just
    // overwrites this method on their own prototype
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseStrategy.prototype.afterReformatInput = function(formattedState) {
    // noop
    };
    BaseStrategy.prototype.unformatInput = function() {
        if (!this.isFormatted) return;
        this.isFormatted = false;
        var input = this.inputElement;
        var selection = input_selection_1.get(input);
        var unformattedState = this.formatter.unformat({
            selection: selection,
            value: input.value
        });
        input.value = unformattedState.value;
        input_selection_1.set(input, unformattedState.selection.start, unformattedState.selection.end);
    };
    BaseStrategy.prototype.prePasteEventHandler = function(event) {
        // without this, the paste event is called twice
        // so if you were pasting abc it would result in
        // abcabc
        event.preventDefault();
    };
    BaseStrategy.prototype.postPasteEventHandler = function() {
        this.reformatAfterPaste();
    };
    BaseStrategy.prototype.pasteEventHandler = function(event) {
        var splicedEntry;
        var entryValue = "";
        this.prePasteEventHandler(event);
        this.unformatInput();
        if (event.clipboardData) entryValue = event.clipboardData.getData("Text");
        else if (window.clipboardData) entryValue = window.clipboardData.getData("Text");
        var selection = input_selection_1.get(this.inputElement);
        splicedEntry = this.inputElement.value.split("");
        splicedEntry.splice(selection.start, selection.end - selection.start, entryValue);
        splicedEntry = splicedEntry.join("");
        if (this.onPasteEvent) this.onPasteEvent({
            unformattedInputValue: splicedEntry
        });
        this.inputElement.value = splicedEntry;
        input_selection_1.set(this.inputElement, selection.start + entryValue.length, selection.start + entryValue.length);
        this.postPasteEventHandler();
    };
    BaseStrategy.prototype.reformatAfterPaste = function() {
        var event = document.createEvent("Event");
        this.reformatInput();
        event.initEvent("input", true, true);
        this.inputElement.dispatchEvent(event);
    };
    BaseStrategy.prototype.getStateToFormat = function() {
        var input = this.inputElement;
        var selection = input_selection_1.get(input);
        var stateToFormat = {
            selection: selection,
            value: input.value
        };
        if (this.stateToFormat) {
            stateToFormat = this.stateToFormat;
            delete this.stateToFormat;
        } else if (selection.start === input.value.length && this.isFormatted) stateToFormat = this.formatter.unformat(stateToFormat);
        return stateToFormat;
    };
    return BaseStrategy;
}(strategy_interface_1.StrategyInterface);
exports.BaseStrategy = BaseStrategy;

},{"ba1a91befbe43d7b":"eR489","65a7206985773303":"cbCy3","7a945b24f191b921":"2gSp4","80922d69e4261553":"bCGFT","baccb21aaedf6528":"aA9DZ","b744c2bea1938f97":"6kXTK"}],"eR489":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StrategyInterface = void 0;
var StrategyInterface = /** @class */ function() {
    function StrategyInterface(options) {
        this.inputElement = options.element;
        this.isFormatted = false;
    }
    return StrategyInterface;
}();
exports.StrategyInterface = StrategyInterface;

},{}],"cbCy3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keyCannotMutateValue = void 0;
var input_selection_1 = require("7ee021c6c8ee0976");
// eslint-disable-next-line complexity
function keyCannotMutateValue(event) {
    var input = event.currentTarget || event.srcElement;
    var selection = input_selection_1.get(input);
    var isAtBeginning = selection.start === 0;
    var isAtEnd = selection.start === input.value.length;
    var isShifted = event.shiftKey === true;
    // https://www.w3.org/TR/DOM-Level-3-Events/#widl-KeyboardEvent-key
    switch(event.key){
        case undefined:
        case "Unidentified":
        case "":
            break;
        case "Backspace":
            return isAtBeginning;
        case "Del":
        case "Delete":
            return isAtEnd;
        default:
            return event.key.length !== 1;
    }
    // http://unixpapa.com/js/key.html
    switch(event.keyCode){
        case 9:
        case 19:
        case 20:
        case 27:
        case 39:
        case 45:
            return true;
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 40:
            return !isShifted;
        case 8:
            return isAtBeginning;
        case 46:
            return isAtEnd;
        default:
            return false;
    }
}
exports.keyCannotMutateValue = keyCannotMutateValue;

},{"7ee021c6c8ee0976":"2gSp4"}],"2gSp4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.set = exports.get = void 0;
function get(element) {
    var start = element.selectionStart || 0;
    var end = element.selectionEnd || 0;
    return {
        start: start,
        end: end,
        delta: Math.abs(end - start)
    };
}
exports.get = get;
function set(element, start, end) {
    // Some browsers explode if you use setSelectionRange
    // on a non-focused element
    if (document.activeElement === element && element.setSelectionRange) element.setSelectionRange(start, end);
}
exports.set = set;

},{}],"bCGFT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBackspace = void 0;
function isBackspace(event) {
    return event.key === "Backspace" || event.keyCode === 8;
}
exports.isBackspace = isBackspace;

},{}],"aA9DZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDelete = void 0;
var DELETE_REGEX = /^Del(ete)?$/;
function isDelete(event) {
    return DELETE_REGEX.test(event.key) || event.keyCode === 46;
}
exports.isDelete = isDelete;

},{}],"6kXTK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PatternFormatter = void 0;
var parse_pattern_1 = require("1f5ff224a61c7998");
var is_backspace_1 = require("ef05ada64cf78374");
var PatternFormatter = /** @class */ function() {
    function PatternFormatter(pattern) {
        this.pattern = parse_pattern_1.parsePattern(pattern);
    }
    PatternFormatter.prototype.format = function(options) {
        var originalString = options.value;
        var originalStringIndex = 0;
        var formattedString = "";
        var selection = {
            start: options.selection.start,
            end: options.selection.end
        };
        for(var i = 0; i < this.pattern.length; i++){
            var patternChar = this.pattern[i];
            var inputChar = originalString[originalStringIndex];
            if (originalStringIndex > originalString.length) break;
            if (typeof patternChar.value === "string") {
                if (inputChar != null || formattedString.length === patternChar.index) {
                    formattedString += patternChar.value;
                    if (patternChar.index <= selection.start) selection.start++;
                    if (patternChar.index <= selection.end) selection.end++;
                }
            } else // User input char
            // prettier-ignore
            for(; originalStringIndex < originalString.length; originalStringIndex++){
                inputChar = originalString[originalStringIndex];
                if (patternChar.value.test(inputChar)) {
                    formattedString += inputChar;
                    originalStringIndex++;
                    break;
                } else {
                    if (patternChar.index <= selection.start) selection.start--;
                    if (patternChar.index <= selection.end) selection.end--;
                }
            }
        }
        return {
            value: formattedString,
            selection: selection
        };
    };
    PatternFormatter.prototype.unformat = function(options) {
        var start = options.selection.start;
        var end = options.selection.end;
        var unformattedString = "";
        var formatCompensation = 0;
        function isPatterntChar(patternChar, index) {
            var value = options.value[index - formatCompensation];
            return typeof patternChar.value !== "string" && value != null && patternChar.value.test(value);
        }
        for(var i = 0; i < this.pattern.length; i++){
            var patternChar = this.pattern[i];
            if (isPatterntChar(patternChar, i)) {
                unformattedString += options.value[i - formatCompensation];
                continue;
            }
            if (patternChar.value !== options.value[patternChar.index]) {
                formatCompensation++;
                continue;
            }
            if (patternChar.index < options.selection.start) start--;
            if (patternChar.index < options.selection.end) end--;
        }
        return {
            selection: {
                start: start,
                end: end
            },
            value: unformattedString
        };
    };
    PatternFormatter.prototype.simulateDeletion = function(options) {
        var deletionStart, deletionEnd;
        var state = this.unformat(options);
        var value = state.value;
        var selection = state.selection;
        var delta = Math.abs(state.selection.end - state.selection.start);
        if (delta) {
            deletionStart = selection.start;
            deletionEnd = selection.end;
        } else if (is_backspace_1.isBackspace(options.event)) {
            deletionStart = Math.max(0, selection.start - 1);
            deletionEnd = selection.start;
        } else {
            // Handle forward delete
            deletionStart = selection.start;
            deletionEnd = Math.min(value.length, selection.start + 1);
        }
        return {
            selection: {
                start: deletionStart,
                end: deletionStart
            },
            value: value.substr(0, deletionStart) + value.substr(deletionEnd)
        };
    };
    return PatternFormatter;
}();
exports.PatternFormatter = PatternFormatter;

},{"1f5ff224a61c7998":"jx52n","ef05ada64cf78374":"bCGFT"}],"jx52n":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePattern = void 0;
var ALPHA_REGEX = /[A-Za-z]/;
var DIGIT_REGEX = /\d/;
var WILD_REGEX = /./;
var PLACEHOLDER_REGEX = /^[A-Za-z0-9\*]$/;
var PLACEHOLDER_PATTERN = "({{[^}]+}})";
var PERMACHAR_REGEX = "(\\s|\\S)";
var PATTERN_REGEX = new RegExp(PLACEHOLDER_PATTERN + "|" + PERMACHAR_REGEX, "g");
var PLACEHOLDER_PATTERN_REGEX = new RegExp("^" + PLACEHOLDER_PATTERN + "$");
var replacerRegex = new RegExp("{|}", "g");
function isDigit(char) {
    return DIGIT_REGEX.test(char);
}
function isAlpha(char) {
    return ALPHA_REGEX.test(char);
}
function createRegexForChar(char) {
    if (isDigit(char)) return DIGIT_REGEX;
    else if (isAlpha(char)) return ALPHA_REGEX;
    return WILD_REGEX;
}
function isPlaceholder(char) {
    return PLACEHOLDER_REGEX.test(char);
}
function isPlaceholderPattern(str) {
    return PLACEHOLDER_PATTERN_REGEX.test(str);
}
function parsePattern(patternString) {
    var patternArray = [];
    var patternParts = patternString.match(PATTERN_REGEX);
    if (!patternParts) return patternArray;
    for(var index = 0, i = 0; i < patternParts.length; i++){
        var patternPart = patternParts[i];
        if (isPlaceholderPattern(patternPart)) {
            var placeholderChars = patternPart.replace(replacerRegex, "").split("");
            for(var j = 0; j < placeholderChars.length; j++){
                var placeholderChar = placeholderChars[j];
                if (!isPlaceholder(placeholderChar)) throw new Error("Only alphanumeric or wildcard pattern matchers are allowed");
                patternArray.push({
                    value: createRegexForChar(placeholderChar),
                    isPermaChar: false,
                    index: index++
                });
            }
        } else patternArray.push({
            value: patternPart,
            isPermaChar: true,
            index: index++
        });
    }
    return patternArray;
}
exports.parsePattern = parsePattern;

},{}],"6xmWb":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AndroidChromeStrategy = void 0;
var key_cannot_mutate_value_1 = require("f4a72b21e56161a8");
var base_1 = require("a7048c4be722dc46");
var input_selection_1 = require("570b54ead3349ba8");
var AndroidChromeStrategy = /** @class */ function(_super) {
    __extends(AndroidChromeStrategy, _super);
    function AndroidChromeStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidChromeStrategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(event) {
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            _this.unformatInput();
        });
        // 'keypress' is not fired with some Android keyboards (see #23)
        this.inputElement.addEventListener("keypress", function(event) {
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            _this.unformatInput();
        });
        this.inputElement.addEventListener("keyup", function() {
            _this.reformatInput();
        });
        this.inputElement.addEventListener("input", function() {
            _this.reformatInput();
        });
        this.inputElement.addEventListener("paste", function(event) {
            event.preventDefault();
            _this.pasteEventHandler(event);
        });
    };
    AndroidChromeStrategy.prototype.prePasteEventHandler = function() {
    // the default strategy calls preventDefault here
    // but that removes the clipboard data in Android chrome
    // so we noop instead
    };
    AndroidChromeStrategy.prototype.postPasteEventHandler = function() {
        var _this = this;
        // the default strategy calls this without a timeout
        setTimeout(function() {
            _this.reformatAfterPaste();
        }, 0);
    };
    AndroidChromeStrategy.prototype.afterReformatInput = function(formattedState) {
        var input = this.inputElement;
        // Some Android Chrome keyboards (notably Samsung)
        // cause the browser to not know that the value
        // of the input has changed when adding
        // permacharacters. This results in the selection
        // putting the cursor before the permacharacter,
        // instead of after.
        //
        // There is also the case of some Android Chrome
        // keyboards reporting a ranged selection on the
        // first character input. Restricted Input maintains
        // that range even though it is incorrect from the
        // keyboard.
        //
        // To resolve these issues we setTimeout and reset
        // the selection to the formatted end position.
        setTimeout(function() {
            var formattedSelection = formattedState.selection;
            input_selection_1.set(input, formattedSelection.end, formattedSelection.end);
        }, 0);
    };
    return AndroidChromeStrategy;
}(base_1.BaseStrategy);
exports.AndroidChromeStrategy = AndroidChromeStrategy;

},{"f4a72b21e56161a8":"cbCy3","a7048c4be722dc46":"dR402","570b54ead3349ba8":"2gSp4"}],"5JFC5":[function(require,module,exports) {
"use strict";
// Android Devices on KitKat use Chromium based webviews. For some reason,
// the value of the inputs are not accessible in the event loop where the
// key event listeners are called. This causes formatting to get stuck
// on permacharacters. By putting them in setTimeouts, this fixes the
// problem. This causes other problems in non-webviews, so we give it
// its own strategy.
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KitKatChromiumBasedWebViewStrategy = void 0;
var android_chrome_1 = require("825dffb36ce60b0f");
var KitKatChromiumBasedWebViewStrategy = /** @class */ function(_super) {
    __extends(KitKatChromiumBasedWebViewStrategy, _super);
    function KitKatChromiumBasedWebViewStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KitKatChromiumBasedWebViewStrategy.prototype.reformatInput = function() {
        var _this = this;
        setTimeout(function() {
            _super.prototype.reformatInput.call(_this);
        }, 0);
    };
    KitKatChromiumBasedWebViewStrategy.prototype.unformatInput = function() {
        var _this = this;
        setTimeout(function() {
            _super.prototype.unformatInput.call(_this);
        }, 0);
    };
    return KitKatChromiumBasedWebViewStrategy;
}(android_chrome_1.AndroidChromeStrategy);
exports.KitKatChromiumBasedWebViewStrategy = KitKatChromiumBasedWebViewStrategy;

},{"825dffb36ce60b0f":"6xmWb"}],"1MWrj":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IE9Strategy = void 0;
var base_1 = require("b0eb3b16a61e16ca");
var key_cannot_mutate_value_1 = require("2ee95935e0e5a1d0");
var input_selection_1 = require("2a33819b3cc5c8ee");
function padSelection(selection, pad) {
    return {
        start: selection.start + pad,
        end: selection.end + pad
    };
}
var IE9Strategy = /** @class */ function(_super) {
    __extends(IE9Strategy, _super);
    function IE9Strategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IE9Strategy.prototype.getUnformattedValue = function() {
        return base_1.BaseStrategy.prototype.getUnformattedValue.call(this, true);
    };
    IE9Strategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(event) {
            _this.keydownListener(event);
        });
        this.inputElement.addEventListener("focus", function() {
            _this.format();
        });
        this.inputElement.addEventListener("paste", function(event) {
            _this.pasteEventHandler(event);
        });
    };
    IE9Strategy.prototype.format = function() {
        var input = this.inputElement;
        var stateToFormat = this.getStateToFormat();
        var formattedState = this.formatter.format(stateToFormat);
        input.value = formattedState.value;
        input_selection_1.set(input, formattedState.selection.start, formattedState.selection.end);
    };
    IE9Strategy.prototype.keydownListener = function(event) {
        if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
        event.preventDefault();
        if (this.isDeletion(event)) this.stateToFormat = this.formatter.simulateDeletion({
            event: event,
            selection: input_selection_1.get(this.inputElement),
            value: this.inputElement.value
        });
        else {
            // IE9 does not update the input's value attribute
            // during key events, only after they complete.
            // We must retrieve the key from event.key and
            // add it to the input's value before formatting.
            var oldValue = this.inputElement.value;
            var selection = input_selection_1.get(this.inputElement);
            var newValue = oldValue.slice(0, selection.start) + event.key + oldValue.slice(selection.start);
            selection = padSelection(selection, 1);
            this.stateToFormat = {
                selection: selection,
                value: newValue
            };
            if (selection.start === newValue.length) this.stateToFormat = this.formatter.unformat(this.stateToFormat);
        }
        this.format();
    };
    IE9Strategy.prototype.reformatAfterPaste = function() {
        var input = this.inputElement;
        var selection = input_selection_1.get(this.inputElement);
        var value = this.formatter.format({
            selection: selection,
            value: input.value
        }).value;
        selection = padSelection(selection, 1);
        input.value = value;
        // IE9 sets the selection to the end of the input
        // manually setting it in a setTimeout puts it
        // in the correct position after pasting
        setTimeout(function() {
            input_selection_1.set(input, selection.start, selection.end);
        }, 0);
    };
    return IE9Strategy;
}(base_1.BaseStrategy);
exports.IE9Strategy = IE9Strategy;

},{"b0eb3b16a61e16ca":"dR402","2ee95935e0e5a1d0":"cbCy3","2a33819b3cc5c8ee":"2gSp4"}],"fl4aQ":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NoopKeyboardStrategy = void 0;
var strategy_interface_1 = require("69678c37e1e62446");
var NoopKeyboardStrategy = /** @class */ function(_super) {
    __extends(NoopKeyboardStrategy, _super);
    function NoopKeyboardStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopKeyboardStrategy.prototype.getUnformattedValue = function() {
        return this.inputElement.value;
    };
    NoopKeyboardStrategy.prototype.setPattern = function() {
    // noop
    };
    return NoopKeyboardStrategy;
}(strategy_interface_1.StrategyInterface);
exports.NoopKeyboardStrategy = NoopKeyboardStrategy;

},{"69678c37e1e62446":"eR489"}]},["k913x","bB7Pu"], "bB7Pu", "parcelRequire7921")

//# sourceMappingURL=index2.3d214d75.js.map
