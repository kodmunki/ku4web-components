System.register(['./index-93eb2850.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Ku4Col = exports('ku4_col', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Start position of column at xs (optional).
                     */
                    this.startXs = 0;
                    /**
                     * Number of columns to span left and right at xs (optional).
                     */
                    this.spanXs = 1;
                }
                Object.defineProperty(class_1.prototype, "startClass", {
                    get: function () {
                        var _a = this, startXs = _a.startXs, startSm = _a.startSm, startMd = _a.startMd, startLg = _a.startLg;
                        var value = [];
                        if (startXs && !Number.isNaN(startXs)) {
                            value.push("start-xs-" + startXs);
                        }
                        if (startSm && !Number.isNaN(startSm)) {
                            value.push("start-sm-" + startSm);
                        }
                        if (startMd && !Number.isNaN(startMd)) {
                            value.push("start-md-" + startMd);
                        }
                        if (startLg && !Number.isNaN(startLg)) {
                            value.push("start-lg-" + startLg);
                        }
                        return value.join(' ');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1.prototype, "spanClass", {
                    get: function () {
                        var _a = this, spanXs = _a.spanXs, spanSm = _a.spanSm, spanMd = _a.spanMd, spanLg = _a.spanLg;
                        var value = [];
                        if (spanXs && !Number.isNaN(spanXs)) {
                            value.push("span-xs-" + spanXs);
                        }
                        if (spanSm && !Number.isNaN(spanSm)) {
                            value.push("span-sm-" + spanSm);
                        }
                        if (spanMd && !Number.isNaN(spanMd)) {
                            value.push("span-md-" + spanMd);
                        }
                        if (spanLg && !Number.isNaN(spanLg)) {
                            value.push("span-lg-" + spanLg);
                        }
                        return value.join(' ');
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.render = function () {
                    var _a = this, startClass = _a.startClass, spanClass = _a.spanClass;
                    return (h(Host, { class: startClass + " " + spanClass }, h("slot", null)));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  position: relative;\n  display: block;\n}\n\n\@media only screen and (min-width: 1px) {\n  :host(.start-xs-0) {\n    grid-column-start: 1;\n  }\n\n  :host(.start-xs-1) {\n    grid-column-start: 2;\n  }\n\n  :host(.start-xs-2) {\n    grid-column-start: 3;\n  }\n\n  :host(.start-xs-3) {\n    grid-column-start: 4;\n  }\n\n  :host(.start-xs-4) {\n    grid-column-start: 5;\n  }\n\n  :host(.start-xs-5) {\n    grid-column-start: 6;\n  }\n\n  :host(.start-xs-6) {\n    grid-column-start: 7;\n  }\n\n  :host(.start-xs-7) {\n    grid-column-start: 8;\n  }\n\n  :host(.start-xs-8) {\n    grid-column-start: 9;\n  }\n\n  :host(.start-xs-9) {\n    grid-column-start: 10;\n  }\n\n  :host(.start-xs-10) {\n    grid-column-start: 11;\n  }\n\n  :host(.start-xs-11) {\n    grid-column-start: 12;\n  }\n\n  :host(.start-xs-12) {\n    grid-column-start: 13;\n  }\n\n  :host(.span-xs-1) {\n    grid-column-end: span 1;\n  }\n\n  :host(.span-xs-2) {\n    grid-column-end: span 2;\n  }\n\n  :host(.span-xs-3) {\n    grid-column-end: span 3;\n  }\n\n  :host(.span-xs-4) {\n    grid-column-end: span 4;\n  }\n\n  :host(.span-xs-5) {\n    grid-column-end: span 5;\n  }\n\n  :host(.span-xs-6) {\n    grid-column-end: span 6;\n  }\n\n  :host(.span-xs-7) {\n    grid-column-end: span 7;\n  }\n\n  :host(.span-xs-8) {\n    grid-column-end: span 8;\n  }\n\n  :host(.span-xs-9) {\n    grid-column-end: span 9;\n  }\n\n  :host(.span-xs-10) {\n    grid-column-end: span 10;\n  }\n\n  :host(.span-xs-11) {\n    grid-column-end: span 11;\n  }\n\n  :host(.span-xs-12) {\n    grid-column-end: span 12;\n  }\n}\n\@media only screen and (min-width: 768px) {\n  :host(.start-sm-0) {\n    grid-column-start: 1;\n  }\n\n  :host(.start-sm-1) {\n    grid-column-start: 2;\n  }\n\n  :host(.start-sm-2) {\n    grid-column-start: 3;\n  }\n\n  :host(.start-sm-3) {\n    grid-column-start: 4;\n  }\n\n  :host(.start-sm-4) {\n    grid-column-start: 5;\n  }\n\n  :host(.start-sm-5) {\n    grid-column-start: 6;\n  }\n\n  :host(.start-sm-6) {\n    grid-column-start: 7;\n  }\n\n  :host(.start-sm-7) {\n    grid-column-start: 8;\n  }\n\n  :host(.start-sm-8) {\n    grid-column-start: 9;\n  }\n\n  :host(.start-sm-9) {\n    grid-column-start: 10;\n  }\n\n  :host(.start-sm-10) {\n    grid-column-start: 11;\n  }\n\n  :host(.start-sm-11) {\n    grid-column-start: 12;\n  }\n\n  :host(.start-sm-12) {\n    grid-column-start: 13;\n  }\n\n  :host(.span-sm-1) {\n    grid-column-end: span 1;\n  }\n\n  :host(.span-sm-2) {\n    grid-column-end: span 2;\n  }\n\n  :host(.span-sm-3) {\n    grid-column-end: span 3;\n  }\n\n  :host(.span-sm-4) {\n    grid-column-end: span 4;\n  }\n\n  :host(.span-sm-5) {\n    grid-column-end: span 5;\n  }\n\n  :host(.span-sm-6) {\n    grid-column-end: span 6;\n  }\n\n  :host(.span-sm-7) {\n    grid-column-end: span 7;\n  }\n\n  :host(.span-sm-8) {\n    grid-column-end: span 8;\n  }\n\n  :host(.span-sm-9) {\n    grid-column-end: span 9;\n  }\n\n  :host(.span-sm-10) {\n    grid-column-end: span 10;\n  }\n\n  :host(.span-sm-11) {\n    grid-column-end: span 11;\n  }\n\n  :host(.span-sm-12) {\n    grid-column-end: span 12;\n  }\n}\n\@media only screen and (min-width: 992px) {\n  :host(.start-md-0) {\n    grid-column-start: 1;\n  }\n\n  :host(.start-md-1) {\n    grid-column-start: 2;\n  }\n\n  :host(.start-md-2) {\n    grid-column-start: 3;\n  }\n\n  :host(.start-md-3) {\n    grid-column-start: 4;\n  }\n\n  :host(.start-md-4) {\n    grid-column-start: 5;\n  }\n\n  :host(.start-md-5) {\n    grid-column-start: 6;\n  }\n\n  :host(.start-md-6) {\n    grid-column-start: 7;\n  }\n\n  :host(.start-md-7) {\n    grid-column-start: 8;\n  }\n\n  :host(.start-md-8) {\n    grid-column-start: 9;\n  }\n\n  :host(.start-md-9) {\n    grid-column-start: 10;\n  }\n\n  :host(.start-md-10) {\n    grid-column-start: 11;\n  }\n\n  :host(.start-md-11) {\n    grid-column-start: 12;\n  }\n\n  :host(.start-md-12) {\n    grid-column-start: 13;\n  }\n\n  :host(.span-md-1) {\n    grid-column-end: span 1;\n  }\n\n  :host(.span-md-2) {\n    grid-column-end: span 2;\n  }\n\n  :host(.span-md-3) {\n    grid-column-end: span 3;\n  }\n\n  :host(.span-md-4) {\n    grid-column-end: span 4;\n  }\n\n  :host(.span-md-5) {\n    grid-column-end: span 5;\n  }\n\n  :host(.span-md-6) {\n    grid-column-end: span 6;\n  }\n\n  :host(.span-md-7) {\n    grid-column-end: span 7;\n  }\n\n  :host(.span-md-8) {\n    grid-column-end: span 8;\n  }\n\n  :host(.span-md-9) {\n    grid-column-end: span 9;\n  }\n\n  :host(.span-md-10) {\n    grid-column-end: span 10;\n  }\n\n  :host(.span-md-11) {\n    grid-column-end: span 11;\n  }\n\n  :host(.span-md-12) {\n    grid-column-end: span 12;\n  }\n}\n\@media only screen and (min-width: 1200px) {\n  :host(.start-lg-0) {\n    grid-column-start: 1;\n  }\n\n  :host(.start-lg-1) {\n    grid-column-start: 2;\n  }\n\n  :host(.start-lg-2) {\n    grid-column-start: 3;\n  }\n\n  :host(.start-lg-3) {\n    grid-column-start: 4;\n  }\n\n  :host(.start-lg-4) {\n    grid-column-start: 5;\n  }\n\n  :host(.start-lg-5) {\n    grid-column-start: 6;\n  }\n\n  :host(.start-lg-6) {\n    grid-column-start: 7;\n  }\n\n  :host(.start-lg-7) {\n    grid-column-start: 8;\n  }\n\n  :host(.start-lg-8) {\n    grid-column-start: 9;\n  }\n\n  :host(.start-lg-9) {\n    grid-column-start: 10;\n  }\n\n  :host(.start-lg-10) {\n    grid-column-start: 11;\n  }\n\n  :host(.start-lg-11) {\n    grid-column-start: 12;\n  }\n\n  :host(.start-lg-12) {\n    grid-column-start: 13;\n  }\n\n  :host(.span-lg-1) {\n    grid-column-end: span 1;\n  }\n\n  :host(.span-lg-2) {\n    grid-column-end: span 2;\n  }\n\n  :host(.span-lg-3) {\n    grid-column-end: span 3;\n  }\n\n  :host(.span-lg-4) {\n    grid-column-end: span 4;\n  }\n\n  :host(.span-lg-5) {\n    grid-column-end: span 5;\n  }\n\n  :host(.span-lg-6) {\n    grid-column-end: span 6;\n  }\n\n  :host(.span-lg-7) {\n    grid-column-end: span 7;\n  }\n\n  :host(.span-lg-8) {\n    grid-column-end: span 8;\n  }\n\n  :host(.span-lg-9) {\n    grid-column-end: span 9;\n  }\n\n  :host(.span-lg-10) {\n    grid-column-end: span 10;\n  }\n\n  :host(.span-lg-11) {\n    grid-column-end: span 11;\n  }\n\n  :host(.span-lg-12) {\n    grid-column-end: span 12;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
