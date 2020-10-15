'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');
const index$2 = require('./index-d80b2fdd.js');
const index$1 = require('./index-3e6df2cb.js');

const ku4ModalCss = "@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@-webkit-keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}@keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto;-webkit-transform-style:var(--ku4-modal-transform-style, initial);transform-style:var(--ku4-modal-transform-style, initial)}.ku4-modal-content{position:relative;top:0;left:0}.ku4-modal-overlay{position:fixed;display:-ms-flexbox;display:flex;top:0;left:0;width:100%;height:100%;opacity:0;background:var(--ku4-modal-overlay-background, #000)}:host([visible]){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index, 5)}:host([visible]) .ku4-modal-content{-webkit-animation-name:ku4-modal-content-enter;animation-name:ku4-modal-content-enter;-webkit-animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);-webkit-transform:var(--ku4-modal-content-transform, none);transform:var(--ku4-modal-content-transform, none);opacity:var(--ku4-modal-content-opacity, 1);z-index:calc(var(--ku4-modal-z-index, 5) + 1)}:host([visible]) .ku4-modal-overlay{-webkit-animation-name:ku4-modal-overlay-enter;animation-name:ku4-modal-overlay-enter;-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);-webkit-transform:var(--ku4-modal-overlay-transform, none);transform:var(--ku4-modal-overlay-transform, none);opacity:var(--ku4-modal-overlay-opacity, 0.4);z-index:calc(var(--ku4-modal-z-index, 5))}:host([visible=false]){display:none}";

const Ku4Modal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.displayed = index.createEvent(this, "ku4ModalDisplay", 7);
    this.dismissed = index.createEvent(this, "ku4ModalDismiss", 7);
    /**
     * Visible when true
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.visible = false;
  }
  handleVisibility(value) {
    if (value) {
      index$1.r.preventScroll();
      if (index$2.t.exists(this.trap)) {
        this.trap.activate();
      }
    }
    else {
      index$1.r.resumeScroll();
      if (index$2.t.exists(this.trap)) {
        this.trap.deactivate();
      }
    }
  }
  handleKeyUp(e) {
    if (this.visible && index$1.l.esc.didFire(e)) {
      this.dismiss();
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
      throw new Error(`Cannot connect ku4-focus-trap: ${e.messsage}`);
    }
  }
  render() {
    return (index.h(index.Host, { "aria-modal": "true" }, index.h("section", { class: "ku4-modal-content" }, index.h("slot", null)), index.h("section", { class: "ku4-modal-overlay", onClick: () => this.dismiss(), "aria-hidden": "true" })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "visible": ["handleVisibility"]
  }; }
};
Ku4Modal.style = ku4ModalCss;

exports.ku4_modal = Ku4Modal;
