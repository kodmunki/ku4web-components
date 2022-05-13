import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-65e7ba77.js';
import { L, Y, c } from './index-5bc509ed.js';
import { S as Swipe } from './index-4eb619fd.js';

const ku4CarouselCss = "@-webkit-keyframes ku4-carousel-enter-left{0%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@keyframes ku4-carousel-enter-left{0%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes ku4-carousel-enter-right{0%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@keyframes ku4-carousel-enter-right{0%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes ku4-carousel-exit-left{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}}@keyframes ku4-carousel-exit-left{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}}@-webkit-keyframes ku4-carousel-exit-right{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}}@keyframes ku4-carousel-exit-right{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;overflow:hidden;background-color:var(--ku4-carousel-background-color, #fff)}.slide-container{position:relative;width:100%;height:100%;overflow:hidden}.controls .next,.controls .prev{position:absolute;display:var(--ku4-carousel-controls-display, block);top:var(--ku4-carousel-controls-top, 0);border:var(--ku4-carousel-controls-border, none);background-color:var(--ku4-carousel-controls-background-color, #fff);font-family:var(--ku4-carousel-controls-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-controls-font-weight, 400);font-size:var(--ku4-carousel-controls-font-size, 8px);line-height:var(--ku4-carousel-controls-line-height, 12px);opacity:var(--ku4-carousel-controls-opacity, 0.2);z-index:var(--ku4-carousel-controls-z-index, 2)}.controls .next:focus,.controls .prev:focus{background-color:var(--ku4-carousel-controls-focus-background-color, transparent);outline:var(--ku4-carousel-controls-focus-outline, none);opacity:var(--ku4-carousel-controls-focus-opacity, 0.2)}.controls .next:hover,.controls .prev:hover{background-color:var(--ku4-carousel-controls-hover-background-color, transparent);opacity:var(--ku4-carousel-controls-hover-opacity, 1)}.controls .next{right:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-next-background-image);background-repeat:var(--ku4-carousel-controls-next-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-background-size, 100% 100%)}.controls .next:focus{background-image:var(--ku4-carousel-controls-next-focus-background-image);background-repeat:var(--ku4-carousel-controls-next-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-focus-background-size, 100% 100%)}.controls .next:hover{background-image:var(--ku4-carousel-controls-next-hover-background-image);background-repeat:var(--ku4-carousel-controls-next-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-hover-background-size, 100% 100%)}.controls .prev{left:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-previous-background-image);background-repeat:var(--ku4-carousel-controls-previous-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-background-size, 100% 100%)}.controls .prev:focus{background-image:var(--ku4-carousel-controls-previous-focus-background-image);background-repeat:var(--ku4-carousel-controls-previous-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-focus-background-size, 100% 100%)}.controls .prev:hover{background-image:var(--ku4-carousel-controls-previous-hover-background-image);background-repeat:var(--ku4-carousel-controls-previous-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-hover-background-size, 100% 100%)}.pages{position:absolute;display:var(--ku4-carousel-pages-display, block);top:var(--ku4-carousel-pages-top, auto);bottom:var(--ku4-carousel-pages-bottom, 4px);width:var(--ku4-carousel-pages-width, auto);height:var(--ku4-carousel-pages-height, 20px);background-color:var(--ku4-carousel-pages-background-color, transparent);opacity:var(--ku4-carousel-pages-opacity, 0.5);text-align:center;z-index:3}.pages-text{display:inline-block;padding:var(--ku4-carousel-pages-text-padding, 4px);font-family:var(--ku4-carousel-pages-text-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-pages-text-font-weight, 600);font-size:var(--ku4-carousel-pages-text-font-size, 14px);line-height:var(--ku4-carousel-pages-text-line-height, 16px);color:var(--ku4-carousel-pages-text-color, #aaa)}::slotted(*){position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;top:0;left:-100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(.inactive){position:absolute;height:100%;left:0}::slotted(.inactive.prev){-webkit-animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}::slotted(.inactive.next){-webkit-animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}::slotted(.active){position:relative;top:0;left:0;width:auto;height:100%;z-index:1}::slotted(.active.prev){-webkit-animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}::slotted(.active.next){-webkit-animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (hover: hover){.controls:hover{background-color:var(--ku4-carousel-controls-focus-background-color, #fff)}}";

