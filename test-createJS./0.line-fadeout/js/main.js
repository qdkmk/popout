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
/******/ 	return __webpack_require__(__webpack_require__.s = "./0.line-fadeout/js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./0.line-fadeout/js/main.ts":
/*!***********************************!*\
  !*** ./0.line-fadeout/js/main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/// <reference path=\"easeljs/easeljs.d.ts\" />\nwindow.addEventListener(\"load\", function () {\n    new project.Main();\n});\nvar project;\n(function (project) {\n    /**\n     * パーティクルデモのメインクラスです。\n     * @class project.Main\n     */\n    var Main = /** @class */ (function () {\n        /**\n         * @constructor\n         */\n        function Main() {\n            var _this = this;\n            this.pathList = [];\n            this.mousePositions = [];\n            var canvasForEasel = document.createElement(\"canvas\");\n            this.stageEaselJS = new createjs.Stage(canvasForEasel);\n            this.canvasForDisplay = document.getElementById(\"myCanvas\");\n            this.stageForDisplay = new createjs.Stage(this.canvasForDisplay);\n            this.canvasForFadeout = document.createElement(\"canvas\");\n            if (createjs.Touch.isSupported()) {\n                createjs.Touch.enable(this.stageForDisplay);\n            }\n            // Tickerを作成\n            createjs.Ticker.timingMode = createjs.Ticker.RAF;\n            createjs.Ticker.on(\"tick\", this.handleTick, this);\n            // 親子構造\n            this.shapeCurve = new createjs.Shape();\n            this.shapeCurve.mouseEnabled = false;\n            this.stageEaselJS.addChild(this.shapeCurve);\n            var max = 500;\n            for (var i = 0; i < max; i++) {\n                var p = new Path();\n                p.setup(0, 0, 0.1 + i / max * 0.05, (60 * Math.random() * Math.random()) >> 0, i / max);\n                this.pathList.push(p);\n            }\n            // リサイズイベント\n            this.handleResize();\n            window.addEventListener(\"resize\", function () {\n                _this.handleResize();\n            });\n        }\n        /**\n         * エンターフレームイベント\n         */\n        Main.prototype.handleTick = function () {\n            var gCurve = this.shapeCurve.graphics;\n            // 描画をリセット\n            gCurve\n                .clear()\n                .setStrokeStyle(1);\n            var stageX = this.stageForDisplay.mouseX;\n            var stageY = this.stageForDisplay.mouseY;\n            this.mousePositions.unshift(new createjs.Point(stageX, stageY));\n            for (var i = 0; i < this.pathList.length; i++) {\n                var p = this.pathList[i];\n                if (this.mousePositions.length > p.delayFrame) {\n                    var position = this.mousePositions[p.delayFrame];\n                    //    マウスの位置更新\n                    p.setMousePosition(position.x, position.y);\n                }\n                p.update();\n            }\n            for (var i = 0; i < this.pathList.length - 1; i++) {\n                var p = this.pathList[i];\n                // マウスの軌跡を変数に保存\n                var p0x = p.point.x;\n                var p0y = p.point.y;\n                var p1x = p.prev.x;\n                var p1y = p.prev.y;\n                var p2x = p.prev2.x;\n                var p2y = p.prev2.y;\n                // カーブ用の頂点を割り出す\n                var curveStartX = (p2x + p1x) / 2;\n                var curveStartY = (p2y + p1y) / 2;\n                var curveEndX = (p0x + p1x) / 2;\n                var curveEndY = (p0y + p1y) / 2;\n                // カーブは中間点を結ぶ。マウスの座標は制御点として扱う。\n                gCurve\n                    .beginStroke(createjs.Graphics.getHSL(200 + ((p.percent) * 60), 60, 50 + Math.random() * 10))\n                    .moveTo(curveStartX, curveStartY)\n                    .curveTo(p1x, p1y, curveEndX, curveEndY)\n                    .endStroke();\n            }\n            var contextForDisplay = this.canvasForDisplay.getContext(\"2d\");\n            var contextFadeout = this.canvasForFadeout.getContext(\"2d\");\n            contextForDisplay.setTransform(1, 0, 0, 1, 0, 0);\n            contextForDisplay.globalAlpha = 0.97;\n            contextForDisplay.clearRect(0, 0, innerWidth, innerHeight);\n            contextForDisplay.drawImage(this.canvasForFadeout, 0, 0);\n            contextFadeout.clearRect(0, 0, innerWidth, innerHeight);\n            contextFadeout.globalCompositeOperation = \"lighter\";\n            contextFadeout.drawImage(this.canvasForDisplay, 0, 0);\n            this.stageEaselJS.update();\n            contextFadeout.drawImage(this.stageEaselJS.canvas, 0, 0);\n        };\n        /**\n         * リサイズイベント\n         */\n        Main.prototype.handleResize = function () {\n            this.stageEaselJS.canvas.width = innerWidth;\n            this.stageEaselJS.canvas.height = innerHeight;\n            this.canvasForDisplay.width = innerWidth;\n            this.canvasForDisplay.height = innerHeight;\n            this.canvasForFadeout.width = innerWidth;\n            this.canvasForFadeout.height = innerHeight;\n        };\n        return Main;\n    }());\n    project.Main = Main;\n    var Path = /** @class */ (function () {\n        function Path() {\n            this.prev = new createjs.Point();\n            this.prev2 = new createjs.Point();\n            this.point = new createjs.Point();\n            this.mouse = new createjs.Point();\n        }\n        /**\n         *\n         * @param x\n         * @param y\n         * @param _accele    マウスから離れて行く時の加速値\n         * @param _slowdown\n         * @param _maxspeed\n         */\n        Path.prototype.setup = function (x, y, _accele, delayFrame, percent) {\n            if (x === void 0) { x = 0; }\n            if (y === void 0) { y = 0; }\n            if (_accele === void 0) { _accele = 0.1; }\n            if (delayFrame === void 0) { delayFrame = 0; }\n            if (percent === void 0) { percent = 0.0; }\n            this.prev2.x = this.prev.x = this.point.x = x;\n            this.prev2.y = this.prev.y = this.point.y = y;\n            this.delayFrame = delayFrame;\n            this.percent = percent;\n            //初期化\n            this.vx = this.vy = 0.0;\n            this.xx = innerWidth / 2 >> 0;\n            this.yy = innerHeight / 2 >> 0;\n            this.ac = _accele;\n            this.de = 0.90;\n            this.wd = 0.05;\n            this.px0 = this.px1 = this.xx;\n            this.py0 = this.py1 = this.yy;\n        };\n        Path.prototype.setMousePosition = function (x, y) {\n            this.mouse.x = x;\n            this.mouse.y = y;\n        };\n        Path.prototype.update = function () {\n            this.prev2.x = this.prev.x;\n            this.prev2.y = this.prev.y;\n            this.prev.x = this.point.x;\n            this.prev.y = this.point.y;\n            // 参考\n            // http://gihyo.jp/design/feature/01/frocessing/0004?page=1\n            var px = this.xx;\n            var py = this.yy;\n            //加速度運動\n            this.vx += (this.mouse.x - this.xx) * this.ac;\n            this.vy += (this.mouse.y - this.yy) * this.ac;\n            this.xx += this.vx;\n            this.yy += this.vy;\n            //新しい描画座標\n            var x0 = px + this.vy * this.wd;\n            var y0 = py - this.vx * this.wd;\n            var x1 = px - this.vy * this.wd;\n            var y1 = py + this.vx * this.wd;\n            //描画座標\n            this.px0 = x0;\n            this.py0 = y0;\n            this.px1 = x1;\n            this.py1 = y1;\n            //減衰処理\n            this.vx *= this.de;\n            this.vy *= this.de;\n            this.point.x = this.xx;\n            this.point.y = this.yy;\n        };\n        return Path;\n    }());\n})(project || (project = {}));\n\n\n//# sourceURL=webpack:///./0.line-fadeout/js/main.ts?");

/***/ })

/******/ });