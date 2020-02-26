import { r as registerInstance, h, g as getElement } from './index-01bb90c0.js';
import { a as dist_1 } from './index-79290777.js';

/**
 * Decorates deprecated members.
 *
 * Note: Due to inherent issues with Stencil `@Component`, classes
 * should be `@Deprecated` at the `render` method.
 *
 * @param {string} [replacement] - Name of target replacement member
 * @param {function} [callback] - Optional callback for Unit Tests.
 */
const deprecated = (replacement, callback) => (target, propertyKey, _descriptor) => {
    const property = propertyKey === 'render' ? '' : `.${propertyKey}`;
    const message = [
        `DEPRECATED: ${target.constructor.name}${property}`,
        '\nUse identified replacement if available.',
        dist_1.exists(replacement) ? `\nReplacement: ${replacement}` : '',
    ].join('');
    // eslint-disable-next-line no-console
    (callback || (message => console.warn(message)))(message);
};

const Memoize = () => (_target, _propertyKey, descriptor) => ((type) => {
    let value;
    return Object.assign(Object.assign({}, descriptor), { [type](...params) {
            value = value || descriptor[type].call(this, ...params);
            return value;
        } });
})(descriptor.get ? 'get' : 'value');

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Ku4FormValidation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get form() {
        return this.host.querySelector('form');
    }
    get fields() {
        return [].slice.call(this.form.querySelectorAll('ku4-validation'));
    }
    /**
     * Call to explicitly validate this validation
     */
    async validate() {
        const { form, fields } = this;
        const methods = fields.map(field => field.validate());
        // eslint-disable-next-line no-undef
        Promise.all(methods).then(values => !values.some(v => v === false) && form.submit());
    }
    componentDidLoad() {
        const { form } = this;
        const onsubmit = form.onsubmit || (() => { });
        form.onsubmit = (e) => {
            this.validate();
            onsubmit.call(e, form);
            return false;
        };
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
};
__decorate([
    Memoize()
], Ku4FormValidation.prototype, "form", null);
__decorate([
    Memoize()
], Ku4FormValidation.prototype, "fields", null);

export { Ku4FormValidation as ku4_form_validation };
