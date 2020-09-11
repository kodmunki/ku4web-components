import { r as registerInstance, h, e as Host, g as getElement } from './index-c6f39e4e.js';
import { l } from './index-4718bc14.js';
import { d } from './index-4052239c.js';

const ku4CarouselCss = "@keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}@keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}@keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}@keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}:host{position:relative;display:flex;flex-direction:column;align-items:center;overflow:hidden;background-color:var(--ku4-carousel-background-color, #fff)}.slide-container{position:relative;width:100%;height:100%;overflow:hidden}.controls .next,.controls .prev{position:absolute;top:var(--ku4-carousel-controls-top, 0);border:var(--ku4-carousel-controls-border, none);background-color:var(--ku4-carousel-controls-background-color, #fff);font-family:var(--ku4-carousel-controls-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-controls-font-weight, 400);font-size:var(--ku4-carousel-controls-font-size, 8px);line-height:var(--ku4-carousel-controls-line-height, 12px);opacity:var(--ku4-carousel-controls-opacity, 0.2);z-index:var(--ku4-carousel-controls-z-index, 2)}.controls .next:focus,.controls .prev:focus{background-color:var(--ku4-carousel-controls-focus-background-color, transparent);outline:var(--ku4-carousel-controls-focus-outline, none);opacity:var(--ku4-carousel-controls-focus-opacity, 0.2)}.controls .next:hover,.controls .prev:hover{background-color:var(--ku4-carousel-controls-hover-background-color, transparent);opacity:var(--ku4-carousel-controls-hover-opacity, 1)}.controls .next{right:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-next-background-image);background-repeat:var(--ku4-carousel-controls-next-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-background-size, 100% 100%)}.controls .next:focus{background-image:var(--ku4-carousel-controls-next-focus-background-image);background-repeat:var(--ku4-carousel-controls-next-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-focus-background-size, 100% 100%)}.controls .next:hover{background-image:var(--ku4-carousel-controls-next-hover-background-image);background-repeat:var(--ku4-carousel-controls-next-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-hover-background-size, 100% 100%)}.controls .prev{left:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-previous-background-image);background-repeat:var(--ku4-carousel-controls-previous-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-background-size, 100% 100%)}.controls .prev:focus{background-image:var(--ku4-carousel-controls-previous-focus-background-image);background-repeat:var(--ku4-carousel-controls-previous-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-focus-background-size, 100% 100%)}.controls .prev:hover{background-image:var(--ku4-carousel-controls-previous-hover-background-image);background-repeat:var(--ku4-carousel-controls-previous-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-hover-background-size, 100% 100%)}.pages{position:absolute;top:var(--ku4-carousel-pages-top, auto);bottom:var(--ku4-carousel-pages-bottom, 0);width:var(--ku4-carousel-pages-width, auto);height:var(--ku4-carousel-pages-height, 20px);background-color:var(--ku4-carousel-pages-background-color, transparent);opacity:var(--ku4-carousel-pages-opacity, 0.5);text-align:center;z-index:3}.pages-text{display:inline-block;padding:var(--ku4-carousel-pages-text-padding, 4px);font-family:var(--ku4-carousel-pages-text-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-pages-text-font-weight, 600);font-size:var(--ku4-carousel-pages-text-font-size, 14px);line-height:var(--ku4-carousel-pages-text-line-height, 16px);color:var(--ku4-carousel-pages-text-color, #aaa)}::slotted(*){position:absolute;display:flex;flex-direction:column;top:0;left:-100%;width:100%;box-sizing:border-box}::slotted(.inactive){position:absolute;height:100%}::slotted(.inactive.prev){animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.inactive.next){animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.active){position:relative;top:0;left:0;width:auto;height:100%;z-index:1}::slotted(.active.prev){animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease)}::slotted(.active.next){animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease)}@media (hover: hover){.controls:hover{background-color:var(--ku4-carousel-controls-focus-background-color, #fff)}}";

const Ku4Carousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Sets the distance a touch must travel before
     * activating a swipe.
     */
    this.swipeTolerance = 44;
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
    const { rolodex } = this;
    return rolodex && (rolodex.isEmpty ? 0 : rolodex.index + 1);
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
  componentWillLoad() {
    this.swipe = new d(this.host, this.swipeTolerance)
      .onLeft(() => this.next())
      .onRight(() => this.previous());
    let slides;
    try {
      slides = this.host.querySelectorAll(':scope > ku4-carousel-slide');
    }
    catch (_e) {
      slides = [].slice.call(this.host.querySelectorAll('ku4-carousel-slide'))
        .reduce((acc, item) => {
        if (item.parentNode === this.host) {
          acc.push(item);
        }
        return acc;
      }, []);
    }
    this.rolodex = new l(slides);
    (this.rolodex.current &&
      this.rolodex.current.activate) &&
      this.rolodex.current.activate();
    this.slideState = { current: this.rolodex.current };
  }
  disconnectedCallback() {
    if (this.swipe) {
      this.swipe.destroy();
    }
  }
  render() {
    const { currentSlideNumber = 0 } = this;
    const hasSlides = this.rolodex && (this.rolodex.length > 1);
    return (h(Host, { "aria-roledescription": "carousel", "current-slide": currentSlideNumber }, hasSlides && (h("section", { class: "controls" }, h("button", { type: "button", class: "prev", onClick: () => this.previous(), "aria-label": "previous slide" }), h("button", { type: "button", class: "next", onClick: () => this.next(), "aria-label": "next slide" }))), h("section", { class: "slide-container", "aria-live": "polite" }, h("slot", null)), hasSlides && (h("section", { class: "pages" }, h("span", { class: "pages-text" }, `${currentSlideNumber} of ${this.rolodex.length}`)))));
  }
  get host() { return getElement(this); }
};
Ku4Carousel.style = ku4CarouselCss;

export { Ku4Carousel as ku4_carousel };
