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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/icubismmodelsetting.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/icubismmodelsetting.ts":
/*!******************************************!*\
  !*** ./Framework/icubismmodelsetting.ts ***!
  \******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル設定情報を取り扱う関数を宣言した純粋仮想クラス。
     *
     * このクラスを継承することで、モデル設定情報を取り扱うクラスになる。
     */
    var ICubismModelSetting = /** @class */ (function () {
        function ICubismModelSetting() {
        }
        return ICubismModelSetting;
    }());
    Live2DCubismFramework.ICubismModelSetting = ICubismModelSetting;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2ljdWJpc21tb2RlbHNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFPSSxJQUFVLHFCQUFxQixDQW9MckM7QUFwTEQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUFBO1FBNEtBLENBQUM7UUFBRCwwQkFBQztJQUFELENBQUM7SUE1S3FCLHlDQUFtQixzQkE0S3hDO0FBQ0wsQ0FBQyxFQXBMZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW9MckMiLCJmaWxlIjoiL2ljdWJpc21tb2RlbHNldHRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9pY3ViaXNtbW9kZWxzZXR0aW5nLnRzXCIpO1xuIiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gJy4vaWQvY3ViaXNtaWQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tICcuL3R5cGUvY3NtbWFwJztcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or6Kit5a6a5oOF5aCx44KS5Y+W44KK5omx44GG6Zai5pWw44KS5a6j6KiA44GX44Gf57SU57KL5Luu5oOz44Kv44Op44K544CCXG4gICAgICpcbiAgICAgKiDjgZPjga7jgq/jg6njgrnjgpLntpnmib/jgZnjgovjgZPjgajjgafjgIHjg6Ljg4fjg6voqK3lrprmg4XloLHjgpLlj5bjgormibHjgYbjgq/jg6njgrnjgavjgarjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSUN1YmlzbU1vZGVsU2V0dGluZ1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vY+ODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIE1vY+ODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vZGVsRmlsZU5hbWUoKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgYzkvb/nlKjjgZnjgovjg4bjgq/jgrnjg4Hjg6Pjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VGV4dHVyZUNvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44GM6YWN572u44GV44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44GM6YWN572u44GV44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VGV4dHVyZURpcmVjdG9yeSgpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBjOS9v+eUqOOBmeOCi+ODhuOCr+OCueODgeODo+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VGV4dHVyZUZpbGVOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+W9k+OBn+OCiuWIpOWumuOBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+W9k+OBn+OCiuWIpOWumuOBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEhpdEFyZWFzQ291bnQoKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZPjgZ/jgorliKTlrprjgavoqK3lrprjgZXjgozjgZ9JROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBrmluZGV4XG4gICAgICAgICAqIEByZXR1cm4g5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44GfSURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRIaXRBcmVhSWQoaW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZPjgZ/jgorliKTlrprjgavoqK3lrprjgZXjgozjgZ/lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn+WQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEhpdEFyZWFOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeJqeeQhua8lOeul+ioreWumuODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOeJqeeQhua8lOeul+ioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFBoeXNpY3NGaWxlTmFtZSgpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOODhOWIh+OCiuabv+OBiOioreWumuODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOODhOWIh+OCiuabv+OBiOioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFBvc2VGaWxlTmFtZSgpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEV4cHJlc3Npb25Db3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOaDheioreWumuODleOCoeOCpOODq+OCkuitmOWIpeOBmeOCi+WQjeWJje+8iOWIpeWQje+8ieOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g6KGo5oOF44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXhwcmVzc2lvbk5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeHByZXNzaW9uRmlsZU5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uR3JvdXBDb3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uR3JvdXBOYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBq+WQq+OBvuOCjOOCi+ODouODvOOCt+ODp+ODs+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvbkNvdW50KGdyb3VwTmFtZTogc3RyaW5nKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrDjg6vjg7zjg5flkI3jgajjgqTjg7Pjg4fjg4Pjgq/jgrnlgKTjgYvjgonjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vlkI3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4ICAgICDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25GaWxlTmFtZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gr5a++5b+c44GZ44KL44K144Km44Oz44OJ44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUg44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiDjgrXjgqbjg7Pjg4njg5XjgqHjgqTjg6vjga7lkI3liY1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pplovlp4vmmYLjga7jg5Xjgqfjg7zjg4njgqTjg7Plh6bnkIbmmYLplpPjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCpOODs+WHpueQhuaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uRmFkZUluVGltZVZhbHVlKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PntYLkuobmmYLjga7jg5Xjgqfjg7zjg4njgqLjgqbjg4jlh6bnkIbmmYLplpPjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGdyb3VwTmFtZSDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7lkI3liY1cbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOWHpueQhuaZgumWk1vnp5JdXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uRmFkZU91dFRpbWVWYWx1ZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Om44O844K244O844OH44O844K/44Gu44OV44Kh44Kk44Or5ZCN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Om44O844K244O844OH44O844K/44Gu44OV44Kh44Kk44Or5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VXNlckRhdGFGaWxlKCk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Kk44Ki44Km44OI5oOF5aCx44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBvdXRMYXlvdXRNYXAgY3NtTWFw44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYzlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYzlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRMYXlvdXRNYXAob3V0TGF5b3V0TWFwOiBjc21NYXA8c3RyaW5nLCBudW1iZXI+KTogYm9vbGVhbjtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeWVCbGlua1BhcmFtZXRlckNvdW50KCk6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog55uu44OR44OB44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44GuSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcmV0dXJuIOODkeODqeODoeODvOOCv0lEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXllQmxpbmtQYXJhbWV0ZXJJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpOiBudW1iZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRMaXBTeW5jUGFyYW1ldGVySWQoaW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9