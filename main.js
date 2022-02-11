/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _SnakeEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var reset = function (apple, tiles) {
    apple.x = Math.floor(Math.random() * tiles.width);
    apple.y = Math.floor(Math.random() * tiles.height);
};
var render = function (ctx, apple, tiles) {
    var size = tiles.size;
    // Draw apple
    ctx.fillStyle = 'red';
    ctx.fillRect(apple.x * size, apple.y * size, size - 2, size - 2);
};
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(tiles) {
        var _this = _super.call(this) || this;
        _this.tiles = tiles;
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESET, function () { return reset(_this, tiles); });
        _this.on(_SnakeEvent__WEBPACK_IMPORTED_MODULE_2__["default"].EAT_APPLE, function () { return reset(_this, tiles); });
        reset(_this, tiles);
        return _this;
    }
    Apple.prototype.onRender = function (ctx) {
        render(ctx, this, this.tiles);
    };
    return Apple;
}(_framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apple);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Position2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



var GameComponent = /** @class */ (function () {
    function GameComponent(position) {
        var _this = this;
        if (position === void 0) { position = new _Position2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0); }
        this.position = position;
        this.states = {
            update: false,
            input: false,
            render: false
        };
        this.actions = {
            input: function (evt) { return _this.onInput(evt.detail); },
            update: function (evt) { return _this.onUpdate(evt.detail); },
            render: function (evt) { return _this.onRender(evt.detail); }
        };
        this.input = false;
        this.update = true;
        this.render = true;
    }
    Object.defineProperty(GameComponent.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        set: function (value) {
            this.position.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameComponent.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        set: function (value) {
            this.position.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameComponent.prototype, "input", {
        get: function () {
            return this.states.input;
        },
        set: function (value) {
            var _a = this, states = _a.states, actions = _a.actions;
            if (value && !states.input) {
                states.input = true;
                this.on(_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].INPUT, actions.input);
            }
            else if (!value && states.input) {
                this.off(_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].INPUT, actions.input);
                states.input = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameComponent.prototype, "update", {
        get: function () {
            return this.states.update;
        },
        set: function (value) {
            var _a = this, states = _a.states, actions = _a.actions;
            if (value && !states.update) {
                states.update = true;
                this.on(_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE, actions.update);
            }
            else if (!value && states.update) {
                this.off(_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE, actions.update);
                states.update = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameComponent.prototype, "render", {
        get: function () {
            return this.states.render;
        },
        set: function (value) {
            var _a = this, states = _a.states, actions = _a.actions;
            if (value && !states.render) {
                states.render = true;
                this.on(_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RENDER, actions.render);
            }
            else if (!value && states.render) {
                this.off(_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RENDER, actions.render);
                states.render = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    GameComponent.prototype.isAt = function (position) {
        return this.position.isAt(position);
    };
    GameComponent.prototype.onInput = function (input) { };
    GameComponent.prototype.onUpdate = function (dt) { };
    GameComponent.prototype.onRender = function (ctx) { };
    GameComponent.prototype.on = function (name, action, once) {
        _Events__WEBPACK_IMPORTED_MODULE_0__["default"].on(name, action, once);
    };
    GameComponent.prototype.off = function (name, action) {
        _Events__WEBPACK_IMPORTED_MODULE_0__["default"].off(name, action);
    };
    GameComponent.prototype.dispatch = function (name, detail) {
        _Events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(name, detail);
    };
    return GameComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameComponent);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Events = /** @class */ (function () {
    function Events() {
    }
    Events.dispatch = function (name, detail) {
        return window.dispatchEvent(!detail
            ? new CustomEvent(name)
            : new CustomEvent(name, { detail: detail }));
    };
    Events.off = function (name, action) {
        window.removeEventListener(name, action);
    };
    Events.on = function (name, action, once) {
        window.addEventListener(name, action, { once: once });
    };
    return Events;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GameEvent;
(function (GameEvent) {
    GameEvent["START"] = "game-start";
    GameEvent["STOP"] = "game-stop";
    GameEvent["RESET"] = "game-reset";
    GameEvent["PAUSE"] = "game-pause";
    GameEvent["RESUME"] = "game-resume";
    GameEvent["RESIZE"] = "game-resize";
    GameEvent["RESIZE_COMPLETE"] = "game-resize-complete";
    GameEvent["INPUT"] = "game-input";
    GameEvent["UPDATE"] = "game-update";
    GameEvent["UPDATE_COMPLETE"] = "game-update-complete";
    GameEvent["RENDER"] = "game-render";
    GameEvent["RENDER_COMPLETE"] = "game-render-complete";
    GameEvent["GAME_OVER"] = "game-over";
})(GameEvent || (GameEvent = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameEvent);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Position2D = /** @class */ (function () {
    function Position2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Position2D.prototype.isAt = function (value) {
        return this.x === value.x && this.y === value.y;
    };
    Position2D.prototype.copy = function () {
        return new Position2D(this.x, this.y);
    };
    return Position2D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Position2D);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SnakeEvent;
(function (SnakeEvent) {
    SnakeEvent["EAT_SELF"] = "snake-eat-self";
    SnakeEvent["EAT_APPLE"] = "snake-eat-apple";
})(SnakeEvent || (SnakeEvent = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnakeEvent);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GameBackground = /** @class */ (function (_super) {
    __extends(GameBackground, _super);
    function GameBackground(tiles) {
        var _this = _super.call(this) || this;
        _this.tiles = tiles;
        return _this;
    }
    GameBackground.prototype.onRender = function (ctx) {
        var _a = this.tiles, width = _a.width, size = _a.size, height = _a.height;
        // Draw background
        ctx.fillStyle = 'rgb(0,0,48)';
        ctx.fillRect(0, 0, width * size, height * size);
    };
    return GameBackground;
}(_framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBackground);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _models_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _SnakeEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(tiles, defaultTailLength) {
        if (defaultTailLength === void 0) { defaultTailLength = 5; }
        var _this = _super.call(this) || this;
        _this.tiles = tiles;
        _this.defaultTailLength = defaultTailLength;
        // fix scope
        _this.onGameReset = _this.onGameReset.bind(_this);
        _this.onGameOver = _this.onGameOver.bind(_this);
        _this.onGameResume = _this.onGameResume.bind(_this);
        _this.onSnakeEatApple = _this.onSnakeEatApple.bind(_this);
        // setup listeners
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESET, _this.onGameReset);
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_OVER, _this.onGameOver);
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESUME, _this.onGameResume);
        _this.on(_SnakeEvent__WEBPACK_IMPORTED_MODULE_3__["default"].EAT_APPLE, _this.onSnakeEatApple);
        _this.onGameReset();
        return _this;
    }
    Snake.prototype.isMoving = function () {
        return !this.inputDirection;
    };
    Snake.prototype.isAt = function (position) {
        return (this.tail.findIndex(function (part) { return part.isAt(position); }) !== -1);
    };
    Snake.prototype.onInput = function (input) {
        if ((input === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT && this.inputDirection === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT)
            || (input === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].UP && this.inputDirection === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN)
            || (input === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT && this.inputDirection === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT)
            || (input === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN && this.inputDirection === _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].UP))
            return;
        this.inputDirection = input;
        this.snakeUpdate();
    };
    Snake.prototype.onUpdate = function () {
        if (this.timerTriggered())
            this.snakeUpdate();
        else
            this.timerUpdate();
    };
    Snake.prototype.onRender = function (ctx) {
        var _a = this, tiles = _a.tiles, tail = _a.tail;
        // Draw tail
        ctx.fillStyle = 'lime';
        for (var i in tail) {
            ctx.fillRect(tail[i].x * tiles.size, tail[i].y * tiles.size, tiles.size - 2, tiles.size - 2);
        }
    };
    Snake.prototype.onGameReset = function () {
        this.inputDirection = null;
        this.x = 0;
        this.y = 0;
        this.tailLength = this.defaultTailLength;
        this.tail = [this.position.copy()];
        this.timerReset();
    };
    Snake.prototype.onGameOver = function () {
        this.input = false;
    };
    Snake.prototype.onGameResume = function () {
        this.input = true;
    };
    Snake.prototype.onSnakeEatApple = function () {
        this.tailLength += 1;
    };
    Snake.prototype.timerReset = function () {
        this.timer = 0;
    };
    Snake.prototype.timerUpdate = function () {
        this.timer += (this.tailLength * 0.15);
    };
    Snake.prototype.timerTriggered = function () {
        return this.timer >= this.tiles.size;
    };
    Snake.prototype.snakeUpdate = function () {
        var _this = this;
        var _a = this, inputDirection = _a.inputDirection, tiles = _a.tiles, tail = _a.tail;
        switch (inputDirection) {
            case _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT:
                this.x -= 1;
                break;
            case _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].UP:
                this.y -= 1;
                break;
            case _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT:
                this.x += 1;
                break;
            case _models_Input__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN:
                this.y += 1;
                break;
            default: return;
        }
        // When out of bounds left
        if (this.x < 0)
            this.x = tiles.width - 1;
        // When out of bounds right
        if (this.x > tiles.width - 1)
            this.x = 0;
        // When out of bounds top
        if (this.y < 0)
            this.y = tiles.height - 1;
        // When out of bounds bottom
        if (this.y > tiles.height - 1)
            this.y = 0;
        // When snake eats tail
        if (tail.find(function (chunk) { return chunk.isAt(_this.position); })) {
            this.dispatch(_SnakeEvent__WEBPACK_IMPORTED_MODULE_3__["default"].EAT_SELF);
        }
        // Add position to tail
        tail.push(this.position.copy());
        // Adjust tail length
        while (tail.length > this.tailLength)
            tail.shift();
        // reset timer
        this.timerReset();
    };
    return Snake;
}(_framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Input;
(function (Input) {
    Input["UP"] = "UP";
    Input["DOWN"] = "DOWN";
    Input["LEFT"] = "LEFT";
    Input["RIGHT"] = "RIGHT";
})(Input || (Input = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _SnakeEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score(snake, apple) {
        var _this = _super.call(this) || this;
        _this.snake = snake;
        _this.apple = apple;
        _this.html = document.createElement('div');
        _this.score = 0;
        _this.text = document.createElement('strong');
        _this.render = false;
        _this.setupHTML();
        // fix scope
        _this.onGameReset = _this.onGameReset.bind(_this);
        _this.onSnakeEatApple = _this.onSnakeEatApple.bind(_this);
        // setup listener
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESET, _this.onGameReset);
        _this.on(_SnakeEvent__WEBPACK_IMPORTED_MODULE_2__["default"].EAT_APPLE, _this.onSnakeEatApple);
        return _this;
    }
    Score.prototype.onUpdate = function () {
        // When snake eats apple
        if (this.snake.isAt(this.apple.position)) {
            this.dispatch(_SnakeEvent__WEBPACK_IMPORTED_MODULE_2__["default"].EAT_APPLE);
        }
    };
    Score.prototype.toText = function () {
        return "Score: ".concat(this.score);
    };
    Score.prototype.setupHTML = function () {
        this.html.classList.add('game-score');
        this.text.innerText = this.toText();
        this.html.appendChild(this.text);
    };
    Score.prototype.onGameReset = function () {
        this.score = 0;
        this.text.innerText = this.toText();
    };
    Score.prototype.onSnakeEatApple = function () {
        this.score += 1;
        this.text.innerText = this.toText();
    };
    return Score;
}(_framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _SnakeEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver(overlay, score) {
        var _this = _super.call(this) || this;
        _this.overlay = overlay;
        _this.score = score;
        _this.createHTML();
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].START, function () { return _this.onGameStart(); });
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESET, function () { return _this.onGameReset(); });
        _this.on(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_OVER, function () { return _this.onGameOver(); });
        _this.on(_SnakeEvent__WEBPACK_IMPORTED_MODULE_2__["default"].EAT_SELF, function () { return _this.onSnakeEatSelf(); });
        return _this;
    }
    GameOver.prototype.createHTML = function () {
        var _this = this;
        var header = document.createElement('h1');
        header.innerText = 'Game Over';
        this.totalScore = document.createElement('span');
        var resetButton = document.createElement('button');
        resetButton.textContent = 'Restart';
        resetButton.onclick = function () { return _this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].START); };
        this.content = document.createElement('div');
        this.content.classList.add('game-over', 'flex-column', 'justify-center', 'align-center');
        this.content.append(header);
        this.content.append(this.totalScore);
        this.content.append(resetButton);
    };
    GameOver.prototype.onGameStart = function () {
        this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESET);
        this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].RESUME);
    };
    GameOver.prototype.onGameReset = function () {
        this.overlay.close();
    };
    GameOver.prototype.onGameOver = function () {
        var _a = this, totalScore = _a.totalScore, score = _a.score, overlay = _a.overlay, content = _a.content;
        this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PAUSE);
        totalScore.innerText = "Score: ".concat(score.score);
        overlay.open(content);
    };
    GameOver.prototype.onSnakeEatSelf = function () {
        this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_OVER);
    };
    return GameOver;
}(_framework_GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOver);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GameOverlay = /** @class */ (function () {
    function GameOverlay() {
        this.html = document.createElement('div');
        this.html.classList.add('game-overlay', 'flex-column', 'justify-center', 'align-center', 'hidden');
    }
    GameOverlay.prototype.open = function (content) {
        var html = this.html;
        html.append(content);
        html.classList.remove('hidden');
    };
    GameOverlay.prototype.close = function () {
        var html = this.html;
        html.classList.add('hidden');
        while (html.lastChild)
            html.removeChild(html.lastChild);
    };
    return GameOverlay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOverlay);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _GameEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.html = document.createElement('canvas');
        this.ctx = this.html.getContext('2d');
        this.running = false;
        this.paused = false;
        this.handlers = {
            start: function (event) { return _this.onGameStart(event.detail); },
            pause: function () { return _this.onGamePause(); },
            resume: function () { return _this.onGameResume(); },
            stop: function () { return _this.onGameStop(); },
            resize: function () { return _this.onGameResize(); }
        };
        this.setupHTML();
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].on(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].START, this.handlers.start);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].on(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].STOP, this.handlers.stop);
    }
    Game.prototype.start = function (scene) {
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].START, scene);
    };
    Game.prototype.stop = function () {
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].STOP);
    };
    Game.prototype.resize = function () {
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESIZE);
    };
    Game.prototype.setupHTML = function () {
        var html = this.html;
        html.classList.add('game-canvas');
    };
    Game.prototype.onGamePause = function () {
        this.paused = true;
    };
    Game.prototype.onGameResize = function () {
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].PAUSE);
        this.updateDisplay();
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESUME);
    };
    Game.prototype.onGameResume = function () {
        this.paused = false;
    };
    Game.prototype.onGameStart = function (scene) {
        var _this = this;
        if (this.running)
            return;
        this.scene = scene;
        this.running = true;
        this.paused = false;
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].on(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].PAUSE, this.handlers.pause);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].on(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESUME, this.handlers.resume);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].on(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESIZE, this.handlers.resize);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESIZE);
        window.requestAnimationFrame(function () { return _this.frameLoop(Date.now()); });
    };
    Game.prototype.onGameStop = function () {
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].off(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].PAUSE, this.handlers.pause);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].off(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESUME, this.handlers.resume);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].off(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RESIZE, this.handlers.resize);
        this.running = false;
    };
    Game.prototype.frameLoop = function (lastFrame) {
        var _this = this;
        if (!this.running)
            return;
        var now = Date.now();
        if (!this.paused) {
            _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].UPDATE, (now - lastFrame) / 1000);
            _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].UPDATE_COMPLETE);
            _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RENDER, this.ctx);
            _Events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].RENDER_COMPLETE);
        }
        window.requestAnimationFrame(function () { return _this.frameLoop(now); });
    };
    Game.prototype.updateDisplay = function () {
        var _a = this, html = _a.html, scene = _a.scene;
        switch ((0,_models_Display__WEBPACK_IMPORTED_MODULE_0__.getDisplay)(scene.ratio)) {
            case _models_Display__WEBPACK_IMPORTED_MODULE_0__["default"].LANDSCAPE:
                html.width = scene.width;
                html.height = scene.height;
                break;
            case _models_Display__WEBPACK_IMPORTED_MODULE_0__["default"].PORTRAIT:
                html.width = scene.width;
                html.height = scene.height;
                break;
            default: break;
        }
    };
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDisplay": () => (/* binding */ getDisplay),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Display;
(function (Display) {
    Display["NONE"] = "display-none";
    Display["LANDSCAPE"] = "display-landscape";
    Display["PORTRAIT"] = "display-portrait";
})(Display || (Display = {}));
var getDisplay = function (ratio) {
    if (!ratio)
        return Display.NONE;
    if (ratio > 1)
        return Display.PORTRAIT;
    else
        return Display.LANDSCAPE;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _framework_GameComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _models_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var InputController = /** @class */ (function (_super) {
    __extends(InputController, _super);
    function InputController(snake) {
        var _this = _super.call(this) || this;
        _this.snake = snake;
        _this.html = document.createElement('div');
        _this.buttons = {
            up: document.createElement('div'),
            down: document.createElement('div'),
            left: document.createElement('div'),
            right: document.createElement('div'),
        };
        _this.onKeyDown = function (event) {
            switch (event.key) {
                case 'ArrowLeft':
                    _framework_Events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].LEFT);
                    break;
                case 'ArrowUp':
                    _framework_Events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].UP);
                    break;
                case 'ArrowRight':
                    _framework_Events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].RIGHT);
                    break;
                case 'ArrowDown':
                    _framework_Events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].DOWN);
                    break;
                default:
                    break;
            }
        };
        _this.render = false;
        _this.setupHTML();
        document.addEventListener('keydown', _this.onKeyDown);
        return _this;
    }
    InputController.prototype.onUpdate = function () {
        // TODO
    };
    InputController.prototype.setupHTML = function () {
        var _this = this;
        var _a = this, html = _a.html, buttons = _a.buttons;
        html.classList.add('game-controller');
        buttons.up.classList.add('game-controller-input');
        var spanUp = document.createElement('span');
        spanUp.innerText = _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].UP;
        buttons.up.appendChild(spanUp);
        buttons.up.onclick = function () { return _this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].UP); };
        buttons.down.classList.add('game-controller-input');
        var spanDown = document.createElement('span');
        spanDown.innerText = _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].DOWN;
        buttons.down.appendChild(spanDown);
        buttons.down.onclick = function () { return _this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].DOWN); };
        buttons.left.classList.add('game-controller-input');
        var spanLeft = document.createElement('span');
        spanLeft.innerText = _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].LEFT;
        buttons.left.appendChild(spanLeft);
        buttons.left.onclick = function () { return _this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].LEFT); };
        buttons.right.classList.add('game-controller-input');
        var spanRight = document.createElement('span');
        spanRight.innerText = _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].RIGHT;
        buttons.right.appendChild(spanRight);
        buttons.right.onclick = function () { return _this.dispatch(_framework_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"].INPUT, _models_Input__WEBPACK_IMPORTED_MODULE_3__["default"].RIGHT); };
        var rowUpper = document.createElement('div');
        rowUpper.classList.add('flex-row');
        rowUpper.appendChild(buttons.up);
        rowUpper.appendChild(buttons.right);
        var rowLower = document.createElement('div');
        rowLower.classList.add('flex-row');
        rowLower.appendChild(buttons.left);
        rowLower.appendChild(buttons.down);
        html.appendChild(rowUpper);
        html.appendChild(rowLower);
    };
    return InputController;
}(_framework_GameComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputController);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GameScene = /** @class */ (function () {
    function GameScene(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(GameScene.prototype, "ratio", {
        get: function () {
            var _a = this, height = _a.height, width = _a.width;
            return (height && width) ? height / width : 0;
        },
        enumerable: false,
        configurable: true
    });
    return GameScene;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameScene);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _components_Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _components_GameOver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _framework_Game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _components_GameController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _framework_GameScene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);









var tiles = {
    width: 40,
    height: 30,
    size: 20
};
var container = document.getElementById('game-container');
var game = new _framework_Game__WEBPACK_IMPORTED_MODULE_6__["default"]();
var background = new _components_Background__WEBPACK_IMPORTED_MODULE_1__["default"](tiles);
var snake = new _components_Snake__WEBPACK_IMPORTED_MODULE_2__["default"](tiles);
var apple = new _components_Apple__WEBPACK_IMPORTED_MODULE_0__["default"](tiles);
var score = new _components_Score__WEBPACK_IMPORTED_MODULE_3__["default"](snake, apple);
var overlay = new _components_Overlay__WEBPACK_IMPORTED_MODULE_5__["default"]();
var gameOver = new _components_GameOver__WEBPACK_IMPORTED_MODULE_4__["default"](overlay, score);
var gameController = new _components_GameController__WEBPACK_IMPORTED_MODULE_7__["default"](snake);
container.append(score.html);
container.append(game.html);
container.append(gameController.html);
container.append(overlay.html);
game.start(new _framework_GameScene__WEBPACK_IMPORTED_MODULE_8__["default"](tiles.width * tiles.size, tiles.height * tiles.size));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLXNuYWtlLy4vc3JjL2NvbXBvbmVudHMvQXBwbGUudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9mcmFtZXdvcmsvR2FtZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9nYW1lLXNuYWtlLy4vc3JjL2ZyYW1ld29yay9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9mcmFtZXdvcmsvR2FtZUV2ZW50LnRzIiwid2VicGFjazovL2dhbWUtc25ha2UvLi9zcmMvZnJhbWV3b3JrL1Bvc2l0aW9uMkQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9jb21wb25lbnRzL1NuYWtlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9jb21wb25lbnRzL0JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9jb21wb25lbnRzL1NuYWtlLnRzIiwid2VicGFjazovL2dhbWUtc25ha2UvLi9zcmMvbW9kZWxzL0lucHV0LnRzIiwid2VicGFjazovL2dhbWUtc25ha2UvLi9zcmMvY29tcG9uZW50cy9TY29yZS50cyIsIndlYnBhY2s6Ly9nYW1lLXNuYWtlLy4vc3JjL2NvbXBvbmVudHMvR2FtZU92ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9jb21wb25lbnRzL092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS8uL3NyYy9mcmFtZXdvcmsvR2FtZS50cyIsIndlYnBhY2s6Ly9nYW1lLXNuYWtlLy4vc3JjL21vZGVscy9EaXNwbGF5LnRzIiwid2VicGFjazovL2dhbWUtc25ha2UvLi9zcmMvY29tcG9uZW50cy9HYW1lQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9nYW1lLXNuYWtlLy4vc3JjL2ZyYW1ld29yay9HYW1lU2NlbmUudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lLXNuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lLXNuYWtlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWUtc25ha2UvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvR2FtZUNvbXBvbmVudCc7XG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJy4uL2ZyYW1ld29yay9HYW1lRXZlbnQnO1xuaW1wb3J0IFNuYWtlRXZlbnQgZnJvbSAnLi9TbmFrZUV2ZW50JztcbmltcG9ydCBUaWxlcyBmcm9tICcuLi9tb2RlbHMvVGlsZXMnO1xuXG5leHBvcnQgY29uc3QgcmVzZXQgPSAoYXBwbGU6IEFwcGxlLCB0aWxlczogVGlsZXMpID0+IHtcbiAgICBhcHBsZS54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMud2lkdGgpO1xuICAgIGFwcGxlLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5oZWlnaHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgYXBwbGU6IEFwcGxlLCB0aWxlczogVGlsZXMpID0+IHtcbiAgICBjb25zdCB7IHNpemUgfSA9IHRpbGVzO1xuXG4gICAgLy8gRHJhdyBhcHBsZVxuICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICBjdHguZmlsbFJlY3QoYXBwbGUueCAqIHNpemUsIGFwcGxlLnkgKiBzaXplLCBzaXplIC0gMiwgc2l6ZSAtIDIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGUgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0aWxlczogVGlsZXNcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vbihHYW1lRXZlbnQuUkVTRVQsICgpID0+IHJlc2V0KHRoaXMsIHRpbGVzKSk7XG4gICAgICAgIHRoaXMub24oU25ha2VFdmVudC5FQVRfQVBQTEUsICgpID0+IHJlc2V0KHRoaXMsIHRpbGVzKSk7XG4gICAgICAgIHJlc2V0KHRoaXMsIHRpbGVzKTtcbiAgICB9XG5cbiAgICBvblJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICByZW5kZXIoY3R4LCB0aGlzLCB0aGlzLnRpbGVzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vRXZlbnRzJztcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnLi9HYW1lRXZlbnQnO1xuaW1wb3J0IFBvc2l0aW9uMkQgZnJvbSAnLi9Qb3NpdGlvbjJEJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9tb2RlbHMvSW5wdXQnO1xuaW1wb3J0IElucHV0RXZlbnQgZnJvbSAnLi4vbW9kZWxzL0lucHV0RXZlbnQnO1xuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJy4uL21vZGVscy9SZW5kZXJFdmVudCc7XG5pbXBvcnQgVXBkYXRlRXZlbnQgZnJvbSAnLi4vbW9kZWxzL1VwZGF0ZUV2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0ZXMgPSB7XG4gICAgICAgIHVwZGF0ZTogZmFsc2UsXG4gICAgICAgIGlucHV0OiBmYWxzZSxcbiAgICAgICAgcmVuZGVyOiBmYWxzZVxuICAgIH07XG5cbiAgICBwcml2YXRlIGFjdGlvbnMgPSB7XG4gICAgICAgIGlucHV0OiAoZXZ0OiBJbnB1dEV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZ0LmRldGFpbCksXG4gICAgICAgIHVwZGF0ZTogKGV2dDogVXBkYXRlRXZlbnQpID0+IHRoaXMub25VcGRhdGUoZXZ0LmRldGFpbCksXG4gICAgICAgIHJlbmRlcjogKGV2dDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25SZW5kZXIoZXZ0LmRldGFpbClcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24yRCgwLCAwKVxuICAgICkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCB4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XG4gICAgfVxuICAgIFxuICAgIGdldCB5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XG4gICAgfVxuICAgIFxuICAgIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlucHV0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMuaW5wdXQ7XG4gICAgfVxuXG4gICAgc2V0IGlucHV0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdGVzLCBhY3Rpb25zIH0gPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgaWYgKHZhbHVlICYmICFzdGF0ZXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHN0YXRlcy5pbnB1dCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uKEdhbWVFdmVudC5JTlBVVCwgYWN0aW9ucy5pbnB1dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlICYmIHN0YXRlcy5pbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5vZmYoR2FtZUV2ZW50LklOUFVULCBhY3Rpb25zLmlucHV0KTtcbiAgICAgICAgICAgIHN0YXRlcy5pbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHVwZGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzLnVwZGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgdXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdGVzLCBhY3Rpb25zIH0gPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgaWYgKHZhbHVlICYmICFzdGF0ZXMudXBkYXRlKSB7XG4gICAgICAgICAgICBzdGF0ZXMudXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub24oR2FtZUV2ZW50LlVQREFURSwgYWN0aW9ucy51cGRhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZSAmJiBzdGF0ZXMudXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9mZihHYW1lRXZlbnQuVVBEQVRFLCBhY3Rpb25zLnVwZGF0ZSk7XG4gICAgICAgICAgICBzdGF0ZXMudXBkYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcmVuZGVyKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMucmVuZGVyO1xuICAgIH1cblxuICAgIHNldCByZW5kZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgeyBzdGF0ZXMsIGFjdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBpZiAodmFsdWUgJiYgIXN0YXRlcy5yZW5kZXIpIHtcbiAgICAgICAgICAgIHN0YXRlcy5yZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbihHYW1lRXZlbnQuUkVOREVSLCBhY3Rpb25zLnJlbmRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlICYmIHN0YXRlcy5yZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2ZmKEdhbWVFdmVudC5SRU5ERVIsIGFjdGlvbnMucmVuZGVyKTtcbiAgICAgICAgICAgIHN0YXRlcy5yZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQXQocG9zaXRpb246IFBvc2l0aW9uMkQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24uaXNBdChwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgb25JbnB1dChpbnB1dDogSW5wdXQpIHt9XG5cbiAgICBvblVwZGF0ZShkdDogbnVtYmVyKSB7fVxuXG4gICAgb25SZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHt9XG5cbiAgICBwcm90ZWN0ZWQgb24obmFtZTogc3RyaW5nLCBhY3Rpb246IChldmVudDogYW55KSA9PiBhbnksIG9uY2U/OiBib29sZWFuKSB7XG4gICAgICAgIEV2ZW50cy5vbihuYW1lLCBhY3Rpb24sIG9uY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvZmYobmFtZTogc3RyaW5nLCBhY3Rpb246IChldmVudDogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgRXZlbnRzLm9mZihuYW1lLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkaXNwYXRjaChuYW1lOiBzdHJpbmcsIGRldGFpbD86IGFueSkge1xuICAgICAgICBFdmVudHMuZGlzcGF0Y2gobmFtZSwgZGV0YWlsKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudHMge1xuICAgIHN0YXRpYyBkaXNwYXRjaChuYW1lOiBzdHJpbmcsIGRldGFpbD86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gd2luZG93LmRpc3BhdGNoRXZlbnQoIWRldGFpbFxuICAgICAgICAgICAgPyBuZXcgQ3VzdG9tRXZlbnQobmFtZSlcbiAgICAgICAgICAgIDogbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsOiBkZXRhaWwgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb2ZmKG5hbWU6IHN0cmluZywgYWN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uKG5hbWU6IHN0cmluZywgYWN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gYW55LCBvbmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBhY3Rpb24sIHsgb25jZSB9KTtcbiAgICB9XG59XG4iLCJlbnVtIEdhbWVFdmVudCB7XG4gICAgU1RBUlQgPSAnZ2FtZS1zdGFydCcsXG4gICAgU1RPUCA9ICdnYW1lLXN0b3AnLFxuICAgIFJFU0VUID0gJ2dhbWUtcmVzZXQnLFxuICAgIFBBVVNFID0gJ2dhbWUtcGF1c2UnLFxuICAgIFJFU1VNRSA9ICdnYW1lLXJlc3VtZScsXG4gICAgUkVTSVpFID0gJ2dhbWUtcmVzaXplJyxcbiAgICBSRVNJWkVfQ09NUExFVEUgPSAnZ2FtZS1yZXNpemUtY29tcGxldGUnLFxuICAgIElOUFVUID0gJ2dhbWUtaW5wdXQnLFxuICAgIFVQREFURSA9ICdnYW1lLXVwZGF0ZScsXG4gICAgVVBEQVRFX0NPTVBMRVRFID0gJ2dhbWUtdXBkYXRlLWNvbXBsZXRlJyxcbiAgICBSRU5ERVIgPSAnZ2FtZS1yZW5kZXInLFxuICAgIFJFTkRFUl9DT01QTEVURSA9ICdnYW1lLXJlbmRlci1jb21wbGV0ZScsXG4gICAgR0FNRV9PVkVSID0gJ2dhbWUtb3Zlcidcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUV2ZW50O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24yRCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXJcbiAgICApIHsgfVxuXG4gICAgaXNBdCh2YWx1ZTogUG9zaXRpb24yRCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2YWx1ZS54ICYmIHRoaXMueSA9PT0gdmFsdWUueTtcbiAgICB9XG5cbiAgICBjb3B5KCk6IFBvc2l0aW9uMkQge1xuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uMkQodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cbn1cbiIsImVudW0gU25ha2VFdmVudCB7XG4gICAgRUFUX1NFTEYgPSAnc25ha2UtZWF0LXNlbGYnLFxuICAgIEVBVF9BUFBMRSA9ICdzbmFrZS1lYXQtYXBwbGUnXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNuYWtlRXZlbnQ7XG4iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vZnJhbWV3b3JrL0dhbWVDb21wb25lbnRcIjtcbmltcG9ydCBUaWxlcyBmcm9tIFwiLi4vbW9kZWxzL1RpbGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCYWNrZ3JvdW5kIGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdGlsZXM6IFRpbGVzXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25SZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgc2l6ZSwgaGVpZ2h0IH0gPSB0aGlzLnRpbGVzO1xuXG4gICAgICAgIC8vIERyYXcgYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLDAsNDgpJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoICogc2l6ZSwgaGVpZ2h0ICogc2l6ZSk7XG4gICAgfVxufSIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9HYW1lQ29tcG9uZW50JztcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnLi4vZnJhbWV3b3JrL0dhbWVFdmVudCc7XG5pbXBvcnQgUG9zaXRpb24yRCBmcm9tICcuLi9mcmFtZXdvcmsvUG9zaXRpb24yRCc7XG5pbXBvcnQgVGlsZXMgZnJvbSAnLi4vbW9kZWxzL1RpbGVzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9tb2RlbHMvSW5wdXQnO1xuaW1wb3J0IFNuYWtlRXZlbnQgZnJvbSAnLi9TbmFrZUV2ZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSBleHRlbmRzIEdhbWVDb21wb25lbnQge1xuICAgIHByaXZhdGUgdGltZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIHRhaWw6IFBvc2l0aW9uMkRbXTtcbiAgICBwcml2YXRlIHRhaWxMZW5ndGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGlucHV0RGlyZWN0aW9uOiBJbnB1dDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHRpbGVzOiBUaWxlcyxcbiAgICAgICAgcHVibGljIGRlZmF1bHRUYWlsTGVuZ3RoID0gNVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBmaXggc2NvcGVcbiAgICAgICAgdGhpcy5vbkdhbWVSZXNldCA9IHRoaXMub25HYW1lUmVzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkdhbWVPdmVyID0gdGhpcy5vbkdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25HYW1lUmVzdW1lID0gdGhpcy5vbkdhbWVSZXN1bWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNuYWtlRWF0QXBwbGUgPSB0aGlzLm9uU25ha2VFYXRBcHBsZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBzZXR1cCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5vbihHYW1lRXZlbnQuUkVTRVQsIHRoaXMub25HYW1lUmVzZXQpO1xuICAgICAgICB0aGlzLm9uKEdhbWVFdmVudC5HQU1FX09WRVIsIHRoaXMub25HYW1lT3Zlcik7XG4gICAgICAgIHRoaXMub24oR2FtZUV2ZW50LlJFU1VNRSwgdGhpcy5vbkdhbWVSZXN1bWUpO1xuICAgICAgICB0aGlzLm9uKFNuYWtlRXZlbnQuRUFUX0FQUExFLCB0aGlzLm9uU25ha2VFYXRBcHBsZSk7XG4gICAgICAgIHRoaXMub25HYW1lUmVzZXQoKTtcbiAgICB9XG5cbiAgICBpc01vdmluZygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlucHV0RGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGlzQXQocG9zaXRpb246IFBvc2l0aW9uMkQpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnRhaWwuZmluZEluZGV4KHBhcnQgPT4gcGFydC5pc0F0KHBvc2l0aW9uKSkgIT09IC0xKTtcbiAgICB9XG5cbiAgICBvbklucHV0KGlucHV0OiBJbnB1dCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoaW5wdXQgPT09IElucHV0LkxFRlQgJiYgdGhpcy5pbnB1dERpcmVjdGlvbiA9PT0gSW5wdXQuUklHSFQpXG4gICAgICAgICAgICB8fCAoaW5wdXQgPT09IElucHV0LlVQICYmIHRoaXMuaW5wdXREaXJlY3Rpb24gPT09IElucHV0LkRPV04pXG4gICAgICAgICAgICB8fCAoaW5wdXQgPT09IElucHV0LlJJR0hUICYmIHRoaXMuaW5wdXREaXJlY3Rpb24gPT09IElucHV0LkxFRlQpXG4gICAgICAgICAgICB8fCAoaW5wdXQgPT09IElucHV0LkRPV04gJiYgdGhpcy5pbnB1dERpcmVjdGlvbiA9PT0gSW5wdXQuVVApXG4gICAgICAgICkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaW5wdXREaXJlY3Rpb24gPSBpbnB1dDtcbiAgICAgICAgdGhpcy5zbmFrZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lclRyaWdnZXJlZCgpKSB0aGlzLnNuYWtlVXBkYXRlKCk7XG4gICAgICAgIGVsc2UgdGhpcy50aW1lclVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uUmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHsgdGlsZXMsIHRhaWwgfSA9IHRoaXM7XG5cbiAgICAgICAgLy8gRHJhdyB0YWlsXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnbGltZSc7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGFpbCkge1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIHRhaWxbaV0ueCAqIHRpbGVzLnNpemUsXG4gICAgICAgICAgICAgICAgdGFpbFtpXS55ICogdGlsZXMuc2l6ZSxcbiAgICAgICAgICAgICAgICB0aWxlcy5zaXplIC0gMixcbiAgICAgICAgICAgICAgICB0aWxlcy5zaXplIC0gMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25HYW1lUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXREaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnRhaWxMZW5ndGggPSB0aGlzLmRlZmF1bHRUYWlsTGVuZ3RoO1xuICAgICAgICB0aGlzLnRhaWwgPSBbdGhpcy5wb3NpdGlvbi5jb3B5KCldO1xuICAgICAgICB0aGlzLnRpbWVyUmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2FtZU92ZXIoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2FtZVJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNuYWtlRWF0QXBwbGUoKSB7XG4gICAgICAgIHRoaXMudGFpbExlbmd0aCArPSAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGltZXJSZXNldCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lclVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50aW1lciArPSAodGhpcy50YWlsTGVuZ3RoICogMC4xNSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lclRyaWdnZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIgPj0gdGhpcy50aWxlcy5zaXplO1xuICAgIH1cblxuICAgIHByaXZhdGUgc25ha2VVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXREaXJlY3Rpb24sIHRpbGVzLCB0YWlsIH0gPSB0aGlzO1xuXG4gICAgICAgIHN3aXRjaCAoaW5wdXREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgSW5wdXQuTEVGVDogdGhpcy54IC09IDE7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbnB1dC5VUDogdGhpcy55IC09IDE7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbnB1dC5SSUdIVDogdGhpcy54ICs9IDE7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbnB1dC5ET1dOOiB0aGlzLnkgKz0gMTsgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIG91dCBvZiBib3VuZHMgbGVmdFxuICAgICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gdGlsZXMud2lkdGggLSAxO1xuICAgICAgICBcbiAgICAgICAgLy8gV2hlbiBvdXQgb2YgYm91bmRzIHJpZ2h0XG4gICAgICAgIGlmICh0aGlzLnggPiB0aWxlcy53aWR0aCAtIDEpIHRoaXMueCA9IDA7XG4gICAgICAgIFxuICAgICAgICAvLyBXaGVuIG91dCBvZiBib3VuZHMgdG9wXG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB0aGlzLnkgPSB0aWxlcy5oZWlnaHQgLSAxO1xuICAgICAgICBcbiAgICAgICAgLy8gV2hlbiBvdXQgb2YgYm91bmRzIGJvdHRvbVxuICAgICAgICBpZiAodGhpcy55ID4gdGlsZXMuaGVpZ2h0IC0gMSkgdGhpcy55ID0gMDtcblxuICAgICAgICAvLyBXaGVuIHNuYWtlIGVhdHMgdGFpbFxuICAgICAgICBpZiAodGFpbC5maW5kKGNodW5rID0+IGNodW5rLmlzQXQodGhpcy5wb3NpdGlvbikpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKFNuYWtlRXZlbnQuRUFUX1NFTEYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHBvc2l0aW9uIHRvIHRhaWxcbiAgICAgICAgdGFpbC5wdXNoKHRoaXMucG9zaXRpb24uY29weSgpKTtcblxuICAgICAgICAvLyBBZGp1c3QgdGFpbCBsZW5ndGhcbiAgICAgICAgd2hpbGUgKHRhaWwubGVuZ3RoID4gdGhpcy50YWlsTGVuZ3RoKSB0YWlsLnNoaWZ0KCk7XG5cbiAgICAgICAgLy8gcmVzZXQgdGltZXJcbiAgICAgICAgdGhpcy50aW1lclJlc2V0KCk7XG4gICAgfVxufVxuIiwiZW51bSBJbnB1dCB7XG4gICAgVVAgPSAnVVAnLFxuICAgIERPV04gPSAnRE9XTicsXG4gICAgTEVGVCA9ICdMRUZUJyxcbiAgICBSSUdIVCA9ICdSSUdIVCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvR2FtZUNvbXBvbmVudCc7XG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJy4uL2ZyYW1ld29yay9HYW1lRXZlbnQnO1xuaW1wb3J0IEFwcGxlIGZyb20gJy4vQXBwbGUnO1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vU25ha2UnO1xuaW1wb3J0IFNuYWtlRXZlbnQgZnJvbSAnLi9TbmFrZUV2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHB1YmxpYyBzY29yZSA9IDA7XG4gICAgcHJpdmF0ZSB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzbmFrZTogU25ha2UsXG4gICAgICAgIHByaXZhdGUgYXBwbGU6IEFwcGxlLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHVwSFRNTCgpO1xuICAgICAgICAvLyBmaXggc2NvcGVcbiAgICAgICAgdGhpcy5vbkdhbWVSZXNldCA9IHRoaXMub25HYW1lUmVzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNuYWtlRWF0QXBwbGUgPSB0aGlzLm9uU25ha2VFYXRBcHBsZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBzZXR1cCBsaXN0ZW5lclxuICAgICAgICB0aGlzLm9uKEdhbWVFdmVudC5SRVNFVCwgdGhpcy5vbkdhbWVSZXNldCk7XG4gICAgICAgIHRoaXMub24oU25ha2VFdmVudC5FQVRfQVBQTEUsIHRoaXMub25TbmFrZUVhdEFwcGxlKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgLy8gV2hlbiBzbmFrZSBlYXRzIGFwcGxlXG4gICAgICAgIGlmICh0aGlzLnNuYWtlLmlzQXQodGhpcy5hcHBsZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goU25ha2VFdmVudC5FQVRfQVBQTEUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9UZXh0KCkge1xuICAgICAgICByZXR1cm4gYFNjb3JlOiAke3RoaXMuc2NvcmV9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwSFRNTCgpIHtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc2NvcmUnKTtcbiAgICAgICAgdGhpcy50ZXh0LmlubmVyVGV4dCA9IHRoaXMudG9UZXh0KCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25HYW1lUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gdGhpcy50b1RleHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU25ha2VFYXRBcHBsZSgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gdGhpcy50b1RleHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vZnJhbWV3b3JrL0dhbWVDb21wb25lbnRcIjtcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSBcIi4uL2ZyYW1ld29yay9HYW1lRXZlbnRcIjtcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcbmltcG9ydCBTY29yZSBmcm9tIFwiLi9TY29yZVwiO1xuaW1wb3J0IFNuYWtlRXZlbnQgZnJvbSBcIi4vU25ha2VFdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIEdhbWVDb21wb25lbnQge1xuICAgIHByaXZhdGUgdG90YWxTY29yZTogSFRNTFNwYW5FbGVtZW50O1xuICAgIHByaXZhdGUgY29udGVudDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgICAgICBwcml2YXRlIHNjb3JlOiBTY29yZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUhUTUwoKTtcbiAgICAgICAgdGhpcy5vbihHYW1lRXZlbnQuU1RBUlQsICgpID0+IHRoaXMub25HYW1lU3RhcnQoKSk7XG4gICAgICAgIHRoaXMub24oR2FtZUV2ZW50LlJFU0VULCAoKSA9PiB0aGlzLm9uR2FtZVJlc2V0KCkpO1xuICAgICAgICB0aGlzLm9uKEdhbWVFdmVudC5HQU1FX09WRVIsICgpID0+IHRoaXMub25HYW1lT3ZlcigpKTtcbiAgICAgICAgdGhpcy5vbihTbmFrZUV2ZW50LkVBVF9TRUxGLCAoKSA9PiB0aGlzLm9uU25ha2VFYXRTZWxmKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSFRNTCgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9ICdHYW1lIE92ZXInO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50b3RhbFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnO1xuICAgICAgICByZXNldEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5kaXNwYXRjaChHYW1lRXZlbnQuU1RBUlQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXInLCAnZmxleC1jb2x1bW4nLCAnanVzdGlmeS1jZW50ZXInLCAnYWxpZ24tY2VudGVyJyk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnRvdGFsU2NvcmUpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHJlc2V0QnV0dG9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2FtZVN0YXJ0KCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKEdhbWVFdmVudC5SRVNFVCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goR2FtZUV2ZW50LlJFU1VNRSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVSZXNldCgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVPdmVyKCkge1xuICAgICAgICBjb25zdCB7IHRvdGFsU2NvcmUsIHNjb3JlLCBvdmVybGF5LCBjb250ZW50IH0gPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lRXZlbnQuUEFVU0UpO1xuICAgICAgICB0b3RhbFNjb3JlLmlubmVyVGV4dCA9IGBTY29yZTogJHtzY29yZS5zY29yZX1gO1xuICAgICAgICBvdmVybGF5Lm9wZW4oY29udGVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNuYWtlRWF0U2VsZigpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChHYW1lRXZlbnQuR0FNRV9PVkVSKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJsYXkge1xuICAgIHB1YmxpYyBodG1sOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXJsYXknLCAnZmxleC1jb2x1bW4nLCAnanVzdGlmeS1jZW50ZXInLCAnYWxpZ24tY2VudGVyJywgJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIG9wZW4oY29udGVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBodG1sIH0gPSB0aGlzO1xuXG4gICAgICAgIGh0bWwuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGNvbnN0IHsgaHRtbCB9ID0gdGhpcztcblxuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB3aGlsZSAoaHRtbC5sYXN0Q2hpbGQpIGh0bWwucmVtb3ZlQ2hpbGQoaHRtbC5sYXN0Q2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgRGlzcGxheSwgeyBnZXREaXNwbGF5IH0gZnJvbSAnLi4vbW9kZWxzL0Rpc3BsYXknO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL0V2ZW50cyc7XG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJy4vR2FtZUV2ZW50JztcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9HYW1lU2NlbmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHB1YmxpYyBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcHJpdmF0ZSBjdHggPSB0aGlzLmh0bWwuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBoYW5kbGVycyA9IHtcbiAgICAgICAgc3RhcnQ6IChldmVudDogQ3VzdG9tRXZlbnQ8R2FtZVNjZW5lPikgPT4gdGhpcy5vbkdhbWVTdGFydChldmVudC5kZXRhaWwpLFxuICAgICAgICBwYXVzZTogKCkgPT4gdGhpcy5vbkdhbWVQYXVzZSgpLFxuICAgICAgICByZXN1bWU6ICgpID0+IHRoaXMub25HYW1lUmVzdW1lKCksXG4gICAgICAgIHN0b3A6ICgpID0+IHRoaXMub25HYW1lU3RvcCgpLFxuICAgICAgICByZXNpemU6ICgpID0+IHRoaXMub25HYW1lUmVzaXplKClcbiAgICB9O1xuICAgIHByaXZhdGUgc2NlbmU6IEdhbWVTY2VuZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNldHVwSFRNTCgpO1xuICAgICAgICBFdmVudHMub24oR2FtZUV2ZW50LlNUQVJULCB0aGlzLmhhbmRsZXJzLnN0YXJ0KTtcbiAgICAgICAgRXZlbnRzLm9uKEdhbWVFdmVudC5TVE9QLCB0aGlzLmhhbmRsZXJzLnN0b3ApO1xuICAgIH1cblxuICAgIHN0YXJ0KHNjZW5lOiBHYW1lU2NlbmUpIHtcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoKEdhbWVFdmVudC5TVEFSVCwgc2NlbmUpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaChHYW1lRXZlbnQuU1RPUCk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LlJFU0laRSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXR1cEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IHsgaHRtbCB9ID0gdGhpcztcblxuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY2FudmFzJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVQYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25HYW1lUmVzaXplKCkge1xuICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LlBBVVNFKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LlJFU1VNRSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVSZXN1bWUoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2FtZVN0YXJ0KHNjZW5lOiBHYW1lU2NlbmUpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICBFdmVudHMub24oR2FtZUV2ZW50LlBBVVNFLCB0aGlzLmhhbmRsZXJzLnBhdXNlKTtcbiAgICAgICAgRXZlbnRzLm9uKEdhbWVFdmVudC5SRVNVTUUsIHRoaXMuaGFuZGxlcnMucmVzdW1lKTtcbiAgICAgICAgRXZlbnRzLm9uKEdhbWVFdmVudC5SRVNJWkUsIHRoaXMuaGFuZGxlcnMucmVzaXplKTtcblxuICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LlJFU0laRSk7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZyYW1lTG9vcChEYXRlLm5vdygpKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVTdG9wKCkge1xuICAgICAgICBFdmVudHMub2ZmKEdhbWVFdmVudC5QQVVTRSwgdGhpcy5oYW5kbGVycy5wYXVzZSk7XG4gICAgICAgIEV2ZW50cy5vZmYoR2FtZUV2ZW50LlJFU1VNRSwgdGhpcy5oYW5kbGVycy5yZXN1bWUpO1xuICAgICAgICBFdmVudHMub2ZmKEdhbWVFdmVudC5SRVNJWkUsIHRoaXMuaGFuZGxlcnMucmVzaXplKTtcblxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZyYW1lTG9vcChsYXN0RnJhbWU6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoKEdhbWVFdmVudC5VUERBVEUsIChub3cgLSBsYXN0RnJhbWUpIC8gMTAwMCk7XG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LlVQREFURV9DT01QTEVURSk7XG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LlJFTkRFUiwgdGhpcy5jdHgpO1xuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoKEdhbWVFdmVudC5SRU5ERVJfQ09NUExFVEUpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZyYW1lTG9vcChub3cpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGNvbnN0IHsgaHRtbCwgc2NlbmUgfSA9IHRoaXM7XG5cbiAgICAgICAgc3dpdGNoIChnZXREaXNwbGF5KHNjZW5lLnJhdGlvKSkge1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5LkxBTkRTQ0FQRTpcbiAgICAgICAgICAgICAgICBodG1sLndpZHRoID0gc2NlbmUud2lkdGg7XG4gICAgICAgICAgICAgICAgaHRtbC5oZWlnaHQgPSBzY2VuZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXkuUE9SVFJBSVQ6XG4gICAgICAgICAgICAgICAgaHRtbC53aWR0aCA9IHNjZW5lLndpZHRoO1xuICAgICAgICAgICAgICAgIGh0bWwuaGVpZ2h0ID0gc2NlbmUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJlbnVtIERpc3BsYXkge1xuICAgIE5PTkUgPSAnZGlzcGxheS1ub25lJyxcbiAgICBMQU5EU0NBUEUgPSAnZGlzcGxheS1sYW5kc2NhcGUnLFxuICAgIFBPUlRSQUlUID0gJ2Rpc3BsYXktcG9ydHJhaXQnLFxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGlzcGxheSA9IChyYXRpbzogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFyYXRpbykgcmV0dXJuIERpc3BsYXkuTk9ORTtcbiAgICBpZiAocmF0aW8gPiAxKSByZXR1cm4gRGlzcGxheS5QT1JUUkFJVDtcbiAgICBlbHNlIHJldHVybiBEaXNwbGF5LkxBTkRTQ0FQRTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XG4iLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2ZyYW1ld29yay9FdmVudHMnO1xuaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL0dhbWVDb21wb25lbnQnO1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICcuLi9mcmFtZXdvcmsvR2FtZUV2ZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9tb2RlbHMvSW5wdXQnO1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vU25ha2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENvbnRyb2xsZXIgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgaHRtbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByaXZhdGUgYnV0dG9ucyA9IHtcbiAgICAgICAgdXA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBkb3duOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgbGVmdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHJpZ2h0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc25ha2U6IFNuYWtlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0dXBIVE1MKCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwSFRNTCgpIHtcbiAgICAgICAgY29uc3QgeyBodG1sLCBidXR0b25zIH0gPSB0aGlzO1xuXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sbGVyJyk7XG4gICAgICAgIFxuICAgICAgICBidXR0b25zLnVwLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY29udHJvbGxlci1pbnB1dCcpO1xuICAgICAgICBjb25zdCBzcGFuVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW5VcC5pbm5lclRleHQgPSBJbnB1dC5VUDtcbiAgICAgICAgYnV0dG9ucy51cC5hcHBlbmRDaGlsZChzcGFuVXApO1xuICAgICAgICBidXR0b25zLnVwLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmRpc3BhdGNoKEdhbWVFdmVudC5JTlBVVCwgSW5wdXQuVVApO1xuICAgICAgICBcbiAgICAgICAgYnV0dG9ucy5kb3duLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY29udHJvbGxlci1pbnB1dCcpO1xuICAgICAgICBjb25zdCBzcGFuRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3BhbkRvd24uaW5uZXJUZXh0ID0gSW5wdXQuRE9XTjtcbiAgICAgICAgYnV0dG9ucy5kb3duLmFwcGVuZENoaWxkKHNwYW5Eb3duKTtcbiAgICAgICAgYnV0dG9ucy5kb3duLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmRpc3BhdGNoKEdhbWVFdmVudC5JTlBVVCwgSW5wdXQuRE9XTik7XG4gICAgICAgIFxuICAgICAgICBidXR0b25zLmxlZnQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sbGVyLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHNwYW5MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuTGVmdC5pbm5lclRleHQgPSBJbnB1dC5MRUZUO1xuICAgICAgICBidXR0b25zLmxlZnQuYXBwZW5kQ2hpbGQoc3BhbkxlZnQpO1xuICAgICAgICBidXR0b25zLmxlZnQub25jbGljayA9ICgpID0+IHRoaXMuZGlzcGF0Y2goR2FtZUV2ZW50LklOUFVULCBJbnB1dC5MRUZUKTtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbnMucmlnaHQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sbGVyLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHNwYW5SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3BhblJpZ2h0LmlubmVyVGV4dCA9IElucHV0LlJJR0hUO1xuICAgICAgICBidXR0b25zLnJpZ2h0LmFwcGVuZENoaWxkKHNwYW5SaWdodCk7XG4gICAgICAgIGJ1dHRvbnMucmlnaHQub25jbGljayA9ICgpID0+IHRoaXMuZGlzcGF0Y2goR2FtZUV2ZW50LklOUFVULCBJbnB1dC5SSUdIVCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dVcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3dVcHBlci5jbGFzc0xpc3QuYWRkKCdmbGV4LXJvdycpO1xuICAgICAgICByb3dVcHBlci5hcHBlbmRDaGlsZChidXR0b25zLnVwKTtcbiAgICAgICAgcm93VXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucy5yaWdodCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dMb3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3dMb3dlci5jbGFzc0xpc3QuYWRkKCdmbGV4LXJvdycpO1xuICAgICAgICByb3dMb3dlci5hcHBlbmRDaGlsZChidXR0b25zLmxlZnQpO1xuICAgICAgICByb3dMb3dlci5hcHBlbmRDaGlsZChidXR0b25zLmRvd24pO1xuXG4gICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQocm93VXBwZXIpO1xuICAgICAgICBodG1sLmFwcGVuZENoaWxkKHJvd0xvd2VyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2goR2FtZUV2ZW50LklOUFVULCBJbnB1dC5MRUZUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaChHYW1lRXZlbnQuSU5QVVQsIElucHV0LlVQKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaChHYW1lRXZlbnQuSU5QVVQsIElucHV0LlJJR0hUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoKEdhbWVFdmVudC5JTlBVVCwgSW5wdXQuRE9XTik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHdpZHRoOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlclxuICAgICkgeyB9XG5cbiAgICBnZXQgcmF0aW8oKSB7XG4gICAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoaGVpZ2h0ICYmIHdpZHRoKSA/IGhlaWdodCAvIHdpZHRoIDogMDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHBsZSBmcm9tICcuL2NvbXBvbmVudHMvQXBwbGUnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9jb21wb25lbnRzL0JhY2tncm91bmQnO1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vY29tcG9uZW50cy9TbmFrZSc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9jb21wb25lbnRzL1Njb3JlJztcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZU92ZXInO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9jb21wb25lbnRzL092ZXJsYXknO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9mcmFtZXdvcmsvR2FtZSc7XG5pbXBvcnQgVGlsZXMgZnJvbSAnLi9tb2RlbHMvVGlsZXMnO1xuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vZnJhbWV3b3JrL0dhbWVTY2VuZSc7XG5cbmNvbnN0IHRpbGVzOiBUaWxlcyA9IHtcbiAgICB3aWR0aDogNDAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBzaXplOiAyMFxufTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNvbnRhaW5lcicpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQodGlsZXMpO1xuY29uc3Qgc25ha2UgPSBuZXcgU25ha2UodGlsZXMpO1xuY29uc3QgYXBwbGUgPSBuZXcgQXBwbGUodGlsZXMpO1xuY29uc3Qgc2NvcmUgPSBuZXcgU2NvcmUoc25ha2UsIGFwcGxlKTtcbmNvbnN0IG92ZXJsYXkgPSBuZXcgT3ZlcmxheSgpO1xuY29uc3QgZ2FtZU92ZXIgPSBuZXcgR2FtZU92ZXIob3ZlcmxheSwgc2NvcmUpO1xuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoc25ha2UpO1xuXG5jb250YWluZXIuYXBwZW5kKHNjb3JlLmh0bWwpO1xuY29udGFpbmVyLmFwcGVuZChnYW1lLmh0bWwpO1xuY29udGFpbmVyLmFwcGVuZChnYW1lQ29udHJvbGxlci5odG1sKTtcbmNvbnRhaW5lci5hcHBlbmQob3ZlcmxheS5odG1sKTtcblxuZ2FtZS5zdGFydChuZXcgR2FtZVNjZW5lKHRpbGVzLndpZHRoICogdGlsZXMuc2l6ZSwgdGlsZXMuaGVpZ2h0ICogdGlsZXMuc2l6ZSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9