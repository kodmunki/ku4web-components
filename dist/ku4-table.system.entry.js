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
            var Ku4Table = exports('ku4_table', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.componentDidLoad = function () {
                    var bodyHeaders = [].slice.call(this.host.querySelectorAll('tbody th'));
                    var footerHeaders = [].slice.call(this.host.querySelectorAll('tfoot th'));
                    if (bodyHeaders.length > 0) {
                        this.host.querySelector('thead tr :first-child').classList.add('ku4-head-header');
                    }
                    [].slice.call(this.host.querySelectorAll('thead th')).forEach(function (th, i) {
                        // eslint-disable-next-line no-param-reassign
                        th.style.order = i + (bodyHeaders.length > 0 ? 0 : 1);
                    });
                    [].slice.call(this.host.querySelectorAll('tbody tr')).forEach(function (tr, i) {
                        [].slice.call(tr.querySelectorAll('td')).forEach(function (element, j) {
                            // eslint-disable-next-line no-param-reassign
                            element.style.order = j + 1;
                            try {
                                element.setAttribute('data-ku4-row-header', bodyHeaders[i].textContent);
                            }
                            catch (e) { /*Fail silently*/ }
                        });
                    });
                    [].slice.call(this.host.querySelectorAll('tfoot tr')).forEach(function (tr, i) {
                        [].slice.call(tr.querySelectorAll('td')).forEach(function (element, j) {
                            // eslint-disable-next-line no-param-reassign
                            element.style.order = j + 1;
                            try {
                                element.setAttribute('data-ku4-row-header', footerHeaders[i].textContent);
                            }
                            catch (e) { /*Fail silently*/ }
                        });
                    });
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
                    get: function () { return "ku4-table {\n  position: relative;\n  display: block;\n}\n\@supports (display: contents) {\n  ku4-table table {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n  ku4-table thead,\nku4-table tbody,\nku4-table tfoot,\nku4-table tr {\n    display: contents;\n  }\n  ku4-table thead .ku4-head-header {\n    display: none;\n  }\n  ku4-table tbody th,\nku4-table tfoot th {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    line-height: 0;\n    font-size: 0;\n  }\n  ku4-table tbody td,\nku4-table tfoot td {\n    display: -ms-flexbox;\n    display: flex;\n  }\n  ku4-table tbody td:before,\nku4-table tfoot td:before {\n    content: attr(data-ku4-row-header);\n  }\n}\n\@media only screen and (min-width: 768px) {\n  ku4-table table {\n    position: static;\n    display: table;\n  }\n  ku4-table thead {\n    position: static;\n    display: table-header-group;\n  }\n  ku4-table tbody {\n    position: static;\n    display: table-row-group;\n  }\n  ku4-table tfoot {\n    position: static;\n    display: table-footer-group;\n  }\n  ku4-table tr {\n    position: static;\n    display: table-row;\n  }\n  ku4-table thead .ku4-head-header,\nku4-table thead th,\nku4-table thead td,\nku4-table tbody th,\nku4-table tbody td,\nku4-table tfoot th,\nku4-table tfoot td {\n    position: static;\n    display: table-cell;\n    width: auto;\n    height: auto;\n    margin: auto;\n    padding: initial;\n    line-height: initial;\n    font-size: initial;\n  }\n  ku4-table tbody td:before,\nku4-table tfoot td:before {\n    position: static;\n    content: none;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
