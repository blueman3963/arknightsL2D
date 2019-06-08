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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/id/cubismidmanager.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/id/cubismid.ts":
/*!**********************************!*\
  !*** ./Framework/id/cubismid.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * パラメータ名・パーツ名・Drawable名を保持
     *
     * パラメータ名・パーツ名・Drawable名を保持するクラス。
     */
    var CubismId = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismId(id) {
            if (typeof (id) === 'string') {
                this._id = new csmString(id);
                return;
            }
            this._id = id;
        }
        /**
         * ID名を取得する
         */
        CubismId.prototype.getString = function () {
            return this._id;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isEqual = function (c) {
            if (typeof (c) === 'string') {
                return this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return this._id.isEqual(c._id.s);
            }
            return false;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isNotEqual = function (c) {
            if (typeof (c) == 'string') {
                return !this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return !this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return !this._id.isEqual(c._id.s);
            }
            return false;
        };
        return CubismId;
    }());
    Live2DCubismFramework.CubismId = CubismId;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/id/cubismidmanager.ts":
/*!*****************************************!*\
  !*** ./Framework/id/cubismidmanager.ts ***!
  \*****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismid */ "./Framework/id/cubismid.ts");
/*
* Copyright(c) Live2D Inc. All rights reserved.
*
* Use of this source code is governed by the Live2D Open Software license
* that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
*/


