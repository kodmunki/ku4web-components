import { r as registerInstance, h, c as getElement } from './core-9ffb600c.js';
import './index-2ab7977b.js';
import { a as dist_3 } from './index-082ab942.js';

const Ku4TabContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleHpTabClick({ target }) {
        this.open(target);
    }
    handleHpTabKeyUp({ target, detail: e }) {
        if (dist_3.left.didFire(e)) {
            this.open(this.previous(target));
        }
        if (dist_3.right.didFire(e)) {
            this.open(this.next(target));
        }
    }
    /**
     *
     * @param {Ku4Tab} tab - ku4-tab target to open.
     */
    async open(tab) {
        return this.reset().select(tab);
    }
    select(tab) {
        tab.select();
        return this;
    }
    deselect(tab) {
        tab.deselect();
        return this;
    }
    reset() {
        this.tabs.forEach(tab => this.deselect(tab));
        return this;
    }
    previous(tab) {
        const { tabs, tabs: { length } } = this;
        const index = tabs.indexOf(tab) - 1;
        return tabs[index > -1 ? index : length - 1];
    }
    next(tab) {
        const { tabs, tabs: { length } } = this;
        const index = tabs.indexOf(tab) + 1;
        return tabs[index < length ? index : 0];
    }
    componentDidRender() {
        const panels = [].slice.call(this.host.querySelectorAll('ku4-tab-panel'));
        this.tabs = [].slice.call(this.host.querySelectorAll('ku4-tab'));
        this.tabs.forEach((tab, index) => tab.connect(panels[index]));
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get style() { return ":host {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n:host(:not(.hydrated)) {\n  visibility: hidden;\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    -ms-flex-pack: var(--ku4-tab-container-justify-content);\n    justify-content: var(--ku4-tab-container-justify-content);\n  }\n\n  :host([role=tablist]) {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n}"; }
};

export { Ku4TabContainer as ku4_tab_container };
