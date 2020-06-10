webpackHotUpdate("static/development/pages/404.js",{

/***/ "./tags/header/index.jsx":
/*!*******************************!*\
  !*** ./tags/header/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.json */ \"./routes.json\");\nvar _routes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../routes.json */ \"./routes.json\", 1);\n/* harmony import */ var _forms_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/call */ \"./forms/call/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./tags/header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Maxim/git/avtolife.club/tags/header/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var onScroll = function onScroll() {\n    if (!open && window.innerWidth > 768) {\n      setOpen(true);\n    }\n  };\n\n  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return setOpen(function (prev) {\n      var next = !prev;\n\n      if (window.innerWidth > 768) {\n        return true;\n      }\n\n      if (next) {\n        document.body.setAttribute('style', 'overflow: hidden');\n      } else {\n        document.body.removeAttribute('style');\n      }\n\n      return next;\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // console.log('useEffect')\n    window.addEventListener('load', onScroll);\n    window.addEventListener('resize', onScroll); // window.addEventListener('scroll', onScroll)\n\n    return function () {\n      window.removeEventListener('load', onScroll);\n      window.removeEventListener('resize', onScroll); // window.removeEventListener('scroll', onScroll)\n    };\n  });\n  var from = {\n    opacity: 0,\n    transform: 'translate(1.5rem, 0)'\n  };\n  var trans = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useTransition\"])(open, null, {\n    from: from,\n    enter: {\n      opacity: 1,\n      transform: 'translate(0, 0)'\n    },\n    leave: from\n  }); // const style = useSpring({\n  // \t// config: config.stiff,\n  // \tfrom: {\n  // \t\topacity: 0\n  // \t},\n  // \tto: {\n  // \t\t// ...rect.from,\n  // \t\topacity: open ? 1 : 0,\n  // \t\t// transform: open ? `scale(${rect.scale})` : 'scale(0.1)'\n  // \t}\n  // })\n\n  return __jsx(\"header\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 4\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.logo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 6\n    }\n  }, __jsx(\"img\", {\n    src: \"/img/logo.svg\",\n    alt: \"avto life - styling and detailing\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.home,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 6\n    }\n  })), __jsx(\"span\", {\n    className: \"\".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.toggle, \" \").concat(open && _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.active),\n    onClick: onToggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 6\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 6\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 6\n    }\n  })), trans.map(function (_ref) {\n    var item = _ref.item,\n        props = _ref.props,\n        key = _ref.key;\n    return !item ? null : __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n      key: key,\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrap,\n      style: props,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 6\n      }\n    }, __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.overflow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.nav,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    }, _routes_json__WEBPACK_IMPORTED_MODULE_3__.map(function (val, key) {\n      var el = function el(v, k) {\n        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          key: k,\n          href: v.href,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 11\n          }\n        }, __jsx(\"a\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 12\n          }\n        }, v.title));\n      };\n\n      if (val.childs) {\n        return __jsx(\"span\", {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 11\n          }\n        }, __jsx(\"span\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 12\n          }\n        }, val.title), __jsx(\"ul\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 12\n          }\n        }, val.childs.map(function (v, k) {\n          return __jsx(\"li\", {\n            key: k,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 14\n            }\n          }, el(v, k));\n        })));\n      }\n\n      return el(val, key);\n    })), __jsx(_forms_call__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.call,\n      action: \"\\u0417\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C\\u0441\\u044F\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.address,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 8\n      }\n    }, \"\\u0433. \\u041E\\u043C\\u0441\\u043A, \\u0443\\u043B. \\u0425\\u0438\\u043C\\u0438\\u043A\\u043E\\u0432, 60\"), __jsx(\"a\", {\n      href: \"tel:83812492500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 8\n      }\n    }, \"+7 (3812) 49-25-00\")));\n  })));\n}, \"ivcclCZh2SUeRL4a7l7BQOPcL9M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useTransition\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90YWdzL2hlYWRlci9pbmRleC5qc3g/MjJmNiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub2dnbGUiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJuZXh0IiwiZG9jdW1lbnQiLCJib2R5Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmcm9tIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRyYW5zIiwidXNlVHJhbnNpdGlvbiIsImVudGVyIiwibGVhdmUiLCJjc3MiLCJjb250YWluZXIiLCJpbm5lciIsImxvZ28iLCJob21lIiwidG9nZ2xlIiwiYWN0aXZlIiwibWFwIiwiaXRlbSIsInByb3BzIiwia2V5Iiwid3JhcCIsIm92ZXJmbG93IiwibmF2IiwibGlzdCIsInZhbCIsImVsIiwidiIsImsiLCJocmVmIiwidGl0bGUiLCJjaGlsZHMiLCJjYWxsIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVlLDhFQUFNO0FBQUE7O0FBQUEsa0JBRUlBLHNEQUFRLENBQUMsS0FBRCxDQUZaO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BRVBDLE9BRk87O0FBSXBCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEIsUUFBSSxDQUFDRixJQUFELElBQVNHLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUFqQyxFQUFzQztBQUNyQ0gsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSSxRQUFRLEdBQUdDLHlEQUFXLENBQUM7QUFBQSxXQUFNTCxPQUFPLENBQUMsVUFBQU0sSUFBSSxFQUFJO0FBQ2xELFVBQU1DLElBQUksR0FB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Q0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQ2Y7QUFBSSxlQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFRixFQUFFLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQURKLENBRGU7QUFBQSxTQUFmLENBREYsQ0FGRCxDQUREO0FBWUE7O0FBRUQsYUFBT0YsRUFBRSxDQUFDRCxHQUFELEVBQU1MLEdBQU4sQ0FBVDtBQUNBLEtBNUJBLENBREYsQ0FGRCxFQWtDQyxNQUFDLG1EQUFEO0FBQU8sZUFBUyxFQUFFVix5REFBRyxDQUFDc0IsSUFBdEI7QUFBNEIsWUFBTSxFQUFDLDhEQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbENELEVBb0NDO0FBQUssZUFBUyxFQUFFdEIseURBQUcsQ0FBQ3VCLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQURELEVBRUM7QUFBRyxVQUFJLEVBQUMsaUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRCxDQXBDRCxDQURVO0FBQUEsR0FBVixDQWxCRixDQURELENBREQ7QUFvRUEsQ0F4SUQ7QUFBQSxVQThDZTFCLDBEQTlDZjtBQUFBIiwiZmlsZSI6Ii4vdGFncy9oZWFkZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiwgdXNlU3ByaW5nLCB1c2VDaGFpbiwgYW5pbWF0ZWQsIGNvbmZpZyB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IGxpc3QgZnJvbSAnLi4vLi4vcm91dGVzLmpzb24nXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9mb3Jtcy9jYWxsJ1xuXG5pbXBvcnQgY3NzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcblx0XHRpZiAoIW9wZW4gJiYgd2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcblx0XHRcdHNldE9wZW4odHJ1ZSlcblx0XHR9XG5cdH1cblxuXHRjb25zdCBvblRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE9wZW4ocHJldiA9PiB7XG5cdFx0Y29uc3QgbmV4dCA9ICFwcmV2XG5cblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXG5cdFx0aWYgKG5leHQpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdvdmVyZmxvdzogaGlkZGVuJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV4dFxuXHR9KSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXG5cdFx0Ly8gY29uc29sZS5sb2coJ3VzZUVmZmVjdCcpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcm9sbClcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25TY3JvbGwpXG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JvbGwpXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25TY3JvbGwpXG5cdFx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXG5cdFx0fVxuXHR9KVxuXG5cblx0Y29uc3QgZnJvbSA9IHtcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxLjVyZW0sIDApJ1xuXHR9XG5cblx0Y29uc3QgdHJhbnMgPSB1c2VUcmFuc2l0aW9uKG9wZW4sIG51bGwsIHtcblx0XHRmcm9tOiBmcm9tLFxuXHRcdGVudGVyOiB7XG5cdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDApJ1xuXHRcdH0sXG5cdFx0bGVhdmU6IGZyb21cblx0fSlcblxuXHQvLyBjb25zdCBzdHlsZSA9IHVzZVNwcmluZyh7XG5cdC8vIFx0Ly8gY29uZmlnOiBjb25maWcuc3RpZmYsXG5cdC8vIFx0ZnJvbToge1xuXHQvLyBcdFx0b3BhY2l0eTogMFxuXHQvLyBcdH0sXG5cdC8vIFx0dG86IHtcblx0Ly8gXHRcdC8vIC4uLnJlY3QuZnJvbSxcblx0Ly8gXHRcdG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcblx0Ly8gXHRcdC8vIHRyYW5zZm9ybTogb3BlbiA/IGBzY2FsZSgke3JlY3Quc2NhbGV9KWAgOiAnc2NhbGUoMC4xKSdcblx0Ly8gXHR9XG5cdC8vIH0pXG5cblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MuaW5uZXJ9PlxuXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtjc3MubG9nb30+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWcvbG9nby5zdmdcIiBhbHQ9XCJhdnRvIGxpZmUgLSBzdHlsaW5nIGFuZCBkZXRhaWxpbmdcIiAvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtjc3MuaG9tZX0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YCR7Y3NzLnRvZ2dsZX0gJHtvcGVuICYmIGNzcy5hY3RpdmV9YH0gb25DbGljaz17b25Ub2dnbGV9PlxuXHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0PHNwYW4gLz5cblx0XHRcdFx0XHQ8c3BhbiAvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0e3RyYW5zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+ICFpdGVtID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8YW5pbWF0ZWQuZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e2Nzcy53cmFwfSBzdHlsZT17cHJvcHN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nzcy5vdmVyZmxvd30gLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MubmF2fT5cblx0XHRcdFx0XHRcdFx0e2xpc3QubWFwKCh2YWwsIGtleSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZWwgPSAodiwgaykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsga2V5PXtrfSBocmVmPXt2LmhyZWZ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3YudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHZhbC5jaGlsZHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dmFsLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dmFsLmNoaWxkcy5tYXAoKHYsIGspID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17a30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2VsKHYsIGspfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbCh2YWwsIGtleSlcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PE1vZGFsIGNsYXNzTmFtZT17Y3NzLmNhbGx9IGFjdGlvbj0n0JfQsNC/0LjRgdCw0YLRjNGB0Y8nIC8+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MuYWRkcmVzc30+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPtCzLiDQntC80YHQuiwg0YPQuy4g0KXQuNC80LjQutC+0LIsIDYwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjgzODEyNDkyNTAwXCI+KzcgKDM4MTIpIDQ5LTI1LTAwPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2FuaW1hdGVkLmRpdj5cblx0XHRcdFx0KSl9XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./tags/header/index.jsx\n");

/***/ })

})