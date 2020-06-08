webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/index.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Maxim/git/avtolife.club/pages/_app.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar SEO = {\n  // title: \"%s - AvtoLife\",\n  titleTemplate: '%s',\n  openGraph: {\n    type: 'website',\n    locale: 'ru_RU',\n    site_name: 'AvtoLife'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('user-scalable=no, width=1280'),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      viewport = _React$useState2[0],\n      setViewport = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var onResize = function onResize() {\n      var width = window.innerWidth || document.documentElement.innerWidth;\n      var meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';\n      var fontSize = width / 480 * 100 + '%';\n\n      if (width > 640) {\n        fontSize = width / 1280 * 100 + '%';\n        meta = 'user-scalable=no, width=1280';\n      }\n\n      setViewport(meta);\n      document.documentElement.style.fontSize = fontSize;\n    };\n\n    window.addEventListener('load', onResize);\n    window.addEventListener('resize', onResize);\n  });\n  return __jsx(next_app__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }\n  }, __jsx(\"meta\", {\n    name: \"viewport\",\n    content: viewport,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"//fonts.googleapis.com/css?family=Aleo:400,700|Roboto:100,100i,300,300i,400,500,500i&display=swap&subset=cyrillic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__[\"CorporateContactJsonLd\"], {\n    url: \"https://avtolife.club/\",\n    logo: \"https://avtolife.club/img/logo.svg\",\n    contactPoint: [{\n      telephone: '+7(3812)49-25-00',\n      contactType: 'customer service',\n      areaServed: 'RU',\n      availableLanguage: ['Russia']\n    }, {\n      telephone: '+7(908)315-63-07',\n      contactType: 'customer service',\n      areaServed: 'RU',\n      availableLanguage: ['Russia']\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }\n  }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__[\"LocalBusinessJsonLd\"], {\n    type: \"AutomotiveBusiness\",\n    id: \"https://avtolife.club/\",\n    name: \"AvtoLife\",\n    description: \"\\u0421\\u0442\\u0443\\u0434\\u0438\\u044F \\u0441\\u0442\\u0430\\u0439\\u043B\\u0438\\u043D\\u0433\\u0430 \\u0438 \\u0434\\u0435\\u0442\\u0435\\u0439\\u043B\\u0438\\u043D\\u0433\\u0430\",\n    url: \"https://avtolife.club/\",\n    telephone: \"+73812492500\",\n    address: {\n      streetAddress: 'ул. Химиков 60',\n      addressLocality: 'Омск',\n      addressRegion: 'Омская область',\n      postalCode: '644000',\n      addressCountry: 'RU'\n    },\n    geo: {\n      latitude: '55.0568497',\n      longitude: '73.3055238'\n    },\n    images: [],\n    openingHours: [{\n      opens: '10:00',\n      closes: '20:00',\n      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],\n      validFrom: '2020-01-01',\n      validThrough: '2026-01-01'\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 4\n    }\n  }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__[\"SocialProfileJsonLd\"], {\n    type: \"Organization\",\n    name: \"AvtoLife\",\n    url: \"https://avtolife.club/\",\n    sameAs: ['https://vk.com/clubcarbon', 'https://instagram.com/avtolife.club', 'https://ok.ru/avtolife55', 'https://youtube.com/user/avtolifeclub/'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 4\n    }\n  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 4\n    }\n  })));\n}, \"AfsxmsJyGxOuxxBJ7JqKzcsxcks=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIlNFTyIsInRpdGxlVGVtcGxhdGUiLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwic2l0ZV9uYW1lIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJ1c2VFZmZlY3QiLCJvblJlc2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibWV0YSIsImZvbnRTaXplIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwidGVsZXBob25lIiwiY29udGFjdFR5cGUiLCJhcmVhU2VydmVkIiwiYXZhaWxhYmxlTGFuZ3VhZ2UiLCJzdHJlZXRBZGRyZXNzIiwiYWRkcmVzc0xvY2FsaXR5IiwiYWRkcmVzc1JlZ2lvbiIsInBvc3RhbENvZGUiLCJhZGRyZXNzQ291bnRyeSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib3BlbnMiLCJjbG9zZXMiLCJkYXlPZldlZWsiLCJ2YWxpZEZyb20iLCJ2YWxpZFRocm91Z2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQSxJQUFNQSxHQUFHLEdBQUc7QUFDWDtBQUNBQyxlQUFhLEVBQUUsSUFGSjtBQUdYQyxXQUFTLEVBQUU7QUFDVkMsUUFBSSxFQUFFLFNBREk7QUFFVkMsVUFBTSxFQUFFLE9BRkU7QUFHVkMsYUFBUyxFQUFFO0FBSEQ7QUFIQSxDQUFaO0FBVWUsa0ZBQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsd0JBRVpDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSw4QkFBZixDQUZZO0FBQUE7QUFBQSxNQUVyQ0MsUUFGcUM7QUFBQSxNQUUzQkMs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LE1BQUMsNERBQUQ7QUFDQyxRQUFJLEVBQUMsY0FETjtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsT0FBRyxFQUFDLHdCQUhMO0FBSUMsVUFBTSxFQUFFLENBQ1AsMkJBRE8sRUFFUCxxQ0FGTyxFQUdQLDBCQUhPLEVBSVAsd0NBSk8sQ0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNURELEVBdUVDLE1BQUMsU0FBRCx5RkFBZS9CLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXZFRCxDQUREO0FBMkVBLENBbEdEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7XG5cdERlZmF1bHRTZW8sXG5cdENvcnBvcmF0ZUNvbnRhY3RKc29uTGQsXG5cdExvY2FsQnVzaW5lc3NKc29uTGQsXG5cdFNvY2lhbFByb2ZpbGVKc29uTGRcbn0gZnJvbSAnbmV4dC1zZW8nXG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmNvbnN0IFNFTyA9IHtcblx0Ly8gdGl0bGU6IFwiJXMgLSBBdnRvTGlmZVwiLFxuXHR0aXRsZVRlbXBsYXRlOiAnJXMnLFxuXHRvcGVuR3JhcGg6IHtcblx0XHR0eXBlOiAnd2Vic2l0ZScsXG5cdFx0bG9jYWxlOiAncnVfUlUnLFxuXHRcdHNpdGVfbmFtZTogJ0F2dG9MaWZlJyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cblx0Y29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSBSZWFjdC51c2VTdGF0ZSgndXNlci1zY2FsYWJsZT1ubywgd2lkdGg9MTI4MCcpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcblx0XHRcdGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lcldpZHRoXG5cdFx0XHRsZXQgbWV0YSA9ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCdcblx0XHRcdGxldCBmb250U2l6ZSA9ICh3aWR0aCAvIDQ4MCAqIDEwMCkgKyAnJSdcblxuXHRcdFx0aWYgKHdpZHRoID4gNjQwKSB7XG5cdFx0XHRcdGZvbnRTaXplID0gKHdpZHRoIC8gMTI4MCAqIDEwMCkgKyAnJSdcblx0XHRcdFx0bWV0YSA9ICd1c2VyLXNjYWxhYmxlPW5vLCB3aWR0aD0xMjgwJ1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRWaWV3cG9ydChtZXRhKVxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uUmVzaXplKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXI+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD17dmlld3BvcnR9IC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZW86NDAwLDcwMHxSb2JvdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDUwMCw1MDBpJmRpc3BsYXk9c3dhcCZzdWJzZXQ9Y3lyaWxsaWNcIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PENvcnBvcmF0ZUNvbnRhY3RKc29uTGRcblx0XHRcdFx0dXJsPVwiaHR0cHM6Ly9hdnRvbGlmZS5jbHViL1wiXG5cdFx0XHRcdGxvZ289XCJodHRwczovL2F2dG9saWZlLmNsdWIvaW1nL2xvZ28uc3ZnXCJcblx0XHRcdFx0Y29udGFjdFBvaW50PXtbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGVsZXBob25lOiAnKzcoMzgxMik0OS0yNS0wMCcsXG5cdFx0XHRcdFx0XHRjb250YWN0VHlwZTogJ2N1c3RvbWVyIHNlcnZpY2UnLFxuXHRcdFx0XHRcdFx0YXJlYVNlcnZlZDogJ1JVJyxcblx0XHRcdFx0XHRcdGF2YWlsYWJsZUxhbmd1YWdlOiBbJ1J1c3NpYSddLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGVsZXBob25lOiAnKzcoOTA4KTMxNS02My0wNycsXG5cdFx0XHRcdFx0XHRjb250YWN0VHlwZTogJ2N1c3RvbWVyIHNlcnZpY2UnLFxuXHRcdFx0XHRcdFx0YXJlYVNlcnZlZDogJ1JVJyxcblx0XHRcdFx0XHRcdGF2YWlsYWJsZUxhbmd1YWdlOiBbJ1J1c3NpYSddLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF19XG5cdFx0XHQvPlxuXHRcdFx0PExvY2FsQnVzaW5lc3NKc29uTGRcblx0XHRcdFx0dHlwZT1cIkF1dG9tb3RpdmVCdXNpbmVzc1wiXG5cdFx0XHRcdGlkPVwiaHR0cHM6Ly9hdnRvbGlmZS5jbHViL1wiXG5cdFx0XHRcdG5hbWU9XCJBdnRvTGlmZVwiXG5cdFx0XHRcdGRlc2NyaXB0aW9uPVwi0KHRgtGD0LTQuNGPINGB0YLQsNC50LvQuNC90LPQsCDQuCDQtNC10YLQtdC50LvQuNC90LPQsFwiXG5cdFx0XHRcdHVybD1cImh0dHBzOi8vYXZ0b2xpZmUuY2x1Yi9cIlxuXHRcdFx0XHR0ZWxlcGhvbmU9XCIrNzM4MTI0OTI1MDBcIlxuXHRcdFx0XHRhZGRyZXNzPXt7XG5cdFx0XHRcdFx0c3RyZWV0QWRkcmVzczogJ9GD0LsuINCl0LjQvNC40LrQvtCyIDYwJyxcblx0XHRcdFx0XHRhZGRyZXNzTG9jYWxpdHk6ICfQntC80YHQuicsXG5cdFx0XHRcdFx0YWRkcmVzc1JlZ2lvbjogJ9Ce0LzRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXG5cdFx0XHRcdFx0cG9zdGFsQ29kZTogJzY0NDAwMCcsXG5cdFx0XHRcdFx0YWRkcmVzc0NvdW50cnk6ICdSVScsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGdlbz17e1xuXHRcdFx0XHRcdGxhdGl0dWRlOiAnNTUuMDU2ODQ5NycsXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiAnNzMuMzA1NTIzOCcsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGltYWdlcz17W119XG5cdFx0XHRcdG9wZW5pbmdIb3Vycz17W1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG9wZW5zOiAnMTA6MDAnLFxuXHRcdFx0XHRcdFx0Y2xvc2VzOiAnMjA6MDAnLFxuXHRcdFx0XHRcdFx0ZGF5T2ZXZWVrOiBbXG5cdFx0XHRcdFx0XHRcdCdNb25kYXknLFxuXHRcdFx0XHRcdFx0XHQnVHVlc2RheScsXG5cdFx0XHRcdFx0XHRcdCdXZWRuZXNkYXknLFxuXHRcdFx0XHRcdFx0XHQnVGh1cnNkYXknLFxuXHRcdFx0XHRcdFx0XHQnRnJpZGF5Jyxcblx0XHRcdFx0XHRcdFx0J1NhdHVyZGF5Jyxcblx0XHRcdFx0XHRcdFx0J1N1bmRheSdcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR2YWxpZEZyb206ICcyMDIwLTAxLTAxJyxcblx0XHRcdFx0XHRcdHZhbGlkVGhyb3VnaDogJzIwMjYtMDEtMDEnLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX1cblx0XHRcdC8+XG5cdFx0XHQ8U29jaWFsUHJvZmlsZUpzb25MZFxuXHRcdFx0XHR0eXBlPVwiT3JnYW5pemF0aW9uXCJcblx0XHRcdFx0bmFtZT1cIkF2dG9MaWZlXCJcblx0XHRcdFx0dXJsPVwiaHR0cHM6Ly9hdnRvbGlmZS5jbHViL1wiXG5cdFx0XHRcdHNhbWVBcz17W1xuXHRcdFx0XHRcdCdodHRwczovL3ZrLmNvbS9jbHViY2FyYm9uJyxcblx0XHRcdFx0XHQnaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2F2dG9saWZlLmNsdWInLFxuXHRcdFx0XHRcdCdodHRwczovL29rLnJ1L2F2dG9saWZlNTUnLFxuXHRcdFx0XHRcdCdodHRwczovL3lvdXR1YmUuY29tL3VzZXIvYXZ0b2xpZmVjbHViLydcblx0XHRcdFx0XX1cblx0XHRcdC8+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9Db250YWluZXI+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ })

})