import { r as registerInstance, h, H as Host } from './index-01bb90c0.js';
import { b as dist_2 } from './index-79290777.js';

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
        return (h(Host, { class: `${selected ? 'selected' : ''}`, "aria-hidden": selected ? 'false' : 'true' }, h("section", { id: panelId, class: `tab-panel ${selected ? 'selected' : ''}`, role: "tabpanel", tabIndex: 0, "aria-labelledby": tab && tab.tabId }, h("slot", null))));
    }
    static get style() { return ":host {\n  display: block;\n  width: 100%;\n  max-height: 0;\n  -webkit-transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n  transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n  overflow: hidden;\n}\n\n:host(.selected) {\n  max-height: var(--ku4-tab-panel-max-height, 100vh);\n  -webkit-transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n  transition: max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    -ms-flex-order: 2;\n    order: 2;\n    max-height: initial;\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  :host(.selected) {\n    max-height: initial;\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  .tab-panel {\n    display: none;\n    margin-top: -1px;\n    overflow: auto;\n    -webkit-transition: none;\n    transition: none;\n  }\n  .tab-panel.selected {\n    display: block;\n    -webkit-transition: none;\n    transition: none;\n  }\n}"; }
};

export { Ku4TabPanel as ku4_tab_panel };
