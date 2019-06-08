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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/effect/cubismbreath.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/effect/cubismbreath.ts":
/*!******************************************!*\
  !*** ./Framework/effect/cubismbreath.ts ***!
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
     * 呼吸機能
     *
     * 呼吸機能を提供する。
     */
    var CubismBreath = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismBreath() {
            this._currentTime = 0.0;
        }
        /**
         * インスタンスの作成
         */
        CubismBreath.create = function () {
            return new CubismBreath();
        };
        /**
         * インスタンスの破棄
         * @param instance 対象のCubismBreath
         */
        CubismBreath.delete = function (instance) {
            if (instance != null) {
                instance = null;
            }
        };
        /**
         * 呼吸のパラメータの紐づけ
         * @param breathParameters 呼吸を紐づけたいパラメータのリスト
         */
        CubismBreath.prototype.setParameters = function (breathParameters) {
            this._breathParameters = breathParameters;
        };
        /**
         * 呼吸に紐づいているパラメータの取得
         * @return 呼吸に紐づいているパラメータのリスト
         */
        CubismBreath.prototype.getParameters = function () {
            return this._breathParameters;
        };
        /**
         * モデルのパラメータの更新
         * @param model 対象のモデル
         * @param deltaTimeSeconds デルタ時間[秒]
         */
        CubismBreath.prototype.updateParameters = function (model, deltaTimeSeconds) {
            this._currentTime += deltaTimeSeconds;
            var t = this._currentTime * 2.0 * 3.14159;
            for (var i = 0; i < this._breathParameters.getSize(); ++i) {
                var data = this._breathParameters.at(i);
                model.addParameterValueById(data.parameterId, data.offset + (data.peak * Math.sin(t / data.cycle)), data.weight);
            }
        };
        return CubismBreath;
    }());
    Live2DCubismFramework.CubismBreath = CubismBreath;
    /**
     * 呼吸のパラメータ情報
     */
    var BreathParameterData = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param parameterId   呼吸をひもづけるパラメータID
         * @param offset        呼吸を正弦波としたときの、波のオフセット
         * @param peak          呼吸を正弦波としたときの、波の高さ
         * @param cycle         呼吸を正弦波としたときの、波の周期
         * @param weight        パラメータへの重み
         */
        function BreathParameterData(parameterId, offset, peak, cycle, weight) {
            this.parameterId = (parameterId == undefined)
                ? null
                : parameterId;
            this.offset = (offset == undefined)
                ? 0.0
                : offset;
            this.peak = (peak == undefined)
                ? 0.0
                : peak;
            this.cycle = (cycle == undefined)
                ? 0.0
                : cycle;
            this.weight = (weight == undefined)
                ? 0.0
                : weight;
        }
        return BreathParameterData;
    }());
    Live2DCubismFramework.BreathParameterData = BreathParameterData;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2VmZmVjdC9jdWJpc21icmVhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0VBS0U7QUFVSyxJQUFVLHFCQUFxQixDQTBIckM7QUExSEQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQWlFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQztRQXBFRDs7V0FFRztRQUNXLG1CQUFNLEdBQXBCO1lBRUksT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7O1dBR0c7UUFDVyxtQkFBTSxHQUFwQixVQUFxQixRQUFzQjtZQUV2QyxJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQ25CO2dCQUNJLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7UUFDTCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksb0NBQWEsR0FBcEIsVUFBcUIsZ0JBQWdEO1lBRWpFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksb0NBQWEsR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHVDQUFnQixHQUF2QixVQUF3QixLQUFrQixFQUFFLGdCQUF3QjtZQUVoRSxJQUFJLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDO1lBRXRDLElBQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUVwRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNoRTtnQkFDSSxJQUFJLElBQUksR0FBd0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0QsS0FBSyxDQUFDLHFCQUFxQixDQUN2QixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FDZCxDQUFDO2FBQ0w7UUFDTCxDQUFDO1FBYUwsbUJBQUM7SUFBRCxDQUFDO0lBM0VZLGtDQUFZLGVBMkV4QjtJQUVEOztPQUVHO0lBQ0g7UUFFSTs7Ozs7OztXQU9HO1FBQ0gsNkJBQVksV0FBNEIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEtBQWMsRUFBRSxNQUFlO1lBRXJHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO2dCQUMzQixDQUFDLENBQUMsR0FBRztnQkFDTCxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO2dCQUN2QixDQUFDLENBQUMsR0FBRztnQkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQU9MLDBCQUFDO0lBQUQsQ0FBQztJQWxDWSx5Q0FBbUIsc0JBa0MvQjtBQUNMLENBQUMsRUExSGdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUEwSHJDIiwiZmlsZSI6Ii9lZmZlY3QvY3ViaXNtYnJlYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvZWZmZWN0L2N1YmlzbWJyZWF0aC50c1wiKTtcbiIsIi8qXG4qIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4qL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gXCIuLi9tb2RlbC9jdWJpc21tb2RlbFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gXCIuLi9pZC9jdWJpc21pZFwiO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5pbXBvcnQgQ3ViaXNtTW9kZWwgPSBjdWJpc21tb2RlbC5DdWJpc21Nb2RlbDtcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog5ZG85ZC45qmf6IO9XG4gICAgICogXG4gICAgICog5ZG85ZC45qmf6IO944KS5o+Q5L6b44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUJyZWF0aFxuICAgIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K544Gu5L2c5oiQXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBDdWJpc21CcmVhdGhcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdWJpc21CcmVhdGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjga7noLTmo4RcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIOWvvuixoeOBrkN1YmlzbUJyZWF0aFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUoaW5zdGFuY2U6IEN1YmlzbUJyZWF0aCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5zdGFuY2UgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5ZG85ZC444Gu44OR44Op44Oh44O844K/44Gu57SQ44Gl44GRXG4gICAgICAgICAqIEBwYXJhbSBicmVhdGhQYXJhbWV0ZXJzIOWRvOWQuOOCkue0kOOBpeOBkeOBn+OBhOODkeODqeODoeODvOOCv+OBruODquOCueODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFBhcmFtZXRlcnMoYnJlYXRoUGFyYW1ldGVyczogY3NtVmVjdG9yPEJyZWF0aFBhcmFtZXRlckRhdGE+KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9icmVhdGhQYXJhbWV0ZXJzID0gYnJlYXRoUGFyYW1ldGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlkbzlkLjjgavntJDjgaXjgYTjgabjgYTjgovjg5Hjg6njg6Hjg7zjgr/jga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDlkbzlkLjjgavntJDjgaXjgYTjgabjgYTjgovjg5Hjg6njg6Hjg7zjgr/jga7jg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJzKCk6IGNzbVZlY3RvcjxCcmVhdGhQYXJhbWV0ZXJEYXRhPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYnJlYXRoUGFyYW1ldGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7jg5Hjg6njg6Hjg7zjgr/jga7mm7TmlrBcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOWvvuixoeOBruODouODh+ODq1xuICAgICAgICAgKiBAcGFyYW0gZGVsdGFUaW1lU2Vjb25kcyDjg4fjg6vjgr/mmYLplpNb56eSXVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHVwZGF0ZVBhcmFtZXRlcnMobW9kZWw6IEN1YmlzbU1vZGVsLCBkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IGRlbHRhVGltZVNlY29uZHM7XG5cbiAgICAgICAgICAgIGNvbnN0IHQ6IG51bWJlciA9IHRoaXMuX2N1cnJlbnRUaW1lICogMi4wICogMy4xNDE1OTtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fYnJlYXRoUGFyYW1ldGVycy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTogQnJlYXRoUGFyYW1ldGVyRGF0YSA9IHRoaXMuX2JyZWF0aFBhcmFtZXRlcnMuYXQoaSk7XG5cbiAgICAgICAgICAgICAgICBtb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGFyYW1ldGVySWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEub2Zmc2V0ICsgKGRhdGEucGVhayAqIE1hdGguc2luKHQgLyBkYXRhLmN5Y2xlKSksXG4gICAgICAgICAgICAgICAgICAgIGRhdGEud2VpZ2h0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSAwLjA7XG4gICAgICAgIH1cblxuICAgICAgICAgX2JyZWF0aFBhcmFtZXRlcnM6IGNzbVZlY3RvcjxCcmVhdGhQYXJhbWV0ZXJEYXRhPjsgLy8g5ZG85ZC444Gr44Gy44KC44Gl44GE44Gm44GE44KL44OR44Op44Oh44O844K/44Gu44Oq44K544OIXG4gICAgICAgICBfY3VycmVudFRpbWU6IG51bWJlcjsgIC8vIOepjeeul+aZgumWk1vnp5JdXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIOWRvOWQuOOBruODkeODqeODoeODvOOCv+aDheWgsVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBCcmVhdGhQYXJhbWV0ZXJEYXRhXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJZCAgIOWRvOWQuOOCkuOBsuOCguOBpeOBkeOCi+ODkeODqeODoeODvOOCv0lEXG4gICAgICAgICAqIEBwYXJhbSBvZmZzZXQgICAgICAgIOWRvOWQuOOCkuato+W8puazouOBqOOBl+OBn+OBqOOBjeOBruOAgeazouOBruOCquODleOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gcGVhayAgICAgICAgICDlkbzlkLjjgpLmraPlvKbms6LjgajjgZfjgZ/jgajjgY3jga7jgIHms6Ljga7pq5jjgZVcbiAgICAgICAgICogQHBhcmFtIGN5Y2xlICAgICAgICAg5ZG85ZC444KS5q2j5bym5rOi44Go44GX44Gf44Go44GN44Gu44CB5rOi44Gu5ZGo5pyfXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQgICAgICAgIOODkeODqeODoeODvOOCv+OBuOOBrumHjeOBv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IocGFyYW1ldGVySWQ/OiBDdWJpc21JZEhhbmRsZSwgb2Zmc2V0PzogbnVtYmVyLCBwZWFrPzogbnVtYmVyLCBjeWNsZT86IG51bWJlciwgd2VpZ2h0PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcklkID0gKHBhcmFtZXRlcklkID09IHVuZGVmaW5lZCkgXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgOiBwYXJhbWV0ZXJJZDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gKG9mZnNldCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgID8gMC4wIFxuICAgICAgICAgICAgICAgICAgICA6IG9mZnNldDtcbiAgICAgICAgICAgIHRoaXMucGVhayA9IChwZWFrID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgPyAwLjBcbiAgICAgICAgICAgICAgICAgICAgOiBwZWFrO1xuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IChjeWNsZSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgID8gMC4wXG4gICAgICAgICAgICAgICAgICAgIDogY3ljbGU7XG4gICAgICAgICAgICB0aGlzLndlaWdodCA9ICh3ZWlnaHQgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICA/IDAuMCBcbiAgICAgICAgICAgICAgICAgICAgOiB3ZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbWV0ZXJJZDogQ3ViaXNtSWRIYW5kbGU7ICAvLyDlkbzlkLjjgpLjgbLjgoLjgaXjgZHjgovjg5Hjg6njg6Hjg7zjgr9JRFxcXG4gICAgICAgIG9mZnNldDogbnVtYmVyOyAgICAgICAgIC8vIOWRvOWQuOOCkuato+W8puazouOBqOOBl+OBn+OBqOOBjeOBruOAgeazouOBruOCquODleOCu+ODg+ODiFxuICAgICAgICBwZWFrOiBudW1iZXI7ICAgICAgICAgICAvLyDlkbzlkLjjgpLmraPlvKbms6LjgajjgZfjgZ/jgajjgY3jga7jgIHms6Ljga7pq5jjgZVcbiAgICAgICAgY3ljbGU6IG51bWJlcjsgICAgICAgICAgLy8g5ZG85ZC444KS5q2j5bym5rOi44Go44GX44Gf44Go44GN44Gu44CB5rOi44Gu5ZGo5pyfXG4gICAgICAgIHdlaWdodDogbnVtYmVyOyAgICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBuOOBrumHjeOBv1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9