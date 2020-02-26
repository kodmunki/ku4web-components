import { r as registerInstance, h, H as Host } from './index-01bb90c0.js';
import { a as dist_1 } from './index-79290777.js';

const Ku4Grid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //<editor-fold desc="columns">
        /**
         * Number of columns to render at xs (optional).
         */
        this.columnsXs = 1;
        //</editor-fold>
        //<editor-fold desc="offset-left">
        /**
         * Number of columns to offset left at xs (optional).
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
         * Number of columns to offset left and right at xs (optional).
         */
        this.offsetXs = 0;
    }
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
    get rowGutterClass() {
        const { rowGutter } = this;
        return dist_1.exists(rowGutter) ? `row-gutter-${rowGutter}` : '';
    }
    render() {
        const { columnClass, offsetClass, offsetLeftClass, offsetRightClass, rowGutterClass } = this;
        return (h(Host, { class: `${columnClass} ${offsetLeftClass} ${offsetRightClass} ${offsetClass} ${rowGutterClass}` }, h("slot", null)));
    }
    static get style() { return ":host {\n  position: relative;\n  display: block;\n  margin: 0 calc(-1 * var(--ku4-grid-column-gutter) + var(--ku4-grid-outer-gutter));\n}\n\n\@media only screen and (min-width: 1px) {\n  :host(.columns-xs-1) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(100%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-xs-2) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(50%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-xs-3) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(33.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-xs-4) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(25%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-xs-6) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(16.6666666667%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-xs-12) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(8.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.offset-left-xs-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-left-xs-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-left-xs-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-left-xs-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-left-xs-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-left-xs-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-right-xs-0) {\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-right-xs-1) {\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-right-xs-2) {\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-right-xs-3) {\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-right-xs-4) {\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-right-xs-5) {\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-xs-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-xs-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-xs-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-xs-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-xs-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-xs-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n}\n\@media only screen and (min-width: 768px) {\n  :host(.columns-sm-1) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(100%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-sm-2) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(50%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-sm-3) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(33.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-sm-4) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(25%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-sm-6) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(16.6666666667%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-sm-12) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(8.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.offset-left-sm-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-left-sm-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-left-sm-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-left-sm-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-left-sm-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-left-sm-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-right-sm-0) {\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-right-sm-1) {\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-right-sm-2) {\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-right-sm-3) {\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-right-sm-4) {\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-right-sm-5) {\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-sm-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-sm-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-sm-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-sm-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-sm-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-sm-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n}\n\@media only screen and (min-width: 992px) {\n  :host(.columns-md-1) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(100%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-md-2) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(50%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-md-3) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(33.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-md-4) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(25%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-md-6) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(16.6666666667%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-md-12) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(8.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.offset-left-md-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-left-md-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-left-md-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-left-md-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-left-md-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-left-md-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-right-md-0) {\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-right-md-1) {\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-right-md-2) {\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-right-md-3) {\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-right-md-4) {\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-right-md-5) {\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-md-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-md-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-md-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-md-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-md-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-md-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n}\n\@media only screen and (min-width: 1200px) {\n  :host(.columns-lg-1) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(100%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-lg-2) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(50%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-lg-3) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(33.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-lg-4) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(25%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-lg-6) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(16.6666666667%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.columns-lg-12) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(calc(8.3333333333%), auto));\n    margin-bottom: 0;\n  }\n\n  :host(.offset-left-lg-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-left-lg-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-left-lg-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-left-lg-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-left-lg-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-left-lg-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-right-lg-0) {\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-right-lg-1) {\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-right-lg-2) {\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-right-lg-3) {\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-right-lg-4) {\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-right-lg-5) {\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n\n  :host(.offset-lg-0) {\n    padding-left: calc(((100% + 8.33px) / 12) * 0);\n    padding-right: calc(((100% + 8.33px) / 12) * 0);\n  }\n\n  :host(.offset-lg-1) {\n    padding-left: calc(((100% + 8.33px) / 12) * 1);\n    padding-right: calc(((100% + 8.33px) / 12) * 1);\n  }\n\n  :host(.offset-lg-2) {\n    padding-left: calc(((100% + 8.33px) / 12) * 2);\n    padding-right: calc(((100% + 8.33px) / 12) * 2);\n  }\n\n  :host(.offset-lg-3) {\n    padding-left: calc(((100% + 8.33px) / 12) * 3);\n    padding-right: calc(((100% + 8.33px) / 12) * 3);\n  }\n\n  :host(.offset-lg-4) {\n    padding-left: calc(((100% + 8.33px) / 12) * 4);\n    padding-right: calc(((100% + 8.33px) / 12) * 4);\n  }\n\n  :host(.offset-lg-5) {\n    padding-left: calc(((100% + 8.33px) / 12) * 5);\n    padding-right: calc(((100% + 8.33px) / 12) * 5);\n  }\n}\n::slotted(*) {\n  margin: 0 var(--ku4-grid-column-gutter) !important;\n}\n\n:host(.row-gutter-xs) {\n  margin-bottom: calc(-1 * var(--ku4-grid-row-gutter-xs));\n}\n:host(.row-gutter-xs)::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-xs) !important;\n}\n:host(.row-gutter-xs) ::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-xs) !important;\n}\n\n:host(.row-gutter-sm) {\n  margin-bottom: calc(-1 * var(--ku4-grid-row-gutter-sm));\n}\n:host(.row-gutter-sm)::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-sm) !important;\n}\n:host(.row-gutter-sm) ::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-sm) !important;\n}\n\n:host(.row-gutter-md) {\n  margin-bottom: calc(-1 * var(--ku4-grid-row-gutter-md));\n}\n:host(.row-gutter-md)::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-md) !important;\n}\n:host(.row-gutter-md) ::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-md) !important;\n}\n\n:host(.row-gutter-lg) {\n  margin-bottom: calc(-1 * var(--ku4-grid-row-gutter-lg));\n}\n:host(.row-gutter-lg)::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-lg) !important;\n}\n:host(.row-gutter-lg) ::slotted(*) {\n  margin-bottom: var(--ku4-grid-row-gutter-lg) !important;\n}"; }
};

export { Ku4Grid as ku4_grid };
