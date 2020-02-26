import { r as registerInstance, h, g as getElement } from './index-01bb90c0.js';

const Ku4Mask = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleFocus(e) {
        e.preventDefault();
        this.input.value = this.template;
        console.log(e.target.selectionStart, e.target.selectionEnd);
        return false;
    }
    handleInput(e) {
        e.preventDefault();
        console.log(e.target.selectionStart, e.target.selectionEnd);
        return false;
    }
    handleBlur(e) {
        e.preventDefault();
        console.log(e.target.selectionStart, e.target.selectionEnd);
        return false;
    }
    handleMouseUp(e) {
        e.preventDefault();
        console.log(e.target.selectionStart, e.target.selectionEnd);
        return false;
    }
    handleKeyDown(e) {
        e.preventDefault();
        console.log(e.target.value, e.target.selectionStart, e.target.selectionEnd);
        return false;
    }
    handleKeyUp(e) {
        e.preventDefault();
        console.log(e.target.selectionStart, e.target.selectionEnd);
        return false;
    }
    mask(e) {
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
    }
    componentWillLoad() {
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
    }
    componentDidUnload() {
        this.input.removeEventListener('focus', this.handleFocus);
        this.input.removeEventListener('blur', this.handleBlur);
        this.input.removeEventListener('input', this.handleInput);
        this.input.removeEventListener('mouseup', this.handleMouseUp);
        this.input.removeEventListener('keydown', this.handleKeyDown);
        this.input.removeEventListener('keyup', this.handleKeyUp);
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
};

export { Ku4Mask as ku4_mask };
