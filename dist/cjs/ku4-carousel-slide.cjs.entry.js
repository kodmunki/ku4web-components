'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');

const ku4CarouselSlideCss = ":host{overflow-x:hidden}";

const Ku4CarouselSlide = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: `${classList}`, "aria-hidden": active ? 'false' : 'true', "aria-roledescription": "slide" }, index.h("slot", null)));
  }
};
Ku4CarouselSlide.style = ku4CarouselSlideCss;

exports.ku4_carousel_slide = Ku4CarouselSlide;
