import { r as registerInstance, h, g as getElement } from './index-93aadf64.js';
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
        const { ele, input, regex } = this;
        this.isValid = ele ? ele.value === input.value && regex.test(input.value) : regex.test(input.value);
        this.setValidAttribute();
        return this.isValid;
    }
    setValidAttribute() {
        if (this.isValid) {
            this.host.setAttribute('valid', '');
            this.host.removeAttribute('invalid');
        }
        else {
            this.host.setAttribute('invalid', '');
            this.host.removeAttribute('valid');
        }
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
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get style() { return ":host {\n  visibility: hidden !important;\n}\n\n:host([invalid]) {\n  visibility: visible !important;\n}"; }
};

export { Ku4Validation as ku4_validation };
