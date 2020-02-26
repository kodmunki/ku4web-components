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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
            /**
             * Decorates deprecated members.
             *
             * Note: Due to inherent issues with Stencil `@Component`, classes
             * should be `@Deprecated` at the `render` method.
             *
             * @param {string} [replacement] - Name of target replacement member
             * @param {function} [callback] - Optional callback for Unit Tests.
             */
            var deprecated = function (replacement, callback) { return function (target, propertyKey, _descriptor) {
                var property = propertyKey === 'render' ? '' : "." + propertyKey;
                var message = [
                    "DEPRECATED: " + target.constructor.name + property,
                    '\nUse identified replacement if available.',
                    dist_1.exists(replacement) ? "\nReplacement: " + replacement : '',
                ].join('');
                // eslint-disable-next-line no-console
                (callback || (function (message) { return console.warn(message); }))(message);
            }; };
            var Memoize = function () { return function (_target, _propertyKey, descriptor) { return (function (type) {
                var _a;
                var value;
                return Object.assign(Object.assign({}, descriptor), (_a = {}, _a[type] = function () {
                    var _a;
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    value = value || (_a = descriptor[type]).call.apply(_a, __spreadArrays([this], params));
                    return value;
                }, _a));
            })(descriptor.get ? 'get' : 'value'); }; };
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var Ku4FormValidation = exports('ku4_form_validation', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                Object.defineProperty(class_1.prototype, "form", {
                    get: function () {
                        return this.host.querySelector('form');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "fields", {
                    get: function () {
                        return [].slice.call(this.form.querySelectorAll('ku4-validation'));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Call to explicitly validate this validation
                 */
                class_1.prototype.validate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, form, fields, methods;
                        return __generator(this, function (_b) {
                            _a = this, form = _a.form, fields = _a.fields;
                            methods = fields.map(function (field) { return field.validate(); });
                            // eslint-disable-next-line no-undef
                            Promise.all(methods).then(function (values) { return !values.some(function (v) { return v === false; }) && form.submit(); });
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.componentDidLoad = function () {
                    var _this = this;
                    var form = this.form;
                    var onsubmit = form.onsubmit || (function () { });
                    form.onsubmit = function (e) {
                        _this.validate();
                        onsubmit.call(e, form);
                        return false;
                    };
                };
                class_1.prototype.render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            __decorate([
                Memoize()
            ], Ku4FormValidation.prototype, "form", null);
            __decorate([
                Memoize()
            ], Ku4FormValidation.prototype, "fields", null);
        }
    };
});
