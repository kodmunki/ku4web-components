import { r as registerInstance, h, g as getElement } from './index-01bb90c0.js';
import { a as dist_1 } from './index-79290777.js';

const Ku4Validation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Validation regular expression
         */
        this.expression = '.*';
    }
    /**
     * Call to explicitly validate this validation
     */
    async validate() {
        return this.assert();
    }
    handleInput() {
        return dist_1.isFalse(this.isValid) && this.assert();
    }
    handleBlur() {
        return this.assert();
    }
    assert() {
        const { ele, validOptions, input, regex } = this;
        this.isValid = validOptions
            ? validOptions.some(value => value === input.value) && regex.test(input.value)
            : ele
                ? ele.value === input.value && regex.test(input.value)
                : regex.test(input.value);
        this.invalid = !this.isValid;
        return this.isValid;
    }
    componentWillLoad() {
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.input = document.getElementById(this.for);
        this.ele = document.getElementById(this.element) || document.querySelector(this.element);
        this.validOptions = dist_1.exists(this.values)
            ? this.values.split(',')
            : (this.ele && this.ele.nodeName === 'DATALIST' &&
                [].slice.call(this.ele.querySelectorAll('option'))
                    .map(option => option.value));
        this.regex = new RegExp(this.expression);
        this.input.addEventListener('blur', this.handleBlur);
        this.input.addEventListener('input', this.handleInput);
    }
    componentDidUnload() {
        this.input.removeEventListener('blur', this.handleBlur);
        this.input.removeEventListener('input', this.handleInput);
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get style() { return ":host {\n  visibility: hidden !important;\n}\n\n:host([invalid]) {\n  visibility: visible !important;\n}"; }
};

export { Ku4Validation as ku4_validation };
