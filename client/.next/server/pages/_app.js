/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/gtag.ts":
/*!*************************!*\
  !*** ./src/lib/gtag.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n// lib/gtag.ts\nconst GA_TRACKING_ID = \"UA-********-**\" || 0;\n// PV 測定\nconst pageview = (url)=>{\n    // GA_TRACKING_ID が設定されていない場合は、処理終了\n    if (!GA_TRACKING_ID) return;\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2d0YWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjO0FBQ1AsTUFBTUEsY0FBYyxHQUFHQyxnQkFBNkIsSUFBSSxDQUFFLENBQUM7QUFFbEU7QUFDTyxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0MsR0FBVyxHQUFXO0lBQzdDO0lBQ0EsSUFBSSxDQUFDTCxjQUFjLEVBQUUsT0FBTztJQUM1Qk0sTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFUCxjQUFjLEVBQUU7UUFDcENRLFNBQVMsRUFBRUgsR0FBRztLQUNmLENBQUMsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cC1uZXh0Ly4vc3JjL2xpYi9ndGFnLnRzP2I3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2d0YWcudHNcbmV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX0lEIHx8ICcnO1xuXG4vLyBQViDmuKzlrppcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAvLyBHQV9UUkFDS0lOR19JRCDjgYzoqK3lrprjgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/jgIHlh6bnkIbntYLkuoZcbiAgaWYgKCFHQV9UUkFDS0lOR19JRCkgcmV0dXJuO1xuICB3aW5kb3cuZ3RhZygnY29uZmlnJywgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSk7XG59OyJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/gtag.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/gtag */ \"./src/lib/gtag.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps , router  }) {\n    /* -------------------------------------------------------\n    ▽ ページ遷移毎 に発火するJS処理 ▽\n  ---------------------------------------------------------- */ (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // フェードインのクラス付加\n        setTimeout(()=>{\n            var ref;\n            (ref = document.getElementById(\"contswrap\")) === null || ref === void 0 ? void 0 : ref.classList.add(\"active\");\n        }, 100);\n        return ()=>{\n            var // フェードインのクラス削除\n            ref;\n            (ref = document.getElementById(\"contswrap\")) === null || ref === void 0 ? void 0 : ref.classList.remove(\"active\");\n        };\n    }, [\n        router.pathname,\n        router.query\n    ]);\n    /* -------------------------------------------------------\n    ▽ Google Analytics の処理 ▽\n  ---------------------------------------------------------- */ (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // GA_TRACKING_ID が設定されてる場合の処理\n        if (!_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID) return;\n        const handleRouteChange = (url)=>{\n            (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.pageview)(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    /* -------------------------------------------------------\n    ▽ DOMレンダー ▽\n  ---------------------------------------------------------- */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/usr/src/app/src/pages/_app.tsx\",\n        lineNumber: 44,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUV5QjtBQUNkO0FBRXpDLFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRUMsTUFBTSxHQUFZLEVBQUU7SUFFekQ7OytEQUU2RCxDQUM3REosZ0RBQVMsQ0FBQyxJQUFNO1FBRWQ7UUFDd0JLLFVBQWQsQ0FBQyxJQUFNO2dCQUNmQyxHQUFvQztZQUFwQ0EsQ0FBQUEsR0FBb0MsR0FBcENBLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxjQUFwQ0QsR0FBb0MsV0FBVyxHQUEvQ0EsS0FBQUEsQ0FBK0MsR0FBL0NBLEdBQW9DLENBQUVFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9ELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixPQUFPLElBQU07Z0JBQ1g7WUFDd0JILEdBQVk7WUFBcENBLENBQUFBLEdBQW9DLEdBQXBDQSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsY0FBcENELEdBQW9DLFdBQVcsR0FBL0NBLEtBQUFBLENBQStDLEdBQS9DQSxHQUFvQyxDQUFFRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRSxDQUFDO0tBRUgsRUFBRTtRQUFDTixNQUFNLENBQUNPLFFBQVE7UUFBRVAsTUFBTSxDQUFDUSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRXBDOzsrREFFNkQsQ0FDN0RaLGdEQUFTLENBQUMsSUFBTTtRQUVkO1FBQ3dCLElBQXBCLENBQUNILHFEQUFjLEVBQUUsT0FBTztRQUM1QixNQUFNZ0IsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBVyxHQUFLO1lBQ3pDaEIsbURBQVEsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7UUFDRFYsTUFBTSxDQUFDVyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUgsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQU07WUFDWFQsTUFBTSxDQUFDVyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRUosaUJBQWlCLENBQUMsQ0FBQztTQUM3RCxDQUFDO0tBRUgsRUFBRTtRQUFDVCxNQUFNLENBQUNXLE1BQU07S0FBQyxDQUFDLENBQUM7SUFFcEI7OytEQUU2RCxDQUM3RCxxQkFBTyw4REFBQ2IsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O1lBQUksQ0FBQztDQUVyQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cC1uZXh0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEdBX1RSQUNLSU5HX0lELCBwYWdldmlldyB9IGZyb20gJy4uL2xpYi9ndGFnJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XG4gIFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAg4pa9IOODmuODvOOCuOmBt+enu+avjiDjgavnmbrngavjgZnjgotKU+WHpueQhiDilr1cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgLy8g44OV44Kn44O844OJ44Kk44Oz44Gu44Kv44Op44K55LuY5YqgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRzd3JhcFwiKT8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9LCAxMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyDjg5Xjgqfjg7zjg4njgqTjg7Pjga7jgq/jg6njgrnliYrpmaRcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHN3cmFwXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgfSwgW3JvdXRlci5wYXRobmFtZSwgcm91dGVyLnF1ZXJ5XSk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIOKWvSBHb29nbGUgQW5hbHl0aWNzIOOBruWHpueQhiDilr1cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIC8vIEdBX1RSQUNLSU5HX0lEIOOBjOioreWumuOBleOCjOOBpuOCi+WgtOWQiOOBruWHpueQhlxuICAgIGlmICghR0FfVFJBQ0tJTkdfSUQpIHJldHVybjtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgcGFnZXZpZXcodXJsKTtcbiAgICB9O1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gICAgXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIOKWvSBET03jg6zjg7Pjg4Djg7wg4pa9XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwYWdldmlldyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhdGhuYW1lIiwicXVlcnkiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();