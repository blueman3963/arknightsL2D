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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/math/cubismtargetpoint.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/math/cubismmath.ts":
/*!**************************************!*\
  !*** ./Framework/math/cubismmath.ts ***!
  \**************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismvector2 */ "./Framework/math/cubismvector2.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismVector2 = _cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 数値計算などに使用するユーティリティクラス
     */
    var CubismMath = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMath() {
        }
        /**
         * 第一引数の値を最小値と最大値の範囲に収めた値を返す
         *
         * @param value 収められる値
         * @param min   範囲の最小値
         * @param max   範囲の最大値
         * @return 最小値と最大値の範囲に収めた値
         */
        CubismMath.range = function (value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        };
        /**
         * サイン関数の値を求める
         *
         * @param x 角度値（ラジアン）
         * @return サイン関数sin(x)の値
         */
        CubismMath.sin = function (x) {
            return Math.sin(x);
        };
        /**
         * コサイン関数の値を求める
         *
         * @param x 角度値(ラジアン)
         * @return コサイン関数cos(x)の値
         */
        CubismMath.cos = function (x) {
            return Math.cos(x);
        };
        /**
         * 値の絶対値を求める
         *
         * @param x 絶対値を求める値
         * @return 値の絶対値
         */
        CubismMath.abs = function (x) {
            return Math.abs(x);
        };
        /**
         * 平方根(ルート)を求める
         * @param x -> 平方根を求める値
         * @return 値の平方根
         */
        CubismMath.sqrt = function (x) {
            return Math.sqrt(x);
        };
        /**
         * イージング処理されたサインを求める
         * フェードイン・アウト時のイージングに利用できる
         *
         * @param value イージングを行う値
         * @return イージング処理されたサイン値
         */
        CubismMath.getEasingSine = function (value) {
            if (value < 0.0) {
                return 0.0;
            }
            else if (value > 1.0) {
                return 1.0;
            }
            return 0.5 - 0.5 * this.cos(value * Math.PI);
        };
        /**
         * 大きい方の値を返す
         *
         * @param left 左辺の値
         * @param right 右辺の値
         * @return 大きい方の値
         */
        CubismMath.max = function (left, right) {
            return (left > right)
                ? left
                : right;
        };
        /**
         * 小さい方の値を返す
         *
         * @param left  左辺の値
         * @param right 右辺の値
         * @return 小さい方の値
         */
        CubismMath.min = function (left, right) {
            return (left > right)
                ? right
                : left;
        };
        /**
         * 角度値をラジアン値に変換する
         *
         * @param degrees   角度値
         * @return 角度値から変換したラジアン値
         */
        CubismMath.degreesToRadian = function (degrees) {
            return (degrees / 180.0) * Math.PI;
        };
        /**
         * ラジアン値を角度値に変換する
         *
         * @param radian    ラジアン値
         * @return ラジアン値から変換した角度値
         */
        CubismMath.radianToDegrees = function (radian) {
            return (radian * 180.0) / Math.PI;
        };
        /**
         * ２つのベクトルからラジアン値を求める
         *
         * @param from  始点ベクトル
         * @param to    終点ベクトル
         * @return ラジアン値から求めた方向ベクトル
         */
        CubismMath.directionToRadian = function (from, to) {
            var q1 = Math.atan2(to.y, to.x);
            var q2 = Math.atan2(from.y, from.x);
            var ret = q1 - q2;
            while (ret < -Math.PI) {
                ret += Math.PI * 2.0;
            }
            while (ret > Math.PI) {
                ret -= Math.PI * 2.0;
            }
            return ret;
        };
        /**
         * ２つのベクトルから角度値を求める
         *
         * @param from  始点ベクトル
         * @param to    終点ベクトル
         * @return 角度値から求めた方向ベクトル
         */
        CubismMath.directionToDegrees = function (from, to) {
            var radian = this.directionToRadian(from, to);
            var degree = this.radianToDegrees(radian);
            if ((to.x - from.x) > 0.0) {
                degree = -degree;
            }
            return degree;
        };
        /**
         * ラジアン値を方向ベクトルに変換する。
         *
         * @param totalAngle    ラジアン値
         * @return ラジアン値から変換した方向ベクトル
         */
        CubismMath.radianToDirection = function (totalAngle) {
            var ret = new CubismVector2();
            ret.x = this.sin(totalAngle);
            ret.y = this.cos(totalAngle);
            return ret;
        };
        return CubismMath;
    }());
    Live2DCubismFramework.CubismMath = CubismMath;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismtargetpoint.ts":
