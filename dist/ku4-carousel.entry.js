import { r as registerInstance, h, H as Host, g as getElement } from './index-93aadf64.js';
import './index-79290777.js';
import { d as dist_4 } from './index-4360c9bd.js';

class Rolodex {
    /**
     * @description Rolodex
     * @param {Array} list - An array of items to manage.
     */
    constructor(list) {
        this.list = [];
        this.head = 0;
        this.list = list;
    }
    get isEmpty() {
        return this.list.length < 1;
    }
    get index() {
        return this.head;
    }
    get length() {
        return this.list.length;
    }
    get current() {
        return this.list[this.head];
    }
    get next() {
        const { length } = this;
        let { head } = this;
        this.head = head++ < length - 1 ? head : 0;
        return this.current;
    }
    get prev() {
        const { length } = this;
        let { head } = this;
        this.head = --head < 0 ? length - 1 : head;
        return this.current;
    }
    get peekNext() {
        const { head, length } = this;
        return this.list[head + 1 < length - 1 ? head + 1 : 0];
    }
    get peekPrev() {
        const { head, length } = this;
        return this.list[head - 1 < 0 ? length - 1 : head - 1];
    }
}

const Ku4Carousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Display the next ku4-carousel-slide
     */
    async next() {
        return this.display('next');
    }
    /**
     * Display the previous ku4-carousel-slide
     */
    async previous() {
        return this.display('prev');
    }
    get currentSlideNumber() {
        return this.rolodex && this.rolodex.index + 1;
    }
    display(slide) {
        const { previous, current } = this.slideState;
        const next = this.rolodex[slide];
        if (previous) {
            previous.deactivate();
        }
        current.slideOut(slide);
        next.slideIn(slide);
        this.slideState = {
            previous: current,
            current: next,
        };
        return this;
    }
    componentDidLoad() {
        this.swipe = new dist_4(this.host, 20)
            .onLeft(() => this.next())
            .onRight(() => this.previous());
        this.rolodex = new Rolodex(this.host.querySelectorAll('ku4-carousel-slide'));
        this.rolodex.current.activate();
        this.slideState = { current: this.rolodex.current };
    }
    componentDidUnload() {
        if (this.swipe) {
            this.swipe.destroy();
        }
        if (this.timeout) {
            this.timeout.clear();
        }
    }
    render() {
        const { currentSlideNumber = 0 } = this;
        return (h(Host, { class: `current-slide-${currentSlideNumber}`, "aria-roledescription": "carousel" }, h("section", { class: "controls" }, h("button", { type: "button", class: "prev", onClick: () => this.previous(), "aria-label": "previous slide" }), h("button", { type: "button", class: "next", onClick: () => this.next(), "aria-label": "next slide" })), h("section", { class: "slide-container", "aria-live": "polite" }, h("slot", null)), this.rolodex && (h("section", { class: "pages" }, h("span", { class: "pages-text" }, `${currentSlideNumber} of ${this.rolodex.length}`)))));
    }
    get host() { return getElement(this); }
    static get style() { return "\@-webkit-keyframes ku4-carousel-enter-left {\n  0% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@keyframes ku4-carousel-enter-left {\n  0% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes ku4-carousel-enter-right {\n  0% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@keyframes ku4-carousel-enter-right {\n  0% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes ku4-carousel-exit-left {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n}\n\@keyframes ku4-carousel-exit-left {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: -100%;\n    opacity: 0;\n  }\n}\n\@-webkit-keyframes ku4-carousel-exit-right {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n}\n\@keyframes ku4-carousel-exit-right {\n  0% {\n    top: 0;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 100%;\n    opacity: 0;\n  }\n}\n:host {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  background-color: var(--ku4-carousel-background-color);\n}\n\n.slide-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.controls .next,\n.controls .prev {\n  position: absolute;\n  top: var(--ku4-carousel-controls-top);\n  border: var(--ku4-carousel-controls-border);\n  background-color: var(--ku4-carousel-controls-background-color);\n  font-family: var(--ku4-carousel-controls-font-family);\n  font-weight: var(--ku4-carousel-controls-font-weight);\n  font-size: var(--ku4-carousel-controls-font-size);\n  line-height: var(--ku4-carousel-controls-line-height);\n  line-spacing: var(--ku4-carousel-controls-line-spacing);\n  opacity: var(--ku4-carousel-controls-opacity);\n  z-index: 4;\n}\n.controls .next:focus,\n.controls .prev:focus {\n  background-color: var(--ku4-carousel-controls-focus-background-color);\n  outline: var(--ku4-carousel-controls-focus-outline);\n  opacity: var(--ku4-carousel-controls-focus-opacity);\n}\n.controls .next:hover,\n.controls .prev:hover {\n  background-color: var(--ku4-carousel-controls-hover-background-color);\n  opacity: var(--ku4-carousel-controls-hover-opacity);\n}\n\n.controls .next {\n  right: 0;\n  width: var(--ku4-carousel-controls-next-width);\n  height: var(--ku4-carousel-controls-next-height);\n  background-image: var(--ku4-carousel-controls-next-background-image);\n  background-repeat: var(--ku4-carousel-controls-next-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-next-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-next-background-position-y);\n  background-size: var(--ku4-carousel-controls-next-background-size);\n}\n.controls .next:focus {\n  background-image: var(--ku4-carousel-controls-next-focus-background-image);\n  background-repeat: var(--ku4-carousel-controls-next-focus-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-next-focus-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-next-focus-background-position-y);\n  background-size: var(--ku4-carousel-controls-next-focus-background-size);\n}\n.controls .next:hover {\n  background-image: var(--ku4-carousel-controls-next-hover-background-image);\n  background-repeat: var(--ku4-carousel-controls-next-hover-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-next-hover-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-next-hover-background-position-y);\n  background-size: var(--ku4-carousel-controls-next-hover-background-size);\n}\n\n.controls .prev {\n  left: 0;\n  width: var(--ku4-carousel-controls-next-width);\n  height: var(--ku4-carousel-controls-next-height);\n  background-image: var(--ku4-carousel-controls-previous-background-image);\n  background-repeat: var(--ku4-carousel-controls-previous-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-previous-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-previous-background-position-y);\n  background-size: var(--ku4-carousel-controls-previous-background-size);\n}\n.controls .prev:focus {\n  background-image: var(--ku4-carousel-controls-previous-focus-background-image);\n  background-repeat: var(--ku4-carousel-controls-previous-focus-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-previous-focus-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-previous-focus-background-position-y);\n  background-size: var(--ku4-carousel-controls-previous-focus-background-size);\n}\n.controls .prev:hover {\n  background-image: var(--ku4-carousel-controls-previous-hover-background-image);\n  background-repeat: var(--ku4-carousel-controls-previous-hover-background-repeat);\n  background-position-x: var(--ku4-carousel-controls-previous-hover-background-position-x);\n  background-position-y: var(--ku4-carousel-controls-previous-hover-background-position-y);\n  background-size: var(--ku4-carousel-controls-previous-hover-background-size);\n}\n\n.pages {\n  position: absolute;\n  top: var(--ku4-carousel-pages-top);\n  bottom: var(--ku4-carousel-pages-bottom);\n  width: 100%;\n  height: var(--ku4-carousel-pages-height);\n  background-color: var(--ku4-carousel-pages-background-color);\n  opacity: var(--ku4-carousel-pages-opacity);\n  text-align: center;\n  z-index: 3;\n}\n\n.pages-text {\n  display: inline-block;\n  padding: var(--ku4-carousel-pages-text-padding);\n  font-family: var(--ku4-carousel-pages-text-font-family);\n  font-weight: var(--ku4-carousel-pages-text-font-weight);\n  font-size: var(--ku4-carousel-pages-text-font-size);\n  line-height: var(--ku4-carousel-pages-text-line-height);\n  color: var(--ku4-carousel-pages-text-color);\n}\n\n::slotted(*) {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  top: 0;\n  left: -100%;\n  width: 100%;\n}\n\n::slotted(.inactive) {\n  position: absolute;\n}\n\n::slotted(.inactive.prev) {\n  -webkit-animation-name: var(--ku4-carousel-animation-inactive-prev-name, ku4-carousel-exit-right);\n  animation-name: var(--ku4-carousel-animation-inactive-prev-name, ku4-carousel-exit-right);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n::slotted(.inactive.next) {\n  -webkit-animation-name: var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);\n  animation-name: var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n::slotted(.active) {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n::slotted(.active.prev) {\n  -webkit-animation-name: var(--ku4-carousel-animation-active-prev-name, ku4-carousel-enter-left);\n  animation-name: var(--ku4-carousel-animation-active-prev-name, ku4-carousel-enter-left);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n::slotted(.active.next) {\n  -webkit-animation-name: var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);\n  animation-name: var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);\n  -webkit-animation-duration: var(--ku4-carousel-animation-duration);\n  animation-duration: var(--ku4-carousel-animation-duration);\n  -webkit-animation-timing-function: var(--ku4-carousel-animation-timing-function);\n  animation-timing-function: var(--ku4-carousel-animation-timing-function);\n}\n\n\@media (hover: hover) {\n  .controls:hover {\n    background-color: var(--ku4-carousel-controls-focus-background-color);\n  }\n}"; }
};

export { Ku4Carousel as ku4_carousel };
