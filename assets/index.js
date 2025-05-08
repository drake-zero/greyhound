(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./node_modules/@rsbuild/core/dist/client/hmr.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerOverlay: () => (registerOverlay)
});
const compilationId = "web_rsbuild-vanilla-ts";
const hmr_config = {"path":"/rsbuild-hmr","port":"","host":"","overlay":true,"reconnect":100};
const resolvedConfig = {"path":"/rsbuild-hmr","port":3000,"host":"localhost","overlay":true,"reconnect":100};
function formatURL(config) {
    const { location } = self;
    const hostname = config.host || location.hostname;
    const port = config.port || location.port;
    const protocol = config.protocol || ('https:' === location.protocol ? 'wss' : 'ws');
    const pathname = config.path || '/rsbuild-hmr';
    if ('undefined' != typeof URL) {
        const url = new URL('http://localhost');
        url.port = String(port);
        url.hostname = hostname;
        url.protocol = protocol;
        url.pathname = pathname;
        url.searchParams.append('compilationId', compilationId);
        return url.toString();
    }
    const colon = -1 === protocol.indexOf(':') ? ':' : '';
    return `${protocol}${colon}//${hostname}:${port}${pathname}`;
}
let isFirstCompilation = true;
let lastCompilationHash = null;
let hasCompileErrors = false;
function clearOutdatedErrors() {
    if (console.clear && hasCompileErrors) console.clear();
}
let createOverlay;
let clearOverlay;
const registerOverlay = (createFn, clearFn)=>{
    createOverlay = createFn;
    clearOverlay = clearFn;
};
function handleSuccess() {
    clearOutdatedErrors();
    const isHotUpdate = !isFirstCompilation;
    isFirstCompilation = false;
    hasCompileErrors = false;
    if (isHotUpdate) tryApplyUpdates();
}
function handleWarnings(param) {
    let { text } = param;
    clearOutdatedErrors();
    const isHotUpdate = !isFirstCompilation;
    isFirstCompilation = false;
    hasCompileErrors = false;
    for(let i = 0; i < text.length; i++){
        if (5 === i) {
            console.warn('There were more warnings in other files, you can find a complete log in the terminal.');
            break;
        }
        console.warn(text[i]);
    }
    if (isHotUpdate) tryApplyUpdates();
}
function handleErrors(param) {
    let { text, html } = param;
    clearOutdatedErrors();
    isFirstCompilation = false;
    hasCompileErrors = true;
    for (const error of text)console.error(error);
    if (createOverlay) createOverlay(html);
}
const isUpdateAvailable = ()=>lastCompilationHash !== __webpack_require__.h();
function tryApplyUpdates() {
    if (!isUpdateAvailable()) return;
    if (!/* unsupported import.meta.webpackHot */ undefined) return void reloadPage();
    if ('idle' !== /* unsupported import.meta.webpackHot */ undefined.status()) return;
    const handleApplyUpdates = (err, updatedModules)=>{
        const forcedReload = err || !updatedModules;
        if (forcedReload) {
            if (err) console.error('[HMR] Forced reload caused by: ', err);
            reloadPage();
            return;
        }
        if (isUpdateAvailable()) tryApplyUpdates();
    };
    /* unsupported import.meta.webpackHot */ undefined.check(true).then((updatedModules)=>handleApplyUpdates(null, updatedModules), (err)=>handleApplyUpdates(err, null));
}
let connection = null;
let reconnectCount = 0;
function onOpen() {
    console.info('[HMR] connected.');
}
function onMessage(e) {
    const message = JSON.parse(e.data);
    if (message.compilationId && message.compilationId !== compilationId) return;
    switch(message.type){
        case 'hash':
            lastCompilationHash = message.data;
            if (clearOverlay && isUpdateAvailable()) clearOverlay();
            break;
        case 'still-ok':
        case 'ok':
            handleSuccess();
            break;
        case 'static-changed':
        case 'content-changed':
            reloadPage();
            break;
        case 'warnings':
            handleWarnings(message.data);
            break;
        case 'errors':
            handleErrors(message.data);
            break;
    }
}
function onClose() {
    if (reconnectCount >= hmr_config.reconnect) {
        if (hmr_config.reconnect > 0) console.info('[HMR] connection failure after maximum reconnect limit exceeded.');
        return;
    }
    console.info('[HMR] disconnected. Attempting to reconnect.');
    removeListeners();
    connection = null;
    reconnectCount++;
    setTimeout(connect, 1000 * 1.5 ** reconnectCount);
}
function onError() {
    if (formatURL(hmr_config) !== formatURL(resolvedConfig)) {
        console.error('[HMR] WebSocket connection error, attempting direct fallback.');
        removeListeners();
        connection = null;
        connect(true);
    }
}
function connect() {
    let fallback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
    const socketUrl = formatURL(fallback ? resolvedConfig : hmr_config);
    connection = new WebSocket(socketUrl);
    connection.addEventListener('open', onOpen);
    connection.addEventListener('close', onClose);
    connection.addEventListener('message', onMessage);
    if (!fallback) connection.addEventListener('error', onError);
}
function removeListeners() {
    if (connection) {
        connection.removeEventListener('open', onOpen);
        connection.removeEventListener('close', onClose);
        connection.removeEventListener('message', onMessage);
        connection.removeEventListener('error', onError);
    }
}
function reloadPage() {
    if (true) window.location.reload();
}
connect();



}),
"./node_modules/@rsbuild/core/dist/client/overlay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _hmr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/dist/client/hmr.js");

