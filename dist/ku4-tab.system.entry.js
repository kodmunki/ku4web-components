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
System.register(['./index-5ed22993.system.js', './index-3ac3fa4f.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host, dist_2;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                dist_2 = module.b;
            }],
        execute: function () {
            var Ku4Tab = exports('ku4_tab', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Active when true
                     */
                    this.selected = false;
                    /**
                     * Optional unique tab id
                     */
                    this.tabId = dist_2();
                    this.tabClicked = createEvent(this, "ku4-tab-click", 7);
                    this.tabKeyUp = createEvent(this, "ku4-tab-keyup", 7);
                }
                /**
                 * Set this tab as selected.
                 */
                class_1.prototype.select = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.selected = true;
                            this.panel.select();
                            this.buttonRef.focus();
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Unset this tab as selected
                 */
                class_1.prototype.deselect = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.selected = false;
                            this.panel.deselect();
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Connect this tab to a pannel
                 * @param {HTMLElement} panel - The target ku4-tab-panel HTMLElement
                 */
                class_1.prototype.connect = function (panel) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            panel.connect(this);
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * internal
                 * @param {Ku4TabPanel} panel - panel to assign to this tab
                 */
                class_1.prototype.$assignPanel = function (panel) {
                    this.panel = panel;
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a = this, tabId = _a.tabId, selected = _a.selected, name = _a.name, panel = _a.panel;
                    return (h(Host, { role: "tab" }, h("button", { ref: function (ref) { _this.buttonRef = ref; }, id: tabId, type: "button", class: "tab " + (selected ? 'selected' : ''), onClick: function (e) { return _this.tabClicked.emit(e); }, onKeyUp: function (e) { return _this.tabKeyUp.emit(e); }, tabIndex: selected ? 0 : -1, "aria-controls": panel && panel.panelId, "aria-selected": selected ? 'true' : 'false' }, h("span", { class: "name" }, name))));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return "/** START | style resets **/\nbutton {\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  -webkit-appearance: none;\n}\n\n/** END | style resets **/\n:host {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.tab {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%;\n  background-color: var(--ku4-tab-background-color);\n  color: var(--ku4-tab-text-color);\n  text-align: var(--ku4-tab-text-align);\n}\n.tab .name {\n  padding: var(--ku4-tab-padding);\n}\n.tab:focus {\n  background-color: var(--ku4-tab-focus-background-color);\n  color: var(--ku4-tab-focus-text-color);\n  z-index: var(--ku4-tab-focus-z-index);\n}\n.tab:hover {\n  background-color: var(--ku4-tab-hover-background-color);\n  color: var(--ku4-tab-hover-text-color);\n}\n.tab:active {\n  background-color: var(--ku4-tab-active-background-color);\n  color: var(--ku4-tab-active-text-color);\n}\n.tab.selected {\n  padding-bottom: var(--ku4-tab-selected-padding-bottom);\n  border-top: var(--ku4-tab-border);\n  border-bottom: var(--ku4-tab-border);\n  background-color: var(--ku4-tab-selected-background-color);\n  color: var(--ku4-tab-selected-text-color);\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    width: auto;\n  }\n\n  :host(:first-of-type) .tab {\n    border-left: var(--ku4-tab-border);\n  }\n\n  .tab {\n    position: relative;\n    border: var(--ku4-tab-border);\n    border-radius: var(--ku4-tab-border-radius) var(--ku4-tab-border-radius) 0 0;\n    border-left: none;\n  }\n  .tab.selected {\n    border-bottom: none;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
