import { r as registerInstance, h, H as Host, g as getElement } from './index-01bb90c0.js';
import { a as dist_1 } from './index-79290777.js';

const Ku4Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleInput() {
        this.empty = dist_1.isNullOrEmpty(this.input.value);
        this.empty
            ? this.input.classList.add('ku4-empty')
            : this.input.classList.remove('ku4-empty');
    }
    componentWillLoad() {
        this.handleInput = this.handleInput.bind(this);
        this.input = this.host.querySelector('input, select');
        this.empty = dist_1.isNullOrEmpty(this.input.value);
        this.placeholder = this.input.getAttribute('placeholder');
        this.empty && this.input.classList.add('ku4-empty');
        this.input.addEventListener('input', this.handleInput);
    }
    componentDidUnload() {
        this.input.removeEventListener('input', this.handleInput);
    }
    render() {
        const { empty, value, placeholder } = this;
        return (h(Host, null, h("label", { htmlFor: this.for, class: `value ${empty ? 'empty' : ''} ${placeholder ? 'placeholder' : ''}` }, value || placeholder), h("slot", null)));
    }
    get host() { return getElement(this); }
    static get style() { return ":host {\n  position: relative;\n}\n\n::slotted(*) {\n  width: 100%;\n  padding: var(--ku4-label-empty-padding, 10px 4px 2px);\n  -webkit-transition: padding 0.1s ease;\n  transition: padding 0.1s ease;\n}\n\n::slotted(.ku4-empty) {\n  padding: var(--ku4-label-input-padding, 6px 4px 6px);\n  -webkit-transition: padding 0.1s ease;\n  transition: padding 0.1s ease;\n}\n\n.value {\n  position: absolute;\n  display: inline;\n  top: var(--ku4-label-top, 4px);\n  left: var(--ku4-label-left, 8px);\n  padding: var(--ku4-label-padding, 0);\n  font-size: inherit;\n  background-color: var(--ku4-label-background-color, transparent);\n  color: inherit;\n  z-index: 1;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.value.empty {\n  color: #ccc;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.value.placeholder {\n  opacity: 1;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.value.empty.placeholder {\n  color: #888;\n  opacity: 0;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}"; }
};

export { Ku4Label as ku4_label };
