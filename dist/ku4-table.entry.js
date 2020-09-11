import { r as registerInstance, h, g as getElement } from './index-c6f39e4e.js';
import { t } from './index-4718bc14.js';

const ku4TableCss = "ku4-table{position:relative;display:block}@media only screen and (min-width: 1px) and (max-width: 767px){ku4-table{}@supports (display: contents){ku4-table[stack-xs=column] table{display:flex;flex-direction:column}ku4-table[stack-xs=column] thead,ku4-table[stack-xs=column] tbody,ku4-table[stack-xs=column] tfoot,ku4-table[stack-xs=column] tr{display:contents}ku4-table[stack-xs=column] thead .ku4-head-header{display:none}ku4-table[stack-xs=column] tbody th,ku4-table[stack-xs=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[stack-xs=column] tbody td,ku4-table[stack-xs=column] tfoot td{display:flex}ku4-table[stack-xs=column] tbody td:before,ku4-table[stack-xs=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[stack-xs=row] table{display:flex;flex-direction:column}ku4-table[stack-xs=row] thead th,ku4-table[stack-xs=row] thead td{display:none}ku4-table[stack-xs=row] thead,ku4-table[stack-xs=row] tbody,ku4-table[stack-xs=row] tfoot,ku4-table[stack-xs=row] tr,ku4-table[stack-xs=row] th,ku4-table[stack-xs=row] td{display:block}ku4-table[stack-xs=row] tbody td:before,ku4-table[stack-xs=row] tfoot td:before{content:attr(data-ku4-column-header)}@supports (display: contents){ku4-table[xs-stack=column] table{display:flex;flex-direction:column}ku4-table[xs-stack=column] thead,ku4-table[xs-stack=column] tbody,ku4-table[xs-stack=column] tfoot,ku4-table[xs-stack=column] tr{display:contents}ku4-table[xs-stack=column] thead .ku4-head-header{display:none}ku4-table[xs-stack=column] tbody th,ku4-table[xs-stack=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[xs-stack=column] tbody td,ku4-table[xs-stack=column] tfoot td{display:flex}ku4-table[xs-stack=column] tbody td:before,ku4-table[xs-stack=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[xs-stack=row] table{display:flex;flex-direction:column}ku4-table[xs-stack=row] thead th,ku4-table[xs-stack=row] thead td{display:none}ku4-table[xs-stack=row] thead,ku4-table[xs-stack=row] tbody,ku4-table[xs-stack=row] tfoot,ku4-table[xs-stack=row] tr,ku4-table[xs-stack=row] th,ku4-table[xs-stack=row] td{display:block}ku4-table[xs-stack=row] tbody td:before,ku4-table[xs-stack=row] tfoot td:before{content:attr(data-ku4-column-header)}}";

const Ku4Table = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    if (t.exists(headerRows)) {
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
    this.mutationObserver.disconnect();
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
Ku4Table.style = ku4TableCss;

export { Ku4Table as ku4_table };
