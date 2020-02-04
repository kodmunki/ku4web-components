import { r as registerInstance, h, H as Host, c as getElement } from './core-9ffb600c.js';

const Ku4Validation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Validation regular expression
         */
        this.expression = '.*';
        this.isValid = true;
    }
    handleInput() {
        const { ele, input, isValid, regex } = this;
        if (!isValid) {
            this.isValid = ele ? ele.value === input.value : regex.test(input.value);
        }
    }
    handleBlur() {
        const { ele, input, regex } = this;
        this.isValid = ele ? ele.value === input.value : regex.test(input.value);
    }
    componentWillLoad() {
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.input = document.getElementById(this.for);
        this.ele = document.querySelector(this.element);
        this.regex = new RegExp(this.expression);
        this.input.addEventListener('blur', this.handleBlur);
        this.input.addEventListener('input', this.handleInput);
    }
    componentDidUnload() {
        this.input.removeEventListener('blur', this.handleBlur);
        this.input.removeEventListener('input', this.handleInput);
    }
    render() {
        return (h(Host, { class: `${this.isValid ? 'valid' : 'invalid'}` }, h("slot", null)));
    }
    get host() { return getElement(this); }
    static get style() { return ""; }
};

export { Ku4Validation as ku4_validation };
