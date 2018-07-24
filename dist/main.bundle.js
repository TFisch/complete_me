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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Node.js":
/*!*********************!*\
  !*** ./lib/Node.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function Node() {
  _classCallCheck(this, Node);

  this.endOfWord = false;
  this.children = {};
};

/***/ }),

/***/ "./lib/PrefixTrie.js":
/*!***************************!*\
  !*** ./lib/PrefixTrie.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = __webpack_require__(/*! ./Node */ "./lib/Node.js");

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function PrefixTrie() {
    _classCallCheck(this, PrefixTrie);

    this.rootNode = new _Node2.default(null);
    this.count = 0;
  }

  _createClass(PrefixTrie, [{
    key: 'insert',
    value: function insert(data) {
      this.count++;
      var splitData = [].concat(_toConsumableArray(data));
      var currentNode = this.rootNode;
      var index = 0;

      splitData.forEach(function (currentLetter) {
        if (!currentNode.children[currentLetter]) {
          var newLetter = new _Node2.default();

          currentNode.children[currentLetter] = newLetter;
          currentNode = currentNode.children[currentLetter];
          index++;
        } else {
          currentNode = currentNode.children[currentLetter];
          index++;
        }
        if (index === splitData.length) {
          currentNode.endOfWord = true;
        }
      });
    }
  }, {
    key: 'suggest',
    value: function suggest(prefix) {
      var letters = [].concat(_toConsumableArray(prefix));
      var currentNode = this.rootNode;
      var suggestionsArray = [];

      for (var i = 0; i < letters.length; i++) {
        currentNode = currentNode.children[letters[i]];
        if (!currentNode) {
          return [];
        }
      }

      getWords(prefix, currentNode);

      function getWords(stringsSoFar, node) {
        Object.keys(node.children).forEach(function (key) {
          var newString = stringsSoFar + key;

          if (node.children[key].endOfWord) {
            suggestionsArray.push(newString);
          }
          getWords(newString, node.children[key]);
        });
      }
      return suggestionsArray;
    }
  }, {
    key: 'populate',
    value: function populate(dictionary) {
      var _this = this;

      dictionary.forEach(function (word) {
        _this.insert(word);
      });
    }
  }, {
    key: 'delete',
    value: function _delete(word) {
      var letters = [].concat(_toConsumableArray(word));
      var currentNode = this.rootNode;

      letters.forEach(function (letter) {
        currentNode = currentNode.children[letter];
      });

      currentNode.endOfWord = false;
      this.count--;
    }
  }]);

  return PrefixTrie;
}();

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./PrefixTrie.js */ "./lib/PrefixTrie.js"),
    PrefixTrie = _require.PrefixTrie;

