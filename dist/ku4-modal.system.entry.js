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
System.register(['./index-93eb2850.system.js', './index-3ac3fa4f.system.js', './index-9b8d563b.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host, getElement, dist_1$1, dist_1;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                dist_1$1 = module.a;
            }, function (module) {
                dist_1 = module.c;
            }],
        execute: function () {
            var Ku4Modal = exports('ku4_modal', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Visible when true
                     */
                    // eslint-disable-next-line @stencil/strict-mutable
                    this.visible = false;
                    this.displayed = createEvent(this, "ku4-modal-displayed", 7);
                    this.dismissed = createEvent(this, "ku4-modal-dismissed", 7);
                }
                class_1.prototype.handleVisibility = function (value) {
                    if (value) {
                        dist_1.preventScroll();
                        if (dist_1$1.exists(this.trap)) {
                            this.trap.activate();
                        }
                    }
                    else {
                        dist_1.resumeScroll();
                        if (dist_1$1.exists(this.trap)) {
                            this.trap.deactivate();
                        }
                    }
                };
                /**
                 * Display modal
                 */
                class_1.prototype.display = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.visible = true;
                            this.displayed.emit(this);
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Dismiss modal
                 */
                class_1.prototype.dismiss = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.visible = false;
                            this.dismissed.emit(this);
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.componentDidLoad = function () {
                    try {
                        this.trap = this.host.querySelector('ku4-focus-trap') ||
                            (document.querySelector(this.focusTrap));
                    }
                    catch (e) {
                        throw new Error("Cannot connect focus-trap: " + e.messsage);
                    }
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var visible = this.visible;
                    return (h(Host, { class: visible ? 'visible' : '', "aria-modal": "true" }, h("section", { class: "overlay", onClick: function () { return _this.dismiss(); }, "aria-hidden": "true" }), h("section", { class: "content" }, h("slot", null))));
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "visible": ["handleVisibility"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return "\@-webkit-keyframes ku4-modal-content-enter {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  30% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\@keyframes ku4-modal-content-enter {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  30% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes ku4-modal-overlay-enter {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\@keyframes ku4-modal-overlay-enter {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n:host {\n  position: fixed;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: transparent;\n  overflow: auto;\n}\n\n.content {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: var(--ku4-modal-overlay-background-color, #000);\n}\n\n:host(.visible) {\n  display: -ms-flexbox;\n  display: flex;\n  z-index: var(--ku4-modal-z-index, 5);\n}\n\n:host(.visible) .content {\n  -webkit-animation-name: var(--ku4-modal-content-animation, ku4-modal-content-enter);\n  animation-name: var(--ku4-modal-content-animation, ku4-modal-content-enter);\n  -webkit-animation-duration: var(--ku4-modal-content-animation-duration, 0.4s);\n  animation-duration: var(--ku4-modal-content-animation-duration, 0.4s);\n  -webkit-animation-timing-function: var(--ku4-modal-content-animation-timing-function, ease);\n  animation-timing-function: var(--ku4-modal-content-animation-timing-function, ease);\n}\n\n:host(.visible) .overlay {\n  position: fixed;\n  display: -ms-flexbox;\n  display: flex;\n  opacity: 0.4;\n  -webkit-animation-name: var(--ku4-modal-overlay-animation, ku4-modal-overlay-enter);\n  animation-name: var(--ku4-modal-overlay-animation, ku4-modal-overlay-enter);\n  -webkit-animation-duration: var(--ku4-modal-overlay-animation-duration, 0.4s);\n  animation-duration: var(--ku4-modal-overlay-animation-duration, 0.4s);\n  -webkit-animation-timing-function: var(--ku4-modal-overlay-animation-timing-function, ease);\n  animation-timing-function: var(--ku4-modal-overlay-animation-timing-function, ease);\n}\n\n::slotted(*) {\n  position: relative;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
