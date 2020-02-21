import { r as registerInstance, h, g as getElement } from './index-93aadf64.js';
import './index-79290777.js';
import { a as dist_3, b as dist_2 } from './index-4360c9bd.js';

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

const deduplicate = array => array.reduce((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value);
    }
    return acc;
}, []);

const focusableTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
const isFocusable = (element) => {
    const tabindex = element.getAttribute('tabindex');
    return (focusableTags.includes(element.tagName.toUpperCase()) ||
        element.getAttribute('href')) &&
        (!tabindex || isNaN(tabindex) || parseInt(tabindex) > -1);
};

const queryFocusable = element => [].slice.call(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
const queryTabbable = element => [].slice.call(element.querySelectorAll(':not([tabindex="-1"])'));

const Ku4FocusTrap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Focus trap will be active when true.
         */
        this.active = false;
        /**
         * A querySelector of elements to include in the trap that
         * are not children of this focus trap. This can be useful
         * for specific situations such as modal overlays.
         */
        this.include = 'null';
        /**
         * A querySelector of elements to explicitly exclude. This
         * can be useful for greedy accessiblity apis and screen
         * reader fallover.
         */
        this.exclude = 'null';
        /**
         * A querySelector of element to initially focus
         */
        this.initial = 'null';
        /**
         * A querySelector of element to return focus to
         */
        this.return = 'null';
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
        this.lastActiveElement = element || document.querySelector(this.return);
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
        this.addEventListeners(this.elements);
        this.activateTraps();
        ariaHidden(this.outerElements, true);
        window.requestAnimationFrame(() => (document.querySelector(this.initial) || this.focusableElements[0]).focus());
    }
    handleDeactivate() {
        this.removeEventListeners(this.elements);
        this.deactivateTraps();
        ariaHidden(this.outerElements);
        this.lastActiveElement.focus();
        this.lastActiveElement = null;
    }
    handleKeyDown(e) {
        if (dist_3.tab.didFire(e)) {
            const index = this.trapElements.indexOf(e.target);
            if (index === 0 && e.shiftKey) {
                this.focusableElements[this.focusableElements.length - 1].focus();
                return dist_2.mute(e);
            }
            if (index === this.trapElements.length - 1 && !e.shiftKey) {
                this.focusableElements[0].focus();
                return dist_2.mute(e);
            }
        }
    }
    handleKeyUp(e) {
        if (dist_3.tab.didFire(e)) {
            const index = this.trapElements.indexOf(e.target);
            if (index === 0 && e.shiftKey) {
                this.focusableElements[this.focusableElements.length - 1].focus();
                return dist_2.mute(e);
            }
            if (index === this.trapElements.length - 1 && !e.shiftKey) {
                this.focusableElements[0].focus();
                return dist_2.mute(e);
            }
        }
    }
    handleMouse(e) {
        if (!this.elements.some(element => element === e.target)) {
            dist_2.mute(e);
        }
    }
    addEventListeners(elements) {
        elements.forEach(element => element.addEventListener('keydown', this.handleKeyDown, true));
        elements.forEach(element => element.addEventListener('keypress', dist_2.mute, true));
        elements.forEach(element => element.addEventListener('keyup', this.handleKeyUp, true));
        window.addEventListener('click', this.handleMouse, true);
        window.addEventListener('mousedown', this.handleMouse, true);
        window.addEventListener('mouseup', this.handleMouse, true);
    }
    removeEventListeners(elements) {
        elements.forEach(element => element.removeEventListener('keydown', this.handleKeyDown, true));
        elements.forEach(element => element.removeEventListener('keypress', dist_2.mute, true));
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
        const trap = document.createElement('a');
        trap.setAttribute(type, '');
        trap.setAttribute('tabindex', '0');
        trap.setAttribute('aria-hidden', 'true');
        trap.style.position = 'static';
        trap.style.display = 'inline';
        trap.style.margin = '0';
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
        const inclusions = [].slice.call(document.querySelectorAll(this.include) || []);
        // May need to break this out as it is really here to explicitly exclude items from
        // being read out by screen readers. That is make them hidden so that screen
        // readers get the same treatment as regular users.
        const exclusions = [].slice.call(document.querySelectorAll(this.exclude) || []);
        this.host.querySelectorAll('iframe')
            .forEach(element => this.wrap(element));
        // Set element in this trap deduplicating any that may have been duplicated
        // with careless user inclusions.
        this.elements = deduplicate([...queryTabbable(this.host), ...inclusions]);
        // Get the focusable elements. This may be overkill as we really only need
        // to know the first and last focusable. If that is the case, we may be
        // able to just use the first and last `this.element` it is still not clear.
        this.focusableElements = this.elements
            .reduce((acc, value) => {
            if (isFocusable(value)) {
                acc.push(value);
            }
            return acc;
        }, []);
        this.focusableElements.shift();
        this.focusableElements.pop();
        //This may need to be defied more specifically as a11y as it is needed
        //for the screen reader capabilities and may be interfering with
        //regular usage.
        this.outerElements = [...queryFocusable(document.body), ...exclusions]
            .filter(element => !(element === this.host ||
            innerElements.includes(element) ||
            inclusions.includes(element)));
    }
    componentWillLoad() {
        const trapStart = this.createTrapTag();
        const trapEnd = this.createTrapTag();
        this.trapElements = [trapStart, trapEnd];
        this.host.insertBefore(trapStart, this.host.firstChild);
        this.host.appendChild(trapEnd);
    }
    componentDidLoad() {
        this.initialize();
        if (this.active) {
            this.handleActivate();
        }
    }
    componentDidUnload() {
        if (this.active) {
            this.handleDeactivate();
        }
    }
    render() {
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "active": ["activeHandler"]
    }; }
    static get style() { return "/**\n * ku4-focus-trap should never have a position in the DOM.\n */\n:host {\n  position: static;\n}"; }
};

export { Ku4FocusTrap as ku4_focus_trap };
