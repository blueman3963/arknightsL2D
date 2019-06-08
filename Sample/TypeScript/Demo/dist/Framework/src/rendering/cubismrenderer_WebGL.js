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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/rendering/cubismrenderer_WebGL.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/cubismframeworkconfig.ts":
/*!********************************************!*\
  !*** ./Framework/cubismframeworkconfig.ts ***!
  \********************************************/
/*! exports provided: CSM_LOG_LEVEL_VERBOSE, CSM_LOG_LEVEL_DEBUG, CSM_LOG_LEVEL_INFO, CSM_LOG_LEVEL_WARNING, CSM_LOG_LEVEL_ERROR, CSM_LOG_LEVEL_OFF, CSM_LOG_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_VERBOSE", function() { return CSM_LOG_LEVEL_VERBOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_DEBUG", function() { return CSM_LOG_LEVEL_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_INFO", function() { return CSM_LOG_LEVEL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_WARNING", function() { return CSM_LOG_LEVEL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_ERROR", function() { return CSM_LOG_LEVEL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_OFF", function() { return CSM_LOG_LEVEL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL", function() { return CSM_LOG_LEVEL; });
/*
* Copyright(c) Live2D Inc. All rights reserved.
*
* Use of this source code is governed by the Live2D Open Software license
* that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
*/
//========================================================
//  ログ出力関数の設定
//========================================================
//---------- ログ出力レベル 選択項目 定義 ----------
/// 詳細ログ出力設定
var CSM_LOG_LEVEL_VERBOSE = 0;
/// デバッグログ出力設定
var CSM_LOG_LEVEL_DEBUG = 1;
/// Infoログ出力設定
var CSM_LOG_LEVEL_INFO = 2;
/// 警告ログ出力設定
var CSM_LOG_LEVEL_WARNING = 3;
/// エラーログ出力設定
var CSM_LOG_LEVEL_ERROR = 4;
/// ログ出力オフ設定
var CSM_LOG_LEVEL_OFF = 5;
/**
* ログ出力レベル設定。
*
* 強制的にログ出力レベルを変える時に定義を有効にする。
* CSM_LOG_LEVEL_VERBOSE ～ CSM_LOG_LEVEL_OFF を選択する。
*/
var CSM_LOG_LEVEL = CSM_LOG_LEVEL_VERBOSE;


/***/ }),

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

/***/ "./Framework/live2dcubismframework.ts":
/*!********************************************!*\
  !*** ./Framework/live2dcubismframework.ts ***!
  \********************************************/
/*! exports provided: strtod, Live2DCubismFramework, Option, LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strtod", function() { return strtod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id/cubismidmanager */ "./Framework/id/cubismidmanager.ts");
/* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference path="../Core/live2dcubismcore.d.ts" />




var Value = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Value;
var CubismIdManager = _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismIdManager;
var CubismRenderer = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismRenderer;
function strtod(s, endPtr) {
    var index = 0;
    for (var i = 1;; i++) {
        var testC = s.slice(i - 1, i);
        // 指数・マイナスの可能性があるのでスキップする
        if (testC == 'e' || testC == '-' || testC == 'E') {
            continue;
        }
        // 文字列の範囲を広げていく
        var test = s.substring(0, i);
        var number = Number(test);
        if (isNaN(number)) {
            // 数値として認識できなくなったので終了
            break;
        }
        // 最後に数値としてできたindexを格納しておく
        index = i;
    }
    var d = parseFloat(s); // パースした数値
    if (isNaN(d)) {
        // 数値として認識できなくなったので終了
        d = NaN;
    }
    endPtr[0] = s.slice(index); // 後続の文字列
    return d;
}
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // ファイルスコープの変数を初期化
    var s_isStarted = false;
    var s_isInitialized = false;
    var s_option = null;
    var s_cubismIdManager = null;
    /**
     * Framework内で使う定数の宣言
     */
    var Constant;
    (function (Constant) {
        Constant.vertexOffset = 0; // メッシュ頂点のオフセット値
        Constant.vertexStep = 2; // メッシュ頂点のステップ値
    })(Constant = Live2DCubismFramework.Constant || (Live2DCubismFramework.Constant = {}));
    function csmDelete(address) {
        if (!address) {
            return;
        }
        address = void 0;
    }
    Live2DCubismFramework.csmDelete = csmDelete;
    /**
     * Live2D Cubism3 Original Workflow SDKのエントリポイント
     * 利用開始時はCubismFramework.initialize()を呼び、CubismFramework.dispose()で終了する。
     */
    var CubismFramework = /** @class */ (function () {
        /**
         * 静的クラスとして使用する
         * インスタンス化させない
         */
        function CubismFramework() {
        }
        /**
         * Cubism FrameworkのAPIを使用可能にする。
         *  APIを実行する前に必ずこの関数を実行すること。
         *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
         *
         * @param    option      Optionクラスのインスタンス
         *
         * @return   準備処理が完了したらtrueが返ります。
         */
        CubismFramework.startUp = function (option) {
            if (option === void 0) { option = null; }
            if (s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is already done.");
                return s_isStarted;
            }
            s_option = option;
            if (s_option != null) {
                Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
            }
            s_isStarted = true;
            // Live2D Cubism Coreバージョン情報を表示
            if (s_isStarted) {
                var version = Live2DCubismCore.Version.csmGetVersion();
                var major = ((version & 0xFF000000) >> 24);
                var minor = ((version & 0x00FF0000) >> 16);
                var patch = ((version & 0x0000FFFF));
                var versionNumber = version;
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
            }
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is complete.");
            return s_isStarted;
        };
        /**
         * StartUp()で初期化したCubismFrameworkの各パラメータをクリアします。
         * Dispose()したCubismFrameworkを再利用する際に利用してください。
         */
        CubismFramework.cleanUp = function () {
            s_isStarted = false;
            s_isInitialized = false;
            s_option = null;
            s_cubismIdManager = null;
        };
        /**
         * Cubism Framework内のリソースを初期化してモデルを表示可能な状態にします。<br>
         *     再度Initialize()するには先にDispose()を実行する必要があります。
         */
        CubismFramework.initialize = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる連続初期化ガード ---
            // 連続してリソース確保が行われないようにする。
            // 再度Initialize()するには先にDispose()を実行する必要がある。
            if (s_isInitialized) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.initialize() skipped, already initialized.");
                return;
            }
            //---- static 初期化 ----
            Value.staticInitializeNotForClientCall();
            s_cubismIdManager = new CubismIdManager();
            s_isInitialized = true;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.initialize() is complete.");
        };
        /**
         * Cubism Framework内の全てのリソースを解放します。
         *      ただし、外部で確保されたリソースについては解放しません。
         *      外部で適切に破棄する必要があります。
         */
        CubismFramework.dispose = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる未初期化解放ガード ---
            // dispose()するには先にinitialize()を実行する必要がある。
            if (!s_isInitialized) // false...リソース未確保の場合
             {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.dispose() skipped, not initialized.");
                return;
            }
            Value.staticReleaseNotForClientCall();
            s_cubismIdManager.release();
            s_cubismIdManager = null;
            // レンダラの静的リソース（シェーダプログラム他）を解放する
            CubismRenderer.staticRelease();
            s_isInitialized = false;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.dispose() is complete.");
        };
        /**
         * Cubism FrameworkのAPIを使用する準備が完了したかどうか
         * @return APIを使用する準備が完了していればtrueが返ります。
         */
        CubismFramework.isStarted = function () {
            return s_isStarted;
        };
        /**
         * Cubism Frameworkのリソース初期化がすでに行われているかどうか
         * @return リソース確保が完了していればtrueが返ります
         */
        CubismFramework.isInitialized = function () {
            return s_isInitialized;
        };
        /**
         * Core APIにバインドしたログ関数を実行する
         *
         * @praram message ログメッセージ
         */
        CubismFramework.coreLogFunction = function (message) {
            // Return if logging not possible.
            if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
                return;
            }
            Live2DCubismCore.Logging.csmGetLogFunction()(message);
        };
        /**
         * 現在のログ出力レベル設定の値を返す。
         *
         * @return  現在のログ出力レベル設定の値
         */
        CubismFramework.getLoggingLevel = function () {
            if (s_option != null) {
                return s_option.loggingLevel;
            }
            return LogLevel.LogLevel_Off;
        };
        /**
         * IDマネージャのインスタンスを取得する
         * @return CubismManagerクラスのインスタンス
         */
        CubismFramework.getIdManager = function () {
            return s_cubismIdManager;
        };
        return CubismFramework;
    }());
    Live2DCubismFramework.CubismFramework = CubismFramework;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());

/**
 * ログ出力のレベル
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off"; // ログ出力無効
})(LogLevel || (LogLevel = {}));


/***/ }),

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

/***/ "./Framework/rendering/cubismrenderer.ts":
/*!***********************************************!*\
  !*** ./Framework/rendering/cubismrenderer.ts ***!
  \***********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismMatrix44 = _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル描画を処理するレンダラ
     *
     * サブクラスに環境依存の描画命令を記述する。
     */
    var CubismRenderer = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismRenderer() {
            this._isCulling = false;
            this._isPremultipliedAlpha = false;
            this._anisortopy = 0.0;
            this._model = null;
            this._modelColor = new CubismTextureColor();
            // 単位行列に初期化
            this._mvpMatrix4x4 = new CubismMatrix44();
            this._mvpMatrix4x4.loadIdentity();
        }
        /**
         * レンダラのインスタンスを生成して取得する
         *
         * @return レンダラのインスタンス
         */
        CubismRenderer.create = function () {
            return null;
        };
        /**
         * レンダラのインスタンスを解放する
         */
        CubismRenderer.delete = function (renderer) {
            renderer = null;
        };
        /**
         * レンダラの初期化処理を実行する
         * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
         * @param model モデルのインスタンス
         */
        CubismRenderer.prototype.initialize = function (model) {
            this._model = model;
        };
        /**
         * モデルを描画する
         */
        CubismRenderer.prototype.drawModel = function () {
            if (this.getModel() == null)
                return;
            this.doDrawModel();
        };
        /**
         * Model-View-Projection 行列をセットする
         * 配列は複製されるので、元の配列は外で破棄して良い
         * @param matrix44 Model-View-Projection 行列
         */
        CubismRenderer.prototype.setMvpMatrix = function (matrix44) {
            this._mvpMatrix4x4.setMatrix(matrix44.getArray());
        };
        /**
         * Model-View-Projection 行列を取得する
         * @return Model-View-Projection 行列
         */
        CubismRenderer.prototype.getMvpMatrix = function () {
            return this._mvpMatrix4x4;
        };
        /**
         * モデルの色をセットする
         * 各色0.0~1.0の間で指定する（1.0が標準の状態）
         * @param red 赤チャンネルの値
         * @param green 緑チャンネルの値
         * @param blue 青チャンネルの値
         * @param alpha αチャンネルの値
         */
        CubismRenderer.prototype.setModelColor = function (red, green, blue, alpha) {
            if (red < 0.0) {
                red = 0.0;
            }
            else if (red > 1.0) {
                red = 1.0;
            }
            if (green < 0.0) {
                green = 0.0;
            }
            else if (green > 1.0) {
                green = 1.0;
            }
            if (blue < 0.0) {
                blue = 0.0;
            }
            else if (blue > 1.0) {
                blue = 1.0;
            }
            if (alpha < 0.0) {
                alpha = 0.0;
            }
            else if (alpha > 1.0) {
                alpha = 1.0;
            }
            this._modelColor.R = red;
            this._modelColor.G = green;
            this._modelColor.B = blue;
            this._modelColor.A = alpha;
        };
        /**
         * モデルの色を取得する
         * 各色0.0~1.0の間で指定する(1.0が標準の状態)
         *
         * @return RGBAのカラー情報
         */
        CubismRenderer.prototype.getModelColor = function () {
            return JSON.parse(JSON.stringify(this._modelColor));
        };
        /**
         * 乗算済みαの有効・無効をセットする
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsPremultipliedAlpha = function (enable) {
            this._isPremultipliedAlpha = enable;
        };
        /**
         * 乗算済みαの有効・無効を取得する
         * @return true 乗算済みのα有効
         * @return false 乗算済みのα無効
         */
        CubismRenderer.prototype.isPremultipliedAlpha = function () {
            return this._isPremultipliedAlpha;
        };
        /**
         * カリング（片面描画）の有効・無効をセットする。
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsCulling = function (culling) {
            this._isCulling = culling;
        };
        /**
         * カリング（片面描画）の有効・無効を取得する。
         * @return true カリング有効
         * @return false カリング無効
         */
        CubismRenderer.prototype.isCulling = function () {
            return this._isCulling;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * パラメータ値の影響度はレンダラの実装に依存する
         * @param n パラメータの値
         */
        CubismRenderer.prototype.setAnisotropy = function (n) {
            this._anisortopy = n;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * @return 異方性フィルタリングのパラメータ
         */
        CubismRenderer.prototype.getAnisotropy = function () {
            return this._anisortopy;
        };
        /**
         * レンダリングするモデルを取得する
         * @return レンダリングするモデル
         */
        CubismRenderer.prototype.getModel = function () {
            return this._model;
        };
        return CubismRenderer;
    }());
    Live2DCubismFramework.CubismRenderer = CubismRenderer;
    var CubismBlendMode;
    (function (CubismBlendMode) {
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
    })(CubismBlendMode = Live2DCubismFramework.CubismBlendMode || (Live2DCubismFramework.CubismBlendMode = {}));
    ;
    /**
     * テクスチャの色をRGBAで扱うためのクラス
     */
    var CubismTextureColor = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismTextureColor() {
            this.R = 1.0;
            this.G = 1.0;
            this.B = 1.0;
            this.A = 1.0;
        }
        return CubismTextureColor;
    }());
    Live2DCubismFramework.CubismTextureColor = CubismTextureColor;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/rendering/cubismrenderer_WebGL.ts":
/*!*****************************************************!*\
  !*** ./Framework/rendering/cubismrenderer_WebGL.ts ***!
  \*****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _type_csmrectf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmrectf */ "./Framework/type/csmrectf.ts");
/* harmony import */ var _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
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







