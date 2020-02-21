var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
System.register(['./index-93eb2850.system.js', './index-3ac3fa4f.system.js', './index-9b8d563b.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement, dist_3, dist_2;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.g;
            }, function () { }, function (module) {
                dist_3 = module.a;
                dist_2 = module.b;
            }],
        execute: function () {
            /**
            * Sets aria-hidden attribute for passed elements
            * @param {Array} elements - List of elements to set aria-hidden on
            * @param {boolean} [value] - Optional value for aria-hidden.
            * No value will set to previous value if available.
            */
            var ariaHidden = function (elements, value) {
                if (!value) {
                    // eslint-disable-next-line @stencil/ban-side-effects
                    elements.forEach(function (element) {
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
                    elements.forEach(function (element) {
                        element.currentAriaHidden = element.getAttribute('aria-hidden');
                        element.setAttribute('aria-hidden', value);
                    });
                }
            };
            var deduplicate = function (array) { return array.reduce(function (acc, value) {
                if (!acc.includes(value)) {
                    acc.push(value);
                }
                return acc;
            }, []); };
            var focusableTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
            var isFocusable = function (element) {
                var tabindex = element.getAttribute('tabindex');
                return (focusableTags.includes(element.tagName.toUpperCase()) ||
                    element.getAttribute('href')) &&
                    (!tabindex || isNaN(tabindex) || parseInt(tabindex) > -1);
            };
            var queryFocusable = function (element) { return [].slice.call(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')); };
            var queryTabbable = function (element) { return [].slice.call(element.querySelectorAll(':not([tabindex="-1"])')); };
            var Ku4FocusTrap = exports('ku4_focus_trap', /** @class */ (function () {
                function class_1(hostRef) {
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
                class_1.prototype.activeHandler = function (value) {
                    value ? this.handleActivate() : this.handleDeactivate();
                };
                /**
                 * Activate focus trap
                 * @param {Element} [element] - Element to return focus to when trap is deactivated.
                 */
                class_1.prototype.activate = function (element) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.lastActiveElement = element || document.querySelector(this.return);
                            this.active = true;
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Deactivate focus trap.
                 */
                class_1.prototype.deactivate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.active = false;
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.handleActivate = function () {
                    var _this = this;
                    this.lastActiveElement = this.lastActiveElement || document.activeElement;
                    this.addEventListeners(this.elements);
                    this.activateTraps();
                    ariaHidden(this.outerElements, true);
                    window.requestAnimationFrame(function () { return (document.querySelector(_this.initial) || _this.focusableElements[0]).focus(); });
                };
                class_1.prototype.handleDeactivate = function () {
                    this.removeEventListeners(this.elements);
                    this.deactivateTraps();
                    ariaHidden(this.outerElements);
                    this.lastActiveElement.focus();
                    this.lastActiveElement = null;
                };
                class_1.prototype.handleKeyDown = function (e) {
                    if (dist_3.tab.didFire(e)) {
                        var index = this.trapElements.indexOf(e.target);
                        if (index === 0 && e.shiftKey) {
                            this.focusableElements[this.focusableElements.length - 1].focus();
                            return dist_2.mute(e);
                        }
                        if (index === this.trapElements.length - 1 && !e.shiftKey) {
                            this.focusableElements[0].focus();
                            return dist_2.mute(e);
                        }
                    }
                };
                class_1.prototype.handleKeyUp = function (e) {
                    if (dist_3.tab.didFire(e)) {
                        var index = this.trapElements.indexOf(e.target);
                        if (index === 0 && e.shiftKey) {
                            this.focusableElements[this.focusableElements.length - 1].focus();
                            return dist_2.mute(e);
                        }
                        if (index === this.trapElements.length - 1 && !e.shiftKey) {
                            this.focusableElements[0].focus();
                            return dist_2.mute(e);
                        }
                    }
                };
                class_1.prototype.handleMouse = function (e) {
                    if (!this.elements.some(function (element) { return element === e.target; })) {
                        dist_2.mute(e);
                    }
                };
                class_1.prototype.addEventListeners = function (elements) {
                    var _this = this;
                    elements.forEach(function (element) { return element.addEventListener('keydown', _this.handleKeyDown, true); });
                    elements.forEach(function (element) { return element.addEventListener('keypress', dist_2.mute, true); });
                    elements.forEach(function (element) { return element.addEventListener('keyup', _this.handleKeyUp, true); });
                    window.addEventListener('click', this.handleMouse, true);
                    window.addEventListener('mousedown', this.handleMouse, true);
                    window.addEventListener('mouseup', this.handleMouse, true);
                };
                class_1.prototype.removeEventListeners = function (elements) {
                    var _this = this;
                    elements.forEach(function (element) { return element.removeEventListener('keydown', _this.handleKeyDown, true); });
                    elements.forEach(function (element) { return element.removeEventListener('keypress', dist_2.mute, true); });
                    elements.forEach(function (element) { return element.removeEventListener('keyup', _this.handleKeyUp, true); });
                    window.removeEventListener('click', this.handleMouse, true);
                    window.removeEventListener('mousedown', this.handleMouse, true);
                    window.removeEventListener('mouseup', this.handleMouse, true);
                };
                class_1.prototype.activateTraps = function () {
                    this.setTraps(0);
                };
                class_1.prototype.deactivateTraps = function () {
                    this.setTraps(-1);
                };
                class_1.prototype.setTraps = function (value) {
                    [].slice.call(this.host.querySelectorAll('[ku4-focus-trap], [ku4-focus-wrap]'))
                        .forEach(function (element) { return element.setAttribute('tabindex', value); });
                };
                class_1.prototype.wrap = function (element) {
                    var fragment = document.createDocumentFragment();
                    fragment.appendChild(this.createWrapTag());
                    fragment.appendChild(element.cloneNode());
                    fragment.appendChild(this.createWrapTag());
                    element.parentNode.replaceChild(fragment, element);
                };
                class_1.prototype.createTrapTag = function () {
                    return this.createTag('ku4-focus-trap');
                };
                class_1.prototype.createWrapTag = function () {
                    return this.createTag('ku4-focus-wrap');
                };
                class_1.prototype.createTag = function (type) {
                    var trap = document.createElement('a');
                    trap.setAttribute(type, '');
                    trap.setAttribute('tabindex', '0');
                    trap.setAttribute('aria-hidden', 'true');
                    trap.style.position = 'static';
                    trap.style.display = 'inline';
                    trap.style.margin = '0';
                    trap.style.outline = 'none';
                    return trap;
                };
                class_1.prototype.initialize = function () {
                    var _this = this;
                    // All elements in this focus-trap
                    var innerElements = [].slice.call(this.host.querySelectorAll('*'));
                    // May need to break this out as it is really included for the mouse events
                    // e.g. for an overlay on a modal to make that clickable that is make it
                    // so this does not include it for muting the mouse events. This component
                    // is very powerful in shutting everything down and needs to allow for
                    // the ability to let items be clickable.
                    var inclusions = [].slice.call(document.querySelectorAll(this.include) || []);
                    // May need to break this out as it is really here to explicitly exclude items from
                    // being read out by screen readers. That is make them hidden so that screen
                    // readers get the same treatment as regular users.
                    var exclusions = [].slice.call(document.querySelectorAll(this.exclude) || []);
                    this.host.querySelectorAll('iframe')
                        .forEach(function (element) { return _this.wrap(element); });
                    // Set element in this trap deduplicating any that may have been duplicated
                    // with careless user inclusions.
                    this.elements = deduplicate(__spreadArrays(queryTabbable(this.host), inclusions));
                    // Get the focusable elements. This may be overkill as we really only need
                    // to know the first and last focusable. If that is the case, we may be
                    // able to just use the first and last `this.element` it is still not clear.
                    this.focusableElements = this.elements
                        .reduce(function (acc, value) {
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
                    this.outerElements = __spreadArrays(queryFocusable(document.body), exclusions).filter(function (element) { return !(element === _this.host ||
                        innerElements.includes(element) ||
                        inclusions.includes(element)); });
                };
                class_1.prototype.componentWillLoad = function () {
                    var trapStart = this.createTrapTag();
                    var trapEnd = this.createTrapTag();
                    this.trapElements = [trapStart, trapEnd];
                    this.host.insertBefore(trapStart, this.host.firstChild);
                    this.host.appendChild(trapEnd);
                };
                class_1.prototype.componentDidLoad = function () {
                    this.initialize();
                    if (this.active) {
                        this.handleActivate();
                    }
                };
                class_1.prototype.componentDidUnload = function () {
                    if (this.active) {
                        this.handleDeactivate();
                    }
                };
                class_1.prototype.render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(class_1.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "active": ["activeHandler"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return "/**\n * ku4-focus-trap should never have a position in the DOM.\n */\n:host {\n  position: static;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
