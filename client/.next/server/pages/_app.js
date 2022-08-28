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

/***/ "./src/lib/AuthContext.tsx":
/*!*********************************!*\
  !*** ./src/lib/AuthContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children  })=>{\n    const { 0: userAuth , 1: setUserAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    /* -------------------------------------------------------\n ▽ ホットリロード時、ログインの再判定 ▽\n---------------------------------------------------------- */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${\"http://localhost:8000\"}/api/user`, {\n            withCredentials: true\n        }).then((response)=>{\n            setUserAuth(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            userAuth,\n            setUserAuth\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/usr/src/app/src/lib/AuthContext.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWtFO0FBQ3pDO0FBV2xCLE1BQU1LLFdBQVcsaUJBQUdILG9EQUFhLENBQXNCLElBQUksQ0FBQyxDQUFDO0FBRTdELE1BQU1JLFlBQVksR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBUyxHQUFLO0lBQ25ELE1BQU0sRUFmUixHQWVTQyxRQUFRLEdBZmpCLEdBZW1CQyxXQUFXLE1BQUlOLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRWpEOzs2REFFNkQsQ0FDM0RGLGdEQUFTLENBQUMsSUFBTTtRQUNkRyxnREFBUyxDQUFDLENBQUMsRUFBRU8sdUJBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRUcsZUFBZSxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxRQUF1QixHQUFLO1lBQ3pHUCxXQUFXLENBQUNPLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7U0FDNUIsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ1osV0FBVyxDQUFDYSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFWCxRQUFRO1lBQUVDLFdBQVc7U0FBRTtrQkFDbkRGLFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwLW5leHQvLi9zcmMvbGliL0F1dGhDb250ZXh0LnRzeD84MGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxudHlwZSBJbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJBdXRoOiBhbnk7XG4gIHNldFVzZXJBdXRoOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEluaXRpYWxTdGF0ZSB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXJBdXRoLCBzZXRVc2VyQXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiDilr0g44Ob44OD44OI44Oq44Ot44O844OJ5pmC44CB44Ot44Kw44Kk44Oz44Gu5YaN5Yik5a6aIOKWvVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfSE9TVH0vYXBpL3VzZXJgLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXNwb25zZTogeyBkYXRhOiBhbnkgfSkgPT4ge1xuICAgICAgc2V0VXNlckF1dGgocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJBdXRoLCBzZXRVc2VyQXV0aCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyQXV0aCIsInNldFVzZXJBdXRoIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkFQSV9IT1NUIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/AuthContext.tsx\n");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/gtag */ \"./src/lib/gtag.ts\");\n/* harmony import */ var _lib_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AuthContext */ \"./src/lib/AuthContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps , router  }) {\n    /* -------------------------------------------------------\n   ▽ ページ遷移毎 に発火するJS処理 ▽\n ---------------------------------------------------------- */ (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // フェードインのクラス付加\n        setTimeout(()=>{\n            var ref;\n            (ref = document.getElementById(\"contswrap\")) === null || ref === void 0 ? void 0 : ref.classList.add(\"active\");\n        }, 100);\n        return ()=>{\n            var // フェードインのクラス削除\n            ref;\n            (ref = document.getElementById(\"contswrap\")) === null || ref === void 0 ? void 0 : ref.classList.remove(\"active\");\n        };\n    }, [\n        router.pathname,\n        router.query\n    ]);\n    /* -------------------------------------------------------\n    ▽ Google Analytics の処理 ▽\n  ---------------------------------------------------------- */ (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // GA_TRACKING_ID が設定されてる場合の処理\n        if (!_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID) return;\n        const handleRouteChange = (url)=>{\n            (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.pageview)(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    /* -------------------------------------------------------\n    ▽ DOMレンダー ▽\n  ---------------------------------------------------------- */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/usr/src/app/src/pages/_app.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/src/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFeUI7QUFDTDtBQUNUO0FBRXpDLFNBQVNLLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRUMsTUFBTSxHQUFZLEVBQUU7SUFFekQ7OzhEQUU0RCxDQUM1REosZ0RBQVMsQ0FBQyxJQUFNO1FBRWQ7UUFDd0JLLFVBQWQsQ0FBQyxJQUFNO2dCQUNmQyxHQUFvQztZQUFwQ0EsQ0FBQUEsR0FBb0MsR0FBcENBLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxjQUFwQ0QsR0FBb0MsV0FBVyxHQUEvQ0EsS0FBQUEsQ0FBK0MsR0FBL0NBLEdBQW9DLENBQUVFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9ELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixPQUFPLElBQU07Z0JBQ1g7WUFDd0JILEdBQVk7WUFBcENBLENBQUFBLEdBQW9DLEdBQXBDQSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsY0FBcENELEdBQW9DLFdBQVcsR0FBL0NBLEtBQUFBLENBQStDLEdBQS9DQSxHQUFvQyxDQUFFRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRSxDQUFDO0tBRUgsRUFBRTtRQUFDTixNQUFNLENBQUNPLFFBQVE7UUFBRVAsTUFBTSxDQUFDUSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRXBDOzsrREFFNkQsQ0FDN0RaLGdEQUFTLENBQUMsSUFBTTtRQUVkO1FBQ3dCLElBQXBCLENBQUNKLHFEQUFjLEVBQUUsT0FBTztRQUM1QixNQUFNaUIsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBVyxHQUFLO1lBQ3pDakIsbURBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7UUFDRFYsTUFBTSxDQUFDVyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUgsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQU07WUFDWFQsTUFBTSxDQUFDVyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRUosaUJBQWlCLENBQUMsQ0FBQztTQUM3RCxDQUFDO0tBRUgsRUFBRTtRQUFDVCxNQUFNLENBQUNXLE1BQU07S0FBQyxDQUFDLENBQUM7SUFFcEI7OytEQUU2RCxDQUM3RCxxQkFDRSw4REFBQ2pCLDBEQUFZO2tCQUNYLDRFQUFDSSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FDZjtDQUVIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwLW5leHQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgR0FfVFJBQ0tJTkdfSUQsIHBhZ2V2aWV3IH0gZnJvbSAnLi4vbGliL2d0YWcnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vbGliL0F1dGhDb250ZXh0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAg4pa9IOODmuODvOOCuOmBt+enu+avjiDjgavnmbrngavjgZnjgotKU+WHpueQhiDilr1cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAvLyDjg5Xjgqfjg7zjg4njgqTjg7Pjga7jgq/jg6njgrnku5jliqBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHN3cmFwXCIpPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIOODleOCp+ODvOODieOCpOODs+OBruOCr+ODqeOCueWJiumZpFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250c3dyYXBcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCByb3V0ZXIucXVlcnldKTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAg4pa9IEdvb2dsZSBBbmFseXRpY3Mg44Gu5Yem55CGIOKWvVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAvLyBHQV9UUkFDS0lOR19JRCDjgYzoqK3lrprjgZXjgozjgabjgovloLTlkIjjga7lh6bnkIZcbiAgICBpZiAoIUdBX1RSQUNLSU5HX0lEKSByZXR1cm47XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIHBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIOKWvSBET03jg6zjg7Pjg4Djg7wg4pa9XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJBdXRoUHJvdmlkZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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