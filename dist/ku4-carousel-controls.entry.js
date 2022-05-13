import { r as registerInstance, h, g as getElement } from './index-65e7ba77.js';
import { t } from './index-5bc509ed.js';

const ku4CarouselControlsCss = ":host{position:relative;display:block}input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;width:20px;height:20px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle}input[type=radio]:checked:after{content:\"\";position:absolute;top:2px;left:2px;width:14px;height:14px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background-color:#333}";

const Ku4CarouselControls = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.carousel = document.getElementById(this.for);
    this.handleSlide = this.handleSlide.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  get slides() {
    return [].slice.call(this.carousel.children);
  }
  get controls() {
    return [].slice.call(this.host.children);
  }
  handleSlide(e) {
    this.controls.forEach((control) => {
      control.removeAttribute('current');
      control.checked = false;
    });
    try {
      const current = this.controls[e.detail - 1];
      current.setAttribute('current', e.detail);
      current.checked = true;
    }
    catch (e) {
      /* Fail silently */
    }
  }
  async handleChange(e) {
    const { carousel, slides, controls } = this;
    const slideValue = e.target.getAttribute('slide');
    const n = isNaN(slideValue)
      ? slides.findIndex(slide => slide.getAttribute('name') === slideValue) + 1
      : parseInt(slideValue);
    const slide = isNaN(n) ? controls.indexOf(e.target) + 1 : n;
    await carousel.slideTo(slide);
    try {
      e.target.setAttribute('current', slide);
    }
    catch (e) {
      /* Fail silently */
    }
  }
  componentWillLoad() {
    const { carousel, controls } = this;
    try {
      carousel.addEventListener('slide', this.handleSlide, { passive: true });
      controls.forEach((control, i) => {
        if (i === 0) {
          control.setAttribute('current', i + 1);
        }
        if (control.nodeName === 'INPUT') {
          control.addEventListener('change', this.handleChange);
        }
        else {
          control.addEventListener('keydown', this.handleChange);
          control.addEventListener('mousedown', this.handleChange, { passive: true });
          control.addEventListener('touchstart', this.handleChange, { passive: true });
        }
      });
    }
    catch (e) {
      if (!t.exists(carousel)) {
        throw new ReferenceError('ku4-carousel-controls must connect to a ku4-carousel.');
      }
    }
  }
  disconnectedCallback() {
    const { carousel, controls } = this;
    carousel.removeEventListener('slide', this.handleSlide);
    controls.forEach((control) => {
      control.removeEventListener('change', this.handleChange);
      control.removeEventListener('keydown', this.handleChange);
      control.removeEventListener('mousedown', this.handleChange);
      control.removeEventListener('touchstart', this.handleChange);
    });
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
Ku4CarouselControls.style = ku4CarouselControlsCss;

export { Ku4CarouselControls as ku4_carousel_controls };
