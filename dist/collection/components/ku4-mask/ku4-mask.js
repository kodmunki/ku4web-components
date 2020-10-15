import { Component, Prop, Watch, h } from '@stencil/core';
import { Assert, mask, unmask, wait } from 'ku4es-kernel';
/**
 * @description ku4-mask
 */
export class Ku4Mask {
  constructor() {
    this.charIndexes = [];
    this.reverseCharIndexes = [];
    this.previousValue = '';
    this.currentValue = '';
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
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.init();
  }
  init() {
    this.chars = this.char && new RegExp(this.char);
    this.banned = this.ban && new RegExp(this.ban);
    const pattern = this.pattern.replace(/[\s\n]/gm, '');
    this.patterns = pattern.substr(1).split(pattern[0]).map((v) => {
      try {
        return v && new RegExp(v) || null;
      }
      catch (e) {
        /**
         * TODO: Remove try/catch when Safari supports lookbehinds.
         * Safari does not support lookbehinds and blows up everything
         * because of this. This try catch allows all masking behaviour
         * to continue to work except for patterns that include lookbehinds.
         */
      }
    });
    this.charIndexes = this.template.split('')
      .reduce((acc, char, i) => {
      if (this.chars.test(char)) {
        acc.push(i);
      }
      return acc;
    }, []);
    this.reverseCharIndexes = [...this.charIndexes].reverse();
    return this;
  }
  templateHandler(newTemplate, oldTemplate) {
    const { input, previousCharIndex, previousValue, currentValue, value, char } = this;
    const previousLength = unmask(previousValue, oldTemplate, char).length;
    const currentLength = unmask(currentValue, oldTemplate, char).length;
    const nextIndex = previousLength < currentLength ? previousCharIndex + 1 : previousCharIndex;
    this.init().value = mask(unmask(value, oldTemplate, char), newTemplate, char);
    input.setSelectionRange(nextIndex, nextIndex);
  }
  charHandler(newChar, oldChar) {
    const { value, template } = this;
    this.init().value = mask(unmask(value, template, oldChar), template, newChar);
  }
  get previousCharIndex() {
    return this.reverseCharIndexes.find(i => this.selectionStart > i) || this.charIndexes[0];
  }
  get value() {
    return this.currentValue;
  }
  set value(value) {
    const { chars, hidden, input } = this;
    const indexOfChar = value.search(chars);
    this.currentValue = value;
    input.value = hidden && indexOfChar > -1 ? value.substring(0, indexOfChar) : value;
  }
  handleTouchStart() {
    this.touchStart = true;
  }
  handleFocus() {
    const { input, template, char, chars, touchStart } = this;
    this.value = mask(unmask(this.value, template, char), template, char);
    wait(0).then(() => {
      const index = input.value.search(chars);
      const selection = index < 0 ? input.value.length : index;
      this.input.setSelectionRange(index < 0 && !touchStart ? 0 : selection, selection);
      this.touchStart = false;
    });
  }
  handleKeyDown(e) {
    const { banned, hidden, template, char } = this;
    if (e.key &&
      e.key.length === 1 &&
      banned &&
      (banned.test(e.key) &&
        !(e.altKey || e.ctrlKey || e.metaKey))) {
      e.preventDefault();
    }
    this.previousValue = hidden ? mask(unmask(e.target.value, template, char), template, char) : e.target.value;
    this.selectionStart = e.target.selectionStart;
    this.selectionEnd = e.target.selectionEnd;
  }
  handleInput(e) {
    const { input, template, char, chars, previousValue, banned, selectionStart, selectionEnd, previousCharIndex, patterns, charIndexes, reverseCharIndexes } = this;
    if (!chars.test(this.previousValue) &&
      e.inputType !== 'insertFromPaste' &&
      e.inputType !== 'deleteContentBackward' &&
      e.inputType !== 'deleteContentForward' &&
      selectionStart === selectionEnd) {
      this.value = previousValue;
      return;
    }
    if (e.inputType === 'insertFromPaste') {
      try {
        navigator.clipboard.readText()
          .then((rawData) => {
          const data = rawData.replace(new RegExp(banned, 'g'), '');
          if (Assert.isNullOrEmpty(data)) {
            this.value = previousValue;
            input.setSelectionRange(selectionStart, selectionStart);
            return;
          }
          if (!banned || !banned.test(data)) {
            let nextValue = previousValue;
            if (selectionStart < selectionEnd) {
              const startValue = reverseCharIndexes.find(v => v <= selectionStart - 1);
              const endValue = reverseCharIndexes.find(v => v <= selectionEnd - 1);
              const startInsertIndex = charIndexes.findIndex(v => v === startValue);
              const endInsertIndex = charIndexes.findIndex(v => v === endValue);
              const unmasked = unmask(previousValue, template, char);
              const newValue = unmasked.substring(0, startInsertIndex + 1) + unmasked.substring(endInsertIndex + 1, previousValue.length);
              nextValue = mask(newValue, template, char);
            }
            const charIndex = charIndexes.find(v => v >= selectionStart);
            const insertIndex = charIndexes.findIndex(v => v === charIndex);
            const unmasked = unmask(nextValue, template, char);
            nextValue = unmasked.substring(0, insertIndex) + data + unmasked.substring(insertIndex, previousValue.length);
            this.value = mask(nextValue, template, char);
            const index = charIndexes[insertIndex + data.length] || this.value.search(chars) || this.value.length;
            input.setSelectionRange(index, index);
          }
        });
        this.value = previousValue;
        input.setSelectionRange(selectionStart, selectionStart);
        return;
      }
      catch (e) {
        this.value = previousValue;
        input.setSelectionRange(selectionStart, selectionStart);
        return;
      }
    }
    if (e.inputType === 'deleteContentBackward') {
      const startValue = reverseCharIndexes.find(v => v <= selectionStart - 1);
      const endValue = reverseCharIndexes.find(v => v <= selectionEnd - 1);
      const startInsertIndex = charIndexes.findIndex(v => v === startValue);
      const endInsertIndex = charIndexes.findIndex(v => v === endValue);
      const unmasked = unmask(previousValue, template, char);
      if (startInsertIndex < endInsertIndex) {
        const newValue = unmasked.substring(0, startInsertIndex + 1) + unmasked.substring(endInsertIndex + 1, previousValue.length);
        this.value = mask(newValue, template, char);
        newValue && startInsertIndex > -1
          ? input.setSelectionRange(previousCharIndex + 1, previousCharIndex + 1)
          : input.setSelectionRange(previousCharIndex, previousCharIndex);
      }
      else {
        const newValue = unmasked.substring(0, startInsertIndex) + unmasked.substring(endInsertIndex + 1, previousValue.length);
        this.value = mask(newValue, template, char);
        input.setSelectionRange(previousCharIndex, previousCharIndex);
      }
      return;
    }
    if (e.inputType === 'deleteContentForward') {
      const charIndex = charIndexes.find(v => v >= selectionStart);
      const insertIndex = charIndexes.findIndex(v => v === charIndex);
      const unmasked = unmask(previousValue, template, char);
      const newValue = unmasked.substring(0, insertIndex) + unmasked.substring(insertIndex + 1, previousValue.length);
      this.value = mask(newValue, template, char);
      input.setSelectionRange(selectionStart, selectionStart);
      return;
    }
    //Abort if auxiliary key is pressed.
    if (e.altKey || e.ctrlKey || e.metaKey) {
      return;
    }
    //Abort if disallowed character
    if (!e.data) {
      this.value = previousValue;
      input.setSelectionRange(selectionStart, selectionStart);
      return;
    }
    //Append
    if (chars.test(previousValue.charAt(selectionStart)) ||
      selectionStart === template.length) {
      const unmasked = unmask(previousValue, template, char);
      this.value = mask(unmasked + e.data, template, char);
      const charIndex = this.value.search(chars);
      const index = charIndex < 0 ? template.length : charIndex;
      input.setSelectionRange(index, index);
      const patternIndex = charIndexes.findIndex(v => v >= index);
      const validationIndex = patternIndex < 0 ? charIndexes.length - 1 : patternIndex - 1;
      this.validate(e.data, patterns[validationIndex]);
    }
    //Insert
    else {
      let nextValue = previousValue;
      if (selectionStart < selectionEnd) {
        const startValue = reverseCharIndexes.find(v => v <= selectionStart - 1);
        const endValue = reverseCharIndexes.find(v => v <= selectionEnd - 1);
        const startInsertIndex = charIndexes.findIndex(v => v === startValue);
        const endInsertIndex = charIndexes.findIndex(v => v === endValue);
        const unmasked = unmask(previousValue, template, char);
        const newValue = unmasked.substring(0, startInsertIndex + 1) + unmasked.substring(endInsertIndex + 1, previousValue.length);
        nextValue = mask(newValue, template, char);
      }
      const charIndex = charIndexes.find(v => v >= selectionStart);
      const insertIndex = charIndexes.findIndex(v => v === charIndex);
      const unmasked = unmask(nextValue, template, char);
      nextValue = unmasked.substring(0, insertIndex) + e.data + unmasked.substring(insertIndex, previousValue.length);
      const index = charIndexes.find(v => v > charIndex);
      this.value = mask(nextValue, template, char);
      input.setSelectionRange(index, index);
      const patternIndex = charIndexes.findIndex(v => v >= index);
      const validationIndex = patternIndex < 0 ? charIndexes.length - 1 : patternIndex - 1;
      this.validate(e.data, patterns[validationIndex]);
    }
  }
  validate(data, pattern) {
    const { previousValue, input, value, selectionStart } = this;
    if (Assert.exists(pattern) &&
      !(pattern.test(data) || (/\(\?[!<=]/.test(pattern.toString()) && pattern.test(value)))) {
      this.value = previousValue;
      input.setSelectionRange(selectionStart, selectionStart);
    }
  }
  componentWillLoad() {
    this.input = document.getElementById(this.for);
    this.input.addEventListener('focus', this.handleFocus);
    this.input.addEventListener('keydown', this.handleKeyDown);
    this.input.addEventListener('input', this.handleInput);
    this.input.addEventListener('touchstart', this.handleTouchStart);
  }
  disconnectedCallback() {
    if (this.input && this.input.removeEventListener) {
      this.input.removeEventListener('focus', this.handleFocus);
      this.input.removeEventListener('keydown', this.handleKeyDown);
      this.input.removeEventListener('input', this.handleInput);
      this.input.removeEventListener('touchstart', this.handleTouchStart);
    }
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ku4-mask"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-mask.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-mask.css"]
  }; }
  static get properties() { return {
    "for": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Mask for input having id of value"
      },
      "attribute": "for",
      "reflect": false
    },
    "template": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Mask template"
      },
      "attribute": "template",
      "reflect": false,
      "defaultValue": "''"
    },
    "ban": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A regex of characters to ban from\nentry. A user will not be able to input\nany character in this set of characters.\nE.g. ban=\"[()-]\" will not allow a user to\ninput (, ), or - into the target input."
      },
      "attribute": "ban",
      "reflect": false,
      "defaultValue": "''"
    },
    "pattern": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A test pattern for the mask to allow or\ndisallow characters at targeted points\nin the input. The pattern is a character\nseparated value of regular expressions\nwhere the first character denotes the\ncharacter separator at each subsequent\nvalue is a regular expression for the\ncharacter at that indicated index.\nE.g. `pattern=\",[345],,,[^abc]\"` would mean\nthat \",\" is the separator and that the\nfirst character must  be a 3, 4, or 5, and\nthe fourth character cannot be an a, b or c."
      },
      "attribute": "pattern",
      "reflect": false,
      "defaultValue": "''"
    },
    "char": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Mask Character"
      },
      "attribute": "char",
      "reflect": false,
      "defaultValue": "'_'"
    },
    "hidden": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Hide mask"
      },
      "attribute": "hidden",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get watchers() { return [{
      "propName": "template",
      "methodName": "templateHandler"
    }, {
      "propName": "char",
      "methodName": "charHandler"
    }]; }
}
