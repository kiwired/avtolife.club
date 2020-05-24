/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.styl":
/*!****************************!*\
  !*** ./src/css/index.styl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var throttle = function throttle(callback) {
  var timeout;
  return function () {
    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    } // Setup the new requestAnimationFrame()


    timeout = window.requestAnimationFrame(callback);
  };
};

var viewport = document.querySelector('meta[name="viewport"]');
var onRatio = throttle(function () {
  var fontSize = 100;
  var meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';
  viewport.setAttribute('content', meta);
  document.documentElement.style.fontSize = fontSize;
  var width = window.innerWidth || document.documentElement.innerWidth;

  if (width > 640) {
    fontSize = width / 1280 * 100 + '%';
    meta = 'user-scalable=no, width=1280';
  } else {
    fontSize = width / 480 * 100 + '%';
  }

  viewport.setAttribute('content', meta);
  document.documentElement.style.fontSize = fontSize;
});
onRatio();
window.addEventListener('load', onRatio);
window.addEventListener('resize', onRatio);
/*(() => {

	let url = document.URL
	let idx = url.indexOf("#")
	let hash = idx != -1 ? url.substring(idx + 1) : ""

	if (hash !== '') {
		// let $element = $(`#${hash}`)

		// if ($element.length === 0) {
		// 	return
		// }

		// if (!$element.is(':visible')) {
		// 	$element.addClass('active')
		// }

		// console.log('has', $element)

		// if ($element.hasClass('modal')) {
		// 	$element.modal()
		// }

		// let scrollTop = $element.offset().top

		// $('html, body').stop().animate({ scrollTop }, 150, 'swing')
	}


	// $('a[href*="#"]:not([href="#"])').on('click touch', function (event) {
	// 	let $this = $(this)
	// 	let $target = $($this.attr('href'))
	// 	// console.log('click', $this.attr('data-toggle'), $target)

	// 	if ($this.attr('data-toggle') !== undefined) {
	// 		event.preventDefault()
	// 		$this.toggleClass('is-active')
	// 		$target.toggleClass('is-active')

	// 		let $input = $target.find('input[type="text"], input[type="email"]')

	// 		if ($input.length) {
	// 			$input.focus()
	// 		}

	// 		return
	// 	}

	// 	// if (!$target.length) {
	// 	// 	return
	// 	// }

	// 	if ($target.hasClass('modal')) {
	// 		event.preventDefault()
	// 		$target.modal()
	// 		return
	// 	}

	// 	if ($target.is(':visible')) {
	// 		event.preventDefault()

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	// 			if ($target.length) {
	// 				$('html, body').animate({ scrollTop: $target.offset().top - 50 }, 'swing')
	// 				return false
	// 			}
	// 		}
	// 		return
	// 	}
	// })
})*/

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/app.js ./src/css/index.styl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Maxim/git/avtolife.club/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/Maxim/git/avtolife.club/src/css/index.styl */"./src/css/index.styl");


/***/ })

/******/ });