webpackHotUpdate_N_E("pages/_app",{

/***/ "./libs/YandexMetrika.js":
/*!*******************************!*\
  !*** ./libs/YandexMetrika.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\nvar yandexId = \"90337884\";\n\nvar YandexMetrika = function YandexMetrika() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!yandexId) return;\n\n    var onRouteChange = function onRouteChange() {\n      ym(yandexId, 'hit', router.route);\n    };\n\n    window['ym'] = window['ym'] || function () {\n      (window['ym'].a = window['ym'].a || []).push(arguments);\n    };\n\n    window['ym'].l = 1 * new Date();\n    var script = document.createElement('script');\n    script.type = 'text/javascript';\n    script.async = true;\n    script.src = 'https://mc.yandex.ru/metrika/tag.js';\n    script.addEventListener('load', function () {\n      ym(yandexId, 'init', {\n        clickmap: true,\n        trackLinks: true,\n        accurateTrackBounce: true\n      });\n    });\n    document.head.appendChild(script);\n    router.events.on('routeChangeComplete', onRouteChange);\n    return function () {\n      return router.events.off('routeChangeComplete', onRouteChange);\n    };\n  }, [router.events]);\n  return null;\n};\n\n_s(YandexMetrika, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = YandexMetrika;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YandexMetrika);\n\nvar _c;\n\n$RefreshReg$(_c, \"YandexMetrika\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9ZYW5kZXhNZXRyaWthLmpzPzdjOTkiXSwibmFtZXMiOlsieWFuZGV4SWQiLCJwcm9jZXNzIiwiWWFuZGV4TWV0cmlrYSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIm9uUm91dGVDaGFuZ2UiLCJ5bSIsInJvdXRlIiwid2luZG93IiwiYSIsInB1c2giLCJhcmd1bWVudHMiLCJsIiwiRGF0ZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja21hcCIsInRyYWNrTGlua3MiLCJhY2N1cmF0ZVRyYWNrQm91bmNlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxVQUFqQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFFM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFFZixRQUFJLENBQUNMLFFBQUwsRUFBZTs7QUFFZixRQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0JDLFFBQUUsQ0FBQ1AsUUFBRCxFQUFXLEtBQVgsRUFBa0JHLE1BQU0sQ0FBQ0ssS0FBekIsQ0FBRjtBQUNBLEtBRkQ7O0FBSUFDLFVBQU0sQ0FBQyxJQUFELENBQU4sR0FBZUEsTUFBTSxDQUFDLElBQUQsQ0FBTixJQUFnQixZQUFZO0FBQUUsT0FBQ0EsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhQyxDQUFiLEdBQWlCRCxNQUFNLENBQUMsSUFBRCxDQUFOLENBQWFDLENBQWIsSUFBa0IsRUFBcEMsRUFBd0NDLElBQXhDLENBQTZDQyxTQUE3QztBQUF5RCxLQUF0Rzs7QUFDQUgsVUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhSSxDQUFiLEdBQWlCLElBQUksSUFBSUMsSUFBSixFQUFyQjtBQUVBLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsVUFBTSxDQUFDRyxJQUFQLEdBQWMsaUJBQWQ7QUFDQUgsVUFBTSxDQUFDSSxLQUFQLEdBQWUsSUFBZjtBQUNBSixVQUFNLENBQUNLLEdBQVAsR0FBYSxxQ0FBYjtBQUVBTCxVQUFNLENBQUNNLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDckNkLFFBQUUsQ0FBQ1AsUUFBRCxFQUFXLE1BQVgsRUFBbUI7QUFDcEJzQixnQkFBUSxFQUFFLElBRFU7QUFFcEJDLGtCQUFVLEVBQUUsSUFGUTtBQUdwQkMsMkJBQW1CLEVBQUU7QUFIRCxPQUFuQixDQUFGO0FBS0EsS0FORDtBQVFBUixZQUFRLENBQUNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlgsTUFBMUI7QUFFQVosVUFBTSxDQUFDd0IsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q3RCLGFBQXhDO0FBRUEsV0FBTztBQUFBLGFBQU1ILE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUN2QixhQUF6QyxDQUFOO0FBQUEsS0FBUDtBQUNBLEdBN0JRLEVBNkJOLENBQUNILE1BQU0sQ0FBQ3dCLE1BQVIsQ0E3Qk0sQ0FBVDtBQStCQSxTQUFPLElBQVA7QUFDQSxDQXBDRDs7R0FBTXpCLGE7VUFFVUUscUQ7OztLQUZWRixhO0FBc0NTQSw0RUFBZiIsImZpbGUiOiIuL2xpYnMvWWFuZGV4TWV0cmlrYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IHlhbmRleElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfWUFOREVYX01FVFJJS0FcblxuY29uc3QgWWFuZGV4TWV0cmlrYSA9ICgpID0+IHtcblxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0XHRpZiAoIXlhbmRleElkKSByZXR1cm5cblxuXHRcdGNvbnN0IG9uUm91dGVDaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHR5bSh5YW5kZXhJZCwgJ2hpdCcsIHJvdXRlci5yb3V0ZSlcblx0XHR9XG5cblx0XHR3aW5kb3dbJ3ltJ10gPSB3aW5kb3dbJ3ltJ10gfHwgZnVuY3Rpb24gKCkgeyAod2luZG93Wyd5bSddLmEgPSB3aW5kb3dbJ3ltJ10uYSB8fCBbXSkucHVzaChhcmd1bWVudHMpIH1cblx0XHR3aW5kb3dbJ3ltJ10ubCA9IDEgKiBuZXcgRGF0ZSgpO1xuXG5cdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jylcblx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG5cdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZVxuXHRcdHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYy55YW5kZXgucnUvbWV0cmlrYS90YWcuanMnXG5cblx0XHRzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0XHRcdHltKHlhbmRleElkLCAnaW5pdCcsIHtcblx0XHRcdFx0Y2xpY2ttYXA6IHRydWUsXG5cdFx0XHRcdHRyYWNrTGlua3M6IHRydWUsXG5cdFx0XHRcdGFjY3VyYXRlVHJhY2tCb3VuY2U6IHRydWVcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG5cdFx0cm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG9uUm91dGVDaGFuZ2UpXG5cblx0XHRyZXR1cm4gKCkgPT4gcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBvblJvdXRlQ2hhbmdlKVxuXHR9LCBbcm91dGVyLmV2ZW50c10pXG5cblx0cmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgWWFuZGV4TWV0cmlrYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/YandexMetrika.js\n");

/***/ })

})