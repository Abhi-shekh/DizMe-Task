"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Portfolio_js",{

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup/DetailsPopup */ \"./src/components/popup/DetailsPopup.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\mytya\\\\Downloads\\\\dizme\\\\dizme\\\\src\\\\components\\\\Portfolio.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Portfolio = function Portfolio() {\n  _s();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_utilits__WEBPACK_IMPORTED_MODULE_2__.dataImage)();\n    (0,_utilits__WEBPACK_IMPORTED_MODULE_2__.portfolioHover)();\n  }, []);\n  var data = (0,_utilits__WEBPACK_IMPORTED_MODULE_2__.useUserData)(); // Isotope\n\n  var isotope = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"*\"),\n      filterKey = _useState[0],\n      setFilterKey = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      isotope.current = new (isotope_layout__WEBPACK_IMPORTED_MODULE_0___default())(\".gallery_zoom\", {\n        itemSelector: \".grid-item\",\n        //    layoutMode: \"fitRows\",\n        percentPosition: true,\n        masonry: {\n          columnWidth: \".grid-item\"\n        },\n        animationOptions: {\n          duration: 750,\n          easing: \"linear\",\n          queue: false\n        }\n      });\n    }, 500);\n    return function () {\n      return isotope.current.destroy();\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (isotope.current) {\n      filterKey === \"*\" ? isotope.current.arrange({\n        filter: \"*\"\n      }) : isotope.current.arrange({\n        filter: \".\".concat(filterKey)\n      });\n    }\n  }, [filterKey]);\n\n  var handleFilterKeyChange = function handleFilterKeyChange(key) {\n    return function () {\n      setFilterKey(key);\n    };\n  };\n\n  var activeBtn = function activeBtn(value) {\n    return value === filterKey ? \"current\" : \"\";\n  }; // Popup\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      popup = _useState2[0],\n      setPopup = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      selectedProject = _useState3[0],\n      setSelectedProject = _useState3[1]; // // Function to handle opening of the popup\n\n\n  var handleOpenPopup = function handleOpenPopup(project) {\n    setSelectedProject(project);\n    setPopup(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"dizme_tm_section\",\n    id: \"portfolio\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"dizme_tm_portfolio\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"dizme_tm_main_title\",\n          \"data-align\": \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            children: \"Portfolio\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n            children: \"My Amazing Works\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: \"Most common methods for designing websites that work well on desktop is responsive and adaptive design\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"portfolio_filter\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"dizme_tm_portfolio_titles\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"portfolio_list wow fadeInUp\",\n          \"data-wow-duration\": \"1s\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n            className: \"gallery_zoom grid\",\n            children: data && data.projects && data.projects.map(function (project, i) {\n              return project && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                className: \"detail grid-item\",\n                onClick: function onClick() {\n                  return handleOpenPopup(project);\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                  className: \"inner\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                    className: \"entry dizme_tm_portfolio_animation_wrap\",\n                    \"data-title\": project.title,\n                    \"data-category\": project.description,\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                      className: \"portfolio_popup\",\n                      href: \"#\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                        src: project.image && project.image.url,\n                        alt: \"image\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 139,\n                        columnNumber: 23\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                        className: \"main\",\n                        \"data-img-url\": project.image && project.image.url\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 140,\n                        columnNumber: 23\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 138,\n                      columnNumber: 21\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 133,\n                    columnNumber: 19\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                    className: \"mobile_title\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n                      children: \"Global Evolution\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 147,\n                      columnNumber: 21\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n                      children: \"Detail\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 148,\n                      columnNumber: 21\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 146,\n                    columnNumber: 19\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 132,\n                  columnNumber: 17\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 131,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"brush_1 wow zoomIn\",\n        \"data-wow-duration\": \"1s\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n          src: \"img/brushes/portfolio/1.png\",\n          alt: \"image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"brush_2 wow fadeInRight\",\n        \"data-wow-duration\": \"1s\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n          src: \"img/brushes/portfolio/2.png\",\n          alt: \"image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Portfolio, \"tzB6wPJELjw9m6U2kIlgyX1HcnA=\", false, function () {\n  return [_utilits__WEBPACK_IMPORTED_MODULE_2__.useUserData];\n});\n\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\nvar _c;\n\n$RefreshReg$(_c, \"Portfolio\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QlIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RHLElBQUFBLG1EQUFTO0FBQ1RDLElBQUFBLHdEQUFjO0FBQ2YsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLE1BQU1LLElBQUksR0FBQ0YscURBQVcsRUFBdEIsQ0FOc0IsQ0FRdEI7O0FBQ0EsTUFBTUcsT0FBTyxHQUFHVCw2Q0FBTSxFQUF0Qjs7QUFDQSxrQkFBa0NDLCtDQUFRLENBQUMsR0FBRCxDQUExQztBQUFBLE1BQU9TLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0FaLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkYSxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmSCxNQUFBQSxPQUFPLENBQUNJLE9BQVIsR0FBa0IsSUFBSWYsdURBQUosQ0FBWSxlQUFaLEVBQTZCO0FBQzdDZ0IsUUFBQUEsWUFBWSxFQUFFLFlBRCtCO0FBRTdDO0FBQ0FDLFFBQUFBLGVBQWUsRUFBRSxJQUg0QjtBQUk3Q0MsUUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFVBQUFBLFdBQVcsRUFBRTtBQUROLFNBSm9DO0FBTzdDQyxRQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkMsVUFBQUEsUUFBUSxFQUFFLEdBRE07QUFFaEJDLFVBQUFBLE1BQU0sRUFBRSxRQUZRO0FBR2hCQyxVQUFBQSxLQUFLLEVBQUU7QUFIUztBQVAyQixPQUE3QixDQUFsQjtBQWFELEtBZFMsRUFjUCxHQWRPLENBQVY7QUFlQSxXQUFPO0FBQUEsYUFBTVosT0FBTyxDQUFDSSxPQUFSLENBQWdCUyxPQUFoQixFQUFOO0FBQUEsS0FBUDtBQUNELEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFrQkF2QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVSxPQUFPLENBQUNJLE9BQVosRUFBcUI7QUFDbkJILE1BQUFBLFNBQVMsS0FBSyxHQUFkLEdBQ0lELE9BQU8sQ0FBQ0ksT0FBUixDQUFnQlUsT0FBaEIsQ0FBd0I7QUFBRUMsUUFBQUEsTUFBTTtBQUFSLE9BQXhCLENBREosR0FFSWYsT0FBTyxDQUFDSSxPQUFSLENBQWdCVSxPQUFoQixDQUF3QjtBQUFFQyxRQUFBQSxNQUFNLGFBQU1kLFNBQU47QUFBUixPQUF4QixDQUZKO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0EsU0FBRCxDQU5NLENBQVQ7O0FBT0EsTUFBTWUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxHQUFEO0FBQUEsV0FBUyxZQUFNO0FBQzNDZixNQUFBQSxZQUFZLENBQUNlLEdBQUQsQ0FBWjtBQUNELEtBRjZCO0FBQUEsR0FBOUI7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFdBQVlBLEtBQUssS0FBS2xCLFNBQVYsR0FBc0IsU0FBdEIsR0FBa0MsRUFBOUM7QUFBQSxHQUFsQixDQXZDc0IsQ0F5Q3RCOzs7QUFDQSxtQkFBMEJULCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU80QixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEM3QiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEQ7QUFBQSxNQUFPOEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEIsaUJBM0NzQixDQTZDdEI7OztBQUNBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ25DRixJQUFBQSxrQkFBa0IsQ0FBQ0UsT0FBRCxDQUFsQjtBQUNBSixJQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFrQyxNQUFFLEVBQUMsV0FBckM7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQXFDLHdCQUFXLFFBQWhEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVNFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUE2REU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3REYsZUE4REU7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQTZDLCtCQUFrQixJQUEvRDtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLHNCQUNDdEIsSUFBSSxJQUFJQSxJQUFJLENBQUMyQixRQUFiLElBQ0QzQixJQUFJLENBQUMyQixRQUFMLENBQWNDLEdBQWQsQ0FDRSxVQUFDRixPQUFELEVBQVNHLENBQVQ7QUFBQSxxQkFDQUgsT0FBTyxpQkFDTDtBQUFJLHlCQUFTLEVBQUMsa0JBQWQ7QUFBaUMsdUJBQU8sRUFBRTtBQUFBLHlCQUFNRCxlQUFlLENBQUNDLE9BQUQsQ0FBckI7QUFBQSxpQkFBMUM7QUFBQSx1Q0FDQTtBQUFLLDJCQUFTLEVBQUMsT0FBZjtBQUFBLDBDQUNFO0FBQ0UsNkJBQVMsRUFBQyx5Q0FEWjtBQUVFLGtDQUFZQSxPQUFPLENBQUNJLEtBRnRCO0FBR0UscUNBQWVKLE9BQU8sQ0FBQ0ssV0FIekI7QUFBQSwyQ0FLRTtBQUFHLCtCQUFTLEVBQUMsaUJBQWI7QUFBK0IsMEJBQUksRUFBQyxHQUFwQztBQUFBLDhDQUNFO0FBQUssMkJBQUcsRUFBRUwsT0FBTyxDQUFDTSxLQUFSLElBQWlCTixPQUFPLENBQUNNLEtBQVIsQ0FBY0MsR0FBekM7QUFBOEMsMkJBQUcsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBRUU7QUFDRSxpQ0FBUyxFQUFDLE1BRFo7QUFFRSx3Q0FBY1AsT0FBTyxDQUFDTSxLQUFSLElBQWlCTixPQUFPLENBQUNNLEtBQVIsQ0FBY0M7QUFGL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBY0U7QUFBSyw2QkFBUyxFQUFDLGNBQWY7QUFBQSw0Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsYUFERjtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWlHRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBb0MsNkJBQWtCLElBQXREO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUMsNkJBQVQ7QUFBdUMsYUFBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakdGLGVBb0dFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUF5Qyw2QkFBa0IsSUFBM0Q7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBQyw2QkFBVDtBQUF1QyxhQUFHLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkdELENBaEtEOztHQUFNbEM7VUFNT0Q7OztLQU5QQztBQWlLTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanM/YTZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXNvdG9wZSBmcm9tIFwiaXNvdG9wZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRhdGFJbWFnZSwgcG9ydGZvbGlvSG92ZXIgfSBmcm9tIFwiLi4vdXRpbGl0c1wiO1xyXG5pbXBvcnQgRGV0YWlsc1BvcHVwIGZyb20gXCIuL3BvcHVwL0RldGFpbHNQb3B1cFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXJEYXRhIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGF0YUltYWdlKCk7XHJcbiAgICBwb3J0Zm9saW9Ib3ZlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZGF0YT11c2VVc2VyRGF0YSgpO1xyXG5cclxuICAvLyBJc290b3BlXHJcbiAgY29uc3QgaXNvdG9wZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtmaWx0ZXJLZXksIHNldEZpbHRlcktleV0gPSB1c2VTdGF0ZShcIipcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpc290b3BlLmN1cnJlbnQgPSBuZXcgSXNvdG9wZShcIi5nYWxsZXJ5X3pvb21cIiwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuZ3JpZC1pdGVtXCIsXHJcbiAgICAgICAgLy8gICAgbGF5b3V0TW9kZTogXCJmaXRSb3dzXCIsXHJcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgICAgIG1hc29ucnk6IHtcclxuICAgICAgICAgIGNvbHVtbldpZHRoOiBcIi5ncmlkLWl0ZW1cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA3NTAsXHJcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LCA1MDApO1xyXG4gICAgcmV0dXJuICgpID0+IGlzb3RvcGUuY3VycmVudC5kZXN0cm95KCk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNvdG9wZS5jdXJyZW50KSB7XHJcbiAgICAgIGZpbHRlcktleSA9PT0gXCIqXCJcclxuICAgICAgICA/IGlzb3RvcGUuY3VycmVudC5hcnJhbmdlKHsgZmlsdGVyOiBgKmAgfSlcclxuICAgICAgICA6IGlzb3RvcGUuY3VycmVudC5hcnJhbmdlKHsgZmlsdGVyOiBgLiR7ZmlsdGVyS2V5fWAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2ZpbHRlcktleV0pO1xyXG4gIGNvbnN0IGhhbmRsZUZpbHRlcktleUNoYW5nZSA9IChrZXkpID0+ICgpID0+IHtcclxuICAgIHNldEZpbHRlcktleShrZXkpO1xyXG4gIH07XHJcbiAgY29uc3QgYWN0aXZlQnRuID0gKHZhbHVlKSA9PiAodmFsdWUgPT09IGZpbHRlcktleSA/IFwiY3VycmVudFwiIDogXCJcIik7XHJcblxyXG4gIC8vIFBvcHVwXHJcbiAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyAvLyBGdW5jdGlvbiB0byBoYW5kbGUgb3BlbmluZyBvZiB0aGUgcG9wdXBcclxuICBjb25zdCBoYW5kbGVPcGVuUG9wdXAgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgc2V0UG9wdXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl6bWVfdG1fc2VjdGlvblwiIGlkPVwicG9ydGZvbGlvXCI+XHJcbiAgICAgIHsvKiA8RGV0YWlsc1BvcHVwIG9wZW49e3BvcHVwfSBjbG9zZT17KCkgPT4gc2V0UG9wdXAoZmFsc2UpfSAvPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXptZV90bV9wb3J0Zm9saW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXptZV90bV9tYWluX3RpdGxlXCIgZGF0YS1hbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz5NeSBBbWF6aW5nIFdvcmtzPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTW9zdCBjb21tb24gbWV0aG9kcyBmb3IgZGVzaWduaW5nIHdlYnNpdGVzIHRoYXQgd29yayB3ZWxsIG9uXHJcbiAgICAgICAgICAgICAgZGVza3RvcCBpcyByZXNwb25zaXZlIGFuZCBhZGFwdGl2ZSBkZXNpZ25cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb19maWx0ZXJcIj5cclxuICAgICAgICAgICAgey8qIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjLXBvaW50ZXIgJHthY3RpdmVCdG4oXCIqXCIpfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbHRlcktleUNoYW5nZShcIipcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYy1wb2ludGVyICR7YWN0aXZlQnRuKFwieW91dHViZVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJLZXlDaGFuZ2UoXCJ5b3V0dWJlXCIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBZb3V0dWJlXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjLXBvaW50ZXIgJHthY3RpdmVCdG4oXCJ2aW1lb1wiKX1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJLZXlDaGFuZ2UoXCJ2aW1lb1wiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVmltZW9cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGMtcG9pbnRlciAke2FjdGl2ZUJ0bihcInNvdW5kY2xvdWRcIil9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmlsdGVyS2V5Q2hhbmdlKFwic291bmRjbG91ZFwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU291bmRjbG91ZFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYy1wb2ludGVyICR7YWN0aXZlQnRuKFwicG9wdXBcIil9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmlsdGVyS2V5Q2hhbmdlKFwicG9wdXBcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBvcHVwXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjLXBvaW50ZXIgICR7YWN0aXZlQnRuKFwiZGV0YWlsXCIpfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbHRlcktleUNoYW5nZShcImRldGFpbFwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGV0YWlsXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl6bWVfdG1fcG9ydGZvbGlvX3RpdGxlc1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb19saXN0IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdhbGxlcnlfem9vbSBncmlkXCI+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucHJvamVjdHMgJiZcclxuICAgICAgICAgICAgZGF0YS5wcm9qZWN0cy5tYXAoXHJcbiAgICAgICAgICAgICAgKHByb2plY3QsaSkgPT5cclxuICAgICAgICAgICAgICBwcm9qZWN0ICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZXRhaWwgZ3JpZC1pdGVtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblBvcHVwKHByb2plY3QpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVudHJ5IGRpem1lX3RtX3BvcnRmb2xpb19hbmltYXRpb25fd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10aXRsZT17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWNhdGVnb3J5PXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9ydGZvbGlvX3BvcHVwXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlICYmIHByb2plY3QuaW1hZ2UudXJsfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltZy11cmw9e3Byb2plY3QuaW1hZ2UgJiYgcHJvamVjdC5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkdsb2JhbCBFdm9sdXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRldGFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicnVzaF8xIHdvdyB6b29tSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9icnVzaGVzL3BvcnRmb2xpby8xLnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJydXNoXzIgd293IGZhZGVJblJpZ2h0XCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYnJ1c2hlcy9wb3J0Zm9saW8vMi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvO1xyXG4iXSwibmFtZXMiOlsiSXNvdG9wZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiZGF0YUltYWdlIiwicG9ydGZvbGlvSG92ZXIiLCJEZXRhaWxzUG9wdXAiLCJSZWFjdCIsInVzZVVzZXJEYXRhIiwiUG9ydGZvbGlvIiwiZGF0YSIsImlzb3RvcGUiLCJmaWx0ZXJLZXkiLCJzZXRGaWx0ZXJLZXkiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIml0ZW1TZWxlY3RvciIsInBlcmNlbnRQb3NpdGlvbiIsIm1hc29ucnkiLCJjb2x1bW5XaWR0aCIsImFuaW1hdGlvbk9wdGlvbnMiLCJkdXJhdGlvbiIsImVhc2luZyIsInF1ZXVlIiwiZGVzdHJveSIsImFycmFuZ2UiLCJmaWx0ZXIiLCJoYW5kbGVGaWx0ZXJLZXlDaGFuZ2UiLCJrZXkiLCJhY3RpdmVCdG4iLCJ2YWx1ZSIsInBvcHVwIiwic2V0UG9wdXAiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJoYW5kbGVPcGVuUG9wdXAiLCJwcm9qZWN0IiwicHJvamVjdHMiLCJtYXAiLCJpIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Portfolio.js\n");

/***/ })

});