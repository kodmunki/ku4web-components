import { r as registerInstance, h, H as Host } from './core-9ffb600c.js';

const Ku4CarouselSlide = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.classList = '';
    }
    /**
     * Move this slide in to view.
     * @param {string} direction - Direction to move.
     */
    async slideIn(direction) {
        this.active = true;
        this.classList = `active ${direction}`;
    }
    /**
     * Move this slide out of view.
     * @param {string} direction - Direction to move.
     */
    async slideOut(direction) {
        this.active = false;
        this.classList = `inactive  ${direction}`;
    }
    /**
     * Set this slide to active.
     */
    async activate() {
        this.active = true;
        this.classList = 'active';
    }
    /**
     * Set this slide to inactive.
     */
    async deactivate() {
        this.active = false;
        this.classList = '';
    }
    render() {
        const { active, classList } = this;
        return (h(Host, { class: `${classList}`, "aria-hidden": active ? 'false' : 'true', "aria-roledescription": "slide" }, h("slot", null)));
    }
    static get style() { return ":host {\n  overflow: hidden;\n}"; }
};

export { Ku4CarouselSlide as ku4_carousel_slide };
