System.register(['./index-93eb2850.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.g;
            }],
        execute: function () {
            var Ku4FormValidation = exports('ku4_form_validation', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.componentDidLoad = function () {
                    var form = document.querySelector('form');
                    var fields = [].slice.call(form.querySelectorAll('ku4-validation'));
                    var onsubmit = form.onsubmit || (function () { });
                    form.onsubmit = function (e) {
                        var methods = fields.map(function (field) { return field.validate(); });
                        // eslint-disable-next-line no-undef
                        Promise.all(methods).then(function (values) { return !values.some(function (v) { return v === false; }) && form.submit(); });
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
                Object.defineProperty(class_1, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