const Ku4Carousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didSlide = createEvent(this, "slide", 7);
    /**
     * Sets the distance, in pixels, a touch must travel
     * before activating a swipe.
     */
    this.swipeTolerance = 44;
    /**
     * Will start this carousel in auto scroll mode
     */
    this.auto = false;
    /**
     * Prevents touch swiping
     */
    this.noSwipe = false;
    /**
     * Delay in millisecond between slide changes
     * when running in auto
     */
    this.delay = 8000;
    this.interval = new L(this.delay).onInterval(() => {
      if (this.host.isConnected) {
        this.display('next');
      }
      else {
        this.disconnectedCallback();
      }
    });
    this.handleMouse = this.handleMouse.bind(this);
  }
  /**
   * Display the next ku4-carousel-slide
   */
  async next() {
    if (!this.hasSlides) {
      return this;
    }
    await this.pause();
    return this.display('next');
  }
  /**
   * Display the previous ku4-carousel-slide
   */
  async previous() {
    if (!this.hasSlides) {
      return this;
    }
    await this.pause();
    return this.display('prev');
  }
  /**
   * Slide to the slide number specified.
   * @param {number|string} slide - Slide number or slide name to slide to.
   */
  async slideTo(slide) {
    await this.pause();
    const { slides } = this;
    const value = isNaN(slide)
      ? slides.findIndex(s => s.getAttribute('name') === slide) + 1
      : parseInt(slide);
    if (!(value === this.currentSlideNumber || value < 1 || this.rolodex.length < value)) {
      const move = value - this.currentSlideNumber;
      const slide = move < 0 ? 'prev' : 'next';
      let count = Math.abs(move);
      while (0 < --count) {
        await Y(10).then(() => this.rolodex[slide]);
      }
      this.display(slide);
    }
  }
  /**
   * Pause auto slide change
   */
  async pause() {
    this.interval.clear();
  }
  /**
   * Start auto slide change
   */
  async play() {
    const { auto, interval } = this;
    auto && interval.start();
  }
  get slides() {
    return [].slice.call(this.host.children);
  }
  get hasSlides() {
    return this.rolodex && (this.rolodex.length > 1);
  }
  get currentSlideNumber() {
    const { rolodex } = this;
    return rolodex && (rolodex.isEmpty ? 0 : rolodex.index + 1);
  }
  display(slide) {
    window.requestAnimationFrame(() => {
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
      this.didSlide.emit(this.currentSlideNumber);
    });
    return this;
  }
  handleMouse(e) {
    if (!this.host.contains(e.relatedTarget)) {
      this.play();
    }
  }
  componentWillLoad() {
    if (!this.noSwipe) {
      this.swipe = new Swipe(this.host, this.swipeTolerance)
        .onLeft(() => this.next())
        .onRight(() => this.previous());
    }
    let slides;
    try {
      slides = this.host.querySelectorAll(':scope > ku4-carousel-slide');
    }
    catch (e) {
      slides = [].slice.call(this.host.querySelectorAll('ku4-carousel-slide'))
        .reduce((acc, item) => {
        if (item.parentNode === this.host) {
          acc.push(item);
        }
        return acc;
      }, []);
    }
    this.rolodex = new c(slides);
    (this.rolodex.current &&
      this.rolodex.current.activate) &&
      this.rolodex.current.activate();
    this.slideState = { current: this.rolodex.current };
    if (this.auto) {
      this.host.addEventListener('mouseout', this.handleMouse);
      this.play();
    }
  }
  connectedCallback() {
    if (this.swipe) {
      this.swipe.destroy();
    }
    this.host.removeEventListener('mouseout', this.handleMouse);
    this.interval.clear();
  }
  disconnectedCallback() {
    if (this.swipe) {
      this.swipe.destroy();
    }
    this.host.removeEventListener('mouseout', this.handleMouse);
    this.interval.clear();
  }
  render() {
    const { hasSlides, currentSlideNumber = 1 } = this;
    return (h(Host, { "aria-roledescription": "carousel", current: currentSlideNumber }, hasSlides && (h("section", { class: "controls" }, h("button", { type: "button", class: "prev", onClick: () => this.previous(), "aria-label": "previous slide" }), h("button", { type: "button", class: "next", onClick: () => this.next(), "aria-label": "next slide" }))), h("section", { class: "slide-container", "aria-live": "polite" }, h("slot", null)), hasSlides && (h("section", { class: "pages" }, h("span", { class: "pages-text" }, `${currentSlideNumber} of ${this.rolodex.length}`)))));
  }
  get host() { return getElement(this); }
};
Ku4Carousel.style = ku4CarouselCss;

export { Ku4Carousel as ku4_carousel };