function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
const { HTMLElement = class {
}, customElements } = 'undefined' != typeof window ? window : globalThis;
class ErrorOverlay extends HTMLElement {
    constructor(html){
        var _this;
        var _root_querySelector, _root_querySelector1;
        super(), _this = this, _define_property(this, "close", function() {
            let immediate = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
            const remove = ()=>{
                var _this_parentNode;
                return null == (_this_parentNode = _this.parentNode) ? void 0 : _this_parentNode.removeChild(_this);
            };
            if (_this.animate && true !== immediate) _this.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration: 300,
                easing: 'ease-out'
            }).addEventListener('finish', remove);
            else remove();
        });
        if (!this.attachShadow) return void console.warn('[Rsbuild] Current browser version does not support displaying error overlay');
        const root = this.attachShadow({
            mode: 'open'
        });
        root.innerHTML = html;
        null == (_root_querySelector = root.querySelector('.close')) || _root_querySelector.addEventListener('click', this.close);
        this.addEventListener('click', this.close);
        null == (_root_querySelector1 = root.querySelector('.container')) || _root_querySelector1.addEventListener('click', (e)=>{
            if (e.target) {
                const { file } = e.target.dataset;
                if (file) fetch(`/__open-in-editor?file=${encodeURIComponent(file)}`);
            }
            e.stopPropagation();
        });
        const onEscKeydown = (e)=>{
            if ('Escape' === e.key || 'Escape' === e.code) this.close();
            document.removeEventListener('keydown', onEscKeydown);
        };
        document.addEventListener('keydown', onEscKeydown);
    }
}
const overlayId = 'rsbuild-error-overlay';
if (customElements && !customElements.get(overlayId)) customElements.define(overlayId, ErrorOverlay);
function createOverlay(html) {
    clearOverlay();
    document.body.appendChild(new ErrorOverlay(html));
}
function clearOverlay() {
    document.querySelectorAll(overlayId).forEach((n)=>n.close(true));
}
if ('undefined' != typeof document) (0, _hmr__WEBPACK_IMPORTED_MODULE_0__.registerOverlay)(createOverlay, clearOverlay);
else console.info('[Rsbuild] Failed to display error overlay as document is not available, you can disable the `dev.client.overlay` option.');


}),
"./src/index.ts": (function () {
console.log('meow');
console.log(';meow moore');


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("50286cced40a8f45")
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.9")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.3.9";

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module is referenced by other modules so it can't be inlined
__webpack_require__("./node_modules/@rsbuild/core/dist/client/hmr.js");
__webpack_require__("./node_modules/@rsbuild/core/dist/client/overlay.js");
var __webpack_exports__ = __webpack_require__("./src/index.ts");
})()
;
//# sourceMappingURL=index.js.map