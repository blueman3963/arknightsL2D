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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/math/cubismviewmatrix.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/math/cubismmatrix44.ts":
/*!******************************************!*\
  !*** ./Framework/math/cubismmatrix44.ts ***!
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
     * 4x4の行列
     *
     * 4x4行列の便利クラス。
     */
    var CubismMatrix44 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMatrix44() {
            this._tr = new Float32Array(16); // 4 * 4のサイズ
            this.loadIdentity();
        }
        /**
         * 受け取った２つの行列の乗算を行う。
         *
         * @param a 行列a
         * @param b 行列b
         * @return 乗算結果の行列
         */
        CubismMatrix44.multiply = function (a, b, dst) {
            var c = new Float32Array([
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0
            ]);
            var n = 4;
            for (var i = 0; i < n; ++i) {
                for (var j = 0; j < n; ++j) {
                    for (var k = 0; k < n; ++k) {
                        c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                    }
                }
            }
            for (var i = 0; i < 16; ++i) {
                dst[i] = c[i];
            }
        };
        /**
         * 単位行列に初期化する
         */
        CubismMatrix44.prototype.loadIdentity = function () {
            var c = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            this.setMatrix(c);
        };
        /**
         * 行列を設定
         *
         * @param tr 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.setMatrix = function (tr) {
            for (var i = 0; i < 16; ++i) {
                this._tr[i] = tr[i];
            }
        };
        /**
         * 行列を浮動小数点数の配列で取得
         *
         * @return 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.getArray = function () {
            return this._tr;
        };
        /**
         * X軸の拡大率を取得
         * @return X軸の拡大率
         */
        CubismMatrix44.prototype.getScaleX = function () {
            return this._tr[0];
        };
        /**
         * Y軸の拡大率を取得する
         *
         * @return Y軸の拡大率
         */
        CubismMatrix44.prototype.getScaleY = function () {
            return this._tr[5];
        };
        /**
         * X軸の移動量を取得
         * @return X軸の移動量
         */
        CubismMatrix44.prototype.getTranslateX = function () {
            return this._tr[12];
        };
        /**
         * Y軸の移動量を取得
         * @return Y軸の移動量
         */
        CubismMatrix44.prototype.getTranslateY = function () {
            return this._tr[13];
        };
        /**
         * X軸の値を現在の行列で計算
         *
         * @param src X軸の値
         * @return 現在の行列で計算されたX軸の値
         */
        CubismMatrix44.prototype.transformX = function (src) {
            return this._tr[0] * src + this._tr[12];
        };
        /**
         * Y軸の値を現在の行列で計算
         *
         * @param src Y軸の値
         * @return　現在の行列で計算されたY軸の値
         */
        CubismMatrix44.prototype.transformY = function (src) {
            return this._tr[5] * src + this._tr[13];
        };
        /**
         * X軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformX = function (src) {
            return (src - this._tr[12]) / this._tr[0];
        };
        /**
         * Y軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformY = function (src) {
            return (src - this._tr[13]) / this._tr[5];
        };
        /**
         * 現在の行列の位置を起点にして移動
         *
         * 現在の行列の位置を起点にして相対的に移動する。
         *
         * @param x X軸の移動量
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateRelative = function (x, y) {
            var tr1 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                x, y, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の位置を移動
         *
         * 現在の行列の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         * @param y y軸の移動量
         */
        CubismMatrix44.prototype.translate = function (x, y) {
            this._tr[12] = x;
            this._tr[13] = y;
        };
        /**
         * 現在の行列のX軸の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         */
        CubismMatrix44.prototype.translateX = function (x) {
            this._tr[12] = x;
        };
        /**
         * 現在の行列のY軸の位置を指定した位置へ移動する
         *
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateY = function (y) {
            this._tr[13] = y;
        };
        /**
         * 現在の行列の拡大率を相対的に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scaleRelative = function (x, y) {
            var tr1 = new Float32Array([
                x, 0.0, 0.0, 0.0,
                0.0, y, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の拡大率を指定した倍率に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scale = function (x, y) {
            this._tr[0] = x;
            this._tr[5] = y;
        };
        /**
         * 現在の行列に行列を乗算
         *
         * @param m 行列
         */
        CubismMatrix44.prototype.multiplyByMatrix = function (m) {
            CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
        };
        /**
         * オブジェクトのコピーを生成する
         */
        CubismMatrix44.prototype.clone = function () {
            var cloneMatrix = new CubismMatrix44();
            for (var i = 0; i < this._tr.length; i++) {
                cloneMatrix._tr[i] = this._tr[i];
            }
            return cloneMatrix;
        };
        return CubismMatrix44;
    }());
    Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismviewmatrix.ts":