module.exports = { PrefixTrie: PrefixTrie };

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1ByZWZpeFRyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbmRPZldvcmQiLCJjaGlsZHJlbiIsInJvb3ROb2RlIiwiTm9kZSIsImNvdW50IiwiZGF0YSIsInNwbGl0RGF0YSIsImN1cnJlbnROb2RlIiwiaW5kZXgiLCJmb3JFYWNoIiwiY3VycmVudExldHRlciIsIm5ld0xldHRlciIsImxlbmd0aCIsInByZWZpeCIsImxldHRlcnMiLCJzdWdnZXN0aW9uc0FycmF5IiwiaSIsImdldFdvcmRzIiwic3RyaW5nc1NvRmFyIiwibm9kZSIsIk9iamVjdCIsImtleXMiLCJuZXdTdHJpbmciLCJrZXkiLCJwdXNoIiwiZGljdGlvbmFyeSIsImluc2VydCIsIndvcmQiLCJsZXR0ZXIiLCJyZXF1aXJlIiwiUHJlZml4VHJpZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQs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QUFaLEdBQXdCLEtBQXhCO0FBQ0EsV0FBS0ksS0FBTDtBQUNEO0FBMUVIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7ZUNEdUIsbUJBQUF5QixDQUFRLDRDQUFSLEM7SUFBZkMsVSxZQUFBQSxVOztBQUNSaEMsT0FBT0MsT0FBUCxHQUFpQixFQUFDK0Isc0JBQUQsRUFBakIsQyIsImZpbGUiOiJkaXN0L21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVuZE9mV29yZCA9IGZhbHNlO1xuICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgfVxufSIsImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFByZWZpeFRyaWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvb3ROb2RlID0gbmV3IE5vZGUobnVsbCk7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gIH1cblxuICBpbnNlcnQoZGF0YSkge1xuICAgIHRoaXMuY291bnQgKys7XG4gICAgY29uc3Qgc3BsaXREYXRhID0gWy4uLmRhdGFdO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMucm9vdE5vZGU7IFxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBzcGxpdERhdGEuZm9yRWFjaChjdXJyZW50TGV0dGVyID0+IHtcbiAgICAgIGlmICghY3VycmVudE5vZGUuY2hpbGRyZW5bY3VycmVudExldHRlcl0pIHtcbiAgICAgICAgbGV0IG5ld0xldHRlciA9IG5ldyBOb2RlKCk7XG5cbiAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW5bY3VycmVudExldHRlcl0gPSBuZXdMZXR0ZXI7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuY2hpbGRyZW5bY3VycmVudExldHRlcl07XG4gICAgICAgIGluZGV4Kys7XG4gICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuY2hpbGRyZW5bY3VycmVudExldHRlcl07XG4gICAgICAgIGluZGV4Kys7XG5cbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gc3BsaXREYXRhLmxlbmd0aCkge1xuICAgICAgICBjdXJyZW50Tm9kZS5lbmRPZldvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gICAgICBcbiAgc3VnZ2VzdChwcmVmaXgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gWy4uLnByZWZpeF07XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5yb290Tm9kZTtcbiAgICBsZXQgc3VnZ2VzdGlvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrICkge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltsZXR0ZXJzW2ldXTtcbiAgICAgIGlmICghY3VycmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSBcbiAgICB9XG4gICAgXG4gICAgZ2V0V29yZHMocHJlZml4LCBjdXJyZW50Tm9kZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRXb3JkcyhzdHJpbmdzU29GYXIsIG5vZGUpIHtcbiAgICAgIE9iamVjdC5rZXlzKG5vZGUuY2hpbGRyZW4pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IG5ld1N0cmluZyA9IHN0cmluZ3NTb0ZhciArIGtleTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbltrZXldLmVuZE9mV29yZCkge1xuICAgICAgICAgIHN1Z2dlc3Rpb25zQXJyYXkucHVzaChuZXdTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFdvcmRzKG5ld1N0cmluZywgbm9kZS5jaGlsZHJlbltrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VnZ2VzdGlvbnNBcnJheTtcbiAgfVxuXG4gIHBvcHVsYXRlKGRpY3Rpb25hcnkpIHtcbiAgICBkaWN0aW9uYXJ5LmZvckVhY2god29yZCA9PiB7XG4gICAgICB0aGlzLmluc2VydCh3b3JkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSh3b3JkKSB7XG4gICAgbGV0IGxldHRlcnMgPSBbLi4ud29yZF07XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5yb290Tm9kZTtcbiAgICBcbiAgICBsZXR0ZXJzLmZvckVhY2gobGV0dGVyID0+IHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuY2hpbGRyZW5bbGV0dGVyXTsgXG4gICAgfSlcblxuICAgIGN1cnJlbnROb2RlLmVuZE9mV29yZCA9IGZhbHNlO1xuICAgIHRoaXMuY291bnQgLS1cbiAgfVxuXG5cbn0iLCJjb25zdCB7IFByZWZpeFRyaWUgfSA9IHJlcXVpcmUoJy4vUHJlZml4VHJpZS5qcycpO1xubW9kdWxlLmV4cG9ydHMgPSB7UHJlZml4VHJpZX07XG4iXSwic291cmNlUm9vdCI6IiJ9