var CubismId = _cubismid__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismId;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * ID名の管理
     *
     * ID名を管理する。
     */
    var CubismIdManager = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismIdManager() {
            this._ids = new csmVector();
        }
        /**
         * デストラクタ相当の処理
         */
        CubismIdManager.prototype.release = function () {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                this._ids.set(i, void 0);
            }
            this._ids = null;
        };
        /**
         * ID名をリストから登録
         *
         * @param ids ID名リスト
         * @param count IDの個数
         */
        CubismIdManager.prototype.registerIds = function (ids) {
            for (var i = 0; i < ids.length; i++) {
                this.registerId(ids[i]);
            }
        };
        /**
         * ID名を登録
         *
         * @param id ID名
         */
        CubismIdManager.prototype.registerId = function (id) {
            var result = null;
            if ('string' == typeof (id)) {
                if ((result = this.findId(id)) != null) {
                    return result;
                }
                result = new CubismId(id);
                this._ids.pushBack(result);
            }
            else {
                return this.registerId(id.s);
            }
            return result;
        };
        /**
         * ID名からIDを取得する
         *
         * @param id ID名
         */
        CubismIdManager.prototype.getId = function (id) {
            return this.registerId(id);
        };
        /**
         * ID名からIDの確認
         *
         * @return true 存在する
         * @return false 存在しない
         */
        CubismIdManager.prototype.isExist = function (id) {
            if ('string' == typeof (id)) {
                return (this.findId(id) != null);
            }
            return this.isExist(id.s);
        };
        /**
         * ID名からIDを検索する。
         *
         * @param id ID名
         * @return 登録されているID。なければNULL。
         */
        CubismIdManager.prototype.findId = function (id) {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                if (this._ids.at(i).getString().isEqual(id)) {
                    return this._ids.at(i);
                }
            }
            return null;
        };
        return CubismIdManager;
    }());
    Live2DCubismFramework.CubismIdManager = CubismIdManager;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmstring.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmstring.ts ***!
  \*************************************/
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
     * 文字列クラス。
     */
    var csmString = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         */
        function csmString(s) {
            this.s = s;
        }
        /**
         * 文字列を後方に追加する
         *
         * @param c 追加する文字列
         * @return 更新された文字列
         */
        csmString.prototype.append = function (c, length) {
            this.s += (length !== undefined)
                ? c.substr(0, length)
                : c;
            return this;
        };
        /**
         * 文字サイズを拡張して文字を埋める
         * @param length    拡張する文字数
         * @param v         埋める文字
         * @return 更新された文字列
         */
        csmString.prototype.expansion = function (length, v) {
            var ret = this;
            for (var i = 0; i < length; i++) {
                ret.append(v);
            }
            return ret;
        };
        /**
         * 文字列の長さをバイト数で取得する
         */
        csmString.prototype.getBytes = function () {
            return encodeURIComponent(this.s).replace(/%../g, "x").length;
        };
        /**
         * 文字列の長さを返す
         */
        csmString.prototype.getLength = function () {
            return this.s.length;
        };
        /**
         * 文字列比較　<
         * @param s 比較する文字列
         * @return true:    比較する文字列より小さい
         * @return false:   比較する文字列より大きい
         */
        csmString.prototype.isLess = function (s) {
            return this.s < s.s;
        };
        /**
         * 文字列比較 >
         * @param s 比較する文字列
         * @return true:    比較する文字列より大きい
         * @return false:   比較する文字列より小さい
         */
        csmString.prototype.isGreat = function (s) {
            return this.s > s.s;
        };
        /**
         * 文字列比較 ==
         * @param s 比較する文字列
         * @return true:    比較する文字列と等しい
         * @return false:   比較する文字列と異なる
         */
        csmString.prototype.isEqual = function (s) {
            return this.s == s;
        };
        /**
         * 文字列が空かどうか
         * @return true: 空の文字列
         * @return false: 値が設定されている
         */
        csmString.prototype.isEmpty = function () {
            return this.s.length == 0;
        };
        return csmString;
    }());
    Live2DCubismFramework.csmString = csmString;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmvector.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmvector.ts ***!
  \*************************************/
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
     * ベクター型（可変配列型）
     */
    var csmVector = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param iniitalCapacity 初期化後のキャパシティ。データサイズは_capacity * sizeof(T)
         * @param zeroClear trueなら初期化時に確保した領域を0で埋める
         */
        function csmVector(initialCapacity) {
            if (initialCapacity === void 0) { initialCapacity = 0; }
            if (initialCapacity < 1) {
                this._ptr = new Array();
                this._capacity = 0;
                this._size = 0;
            }
            else {
                this._ptr = new Array(initialCapacity);
                this._capacity = initialCapacity;
                this._size = 0;
            }
        }
        /**
         * インデックスで指定した要素を返す
         */
        csmVector.prototype.at = function (index) {
            return this._ptr[index];
        };
        /**
         * 要素をセット
         * @param index 要素をセットするインデックス
         * @param value セットする要素
         */
        csmVector.prototype.set = function (index, value) {
            this._ptr[index] = value;
        };
        /**
         * コンテナを取得する
         */
        csmVector.prototype.get = function (offset) {
            if (offset === void 0) { offset = 0; }
            var ret = new Array();
            for (var i = offset; i < this._size; i++) {
                ret.push(this._ptr[i]);
            }
            return ret;
        };
        /**
         * pushBack処理、コンテナに新たな要素を追加する
         * @param value PushBack処理で追加する値
         */
        csmVector.prototype.pushBack = function (value) {
            if (this._size >= this._capacity) {
                this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
            }
            this._ptr[this._size++] = value;
        };
        /**
         * コンテナの全要素を解放する
         */
        csmVector.prototype.clear = function () {
            this._ptr.length = 0;
            this._size = 0;
        };
        /**
         * コンテナの要素数を返す
         * @return コンテナの要素数
         */
        csmVector.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナの全要素に対して代入処理を行う
         * @param newSize 代入処理後のサイズ
         * @param value 要素に代入する値
         */
        csmVector.prototype.assign = function (newSize, value) {
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
            }
            for (var i = 0; i < newSize; i++) {
                this._ptr[i] = value;
            }
            this._size = newSize;
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.resize = function (newSize, value) {
            if (value === void 0) { value = null; }
            this.updateSize(newSize, value, true);
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
            if (value === void 0) { value = null; }
            if (callPlacementNew === void 0) { callPlacementNew = true; }
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
                if (callPlacementNew) {
                    for (var i = this._size; i < newSize; i++) {
                        if (typeof value == 'function') // new
                         {
                            this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                        }
                        else // プリミティブ型なので値渡し
                         {
                            this._ptr[i] = value;
                        }
                    }
                }
                else {
                    for (var i = this._size; i < newSize; i++) {
                        this._ptr[i] = value;
                    }
                }
            }
            else {
                // newSize <= this._size
                //---
                var sub = this._size - newSize;
                this._ptr.splice(this._size - sub, sub); // 不要なので破棄する
            }
            this._size = newSize;
        };
        /**
         * コンテナにコンテナ要素を挿入する
         * @param position 挿入する位置
         * @param begin　挿入するコンテナの開始位置
         * @param end 挿入するコンテナの終端位置
         */
        csmVector.prototype.insert = function (position, begin, end) {
            var dstSi = position._index;
            var srcSi = begin._index;
            var srcEi = end._index;
            var addCount = srcEi - srcSi;
            this.prepareCapacity(this._size + addCount);
            // 挿入用の既存データをシフトして隙間を作る
            var addSize = this._size - dstSi;
            if (addSize > 0) {
                for (var i = 0; i < addSize; i++) {
                    this._ptr.splice(dstSi + i, 0, null);
                }
            }
            for (var i = srcSi; i < srcEi; i++, dstSi++) {
                this._ptr[dstSi] = begin._vector._ptr[i];
            }
            this._size = this._size + addCount;
        };
        /**
         * コンテナからインデックスで指定した要素を削除する
         * @param index インデックス値
         * @return true 削除実行
         * @return false 削除範囲外
         */
        csmVector.prototype.remove = function (index) {
            if (index < 0 || this._size <= index) {
                return false; // 削除範囲外
            }
            this._ptr.splice(index, 1);
            --this._size;
            return true;
        };
        /**
         * コンテナから要素を削除して他の要素をシフトする
         * @param ite 削除する要素
         */
        csmVector.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._ptr.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない.
         */
        csmVector.prototype.prepareCapacity = function (newSize) {
            if (newSize > this._capacity) {
                if (this._capacity == 0) {
                    this._ptr = new Array(newSize);
                    this._capacity = newSize;
                }
                else {
                    this._ptr.length = newSize;
                    this._capacity = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmVector.prototype.begin = function () {
            var ite = (this._size == 0)
                ? this.end()
                : new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmVector.prototype.end = function () {
            var ite = new iterator(this, this._size);
            return ite;
        };
        csmVector.prototype.getOffset = function (offset) {
            var newVector = new csmVector();
            newVector._ptr = this.get(offset);
            newVector._size = this.get(offset).length;
            newVector._capacity = this.get(offset).length;
            return newVector;
        };
        csmVector.s_defaultSize = 10; // コンテナ初期化のデフォルトサイズ
        return csmVector;
    }());
    Live2DCubismFramework.csmVector = csmVector;
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, index) {
            this._vector = (v != undefined) ? v : null;
            this._index = (index != undefined) ? index : 0;
        }
        /**
         * 代入
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * 前置き++演算
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._vector, this._index++);
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._vector, this._index--); // 古い値を保存
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * ptr
         */
        iterator.prototype.ptr = function () {
            return this._vector._ptr[this._index];
        };
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.substitution = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * !=演算子のオーバーロード
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._vector != ite._vector);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9pZC9jdWJpc21pZG1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXZlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRWtFO0FBQ3JFLElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBRWhDLElBQVUscUJBQXFCLENBK0VyQztBQS9FRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBVUk7O1dBRUc7UUFDSCxr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Q0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFZLEdBQW5CLFVBQW9CLEdBQWdCO1lBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQVEsR0FBZixVQUFnQixHQUFnQjtZQUU1QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBSUwsZUFBQztJQUFELENBQUM7SUF6RlksOEJBQVEsV0F5RnBCO0FBQ0wsQ0FBQyxFQWpZZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWlZckMiLCJmaWxlIjoiL2lkL2N1YmlzbWlkbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50c1wiKTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgVxuICAgICAqIFxuICAgICAqIOODkeODqeODoeODvOOCv+WQjeODu+ODkeODvOODhOWQjeODu0RyYXdhYmxl5ZCN44KS5L+d5oyB44GZ44KL44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihpZCkgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbmV3IGNzbVN0cmluZyhpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlk44KS5q+U6LyDXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlk44KS5q+U6LyDXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9pZDogY3NtU3RyaW5nOyAvLyBJROWQjVxuICAgIH1cblxuICAgIGV4cG9ydCBkZWNsYXJlIHR5cGUgQ3ViaXNtSWRIYW5kbGUgPSBDdWJpc21JZDtcbn0iLCIvKlxuKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tIFwiLi9jdWJpc21pZFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuaW1wb3J0IEN1YmlzbUlkID0gY3ViaXNtaWQuQ3ViaXNtSWQ7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiBJROWQjeOBrueuoeeQhlxuICAgICAqIFxuICAgICAqIElE5ZCN44KS566h55CG44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkTWFuYWdlclxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZD4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5zZXQoaSwgdm9pZCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkcyA9ICBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLjg6rjgrnjg4jjgYvjgonnmbvpjLJcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBpZHMgSUTlkI3jg6rjgrnjg4hcbiAgICAgICAgICogQHBhcmFtIGNvdW50IElE44Gu5YCL5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZHMoaWRzOiBzdHJpbmdbXSB8IGNzbVN0cmluZ1tdKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcklkKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgpLnmbvpjLJcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWQoaWQ6IHN0cmluZyB8IGNzbVN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IEN1YmlzbUlkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLmZpbmRJZChpZCkpICE9IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDdWJpc21JZChpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faWRzLnB1c2hCYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZC5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRJZChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOBrueiuuiqjVxuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXhpc3QoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5maW5kSWQoaWQpICE9IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFeGlzdChpZC5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44KS5qSc57Si44GZ44KL44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICogQHJldHVybiDnmbvpjLLjgZXjgozjgabjgYTjgotJROOAguOBquOBkeOCjOOBsE5VTEzjgIJcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgZmluZElkKGlkOiBzdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5faWRzLmF0KGkpLmdldFN0cmluZygpLmlzRXF1YWwoaWQpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkcy5hdChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaWRzOiBjc21WZWN0b3I8Q3ViaXNtSWQ+OyAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi0lE44Gu44Oq44K544OIXG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog5paH5a2X5YiX44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVN0cmluZ1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OCkuW+jOaWueOBq+i/veWKoOOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGMg6L+95Yqg44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXBwZW5kKGM6IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyArPSAobGVuZ3RoICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBjLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgOiBjO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfjgrXjgqTjgrrjgpLmi6HlvLXjgZfjgabmloflrZfjgpLln4vjgoHjgotcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDmi6HlvLXjgZnjgovmloflrZfmlbBcbiAgICAgICAgICogQHBhcmFtIHYgICAgICAgICDln4vjgoHjgovmloflrZdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBleHBhbnNpb24obGVuZ3RoOiBudW1iZXIsIHY6IHN0cmluZyk6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0LmFwcGVuZCh2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLjg5DjgqTjg4jmlbDjgaflj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRCeXRlcygpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnMpIC5yZXBsYWNlKC8lLi4vZywgXCJ4XCIpLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8g+OAgDxcbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNMZXNzKHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA8IHMucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPlxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0dyZWF0KHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA+IHMucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPT1cbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go562J44GX44GEXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go55Ww44Gq44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcXVhbChzOiBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPT0gcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmloflrZfliJfjgYznqbrjgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiB0cnVlOiDnqbrjga7mloflrZfliJdcbiAgICAgICAgICogQHJldHVybiBmYWxzZTog5YCk44GM6Kit5a6a44GV44KM44Gm44GE44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoID09IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnMgPSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgczogc3RyaW5nO1xuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODmeOCr+OCv+ODvOWei++8iOWPr+WkiemFjeWIl+Wei++8iVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21WZWN0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICogQHBhcmFtIGluaWl0YWxDYXBhY2l0eSDliJ3mnJ/ljJblvozjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgILjg4fjg7zjgr/jgrXjgqTjgrrjga9fY2FwYWNpdHkgKiBzaXplb2YoVClcbiAgICAgICAgICogQHBhcmFtIHplcm9DbGVhciB0cnVl44Gq44KJ5Yid5pyf5YyW5pmC44Gr56K65L+d44GX44Gf6aCY5Z+f44KSMOOBp+Wfi+OCgeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbENhcGFjaXR5OiBudW1iZXIgPSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbml0aWFsQ2FwYWNpdHkgPCAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGluaXRpYWxDYXBhY2l0eTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjg4fjg4Pjgq/jgrnjgafmjIflrprjgZfjgZ/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHRyW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrvjg4Pjg4hcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOimgee0oOOCkuOCu+ODg+ODiOOBmeOCi+OCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44K744OD44OI44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHJbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0KG9mZnNldDogbnVtYmVyID0gMCk6IFRbXVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmV0OiBUW10gPSBuZXcgQXJyYXk8VD4oKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0aGlzLl9wdHJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwdXNoQmFja+WHpueQhuOAgeOCs+ODs+ODhuODiuOBq+aWsOOBn+OBquimgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgUHVzaEJhY2vlh6bnkIbjgafov73liqDjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXNoQmFjayh2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fc2l6ZSA+PSB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9jYXBhY2l0eSA9PSAwID8gY3NtVmVjdG9yLnNfZGVmYXVsdFNpemUgOiB0aGlzLl9jYXBhY2l0eSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9wdHJbdGhpcy5fc2l6ZSsrXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOCkuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbDjgpLov5TjgZlcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhajopoHntKDjgavlr77jgZfjgabku6PlhaXlh6bnkIbjgpLooYzjgYZcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5Luj5YWl5Yem55CG5b6M44Gu44K144Kk44K6XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDopoHntKDjgavku6PlhaXjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhc3NpZ24obmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemUgPSB0aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5ld1NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVzaXplKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQgPSBudWxsKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUobmV3U2l6ZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHVwZGF0ZVNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogYW55ID0gbnVsbCwgY2FsbFBsYWNlbWVudE5ldzogYm9vbGVhbiA9IHRydWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjdXJTaXplOiBudW1iZXIgPSB0aGlzLl9zaXplO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXG5cbiAgICAgICAgICAgICAgICBpZihjYWxsUGxhY2VtZW50TmV3KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgIC8vIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3IHZhbHVlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgLy8g44OX44Oq44Of44OG44Kj44OW5Z6L44Gq44Gu44Gn5YCk5rih44GXXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBuZXdTaXplIDw9IHRoaXMuX3NpemVcbiAgICAgICAgICAgICAgICAvLy0tLVxuICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0aGlzLl9zaXplIC0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKHRoaXMuX3NpemUgLSBzdWIsIHN1Yik7ICAgIC8vIOS4jeimgeOBquOBruOBp+egtOajhOOBmeOCi1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gr44Kz44Oz44OG44OK6KaB57Sg44KS5oy/5YWl44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBwb3NpdGlvbiDmjL/lhaXjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGJlZ2lu44CA5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu6ZaL5aeL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSBlbmQg5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu57WC56uv5L2N572uXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5zZXJ0KHBvc2l0aW9uOiBpdGVyYXRvcjxUPiwgYmVnaW46IGl0ZXJhdG9yPFQ+LCBlbmQ6IGl0ZXJhdG9yPFQ+KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZHN0U2k6IG51bWJlciA9IHBvc2l0aW9uLl9pbmRleDtcbiAgICAgICAgICAgIGxldCBzcmNTaTogbnVtYmVyID0gYmVnaW4uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY0VpOiBudW1iZXIgPSBlbmQuX2luZGV4O1xuXG4gICAgICAgICAgICBsZXQgYWRkQ291bnQ6IG51bWJlciA9IHNyY0VpIC0gc3JjU2k7XG5cbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyBhZGRDb3VudCk7XG5cbiAgICAgICAgICAgIC8vIOaMv+WFpeeUqOOBruaXouWtmOODh+ODvOOCv+OCkuOCt+ODleODiOOBl+OBpumamemWk+OCkuS9nOOCi1xuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSB0aGlzLl9zaXplIC0gZHN0U2k7XG4gICAgICAgICAgICBpZihhZGRTaXplID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhZGRTaXplOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGRzdFNpICsgaSwgMCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHNyY1NpOyBpIDwgc3JjRWk7IGkrKywgZHN0U2krKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbZHN0U2ldID0gYmVnaW4uX3ZlY3Rvci5fcHRyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fc2l6ZSArIGFkZENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkuWJiumZpOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDliYrpmaTlrp/ooYxcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GX44Gm5LuW44Gu6KaB57Sg44KS44K344OV44OI44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgaW5kZXgpOyAgIC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhC5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fY2FwYWNpdHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY2FwYWNpdHkgPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBiZWdpbigpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9ICh0aGlzLl9zaXplID09IDApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgaXRlcmF0b3I8VD4odGhpcywgMCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCB0aGlzLl9zaXplKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0T2Zmc2V0KG9mZnNldDogbnVtYmVyKTogY3NtVmVjdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuZXdWZWN0b3IgPSBuZXcgY3NtVmVjdG9yPFQ+KCk7XG4gICAgICAgICAgICBuZXdWZWN0b3IuX3B0ciA9IHRoaXMuZ2V0KG9mZnNldCk7XG4gICAgICAgICAgICBuZXdWZWN0b3IuX3NpemUgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fY2FwYWNpdHkgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wdHI6IFRbXTsgICAgLy8g44Kz44Oz44OG44OK44Gu5YWI6aCt44Ki44OJ44Os44K5XG4gICAgICAgIF9zaXplOiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICBfY2FwYWNpdHk6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44KjXG5cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IHNfZGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Iodj86IGNzbVZlY3RvcjxUPiwgaW5kZXg/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9ICh2ICE9IHVuZGVmaW5lZCkgPyB2IDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGluZGV4ICE9IHVuZGVmaW5lZCkgPyBpbmRleCA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Luj5YWlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0KGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGUuX3ZlY3RvcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjSsr5ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgICsrdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIC0tdGhpcy5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMuX3ZlY3RvciwgdGhpcy5faW5kZXgrKyk7XG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleC0tKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlb2xkLl92ZWN0b3I7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwdHJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogVFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yLl9wdHJbdGhpcy5faW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdWJzdGl0dXRpb24oaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPFQ+KTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl92ZWN0b3IgIT0gaXRlLl92ZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2luZGV4OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICBfdmVjdG9yOiBjc21WZWN0b3I8VD47ICAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==