/*!********************************************!*\
  !*** ./Framework/math/cubismviewmatrix.ts ***!
  \********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CubismMatrix44 = _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * カメラの位置変更に使うと便利な4x4行列
     *
     * カメラの位置変更に使うと便利な4x4行列のクラス。
     */
    var CubismViewMatrix = /** @class */ (function (_super) {
        __extends(CubismViewMatrix, _super);
        /**
         * コンストラクタ
         */
        function CubismViewMatrix() {
            var _this = _super.call(this) || this;
            _this._screenLeft = 0.0;
            _this._screenRight = 0.0;
            _this._screenTop = 0.0;
            _this._screenBottom = 0.0;
            _this._maxLeft = 0.0;
            _this._maxRight = 0.0;
            _this._maxTop = 0.0;
            _this._maxBottom = 0.0;
            _this._maxScale = 0.0;
            _this._minScale = 0.0;
            return _this;
        }
        /**
         * 移動を調整
         *
         * @param x X軸の移動量
         * @param y Y軸の移動量
         */
        CubismViewMatrix.prototype.adjustTranslate = function (x, y) {
            if (this._tr[0] * this._maxLeft + (this._tr[12] + x) > this._screenLeft) {
                x = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12];
            }
            if (this._tr[0] * this._maxRight + (this._tr[12] + x) < this._screenRight) {
                x = this._screenRight - this._tr[0] * this._maxRight - this._tr[12];
            }
            if (this._tr[5] * this._maxTop + (this._tr[13] + y) < this._screenTop) {
                y = this._screenTop - this._tr[5] * this._maxTop - this._tr[13];
            }
            if (this._tr[5] * this._maxBottom + (this._tr[13] + y) > this._screenBottom) {
                y = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13];
            }
            var tr1 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                x, y, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 拡大率を調整
         *
         * @param cx 拡大を行うX軸の中心位置
         * @param cy 拡大を行うY軸の中心位置
         * @param scale　拡大率
         */
        CubismViewMatrix.prototype.adjustScale = function (cx, cy, scale) {
            var maxScale = this.getMaxScale();
            var minScale = this.getMinScale();
            var targetScale = scale * this._tr[0];
            if (targetScale < minScale) {
                if (this._tr[0] > 0.0) {
                    scale = minScale / this._tr[0];
                }
            }
            else if (targetScale > maxScale) {
                if (this._tr[0] > 0.0) {
                    scale = maxScale / this._tr[0];
                }
            }
            var tr1 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                cx, cy, 0.0, 1.0
            ]);
            var tr2 = new Float32Array([
                scale, 0.0, 0.0, 0.0,
                0.0, scale, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            var tr3 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                -cx, -cy, 0.0, 1.0,
            ]);
            CubismMatrix44.multiply(tr3, this._tr, this._tr);
            CubismMatrix44.multiply(tr2, this._tr, this._tr);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * デバイスに対応する論理座養生の範囲の設定
         *
         * @param left      左辺のX軸の位置
         * @param right     右辺のX軸の位置
         * @param bottom    下辺のY軸の位置
         * @param top       上辺のY軸の位置
         */
        CubismViewMatrix.prototype.setScreenRect = function (left, right, bottom, top) {
            this._screenLeft = left;
            this._screenRight = right;
            this._screenBottom = bottom;
            this._screenTop = top;
        };
        /**
         * デバイスに対応する論理座標上の移動可能範囲の設定
         * @param left      左辺のX軸の位置
         * @param right     右辺のX軸の位置
         * @param bottom    下辺のY軸の位置
         * @param top       上辺のY軸の位置
         */
        CubismViewMatrix.prototype.setMaxScreenRect = function (left, right, bottom, top) {
            this._maxLeft = left;
            this._maxRight = right;
            this._maxTop = top;
            this._maxBottom = bottom;
        };
        /**
         * 最大拡大率の設定
         * @param maxScale 最大拡大率
         */
        CubismViewMatrix.prototype.setMaxScale = function (maxScale) {
            this._maxScale = maxScale;
        };
        /**
         * 最小拡大率の設定
         * @param minScale 最小拡大率
         */
        CubismViewMatrix.prototype.setMinScale = function (minScale) {
            this._minScale = minScale;
        };
        /**
         * 最大拡大率の取得
         * @return 最大拡大率
         */
        CubismViewMatrix.prototype.getMaxScale = function () {
            return this._maxScale;
        };
        /**
         * 最小拡大率の取得
         * @return 最小拡大率
         */
        CubismViewMatrix.prototype.getMinScale = function () {
            return this._minScale;
        };
        /**
         * 拡大率が最大になっているかを確認する
         *
         * @return true 拡大率は最大
         * @return false 拡大率は最大ではない
         */
        CubismViewMatrix.prototype.isMaxScale = function () {
            return this.getScaleX() >= this._maxScale;
        };
        /**
         * 拡大率が最小になっているかを確認する
         *
         * @return true 拡大率は最小
         * @return false 拡大率は最小ではない
         */
        CubismViewMatrix.prototype.isMinScale = function () {
            return this.getScaleX() <= this._minScale;
        };
        /**
         * デバイスに対応する論理座標の左辺のＸ軸位置を取得する
         * @return デバイスに対応する論理座標の左辺のX軸位置
         */
        CubismViewMatrix.prototype.getScreenLeft = function () {
            return this._screenLeft;
        };
        /**
         * デバイスに対応する論理座標の右辺のＸ軸位置を取得する
         * @return デバイスに対応する論理座標の右辺のX軸位置
         */
        CubismViewMatrix.prototype.getScreenRight = function () {
            return this._screenRight;
        };
        /**
         * デバイスに対応する論理座標の下辺のY軸位置を取得する
         * @return デバイスに対応する論理座標の下辺のY軸位置
         */
        CubismViewMatrix.prototype.getScreenBottom = function () {
            return this._screenBottom;
        };
        /**
         * デバイスに対応する論理座標の上辺のY軸位置を取得する
         * @return デバイスに対応する論理座標の上辺のY軸位置
         */
        CubismViewMatrix.prototype.getScreenTop = function () {
            return this._screenTop;
        };
        /**
         * 左辺のX軸位置の最大値の取得
         * @return 左辺のX軸位置の最大値
         */
        CubismViewMatrix.prototype.getMaxLeft = function () {
            return this._maxLeft;
        };
        /**
         * 右辺のX軸位置の最大値の取得
         * @return 右辺のX軸位置の最大値
         */
        CubismViewMatrix.prototype.getMaxRight = function () {
            return this._maxRight;
        };
        /**
         * 下辺のY軸位置の最大値の取得
         * @return 下辺のY軸位置の最大値
         */
        CubismViewMatrix.prototype.getMaxBottom = function () {
            return this._maxBottom;
        };
        /**
         * 上辺のY軸位置の最大値の取得
         * @return 上辺のY軸位置の最大値
         */
        CubismViewMatrix.prototype.getMaxTop = function () {
            return this._maxTop;
        };
        return CubismViewMatrix;
    }(CubismMatrix44));
    Live2DCubismFramework.CubismViewMatrix = CubismViewMatrix;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtdmlld21hdHJpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBZ1NyQztBQWhTRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBRUk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSSxZQUFZO1lBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ1csdUJB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Q0FBWSxHQUFuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksb0NBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQVlMLHVCQUFDO0lBQUQsQ0FBQyxDQXJTcUMsY0FBYyxHQXFTbkQ7SUFyU1ksc0NBQWdCLG1CQXFTNUI7QUFDTCxDQUFDLEVBN1NnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBNlNyQyIsImZpbGUiOiIvbWF0aC9jdWJpc212aWV3bWF0cml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvbWF0aC9jdWJpc212aWV3bWF0cml4LnRzXCIpO1xuIiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiA0eDTjga7ooYzliJdcbiAgICAgKiBcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0cml4NDRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XG4gICAgICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWPl+OBkeWPluOBo+OBn++8kuOBpOOBruihjOWIl+OBruS5l+eul+OCkuihjOOBhuOAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGEg6KGM5YiXYVxuICAgICAgICAgKiBAcGFyYW0gYiDooYzliJdiXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IEZsb2F0MzJBcnJheSwgYjogRmxvYXQzMkFycmF5LCBkc3Q6IEZsb2F0MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gNDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBuOyArK2opXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs6IG51bWJlciA9IDA7IGsgPCBuOyArK2spXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNbaiArIGkgKiA0XSArPSBhW2sgKyBpICogNF0gKiBiW2ogKyBrICogNF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDE2OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gY1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJbjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBsb2FkSWRlbnRpdHkoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cml4KGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihjOWIl+OCkuioreWumlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHRyIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxNjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyW2ldID0gdHJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoKTogRmxvYXQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5ouh5aSn546H44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7mi6HlpKfnjofjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxM107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHNyYyBY6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm4g54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWOi7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF0gKiBzcmMgKyB0aGlzLl90clsxMl07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gc3JjIFnou7jjga7lgKRcbiAgICAgICAgICogQHJldHVybuOAgOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1nou7jjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XSAqIHNyYyArIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEyXSkgLyB0aGlzLl90clswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEzXSkgLyB0aGlzLl90cls1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnp7vli5VcbiAgICAgICAgICogXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuebuOWvvueahOOBq+enu+WLleOBmeOCi+OAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLjAsICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMS4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIHksICAgICAgMC4wLCAgICAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXG4gICAgICAgICAqIFxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgeei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWOi7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVZKHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuebuOWvvueahOOBq+ioreWumuOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6bnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsIFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLmjIflrprjgZfjgZ/lgI3njofjgavoqK3lrprjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clswXSA9IHg7XG4gICAgICAgICAgICB0aGlzLl90cls1XSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gr6KGM5YiX44KS5LmX566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBtIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlNYXRyaXgobTogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KG0uZ2V0QXJyYXkoKSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqrjg5bjgrjjgqfjgq/jg4jjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOiBDdWJpc21NYXRyaXg0NFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY2xvbmVNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsb25lTWF0cml4Ll90cltpXSA9IHRoaXMuX3RyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgX3RyOiBGbG9hdDMyQXJyYXk7ICAgIC8vIDR4NOihjOWIl+ODh+ODvOOCv1xuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tYXRyaXg0NH0gZnJvbSBcIi4vY3ViaXNtbWF0cml4NDRcIjtcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YmlzbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOOCq+ODoeODqeOBruS9jee9ruWkieabtOOBq+S9v+OBhuOBqOS+v+WIqeOBqjR4NOihjOWIl1xuICAgICAqIFxuICAgICAqIOOCq+ODoeODqeOBruS9jee9ruWkieabtOOBq+S9v+OBhuOBqOS+v+WIqeOBqjR4NOihjOWIl+OBruOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21WaWV3TWF0cml4IGV4dGVuZHMgQ3ViaXNtTWF0cml4NDRcbiAgICB7XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuTGVmdCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlblJpZ2h0ID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuVG9wID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuQm90dG9tID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fbWF4TGVmdCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX21heFJpZ2h0ID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fbWF4VG9wID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fbWF4Qm90dG9tID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fbWF4U2NhbGUgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9taW5TY2FsZSA9IDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnp7vli5XjgpLoqr/mlbRcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFkanVzdFRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fdHJbMF0gKiB0aGlzLl9tYXhMZWZ0ICsgKHRoaXMuX3RyWzEyXSArIHgpID4gdGhpcy5fc2NyZWVuTGVmdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4ID0gdGhpcy5fc2NyZWVuTGVmdCAtIHRoaXMuX3RyWzBdICogdGhpcy5fbWF4TGVmdCAtIHRoaXMuX3RyWzEyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5fdHJbMF0gKiB0aGlzLl9tYXhSaWdodCArICh0aGlzLl90clsxMl0gKyB4KSA8IHRoaXMuX3NjcmVlblJpZ2h0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHggPSB0aGlzLl9zY3JlZW5SaWdodCAtIHRoaXMuX3RyWzBdICogdGhpcy5fbWF4UmlnaHQgLSB0aGlzLl90clsxMl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX3RyWzVdICogdGhpcy5fbWF4VG9wICsgKHRoaXMuX3RyWzEzXSArIHkpIDwgdGhpcy5fc2NyZWVuVG9wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHkgPSB0aGlzLl9zY3JlZW5Ub3AgLSB0aGlzLl90cls1XSAqIHRoaXMuX21heFRvcCAtIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5fdHJbNV0gKiB0aGlzLl9tYXhCb3R0b20gKyAodGhpcy5fdHJbMTNdICsgeSkgPiB0aGlzLl9zY3JlZW5Cb3R0b20pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeSA9IHRoaXMuX3NjcmVlbkJvdHRvbSAtIHRoaXMuX3RyWzVdICogdGhpcy5fbWF4Qm90dG9tIC0gdGhpcy5fdHJbMTNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDEuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICB5LCAgICAgIDAuMCwgICAgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaLoeWkp+eOh+OCkuiqv+aVtFxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGN4IOaLoeWkp+OCkuihjOOBhljou7jjga7kuK3lv4PkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGN5IOaLoeWkp+OCkuihjOOBhlnou7jjga7kuK3lv4PkvY3nva5cbiAgICAgICAgICogQHBhcmFtIHNjYWxl44CA5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWRqdXN0U2NhbGUoY3g6IG51bWJlciwgY3k6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG1heFNjYWxlOiBudW1iZXIgPSB0aGlzLmdldE1heFNjYWxlKCk7XG4gICAgICAgICAgICBsZXQgbWluU2NhbGU6IG51bWJlciA9IHRoaXMuZ2V0TWluU2NhbGUoKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldFNjYWxlID0gc2NhbGUgKiB0aGlzLl90clswXTtcblxuICAgICAgICAgICAgaWYodGFyZ2V0U2NhbGUgPCBtaW5TY2FsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl90clswXSA+IDAuMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbWluU2NhbGUgLyB0aGlzLl90clswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRhcmdldFNjYWxlID4gbWF4U2NhbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fdHJbMF0gPiAwLjApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG1heFNjYWxlIC8gdGhpcy5fdHJbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3gsIGN5LCAwLjAsIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCB0cjI6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCBzY2FsZSwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHRyMzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIC1jeCwgLWN5LCAwLjAsIDEuMCxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjMsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjIsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL6KuW55CG5bqn6aSK55Sf44Gu56+E5Zuy44Gu6Kit5a6aXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbGVmdCAgICAgIOW3pui+uuOBrljou7jjga7kvY3nva5cbiAgICAgICAgICogQHBhcmFtIHJpZ2h0ICAgICDlj7Povrrjga5Y6Lu444Gu5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBib3R0b20gICAg5LiL6L6644GuWei7uOOBruS9jee9rlxuICAgICAgICAgKiBAcGFyYW0gdG9wICAgICAgIOS4iui+uuOBrlnou7jjga7kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRTY3JlZW5SZWN0KGxlZnQ6IG51bWJlciwgIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCB0b3A6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuTGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICB0aGlzLl9zY3JlZW5SaWdodCA9IHJpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuQm90dG9tID0gYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuVG9wID0gdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+irlueQhuW6p+aomeS4iuOBruenu+WLleWPr+iDveevhOWbsuOBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gbGVmdCAgICAgIOW3pui+uuOBrljou7jjga7kvY3nva5cbiAgICAgICAgICogQHBhcmFtIHJpZ2h0ICAgICDlj7Povrrjga5Y6Lu444Gu5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBib3R0b20gICAg5LiL6L6644GuWei7uOOBruS9jee9rlxuICAgICAgICAgKiBAcGFyYW0gdG9wICAgICAgIOS4iui+uuOBrlnou7jjga7kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNYXhTY3JlZW5SZWN0KGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHRvcDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXhMZWZ0ID0gbGVmdDtcbiAgICAgICAgICAgIHRoaXMuX21heFJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9tYXhUb3AgPSB0b3A7XG4gICAgICAgICAgICB0aGlzLl9tYXhCb3R0b20gPSBib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5pyA5aSn5ouh5aSn546H44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBtYXhTY2FsZSDmnIDlpKfmi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNYXhTY2FsZShtYXhTY2FsZTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXhTY2FsZSA9IG1heFNjYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOacgOWwj+aLoeWkp+eOh+OBruioreWumlxuICAgICAgICAgKiBAcGFyYW0gbWluU2NhbGUg5pyA5bCP5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TWluU2NhbGUobWluU2NhbGU6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWluU2NhbGUgPSBtaW5TY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmnIDlpKfmi6HlpKfnjofjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDmnIDlpKfmi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXhTY2FsZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21heFNjYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOacgOWwj+aLoeWkp+eOh+OBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOacgOWwj+aLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1pblNjYWxlKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5ouh5aSn546H44GM5pyA5aSn44Gr44Gq44Gj44Gm44GE44KL44GL44KS56K66KqN44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5ouh5aSn546H44Gv5pyA5aSnXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5ouh5aSn546H44Gv5pyA5aSn44Gn44Gv44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXhTY2FsZSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNjYWxlWCgpID49IHRoaXMuX21heFNjYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaLoeWkp+eOh+OBjOacgOWwj+OBq+OBquOBo+OBpuOBhOOCi+OBi+OCkueiuuiqjeOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiB0cnVlIOaLoeWkp+eOh+OBr+acgOWwj1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOaLoeWkp+eOh+OBr+acgOWwj+OBp+OBr+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTWluU2NhbGUoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2FsZVgoKSA8PSB0aGlzLl9taW5TY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjg5DjgqTjgrnjgavlr77lv5zjgZnjgovoq5bnkIbluqfmqJnjga7lt6bovrrjga7vvLjou7jkvY3nva7jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjg4fjg5DjgqTjgrnjgavlr77lv5zjgZnjgovoq5bnkIbluqfmqJnjga7lt6bovrrjga5Y6Lu45L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NyZWVuTGVmdCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlbkxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL6KuW55CG5bqn5qiZ44Gu5Y+z6L6644Gu77y46Lu45L2N572u44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL6KuW55CG5bqn5qiZ44Gu5Y+z6L6644GuWOi7uOS9jee9rlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjcmVlblJpZ2h0KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NyZWVuUmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL6KuW55CG5bqn5qiZ44Gu5LiL6L6644GuWei7uOS9jee9ruOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+irlueQhuW6p+aomeOBruS4i+i+uuOBrlnou7jkvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTY3JlZW5Cb3R0b20oKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5Cb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL6KuW55CG5bqn5qiZ44Gu5LiK6L6644GuWei7uOS9jee9ruOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+irlueQhuW6p+aomeOBruS4iui+uuOBrlnou7jkvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTY3JlZW5Ub3AoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5Ub3A7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5bem6L6644GuWOi7uOS9jee9ruOBruacgOWkp+WApOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOW3pui+uuOBrljou7jkvY3nva7jga7mnIDlpKflgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXhMZWZ0KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4TGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj7Povrrjga5Y6Lu45L2N572u44Gu5pyA5aSn5YCk44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4g5Y+z6L6644GuWOi7uOS9jee9ruOBruacgOWkp+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1heFJpZ2h0KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4UmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5LiL6L6644GuWei7uOS9jee9ruOBruacgOWkp+WApOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOS4i+i+uuOBrlnou7jkvY3nva7jga7mnIDlpKflgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXhCb3R0b20oKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhCb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5LiK6L6644GuWei7uOS9jee9ruOBruacgOWkp+WApOOBruWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIOS4iui+uuOBrlnou7jkvY3nva7jga7mnIDlpKflgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXhUb3AoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9zY3JlZW5MZWZ0OiBudW1iZXI7ICAgIC8vIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+irlueQhuW6p+aomeS4iuOBruevhOWbsu+8iOW3pui+uljou7jkvY3nva7vvIlcbiAgICAgICAgcHJpdmF0ZSBfc2NyZWVuUmlnaHQ6IG51bWJlcjsgICAvLyDjg4fjg5DjgqTjgrnjgavlr77lv5zjgZnjgovoq5bnkIbluqfmqJnkuIrjga7nr4Tlm7LvvIjlj7PovrpY6Lu45L2N572u77yJXG4gICAgICAgIHByaXZhdGUgX3NjcmVlblRvcDogbnVtYmVyOyAgICAgLy8g44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL6KuW55CG5bqn5qiZ5LiK44Gu56+E5Zuy77yI5LiK6L66Wei7uOS9jee9ru+8iVxuICAgICAgICBwcml2YXRlIF9zY3JlZW5Cb3R0b206IG51bWJlcjsgIC8vIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+irlueQhuW6p+aomeS4iuOBruevhOWbsu+8iOS4i+i+ulnou7jkvY3nva7vvIlcbiAgICAgICAgcHJpdmF0ZSBfbWF4TGVmdDogbnVtYmVyOyAgICAgICAvLyDoq5bnkIbluqfmqJnkuIrjga7np7vli5Xlj6/og73nr4Tlm7LvvIjlt6bovrpY6Lu45L2N572u77yJXG4gICAgICAgIHByaXZhdGUgX21heFJpZ2h0OiBudW1iZXI7ICAgICAgLy8g6KuW55CG5bqn5qiZ5LiK44Gu56e75YuV5Y+v6IO956+E5Zuy77yI5Y+z6L66WOi7uOS9jee9ru+8iVxuICAgICAgICBwcml2YXRlIF9tYXhUb3A6IG51bWJlcjsgICAgICAgIC8vIOirlueQhuW6p+aomeS4iuOBruenu+WLleWPr+iDveevhOWbsu+8iOS4iui+ulnou7jkvY3nva7vvIlcbiAgICAgICAgcHJpdmF0ZSBfbWF4Qm90dG9tOiBudW1iZXI7ICAgICAgLy8g6KuW55CG5bqn5qiZ5LiK44Gu56e75YuV5Y+v6IO956+E5Zuy77yI5LiL6L66Wei7uOS9jee9ru+8iVxuICAgICAgICBwcml2YXRlIF9tYXhTY2FsZTogbnVtYmVyOyAgICAgIC8vIOaLoeWkp+eOh+OBruacgOWkp+WApFxuICAgICAgICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyOyAgICAgIC8vIOaLoeWkp+eOh+OBruacgOWwj+WApFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9