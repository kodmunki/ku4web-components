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
    var registerInstance, h, Host, getElement, dist_3;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function () { }, function (module) {
                dist_3 = module.a;
            }],
        execute: function () {
            var Ku4TabList = exports('ku4_tab_list', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.handleHpTabClick = function (_a) {
                    var target = _a.target;
                    this.open(target);
                };
                class_1.prototype.handleHpTabKeyUp = function (_a) {
                    var target = _a.target, e = _a.detail;
                    if (dist_3.left.didFire(e)) {
                        this.open(this.previous(target));
                    }
                    if (dist_3.right.didFire(e)) {
                        this.open(this.next(target));
                    }
                };
                /**
                 * Open a ku4-tab in this ku4-tab-list.
                 * @param {Ku4Tab} tab - ku4-tab target to open.
                 */
                class_1.prototype.open = function (tab) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.reset().select(tab)];
                        });
                    });
                };
                class_1.prototype.select = function (tab) {
                    tab.select();
                    return this;
                };
                class_1.prototype.deselect = function (tab) {
                    tab.deselect();
                    return this;
                };
                class_1.prototype.reset = function () {
                    var _this = this;
                    this.tabs.forEach(function (tab) { return _this.deselect(tab); });
                    return this;
                };
                class_1.prototype.previous = function (tab) {
                    var _a = this, tabs = _a.tabs, length = _a.tabs.length;
                    var index = tabs.indexOf(tab) - 1;
                    return tabs[index > -1 ? index : length - 1];
                };
                class_1.prototype.next = function (tab) {
                    var _a = this, tabs = _a.tabs, length = _a.tabs.length;
                    var index = tabs.indexOf(tab) + 1;
                    return tabs[index < length ? index : 0];
                };
                class_1.prototype.componentDidRender = function () {
                    var panels = [].slice.call(this.host.querySelectorAll('ku4-tab-panel'));
                    this.tabs = [].slice.call(this.host.querySelectorAll('ku4-tab'));
                    this.tabs.forEach(function (tab, index) { return tab.connect(panels[index]); });
                };
                class_1.prototype.render = function () {
                    return (h(Host, { role: "tablist" }, h("slot", null)));
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    -ms-flex-pack: var(--ku4-tab-list-justify-content);\n    justify-content: var(--ku4-tab-list-justify-content);\n  }\n\n  :host([role=tablist]) {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
