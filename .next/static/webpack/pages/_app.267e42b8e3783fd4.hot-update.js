"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Review.tsx":
/*!*******************************!*\
  !*** ./components/Review.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/features/reviews/reviewSlice */ \"./redux/features/reviews/reviewSlice.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _utils_getLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/getLocalStorage */ \"./utils/getLocalStorage.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader */ \"./components/Loader.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Review = ()=>{\n    _s();\n    const [getData, setGetData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const { isLoading  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.review);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setTimeout(()=>{\n            dispatch((0,_redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_1__.setLoader)(false));\n        }, 900);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        let data = (0,_utils_getLocalStorage__WEBPACK_IMPORTED_MODULE_3__.getDataFromLocalStorage)();\n        if (data) {\n            setGetData(data);\n        }\n    }, []);\n    const handleDelete = (id)=>{\n        const findData = (0,_utils_getLocalStorage__WEBPACK_IMPORTED_MODULE_3__.getDataFromLocalStorage)().filter((item)=>item.id !== id);\n        setGetData(findData);\n        dispatch((0,_redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_1__.storeUser)(findData));\n        router.push(\"/\");\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined);\n    }\n    if (getData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-center\",\n                children: \"There is no review card available here! Add now!\"\n            }, void 0, false, {\n                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"review-container\",\n            children: getData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"review-container-form\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded\",\n                                style: {\n                                    backgroundColor: \"rgb(230 230 230);\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content-body\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between align-items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"fs-4 text-black\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"d-flex px-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                            href: \"/update/\".concat(item.id),\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__.GrEdit, {\n                                                                className: \"fs-3 fw-bold\",\n                                                                onClick: ()=>{\n                                                                    dispatch((0,_redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_1__.setLoader)(true));\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                                lineNumber: 79,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDelete, {\n                                                            className: \"fs-3 text-danger fw-bold\",\n                                                            onClick: ()=>handleDelete(item.id)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"fs-5 text-secondary\",\n                                            children: item.rocketName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"fs-6 py-3\",\n                                            children: [\n                                                item.description.slice(0, 50),\n                                                \"...\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"btn btn-outline-secondary btn-sm mx-2\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                        href: \"/single/\".concat(item.id),\n                                                        onClick: ()=>dispatch((0,_redux_features_reviews_reviewSlice__WEBPACK_IMPORTED_MODULE_1__.setLoader)(true)),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaExternalLinkAlt, {\n                                                            className: \"fw-bold text-black\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: item.githubUser.avatar_url,\n                                                    alt: item.githubUser.login,\n                                                    height: \"52px\",\n                                                    width: \"52px\",\n                                                    className: \"rounded-circle\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"px-3\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                            className: \"fs-7 fw-bold pb-0 mb-0 text-wrap\",\n                                                            children: item.githubUser.login\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: item.githubUser.html_url,\n                                                            className: \"text-capitalize\",\n                                                            target: \"_blank\",\n                                                            rel: \"noopener noreferrer\",\n                                                            children: \"Github link\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                }, item.id, false, {\n                    fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n            lineNumber: 65,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/venusfrontend/Downloads/sora-union-rockets/components/Review.tsx\",\n        lineNumber: 64,\n        columnNumber: 1\n    }, undefined);\n};\n_s(Review, \"B75fNC2bYDMd/Ib5DIUfsyce3vM=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Review;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\nvar _c;\n$RefreshReg$(_c, \"Review\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNlO29EQUNDQyxLQUFLbkIsS0FBS29CLFVBQVUsQ0FBQ0MsVUFBVTtvREFDL0JDLEtBQUt0QixLQUFLb0IsVUFBVSxDQUFDRyxLQUFLO29EQUMxQkMsUUFBTztvREFDUEMsT0FBTTtvREFDTnRCLFdBQVU7Ozs7Ozs4REFFWiw4REFBQ0Q7b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDdUI7NERBQUd2QixXQUFVO3NFQUNYSCxLQUFLb0IsVUFBVSxDQUFDRyxLQUFLOzs7Ozs7c0VBRXhCLDhEQUFDSTs0REFDQ2hCLE1BQU1YLEtBQUtvQixVQUFVLENBQUNRLFFBQVE7NERBQzlCekIsV0FBVTs0REFDVjBCLFFBQU87NERBQ1BDLEtBQUk7c0VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXZEK0I5QixLQUFLSCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFxRXpEO0dBM0hNWDs7UUFHa0JWLHdEQUFjQTtRQUNyQkUsa0RBQVNBO1FBQ1BILHdEQUFjQTs7O0tBTDNCVztBQTZITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jldmlldy50c3g/ZGQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRMb2FkZXIsIHN0b3JlVXNlciB9IGZyb20gXCJAL3JlZHV4L2ZlYXR1cmVzL3Jldmlld3MvcmV2aWV3U2xpY2VcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCJAL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgUm9ja2V0UHJvcHMgfSBmcm9tIFwiQC91dGlscy9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgeyBNZERlbGV0ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgRmFFeHRlcm5hbExpbmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBSZXZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtnZXREYXRhLCBzZXRHZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZXZpZXcpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkZXIoZmFsc2UpKTtcbiAgICB9LCA5MDApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkYXRhID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRHZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZmluZERhdGEgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgpLmZpbHRlcihcbiAgICAgIChpdGVtOiBSb2NrZXRQcm9wcykgPT4gaXRlbS5pZCAhPT0gaWRcbiAgICApO1xuXG4gICAgc2V0R2V0RGF0YShmaW5kRGF0YSk7XG5cbiAgICBkaXNwYXRjaChzdG9yZVVzZXIoZmluZERhdGEpKTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgPExvYWRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChnZXREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIFRoZXJlIGlzIG5vIHJldmlldyBjYXJkIGF2YWlsYWJsZSBoZXJlISBBZGQgbm93IVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGFpbmVyXCI+XG4gICAge2dldERhdGEubWFwKChpdGVtOiBSb2NrZXRQcm9wcykgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGFpbmVyLWZvcm1cIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBjb250ZW50XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZFwiXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDIzMCAyMzAgMjMwKTtcIiB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00IHRleHQtYmxhY2tcIj57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtgL3VwZGF0ZS8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxHckVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcy0zIGZ3LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRlcih0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICA8TWREZWxldGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnMtMyB0ZXh0LWRhbmdlciBmdy1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmcy01IHRleHQtc2Vjb25kYXJ5XCI+e2l0ZW0ucm9ja2V0TmFtZX08L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZzLTYgcHktM1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDUwKX0uLi57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc20gbXgtMlwiPlxuICAgICAgICAgICAgICAgICAgPE5leHRMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avc2luZ2xlLyR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRMb2FkZXIodHJ1ZSkpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmFFeHRlcm5hbExpbmtBbHQgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uZ2l0aHViVXNlci5hdmF0YXJfdXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmdpdGh1YlVzZXIubG9naW59XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MnB4XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTJweFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmcy03IGZ3LWJvbGQgcGItMCBtYi0wIHRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5naXRodWJVc2VyLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uZ2l0aHViVXNlci5odG1sX3VybH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHaXRodWIgbGlua1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICA8L2Rpdj5cbjwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsic2V0TG9hZGVyIiwic3RvcmVVc2VyIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImdldERhdGFGcm9tTG9jYWxTdG9yYWdlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHckVkaXQiLCJNZERlbGV0ZSIsIkZhRXh0ZXJuYWxMaW5rQWx0IiwiTG9hZGVyIiwiTmV4dExpbmsiLCJSZXZpZXciLCJnZXREYXRhIiwic2V0R2V0RGF0YSIsImlzTG9hZGluZyIsInN0YXRlIiwicmV2aWV3Iiwicm91dGVyIiwiZGlzcGF0Y2giLCJzZXRUaW1lb3V0IiwiZGF0YSIsImhhbmRsZURlbGV0ZSIsImlkIiwiZmluZERhdGEiLCJmaWx0ZXIiLCJpdGVtIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImgzIiwibWFwIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoMiIsInRpdGxlIiwiaHJlZiIsIm9uQ2xpY2siLCJoNCIsInJvY2tldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNsaWNlIiwic3BhbiIsImltZyIsInNyYyIsImdpdGh1YlVzZXIiLCJhdmF0YXJfdXJsIiwiYWx0IiwibG9naW4iLCJoZWlnaHQiLCJ3aWR0aCIsImg2IiwiYSIsImh0bWxfdXJsIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Review.tsx\n"));

/***/ })

});