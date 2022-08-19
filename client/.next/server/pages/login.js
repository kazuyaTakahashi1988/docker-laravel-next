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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n// ログインページ\n\n\nfunction Login() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const changeEmail = (e)=>{\n        setEmail(e.target.value);\n    };\n    const changePassword = (e)=>{\n        setPassword(e.target.value);\n    };\n    const handleClick = ()=>{\n        const loginParams = {\n            email,\n            password\n        };\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/sanctum/csrf-cookie\", {\n            headers: {\n                \"X-Requested-With\": \"XMLHttpRequest\"\n            }\n        }, {\n            withCredentials: true\n        }).then((response1)=>{\n            // ログイン処理\n            axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:8000/login\", loginParams, {\n                withCredentials: true\n            }).then((response)=>{\n                console.log(response.data);\n            });\n        });\n    };\n    // SPA認証済みではないとアクセスできないAPI\n    const handleUserClick = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:8000/api/user\", {\n            withCredentials: true\n        }).then((response)=>{\n            console.log(response.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: changeEmail\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/src/pages/login.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"\\u30D1\\u30B9\\u30EF\\u30FC\\u30C9\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: changePassword\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/src/pages/login.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"\\u30ED\\u30B0\\u30A4\\u30F3\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/src/pages/login.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleUserClick,\n                    children: \"\\u30E6\\u30FC\\u30B6\\u30FC\\u60C5\\u5831\\u3092\\u53D6\\u5F97\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/src/pages/login.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/pages/login.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUZBO0FBRXlCO0FBQ29CO0FBTzlCLFNBQVNFLEtBQUssR0FBRztJQUM5QixNQUFNLEVBWFIsR0FXU0MsS0FBSyxHQVhkLEdBV2dCQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sRUFaUixHQVlTSSxRQUFRLEdBWmpCLEdBWW1CQyxXQUFXLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDLE1BQU1NLFdBQVcsR0FBRyxDQUFDQyxDQUFnQyxHQUFLO1FBQ3hESixRQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDekI7SUFDRCxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0gsQ0FBZ0MsR0FBSztRQUMzREYsV0FBVyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0tBQzVCO0lBRUQsTUFBTUUsV0FBVyxHQUFHLElBQU07UUFDeEIsTUFBTUMsV0FBVyxHQUFnQjtZQUFFVixLQUFLO1lBQUVFLFFBQVE7U0FBRTtRQUNwREwsZ0RBRU0sQ0FBQywyQ0FBMkMsRUFBRTtZQUFDZSxPQUFPLEVBQUU7Z0JBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCO2FBQUU7U0FBQyxFQUFFO1lBQUVDLGVBQWUsRUFBRSxJQUFJO1NBQUUsQ0FBQyxDQUNoSUMsSUFBSSxDQUFDLENBQUNDLFNBQVEsR0FBSztZQUNyQjtZQUN5QmxCLGlEQUNmLENBQ0gsNkJBQTZCLEVBQzdCYSxXQUFXLEVBQ1g7Z0JBQUVHLGVBQWUsRUFBRSxJQUFJO2FBQUUsQ0FDMUIsQ0FDQUMsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSztnQkFDbEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQzthQUMzQixDQUFDO1NBQ0wsQ0FBQztLQUNMO0lBRUQ7SUFDa0MsTUFBNUJDLGVBQWUsR0FBRyxJQUFNO1FBQzVCdkIsZ0RBQVMsQ0FBQyxnQ0FBZ0MsRUFBRTtZQUFFZ0IsZUFBZSxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7WUFDeEZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQztTQUMzQixDQUFDO0tBQ0g7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNFLEtBQUc7O29CQUFDLDRDQUVIO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxRQUFRLEVBQUVuQixXQUFXOzs7Ozs0QkFBSTs7Ozs7O29CQUM1QjswQkFDTiw4REFBQ2lCLEtBQUc7O29CQUFDLGdDQUVIO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxRQUFRLEVBQUVmLGNBQWM7Ozs7OzRCQUFJOzs7Ozs7b0JBQy9COzBCQUNOLDhEQUFDYSxLQUFHOzBCQUNGLDRFQUFDRyxRQUFNO29CQUFDQyxPQUFPLEVBQUVoQixXQUFXOzhCQUFFLDBCQUFJOzs7Ozt3QkFBaUI7Ozs7O29CQUN2QzswQkFDZCw4REFBQ1ksS0FBRzswQkFDRiw0RUFBQ0csUUFBTTtvQkFBQ0MsT0FBTyxFQUFFTCxlQUFlOzhCQUFFLHdEQUFTOzs7Ozt3QkFBUzs7Ozs7b0JBQ2hEOztvQkFDTCxDQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cC1uZXh0Ly4vc3JjL3BhZ2VzL2xvZ2luLnRzeD8xMWUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOODreOCsOOCpOODs+ODmuODvOOCuFxuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBMb2dpblBhcmFtcyA9IHtcbiAgZW1haWw6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGNoYW5nZUVtYWlsID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2luUGFyYW1zOiBMb2dpblBhcmFtcyA9IHsgZW1haWwsIHBhc3N3b3JkIH1cbiAgICBheGlvc1xuICAgICAgLy8gQ1NSRuS/neitt+OBruWIneacn+WMllxuICAgICAgLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NhbmN0dW0vY3NyZi1jb29raWUnLCB7aGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfX0sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbuOAgOOAgOOAgOOAgOOAgC8vIOODreOCsOOCpOODs+WHpueQhlxuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbicsXG4gICAgICAgICAgICBsb2dpblBhcmFtcyxcbiAgICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgLy8gU1BB6KqN6Ki85riI44G/44Gn44Gv44Gq44GE44Go44Ki44Kv44K744K544Gn44GN44Gq44GEQVBJXG4gIGNvbnN0IGhhbmRsZVVzZXJDbGljayA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcicsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICDjg6Hjg7zjg6vjgqLjg4njg6zjgrlcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VFbWFpbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAg44OR44K544Ov44O844OJXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PuODreOCsOOCpOODszwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVzZXJDbGlja30+44Om44O844K244O85oOF5aCx44KS5Y+W5b6XPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNoYW5nZUVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlUGFzc3dvcmQiLCJoYW5kbGVDbGljayIsImxvZ2luUGFyYW1zIiwiZ2V0IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZVVzZXJDbGljayIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

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