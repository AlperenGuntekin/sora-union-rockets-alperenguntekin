/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fvenusfrontend%2FDownloads%2Fsora-union-rockets%2Fpages%2Findex.tsx&page=%2F!":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fvenusfrontend%2FDownloads%2Fsora-union-rockets%2Fpages%2Findex.tsx&page=%2F! ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnZlbnVzZnJvbnRlbmQlMkZEb3dubG9hZHMlMkZzb3JhLXVuaW9uLXJvY2tldHMlMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2Y0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fvenusfrontend%2FDownloads%2Fsora-union-rockets%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./components/index.tsx\");\n/* harmony import */ var _redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/features/reviews/reviewSlice */ \"./redux/features/reviews/reviewSlice.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _utils_getLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/getLocalStorage */ \"./utils/getLocalStorage.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = (param)=>{\n    let { githubUsers  } = param;\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const data = githubUsers === null || githubUsers === void 0 ? void 0 : githubUsers.items;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        let defaultData = (0,_utils_getLocalStorage__WEBPACK_IMPORTED_MODULE_4__.getUsersFromLocalStorage)().data;\n        if (defaultData) {\n            dispatch((0,_redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_2__.defaultUser)(defaultData));\n        } else {\n            dispatch((0,_redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_2__.defaultUser)(data));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Review, {}, void 0, false, {\n                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"DKdeqxp2QYw2p6z8/ErYMRK/Ubo=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDcUI7QUFDcEI7QUFDb0I7QUFJakM7QUFFbEMsTUFBTU0sT0FBTyxTQUFrQztRQUFqQyxFQUFFQyxZQUFXLEVBQWU7O0lBQ3hDLE1BQU1DLFdBQVdMLDREQUFjQTtJQUMvQixNQUFNTSxPQUFPRix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFHLEtBQUs7SUFFL0JMLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTSxjQUFjUCxnRkFBd0JBLEdBQUdLLElBQUk7UUFFakQsSUFBSUUsYUFBYTtZQUNmSCxTQUFTTixnRkFBV0EsQ0FBQ1M7UUFDdkIsT0FBTztZQUNMSCxTQUFTTixnRkFBV0EsQ0FBQ087UUFDdkIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2IsK0NBQU1BOzs7OzswQkFDUCw4REFBQ0MsK0NBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBbkJNSzs7UUFDYUgsd0RBQWNBOzs7S0FEM0JHOztBQXVDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIsIFJldmlldyB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IGRlZmF1bHRVc2VyIH0gZnJvbSBcIkAvcmVkdXgvZmVhdHVyZXMvcmV2aWV3cy9yZXZpZXdTbGljZVwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgZ2V0VXNlcnNGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIkAvdXRpbHMvZ2V0TG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBHaXRodWJQcm9wcyB9IGZyb20gXCJAL3V0aWxzL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiQC91dGlscy9Sb3V0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoeyBnaXRodWJVc2VycyB9OiBHaXRodWJQcm9wcykgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IGRhdGEgPSBnaXRodWJVc2Vycz8uaXRlbXM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZGVmYXVsdERhdGEgPSBnZXRVc2Vyc0Zyb21Mb2NhbFN0b3JhZ2UoKS5kYXRhO1xuXG4gICAgaWYgKGRlZmF1bHREYXRhKSB7XG4gICAgICBkaXNwYXRjaChkZWZhdWx0VXNlcihkZWZhdWx0RGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChkZWZhdWx0VXNlcihkYXRhKSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxSZXZpZXcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCByZXNwb25zZSA9IG51bGw7XG5cbiAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9L3VzZXJzP3E9UWApO1xuXG4gIGlmICghcmVzcG9uc2UuZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6IFwiRGF0YSBub3QgZmV0Y2hlZFwiLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBnaXRodWJVc2VyczogcmVzcG9uc2UuZGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZXZpZXciLCJkZWZhdWx0VXNlciIsInVzZUFwcERpc3BhdGNoIiwiZ2V0VXNlcnNGcm9tTG9jYWxTdG9yYWdlIiwidXNlRWZmZWN0IiwiSG9tZSIsImdpdGh1YlVzZXJzIiwiZGlzcGF0Y2giLCJkYXRhIiwiaXRlbXMiLCJkZWZhdWx0RGF0YSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fvenusfrontend%2FDownloads%2Fsora-union-rockets%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);