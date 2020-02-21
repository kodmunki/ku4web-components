import { r as registerInstance, h, H as Host, g as getElement } from './index-93aadf64.js';
import { a as dist_1 } from './index-79290777.js';

const Ku4Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleInput(e) {
        this.empty = dist_1.isNullOrEmpty(e.target.value);
    }
    componentWillLoad() {
        const input = this.host.querySelector('input');
        this.empty = dist_1.isNullOrEmpty(input.value);
        this.placeholder = input.getAttribute('placeholder');
    }
    render() {
        const { empty, value, placeholder } = this;
        return (h(Host, null, h("label", { htmlFor: this.for, class: `value ${empty ? 'empty' : ''} ${placeholder ? 'placeholder' : ''}` }, value || placeholder), h("slot", null)));
    }
    get host() { return getElement(this); }
    static get style() { return ":host {\n  position: relative;\n}\n\n.value {\n  position: absolute;\n  display: inline;\n  top: var(--ku4-label-top, 4px);\n  left: var(--ku4-label-left, 8px);\n  font-size: inherit;\n  color: inherit;\n  z-index: 1;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.value.empty {\n  color: #ccc;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.value.placeholder {\n  opacity: 1;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.value.empty.placeholder {\n  color: #888;\n  opacity: 0;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}\n\n::slotted {\n  width: 100%;\n}"; }
};

export { Ku4Label as ku4_label };
