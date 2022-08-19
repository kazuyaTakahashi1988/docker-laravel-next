"use strict";
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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n// ログインページ\n\n\nfunction Login() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const changeEmail = (e)=>{\n        setEmail(e.target.value);\n    };\n    const changePassword = (e)=>{\n        setPassword(e.target.value);\n    };\n    const handleClick = ()=>{\n        const loginParams = {\n            email,\n            password\n        };\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/sanctum/csrf-cookie\", {\n            withCredentials: true\n        }).then((response1)=>{\n            // ログイン処理\n            axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:8000/login\", loginParams, {\n                withCredentials: true\n            }).then((response)=>{\n                console.log(response.data);\n            });\n        });\n    };\n    // SPA認証済みではないとアクセスできないAPI\n    const handleUserClick = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/api/user\", {\n            withCredentials: true\n        }).then((response)=>{\n            console.log(response.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: changeEmail\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/src/pages/login.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"\\u30D1\\u30B9\\u30EF\\u30FC\\u30C9\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: changePassword\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/src/pages/login.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"\\u30ED\\u30B0\\u30A4\\u30F3\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/src/pages/login.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleUserClick,\n                    children: \"\\u30E6\\u30FC\\u30B6\\u30FC\\u60C5\\u5831\\u3092\\u53D6\\u5F97\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/src/pages/login.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUZBO0FBRXlCO0FBQ29CO0FBTzlCLFNBQVNFLEtBQUssR0FBRztJQUM5QixNQUFNLEVBWFIsR0FXU0MsS0FBSyxHQVhkLEdBV2dCQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sRUFaUixHQVlTSSxRQUFRLEdBWmpCLEdBWW1CQyxXQUFXLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDLE1BQU1NLFdBQVcsR0FBRyxDQUFDQyxDQUFnQyxHQUFLO1FBQ3hESixRQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDekI7SUFDRCxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0gsQ0FBZ0MsR0FBSztRQUMzREYsV0FBVyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0tBQzVCO0lBRUQsTUFBTUUsV0FBVyxHQUFHLElBQU07UUFDeEIsTUFBTUMsV0FBVyxHQUFnQjtZQUFFVixLQUFLO1lBQUVFLFFBQVE7U0FBRTtRQUNwREwsZ0RBRU0sQ0FBQywyQ0FBMkMsRUFBRTtZQUFFZSxlQUFlLEVBQUUsSUFBSTtTQUFFLENBQUMsQ0FDM0VDLElBQUksQ0FBQyxDQUFDQyxTQUFRLEdBQUs7WUFDckI7WUFDeUJqQixpREFDZixDQUNILDZCQUE2QixFQUM3QmEsV0FBVyxFQUNYO2dCQUFFRSxlQUFlLEVBQUUsSUFBSTthQUFFLENBQzFCLENBQ0FDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7Z0JBQ2xCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUM7YUFDM0IsQ0FBQztTQUNMLENBQUM7S0FDTDtJQUVEO0lBQ2tDLE1BQTVCQyxlQUFlLEdBQUcsSUFBTTtRQUM1QnRCLGdEQUFTLENBQUMsZ0NBQWdDLEVBQUU7WUFBRWUsZUFBZSxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7WUFDeEZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQztTQUMzQixDQUFDO0tBQ0g7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNFLEtBQUc7O29CQUFDLDRDQUVIO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxRQUFRLEVBQUVsQixXQUFXOzs7Ozs0QkFBSTs7Ozs7O29CQUM1QjswQkFDTiw4REFBQ2dCLEtBQUc7O29CQUFDLGdDQUVIO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxRQUFRLEVBQUVkLGNBQWM7Ozs7OzRCQUFJOzs7Ozs7b0JBQy9COzBCQUNOLDhEQUFDWSxLQUFHOzBCQUNGLDRFQUFDRyxRQUFNO29CQUFDQyxPQUFPLEVBQUVmLFdBQVc7OEJBQUUsMEJBQUk7Ozs7O3dCQUFpQjs7Ozs7b0JBQ3ZDOzBCQUNkLDhEQUFDVyxLQUFHOzBCQUNGLDRFQUFDRyxRQUFNO29CQUFDQyxPQUFPLEVBQUVMLGVBQWU7OEJBQUUsd0RBQVM7Ozs7O3dCQUFTOzs7OztvQkFDaEQ7O29CQUNMLENBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dwLW5leHQvLi9zcmMvcGFnZXMvbG9naW4udHN4PzExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g44Ot44Kw44Kk44Oz44Oa44O844K4XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIExvZ2luUGFyYW1zID0ge1xuICBlbWFpbDogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgY2hhbmdlRW1haWwgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9naW5QYXJhbXM6IExvZ2luUGFyYW1zID0geyBlbWFpbCwgcGFzc3dvcmQgfVxuICAgIGF4aW9zXG4gICAgICAvLyBDU1JG5L+d6K2344Gu5Yid5pyf5YyWXG4gICAgICAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc2FuY3R1bS9jc3JmLWNvb2tpZScsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbuOAgOOAgOOAgOOAgOOAgC8vIOODreOCsOOCpOODs+WHpueQhlxuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbicsXG4gICAgICAgICAgICBsb2dpblBhcmFtcyxcbiAgICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgLy8gU1BB6KqN6Ki85riI44G/44Gn44Gv44Gq44GE44Go44Ki44Kv44K744K544Gn44GN44Gq44GEQVBJXG4gIGNvbnN0IGhhbmRsZVVzZXJDbGljayA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcicsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICDjg6Hjg7zjg6vjgqLjg4njg6zjgrlcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VFbWFpbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAg44OR44K544Ov44O844OJXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PuODreOCsOOCpOODszwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVzZXJDbGlja30+44Om44O844K244O85oOF5aCx44KS5Y+W5b6XPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNoYW5nZUVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlUGFzc3dvcmQiLCJoYW5kbGVDbGljayIsImxvZ2luUGFyYW1zIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlVXNlckNsaWNrIiwiZGl2IiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();