System.register(['./index-5ed22993.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.g;
            }],
        execute: function () {
            var Ku4Mask = exports('ku4_mask', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.handleFocus = function (e) {
                    e.preventDefault();
                    this.input.value = this.template;
                    console.log(e.target.selectionStart, e.target.selectionEnd);
                    return false;
                };
                class_1.prototype.handleInput = function (e) {
                    e.preventDefault();
                    console.log(e.target.selectionStart, e.target.selectionEnd);
                    return false;
                };
                class_1.prototype.handleBlur = function (e) {
                    e.preventDefault();
                    console.log(e.target.selectionStart, e.target.selectionEnd);
                    return false;
                };
                class_1.prototype.handleMouseUp = function (e) {
                    e.preventDefault();
                    console.log(e.target.selectionStart, e.target.selectionEnd);
                    return false;
                };
                class_1.prototype.handleKeyDown = function (e) {
                    e.preventDefault();
                    console.log(e.target.value, e.target.selectionStart, e.target.selectionEnd);
                    return false;
                };
                class_1.prototype.handleKeyUp = function (e) {
                    e.preventDefault();
                    console.log(e.target.selectionStart, e.target.selectionEnd);
                    return false;
                };
                class_1.prototype.mask = function (e) {
                    /**
                     * You need to know:
                     * * Previous value
                     * * New data to update value with (input or delete)
                     * * What character you are changing and what you are changing it to
                     * * Where you are in the current value and where you need to end up  (index)
                     * * Need to handle what happens if I delete a section of the data.
                     *
                     * * If you are adding characters
                     */
                    if (e.inputType === 'deleteContentBackward') {
                        //  * You should look for previous mask char location and replace with template
                        //  * components up to that point.
                    }
                    else {
                        // Get typed character
                        // Replace the current values mask character with that character
                        // Move cursor to the next masked characters location
                        // const cursor = currentValue.indexOf('_', currentValue.indexOf('_') + 1);
                        // this.input.value = currentValue.replace('_', e.data);
                        // this.input.setSelectionRange(cursor, cursor);
                    }
                };
                class_1.prototype.componentWillLoad = function () {
                    this.handleFocus = this.handleFocus.bind(this);
                    this.handleBlur = this.handleBlur.bind(this);
                    this.handleInput = this.handleInput.bind(this);
                    this.handleMouseUp = this.handleMouseUp.bind(this);
                    this.handleKeyDown = this.handleKeyDown.bind(this);
                    this.handleKeyUp = this.handleKeyUp.bind(this);
                    this.input = document.getElementById(this.for);
                    this.input.addEventListener('focus', this.handleFocus);
                    this.input.addEventListener('blur', this.handleBlur);
                    this.input.addEventListener('input', this.handleInput);
                    this.input.addEventListener('mouseup', this.handleMouseUp);
                    this.input.addEventListener('keydown', this.handleKeyDown);
                    this.input.addEventListener('keyup', this.handleKeyUp);
                };
                class_1.prototype.componentDidUnload = function () {
                    this.input.removeEventListener('focus', this.handleFocus);
                    this.input.removeEventListener('blur', this.handleBlur);
                    this.input.removeEventListener('input', this.handleInput);
                    this.input.removeEventListener('mouseup', this.handleMouseUp);
                    this.input.removeEventListener('keydown', this.handleKeyDown);
                    this.input.removeEventListener('keyup', this.handleKeyUp);
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
        }
    };
});
