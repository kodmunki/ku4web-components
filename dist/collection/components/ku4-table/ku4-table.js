import { Component, Prop, Element, h } from '@stencil/core';
/**
 * @description ku4-table
 */
export class Ku4Table {
  constructor() {
    /**
     * The member to stack on at extra-small views.
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.stackXs = '';
    /**
     * The member to stack on at small views.
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.stackSm = '';
  }
  stack() {
    const theadHeaders = [].slice.call(this.host.querySelectorAll('thead th'));
    const tbodyHeaders = [].slice.call(this.host.querySelectorAll('tbody th'));
    const tfootHeaders = [].slice.call(this.host.querySelectorAll('tfoot th'));
    const hasBodyHeaders = tbodyHeaders.length > 0;
    const headerRows = this.host.querySelector('thead tr :first-child');
    if (hasBodyHeaders) {
      headerRows.classList.add('ku4-head-header');
    }
    theadHeaders.forEach((th, i) => {
      // eslint-disable-next-line no-param-reassign
      th.style.order = i + (!hasBodyHeaders);
    });
    [].slice.call(this.host.querySelectorAll('tbody tr')).forEach((tr, i) => {
      [].slice.call(tr.querySelectorAll('td')).forEach((element, j) => {
        // eslint-disable-next-line no-param-reassign
        element.style.order = j + 1;
        try {
          element.setAttribute('data-ku4-column-header', theadHeaders[j + hasBodyHeaders].textContent);
          element.setAttribute('data-ku4-row-header', tbodyHeaders[i].textContent);
        }
        catch (e) { /*Fail silently*/ }
      });
    });
    [].slice.call(this.host.querySelectorAll('tfoot tr')).forEach((tr, i) => {
      [].slice.call(tr.querySelectorAll('td')).forEach((element, j) => {
        // eslint-disable-next-line no-param-reassign
        element.style.order = j + 1;
        try {
          element.setAttribute('data-ku4-column-header', theadHeaders[j + hasBodyHeaders].textContent);
          element.setAttribute('data-ku4-row-header', tfootHeaders[i].textContent);
        }
        catch (e) { /*Fail silently*/ }
      });
    });
  }
  componentDidLoad() {
    this.stack();
    this.mutationObserver = new MutationObserver(() => this.stack());
    this.mutationObserver.observe(this.host, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    try {
      this.mutationObserver.disconnect();
    }
    catch (e) {
      /** Fail silently **/
    }
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ku4-table"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-table.css"]
  }; }
  static get properties() { return {
    "stackXs": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'column' | 'row' | ''",
        "resolved": "\"\" | \"column\" | \"row\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The member to stack on at extra-small views."
      },
      "attribute": "stack-xs",
      "reflect": true,
      "defaultValue": "''"
    },
    "stackSm": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'column' | 'row' | ''",
        "resolved": "\"\" | \"column\" | \"row\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The member to stack on at small views."
      },
      "attribute": "stack-sm",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get elementRef() { return "host"; }
}
