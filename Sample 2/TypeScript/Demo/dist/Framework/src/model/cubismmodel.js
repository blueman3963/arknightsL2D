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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/model/cubismmodel.ts");
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

/***/ "./Framework/model/cubismmodel.ts":
/*!****************************************!*\
  !*** ./Framework/model/cubismmodel.ts ***!
  \****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference path="../../Core/live2dcubismcore.d.ts" />





var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
var CubismBlendMode = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismBlendMode;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].csmVector;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmMap;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル
     *
     * Mocデータから生成されるモデルのクラス。
     */
    var CubismModel = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param model モデル
         */
        function CubismModel(model) {
            this._model = model;
            this._parameterValues = null;
            this._parameterMaximumValues = null;
            this._parameterMinimumValues = null;
            this._partOpacities = null;
            this._savedParameters = new csmVector();
            this._parameterIds = new csmVector();
            this._drawableIds = new csmVector();
            this._partIds = new csmVector();
            this._notExistPartId = new csmMap();
            this._notExistParameterId = new csmMap();
            this._notExistParameterValues = new csmMap();
            this._notExistPartOpacities = new csmMap();
        }
        /**
         * モデルのパラメータの更新
         */
        CubismModel.prototype.update = function () {
            // Update model
            this._model.update();
            this._model.drawables.resetDynamicFlags();
        };
        /**
         * キャンバスの幅を取得する
         */
        CubismModel.prototype.getCanvasWidth = function () {
            if (this._model == null) {
                return 0.0;
            }
            return this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
        };
        /**
         * キャンバスの高さを取得する
         */
        CubismModel.prototype.getCanvasHeight = function () {
            if (this._model == null) {
                return 0.0;
            }
            return this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
        };
        /**
         * パラメータを保存する
         */
        CubismModel.prototype.saveParameters = function () {
            var parameterCount = this._model.parameters.count;
            var savedParameterCount = this._savedParameters.getSize();
            for (var i = 0; i < parameterCount; ++i) {
                if (i < savedParameterCount) {
                    this._savedParameters.set(i, this._parameterValues[i]);
                }
                else {
                    this._savedParameters.pushBack(this._parameterValues[i]);
                }
            }
        };
        /**
         * モデルを取得
         */
        CubismModel.prototype.getModel = function () {
            return this._model;
        };
        /**
         * パーツのインデックスを取得
         * @param partId パーツのID
         * @return パーツのインデックス
         */
        CubismModel.prototype.getPartIndex = function (partId) {
            var partIndex;
            var partCount = this._model.parts.count;
            for (partIndex = 0; partIndex < partCount; ++partIndex) {
                if (partId == this._partIds.at(partIndex)) {
                    return partIndex;
                }
            }
            // モデルに存在していない場合、非存在パーツIDリスト内にあるかを検索し、そのインデックスを返す
            if (this._notExistPartId.isExist(partId)) {
                return this._notExistPartId.getValue(partId);
            }
            // 非存在パーツIDリストにない場合、新しく要素を追加する
            partIndex = partCount + this._notExistPartId.getSize();
            this._notExistPartId.setValue(partId, partIndex);
            this._notExistPartOpacities.appendKey(partIndex);
            return partIndex;
        };
        /**
         * パーツの個数の取得
         * @return パーツの個数
         */
        CubismModel.prototype.getPartCount = function () {
            var partCount = this._model.parts.count;
            return partCount;
        };
        /**
         * パーツの不透明度の設定(Index)
         * @param partIndex パーツのインデックス
         * @param opacity 不透明度
         */
        CubismModel.prototype.setPartOpacityByIndex = function (partIndex, opacity) {
            if (this._notExistPartOpacities.isExist(partIndex)) {
                this._notExistPartOpacities.setValue(partIndex, opacity);
                return;
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= partIndex && partIndex < this.getPartCount());
            this._partOpacities[partIndex] = opacity;
        };
        /**
         * パーツの不透明度の設定(Id)
         * @param partId パーツのID
         * @param opacity パーツの不透明度
         */
        CubismModel.prototype.setPartOpacityById = function (partId, opacity) {
            // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
            var index = this.getPartIndex(partId);
            if (index < 0) {
                return; // パーツがないのでスキップ
            }
            this.setPartOpacityByIndex(index, opacity);
        };
        /**
         * パーツの不透明度の取得(index)
         * @param partIndex パーツのインデックス
         * @return パーツの不透明度
         */
        CubismModel.prototype.getPartOpacityByIndex = function (partIndex) {
            if (this._notExistPartOpacities.isExist(partIndex)) {
                // モデルに存在しないパーツIDの場合、非存在パーツリストから不透明度を返す。
                return this._notExistPartOpacities.getValue(partIndex);
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= partIndex && partIndex < this.getPartCount());
            return this._partOpacities[partIndex];
        };
        /**
         * パーツの不透明度の取得(id)
         * @param partId パーツのＩｄ
         * @return パーツの不透明度
         */
        CubismModel.prototype.getPartOpacityById = function (partId) {
            // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
            var index = this.getPartIndex(partId);
            if (index < 0) {
                return 0; // パーツが無いのでスキップ
            }
            return this.getPartOpacityByIndex(index);
        };
        /**
         * パラメータのインデックスの取得
         * @param パラメータID
         * @return パラメータのインデックス
         */
        CubismModel.prototype.getParameterIndex = function (parameterId) {
            var parameterIndex;
            var idCount = this._model.parameters.count;
            for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
                if (parameterId != this._parameterIds.at(parameterIndex)) {
                    continue;
                }
                return parameterIndex;
            }
            // モデルに存在していない場合、非存在パラメータIDリスト内を検索し、そのインデックスを返す
            if (this._notExistParameterId.isExist(parameterId)) {
                return this._notExistParameterId.getValue(parameterId);
            }
            // 非存在パラメータIDリストにない場合新しく要素を追加する
            parameterIndex = this._model.parameters.count + this._notExistParameterId.getSize();
            this._notExistParameterId.setValue(parameterId, parameterIndex);
            this._notExistParameterValues.appendKey(parameterIndex);
            return parameterIndex;
        };
        /**
         * パラメータの個数の取得
         * @return パラメータの個数
         */
        CubismModel.prototype.getParameterCount = function () {
            return this._model.parameters.count;
        };
        /**
         * パラメータの最大値の取得
         * @param parameterIndex パラメータのインデックス
         * @return パラメータの最大値
         */
        CubismModel.prototype.getParameterMaximumValue = function (parameterIndex) {
            return this._model.parameters.maximumValues[parameterIndex];
        };
        /**
         * パラメータの最小値の取得
         * @param parameterIndex パラメータのインデックス
         * @return パラメータの最小値
         */
        CubismModel.prototype.getParameterMinimumValue = function (parameterIndex) {
            return this._model.parameters.minimumValues[parameterIndex];
        };
        /**
         * パラメータのデフォルト値の取得
         * @param parameterIndex パラメータのインデックス
         * @return パラメータのデフォルト値
         */
        CubismModel.prototype.getParameterDefaultValue = function (parameterIndex) {
            return this._model.parameters.defaultValues[parameterIndex];
        };
        /**
         * パラメータの値の取得
         * @param parameterIndex    パラメータのインデックス
         * @return パラメータの値
         */
        CubismModel.prototype.getParameterValueByIndex = function (parameterIndex) {
            if (this._notExistParameterValues.isExist(parameterIndex)) {
                return this._notExistParameterValues.getValue(parameterIndex);
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= parameterIndex && parameterIndex < this.getParameterCount());
            return this._parameterValues[parameterIndex];
        };
        /**
         * パラメータの値の取得
         * @param parameterId    パラメータのID
         * @return パラメータの値
         */
        CubismModel.prototype.getParameterValueById = function (parameterId) {
            // 高速化のためにparameterIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
            var parameterIndex = this.getParameterIndex(parameterId);
            return this.getParameterValueByIndex(parameterIndex);
        };
        /**
         * パラメータの値の設定
         * @param parameterIndex パラメータのインデックス
         * @param value パラメータの値
         * @param weight 重み
         */
        CubismModel.prototype.setParameterValueByIndex = function (parameterIndex, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            if (this._notExistParameterValues.isExist(parameterIndex)) {
                this._notExistParameterValues.setValue(parameterIndex, (weight == 1)
                    ? value
                    : (this._notExistParameterValues.getValue(parameterIndex) * (1 - weight)) + (value * weight));
                return;
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= parameterIndex && parameterIndex < this.getParameterCount());
            if (this._model.parameters.maximumValues[parameterIndex] < value) {
                value = this._model.parameters.maximumValues[parameterIndex];
            }
            if (this._model.parameters.minimumValues[parameterIndex] > value) {
                value = this._model.parameters.minimumValues[parameterIndex];
            }
            this._parameterValues[parameterIndex] = (weight == 1)
                ? value
                : this._parameterValues[parameterIndex] = (this._parameterValues[parameterIndex] * (1 - weight)) + (value * weight);
        };
        /**
         * パラメータの値の設定
         * @param parameterId パラメータのID
         * @param value パラメータの値
         * @param weight 重み
         */
        CubismModel.prototype.setParameterValueById = function (parameterId, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            var index = this.getParameterIndex(parameterId);
            this.setParameterValueByIndex(index, value, weight);
        };
        /**
         * パラメータの値の加算(index)
         * @param parameterIndex パラメータインデックス
         * @param value 加算する値
         * @param weight 重み
         */
        CubismModel.prototype.addParameterValueByIndex = function (parameterIndex, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            this.setParameterValueByIndex(parameterIndex, (this.getParameterValueByIndex(parameterIndex) + (value * weight)));
        };
        /**
         * パラメータの値の加算(id)
         * @param parameterId パラメータＩＤ
         * @param value 加算する値
         * @param weight 重み
         */
        CubismModel.prototype.addParameterValueById = function (parameterId, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            var index = this.getParameterIndex(parameterId);
            this.addParameterValueByIndex(index, value, weight);
        };
        /**
         * パラメータの値の乗算
         * @param parameterId パラメータのID
         * @param value 乗算する値
         * @param weight 重み
         */
        CubismModel.prototype.multiplyParameterValueById = function (parameterId, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            var index = this.getParameterIndex(parameterId);
            this.multiplyParameterValueByIndex(index, value, weight);
        };
        /**
         * パラメータの値の乗算
         * @param parameterIndex パラメータのインデックス
         * @param value　乗算する値
         * @param weight 重み
         */
        CubismModel.prototype.multiplyParameterValueByIndex = function (parameterIndex, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            this.setParameterValueByIndex(parameterIndex, (this.getParameterValueByIndex(parameterIndex) * (1.0 + (value - 1.0) * weight)));
        };
        /**
         * Drawableのインデックスの取得
         * @param drawableId DrawableのID
         * @return Drawableのインデックス
         */
        CubismModel.prototype.getDrawableIndex = function (drawableId) {
            var drawableCount = this._model.drawables.count;
            for (var drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
                if (this._drawableIds.at(drawableIndex) == drawableId) {
                    return drawableIndex;
                }
            }
            return -1;
        };
        /**
         * Drawableの個数の取得
         * @return drawableの個数
         */
        CubismModel.prototype.getDrawableCount = function () {
            var drawableCount = this._model.drawables.count;
            return drawableCount;
        };
        /**
         * DrawableのIDを取得する
         * @param drawableIndex Drawableのインデックス
         * @return drawableのID
         */
        CubismModel.prototype.getDrawableId = function (drawableIndex) {
            var parameterIds = this._model.drawables.ids;
            return CubismFramework.getIdManager().getId(parameterIds[drawableIndex]);
        };
        /**
         * Drawableの描画順リストの取得
         * @return Drawableの描画順リスト
         */
        CubismModel.prototype.getDrawableRenderOrders = function () {
            var renderOrders = this._model.drawables.renderOrders;
            return renderOrders;
        };
        /**
         * Drawableのテクスチャインデックスリストの取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableのテクスチャインデックスリスト
         */
        CubismModel.prototype.getDrawableTextureIndices = function (drawableIndex) {
            var textureIndices = this._model.drawables.textureIndices;
            return textureIndices[drawableIndex];
        };
        /**
         * DrawableのVertexPositionsの変化情報の取得
         *
         * 直近のCubismModel.update関数でDrawableの頂点情報が変化したかを取得する。
         *
         * @param   drawableIndex   Drawableのインデックス
         * @retval  true    Drawableの頂点情報が直近のCubismModel.update関数で変化した
         * @retval  false   Drawableの頂点情報が直近のCubismModel.update関数で変化していない
         */
        CubismModel.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * Drawableの頂点インデックスの個数の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点インデックスの個数
         */
        CubismModel.prototype.getDrawableVertexIndexCount = function (drawableIndex) {
            var indexCounts = this._model.drawables.indexCounts;
            return indexCounts[drawableIndex];
        };
        /**
         * Drawableの頂点の個数の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点の個数
         */
        CubismModel.prototype.getDrawableVertexCount = function (drawableIndex) {
            var vertexCounts = this._model.drawables.vertexCounts;
            return vertexCounts[drawableIndex];
        };
        /**
         * Drawableの頂点リストの取得
         * @param drawableIndex drawableのインデックス
         * @return drawableの頂点リスト
         */
        CubismModel.prototype.getDrawableVertices = function (drawableIndex) {
            return this.getDrawableVertexPositions(drawableIndex);
        };
        /**
         * Drawableの頂点インデックスリストの取得
         * @param drarableIndex Drawableのインデックス
         * @return drawableの頂点インデックスリスト
         */
        CubismModel.prototype.getDrawableVertexIndices = function (drawableIndex) {
            var indicesArray = this._model.drawables.indices;
            return indicesArray[drawableIndex];
        };
        /**
         * Drawableの頂点リストの取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点リスト
         */
        CubismModel.prototype.getDrawableVertexPositions = function (drawableIndex) {
            var verticesArray = this._model.drawables.vertexPositions;
            return verticesArray[drawableIndex];
        };
        /**
         * Drawableの頂点のUVリストの取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点UVリスト
         */
        CubismModel.prototype.getDrawableVertexUvs = function (drawableIndex) {
            var uvsArray = this._model.drawables.vertexUvs;
            return uvsArray[drawableIndex];
        };
        /**
         * Drawableの不透明度の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの不透明度
         */
        CubismModel.prototype.getDrawableOpacity = function (drawableIndex) {
            var opacities = this._model.drawables.opacities;
            return opacities[drawableIndex];
        };
        /**
         * Drawableのカリング情報の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableのカリング情報
         */
        CubismModel.prototype.getDrawableCulling = function (drawableIndex) {
            var constantFlags = this._model.drawables.constantFlags;
            return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
        };
        /**
         * Drawableのブレンドモードを取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableのブレンドモード
         */
        CubismModel.prototype.getDrawableBlendMode = function (drawableIndex) {
            var constantFlags = this._model.drawables.constantFlags;
            return (Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex]))
                ? CubismBlendMode.CubismBlendMode_Additive
                : (Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex]))
                    ? CubismBlendMode.CubismBlendMode_Multiplicative
                    : CubismBlendMode.CubismBlendMode_Normal;
        };
        /**
         * Drawableのクリッピングマスクリストの取得
         * @return Drawableのクリッピングマスクリスト
         */
        CubismModel.prototype.getDrawableMasks = function () {
            var masks = this._model.drawables.masks;
            return masks;
        };
        /**
         * Drawableのクリッピングマスクの個数リストの取得
         * @return Drawableのクリッピングマスクの個数リスト
         */
        CubismModel.prototype.getDrawableMaskCounts = function () {
            var maskCounts = this._model.drawables.maskCounts;
            return maskCounts;
        };
        /**
         * クリッピングマスクの使用状態
         *
         * @return true クリッピングマスクを使用している
         * @return false クリッピングマスクを使用していない
         */
        CubismModel.prototype.isUsingMasking = function () {
            for (var d = 0; d < this._model.drawables.count; ++d) {
                if (this._model.drawables.maskCounts[d] <= 0) {
                    continue;
                }
                return true;
            }
            return false;
        };
        /**
         * Drawableの表示情報を取得する
         *
         * @param drawableIndex Drawableのインデックス
         * @return true Drawableが表示
         * @return false Drawableが非表示
         */
        CubismModel.prototype.getDrawableDynamicFlagIsVisible = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
        };
        /**
         * DrawableのDrawOrderの変化情報の取得
         *
         * 直近のCubismModel.update関数でdrawableのdrawOrderが変化したかを取得する。
         * drawOrderはartMesh上で指定する0から1000の情報
         * @param drawableIndex drawableのインデックス
         * @return true drawableの不透明度が直近のCubismModel.update関数で変化した
         * @return false drawableの不透明度が直近のCubismModel.update関数で変化している
         */
        CubismModel.prototype.getDrawableDynamicFlagVisibilityDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * Drawableの不透明度の変化情報の取得
         *
         * 直近のCubismModel.update関数でdrawableの不透明度が変化したかを取得する。
         *
         * @param drawableIndex drawableのインデックス
         * @return true Drawableの不透明度が直近のCubismModel.update関数で変化した
         * @return false Drawableの不透明度が直近のCubismModel.update関数で変化してない
         */
        CubismModel.prototype.getDrawableDynamicFlagOpacityDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * Drawableの描画順序の変化情報の取得
         *
         * 直近のCubismModel.update関数でDrawableの描画の順序が変化したかを取得する。
         *
         * @param drawableIndex Drawableのインデックス
         * @return true Drawableの描画の順序が直近のCubismModel.update関数で変化した
         * @return false Drawableの描画の順序が直近のCubismModel.update関数で変化してない
         */
        CubismModel.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * 保存されたパラメータの読み込み
         */
        CubismModel.prototype.loadParameters = function () {
            var parameterCount = this._model.parameters.count;
            var savedParameterCount = this._savedParameters.getSize();
            if (parameterCount > savedParameterCount) {
                parameterCount = savedParameterCount;
            }
            for (var i = 0; i < parameterCount; ++i) {
                this._parameterValues[i] = this._savedParameters.at(i);
            }
        };
        /**
         * 初期化する
         */
        CubismModel.prototype.initialize = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(this._model);
            this._parameterValues = this._model.parameters.values;
            this._partOpacities = this._model.parts.opacities;
            this._parameterMaximumValues = this._model.parameters.maximumValues;
            this._parameterMinimumValues = this._model.parameters.minimumValues;
            {
                var parameterIds = this._model.parameters.ids;
                var parameterCount = this._model.parameters.count;
                this._parameterIds.prepareCapacity(parameterCount);
                for (var i = 0; i < parameterCount; ++i) {
                    this._parameterIds.pushBack(CubismFramework.getIdManager().getId(parameterIds[i]));
                }
            }
            {
                var partIds = this._model.parts.ids;
                var partCount = this._model.parts.count;
                this._partIds.prepareCapacity(partCount);
                for (var i = 0; i < partCount; ++i) {
                    this._partIds.pushBack(CubismFramework.getIdManager().getId(partIds[i]));
                }
            }
            {
                var drawableIds = this._model.drawables.ids;
                var drawableCount = this._model.drawables.count;
                this._drawableIds.prepareCapacity(drawableCount);
                for (var i = 0; i < drawableCount; ++i) {
                    this._drawableIds.pushBack(CubismFramework.getIdManager().getId(drawableIds[i]));
                }
            }
        };
        /**
         * デストラクタ相当の処理
         */
        CubismModel.prototype.release = function () {
            this._model.release();
            this._model = null;
        };
        return CubismModel;
    }());
    Live2DCubismFramework.CubismModel = CubismModel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tb2RlbC9jdWJpc21tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbW1hcC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNJLHFCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsQ0FBUTtZQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQU8sR0FBZDtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNmO2dCQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQVUsQ0FBQztnQkFFckMsSUFBTSxHQUFHLEdBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTlELE9BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ25DO29CQUNJLElBQU0sR0FBRyxHQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBS0wsY0FBQztJQUFELENBQUMsQ0FwSjRCLEtBQUssR0FvSmpDO0lBcEpZLDZCQUFPLFVBb0puQjtBQUNMLENBQUMsRUE3ekNnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBNnpDckMiLCJmaWxlIjoiL21vZGVsL2N1YmlzbW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvbW9kZWwvY3ViaXNtbW9kZWwudHNcIik7XG4iLCIvKlxuKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuKi9cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIOODreOCsOWHuuWKm+mWouaVsOOBruioreWumlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLy0tLS0tLS0tLS0g44Ot44Kw5Ye65Yqb44Os44OZ44OrIOmBuOaKnumgheebriDlrprnvqkgLS0tLS0tLS0tLVxuLy8vIOips+e0sOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfVkVSQk9TRTogbnVtYmVyID0gMDtcbi8vLyDjg4fjg5Djg4PjgrDjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0RFQlVHOiBudW1iZXIgPSAxO1xuLy8vIEluZm/jg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0lORk86IG51bWJlciA9IDI7XG4vLy8g6K2m5ZGK44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9XQVJOSU5HOiBudW1iZXIgPSAzO1xuLy8vIOOCqOODqeODvOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfRVJST1I6IG51bWJlciA9IDQ7XG4vLy8g44Ot44Kw5Ye65Yqb44Kq44OV6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9PRkY6IG51bWJlciA9IDU7XG5cbi8qKlxuKiDjg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjgIJcbipcbiog5by35Yi255qE44Gr44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5aSJ44GI44KL5pmC44Gr5a6a576p44KS5pyJ5Yq544Gr44GZ44KL44CCXG4qIENTTV9MT0dfTEVWRUxfVkVSQk9TRSDvvZ4gQ1NNX0xPR19MRVZFTF9PRkYg44KS6YG45oqe44GZ44KL44CCXG4qL1xuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUw6IG51bWJlciA9IENTTV9MT0dfTEVWRUxfVkVSQk9TRTsiLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIFcbiAgICAgKiBcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgeOBmeOCi+OCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nIHwgY3NtU3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0eXBlb2YoaWQpID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG5ldyBjc21TdHJpbmcoaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZOOCkuavlOi8g1xuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZOOCkuavlOi8g1xuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc05vdEVxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaWQ6IGNzbVN0cmluZzsgLy8gSUTlkI1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVjbGFyZSB0eXBlIEN1YmlzbUlkSGFuZGxlID0gQ3ViaXNtSWQ7XG59IiwiLypcbiogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4qIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcbmltcG9ydCBDdWJpc21JZCA9IGN1YmlzbWlkLkN1YmlzbUlkO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogSUTlkI3jga7nrqHnkIZcbiAgICAgKiBcbiAgICAgKiBJROWQjeOCkueuoeeQhuOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZE1hbmFnZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWQ+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMuc2V0KGksIHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHMgPSAgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS44Oq44K544OI44GL44KJ55m76YyyXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gaWRzIElE5ZCN44Oq44K544OIXG4gICAgICAgICAqIEBwYXJhbSBjb3VudCBJROOBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWRzKGlkczogc3RyaW5nW10gfCBjc21TdHJpbmdbXSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJZChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS55m76YyyXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBDdWJpc21JZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5maW5kSWQoaWQpKSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ3ViaXNtSWQoaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5wdXNoQmFjayhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0SWQoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjga7norroqo1cbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZmluZElkKGlkKSAhPSBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRXhpc3QoaWQucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuaknOe0ouOBmeOCi+OAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqIEByZXR1cm4g55m76Yyy44GV44KM44Gm44GE44KLSUTjgILjgarjgZHjgozjgbBOVUxM44CCXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGZpbmRJZChpZDogc3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lkcy5hdChpKS5nZXRTdHJpbmcoKS5pc0VxdWFsKGlkKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZHMuYXQoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2lkczogY3NtVmVjdG9yPEN1YmlzbUlkPjsgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgotJROOBruODquOCueODiFxuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29yZS9saXZlMmRjdWJpc21jb3JlLmQudHNcIiAvPlxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtanNvbn0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtanNvblwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWRtYW5hZ2VyfSBmcm9tIFwiLi9pZC9jdWJpc21pZG1hbmFnZXJcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbXJlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mbywgQ3ViaXNtTG9nV2FybmluZywgQ1NNX0FTU0VSVH0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcbmltcG9ydCBWYWx1ZSA9IGN1YmlzbWpzb24uVmFsdWU7XG5pbXBvcnQgQ3ViaXNtSWRNYW5hZ2VyID0gY3ViaXNtaWRtYW5hZ2VyLkN1YmlzbUlkTWFuYWdlcjtcbmltcG9ydCBDdWJpc21SZW5kZXJlciA9IGN1YmlzbXJlbmRlcmVyLkN1YmlzbVJlbmRlcmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RydG9kKHM6IHN0cmluZywgZW5kUHRyOiBzdHJpbmdbXSk6IG51bWJlclxue1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IDsgaSsrKVxuICAgIHtcbiAgICAgICAgbGV0IHRlc3RDOiBzdHJpbmcgPSBzLnNsaWNlKGkgLSAxLCBpKTtcblxuICAgICAgICAvLyDmjIfmlbDjg7vjg57jgqTjg4rjgrnjga7lj6/og73mgKfjgYzjgYLjgovjga7jgafjgrnjgq3jg4Pjg5fjgZnjgotcbiAgICAgICAgaWYodGVzdEM9PSdlJyB8fCB0ZXN0Qz09Jy0nIHx8IHRlc3RDID09ICdFJylcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxu44CA44CA44CAICAvLyDmloflrZfliJfjga7nr4Tlm7LjgpLluoPjgZLjgabjgYTjgY9cbiAgICAgICAgbGV0IHRlc3Q6IHN0cmluZyA9IHMuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgICBsZXQgbnVtYmVyOiBudW1iZXIgPSBOdW1iZXIodGVzdCk7XG4gICAgICAgIGlmKGlzTmFOKG51bWJlcikpXG4gICAgICAgIHtcbuOAgOOAgOOAgOOAgCAgICAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbuOAgOOAgOOAgCAvLyDmnIDlvozjgavmlbDlgKTjgajjgZfjgabjgafjgY3jgZ9pbmRleOOCkuagvOe0jeOBl+OBpuOBiuOBj1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgfVxuICAgIGxldCBkID0gcGFyc2VGbG9hdChzKTsgIC8vIOODkeODvOOCueOBl+OBn+aVsOWApFxuXG4gICAgaWYoaXNOYU4oZCkpXG4gICAge1xu44CA44CA44CA44CAIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxuICAgICAgICBkID0gTmFOO1xuICAgIH1cblxuICAgIGVuZFB0clswXSA9IHMuc2xpY2UoaW5kZXgpO+OAgC8vIOW+jOe2muOBruaWh+Wtl+WIl1xuXG4gICAgcmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLy8g44OV44Kh44Kk44Or44K544Kz44O844OX44Gu5aSJ5pWw44KS5Yid5pyf5YyWXG4gICAgXG4gICAgbGV0IHNfaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHNfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzX29wdGlvbjogT3B0aW9uID0gbnVsbDtcbiAgICBsZXQgc19jdWJpc21JZE1hbmFnZXI6IEN1YmlzbUlkTWFuYWdlciA9IG51bGw7XG4gICAgXG4gICAgLyoqXG4gICAgICogRnJhbWV3b3Jr5YaF44Gn5L2/44GG5a6a5pWw44Gu5a6j6KiAXG4gICAgICovXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb25zdGFudFxuICAgIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleE9mZnNldDogbnVtYmVyID0gMDsgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCquODleOCu+ODg+ODiOWApFxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4U3RlcDogbnVtYmVyID0gMjsgICAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44K544OG44OD44OX5YCkXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNzbURlbGV0ZTxUPihhZGRyZXNzOiBUKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIWFkZHJlc3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZHJlc3MgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGl2ZTJEIEN1YmlzbTMgT3JpZ2luYWwgV29ya2Zsb3cgU0RL44Gu44Ko44Oz44OI44Oq44Od44Kk44Oz44OIXG4gICAgICog5Yip55So6ZaL5aeL5pmC44GvQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeOCkuWRvOOBs+OAgUN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCnjgafntYLkuobjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRnJhbWV3b3JrXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOWPr+iDveOBq+OBmeOCi+OAglxuICAgICAgICAgKiAgQVBJ44KS5a6f6KGM44GZ44KL5YmN44Gr5b+F44Ga44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44CCXG4gICAgICAgICAqICDkuIDluqbmupblgpnjgYzlrozkuobjgZfjgabku6XpmY3jga/jgIHlho3jgbPlrp/ooYzjgZfjgabjgoLlhoXpg6jlh6bnkIbjgYzjgrnjgq3jg4Pjg5fjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgIG9wdGlvbiAgICAgIE9wdGlvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICAg5rqW5YKZ5Yem55CG44GM5a6M5LqG44GX44Gf44KJdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGFydFVwKG9wdGlvbjogT3B0aW9uID0gbnVsbCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgYWxyZWFkeSBkb25lLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfb3B0aW9uID0gb3B0aW9uO1xuXG4gICAgICAgICAgICBpZihzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21TZXRMb2dGdW5jdGlvbihzX29wdGlvbi5sb2dGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gTGl2ZTJEIEN1YmlzbSBDb3Jl44OQ44O844K444On44Oz5oOF5aCx44KS6KGo56S6XG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uOiBudW1iZXIgPSBMaXZlMkRDdWJpc21Db3JlLlZlcnNpb24uY3NtR2V0VmVyc2lvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ham9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweEZGMDAwMDAwKSA+PiAyNCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlub3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDBGRjAwMDApID4+IDE2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaDogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMDAwRkZGRikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25OdW1iZXI6IG51bWJlciA9IHZlcnNpb247XG5cbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKGBMaXZlMkQgQ3ViaXNtIENvcmUgdmVyc2lvbjogezB9LnsxfS57Mn0gKHszfSlgLCBcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtYWpvcikuc2xpY2UoLTIpLFxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1pbm9yKS5zbGljZSgtMiksXG4gICAgICAgICAgICAgICAgICAgICgnMDAwMCcgKyBwYXRjaCkuc2xpY2UoLTQpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgY29tcGxldGUuXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnRVcCgp44Gn5Yid5pyf5YyW44GX44GfQ3ViaXNtRnJhbWV3b3Jr44Gu5ZCE44OR44Op44Oh44O844K/44KS44Kv44Oq44Ki44GX44G+44GZ44CCXG4gICAgICAgICAqIERpc3Bvc2UoKeOBl+OBn0N1YmlzbUZyYW1ld29ya+OCkuWGjeWIqeeUqOOBmeOCi+mam+OBq+WIqeeUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjbGVhblVwKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgc19vcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7jg6rjgr3jg7zjgrnjgpLliJ3mnJ/ljJbjgZfjgabjg6Ljg4fjg6vjgpLooajnpLrlj6/og73jgarnirbmhYvjgavjgZfjgb7jgZnjgII8YnI+XG4gICAgICAgICAqICAgICDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+mAo+e2muWIneacn+WMluOCrOODvOODiSAtLS1cbiAgICAgICAgICAgIC8vIOmAo+e2muOBl+OBpuODquOCveODvOOCueeiuuS/neOBjOihjOOCj+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi+OAglxuICAgICAgICAgICAgLy8g5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgICAgICAgICBpZiAoc19pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIHNraXBwZWQsIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8tLS0tIHN0YXRpYyDliJ3mnJ/ljJYgLS0tLVxuICAgICAgICAgICAgVmFsdWUuc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTtcblxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBuZXcgQ3ViaXNtSWRNYW5hZ2VyKCk7XG5cbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIGlzIGNvbXBsZXRlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu5YWo44Gm44Gu44Oq44K944O844K544KS6Kej5pS+44GX44G+44GZ44CCXG4gICAgICAgICAqICAgICAg44Gf44Gg44GX44CB5aSW6YOo44Gn56K65L+d44GV44KM44Gf44Oq44K944O844K544Gr44Gk44GE44Gm44Gv6Kej5pS+44GX44G+44Gb44KT44CCXG4gICAgICAgICAqICAgICAg5aSW6YOo44Gn6YGp5YiH44Gr56C05qOE44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3Bvc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovmnKrliJ3mnJ/ljJbop6PmlL7jgqzjg7zjg4kgLS0tXG4gICAgICAgICAgICAvLyBkaXNwb3NlKCnjgZnjgovjgavjga/lhYjjgatpbml0aWFsaXplKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgICAgIGlmKCFzX2lzSW5pdGlhbGl6ZWQpICAgIC8vIGZhbHNlLi4u44Oq44K944O844K55pyq56K65L+d44Gu5aC05ZCIXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgc2tpcHBlZCwgbm90IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk7XG5cbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcblxuICAgICAgICAgICAgLy8g44Os44Oz44OA44Op44Gu6Z2Z55qE44Oq44K944O844K577yI44K344Kn44O844OA44OX44Ot44Kw44Op44Og5LuW77yJ44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAgICBDdWJpc21SZW5kZXJlci5zdGF0aWNSZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBpcyBjb21wbGV0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgZ/jgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiBBUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRlZCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga7jg6rjgr3jg7zjgrnliJ3mnJ/ljJbjgYzjgZnjgafjgavooYzjgo/jgozjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiDjg6rjgr3jg7zjgrnnorrkv53jgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gc19pc0luaXRpYWxpemVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvcmUgQVBJ44Gr44OQ44Kk44Oz44OJ44GX44Gf44Ot44Kw6Zai5pWw44KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcHJhcmFtIG1lc3NhZ2Ug44Ot44Kw44Oh44OD44K744O844K4XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNvcmVMb2dGdW5jdGlvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBsb2dnaW5nIG5vdCBwb3NzaWJsZS5cbiAgICAgICAgICAgIGlmKCFMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44Gu5YCk44KS6L+U44GZ44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRMb2dnaW5nTGV2ZWwoKTogTG9nTGV2ZWxcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNfb3B0aW9uICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfb3B0aW9uLmxvZ2dpbmdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBMb2dMZXZlbC5Mb2dMZXZlbF9PZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBDdWJpc21NYW5hZ2Vy44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldElkTWFuYWdlcigpOiBDdWJpc21JZE1hbmFnZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfY3ViaXNtSWRNYW5hZ2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmdmeeahOOCr+ODqeOCueOBqOOBl+OBpuS9v+eUqOOBmeOCi1xuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZXjgZvjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvblxue1xuICAgIGxvZ0Z1bmN0aW9uOiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uOyAgIC8vIOODreOCsOWHuuWKm+OBrumWouaVsOOCquODluOCuOOCp+OCr+ODiFxuICAgIGxvZ2dpbmdMZXZlbDogTG9nTGV2ZWw7ICAvLyDjg63jgrDlh7rlipvjg6zjg5njg6vjga7oqK3lrppcbn1cblxuLyoqXG4gKiDjg63jgrDlh7rlipvjga7jg6zjg5njg6tcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWxcbntcbiAgICBMb2dMZXZlbF9WZXJib3NlID0gMCwgICAvLyDoqbPntLDjg63jgrBcbiAgICBMb2dMZXZlbF9EZWJ1ZywgICAgICAgICAvLyDjg4fjg5Djg4PjgrDjg63jgrBcbiAgICBMb2dMZXZlbF9JbmZvLCAgICAgICAgICAvLyBJbmZv44Ot44KwXG4gICAgTG9nTGV2ZWxfV2FybmluZywgICAgICAgLy8g6K2m5ZGK44Ot44KwXG4gICAgTG9nTGV2ZWxfRXJyb3IsICAgICAgICAgLy8g44Ko44Op44O844Ot44KwXG4gICAgTG9nTGV2ZWxfT2ZmICAgICAgICAgICAgLy8g44Ot44Kw5Ye65Yqb54Sh5Yq5XG59XG4iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIDR4NOOBruihjOWIl1xuICAgICAqIFxuICAgICAqIDR4NOihjOWIl+OBruS+v+WIqeOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRyaXg0NFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHIgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsgICAgLy8gNCAqIDTjga7jgrXjgqTjgrpcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+X44GR5Y+W44Gj44Gf77yS44Gk44Gu6KGM5YiX44Gu5LmX566X44KS6KGM44GG44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXG4gICAgICAgICAqIEBwYXJhbSBiIOihjOWIl2JcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogRmxvYXQzMkFycmF5LCBiOiBGbG9hdDMyQXJyYXksIGRzdDogRmxvYXQzMkFycmF5KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IG47ICsrailcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY1tqICsgaSAqIDRdICs9IGFbayArIGkgKiA0XSAqIGJbaiArIGsgKiA0XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTY7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWNmOS9jeihjOWIl+OBq+WIneacn+WMluOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGxvYWRJZGVudGl0eSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS6Kit5a6aXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gdHIgMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNYXRyaXgodHI6IEZsb2F0MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE2OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJbaV0gPSB0cltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooYzliJfjgpLmta7li5XlsI/mlbDngrnmlbDjga7phY3liJfjgaflj5blvpdcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruenu+WLlemHj+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gc3JjIFjou7jjga7lgKRcbiAgICAgICAgICogQHJldHVybiDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Y6Lu444Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clswXSAqIHNyYyArIHRoaXMuX3RyWzEyXTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWei7uOOBruWApFxuICAgICAgICAgKiBAcmV0dXJu44CA54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWei7uOOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdICogc3JjICsgdGhpcy5fdHJbMTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTJdKSAvIHRoaXMuX3RyWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTNdKSAvIHRoaXMuX3RyWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuenu+WLlVxuICAgICAgICAgKiBcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm55u45a++55qE44Gr56e75YuV44GZ44KL44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAxLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgeSwgICAgICAwLjAsICAgIDEuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLnp7vli5VcbiAgICAgICAgICogXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xuICAgICAgICAgKiBAcGFyYW0geSB56Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga5Y6Lu444Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWCh4OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWei7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS55u45a++55qE44Gr6Kit5a6a44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzY2FsZVJlbGF0aXZlKHg6IG51bWJlciwgeTpudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgeSwgICAgICAwLjAsICAgIDAuMCwgXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCwgICAgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuaMh+WumuOBl+OBn+WAjeeOh+OBq+ioreWumuOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzBdID0geDtcbiAgICAgICAgICAgIHRoaXMuX3RyWzVdID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjgavooYzliJfjgpLkuZfnrpdcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG0g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeU1hdHJpeChtOiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkobS5nZXRBcnJheSgpLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCquODluOCuOOCp+OCr+ODiOOBruOCs+ODlOODvOOCkueUn+aIkOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNsb25lKCk6IEN1YmlzbU1hdHJpeDQ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjbG9uZU1hdHJpeDogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fdHIubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xvbmVNYXRyaXguX3RyW2ldID0gdGhpcy5fdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZU1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBfdHI6IEZsb2F0MzJBcnJheTsgICAgLy8gNHg06KGM5YiX44OH44O844K/XG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9Db3JlL2xpdmUyZGN1YmlzbWNvcmUuZC50c1wiIC8+XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21yZW5kZXJlcn0gZnJvbSBcIi4uL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlclwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gXCIuLi9pZC9jdWJpc21pZFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtZnJhbWV3b3JrfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7Q1NNX0FTU0VSVH0gZnJvbSBcIi4uL3V0aWxzL2N1YmlzbWRlYnVnXCI7XG5pbXBvcnQgQ3ViaXNtRnJhbWV3b3JrID0gY3ViaXNtZnJhbWV3b3JrLkN1YmlzbUZyYW1ld29yaztcbmltcG9ydCBDdWJpc21CbGVuZE1vZGUgPSBjdWJpc21yZW5kZXJlci5DdWJpc21CbGVuZE1vZGU7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44OrXG4gICAgICogXG4gICAgICogTW9j44OH44O844K/44GL44KJ55Sf5oiQ44GV44KM44KL44Oi44OH44Or44Gu44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1vZGVsXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu44OR44Op44Oh44O844K/44Gu5pu05pawXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gVXBkYXRlIG1vZGVsXG4gICAgICAgICAgICB0aGlzLl9tb2RlbC51cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhpcy5fbW9kZWwuZHJhd2FibGVzLnJlc2V0RHluYW1pY0ZsYWdzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kt44Oj44Oz44OQ44K544Gu5bmF44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2RlbCA9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbC5jYW52YXNpbmZvLkNhbnZhc1dpZHRoIC8gdGhpcy5fbW9kZWwuY2FudmFzaW5mby5QaXhlbHNQZXJVbml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCreODo+ODs+ODkOOCueOBrumrmOOBleOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldENhbnZhc0hlaWdodCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLmNhbnZhc2luZm8uQ2FudmFzSGVpZ2h0IC8gdGhpcy5fbW9kZWwuY2FudmFzaW5mby5QaXhlbHNQZXJVbml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OCkuS/neWtmOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNhdmVQYXJhbWV0ZXJzKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuY291bnQ7XG4gICAgICAgICAgICBjb25zdCBzYXZlZFBhcmFtZXRlckNvdW50OiBudW1iZXIgPSB0aGlzLl9zYXZlZFBhcmFtZXRlcnMuZ2V0U2l6ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1ldGVyQ291bnQ7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHNhdmVkUGFyYW1ldGVyQ291bnQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlZFBhcmFtZXRlcnMuc2V0KGksIHRoaXMuX3BhcmFtZXRlclZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVkUGFyYW1ldGVycy5wdXNoQmFjayh0aGlzLl9wYXJhbWV0ZXJWYWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLlj5blvpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbCgpOiBMaXZlMkRDdWJpc21Db3JlLk1vZGVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjg4Tjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLlj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBhcnRJZCDjg5Hjg7zjg4Tjga5JRFxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOODhOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcnRJbmRleChwYXJ0SWQ6IEN1YmlzbUlkSGFuZGxlKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBwYXJ0SW5kZXg6IG51bWJlcjtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWwucGFydHMuY291bnQ7XG5cbiAgICAgICAgICAgIGZvcihwYXJ0SW5kZXggPSAwOyBwYXJ0SW5kZXggPCBwYXJ0Q291bnQ7ICsrcGFydEluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHBhcnRJZCA9PSB0aGlzLl9wYXJ0SWRzLmF0KHBhcnRJbmRleCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g44Oi44OH44Or44Gr5a2Y5Zyo44GX44Gm44GE44Gq44GE5aC05ZCI44CB6Z2e5a2Y5Zyo44OR44O844OESUTjg6rjgrnjg4jlhoXjgavjgYLjgovjgYvjgpLmpJzntKLjgZfjgIHjgZ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLov5TjgZlcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFydElkLmlzRXhpc3QocGFydElkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbm90RXhpc3RQYXJ0SWQuZ2V0VmFsdWUocGFydElkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g6Z2e5a2Y5Zyo44OR44O844OESUTjg6rjgrnjg4jjgavjgarjgYTloLTlkIjjgIHmlrDjgZfjgY/opoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICAgIHBhcnRJbmRleCA9IHBhcnRDb3VudCArIHRoaXMuX25vdEV4aXN0UGFydElkLmdldFNpemUoKTtcbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFydElkLnNldFZhbHVlKHBhcnRJZCwgcGFydEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFydE9wYWNpdGllcy5hcHBlbmRLZXkocGFydEluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjg4Tjga7lgIvmlbDjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjg4Tjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJ0Q291bnQoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWwucGFydHMuY291bnQ7XG4gICAgICAgICAgICByZXR1cm4gcGFydENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOODhOOBruS4jemAj+aYjuW6puOBruioreWumihJbmRleClcbiAgICAgICAgICogQHBhcmFtIHBhcnRJbmRleCDjg5Hjg7zjg4Tjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0UGFydE9wYWNpdHlCeUluZGV4KHBhcnRJbmRleDogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFydE9wYWNpdGllcy5pc0V4aXN0KHBhcnRJbmRleCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbm90RXhpc3RQYXJ0T3BhY2l0aWVzLnNldFZhbHVlKHBhcnRJbmRleCxvcGFjaXR5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOOCpOODs+ODh+ODg+OCr+OCueOBruevhOWbsuWGheaknOefpVxuICAgICAgICAgICAgQ1NNX0FTU0VSVCgwIDw9IHBhcnRJbmRleCAmJiBwYXJ0SW5kZXggPCB0aGlzLmdldFBhcnRDb3VudCgpKTtcblxuICAgICAgICAgICAgdGhpcy5fcGFydE9wYWNpdGllc1twYXJ0SW5kZXhdID0gb3BhY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjg4Tjga7kuI3pgI/mmI7luqbjga7oqK3lrpooSWQpXG4gICAgICAgICAqIEBwYXJhbSBwYXJ0SWQg44OR44O844OE44GuSURcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg44OR44O844OE44Gu5LiN6YCP5piO5bqmXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0UGFydE9wYWNpdHlCeUlkKHBhcnRJZDogQ3ViaXNtSWRIYW5kbGUsIG9wYWNpdHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g6auY6YCf5YyW44Gu44Gf44KB44GrUGFydEluZGV444KS5Y+W5b6X44Gn44GN44KL5qmf5qeL44Gr44Gq44Gj44Gm44GE44KL44GM44CB5aSW6YOo44GL44KJ44Gu6Kit5a6a44Gu5pmC44Gv5ZG844Gz5Ye644GX6aC75bqm44GM5L2O44GE44Gf44KB5LiN6KaBXG4gICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5nZXRQYXJ0SW5kZXgocGFydElkKTtcblxuICAgICAgICAgICAgaWYoaW5kZXggPCAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8g44OR44O844OE44GM44Gq44GE44Gu44Gn44K544Kt44OD44OXXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0UGFydE9wYWNpdHlCeUluZGV4KGluZGV4LCBvcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjg4Tjga7kuI3pgI/mmI7luqbjga7lj5blvpcoaW5kZXgpXG4gICAgICAgICAqIEBwYXJhbSBwYXJ0SW5kZXgg44OR44O844OE44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g44OR44O844OE44Gu5LiN6YCP5piO5bqmXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFydE9wYWNpdHlCeUluZGV4KHBhcnRJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFydE9wYWNpdGllcy5pc0V4aXN0KHBhcnRJbmRleCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8g44Oi44OH44Or44Gr5a2Y5Zyo44GX44Gq44GE44OR44O844OESUTjga7loLTlkIjjgIHpnZ7lrZjlnKjjg5Hjg7zjg4Tjg6rjgrnjg4jjgYvjgonkuI3pgI/mmI7luqbjgpLov5TjgZnjgIJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbm90RXhpc3RQYXJ0T3BhY2l0aWVzLmdldFZhbHVlKHBhcnRJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOOCpOODs+ODh+ODg+OCr+OCueOBruevhOWbsuWGheaknOefpVxuICAgICAgICAgICAgQ1NNX0FTU0VSVCgwIDw9IHBhcnRJbmRleCAmJiBwYXJ0SW5kZXggPCB0aGlzLmdldFBhcnRDb3VudCgpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnRPcGFjaXRpZXNbcGFydEluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg7zjg4Tjga7kuI3pgI/mmI7luqbjga7lj5blvpcoaWQpXG4gICAgICAgICAqIEBwYXJhbSBwYXJ0SWQg44OR44O844OE44Gu77yp772EXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844OE44Gu5LiN6YCP5piO5bqmXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFydE9wYWNpdHlCeUlkKHBhcnRJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g6auY6YCf5YyW44Gu44Gf44KB44GrUGFydEluZGV444KS5Y+W5b6X44Gn44GN44KL5qmf5qeL44Gr44Gq44Gj44Gm44GE44KL44GM44CB5aSW6YOo44GL44KJ44Gu6Kit5a6a44Gu5pmC44Gv5ZG844Gz5Ye644GX6aC75bqm44GM5L2O44GE44Gf44KB5LiN6KaBXG4gICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5nZXRQYXJ0SW5kZXgocGFydElkKTtcblxuICAgICAgICAgICAgaWYoaW5kZXggPCAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAwOyAgIC8vIOODkeODvOODhOOBjOeEoeOBhOOBruOBp+OCueOCreODg+ODl1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJ0T3BhY2l0eUJ5SW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCueOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0g44OR44Op44Oh44O844K/SURcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJJbmRleChwYXJhbWV0ZXJJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlckluZGV4OiBudW1iZXI7XG4gICAgICAgICAgICBjb25zdCBpZENvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLmNvdW50O1xuXG4gICAgICAgICAgICBmb3IocGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IGlkQ291bnQ7ICsrcGFyYW1ldGVySW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYocGFyYW1ldGVySWQgIT0gdGhpcy5fcGFyYW1ldGVySWRzLmF0KHBhcmFtZXRlckluZGV4KSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJJbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g44Oi44OH44Or44Gr5a2Y5Zyo44GX44Gm44GE44Gq44GE5aC05ZCI44CB6Z2e5a2Y5Zyo44OR44Op44Oh44O844K/SUTjg6rjgrnjg4jlhoXjgpLmpJzntKLjgZfjgIHjgZ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLov5TjgZlcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFyYW1ldGVySWQuaXNFeGlzdChwYXJhbWV0ZXJJZCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVySWQuZ2V0VmFsdWUocGFyYW1ldGVySWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDpnZ7lrZjlnKjjg5Hjg6njg6Hjg7zjgr9JROODquOCueODiOOBq+OBquOBhOWgtOWQiOaWsOOBl+OBj+imgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgICAgcGFyYW1ldGVySW5kZXggPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLmNvdW50ICsgdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJJZC5nZXRTaXplKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVySWQuc2V0VmFsdWUocGFyYW1ldGVySWQsIHBhcmFtZXRlckluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVyVmFsdWVzLmFwcGVuZEtleShwYXJhbWV0ZXJJbmRleCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgIvmlbDjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr/jga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJDb3VudCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gu5pyA5aSn5YCk44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJbmRleCDjg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr/jga7mnIDlpKflgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJNYXhpbXVtVmFsdWUocGFyYW1ldGVySW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5tYXhpbXVtVmFsdWVzW3BhcmFtZXRlckluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7mnIDlsI/lgKTjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlckluZGV4IOODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIOODkeODqeODoeODvOOCv+OBruacgOWwj+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcmFtZXRlck1pbmltdW1WYWx1ZShwYXJhbWV0ZXJJbmRleDogbnVtYmVyKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1pbmltdW1WYWx1ZXNbcGFyYW1ldGVySW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruODh+ODleOCqeODq+ODiOWApOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySW5kZXgg44OR44Op44Oh44O844K/44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/44Gu44OH44OV44Kp44Or44OI5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFyYW1ldGVyRGVmYXVsdFZhbHVlKHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuZGVmYXVsdFZhbHVlc1twYXJhbWV0ZXJJbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gu5YCk44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJbmRleCAgICDjg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgocGFyYW1ldGVySW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9ub3RFeGlzdFBhcmFtZXRlclZhbHVlcy5pc0V4aXN0KHBhcmFtZXRlckluZGV4KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJWYWx1ZXMuZ2V0VmFsdWUocGFyYW1ldGVySW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDjgqTjg7Pjg4fjg4Pjgq/jgrnjga7nr4Tlm7LlhoXmpJznn6VcbiAgICAgICAgICAgIENTTV9BU1NFUlQoMCA8PSBwYXJhbWV0ZXJJbmRleCAmJiBwYXJhbWV0ZXJJbmRleCA8IHRoaXMuZ2V0UGFyYW1ldGVyQ291bnQoKSk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyVmFsdWVzW3BhcmFtZXRlckluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlcklkICAgIOODkeODqeODoeODvOOCv+OBrklEXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0UGFyYW1ldGVyVmFsdWVCeUlkKHBhcmFtZXRlcklkOiBDdWJpc21JZEhhbmRsZSk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDpq5jpgJ/ljJbjga7jgZ/jgoHjgatwYXJhbWV0ZXJJbmRleOOCkuWPluW+l+OBp+OBjeOCi+apn+ani+OBq+OBquOBo+OBpuOBhOOCi+OBjOOAgeWklumDqOOBi+OCieOBruioreWumuOBruaZguOBr+WRvOOBs+WHuuOBl+mgu+W6puOBjOS9juOBhOOBn+OCgeS4jeimgVxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVySW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFyYW1ldGVySW5kZXgocGFyYW1ldGVySWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7oqK3lrppcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlckluZGV4IOODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44OR44Op44Oh44O844K/44Gu5YCkXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg6YeN44G/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyID0gMS4wKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9ub3RFeGlzdFBhcmFtZXRlclZhbHVlcy5pc0V4aXN0KHBhcmFtZXRlckluZGV4KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3RFeGlzdFBhcmFtZXRlclZhbHVlcy5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICh3ZWlnaHQgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMuX25vdEV4aXN0UGFyYW1ldGVyVmFsdWVzLmdldFZhbHVlKHBhcmFtZXRlckluZGV4KSAqICgxIC0gd2VpZ2h0KSkgKyAodmFsdWUgKiB3ZWlnaHQpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g44Kk44Oz44OH44OD44Kv44K544Gu56+E5Zuy5YaF5qSc55+lXG4gICAgICAgICAgICBDU01fQVNTRVJUKDAgPD0gcGFyYW1ldGVySW5kZXggJiYgcGFyYW1ldGVySW5kZXggPCB0aGlzLmdldFBhcmFtZXRlckNvdW50KCkpO1xuXG4gICAgICAgICAgICBpZih0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1heGltdW1WYWx1ZXNbcGFyYW1ldGVySW5kZXhdIDwgdmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1heGltdW1WYWx1ZXNbcGFyYW1ldGVySW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5fbW9kZWwucGFyYW1ldGVycy5taW5pbXVtVmFsdWVzW3BhcmFtZXRlckluZGV4XSA+IHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5taW5pbXVtVmFsdWVzW3BhcmFtZXRlckluZGV4XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVyVmFsdWVzW3BhcmFtZXRlckluZGV4XSA9ICh3ZWlnaHQgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9wYXJhbWV0ZXJWYWx1ZXNbcGFyYW1ldGVySW5kZXhdID0gKHRoaXMuX3BhcmFtZXRlclZhbHVlc1twYXJhbWV0ZXJJbmRleF0gKiAoMSAtIHdlaWdodCkpICsgKHZhbHVlICogd2VpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7oqK3lrppcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlcklkIOODkeODqeODoeODvOOCv+OBrklEXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcbiAgICAgICAgICogQHBhcmFtIHdlaWdodCDph43jgb9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQocGFyYW1ldGVySWQ6IEN1YmlzbUlkSGFuZGxlLCB2YWx1ZTogbnVtYmVyLCB3ZWlnaHQ6IG51bWJlciA9IDEuMCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFyYW1ldGVySW5kZXgocGFyYW1ldGVySWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgoaW5kZXgsIHZhbHVlLCB3ZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWApOOBruWKoOeulyhpbmRleClcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlckluZGV4IOODkeODqeODoeODvOOCv+OCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Yqg566X44GZ44KL5YCkXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg6YeN44G/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYWRkUGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyID0gMS4wKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlclZhbHVlQnlJbmRleChwYXJhbWV0ZXJJbmRleCwgKHRoaXMuZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4KSArICh2YWx1ZSAqIHdlaWdodCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7liqDnrpcoaWQpXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJZCDjg5Hjg6njg6Hjg7zjgr/vvKnvvKRcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOWKoOeul+OBmeOCi+WApFxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFkZFBhcmFtZXRlclZhbHVlQnlJZChwYXJhbWV0ZXJJZDogYW55LCB2YWx1ZTogbnVtYmVyLCB3ZWlnaHQ6IG51bWJlciA9IDEuMCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFyYW1ldGVySW5kZXgocGFyYW1ldGVySWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgoaW5kZXgsIHZhbHVlLCB3ZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWApOOBruS5l+eul1xuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySWQg44OR44Op44Oh44O844K/44GuSURcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOS5l+eul+OBmeOCi+WApFxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5UGFyYW1ldGVyVmFsdWVCeUlkKHBhcmFtZXRlcklkOiBDdWJpc21JZEhhbmRsZSwgdmFsdWU6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIgPSAxLjApOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmdldFBhcmFtZXRlckluZGV4KHBhcmFtZXRlcklkKTtcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbHlQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgoaW5kZXgsIHZhbHVlLCB3ZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWApOOBruS5l+eul1xuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySW5kZXgg44OR44Op44Oh44O844K/44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZeOAgOS5l+eul+OBmeOCi+WApFxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG11bHRpcGx5UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyID0gMS4wKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlclZhbHVlQnlJbmRleChwYXJhbWV0ZXJJbmRleCwgKHRoaXMuZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4KSAqICgxLjAgKyAodmFsdWUgLSAxLjApICogd2VpZ2h0KSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSWQgRHJhd2FibGXjga5JRFxuICAgICAgICAgKiBAcmV0dXJuIERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVJbmRleChkcmF3YWJsZUlkOiBDdWJpc21JZEhhbmRsZSk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBkcmF3YWJsZUNvdW50ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmNvdW50O1xuXG4gICAgICAgICAgICBmb3IobGV0IGRyYXdhYmxlSW5kZXg6IG51bWJlciA9IDA7IGRyYXdhYmxlSW5kZXggPCBkcmF3YWJsZUNvdW50OyArK2RyYXdhYmxlSW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZHJhd2FibGVJZHMuYXQoZHJhd2FibGVJbmRleCkgPT0gZHJhd2FibGVJZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkcmF3YWJsZUluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44Gu5YCL5pWw44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7lgIvmlbBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUNvdW50KCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBkcmF3YWJsZUNvdW50ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmNvdW50O1xuICAgICAgICAgICAgcmV0dXJuIGRyYXdhYmxlQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga5JROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIGRyYXdhYmxl44GuSURcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUlkKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IEN1YmlzbUlkSGFuZGxlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcklkczogc3RyaW5nW10gPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuaWRzO1xuICAgICAgICAgICAgcmV0dXJuIEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChwYXJhbWV0ZXJJZHNbZHJhd2FibGVJbmRleF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44Gu5o+P55S76aCG44Oq44K544OI44Gu5Y+W5b6XXG4gICAgICAgICAqIEByZXR1cm4gRHJhd2FibGXjga7mj4/nlLvpoIbjg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVJlbmRlck9yZGVycygpOiBJbnQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlck9yZGVyczogSW50MzJBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5yZW5kZXJPcmRlcnM7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyT3JkZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44Gu44OG44Kv44K544OB44Oj44Kk44Oz44OH44OD44Kv44K544Oq44K544OI44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7jg4bjgq/jgrnjg4Hjg6PjgqTjg7Pjg4fjg4Pjgq/jgrnjg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlSW5kaWNlczogSW50MzJBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy50ZXh0dXJlSW5kaWNlcztcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlSW5kaWNlc1tkcmF3YWJsZUluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3YWJsZeOBrlZlcnRleFBvc2l0aW9uc+OBruWkieWMluaDheWgseOBruWPluW+l1xuICAgICAgICAgKlxuICAgICAgICAgKiDnm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgadEcmF3YWJsZeOBrumggueCueaDheWgseOBjOWkieWMluOBl+OBn+OBi+OCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICBkcmF3YWJsZUluZGV4ICAgRHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHZhbCAgdHJ1ZSAgICBEcmF3YWJsZeOBrumggueCueaDheWgseOBjOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp+WkieWMluOBl+OBn1xuICAgICAgICAgKiBAcmV0dmFsICBmYWxzZSAgIERyYXdhYmxl44Gu6aCC54K55oOF5aCx44GM55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44Gn5aSJ5YyW44GX44Gm44GE44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVEeW5hbWljRmxhZ1ZlcnRleFBvc2l0aW9uc0RpZENoYW5nZShkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNGbGFnczogVWludDhBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5keW5hbWljRmxhZ3M7XG4gICAgICAgICAgICByZXR1cm4gTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNWZXJ0ZXhQb3NpdGlvbnNEaWRDaGFuZ2VCaXQoZHluYW1pY0ZsYWdzW2RyYXdhYmxlSW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3YWJsZeOBrumggueCueOCpOODs+ODh+ODg+OCr+OCueOBruWAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIGRyYXdhYmxl44Gu6aCC54K544Kk44Oz44OH44OD44Kv44K544Gu5YCL5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVWZXJ0ZXhJbmRleENvdW50KGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpbmRleENvdW50czogSW50MzJBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5pbmRleENvdW50cztcbiAgICAgICAgICAgIHJldHVybiBpbmRleENvdW50c1tkcmF3YWJsZUluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3YWJsZeOBrumggueCueOBruWAi+aVsOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIGRyYXdhYmxl44Gu6aCC54K544Gu5YCL5pWwXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVWZXJ0ZXhDb3VudChkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4Q291bnRzID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLnZlcnRleENvdW50cztcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhDb3VudHNbZHJhd2FibGVJbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7poILngrnjg6rjgrnjg4jjga7lj5blvpdcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXggZHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBrumggueCueODquOCueODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlVmVydGljZXMoZHJhd2FibGVJbmRleDogbnVtYmVyKTogRmxvYXQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERyYXdhYmxlVmVydGV4UG9zaXRpb25zKGRyYXdhYmxlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44Gu6aCC54K544Kk44Oz44OH44OD44Kv44K544Oq44K544OI44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBkcmFyYWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7poILngrnjgqTjg7Pjg4fjg4Pjgq/jgrnjg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVZlcnRleEluZGljZXMoZHJhd2FibGVJbmRleDogbnVtYmVyKTogVWludDE2QXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNlc0FycmF5OiBVaW50MTZBcnJheVtdID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmluZGljZXM7XG4gICAgICAgICAgICByZXR1cm4gaW5kaWNlc0FycmF5W2RyYXdhYmxlSW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44Gu6aCC54K544Oq44K544OI44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7poILngrnjg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVZlcnRleFBvc2l0aW9ucyhkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBGbG9hdDMyQXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdmVydGljZXNBcnJheTogRmxvYXQzMkFycmF5W10gPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMudmVydGV4UG9zaXRpb25zO1xuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2VzQXJyYXlbZHJhd2FibGVJbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7poILngrnjga5VVuODquOCueODiOOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIGRyYXdhYmxl44Gu6aCC54K5VVbjg6rjgrnjg4hcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVZlcnRleFV2cyhkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBGbG9hdDMyQXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdXZzQXJyYXk6IEZsb2F0MzJBcnJheVtdID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLnZlcnRleFV2cztcbiAgICAgICAgICAgIHJldHVybiB1dnNBcnJheVtkcmF3YWJsZUluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3YWJsZeOBruS4jemAj+aYjuW6puOBruWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIGRyYXdhYmxl44Gu5LiN6YCP5piO5bqmXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVPcGFjaXR5KGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBvcGFjaXRpZXM6IEZsb2F0MzJBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5vcGFjaXRpZXM7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0aWVzW2RyYXdhYmxlSW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44Gu44Kr44Oq44Oz44Kw5oOF5aCx44Gu5Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7jgqvjg6rjg7PjgrDmg4XloLFcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUN1bGxpbmcoZHJhd2FibGVJbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb25zdGFudEZsYWdzID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmNvbnN0YW50RmxhZ3M7XG5cbiAgICAgICAgICAgIHJldHVybiAhTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNJc0RvdWJsZVNpZGVkQml0KGNvbnN0YW50RmxhZ3NbZHJhd2FibGVJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7jg5bjg6zjg7Pjg4njg6Ljg7zjg4njgpLlj5blvpdcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXggRHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBruODluODrOODs+ODieODouODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlQmxlbmRNb2RlKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IEN1YmlzbUJsZW5kTW9kZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb25zdGFudEZsYWdzID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmNvbnN0YW50RmxhZ3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAoTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNCbGVuZEFkZGl0aXZlQml0KGNvbnN0YW50RmxhZ3NbZHJhd2FibGVJbmRleF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBDdWJpc21CbGVuZE1vZGUuQ3ViaXNtQmxlbmRNb2RlX0FkZGl0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChMaXZlMkRDdWJpc21Db3JlLlV0aWxzLmhhc0JsZW5kTXVsdGlwbGljYXRpdmVCaXQoY29uc3RhbnRGbGFnc1tkcmF3YWJsZUluZGV4XSkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEN1YmlzbUJsZW5kTW9kZS5DdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogQ3ViaXNtQmxlbmRNb2RlLkN1YmlzbUJsZW5kTW9kZV9Ob3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jg6rjgrnjg4jjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiBEcmF3YWJsZeOBruOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODquOCueODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlTWFza3MoKTogSW50MzJBcnJheVtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tzOiBJbnQzMkFycmF5W10gPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMubWFza3M7XG4gICAgICAgICAgICByZXR1cm4gbWFza3M7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7lgIvmlbDjg6rjgrnjg4jjga7lj5blvpdcbiAgICAgICAgICogQHJldHVybiBEcmF3YWJsZeOBruOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OBruWAi+aVsOODquOCueODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlTWFza0NvdW50cygpOiBJbnQzMkFycmF5XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tDb3VudHM6IEludDMyQXJyYXkgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMubWFza0NvdW50cztcbiAgICAgICAgICAgIHJldHVybiBtYXNrQ291bnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OBruS9v+eUqOeKtuaFi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OCkuS9v+eUqOOBl+OBpuOBhOOCi1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OCkuS9v+eUqOOBl+OBpuOBhOOBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzVXNpbmdNYXNraW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBkOiBudW1iZXIgPSAwOyBkIDwgdGhpcy5fbW9kZWwuZHJhd2FibGVzLmNvdW50OyArK2QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fbW9kZWwuZHJhd2FibGVzLm1hc2tDb3VudHNbZF0gPD0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3YWJsZeOBruihqOekuuaDheWgseOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXggRHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiB0cnVlIERyYXdhYmxl44GM6KGo56S6XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2UgRHJhd2FibGXjgYzpnZ7ooajnpLpcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUR5bmFtaWNGbGFnSXNWaXNpYmxlKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZHluYW1pY0ZsYWdzOiBVaW50OEFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmR5bmFtaWNGbGFncztcbiAgICAgICAgICAgIHJldHVybiBMaXZlMkRDdWJpc21Db3JlLlV0aWxzLmhhc0lzVmlzaWJsZUJpdChkeW5hbWljRmxhZ3NbZHJhd2FibGVJbmRleF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdhYmxl44GuRHJhd09yZGVy44Gu5aSJ5YyW5oOF5aCx44Gu5Y+W5b6XXG4gICAgICAgICAqIFxuICAgICAgICAgKiDnm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgadkcmF3YWJsZeOBrmRyYXdPcmRlcuOBjOWkieWMluOBl+OBn+OBi+OCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKiBkcmF3T3JkZXLjga9hcnRNZXNo5LiK44Gn5oyH5a6a44GZ44KLMOOBi+OCiTEwMDDjga7mg4XloLFcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXggZHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgICAgICogQHJldHVybiB0cnVlIGRyYXdhYmxl44Gu5LiN6YCP5piO5bqm44GM55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44Gn5aSJ5YyW44GX44GfXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2UgZHJhd2FibGXjga7kuI3pgI/mmI7luqbjgYznm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgaflpInljJbjgZfjgabjgYTjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUR5bmFtaWNGbGFnVmlzaWJpbGl0eURpZENoYW5nZShkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNGbGFnczogVWludDhBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5keW5hbWljRmxhZ3M7XG4gICAgICAgICAgICByZXR1cm4gTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNWaXNpYmlsaXR5RGlkQ2hhbmdlQml0KGR5bmFtaWNGbGFnc1tkcmF3YWJsZUluZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2FibGXjga7kuI3pgI/mmI7luqbjga7lpInljJbmg4XloLHjga7lj5blvpdcbiAgICAgICAgICogXG4gICAgICAgICAqIOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp2RyYXdhYmxl44Gu5LiN6YCP5piO5bqm44GM5aSJ5YyW44GX44Gf44GL44KS5Y+W5b6X44GZ44KL44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBkcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUgRHJhd2FibGXjga7kuI3pgI/mmI7luqbjgYznm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgaflpInljJbjgZfjgZ9cbiAgICAgICAgICogQHJldHVybiBmYWxzZSBEcmF3YWJsZeOBruS4jemAj+aYjuW6puOBjOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp+WkieWMluOBl+OBpuOBquOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlRHluYW1pY0ZsYWdPcGFjaXR5RGlkQ2hhbmdlKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZHluYW1pY0ZsYWdzOiBVaW50OEFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmR5bmFtaWNGbGFncztcbiAgICAgICAgICAgIHJldHVybiBMaXZlMkRDdWJpc21Db3JlLlV0aWxzLmhhc09wYWNpdHlEaWRDaGFuZ2VCaXQoZHluYW1pY0ZsYWdzW2RyYXdhYmxlSW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3YWJsZeOBruaPj+eUu+mghuW6j+OBruWkieWMluaDheWgseOBruWPluW+l1xuICAgICAgICAgKiBcbiAgICAgICAgICog55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44GnRHJhd2FibGXjga7mj4/nlLvjga7poIbluo/jgYzlpInljJbjgZfjgZ/jgYvjgpLlj5blvpfjgZnjgovjgIJcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSBEcmF3YWJsZeOBruaPj+eUu+OBrumghuW6j+OBjOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp+WkieWMluOBl+OBn1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIERyYXdhYmxl44Gu5o+P55S744Gu6aCG5bqP44GM55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44Gn5aSJ5YyW44GX44Gm44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVEeW5hbWljRmxhZ1JlbmRlck9yZGVyRGlkQ2hhbmdlKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZHluYW1pY0ZsYWdzOiBVaW50OEFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmR5bmFtaWNGbGFncztcbiAgICAgICAgICAgIHJldHVybiBMaXZlMkRDdWJpc21Db3JlLlV0aWxzLmhhc1JlbmRlck9yZGVyRGlkQ2hhbmdlQml0KGR5bmFtaWNGbGFnc1tkcmF3YWJsZUluZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5L+d5a2Y44GV44KM44Gf44OR44Op44Oh44O844K/44Gu6Kqt44G/6L6844G/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgbG9hZFBhcmFtZXRlcnMoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVyQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuY291bnQ7XG4gICAgICAgICAgICBjb25zdCBzYXZlZFBhcmFtZXRlckNvdW50OiBudW1iZXIgPSB0aGlzLl9zYXZlZFBhcmFtZXRlcnMuZ2V0U2l6ZSgpO1xuXG4gICAgICAgICAgICBpZihwYXJhbWV0ZXJDb3VudCA+IHNhdmVkUGFyYW1ldGVyQ291bnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyQ291bnQgPSBzYXZlZFBhcmFtZXRlckNvdW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbWV0ZXJDb3VudDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlclZhbHVlc1tpXSA9IHRoaXMuX3NhdmVkUGFyYW1ldGVycy5hdChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3mnJ/ljJbjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgQ1NNX0FTU0VSVCh0aGlzLl9tb2RlbCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlclZhbHVlcyA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMudmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5fcGFydE9wYWNpdGllcyA9IHRoaXMuX21vZGVsLnBhcnRzLm9wYWNpdGllcztcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlck1heGltdW1WYWx1ZXMgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1heGltdW1WYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJNaW5pbXVtVmFsdWVzID0gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5taW5pbXVtVmFsdWVzO1xuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVySWRzOiBzdHJpbmdbXSA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuaWRzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlckNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLmNvdW50O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVySWRzLnByZXBhcmVDYXBhY2l0eShwYXJhbWV0ZXJDb3VudCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1ldGVyQ291bnQ7ICsraSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlcklkcy5wdXNoQmFjayhDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQocGFyYW1ldGVySWRzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydElkczogc3RyaW5nW10gPSB0aGlzLl9tb2RlbC5wYXJ0cy5pZHM7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydENvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJ0cy5jb3VudDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRJZHMucHJlcGFyZUNhcGFjaXR5KHBhcnRDb3VudCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFydENvdW50OyArK2kpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0SWRzLnB1c2hCYWNrKEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChwYXJ0SWRzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd2FibGVJZHM6IHN0cmluZ1tdID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmlkcztcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3YWJsZUNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuY291bnQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3YWJsZUlkcy5wcmVwYXJlQ2FwYWNpdHkoZHJhd2FibGVDb3VudCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZHJhd2FibGVDb3VudDsgKytpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd2FibGVJZHMucHVzaEJhY2soQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKGRyYXdhYmxlSWRzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44OrXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IobW9kZWw6IExpdmUyREN1YmlzbUNvcmUuTW9kZWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJWYWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVyTWF4aW11bVZhbHVlcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJNaW5pbXVtVmFsdWVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3BhcnRPcGFjaXRpZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRQYXJhbWV0ZXJzID0gbmV3IGNzbVZlY3RvcjxudW1iZXI+KCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJJZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPigpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd2FibGVJZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPigpO1xuICAgICAgICAgICAgdGhpcy5fcGFydElkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFydElkID0gbmV3IGNzbU1hcDxDdWJpc21JZEhhbmRsZSwgbnVtYmVyPigpO1xuICAgICAgICAgICAgdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJJZCA9IG5ldyBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj4oKTtcbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVyVmFsdWVzID0gbmV3IGNzbU1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFydE9wYWNpdGllcyA9IG5ldyBjc21NYXA8bnVtYmVyLCBudW1iZXI+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX25vdEV4aXN0UGFydE9wYWNpdGllczogY3NtTWFwPG51bWJlciwgbnVtYmVyPjsgLy8g5a2Y5Zyo44GX44Gm44GE44Gq44GE44OR44O844OE44Gu5LiN6YCP5piO5bqm44Gu44Oq44K544OIXG4gICAgICAgIHByaXZhdGUgX25vdEV4aXN0UGFydElkOiBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj47ICAvLyDlrZjlnKjjgZfjgabjgYTjgarjgYTjg5Hjg7zjg4RJROOBruODquOCueODiFxuXG4gICAgICAgIHByaXZhdGUgX25vdEV4aXN0UGFyYW1ldGVyVmFsdWVzOiBjc21NYXA8bnVtYmVyLCBudW1iZXI+OyAgIC8vIOWtmOWcqOOBl+OBpuOBhOOBquOBhOODkeODqeODoeODvOOCv+OBruWApOOBruODquOCueODiFxuICAgICAgICBwcml2YXRlIF9ub3RFeGlzdFBhcmFtZXRlcklkOiBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj47IC8vIOWtmOWcqOOBl+OBpuOBhOOBquOBhOODkeODqeODoeODvOOCv0lE44Gu44Oq44K544OIXG5cbiAgICAgICAgcHJpdmF0ZSBfc2F2ZWRQYXJhbWV0ZXJzOiBjc21WZWN0b3I8bnVtYmVyPjsgICAgICAgICAgICAvLyDkv53lrZjjgZXjgozjgZ/jg5Hjg6njg6Hjg7zjgr9cblxuICAgICAgICBwcml2YXRlIF9tb2RlbDogTGl2ZTJEQ3ViaXNtQ29yZS5Nb2RlbDsgICAgICAgICAgICAgLy8g44Oi44OH44OrXG5cbiAgICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVyVmFsdWVzOiBGbG9hdDMyQXJyYXk7ICAgICAgICAgICAgLy8g44OR44Op44Oh44O844K/44Gu5YCk44Gu44Oq44K544OIXG4gICAgICAgIHByaXZhdGUgX3BhcmFtZXRlck1heGltdW1WYWx1ZXM6IEZsb2F0MzJBcnJheTsgICAgIC8vIOODkeODqeODoeODvOOCv+OBruacgOWkp+WApOOBruODquOCueODiFxuICAgICAgICBwcml2YXRlIF9wYXJhbWV0ZXJNaW5pbXVtVmFsdWVzOiBGbG9hdDMyQXJyYXk7ICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jga7mnIDlsI/lgKTjga7jg6rjgrnjg4hcblxuICAgICAgICBwcml2YXRlIF9wYXJ0T3BhY2l0aWVzOiBGbG9hdDMyQXJyYXk7ICAgICAgICAgICAgICAgICAgICAgLy8g44OR44O844OE44Gu5LiN6YCP5piO5bqm44Gu44Oq44K544OIXG5cbiAgICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVySWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+O1xuICAgICAgICBwcml2YXRlIF9wYXJ0SWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+O1xuICAgICAgICBwcml2YXRlIF9kcmF3YWJsZUlkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPjtcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuaW1wb3J0IEN1YmlzbU1hdHJpeDQ0ID0gY3ViaXNtbWF0cml4NDQuQ3ViaXNtTWF0cml4NDQ7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or5o+P55S744KS5Yem55CG44GZ44KL44Os44Oz44OA44OpXG4gICAgICogXG4gICAgICog44K144OW44Kv44Op44K544Gr55Kw5aKD5L6d5a2Y44Gu5o+P55S75ZG95Luk44KS6KiY6L+w44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1YmlzbVJlbmRlcmVyXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GX44Gm5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogQ3ViaXNtUmVuZGVyZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShyZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICog5byV5pWw44Gr5rih44GX44Gf44Oi44OH44Or44GL44KJ44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44Gr5b+F6KaB44Gq5oOF5aCx44KS5Y+W44KK5Ye644GZ44GT44Go44GM44Gn44GN44KLXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkcmF3TW9kZWwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdldE1vZGVsKCkgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmRvRHJhd01vZGVsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDphY3liJfjga/opIfoo73jgZXjgozjgovjga7jgafjgIHlhYPjga7phY3liJfjga/lpJbjgafnoLTmo4TjgZfjgaboia/jgYRcbiAgICAgICAgICogQHBhcmFtIG1hdHJpeDQ0IE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNdnBNYXRyaXgobWF0cml4NDQ6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQuc2V0TWF0cml4KG1hdHJpeDQ0LmdldEFycmF5KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TXZwTWF0cml4KCk6IEN1YmlzbU1hdHJpeDQ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdnBNYXRyaXg0eDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgovvvIgxLjDjgYzmqJnmupbjga7nirbmhYvvvIlcbiAgICAgICAgICogQHBhcmFtIHJlZCDotaTjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGdyZWVuIOe3keODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gYmx1ZSDpnZLjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGFscGhhIM6x44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TW9kZWxDb2xvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihyZWQgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVkID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyZWQgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVkID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihncmVlbiA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBncmVlbiA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ3JlZW4gPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGJsdWUgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmx1ZSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYmx1ZSA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBibHVlID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhbHBoYSA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYWxwaGEgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuUiA9IHJlZDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuRyA9IGdyZWVuO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5CID0gYmx1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KLKDEuMOOBjOaomea6luOBrueKtuaFiylcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gUkdCQeOBruOCq+ODqeODvOaDheWgsVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsQ29sb3IoKTogQ3ViaXNtVGV4dHVyZUNvbG9yXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vZGVsQ29sb3IpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRJc1ByZW11bHRpcGxpZWRBbHBoYShlbmFibGU6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZW5hYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDkuZfnrpfmuIjjgb/jga7OseacieWKuVxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOS5l+eul+a4iOOBv+OBrs6x54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNQcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KL44CCXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldElzQ3VsbGluZyhjdWxsaW5nOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBjdWxsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kr44Oq44Oz44Kw5pyJ5Yq5XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kr44Oq44Oz44Kw54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNDdWxsaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VsbGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog44OR44Op44Oh44O844K/5YCk44Gu5b2x6Z+/5bqm44Gv44Os44Oz44OA44Op44Gu5a6f6KOF44Gr5L6d5a2Y44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuIOODkeODqeODoeODvOOCv+OBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEFuaXNvdHJvcHkobjogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOeVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEFuaXNvdHJvcHkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmlzb3J0b3B5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsKCk6IEN1YmlzbU1vZGVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yID0gbmV3IEN1YmlzbVRleHR1cmVDb2xvcigpO1xuXG4gICAgICAgICAgICAvLyDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJZcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+aPj+eUu+OBruWun+ijhVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRvRHJhd01vZGVsKCk6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaPj+eUu+OCquODluOCuOOCp+OCr+ODiO+8iOOCouODvOODiOODoeODg+OCt+ODpe+8ieOCkuaPj+eUu+OBmeOCi1xuICAgICAgICAgKiDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjgajjg4bjgq/jgrnjg4Hjg6Pnlarlj7fjgpLjgrvjg4Pjg4jjgafmuKHjgZnjgIJcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmVObyDmj4/nlLvjgZnjgovjg4bjgq/jgrnjg4Hjg6Pnlarlj7dcbiAgICAgICAgICogQHBhcmFtIGluZGV4Q291bnQg5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhDb3VudCDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnmlbBcbiAgICAgICAgICogQHBhcmFtIGluZGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol6aCC54K544Gu44Kk44Oz44OH44OD44Kv44K56YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnphY3liJdcbiAgICAgICAgICogQHBhcmFtIHV2QXJyYXkgdXbphY3liJdcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXG4gICAgICAgICAqIEBwYXJhbSBjb2xvckJsZW5kTW9kZSDjgqvjg6njg7zjg5bjg6zjg7Pjg4fjgqPjg7PjgrDjga7jgr/jgqTjg5dcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3TWVzaCh0ZXh0dXJlTm86IG51bWJlciwgaW5kZXhDb3VudDogbnVtYmVyLCB2ZXJ0ZXhDb3VudDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhBcnJheTogVWludDE2QXJyYXksIHZlcnRleEFycmF5OiBGbG9hdDMyQXJyYXksIHV2QXJyYXk6IEZsb2F0MzJBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG51bWJlciwgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSk6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlOiBGdW5jdGlvbjtcblxuICAgICAgICBwcm90ZWN0ZWQgX212cE1hdHJpeDR4NDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgICAgICAgICAgLy8gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsQ29sb3I6IEN1YmlzbVRleHR1cmVDb2xvcjsgICAgICAgICAgICAgICAgLy8g44Oi44OH44Or6Ieq5L2T44Gu44Kr44Op44O877yIUkdCQe+8iVxuICAgICAgICBwcm90ZWN0ZWQgX2lzQ3VsbGluZzogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44Oq44Oz44Kw44GM5pyJ5Yq544Gq44KJdHJ1ZVxuICAgICAgICBwcm90ZWN0ZWQgX2lzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g5LmX566X5riI44G/zrHjgarjgol0cnVlXG4gICAgICAgIHByb3RlY3RlZCBfYW5pc29ydG9weTogYW55OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbDogQ3ViaXNtTW9kZWw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOODs+ODgOODquODs+OCsOWvvuixoeOBruODouODh+ODq1xuICAgIH1cblxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbUJsZW5kTW9kZVxuICAgIHtcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX05vcm1hbCA9IDAsICAgICAgICAgLy8g6YCa5bi4XG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZSA9IDEsICAgICAgIC8vIOWKoOeul1xuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmUgPSAyLCAvLyDkuZfnrpdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog44OG44Kv44K544OB44Oj44Gu6Imy44KSUkdCQeOBp+aJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UZXh0dXJlQ29sb3JcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5SID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5HID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5CID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5BID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgUjogbnVtYmVyOyAgLy8g6LWk44OB44Oj44Oz44ON44OrXG4gICAgICAgIEc6IG51bWJlcjsgIC8vIOe3keODgeODo+ODs+ODjeODq1xuICAgICAgICBCOiBudW1iZXI7ICAvLyDpnZLjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgQTogbnVtYmVyOyAgLy8gzrHjg4Hjg6Pjg7Pjg43jg6tcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTG9nRGVidWcgfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiBLZXktVmFsdWXjga7jg5rjgqLjgpLlrprnvqnjgZnjgovjgq/jg6njgrlcbiAgICAgKiBjc21NYXDjgq/jg6njgrnjga7lhoXpg6jjg4fjg7zjgr/jgafkvb/nlKjjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBrZXkgS2V544Go44GX44Gm44K744OD44OI44GZ44KL5YCkXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGtleT86IF9LZXlULCB2YWx1ZT86IF9WYWxUKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gKGtleSA9PSB1bmRlZmluZWQpIFxuICAgICAgICAgICAgICAgID8gbnVsbCBcbiAgICAgICAgICAgICAgICA6IGtleTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSAodmFsdWUgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogdmFsdWU7ICAgXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZmlyc3Q6IF9LZXlUOyAgIC8vIGtleeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxuICAgICAgICBwdWJsaWMgc2Vjb25kOiBfVmFsVDsgIC8vIHZhbHVl44Go44GX44Gm55So44GE44KL5aSJ5pWwXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Oe44OD44OX5Z6LXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbU1hcDxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBzaXplIOWIneacn+WMluaZgueCueOBp+eiuuS/neOBmeOCi+OCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNpemUgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHNpemUgPCAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCreODvOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOaWsOOBn+OBq+i/veWKoOOBmeOCi+OCreODvFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFwcGVuZEtleShrZXk6IF9LZXlUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDmlrDjgZfjgY9LZXkvVmFsdWXjga7jg5rjgqLjgpLkvZzjgotcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyAxLCBmYWxzZSk7IC8vIDHjgaTku6XkuIrlhaXjgovpmpnplpPjgpLkvZzjgotcbiAgICAgICAgICAgIC8vIOaWsOOBl+OBhGtleS92YWx1ZeOBruOCpOODs+ODh+ODg+OCr+OCueOBr19zaXplXG5cbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplXSA9IG5ldyBjc21QYWlyPF9LZXlULCBfVmFsVD4oa2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShnZXQpXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZShrZXk6IF9LZXlUKTogX1ZhbFRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKHNldClcbiAgICAgICAgICogQHBhcmFtIGtleSDmt7vlrZfjgYvjgonnibnlrprjgZXjgozjgotWYWx1ZeWApFxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Luj5YWl44GZ44KLVmFsdWXlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRWYWx1ZShrZXk6IF9LZXlULCB2YWx1ZTogX1ZhbFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRLZXkoa2V5KTsgLy8g5paw6KaP44Kt44O844KS6L+95YqgXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBp+a4oeOBl+OBn0tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi+OBi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOWtmOWcqOOCkueiuuiqjeOBmeOCi2tleVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdChrZXk6IF9LZXlUKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtleVZhbHVl44Gu44Od44Kk44Oz44K/44KS5YWo44Gm6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44K144Kk44K644KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruOCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDmlrDjgZ/jgarjgq3jg6Pjg5Hjgrfjg4bjgqPjgILlvJXmlbDjga7lgKTjgYznj77lnKjjga7jgrXjgqTjgrrmnKrmuoDjga7loLTlkIjjga/kvZXjgoLjgZfjgarjgYTjgIJcbiAgICAgICAgICogQHBhcmFtIGZpdFRvU2l6ZSB0cnVl44Gq44KJ5oyH5a6a44GX44Gf44K144Kk44K644Gr5ZCI44KP44Gb44KL44CCZmFsc2XjgarjgonjgrXjgqTjgrrjgpIy5YCN56K65L+d44GX44Gm44GK44GP44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlcGFyZUNhcGFjaXR5KG5ld1NpemU6IG51bWJlciwgZml0VG9TaXplOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCBjc21NYXAuRGVmYXVsdFNpemUpIG5ld1NpemUgPSBjc21NYXAuRGVmYXVsdFNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMikgbmV3U2l6ZSA9IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWI6aCt6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgMCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCB0aGlzLl9zaXplKTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieimgee0oOOCkuWJiumZpOOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIGluZGV4KTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lgKTjgpIzMuODk+ODg+ODiOespuWPt+S7mOOBjeaVtOaVsOWei+OBp+ODgOODs+ODl+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGR1bXBBc0ludCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJ7MH0gLFwiLCB0aGlzLl9rZXlWYWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiXFxuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rjga7liJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICAgICAgcHVibGljIF9rZXlWYWx1ZXM6IGNzbVBhaXI8X0tleVQsIF9WYWxUPltdOy8vIGtleS12YWx1ZeODmuOCouOBrumFjeWIl1xuICAgICAgICBwdWJsaWMgX2R1bW15VmFsdWU6IF9WYWxUOyAgLy8g56m644Gu5YCk44KS6L+U44GZ54K644Gu44OA44Of44O8XG4gICAgICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGNzbU1hcDxUPuOBruOCpOODhuODrOODvOOCv1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogY3NtTWFwPF9LZXlULCBfVmFsVD4sIGlkeD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gKHYgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gdlxuICAgICAgICAgICAgICAgIDogbmV3IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGlkeCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBpZHhcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZS5fbWFwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCsrKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KTsgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICrmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAuX2tleVZhbHVlc1t0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX21hcCAhPSBpdGUuX21hcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF9tYXA6IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+OyAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDmloflrZfliJfjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtU3RyaW5nXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44KS5b6M5pa544Gr6L+95Yqg44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYyDov73liqDjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmQoYzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zICs9IChsZW5ndGggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IGMuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgICA6IGM7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+OCteOCpOOCuuOCkuaLoeW8teOBl+OBpuaWh+Wtl+OCkuWfi+OCgeOCi1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOaLoeW8teOBmeOCi+aWh+Wtl+aVsFxuICAgICAgICAgKiBAcGFyYW0gdiAgICAgICAgIOWfi+OCgeOCi+aWh+Wtl1xuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGV4cGFuc2lvbihsZW5ndGg6IG51bWJlciwgdjogc3RyaW5nKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkuODkOOCpOODiOaVsOOBp+WPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEJ5dGVzKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucykgLnJlcGxhY2UoLyUuLi9nLCBcInhcIikubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyD44CAPFxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0xlc3MoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zIDwgcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA+XG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzR3JlYXQoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID4gcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA9PVxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgajnrYnjgZfjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgajnlbDjgarjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHM6IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA9PSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBjOepuuOBi+OBqeOBhuOBi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6IOepuuOBruaWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiDlgKTjgYzoqK3lrprjgZXjgozjgabjgYTjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGggPT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyA9IHM7XG4gICAgICAgIH1cblxuICAgICAgICBzOiBzdHJpbmc7XG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OZ44Kv44K/44O85Z6L77yI5Y+v5aSJ6YWN5YiX5Z6L77yJXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gaW5paXRhbENhcGFjaXR5IOWIneacn+WMluW+jOOBruOCreODo+ODkeOCt+ODhuOCo+OAguODh+ODvOOCv+OCteOCpOOCuuOBr19jYXBhY2l0eSAqIHNpemVvZihUKVxuICAgICAgICAgKiBAcGFyYW0gemVyb0NsZWFyIHRydWXjgarjgonliJ3mnJ/ljJbmmYLjgavnorrkv53jgZfjgZ/poJjln5/jgpIw44Gn5Z+L44KB44KLXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsQ2FwYWNpdHk6IG51bWJlciA9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShpbml0aWFsQ2FwYWNpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGF0KGluZGV4OiBudW1iZXIpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdHJbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgrvjg4Pjg4jjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3B0cltpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQob2Zmc2V0OiBudW1iZXIgPSAwKTogVFtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IFRbXSA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX3B0cltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB1c2hCYWNr5Yem55CG44CB44Kz44Oz44OG44OK44Gr5paw44Gf44Gq6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBQdXNoQmFja+WHpueQhuOBp+i/veWKoOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB1c2hCYWNrKHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX2NhcGFjaXR5ID09IDAgPyBjc21WZWN0b3Iuc19kZWZhdWx0U2l6ZSA6IHRoaXMuX2NhcGFjaXR5ICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3B0clt0aGlzLl9zaXplKytdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDku6PlhaXlh6bnkIblvozjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgee0oOOBq+S7o+WFpeOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFzc2lnbihuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXdTaXplLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlU2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBhbnkgPSBudWxsLCBjYWxsUGxhY2VtZW50TmV3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemU6IG51bWJlciA9IHRoaXMuX3NpemU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcblxuICAgICAgICAgICAgICAgIGlmKGNhbGxQbGFjZW1lbnROZXcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAgLy8gbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXcgdmFsdWUoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG5ld1NpemUgPD0gdGhpcy5fc2l6ZVxuICAgICAgICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UodGhpcy5fc2l6ZSAtIHN1Yiwgc3ViKTsgICAgLy8g5LiN6KaB44Gq44Gu44Gn56C05qOE44GZ44KLXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgavjgrPjg7Pjg4bjg4ropoHntKDjgpLmjL/lhaXjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOaMv+WFpeOBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGVuZCDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7ntYLnq6/kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkc3RTaTogbnVtYmVyID0gcG9zaXRpb24uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XG4gICAgICAgICAgICBsZXQgc3JjRWk6IG51bWJlciA9IGVuZC5faW5kZXg7XG5cbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcblxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIGFkZENvdW50KTtcblxuICAgICAgICAgICAgLy8g5oy/5YWl55So44Gu5pei5a2Y44OH44O844K/44KS44K344OV44OI44GX44Gm6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICBsZXQgYWRkU2l6ZSA9IHRoaXMuX3NpemUgLSBkc3RTaTtcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFkZFNpemU7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoZHN0U2kgKyBpLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gc3JjU2k7IGkgPCBzcmNFaTsgaSsrLCBkc3RTaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltkc3RTaV0gPSBiZWdpbi5fdmVjdG9yLl9wdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zaXplICsgYWRkQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS5YmK6Zmk44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWJiumZpOWun+ihjFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWJiumZpFxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBpdGVyYXRvcjxUPih0aGlzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIHRoaXMuX3NpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5ld1ZlY3RvciA9IG5ldyBjc21WZWN0b3I8VD4oKTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fc2l6ZSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9jYXBhY2l0eSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgX3B0cjogVFtdOyAgICAvLyDjgrPjg7Pjg4bjg4rjga7lhYjpoK3jgqLjg4njg6zjgrlcbiAgICAgICAgX3NpemU6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgc19kZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rliJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2PzogY3NtVmVjdG9yPFQ+LCBpbmRleD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaW5kZXggIT0gdW5kZWZpbmVkKSA/IGluZGV4IDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku6PlhaVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB0clxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB0cigpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3IuX3B0clt0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN1YnN0aXR1dGlvbihpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX3ZlY3RvciAhPSBpdGUuX3ZlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmssIExvZ0xldmVsfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0NTTV9MT0dfTEVWRUwsIENTTV9MT0dfTEVWRUxfVkVSQk9TRSwgQ1NNX0xPR19MRVZFTF9ERUJVRywgQ1NNX0xPR19MRVZFTF9JTkZPLCBDU01fTE9HX0xFVkVMX1dBUk5JTkcsIENTTV9MT0dfTEVWRUxfRVJST1J9IGZyb20gXCIuLi9jdWJpc21mcmFtZXdvcmtjb25maWdcIjtcblxuXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnQgPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+IFxue1xuICAgIExpdmUyREN1YmlzbUZyYW1ld29yay5DdWJpc21EZWJ1Zy5wcmludChsZXZlbCwgXCJbQ1NNXVwiICsgZm10LCBhcmdzKTtcbn1cblxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50SW4gPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XG57XG4gICAgQ3ViaXNtTG9nUHJpbnQobGV2ZWwsIGZtdCArIFwiXFxuXCIsIGFyZ3MpO1xufVxuXG5leHBvcnQgbGV0IENTTV9BU1NFUlQgPSAoZXhwcjogYW55KSA9Plxue1xuICAgIGNvbnNvbGUuYXNzZXJ0KGV4cHIpO1xufTtcblxuXG5leHBvcnQgbGV0IEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcblxuaWYoQ1NNX0xPR19MRVZFTCA8PSBDU01fTE9HX0xFVkVMX1ZFUkJPU0UpXG57XG4gICAgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9WZXJib3NlLCBcIltWXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0RFQlVHKVxue1xuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9JTkZPKVxue1xuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfV0FSTklORylcbntcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0VSUk9SKVxue1xuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcblxuICAgIC8qKlxuICAgICAqIOODh+ODkOODg+OCsOeUqOOBruODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCueOAglxuICAgICAqIOODreOCsOOBruWHuuWKm+OAgeODkOOCpOODiOOBruODgOODs+ODl+OBquOBqVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21EZWJ1Z1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi+OAguesrOS4gOW8leaVsOOBq+ODreOCsOODrOODmeODq+OCkuioreWumuOBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQg5pu45byP5LuY44GN5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIOWPr+WkiemVt+W8leaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBwcmludChsb2dMZXZlbDogTG9nTGV2ZWwsIGZvcm1hdDogc3RyaW5nLCBhcmdzPzogYW55W10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxuICAgICAgICAgICAgaWYobG9nTGV2ZWwgPCBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmdldExvZ2dpbmdMZXZlbCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFsb2dQcmludClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBidWZmZXI6IHN0cmluZyA9IFxuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvXFx7KFxcZCspXFx9L2csXG4gICAgICAgICAgICAgICAgICAgIChtLCBrKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnc1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dQcmludChidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+ODvOOCv+OBi+OCieaMh+WumuOBl+OBn+mVt+OBleOBoOOBkeODgOODs+ODl+WHuuWKm+OBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOODgOODs+ODl+OBmeOCi+ODh+ODvOOCv1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoIOODgOODs+ODl+OBmeOCi+mVt+OBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wQnl0ZXMobG9nTGV2ZWw6IExvZ0xldmVsLCBkYXRhOiBVaW50OEFycmF5LCBsZW5ndGg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMTYgPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAlIDggPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCIgIFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcInswfSBcIiwgWyhkYXRhW2ldICYgMHhGRildKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcml2YXRlIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mb30gZnJvbSBcIi4vY3ViaXNtZGVidWdcIjtcbmltcG9ydCB7c3RydG9kfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcbmltcG9ydCBjc21WZWN0b3JfaXRlcmF0b3IgPSBjc212ZWN0b3IuaXRlcmF0b3I7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBjc21NYXBfaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyBTdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgp44Gn5Yid5pyf5YyW44GZ44KLXG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSDogc3RyaW5nID0gXCJFcnJvcjogdHlwZSBtaXNtYXRjaFwiO1xuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUzogc3RyaW5nID0gXCJFcnJvcjogaW5kZXggb3V0IG9mIGJvdW5kc1wiO1xuXG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Ko44Os44Oh44Oz44OI44Gu6KaB57Sg44Gu5Z+65bqV44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFN0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKHN0cmluZylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRSYXdTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZSwgaW5kZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K644KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS6YWN5YiX44Gn6L+U44GZKFZhbHVlW10pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoZGVmYXVsdFZhbHVlOiBWYWx1ZVtdID0gbnVsbCk6IFZhbHVlW11cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoYXJyYXkpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZT86IGNzbVZlY3RvcjxWYWx1ZT4pOiBjc21WZWN0b3I8VmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Oe44OD44OX44Gn6L+U44GZKGNzbU1hcDxjc21TdHJpbmcsIFZhbHVlPilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg57jg4Pjg5fjga7jgq3jg7zkuIDopqfjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZlcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4g44Oe44OD44OX44Gu44Kt44O844Gu5LiA6KanXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuc19kdW1teUtleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjG51bGzjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjgavjgqjjg6njg7zlgKTjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKc29uRXJyb3IuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4odHJ1ZSk7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKGZhbHNlKTtcblxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBuZXcgSnNvbkVycm9yKFwiRVJST1JcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm51bGxWYWx1ZSA9IG5ldyBKc29uTnVsbHZhbHVlKCk7XG5cbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6rjg6rjg7zjgrnnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF9zdHJpbmdCdWZmZXI6IHN0cmluZzsgLy8g5paH5a2X5YiX44OQ44OD44OV44KhXG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc19kdW1teUtleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAvLyDjg4Djg5/jg7zjgq3jg7xcblxuICAgICAgICBwdWJsaWMgc3RhdGljIGVycm9yVmFsdWU6IFZhbHVlOyAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmeOCqOODqeODvOOAgiBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcbiAgICAgICAgcHVibGljIHN0YXRpYyBudWxsVmFsdWU6IFZhbHVlOyAgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZlOVUxM44CCICAgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNjaWnmloflrZfjga7jgb/lr77lv5zjgZfjgZ/mnIDlsI/pmZDjga7ou73ph49KU09O44OR44O844K144CCXG4gICAgICog5LuV5qeY44GvSlNPTuOBruOCteODluOCu+ODg+ODiOOBqOOBquOCi+OAglxuICAgICAqIOioreWumuODleOCoeOCpOODqyhtb2RlbDMuanNvbinjgarjganjga7jg63jg7zjg4nnlKhcbiAgICAgKiBcbiAgICAgKiBb5pyq5a++5b+c6aCF55uuXVxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXG4gICAgICog44O7ZeOBq+OCiOOCi+aMh+aVsOihqOePvlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyPzogQXJyYXlCdWZmZXIsIGxlbmd0aD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihidWZmZXIgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VCeXRlcyhidWZmZXIsIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjgrXjgqTjgrpcbiAgICAgICAgICogQHJldHVybiBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K544CC5aSx5pWX44GX44Gf44KJTlVMTFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQganNvbiA9IG5ldyBDdWJpc21Kc29uKCk7XG4gICAgICAgICAgICBjb25zdCBzdWNjZWVkZWQ6IGJvb2xlYW4gPSBqc29uLnBhcnNlQnl0ZXMoYnVmZmVyLCBzaXplKTtcblxuICAgICAgICAgICAgaWYoIXN1Y2NlZWRlZCkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtSnNvbi5kZWxldGUoanNvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOCquODluOCuOOCp+OCr+ODiOOBruino+aUvuWHpueQhlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJvb3QoKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIFVuaWNvZGXjga7jg5DjgqTjg4rjg6rjgpJTdHJpbmfjgavlpInmj5tcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg5aSJ5o+b44GZ44KL44OQ44Kk44OK44Oq44OH44O844K/XG4gICAgICAgICAqIEByZXR1cm4g5aSJ5o+b5b6M44Gu5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSB1aW50OEFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0ciArPSAoXCIlXCIgKyB0aGlzLnBhZCh1aW50OEFycmF5W2ldLnRvU3RyaW5nKDE2KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Ko44Oz44Kz44O844OJ44CB44OR44OH44Kj44Oz44KwXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIHBhZChuOiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG4ubGVuZ3RoIDwgMlxuICAgICAgICAgICAgICAgID8gXCIwXCIgKyBuXG4gICAgICAgICAgICAgICAgOiBuO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Gu44OR44O844K544KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAg44OR44O844K55a++6LGh44Gu44OH44O844K/44OQ44Kk44OIXG4gICAgICAgICAqIEBwYXJhbSBzaXplICAgICAg44OH44O844K/44OQ44Kk44OI44Gu44K144Kk44K6XG4gICAgICAgICAqIHJldHVybiB0cnVlIDog5oiQ5YqfXG4gICAgICAgICAqIHJldHVybiBmYWxzZTog5aSx5pWXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcGFyc2VCeXRlcyhidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBlbmRQb3M6IG51bWJlcltdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoHphY3liJdcbiAgICAgICAgICAgIGxldCBkZWNvZGVCdWZmZXI6IHN0cmluZyA9IHRoaXMuYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMucGFyc2VWYWx1ZShkZWNvZGVCdWZmZXIsIHNpemUsIDAsIGVuZFBvcyk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgICAgIHN0cmJ1ZiA9IFwiSnNvbiBwYXJzZSBlcnJvciA6IEBsaW5lIFwiICsgKHRoaXMuX2xpbmVDb3VudCArIDEpICsgXCJcXG5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25TdHJpbmcoc3RyYnVmKTtcblxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJ7MH1cIiwgdGhpcy5fcm9vdC5nZXRSYXdTdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLl9yb290ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uRXJyb3IobmV3IGNzbVN0cmluZyh0aGlzLl9lcnJvciksIGZhbHNlKTsgLy8gcm9vdOOBr+ino+aUvuOBleOCjOOCi+OBruOBp+OCqOODqeODvOOCquODluOCuOOCp+OCr+ODiOOCkuWIpemAlOS9nOaIkOOBmeOCi1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueaZguOBruOCqOODqeODvOWApOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcnNlRXJyb3IoKTogc3RyaW5nIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Or44O844OI6KaB57Sg44Gu5qyh44Gu6KaB57Sg44GM44OV44Kh44Kk44Or44Gu57WC56uv44Gg44Gj44Gf44KJdHJ1ZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNoZWNrRW5kT2ZGaWxlKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3QuZ2V0QXJyYXkoKVsxXS5lcXVhbHMoXCJFT0ZcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOCqOODrOODoeODs+ODiOOBi+OCiVZhbHVlKGZsb2F0LFN0cmluZyxWYWx1ZSosQXJyYXksbnVsbCx0cnVlLGZhbHNlKeOCkuODkeODvOOCueOBmeOCi1xuICAgICAgICAgKiDjgqjjg6zjg6Hjg7Pjg4jjga7mm7jlvI/jgavlv5zjgZjjgablhoXpg6jjgadQYXJzZVN0cmluZygpLCBQYXJzZU9iamVjdCgpLCBQYXJzZUFycmF5KCnjgpLlkbzjgbZcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgYnVmZmVyICAgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggICAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSAgIG91dEVuZFBvcyAgIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG86IFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBmOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IGJ1ZmZlcltpXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XG4gICAgICAgICAgICAgICAgY2FzZSAnNyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOSc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclN0cmluZzogc3RyaW5nW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgVxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHN0cnRvZChidWZmZXIuc2xpY2UoaSksIGFmdGVyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGJ1ZmZlci5pbmRleE9mKGFmdGVyU3RyaW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvbkZsb2F0KGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvblN0cmluZyh0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKSk7IC8vIFxcXCLjga7mrKHjga7mloflrZfjgYvjgolcbiAgICAgICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VBcnJheShidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ24nOiAvLyBudWxs5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbmV3IEpzb25OdWxsdmFsdWUoKTsgICAgLy8g6Kej5pS+44Gn44GN44KL44KI44GG44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IC8vIHRydWXku6XlpJbjgavjgarjgYRcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi50cnVlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSB0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnZic6IC8vIGZhbHNl5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyA0IDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnLCc6IC8vIEFycmF5IHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgY2FzZSAnXSc6IC8vIOS4jeato+OBqu+9neOBoOOBjOOCueOCreODg+ODl+OBmeOCi+OAgumFjeWIl+OBruacgOW+jOOBq+S4jeimgeOBqiAsIOOBjOOBguOCi+OBqOaAneOCj+OCjOOCi1xuICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpOyAgLy8g5ZCM44GY5paH5a2X44KS5YaN5Yem55CGXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHZhbHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiAgICAgIFxuICAgICAgICAgKiBAcGFyYW0gICBzdHJpbmcgIC0+ICDjg5Hjg7zjgrnlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgLT4gIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gIG91dEVuZFBvcyAgIC0+ICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVN0cmluZyhzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcsIGMyOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSBuZXcgY3NtU3RyaW5nKFwiXCIpO1xuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic644CALy8g57WC56uv44Gu4oCd44CB44Ko44K544Kx44O844OX5paH5a2X44Gv5Yil44Gr5Yem55CG44GV44KM44KL44Gu44Gn44GT44GT44Gr5p2l44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTsgIC8vIOKAneOBruasoeOBruaWh+Wtl1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldC5zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnLy8nOiAgLy8g44Ko44K544Kx44O844OX44Gu5aC05ZCIXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKzsgLy8g77yS5paH5a2X44KS44K744OD44OI44Gn5omx44GGXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpIC0gMSA+IGJ1ZlN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlN0YXJ0ID0gaSArIDE7IC8vIOOCqOOCueOCseODvOODl++8iO+8kuaWh+Wtlynjga7mrKHjga7mloflrZfjgYvjgolcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyID0gc3RyaW5nW2ldO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChjMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXFwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xccicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFx0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL3VuaWNvcmQgZXNjYXBlIG5vdCBzdXBwb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvZXNjYXBlIGVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9pbGxlZ2FsIGVuZFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOBruOCquODluOCuOOCp+OCr+ODiOOCqOODrOODoeODs+ODiOOCkuODkeODvOOCueOBl+OBplZhbHVl44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlT2JqZWN0KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6IEpzb25NYXAgPSBuZXcgSnNvbk1hcCgpO1xuXG4gICAgICAgICAgICAvLyBLZXk6IFZhbHVlXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRQb3MyOiBudW1iZXJbXSA9IEFycmF5KDEpO1xuICAgICAgICAgICAgbGV0IG9rOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgbG9jYWxSZXRFbmRQb3MyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7IC8vLS0gbG9vcOOBi+OCieWHuuOCi1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzogLy8g6ZaJ44GY44Kr44OD44KzXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOepulxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICc6JyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFvaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJrZXkgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnfScgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyAnOiBjYXNlICdcXHQnIDogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighb2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiJzonIG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlgKTjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XG5cbiAgICAgICAgICAgICAgICAvLyByZXQucHV0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldC5wdXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBGT1JfTE9PUDM6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDmraPluLjntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBlcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlQXJyYXkoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6SnNvbkFycmF5ID0gbmV3IEpzb25BcnJheSgpO1xuXG4gICAgICAgICAgICAvLyBrZXkgOiB2YWx1ZVxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZHBvczI6IG51bWJlcltdID0gbmV3IEFycmF5KDEpO1xuXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRwb3MyKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZHBvczJbMF07XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZPUl9MT09QMzpcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGJyZWFrZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVha2ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrOyAvLyDmrKHjga5LRVksIFZBbFVF44G4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLl9saW5lQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXNlICcgJzogY2FzZSAnXFx0JzogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBhcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9lcnJvcjogc3RyaW5nOyAgICAgLy8g44OR44O844K55pmC44Gu44Ko44Op44O8XG4gICAgICAgIF9saW5lQ291bnQ6IG51bWJlcjsgLy8g44Ko44Op44O85aCx5ZGK44Gr55So44GE44KL6KGM5pWw44Kr44Km44Oz44OIXG4gICAgICAgIF9yb290OiBWYWx1ZTsgICAgICAgLy8g44OR44O844K544GV44KM44Gf44Or44O844OI6KaB57SgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkmZsb2F05YCk44Go44GX44Gm5omx44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25GbG9hdCBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZUZsb2F0KHN0cmJ1Zik7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJidWY7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDAuMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gaW50XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodmFsdWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyOyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuecn+WBveWApOOBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQm9vbGVhbiBleHRlbmRzIFZhbHVlXG4gICAge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib29sVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuX2Jvb2xWYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mKHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fYm9vbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2OiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9ib29sVmFsdWUgPSB2O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRydWVWYWx1ZTogSnNvbkJvb2xlYW47ICAvLyB0cnVlXG4gICAgICAgIHN0YXRpYyBmYWxzZVZhbHVlOiBKc29uQm9vbGVhbjsgLy8gZmFsc2VcblxuICAgICAgICBwcml2YXRlIF9ib29sVmFsdWU6IGJvb2xlYW47IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uU3RyaW5nIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nKVxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcy5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25FcnJvciBleHRlbmRzIEpzb25TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg6njg7zmg4XloLHjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihcInN0cmluZ1wiID09PSB0eXBlb2YocykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc1N0YXRpYyA9IGlzU3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvdGVjdGVkIF9pc1N0YXRpYzogYm9vbGVhbjsgLy8g6Z2Z55qE44GqVmFsdWXjgYvjganjgYbjgYtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSTlVMTOWApOOBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTnVsbHZhbHVlIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjE5VTEzlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gXCJOdWxsVmFsdWVcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkumFjeWIl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX2FycmF5LmdldFNpemUoKSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gdGhpcy5fYXJyYXkuYXQoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZih2ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmluZ0J1ZmZlcjogc3RyaW5nID0gaW5kZW50ICsgXCJbXFxuXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLmluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiIFwiKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmluZ0J1ZmZlciArIGluZGVudCArIFwiXVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjeWIl+imgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdiDov73liqDjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhZGQodjogVmFsdWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnB1c2hCYWNrKHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShjc21WZWN0b3I8VmFsdWU+KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU6IGNzbVZlY3RvcjxWYWx1ZT4gPSBudWxsKTogY3NtVmVjdG9yPFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44Gu5pWw44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LmdldFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2FycmF5OiBjc21WZWN0b3I8VmFsdWU+OyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuODnuODg+ODl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTWFwIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgY3NtTWFwPHN0cmluZywgVmFsdWU+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG5cbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GMTWFw5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDogVmFsdWUgPSB0aGlzLl9tYXAuZ2V0VmFsdWUocy5zKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlcjogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7IGl0ZXIubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKTsgaXRlci5wcmVJbmNyZW1lbnQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLmZpcnN0ID09IHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLnNlY29uZCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyLnB0cigpLnNlY29uZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gaW5kZW50ICsgXCJ7XFxuXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpdGUucHRyKCkuZmlyc3Q7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIiBcIiArIGtleSArIFwiIDogXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiAgIFwiKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwifVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkk1hcOWei+OBp+i/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgavopoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXQoa2V5OiBzdHJpbmcsIHY6IFZhbHVlKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0VmFsdWUoa2V5LCB2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgYvjgonjgq3jg7zjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fa2V5cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IGl0ZS5wdHIoKS5maXJzdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoQmFjayhrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44Gu6KaB57Sg5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHByaXZhdGUgX21hcDogY3NtTWFwPHN0cmluZywgVmFsdWU+OyAgIC8vIEpTT07opoHntKDjga7lgKRcbiAgICAgICAgcHJpdmF0ZSBfa2V5czogY3NtVmVjdG9yPHN0cmluZz47ICAgICAgICAgICAgICAgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9