var Constant = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Constant;
var CubismMatrix44 = _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismMatrix44;
var csmRect = _type_csmrectf__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmRect;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_4__["Live2DCubismFramework"].csmMap;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_5__["Live2DCubismFramework"].csmVector;
var CubismRenderer = _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismRenderer;
var CubismBlendMode = _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismBlendMode;
var CubismTextureColor = _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismTextureColor;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var ColorChannelCount = 4; // 実験時に1チャンネルの場合は1、RGBだけの場合は3、アルファも含める場合は4
    var shaderCount = 7; // シェーダーの数 = マスク生成用 + (通常用 + 加算 + 乗算) * (マスク無の乗算済アルファ対応版 + マスク有の乗算済アルファ対応版)
    var s_instance;
    var s_viewport;
    var s_fbo;
    /**
     * クリッピングマスクの処理を実行するクラス
     */
    var CubismClippingManager_WebGL = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismClippingManager_WebGL() {
            this._maskRenderTexture = null;
            this._colorBuffer = null;
            this._currentFrameNo = 0;
            this._clippingMaskBufferSize = 256;
            this._clippingContextListForMask = new csmVector();
            this._clippingContextListForDraw = new csmVector();
            this._channelColors = new csmVector();
            this._tmpBoundsOnModel = new csmRect();
            this._tmpMatrix = new CubismMatrix44();
            this._tmpMatrixForMask = new CubismMatrix44();
            this._tmpMatrixForDraw = new CubismMatrix44();
            this._maskTexture = null;
            var tmp = new CubismTextureColor();
            tmp.R = 1.0;
            tmp.G = 0.0;
            tmp.B = 0.0;
            tmp.A = 0.0;
            this._channelColors.pushBack(tmp);
            tmp = new CubismTextureColor();
            tmp.R = 0.0;
            tmp.G = 1.0;
            tmp.B = 0.0;
            tmp.A = 0.0;
            this._channelColors.pushBack(tmp);
            tmp = new CubismTextureColor();
            tmp.R = 0.0;
            tmp.G = 0.0;
            tmp.B = 1.0;
            tmp.A = 0.0;
            this._channelColors.pushBack(tmp);
            tmp = new CubismTextureColor();
            tmp.R = 0.0;
            tmp.G = 0.0;
            tmp.B = 0.0;
            tmp.A = 1.0;
            this._channelColors.pushBack(tmp);
        }
        /**
         * カラーチャンネル（RGBA）のフラグを取得する
         * @param channelNo カラーチャンネル（RGBA）の番号（0:R, 1:G, 2:B, 3:A）
         */
        CubismClippingManager_WebGL.prototype.getChannelFlagAsColor = function (channelNo) {
            return this._channelColors.at(channelNo);
        };
        /**
         * テンポラリのレンダーテクスチャのアドレスを取得する
         * FrameBufferObjectが存在しない場合、新しく生成する
         *
         * @return レンダーテクスチャのアドレス
         */
        CubismClippingManager_WebGL.prototype.getMaskRenderTexture = function () {
            var ret = 0;
            // テンポラリのRenderTextureを取得する
            if (this._maskTexture && this._maskTexture.texture != 0) // 前回使ったものを返す
             {
                this._maskTexture.frameNo = this._currentFrameNo;
                ret = this._maskTexture.texture;
            }
            if (ret == 0) {
                // FrameBufferObjectが存在しない場合、新しく生成する
                // クリッピングバッファサイズを取得
                var size = this._clippingMaskBufferSize;
                this._colorBuffer = this.gl.createTexture();
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
                this.gl.bindTexture(this.gl.TEXTURE_2D, null);
                ret = this.gl.createFramebuffer();
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ret);
                this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0);
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
                this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, ret);
            }
            return ret;
        };
        /**
         * WebGLレンダリングコンテキストを設定する
         * @param gl WebGLレンダリングコンテキスト
         */
        CubismClippingManager_WebGL.prototype.setGL = function (gl) {
            this.gl = gl;
        };
        /**
         * マスクされる描画オブジェクト群全体を囲む矩形（モデル座標系）を計算する
         * @param model モデルのインスタンス
         * @param clippingContext クリッピングマスクのコンテキスト
         */
        CubismClippingManager_WebGL.prototype.calcClippedDrawTotalBounds = function (model, clippingContext) {
            // 被クリッピングマスク（マスクされる描画オブジェクト）の全体の矩形
            var clippedDrawTotalMinX = Number.MAX_VALUE;
            var clippedDrawTotalMinY = Number.MAX_VALUE;
            var clippedDrawTotalMaxX = Number.MIN_VALUE;
            var clippedDrawTotalMaxY = Number.MIN_VALUE;
            // このマスクが実際に必要か判定する
            // このクリッピングを利用する「描画オブジェクト」がひとつでも使用可能であればマスクを生成する必要がある
            var clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
            for (var clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++) {
                // マスクを使用する描画オブジェクトの描画される矩形を求める
                var drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
                var drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
                var drawableVertexes = model.getDrawableVertices(drawableIndex);
                var minX = Number.MAX_VALUE;
                var minY = Number.MAX_VALUE;
                var maxX = Number.MIN_VALUE;
                var maxY = Number.MIN_VALUE;
                var loop = drawableVertexCount * Constant.vertexStep;
                for (var pi = Constant.vertexOffset; pi < loop; pi += Constant.vertexStep) {
                    var x = drawableVertexes[pi];
                    var y = drawableVertexes[pi + 1];
                    if (x < minX) {
                        minX = x;
                    }
                    if (x > maxX) {
                        maxX = x;
                    }
                    if (y < minY) {
                        minY = y;
                    }
                    if (y > maxY) {
                        maxY = y;
                    }
                }
                // 有効な点が一つも取れなかったのでスキップ
                if (minX == Number.MAX_VALUE) {
                    continue;
                }
                //　全体の矩形に反映
                if (minX < clippedDrawTotalMinX) {
                    clippedDrawTotalMinX = minX;
                }
                if (minY < clippedDrawTotalMinY) {
                    clippedDrawTotalMinY = minY;
                }
                if (maxX > clippedDrawTotalMaxX) {
                    clippedDrawTotalMaxX = maxX;
                }
                if (maxY > clippedDrawTotalMaxY) {
                    clippedDrawTotalMaxY = maxY;
                }
                if (clippedDrawTotalMinX == Number.MAX_VALUE) {
                    clippingContext._allClippedDrawRect.x = 0.0;
                    clippingContext._allClippedDrawRect.y = 0.0;
                    clippingContext._allClippedDrawRect.width = 0.0;
                    clippingContext._allClippedDrawRect.height = 0.0;
                    clippingContext._isUsing = false;
                }
                else {
                    clippingContext._isUsing = true;
                    var w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
                    var h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
                    clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
                    clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
                    clippingContext._allClippedDrawRect.width = w;
                    clippingContext._allClippedDrawRect.height = h;
                }
            }
        };
        /**
         * デストラクタ相当の処理
         */
        CubismClippingManager_WebGL.prototype.release = function () {
            for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                if (this._clippingContextListForMask.at(i)) {
                    this._clippingContextListForMask.at(i).release();
                    this._clippingContextListForMask.set(i, void 0);
                }
                this._clippingContextListForMask.set(i, null);
            }
            this._clippingContextListForMask = null;
            // _clippingContextListForDrawは_clippingContextListForMaskにあるインスタンスを指している。上記の処理により要素ごとのDELETEは不要。
            for (var i = 0; i < this._clippingContextListForDraw.getSize(); i++) {
                this._clippingContextListForDraw.set(i, null);
            }
            this._clippingContextListForDraw = null;
            if (this._maskTexture) {
                this.gl.deleteFramebuffer(this._maskTexture.texture);
                this._maskTexture = null;
            }
            for (var i = 0; i < this._channelColors.getSize(); i++) {
                this._channelColors.set(i, null);
            }
            this._channelColors = null;
            // テクスチャ解放
            this.gl.deleteTexture(this._colorBuffer);
            this._colorBuffer = null;
        };
        /**
         * マネージャの初期化処理
         * クリッピングマスクを使う描画オブジェクトの登録を行う
         * @param model モデルのインスタンス
         * @param drawableCount 描画オブジェクトの数
         * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのインデックスのリスト
         * @param drawableCounts 描画オブジェクトをマスクする描画オブジェクトの数
         */
        CubismClippingManager_WebGL.prototype.initialize = function (model, drawableCount, drawableMasks, drawableMaskCounts) {
            // クリッピングマスクを使う描画オブジェクトをすべて登録する
            // クリッピングマスクは、通常数個程度に限定して使うものとする
            for (var i = 0; i < drawableCount; i++) {
                if (drawableMaskCounts[i] <= 0) {
                    // クリッピングマスクが使用されていないアートメッシュ（多くの場合使用しない）
                    this._clippingContextListForDraw.pushBack(null);
                    continue;
                }
                // 既にあるClipContextと同じかチェックする
                var clippingContext = this.findSameClip(drawableMasks[i], drawableMaskCounts[i]);
                if (clippingContext == null) {
                    // 同一のマスクが存在していない場合は生成する
                    clippingContext = new CubismClippingContext(this, drawableMasks[i], drawableMaskCounts[i]);
                    this._clippingContextListForMask.pushBack(clippingContext);
                }
                clippingContext.addClippedDrawable(i);
                this._clippingContextListForDraw.pushBack(clippingContext);
            }
        };
        /**
         * クリッピングコンテキストを作成する。モデル描画時に実行する。
         * @param model モデルのインスタンス
         * @param renderer レンダラのインスタンス
         */
        CubismClippingManager_WebGL.prototype.setupClippingContext = function (model, renderer) {
            this._currentFrameNo++;
            // 全てのクリッピングを用意する
            // 同じクリップ（複数の場合はまとめて一つのクリップ）を使う場合は1度だけ設定する
            var usingClipCount = 0;
            for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
                // 1つのクリッピングマスクに関して
                var cc = this._clippingContextListForMask.at(clipIndex);
                // このクリップを利用する描画オブジェクト群全体を囲む矩形を計算
                this.calcClippedDrawTotalBounds(model, cc);
                if (cc._isUsing) {
                    usingClipCount++; // 使用中としてカウント
                }
            }
            // マスク作成処理
            if (usingClipCount > 0) {
                // 生成したFrameBufferと同じサイズでビューポートを設定
                this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
                // マスクをactiveにする
                this._maskRenderTexture = this.getMaskRenderTexture();
                // モデル描画時にDrawMeshNowに渡される変換(モデルtoワールド座標変換)
                var modelToWorldF = renderer.getMvpMatrix();
                renderer.preDraw(); // バッファをクリアする
                // 各マスクのレイアウトを決定していく
                this.setupLayoutBounds(usingClipCount);
                // ---------- マスク描画処理 ----------
                // マスク用RenderTextureをactiveにセット
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture);
                // マスクをクリアする
                // (仮仕様) 1が無効（描かれない）領域、0が有効（描かれる）領域。（シェーダーCd*Csで0に近い値をかけてマスクを作る。1をかけると何も起こらない）
                this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                // 実際にマスクを生成する
                // 全てのマスクをどのようにレイアウトして描くかを決定し、ClipContext, ClippedDrawContextに記憶する
                for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
                    // --- 実際に1つのマスクを描く ---
                    var clipContext = this._clippingContextListForMask.at(clipIndex);
                    var allClipedDrawRect = clipContext._allClippedDrawRect; // このマスクを使う、すべての描画オブジェクトの論理座標上の囲み矩形
                    var layoutBoundsOnTex01 = clipContext._layoutBounds; // この中にマスクを収める
                    // モデル座標上の矩形を、適宜マージンを付けて使う
                    var MARGIN = 0.05;
                    this._tmpBoundsOnModel.setRect(allClipedDrawRect);
                    this._tmpBoundsOnModel.expand(allClipedDrawRect.width * MARGIN, allClipedDrawRect.height * MARGIN);
                    //########## 本来は割り当てられた領域の全体を使わず必要最低限のサイズがよい
                    // シェーダ用の計算式を求める。回転を考慮しない場合は以下のとおり
                    // movePeriod' = movePeriod * scaleX + offX		  [[ movePeriod' = (movePeriod - tmpBoundsOnModel.movePeriod)*scale + layoutBoundsOnTex01.movePeriod ]]
                    var scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
                    var scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
                    // マスク生成時に使う行列を求める
                    {
                        // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                        this._tmpMatrix.loadIdentity();
                        {
                            // layout0..1 を -1..1に変換
                            this._tmpMatrix.translateRelative(-1.0, -1.0);
                            this._tmpMatrix.scaleRelative(2.0, 2.0);
                        }
                        {
                            // view to layout0..1
                            this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                            this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                            this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                            // new = [translate][scale][translate]
                        }
                        // tmpMatrixForMaskが計算結果
                        this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
                    }
                    //--------- draw時の mask 参照用行列を計算
                    {
                        // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                        this._tmpMatrix.loadIdentity();
                        {
                            this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                            this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                            this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                            // new = [translate][scale][translate]
                        }
                        this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
                    }
                    clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
                    clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                    var clipDrawCount = clipContext._clippingIdCount;
                    for (var i = 0; i < clipDrawCount; i++) {
                        var clipDrawIndex = clipContext._clippingIdList[i];
                        // 頂点情報が更新されておらず、信頼性がない場合は描画をパスする
                        if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
                            continue;
                        }
                        renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
                        // 今回専用の変換を適用して描く
                        // チャンネルも切り替える必要がある(A,R,G,B)
                        renderer.setClippingContextBufferForMask(clipContext);
                        renderer.drawMesh(model.getDrawableTextureIndices(clipDrawIndex), model.getDrawableVertexIndexCount(clipDrawIndex), model.getDrawableVertexCount(clipDrawIndex), model.getDrawableVertexIndices(clipDrawIndex), model.getDrawableVertices(clipDrawIndex), model.getDrawableVertexUvs(clipDrawIndex), model.getDrawableOpacity(clipDrawIndex), CubismBlendMode.CubismBlendMode_Normal // クリッピングは通常描画を強制
                        );
                    }
                }
                // --- 後処理 ---
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo); // 描画対象を戻す
                renderer.setClippingContextBufferForMask(null);
                this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
            }
        };
        /**
         * 既にマスクを作っているかを確認
         * 作っている様であれば該当するクリッピングマスクのインスタンスを返す
         * 作っていなければNULLを返す
         * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのリスト
         * @param drawableMaskCounts 描画オブジェクトをマスクする描画オブジェクトの数
         * @return 該当するクリッピングマスクが存在すればインスタンスを返し、なければNULLを返す
         */
        CubismClippingManager_WebGL.prototype.findSameClip = function (drawableMasks, drawableMaskCounts) {
            // 作成済みClippingContextと一致するか確認
            for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                var clippingContext = this._clippingContextListForMask.at(i);
                var count = clippingContext._clippingIdCount;
                // 個数が違う場合は別物
                if (count != drawableMaskCounts) {
                    continue;
                }
                var sameCount = 0;
                // 同じIDを持つか確認。配列の数が同じなので、一致した個数が同じなら同じ物を持つとする
                for (var j = 0; j < count; j++) {
                    var clipId = clippingContext._clippingIdList[j];
                    for (var k = 0; k < count; k++) {
                        if (drawableMasks[k] == clipId) {
                            sameCount++;
                            break;
                        }
                    }
                }
                if (sameCount == count) {
                    return clippingContext;
                }
            }
            return null; // 見つからなかった
        };
        /**
         * クリッピングコンテキストを配置するレイアウト
         * 一つのレンダーテクスチャを極力いっぱいに使ってマスクをレイアウトする
         * マスクグループの数が4以下ならRGBA各チャンネルに一つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する。
         *
         * @param usingClipCount 配置するクリッピングコンテキストの数
         */
        CubismClippingManager_WebGL.prototype.setupLayoutBounds = function (usingClipCount) {
            // ひとつのRenderTextureを極力いっぱいに使ってマスクをレイアウトする
            // マスクグループの数が4以下ならRGBA各チャンネルに1つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する
            // RGBAを順番に使っていく
            var div = usingClipCount / ColorChannelCount; //　1チャンネルに配置する基本のマスク
            var mod = usingClipCount % ColorChannelCount; // 余り、この番号のチャンネルまでに一つずつ配分する
            // 小数点は切り捨てる
            div = ~~div;
            mod = ~~mod;
            // RGBAそれぞれのチャンネルを用意していく（0:R, 1:G, 2:B, 3:A）
            var curClipIndex = 0; // 順番に設定していく
            for (var channelNo = 0; channelNo < ColorChannelCount; channelNo++) {
                // このチャンネルにレイアウトする数
                var layoutCount = div + (channelNo < mod ? 1 : 0);
                // 分割方法を決定する
                if (layoutCount == 0) {
                    // 何もしない
                }
                else if (layoutCount == 1) {
                    // 全てをそのまま使う
                    var clipContext = this._clippingContextListForMask.at(curClipIndex++);
                    clipContext._layoutChannelNo = channelNo;
                    clipContext._layoutBounds.x = 0.0;
                    clipContext._layoutBounds.y = 0.0;
                    clipContext._layoutBounds.width = 1.0;
                    clipContext._layoutBounds.height = 1.0;
                }
                else if (layoutCount == 2) {
                    for (var i = 0; i < layoutCount; i++) {
                        var xpos = i % 2;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        var cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelNo = channelNo;
                        cc._layoutBounds.x = xpos * 0.5;
                        cc._layoutBounds.y = 0.0;
                        cc._layoutBounds.width = 0.5;
                        cc._layoutBounds.height = 1.0;
                        // UVを2つに分解して使う
                    }
                }
                else if (layoutCount <= 4) {
                    // 4分割して使う
                    for (var i = 0; i < layoutCount; i++) {
                        var xpos = i % 2;
                        var ypos = i / 2;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        ypos = ~~ypos;
                        var cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelNo = channelNo;
                        cc._layoutBounds.x = xpos * 0.5;
                        cc._layoutBounds.y = ypos * 0.5;
                        cc._layoutBounds.width = 0.5;
                        cc._layoutBounds.height = 0.5;
                    }
                }
                else if (layoutCount <= 9) {
                    // 9分割して使う
                    for (var i = 0; i < layoutCount; i++) {
                        var xpos = i % 3;
                        var ypos = i / 3;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        ypos = ~~ypos;
                        var cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelNo = channelNo;
                        cc._layoutBounds.x = xpos / 3.0;
                        cc._layoutBounds.y = ypos / 3.0;
                        cc._layoutBounds.width = 1.0 / 3.0;
                        cc._layoutBounds.height = 1.0 / 3.0;
                    }
                }
                else {
                    Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("not supported mask count : {0}", layoutCount);
                }
            }
        };
        /**
         * カラーバッファを取得する
         * @return カラーバッファ
         */
        CubismClippingManager_WebGL.prototype.getColorBuffer = function () {
            return this._colorBuffer;
        };
        /**
         * 画面描画に使用するクリッピングマスクのリストを取得する
         * @return 画面描画に使用するクリッピングマスクのリスト
         */
        CubismClippingManager_WebGL.prototype.getClippingContextListForDraw = function () {
            return this._clippingContextListForDraw;
        };
        /**
         * クリッピングマスクバッファのサイズを設定する
         * @param size クリッピングマスクバッファのサイズ
         */
        CubismClippingManager_WebGL.prototype.setClippingMaskBufferSize = function (size) {
            this._clippingMaskBufferSize = size;
        };
        /**
         * クリッピングマスクバッファのサイズを取得する
         * @return クリッピングマスクバッファのサイズ
         */
        CubismClippingManager_WebGL.prototype.getClippingMaskBufferSize = function () {
            return this._clippingMaskBufferSize;
        };
        return CubismClippingManager_WebGL;
    }());
    Live2DCubismFramework.CubismClippingManager_WebGL = CubismClippingManager_WebGL;
    /**
     * レンダーテクスチャのリソースを定義する構造体
     * クリッピングマスクで使用する
     */
    var CubismRenderTextureResource = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param frameNo レンダラーのフレーム番号
         * @param texture テクスチャのアドレス
         */
        function CubismRenderTextureResource(frameNo, texture) {
            this.frameNo = frameNo;
            this.texture = texture;
        }
        return CubismRenderTextureResource;
    }());
    Live2DCubismFramework.CubismRenderTextureResource = CubismRenderTextureResource;
    /**
     * クリッピングマスクのコンテキスト
     */
    var CubismClippingContext = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         */
        function CubismClippingContext(manager, clippingDrawableIndices, clipCount) {
            this._owner = manager;
            // クリップしている（＝マスク用の）Drawableのインデックスリスト
            this._clippingIdList = clippingDrawableIndices;
            // マスクの数
            this._clippingIdCount = clipCount;
            this._allClippedDrawRect = new csmRect();
            this._layoutBounds = new csmRect();
            this._clippedDrawableIndexList = new Array();
            this._matrixForMask = new CubismMatrix44();
            this._matrixForDraw = new CubismMatrix44();
        }
        /**
         * デストラクタ相当の処理
         */
        CubismClippingContext.prototype.release = function () {
            if (this._layoutBounds != null) {
                this._layoutBounds = null;
            }
            if (this._allClippedDrawRect != null) {
                this._allClippedDrawRect = null;
            }
            if (this._clippedDrawableIndexList != null) {
                this._clippedDrawableIndexList = null;
            }
        };
        /**
         * このマスクにクリップされる描画オブジェクトを追加する
         *
         * @param drawableIndex クリッピング対象に追加する描画オブジェクトのインデックス
         */
        CubismClippingContext.prototype.addClippedDrawable = function (drawableIndex) {
            this._clippedDrawableIndexList.push(drawableIndex);
        };
        /**
         * このマスクを管理するマネージャのインスタンスを取得する
         * @return クリッピングマネージャのインスタンス
         */
        CubismClippingContext.prototype.getClippingManager = function () {
            return this._owner;
        };
        CubismClippingContext.prototype.setGl = function (gl) {
            this._owner.setGL(gl);
        };
        return CubismClippingContext;
    }());
    Live2DCubismFramework.CubismClippingContext = CubismClippingContext;
    /**
     * WebGL用のシェーダープログラムを生成・破棄するクラス
     * シングルトンなクラスであり、CubismShader_WebGL.getInstanceからアクセスする。
     */
    var CubismShader_WebGL = /** @class */ (function () {
        /**
         * privateなコンストラクタ
         */
        function CubismShader_WebGL() {
            this._shaderSets = new csmVector();
        }
        /**
         * インスタンスを取得する（シングルトン）
         * @return インスタンス
         */
        CubismShader_WebGL.getInstance = function () {
            if (s_instance == null) {
                s_instance = new CubismShader_WebGL();
                return s_instance;
            }
            return s_instance;
        };
        /**
         * インスタンスを開放する（シングルトン）
         */
        CubismShader_WebGL.deleteInstance = function () {
            if (s_instance) {
                s_instance.release();
                s_instance = null;
            }
        };
        /**
         * デストラクタ相当の処理
         */
        CubismShader_WebGL.prototype.release = function () {
            this.releaseShaderProgram();
        };
        /**
         * シェーダープログラムの一連のセットアップを実行する
         * @param renderer レンダラのインスタンス
         * @param textureId GPUのテクスチャID
         * @param vertexCount ポリゴンメッシュの頂点数
         * @param vertexArray ポリゴンメッシュの頂点配列
         * @param indexArray　インデックスバッファの頂点配列
         * @param uvArray uv配列
         * @param opacity 不透明度
         * @param colorBlendMode カラーブレンディングのタイプ
         * @param baseColor ベースカラー
         * @param isPremultipliedAlpha 乗算済みアルファかどうか
         * @param matrix4x4 Model-View-Projection行列
         */
        CubismShader_WebGL.prototype.setupShaderProgram = function (renderer, textureId, vertexCount, vertexArray, indexArray, uvArray, bufferData, opacity, colorBlendMode, baseColor, isPremultipliedAlpha, matrix4x4) {
            if (!isPremultipliedAlpha) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("NoPremultipliedAlpha is not allowed");
            }
            if (this._shaderSets.getSize() == 0) {
                this.generateShaders();
            }
            // Blending
            var SRC_COLOR;
            var DST_COLOR;
            var SRC_ALPHA;
            var DST_ALPHA;
            if (renderer.getClippingContextBufferForMask() != null) // マスク生成時
             {
                var shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_SetupMask);
                this.gl.useProgram(shaderSet.shaderProgram);
                // テクスチャ設定
                this.gl.activeTexture(this.gl.TEXTURE0);
                this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
                this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
                // 頂点配列の設定(VBO)
                if (bufferData.vertex == null) {
                    bufferData.vertex = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
                this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
                // テクスチャ頂点の設定
                if (bufferData.uv == null) {
                    bufferData.uv = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
                this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
                // チャンネル
                var channelNo = renderer.getClippingContextBufferForMask()._layoutChannelNo;
                var colorChannel = renderer.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(channelNo);
                this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
                this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForMask()._matrixForMask.getArray());
                var rect = renderer.getClippingContextBufferForMask()._layoutBounds;
                this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2.0 - 1.0, rect.y * 2.0 - 1.0, rect.getRight() * 2.0 - 1.0, rect.getBottom() * 2.0 - 1.0);
                SRC_COLOR = this.gl.ZERO;
                DST_COLOR = this.gl.ONE_MINUS_SRC_COLOR;
                SRC_ALPHA = this.gl.ZERO;
                DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
            }
            else // マスク生成以外の場合
             {
                var masked = renderer.getClippingContextBufferForDraw() != null; // この描画オブジェクトはマスク対象か
                var offset = (masked ? 1 : 0);
                var shaderSet = new CubismShaderSet();
                switch (colorBlendMode) {
                    case CubismBlendMode.CubismBlendMode_Normal:
                    default:
                        shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_NormalPremultipliedAlpha + offset);
                        SRC_COLOR = this.gl.ONE;
                        DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                        SRC_ALPHA = this.gl.ONE;
                        DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
                        break;
                    case CubismBlendMode.CubismBlendMode_Additive:
                        shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_AddPremultipliedAlpha + offset);
                        SRC_COLOR = this.gl.ONE;
                        DST_COLOR = this.gl.ONE;
                        SRC_ALPHA = this.gl.ZERO;
                        DST_ALPHA = this.gl.ONE;
                        break;
                    case CubismBlendMode.CubismBlendMode_Multiplicative:
                        shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_MultPremultipliedAlpha + offset);
                        SRC_COLOR = this.gl.DST_COLOR;
                        DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                        SRC_ALPHA = this.gl.ZERO;
                        DST_ALPHA = this.gl.ONE;
                        break;
                }
                this.gl.useProgram(shaderSet.shaderProgram);
                // 頂点配列の設定
                if (bufferData.vertex == null) {
                    bufferData.vertex = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
                this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
                // テクスチャ頂点の設定
                if (bufferData.uv == null) {
                    bufferData.uv = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
                this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
                if (masked) {
                    this.gl.activeTexture(this.gl.TEXTURE1);
                    var tex = renderer.getClippingContextBufferForDraw().getClippingManager().getColorBuffer();
                    this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
                    this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
                    // view座標をClippingContextの座標に変換するための行列を設定
                    this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForDraw()._matrixForDraw.getArray());
                    // 使用するカラーチャンネルを設定
                    var channelNo = renderer.getClippingContextBufferForDraw()._layoutChannelNo;
                    var colorChannel = renderer.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor(channelNo);
                    this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
                }
                // テクスチャ設定
                this.gl.activeTexture(this.gl.TEXTURE0);
                this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
                this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
                // 座標変換
                this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, matrix4x4.getArray());
                this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.R, baseColor.G, baseColor.B, baseColor.A);
            }
            // IBOを作成し、データを転送
            if (bufferData.index == null) {
                bufferData.index = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, bufferData.index);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
            this.gl.blendFuncSeparate(SRC_COLOR, DST_COLOR, SRC_ALPHA, DST_ALPHA);
        };
        /**
         * シェーダープログラムを解放する
         */
        CubismShader_WebGL.prototype.releaseShaderProgram = function () {
            for (var i = 0; i < this._shaderSets.getSize(); i++) {
                this.gl.deleteProgram(this._shaderSets.at(i).shaderProgram);
                this._shaderSets.at(i).shaderProgram = 0;
                this._shaderSets.set(i, void 0);
                this._shaderSets.set(i, null);
            }
        };
        /**
         * シェーダープログラムを初期化する
         * @param vertShaderSrc 頂点シェーダのソース
         * @param fragShaderSrc フラグメントシェーダのソース
         */
        CubismShader_WebGL.prototype.generateShaders = function () {
            for (var i = 0; i < shaderCount; i++) {
                this._shaderSets.pushBack(new CubismShaderSet());
            }
            this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcSetupMask, Live2DCubismFramework.fragmentShaderSrcsetupMask);
            this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrc, Live2DCubismFramework.fragmentShaderSrcPremultipliedAlpha);
            this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlpha);
            // 加算も通常と同じシェーダーを利用する
            this._shaderSets.at(3).shaderProgram = this._shaderSets.at(1).shaderProgram;
            this._shaderSets.at(4).shaderProgram = this._shaderSets.at(2).shaderProgram;
            // 乗算も通常と同じシェーダーを利用する
            this._shaderSets.at(5).shaderProgram = this._shaderSets.at(1).shaderProgram;
            this._shaderSets.at(6).shaderProgram = this._shaderSets.at(2).shaderProgram;
            // SetupMask
            this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_position");
            this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_texCoord");
            this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "s_texture0");
            this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_channelFlag");
            this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_baseColor");
            // 通常（PremultipliedAlpha）
            this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_position");
            this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_texCoord");
            this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "s_texture0");
            this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_matrix");
            this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_baseColor");
            // 通常（クリッピング、PremultipliedAlpha）
            this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_position");
            this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_texCoord");
            this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture0");
            this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture1");
            this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_matrix");
            this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_channelFlag");
            this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_baseColor");
            // 加算（PremultipliedAlpha）
            this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_position");
            this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_texCoord");
            this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture0");
            this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_matrix");
            this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_baseColor");
            // 加算（クリッピング、PremultipliedAlpha）
            this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_position");
            this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_texCoord");
            this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture0");
            this._shaderSets.at(4).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture1");
            this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_matrix");
            this._shaderSets.at(4).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(4).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_channelFlag");
            this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_baseColor");
            // 乗算（PremultipliedAlpha）
            this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_position");
            this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_texCoord");
            this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture0");
            this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_matrix");
            this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_baseColor");
            // 乗算（クリッピング、PremultipliedAlpha）
            this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_position");
            this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_texCoord");
            this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture0");
            this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture1");
            this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_matrix");
            this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_channelFlag");
            this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_baseColor");
        };
        /**
         * シェーダプログラムをロードしてアドレスを返す
         * @param vertexShaderSource    頂点シェーダのソース
         * @param fragmentShaderSource  フラグメントシェーダのソース
         * @return シェーダプログラムのアドレス
         */
        CubismShader_WebGL.prototype.loadShaderProgram = function (vertexShaderSource, fragmentShaderSource) {
            // Create Shader Program
            var shaderProgram = this.gl.createProgram();
            var vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
            if (!vertShader) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Vertex shader compile error!");
                return 0;
            }
            var fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
            if (!fragShader) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Vertex shader compile error!");
                return 0;
            }
            // Attach vertex shader to program
            this.gl.attachShader(shaderProgram, vertShader);
            // Attach fragment shader to program
            this.gl.attachShader(shaderProgram, fragShader);
            // link program
            this.gl.linkProgram(shaderProgram);
            var linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
            // リンクに失敗したらシェーダーを削除
            if (!linkStatus) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Failed to link program: {0}", shaderProgram);
                this.gl.deleteShader(vertShader);
                vertShader = 0;
                this.gl.deleteShader(fragShader);
                fragShader = 0;
                if (shaderProgram) {
                    this.gl.deleteProgram(shaderProgram);
                    shaderProgram = 0;
                }
                return 0;
            }
            // Release vertex and fragment shaders.
            this.gl.deleteShader(vertShader);
            this.gl.deleteShader(fragShader);
            return shaderProgram;
        };
        /**
         * シェーダープログラムをコンパイルする
         * @param shaderType シェーダタイプ(Vertex/Fragment)
         * @param shaderSource シェーダソースコード
         *
         * @return コンパイルされたシェーダープログラム
         */
        CubismShader_WebGL.prototype.compileShaderSource = function (shaderType, shaderSource) {
            var source = shaderSource;
            var shader = this.gl.createShader(shaderType);
            this.gl.shaderSource(shader, source);
            this.gl.compileShader(shader);
            if (!shader) {
                var log = this.gl.getShaderInfoLog(shader);
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Shader compile log: {0} ", log);
            }
            var status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
            if (!status) {
                this.gl.deleteShader(shader);
                return null;
            }
            return shader;
        };
        CubismShader_WebGL.prototype.setGl = function (gl) {
            this.gl = gl;
        };
        return CubismShader_WebGL;
    }());
    Live2DCubismFramework.CubismShader_WebGL = CubismShader_WebGL;
    /**
     * CubismShader_WebGLのインナークラス
     */
    var CubismShaderSet = /** @class */ (function () {
        function CubismShaderSet() {
        }
        return CubismShaderSet;
    }());
    Live2DCubismFramework.CubismShaderSet = CubismShaderSet;
    var ShaderNames;
    (function (ShaderNames) {
        // SetupMask
        ShaderNames[ShaderNames["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
        // Normal
        ShaderNames[ShaderNames["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
        ShaderNames[ShaderNames["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
        // Add
        ShaderNames[ShaderNames["ShaderNames_AddPremultipliedAlpha"] = 3] = "ShaderNames_AddPremultipliedAlpha";
        ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipledAlpha"] = 4] = "ShaderNames_AddMaskedPremultipledAlpha";
        // Mult
        ShaderNames[ShaderNames["ShaderNames_MultPremultipliedAlpha"] = 5] = "ShaderNames_MultPremultipliedAlpha";
        ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlpha"] = 6] = "ShaderNames_MultMaskedPremultipliedAlpha";
    })(ShaderNames = Live2DCubismFramework.ShaderNames || (Live2DCubismFramework.ShaderNames = {}));
    ;
    Live2DCubismFramework.vertexShaderSrcSetupMask = "attribute vec4     a_position;" +
        "attribute vec2     a_texCoord;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_myPos;" +
        "uniform mat4       u_clipMatrix;" +
        "void main()" +
        "{" +
        "   gl_Position = u_clipMatrix * a_position;" +
        "   v_myPos = u_clipMatrix * a_position;" +
        "   v_texCoord = a_texCoord;" +
        "   v_texCoord.y = 1.0 - v_texCoord.y;" +
        "}";
    Live2DCubismFramework.fragmentShaderSrcsetupMask = "precision mediump float;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_myPos;" +
        "uniform vec4       u_baseColor;" +
        "uniform vec4       u_channelFlag;" +
        "uniform sampler2D  s_texture0;" +
        "void main()" +
        "{" +
        "   float isInside = " +
        "       step(u_baseColor.x, v_myPos.x/v_myPos.w)" +
        "       * step(u_baseColor.y, v_myPos.y/v_myPos.w)" +
        "       * step(v_myPos.x/v_myPos.w, u_baseColor.z)" +
        "       * step(v_myPos.y/v_myPos.w, u_baseColor.w);" +
        "   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;" +
        "}";
    //----- バーテックスシェーダプログラム -----
    // Normal & Add & Mult 共通
    Live2DCubismFramework.vertexShaderSrc = "attribute vec4     a_position;" + //v.vertex
        "attribute vec2     a_texCoord;" + //v.texcoord
        "varying vec2       v_texCoord;" + //v2f.texcoord
        "uniform mat4       u_matrix;" +
        "void main()" +
        "{" +
        "   gl_Position = u_matrix * a_position;" +
        "   v_texCoord = a_texCoord;" +
        "   v_texCoord.y = 1.0 - v_texCoord.y;" +
        "}";
    // Normal & Add & Mult 共通（クリッピングされたものの描画用）
    Live2DCubismFramework.vertexShaderSrcMasked = "attribute vec4     a_position;" +
        "attribute vec2     a_texCoord;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_clipPos;" +
        "uniform mat4       u_matrix;" +
        "uniform mat4       u_clipMatrix;" +
        "void main()" +
        "{" +
        "   gl_Position = u_matrix * a_position;" +
        "   v_clipPos = u_clipMatrix * a_position;" +
        "   v_texCoord = a_texCoord;" +
        "   v_texCoord.y = 1.0 - v_texCoord.y;" +
        "}";
    //----- フラグメントシェーダプログラム -----
    // Normal & Add & Mult 共通 （PremultipliedAlpha）
    Live2DCubismFramework.fragmentShaderSrcPremultipliedAlpha = "precision mediump float;" +
        "varying vec2       v_texCoord;" + //v2f.texcoord
        "uniform vec4       u_baseColor;" +
        "uniform sampler2D  s_texture0;" + //_MainTex
        "void main()" +
        "{" +
        "   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;" +
        "}";
    // Normal （クリッピングされたものの描画用、PremultipliedAlpha兼用）
    Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlpha = "precision mediump float;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_clipPos;" +
        "uniform vec4       u_baseColor;" +
        "uniform vec4       u_channelFlag;" +
        "uniform sampler2D  s_texture0;" +
        "uniform sampler2D  s_texture1;" +
        "void main()" +
        "{" +
        "   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;" +
        "   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;" +
        "   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;" +
        "   col_formask = col_formask * maskVal;" +
        "   gl_FragColor = col_formask;" +
        "}";
    /**
     * WebGL用の描画命令を実装したクラス
     */
    var CubismRenderer_WebGL = /** @class */ (function (_super) {
        __extends(CubismRenderer_WebGL, _super);
        /**
         * コンストラクタ
         */
        function CubismRenderer_WebGL() {
            var _this = _super.call(this) || this;
            _this._clippingContextBufferForMask = null;
            _this._clippingContextBufferForDraw = null;
            _this._clippingManager = new CubismClippingManager_WebGL();
            _this.firstDraw = true;
            _this._textures = new csmMap();
            _this._sortedDrawableIndexList = new csmVector();
            _this._bufferData = {
                vertex: WebGLBuffer = null,
                uv: WebGLBuffer = null,
                index: WebGLBuffer = null
            };
            // テクスチャ対応マップの容量を確保しておく
            _this._textures.prepareCapacity(32, true);
            return _this;
        }
        /**
         * レンダラの初期化処理を実行する
         * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
         *
         * @param model モデルのインスタンス
         */
        CubismRenderer_WebGL.prototype.initialize = function (model) {
            if (model.isUsingMasking()) {
                this._clippingManager = new CubismClippingManager_WebGL(); // クリッピングマスク・バッファ前処理方式を初期化
                this._clippingManager.initialize(model, model.getDrawableCount(), model.getDrawableMasks(), model.getDrawableMaskCounts());
            }
            this._sortedDrawableIndexList.resize(model.getDrawableCount(), 0);
            _super.prototype.initialize.call(this, model); // 親クラスの処理を呼ぶ
        };
        /**
         * WebGLテクスチャのバインド処理
         * CubismRendererにテクスチャを設定し、CubismRenderer内でその画像を参照するためのIndex値を戻り値とする
         * @param modelTextureNo セットするモデルテクスチャの番号
         * @param glTextureNo WebGLテクスチャの番号
         */
        CubismRenderer_WebGL.prototype.bindTexture = function (modelTextureNo, glTexture) {
            this._textures.setValue(modelTextureNo, glTexture);
        };
        /**
         * WebGLにバインドされたテクスチャのリストを取得する
         * @return テクスチャのリスト
         */
        CubismRenderer_WebGL.prototype.getBindedTextures = function () {
            return this._textures;
        };
        /**
         * クリッピングマスクバッファのサイズを設定する
         * マスク用のFrameBufferを破棄、再作成する為処理コストは高い
         * @param size クリッピングマスクバッファのサイズ
         */
        CubismRenderer_WebGL.prototype.setClippingMaskBufferSize = function (size) {
            // FrameBufferのサイズを変更するためにインスタンスを破棄・再作成する
            this._clippingManager.release();
            this._clippingManager = void 0;
            this._clippingManager = null;
            this._clippingManager = new CubismClippingManager_WebGL();
            this._clippingManager.setClippingMaskBufferSize(size);
            this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts());
        };
        /**
         * クリッピングマスクバッファのサイズを取得する
         * @return クリッピングマスクバッファのサイズ
         */
        CubismRenderer_WebGL.prototype.getClippingMaskBufferSize = function () {
            return this._clippingManager.getClippingMaskBufferSize();
        };
        /**
         * デストラクタ相当の処理
         */
        CubismRenderer_WebGL.prototype.release = function () {
            this._clippingManager.release();
            this._clippingManager = void 0;
            this._clippingManager = null;
            this.gl.deleteBuffer(this._bufferData.vertex);
            this._bufferData.vertex = null;
            this.gl.deleteBuffer(this._bufferData.uv);
            this._bufferData.uv = null;
            this.gl.deleteBuffer(this._bufferData.index);
            this._bufferData.index = null;
            this._bufferData = null;
            this._textures = null;
        };
        /**
         * モデルを描画する実際の処理
         */
        CubismRenderer_WebGL.prototype.doDrawModel = function () {
            //------------ クリッピングマスク・バッファ前処理方式の場合 ------------
            if (this._clippingManager != null) {
                this.preDraw();
                this._clippingManager.setupClippingContext(this.getModel(), this);
            }
            // 上記クリッピング処理内でも一度PreDrawを呼ぶので注意!!
            this.preDraw();
            var drawableCount = this.getModel().getDrawableCount();
            var renderOrder = this.getModel().getDrawableRenderOrders();
            // インデックスを描画順でソート
            for (var i = 0; i < drawableCount; ++i) {
                var order = renderOrder[i];
                this._sortedDrawableIndexList.set(order, i);
            }
            // 描画
            for (var i = 0; i < drawableCount; ++i) {
                var drawableIndex = this._sortedDrawableIndexList.at(i);
                // Drawableが表示状態でなければ処理をパスする
                if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
                    continue;
                }
                // クリッピングマスクをセットする
                this.setClippingContextBufferForDraw((this._clippingManager != null)
                    ? (this._clippingManager.getClippingContextListForDraw()).at(drawableIndex)
                    : null);
                this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
                this.drawMesh(this.getModel().getDrawableTextureIndices(drawableIndex), this.getModel().getDrawableVertexIndexCount(drawableIndex), this.getModel().getDrawableVertexCount(drawableIndex), this.getModel().getDrawableVertexIndices(drawableIndex), this.getModel().getDrawableVertices(drawableIndex), this.getModel().getDrawableVertexUvs(drawableIndex), this.getModel().getDrawableOpacity(drawableIndex), this.getModel().getDrawableBlendMode(drawableIndex));
            }
        };
        /**
         * [オーバーライド]
         * 描画オブジェクト（アートメッシュ）を描画する。
         * ポリゴンメッシュとテクスチャ番号をセットで渡す。
         * @param textureNo 描画するテクスチャ番号
         * @param indexCount 描画オブジェクトのインデックス値
         * @param vertexCount ポリゴンメッシュの頂点数
         * @param indexArray ポリゴンメッシュのインデックス配列
         * @param vertexArray ポリゴンメッシュの頂点配列
         * @param uvArray uv配列
         * @param opacity 不透明度
         * @param colorBlendMode カラー合成タイプ
         */
        CubismRenderer_WebGL.prototype.drawMesh = function (textureNo, indexCount, vertexCount, indexArray, vertexArray, uvArray, opacity, colorBlendMode) {
            // 裏面描画の有効・無効
            if (this.isCulling()) {
                this.gl.enable(this.gl.CULL_FACE);
            }
            else {
                this.gl.disable(this.gl.CULL_FACE);
            }
            this.gl.frontFace(this.gl.CCW); // Cubism3 OpenGLはマスク・アートメッシュ共にCCWが表面
            var modelColorRGBA = this.getModelColor();
            if (this.getClippingContextBufferForMask() == null) // マスク生成時以外
             {
                modelColorRGBA.A *= opacity;
                if (this.isPremultipliedAlpha()) {
                    modelColorRGBA.R *= modelColorRGBA.A;
                    modelColorRGBA.G *= modelColorRGBA.A;
                    modelColorRGBA.B *= modelColorRGBA.A;
                }
            }
            var drawtexture; // シェーダに渡すテクスチャ
            // テクスチャマップからバインド済みテクスチャＩＤを取得
            // バインドされていなければダミーのテクスチャIDをセットする
            if (this._textures.getValue(textureNo) != null) {
                drawtexture = this._textures.getValue(textureNo);
            }
            else {
                drawtexture = null;
            }
            CubismShader_WebGL.getInstance().setupShaderProgram(this, drawtexture, vertexCount, vertexArray, indexArray, uvArray, this._bufferData, opacity, colorBlendMode, modelColorRGBA, this.isPremultipliedAlpha(), this.getMvpMatrix());
            // ポリゴンメッシュを描画する
            this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
            // 後処理
            this.gl.useProgram(null);
            this.setClippingContextBufferForDraw(null);
            this.setClippingContextBufferForMask(null);
        };
        /**
         * レンダラが保持する静的なリソースを解放する
         * WebGLの静的なシェーダープログラムを解放する
         */
        CubismRenderer_WebGL.doStaticRelease = function () {
            CubismShader_WebGL.deleteInstance();
        };
        /**
         * レンダーステートを設定する
         * @param fbo アプリケーション側で指定しているフレームバッファ
         * @param viewport ビューポート
         */
        CubismRenderer_WebGL.prototype.setRenderState = function (fbo, viewport) {
            s_fbo = fbo;
            s_viewport = viewport;
        };
        /**
         * 描画開始時の追加処理
         * モデルを描画する前にクリッピングマスクに必要な処理を実装している
         */
        CubismRenderer_WebGL.prototype.preDraw = function () {
            if (this.firstDraw) {
                this.firstDraw = false;
                // 拡張機能を有効にする
                this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") ||
                    this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                    this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
            }
            this.gl.disable(this.gl.SCISSOR_TEST);
            this.gl.disable(this.gl.STENCIL_TEST);
            this.gl.disable(this.gl.DEPTH_TEST);
            // カリング（1.0beta3）
            this.gl.frontFace(this.gl.CW);
            this.gl.enable(this.gl.BLEND);
            this.gl.colorMask(true, true, true, true);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null); // 前にバッファがバインドされていたら破棄する必要がある
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
        };
        /**
         * マスクテクスチャに描画するクリッピングコンテキストをセットする
         */
        CubismRenderer_WebGL.prototype.setClippingContextBufferForMask = function (clip) {
            this._clippingContextBufferForMask = clip;
        };
        /**
         * マスクテクスチャに描画するクリッピングコンテキストを取得する
         * @return マスクテクスチャに描画するクリッピングコンテキスト
         */
        CubismRenderer_WebGL.prototype.getClippingContextBufferForMask = function () {
            return this._clippingContextBufferForMask;
        };
        /**
         * 画面上に描画するクリッピングコンテキストをセットする
         */
        CubismRenderer_WebGL.prototype.setClippingContextBufferForDraw = function (clip) {
            this._clippingContextBufferForDraw = clip;
        };
        /**
         * 画面上に描画するクリッピングコンテキストを取得する
         * @return 画面上に描画するクリッピングコンテキスト
         */
        CubismRenderer_WebGL.prototype.getClippingContextBufferForDraw = function () {
            return this._clippingContextBufferForDraw;
        };
        /**
         * glの設定
         */
        CubismRenderer_WebGL.prototype.startUp = function (gl) {
            this.gl = gl;
            this._clippingManager.setGL(gl);
            CubismShader_WebGL.getInstance().setGl(gl);
        };
        return CubismRenderer_WebGL;
    }(CubismRenderer));
    Live2DCubismFramework.CubismRenderer_WebGL = CubismRenderer_WebGL;
    /**
     * レンダラが保持する静的なリソースを開放する
     */
    CubismRenderer.staticRelease = function () {
        CubismRenderer_WebGL.doStaticRelease();
    };
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmmap.ts":
/*!**********************************!*\
  !*** ./Framework/type/csmmap.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * Key-Valueのペアを定義するクラス
     * csmMapクラスの内部データで使用する。
     */
    var csmPair = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param key Keyとしてセットする値
         * @param value Valueとしてセットする値
         */
        function csmPair(key, value) {
            this.first = (key == undefined)
                ? null
                : key;
            this.second = (value == undefined)
                ? null
                : value;
        }
        return csmPair;
    }());
    Live2DCubismFramework.csmPair = csmPair;
    /**
     * マップ型
     */
    var csmMap = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param size 初期化時点で確保するサイズ
         */
        function csmMap(size) {
            if (size != undefined) {
                if (size < 1) {
                    this._keyValues = new Array();
                    this._dummyValue = null;
                    this._size = 0;
                }
                else {
                    this._keyValues = new Array(size);
                    this._size = size;
                }
            }
            else {
                this._keyValues = new Array();
                this._dummyValue = null;
                this._size = 0;
            }
        }
        /**
         * デストラクタ
         */
        csmMap.prototype.release = function () {
            this.clear();
        };
        /**
         * キーを追加する
         * @param key 新たに追加するキー
         */
        csmMap.prototype.appendKey = function (key) {
            // 新しくKey/Valueのペアを作る
            this.prepareCapacity(this._size + 1, false); // 1つ以上入る隙間を作る
            // 新しいkey/valueのインデックスは_size
            this._keyValues[this._size] = new csmPair(key);
            this._size += 1;
        };
        /**
         * 添字演算子[key]のオーバーロード(get)
         * @param key 添字から特定されるValue値
         */
        csmMap.prototype.getValue = function (key) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                return this._keyValues[found].second;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                return this._keyValues[this._size - 1].second;
            }
        };
        /**
         * 添字演算子[key]のオーバーロード(set)
         * @param key 添字から特定されるValue値
         * @param value 代入するValue値
         */
        csmMap.prototype.setValue = function (key, value) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                this._keyValues[found].second = value;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                this._keyValues[this._size - 1].second = value;
            }
        };
        /**
         * 引数で渡したKeyを持つ要素が存在するか
         * @param key 存在を確認するkey
         * @return true 引数で渡したkeyを持つ要素が存在する
         * @return false 引数で渡したkeyを持つ要素が存在しない
         */
        csmMap.prototype.isExist = function (key) {
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    return true;
                }
            }
            return false;
        };
        /**
         * keyValueのポインタを全て解放する
         */
        csmMap.prototype.clear = function () {
            this._keyValues = void 0;
            this._keyValues = null;
            this._keyValues = new Array();
            this._size = 0;
        };
        /**
         * コンテナのサイズを取得する
         *
         * @return コンテナのサイズ
         */
        csmMap.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない。
         * @param fitToSize trueなら指定したサイズに合わせる。falseならサイズを2倍確保しておく。
         */
        csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
            if (newSize > this._keyValues.length) {
                if (this._keyValues.length == 0) {
                    if (!fitToSize && newSize < csmMap.DefaultSize)
                        newSize = csmMap.DefaultSize;
                    this._keyValues.length = newSize;
                }
                else {
                    if (!fitToSize && newSize < this._keyValues.length * 2)
                        newSize = this._keyValues.length * 2;
                    this._keyValues.length = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmMap.prototype.begin = function () {
            var ite = new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmMap.prototype.end = function () {
            var ite = new iterator(this, this._size); // 終了
            return ite;
        };
        /**
         * コンテナから要素を削除する
         *
         * @param ite 削除する要素
         */
        csmMap.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._keyValues.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナの値を32ビット符号付き整数型でダンプする
         */
        csmMap.prototype.dumpAsInt = function () {
            for (var i = 0; i < this._size; i++) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("{0} ,", this._keyValues[i]);
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("\n");
            }
        };
        csmMap.DefaultSize = 10; // コンテナの初期化のデフォルトサイズ
        return csmMap;
    }());
    Live2DCubismFramework.csmMap = csmMap;
    /**
     * csmMap<T>のイテレータ
     */
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, idx) {
            this._map = (v != undefined)
                ? v
                : new csmMap();
            this._index = (idx != undefined)
                ? idx
                : 0;
        }
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._map = ite._map;
            return this;
        };
        /**
         * 前置き++演算子のオーバーロード
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算子のオーバーロード
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子のオーバーロード
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._map, this._index++); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子のオーバーロード
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._map, this._index); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * *演算子のオーバーロード
         */
        iterator.prototype.ptr = function () {
            return this._map._keyValues[this._index];
        };
        /**
         * !=演算
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._map != ite._map);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmrectf.ts":
/*!************************************!*\
  !*** ./Framework/type/csmrectf.ts ***!
  \************************************/
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
     * 矩形形状（座標・長さはfloat値）を定義するクラス
     */
    var csmRect = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param x 左端X座標
         * @param y 上端Y座標
         * @param w 幅
         * @param h 高さ
         */
        function csmRect(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
        }
        /**
         * 矩形中央のX座標を取得する
         */
        csmRect.prototype.getCenterX = function () {
            return this.x + 0.5 * this.width;
        };
        /**
         * 矩形中央のY座標を取得する
         */
        csmRect.prototype.getCenterY = function () {
            return this.y + 0.5 * this.height;
        };
        /**
         * 右側のX座標を取得する
         */
        csmRect.prototype.getRight = function () {
            return this.x + this.width;
        };
        /**
         * 下端のY座標を取得する
         */
        csmRect.prototype.getBottom = function () {
            return this.y + this.height;
        };
        /**
         * 矩形に値をセットする
         * @param r 矩形のインスタンス
         */
        csmRect.prototype.setRect = function (r) {
            this.x = r.x;
            this.y = r.y;
            this.width = r.width;
            this.height = r.height;
        };
        /**
         * 矩形中央を軸にして縦横を拡縮する
         * @param w 幅方向に拡縮する量
         * @param h 高さ方向に拡縮する量
         */
        csmRect.prototype.expand = function (w, h) {
            this.x -= w;
            this.y -= h;
            this.width += w * 2.0;
            this.height += h * 2.0;
        };
        return csmRect;
    }());
    Live2DCubismFramework.csmRect = csmRect;
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


