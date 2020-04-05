import { r as registerInstance, h, g as getElement } from './index-0da78512.js';

const Ku4FormValidation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Call to explicitly validate this validation
     */
    async validate() {
        const { fields } = this;
        const methods = fields.map(field => field.validate());
        // eslint-disable-next-line no-undef
        return Promise.all(methods).then(values => !values.some(v => v === false));
    }
    get form() {
        return this.host.querySelector('form');
    }
    get fields() {
        return [].slice.call(this.form.querySelectorAll('ku4-validation'));
    }
    submit() {
        const { form } = this;
        this.validate().then(valid => valid && form.submit());
    }
    componentWillLoad() {
        const { form } = this;
        const onsubmit = form.onsubmit || (() => { });
        form.onsubmit = (e) => {
            e.preventDefault();
            this.submit();
            onsubmit.call(form, e);
            return false;
        };
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
};

export { Ku4FormValidation as ku4_form_validation };
