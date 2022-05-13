import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-65e7ba77.js';
import { t } from './index-5bc509ed.js';
import { D as Document, K as Key } from './index-4eb619fd.js';

const ku4ModalCss = "@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@-webkit-keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}@keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto;-webkit-transform-style:var(--ku4-modal-transform-style, initial);transform-style:var(--ku4-modal-transform-style, initial)}.ku4-modal-content{position:relative;top:0;left:0}.ku4-modal-overlay{position:fixed;display:-ms-flexbox;display:flex;top:0;left:0;width:100%;height:100%;opacity:0;background:var(--ku4-modal-overlay-background, #000)}:host([visible]){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index, 5)}:host([visible]) .ku4-modal-content{-webkit-animation-name:ku4-modal-content-enter;animation-name:ku4-modal-content-enter;-webkit-animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);-webkit-transform:var(--ku4-modal-content-transform, none);transform:var(--ku4-modal-content-transform, none);opacity:var(--ku4-modal-content-opacity, 1);z-index:calc(var(--ku4-modal-z-index, 5) + 1)}:host([visible]) .ku4-modal-overlay{-webkit-animation-name:ku4-modal-overlay-enter;animation-name:ku4-modal-overlay-enter;-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);-webkit-transform:var(--ku4-modal-overlay-transform, none);transform:var(--ku4-modal-overlay-transform, none);opacity:var(--ku4-modal-overlay-opacity, 0.4);z-index:calc(var(--ku4-modal-z-index, 5))}:host([visible=false]){display:none}";

const Ku4Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didDisplay = createEvent(this, "display", 7);
    this.didDismiss = createEvent(this, "dismiss", 7);
    /**
     * Visible when true
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.visible = false;
    /**
     * DEPRECATED - Misspelled use `dismissible`
     * Will not dismiss by clicking and touching outside when false;
     */
    this.dismissable = true;
    /**
     * Will not dismiss by clicking and touching outside when false;
     */
    this.dismissible = this.dismissable;
  }
  handleVisibility(value) {
    if (value) {
      Document.preventScroll();
      if (t.exists(this.trap)) {
        this.trap.activate();
      }
    }
    else {
      Document.resumeScroll();
      if (t.exists(this.trap)) {
        this.trap.deactivate();
      }
    }
  }
  handleKeyUp(e) {
    if (this.visible && Key.esc.didFire(e)) {
      this.dismiss();
    }
  }
  /**
   * Display modal
   */
  async display() {
    this.visible = true;
    this.didDisplay.emit(this);
  }
  /**
   * Dismiss modal
   */
  async dismiss() {
    this.visible = false;
    this.didDismiss.emit(this);
  }
  componentDidLoad() {
    try {
      this.trap = this.host.querySelector('ku4-focus-trap') ||
        (document.querySelector(this.focusTrap));
      this.handleVisibility(this.visible);
    }
    catch (e) {
      throw new Error(`Cannot connect ku4-focus-trap: ${e.messsage}`);
    }
  }
  render() {
    return (h(Host, { role: "dialog", "aria-modal": "true" }, h("section", { class: "ku4-modal-content" }, h("slot", null)), h("section", { class: "ku4-modal-overlay", onClick: () => this.dismissible && this.dismiss(), "aria-hidden": "true" })));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "visible": ["handleVisibility"]
  }; }
};
Ku4Modal.style = ku4ModalCss;

export { Ku4Modal as ku4_modal };