/*!*********************************************!*\
  !*** ./Framework/math/cubismtargetpoint.ts ***!
  \*********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmath */ "./Framework/math/cubismmath.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismMath = _cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var FrameRate = 30;
    var Epsilon = 0.01;
    /**
     * 顔の向きの制御機能
     *
     * 顔の向きの制御機能を提供するクラス。
     */
    var CubismTargetPoint = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismTargetPoint() {
            this._faceTargetX = 0.0;
            this._faceTargetY = 0.0;
            this._faceX = 0.0;
            this._faceY = 0.0;
            this._faceVX = 0.0;
            this._faceVY = 0.0;
            this._lastTimeSeconds = 0.0;
            this._userTimeSeconds = 0.0;
        }
        /**
         * 更新処理
         */
        CubismTargetPoint.prototype.update = function (deltaTimeSeconds) {
            // デルタ時間を加算する
            this._userTimeSeconds += deltaTimeSeconds;
            // 首を中央から左右に振るときの平均的な速さは　秒速度。加速・減速を考慮して、その２倍を最高速度とする
            // 顔の振り具合を、中央（0.0）から、左右は（+-1.0）とする
            var faceParamMaxV = 40.0 / 10.0; // 7.5秒間に40分移動(5.3/sc)
            var maxV = faceParamMaxV * 1.0 / FrameRate; // 1frameあたりに変化できる速度の上限
            if (this._lastTimeSeconds == 0.0) {
                this._lastTimeSeconds = this._userTimeSeconds;
                return;
            }
            var deltaTimeWeight = (this._userTimeSeconds - this._lastTimeSeconds) * FrameRate;
            this._lastTimeSeconds = this._userTimeSeconds;
            // 最高速度になるまでの時間を
            var timeToMaxSpeed = 0.15;
            var frameToMaxSpeed = timeToMaxSpeed * FrameRate; // sec * frame/sec
            var maxA = deltaTimeWeight * maxV / frameToMaxSpeed; // 1frameあたりの加速度
            // 目指す向きは、（dx, dy）方向のベクトルとなる
            var dx = this._faceTargetX - this._faceX;
            var dy = this._faceTargetY - this._faceY;
            if (CubismMath.abs(dx) <= Epsilon && CubismMath.abs(dy) <= Epsilon) {
                return; // 変化なし
            }
            // 速度の最大よりも大きい場合は、速度を落とす
            var d = CubismMath.sqrt((dx * dx) + (dy * dy));
            // 進行方向の最大速度ベクトル
            var vx = maxV * dx / d;
            var vy = maxV * dy / d;
            // 現在の速度から、新規速度への変化（加速度）を求める
            var ax = vx - this._faceVX;
            var ay = vy - this._faceVY;
            var a = CubismMath.sqrt((ax * ax) + (ay * ay));
            // 加速のとき
            if (a < -maxA || a > maxA) {
                ax *= maxA / a;
                ay *= maxA / a;
            }
            // 加速度を元の速度に足して、新速度とする
            this._faceVX += ax;
            this._faceVY += ay;
            // 目的の方向に近づいたとき、滑らかに減速するための処理
            // 設定された加速度で止まる事の出来る距離と速度の関係から
            // 現在とりうる最高速度を計算し、それ以上の時は速度を落とす
            // ※本来、人間は筋力で力（加速度）を調整できるため、より自由度が高いが、簡単な処理で済ませている
            {
                // 加速度、速度、距離の関係式。
                //            2  6           2               3
                //      sqrt(a  t  + 16 a h t  - 8 a h) - a t
                // v = --------------------------------------
                //                    2
                //                 4 t  - 2
                // (t=1)
                // 	時刻tは、あらかじめ加速度、速度を1/60(フレームレート、単位なし)で
                // 	考えているので、t＝１として消してよい（※未検証）
                var maxV_1 = 0.5 * (CubismMath.sqrt((maxA * maxA) + 16.0 * maxA * d - 8.0 * maxA * d) - maxA);
                var curV = CubismMath.sqrt((this._faceVX * this._faceVX) + (this._faceVY * this._faceVY));
                if (curV > maxV_1) {
                    // 現在の速度 > 最高速度のとき、最高速度まで減速
                    this._faceVX *= maxV_1 / curV;
                    this._faceVY *= maxV_1 / curV;
                }
            }
            this._faceX += this._faceVX;
            this._faceY += this._faceVY;
        };
        /**
         * X軸の顔の向きの値を取得
         *
         * @return X軸の顔の向きの値（-1.0 ~ 1.0）
         */
        CubismTargetPoint.prototype.getX = function () {
            return this._faceX;
        };
        /**
         * Y軸の顔の向きの値を取得
         *
         * @return Y軸の顔の向きの値（-1.0 ~ 1.0）
         */
        CubismTargetPoint.prototype.getY = function () {
            return this._faceY;
        };
        /**
         * 顔の向きの目標値を設定
         *
         * @param x X軸の顔の向きの値（-1.0 ~ 1.0）
         * @param y Y軸の顔の向きの値（-1.0 ~ 1.0）
         */
        CubismTargetPoint.prototype.set = function (x, y) {
            this._faceTargetX = x;
            this._faceTargetY = y;
        };
        return CubismTargetPoint;
    }());
    Live2DCubismFramework.CubismTargetPoint = CubismTargetPoint;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismvector2.ts":
