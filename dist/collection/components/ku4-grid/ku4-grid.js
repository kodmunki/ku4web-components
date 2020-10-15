import { Component, Host, Prop, h } from '@stencil/core';
/**
 * @description ku4-grid
 */
export class Ku4Grid {
  constructor() {
    //<editor-fold desc="columns">
    /**
     * Number of columns to render at extra-small (optional).
     */
    this.columnsXs = 1;
    //</editor-fold>
    //<editor-fold desc="offset-left">
    /**
     * Number of columns to offset left at extra-small (optional).
     */
    this.offsetLeftXs = 0;
    //</editor-fold>
    //<editor-fold desc="offset-right">
    /**
     * Number of columns to offset right (optional).
     */
    this.offsetRight = 0;
    //</editor-fold>
    //<editor-fold desc="offset">
    /**
     * Number of columns to offset left and right at extra-small (optional).
     */
    this.offsetXs = 0;
  }
  //</editor-fold>
  get columnClass() {
    const { columnsXs, columnsSm, columnsMd, columnsLg } = this;
    const value = [];
    if (columnsXs && !Number.isNaN(columnsXs)) {
      value.push(`columns-xs-${columnsXs}`);
    }
    if (columnsSm && !Number.isNaN(columnsSm)) {
      value.push(`columns-sm-${columnsSm}`);
    }
    if (columnsMd && !Number.isNaN(columnsMd)) {
      value.push(`columns-md-${columnsMd}`);
    }
    if (columnsLg && !Number.isNaN(columnsLg)) {
      value.push(`columns-lg-${columnsLg}`);
    }
    return value.join(' ');
  }
  get offsetLeftClass() {
    const { offsetLeftXs, offsetLeftSm, offsetLeftMd, offsetLeftLg } = this;
    const value = [];
    if (offsetLeftXs && !Number.isNaN(offsetLeftXs)) {
      value.push(`offset-left-xs-${offsetLeftXs}`);
    }
    if (offsetLeftSm && !Number.isNaN(offsetLeftSm)) {
      value.push(`offset-left-sm-${offsetLeftSm}`);
    }
    if (offsetLeftMd && !Number.isNaN(offsetLeftMd)) {
      value.push(`offset-left-md-${offsetLeftMd}`);
    }
    if (offsetLeftLg && !Number.isNaN(offsetLeftLg)) {
      value.push(`offset-left-lg-${offsetLeftLg}`);
    }
    return value.join(' ');
  }
  get offsetRightClass() {
    const { offsetRightXs, offsetRightSm, offsetRightMd, offsetRightLg } = this;
    const value = [];
    if (offsetRightXs && !Number.isNaN(offsetRightXs)) {
      value.push(`offset-right-xs-${offsetRightXs}`);
    }
    if (offsetRightSm && !Number.isNaN(offsetRightSm)) {
      value.push(`offset-right-sm-${offsetRightSm}`);
    }
    if (offsetRightMd && !Number.isNaN(offsetRightMd)) {
      value.push(`offset-right-md-${offsetRightMd}`);
    }
    if (offsetRightLg && !Number.isNaN(offsetRightLg)) {
      value.push(`offset-right-lg-${offsetRightLg}`);
    }
    return value.join(' ');
  }
  get offsetClass() {
    const { offsetXs, offsetSm, offsetMd, offsetLg } = this;
    const value = [];
    if (offsetXs && !Number.isNaN(offsetXs)) {
      value.push(`offset-xs-${offsetXs}`);
    }
    if (offsetSm && !Number.isNaN(offsetSm)) {
      value.push(`offset-sm-${offsetSm}`);
    }
    if (offsetMd && !Number.isNaN(offsetMd)) {
      value.push(`offset-md-${offsetMd}`);
    }
    if (offsetLg && !Number.isNaN(offsetLg)) {
      value.push(`offset-lg-${offsetLg}`);
    }
    return value.join(' ');
  }
  render() {
    const { columnClass, offsetClass, offsetLeftClass, offsetRightClass, } = this;
    return (h(Host, { class: `${columnClass} ${offsetLeftClass} ${offsetRightClass} ${offsetClass}` },
      h("slot", null)));
  }
  static get is() { return "ku4-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-grid.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-grid.css"]
  }; }
  static get properties() { return {
    "columnsXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 6 | 8 | 12 | 16",
        "resolved": "1 | 12 | 16 | 2 | 3 | 4 | 6 | 8",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to render at extra-small (optional)."
      },
      "attribute": "columns-xs",
      "reflect": false,
      "defaultValue": "1"
    },
    "columnsSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 6 | 8 | 12 | 16",
        "resolved": "1 | 12 | 16 | 2 | 3 | 4 | 6 | 8",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to render at small (optional)."
      },
      "attribute": "columns-sm",
      "reflect": false
    },
    "columnsMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 6 | 8 | 12 | 16",
        "resolved": "1 | 12 | 16 | 2 | 3 | 4 | 6 | 8",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to render at medium (optional)."
      },
      "attribute": "columns-md",
      "reflect": false
    },
    "columnsLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "1 | 2 | 3 | 4 | 6 | 8 | 12 | 16",
        "resolved": "1 | 12 | 16 | 2 | 3 | 4 | 6 | 8",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to render at large (optional)."
      },
      "attribute": "columns-lg",
      "reflect": false
    },
    "offsetLeftXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left at extra-small (optional)."
      },
      "attribute": "offset-left-xs",
      "reflect": false,
      "defaultValue": "0"
    },
    "offsetLeftSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left at small (optional)."
      },
      "attribute": "offset-left-sm",
      "reflect": false
    },
    "offsetLeftMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left at medium (optional)."
      },
      "attribute": "offset-left-md",
      "reflect": false
    },
    "offsetLeftLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset at large (optional)."
      },
      "attribute": "offset-left-lg",
      "reflect": false
    },
    "offsetRight": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset right (optional)."
      },
      "attribute": "offset-right",
      "reflect": false,
      "defaultValue": "0"
    },
    "offsetRightXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset at extra-small (optional)."
      },
      "attribute": "offset-right-xs",
      "reflect": false
    },
    "offsetRightSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset right at small (optional)."
      },
      "attribute": "offset-right-sm",
      "reflect": false
    },
    "offsetRightMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset right at medium (optional)."
      },
      "attribute": "offset-right-md",
      "reflect": false
    },
    "offsetRightLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset right at large (optional)."
      },
      "attribute": "offset-right-lg",
      "reflect": false
    },
    "offsetXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left and right at extra-small (optional)."
      },
      "attribute": "offset-xs",
      "reflect": false,
      "defaultValue": "0"
    },
    "offsetSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left and right at small (optional)."
      },
      "attribute": "offset-sm",
      "reflect": false
    },
    "offsetMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left and right at medium (optional)."
      },
      "attribute": "offset-md",
      "reflect": false
    },
    "offsetLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "0 | 1 | 2 | 3 | 4 | 5",
        "resolved": "0 | 1 | 2 | 3 | 4 | 5",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number of columns to offset left and right at large (optional)."
      },
      "attribute": "offset-lg",
      "reflect": false
    }
  }; }
}
