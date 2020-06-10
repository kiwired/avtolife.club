webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/index.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Maxim/git/avtolife.club/pages/_app.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar SEO = {\n  // title: \"%s - AvtoLife\",\n  titleTemplate: '%s',\n  openGraph: {\n    type: 'website',\n    locale: 'ru_RU',\n    site_name: 'AvtoLife'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // const [viewport, setViewport] = React.useState('user-scalable=no, width=1280')\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('width=device-width, initial-scale=1.0, maximum-scale=1.0'),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      viewport = _React$useState2[0],\n      setViewport = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var viewport = document.querySelector('meta[name=\"viewport\"]');\n\n    var onResize = function onResize() {\n      // let meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0'\n      var meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';\n      viewport.setAttribute('content', 'width=device-width');\n      var width = window.innerWidth || document.documentElement.innerWidth;\n      var fontSize = width / 480 * 100 + '%';\n\n      if (width > 640) {\n        fontSize = width / 1280 * 100 + '%';\n        meta = 'user-scalable=no, width=1280';\n      } // setViewport(meta)\n\n\n      viewport.setAttribute('content', meta);\n      document.documentElement.style.fontSize = fontSize;\n    };\n\n    window.addEventListener('load', onResize);\n    window.addEventListener('resize', onResize);\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }\n  }, __jsx(\"meta\", {\n    name: \"viewport\",\n    content: viewport,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"//fonts.googleapis.com/css?family=Aleo:400,700|Roboto:100,100i,300,300i,400,500,500i&display=swap&subset=cyrillic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"DefaultSeo\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, SEO, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }\n  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"CorporateContactJsonLd\"], {\n    url: \"https://avtolife.club/\",\n    logo: \"https://avtolife.club/img/logo.svg\",\n    contactPoint: [{\n      telephone: '+7(3812)49-25-00',\n      contactType: 'customer service',\n      areaServed: 'RU',\n      availableLanguage: ['Russia']\n    }, {\n      telephone: '+7(908)315-63-07',\n      contactType: 'customer service',\n      areaServed: 'RU',\n      availableLanguage: ['Russia']\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }\n  }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"LocalBusinessJsonLd\"], {\n    type: \"AutomotiveBusiness\",\n    id: \"https://avtolife.club/\",\n    name: \"AvtoLife\",\n    description: \"\\u0421\\u0442\\u0443\\u0434\\u0438\\u044F \\u0441\\u0442\\u0430\\u0439\\u043B\\u0438\\u043D\\u0433\\u0430 \\u0438 \\u0434\\u0435\\u0442\\u0435\\u0439\\u043B\\u0438\\u043D\\u0433\\u0430\",\n    url: \"https://avtolife.club/\",\n    telephone: \"+73812492500\",\n    address: {\n      streetAddress: 'ул. Химиков 60',\n      addressLocality: 'Омск',\n      addressRegion: 'Омская область',\n      postalCode: '644000',\n      addressCountry: 'RU'\n    },\n    geo: {\n      latitude: '55.0568497',\n      longitude: '73.3055238'\n    },\n    images: [],\n    openingHours: [{\n      opens: '10:00',\n      closes: '20:00',\n      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],\n      validFrom: '2020-01-01',\n      validThrough: '2026-01-01'\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 4\n    }\n  }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"SocialProfileJsonLd\"], {\n    type: \"Organization\",\n    name: \"AvtoLife\",\n    url: \"https://avtolife.club/\",\n    sameAs: ['https://vk.com/clubcarbon', 'https://instagram.com/avtolife.club', 'https://ok.ru/avtolife55', 'https://youtube.com/user/avtolifeclub/'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 4\n    }\n  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 4\n    }\n  })));\n}, \"jUE13rE1wVD+UDjGT62ODxnOqno=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIlNFTyIsInRpdGxlVGVtcGxhdGUiLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwic2l0ZV9uYW1lIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblJlc2l6ZSIsIm1ldGEiLCJzZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJmb250U2l6ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlbGVwaG9uZSIsImNvbnRhY3RUeXBlIiwiYXJlYVNlcnZlZCIsImF2YWlsYWJsZUxhbmd1YWdlIiwic3RyZWV0QWRkcmVzcyIsImFkZHJlc3NMb2NhbGl0eSIsImFkZHJlc3NSZWdpb24iLCJwb3N0YWxDb2RlIiwiYWRkcmVzc0NvdW50cnkiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9wZW5zIiwiY2xvc2VzIiwiZGF5T2ZXZWVrIiwidmFsaWRGcm9tIiwidmFsaWRUaHJvdWdoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFFQSxJQUFNQSxHQUFHLEdBQUc7QUFDWDtBQUNBQyxlQUFhLEVBQUUsSUFGSjtBQUdYQyxXQUFTLEVBQUU7QUFDVkMsUUFBSSxFQUFFLFNBREk7QUFFVkMsVUFBTSxFQUFFLE9BRkU7QUFHVkMsYUFBUyxFQUFFO0FBSEQ7QUFIQSxDQUFaO0FBVWUsa0ZBQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBRTVDO0FBRjRDLHdCQUdaQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsMERBQWYsQ0FIWTtBQUFB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RUFBRSxPQUZUO0FBR0NDLGVBQVMsRUFBRSxDQUNWLFFBRFUsRUFFVixTQUZVLEVBR1YsV0FIVSxFQUlWLFVBSlUsRUFLVixRQUxVLEVBTVYsVUFOVSxFQU9WLFFBUFUsQ0FIWjtBQVlDQyxlQUFTLEVBQUUsWUFaWjtBQWFDQyxrQkFBWSxFQUFFO0FBYmYsS0FEYSxDQW5CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJELEVBNkRDLE1BQUMsNERBQUQ7QUFDQyxRQUFJLEVBQUMsY0FETjtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsT0FBRyxFQUFDLHdCQUhMO0FBSUMsVUFBTSxFQUFFLENBQ1AsMkJBRE8sRUFFUCxxQ0FGTyxFQUdQLDBCQUhPLEVBSVAsd0NBSk8sQ0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0RELEVBd0VDLE1BQUMsU0FBRCx5RkFBZWpDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXhFRCxDQUREO0FBNEVBLENBNUdEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtcblx0RGVmYXVsdFNlbyxcblx0Q29ycG9yYXRlQ29udGFjdEpzb25MZCxcblx0TG9jYWxCdXNpbmVzc0pzb25MZCxcblx0U29jaWFsUHJvZmlsZUpzb25MZFxufSBmcm9tICduZXh0LXNlbydcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2NzcydcblxuY29uc3QgU0VPID0ge1xuXHQvLyB0aXRsZTogXCIlcyAtIEF2dG9MaWZlXCIsXG5cdHRpdGxlVGVtcGxhdGU6ICclcycsXG5cdG9wZW5HcmFwaDoge1xuXHRcdHR5cGU6ICd3ZWJzaXRlJyxcblx0XHRsb2NhbGU6ICdydV9SVScsXG5cdFx0c2l0ZV9uYW1lOiAnQXZ0b0xpZmUnLFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcblxuXHQvLyBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IFJlYWN0LnVzZVN0YXRlKCd1c2VyLXNjYWxhYmxlPW5vLCB3aWR0aD0xMjgwJylcblx0Y29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSBSZWFjdC51c2VTdGF0ZSgnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAnKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0XHRjb25zdCB2aWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJyk7XG5cblx0XHRjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcblxuXHRcdFx0Ly8gbGV0IG1ldGEgPSAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAnXG5cdFx0XHRsZXQgbWV0YSA9ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCdcblx0XHRcdHZpZXdwb3J0LnNldEF0dHJpYnV0ZSgnY29udGVudCcsICd3aWR0aD1kZXZpY2Utd2lkdGgnKVxuXG5cdFx0XHRsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJXaWR0aFxuXHRcdFx0bGV0IGZvbnRTaXplID0gKHdpZHRoIC8gNDgwICogMTAwKSArICclJ1xuXG5cdFx0XHRpZiAod2lkdGggPiA2NDApIHtcblx0XHRcdFx0Zm9udFNpemUgPSAod2lkdGggLyAxMjgwICogMTAwKSArICclJ1xuXHRcdFx0XHRtZXRhID0gJ3VzZXItc2NhbGFibGU9bm8sIHdpZHRoPTEyODAnXG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldFZpZXdwb3J0KG1ldGEpXG5cdFx0XHR2aWV3cG9ydC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBtZXRhKVxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uUmVzaXplKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD17dmlld3BvcnR9IC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZW86NDAwLDcwMHxSb2JvdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDUwMCw1MDBpJmRpc3BsYXk9c3dhcCZzdWJzZXQ9Y3lyaWxsaWNcIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PERlZmF1bHRTZW8gey4uLlNFT30gLz5cblx0XHRcdDxDb3Jwb3JhdGVDb250YWN0SnNvbkxkXG5cdFx0XHRcdHVybD1cImh0dHBzOi8vYXZ0b2xpZmUuY2x1Yi9cIlxuXHRcdFx0XHRsb2dvPVwiaHR0cHM6Ly9hdnRvbGlmZS5jbHViL2ltZy9sb2dvLnN2Z1wiXG5cdFx0XHRcdGNvbnRhY3RQb2ludD17W1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRlbGVwaG9uZTogJys3KDM4MTIpNDktMjUtMDAnLFxuXHRcdFx0XHRcdFx0Y29udGFjdFR5cGU6ICdjdXN0b21lciBzZXJ2aWNlJyxcblx0XHRcdFx0XHRcdGFyZWFTZXJ2ZWQ6ICdSVScsXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVMYW5ndWFnZTogWydSdXNzaWEnXSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRlbGVwaG9uZTogJys3KDkwOCkzMTUtNjMtMDcnLFxuXHRcdFx0XHRcdFx0Y29udGFjdFR5cGU6ICdjdXN0b21lciBzZXJ2aWNlJyxcblx0XHRcdFx0XHRcdGFyZWFTZXJ2ZWQ6ICdSVScsXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVMYW5ndWFnZTogWydSdXNzaWEnXSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdfVxuXHRcdFx0Lz5cblx0XHRcdDxMb2NhbEJ1c2luZXNzSnNvbkxkXG5cdFx0XHRcdHR5cGU9XCJBdXRvbW90aXZlQnVzaW5lc3NcIlxuXHRcdFx0XHRpZD1cImh0dHBzOi8vYXZ0b2xpZmUuY2x1Yi9cIlxuXHRcdFx0XHRuYW1lPVwiQXZ0b0xpZmVcIlxuXHRcdFx0XHRkZXNjcmlwdGlvbj1cItCh0YLRg9C00LjRjyDRgdGC0LDQudC70LjQvdCz0LAg0Lgg0LTQtdGC0LXQudC70LjQvdCz0LBcIlxuXHRcdFx0XHR1cmw9XCJodHRwczovL2F2dG9saWZlLmNsdWIvXCJcblx0XHRcdFx0dGVsZXBob25lPVwiKzczODEyNDkyNTAwXCJcblx0XHRcdFx0YWRkcmVzcz17e1xuXHRcdFx0XHRcdHN0cmVldEFkZHJlc3M6ICfRg9C7LiDQpdC40LzQuNC60L7QsiA2MCcsXG5cdFx0XHRcdFx0YWRkcmVzc0xvY2FsaXR5OiAn0J7QvNGB0LonLFxuXHRcdFx0XHRcdGFkZHJlc3NSZWdpb246ICfQntC80YHQutCw0Y8g0L7QsdC70LDRgdGC0YwnLFxuXHRcdFx0XHRcdHBvc3RhbENvZGU6ICc2NDQwMDAnLFxuXHRcdFx0XHRcdGFkZHJlc3NDb3VudHJ5OiAnUlUnLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRnZW89e3tcblx0XHRcdFx0XHRsYXRpdHVkZTogJzU1LjA1Njg0OTcnLFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogJzczLjMwNTUyMzgnLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRpbWFnZXM9e1tdfVxuXHRcdFx0XHRvcGVuaW5nSG91cnM9e1tcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRvcGVuczogJzEwOjAwJyxcblx0XHRcdFx0XHRcdGNsb3NlczogJzIwOjAwJyxcblx0XHRcdFx0XHRcdGRheU9mV2VlazogW1xuXHRcdFx0XHRcdFx0XHQnTW9uZGF5Jyxcblx0XHRcdFx0XHRcdFx0J1R1ZXNkYXknLFxuXHRcdFx0XHRcdFx0XHQnV2VkbmVzZGF5Jyxcblx0XHRcdFx0XHRcdFx0J1RodXJzZGF5Jyxcblx0XHRcdFx0XHRcdFx0J0ZyaWRheScsXG5cdFx0XHRcdFx0XHRcdCdTYXR1cmRheScsXG5cdFx0XHRcdFx0XHRcdCdTdW5kYXknXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dmFsaWRGcm9tOiAnMjAyMC0wMS0wMScsXG5cdFx0XHRcdFx0XHR2YWxpZFRocm91Z2g6ICcyMDI2LTAxLTAxJyxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF19XG5cdFx0XHQvPlxuXHRcdFx0PFNvY2lhbFByb2ZpbGVKc29uTGRcblx0XHRcdFx0dHlwZT1cIk9yZ2FuaXphdGlvblwiXG5cdFx0XHRcdG5hbWU9XCJBdnRvTGlmZVwiXG5cdFx0XHRcdHVybD1cImh0dHBzOi8vYXZ0b2xpZmUuY2x1Yi9cIlxuXHRcdFx0XHRzYW1lQXM9e1tcblx0XHRcdFx0XHQnaHR0cHM6Ly92ay5jb20vY2x1YmNhcmJvbicsXG5cdFx0XHRcdFx0J2h0dHBzOi8vaW5zdGFncmFtLmNvbS9hdnRvbGlmZS5jbHViJyxcblx0XHRcdFx0XHQnaHR0cHM6Ly9vay5ydS9hdnRvbGlmZTU1Jyxcblx0XHRcdFx0XHQnaHR0cHM6Ly95b3V0dWJlLmNvbS91c2VyL2F2dG9saWZlY2x1Yi8nXG5cdFx0XHRcdF19XG5cdFx0XHQvPlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvPlxuXHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ })

})