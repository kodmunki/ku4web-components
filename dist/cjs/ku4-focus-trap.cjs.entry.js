'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15d4a570.js');
const index$1 = require('./index-d80b2fdd.js');
const index$2 = require('./index-3e6df2cb.js');

/**
* Sets aria-hidden attribute for passed elements
* @param {Array} elements - List of elements to set aria-hidden on
* @param {boolean} [value] - Optional value for aria-hidden.
* No value will set to previous value if available.
*/
const ariaHidden = (elements, value) => {
  if (!value) {
    // eslint-disable-next-line @stencil/ban-side-effects
    elements.forEach((element) => {
      if (!element.currentAriaHidden) {
        element.removeAttribute('aria-hidden');
      }
      else {
        element.setAttribute('aria-hidden', element.currentAriaHidden);
      }
    });
  }
  else {
    // eslint-disable-next-line @stencil/ban-side-effects
    elements.forEach((element) => {
      element.currentAriaHidden = element.getAttribute('aria-hidden');
      element.setAttribute('aria-hidden', value);
    });
  }
};

const focusableTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
const isFocusable = (element) => {
  const tabindex = element.getAttribute('tabindex');
  return (focusableTags.includes(element.tagName.toUpperCase()) ||
    element.getAttribute('href')) &&
    (!tabindex || isNaN(tabindex) || parseInt(tabindex) > -1);
};

