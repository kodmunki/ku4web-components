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
System.register(['./index-5ed22993.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Ku4Drawer = exports('ku4_drawer', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Open size of this drawer (any valid CSS width or height value)
                     */
                    this.size = '20%';
                }
                /**
                 * Open drawer
                 */
                class_1.prototype.open = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.visible = true;
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Close drawer
                 */
                class_1.prototype.close = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.visible = false;
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Toggle drawer
                 */
                class_1.prototype.toggle = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.visible = !this.visible;
                            return [2 /*return*/];
                        });
                    });
                };
                Object.defineProperty(class_1.prototype, "positionClass", {
                    get: function () {
                        var _a = this, bottom = _a.bottom, top = _a.top, right = _a.right;
                        switch (true) {
                            case bottom: return 'bottom';
                            case top: return 'top';
                            case right: return 'right';
                            default: return 'left';
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "sizeValue", {
                    get: function () {
                        var _a = this, bottom = _a.bottom, top = _a.top, right = _a.right, size = _a.size;
                        switch (true) {
                            case bottom: return { 'max-height': size };
                            case top: return { 'max-height': size };
                            case right: return { 'max-width': size };
                            default: return { 'max-width': size };
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.render = function () {
                    var _a = this, positionClass = _a.positionClass, sizeValue = _a.sizeValue, visible = _a.visible;
                    return (h(Host, { class: positionClass + " " + (visible ? 'visible' : ''), style: sizeValue, "aria-hidden": visible ? 'false' : 'true' }, h("slot", null)));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  position: fixed;\n  overflow: hidden;\n  z-index: var(--ku4-drawer-z-index, 1);\n}\n\n:host(.bottom) {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}\n\n:host(.bottom.visible) {\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}\n\n:host(.left) {\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.left.visible) {\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.right) {\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.right.visible) {\n  right: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.top) {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}\n\n:host(.top.visible) {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
