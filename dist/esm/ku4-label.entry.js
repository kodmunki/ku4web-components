import { r as registerInstance, h, c as Host, g as getElement } from './index-dc6f4989.js';
import { Z, t } from './index-aa88697c.js';

const ku4LabelCss = ":host{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;line-height:14px}::slotted(*){padding:6px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;font-size:18px;-webkit-appearance:none}label{position:absolute;display:inline;top:var(--ku4-label-top, -6px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0 4px);font-size:inherit;line-height:inherit;background-color:var(--ku4-label-background-color, inherit);color:inherit;z-index:1;white-space:nowrap;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}label.empty{opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";

const Ku4Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleFocus() {
    Z(100).then(() => { this.empty = t.isNullOrEmpty(this.field.value); });
  }
  handleChange() {
    this.empty = t.isNullOrEmpty(this.field.value);
  }
  handleInput() {
    this.empty = t.isNullOrEmpty(this.field.value);
  }
  handleKeyUp() {
    this.empty = t.isNullOrEmpty(this.field.value);
  }
  handleReset() {
    this.empty = true;
  }
  componentWillLoad() {
    this.field = this.host.querySelector('input, select, textarea');
    this.empty = t.isNullOrEmpty(this.field.value);
    this.placeholder = this.field.getAttribute('placeholder');
    this.field.addEventListener('focus', this.handleFocus);
    this.field.addEventListener('change', this.handleChange);
    this.field.addEventListener('input', this.handleInput);
    this.field.addEventListener('keyup', this.handleKeyUp);
    if (t.isFunction(this.host.closest)) {
      this.form = this.host.closest('form');
      if (this.form && this.form.addEventListener) {
        this.form.addEventListener('reset', this.handleReset);
      }
    }
  }
  disconnectedCallback() {
    if (this.field && this.field.removeEventListener) {
      this.field.removeEventListener('focus', this.handleFocus);
      this.field.removeEventListener('change', this.handleChange);
      this.field.removeEventListener('input', this.handleInput);
      this.field.removeEventListener('keyup', this.handleKeyUp);
      if (this.form && this.form.removeEventListener) {
        this.form.removeEventListener('reset', this.handleReset);
      }
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
