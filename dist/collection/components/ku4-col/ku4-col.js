import { Component, Host, Prop, h } from '@stencil/core';
/**
 * @description ku4-col
 */
export class Ku4Col {
  constructor() {
    /**
     * Start position of column at extra-small (optional).
     */
    this.startXs = 0;
    /**
     * Number of columns to span left and right at extra-small (optional).
     */
    this.spanXs = 1;
  }
  get startClass() {
    const { startXs, startSm, startMd, startLg } = this;
    const value = [];
    if (startXs && !Number.isNaN(startXs)) {
      value.push(`start-xs-${startXs}`);
    }
    if (startSm && !Number.isNaN(startSm)) {
      value.push(`start-sm-${startSm}`);
    }
    if (startMd && !Number.isNaN(startMd)) {
      value.push(`start-md-${startMd}`);
    }
    if (startLg && !Number.isNaN(startLg)) {
      value.push(`start-lg-${startLg}`);
    }
    return value.join(' ');
  }
  get spanClass() {
    const { spanXs, spanSm, spanMd, spanLg } = this;
    const value = [];
    if (spanXs && !Number.isNaN(spanXs)) {
      value.push(`span-xs-${spanXs}`);
    }
    if (spanSm && !Number.isNaN(spanSm)) {
      value.push(`span-sm-${spanSm}`);
    }
    if (spanMd && !Number.isNaN(spanMd)) {
      value.push(`span-md-${spanMd}`);
    }
    if (spanLg && !Number.isNaN(spanLg)) {
      value.push(`span-lg-${spanLg}`);
    }
    return value.join(' ');
  }
  get orderClass() {
    const { orderXs, orderSm, orderMd, orderLg } = this;
    const value = [];
    if (orderXs && !Number.isNaN(orderXs)) {
      value.push(`order-xs-${orderXs}`);
    }
    if (orderSm && !Number.isNaN(orderSm)) {
      value.push(`order-sm-${orderSm}`);
    }
    if (orderMd && !Number.isNaN(orderMd)) {
      value.push(`order-md-${orderMd}`);
    }
    if (orderLg && !Number.isNaN(orderLg)) {
      value.push(`order-lg-${orderLg}`);
    }
    return value.join(' ');
  }
  render() {
    const { startClass, spanClass, orderClass } = this;
    return (h(Host, { class: `${startClass} ${spanClass} ${orderClass}` },
      h("slot", null)));
  }
  static get is() { return "ku4-col"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-col.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-col.css"]
  }; }
  static get properties() { return {
    "startXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Start position of column at extra-small (optional)."
      },
      "attribute": "start-xs",
      "reflect": false,
      "defaultValue": "0"
    },
    "startSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Start position of column at small (optional)."
      },
      "attribute": "start-sm",
      "reflect": false
    },
    "startMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Start position of column at medium (optional)."
      },
      "attribute": "start-md",
      "reflect": false
    },
    "startLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Start position of column at large (optional)."
      },
      "attribute": "start-lg",
      "reflect": false
    },
    "spanXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number of columns to span left and right at extra-small (optional)."
      },
      "attribute": "span-xs",
      "reflect": false,
      "defaultValue": "1"
    },
    "spanSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number of columns to span left and right at extra-small (optional)."
      },
      "attribute": "span-sm",
      "reflect": false
    },
    "spanMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number of columns to span left and right at medium (optional)."
      },
      "attribute": "span-md",
      "reflect": false
    },
    "spanLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number of columns to span left and right at large (optional)."
      },
      "attribute": "span-lg",
      "reflect": false
    },
    "orderXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Order of column at extra-small (optional)."
      },
      "attribute": "order-xs",
      "reflect": false
    },
    "orderSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Order of column at small (optional)."
      },
      "attribute": "order-sm",
      "reflect": false
    },
    "orderMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Order of column at medium (optional)."
      },
      "attribute": "order-md",
      "reflect": false
    },
    "orderLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16",
        "resolved": "1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Order of column at large (optional)."
      },
      "attribute": "order-lg",
      "reflect": false
    }
  }; }
}