/***/ }),

/***/ "./Framework/utils/cubismdebug.ts":
/*!****************************************!*\
  !*** ./Framework/utils/cubismdebug.ts ***!
  \****************************************/
/*! exports provided: CubismLogPrint, CubismLogPrintIn, CSM_ASSERT, CubismLogVerbose, CubismLogDebug, CubismLogInfo, CubismLogWarning, CubismLogError, Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrint", function() { return CubismLogPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrintIn", function() { return CubismLogPrintIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_ASSERT", function() { return CSM_ASSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogVerbose", function() { return CubismLogVerbose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogDebug", function() { return CubismLogDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogInfo", function() { return CubismLogInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogWarning", function() { return CubismLogWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogError", function() { return CubismLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cubismframeworkconfig */ "./Framework/cubismframeworkconfig.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var CubismLogPrint = function (level, fmt, args) {
    Live2DCubismFramework.CubismDebug.print(level, "[CSM]" + fmt, args);
};
var CubismLogPrintIn = function (level, fmt, args) {
    CubismLogPrint(level, fmt + "\n", args);
};
var CSM_ASSERT = function (expr) {
    console.assert(expr);
};
var CubismLogVerbose = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogDebug = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogInfo = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogWarning = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogError = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] <= _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_VERBOSE"]) {
    CubismLogVerbose = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Verbose, "[V]" + fmt, args);
    };
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_DEBUG"]) {
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_INFO"]) {
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_WARNING"]) {
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_ERROR"]) {
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
//------------ LIVE2D NAMESPACE ------------
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * デバッグ用のユーティリティクラス。
     * ログの出力、バイトのダンプなど
     */
    var CubismDebug = /** @class */ (function () {
        /**
         * private コンストラクタ
         */
        function CubismDebug() {
        }
        /**
         * ログを出力する。第一引数にログレベルを設定する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param format 書式付き文字列
         * @param args 可変長引数
         */
        CubismDebug.print = function (logLevel, format, args) {
            // オプションで設定されたログ出力レベルを下回る場合はログに出さない
            if (logLevel < _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.getLoggingLevel()) {
                return;
            }
            var logPrint = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.coreLogFunction;
            if (!logPrint)
                return;
            var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
                return args[k];
            });
            logPrint(buffer);
        };
        /**
         * データから指定した長さだけダンプ出力する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param data ダンプするデータ
         * @param length ダンプする長さ
         */
        CubismDebug.dumpBytes = function (logLevel, data, length) {
            for (var i = 0; i < length; i++) {
                if (i % 16 == 0 && i > 0)
                    this.print(logLevel, "\n");
                else if (i % 8 == 0 && i > 0)
                    this.print(logLevel, "  ");
                this.print(logLevel, "{0} ", [(data[i] & 0xFF)]);
            }
            this.print(logLevel, "\n");
        };
        return CubismDebug;
    }());
    Live2DCubismFramework.CubismDebug = CubismDebug;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
//------------ LIVE2D NAMESPACE ------------


/***/ }),

/***/ "./Framework/utils/cubismjson.ts":
/*!***************************************!*\
  !*** ./Framework/utils/cubismjson.ts ***!
  \***************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubismdebug */ "./Framework/utils/cubismdebug.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
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





