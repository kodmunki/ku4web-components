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
    var registerInstance, h, Host, dist_2;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }, function (module) {
                dist_2 = module.b;
            }],
        execute: function () {
            var Ku4TabPanel = exports('ku4_tab_panel', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Set true to display panel
                     */
                    this.selected = false;
                    /**
                     * Optional unique panel id
                     */
                    this.panelId = dist_2();
                }
                /**
                 * Set this panel as selected.
                 */
                class_1.prototype.select = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.selected = true;
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Unset this panel as selected.
                 */
                class_1.prototype.deselect = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.selected = false;
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Connect this panel to a tab.
                 * @param {Ku4Tab} tab - Tab to connect to this panel
                 */
                class_1.prototype.connect = function (tab) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            tab.$assignPanel(this);
                            this.tab = tab;
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.render = function () {
                    var _a = this, panelId = _a.panelId, selected = _a.selected, tab = _a.tab;
                    return (h(Host, { class: "" + (selected ? 'selected' : ''), "aria-hidden": selected ? 'false' : 'true' }, h("section", { id: panelId, class: "tab-panel " + (selected ? 'selected' : ''), role: "tabpanel", tabIndex: 0, "aria-labelledby": tab && tab.tabId }, h("slot", null))));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  display: block;\n  width: 100%;\n  max-height: 0;\n  -webkit-transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n  transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n  overflow: hidden;\n}\n\n:host(.selected) {\n  max-height: var(--ku4-tab-panel-max-height, 100vh);\n  -webkit-transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n  transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    -ms-flex-order: 2;\n    order: 2;\n    max-height: initial;\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  :host(.selected) {\n    max-height: initial;\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  .tab-panel {\n    display: none;\n    margin-top: -1px;\n    overflow: auto;\n    -webkit-transition: none;\n    transition: none;\n  }\n  .tab-panel.selected {\n    display: block;\n    -webkit-transition: none;\n    transition: none;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
