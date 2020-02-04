import { r as registerInstance, h, H as Host } from './core-9ffb600c.js';

const Ku4Drawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Open size of this drawer (any valid CSS width or height value)
         */
        this.size = '20%';
    }
    /**
     * Open drawer
     */
    async open() {
        this.visible = true;
    }
    /**
     * Close drawer
     */
    async close() {
        this.visible = false;
    }
    /**
     * Toggle drawer
     */
    async toggle() {
        this.visible = !this.visible;
    }
    get positionClass() {
        const { bottom, top, right } = this;
        switch (true) {
            case bottom: return 'bottom';
            case top: return 'top';
            case right: return 'right';
            default: return 'left';
        }
    }
    get sizeValue() {
        const { bottom, top, right, size } = this;
        switch (true) {
            case bottom: return { 'max-height': size };
            case top: return { 'max-height': size };
            case right: return { 'max-width': size };
            default: return { 'max-width': size };
        }
    }
    render() {
        const { positionClass, sizeValue, visible } = this;
        return (h(Host, { class: `${positionClass} ${visible ? 'visible' : ''}`, style: sizeValue, "aria-hidden": visible ? 'false' : 'true' }, h("slot", null)));
    }
    static get style() { return ":host {\n  position: fixed;\n  overflow: hidden;\n  z-index: var(--ku4-drawer-z-index, 1);\n}\n\n:host(:not(.hydrated)) {\n  visibility: hidden;\n}\n\n:host(.bottom) {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}\n\n:host(.bottom.visible) {\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}\n\n:host(.left) {\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.left.visible) {\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.right) {\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.right.visible) {\n  right: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: width 0.4s ease;\n  transition: width 0.4s ease;\n}\n\n:host(.top) {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}\n\n:host(.top.visible) {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n}"; }
};

export { Ku4Drawer as ku4_drawer };