var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmVector;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmMap;
var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // StaticInitializeNotForClientCall()で初期化する
    var CSM_JSON_ERROR_TYPE_MISMATCH = "Error: type mismatch";
    var CSM_JSON_ERROR_INDEX_OF_BOUNDS = "Error: index out of bounds";
    /**
     * パースしたJSONエレメントの要素の基底クラス。
     */
    var Value = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function Value() {
        }
        /**
         * 要素を文字列型で返す(string)
         */
        Value.prototype.getRawString = function (defaultValue, indent) {
            return this.getString(defaultValue, indent);
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        Value.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return defaultValue;
        };
        /**
         * サイズを返す
         */
        Value.prototype.getSize = function () {
            return 0;
        };
        /**
         * 要素を配列で返す(Value[])
         */
        Value.prototype.getArray = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return defaultValue;
        };
        /**
         * 要素をコンテナで返す(array)
         */
        Value.prototype.getVector = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 要素をマップで返す(csmMap<csmString, Value>)
         */
        Value.prototype.getMap = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 添字演算子[index]
         */
        Value.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 添字演算子[string | csmString]
         */
        Value.prototype.getValueByString = function (s) {
            return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * マップのキー一覧をコンテナで返す
         *
         * @return マップのキーの一覧
         */
        Value.prototype.getKeys = function () {
            return Value.s_dummyKeys;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        Value.prototype.isError = function () {
            return false;
        };
        /**
         * Valueの種類がnullならtrue
         */
        Value.prototype.isNull = function () {
            return false;
        };
        /**
         * Valueの種類が真偽値ならtrue
         */
        Value.prototype.isBool = function () {
            return false;
        };
        /**
         * Valueの種類が数値型ならtrue
         */
        Value.prototype.isFloat = function () {
            return false;
        };
        /**
         * Valueの種類が文字列ならtrue
         */
        Value.prototype.isString = function () {
            return false;
        };
        /**
         * Valueの種類が配列ならtrue
         */
        Value.prototype.isArray = function () {
            return false;
        };
        /**
         * Valueの種類がマップ型ならtrue
         */
        Value.prototype.isMap = function () {
            return false;
        };
        Value.prototype.equals = function (value) {
            return false;
        };
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        Value.prototype.isStatic = function () {
            return false;
        };
        /**
         * Valueにエラー値をセットする
         */
        Value.prototype.setErrorNotForClientCall = function (errorStr) {
            return JsonError.errorValue;
        };
        /**
         * 初期化用メソッド
         */
        Value.staticInitializeNotForClientCall = function () {
            JsonBoolean.trueValue = new JsonBoolean(true);
            JsonBoolean.falseValue = new JsonBoolean(false);
            JsonError.errorValue = new JsonError("ERROR", true);
            this.nullValue = new JsonNullvalue();
            Value.s_dummyKeys = new csmVector();
        };
        /**
         * リリース用メソッド
         */
        Value.staticReleaseNotForClientCall = function () {
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
        };
        return Value;
    }());
    Live2DCubismFramework.Value = Value;
    /**
     * Ascii文字のみ対応した最小限の軽量JSONパーサ。
     * 仕様はJSONのサブセットとなる。
     * 設定ファイル(model3.json)などのロード用
     *
     * [未対応項目]
     * ・日本語などの非ASCII文字
     * ・eによる指数表現
     */
    var CubismJson = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismJson(buffer, length) {
            this._error = null;
            this._lineCount = 0;
            this._root = null;
            if (buffer != undefined) {
                this.parseBytes(buffer, length);
            }
        }
        /**
         * バイトデータから直接ロードしてパースする
         *
         * @param buffer バッファ
         * @param size バッファサイズ
         * @return CubismJsonクラスのインスタンス。失敗したらNULL
         */
        CubismJson.create = function (buffer, size) {
            var json = new CubismJson();
            var succeeded = json.parseBytes(buffer, size);
            if (!succeeded) {
                CubismJson.delete(json);
                return null;
            }
            else {
                return json;
            }
        };
        /**
         * パースしたJSONオブジェクトの解放処理
         *
         * @param instance CubismJsonクラスのインスタンス
         */
        CubismJson.delete = function (instance) {
            instance = null;
        };
        /**
         * パースしたJSONのルート要素を返す
         */
        CubismJson.prototype.getRoot = function () {
            return this._root;
        };
        /**
         *  UnicodeのバイナリをStringに変換
         *
         * @param buffer 変換するバイナリデータ
         * @return 変換後の文字列
         */
        CubismJson.prototype.arrayBufferToString = function (buffer) {
            var uint8Array = new Uint8Array(buffer);
            var str = "";
            for (var i = 0, len = uint8Array.length; i < len; ++i) {
                str += ("%" + this.pad(uint8Array[i].toString(16)));
            }
            str = decodeURIComponent(str);
            return str;
        };
        /**
         * エンコード、パディング
         */
        CubismJson.prototype.pad = function (n) {
            return n.length < 2
                ? "0" + n
                : n;
        };
        ;
        /**
         * JSONのパースを実行する
         * @param buffer    パース対象のデータバイト
         * @param size      データバイトのサイズ
         * return true : 成功
         * return false: 失敗
         */
        CubismJson.prototype.parseBytes = function (buffer, size) {
            var endPos = new Array(1); // 参照渡しにするため配列
            var decodeBuffer = this.arrayBufferToString(buffer);
            this._root = this.parseValue(decodeBuffer, size, 0, endPos);
            if (this._error) {
                var strbuf = '\0';
                strbuf = "Json parse error : @line " + (this._lineCount + 1) + "\n";
                this._root = new JsonString(strbuf);
                Object(_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("{0}", this._root.getRawString());
                return false;
            }
            else if (this._root == null) {
                this._root = new JsonError(new csmString(this._error), false); // rootは解放されるのでエラーオブジェクトを別途作成する
                return false;
            }
            return true;
        };
        /**
         * パース時のエラー値を返す
         */
        CubismJson.prototype.getParseError = function () {
            return this._error;
        };
        /**
         * ルート要素の次の要素がファイルの終端だったらtrueを返す
         */
        CubismJson.prototype.checkEndOfFile = function () {
            return this._root.getArray()[1].equals("EOF");
        };
        /**
         * JSONエレメントからValue(float,String,Value*,Array,null,true,false)をパースする
         * エレメントの書式に応じて内部でParseString(), ParseObject(), ParseArray()を呼ぶ
         *
         * @param   buffer      JSONエレメントのバッファ
         * @param   length      パースする長さ
         * @param   begin       パースを開始する位置
         * @param   outEndPos   パース終了時の位置
         * @return      パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseValue = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var o = null;
            var i = begin;
            var f;
            for (; i < length; i++) {
                var c = buffer[i];
                switch (c) {
                    case '-':
                    case '.':
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        {
                            var afterString = new Array(1); // 参照渡しにするため
                            f = Object(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__["strtod"])(buffer.slice(i), afterString);
                            outEndPos[0] = buffer.indexOf(afterString[0]);
                            return new JsonFloat(f);
                        }
                    case '\"':
                        return new JsonString(this.parseString(buffer, length, i + 1, outEndPos)); // \"の次の文字から
                    case '[':
                        o = this.parseArray(buffer, length, i + 1, outEndPos);
                        return o;
                    case '{':
                        o = this.parseObject(buffer, length, i + 1, outEndPos);
                        return o;
                    case 'n': // null以外にない
                        if (i + 3 < length) {
                            o = new JsonNullvalue(); // 解放できるようにする
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse null";
                        }
                        return o;
                    case 't': // true以外にない
                        if (i + 3 < length) {
                            o = JsonBoolean.trueValue;
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse true";
                        }
                        return o;
                    case 'f': // false以外にない
                        if (i + 4 < length) {
                            o = JsonBoolean.falseValue;
                            outEndPos[0] = i + 5;
                        }
                        else {
                            this._error = "illegal ',' position";
                        }
                        return o;
                    case ',': // Array separator
                        this._error = "illegal ',' position";
                        return null;
                    case ']': // 不正な｝だがスキップする。配列の最後に不要な , があると思われる
                        outEndPos[0] = i; // 同じ文字を再処理
                        return null;
                    case '\n':
                        this._lineCount++;
                    case ' ':
                    case '\t':
                    case '\r':
                    default: // スキップ
                        break;
                }
            }
            this._error = "illegal end of value";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         *
         * @param   string  ->  パース対象の文字列
         * @param   length  ->  パースする長さ
         * @param   begin   ->  パースを開始する位置
         * @param  outEndPos   ->  パース終了時の位置
         * @return      パースした文F字列要素
         */
        CubismJson.prototype.parseString = function (string, length, begin, outEndPos) {
            if (this._error)
                return null;
            var i = begin;
            var c, c2;
            var ret = new csmString("");
            var bufStart = begin; // sbufに登録されていない文字の開始位置
            for (; i < length; i++) {
                c = string[i];
                switch (c) {
                    case '\"': // 終端の”、エスケープ文字は別に処理されるのでここに来ない
                        {
                            outEndPos[0] = i + 1; // ”の次の文字
                            ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            return ret.s;
                        }
                    case '//': // エスケープの場合
                        {
                            i++; // ２文字をセットで扱う
                            if (i - 1 > bufStart) {
                                ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            }
                            bufStart = i + 1; // エスケープ（２文字)の次の文字から
                            if (i < length) {
                                c2 = string[i];
                                switch (c2) {
                                    case '\\':
                                        ret.expansion(1, '\\');
                                        break;
                                    case '\"':
                                        ret.expansion(1, '\"');
                                        break;
                                    case '/':
                                        ret.expansion(1, '/');
                                        break;
                                    case 'b':
                                        ret.expansion(1, '\b');
                                        break;
                                    case 'f':
                                        ret.expansion(1, '\f');
                                        break;
                                    case 'n':
                                        ret.expansion(1, '\n');
                                        break;
                                    case 'r':
                                        ret.expansion(1, '\r');
                                        break;
                                    case 't':
                                        ret.expansion(1, '\t');
                                        break;
                                    case 'u':
                                        this._error = "parse string/unicord escape not supported";
                                        break;
                                    default:
                                        break;
                                }
                            }
                            else {
                                this._error = "parse string/escape error";
                            }
                        }
                    default:
                        {
                            break;
                        }
                }
            }
            this._error = "parse string/illegal end";
            return null;
        };
        /**
         * JSONのオブジェクトエレメントをパースしてValueオブジェクトを返す
         *
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseObject = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonMap();
            // Key: Value
            var key = "";
            var i = begin;
            var c = "";
            var localRetEndPos2 = Array(1);
            var ok = false;
            // , が続く限りループ
            for (; i < length; i++) {
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case '\"':
                            key = this.parseString(buffer, length, i + 1, localRetEndPos2);
                            if (this._error) {
                                return null;
                            }
                            i = localRetEndPos2[0];
                            ok = true;
                            break FOR_LOOP; //-- loopから出る
                        case '}': // 閉じカッコ
                            outEndPos[0] = i + 1;
                            return ret; // 空
                        case ':':
                            this._error = "illegal ':' position";
                            break;
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "key not found";
                    return null;
                }
                ok = false;
                // : をチェック
                FOR_LOOP2: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ':':
                            ok = true;
                            i++;
                            break FOR_LOOP2;
                        case '}':
                            this._error = "illegal '}' position";
                            break;
                        case '\n': this._lineCount++;
                        // case ' ': case '\t' : case '\r':
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "':' not found";
                    return null;
                }
                // 値をチェック
                var value = this.parseValue(buffer, length, i, localRetEndPos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndPos2[0];
                // ret.put(key, value);
                ret.put(key, value);
                FOR_LOOP3: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            break FOR_LOOP3;
                        case '}':
                            outEndPos[0] = i + 1;
                            return ret; // 正常終了
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップ
                    }
                }
            }
            this._error = "illegal end of perseObject";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseArray = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonArray();
            // key : value
            var i = begin;
            var c;
            var localRetEndpos2 = new Array(1);
            // , が続く限りループ
            for (; i < length; i++) {
                // : をチェック
                var value = this.parseValue(buffer, length, i, localRetEndpos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndpos2[0];
                if (value) {
                    ret.add(value);
                }
                // FOR_LOOP3:
                // boolean breakflag = false;
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            // breakflag = true;
                            // break; // 次のKEY, VAlUEへ
                            break FOR_LOOP;
                        case ']':
                            outEndPos[0] = i + 1;
                            return ret; // 終了
                        case '\n':
                            ++this._lineCount;
                        //case ' ': case '\t': case '\r':
                        default:
                            break; // スキップ
                    }
                }
            }
            ret = void 0;
            this._error = "illegal end of parseObject";
            return null;
        };
        return CubismJson;
    }());
    Live2DCubismFramework.CubismJson = CubismJson;
    /**
     * パースしたJSONの要素をfloat値として扱う
     */
    var JsonFloat = /** @class */ (function (_super) {
        __extends(JsonFloat, _super);
        /**
         * コンストラクタ
         */
        function JsonFloat(v) {
            var _this = _super.call(this) || this;
            _this._value = v;
            return _this;
        }
        /**
         * Valueの種類が数値型ならtrue
         */
        JsonFloat.prototype.isFloat = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonFloat.prototype.getString = function (defaultValue, indent) {
            var strbuf = '\0';
            this._value = parseFloat(strbuf);
            this._stringBuffer = strbuf;
            return this._stringBuffer;
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return parseInt(this._value.toString());
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0.0; }
            return this._value;
        };
        JsonFloat.prototype.equals = function (value) {
            if ('number' === typeof (value)) {
                // int
                if (Math.round(value)) {
                    return false;
                }
                // float
                else {
                    return value == this._value;
                }
            }
            return false;
        };
        return JsonFloat;
    }(Value));
    Live2DCubismFramework.JsonFloat = JsonFloat;
    /**
     * パースしたJSONの要素を真偽値として扱う
     */
    var JsonBoolean = /** @class */ (function (_super) {
        __extends(JsonBoolean, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonBoolean(v) {
            var _this = _super.call(this) || this;
            _this._boolValue = v;
            return _this;
        }
        /**
         * Valueの種類が真偽値ならtrue
         */
        JsonBoolean.prototype.isBool = function () {
            return true;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        JsonBoolean.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return this._boolValue;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonBoolean.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = this._boolValue
                ? "true"
                : "false";
            return this._stringBuffer;
        };
        JsonBoolean.prototype.equals = function (value) {
            if ('boolean' === typeof (value)) {
                return value == this._boolValue;
            }
            return false;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonBoolean.prototype.isStatic = function () {
            return true;
        };
        return JsonBoolean;
    }(Value));
    Live2DCubismFramework.JsonBoolean = JsonBoolean;
    /**
     * パースしたJSONの要素を文字列として扱う
     */
    var JsonString = /** @class */ (function (_super) {
        __extends(JsonString, _super);
        function JsonString(s) {
            var _this = _super.call(this) || this;
            if ('string' === typeof (s)) {
                _this._stringBuffer = s;
            }
            if (s instanceof csmString) {
                _this._stringBuffer = s.s;
            }
            return _this;
        }
        /**
         * Valueの種類が文字列ならtrue
         */
        JsonString.prototype.isString = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonString.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        JsonString.prototype.equals = function (value) {
            if ('string' === typeof (value)) {
                return this._stringBuffer == value;
            }
            if (value instanceof csmString) {
                return (this._stringBuffer == value.s);
            }
            return false;
        };
        return JsonString;
    }(Value));
    Live2DCubismFramework.JsonString = JsonString;
    /**
     * JSONパース時のエラー結果。文字列型のようにふるまう
     */
    var JsonError = /** @class */ (function (_super) {
        __extends(JsonError, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonError(s, isStatic) {
            var _this = this;
            if ("string" === typeof (s)) {
                _this = _super.call(this, s) || this;
            }
            else {
                _this = _super.call(this, s) || this;
            }
            _this._isStatic = isStatic;
            return _this;
        }
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        JsonError.prototype.isStatic = function () {
            return this._isStatic;
        };
        /**
         * エラー情報をセットする
         */
        JsonError.prototype.setErrorNotForClientCall = function (s) {
            this._stringBuffer = s;
            return this;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        JsonError.prototype.isError = function () {
            return true;
        };
        return JsonError;
    }(JsonString));
    Live2DCubismFramework.JsonError = JsonError;
    /**
     * パースしたJSONの要素をNULL値として持つ
     */
    var JsonNullvalue = /** @class */ (function (_super) {
        __extends(JsonNullvalue, _super);
        /**
         * コンストラクタ
         */
        function JsonNullvalue() {
            var _this = _super.call(this) || this;
            _this._stringBuffer = "NullValue";
            return _this;
        }
        /**
         * Valueの種類がNULL値ならtrue
         */
        JsonNullvalue.prototype.isNull = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonNullvalue.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonNullvalue.prototype.isStatic = function () {
            return true;
        };
        return JsonNullvalue;
    }(Value));
    Live2DCubismFramework.JsonNullvalue = JsonNullvalue;
    /**
     * パースしたJSONの要素を配列として持つ
     */
    var JsonArray = /** @class */ (function (_super) {
        __extends(JsonArray, _super);
        /**
         * コンストラクタ
         */
        function JsonArray() {
            var _this = _super.call(this) || this;
            _this._array = new csmVector();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonArray.prototype.release = function () {
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()) {
                var v = ite.ptr();
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
            }
        };
        /**
         * Valueの種類が配列ならtrue
         */
        JsonArray.prototype.isArray = function () {
            return true;
        };
        /**
         * 添字演算子[index]
         */
        JsonArray.prototype.getValueByIndex = function (index) {
            if (index < 0 || this._array.getSize() <= index) {
                return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
            }
            var v = this._array.at(index);
            if (v == null) {
                return Value.nullValue;
            }
            return v;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonArray.prototype.getValueByString = function (s) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonArray.prototype.getString = function (defaultValue, indent) {
            var stringBuffer = indent + "[\n";
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()) {
                var v = ite.ptr();
                this._stringBuffer += indent + "" + v.getString(indent + " ") + "\n";
            }
            this._stringBuffer = stringBuffer + indent + "]\n";
            return this._stringBuffer;
        };
        /**
         * 配列要素を追加する
         * @param v 追加する要素
         */
        JsonArray.prototype.add = function (v) {
            this._array.pushBack(v);
        };
        /**
         * 要素をコンテナで返す(csmVector<Value>)
         */
        JsonArray.prototype.getVector = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return this._array;
        };
        /**
         * 要素の数を返す
         */
        JsonArray.prototype.getSize = function () {
            return this._array.getSize();
        };
        return JsonArray;
    }(Value));
    Live2DCubismFramework.JsonArray = JsonArray;
    /**
     * パースしたJSONの要素をマップとして持つ
     */
    var JsonMap = /** @class */ (function (_super) {
        __extends(JsonMap, _super);
        /**
         * コンストラクタ
         */
        function JsonMap() {
            var _this = _super.call(this) || this;
            _this._map = new csmMap();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonMap.prototype.release = function () {
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var v = ite.ptr().second;
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
                ite.preIncrement();
            }
        };
        /**
         * Valueの値がMap型ならtrue
         */
        JsonMap.prototype.isMap = function () {
            return true;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonMap.prototype.getValueByString = function (s) {
            if (s instanceof csmString) {
                var ret = this._map.getValue(s.s);
                if (ret == null) {
                    return Value.nullValue;
                }
                return ret;
            }
            for (var iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()) {
                if (iter.ptr().first == s) {
                    if (iter.ptr().second == null) {
                        return Value.nullValue;
                    }
                    return iter.ptr().second;
                }
            }
            return Value.nullValue;
        };
        /**
         * 添字演算子[index]
         */
        JsonMap.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonMap.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = indent + "{\n";
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var key = ite.ptr().first;
                var v = ite.ptr().second;
                this._stringBuffer += indent + " " + key + " : " + v.getString(indent + "   ") + " \n";
                ite.preIncrement();
            }
            this._stringBuffer += indent + "}\n";
            return this._stringBuffer;
        };
        /**
         * 要素をMap型で返す
         */
        JsonMap.prototype.getMap = function (defaultValue) {
            return this._map;
        };
        /**
         * Mapに要素を追加する
         */
        JsonMap.prototype.put = function (key, v) {
            this._map.setValue(key, v);
        };
        /**
         * Mapからキーのリストを取得する
         */
        JsonMap.prototype.getKeys = function () {
            if (!this._keys) {
                this._keys = new csmVector();
                var ite = this._map.begin();
                while (ite.notEqual(this._map.end())) {
                    var key = ite.ptr().first;
                    this._keys.pushBack(key);
                    ite.preIncrement();
                }
            }
            return this._keys;
        };
        /**
         * Mapの要素数を取得する
         */
        JsonMap.prototype.getSize = function () {
            return this._keys.getSize();
        };
        return JsonMap;
    }(Value));
    Live2DCubismFramework.JsonMap = JsonMap;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlcl9XZWJHTC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtcmVjdGYudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWpzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7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Q0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDcEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDdEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFbEkseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2pJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2pJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2hJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzVILElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBRWxJLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNqSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNqSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNoSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNoSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1SCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENB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QUFDLElBQUksQ0FBQyxLQUFLLEVBQ2Y7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBVSxDQUFDO2dCQUVyQyxJQUFNLEdBQUcsR0FBbUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFOUQsT0FBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbkM7b0JBQ0ksSUFBTSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFLTCxjQUFDO0lBQUQsQ0FBQyxDQXBKNEIsS0FBSyxHQW9KakM7SUFwSlksNkJBQU8sVUFvSm5CO0FBQ0wsQ0FBQyxFQTd6Q2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE2ekNyQyIsImZpbGUiOiIvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyX1dlYkdMLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyX1dlYkdMLnRzXCIpO1xuIiwiLypcbiogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4qIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiovXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICDjg63jgrDlh7rlipvplqLmlbDjga7oqK3lrppcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8tLS0tLS0tLS0tIOODreOCsOWHuuWKm+ODrOODmeODqyDpgbjmip7poIXnm64g5a6a576pIC0tLS0tLS0tLS1cbi8vLyDoqbPntLDjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX1ZFUkJPU0U6IG51bWJlciA9IDA7XG4vLy8g44OH44OQ44OD44Kw44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9ERUJVRzogbnVtYmVyID0gMTtcbi8vLyBJbmZv44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9JTkZPOiBudW1iZXIgPSAyO1xuLy8vIOitpuWRiuODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfV0FSTklORzogbnVtYmVyID0gMztcbi8vLyDjgqjjg6njg7zjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0VSUk9SOiBudW1iZXIgPSA0O1xuLy8vIOODreOCsOWHuuWKm+OCquODleioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfT0ZGOiBudW1iZXIgPSA1O1xuXG4vKipcbiog44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44CCXG4qXG4qIOW8t+WItueahOOBq+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuWkieOBiOOCi+aZguOBq+Wumue+qeOCkuacieWKueOBq+OBmeOCi+OAglxuKiBDU01fTE9HX0xFVkVMX1ZFUkJPU0Ug772eIENTTV9MT0dfTEVWRUxfT0ZGIOOCkumBuOaKnuOBmeOCi+OAglxuKi9cbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMOiBudW1iZXIgPSBDU01fTE9HX0xFVkVMX1ZFUkJPU0U7IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIOODkeODqeODoeODvOOCv+WQjeODu+ODkeODvOODhOWQjeODu0RyYXdhYmxl5ZCN44KS5L+d5oyBXG4gICAgICogXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIHjgZnjgovjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZygpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZyB8IGNzbVN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodHlwZW9mKGlkKSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSBuZXcgY3NtU3RyaW5nKGlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogaWTjgpLmr5TovINcbiAgICAgICAgICogQHBhcmFtIGMg5q+U6LyD44GZ44KLaWRcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcXVhbChjOiBzdHJpbmcgfCBjc21TdHJpbmcgfCBDdWJpc21JZCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogaWTjgpLmr5TovINcbiAgICAgICAgICogQHBhcmFtIGMg5q+U6LyD44GZ44KLaWRcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOb3RFcXVhbChjOiBzdHJpbmcgfCBjc21TdHJpbmcgfCBDdWJpc21JZCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2lkOiBjc21TdHJpbmc7IC8vIElE5ZCNXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlY2xhcmUgdHlwZSBDdWJpc21JZEhhbmRsZSA9IEN1YmlzbUlkO1xufSIsIi8qXG4qIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4qL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gXCIuL2N1YmlzbWlkXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5pbXBvcnQgQ3ViaXNtSWQgPSBjdWJpc21pZC5DdWJpc21JZDtcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIElE5ZCN44Gu566h55CGXG4gICAgICogXG4gICAgICogSUTlkI3jgpLnrqHnkIbjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRNYW5hZ2VyXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkPigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWRzLnNldChpLCB2b2lkIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWRzID0gIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkuODquOCueODiOOBi+OCieeZu+mMslxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGlkcyBJROWQjeODquOCueODiFxuICAgICAgICAgKiBAcGFyYW0gY291bnQgSUTjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkcyhpZHM6IHN0cmluZ1tdIHwgY3NtU3RyaW5nW10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVySWQoaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOCkueZu+mMslxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZChpZDogc3RyaW5nIHwgY3NtU3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDogQ3ViaXNtSWQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuZmluZElkKGlkKSkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEN1YmlzbUlkKGlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMucHVzaEJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldElkKGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44Gu56K66KqNXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmZpbmRJZChpZCkgIT0gbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0V4aXN0KGlkLnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLmpJzntKLjgZnjgovjgIJcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxuICAgICAgICAgKiBAcmV0dXJuIOeZu+mMsuOBleOCjOOBpuOBhOOCi0lE44CC44Gq44GR44KM44GwTlVMTOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBmaW5kSWQoaWQ6IHN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9pZHMuYXQoaSkuZ2V0U3RyaW5nKCkuaXNFcXVhbChpZCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWRzLmF0KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9pZHM6IGNzbVZlY3RvcjxDdWJpc21JZD47ICAgLy8g55m76Yyy44GV44KM44Gm44GE44KLSUTjga7jg6rjgrnjg4hcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvcmUvbGl2ZTJkY3ViaXNtY29yZS5kLnRzXCIgLz5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWpzb259IGZyb20gXCIuL3V0aWxzL2N1YmlzbWpzb25cIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkbWFuYWdlcn0gZnJvbSBcIi4vaWQvY3ViaXNtaWRtYW5hZ2VyXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21yZW5kZXJlcn0gZnJvbSBcIi4vcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyXCI7XG5pbXBvcnQge0N1YmlzbUxvZ0luZm8sIEN1YmlzbUxvZ1dhcm5pbmcsIENTTV9BU1NFUlR9IGZyb20gXCIuL3V0aWxzL2N1YmlzbWRlYnVnXCI7XG5pbXBvcnQgVmFsdWUgPSBjdWJpc21qc29uLlZhbHVlO1xuaW1wb3J0IEN1YmlzbUlkTWFuYWdlciA9IGN1YmlzbWlkbWFuYWdlci5DdWJpc21JZE1hbmFnZXI7XG5pbXBvcnQgQ3ViaXNtUmVuZGVyZXIgPSBjdWJpc21yZW5kZXJlci5DdWJpc21SZW5kZXJlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cnRvZChzOiBzdHJpbmcsIGVuZFB0cjogc3RyaW5nW10pOiBudW1iZXJcbntcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgZm9yKGxldCBpOiBudW1iZXIgPSAxOyA7IGkrKylcbiAgICB7XG4gICAgICAgIGxldCB0ZXN0Qzogc3RyaW5nID0gcy5zbGljZShpIC0gMSwgaSk7XG5cbiAgICAgICAgLy8g5oyH5pWw44O744Oe44Kk44OK44K544Gu5Y+v6IO95oCn44GM44GC44KL44Gu44Gn44K544Kt44OD44OX44GZ44KLXG4gICAgICAgIGlmKHRlc3RDPT0nZScgfHwgdGVzdEM9PSctJyB8fCB0ZXN0QyA9PSAnRScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbuOAgOOAgOOAgCAgLy8g5paH5a2X5YiX44Gu56+E5Zuy44KS5bqD44GS44Gm44GE44GPXG4gICAgICAgIGxldCB0ZXN0OiBzdHJpbmcgPSBzLnN1YnN0cmluZygwLCBpKTtcbiAgICAgICAgbGV0IG51bWJlcjogbnVtYmVyID0gTnVtYmVyKHRlc3QpO1xuICAgICAgICBpZihpc05hTihudW1iZXIpKVxuICAgICAgICB7XG7jgIDjgIDjgIDjgIAgICAgLy8g5pWw5YCk44Go44GX44Gm6KqN6K2Y44Gn44GN44Gq44GP44Gq44Gj44Gf44Gu44Gn57WC5LqGXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG7jgIDjgIDjgIAgLy8g5pyA5b6M44Gr5pWw5YCk44Go44GX44Gm44Gn44GN44GfaW5kZXjjgpLmoLzntI3jgZfjgabjgYrjgY9cbiAgICAgICAgaW5kZXggPSBpO1xuICAgIH1cbiAgICBsZXQgZCA9IHBhcnNlRmxvYXQocyk7ICAvLyDjg5Hjg7zjgrnjgZfjgZ/mlbDlgKRcblxuICAgIGlmKGlzTmFOKGQpKVxuICAgIHtcbuOAgOOAgOOAgOOAgCAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcbiAgICAgICAgZCA9IE5hTjtcbiAgICB9XG5cbiAgICBlbmRQdHJbMF0gPSBzLnNsaWNlKGluZGV4KTvjgIAvLyDlvozntprjga7mloflrZfliJdcblxuICAgIHJldHVybiBkO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8vIOODleOCoeOCpOODq+OCueOCs+ODvOODl+OBruWkieaVsOOCkuWIneacn+WMllxuICAgIFxuICAgIGxldCBzX2lzU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc19vcHRpb246IE9wdGlvbiA9IG51bGw7XG4gICAgbGV0IHNfY3ViaXNtSWRNYW5hZ2VyOiBDdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuICAgIFxuICAgIC8qKlxuICAgICAqIEZyYW1ld29ya+WGheOBp+S9v+OBhuWumuaVsOOBruWuo+iogFxuICAgICAqL1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29uc3RhbnRcbiAgICB7XG4gICAgICAgIGV4cG9ydCBjb25zdCB2ZXJ0ZXhPZmZzZXQ6IG51bWJlciA9IDA7ICAgICAvLyDjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqrjg5Xjgrvjg4Pjg4jlgKRcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleFN0ZXA6IG51bWJlciA9IDI7ICAgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCueODhuODg+ODl+WApFxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBjc21EZWxldGU8VD4oYWRkcmVzczogVCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCFhZGRyZXNzKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhZGRyZXNzID0gdm9pZCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpdmUyRCBDdWJpc20zIE9yaWdpbmFsIFdvcmtmbG93IFNES+OBruOCqOODs+ODiOODquODneOCpOODs+ODiFxuICAgICAqIOWIqeeUqOmWi+Wni+aZguOBr0N1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnjgpLlkbzjgbPjgIFDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgp44Gn57WC5LqG44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUZyYW1ld29ya1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjlj6/og73jgavjgZnjgovjgIJcbiAgICAgICAgICogIEFQSeOCkuWun+ihjOOBmeOCi+WJjeOBq+W/heOBmuOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOAglxuICAgICAgICAgKiAg5LiA5bqm5rqW5YKZ44GM5a6M5LqG44GX44Gm5Lul6ZmN44Gv44CB5YaN44Gz5a6f6KGM44GX44Gm44KC5YaF6YOo5Yem55CG44GM44K544Kt44OD44OX44GV44KM44G+44GZ44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgICBvcHRpb24gICAgICBPcHRpb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAgIOa6luWCmeWHpueQhuOBjOWujOS6huOBl+OBn+OCiXRydWXjgYzov5Tjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRVcChvcHRpb246IE9wdGlvbiA9IG51bGwpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCgpIGlzIGFscmVhZHkgZG9uZS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzX29wdGlvbiA9IG9wdGlvbjtcblxuICAgICAgICAgICAgaWYoc19vcHRpb24gIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtU2V0TG9nRnVuY3Rpb24oc19vcHRpb24ubG9nRnVuY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzX2lzU3RhcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIExpdmUyRCBDdWJpc20gQ29yZeODkOODvOOCuOODp+ODs+aDheWgseOCkuihqOekulxuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbjogbnVtYmVyID0gTGl2ZTJEQ3ViaXNtQ29yZS5WZXJzaW9uLmNzbUdldFZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWpvcjogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHhGRjAwMDAwMCkgPj4gMjQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbm9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweDAwRkYwMDAwKSA+PiAxNik7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2g6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDAwMEZGRkYpKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uTnVtYmVyOiBudW1iZXIgPSB2ZXJzaW9uO1xuXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhgTGl2ZTJEIEN1YmlzbSBDb3JlIHZlcnNpb246IHswfS57MX0uezJ9ICh7M30pYCwgXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWFqb3IpLnNsaWNlKC0yKSxcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtaW5vcikuc2xpY2UoLTIpLFxuICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgcGF0Y2gpLnNsaWNlKC00KSxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbk51bWJlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCgpIGlzIGNvbXBsZXRlLlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0VXAoKeOBp+WIneacn+WMluOBl+OBn0N1YmlzbUZyYW1ld29ya+OBruWQhOODkeODqeODoeODvOOCv+OCkuOCr+ODquOCouOBl+OBvuOBmeOAglxuICAgICAgICAgKiBEaXNwb3NlKCnjgZfjgZ9DdWJpc21GcmFtZXdvcmvjgpLlho3liKnnlKjjgZnjgovpmpvjgavliKnnlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2xlYW5VcCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNfb3B0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu44Oq44K944O844K544KS5Yid5pyf5YyW44GX44Gm44Oi44OH44Or44KS6KGo56S65Y+v6IO944Gq54q25oWL44Gr44GX44G+44GZ44CCPGJyPlxuICAgICAgICAgKiAgICAg5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovpgKPntprliJ3mnJ/ljJbjgqzjg7zjg4kgLS0tXG4gICAgICAgICAgICAvLyDpgKPntprjgZfjgabjg6rjgr3jg7zjgrnnorrkv53jgYzooYzjgo/jgozjgarjgYTjgojjgYbjgavjgZnjgovjgIJcbiAgICAgICAgICAgIC8vIOWGjeW6pkluaXRpYWxpemUoKeOBmeOCi+OBq+OBr+WFiOOBq0Rpc3Bvc2UoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxuICAgICAgICAgICAgaWYgKHNfaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBza2lwcGVkLCBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vLS0tLSBzdGF0aWMg5Yid5pyf5YyWIC0tLS1cbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk7XG5cbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbmV3IEN1YmlzbUlkTWFuYWdlcigpO1xuXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBpcyBjb21wbGV0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruWFqOOBpuOBruODquOCveODvOOCueOCkuino+aUvuOBl+OBvuOBmeOAglxuICAgICAgICAgKiAgICAgIOOBn+OBoOOBl+OAgeWklumDqOOBp+eiuuS/neOBleOCjOOBn+ODquOCveODvOOCueOBq+OBpOOBhOOBpuOBr+ino+aUvuOBl+OBvuOBm+OCk+OAglxuICAgICAgICAgKiAgICAgIOWklumDqOOBp+mBqeWIh+OBq+egtOajhOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkaXNwb3NlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL5pyq5Yid5pyf5YyW6Kej5pS+44Ks44O844OJIC0tLVxuICAgICAgICAgICAgLy8gZGlzcG9zZSgp44GZ44KL44Gr44Gv5YWI44GraW5pdGlhbGl6ZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgICAgICAgICBpZighc19pc0luaXRpYWxpemVkKSAgICAvLyBmYWxzZS4uLuODquOCveODvOOCueacqueiuuS/neOBruWgtOWQiFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIHNraXBwZWQsIG5vdCBpbml0aWFsaXplZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWYWx1ZS5zdGF0aWNSZWxlYXNlTm90Rm9yQ2xpZW50Q2FsbCgpO1xuXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlci5yZWxlYXNlKCk7XG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIOODrOODs+ODgOODqeOBrumdmeeahOODquOCveODvOOCue+8iOOCt+OCp+ODvOODgOODl+ODreOCsOODqeODoOS7lu+8ieOCkuino+aUvuOBmeOCi1xuICAgICAgICAgICAgQ3ViaXNtUmVuZGVyZXIuc3RhdGljUmVsZWFzZSgpO1xuXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgaXMgY29tcGxldGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gf44GL44Gp44GG44GLXG4gICAgICAgICAqIEByZXR1cm4gQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpc1N0YXJ0ZWQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44Gu44Oq44K944O844K55Yid5pyf5YyW44GM44GZ44Gn44Gr6KGM44KP44KM44Gm44GE44KL44GL44Gp44GG44GLXG4gICAgICAgICAqIEByZXR1cm4g44Oq44K944O844K556K65L+d44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfaXNJbml0aWFsaXplZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb3JlIEFQSeOBq+ODkOOCpOODs+ODieOBl+OBn+ODreOCsOmWouaVsOOCkuWun+ihjOOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHByYXJhbSBtZXNzYWdlIOODreOCsOODoeODg+OCu+ODvOOCuFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjb3JlTG9nRnVuY3Rpb24obWVzc2FnZTogc3RyaW5nKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gaWYgbG9nZ2luZyBub3QgcG9zc2libGUuXG4gICAgICAgICAgICBpZighTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbUdldExvZ0Z1bmN0aW9uKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKShtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApOOCkui/lOOBmeOAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9nZ2luZ0xldmVsKCk6IExvZ0xldmVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBzX29wdGlvbi5sb2dnaW5nTGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuTG9nTGV2ZWxfT2ZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE44Oe44ON44O844K444Oj44Gu44Kk44Oz44K544K/44Oz44K544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gQ3ViaXNtTWFuYWdlcuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJZE1hbmFnZXIoKTogQ3ViaXNtSWRNYW5hZ2VyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2N1YmlzbUlkTWFuYWdlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpnZnnmoTjgq/jg6njgrnjgajjgZfjgabkvb/nlKjjgZnjgotcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K55YyW44GV44Gb44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25cbntcbiAgICBsb2dGdW5jdGlvbjogTGl2ZTJEQ3ViaXNtQ29yZS5jc21Mb2dGdW5jdGlvbjsgICAvLyDjg63jgrDlh7rlipvjga7plqLmlbDjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICBsb2dnaW5nTGV2ZWw6IExvZ0xldmVsOyAgLy8g44Ot44Kw5Ye65Yqb44Os44OZ44Or44Gu6Kit5a6aXG59XG5cbi8qKlxuICog44Ot44Kw5Ye65Yqb44Gu44Os44OZ44OrXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVsXG57XG4gICAgTG9nTGV2ZWxfVmVyYm9zZSA9IDAsICAgLy8g6Kmz57Sw44Ot44KwXG4gICAgTG9nTGV2ZWxfRGVidWcsICAgICAgICAgLy8g44OH44OQ44OD44Kw44Ot44KwXG4gICAgTG9nTGV2ZWxfSW5mbywgICAgICAgICAgLy8gSW5mb+ODreOCsFxuICAgIExvZ0xldmVsX1dhcm5pbmcsICAgICAgIC8vIOitpuWRiuODreOCsFxuICAgIExvZ0xldmVsX0Vycm9yLCAgICAgICAgIC8vIOOCqOODqeODvOODreOCsFxuICAgIExvZ0xldmVsX09mZiAgICAgICAgICAgIC8vIOODreOCsOWHuuWKm+eEoeWKuVxufVxuIiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiA0eDTjga7ooYzliJdcbiAgICAgKiBcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0cml4NDRcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XG4gICAgICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWPl+OBkeWPluOBo+OBn++8kuOBpOOBruihjOWIl+OBruS5l+eul+OCkuihjOOBhuOAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGEg6KGM5YiXYVxuICAgICAgICAgKiBAcGFyYW0gYiDooYzliJdiXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IEZsb2F0MzJBcnJheSwgYjogRmxvYXQzMkFycmF5LCBkc3Q6IEZsb2F0MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gNDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBuOyArK2opXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs6IG51bWJlciA9IDA7IGsgPCBuOyArK2spXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNbaiArIGkgKiA0XSArPSBhW2sgKyBpICogNF0gKiBiW2ogKyBrICogNF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDE2OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gY1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJbjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBsb2FkSWRlbnRpdHkoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cml4KGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihjOWIl+OCkuioreWumlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHRyIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxNjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyW2ldID0gdHJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoKTogRmxvYXQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5ouh5aSn546H44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7mi6HlpKfnjofjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNjYWxlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxM107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHNyYyBY6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm4g54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWOi7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF0gKiBzcmMgKyB0aGlzLl90clsxMl07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gc3JjIFnou7jjga7lgKRcbiAgICAgICAgICogQHJldHVybuOAgOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1nou7jjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XSAqIHNyYyArIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEyXSkgLyB0aGlzLl90clswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEzXSkgLyB0aGlzLl90cls1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnp7vli5VcbiAgICAgICAgICogXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuebuOWvvueahOOBq+enu+WLleOBmeOCi+OAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLjAsICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMS4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIHksICAgICAgMC4wLCAgICAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXG4gICAgICAgICAqIFxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgeei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWOi7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVZKHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuebuOWvvueahOOBq+ioreWumuOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6bnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsIFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLmjIflrprjgZfjgZ/lgI3njofjgavoqK3lrprjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clswXSA9IHg7XG4gICAgICAgICAgICB0aGlzLl90cls1XSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gr6KGM5YiX44KS5LmX566XXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBtIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlNYXRyaXgobTogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KG0uZ2V0QXJyYXkoKSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqrjg5bjgrjjgqfjgq/jg4jjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOiBDdWJpc21NYXRyaXg0NFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY2xvbmVNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsb25lTWF0cml4Ll90cltpXSA9IHRoaXMuX3RyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgX3RyOiBGbG9hdDMyQXJyYXk7ICAgIC8vIDR4NOihjOWIl+ODh+ODvOOCv1xuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tYXRyaXg0NH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XG5pbXBvcnQgQ3ViaXNtTWF0cml4NDQgPSBjdWJpc21tYXRyaXg0NC5DdWJpc21NYXRyaXg0NDtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjgpLlh6bnkIbjgZnjgovjg6zjg7Pjg4Djg6lcbiAgICAgKiBcbiAgICAgKiDjgrXjg5bjgq/jg6njgrnjgavnkrDlooPkvp3lrZjjga7mj4/nlLvlkb3ku6TjgpLoqJjov7DjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3ViaXNtUmVuZGVyZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZfjgablj5blvpfjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBDdWJpc21SZW5kZXJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLop6PmlL7jgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKHJlbmRlcmVyOiBDdWJpc21SZW5kZXJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xuICAgICAgICAgKiDlvJXmlbDjgavmuKHjgZfjgZ/jg6Ljg4fjg6vjgYvjgonjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgavlv4XopoHjgarmg4XloLHjgpLlj5bjgorlh7rjgZnjgZPjgajjgYzjgafjgY3jgotcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGluaXRpYWxpemUobW9kZWw6IEN1YmlzbU1vZGVsKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRyYXdNb2RlbCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0TW9kZWwoKSA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuZG9EcmF3TW9kZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOmFjeWIl+OBr+ikh+ijveOBleOCjOOCi+OBruOBp+OAgeWFg+OBrumFjeWIl+OBr+WkluOBp+egtOajhOOBl+OBpuiJr+OBhFxuICAgICAgICAgKiBAcGFyYW0gbWF0cml4NDQgTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldE12cE1hdHJpeChtYXRyaXg0NDogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5zZXRNYXRyaXgobWF0cml4NDQuZ2V0QXJyYXkoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNdnBNYXRyaXgoKTogQ3ViaXNtTWF0cml4NDRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX212cE1hdHJpeDR4NDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog5ZCE6ImyMC4wfjEuMOOBrumWk+OBp+aMh+WumuOBmeOCi++8iDEuMOOBjOaomea6luOBrueKtuaFi++8iVxuICAgICAgICAgKiBAcGFyYW0gcmVkIOi1pOODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gZ3JlZW4g57eR44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSBibHVlIOmdkuODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gYWxwaGEgzrHjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNb2RlbENvbG9yKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIsIGFscGhhOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlZCA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWQgPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlZCA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWQgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGdyZWVuIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdyZWVuID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihncmVlbiA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBncmVlbiA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYmx1ZSA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBibHVlID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihibHVlID4gMS4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJsdWUgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGFscGhhIDwgMC4wKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFscGhhID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihhbHBoYSA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDEuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5SID0gcmVkO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5HID0gZ3JlZW47XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkIgPSBibHVlO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5BID0gYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgosoMS4w44GM5qiZ5rqW44Gu54q25oWLKVxuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiBSR0JB44Gu44Kr44Op44O85oOF5aCxXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW9kZWxDb2xvcigpOiBDdWJpc21UZXh0dXJlQ29sb3JcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fbW9kZWxDb2xvcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldElzUHJlbXVsdGlwbGllZEFscGhhKGVuYWJsZTogYm9vbGVhbik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBlbmFibGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiB0cnVlIOS5l+eul+a4iOOBv+OBrs6x5pyJ5Yq5XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5LmX566X5riI44G/44GuzrHnhKHlirlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1ByZW11bHRpcGxpZWRBbHBoYSgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqvjg6rjg7PjgrDvvIjniYfpnaLmj4/nlLvvvInjga7mnInlirnjg7vnhKHlirnjgpLjgrvjg4Pjg4jjgZnjgovjgIJcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SXNDdWxsaW5nKGN1bGxpbmc6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGN1bGxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KL44CCXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgqvjg6rjg7PjgrDmnInlirlcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgqvjg6rjg7PjgrDnhKHlirlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0N1bGxpbmcoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNDdWxsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lgKTjga7lvbHpn7/luqbjga/jg6zjg7Pjg4Djg6njga7lrp/oo4Xjgavkvp3lrZjjgZnjgotcbiAgICAgICAgICogQHBhcmFtIG4g44OR44Op44Oh44O844K/44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0QW5pc290cm9weShuOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSBuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QW5pc290cm9weSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvcnRvcHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44Or44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44OrXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TW9kZWwoKTogQ3ViaXNtTW9kZWxcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faXNDdWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fYW5pc29ydG9weSA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IgPSBuZXcgQ3ViaXNtVGV4dHVyZUNvbG9yKCk7XG5cbiAgICAgICAgICAgIC8vIOWNmOS9jeihjOWIl+OBq+WIneacn+WMllxuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQubG9hZElkZW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or5o+P55S744Gu5a6f6KOFXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZG9EcmF3TW9kZWwoKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5o+P55S744Kq44OW44K444Kn44Kv44OI77yI44Ki44O844OI44Oh44OD44K344Ol77yJ44KS5o+P55S744GZ44KLXG4gICAgICAgICAqIOODneODquOCtOODs+ODoeODg+OCt+ODpeOBqOODhuOCr+OCueODgeODo+eVquWPt+OCkuOCu+ODg+ODiOOBp+a4oeOBmeOAglxuICAgICAgICAgKiBAcGFyYW0gdGV4dHVyZU5vIOaPj+eUu+OBmeOCi+ODhuOCr+OCueODgeODo+eVquWPt1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXhDb3VudCDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHBhcmFtIHZlcnRleENvdW50IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCueaVsFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrnphY3liJdcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gdXZBcnJheSB1dumFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gb3BhY2l0eSDkuI3pgI/mmI7luqZcbiAgICAgICAgICogQHBhcmFtIGNvbG9yQmxlbmRNb2RlIOOCq+ODqeODvOODluODrOODs+ODh+OCo+ODs+OCsOOBruOCv+OCpOODl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRyYXdNZXNoKHRleHR1cmVObzogbnVtYmVyLCBpbmRleENvdW50OiBudW1iZXIsIHZlcnRleENvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEFycmF5OiBVaW50MTZBcnJheSwgdmVydGV4QXJyYXk6IEZsb2F0MzJBcnJheSwgdXZBcnJheTogRmxvYXQzMkFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogbnVtYmVyLCBjb2xvckJsZW5kTW9kZTogQ3ViaXNtQmxlbmRNb2RlKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44GM5L+d5oyB44GZ44KL6Z2Z55qE44Gq44Oq44K944O844K544KS6ZaL5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2U6IEZ1bmN0aW9uO1xuXG4gICAgICAgIHByb3RlY3RlZCBfbXZwTWF0cml4NHg0OiBDdWJpc21NYXRyaXg0NDsgICAgICAgICAgICAgICAgICAvLyBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWxDb2xvcjogQ3ViaXNtVGV4dHVyZUNvbG9yOyAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6voh6rkvZPjga7jgqvjg6njg7zvvIhSR0JB77yJXG4gICAgICAgIHByb3RlY3RlZCBfaXNDdWxsaW5nOiBib29sZWFuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgqvjg6rjg7PjgrDjgYzmnInlirnjgarjgol0cnVlXG4gICAgICAgIHByb3RlY3RlZCBfaXNQcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAvLyDkuZfnrpfmuIjjgb/OseOBquOCiXRydWVcbiAgICAgICAgcHJvdGVjdGVkIF9hbmlzb3J0b3B5OiBhbnk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsOiBDdWJpc21Nb2RlbDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44Oz44OA44Oq44Oz44Kw5a++6LGh44Gu44Oi44OH44OrXG4gICAgfVxuXG4gICAgZXhwb3J0IGVudW0gQ3ViaXNtQmxlbmRNb2RlXG4gICAge1xuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTm9ybWFsID0gMCwgICAgICAgICAvLyDpgJrluLhcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX0FkZGl0aXZlID0gMSwgICAgICAgLy8g5Yqg566XXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9NdWx0aXBsaWNhdGl2ZSA9IDIsIC8vIOS5l+eul1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7oibLjgpJSR0JB44Gn5omx44GG44Gf44KB44Gu44Kv44Op44K5XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVRleHR1cmVDb2xvclxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLlIgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLkcgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLkIgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLkEgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBSOiBudW1iZXI7ICAvLyDotaTjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgRzogbnVtYmVyOyAgLy8g57eR44OB44Oj44Oz44ON44OrXG4gICAgICAgIEI6IG51bWJlcjsgIC8vIOmdkuODgeODo+ODs+ODjeODq1xuICAgICAgICBBOiBudW1iZXI7ICAvLyDOseODgeODo+ODs+ODjeODq1xuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmt9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXJlY3R9IGZyb20gXCIuLi90eXBlL2NzbXJlY3RmXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21yZW5kZXJlcn0gZnJvbSBcIi4vY3ViaXNtcmVuZGVyZXJcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vZGVsfSBmcm9tIFwiLi4vbW9kZWwvY3ViaXNtbW9kZWxcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YnNpbW1hdHJpeDQ0fSBmcm9tIFwiLi4vbWF0aC9jdWJpc21tYXRyaXg0NFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0N1YmlzbUxvZ0Vycm9yfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcbmltcG9ydCBDb25zdGFudCA9IGN1YmlzbWZyYW1ld29yay5Db25zdGFudDtcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YnNpbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xuaW1wb3J0IGNzbVJlY3QgPSBjc21yZWN0LmNzbVJlY3Q7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XG5pbXBvcnQgQ3ViaXNtUmVuZGVyZXIgPSBjdWJpc21yZW5kZXJlci5DdWJpc21SZW5kZXJlcjtcbmltcG9ydCBDdWJpc21CbGVuZE1vZGUgPSBjdWJpc21yZW5kZXJlci5DdWJpc21CbGVuZE1vZGU7XG5pbXBvcnQgQ3ViaXNtVGV4dHVyZUNvbG9yID0gY3ViaXNtcmVuZGVyZXIuQ3ViaXNtVGV4dHVyZUNvbG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIGNvbnN0IENvbG9yQ2hhbm5lbENvdW50OiBudW1iZXIgPSA0OyAgICAvLyDlrp/pqJPmmYLjgasx44OB44Oj44Oz44ON44Or44Gu5aC05ZCI44GvMeOAgVJHQuOBoOOBkeOBruWgtOWQiOOBrzPjgIHjgqLjg6vjg5XjgqHjgoLlkKvjgoHjgovloLTlkIjjga80XG5cbiAgICBjb25zdCBzaGFkZXJDb3VudDogbnVtYmVyID0gNzsgLy8g44K344Kn44O844OA44O844Gu5pWwID0g44Oe44K544Kv55Sf5oiQ55SoICsgKOmAmuW4uOeUqCArIOWKoOeulyArIOS5l+eulykgKiAo44Oe44K544Kv54Sh44Gu5LmX566X5riI44Ki44Or44OV44Kh5a++5b+c54mIICsg44Oe44K544Kv5pyJ44Gu5LmX566X5riI44Ki44Or44OV44Kh5a++5b+c54mIKVxuICAgIGxldCBzX2luc3RhbmNlOiBDdWJpc21TaGFkZXJfV2ViR0w7XG4gICAgbGV0IHNfdmlld3BvcnQ6IG51bWJlcltdO1xuICAgIGxldCBzX2ZibzogV2ViR0xGcmFtZWJ1ZmZlcjtcblxuICAgIC8qKlxuICAgICAqIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OBruWHpueQhuOCkuWun+ihjOOBmeOCi+OCr+ODqeOCuVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21DbGlwcGluZ01hbmFnZXJfV2ViR0xcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqvjg6njg7zjg4Hjg6Pjg7Pjg43jg6vvvIhSR0JB77yJ44Gu44OV44Op44Kw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBjaGFubmVsTm8g44Kr44Op44O844OB44Oj44Oz44ON44Or77yIUkdCQe+8ieOBrueVquWPt++8iDA6UiwgMTpHLCAyOkIsIDM6Qe+8iVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldENoYW5uZWxGbGFnQXNDb2xvcihjaGFubmVsTm86IG51bWJlcik6IEN1YmlzbVRleHR1cmVDb2xvclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhbm5lbENvbG9ycy5hdChjaGFubmVsTm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuODs+ODneODqeODquOBruODrOODs+ODgOODvOODhuOCr+OCueODgeODo+OBruOCouODieODrOOCueOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBGcmFtZUJ1ZmZlck9iamVjdOOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOAgeaWsOOBl+OBj+eUn+aIkOOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg7zjg4bjgq/jgrnjg4Hjg6Pjga7jgqLjg4njg6zjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXNrUmVuZGVyVGV4dHVyZSgpOiBXZWJHTEZyYW1lYnVmZmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IFdlYkdMRnJhbWVidWZmZXIgPSAwO1xuXG4gICAgICAgICAgICAvLyDjg4bjg7Pjg53jg6njg6rjga5SZW5kZXJUZXh0dXJl44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAgICBpZih0aGlzLl9tYXNrVGV4dHVyZSAmJiB0aGlzLl9tYXNrVGV4dHVyZS50ZXh0dXJlICE9IDApICAvLyDliY3lm57kvb/jgaPjgZ/jgoLjga7jgpLov5TjgZlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrVGV4dHVyZS5mcmFtZU5vID0gdGhpcy5fY3VycmVudEZyYW1lTm87XG4gICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5fbWFza1RleHR1cmUudGV4dHVyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmV0ID09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gRnJhbWVCdWZmZXJPYmplY3TjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjgIHmlrDjgZfjgY/nlJ/miJDjgZnjgotcblxuICAgICAgICAgICAgICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODkOODg+ODleOCoeOCteOCpOOCuuOCkuWPluW+l1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemU6IG51bWJlciA9IHRoaXMuX2NsaXBwaW5nTWFza0J1ZmZlclNpemU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLl9jb2xvckJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCAsdGhpcy5nbC5SR0JBLCBzaXplLCBzaXplLCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLmdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG5cbiAgICAgICAgICAgICAgICByZXQgPSB0aGlzLmdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgcmV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZ2wuQ09MT1JfQVRUQUNITUVOVDAsIHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5fY29sb3JCdWZmZXIsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHNfZmJvKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX21hc2tUZXh0dXJlID0gbmV3IEN1YmlzbVJlbmRlclRleHR1cmVSZXNvdXJjZSh0aGlzLl9jdXJyZW50RnJhbWVObywgcmV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZWJHTOODrOODs+ODgOODquODs+OCsOOCs+ODs+ODhuOCreOCueODiOOCkuioreWumuOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZ2wgV2ViR0zjg6zjg7Pjg4Djg6rjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRHTChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oe44K544Kv44GV44KM44KL5o+P55S744Kq44OW44K444Kn44Kv44OI576k5YWo5L2T44KS5Zuy44KA55+p5b2i77yI44Oi44OH44Or5bqn5qiZ57O777yJ44KS6KiI566X44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICogQHBhcmFtIGNsaXBwaW5nQ29udGV4dCDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7jgrPjg7Pjg4bjgq3jgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjYWxjQ2xpcHBlZERyYXdUb3RhbEJvdW5kcyhtb2RlbDogQ3ViaXNtTW9kZWwsIGNsaXBwaW5nQ29udGV4dDogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDooqvjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/vvIjjg57jgrnjgq/jgZXjgozjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvInjga7lhajkvZPjga7nn6nlvaJcbiAgICAgICAgICAgIGxldCBjbGlwcGVkRHJhd1RvdGFsTWluWDogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIGxldCBjbGlwcGVkRHJhd1RvdGFsTWluWTogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIGxldCBjbGlwcGVkRHJhd1RvdGFsTWF4WDogbnVtYmVyID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgICAgIGxldCBjbGlwcGVkRHJhd1RvdGFsTWF4WTogbnVtYmVyID0gTnVtYmVyLk1JTl9WQUxVRTtcblxuICAgICAgICAgICAgLy8g44GT44Gu44Oe44K544Kv44GM5a6f6Zqb44Gr5b+F6KaB44GL5Yik5a6a44GZ44KLXG4gICAgICAgICAgICAvLyDjgZPjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjgpLliKnnlKjjgZnjgovjgIzmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjgI3jgYzjgbLjgajjgaTjgafjgoLkvb/nlKjlj6/og73jgafjgYLjgozjgbDjg57jgrnjgq/jgpLnlJ/miJDjgZnjgovlv4XopoHjgYzjgYLjgotcbiAgICAgICAgICAgIGNvbnN0IGNsaXBwZWREcmF3Q291bnQ6IG51bWJlciA9IGNsaXBwaW5nQ29udGV4dC5fY2xpcHBlZERyYXdhYmxlSW5kZXhMaXN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yKGxldCBjbGlwcGVkRHJhd2FibGVJbmRleDogbnVtYmVyID0gMDsgY2xpcHBlZERyYXdhYmxlSW5kZXggPCBjbGlwcGVkRHJhd0NvdW50OyBjbGlwcGVkRHJhd2FibGVJbmRleCsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIOODnuOCueOCr+OCkuS9v+eUqOOBmeOCi+aPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruaPj+eUu+OBleOCjOOCi+efqeW9ouOCkuaxguOCgeOCi1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlSW5kZXg6IG51bWJlciA9IGNsaXBwaW5nQ29udGV4dC5fY2xpcHBlZERyYXdhYmxlSW5kZXhMaXN0W2NsaXBwZWREcmF3YWJsZUluZGV4XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlVmVydGV4Q291bnQ6IG51bWJlciA9IG1vZGVsLmdldERyYXdhYmxlVmVydGV4Q291bnQoZHJhd2FibGVJbmRleCk7XG4gICAgICAgICAgICAgICAgbGV0IGRyYXdhYmxlVmVydGV4ZXM6IEZsb2F0MzJBcnJheSA9IG1vZGVsLmdldERyYXdhYmxlVmVydGljZXMoZHJhd2FibGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWluWDogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICBsZXQgbWluWTogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICBsZXQgbWF4WDogbnVtYmVyID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgICAgICAgICBsZXQgbWF4WTogbnVtYmVyID0gTnVtYmVyLk1JTl9WQUxVRTtcblxuICAgICAgICAgICAgICAgIGxldCBsb29wOiBudW1iZXIgPSBkcmF3YWJsZVZlcnRleENvdW50ICogQ29uc3RhbnQudmVydGV4U3RlcDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHBpOiBudW1iZXIgPSBDb25zdGFudC52ZXJ0ZXhPZmZzZXQ7IHBpIDwgbG9vcDsgcGkgKz0gQ29uc3RhbnQudmVydGV4U3RlcClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSBkcmF3YWJsZVZlcnRleGVzW3BpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHk6IG51bWJlciA9IGRyYXdhYmxlVmVydGV4ZXNbcGkgKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZih4IDwgbWluWClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoeCA+IG1heFgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFggPSB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHkgPCBtaW5ZKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5ZID0geTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih5ID4gbWF4WSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDmnInlirnjgarngrnjgYzkuIDjgaTjgoLlj5bjgozjgarjgYvjgaPjgZ/jga7jgafjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICBpZihtaW5YID09IE51bWJlci5NQVhfVkFMVUUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL+OAgOWFqOS9k+OBruefqeW9ouOBq+WPjeaYoFxuICAgICAgICAgICAgICAgIGlmKG1pblggPCBjbGlwcGVkRHJhd1RvdGFsTWluWClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBwZWREcmF3VG90YWxNaW5YID0gbWluWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobWluWSA8IGNsaXBwZWREcmF3VG90YWxNaW5ZKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBlZERyYXdUb3RhbE1pblkgPSBtaW5ZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtYXhYID4gY2xpcHBlZERyYXdUb3RhbE1heFgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGlwcGVkRHJhd1RvdGFsTWF4WCA9IG1heFg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1heFkgPiBjbGlwcGVkRHJhd1RvdGFsTWF4WSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBwZWREcmF3VG90YWxNYXhZID0gbWF4WTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjbGlwcGVkRHJhd1RvdGFsTWluWCA9PSBOdW1iZXIuTUFYX1ZBTFVFKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QueCA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QueSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3Qud2lkdGggPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5fYWxsQ2xpcHBlZERyYXdSZWN0LmhlaWdodCA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9pc1VzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5faXNVc2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3OiBudW1iZXIgPSBjbGlwcGVkRHJhd1RvdGFsTWF4WCAtIGNsaXBwZWREcmF3VG90YWxNaW5YO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaDogbnVtYmVyID0gY2xpcHBlZERyYXdUb3RhbE1heFkgLSBjbGlwcGVkRHJhd1RvdGFsTWluWTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QueCA9IGNsaXBwZWREcmF3VG90YWxNaW5YO1xuICAgICAgICAgICAgICAgICAgICBjbGlwcGluZ0NvbnRleHQuX2FsbENsaXBwZWREcmF3UmVjdC55ID0gY2xpcHBlZERyYXdUb3RhbE1pblk7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5fYWxsQ2xpcHBlZERyYXdSZWN0LndpZHRoID0gdztcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QuaGVpZ2h0ID0gaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21hc2tSZW5kZXJUZXh0dXJlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yQnVmZmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZU5vID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFza0J1ZmZlclNpemUgPSAyNTY7XG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzayA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtQ2xpcHBpbmdDb250ZXh0PigpO1xuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXcgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUNsaXBwaW5nQ29udGV4dD4oKTtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbVRleHR1cmVDb2xvcj4oKTtcbiAgICAgICAgICAgIHRoaXMuX3RtcEJvdW5kc09uTW9kZWwgPSBuZXcgY3NtUmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgICAgICB0aGlzLl90bXBNYXRyaXhGb3JNYXNrID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgICAgICB0aGlzLl90bXBNYXRyaXhGb3JEcmF3ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgICAgICB0aGlzLl9tYXNrVGV4dHVyZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCB0bXA6IEN1YmlzbVRleHR1cmVDb2xvciA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcbiAgICAgICAgICAgIHRtcC5SID0gMS4wO1xuICAgICAgICAgICAgdG1wLkcgPSAwLjA7XG4gICAgICAgICAgICB0bXAuQiA9IDAuMDtcbiAgICAgICAgICAgIHRtcC5BID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbENvbG9ycy5wdXNoQmFjayh0bXApO1xuXG4gICAgICAgICAgICB0bXAgPSBuZXcgQ3ViaXNtVGV4dHVyZUNvbG9yKCk7XG4gICAgICAgICAgICB0bXAuUiA9IDAuMDtcbiAgICAgICAgICAgIHRtcC5HID0gMS4wO1xuICAgICAgICAgICAgdG1wLkIgPSAwLjA7XG4gICAgICAgICAgICB0bXAuQSA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMucHVzaEJhY2sodG1wKTtcblxuICAgICAgICAgICAgdG1wID0gbmV3IEN1YmlzbVRleHR1cmVDb2xvcigpO1xuICAgICAgICAgICAgdG1wLlIgPSAwLjA7XG4gICAgICAgICAgICB0bXAuRyA9IDAuMDtcbiAgICAgICAgICAgIHRtcC5CID0gMS4wO1xuICAgICAgICAgICAgdG1wLkEgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsQ29sb3JzLnB1c2hCYWNrKHRtcCk7XG5cbiAgICAgICAgICAgIHRtcCA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcbiAgICAgICAgICAgIHRtcC5SID0gMC4wO1xuICAgICAgICAgICAgdG1wLkcgPSAwLjA7XG4gICAgICAgICAgICB0bXAuQiA9IDAuMDtcbiAgICAgICAgICAgIHRtcC5BID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbENvbG9ycy5wdXNoQmFjayh0bXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5nZXRTaXplKCk7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5hdChpKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmF0KGkpLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suc2V0KGksIHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLnNldChpLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gX2NsaXBwaW5nQ29udGV4dExpc3RGb3JEcmF344GvX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNr44Gr44GC44KL44Kk44Oz44K544K/44Oz44K544KS5oyH44GX44Gm44GE44KL44CC5LiK6KiY44Gu5Yem55CG44Gr44KI44KK6KaB57Sg44GU44Go44GuREVMRVRF44Gv5LiN6KaB44CCXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdy5nZXRTaXplKCk7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdy5zZXQoaSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX21hc2tUZXh0dXJlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5fbWFza1RleHR1cmUudGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFza1RleHR1cmUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9jaGFubmVsQ29sb3JzLmdldFNpemUoKTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMuc2V0KGksIG51bGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsQ29sb3JzID0gbnVsbDtcblxuICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj6Kej5pS+XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5fY29sb3JCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5fY29sb3JCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODnuODjeODvOOCuOODo+OBruWIneacn+WMluWHpueQhlxuICAgICAgICAgKiDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgpLkvb/jgYbmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7nmbvpjLLjgpLooYzjgYZcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVDb3VudCDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7mlbBcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlTWFza3Mg5o+P55S744Kq44OW44K444Kn44Kv44OI44KS44Oe44K544Kv44GZ44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K544Gu44Oq44K544OIXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUNvdW50cyDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjgpLjg57jgrnjgq/jgZnjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7mlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCwgZHJhd2FibGVDb3VudDogbnVtYmVyLCBkcmF3YWJsZU1hc2tzOiBJbnQzMkFycmF5W10sIGRyYXdhYmxlTWFza0NvdW50czogSW50MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44KS5L2/44GG5o+P55S744Kq44OW44K444Kn44Kv44OI44KS44GZ44G544Gm55m76Yyy44GZ44KLXG4gICAgICAgICAgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga/jgIHpgJrluLjmlbDlgIvnqIvluqbjgavpmZDlrprjgZfjgabkvb/jgYbjgoLjga7jgajjgZnjgotcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRyYXdhYmxlQ291bnQ7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihkcmF3YWJsZU1hc2tDb3VudHNbaV0gPD0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OBjOS9v+eUqOOBleOCjOOBpuOBhOOBquOBhOOCouODvOODiOODoeODg+OCt+ODpe+8iOWkmuOBj+OBruWgtOWQiOS9v+eUqOOBl+OBquOBhO+8iVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdy5wdXNoQmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5pei44Gr44GC44KLQ2xpcENvbnRleHTjgajlkIzjgZjjgYvjg4Hjgqfjg4Pjgq/jgZnjgotcbiAgICAgICAgICAgICAgICBsZXQgY2xpcHBpbmdDb250ZXh0OiBDdWJpc21DbGlwcGluZ0NvbnRleHQgPSB0aGlzLmZpbmRTYW1lQ2xpcChkcmF3YWJsZU1hc2tzW2ldLCBkcmF3YWJsZU1hc2tDb3VudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmKGNsaXBwaW5nQ29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCM5LiA44Gu44Oe44K544Kv44GM5a2Y5Zyo44GX44Gm44GE44Gq44GE5aC05ZCI44Gv55Sf5oiQ44GZ44KLXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dCA9IG5ldyBDdWJpc21DbGlwcGluZ0NvbnRleHQodGhpcywgZHJhd2FibGVNYXNrc1tpXSwgZHJhd2FibGVNYXNrQ291bnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2sucHVzaEJhY2soY2xpcHBpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGlwcGluZ0NvbnRleHQuYWRkQ2xpcHBlZERyYXdhYmxlKGkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXcucHVzaEJhY2soY2xpcHBpbmdDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgq/jg6rjg4Pjg5Tjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4jjgpLkvZzmiJDjgZnjgovjgILjg6Ljg4fjg6vmj4/nlLvmmYLjgavlrp/ooYzjgZnjgovjgIJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKiBAcGFyYW0gcmVuZGVyZXIg44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0dXBDbGlwcGluZ0NvbnRleHQobW9kZWw6IEN1YmlzbU1vZGVsLCByZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXJfV2ViR0wpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZU5vKys7XG5cbiAgICAgICAgICAgIC8vIOWFqOOBpuOBruOCr+ODquODg+ODlOODs+OCsOOCkueUqOaEj+OBmeOCi1xuICAgICAgICAgICAgLy8g5ZCM44GY44Kv44Oq44OD44OX77yI6KSH5pWw44Gu5aC05ZCI44Gv44G+44Go44KB44Gm5LiA44Gk44Gu44Kv44Oq44OD44OX77yJ44KS5L2/44GG5aC05ZCI44GvMeW6puOBoOOBkeioreWumuOBmeOCi1xuICAgICAgICAgICAgbGV0IHVzaW5nQ2xpcENvdW50OiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBjbGlwSW5kZXggPSAwOyBjbGlwSW5kZXggPCB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5nZXRTaXplKCk7IGNsaXBJbmRleCsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDHjgaTjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgavplqLjgZfjgaZcbiAgICAgICAgICAgICAgICBsZXQgY2M6IEN1YmlzbUNsaXBwaW5nQ29udGV4dCA9IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmF0KGNsaXBJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyDjgZPjga7jgq/jg6rjg4Pjg5fjgpLliKnnlKjjgZnjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jnvqTlhajkvZPjgpLlm7LjgoDnn6nlvaLjgpLoqIjnrpdcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNDbGlwcGVkRHJhd1RvdGFsQm91bmRzKG1vZGVsLCBjYyk7XG5cbiAgICAgICAgICAgICAgICBpZihjYy5faXNVc2luZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVzaW5nQ2xpcENvdW50Kys7IC8vIOS9v+eUqOS4reOBqOOBl+OBpuOCq+OCpuODs+ODiFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g44Oe44K544Kv5L2c5oiQ5Yem55CGXG4gICAgICAgICAgICBpZih1c2luZ0NsaXBDb3VudCA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8g55Sf5oiQ44GX44GfRnJhbWVCdWZmZXLjgajlkIzjgZjjgrXjgqTjgrrjgafjg5Pjg6Xjg7zjg53jg7zjg4jjgpLoqK3lrppcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuX2NsaXBwaW5nTWFza0J1ZmZlclNpemUsIHRoaXMuX2NsaXBwaW5nTWFza0J1ZmZlclNpemUpO1xuXG4gICAgICAgICAgICAgICAgLy8g44Oe44K544Kv44KSYWN0aXZl44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFza1JlbmRlclRleHR1cmUgPSB0aGlzLmdldE1hc2tSZW5kZXJUZXh0dXJlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6vmj4/nlLvmmYLjgatEcmF3TWVzaE5vd+OBq+a4oeOBleOCjOOCi+WkieaPmyjjg6Ljg4fjg6t0b+ODr+ODvOODq+ODieW6p+aomeWkieaPmylcbiAgICAgICAgICAgICAgICBsZXQgbW9kZWxUb1dvcmxkRjogQ3ViaXNtTWF0cml4NDQgPSByZW5kZXJlci5nZXRNdnBNYXRyaXgoKTtcblxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnByZURyYXcoKTsgLy8g44OQ44OD44OV44Kh44KS44Kv44Oq44Ki44GZ44KLXG5cbiAgICAgICAgICAgICAgICAvLyDlkITjg57jgrnjgq/jga7jg6zjgqTjgqLjgqbjg4jjgpLmsbrlrprjgZfjgabjgYTjgY9cbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwTGF5b3V0Qm91bmRzKHVzaW5nQ2xpcENvdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0g44Oe44K544Kv5o+P55S75Yem55CGIC0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAvLyDjg57jgrnjgq/nlKhSZW5kZXJUZXh0dXJl44KSYWN0aXZl44Gr44K744OD44OIXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5fbWFza1JlbmRlclRleHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgLy8g44Oe44K544Kv44KS44Kv44Oq44Ki44GZ44KLXG4gICAgICAgICAgICAgICAgLy8gKOS7ruS7leanmCkgMeOBjOeEoeWKue+8iOaPj+OBi+OCjOOBquOBhO+8iemgmOWfn+OAgTDjgYzmnInlirnvvIjmj4/jgYvjgozjgovvvInpoJjln5/jgILvvIjjgrfjgqfjg7zjg4Djg7xDZCpDc+OBpzDjgavov5HjgYTlgKTjgpLjgYvjgZHjgabjg57jgrnjgq/jgpLkvZzjgovjgIIx44KS44GL44GR44KL44Go5L2V44KC6LW344GT44KJ44Gq44GE77yJXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEuMCwgMS4wLCAxLjAsIDEuMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuXG4gICAgICAgICAgICAgICAgLy8g5a6f6Zqb44Gr44Oe44K544Kv44KS55Sf5oiQ44GZ44KLXG4gICAgICAgICAgICAgICAgLy8g5YWo44Gm44Gu44Oe44K544Kv44KS44Gp44Gu44KI44GG44Gr44Os44Kk44Ki44Km44OI44GX44Gm5o+P44GP44GL44KS5rG65a6a44GX44CBQ2xpcENvbnRleHQsIENsaXBwZWREcmF3Q29udGV4dOOBq+iomOaGtuOBmeOCi1xuICAgICAgICAgICAgICAgIGZvcihsZXQgY2xpcEluZGV4OiBudW1iZXIgPSAwOyBjbGlwSW5kZXggPCB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5nZXRTaXplKCk7IGNsaXBJbmRleCsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tIOWun+mam+OBqzHjgaTjga7jg57jgrnjgq/jgpLmj4/jgY8gLS0tXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGlwQ29udGV4dDogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suYXQoY2xpcEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbENsaXBlZERyYXdSZWN0OiBjc21SZWN0ID0gY2xpcENvbnRleHQuX2FsbENsaXBwZWREcmF3UmVjdDsgICAvLyDjgZPjga7jg57jgrnjgq/jgpLkvb/jgYbjgIHjgZnjgbnjgabjga7mj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7oq5bnkIbluqfmqJnkuIrjga7lm7Ljgb/nn6nlvaJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheW91dEJvdW5kc09uVGV4MDE6IGNzbVJlY3QgPSBjbGlwQ29udGV4dC5fbGF5b3V0Qm91bmRzOyAvLyDjgZPjga7kuK3jgavjg57jgrnjgq/jgpLlj47jgoHjgotcblxuICAgICAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6vluqfmqJnkuIrjga7nn6nlvaLjgpLjgIHpganlrpzjg57jg7zjgrjjg7PjgpLku5jjgZHjgabkvb/jgYZcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgTUFSR0lOOiBudW1iZXIgPSAwLjA1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBCb3VuZHNPbk1vZGVsLnNldFJlY3QoYWxsQ2xpcGVkRHJhd1JlY3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBCb3VuZHNPbk1vZGVsLmV4cGFuZChhbGxDbGlwZWREcmF3UmVjdC53aWR0aCAqIE1BUkdJTiwgYWxsQ2xpcGVkRHJhd1JlY3QuaGVpZ2h0ICogTUFSR0lOKTtcbiAgICAgICAgICAgICAgICAgICAgLy8jIyMjIyMjIyMjIOacrOadpeOBr+WJsuOCiuW9k+OBpuOCieOCjOOBn+mgmOWfn+OBruWFqOS9k+OCkuS9v+OCj+OBmuW/heimgeacgOS9jumZkOOBruOCteOCpOOCuuOBjOOCiOOBhFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCt+OCp+ODvOODgOeUqOOBruioiOeul+W8j+OCkuaxguOCgeOCi+OAguWbnui7ouOCkuiAg+aFruOBl+OBquOBhOWgtOWQiOOBr+S7peS4i+OBruOBqOOBiuOCilxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlUGVyaW9kJyA9IG1vdmVQZXJpb2QgKiBzY2FsZVggKyBvZmZYXHRcdCAgW1sgbW92ZVBlcmlvZCcgPSAobW92ZVBlcmlvZCAtIHRtcEJvdW5kc09uTW9kZWwubW92ZVBlcmlvZCkqc2NhbGUgKyBsYXlvdXRCb3VuZHNPblRleDAxLm1vdmVQZXJpb2QgXV1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVYOiBudW1iZXIgPSBsYXlvdXRCb3VuZHNPblRleDAxLndpZHRoIC8gdGhpcy5fdG1wQm91bmRzT25Nb2RlbC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVZOiBudW1iZXIgPSBsYXlvdXRCb3VuZHNPblRleDAxLmhlaWdodCAvIHRoaXMuX3RtcEJvdW5kc09uTW9kZWwuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOODnuOCueOCr+eUn+aIkOaZguOBq+S9v+OBhuihjOWIl+OCkuaxguOCgeOCi1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgavmuKHjgZnooYzliJfjgpLmsYLjgoHjgosgPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IOimgeacgOmBqeWMlu+8iOmAhumghuOBq+ioiOeul+OBmeOCjOOBsOOCt+ODs+ODl+ODq+OBq+OBp+OBjeOCi++8iVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LmxvYWRJZGVudGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dDAuLjEg44KSIC0xLi4x44Gr5aSJ5o+bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LnRyYW5zbGF0ZVJlbGF0aXZlKC0xLjAsIC0xLjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RtcE1hdHJpeC5zY2FsZVJlbGF0aXZlKDIuMCwgMi4wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2aWV3IHRvIGxheW91dDAuLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgudHJhbnNsYXRlUmVsYXRpdmUobGF5b3V0Qm91bmRzT25UZXgwMS54LCBsYXlvdXRCb3VuZHNPblRleDAxLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RtcE1hdHJpeC5zY2FsZVJlbGF0aXZlKHNjYWxlWCwgc2NhbGVZKTsgIC8vIG5ldyA9IFt0cmFuc2xhdGVdW3NjYWxlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RtcE1hdHJpeC50cmFuc2xhdGVSZWxhdGl2ZSgtdGhpcy5fdG1wQm91bmRzT25Nb2RlbC54LCAtdGhpcy5fdG1wQm91bmRzT25Nb2RlbC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXcgPSBbdHJhbnNsYXRlXVtzY2FsZV1bdHJhbnNsYXRlXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG1wTWF0cml4Rm9yTWFza+OBjOioiOeul+e1kOaenFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4Rm9yTWFzay5zZXRNYXRyaXgodGhpcy5fdG1wTWF0cml4LmdldEFycmF5KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8tLS0tLS0tLS0gZHJhd+aZguOBriBtYXNrIOWPgueFp+eUqOihjOWIl+OCkuioiOeul1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgavmuKHjgZnooYzliJfjgpLmsYLjgoHjgosgPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IOimgeacgOmBqeWMlu+8iOmAhumghuOBq+ioiOeul+OBmeOCjOOBsOOCt+ODs+ODl+ODq+OBq+OBp+OBjeOCi++8iVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LmxvYWRJZGVudGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RtcE1hdHJpeC50cmFuc2xhdGVSZWxhdGl2ZShsYXlvdXRCb3VuZHNPblRleDAxLngsIGxheW91dEJvdW5kc09uVGV4MDEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LnNjYWxlUmVsYXRpdmUoc2NhbGVYLCBzY2FsZVkpOyAgLy8gbmV3ID0gW3RyYW5zbGF0ZV1bc2NhbGVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LnRyYW5zbGF0ZVJlbGF0aXZlKC10aGlzLl90bXBCb3VuZHNPbk1vZGVsLngsIC10aGlzLl90bXBCb3VuZHNPbk1vZGVsLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ldyA9IFt0cmFuc2xhdGVdW3NjYWxlXVt0cmFuc2xhdGVdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXhGb3JEcmF3LnNldE1hdHJpeCh0aGlzLl90bXBNYXRyaXguZ2V0QXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xpcENvbnRleHQuX21hdHJpeEZvck1hc2suc2V0TWF0cml4KHRoaXMuX3RtcE1hdHJpeEZvck1hc2suZ2V0QXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb250ZXh0Ll9tYXRyaXhGb3JEcmF3LnNldE1hdHJpeCh0aGlzLl90bXBNYXRyaXhGb3JEcmF3LmdldEFycmF5KCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBEcmF3Q291bnQ6IG51bWJlciA9IGNsaXBDb250ZXh0Ll9jbGlwcGluZ0lkQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNsaXBEcmF3Q291bnQ7IGkrKylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpcERyYXdJbmRleDogbnVtYmVyID0gY2xpcENvbnRleHQuX2NsaXBwaW5nSWRMaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDpoILngrnmg4XloLHjgYzmm7TmlrDjgZXjgozjgabjgYrjgonjgZrjgIHkv6HpoLzmgKfjgYzjgarjgYTloLTlkIjjga/mj4/nlLvjgpLjg5HjgrnjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFtb2RlbC5nZXREcmF3YWJsZUR5bmFtaWNGbGFnVmVydGV4UG9zaXRpb25zRGlkQ2hhbmdlKGNsaXBEcmF3SW5kZXgpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5zZXRJc0N1bGxpbmcobW9kZWwuZ2V0RHJhd2FibGVDdWxsaW5nKGNsaXBEcmF3SW5kZXgpICE9IGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LuK5Zue5bCC55So44Gu5aSJ5o+b44KS6YGp55So44GX44Gm5o+P44GPXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg4Hjg6Pjg7Pjg43jg6vjgoLliIfjgormm7/jgYjjgovlv4XopoHjgYzjgYLjgosoQSxSLEcsQilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2soY2xpcENvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIuZHJhd01lc2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVUZXh0dXJlSW5kaWNlcyhjbGlwRHJhd0luZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZVZlcnRleEluZGV4Q291bnQoY2xpcERyYXdJbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVWZXJ0ZXhDb3VudChjbGlwRHJhd0luZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZVZlcnRleEluZGljZXMoY2xpcERyYXdJbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVWZXJ0aWNlcyhjbGlwRHJhd0luZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZVZlcnRleFV2cyhjbGlwRHJhd0luZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZU9wYWNpdHkoY2xpcERyYXdJbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3ViaXNtQmxlbmRNb2RlLkN1YmlzbUJsZW5kTW9kZV9Ob3JtYWwgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjga/pgJrluLjmj4/nlLvjgpLlvLfliLZcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAtLS0g5b6M5Yem55CGIC0tLVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHNfZmJvKTsgICAvLyDmj4/nlLvlr77osaHjgpLmiLvjgZlcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52aWV3cG9ydChzX3ZpZXdwb3J0WzBdLCBzX3ZpZXdwb3J0WzFdLCBzX3ZpZXdwb3J0WzJdLCBzX3ZpZXdwb3J0WzNdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDml6Ljgavjg57jgrnjgq/jgpLkvZzjgaPjgabjgYTjgovjgYvjgpLnorroqo1cbiAgICAgICAgICog5L2c44Gj44Gm44GE44KL5qeY44Gn44GC44KM44Gw6Kmy5b2T44GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Kk44Oz44K544K/44Oz44K544KS6L+U44GZXG4gICAgICAgICAqIOS9nOOBo+OBpuOBhOOBquOBkeOCjOOBsE5VTEzjgpLov5TjgZlcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlTWFza3Mg5o+P55S744Kq44OW44K444Kn44Kv44OI44KS44Oe44K544Kv44GZ44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Oq44K544OIXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZU1hc2tDb3VudHMg5o+P55S744Kq44OW44K444Kn44Kv44OI44KS44Oe44K544Kv44GZ44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu5pWwXG4gICAgICAgICAqIEByZXR1cm4g6Kmy5b2T44GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44GM5a2Y5Zyo44GZ44KM44Gw44Kk44Oz44K544K/44Oz44K544KS6L+U44GX44CB44Gq44GR44KM44GwTlVMTOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGZpbmRTYW1lQ2xpcChkcmF3YWJsZU1hc2tzOiBJbnQzMkFycmF5LCBkcmF3YWJsZU1hc2tDb3VudHM6IG51bWJlcik6IEN1YmlzbUNsaXBwaW5nQ29udGV4dFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDkvZzmiJDmuIjjgb9DbGlwcGluZ0NvbnRleHTjgajkuIDoh7TjgZnjgovjgYvnorroqo1cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmdldFNpemUoKTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjbGlwcGluZ0NvbnRleHQ6IEN1YmlzbUNsaXBwaW5nQ29udGV4dCA9IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmF0KGkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSBjbGlwcGluZ0NvbnRleHQuX2NsaXBwaW5nSWRDb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDlgIvmlbDjgYzpgZXjgYbloLTlkIjjga/liKXnialcbiAgICAgICAgICAgICAgICBpZihjb3VudCAhPSBkcmF3YWJsZU1hc2tDb3VudHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgc2FtZUNvdW50ID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIOWQjOOBmElE44KS5oyB44Gk44GL56K66KqN44CC6YWN5YiX44Gu5pWw44GM5ZCM44GY44Gq44Gu44Gn44CB5LiA6Ie044GX44Gf5YCL5pWw44GM5ZCM44GY44Gq44KJ5ZCM44GY54mp44KS5oyB44Gk44Go44GZ44KLXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgY291bnQ7IGorKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBJZDogbnVtYmVyID0gY2xpcHBpbmdDb250ZXh0Ll9jbGlwcGluZ0lkTGlzdFtqXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IGNvdW50OyBrKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRyYXdhYmxlTWFza3Nba10gPT0gY2xpcElkKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoc2FtZUNvdW50ID09IGNvdW50KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsaXBwaW5nQ29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyDopovjgaTjgYvjgonjgarjgYvjgaPjgZ9cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgq/jg6rjg4Pjg5Tjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4jjgpLphY3nva7jgZnjgovjg6zjgqTjgqLjgqbjg4hcbiAgICAgICAgICog5LiA44Gk44Gu44Os44Oz44OA44O844OG44Kv44K544OB44Oj44KS5qW15Yqb44GE44Gj44Gx44GE44Gr5L2/44Gj44Gm44Oe44K544Kv44KS44Os44Kk44Ki44Km44OI44GZ44KLXG4gICAgICAgICAqIOODnuOCueOCr+OCsOODq+ODvOODl+OBruaVsOOBjDTku6XkuIvjgarjgolSR0JB5ZCE44OB44Oj44Oz44ON44Or44Gr5LiA44Gk44Ga44Gk44Oe44K544Kv44KS6YWN572u44GX44CBNeS7peS4ijbku6XkuIvjgarjgolSR0JB44KSMiwyLDEsMeOBqOmFjee9ruOBmeOCi+OAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHVzaW5nQ2xpcENvdW50IOmFjee9ruOBmeOCi+OCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOBruaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldHVwTGF5b3V0Qm91bmRzKHVzaW5nQ2xpcENvdW50OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOOBsuOBqOOBpOOBrlJlbmRlclRleHR1cmXjgpLmpbXlipvjgYTjgaPjgbHjgYTjgavkvb/jgaPjgabjg57jgrnjgq/jgpLjg6zjgqTjgqLjgqbjg4jjgZnjgotcbiAgICAgICAgICAgIC8vIOODnuOCueOCr+OCsOODq+ODvOODl+OBruaVsOOBjDTku6XkuIvjgarjgolSR0JB5ZCE44OB44Oj44Oz44ON44Or44GrMeOBpOOBmuOBpOODnuOCueOCr+OCkumFjee9ruOBl+OAgTXku6XkuIo25Lul5LiL44Gq44KJUkdCQeOCkjIsMiwxLDHjgajphY3nva7jgZnjgotcblxuICAgICAgICAgICAgLy8gUkdCQeOCkumghueVquOBq+S9v+OBo+OBpuOBhOOBj1xuICAgICAgICAgICAgbGV0IGRpdjogbnVtYmVyID0gdXNpbmdDbGlwQ291bnQgLyBDb2xvckNoYW5uZWxDb3VudDsgLy/jgIAx44OB44Oj44Oz44ON44Or44Gr6YWN572u44GZ44KL5Z+65pys44Gu44Oe44K544KvXG4gICAgICAgICAgICBsZXQgbW9kOiBudW1iZXIgPSB1c2luZ0NsaXBDb3VudCAlIENvbG9yQ2hhbm5lbENvdW50OyAvLyDkvZnjgorjgIHjgZPjga7nlarlj7fjga7jg4Hjg6Pjg7Pjg43jg6vjgb7jgafjgavkuIDjgaTjgZrjgaTphY3liIbjgZnjgotcblxuICAgICAgICAgICAgLy8g5bCP5pWw54K544Gv5YiH44KK5o2o44Gm44KLXG4gICAgICAgICAgICBkaXYgPSB+fmRpdjtcbiAgICAgICAgICAgIG1vZCA9IH5+bW9kO1xuXG4gICAgICAgICAgICAvLyBSR0JB44Gd44KM44Ge44KM44Gu44OB44Oj44Oz44ON44Or44KS55So5oSP44GX44Gm44GE44GP77yIMDpSLCAxOkcsIDI6QiwgMzpB77yJXG4gICAgICAgICAgICBsZXQgY3VyQ2xpcEluZGV4OiBudW1iZXIgPSAwOyAvLyDpoIbnlarjgavoqK3lrprjgZfjgabjgYTjgY9cblxuICAgICAgICAgICAgZm9yKGxldCBjaGFubmVsTm86IG51bWJlciA9IDA7IGNoYW5uZWxObyA8IENvbG9yQ2hhbm5lbENvdW50OyBjaGFubmVsTm8rKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyDjgZPjga7jg4Hjg6Pjg7Pjg43jg6vjgavjg6zjgqTjgqLjgqbjg4jjgZnjgovmlbBcbiAgICAgICAgICAgICAgICBsZXQgbGF5b3V0Q291bnQ6IG51bWJlciA9IGRpdiArIChjaGFubmVsTm8gPCBtb2QgPyAxIDogMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDliIblibLmlrnms5XjgpLmsbrlrprjgZnjgotcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRDb3VudCA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2V44KC44GX44Gq44GEXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0Q291bnQgPT0gMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOOBpuOCkuOBneOBruOBvuOBvuS9v+OBhlxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpcENvbnRleHQ6IEN1YmlzbUNsaXBwaW5nQ29udGV4dCA9IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmF0KGN1ckNsaXBJbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcENvbnRleHQuX2xheW91dENoYW5uZWxObyA9IGNoYW5uZWxObztcbiAgICAgICAgICAgICAgICAgICAgY2xpcENvbnRleHQuX2xheW91dEJvdW5kcy54ID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICBjbGlwQ29udGV4dC5fbGF5b3V0Qm91bmRzLnkgPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb250ZXh0Ll9sYXlvdXRCb3VuZHMud2lkdGggPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb250ZXh0Ll9sYXlvdXRCb3VuZHMuaGVpZ2h0ID0gMS4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGxheW91dENvdW50ID09IDIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsYXlvdXRDb3VudDsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeHBvczogbnVtYmVyID0gaSAlIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+aVsOeCueOBr+WIh+OCiuaNqOOBpuOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgeHBvcyA9IH5+eHBvcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNjOiBDdWJpc21DbGlwcGluZ0NvbnRleHQgPSB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5hdChjdXJDbGlwSW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Q2hhbm5lbE5vID0gY2hhbm5lbE5vO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Qm91bmRzLnggPSB4cG9zICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy55ID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy53aWR0aCA9IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMuaGVpZ2h0ID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVbjgpIy44Gk44Gr5YiG6Kej44GX44Gm5L2/44GGXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRDb3VudCA8PSA0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gNOWIhuWJsuOBl+OBpuS9v+OBhlxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsYXlvdXRDb3VudDsgaSsrKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeHBvczogbnVtYmVyID0gaSAlIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeXBvczogbnVtYmVyID0gaSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+aVsOeCueOBr+WIh+OCiuaNqOOBpuOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgeHBvcyA9IH5+eHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHlwb3MgPSB+fnlwb3M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYyA9IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmF0KGN1ckNsaXBJbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRDaGFubmVsTm8gPSBjaGFubmVsTm87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMueCA9IHhwb3MgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Qm91bmRzLnkgPSB5cG9zICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy53aWR0aCA9IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMuaGVpZ2h0ID0gMC41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0Q291bnQgPD0gOSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDnliIblibLjgZfjgabkvb/jgYZcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGF5b3V0Q291bnQ7IGkrKylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhwb3MgPSBpICUgMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5cG9zID0gaSAvIDM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+aVsOeCueOBr+WIh+OCiuaNqOOBpuOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgeHBvcyA9IH5+eHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHlwb3MgPSB+fnlwb3M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYzogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suYXQoY3VyQ2xpcEluZGV4KyspO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dENoYW5uZWxObyA9IGNoYW5uZWxObztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy54ID0geHBvcyAvIDMuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMueSA9IHlwb3MgLyAzLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Qm91bmRzLndpZHRoID0gMS4wIC8gMy4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy5oZWlnaHQgPSAxLjAgLyAzLjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXCJub3Qgc3VwcG9ydGVkIG1hc2sgY291bnQgOiB7MH1cIiwgbGF5b3V0Q291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCq+ODqeODvOODkOODg+ODleOCoeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOOCq+ODqeODvOODkOODg+ODleOCoVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldENvbG9yQnVmZmVyKCk6IFdlYkdMVGV4dHVyZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog55S76Z2i5o+P55S744Gr5L2/55So44GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g55S76Z2i5o+P55S744Gr5L2/55So44GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Oq44K544OIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Q2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXcoKTogY3NtVmVjdG9yPEN1YmlzbUNsaXBwaW5nQ29udGV4dD5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JEcmF3O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCuuOCkuioreWumuOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRDbGlwcGluZ01hc2tCdWZmZXJTaXplKHNpemU6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYXNrQnVmZmVyU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44OQ44OD44OV44Kh44Gu44K144Kk44K644KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44OQ44OD44OV44Kh44Gu44K144Kk44K6XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Q2xpcHBpbmdNYXNrQnVmZmVyU2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaXBwaW5nTWFza0J1ZmZlclNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgX21hc2tSZW5kZXJUZXh0dXJlOiBXZWJHTEZyYW1lYnVmZmVyOyAvLyDjg57jgrnjgq/nlKjjg6zjg7Pjg4Djg7zjg4bjgq/jgrnjg4Hjg6Pjga7jgqLjg4njg6zjgrlcbiAgICAgICAgcHVibGljIF9jb2xvckJ1ZmZlcjogV2ViR0xUZXh0dXJlOyAgICAgICAvLyDjg57jgrnjgq/nlKjjgqvjg6njg7zjg5Djg4Pjg5XjgqHjg7zjga7jgqLjg4njg6zjgrlcbiAgICAgICAgcHVibGljIF9jdXJyZW50RnJhbWVObzogbnVtYmVyOyAgICAvLyDjg57jgrnjgq/jg4bjgq/jgrnjg4Hjg6PjgavkuI7jgYjjgovjg5Xjg6zjg7zjg6Dnlarlj7dcblxuICAgICAgICBwdWJsaWMgX2NoYW5uZWxDb2xvcnM6IGNzbVZlY3RvcjxDdWJpc21UZXh0dXJlQ29sb3I+O1xuICAgICAgICBwdWJsaWMgX21hc2tUZXh0dXJlOiBDdWJpc21SZW5kZXJUZXh0dXJlUmVzb3VyY2U7ICAgICAgICAgICAvLyDjg57jgrnjgq/nlKjjga7jg4bjgq/jgrnjg4Hjg6Pjg6rjgr3jg7zjgrnjga7jg6rjgrnjg4hcbiAgICAgICAgcHVibGljIF9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzazogY3NtVmVjdG9yPEN1YmlzbUNsaXBwaW5nQ29udGV4dD47ICAgLy8g44Oe44K544Kv55So44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OI44Gu44Oq44K544OIXG4gICAgICAgIHB1YmxpYyBfY2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXc6IGNzbVZlY3RvcjxDdWJpc21DbGlwcGluZ0NvbnRleHQ+OyAgIC8vIOaPj+eUu+eUqOOCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOBruODquOCueODiFxuICAgICAgICBwdWJsaWMgX2NsaXBwaW5nTWFza0J1ZmZlclNpemU6IG51bWJlcjsgICAgLy8g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44OQ44OD44OV44Kh44K144Kk44K677yI5Yid5pyf5YCkOjI1Nu+8iVxuXG4gICAgICAgIHByaXZhdGUgX3RtcE1hdHJpeDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgLy8g44Oe44K544Kv6KiI566X55So44Gu6KGM5YiXXG4gICAgICAgIHByaXZhdGUgX3RtcE1hdHJpeEZvck1hc2s6IEN1YmlzbU1hdHJpeDQ0OyAgLy8g44Oe44K544Kv6KiI566X55So44Gu6KGM5YiXXG4gICAgICAgIHByaXZhdGUgX3RtcE1hdHJpeEZvckRyYXc6IEN1YmlzbU1hdHJpeDQ0OyAgLy8g44Oe44K544Kv6KiI566X55So44Gu6KGM5YiXXG4gICAgICAgIHByaXZhdGUgX3RtcEJvdW5kc09uTW9kZWw6IGNzbVJlY3Q7ICAgICAgICAgLy8g44Oe44K544Kv6YWN572u6KiI566X55So44Gu55+p5b2iXG5cbiAgICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDsgIC8vIFdlYkdM44Os44Oz44OA44Oq44Oz44Kw44Kz44Oz44OG44Kt44K544OIXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Os44Oz44OA44O844OG44Kv44K544OB44Oj44Gu44Oq44K944O844K544KS5a6a576p44GZ44KL5qeL6YCg5L2TXG4gICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gn5L2/55So44GZ44KLXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVJlbmRlclRleHR1cmVSZXNvdXJjZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gZnJhbWVObyDjg6zjg7Pjg4Djg6njg7zjga7jg5Xjg6zjg7zjg6Dnlarlj7dcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmUg44OG44Kv44K544OB44Oj44Gu44Ki44OJ44Os44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoZnJhbWVObzogbnVtYmVyLCB0ZXh0dXJlOiBXZWJHTEZyYW1lYnVmZmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lTm8gPSBmcmFtZU5vO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBmcmFtZU5vOiBudW1iZXI7ICAgIC8vIOODrOODs+ODgOODqeOBruODleODrOODvOODoOeVquWPt1xuICAgICAgICBwdWJsaWMgdGV4dHVyZTogV2ViR0xGcmFtZWJ1ZmZlcjsgICAgLy8g44OG44Kv44K544OB44Oj44Gu44Ki44OJ44Os44K5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Kz44Oz44OG44Kt44K544OIXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUNsaXBwaW5nQ29udGV4dFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKG1hbmFnZXI6IEN1YmlzbUNsaXBwaW5nTWFuYWdlcl9XZWJHTCwgY2xpcHBpbmdEcmF3YWJsZUluZGljZXM6IEludDMyQXJyYXksIGNsaXBDb3VudDogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9vd25lciA9IG1hbmFnZXI7XG5cbiAgICAgICAgICAgIC8vIOOCr+ODquODg+ODl+OBl+OBpuOBhOOCi++8iO+8neODnuOCueOCr+eUqOOBru+8iURyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K544Oq44K544OIXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0lkTGlzdCA9IGNsaXBwaW5nRHJhd2FibGVJbmRpY2VzO1xuXG4gICAgICAgICAgICAvLyDjg57jgrnjgq/jga7mlbBcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nSWRDb3VudCA9IGNsaXBDb3VudDtcblxuICAgICAgICAgICAgdGhpcy5fYWxsQ2xpcHBlZERyYXdSZWN0ID0gbmV3IGNzbVJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuX2xheW91dEJvdW5kcyA9IG5ldyBjc21SZWN0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NsaXBwZWREcmF3YWJsZUluZGV4TGlzdCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYXRyaXhGb3JNYXNrID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgICAgICB0aGlzLl9tYXRyaXhGb3JEcmF3ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2xheW91dEJvdW5kcyAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xheW91dEJvdW5kcyA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2FsbENsaXBwZWREcmF3UmVjdCAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsbENsaXBwZWREcmF3UmVjdCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2NsaXBwZWREcmF3YWJsZUluZGV4TGlzdCAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaXBwZWREcmF3YWJsZUluZGV4TGlzdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44GT44Gu44Oe44K544Kv44Gr44Kv44Oq44OD44OX44GV44KM44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCDjgq/jg6rjg4Pjg5Tjg7PjgrDlr77osaHjgavov73liqDjgZnjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhZGRDbGlwcGVkRHJhd2FibGUoZHJhd2FibGVJbmRleDogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9jbGlwcGVkRHJhd2FibGVJbmRleExpc3QucHVzaChkcmF3YWJsZUluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgZPjga7jg57jgrnjgq/jgpLnrqHnkIbjgZnjgovjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRDbGlwcGluZ01hbmFnZXIoKTogQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzZXRHbChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9vd25lci5zZXRHTChnbCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgX2lzVXNpbmc6IGJvb2xlYW47ICAvLyDnj77lnKjjga7mj4/nlLvnirbmhYvjgafjg57jgrnjgq/jga7mupblgpnjgYzlv4XopoHjgarjgol0cnVlXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBfY2xpcHBpbmdJZExpc3Q6IEludDMyQXJyYXk7ICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OBrklE44Oq44K544OIXG4gICAgICAgIHB1YmxpYyBfY2xpcHBpbmdJZENvdW50OiBudW1iZXI7ICAgLy8g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu5pWwXG4gICAgICAgIHB1YmxpYyBfbGF5b3V0Q2hhbm5lbE5vOiBudW1iZXI7ICAvLyBSR0JB44Gu44GE44Ga44KM44Gu44OB44Oj44Oz44ON44Or44Gr44GT44Gu44Kv44Oq44OD44OX44KS6YWN572u44GZ44KL44GL77yIMDpSLCAxOkcsIDI6QiwgMzpB77yJXG4gICAgICAgIHB1YmxpYyBfbGF5b3V0Qm91bmRzOiBjc21SZWN0OyAvLyDjg57jgrnjgq/nlKjjg4Hjg6Pjg7Pjg43jg6vjga7jganjga7poJjln5/jgavjg57jgrnjgq/jgpLlhaXjgozjgovjgYvvvIhWaWV35bqn5qiZLTF+MSwgVVbjga8wfjHjgavnm7TjgZnvvIlcbiAgICAgICAgcHVibGljIF9hbGxDbGlwcGVkRHJhd1JlY3Q6IGNzbVJlY3Q7ICAgLy8g44GT44Gu44Kv44Oq44OD44OU44Oz44Kw44Gn44CB44Kv44Oq44OD44OU44Oz44Kw44GV44KM44KL44GZ44G544Gm44Gu5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu5Zuy44G/55+p5b2i77yI5q+O5Zue5pu05paw77yJXG4gICAgICAgIHB1YmxpYyBfbWF0cml4Rm9yTWFzazogQ3ViaXNtTWF0cml4NDQ7IC8vIOODnuOCueOCr+OBruS9jee9ruioiOeul+e1kOaenOOCkuS/neaMgeOBmeOCi+ihjOWIl1xuICAgICAgICBwdWJsaWMgX21hdHJpeEZvckRyYXc6IEN1YmlzbU1hdHJpeDQ0OyAvLyDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7kvY3nva7oqIjnrpfntZDmnpzjgpLkv53mjIHjgZnjgovooYzliJdcbiAgICAgICAgcHVibGljIF9jbGlwcGVkRHJhd2FibGVJbmRleExpc3Q6IG51bWJlcltdOyAvLyDjgZPjga7jg57jgrnjgq/jgavjgq/jg6rjg4Pjg5fjgZXjgozjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jg6rjgrnjg4hcblxuICAgICAgICBwcml2YXRlIF9vd25lcjogQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMOyAgICAvLyDjgZPjga7jg57jgrnjgq/jgpLnrqHnkIbjgZfjgabjgYTjgovjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZWJHTOeUqOOBruOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOCkueUn+aIkOODu+egtOajhOOBmeOCi+OCr+ODqeOCuVxuICAgICAqIOOCt+ODs+OCsOODq+ODiOODs+OBquOCr+ODqeOCueOBp+OBguOCiuOAgUN1YmlzbVNoYWRlcl9XZWJHTC5nZXRJbnN0YW5jZeOBi+OCieOCouOCr+OCu+OCueOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21TaGFkZXJfV2ViR0xcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgovvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvIlcbiAgICAgICAgICogQHJldHVybiDjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQ3ViaXNtU2hhZGVyX1dlYkdMXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNfaW5zdGFuY2UgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzX2luc3RhbmNlID0gbmV3IEN1YmlzbVNoYWRlcl9XZWJHTCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc19pbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgpLplovmlL7jgZnjgovvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvIlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlSW5zdGFuY2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzX2luc3RhbmNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNfaW5zdGFuY2UucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIHNfaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHByaXZhdGXjgarjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21TaGFkZXJTZXQ+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZVNoYWRlclByb2dyYW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6Djga7kuIDpgKPjga7jgrvjg4Pjg4jjgqLjg4Pjg5fjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVyIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKiBAcGFyYW0gdGV4dHVyZUlkIEdQVeOBruODhuOCr+OCueODgeODo0lEXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhDb3VudCDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnmlbBcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gaW5kZXhBcnJheeOAgOOCpOODs+ODh+ODg+OCr+OCueODkOODg+ODleOCoeOBrumggueCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gdXZBcnJheSB1dumFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gb3BhY2l0eSDkuI3pgI/mmI7luqZcbiAgICAgICAgICogQHBhcmFtIGNvbG9yQmxlbmRNb2RlIOOCq+ODqeODvOODluODrOODs+ODh+OCo+ODs+OCsOOBruOCv+OCpOODl1xuICAgICAgICAgKiBAcGFyYW0gYmFzZUNvbG9yIOODmeODvOOCueOCq+ODqeODvFxuICAgICAgICAgKiBAcGFyYW0gaXNQcmVtdWx0aXBsaWVkQWxwaGEg5LmX566X5riI44G/44Ki44Or44OV44Kh44GL44Gp44GG44GLXG4gICAgICAgICAqIEBwYXJhbSBtYXRyaXg0eDQgTW9kZWwtVmlldy1Qcm9qZWN0aW9u6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0dXBTaGFkZXJQcm9ncmFtKHJlbmRlcmVyOiBDdWJpc21SZW5kZXJlcl9XZWJHTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVJZDogV2ViR0xUZXh0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4Q291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEFycmF5OiBGbG9hdDMyQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEFycmF5OiBVaW50MTZBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2QXJyYXk6IEZsb2F0MzJBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXg6IFdlYkdMQnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2OiBXZWJHTEJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogV2ViR0xCdWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvcjogQ3ViaXNtVGV4dHVyZUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXg0eDQ6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZighaXNQcmVtdWx0aXBsaWVkQWxwaGEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXCJOb1ByZW11bHRpcGxpZWRBbHBoYSBpcyBub3QgYWxsb3dlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5fc2hhZGVyU2V0cy5nZXRTaXplKCkgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2hhZGVycygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCbGVuZGluZ1xuICAgICAgICAgICAgbGV0IFNSQ19DT0xPUjogbnVtYmVyO1xuICAgICAgICAgICAgbGV0IERTVF9DT0xPUjogbnVtYmVyO1xuICAgICAgICAgICAgbGV0IFNSQ19BTFBIQTogbnVtYmVyO1xuICAgICAgICAgICAgbGV0IERTVF9BTFBIQTogbnVtYmVyO1xuXG4gICAgICAgICAgICBpZihyZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKCkgIT0gbnVsbCkgIC8vIOODnuOCueOCr+eUn+aIkOaZglxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzaGFkZXJTZXQ6IEN1YmlzbVNoYWRlclNldCA9IHRoaXMuX3NoYWRlclNldHMuYXQoU2hhZGVyTmFtZXMuU2hhZGVyTmFtZXNfU2V0dXBNYXNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0oc2hhZGVyU2V0LnNoYWRlclByb2dyYW0pO1xuXG4gICAgICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj6Kit5a6aXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTApO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0ZXh0dXJlSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHNoYWRlclNldC5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiwgMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDpoILngrnphY3liJfjga7oqK3lrpooVkJPKVxuICAgICAgICAgICAgICAgIGlmKGJ1ZmZlckRhdGEudmVydGV4ID09IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJEYXRhLnZlcnRleCA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyRGF0YS52ZXJ0ZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmVydGV4QXJyYXksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclNldC5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyU2V0LmF0dHJpYnV0ZVBvc2l0aW9uTG9jYXRpb24sIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+mggueCueOBruioreWumlxuICAgICAgICAgICAgICAgIGlmKGJ1ZmZlckRhdGEudXYgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckRhdGEudXYgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlckRhdGEudXYpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdXZBcnJheSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoc2hhZGVyU2V0LmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJTZXQuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiwgMiwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgICAgICAgICAgLy8g44OB44Oj44Oz44ON44OrXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbE5vOiBudW1iZXIgPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKCkuX2xheW91dENoYW5uZWxObztcbiAgICAgICAgICAgICAgICBsZXQgY29sb3JDaGFubmVsOiBDdWJpc21UZXh0dXJlQ29sb3IgPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKCkuZ2V0Q2xpcHBpbmdNYW5hZ2VyKCkuZ2V0Q2hhbm5lbEZsYWdBc0NvbG9yKGNoYW5uZWxObyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGYoc2hhZGVyU2V0LnVuaWZvcm1DaGFubmVsRmxhZ0xvY2F0aW9uLCBjb2xvckNoYW5uZWwuUiwgY29sb3JDaGFubmVsLkcsIGNvbG9yQ2hhbm5lbC5CLCBjb2xvckNoYW5uZWwuQSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoc2hhZGVyU2V0LnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24sIGZhbHNlLCByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKCkuX21hdHJpeEZvck1hc2suZ2V0QXJyYXkoKSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVjdDogY3NtUmVjdCA9IHJlbmRlcmVyLmdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2soKS5fbGF5b3V0Qm91bmRzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGYoXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlclNldC51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHJlY3QueCAqIDIuMCAtIDEuMCxcbiAgICAgICAgICAgICAgICAgICAgcmVjdC55ICogMi4wIC0gMS4wLFxuICAgICAgICAgICAgICAgICAgICByZWN0LmdldFJpZ2h0KCkgKiAyLjAgLSAxLjAsXG4gICAgICAgICAgICAgICAgICAgIHJlY3QuZ2V0Qm90dG9tKCkgKiAyLjAgLSAxLjBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgU1JDX0NPTE9SID0gdGhpcy5nbC5aRVJPO1xuICAgICAgICAgICAgICAgIERTVF9DT0xPUiA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19DT0xPUjtcbiAgICAgICAgICAgICAgICBTUkNfQUxQSEEgPSB0aGlzLmdsLlpFUk87XG4gICAgICAgICAgICAgICAgRFNUX0FMUEhBID0gdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSAvLyDjg57jgrnjgq/nlJ/miJDku6XlpJbjga7loLTlkIhcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXNrZWQ6IGJvb2xlYW4gPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3KCkgIT0gbnVsbDsgLy8g44GT44Gu5o+P55S744Kq44OW44K444Kn44Kv44OI44Gv44Oe44K544Kv5a++6LGh44GLXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgPSAobWFza2VkID8gMSA6IDApO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRlclNldDogQ3ViaXNtU2hhZGVyU2V0ID0gbmV3IEN1YmlzbVNoYWRlclNldCgpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoKGNvbG9yQmxlbmRNb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDdWJpc21CbGVuZE1vZGUuQ3ViaXNtQmxlbmRNb2RlX05vcm1hbDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlclNldCA9IHRoaXMuX3NoYWRlclNldHMuYXQoU2hhZGVyTmFtZXMuU2hhZGVyTmFtZXNfTm9ybWFsUHJlbXVsdGlwbGllZEFscGhhICsgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNSQ19DT0xPUiA9IHRoaXMuZ2wuT05FO1xuICAgICAgICAgICAgICAgICAgICAgICAgRFNUX0NPTE9SID0gdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBO1xuICAgICAgICAgICAgICAgICAgICAgICAgU1JDX0FMUEhBID0gdGhpcy5nbC5PTkU7XG4gICAgICAgICAgICAgICAgICAgICAgICBEU1RfQUxQSEEgPSB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIEN1YmlzbUJsZW5kTW9kZS5DdWJpc21CbGVuZE1vZGVfQWRkaXRpdmU6XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZXJTZXQgPSB0aGlzLl9zaGFkZXJTZXRzLmF0KFNoYWRlck5hbWVzLlNoYWRlck5hbWVzX0FkZFByZW11bHRpcGxpZWRBbHBoYSArIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTUkNfQ09MT1IgPSB0aGlzLmdsLk9ORTtcbiAgICAgICAgICAgICAgICAgICAgICAgIERTVF9DT0xPUiA9IHRoaXMuZ2wuT05FO1xuICAgICAgICAgICAgICAgICAgICAgICAgU1JDX0FMUEhBID0gdGhpcy5nbC5aRVJPO1xuICAgICAgICAgICAgICAgICAgICAgICAgRFNUX0FMUEhBID0gdGhpcy5nbC5PTkU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ3ViaXNtQmxlbmRNb2RlLkN1YmlzbUJsZW5kTW9kZV9NdWx0aXBsaWNhdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlclNldCA9IHRoaXMuX3NoYWRlclNldHMuYXQoU2hhZGVyTmFtZXMuU2hhZGVyTmFtZXNfTXVsdFByZW11bHRpcGxpZWRBbHBoYSArIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTUkNfQ09MT1IgPSB0aGlzLmdsLkRTVF9DT0xPUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIERTVF9DT0xPUiA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNSQ19BTFBIQSA9IHRoaXMuZ2wuWkVSTztcbiAgICAgICAgICAgICAgICAgICAgICAgIERTVF9BTFBIQSA9IHRoaXMuZ2wuT05FO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHNoYWRlclNldC5zaGFkZXJQcm9ncmFtKTtcblxuICAgICAgICAgICAgICAgIC8vIOmggueCuemFjeWIl+OBruioreWumlxuICAgICAgICAgICAgICAgIGlmKGJ1ZmZlckRhdGEudmVydGV4ID09IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJEYXRhLnZlcnRleCA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyRGF0YS52ZXJ0ZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmVydGV4QXJyYXksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclNldC5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyU2V0LmF0dHJpYnV0ZVBvc2l0aW9uTG9jYXRpb24sIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+mggueCueOBruioreWumlxuICAgICAgICAgICAgICAgIGlmKGJ1ZmZlckRhdGEudXYgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckRhdGEudXYgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlckRhdGEudXYpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdXZBcnJheSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoc2hhZGVyU2V0LmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJTZXQuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiwgMiwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgICAgICAgICAgaWYobWFza2VkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4OiBXZWJHTFRleHR1cmUgPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3KCkuZ2V0Q2xpcHBpbmdNYW5hZ2VyKCkuZ2V0Q29sb3JCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHNoYWRlclNldC5zYW1wbGVyVGV4dHVyZTFMb2NhdGlvbiwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmlld+W6p+aomeOCkkNsaXBwaW5nQ29udGV4dOOBruW6p+aomeOBq+WkieaPm+OBmeOCi+OBn+OCgeOBruihjOWIl+OCkuioreWumlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoc2hhZGVyU2V0LnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24sIGZhbHNlLHJlbmRlcmVyLmdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoKS5fbWF0cml4Rm9yRHJhdy5nZXRBcnJheSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKjjgZnjgovjgqvjg6njg7zjg4Hjg6Pjg7Pjg43jg6vjgpLoqK3lrppcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbE5vOiBudW1iZXIgPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3KCkuX2xheW91dENoYW5uZWxObztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yQ2hhbm5lbDogQ3ViaXNtVGV4dHVyZUNvbG9yID0gcmVuZGVyZXIuZ2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdygpLmdldENsaXBwaW5nTWFuYWdlcigpLmdldENoYW5uZWxGbGFnQXNDb2xvcihjaGFubmVsTm8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm00ZihzaGFkZXJTZXQudW5pZm9ybUNoYW5uZWxGbGFnTG9jYXRpb24sIGNvbG9yQ2hhbm5lbC5SLCBjb2xvckNoYW5uZWwuRywgY29sb3JDaGFubmVsLkIsIGNvbG9yQ2hhbm5lbC5BKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PoqK3lrppcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRleHR1cmVJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkoc2hhZGVyU2V0LnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uLCAwKTtcblxuICAgICAgICAgICAgICAgIC8vIOW6p+aomeWkieaPm1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdihzaGFkZXJTZXQudW5pZm9ybU1hdHJpeExvY2F0aW9uLCBmYWxzZSwgbWF0cml4NHg0LmdldEFycmF5KCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTRmKHNoYWRlclNldC51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24sIGJhc2VDb2xvci5SLCBiYXNlQ29sb3IuRywgYmFzZUNvbG9yLkIsIGJhc2VDb2xvci5BKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSUJP44KS5L2c5oiQ44GX44CB44OH44O844K/44KS6Lui6YCBXG4gICAgICAgICAgICBpZihidWZmZXJEYXRhLmluZGV4ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyRGF0YS5pbmRleCA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVyRGF0YS5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kZXhBcnJheSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcpO1xuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmNTZXBhcmF0ZShTUkNfQ09MT1IsIERTVF9DT0xPUiwgU1JDX0FMUEhBLCBEU1RfQUxQSEEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOCkuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2VTaGFkZXJQcm9ncmFtKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2hhZGVyU2V0cy5nZXRTaXplKCk7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5fc2hhZGVyU2V0cy5hdChpKS5zaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KGkpLnNoYWRlclByb2dyYW0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuc2V0KGksIHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5zZXQoaSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44KS5Yid5pyf5YyW44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0U2hhZGVyU3JjIOmggueCueOCt+OCp+ODvOODgOOBruOCveODvOOCuVxuICAgICAgICAgKiBAcGFyYW0gZnJhZ1NoYWRlclNyYyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7jgr3jg7zjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZW5lcmF0ZVNoYWRlcnMoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzaGFkZXJDb3VudDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMucHVzaEJhY2sobmV3IEN1YmlzbVNoYWRlclNldCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5zaGFkZXJQcm9ncmFtID0gdGhpcy5sb2FkU2hhZGVyUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTcmNTZXR1cE1hc2ssIGZyYWdtZW50U2hhZGVyU3Jjc2V0dXBNYXNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtID0gdGhpcy5sb2FkU2hhZGVyUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTcmMsIGZyYWdtZW50U2hhZGVyU3JjUHJlbXVsdGlwbGllZEFscGhhKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSA9IHRoaXMubG9hZFNoYWRlclByb2dyYW0odmVydGV4U2hhZGVyU3JjTWFza2VkLCBmcmFnbWVudFNoYWRlclNyY01hc2tQcmVtdWx0aXBsaWVkQWxwaGEpO1xuXG4gICAgICAgICAgICAvLyDliqDnrpfjgoLpgJrluLjjgajlkIzjgZjjgrfjgqfjg7zjg4Djg7zjgpLliKnnlKjjgZnjgotcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMykuc2hhZGVyUHJvZ3JhbSA9IHRoaXMuX3NoYWRlclNldHMuYXQoMSkuc2hhZGVyUHJvZ3JhbTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSA9IHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbTtcblxuICAgICAgICAgICAgLy8g5LmX566X44KC6YCa5bi444Go5ZCM44GY44K344Kn44O844OA44O844KS5Yip55So44GZ44KLXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnNoYWRlclByb2dyYW0gPSB0aGlzLl9zaGFkZXJTZXRzLmF0KDEpLnNoYWRlclByb2dyYW07XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0gPSB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW07XG5cbiAgICAgICAgICAgIC8vIFNldHVwTWFza1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMCkuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5zaGFkZXJQcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTBcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0sIFwidV9jbGlwTWF0cml4XCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS51bmlmb3JtQ2hhbm5lbEZsYWdMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMCkuc2hhZGVyUHJvZ3JhbSwgXCJ1X2NoYW5uZWxGbGFnXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0sIFwidV9iYXNlQ29sb3JcIik7XG5cbiAgICAgICAgICAgIC8vIOmAmuW4uO+8iFByZW11bHRpcGxpZWRBbHBoYe+8iVxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDEpLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMSkuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDEpLnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTBcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDEpLnVuaWZvcm1NYXRyaXhMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMSkuc2hhZGVyUHJvZ3JhbSwgXCJ1X21hdHJpeFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMSkudW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtLCBcInVfYmFzZUNvbG9yXCIpO1xuXG4gICAgICAgICAgICAvLyDpgJrluLjvvIjjgq/jg6rjg4Pjg5Tjg7PjgrDjgIFQcmVtdWx0aXBsaWVkQWxwaGHvvIlcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMikuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zaGFkZXJQcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJhX3RleENvb3JkXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUwXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zYW1wbGVyVGV4dHVyZTFMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUxXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS51bmlmb3JtTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW0sIFwidV9jbGlwTWF0cml4XCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS51bmlmb3JtQ2hhbm5lbEZsYWdMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJ1X2NoYW5uZWxGbGFnXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW0sIFwidV9iYXNlQ29sb3JcIik7XG5cbiAgICAgICAgICAgIC8vIOWKoOeul++8iFByZW11bHRpcGxpZWRBbHBoYe+8iVxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMykuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5zaGFkZXJQcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTBcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLnVuaWZvcm1NYXRyaXhMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMykuc2hhZGVyUHJvZ3JhbSwgXCJ1X21hdHJpeFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMykudW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5zaGFkZXJQcm9ncmFtLCBcInVfYmFzZUNvbG9yXCIpO1xuXG4gICAgICAgICAgICAvLyDliqDnrpfvvIjjgq/jg6rjg4Pjg5Tjg7PjgrDjgIFQcmVtdWx0aXBsaWVkQWxwaGHvvIlcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNCkuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg0KS5zaGFkZXJQcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJhX3RleENvb3JkXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUwXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS5zYW1wbGVyVGV4dHVyZTFMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUxXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS51bmlmb3JtTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwidV9jbGlwTWF0cml4XCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS51bmlmb3JtQ2hhbm5lbEZsYWdMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJ1X2NoYW5uZWxGbGFnXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwidV9iYXNlQ29sb3JcIik7XG5cbiAgICAgICAgICAgIC8vIOS5l+eul++8iFByZW11bHRpcGxpZWRBbHBoYe+8iVxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNSkuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5zaGFkZXJQcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTBcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnVuaWZvcm1NYXRyaXhMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNSkuc2hhZGVyUHJvZ3JhbSwgXCJ1X21hdHJpeFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNSkudW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5zaGFkZXJQcm9ncmFtLCBcInVfYmFzZUNvbG9yXCIpO1xuXG4gICAgICAgICAgICAvLyDkuZfnrpfvvIjjgq/jg6rjg4Pjg5Tjg7PjgrDjgIFQcmVtdWx0aXBsaWVkQWxwaGHvvIlcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNikuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zaGFkZXJQcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNikuc2hhZGVyUHJvZ3JhbSwgXCJhX3RleENvb3JkXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNikuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUwXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zYW1wbGVyVGV4dHVyZTFMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNikuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUxXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS51bmlmb3JtTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIik7XG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0sIFwidV9jbGlwTWF0cml4XCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS51bmlmb3JtQ2hhbm5lbEZsYWdMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNikuc2hhZGVyUHJvZ3JhbSwgXCJ1X2NoYW5uZWxGbGFnXCIpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0sIFwidV9iYXNlQ29sb3JcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K344Kn44O844OA44OX44Ot44Kw44Op44Og44KS44Ot44O844OJ44GX44Gm44Ki44OJ44Os44K544KS6L+U44GZXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhTaGFkZXJTb3VyY2UgICAg6aCC54K544K344Kn44O844OA44Gu44K944O844K5XG4gICAgICAgICAqIEBwYXJhbSBmcmFnbWVudFNoYWRlclNvdXJjZSAg44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu44K944O844K5XG4gICAgICAgICAqIEByZXR1cm4g44K344Kn44O844OA44OX44Ot44Kw44Op44Og44Gu44Ki44OJ44Os44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbG9hZFNoYWRlclByb2dyYW0odmVydGV4U2hhZGVyU291cmNlOiBzdHJpbmcsIGZyYWdtZW50U2hhZGVyU291cmNlOiBzdHJpbmcpOiBXZWJHTFByb2dyYW1cbiAgICAgICAge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIFNoYWRlciBQcm9ncmFtXG4gICAgICAgICAgICBsZXQgc2hhZGVyUHJvZ3JhbTogV2ViR0xQcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgICAgICAgICAgIGxldCB2ZXJ0U2hhZGVyID0gdGhpcy5jb21waWxlU2hhZGVyU291cmNlKHRoaXMuZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICAgICAgICAgICAgaWYoIXZlcnRTaGFkZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXCJWZXJ0ZXggc2hhZGVyIGNvbXBpbGUgZXJyb3IhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZnJhZ1NoYWRlciA9IHRoaXMuY29tcGlsZVNoYWRlclNvdXJjZSh0aGlzLmdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuICAgICAgICAgICAgaWYoIWZyYWdTaGFkZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXCJWZXJ0ZXggc2hhZGVyIGNvbXBpbGUgZXJyb3IhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBdHRhY2ggdmVydGV4IHNoYWRlciB0byBwcm9ncmFtXG4gICAgICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0U2hhZGVyKTtcblxuICAgICAgICAgICAgLy8gQXR0YWNoIGZyYWdtZW50IHNoYWRlciB0byBwcm9ncmFtXG4gICAgICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnU2hhZGVyKTtcblxuICAgICAgICAgICAgLy8gbGluayBwcm9ncmFtXG4gICAgICAgICAgICB0aGlzLmdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pXG4gICAgICAgICAgICBsZXQgbGlua1N0YXR1cyA9IHRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g44Oq44Oz44Kv44Gr5aSx5pWX44GX44Gf44KJ44K344Kn44O844OA44O844KS5YmK6ZmkXG4gICAgICAgICAgICBpZighbGlua1N0YXR1cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dFcnJvcihcIkZhaWxlZCB0byBsaW5rIHByb2dyYW06IHswfVwiLCBzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKHZlcnRTaGFkZXIpO1xuICAgICAgICAgICAgICAgIHZlcnRTaGFkZXIgPSAwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIoZnJhZ1NoYWRlcik7XG4gICAgICAgICAgICAgICAgZnJhZ1NoYWRlciA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZihzaGFkZXJQcm9ncmFtKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgICAgICAgICAgICAgICAgICBzaGFkZXJQcm9ncmFtID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVsZWFzZSB2ZXJ0ZXggYW5kIGZyYWdtZW50IHNoYWRlcnMuXG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcih2ZXJ0U2hhZGVyKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKGZyYWdTaGFkZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHNoYWRlclR5cGUg44K344Kn44O844OA44K/44Kk44OXKFZlcnRleC9GcmFnbWVudClcbiAgICAgICAgICogQHBhcmFtIHNoYWRlclNvdXJjZSDjgrfjgqfjg7zjg4Djgr3jg7zjgrnjgrPjg7zjg4lcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OR44Kk44Or44GV44KM44Gf44K344Kn44O844OA44O844OX44Ot44Kw44Op44OgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29tcGlsZVNoYWRlclNvdXJjZShzaGFkZXJUeXBlOiBHTGVudW0sIHNoYWRlclNvdXJjZTogc3RyaW5nKTogV2ViR0xQcm9ncmFtXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gc2hhZGVyU291cmNlO1xuXG4gICAgICAgICAgICBsZXQgc2hhZGVyOiBXZWJHTFByb2dyYW0gPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighc2hhZGVyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBsb2c6IHN0cmluZyA9IHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0Vycm9yKFwiU2hhZGVyIGNvbXBpbGUgbG9nOiB7MH0gXCIsIGxvZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzdGF0dXM6IGFueSA9IHRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUyk7XG4gICAgICAgICAgICBpZighc3RhdHVzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2V0R2woZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NoYWRlclNldHM6IGNzbVZlY3RvcjxDdWJpc21TaGFkZXJTZXQ+OyAvLyDjg63jg7zjg4njgZfjgZ/jgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgpLkv53mjIHjgZnjgovlpInmlbBcbiAgICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDsgIC8vIHdlYmds44Kz44Oz44OG44Kt44K544OIXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3ViaXNtU2hhZGVyX1dlYkdM44Gu44Kk44Oz44OK44O844Kv44Op44K5XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVNoYWRlclNldFxuICAgIHtcbiAgICAgICAgc2hhZGVyUHJvZ3JhbTogV2ViR0xQcm9ncmFtOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6Djga7jgqLjg4njg6zjgrlcbiAgICAgICAgYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbjogR0x1aW50OyAgICAgICAgICAgICAgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iFBvc2l0aW9u77yJXG4gICAgICAgIGF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb246IEdMdWludDsgICAgICAgICAgICAgICAgICAvLyDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgavmuKHjgZnlpInmlbDjga7jgqLjg4njg6zjgrnvvIhUZXhDb29yZO+8iVxuICAgICAgICB1bmlmb3JtTWF0cml4TG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uOyAgICAgICAgLy8g44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44Gr5rih44GZ5aSJ5pWw44Gu44Ki44OJ44Os44K577yITWF0cml477yJXG4gICAgICAgIHVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uOyAgICAvLyDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgavmuKHjgZnlpInmlbDjga7jgqLjg4njg6zjgrnvvIhDbGlwTWF0cml477yJXG4gICAgICAgIHNhbXBsZXJUZXh0dXJlMExvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjsgICAgICAvLyDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgavmuKHjgZnlpInmlbDjga7jgqLjg4njg6zjgrnvvIhUZXh0dXJlMO+8iVxuICAgICAgICBzYW1wbGVyVGV4dHVyZTFMb2NhdGlvbjogV2ViR0xVbmlmb3JtTG9jYXRpb247ICAgICAgLy8g44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44Gr5rih44GZ5aSJ5pWw44Gu44Ki44OJ44Os44K577yIVGV4dHVyZTHvvIlcbiAgICAgICAgdW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjsgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iEJhc2VDb2xvcu+8iVxuICAgICAgICB1bmlmb3JtQ2hhbm5lbEZsYWdMb2NhdGlvbjogV2ViR0xVbmlmb3JtTG9jYXRpb247ICAgLy8g44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44Gr5rih44GZ5aSJ5pWw44Gu44Ki44OJ44Os44K577yIQ2hhbm5lbEZsYWfvvIlcbiAgICB9XG5cbiAgICBleHBvcnQgZW51bSBTaGFkZXJOYW1lc1xuICAgIHtcbiAgICAgICAgLy8gU2V0dXBNYXNrXG4gICAgICAgIFNoYWRlck5hbWVzX1NldHVwTWFzayxcblxuICAgICAgICAvLyBOb3JtYWxcbiAgICAgICAgU2hhZGVyTmFtZXNfTm9ybWFsUHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgICBTaGFkZXJOYW1lc19Ob3JtYWxNYXNrZWRQcmVtdWx0aXBsaWVkQWxwaGEsXG5cbiAgICAgICAgLy8gQWRkXG4gICAgICAgIFNoYWRlck5hbWVzX0FkZFByZW11bHRpcGxpZWRBbHBoYSxcbiAgICAgICAgU2hhZGVyTmFtZXNfQWRkTWFza2VkUHJlbXVsdGlwbGVkQWxwaGEsXG5cbiAgICAgICAgLy8gTXVsdFxuICAgICAgICBTaGFkZXJOYW1lc19NdWx0UHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgICBTaGFkZXJOYW1lc19NdWx0TWFza2VkUHJlbXVsdGlwbGllZEFscGhhLFxuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgdmVydGV4U2hhZGVyU3JjU2V0dXBNYXNrID1cbiAgICAgICAgXCJhdHRyaWJ1dGUgdmVjNCAgICAgYV9wb3NpdGlvbjtcIiArXG4gICAgICAgIFwiYXR0cmlidXRlIHZlYzIgICAgIGFfdGV4Q29vcmQ7XCIgK1xuICAgICAgICBcInZhcnlpbmcgdmVjMiAgICAgICB2X3RleENvb3JkO1wiICtcbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzQgICAgICAgdl9teVBvcztcIiArXG4gICAgICAgIFwidW5pZm9ybSBtYXQ0ICAgICAgIHVfY2xpcE1hdHJpeDtcIiArXG4gICAgICAgIFwidm9pZCBtYWluKClcIiArXG4gICAgICAgIFwie1wiICtcbiAgICAgICAgXCIgICBnbF9Qb3NpdGlvbiA9IHVfY2xpcE1hdHJpeCAqIGFfcG9zaXRpb247XCIgK1xuICAgICAgICBcIiAgIHZfbXlQb3MgPSB1X2NsaXBNYXRyaXggKiBhX3Bvc2l0aW9uO1wiICtcbiAgICAgICAgXCIgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcIiArXG4gICAgICAgIFwiICAgdl90ZXhDb29yZC55ID0gMS4wIC0gdl90ZXhDb29yZC55O1wiICtcbiAgICAgICAgXCJ9XCI7XG4gICAgZXhwb3J0IGNvbnN0IGZyYWdtZW50U2hhZGVyU3Jjc2V0dXBNYXNrID1cbiAgICAgICAgXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIiArXG4gICAgICAgIFwidmFyeWluZyB2ZWMyICAgICAgIHZfdGV4Q29vcmQ7XCIgK1xuICAgICAgICBcInZhcnlpbmcgdmVjNCAgICAgICB2X215UG9zO1wiICtcbiAgICAgICAgXCJ1bmlmb3JtIHZlYzQgICAgICAgdV9iYXNlQ29sb3I7XCIgK1xuICAgICAgICBcInVuaWZvcm0gdmVjNCAgICAgICB1X2NoYW5uZWxGbGFnO1wiICtcbiAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCAgc190ZXh0dXJlMDtcIiArXG4gICAgICAgIFwidm9pZCBtYWluKClcIiArXG4gICAgICAgIFwie1wiICtcbiAgICAgICAgXCIgICBmbG9hdCBpc0luc2lkZSA9IFwiICtcbiAgICAgICAgXCIgICAgICAgc3RlcCh1X2Jhc2VDb2xvci54LCB2X215UG9zLngvdl9teVBvcy53KVwiICtcbiAgICAgICAgXCIgICAgICAgKiBzdGVwKHVfYmFzZUNvbG9yLnksIHZfbXlQb3MueS92X215UG9zLncpXCIgK1xuICAgICAgICBcIiAgICAgICAqIHN0ZXAodl9teVBvcy54L3ZfbXlQb3MudywgdV9iYXNlQ29sb3IueilcIiArXG4gICAgICAgIFwiICAgICAgICogc3RlcCh2X215UG9zLnkvdl9teVBvcy53LCB1X2Jhc2VDb2xvci53KTtcIiArXG4gICAgICAgIFwiICAgZ2xfRnJhZ0NvbG9yID0gdV9jaGFubmVsRmxhZyAqIHRleHR1cmUyRChzX3RleHR1cmUwLCB2X3RleENvb3JkKS5hICogaXNJbnNpZGU7XCIgK1xuICAgICAgICBcIn1cIjtcblxuICAgIC8vLS0tLS0g44OQ44O844OG44OD44Kv44K544K344Kn44O844OA44OX44Ot44Kw44Op44OgIC0tLS0tXG4gICAgLy8gTm9ybWFsICYgQWRkICYgTXVsdCDlhbHpgJpcbiAgICBleHBvcnQgY29uc3QgdmVydGV4U2hhZGVyU3JjID1cbiAgICAgICAgXCJhdHRyaWJ1dGUgdmVjNCAgICAgYV9wb3NpdGlvbjtcIiArIC8vdi52ZXJ0ZXhcbiAgICAgICAgXCJhdHRyaWJ1dGUgdmVjMiAgICAgYV90ZXhDb29yZDtcIiArIC8vdi50ZXhjb29yZFxuICAgICAgICBcInZhcnlpbmcgdmVjMiAgICAgICB2X3RleENvb3JkO1wiICsgLy92MmYudGV4Y29vcmRcbiAgICAgICAgXCJ1bmlmb3JtIG1hdDQgICAgICAgdV9tYXRyaXg7XCIgK1xuICAgICAgICBcInZvaWQgbWFpbigpXCIgK1xuICAgICAgICBcIntcIiArXG4gICAgICAgIFwiICAgZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqIGFfcG9zaXRpb247XCIgK1xuICAgICAgICBcIiAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1wiICtcbiAgICAgICAgXCIgICB2X3RleENvb3JkLnkgPSAxLjAgLSB2X3RleENvb3JkLnk7XCIgK1xuICAgICAgICBcIn1cIjtcblxuICAgIC8vIE5vcm1hbCAmIEFkZCAmIE11bHQg5YWx6YCa77yI44Kv44Oq44OD44OU44Oz44Kw44GV44KM44Gf44KC44Gu44Gu5o+P55S755So77yJXG4gICAgZXhwb3J0IGNvbnN0IHZlcnRleFNoYWRlclNyY01hc2tlZCA9XG4gICAgICAgIFwiYXR0cmlidXRlIHZlYzQgICAgIGFfcG9zaXRpb247XCIgK1xuICAgICAgICBcImF0dHJpYnV0ZSB2ZWMyICAgICBhX3RleENvb3JkO1wiICtcbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzIgICAgICAgdl90ZXhDb29yZDtcIiArXG4gICAgICAgIFwidmFyeWluZyB2ZWM0ICAgICAgIHZfY2xpcFBvcztcIiArXG4gICAgICAgIFwidW5pZm9ybSBtYXQ0ICAgICAgIHVfbWF0cml4O1wiICtcbiAgICAgICAgXCJ1bmlmb3JtIG1hdDQgICAgICAgdV9jbGlwTWF0cml4O1wiICtcbiAgICAgICAgXCJ2b2lkIG1haW4oKVwiICtcbiAgICAgICAgXCJ7XCIgK1xuICAgICAgICBcIiAgIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBhX3Bvc2l0aW9uO1wiICtcbiAgICAgICAgXCIgICB2X2NsaXBQb3MgPSB1X2NsaXBNYXRyaXggKiBhX3Bvc2l0aW9uO1wiICtcbiAgICAgICAgXCIgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcIiArXG4gICAgICAgIFwiICAgdl90ZXhDb29yZC55ID0gMS4wIC0gdl90ZXhDb29yZC55O1wiICtcbiAgICAgICAgXCJ9XCI7XG5cbiAgICAvLy0tLS0tIOODleODqeOCsOODoeODs+ODiOOCt+OCp+ODvOODgOODl+ODreOCsOODqeODoCAtLS0tLVxuICAgIC8vIE5vcm1hbCAmIEFkZCAmIE11bHQg5YWx6YCaIO+8iFByZW11bHRpcGxpZWRBbHBoYe+8iVxuICAgIGV4cG9ydCBjb25zdCBmcmFnbWVudFNoYWRlclNyY1ByZW11bHRpcGxpZWRBbHBoYSA9XG4gICAgICAgIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIgK1xuICAgICAgICBcInZhcnlpbmcgdmVjMiAgICAgICB2X3RleENvb3JkO1wiICsgLy92MmYudGV4Y29vcmRcbiAgICAgICAgXCJ1bmlmb3JtIHZlYzQgICAgICAgdV9iYXNlQ29sb3I7XCIgK1xuICAgICAgICBcInVuaWZvcm0gc2FtcGxlcjJEICBzX3RleHR1cmUwO1wiICsgLy9fTWFpblRleFxuICAgICAgICBcInZvaWQgbWFpbigpXCIgK1xuICAgICAgICBcIntcIiArXG4gICAgICAgIFwiICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHNfdGV4dHVyZTAgLCB2X3RleENvb3JkKSAqIHVfYmFzZUNvbG9yO1wiICtcbiAgICAgICAgXCJ9XCI7XG5cbiAgICAvLyBOb3JtYWwg77yI44Kv44Oq44OD44OU44Oz44Kw44GV44KM44Gf44KC44Gu44Gu5o+P55S755So44CBUHJlbXVsdGlwbGllZEFscGhh5YW855So77yJXG4gICAgZXhwb3J0IGNvbnN0IGZyYWdtZW50U2hhZGVyU3JjTWFza1ByZW11bHRpcGxpZWRBbHBoYSA9XG4gICAgICAgIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIgK1xuICAgICAgICBcInZhcnlpbmcgdmVjMiAgICAgICB2X3RleENvb3JkO1wiICtcbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzQgICAgICAgdl9jbGlwUG9zO1wiICtcbiAgICAgICAgXCJ1bmlmb3JtIHZlYzQgICAgICAgdV9iYXNlQ29sb3I7XCIgK1xuICAgICAgICBcInVuaWZvcm0gdmVjNCAgICAgICB1X2NoYW5uZWxGbGFnO1wiICtcbiAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCAgc190ZXh0dXJlMDtcIiArXG4gICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgIHNfdGV4dHVyZTE7XCIgK1xuICAgICAgICBcInZvaWQgbWFpbigpXCIgK1xuICAgICAgICBcIntcIiArXG4gICAgICAgIFwiICAgdmVjNCBjb2xfZm9ybWFzayA9IHRleHR1cmUyRChzX3RleHR1cmUwICwgdl90ZXhDb29yZCkgKiB1X2Jhc2VDb2xvcjtcIiArXG4gICAgICAgIFwiICAgdmVjNCBjbGlwTWFzayA9ICgxLjAgLSB0ZXh0dXJlMkQoc190ZXh0dXJlMSwgdl9jbGlwUG9zLnh5IC8gdl9jbGlwUG9zLncpKSAqIHVfY2hhbm5lbEZsYWc7XCIgK1xuICAgICAgICBcIiAgIGZsb2F0IG1hc2tWYWwgPSBjbGlwTWFzay5yICsgY2xpcE1hc2suZyArIGNsaXBNYXNrLmIgKyBjbGlwTWFzay5hO1wiICtcbiAgICAgICAgXCIgICBjb2xfZm9ybWFzayA9IGNvbF9mb3JtYXNrICogbWFza1ZhbDtcIiArXG4gICAgICAgIFwiICAgZ2xfRnJhZ0NvbG9yID0gY29sX2Zvcm1hc2s7XCIgK1xuICAgICAgICBcIn1cIjtcblxuICAgIC8qKlxuICAgICAqIFdlYkdM55So44Gu5o+P55S75ZG95Luk44KS5a6f6KOF44GX44Gf44Kv44Op44K5XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVJlbmRlcmVyX1dlYkdMIGV4dGVuZHMgQ3ViaXNtUmVuZGVyZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICog5byV5pWw44Gr5rih44GX44Gf44Oi44OH44Or44GL44KJ44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44Gr5b+F6KaB44Gq5oOF5aCx44KS5Y+W44KK5Ye644GZ44GT44Go44GM44Gn44GN44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44Or44Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZShtb2RlbDogQ3ViaXNtTW9kZWwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG1vZGVsLmlzVXNpbmdNYXNraW5nKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyID0gbmV3IEN1YmlzbUNsaXBwaW5nTWFuYWdlcl9XZWJHTCgpOyAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jg7vjg5Djg4Pjg5XjgqHliY3lh6bnkIbmlrnlvI/jgpLliJ3mnJ/ljJZcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIuaW5pdGlhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldERyYXdhYmxlQ291bnQoKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVNYXNrcygpLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZU1hc2tDb3VudHMoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0LnJlc2l6ZShtb2RlbC5nZXREcmF3YWJsZUNvdW50KCksIDApO1xuXG4gICAgICAgICAgICBzdXBlci5pbml0aWFsaXplKG1vZGVsKTsgLy8g6Kaq44Kv44Op44K544Gu5Yem55CG44KS5ZG844G2XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV2ViR0zjg4bjgq/jgrnjg4Hjg6Pjga7jg5DjgqTjg7Pjg4nlh6bnkIZcbiAgICAgICAgICogQ3ViaXNtUmVuZGVyZXLjgavjg4bjgq/jgrnjg4Hjg6PjgpLoqK3lrprjgZfjgIFDdWJpc21SZW5kZXJlcuWGheOBp+OBneOBrueUu+WDj+OCkuWPgueFp+OBmeOCi+OBn+OCgeOBrkluZGV45YCk44KS5oi744KK5YCk44Go44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbFRleHR1cmVObyDjgrvjg4Pjg4jjgZnjgovjg6Ljg4fjg6vjg4bjgq/jgrnjg4Hjg6Pjga7nlarlj7dcbiAgICAgICAgICogQHBhcmFtIGdsVGV4dHVyZU5vIFdlYkdM44OG44Kv44K544OB44Oj44Gu55Wq5Y+3XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYmluZFRleHR1cmUobW9kZWxUZXh0dXJlTm86IG51bWJlciwgZ2xUZXh0dXJlOiBXZWJHTFRleHR1cmUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzLnNldFZhbHVlKG1vZGVsVGV4dHVyZU5vLCBnbFRleHR1cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlYkdM44Gr44OQ44Kk44Oz44OJ44GV44KM44Gf44OG44Kv44K544OB44Oj44Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44Gu44Oq44K544OIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QmluZGVkVGV4dHVyZXMoKTogY3NtTWFwPG51bWJlciwgV2ViR0xUZXh0dXJlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44OQ44OD44OV44Kh44Gu44K144Kk44K644KS6Kit5a6a44GZ44KLXG4gICAgICAgICAqIOODnuOCueOCr+eUqOOBrkZyYW1lQnVmZmVy44KS56C05qOE44CB5YaN5L2c5oiQ44GZ44KL54K65Yem55CG44Kz44K544OI44Gv6auY44GEXG4gICAgICAgICAqIEBwYXJhbSBzaXplIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldENsaXBwaW5nTWFza0J1ZmZlclNpemUoc2l6ZTogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBGcmFtZUJ1ZmZlcuOBruOCteOCpOOCuuOCkuWkieabtOOBmeOCi+OBn+OCgeOBq+OCpOODs+OCueOCv+ODs+OCueOCkuegtOajhOODu+WGjeS9nOaIkOOBmeOCi1xuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IG5ldyBDdWJpc21DbGlwcGluZ01hbmFnZXJfV2ViR0woKTtcblxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyLnNldENsaXBwaW5nTWFza0J1ZmZlclNpemUoc2l6ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlci5pbml0aWFsaXplKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVDb3VudCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5nZXREcmF3YWJsZU1hc2tzKCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlTWFza0NvdW50cygpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCuuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldENsaXBwaW5nTWFza0J1ZmZlclNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGlwcGluZ01hbmFnZXIuZ2V0Q2xpcHBpbmdNYXNrQnVmZmVyU2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2sgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIgPSBuZXcgQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMKCk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RHJhdyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlcyA9IG5ldyBjc21NYXA8bnVtYmVyLCBudW1iZXI+KCk7XG4gICAgICAgICAgICB0aGlzLl9zb3J0ZWREcmF3YWJsZUluZGV4TGlzdCA9IG5ldyBjc21WZWN0b3I8bnVtYmVyPigpO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YSA9IHtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXg6IFdlYkdMQnVmZmVyID0gbnVsbCxcbiAgICAgICAgICAgICAgICB1djogV2ViR0xCdWZmZXIgPSBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4OiBXZWJHTEJ1ZmZlciA9IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+WvvuW/nOODnuODg+ODl+OBruWuuemHj+OCkueiuuS/neOBl+OBpuOBiuOBj1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZXMucHJlcGFyZUNhcGFjaXR5KDMyLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlckRhdGEudmVydGV4KTtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlckRhdGEudmVydGV4ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlckRhdGEudXYpO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YS51diA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLl9idWZmZXJEYXRhLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlckRhdGEuaW5kZXggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YSA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovlrp/pmpvjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkb0RyYXdNb2RlbCgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODu+ODkOODg+ODleOCoeWJjeWHpueQhuaWueW8j+OBruWgtOWQiCAtLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmKHRoaXMuX2NsaXBwaW5nTWFuYWdlciAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlRHJhdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlci5zZXR1cENsaXBwaW5nQ29udGV4dCh0aGlzLmdldE1vZGVsKCksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDkuIroqJjjgq/jg6rjg4Pjg5Tjg7PjgrDlh6bnkIblhoXjgafjgoLkuIDluqZQcmVEcmF344KS5ZG844G244Gu44Gn5rOo5oSPISFcbiAgICAgICAgICAgIHRoaXMucHJlRHJhdygpO1xuXG4gICAgICAgICAgICBjb25zdCBkcmF3YWJsZUNvdW50OiBudW1iZXIgPSB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVDb3VudCgpO1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyT3JkZXI6IEludDMyQXJyYXkgPSB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVSZW5kZXJPcmRlcnMoKTtcblxuICAgICAgICAgICAgLy8g44Kk44Oz44OH44OD44Kv44K544KS5o+P55S76aCG44Gn44K944O844OIXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkcmF3YWJsZUNvdW50OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXI6IG51bWJlciA9IHJlbmRlck9yZGVyW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0LnNldChvcmRlciwgaSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaPj+eUu1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZHJhd2FibGVDb3VudDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlSW5kZXg6IG51bWJlciA9IHRoaXMuX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0LmF0KGkpO1xuXG4gICAgICAgICAgICAgICAgLy8gRHJhd2FibGXjgYzooajnpLrnirbmhYvjgafjgarjgZHjgozjgbDlh6bnkIbjgpLjg5HjgrnjgZnjgotcbiAgICAgICAgICAgICAgICBpZighdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlRHluYW1pY0ZsYWdJc1Zpc2libGUoZHJhd2FibGVJbmRleCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICAgICAgICB0aGlzLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLl9jbGlwcGluZ01hbmFnZXIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgPyAodGhpcy5fY2xpcHBpbmdNYW5hZ2VyLmdldENsaXBwaW5nQ29udGV4dExpc3RGb3JEcmF3KCkpLmF0KGRyYXdhYmxlSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldElzQ3VsbGluZyh0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVDdWxsaW5nKGRyYXdhYmxlSW5kZXgpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd01lc2goXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5nZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzKGRyYXdhYmxlSW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVWZXJ0ZXhJbmRleENvdW50KGRyYXdhYmxlSW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVWZXJ0ZXhDb3VudChkcmF3YWJsZUluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlVmVydGV4SW5kaWNlcyhkcmF3YWJsZUluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlVmVydGljZXMoZHJhd2FibGVJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5nZXREcmF3YWJsZVZlcnRleFV2cyhkcmF3YWJsZUluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlT3BhY2l0eShkcmF3YWJsZUluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlQmxlbmRNb2RlKGRyYXdhYmxlSW5kZXgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBb44Kq44O844OQ44O844Op44Kk44OJXVxuICAgICAgICAgKiDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvIjjgqLjg7zjg4jjg6Hjg4Pjgrfjg6XvvInjgpLmj4/nlLvjgZnjgovjgIJcbiAgICAgICAgICog44Od44Oq44K044Oz44Oh44OD44K344Ol44Go44OG44Kv44K544OB44Oj55Wq5Y+344KS44K744OD44OI44Gn5rih44GZ44CCXG4gICAgICAgICAqIEBwYXJhbSB0ZXh0dXJlTm8g5o+P55S744GZ44KL44OG44Kv44K544OB44Oj55Wq5Y+3XG4gICAgICAgICAqIEBwYXJhbSBpbmRleENvdW50IOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXG4gICAgICAgICAqIEBwYXJhbSBpbmRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBruOCpOODs+ODh+ODg+OCr+OCuemFjeWIl1xuICAgICAgICAgKiBAcGFyYW0gdmVydGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K56YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSB1dkFycmF5IHV26YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSBvcGFjaXR5IOS4jemAj+aYjuW6plxuICAgICAgICAgKiBAcGFyYW0gY29sb3JCbGVuZE1vZGUg44Kr44Op44O85ZCI5oiQ44K/44Kk44OXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZHJhd01lc2godGV4dHVyZU5vOiBudW1iZXIsIGluZGV4Q291bnQ6IG51bWJlciwgdmVydGV4Q291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QXJyYXk6IFVpbnQxNkFycmF5LCB2ZXJ0ZXhBcnJheTogRmxvYXQzMkFycmF5LCB1dkFycmF5OiBGbG9hdDMyQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBudW1iZXIsIGNvbG9yQmxlbmRNb2RlOiBDdWJpc21CbGVuZE1vZGUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOijj+mdouaPj+eUu+OBruacieWKueODu+eEoeWKuVxuICAgICAgICAgICAgaWYodGhpcy5pc0N1bGxpbmcoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nbC5mcm9udEZhY2UodGhpcy5nbC5DQ1cpOyAgICAvLyBDdWJpc20zIE9wZW5HTOOBr+ODnuOCueOCr+ODu+OCouODvOODiOODoeODg+OCt+ODpeWFseOBq0NDV+OBjOihqOmdolxuXG4gICAgICAgICAgICBsZXQgbW9kZWxDb2xvclJHQkE6IEN1YmlzbVRleHR1cmVDb2xvciA9IHRoaXMuZ2V0TW9kZWxDb2xvcigpO1xuXG4gICAgICAgICAgICBpZih0aGlzLmdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2soKSA9PSBudWxsKSAgLy8g44Oe44K544Kv55Sf5oiQ5pmC5Lul5aSWXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW9kZWxDb2xvclJHQkEuQSAqPSBvcGFjaXR5O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQcmVtdWx0aXBsaWVkQWxwaGEoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsQ29sb3JSR0JBLlIgKj0gbW9kZWxDb2xvclJHQkEuQTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxDb2xvclJHQkEuRyAqPSBtb2RlbENvbG9yUkdCQS5BO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbENvbG9yUkdCQS5CICo9IG1vZGVsQ29sb3JSR0JBLkE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZHJhd3RleHR1cmU6IFdlYkdMVGV4dHVyZTsgIC8vIOOCt+OCp+ODvOODgOOBq+a4oeOBmeODhuOCr+OCueODgeODo1xuXG4gICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjg57jg4Pjg5fjgYvjgonjg5DjgqTjg7Pjg4nmuIjjgb/jg4bjgq/jgrnjg4Hjg6PvvKnvvKTjgpLlj5blvpdcbiAgICAgICAgICAgIC8vIOODkOOCpOODs+ODieOBleOCjOOBpuOBhOOBquOBkeOCjOOBsOODgOODn+ODvOOBruODhuOCr+OCueODgeODo0lE44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAgICBpZih0aGlzLl90ZXh0dXJlcy5nZXRWYWx1ZSh0ZXh0dXJlTm8pICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZHJhd3RleHR1cmUgPSB0aGlzLl90ZXh0dXJlcy5nZXRWYWx1ZSh0ZXh0dXJlTm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRyYXd0ZXh0dXJlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ3ViaXNtU2hhZGVyX1dlYkdMLmdldEluc3RhbmNlKCkuc2V0dXBTaGFkZXJQcm9ncmFtKFxuICAgICAgICAgICAgICAgIHRoaXMsIGRyYXd0ZXh0dXJlLCB2ZXJ0ZXhDb3VudCwgdmVydGV4QXJyYXksIGluZGV4QXJyYXksIHV2QXJyYXksXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5LCBjb2xvckJsZW5kTW9kZSwgbW9kZWxDb2xvclJHQkEsIHRoaXMuaXNQcmVtdWx0aXBsaWVkQWxwaGEoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldE12cE1hdHJpeCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6XjgpLmj4/nlLvjgZnjgotcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMuZ2wuVFJJQU5HTEVTLCBpbmRleENvdW50LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwKTtcblxuICAgICAgICAgICAgLy8g5b6M5Yem55CGXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0obnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcobnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2sobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44GM5L+d5oyB44GZ44KL6Z2Z55qE44Gq44Oq44K944O844K544KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqIFdlYkdM44Gu6Z2Z55qE44Gq44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRvU3RhdGljUmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIEN1YmlzbVNoYWRlcl9XZWJHTC5kZWxldGVJbnN0YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODvOOCueODhuODvOODiOOCkuioreWumuOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZmJvIOOCouODl+ODquOCseODvOOCt+ODp+ODs+WBtOOBp+aMh+WumuOBl+OBpuOBhOOCi+ODleODrOODvOODoOODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gdmlld3BvcnQg44OT44Ol44O844Od44O844OIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0UmVuZGVyU3RhdGUoZmJvOiBXZWJHTEZyYW1lYnVmZmVyLCB2aWV3cG9ydDogbnVtYmVyW10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNfZmJvID0gZmJvO1xuICAgICAgICAgICAgc192aWV3cG9ydCA9IHZpZXdwb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaPj+eUu+mWi+Wni+aZguOBrui/veWKoOWHpueQhlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovliY3jgavjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgavlv4XopoHjgarlh6bnkIbjgpLlrp/oo4XjgZfjgabjgYTjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEcmF3KCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5maXJzdERyYXcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdERyYXcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIOaLoeW8teapn+iDveOCkuacieWKueOBq+OBmeOCi1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSB0aGlzLmdsLmdldEV4dGVuc2lvbihcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmdldEV4dGVuc2lvbihcIldFQktJVF9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5TQ0lTU09SX1RFU1QpO1xuICAgICAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuU1RFTkNJTF9URVNUKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAgICAgICAvLyDjgqvjg6rjg7PjgrDvvIgxLjBiZXRhM++8iVxuICAgICAgICAgICAgdGhpcy5nbC5mcm9udEZhY2UodGhpcy5nbC5DVyk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICAgICAgdGhpcy5nbC5jb2xvck1hc2sodHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7ICAvLyDliY3jgavjg5Djg4Pjg5XjgqHjgYzjg5DjgqTjg7Pjg4njgZXjgozjgabjgYTjgZ/jgonnoLTmo4TjgZnjgovlv4XopoHjgYzjgYLjgotcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg57jgrnjgq/jg4bjgq/jgrnjg4Hjg6Pjgavmj4/nlLvjgZnjgovjgq/jg6rjg4Pjg5Tjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4jjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKGNsaXA6IEN1YmlzbUNsaXBwaW5nQ29udGV4dClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzayA9IGNsaXA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oe44K544Kv44OG44Kv44K544OB44Oj44Gr5o+P55S744GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4g44Oe44K544Kv44OG44Kv44K544OB44Oj44Gr5o+P55S744GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OIXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzaygpOiBDdWJpc21DbGlwcGluZ0NvbnRleHRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2s7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog55S76Z2i5LiK44Gr5o+P55S744GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OI44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdyhjbGlwOiBDdWJpc21DbGlwcGluZ0NvbnRleHQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcgPSBjbGlwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeUu+mdouS4iuOBq+aPj+eUu+OBmeOCi+OCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOeUu+mdouS4iuOBq+aPj+eUu+OBmeOCi+OCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoKTogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGds44Gu6Kit5a6aXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhcnRVcChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIuc2V0R0woZ2wpO1xuICAgICAgICAgICAgQ3ViaXNtU2hhZGVyX1dlYkdMLmdldEluc3RhbmNlKCkuc2V0R2woZ2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RleHR1cmVzOiBjc21NYXA8bnVtYmVyLCBXZWJHTFRleHR1cmU+OyAgICAgICAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6vjgYzlj4LnhafjgZnjgovjg4bjgq/jgrnjg4Hjg6Pjgajjg6zjg7Pjg4Djg6njgafjg5DjgqTjg7Pjg4njgZfjgabjgYTjgovjg4bjgq/jgrnjg4Hjg6Pjgajjga7jg57jg4Pjg5dcbiAgICAgICAgX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0OiBjc21WZWN0b3I8bnVtYmVyPjsgICAgICAgICAgICAgLy8g5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K544KS5o+P55S76aCG44Gr5Lim44G544Gf44Oq44K544OIXG4gICAgICAgIF9jbGlwcGluZ01hbmFnZXI6IEN1YmlzbUNsaXBwaW5nTWFuYWdlcl9XZWJHTDsgICAgICAgICAgLy8g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv566h55CG44Kq44OW44K444Kn44Kv44OIXG4gICAgICAgIF9jbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrOiBDdWJpc21DbGlwcGluZ0NvbnRleHQ7ICAgLy8g44Oe44K544Kv44OG44Kv44K544OB44Oj44Gr5o+P55S744GZ44KL44Gf44KB44Gu44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OIXG4gICAgICAgIF9jbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3OiBDdWJpc21DbGlwcGluZ0NvbnRleHQ7ICAgLy8g55S76Z2i5LiK5o+P55S744GZ44KL44Gf44KB44Gu44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OIXG4gICAgICAgIGZpcnN0RHJhdzogYm9vbGVhbjtcbiAgICAgICAgX2J1ZmZlckRhdGE6IHtcbiAgICAgICAgICAgIHZlcnRleDogV2ViR0xCdWZmZXIsXG4gICAgICAgICAgICB1djogV2ViR0xCdWZmZXIsXG4gICAgICAgICAgICBpbmRleDogV2ViR0xCdWZmZXJcbiAgICAgICAgfTsgLy8g6aCC54K544OQ44OD44OV44Kh44OH44O844K/XG4gICAgICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7ICAvLyB3ZWJnbOOCs+ODs+ODhuOCreOCueODiFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xuICAgICAqL1xuICAgIEN1YmlzbVJlbmRlcmVyLnN0YXRpY1JlbGVhc2UgPSAoKTogdm9pZCA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtUmVuZGVyZXJfV2ViR0wuZG9TdGF0aWNSZWxlYXNlKCk7XG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IEN1YmlzbUxvZ0RlYnVnIH0gZnJvbSBcIi4uL3V0aWxzL2N1YmlzbWRlYnVnXCI7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogS2V5LVZhbHVl44Gu44Oa44Ki44KS5a6a576p44GZ44KL44Kv44Op44K5XG4gICAgICogY3NtTWFw44Kv44Op44K544Gu5YaF6YOo44OH44O844K/44Gn5L2/55So44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVBhaXI8X0tleVQsIF9WYWxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0ga2V5IEtleeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWXjgajjgZfjgabjgrvjg4Pjg4jjgZnjgovlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihrZXk/OiBfS2V5VCwgdmFsdWU/OiBfVmFsVClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IChrZXkgPT0gdW5kZWZpbmVkKSBcbiAgICAgICAgICAgICAgICA/IG51bGwgXG4gICAgICAgICAgICAgICAgOiBrZXk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gKHZhbHVlID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IHZhbHVlOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGZpcnN0OiBfS2V5VDsgICAvLyBrZXnjgajjgZfjgabnlKjjgYTjgovlpInmlbBcbiAgICAgICAgcHVibGljIHNlY29uZDogX1ZhbFQ7ICAvLyB2YWx1ZeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODnuODg+ODl+Wei1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBjc21NYXA8X0tleVQsIF9WYWxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDliJ3mnJ/ljJbmmYLngrnjgafnorrkv53jgZnjgovjgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplPzogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzaXplICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihzaXplIDwgMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kdW1teVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbGVhc2UoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgq3jg7zjgpLov73liqDjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGtleSDmlrDjgZ/jgavov73liqDjgZnjgovjgq3jg7xcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmRLZXkoa2V5OiBfS2V5VCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g5paw44GX44GPS2V5L1ZhbHVl44Gu44Oa44Ki44KS5L2c44KLXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9zaXplICsgMSwgZmFsc2UpOyAvLyAx44Gk5Lul5LiK5YWl44KL6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICAvLyDmlrDjgZfjgYRrZXkvdmFsdWXjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga9fc2l6ZVxuXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZV0gPSBuZXcgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+KGtleSk7XG4gICAgICAgICAgICB0aGlzLl9zaXplICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koZ2V0KVxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWUoa2V5OiBfS2V5VCk6IF9WYWxUXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShzZXQpXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOS7o+WFpeOBmeOCi1ZhbHVl5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0VmFsdWUoa2V5OiBfS2V5VCwgdmFsdWU6IF9WYWxUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSAtMTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZm91bmQgPj0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplIC0gMV0uc2Vjb25kID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDjgafmuKHjgZfjgZ9LZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgovjgYtcbiAgICAgICAgICogQHBhcmFtIGtleSDlrZjlnKjjgpLnorroqo3jgZnjgotrZXlcbiAgICAgICAgICogQHJldHVybiB0cnVlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBl+OBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXhpc3Qoa2V5OiBfS2V5VCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBrZXlWYWx1ZeOBruODneOCpOODs+OCv+OCkuWFqOOBpuino+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCteOCpOOCuuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GE44CCXG4gICAgICAgICAqIEBwYXJhbSBmaXRUb1NpemUgdHJ1ZeOBquOCieaMh+WumuOBl+OBn+OCteOCpOOCuuOBq+WQiOOCj+OBm+OCi+OAgmZhbHNl44Gq44KJ44K144Kk44K644KSMuWAjeeiuuS/neOBl+OBpuOBiuOBj+OAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIsIGZpdFRvU2l6ZTogYm9vbGVhbik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2tleVZhbHVlcy5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgY3NtTWFwLkRlZmF1bHRTaXplKSBuZXdTaXplID0gY3NtTWFwLkRlZmF1bHRTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCAqIDIpIG5ld1NpemUgPSB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgdGhpcy5fc2l6ZSk7IC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlOyAvLyDliYrpmaTnr4Tlm7LlpJZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5YmK6ZmkXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcblxuICAgICAgICAgICAgbGV0IGl0ZTI6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCBpbmRleCk7IC8vIOe1guS6hlxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YCk44KSMzLjg5Pjg4Pjg4jnrKblj7fku5jjgY3mlbTmlbDlnovjgafjg4Djg7Pjg5fjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkdW1wQXNJbnQoKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiezB9ICxcIiwgdGhpcy5fa2V5VmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcIlxcblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK44Gu5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XG4gICAgICAgIHB1YmxpYyBfa2V5VmFsdWVzOiBjc21QYWlyPF9LZXlULCBfVmFsVD5bXTsvLyBrZXktdmFsdWXjg5rjgqLjga7phY3liJdcbiAgICAgICAgcHVibGljIF9kdW1teVZhbHVlOiBfVmFsVDsgIC8vIOepuuOBruWApOOCkui/lOOBmeeCuuOBruODgOODn+ODvFxuICAgICAgICBwdWJsaWMgX3NpemU6IG51bWJlcjsgICAgICAgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBjc21NYXA8VD7jga7jgqTjg4bjg6zjg7zjgr9cbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3Iodj86IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+LCBpZHg/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9ICh2ICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IHZcbiAgICAgICAgICAgICAgICA6IG5ldyBjc21NYXA8X0tleVQsIF9WYWxUPigpO1xuXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpZHggIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gaWR4XG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGUuX21hcDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjSsr5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgrKyk7ICAvLyDlj6TjgYTlgKTjgpLkv53lrZhcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZW9sZC5fbWFwO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCk7IC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAq5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHRyKCk6IGNzbVBhaXI8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwLl9rZXlWYWx1ZXNbdGhpcy5faW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICE95ryU566XXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbm90RXF1YWwoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl9tYXAgIT0gaXRlLl9tYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgX2luZGV4OiBudW1iZXI7ICAgICAgICAgICAgIC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxuICAgICAgICBfbWFwOiBjc21NYXA8X0tleVQsIF9WYWxUPjsgLy8g44Kz44Oz44OG44OKXG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog55+p5b2i5b2i54q277yI5bqn5qiZ44O76ZW344GV44GvZmxvYXTlgKTvvInjgpLlrprnvqnjgZnjgovjgq/jg6njgrlcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtUmVjdFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0geCDlt6bnq69Y5bqn5qiZXG4gICAgICAgICAqIEBwYXJhbSB5IOS4iuerr1nluqfmqJlcbiAgICAgICAgICogQHBhcmFtIHcg5bmFXG4gICAgICAgICAqIEBwYXJhbSBoIOmrmOOBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog55+p5b2i5Lit5aSu44GuWOW6p+aomeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldENlbnRlclgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnggKyAwLjUgKiB0aGlzLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOefqeW9ouS4reWkruOBrlnluqfmqJnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRDZW50ZXJZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgMC41ICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+z5YG044GuWOW6p+aomeOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJpZ2h0KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuIvnq6/jga5Z5bqn5qiZ44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Qm90dG9tKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog55+p5b2i44Gr5YCk44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSByIOefqeW9ouOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFJlY3QocjogY3NtUmVjdCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy54ID0gci54O1xuICAgICAgICAgICAgdGhpcy55ID0gci55O1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHIud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHIuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOefqeW9ouS4reWkruOCkui7uOOBq+OBl+OBpue4puaoquOCkuaLoee4ruOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdyDluYXmlrnlkJHjgavmi6HnuK7jgZnjgovph49cbiAgICAgICAgICogQHBhcmFtIGgg6auY44GV5pa55ZCR44Gr5ouh57iu44GZ44KL6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZXhwYW5kKHc6IG51bWJlciwgaDogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnggLT0gdztcbiAgICAgICAgICAgIHRoaXMueSAtPSBoO1xuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB3ICogMi4wO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgKz0gaCAqIDIuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXI7ICAgICAgLy8g5bem56uvWOW6p+aomVxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyOyAgICAgIC8vIOS4iuerr1nluqfmqJlcbiAgICAgICAgcHVibGljIHdpZHRoOiBudW1iZXI7ICAvLyDluYVcbiAgICAgICAgcHVibGljIGhlaWdodDogbnVtYmVyOyAvLyDpq5jjgZVcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDmloflrZfliJfjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtU3RyaW5nXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44KS5b6M5pa544Gr6L+95Yqg44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYyDov73liqDjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmQoYzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zICs9IChsZW5ndGggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IGMuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgICA6IGM7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+OCteOCpOOCuuOCkuaLoeW8teOBl+OBpuaWh+Wtl+OCkuWfi+OCgeOCi1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOaLoeW8teOBmeOCi+aWh+Wtl+aVsFxuICAgICAgICAgKiBAcGFyYW0gdiAgICAgICAgIOWfi+OCgeOCi+aWh+Wtl1xuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGV4cGFuc2lvbihsZW5ndGg6IG51bWJlciwgdjogc3RyaW5nKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkuODkOOCpOODiOaVsOOBp+WPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEJ5dGVzKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucykgLnJlcGxhY2UoLyUuLi9nLCBcInhcIikubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyD44CAPFxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0xlc3MoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zIDwgcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA+XG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzR3JlYXQoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID4gcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA9PVxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgajnrYnjgZfjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgajnlbDjgarjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHM6IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA9PSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBjOepuuOBi+OBqeOBhuOBi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6IOepuuOBruaWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiDlgKTjgYzoqK3lrprjgZXjgozjgabjgYTjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGggPT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyA9IHM7XG4gICAgICAgIH1cblxuICAgICAgICBzOiBzdHJpbmc7XG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OZ44Kv44K/44O85Z6L77yI5Y+v5aSJ6YWN5YiX5Z6L77yJXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gaW5paXRhbENhcGFjaXR5IOWIneacn+WMluW+jOOBruOCreODo+ODkeOCt+ODhuOCo+OAguODh+ODvOOCv+OCteOCpOOCuuOBr19jYXBhY2l0eSAqIHNpemVvZihUKVxuICAgICAgICAgKiBAcGFyYW0gemVyb0NsZWFyIHRydWXjgarjgonliJ3mnJ/ljJbmmYLjgavnorrkv53jgZfjgZ/poJjln5/jgpIw44Gn5Z+L44KB44KLXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsQ2FwYWNpdHk6IG51bWJlciA9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShpbml0aWFsQ2FwYWNpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGF0KGluZGV4OiBudW1iZXIpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdHJbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgrvjg4Pjg4jjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3B0cltpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQob2Zmc2V0OiBudW1iZXIgPSAwKTogVFtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IFRbXSA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX3B0cltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB1c2hCYWNr5Yem55CG44CB44Kz44Oz44OG44OK44Gr5paw44Gf44Gq6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBQdXNoQmFja+WHpueQhuOBp+i/veWKoOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB1c2hCYWNrKHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX2NhcGFjaXR5ID09IDAgPyBjc21WZWN0b3Iuc19kZWZhdWx0U2l6ZSA6IHRoaXMuX2NhcGFjaXR5ICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3B0clt0aGlzLl9zaXplKytdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDku6PlhaXlh6bnkIblvozjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgee0oOOBq+S7o+WFpeOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFzc2lnbihuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXdTaXplLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlU2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBhbnkgPSBudWxsLCBjYWxsUGxhY2VtZW50TmV3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemU6IG51bWJlciA9IHRoaXMuX3NpemU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcblxuICAgICAgICAgICAgICAgIGlmKGNhbGxQbGFjZW1lbnROZXcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAgLy8gbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXcgdmFsdWUoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG5ld1NpemUgPD0gdGhpcy5fc2l6ZVxuICAgICAgICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UodGhpcy5fc2l6ZSAtIHN1Yiwgc3ViKTsgICAgLy8g5LiN6KaB44Gq44Gu44Gn56C05qOE44GZ44KLXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgavjgrPjg7Pjg4bjg4ropoHntKDjgpLmjL/lhaXjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOaMv+WFpeOBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGVuZCDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7ntYLnq6/kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkc3RTaTogbnVtYmVyID0gcG9zaXRpb24uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XG4gICAgICAgICAgICBsZXQgc3JjRWk6IG51bWJlciA9IGVuZC5faW5kZXg7XG5cbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcblxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIGFkZENvdW50KTtcblxuICAgICAgICAgICAgLy8g5oy/5YWl55So44Gu5pei5a2Y44OH44O844K/44KS44K344OV44OI44GX44Gm6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICBsZXQgYWRkU2l6ZSA9IHRoaXMuX3NpemUgLSBkc3RTaTtcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFkZFNpemU7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoZHN0U2kgKyBpLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gc3JjU2k7IGkgPCBzcmNFaTsgaSsrLCBkc3RTaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltkc3RTaV0gPSBiZWdpbi5fdmVjdG9yLl9wdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zaXplICsgYWRkQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS5YmK6Zmk44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWJiumZpOWun+ihjFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWJiumZpFxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBpdGVyYXRvcjxUPih0aGlzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIHRoaXMuX3NpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5ld1ZlY3RvciA9IG5ldyBjc21WZWN0b3I8VD4oKTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fc2l6ZSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9jYXBhY2l0eSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgX3B0cjogVFtdOyAgICAvLyDjgrPjg7Pjg4bjg4rjga7lhYjpoK3jgqLjg4njg6zjgrlcbiAgICAgICAgX3NpemU6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgc19kZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rliJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2PzogY3NtVmVjdG9yPFQ+LCBpbmRleD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaW5kZXggIT0gdW5kZWZpbmVkKSA/IGluZGV4IDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku6PlhaVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB0clxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB0cigpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3IuX3B0clt0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN1YnN0aXR1dGlvbihpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX3ZlY3RvciAhPSBpdGUuX3ZlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmssIExvZ0xldmVsfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0NTTV9MT0dfTEVWRUwsIENTTV9MT0dfTEVWRUxfVkVSQk9TRSwgQ1NNX0xPR19MRVZFTF9ERUJVRywgQ1NNX0xPR19MRVZFTF9JTkZPLCBDU01fTE9HX0xFVkVMX1dBUk5JTkcsIENTTV9MT0dfTEVWRUxfRVJST1J9IGZyb20gXCIuLi9jdWJpc21mcmFtZXdvcmtjb25maWdcIjtcblxuXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnQgPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+IFxue1xuICAgIExpdmUyREN1YmlzbUZyYW1ld29yay5DdWJpc21EZWJ1Zy5wcmludChsZXZlbCwgXCJbQ1NNXVwiICsgZm10LCBhcmdzKTtcbn1cblxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50SW4gPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XG57XG4gICAgQ3ViaXNtTG9nUHJpbnQobGV2ZWwsIGZtdCArIFwiXFxuXCIsIGFyZ3MpO1xufVxuXG5leHBvcnQgbGV0IENTTV9BU1NFUlQgPSAoZXhwcjogYW55KSA9Plxue1xuICAgIGNvbnNvbGUuYXNzZXJ0KGV4cHIpO1xufTtcblxuXG5leHBvcnQgbGV0IEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcblxuaWYoQ1NNX0xPR19MRVZFTCA8PSBDU01fTE9HX0xFVkVMX1ZFUkJPU0UpXG57XG4gICAgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9WZXJib3NlLCBcIltWXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0RFQlVHKVxue1xuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9JTkZPKVxue1xuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfV0FSTklORylcbntcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0VSUk9SKVxue1xuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcblxuICAgIC8qKlxuICAgICAqIOODh+ODkOODg+OCsOeUqOOBruODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCueOAglxuICAgICAqIOODreOCsOOBruWHuuWKm+OAgeODkOOCpOODiOOBruODgOODs+ODl+OBquOBqVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21EZWJ1Z1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi+OAguesrOS4gOW8leaVsOOBq+ODreOCsOODrOODmeODq+OCkuioreWumuOBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQg5pu45byP5LuY44GN5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIOWPr+WkiemVt+W8leaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBwcmludChsb2dMZXZlbDogTG9nTGV2ZWwsIGZvcm1hdDogc3RyaW5nLCBhcmdzPzogYW55W10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxuICAgICAgICAgICAgaWYobG9nTGV2ZWwgPCBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmdldExvZ2dpbmdMZXZlbCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFsb2dQcmludClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBidWZmZXI6IHN0cmluZyA9IFxuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvXFx7KFxcZCspXFx9L2csXG4gICAgICAgICAgICAgICAgICAgIChtLCBrKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnc1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dQcmludChidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+ODvOOCv+OBi+OCieaMh+WumuOBl+OBn+mVt+OBleOBoOOBkeODgOODs+ODl+WHuuWKm+OBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOODgOODs+ODl+OBmeOCi+ODh+ODvOOCv1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoIOODgOODs+ODl+OBmeOCi+mVt+OBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wQnl0ZXMobG9nTGV2ZWw6IExvZ0xldmVsLCBkYXRhOiBVaW50OEFycmF5LCBsZW5ndGg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMTYgPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAlIDggPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCIgIFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcInswfSBcIiwgWyhkYXRhW2ldICYgMHhGRildKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcml2YXRlIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mb30gZnJvbSBcIi4vY3ViaXNtZGVidWdcIjtcbmltcG9ydCB7c3RydG9kfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcbmltcG9ydCBjc21WZWN0b3JfaXRlcmF0b3IgPSBjc212ZWN0b3IuaXRlcmF0b3I7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBjc21NYXBfaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyBTdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgp44Gn5Yid5pyf5YyW44GZ44KLXG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSDogc3RyaW5nID0gXCJFcnJvcjogdHlwZSBtaXNtYXRjaFwiO1xuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUzogc3RyaW5nID0gXCJFcnJvcjogaW5kZXggb3V0IG9mIGJvdW5kc1wiO1xuXG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Ko44Os44Oh44Oz44OI44Gu6KaB57Sg44Gu5Z+65bqV44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFN0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKHN0cmluZylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRSYXdTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZSwgaW5kZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K644KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS6YWN5YiX44Gn6L+U44GZKFZhbHVlW10pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoZGVmYXVsdFZhbHVlOiBWYWx1ZVtdID0gbnVsbCk6IFZhbHVlW11cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoYXJyYXkpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZT86IGNzbVZlY3RvcjxWYWx1ZT4pOiBjc21WZWN0b3I8VmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Oe44OD44OX44Gn6L+U44GZKGNzbU1hcDxjc21TdHJpbmcsIFZhbHVlPilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg57jg4Pjg5fjga7jgq3jg7zkuIDopqfjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZlcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4g44Oe44OD44OX44Gu44Kt44O844Gu5LiA6KanXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuc19kdW1teUtleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjG51bGzjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjgavjgqjjg6njg7zlgKTjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKc29uRXJyb3IuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4odHJ1ZSk7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKGZhbHNlKTtcblxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBuZXcgSnNvbkVycm9yKFwiRVJST1JcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm51bGxWYWx1ZSA9IG5ldyBKc29uTnVsbHZhbHVlKCk7XG5cbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6rjg6rjg7zjgrnnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF9zdHJpbmdCdWZmZXI6IHN0cmluZzsgLy8g5paH5a2X5YiX44OQ44OD44OV44KhXG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc19kdW1teUtleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAvLyDjg4Djg5/jg7zjgq3jg7xcblxuICAgICAgICBwdWJsaWMgc3RhdGljIGVycm9yVmFsdWU6IFZhbHVlOyAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmeOCqOODqeODvOOAgiBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcbiAgICAgICAgcHVibGljIHN0YXRpYyBudWxsVmFsdWU6IFZhbHVlOyAgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZlOVUxM44CCICAgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNjaWnmloflrZfjga7jgb/lr77lv5zjgZfjgZ/mnIDlsI/pmZDjga7ou73ph49KU09O44OR44O844K144CCXG4gICAgICog5LuV5qeY44GvSlNPTuOBruOCteODluOCu+ODg+ODiOOBqOOBquOCi+OAglxuICAgICAqIOioreWumuODleOCoeOCpOODqyhtb2RlbDMuanNvbinjgarjganjga7jg63jg7zjg4nnlKhcbiAgICAgKiBcbiAgICAgKiBb5pyq5a++5b+c6aCF55uuXVxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXG4gICAgICog44O7ZeOBq+OCiOOCi+aMh+aVsOihqOePvlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyPzogQXJyYXlCdWZmZXIsIGxlbmd0aD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihidWZmZXIgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VCeXRlcyhidWZmZXIsIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjgrXjgqTjgrpcbiAgICAgICAgICogQHJldHVybiBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K544CC5aSx5pWX44GX44Gf44KJTlVMTFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQganNvbiA9IG5ldyBDdWJpc21Kc29uKCk7XG4gICAgICAgICAgICBjb25zdCBzdWNjZWVkZWQ6IGJvb2xlYW4gPSBqc29uLnBhcnNlQnl0ZXMoYnVmZmVyLCBzaXplKTtcblxuICAgICAgICAgICAgaWYoIXN1Y2NlZWRlZCkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtSnNvbi5kZWxldGUoanNvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOCquODluOCuOOCp+OCr+ODiOOBruino+aUvuWHpueQhlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJvb3QoKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIFVuaWNvZGXjga7jg5DjgqTjg4rjg6rjgpJTdHJpbmfjgavlpInmj5tcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg5aSJ5o+b44GZ44KL44OQ44Kk44OK44Oq44OH44O844K/XG4gICAgICAgICAqIEByZXR1cm4g5aSJ5o+b5b6M44Gu5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSB1aW50OEFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0ciArPSAoXCIlXCIgKyB0aGlzLnBhZCh1aW50OEFycmF5W2ldLnRvU3RyaW5nKDE2KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Ko44Oz44Kz44O844OJ44CB44OR44OH44Kj44Oz44KwXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIHBhZChuOiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG4ubGVuZ3RoIDwgMlxuICAgICAgICAgICAgICAgID8gXCIwXCIgKyBuXG4gICAgICAgICAgICAgICAgOiBuO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Gu44OR44O844K544KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAg44OR44O844K55a++6LGh44Gu44OH44O844K/44OQ44Kk44OIXG4gICAgICAgICAqIEBwYXJhbSBzaXplICAgICAg44OH44O844K/44OQ44Kk44OI44Gu44K144Kk44K6XG4gICAgICAgICAqIHJldHVybiB0cnVlIDog5oiQ5YqfXG4gICAgICAgICAqIHJldHVybiBmYWxzZTog5aSx5pWXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcGFyc2VCeXRlcyhidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBlbmRQb3M6IG51bWJlcltdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoHphY3liJdcbiAgICAgICAgICAgIGxldCBkZWNvZGVCdWZmZXI6IHN0cmluZyA9IHRoaXMuYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMucGFyc2VWYWx1ZShkZWNvZGVCdWZmZXIsIHNpemUsIDAsIGVuZFBvcyk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgICAgIHN0cmJ1ZiA9IFwiSnNvbiBwYXJzZSBlcnJvciA6IEBsaW5lIFwiICsgKHRoaXMuX2xpbmVDb3VudCArIDEpICsgXCJcXG5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25TdHJpbmcoc3RyYnVmKTtcblxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJ7MH1cIiwgdGhpcy5fcm9vdC5nZXRSYXdTdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLl9yb290ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uRXJyb3IobmV3IGNzbVN0cmluZyh0aGlzLl9lcnJvciksIGZhbHNlKTsgLy8gcm9vdOOBr+ino+aUvuOBleOCjOOCi+OBruOBp+OCqOODqeODvOOCquODluOCuOOCp+OCr+ODiOOCkuWIpemAlOS9nOaIkOOBmeOCi1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueaZguOBruOCqOODqeODvOWApOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcnNlRXJyb3IoKTogc3RyaW5nIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Or44O844OI6KaB57Sg44Gu5qyh44Gu6KaB57Sg44GM44OV44Kh44Kk44Or44Gu57WC56uv44Gg44Gj44Gf44KJdHJ1ZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNoZWNrRW5kT2ZGaWxlKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3QuZ2V0QXJyYXkoKVsxXS5lcXVhbHMoXCJFT0ZcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOCqOODrOODoeODs+ODiOOBi+OCiVZhbHVlKGZsb2F0LFN0cmluZyxWYWx1ZSosQXJyYXksbnVsbCx0cnVlLGZhbHNlKeOCkuODkeODvOOCueOBmeOCi1xuICAgICAgICAgKiDjgqjjg6zjg6Hjg7Pjg4jjga7mm7jlvI/jgavlv5zjgZjjgablhoXpg6jjgadQYXJzZVN0cmluZygpLCBQYXJzZU9iamVjdCgpLCBQYXJzZUFycmF5KCnjgpLlkbzjgbZcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgYnVmZmVyICAgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggICAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSAgIG91dEVuZFBvcyAgIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG86IFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBmOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IGJ1ZmZlcltpXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XG4gICAgICAgICAgICAgICAgY2FzZSAnNyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOSc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclN0cmluZzogc3RyaW5nW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgVxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHN0cnRvZChidWZmZXIuc2xpY2UoaSksIGFmdGVyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGJ1ZmZlci5pbmRleE9mKGFmdGVyU3RyaW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvbkZsb2F0KGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvblN0cmluZyh0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKSk7IC8vIFxcXCLjga7mrKHjga7mloflrZfjgYvjgolcbiAgICAgICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VBcnJheShidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ24nOiAvLyBudWxs5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbmV3IEpzb25OdWxsdmFsdWUoKTsgICAgLy8g6Kej5pS+44Gn44GN44KL44KI44GG44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IC8vIHRydWXku6XlpJbjgavjgarjgYRcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi50cnVlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSB0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnZic6IC8vIGZhbHNl5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyA0IDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnLCc6IC8vIEFycmF5IHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgY2FzZSAnXSc6IC8vIOS4jeato+OBqu+9neOBoOOBjOOCueOCreODg+ODl+OBmeOCi+OAgumFjeWIl+OBruacgOW+jOOBq+S4jeimgeOBqiAsIOOBjOOBguOCi+OBqOaAneOCj+OCjOOCi1xuICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpOyAgLy8g5ZCM44GY5paH5a2X44KS5YaN5Yem55CGXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHZhbHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiAgICAgIFxuICAgICAgICAgKiBAcGFyYW0gICBzdHJpbmcgIC0+ICDjg5Hjg7zjgrnlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgLT4gIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gIG91dEVuZFBvcyAgIC0+ICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVN0cmluZyhzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcsIGMyOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSBuZXcgY3NtU3RyaW5nKFwiXCIpO1xuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic644CALy8g57WC56uv44Gu4oCd44CB44Ko44K544Kx44O844OX5paH5a2X44Gv5Yil44Gr5Yem55CG44GV44KM44KL44Gu44Gn44GT44GT44Gr5p2l44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTsgIC8vIOKAneOBruasoeOBruaWh+Wtl1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldC5zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnLy8nOiAgLy8g44Ko44K544Kx44O844OX44Gu5aC05ZCIXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKzsgLy8g77yS5paH5a2X44KS44K744OD44OI44Gn5omx44GGXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpIC0gMSA+IGJ1ZlN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlN0YXJ0ID0gaSArIDE7IC8vIOOCqOOCueOCseODvOODl++8iO+8kuaWh+Wtlynjga7mrKHjga7mloflrZfjgYvjgolcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyID0gc3RyaW5nW2ldO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChjMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXFwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xccicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFx0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL3VuaWNvcmQgZXNjYXBlIG5vdCBzdXBwb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvZXNjYXBlIGVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9pbGxlZ2FsIGVuZFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOBruOCquODluOCuOOCp+OCr+ODiOOCqOODrOODoeODs+ODiOOCkuODkeODvOOCueOBl+OBplZhbHVl44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlT2JqZWN0KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6IEpzb25NYXAgPSBuZXcgSnNvbk1hcCgpO1xuXG4gICAgICAgICAgICAvLyBLZXk6IFZhbHVlXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRQb3MyOiBudW1iZXJbXSA9IEFycmF5KDEpO1xuICAgICAgICAgICAgbGV0IG9rOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgbG9jYWxSZXRFbmRQb3MyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7IC8vLS0gbG9vcOOBi+OCieWHuuOCi1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzogLy8g6ZaJ44GY44Kr44OD44KzXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOepulxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICc6JyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFvaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJrZXkgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnfScgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyAnOiBjYXNlICdcXHQnIDogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighb2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiJzonIG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlgKTjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XG5cbiAgICAgICAgICAgICAgICAvLyByZXQucHV0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldC5wdXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBGT1JfTE9PUDM6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDmraPluLjntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBlcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlQXJyYXkoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6SnNvbkFycmF5ID0gbmV3IEpzb25BcnJheSgpO1xuXG4gICAgICAgICAgICAvLyBrZXkgOiB2YWx1ZVxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZHBvczI6IG51bWJlcltdID0gbmV3IEFycmF5KDEpO1xuXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRwb3MyKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZHBvczJbMF07XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZPUl9MT09QMzpcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGJyZWFrZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVha2ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrOyAvLyDmrKHjga5LRVksIFZBbFVF44G4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLl9saW5lQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXNlICcgJzogY2FzZSAnXFx0JzogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBhcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9lcnJvcjogc3RyaW5nOyAgICAgLy8g44OR44O844K55pmC44Gu44Ko44Op44O8XG4gICAgICAgIF9saW5lQ291bnQ6IG51bWJlcjsgLy8g44Ko44Op44O85aCx5ZGK44Gr55So44GE44KL6KGM5pWw44Kr44Km44Oz44OIXG4gICAgICAgIF9yb290OiBWYWx1ZTsgICAgICAgLy8g44OR44O844K544GV44KM44Gf44Or44O844OI6KaB57SgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkmZsb2F05YCk44Go44GX44Gm5omx44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25GbG9hdCBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZUZsb2F0KHN0cmJ1Zik7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJidWY7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDAuMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gaW50XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodmFsdWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyOyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuecn+WBveWApOOBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQm9vbGVhbiBleHRlbmRzIFZhbHVlXG4gICAge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib29sVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuX2Jvb2xWYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mKHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fYm9vbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2OiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9ib29sVmFsdWUgPSB2O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRydWVWYWx1ZTogSnNvbkJvb2xlYW47ICAvLyB0cnVlXG4gICAgICAgIHN0YXRpYyBmYWxzZVZhbHVlOiBKc29uQm9vbGVhbjsgLy8gZmFsc2VcblxuICAgICAgICBwcml2YXRlIF9ib29sVmFsdWU6IGJvb2xlYW47IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uU3RyaW5nIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nKVxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcy5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25FcnJvciBleHRlbmRzIEpzb25TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg6njg7zmg4XloLHjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihcInN0cmluZ1wiID09PSB0eXBlb2YocykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc1N0YXRpYyA9IGlzU3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvdGVjdGVkIF9pc1N0YXRpYzogYm9vbGVhbjsgLy8g6Z2Z55qE44GqVmFsdWXjgYvjganjgYbjgYtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSTlVMTOWApOOBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTnVsbHZhbHVlIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjE5VTEzlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gXCJOdWxsVmFsdWVcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkumFjeWIl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX2FycmF5LmdldFNpemUoKSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gdGhpcy5fYXJyYXkuYXQoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZih2ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmluZ0J1ZmZlcjogc3RyaW5nID0gaW5kZW50ICsgXCJbXFxuXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLmluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiIFwiKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmluZ0J1ZmZlciArIGluZGVudCArIFwiXVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjeWIl+imgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdiDov73liqDjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhZGQodjogVmFsdWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnB1c2hCYWNrKHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShjc21WZWN0b3I8VmFsdWU+KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU6IGNzbVZlY3RvcjxWYWx1ZT4gPSBudWxsKTogY3NtVmVjdG9yPFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44Gu5pWw44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LmdldFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2FycmF5OiBjc21WZWN0b3I8VmFsdWU+OyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuODnuODg+ODl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTWFwIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgY3NtTWFwPHN0cmluZywgVmFsdWU+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG5cbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GMTWFw5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDogVmFsdWUgPSB0aGlzLl9tYXAuZ2V0VmFsdWUocy5zKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlcjogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7IGl0ZXIubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKTsgaXRlci5wcmVJbmNyZW1lbnQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLmZpcnN0ID09IHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLnNlY29uZCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyLnB0cigpLnNlY29uZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gaW5kZW50ICsgXCJ7XFxuXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpdGUucHRyKCkuZmlyc3Q7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIiBcIiArIGtleSArIFwiIDogXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiAgIFwiKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwifVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkk1hcOWei+OBp+i/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgavopoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXQoa2V5OiBzdHJpbmcsIHY6IFZhbHVlKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0VmFsdWUoa2V5LCB2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgYvjgonjgq3jg7zjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fa2V5cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IGl0ZS5wdHIoKS5maXJzdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoQmFjayhrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44Gu6KaB57Sg5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHByaXZhdGUgX21hcDogY3NtTWFwPHN0cmluZywgVmFsdWU+OyAgIC8vIEpTT07opoHntKDjga7lgKRcbiAgICAgICAgcHJpdmF0ZSBfa2V5czogY3NtVmVjdG9yPHN0cmluZz47ICAgICAgICAgICAgICAgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9