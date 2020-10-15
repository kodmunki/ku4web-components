import { Component, Host, Prop, State, Method, Element, h } from '@stencil/core';
import { Rolodex } from 'ku4es-kernel';
import { Swipe } from 'ku4es-ui-kernel';
/**
 * @description ku4-carousel
 */
export class Ku4Carousel {
  constructor() {
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
    this.swipe = new Swipe(this.host, this.swipeTolerance)
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
    this.rolodex = new Rolodex(slides);
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
    return (h(Host, { "aria-roledescription": "carousel", "current-slide": currentSlideNumber },
      hasSlides && (h("section", { class: "controls" },
        h("button", { type: "button", class: "prev", onClick: () => this.previous(), "aria-label": "previous slide" }),
        h("button", { type: "button", class: "next", onClick: () => this.next(), "aria-label": "next slide" }))),
      h("section", { class: "slide-container", "aria-live": "polite" },
        h("slot", null)),
      hasSlides && (h("section", { class: "pages" },
        h("span", { class: "pages-text" }, `${currentSlideNumber} of ${this.rolodex.length}`)))));
  }
  static get is() { return "ku4-carousel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ku4-carousel.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ku4-carousel.css"]
  }; }
  static get properties() { return {
    "swipeTolerance": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Sets the distance a touch must travel before\nactivating a swipe."
      },
      "attribute": "swipe-tolerance",
      "reflect": false,
      "defaultValue": "44"
    }
  }; }
  static get states() { return {
    "slideState": {}
  }; }
  static get methods() { return {
    "next": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "Display the next ku4-carousel-slide",
        "tags": []
      }
    },
    "previous": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "Display the previous ku4-carousel-slide",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
