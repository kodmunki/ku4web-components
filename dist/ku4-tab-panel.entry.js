import { r as registerInstance, h, H as Host } from './core-9ffb600c.js';
import { b as dist_2 } from './index-2ab7977b.js';

const Ku4TabPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Set true to display panel
         */
        this.selected = false;
        /**
         * Optional unique panel id
         */
        this.panelId = dist_2();
    }
    /**
     * Set this panel as selected.
     */
    async select() {
        this.selected = true;
    }
    /**
     * Unset this panel as selected.
     */
    async deselect() {
        this.selected = false;
    }
    /**
     * Connect this panel to a tab.
     * @param {Ku4Tab} tab - Tab to connect to this panel
     */
    async connect(tab) {
        tab.$assignPanel(this);
        this.tab = tab;
    }
    render() {
        const { panelId, selected, tab } = this;
        return (h(Host, { "aria-hidden": selected ? 'false' : 'true' }, h("section", { id: panelId, class: `tab-panel ${selected ? 'selected' : ''}`, role: "tabpanel", tabindex: 0, "aria-labelledby": tab && tab.tabId }, h("slot", null))));
    }
    static get style() { return ":host {\n  display: block;\n  width: 100%;\n}\n\n.tab-panel {\n  display: block;\n  max-height: 0;\n  padding: var(--ku4-tab-panel-padding);\n  border-bottom: var(--ku4-tab-panel-border);\n  overflow: hidden;\n  -webkit-transition: max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;\n  transition: max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;\n}\n.tab-panel.selected {\n  max-height: 100%;\n  padding: var(--ku4-tab-panel-selected-padding);\n  -webkit-transition: max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;\n  transition: max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n\n  .tab-panel {\n    display: none;\n    padding: var(--ku4-tab-panel-padding);\n    margin-top: -1px;\n    border-top: var(--ku4-tab-panel-border);\n    overflow: auto;\n    -webkit-transition: none;\n    transition: none;\n  }\n  .tab-panel.selected {\n    display: block;\n    padding: var(--ku4-tab-panel-selected-padding);\n    -webkit-transition: none;\n    transition: none;\n  }\n}"; }
};

export { Ku4TabPanel as ku4_tab_panel };
