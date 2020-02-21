import { r as registerInstance, h, g as getElement } from './index-93aadf64.js';

const Ku4FormValidation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const form = document.querySelector('form');
        const fields = [].slice.call(form.querySelectorAll('ku4-validation'));
        const onsubmit = form.onsubmit || (() => { });
        form.onsubmit = (e) => {
            const methods = fields.map(field => field.validate());
            // eslint-disable-next-line no-undef
            Promise.all(methods).then(values => !values.some(v => v === false) && form.submit());
            onsubmit.call(e, form);
            return false;
        };
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get style() { return ""; }
};

export { Ku4FormValidation as ku4_form_validation };
