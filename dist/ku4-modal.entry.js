import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-93aadf64.js';
import { a as dist_1$1 } from './index-79290777.js';
import { c as dist_1 } from './index-4360c9bd.js';

const Ku4Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Visible when true
         */
        // eslint-disable-next-line @stencil/strict-mutable
        this.visible = false;
        this.displayed = createEvent(this, "ku4-modal-displayed", 7);
        this.dismissed = createEvent(this, "ku4-modal-dismissed", 7);
    }
    handleVisibility(value) {
        if (value) {
            dist_1.preventScroll();
            if (dist_1$1.exists(this.trap)) {
                this.trap.activate();
            }
        }
        else {
            dist_1.resumeScroll();
            if (dist_1$1.exists(this.trap)) {
                this.trap.deactivate();
            }
        }
    }
    /**
     * Display modal
     */
    async display() {
        this.visible = true;
        this.displayed.emit(this);
    }
    /**
     * Dismiss modal
     */
    async dismiss() {
        this.visible = false;
        this.dismissed.emit(this);
    }
    componentDidLoad() {
        try {
            this.trap = this.host.querySelector('ku4-focus-trap') ||
                (document.querySelector(this.focusTrap));
        }
        catch (e) {
            throw new Error(`Cannot connect focus-trap: ${e.messsage}`);
        }
    }
    render() {
        const { visible } = this;
        return (h(Host, { class: visible ? 'visible' : '', "aria-modal": "true" }, h("section", { class: "overlay", onClick: () => this.dismiss(), "aria-hidden": "true" }), h("section", { class: "content" }, h("slot", null))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "visible": ["handleVisibility"]
    }; }
    static get style() { return "\@-webkit-keyframes ku4-modal-content-enter {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  30% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\@keyframes ku4-modal-content-enter {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  30% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes ku4-modal-overlay-enter {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\@keyframes ku4-modal-overlay-enter {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n:host {\n  position: fixed;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: transparent;\n  overflow: auto;\n}\n\n.content {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: var(--ku4-modal-overlay-background-color, #000);\n}\n\n:host(.visible) {\n  display: -ms-flexbox;\n  display: flex;\n  z-index: var(--ku4-modal-z-index, 5);\n}\n\n:host(.visible) .content {\n  -webkit-animation-name: var(--ku4-modal-content-animation, ku4-modal-content-enter);\n  animation-name: var(--ku4-modal-content-animation, ku4-modal-content-enter);\n  -webkit-animation-duration: var(--ku4-modal-content-animation-duration, 0.4s);\n  animation-duration: var(--ku4-modal-content-animation-duration, 0.4s);\n  -webkit-animation-timing-function: var(--ku4-modal-content-animation-timing-function, ease);\n  animation-timing-function: var(--ku4-modal-content-animation-timing-function, ease);\n}\n\n:host(.visible) .overlay {\n  position: fixed;\n  display: -ms-flexbox;\n  display: flex;\n  opacity: 0.4;\n  -webkit-animation-name: var(--ku4-modal-overlay-animation, ku4-modal-overlay-enter);\n  animation-name: var(--ku4-modal-overlay-animation, ku4-modal-overlay-enter);\n  -webkit-animation-duration: var(--ku4-modal-overlay-animation-duration, 0.4s);\n  animation-duration: var(--ku4-modal-overlay-animation-duration, 0.4s);\n  -webkit-animation-timing-function: var(--ku4-modal-overlay-animation-timing-function, ease);\n  animation-timing-function: var(--ku4-modal-overlay-animation-timing-function, ease);\n}\n\n::slotted(*) {\n  position: relative;\n}"; }
};

export { Ku4Modal as ku4_modal };
