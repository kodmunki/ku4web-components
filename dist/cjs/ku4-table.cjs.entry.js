'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');

const ku4TableCss = "ku4-table{position:relative;display:block}@media only screen and (min-width: 1px) and (max-width: 767px){ku4-table{}@supports (display: contents){ku4-table[stack-xs=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-xs=column] thead,ku4-table[stack-xs=column] tbody,ku4-table[stack-xs=column] tfoot,ku4-table[stack-xs=column] tr{display:contents}ku4-table[stack-xs=column] thead .ku4-head-header{display:none}ku4-table[stack-xs=column] tbody th,ku4-table[stack-xs=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[stack-xs=column] tbody td,ku4-table[stack-xs=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[stack-xs=column] tbody td:before,ku4-table[stack-xs=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[stack-xs=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-xs=row] thead th,ku4-table[stack-xs=row] thead td{display:none}ku4-table[stack-xs=row] thead,ku4-table[stack-xs=row] tbody,ku4-table[stack-xs=row] tfoot,ku4-table[stack-xs=row] tr,ku4-table[stack-xs=row] th,ku4-table[stack-xs=row] td{display:block}ku4-table[stack-xs=row] tbody td:before,ku4-table[stack-xs=row] tfoot td:before{content:attr(data-ku4-column-header)}@supports (display: contents){ku4-table[xs-stack=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=column] thead,ku4-table[xs-stack=column] tbody,ku4-table[xs-stack=column] tfoot,ku4-table[xs-stack=column] tr{display:contents}ku4-table[xs-stack=column] thead .ku4-head-header{display:none}ku4-table[xs-stack=column] tbody th,ku4-table[xs-stack=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[xs-stack=column] tbody td,ku4-table[xs-stack=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[xs-stack=column] tbody td:before,ku4-table[xs-stack=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[xs-stack=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=row] thead th,ku4-table[xs-stack=row] thead td{display:none}ku4-table[xs-stack=row] thead,ku4-table[xs-stack=row] tbody,ku4-table[xs-stack=row] tfoot,ku4-table[xs-stack=row] tr,ku4-table[xs-stack=row] th,ku4-table[xs-stack=row] td{display:block}ku4-table[xs-stack=row] tbody td:before,ku4-table[xs-stack=row] tfoot td:before{content:attr(data-ku4-column-header)}}@media only screen and (min-width: 768px) and (max-width: 991px){@supports (display: contents){ku4-table[stack-sm=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-sm=column] thead,ku4-table[stack-sm=column] tbody,ku4-table[stack-sm=column] tfoot,ku4-table[stack-sm=column] tr{display:contents}ku4-table[stack-sm=column] thead .ku4-head-header{display:none}ku4-table[stack-sm=column] tbody th,ku4-table[stack-sm=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[stack-sm=column] tbody td,ku4-table[stack-sm=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[stack-sm=column] tbody td:before,ku4-table[stack-sm=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[stack-sm=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-sm=row] thead th,ku4-table[stack-sm=row] thead td{display:none}ku4-table[stack-sm=row] thead,ku4-table[stack-sm=row] tbody,ku4-table[stack-sm=row] tfoot,ku4-table[stack-sm=row] tr,ku4-table[stack-sm=row] th,ku4-table[stack-sm=row] td{display:block}ku4-table[stack-sm=row] tbody td:before,ku4-table[stack-sm=row] tfoot td:before{content:attr(data-ku4-column-header)}}";

const Ku4Table = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("slot", null);
  }
  get host() { return index.getElement(this); }
};
Ku4Table.style = ku4TableCss;

exports.ku4_table = Ku4Table;
