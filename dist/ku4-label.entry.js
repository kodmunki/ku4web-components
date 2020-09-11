import { r as registerInstance, h, e as Host, g as getElement } from './index-c6f39e4e.js';
import { Z, t } from './index-4718bc14.js';

const ku4LabelCss = ":host{position:relative;display:block;box-sizing:border-box;font-size:12px;line-height:14px}::slotted(*){padding:6px;border-radius:4px;box-sizing:border-box;background-color:#fff;font-size:18px;-webkit-appearance:none}label{position:absolute;display:inline;top:var(--ku4-label-top, -6px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0 4px);font-size:inherit;line-height:inherit;background-color:var(--ku4-label-background-color, inherit);color:inherit;z-index:1;white-space:nowrap;transition:all 0.2s ease}label.empty{opacity:0;transition:all 0.1s ease}";

const Ku4Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleFocus() {
    Z(100).then(() => { this.empty = t.isNullOrEmpty(this.field.value); });
  }
  handleInput() {
    this.empty = t.isNullOrEmpty(this.field.value);
  }
  componentWillLoad() {
    this.field = this.host.querySelector('input, select, textarea');
    this.empty = t.isNullOrEmpty(this.field.value);
    this.placeholder = this.field.getAttribute('placeholder');
    this.field.addEventListener('focus', this.handleFocus);
    this.field.addEventListener('input', this.handleInput);
  }
  disconnectedCallback() {
    if (this.field && this.field.removeEventListener) {
      this.field.removeEventListener('focus', this.handleFocus);
      this.field.removeEventListener('input', this.handleInput);
    }
  }
  render() {
    const { empty, value, placeholder } = this;
    return (h(Host, null, h("label", { htmlFor: this.for, class: `${empty ? 'empty' : ''}` }, value || placeholder), h("slot", null)));
  }
  get host() { return getElement(this); }
};
Ku4Label.style = ku4LabelCss;

export { Ku4Label as ku4_label };