/*!*****************************************!*\
  !*** ./Framework/math/cubismvector2.ts ***!
  \*****************************************/
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
     * 2次元ベクトル型
     *
     * 2次元ベクトル型の機能を提供する。
     */
    var CubismVector2 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismVector2(x, y) {
            this.x = x;
            this.y = y;
            this.x = (x == undefined)
                ? 0.0
                : x;
            this.y = (y == undefined)
                ? 0.0
                : y;
        }
        /**
         * ベクトルの加算
         *
         * @param vector2 加算するベクトル値
         * @return 加算結果 ベクトル値
         */
        CubismVector2.prototype.add = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x + vector2.x;
            ret.y = this.y + vector2.y;
            return ret;
        };
        /**
         * ベクトルの減算
         *
         * @param vector2 減算するベクトル値
         * @return 減算結果 ベクトル値
         */
        CubismVector2.prototype.substract = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x - vector2.x;
            ret.y = this.y - vector2.y;
            return ret;
        };
        /**
         * ベクトルの乗算
         *
         * @param vector2 乗算するベクトル値
         * @return 乗算結果　ベクトル値
         */
        CubismVector2.prototype.multiply = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x * vector2.x;
            ret.y = this.y * vector2.y;
            return ret;
        };
        /**
         * ベクトルの乗算(スカラー)
         *
         * @param scalar 乗算するスカラー値
         * @return 乗算結果　ベクトル値
         */
        CubismVector2.prototype.multiplyByScaler = function (scalar) {
            return this.multiply(new CubismVector2(scalar, scalar));
        };
        /**
         * ベクトルの除算
         *
         * @param vector2 除算するベクトル値
         * @return 除算結果　ベクトル値
         */
        CubismVector2.prototype.division = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x / vector2.x;
            ret.y = this.y / vector2.y;
            return ret;
        };
        /**
         * ベクトルの除算(スカラー)
         *
         * @param scalar 除算するスカラー値
         * @return 除算結果　ベクトル値
         */
        CubismVector2.prototype.divisionByScalar = function (scalar) {
            return this.division(new CubismVector2(scalar, scalar));
        };
        /**
         * ベクトルの長さを取得する
         *
         * @return ベクトルの長さ
         */
        CubismVector2.prototype.getLength = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        /**
         * ベクトルの距離の取得
         *
         * @param a 点
         * @return ベクトルの距離
         */
        CubismVector2.prototype.getDistanceWith = function (a) {
            return Math.sqrt(((this.x - a.x) * (this.x - a.x)) + ((this.y - a.y) * (this.y - a.y)));
        };
        /**
         * ドット積の計算
         *
         * @param a 値
         * @return 結果
         */
        CubismVector2.prototype.dot = function (a) {
            return (this.x * a.x) + (this.y * a.y);
        };
        /**
         * 正規化の適用
         */
        CubismVector2.prototype.normalize = function () {
            var length = Math.pow((this.x * this.x) + (this.y * this.y), 0.5);
            this.x = this.x / length;
            this.y = this.y / length;
        };
        /**
         * 等しさの確認（等しいか？）
         *
         * 値が等しいか？
         *
         * @param rhs 確認する値
         * @return true 値は等しい
         * @return false 値は等しくない
         */
        CubismVector2.prototype.isEqual = function (rhs) {
            return (this.x == rhs.x) && (this.y == rhs.y);
        };
        /**
         * 等しさの確認（等しくないか？）
         *
         * 値が等しくないか？
         *
         * @param rhs 確認する値
         * @return true 値は等しくない
         * @return false 値は等しい
         */
        CubismVector2.prototype.isNotEqual = function (rhs) {
            return !(this.isEqual(rhs));
        };
        return CubismVector2;
    }());
    Live2DCubismFramework.CubismVector2 = CubismVector2;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbWF0aC9jdWJpc210YXJnZXRwb2ludC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbWF0aC9jdWJpc212ZWN0b3IyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFb0U7QUFDdkUsSUFBTyxhQUFhLEdBQUcsb0VBQWEsQ0FBQyxhQUFhLENBQUM7QUFFNUMsSUFBVSxxQkFBcUIsQ0F1TnJDO0FBdk5ELFdBQWlCLHFCQUFxQjtJQUVsQzs7T0FFRztJQUNIO1FBME1LOztXQUVHO1FBQ0g7UUFHQSxDQUFDO1FBOU1GOzs7Ozs7O1dBT0c7UUFDSSxn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LEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFNUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNJLCtCQUFPLEdBQWQsVUFBZSxHQUFrQjtZQUU3QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDSSxrQ0FBVSxHQUFqQixVQUFrQixHQUFrQjtZQUVoQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FBQztJQXBLWSxtQ0FBYSxnQkFvS3pCO0FBQ0wsQ0FBQyxFQTVLZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTRLckMiLCJmaWxlIjoiL21hdGgvY3ViaXNtdGFyZ2V0cG9pbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9tYXRoL2N1YmlzbXRhcmdldHBvaW50LnRzXCIpO1xuIiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSBcIi4vY3ViaXNtdmVjdG9yMlwiO1xuaW1wb3J0IEN1YmlzbVZlY3RvcjIgPSBjdWJpc212ZWN0b3IyLkN1YmlzbVZlY3RvcjI7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog5pWw5YCk6KiI566X44Gq44Gp44Gr5L2/55So44GZ44KL44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K5XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdGhcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnrKzkuIDlvJXmlbDjga7lgKTjgpLmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKTjgpLov5TjgZlcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDlj47jgoHjgonjgozjgovlgKRcbiAgICAgICAgICogQHBhcmFtIG1pbiAgIOevhOWbsuOBruacgOWwj+WApFxuICAgICAgICAgKiBAcGFyYW0gbWF4ICAg56+E5Zuy44Gu5pyA5aSn5YCkXG4gICAgICAgICAqIEByZXR1cm4g5pyA5bCP5YCk44Go5pyA5aSn5YCk44Gu56+E5Zuy44Gr5Y+O44KB44Gf5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmFuZ2UodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IG1pbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWF4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IOinkuW6puWApO+8iOODqeOCuOOCouODs++8iVxuICAgICAgICAgKiBAcmV0dXJuIOOCteOCpOODs+mWouaVsHNpbih4KeOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHNpbih4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc2luKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+OCteOCpOODs+mWouaVsOOBruWApOOCkuaxguOCgeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHgg6KeS5bqm5YCkKOODqeOCuOOCouODsylcbiAgICAgICAgICogQHJldHVybiDjgrPjgrXjgqTjg7PplqLmlbBjb3MoeCnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBjb3MoeDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNvcyh4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlgKTjga7ntbblr77lgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IOe1tuWvvuWApOOCkuaxguOCgeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIOWApOOBrue1tuWvvuWApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGFicyh4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW5s+aWueaguSjjg6vjg7zjg4gp44KS5rGC44KB44KLXG4gICAgICAgICAqIEBwYXJhbSB4IC0+IOW5s+aWueagueOCkuaxguOCgeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIOWApOOBruW5s+aWueaguVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHNxcnQoeDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kk44O844K444Oz44Kw5Yem55CG44GV44KM44Gf44K144Kk44Oz44KS5rGC44KB44KLXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+ODu+OCouOCpuODiOaZguOBruOCpOODvOOCuOODs+OCsOOBq+WIqeeUqOOBp+OBjeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOOCpOODvOOCuOODs+OCsOOCkuihjOOBhuWApFxuICAgICAgICAgKiBAcmV0dXJuIOOCpOODvOOCuOODs+OCsOWHpueQhuOBleOCjOOBn+OCteOCpOODs+WApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGdldEVhc2luZ1NpbmUodmFsdWU6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuMDtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAwLjUgLSAwLjUgKiB0aGlzLmNvcyh2YWx1ZSAqIE1hdGguUEkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWkp+OBjeOBhOaWueOBruWApOOCkui/lOOBmVxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGxlZnQg5bem6L6644Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKRcbiAgICAgICAgICogQHJldHVybiDlpKfjgY3jgYTmlrnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBtYXgobGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxuICAgICAgICAgICAgICAgID8gbGVmdFxuICAgICAgICAgICAgICAgIDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5bCP44GV44GE5pa544Gu5YCk44KS6L+U44GZXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbGVmdCAg5bem6L6644Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKTjgIBcbiAgICAgICAgICogQHJldHVybiDlsI/jgZXjgYTmlrnjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBtaW4obGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxuICAgICAgICAgICAgICAgID8gcmlnaHRcbiAgICAgICAgICAgICAgICA6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KeS5bqm5YCk44KS44Op44K444Ki44Oz5YCk44Gr5aSJ5o+b44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gZGVncmVlcyAgIOinkuW6puWApFxuICAgICAgICAgKiBAcmV0dXJuIOinkuW6puWApOOBi+OCieWkieaPm+OBl+OBn+ODqeOCuOOCouODs+WApFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRlZ3JlZXNUb1JhZGlhbihkZWdyZWVzOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChkZWdyZWVzIC8gMTgwLjApICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6njgrjjgqLjg7PlgKTjgpLop5LluqblgKTjgavlpInmj5vjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSByYWRpYW4gICAg44Op44K444Ki44Oz5YCkXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5aSJ5o+b44GX44Gf6KeS5bqm5YCkXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmFkaWFuVG9EZWdyZWVzKHJhZGlhbjogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAocmFkaWFuICogMTgwLjApIC8gTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonjg6njgrjjgqLjg7PlgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBmcm9tICDlp4vngrnjg5njgq/jg4jjg6tcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieaxguOCgeOBn+aWueWQkeODmeOCr+ODiOODq1xuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvUmFkaWFuKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHExOiBudW1iZXIgPSBNYXRoLmF0YW4yKHRvLnksIHRvLngpO1xuICAgICAgICAgICAgY29uc3QgcTI6IG51bWJlciA9IE1hdGguYXRhbjIoZnJvbS55LCBmcm9tLngpO1xuXG4gICAgICAgICAgICBsZXQgcmV0OiBudW1iZXIgPSBxMSAtIHEyO1xuXG4gICAgICAgICAgICB3aGlsZShyZXQgPCAtTWF0aC5QSSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gTWF0aC5QSSAqIDIuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUocmV0ID4gTWF0aC5QSSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQgLT0gTWF0aC5QSSAqIDIuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonop5LluqblgKTjgpLmsYLjgoHjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBmcm9tICDlp4vngrnjg5njgq/jg4jjg6tcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xuICAgICAgICAgKiBAcmV0dXJuIOinkuW6puWApOOBi+OCieaxguOCgeOBn+aWueWQkeODmeOCr+ODiOODq1xuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvRGVncmVlcyhmcm9tOiBDdWJpc21WZWN0b3IyLCB0bzogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCByYWRpYW46IG51bWJlciA9IHRoaXMuZGlyZWN0aW9uVG9SYWRpYW4oZnJvbSwgdG8pO1xuICAgICAgICAgICAgbGV0IGRlZ3JlZTogbnVtYmVyID0gdGhpcy5yYWRpYW5Ub0RlZ3JlZXMocmFkaWFuKTtcblxuICAgICAgICAgICAgaWYgKCh0by54IC0gZnJvbS54KSA+IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWdyZWUgPSAtZGVncmVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVncmVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODqeOCuOOCouODs+WApOOCkuaWueWQkeODmeOCr+ODiOODq+OBq+WkieaPm+OBmeOCi+OAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHRvdGFsQW5nbGUgICAg44Op44K444Ki44Oz5YCkXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5aSJ5o+b44GX44Gf5pa55ZCR44OZ44Kv44OI44OrXG4gICAgICAgICAqL1xuXG4gICAgICAgICBzdGF0aWMgcmFkaWFuVG9EaXJlY3Rpb24odG90YWxBbmdsZTogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKCk7XG5cbiAgICAgICAgICAgIHJldC54ID0gdGhpcy5zaW4odG90YWxBbmdsZSk7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMuY29zKHRvdGFsQW5nbGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgfVxuXG4gICAgICAgICAvKipcbiAgICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgICovXG4gICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAgIHtcblxuICAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tYXRofSBmcm9tIFwiLi9jdWJpc21tYXRoXCI7XG5pbXBvcnQgQ3ViaXNtTWF0aCA9IGN1YmlzbW1hdGguQ3ViaXNtTWF0aDtcblxuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIGNvbnN0IEZyYW1lUmF0ZTogbnVtYmVyID0gMzA7XG4gICAgY29uc3QgRXBzaWxvbjogbnVtYmVyID0gMC4wMTtcblxuICAgIC8qKlxuICAgICAqIOmhlOOBruWQkeOBjeOBruWItuW+oeapn+iDvVxuICAgICAqIFxuICAgICAqIOmhlOOBruWQkeOBjeOBruWItuW+oeapn+iDveOCkuaPkOS+m+OBmeOCi+OCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UYXJnZXRQb2ludFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZmFjZVRhcmdldFggPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9mYWNlVGFyZ2V0WSA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VYID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fZmFjZVkgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9mYWNlVlggPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9mYWNlVlkgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9sYXN0VGltZVNlY29uZHMgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmm7TmlrDlh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB1cGRhdGUoZGVsdGFUaW1lU2Vjb25kczogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDjg4fjg6vjgr/mmYLplpPjgpLliqDnrpfjgZnjgotcbiAgICAgICAgICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyArPSBkZWx0YVRpbWVTZWNvbmRzO1xuXG4gICAgICAgICAgICAvLyDpppbjgpLkuK3lpK7jgYvjgonlt6blj7PjgavmjK/jgovjgajjgY3jga7lubPlnYfnmoTjgarpgJ/jgZXjga/jgIDnp5LpgJ/luqbjgILliqDpgJ/jg7vmuJvpgJ/jgpLogIPmha7jgZfjgabjgIHjgZ3jga7vvJLlgI3jgpLmnIDpq5jpgJ/luqbjgajjgZnjgotcbiAgICAgICAgICAgIC8vIOmhlOOBruaMr+OCiuWFt+WQiOOCkuOAgeS4reWkru+8iDAuMO+8ieOBi+OCieOAgeW3puWPs+OBr++8iCstMS4w77yJ44Go44GZ44KLXG4gICAgICAgICAgICBjb25zdCBmYWNlUGFyYW1NYXhWOiBudW1iZXIgPSA0MC4wIC8gMTAuMDsgICAgICAgICAgICAgIC8vIDcuNeenkumWk+OBqzQw5YiG56e75YuVKDUuMy9zYylcbiAgICAgICAgICAgIGNvbnN0IG1heFY6IG51bWJlciA9IGZhY2VQYXJhbU1heFYgKiAxLjAgLyBGcmFtZVJhdGU7ICAgLy8gMWZyYW1l44GC44Gf44KK44Gr5aSJ5YyW44Gn44GN44KL6YCf5bqm44Gu5LiK6ZmQXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuX2xhc3RUaW1lU2Vjb25kcyA9PSAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRpbWVTZWNvbmRzID0gdGhpcy5fdXNlclRpbWVTZWNvbmRzO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lV2VpZ2h0OiBudW1iZXIgPSAodGhpcy5fdXNlclRpbWVTZWNvbmRzIC0gdGhpcy5fbGFzdFRpbWVTZWNvbmRzKSAqIEZyYW1lUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lU2Vjb25kcyA9IHRoaXMuX3VzZXJUaW1lU2Vjb25kcztcblxuICAgICAgICAgICAgLy8g5pyA6auY6YCf5bqm44Gr44Gq44KL44G+44Gn44Gu5pmC6ZaT44KSXG4gICAgICAgICAgICBjb25zdCB0aW1lVG9NYXhTcGVlZDogbnVtYmVyID0gMC4xNTtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lVG9NYXhTcGVlZDogbnVtYmVyID0gdGltZVRvTWF4U3BlZWQgKiBGcmFtZVJhdGU7ICAgICAvLyBzZWMgKiBmcmFtZS9zZWNcbiAgICAgICAgICAgIGNvbnN0IG1heEE6IG51bWJlciA9IGRlbHRhVGltZVdlaWdodCAqIG1heFYgLyBmcmFtZVRvTWF4U3BlZWQ7ICAvLyAxZnJhbWXjgYLjgZ/jgorjga7liqDpgJ/luqZcblxuICAgICAgICAgICAgLy8g55uu5oyH44GZ5ZCR44GN44Gv44CB77yIZHgsIGR577yJ5pa55ZCR44Gu44OZ44Kv44OI44Or44Go44Gq44KLXG4gICAgICAgICAgICBjb25zdCBkeDogbnVtYmVyID0gdGhpcy5fZmFjZVRhcmdldFggLSB0aGlzLl9mYWNlWDtcbiAgICAgICAgICAgIGNvbnN0IGR5OiBudW1iZXIgPSB0aGlzLl9mYWNlVGFyZ2V0WSAtIHRoaXMuX2ZhY2VZO1xuXG4gICAgICAgICAgICBpZihDdWJpc21NYXRoLmFicyhkeCkgPD0gRXBzaWxvbiAmJiBDdWJpc21NYXRoLmFicyhkeSkgPD0gRXBzaWxvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIOWkieWMluOBquOBl1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDpgJ/luqbjga7mnIDlpKfjgojjgorjgoLlpKfjgY3jgYTloLTlkIjjga/jgIHpgJ/luqbjgpLokL3jgajjgZlcbiAgICAgICAgICAgIGNvbnN0IGQ6IG51bWJlciA9IEN1YmlzbU1hdGguc3FydCgoZHggKiBkeCkgKyAoZHkgKiBkeSkpO1xuXG4gICAgICAgICAgICAvLyDpgLLooYzmlrnlkJHjga7mnIDlpKfpgJ/luqbjg5njgq/jg4jjg6tcbiAgICAgICAgICAgIGNvbnN0IHZ4OiBudW1iZXIgPSBtYXhWICogZHggLyBkO1xuICAgICAgICAgICAgY29uc3Qgdnk6IG51bWJlciA9IG1heFYgKiBkeSAvIGQ7XG5cbiAgICAgICAgICAgIC8vIOePvuWcqOOBrumAn+W6puOBi+OCieOAgeaWsOimj+mAn+W6puOBuOOBruWkieWMlu+8iOWKoOmAn+W6pu+8ieOCkuaxguOCgeOCi1xuICAgICAgICAgICAgbGV0IGF4OiBudW1iZXIgPSB2eCAtIHRoaXMuX2ZhY2VWWDtcbiAgICAgICAgICAgIGxldCBheTogbnVtYmVyID0gdnkgLSB0aGlzLl9mYWNlVlk7XG5cbiAgICAgICAgICAgIGNvbnN0IGE6IG51bWJlciA9IEN1YmlzbU1hdGguc3FydCgoYXggKiBheCkgKyAoYXkgKiBheSkpO1xuXG4gICAgICAgICAgICAvLyDliqDpgJ/jga7jgajjgY1cbiAgICAgICAgICAgIGlmKGEgPCAtbWF4QSB8fCBhID4gbWF4QSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBheCAqPSBtYXhBIC8gYTtcbiAgICAgICAgICAgICAgICBheSAqPSBtYXhBIC8gYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5Yqg6YCf5bqm44KS5YWD44Gu6YCf5bqm44Gr6Laz44GX44Gm44CB5paw6YCf5bqm44Go44GZ44KLXG4gICAgICAgICAgICB0aGlzLl9mYWNlVlggKz0gYXg7XG4gICAgICAgICAgICB0aGlzLl9mYWNlVlkgKz0gYXk7XG5cbiAgICAgICAgICAgIC8vIOebrueahOOBruaWueWQkeOBq+i/keOBpeOBhOOBn+OBqOOBjeOAgea7keOCieOBi+OBq+a4m+mAn+OBmeOCi+OBn+OCgeOBruWHpueQhlxuICAgICAgICAgICAgLy8g6Kit5a6a44GV44KM44Gf5Yqg6YCf5bqm44Gn5q2i44G+44KL5LqL44Gu5Ye65p2l44KL6Led6Zui44Go6YCf5bqm44Gu6Zai5L+C44GL44KJXG4gICAgICAgICAgICAvLyDnj77lnKjjgajjgorjgYbjgovmnIDpq5jpgJ/luqbjgpLoqIjnrpfjgZfjgIHjgZ3jgozku6XkuIrjga7mmYLjga/pgJ/luqbjgpLokL3jgajjgZlcbiAgICAgICAgICAgIC8vIOKAu+acrOadpeOAgeS6uumWk+OBr+eti+WKm+OBp+WKm++8iOWKoOmAn+W6pu+8ieOCkuiqv+aVtOOBp+OBjeOCi+OBn+OCgeOAgeOCiOOCiuiHqueUseW6puOBjOmrmOOBhOOBjOOAgeewoeWNmOOBquWHpueQhuOBp+a4iOOBvuOBm+OBpuOBhOOCi1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIOWKoOmAn+W6puOAgemAn+W6puOAgei3nembouOBrumWouS/guW8j+OAglxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgMiAgNiAgICAgICAgICAgMiAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAvLyAgICAgIHNxcnQoYSAgdCAgKyAxNiBhIGggdCAgLSA4IGEgaCkgLSBhIHRcbiAgICAgICAgICAgICAgICAvLyB2ID0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA0IHQgIC0gMlxuICAgICAgICAgICAgICAgIC8vICh0PTEpXG4gICAgICAgICAgICAgICAgLy8gXHTmmYLliLt044Gv44CB44GC44KJ44GL44GY44KB5Yqg6YCf5bqm44CB6YCf5bqm44KSMS82MCjjg5Xjg6zjg7zjg6Djg6zjg7zjg4jjgIHljZjkvY3jgarjgZcp44GnXG4gICAgICAgICAgICAgICAgLy8gXHTogIPjgYjjgabjgYTjgovjga7jgafjgIF077yd77yR44Go44GX44Gm5raI44GX44Gm44KI44GE77yI4oC75pyq5qSc6Ki877yJXG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXhWOiBudW1iZXIgPSAwLjUgKiAoQ3ViaXNtTWF0aC5zcXJ0KChtYXhBICogbWF4QSkgKyAxNi4wICogbWF4QSAqIGQgLSA4LjAgKiBtYXhBICogZCkgLSBtYXhBKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJWOiBudW1iZXIgPSBDdWJpc21NYXRoLnNxcnQoKHRoaXMuX2ZhY2VWWCAqIHRoaXMuX2ZhY2VWWCkgKyAodGhpcy5fZmFjZVZZICogdGhpcy5fZmFjZVZZKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoY3VyViA+IG1heFYpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyDnj77lnKjjga7pgJ/luqYgPiDmnIDpq5jpgJ/luqbjga7jgajjgY3jgIHmnIDpq5jpgJ/luqbjgb7jgafmuJvpgJ9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFjZVZYICo9IG1heFYgLyBjdXJWO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNlVlkgKj0gbWF4ViAvIGN1clY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9mYWNlWCArPSB0aGlzLl9mYWNlVlg7XG4gICAgICAgICAgICB0aGlzLl9mYWNlWSArPSB0aGlzLl9mYWNlVlk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBrumhlOOBruWQkeOBjeOBruWApOOCkuWPluW+l1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu6aGU44Gu5ZCR44GN44Gu5YCk77yILTEuMCB+IDEuMO+8iVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mYWNlWDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu6aGU44Gu5ZCR44GN44Gu5YCk44KS5Y+W5b6XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7poZTjga7lkJHjgY3jga7lgKTvvIgtMS4wIH4gMS4w77yJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0WSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZhY2VZO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmhlOOBruWQkeOBjeOBruebruaomeWApOOCkuioreWumlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBrumhlOOBruWQkeOBjeOBruWApO+8iC0xLjAgfiAxLjDvvIlcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBrumhlOOBruWQkeOBjeOBruWApO+8iC0xLjAgfiAxLjDvvIlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VUYXJnZXRYID0geDtcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VUYXJnZXRZID0geTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJpdmF0ZSBfZmFjZVRhcmdldFg6IG51bWJlcjsgICAgICAgLy8g6aGU44Gu5ZCR44GN44GuWOebruaomeWApO+8iOOBk+OBruWApOOBq+i/keOBpeOBhOOBpuOBhOOBj++8iVxuICAgICAgICBwcml2YXRlIF9mYWNlVGFyZ2V0WTogbnVtYmVyOyAgICAgICAvLyDpoZTjga7lkJHjgY3jga5Z55uu5qiZ5YCk77yI44GT44Gu5YCk44Gr6L+R44Gl44GE44Gm44GE44GP77yJXG4gICAgICAgIHByaXZhdGUgX2ZhY2VYOiBudW1iZXI7ICAgICAgICAgICAgIC8vIOmhlOOBruWQkeOBjVjvvIgtMS4wIH4gMS4w77yJXG4gICAgICAgIHByaXZhdGUgX2ZhY2VZOiBudW1iZXI7ICAgICAgICAgICAgIC8vIOmhlOOBruWQkeOBjVnvvIgtMS4wIH4gMS4w77yJXG4gICAgICAgIHByaXZhdGUgX2ZhY2VWWDogbnVtYmVyOyAgICAgICAgICAgIC8vIOmhlOOBruWQkeOBjeOBruWkieWMlumAn+W6plhcbiAgICAgICAgcHJpdmF0ZSBfZmFjZVZZOiBudW1iZXI7ICAgICAgICAgICAgLy8g6aGU44Gu5ZCR44GN44Gu5aSJ5YyW6YCf5bqmWVxuICAgICAgICBwcml2YXRlIF9sYXN0VGltZVNlY29uZHM6IG51bWJlcjsgICAvLyDmnIDlvozjga7lrp/ooYzmmYLplpNb56eSXVxuICAgICAgICBwcml2YXRlIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjsgICAvLyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxuXG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei1xuICAgICAqIFxuICAgICAqIDLmrKHlhYPjg5njgq/jg4jjg6vlnovjga7mqZ/og73jgpLmj5DkvpvjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtVmVjdG9yMlxuICAgIHsgICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHg/OiBudW1iZXIsIHB1YmxpYyB5PzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnggPSAoeCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyAwLjBcbiAgICAgICAgICAgICAgICA6IHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMueSA9ICh5ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IDAuMFxuICAgICAgICAgICAgICAgIDogeTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruWKoOeul1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5Yqg566X44GZ44KL44OZ44Kv44OI44Or5YCkXG4gICAgICAgICAqIEByZXR1cm4g5Yqg566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFkZCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKyB2ZWN0b3IyLng7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSArIHZlY3RvcjIueTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7muJvnrpdcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOa4m+eul+OBmeOCi+ODmeOCr+ODiOODq+WApFxuICAgICAgICAgKiBAcmV0dXJuIOa4m+eul+e1kOaenCDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdWJzdHJhY3QodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54IC0gdmVjdG9yMi54O1xuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgLSB2ZWN0b3IyLnk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5LmX566XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDkuZfnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseSh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKiB2ZWN0b3IyLng7XG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAqIHZlY3RvcjIueTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpco44K544Kr44Op44O8KVxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHNjYWxhciDkuZfnrpfjgZnjgovjgrnjgqvjg6njg7zlgKRcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5U2NhbGVyKHNjYWxhcjogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumZpOeul1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg6Zmk566X44GZ44KL44OZ44Kv44OI44Or5YCkXG4gICAgICAgICAqIEByZXR1cm4g6Zmk566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZGl2aXNpb24odmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54IC8gdmVjdG9yMi54O1xuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgLyB2ZWN0b3IyLnk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumZpOeulyjjgrnjgqvjg6njg7wpXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOmZpOeul+OBmeOCi+OCueOCq+ODqeODvOWApFxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRpdmlzaW9uQnlTY2FsYXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpdmlzaW9uKG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6ZW344GV44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIOODmeOCr+ODiOODq+OBrumVt+OBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrui3nembouOBruWPluW+l1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGEg54K5XG4gICAgICAgICAqIEByZXR1cm4g44OZ44Kv44OI44Or44Gu6Led6ZuiXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RGlzdGFuY2VXaXRoKGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoKHRoaXMueCAtIGEueCkgKiAodGhpcy54IC0gYS54KSkgKyAoKHRoaXMueSAtIGEueSkgKiAodGhpcy55IC0gYS55KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODieODg+ODiOepjeOBruioiOeul1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGEg5YCkXG4gICAgICAgICAqIEByZXR1cm4g57WQ5p6cXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZG90KGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnggKiBhLngpICsgKHRoaXMueSAqIGEueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5q2j6KaP5YyW44Gu6YGp55SoXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBNYXRoLnBvdygodGhpcy54ICogdGhpcy54KSArICh0aGlzLnkgKiB0aGlzLnkpLCAwLjUpO1xuXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLyBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLyBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog562J44GX44GV44Gu56K66KqN77yI562J44GX44GE44GL77yf77yJXG4gICAgICAgICAqIFxuICAgICAgICAgKiDlgKTjgYznrYnjgZfjgYTjgYvvvJ9cbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSByaHMg56K66KqN44GZ44KL5YCkXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlgKTjga/nrYnjgZfjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlgKTjga/nrYnjgZfjgY/jgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHJoczogQ3ViaXNtVmVjdG9yMik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnggPT0gcmhzLngpICYmICh0aGlzLnkgPT0gcmhzLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOetieOBl+OBleOBrueiuuiqje+8iOetieOBl+OBj+OBquOBhOOBi++8n++8iVxuICAgICAgICAgKiBcbiAgICAgICAgICog5YCk44GM562J44GX44GP44Gq44GE44GL77yfXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YCk44Gv562J44GX44GP44Gq44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOb3RFcXVhbChyaHM6IEN1YmlzbVZlY3RvcjIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAhKHRoaXMuaXNFcXVhbChyaHMpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9