import { r as registerInstance, h } from './index-c6f39e4e.js';
import { c, u, Z, t } from './index-4718bc14.js';

const ku4MaskCss = ":host{display:none}";

const Ku4Mask = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.charIndexes = [];
    this.reverseCharIndexes = [];
    this.previousValue = '';
    this.currentValue = '';
    this.mouseDown = false;
    this.touchStart = false;
    /**
     * Mask template
     */
    this.template = '';
    /**
     * A regex of characters to ban from
     * entry. A user will not be able to input
     * any character in this set of characters.
     * E.g. ban="[()-]" will not allow a user to
     * input (, ), or - into the target input.
     */
    this.ban = '';
    /**
     * A test pattern for the mask to allow or
     * disallow characters at targeted points
     * in the input. The pattern is a character
     * separated value of regular expressions
     * where the first character denotes the
     * character separator at each subsequent
     * value is a regular expression for the
     * character at that indicated index.
     * E.g. `pattern=",[345],,,[^abc]"` would mean
     * that "," is the separator and that the
     * first character must  be a 3, 4, or 5, and
     * the fourth character cannot be an a, b or c.
     */
    this.pattern = '';
    /**
     * Mask Character
     */
    this.char = '_';
    /**
     * Hide mask
     */
    this.hidden = false;
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.init();
  }
  init() {
    this.charIndexes = this.template.split('')
      .reduce((acc, char, i) => {
      if (char === this.char) {
        acc.push(i);
      }
      return acc;
    }, []);
    this.reverseCharIndexes = [...this.charIndexes].reverse();
    this.banned = this.ban && new RegExp(this.ban);
    this.regex = this.pattern && this.pattern.substr(1).split(this.pattern[0]).map(v => v && new RegExp(v) || null);
    return this;
  }
  templateHandler(newTemplate, oldTemplate) {
    const { input, previousCharIndex, previousValue, currentValue, value, char } = this;
    const previousLength = c(previousValue, oldTemplate, char).length;
    const currentLength = c(currentValue, oldTemplate, char).length;
    const nextIndex = previousLength < currentLength ? previousCharIndex + 1 : previousCharIndex;
    this.init().value = u(c(value, oldTemplate, char), newTemplate, char);
    input.setSelectionRange(nextIndex, nextIndex);
  }
  charHandler(newChar, oldChar) {
    const { value, template } = this;
    this.init().value = u(c(value, template, oldChar), template, newChar);
  }
  get previousCharIndex() {
    return this.reverseCharIndexes.find(i => this.selectionStart > i) || this.charIndexes[0];
  }
  get value() {
    return this.currentValue;
  }
  set value(value) {
    const { char, hidden, input } = this;
    const indexOfChar = value.indexOf(char);
    this.currentValue = value;
    input.value = hidden && indexOfChar > -1 ? value.substring(0, indexOfChar) : value;
  }
  handleMouseDown() {
    this.mouseDown = true;
  }
  handleTouchStart() {
    this.touchStart = true;
  }
  handleFocus(e) {
    const { input, template, char, charIndexes, mouseDown, touchStart } = this;
    this.value = u(c(this.value, template, char), template, this.char);
    if (mouseDown || touchStart) {
      this.mouseDown = false;
      this.touchStart = false;
      return;
    }
    Z(0).then(() => {
      const index = input.value.indexOf(char);
      const selection = index < 0 ? input.value.length : index;
      this.input.setSelectionRange(index < 0 ? 0 : selection, selection);
    });
  }
  handleKeyDown(e) {
    const { banned, hidden, template, char, charIndexes, selectionStart } = this;
    if (e.key &&
      e.key.length === 1 &&
      banned &&
      (banned.test(e.key) &&
        !(e.altKey || e.ctrlKey || e.metaKey))) {
      e.preventDefault();
    }
    this.previousValue = hidden ? u(c(e.target.value, template, char), template, char) : e.target.value;
    this.selectionStart = e.target.selectionStart;
    this.selectionEnd = e.target.selectionEnd;
    this.currentCharIndex = charIndexes.findIndex(v => v === selectionStart);
  }
  handleInput(e) {
    const { input, template, char, regex, previousValue, banned, selectionStart, selectionEnd, currentCharIndex, previousCharIndex, charIndexes, reverseCharIndexes } = this;
    if (!new RegExp(this.char).test(this.previousValue) &&
      e.inputType !== 'insertFromPaste' &&
      e.inputType !== 'deleteContentBackward' &&
      e.inputType !== 'deleteContentForward' &&
      selectionStart === selectionEnd) {
      this.value = previousValue;
      return;
    }
    if (e.inputType === 'insertFromPaste') {
      navigator.clipboard.readText()
        .then((data) => {
        if (!banned.test(data)) {
          let nextValue = previousValue;
          if (selectionStart < selectionEnd) {
            const startValue = reverseCharIndexes.find(v => v <= selectionStart - 1);
            const endValue = reverseCharIndexes.find(v => v <= selectionEnd - 1);
            const startInsertIndex = charIndexes.findIndex(v => v === startValue);
            const endInsertIndex = charIndexes.findIndex(v => v === endValue);
            const unmasked = c(previousValue, template, char);
            const newValue = unmasked.substring(0, startInsertIndex + 1) + unmasked.substring(endInsertIndex + 1, previousValue.length);
            nextValue = u(newValue, template, char);
          }
          const charIndex = charIndexes.find(v => v >= selectionStart);
          const insertIndex = this.charIndexes.findIndex(v => v === charIndex);
          const unmasked = c(nextValue, template, char);
          nextValue = unmasked.substring(0, insertIndex) + data + unmasked.substring(insertIndex, previousValue.length);
          this.value = u(nextValue, template, this.char);
          const index = charIndexes[insertIndex + data.length] || this.value.indexOf(char) || this.value.length;
          input.setSelectionRange(index, index);
        }
      });
    }
    if (e.inputType === 'deleteContentBackward') {
      const startValue = reverseCharIndexes.find(v => v <= selectionStart - 1);
      const endValue = reverseCharIndexes.find(v => v <= selectionEnd - 1);
      const startInsertIndex = charIndexes.findIndex(v => v === startValue);
      const endInsertIndex = charIndexes.findIndex(v => v === endValue);
      const unmasked = c(previousValue, template, char);
      if (startInsertIndex < endInsertIndex) {
        const newValue = unmasked.substring(0, startInsertIndex + 1) + unmasked.substring(endInsertIndex + 1, previousValue.length);
        this.value = u(newValue, template, char);
        newValue && startInsertIndex > -1
          ? input.setSelectionRange(previousCharIndex + 1, previousCharIndex + 1)
          : input.setSelectionRange(previousCharIndex, previousCharIndex);
      }
      else {
        const newValue = unmasked.substring(0, startInsertIndex) + unmasked.substring(endInsertIndex + 1, previousValue.length);
        this.value = u(newValue, template, char);
        input.setSelectionRange(previousCharIndex, previousCharIndex);
      }
      return;
    }
    if (e.inputType === 'deleteContentForward') {
      const charIndex = charIndexes.find(v => v >= selectionStart);
      const insertIndex = charIndexes.findIndex(v => v === charIndex);
      const unmasked = c(previousValue, template, char);
      const newValue = unmasked.substring(0, insertIndex) + unmasked.substring(insertIndex + 1, previousValue.length);
      this.value = u(newValue, template, char);
      input.setSelectionRange(selectionStart, selectionStart);
      return;
    }
    //Abort if auxiliary key is pressed.
    if (e.altKey || e.ctrlKey || e.metaKey) {
      return;
    }
    //Abort if disallowed character
    if (!e.data || t.exists(regex[currentCharIndex]) && !regex[currentCharIndex].test(e.data)) {
      this.value = previousValue;
      input.setSelectionRange(selectionStart, selectionStart);
      return;
    }
    //Append
    if (previousValue.charAt(selectionStart) === char ||
      selectionStart === template.length) {
      const unmasked = c(previousValue, template, char);
      this.value = u(unmasked + e.data, template, char);
      const charIndex = this.value.indexOf(char);
      const index = charIndex < 0 ? template.length : charIndex;
      input.setSelectionRange(index, index);
    }
    //Insert
    else {
      let nextValue = previousValue;
      if (selectionStart < selectionEnd) {
        const startValue = reverseCharIndexes.find(v => v <= selectionStart - 1);
        const endValue = reverseCharIndexes.find(v => v <= selectionEnd - 1);
        const startInsertIndex = charIndexes.findIndex(v => v === startValue);
        const endInsertIndex = charIndexes.findIndex(v => v === endValue);
        const unmasked = c(previousValue, template, char);
        const newValue = unmasked.substring(0, startInsertIndex + 1) + unmasked.substring(endInsertIndex + 1, previousValue.length);
        nextValue = u(newValue, template, char);
      }
      const charIndex = charIndexes.find(v => v >= selectionStart);
      const insertIndex = this.charIndexes.findIndex(v => v === charIndex);
      const unmasked = c(nextValue, template, char);
      nextValue = unmasked.substring(0, insertIndex) + e.data + unmasked.substring(insertIndex, previousValue.length);
      const index = charIndexes.find(v => v > charIndex);
      this.value = u(nextValue, template, this.char);
      input.setSelectionRange(index, index);
    }
  }
  componentWillLoad() {
    this.input = document.getElementById(this.for);
    this.input.addEventListener('focus', this.handleFocus);
    this.input.addEventListener('keydown', this.handleKeyDown);
    this.input.addEventListener('input', this.handleInput);
    this.input.addEventListener('mousedown', this.handleMouseDown);
    this.input.addEventListener('touchstart', this.handleTouchStart);
  }
  disconnectedCallback() {
    if (this.input && this.input.removeEventListener) {
      this.input.removeEventListener('focus', this.handleFocus);
      this.input.removeEventListener('keydown', this.handleKeyDown);
      this.input.removeEventListener('input', this.handleInput);
      this.input.removeEventListener('mousedown', this.handleMouseDown);
      this.input.removeEventListener('touchstart', this.handleTouchStart);
    }
  }
  render() {
    return h("slot", null);
  }
  static get watchers() { return {
    "template": ["templateHandler"],
    "char": ["charHandler"]
  }; }
};
Ku4Mask.style = ku4MaskCss;

export { Ku4Mask as ku4_mask };