const queryFocusable = element => [].slice.call(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
const queryTabbable = element => [].slice.call(element.querySelectorAll(':not([tabindex="-1"])'));

const ku4FocusTrapCss = ":host{position:static}";

const { tab } = index$2.l;
const tabShift = index$2.l.tab.shift;
const tabAlt = index$2.l.tab.alt;
const tabAltShift = index$2.l.tab.alt.shift;
const Ku4FocusTrap = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.iframes = [];
    /**
     * Focus trap will be active when true.
     */
    this.active = false;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
  }
  activeHandler(value) {
    value ? this.handleActivate() : this.handleDeactivate();
  }
  /**
   * Activate focus trap
   * @param {Element} [element] - Element to return focus to when trap is deactivated.
   */
  async activate(element) {
    this.lastActiveElement = element || document.querySelector(this.return || null);
    this.active = true;
  }
  /**
   * Deactivate focus trap.
   */
  async deactivate() {
    this.active = false;
  }
  handleActivate() {
    this.lastActiveElement = this.lastActiveElement || document.activeElement;
    if (this.lastActiveElement && this.lastActiveElement.blur) {
      this.lastActiveElement.blur();
    }
    this.addEventListeners(this.elements);
    ariaHidden(this.outerElements, true);
    window.requestAnimationFrame(() => {
      const element = (document.querySelector(this.initial || null) ||
        this.focusableElements[0] ||
        this.trapElements[0]);
      element.blur();
      element.focus();
      this.activateTraps();
    });
  }
  handleDeactivate() {
    this.removeEventListeners(this.elements);
    this.deactivateTraps();
    ariaHidden(this.outerElements);
    if (this.lastActiveElement && this.lastActiveElement.focus) {
      this.lastActiveElement.focus();
    }
    this.lastActiveElement = null;
  }
  // Handles keydown and mutes the event if it occurs on a focusable
  // item that is in the focus trap. This allows this block to force
  // the decision as to who will get next focus and not let that
  // decisioning fall out to the browser.
  handleKeyDown(e) {
    if ((tabShift.didFire(e) || tabAltShift.didFire(e))) {
      try {
        if (this.iframes.length > 0 && (this.trapElements[1] === e.target ||
          !index$1.t.isNull(e.target.getAttribute('ku4-focus-wrap')) ||
          this.iframes.some(iframe => iframe.contains(e.target)))) {
          return;
        }
        if (this.trapElements[0] === e.target) {
          this.trapElements[1].focus();
          return index$2.o.mute(e);
        }
        const nextIndex = this.focusableElements.indexOf(e.target) - 1;
        const next = nextIndex < 0 ? this.focusableElements.length - 1 : nextIndex;
        this.focusableElements[next].focus();
        return index$2.o.mute(e);
      }
      catch (e) {
        return index$2.o.mute(e);
      }
    }
    if ((tab.didFire(e) || tabAlt.didFire(e))) {
      try {
        if (this.iframes.length > 0 && (this.trapElements[0] === e.target ||
          !index$1.t.isNull(e.target.getAttribute('ku4-focus-wrap')) ||
          this.iframes.some(iframe => iframe.contains(e.target)))) {
          return;
        }
        if (this.trapElements[1] === e.target) {
          this.trapElements[0].focus();
          return index$2.o.mute(e);
        }
        const nextIndex = this.focusableElements.indexOf(e.target) + 1;
        const next = nextIndex >= this.focusableElements.length ? 0 : nextIndex;
        this.focusableElements[next].focus();
        return index$2.o.mute(e);
      }
      catch (e) {
        return index$2.o.mute(e);
      }
    }
  }
  // Handles keyup and mutes the event if it occurs on a focusable
  // item that is in the focus trap. This allows for us to determine
  // if we need to move to the next focusable if the key is released
  // on one of the trapElements (the two dynamically created wrapper
  // elements that create the trap);
  handleKeyUp(e) {
    const index = this.trapElements.indexOf(e.target);
    if (index === 0 && (tabShift.didFire(e) || tabAltShift.didFire(e))) {
      const element = this.focusableElements[this.focusableElements.length - 1] || this.trapElements[1];
      element.focus();
      return index$2.o.mute(e);
    }
    if (index === 1 && (tab.didFire(e) || tabAlt.didFire(e))) {
      const element = this.focusableElements[0] || this.trapElements[0];
      element.focus();
      return index$2.o.mute(e);
    }
  }
  // Prevents all mouse activity on any elements that are not focusable
  // inside of the active trap.
  handleMouse(e) {
    if (!this.elements.some(element => element === e.target)) {
      index$2.o.mute(e);
    }
  }
  addEventListeners(elements) {
    elements.forEach(element => element.addEventListener('keydown', this.handleKeyDown, true));
    elements.forEach(element => element.addEventListener('keyup', this.handleKeyUp, true));
    window.addEventListener('click', this.handleMouse, true);
    window.addEventListener('mousedown', this.handleMouse, true);
    window.addEventListener('mouseup', this.handleMouse, true);
  }
  removeEventListeners(elements) {
    elements.forEach(element => element.removeEventListener('keydown', this.handleKeyDown, true));
    elements.forEach(element => element.removeEventListener('keyup', this.handleKeyUp, true));
    window.removeEventListener('click', this.handleMouse, true);
    window.removeEventListener('mousedown', this.handleMouse, true);
    window.removeEventListener('mouseup', this.handleMouse, true);
  }
  activateTraps() {
    this.setTraps(0);
  }
  deactivateTraps() {
    this.setTraps(-1);
  }
  setTraps(value) {
    [].slice.call(this.host.querySelectorAll('[ku4-focus-trap], [ku4-focus-wrap]'))
      .forEach(element => element.setAttribute('tabindex', value));
  }
  wrap(element) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.createWrapTag());
    fragment.appendChild(element.cloneNode());
    fragment.appendChild(this.createWrapTag());
    element.parentNode.replaceChild(fragment, element);
  }
  createTrapTag() {
    return this.createTag('ku4-focus-trap');
  }
  createWrapTag() {
    return this.createTag('ku4-focus-wrap');
  }
  createTag(type) {
    const trap = document.createElement('button');
    trap.setAttribute(type, '');
    trap.setAttribute('tabindex', '0');
    trap.setAttribute('aria-hidden', 'true');
    trap.style.position = 'static';
    trap.style.display = 'inline';
    trap.style.width = '0';
    trap.style.height = '0';
    trap.style.margin = '0';
    trap.style.padding = '0';
    trap.style.border = 'none';
    trap.style.outline = 'none';
    return trap;
  }
  initialize() {
    // All elements in this focus-trap
    const innerElements = [].slice.call(this.host.querySelectorAll('*'));
    // May need to break this out as it is really included for the mouse events
    // e.g. for an overlay on a modal to make that clickable that is make it
    // so this does not include it for muting the mouse events. This component
    // is very powerful in shutting everything down and needs to allow for
    // the ability to let items be clickable.
    const inclusions = [].slice.call(document.querySelectorAll(this.include || null) || []);
    // May need to break this out as it is really here to explicitly exclude items from
    // being read out by screen readers. That is make them hidden so that screen
    // readers get the same treatment as regular users.
    const exclusions = [].slice.call(document.querySelectorAll(this.exclude) || []);
    let shadowExclusions = [];
    (this.excludeShadow || '').split(',').forEach((selector) => {
      if (index$1.t.isNullOrEmpty(selector)) {
        return;
      }
      try {
        const parts = selector.trim().replace(/\s/, '|').split('|');
        const shadowElements = document.querySelector(parts[0]).shadowRoot.querySelectorAll(parts[1]);
        shadowExclusions = shadowExclusions.concat([].slice.call(shadowElements || []));
      }
      catch (e) {
        // eslint-disable-next-line no-console
        console.error('Invalid shadow selector', selector);
      }
    });
    // Get all of the iframes as we cannot reach into them to find
    // their focusable elements. We can only focus on the trap elements
    // that wrap it
    this.iframes = [].slice.call(this.host.querySelectorAll('iframe') || []);
    this.iframes.forEach(iframe => this.wrap(iframe));
    // Set element in this trap deduplicating any that may have been duplicated
    // with careless user inclusions.
    this.elements = index$1.h([...queryTabbable(this.host), ...inclusions]);
    // Get the focusable elements. This may be overkill as we really only need
    // to know the first and last focusable. If that is the case, we may be
    // able to just use the first and last `this.element` it is still not clear.
    this.focusableElements = this.elements
      .reduce((acc, value) => {
      if (isFocusable(value) && !this.trapElements.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);
    /**
     * We can not currently do this this way because MSEdge
     * is reordering querySelectorAll items such that they
     * not selecting in DOM order. If/when we dump support
     * for MSEdge (non Chromium) or it fixes support we
     * can move to this more efficient way. Until then, we
     * need to use the && condition .includes in the
     * `reduce` above. It will be more efficient to do it
     * the below way when we can.
     */
    // this.focusableElements.shift();
    // this.focusableElements.pop();
    //This may need to be defied more specifically as a11y as it is needed
    //for the screen reader capabilities and may be interfering with
    //regular usage.
    this.outerElements = [...queryFocusable(document.body), ...exclusions, ...shadowExclusions]
      .filter(element => !(element === this.host ||
      innerElements.includes(element) ||
      inclusions.includes(element)));
  }
  componentDidLoad() {
    const trapStart = this.createTrapTag();
    const trapEnd = this.createTrapTag();
    this.trapElements = [trapStart, trapEnd];
    this.host.insertBefore(trapStart, this.host.firstChild);
    this.host.appendChild(trapEnd);
    this.initialize();
    if (this.active) {
      this.handleActivate();
    }
    else {
      this.handleDeactivate();
    }
  }
  disconnectedCallback() {
    if (this.active) {
      this.handleDeactivate();
    }
  }
  render() {
    return index.h("slot", null);
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeHandler"]
  }; }
};
Ku4FocusTrap.style = ku4FocusTrapCss;

exports.ku4_focus_trap = Ku4FocusTrap;
