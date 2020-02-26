var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./index-5ed22993.system.js', './index-3ac3fa4f.system.js', './index-9b8d563b.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement, dist_4;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function () { }, function (module) {
                dist_4 = module.d;
            }],
        execute: function () {
            var Rolodex = /** @class */ (function () {
                /**
                 * @description Rolodex
                 * @param {Array} list - An array of items to manage.
                 */
                function Rolodex(list) {
                    this.list = [];
                    this.head = 0;
                    this.list = list;
                }
                Object.defineProperty(Rolodex.prototype, "isEmpty", {
                    get: function () {
                        return this.list.length < 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "index", {
                    get: function () {
                        return this.head;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "length", {
                    get: function () {
                        return this.list.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "current", {
                    get: function () {
                        return this.list[this.head];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "next", {
                    get: function () {
                        var length = this.length;
                        var head = this.head;
                        this.head = head++ < length - 1 ? head : 0;
                        return this.current;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "prev", {
                    get: function () {
                        var length = this.length;
                        var head = this.head;
                        this.head = --head < 0 ? length - 1 : head;
                        return this.current;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "peekNext", {
                    get: function () {
                        var _a = this, head = _a.head, length = _a.length;
                        return this.list[head + 1 < length - 1 ? head + 1 : 0];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rolodex.prototype, "peekPrev", {
                    get: function () {
                        var _a = this, head = _a.head, length = _a.length;
                        return this.list[head - 1 < 0 ? length - 1 : head - 1];
                    },
                    enumerable: true,
                    configurable: true
                });
                return Rolodex;
            }());
            var Ku4Carousel = exports('ku4_carousel', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                /**
                 * Display the next ku4-carousel-slide
                 */
                class_1.prototype.next = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.display('next')];
                        });
                    });
                };
                /**
                 * Display the previous ku4-carousel-slide
                 */
                class_1.prototype.previous = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.display('prev')];
                        });
                    });
                };
                Object.defineProperty(class_1.prototype, "currentSlideNumber", {
                    get: function () {
                        return this.rolodex && this.rolodex.index + 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.display = function (slide) {
                    var _a = this.slideState, previous = _a.previous, current = _a.current;
                    var next = this.rolodex[slide];
                    if (previous) {
                        previous.deactivate();
                    }
                    current.slideOut(slide);
                    next.slideIn(slide);
                    this.slideState = {
                        previous: current,
                        current: next,
                    };
                    return this;
                };
                class_1.prototype.componentDidLoad = function () {
                    var _this = this;
                    this.swipe = new dist_4(this.host, 20)
                        .onLeft(function () { return _this.next(); })
                        .onRight(function () { return _this.previous(); });
                    this.rolodex = new Rolodex(this.host.querySelectorAll('ku4-carousel-slide'));
                    this.rolodex.current.activate();
                    this.slideState = { current: this.rolodex.current };
                };
                class_1.prototype.componentDidUnload = function () {
                    if (this.swipe) {
                        this.swipe.destroy();
                    }
                    if (this.timeout) {
                        this.timeout.clear();
                    }
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a = this.currentSlideNumber, currentSlideNumber = _a === void 0 ? 0 : _a;
                    return (h(Host, { class: "current-slide-" + currentSlideNumber, "aria-roledescription": "carousel" }, h("section", { class: "controls" }, h("button", { type: "button", class: "prev", onClick: function () { return _this.previous(); }, "aria-label": "previous slide" }), h("button", { type: "button", class: "next", onClick: function () { return _this.next(); }, "aria-label": "next slide" })), h("section", { class: "slide-container", "aria-live": "polite" }, h("slot", null)), this.rolodex && (h("section", { class: "pages" }, h("span", { class: "pages-text" }, currentSlideNumber + " of " + this.rolodex.length)))));
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return "\@-webkit-keyframes ku4-carousel-enter-left {\n  0% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@keyframes ku4-carousel-enter-left {\n  0% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes ku4-carousel-enter-right {\n  0% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@keyframes ku4-carousel-enter-right {\n  0% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes ku4-carousel-exit-left {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n}\n\@keyframes ku4-carousel-exit-left {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n}\n\@-webkit-keyframes ku4-carousel-exit-right {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n}\n\@keyframes ku4-carousel-exit-right {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n}\n:host {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  background-color: var(--ku4-carousel-background-color);\n}\n\n.slide-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.controls .next,\n.controls .prev {\n  position: absolute;\n  top: var(--ku4-carousel-controls-top);\n  border: var(--ku4-carousel-controls-border);\n  background-color: var(--ku4-carousel-controls-background-color);\n  font-family: var(--ku4-carousel-controls-font-family);\n  font-weight: var(--ku4-carousel-controls-font-weight);\n  font-size: var(--ku4-carousel-controls-font-size);\n  line-height: var(--ku4-carousel-controls-line-height);\n  line-spacing: var(--ku4-carousel-controls-line-spacing);\n  opacity: var(--ku4-carousel-controls-opacity);\n  z-index: 4;\n}\n.controls .next:focus,\n.controls .prev:focus {\n  background-color: var(--ku4-carousel-controls-focus-background-color);\n  outline: var(--ku4-carousel-controls-focus-outline);\n  opacity: var(--ku4-carousel-controls-focus-opacity);\n}\n.controls .next:hover,\n.controls .prev:hover {\n  background-color: var(--ku4-carousel-controls-hover-background-color);\n  opacity: var(--ku4-carousel-controls-hover-opacity);\n}\n\n.controls .next {\n  right: 0;\n  width: var(--ku4-carousel-controls-next-width);\n  height: var(--ku4-carousel-controls-next-height);\n  background-image: var(--ku4-carousel-controls-next-background-image);\n  background-repeat: var(--ku4-carousel-controls-next-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-next-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-next-background-position-y);\n  background-size: var(--ku4-carousel-controls-next-background-size);\n}\n.controls .next:focus {\n  background-image: var(--ku4-carousel-controls-next-focus-background-image);\n  background-repeat: var(--ku4-carousel-controls-next-focus-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-next-focus-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-next-focus-background-position-y);\n  background-size: var(--ku4-carousel-controls-next-focus-background-size);\n}\n.controls .next:hover {\n  background-image: var(--ku4-carousel-controls-next-hover-background-image);\n  background-repeat: var(--ku4-carousel-controls-next-hover-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-next-hover-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-next-hover-background-position-y);\n  background-size: var(--ku4-carousel-controls-next-hover-background-size);\n}\n\n.controls .prev {\n  left: 0;\n  width: var(--ku4-carousel-controls-next-width);\n  height: var(--ku4-carousel-controls-next-height);\n  background-image: var(--ku4-carousel-controls-previous-background-image);\n  background-repeat: var(--ku4-carousel-controls-previous-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-previous-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-previous-background-position-y);\n  background-size: var(--ku4-carousel-controls-previous-background-size);\n}\n.controls .prev:focus {\n  background-image: var(--ku4-carousel-controls-previous-focus-background-image);\n  background-repeat: var(--ku4-carousel-controls-previous-focus-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-previous-focus-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-previous-focus-background-position-y);\n  background-size: var(--ku4-carousel-controls-previous-focus-background-size);\n}\n.controls .prev:hover {\n  background-image: var(--ku4-carousel-controls-previous-hover-background-image);\n  background-repeat: var(--ku4-carousel-controls-previous-hover-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-previous-hover-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-previous-hover-background-position-y);\n  background-size: var(--ku4-carousel-controls-previous-hover-background-size);\n}\n\n.pages {\n  position: absolute;\n  top: var(--ku4-carousel-pages-top);\n  bottom: var(--ku4-carousel-pages-bottom);\n  width: 100%;\n  height: var(--ku4-carousel-pages-height);\n  background-color: var(--ku4-carousel-pages-background-color);\n  opacity: var(--ku4-carousel-pages-opacity);\n  text-align: center;\n  z-index: 3;\n}\n\n.pages-text {\n  display: inline-block;\n  padding: var(--ku4-carousel-pages-text-padding);\n  font-family: var(--ku4-carousel-pages-text-font-family);\n  font-weight: var(--ku4-carousel-pages-text-font-weight);\n  font-size: var(--ku4-carousel-pages-text-font-size);\n  line-height: var(--ku4-carousel-pages-text-line-height);\n  color: var(--ku4-carousel-pages-text-color);\n}\n\n::slotted(*) {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  top: 0;\n  left: -100%;\n  width: 100%;\n}\n\n::slotted(.inactive) {\n  position: absolute;\n}\n\n::slotted(.inactive.prev) {\n  -webkit-animation-name: var(--ku4-carousel-animation-inactive-prev-name, ku4-carousel-exit-right);\n  animation-name: var(--ku4-carousel-animation-inactive-prev-name, ku4-carousel-exit-right);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n::slotted(.inactive.next) {\n  -webkit-animation-name: var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);\n  animation-name: var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n::slotted(.active) {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n::slotted(.active.prev) {\n  -webkit-animation-name: var(--ku4-carousel-animation-active-prev-name, ku4-carousel-enter-left);\n  animation-name: var(--ku4-carousel-animation-active-prev-name, ku4-carousel-enter-left);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n::slotted(.active.next) {\n  -webkit-animation-name: var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);\n  animation-name: var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n\@media (hover: hover) {\n  .controls:hover {\n    background-color: var(--ku4-carousel-controls-focus-background-color);\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
