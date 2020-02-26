import { r as registerInstance, h, g as getElement } from './index-01bb90c0.js';

const Ku4Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The member to stack on at xsmall views.
         */
        // eslint-disable-next-line @stencil/strict-mutable
        this.xsStack = '';
    }
    stack() {
        const theadHeaders = [].slice.call(this.host.querySelectorAll('thead th'));
        const tbodyHeaders = [].slice.call(this.host.querySelectorAll('tbody th'));
        const tfootHeaders = [].slice.call(this.host.querySelectorAll('tfoot th'));
        const hasBodyHeaders = tbodyHeaders.length > 0;
        if (hasBodyHeaders) {
            this.host.querySelector('thead tr :first-child').classList.add('ku4-head-header');
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
    componentDidUnload() {
        this.mutationObserver.disconnect();
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get style() { return "ku4-table {\n  position: relative;\n  display: block;\n}\n\@media only screen and (min-width: 1px) and (max-width: 767px) {\n  \@supports (display: contents) {\n    ku4-table[xs-stack=column] table {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n      flex-direction: column;\n    }\n    ku4-table[xs-stack=column] thead,\nku4-table[xs-stack=column] tbody,\nku4-table[xs-stack=column] tfoot,\nku4-table[xs-stack=column] tr {\n      display: contents;\n    }\n    ku4-table[xs-stack=column] thead .ku4-head-header {\n      display: none;\n    }\n    ku4-table[xs-stack=column] tbody th,\nku4-table[xs-stack=column] tfoot th {\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      margin: 0;\n      padding: 0;\n      line-height: 0;\n      font-size: 0;\n    }\n    ku4-table[xs-stack=column] tbody td,\nku4-table[xs-stack=column] tfoot td {\n      display: -ms-flexbox;\n      display: flex;\n    }\n    ku4-table[xs-stack=column] tbody td:before,\nku4-table[xs-stack=column] tfoot td:before {\n      content: attr(data-ku4-row-header);\n    }\n  }\n  ku4-table[xs-stack=row] table {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n  ku4-table[xs-stack=row] thead th,\nku4-table[xs-stack=row] thead td {\n    display: none;\n  }\n  ku4-table[xs-stack=row] thead,\nku4-table[xs-stack=row] tbody,\nku4-table[xs-stack=row] tfoot,\nku4-table[xs-stack=row] tr,\nku4-table[xs-stack=row] th,\nku4-table[xs-stack=row] td {\n    display: block;\n  }\n  ku4-table[xs-stack=row] tbody td:before,\nku4-table[xs-stack=row] tfoot td:before {\n    content: attr(data-ku4-column-header);\n  }\n}"; }
};

export { Ku4Table as ku4_table };
