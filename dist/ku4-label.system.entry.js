System.register(['./index-5ed22993.system.js', './index-3ac3fa4f.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement, dist_1;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                dist_1 = module.a;
            }],
        execute: function () {
            var Ku4Label = exports('ku4_label', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.handleInput = function (e) {
                    this.empty = dist_1.isNullOrEmpty(e.target.value);
                };
                class_1.prototype.componentWillLoad = function () {
                    var input = this.host.querySelector('input, select');
                    this.empty = dist_1.isNullOrEmpty(input.value);
                    this.placeholder = input.getAttribute('placeholder');
                };
                class_1.prototype.render = function () {
                    var _a = this, empty = _a.empty, value = _a.value, placeholder = _a.placeholder;
                    return (h(Host, null, h("label", { htmlFor: this.for, class: "value " + (empty ? 'empty' : '') + " " + (placeholder ? 'placeholder' : '') }, value || placeholder), h("slot", null)));
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  position: relative;\n}\n\n.value {\n  position: absolute;\n  display: inline;\n  top: var(--ku4-label-top, 4px);\n  left: var(--ku4-label-left, 8px);\n  font-size: inherit;\n  color: inherit;\n  z-index: 1;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.value.empty {\n  color: #ccc;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.value.placeholder {\n  opacity: 1;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.value.empty.placeholder {\n  color: #888;\n  opacity: 0;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}\n\n::slotted {\n  width: 100%;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
