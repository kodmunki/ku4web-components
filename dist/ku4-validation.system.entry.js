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
    var registerInstance, h, getElement, dist_1;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.g;
            }, function (module) {
                dist_1 = module.a;
            }],
        execute: function () {
            var Ku4Validation = exports('ku4_validation', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Validation regular expression
                     */
                    this.expression = '.*';
                }
                /**
                 * Call to explicitly validate this validation
                 */
                class_1.prototype.validate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.assert()];
                        });
                    });
                };
                class_1.prototype.handleInput = function () {
                    return dist_1.isFalse(this.isValid) && this.assert();
                };
                class_1.prototype.handleBlur = function () {
                    return this.assert();
                };
                class_1.prototype.assert = function () {
                    var _a = this, ele = _a.ele, validOptions = _a.validOptions, input = _a.input, regex = _a.regex;
                    this.isValid = validOptions
                        ? validOptions.some(function (value) { return value === input.value; }) && regex.test(input.value)
                        : ele
                            ? ele.value === input.value && regex.test(input.value)
                            : regex.test(input.value);
                    this.invalid = !this.isValid;
                    return this.isValid;
                };
                class_1.prototype.componentWillLoad = function () {
                    this.handleBlur = this.handleBlur.bind(this);
                    this.handleInput = this.handleInput.bind(this);
                    this.input = document.getElementById(this.for);
                    this.ele = document.getElementById(this.element) || document.querySelector(this.element);
                    this.validOptions = dist_1.exists(this.values)
                        ? this.values.split(',')
                        : (this.ele && this.ele.nodeName === 'DATALIST' &&
                            [].slice.call(this.ele.querySelectorAll('option'))
                                .map(function (option) { return option.value; }));
                    this.regex = new RegExp(this.expression);
                    this.input.addEventListener('blur', this.handleBlur);
                    this.input.addEventListener('input', this.handleInput);
                };
                class_1.prototype.componentDidUnload = function () {
                    this.input.removeEventListener('blur', this.handleBlur);
                    this.input.removeEventListener('input', this.handleInput);
                };
                class_1.prototype.render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  visibility: hidden !important;\n}\n\n:host([invalid]) {\n  visibility: visible !important;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
