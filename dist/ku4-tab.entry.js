import { r as registerInstance, c as createEvent, h, H as Host } from './index-01bb90c0.js';
import { b as dist_2 } from './index-79290777.js';

const Ku4Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Active when true
         */
        this.selected = false;
        /**
         * Optional unique tab id
         */
        this.tabId = dist_2();
        this.tabClicked = createEvent(this, "ku4-tab-click", 7);
        this.tabKeyUp = createEvent(this, "ku4-tab-keyup", 7);
    }
    /**
     * Set this tab as selected.
     */
    async select() {
        this.selected = true;
        this.panel.select();
        this.buttonRef.focus();
    }
    /**
     * Unset this tab as selected
     */
    async deselect() {
        this.selected = false;
        this.panel.deselect();
    }
    /**
     * Connect this tab to a pannel
     * @param {HTMLElement} panel - The target ku4-tab-panel HTMLElement
     */
    async connect(panel) {
        panel.connect(this);
    }
    /**
     * internal
     * @param {Ku4TabPanel} panel - panel to assign to this tab
     */
    $assignPanel(panel) {
        this.panel = panel;
    }
    render() {
        const { tabId, selected, name, panel } = this;
        return (h(Host, { role: "tab" }, h("button", { ref: (ref) => { this.buttonRef = ref; }, id: tabId, type: "button", class: `tab ${selected ? 'selected' : ''}`, onClick: e => this.tabClicked.emit(e), onKeyUp: e => this.tabKeyUp.emit(e), tabIndex: selected ? 0 : -1, "aria-controls": panel && panel.panelId, "aria-selected": selected ? 'true' : 'false' }, h("span", { class: "name" }, name))));
    }
    static get style() { return "/** START | style resets **/\nbutton {\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  -webkit-appearance: none;\n}\n\n/** END | style resets **/\n:host {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.tab {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%;\n  background-color: var(--ku4-tab-background-color);\n  color: var(--ku4-tab-text-color);\n  text-align: var(--ku4-tab-text-align);\n}\n.tab .name {\n  padding: var(--ku4-tab-padding);\n}\n.tab:focus {\n  background-color: var(--ku4-tab-focus-background-color);\n  color: var(--ku4-tab-focus-text-color);\n  z-index: var(--ku4-tab-focus-z-index);\n}\n.tab:hover {\n  background-color: var(--ku4-tab-hover-background-color);\n  color: var(--ku4-tab-hover-text-color);\n}\n.tab:active {\n  background-color: var(--ku4-tab-active-background-color);\n  color: var(--ku4-tab-active-text-color);\n}\n.tab.selected {\n  padding-bottom: var(--ku4-tab-selected-padding-bottom);\n  border-top: var(--ku4-tab-border);\n  border-bottom: var(--ku4-tab-border);\n  background-color: var(--ku4-tab-selected-background-color);\n  color: var(--ku4-tab-selected-text-color);\n}\n\n\@media only screen and (min-width: 768px) {\n  :host {\n    width: auto;\n  }\n\n  :host(:first-of-type) .tab {\n    border-left: var(--ku4-tab-border);\n  }\n\n  .tab {\n    position: relative;\n    border: var(--ku4-tab-border);\n    border-radius: var(--ku4-tab-border-radius) var(--ku4-tab-border-radius) 0 0;\n    border-left: none;\n  }\n  .tab.selected {\n    border-bottom: none;\n  }\n}"; }
};

export { Ku4Tab as ku4_tab };
