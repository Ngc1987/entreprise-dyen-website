"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menuiserie",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Fonction de préchargement\nconst preloadImage = (src)=>{\n    const img = new window.Image();\n    img.src = src;\n};\n// Mapping des routes vers les images hero\nconst routeImages = {\n    \"/\": _utils_constants__WEBPACK_IMPORTED_MODULE_3__.IMAGES.hero.home,\n    \"/chalets\": _utils_constants__WEBPACK_IMPORTED_MODULE_3__.IMAGES.hero.chalets,\n    \"/menuiserie\": _utils_constants__WEBPACK_IMPORTED_MODULE_3__.IMAGES.hero.menuiserie,\n    \"/contact\": _utils_constants__WEBPACK_IMPORTED_MODULE_3__.IMAGES.hero.contact\n};\n// Composant Link personnalisé\nfunction NavLink(param) {\n    let { href, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"block py-2 hover:text-primary transition-colors\",\n        onMouseEnter: ()=>{\n            if (routeImages[href]) {\n                preloadImage(routeImages[href]);\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = NavLink;\nfunction Header() {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setIsScrolled(window.scrollY > 50);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white \".concat(isScrolled ? \"shadow-xl\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between h-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/logo.png\",\n                            alt: \"Entreprise D'Yen Logo\",\n                            className: \"h-12 w-auto\"\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden flex items-center justify-center w-10 h-10\",\n                        onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hamburger-icon \".concat(isMenuOpen ? \"open\" : \"\"),\n                            children: isMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.X, {\n                                size: 24\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                size: 24\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 47\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.CSSTransition, {\n                        in: isMenuOpen,\n                        timeout: 300,\n                        classNames: \"menu\",\n                        unmountOnExit: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"absolute left-0 right-0 top-20 bg-white shadow-lg p-4 w-full z-50 md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                        href: \"/\",\n                                        children: \"Accueil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                        href: \"/chalets\",\n                                        children: \"Chalets\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                        href: \"/menuiserie\",\n                                        children: \"Menuiserie\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                        href: \"/galerie\",\n                                        children: \"Galerie\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                        href: \"/contact\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden md:flex md:items-center md:space-x-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/\",\n                                children: \"Accueil\"\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/chalets\",\n                                children: \"Chalets\"\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/menuiserie\",\n                                children: \"Menuiserie\"\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/galerie\",\n                                children: \"Galerie\"\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/thomas/Bureau/Athoms/Chalets/components/Header.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"wcf3U8/NDcncqNPQTEEGYFGEme8=\");\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXOzs7Ozs7MENBR3pCLDhEQUFDRDtnQ0FBUUMsTUFBSzswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQztHQXpGd0JJO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeD81NjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBJTUFHRVMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG4vLyBGb25jdGlvbiBkZSBwcsOpY2hhcmdlbWVudFxuY29uc3QgcHJlbG9hZEltYWdlID0gKHNyYykgPT4ge1xuICBjb25zdCBpbWcgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gIGltZy5zcmMgPSBzcmM7XG59O1xuXG4vLyBNYXBwaW5nIGRlcyByb3V0ZXMgdmVycyBsZXMgaW1hZ2VzIGhlcm9cbmNvbnN0IHJvdXRlSW1hZ2VzID0ge1xuICAnLyc6IElNQUdFUy5oZXJvLmhvbWUsXG4gICcvY2hhbGV0cyc6IElNQUdFUy5oZXJvLmNoYWxldHMsXG4gICcvbWVudWlzZXJpZSc6IElNQUdFUy5oZXJvLm1lbnVpc2VyaWUsXG4gICcvY29udGFjdCc6IElNQUdFUy5oZXJvLmNvbnRhY3QsXG59O1xuXG4vLyBDb21wb3NhbnQgTGluayBwZXJzb25uYWxpc8OpXG5mdW5jdGlvbiBOYXZMaW5rKHsgaHJlZiwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIFxuICAgICAgaHJlZj17aHJlZn0gXG4gICAgICBjbGFzc05hbWU9XCJibG9jayBweS0yIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgaWYgKHJvdXRlSW1hZ2VzW2hyZWZdKSB7XG4gICAgICAgICAgcHJlbG9hZEltYWdlKHJvdXRlSW1hZ2VzW2hyZWZdKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIFxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYmctd2hpdGUgJHtcbiAgICAgICAgaXNTY3JvbGxlZCA/ICdzaGFkb3cteGwnIDogJydcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMjBcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJFbnRyZXByaXNlIEQnWWVuIExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctYXV0b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTAgaC0xMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhhbWJ1cmdlci1pY29uICR7aXNNZW51T3BlbiA/ICdvcGVuJyA6ICcnfWB9PlxuICAgICAgICAgICAgICB7aXNNZW51T3BlbiA/IDxYIHNpemU9ezI0fSAvPiA6IDxNZW51IHNpemU9ezI0fSAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICBpbj17aXNNZW51T3Blbn1cbiAgICAgICAgICAgIHRpbWVvdXQ9ezMwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJtZW51XCJcbiAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCByaWdodC0wIHRvcC0yMCBiZy13aGl0ZSBzaGFkb3ctbGcgcC00IHctZnVsbCB6LTUwIG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICBBY2N1ZWlsXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvY2hhbGV0c1wiPlxuICAgICAgICAgICAgICAgICAgQ2hhbGV0c1xuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL21lbnVpc2VyaWVcIj5cbiAgICAgICAgICAgICAgICAgIE1lbnVpc2VyaWVcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9nYWxlcmllXCI+XG4gICAgICAgICAgICAgICAgICBHYWxlcmllXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtOFwiPlxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgQWNjdWVpbFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jaGFsZXRzXCI+XG4gICAgICAgICAgICAgIENoYWxldHNcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbWVudWlzZXJpZVwiPlxuICAgICAgICAgICAgICBNZW51aXNlcmllXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2dhbGVyaWVcIj5cbiAgICAgICAgICAgICAgR2FsZXJpZVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lbnUiLCJYIiwiQ1NTVHJhbnNpdGlvbiIsIklNQUdFUyIsInByZWxvYWRJbWFnZSIsInNyYyIsImltZyIsIndpbmRvdyIsIkltYWdlIiwicm91dGVJbWFnZXMiLCJoZXJvIiwiaG9tZSIsImNoYWxldHMiLCJtZW51aXNlcmllIiwiY29udGFjdCIsIk5hdkxpbmsiLCJocmVmIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJIZWFkZXIiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiZGl2IiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsInNpemUiLCJpbiIsInRpbWVvdXQiLCJjbGFzc05hbWVzIiwidW5tb3VudE9uRXhpdCIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});