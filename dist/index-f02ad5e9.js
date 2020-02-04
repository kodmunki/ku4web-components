import { d as dist$1, c as createCommonjsModule, u as unwrapExports } from './index-4ddec192.js';

var Event_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _evt = {};
/**
 * @class Event
 * @summary Event abstraction
 * @static
 */

var Event =
/*#__PURE__*/
function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, null, [{
    key: "mute",

    /**
     * @summary Hard stops any further activity from passed event.
     * @memberOf Event
     * @public
     * @static
     * @param {Event} event - Event to hard stop.
     * @returns {boolean}
     */
    value: function mute(event) {
      if (!dist$1.Assert.exists(event)) {
        return false;
      }

      if (dist$1.Assert.isFunction(event.preventDefault)) {
        event.preventDefault();
      }

      if (dist$1.Assert.isFunction(event.stopPropagation)) {
        event.stopPropagation();
      }

      if (dist$1.Assert.isFunction(event.stopImmediatePropagation)) {
        event.stopImmediatePropagation();
      }

      if (dist$1.Assert.exists(event.cancelBubble)) {
        event.cancelBubble = true;
      }

      return false;
    }
    /**
     * @summary Adds an event lister to target element and returns an id for future
     * event listener removal and memory leak prevention.
     * @memberOf Event
     * @public
     * @static
     * @param {Element} element - Element to add event listener to.
     * @param {string} event - event to subscribe to.
     * @param {function} callback - method to call when click event fires.
     * @param {{}} options - UIEvent options
     * @returns {*}
     */

  }, {
    key: "add",
    value: function add(element, event, callback, options) {
      var id = (0, dist$1.uid)();
      _evt[id] = {
        element: element,
        event: event,
        callback: callback,
        options: options
      };
      element.addEventListener(event, callback, options);
      return id;
    }
    /**
     * @summary Removes event listener subscribed with `Event.add`
     * @memberOf Event
     * @public
     * @static
     * @param {string} id - Id returned from `Event.add`
     */

  }, {
    key: "remove",
    value: function remove(id) {
      var _evt$id = _evt[id],
          element = _evt$id.element,
          event = _evt$id.event,
          callback = _evt$id.callback,
          options = _evt$id.options;
      element.removeEventListener(event, callback, options);
    }
  }]);

  return Event;
}();

exports["default"] = Event;

});

const Event = unwrapExports(Event_1);

var Document_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _Event = _interopRequireDefault(Event_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @class Document
 * @summary Document abstraction
 * @static
 */
var Document =
/*#__PURE__*/
function () {
  function Document() {
    _classCallCheck(this, Document);
  }

  _createClass(Document, null, [{
    key: "preventScroll",

    /**
     * @summary Prevents document from being scrollable
     * @memberOf Document
     * @public
     * @static
     */
    value: function preventScroll() {
      Document.position = document.body.style.position;
      Document.top = document.body.style.top;
      Document.left = document.body.style.left;
      Document.width = document.body.style.width;
      Document.height = document.body.style.height;
      Document.documentWidth = document.documentElement.style.width;
      Document.documentHeight = document.documentElement.style.height;
      Document.overflowY = document.documentElement.style.overflowY;
      Document.scrollX = window.scrollX || window.pageXOffset;
      Document.scrollY = window.scrollY || window.pageYOffset;
      var scrollbarWidth = Document.scrollbarWidth;
      document.body.style.position = 'fixed';
      document.body.style.left = "-".concat(Document.scrollX, "px");
      document.body.style.top = "-".concat(Document.scrollY, "px");
      document.body.style.width = "calc(100vw - ".concat(scrollbarWidth, "px)");
      document.body.style.height = 'calc(100% + 1px)';
      document.documentElement.style.width = '100wh';
      document.documentElement.style.height = '100vh';
      document.documentElement.style.overflowY = scrollbarWidth && 'scroll';
    }
    /**
     * @summary Resumes scrollability for document after being
     * rendered unscrollable.
     * @memberOf Document
     * @public
     * @static
     */

  }, {
    key: "resumeScroll",
    value: function resumeScroll() {
      document.body.style.position = Document.position;
      document.body.style.top = Document.top;
      document.body.style.left = Document.left;
      document.body.style.width = Document.width;
      document.body.style.height = Document.height;
      document.documentElement.style.width = Document.documentWidth;
      document.documentElement.style.height = Document.documentHeight;
      document.documentElement.style.overflowY = Document.overflowY;
      window.scrollTo(Document.scrollX, Document.scrollY);
      Document.position = null;
      Document.top = null;
      Document.left = null;
      Document.width = null;
      Document.height = null;
      Document.documentWidth = null;
      Document.documentHeight = null;
      Document.overflowY = null;
      Document.scrollX = null;
      Document.scrollY = null;
    }
    /**
     * @summary Subscribes to click event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Document
     * @public
     * @static
     * @param {function} callback - method to call when click event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */

  }, {
    key: "onClick",
    value: function onClick(callback, options) {
      return _Event["default"].add(document, 'click', callback, options);
    }
    /**
     * @summary Subscribes to keyup event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Document
     * @public
     * @static
     * @param {function} callback - method to call when keyup event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(callback, options) {
      return _Event["default"].add(document, 'keyup', callback, options);
    }
    /**
     * @summary Removes event listener subscribed with `Document.[method]`
     * @memberOf Document
     * @public
     * @static
     * @param {string} id - Id returned from `Document.[method]`
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(id) {
      _Event["default"].remove(id);
    }
  }, {
    key: "scrollbarWidth",
    get: function get() {
      return window.innerWidth - document.documentElement.clientWidth;
    }
    /**
     * @summary Returns true if document scrolling is prevented
     * @memberOf Document
     * @public
     * @static
     * @returns {boolean}
     */

  }, {
    key: "isScrollPrevented",
    get: function get() {
      return dist$1.Assert.exists(Document.scrollY);
    }
  }]);

  return Document;
}();

exports["default"] = Document;

_defineProperty(Document, "position", void 0);

_defineProperty(Document, "left", void 0);

_defineProperty(Document, "top", void 0);

_defineProperty(Document, "width", void 0);

_defineProperty(Document, "height", void 0);

_defineProperty(Document, "documentWidth", void 0);

_defineProperty(Document, "documentHeight", void 0);

_defineProperty(Document, "overflowY", void 0);

_defineProperty(Document, "scrollX", void 0);

_defineProperty(Document, "scrollY", void 0);

});

const Document = unwrapExports(Document_1);

var Window_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Event = _interopRequireDefault(Event_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Window
 * @summary Window abstraction
 * @static
 */
var Window =
/*#__PURE__*/
function () {
  function Window() {
    _classCallCheck(this, Window);
  }

  _createClass(Window, null, [{
    key: "onClick",

    /**
     * @summary Subscribes to click event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Window
     * @public
     * @static
     * @param {function} callback - method to call when click event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */
    value: function onClick(callback, options) {
      return _Event["default"].add(window, 'click', callback, options);
    }
    /**
     * @summary Subscribes to keyup event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Window
     * @public
     * @static
     * @param {function} callback - method to call when keyup event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(callback, options) {
      return _Event["default"].add(window, 'keyup', callback, options);
    }
    /**
     * @summary Removes event listener subscribed with `Window.[method]`
     * @memberOf Window
     * @public
     * @static
     * @param {string} id - Id returned from `Window.[method]`
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(id) {
      _Event["default"].remove(id);
    }
  }]);

  return Window;
}();

exports["default"] = Window;

});

const Window = unwrapExports(Window_1);

var Key_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Key =
/*#__PURE__*/
function () {
  /**
   * @constructor Key
   * @summary Keyboard Key abstraction
   * @param {String} MDNKeyIdentifier - The MDN Key Identifier
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   * @param {String} [MSKeyIdentifier] - The Microsoft Key Identifier for those
   * keys that have browser specific implementations for MS
   * https://msdn.microsoft.com/en-us/ie/gg305568(v=vs.94)
   */
  function Key(MDNKeyIdentifier, MSKeyIdentifier) {
    _classCallCheck(this, Key);

    this.key = MDNKeyIdentifier;
    this.msKey = MSKeyIdentifier || MDNKeyIdentifier;
  }
  /**
   * @summary Returns true if this Key equals other.
   * @memberOf Key
   * @public
   * @instance
   * @param {Key} other
   * @returns {boolean}
   */


  _createClass(Key, [{
    key: "equals",
    value: function equals(other) {
      return other instanceof Key && (this.key === other.key || this.msKey === other.msKey);
    }
    /**
     * @summary Returns true if this Key did fire event.
     * @memberOf Key
     * @public
     * @instance
     * @param {KeyboardEvent} event
     * @returns {boolean}
     */

  }, {
    key: "didFire",
    value: function didFire(event) {
      var code = event.code,
          key = event.key;
      var value = key === 'Dead' ? code : key;
      return event && (this.equals(new Key(value)) || this.key === 'ANY');
    }
    /**
     * @summary Returns a Key action keypress.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }], [{
    key: "press",
    get: function get() {
      return 'keypress';
    }
    /**
     * @summary Returns a Key action keydown.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "down",
    get: function get() {
      return 'keydown';
    }
    /**
     * @summary Returns a Key action keyup.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "up",
    get: function get() {
      return 'keyup';
    }
    /**
     * @summary Returns a Key that will equal any other Key.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "any",
    get: function get() {
      return new Key('ANY');
    }
    /**
     * @summary Returns Key, Esacpe.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "esc",
    get: function get() {
      return new Key('Escape', 'Esc');
    }
    /**
     * @summary Returns Key, Enter.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "enter",
    get: function get() {
      return new Key('Enter');
    }
    /**
     * @summary Returns Key, Space.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "space",
    get: function get() {
      return new Key(' ', 'Spacebar');
    }
    /**
     * @summary Returns Key, Tab.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "tab",
    get: function get() {
      return new Key('Tab');
    }
    /**
     * @summary Returns Key, Left Arrow.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "left",
    get: function get() {
      return new Key('ArrowLeft', 'Left');
    }
    /**
     * @summary Returns Key, Right Arrow.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "right",
    get: function get() {
      return new Key('ArrowRight', 'Right');
    }
  }]);

  return Key;
}();

exports["default"] = Key;

});

const Key = unwrapExports(Key_1);

var Keyboard_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Key = _interopRequireDefault(Key_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Keyboard =
/*#__PURE__*/
function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);
  }

  _createClass(Keyboard, null, [{
    key: "on",

    /**
     * @summary Subscribes to keyboard event
     * @memberOf Document
     * @public
     * @static
     * @param event
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */
    value: function on(event, key, method) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var listener = function listener(e) {
        return key.didFire(e) ? method(e, key) : null;
      };

      window.addEventListener(event, listener, capture);
      return {
        unsubscribe: function unsubscribe() {
          window.removeEventListener(event, listener);
        }
      };
    }
    /**
     * @summary Subscribes to keyboard keypress event
     * @memberOf Document
     * @public
     * @static
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */

  }, {
    key: "onKeyPress",
    value: function onKeyPress(key, method) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Keyboard.on(_Key["default"].press, key, method, capture);
    }
    /**
     * @summary Subscribes to keyboard keydown event
     * @memberOf Document
     * @public
     * @static
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(key, method) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Keyboard.on(_Key["default"].down, key, method, capture);
    }
    /**
     * @summary Subscribes to keyboard keyup event
     * @memberOf Document
     * @public
     * @static
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(key, method) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Keyboard.on(_Key["default"].up, key, method, capture);
    }
  }]);

  return Keyboard;
}();

exports["default"] = Keyboard;

});

const Keyboard = unwrapExports(Keyboard_1);

var Swipe_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Swipe =
/*#__PURE__*/
function () {
  /**
   * @constructor Swipe
   * @summary Encapsulates touch event management.
   * @param element {Element} - Element that will listen for swipe events.
   * @param tolerance {number} - The distance in pixels a swipe must travel to trigger a swipe event.
   */
  function Swipe(element) {
    var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Swipe);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "tolerance", void 0);

    _defineProperty(this, "touchStartPoint", void 0);

    _defineProperty(this, "didSwipeLeft", function () {});

    _defineProperty(this, "didSwipeRight", function () {});

    _defineProperty(this, "didMove", function () {});

    this.didTouchStart = this.didTouchStart.bind(this);
    this.didTouchEnd = this.didTouchEnd.bind(this);
    this.didTouchMove = this.didTouchMove.bind(this);
    element.addEventListener('touchstart', this.didTouchStart, {
      capture: false,
      passive: true
    });
    element.addEventListener('touchend', this.didTouchEnd, {
      capture: false,
      passive: true
    });
    element.addEventListener('touchmove', this.didTouchMove, {
      capture: false,
      passive: true
    });
    this.element = element;
    this.tolerance = tolerance;
  }
  /**
   * @summary Subscribes method to be called when user swipes left.
   * @memberOf Swipe
   * @public
   * @instance
   * @param {Function} method
   * @returns {this}
   */


  _createClass(Swipe, [{
    key: "onLeft",
    value: function onLeft(method) {
      this.didSwipeLeft = method;
      return this;
    }
    /**
     * @summary Subscribes method to be called when user swipes right.
     * @memberOf Swipe
     * @public
     * @instance
     * @param {Function} method
     * @returns {this}
     */

  }, {
    key: "onRight",
    value: function onRight(method) {
      this.didSwipeRight = method;
      return this;
    }
    /**
     * @summary Subscribes method to be called when user swipes.
     * @memberOf Swipe
     * @public
     * @instance
     * @param {Function} method
     * @returns {this}
     */

  }, {
    key: "onMove",
    value: function onMove(method) {
      this.didMove = method;
      return this;
    }
    /**
     * @summary Clean up all potential memory leaks.
     * @memberOf Swipe
     * @public
     * @instance
     * @returns {this}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var element = this.element;
      element.removeEventListener('touchstart', this.didTouchStart, false);
      element.removeEventListener('touchend', this.didTouchEnd, false);
      element.removeEventListener('touchmove', this.didTouchMove, false);
      return this;
    }
  }, {
    key: "didTouchStart",
    value: function didTouchStart(_ref) {
      var _ref$touches = _slicedToArray(_ref.touches, 1),
          touch = _ref$touches[0];

      this.touchStartPoint = new dist$1.Point(touch.pageX, touch.pageY);
    }
  }, {
    key: "didTouchEnd",
    value: function didTouchEnd(e) {
      var _e$changedTouches = _slicedToArray(e.changedTouches, 1),
          touch = _e$changedTouches[0];

      var touchStartPoint = this.touchStartPoint;
      var touchEndPoint = new dist$1.Point(touch.pageX, touch.pageY);

      if (touchEndPoint.isLeftOf(touchStartPoint) && Math.abs(touchEndPoint.distanceFrom(touchStartPoint).x) > this.tolerance) {
        this.didSwipeLeft(e);
      }

      if (touchEndPoint.isRightOf(touchStartPoint) && Math.abs(touchEndPoint.distanceFrom(touchStartPoint).x) > this.tolerance) {
        this.didSwipeRight(e);
      }
    }
  }, {
    key: "didTouchMove",
    value: function didTouchMove(e) {
      var _e$touches = _slicedToArray(e.touches, 1),
          touch = _e$touches[0];

      var touchStartPoint = this.touchStartPoint;
      var touchEndPoint = new dist$1.Point(touch.pageX, touch.pageY);
      this.didMove({
        distance: touchEndPoint.distanceFrom(touchStartPoint),
        up: touchEndPoint.isAbove(touchStartPoint),
        down: touchEndPoint.isBelow(touchStartPoint),
        left: touchEndPoint.isLeftOf(touchStartPoint),
        right: touchEndPoint.isRightOf(touchStartPoint)
      });
    }
  }]);

  return Swipe;
}();

exports["default"] = Swipe;

});

const Swipe = unwrapExports(Swipe_1);

var string = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeBase64 = encodeBase64;
exports.decodeBase64 = decodeBase64;
exports.encodeUtf8 = encodeUtf8;
exports.decodeUtf8 = decodeUtf8;



/**
 * @summary Base64 encodes a string.
 * @param {string} string - string to encode
 * @returns {string}
 */
function encodeBase64(string) {
  if (!dist$1.Assert.isString(string)) {
    throw new Error('Cannot encode non-string values.');
  }

  return window.btoa(string);
}
/**
 * @summary Decodes Base64 encoded string.
 * @param {string} string - string to decode.
 * @returns {string}
 */


function decodeBase64(string) {
  if (!dist$1.Assert.isString(string)) {
    throw new Error('Cannot encode non-string values.');
  }

  return window.atob(string);
}
/**
 * @summary UTF8 encodes a string.
 * @param {string} string - string to encode
 * @returns {string}
 */


function encodeUtf8(string) {
  if (!dist$1.Assert.isString(string)) {
    throw new Error('Cannot encode non-string values.');
  }

  return decodeURIComponent(encodeURIComponent(string));
}
/**
 * @summary Decodes UTF8 encoded string.
 * @param {string} string - string to decode.
 * @returns {string}
 */


function decodeUtf8(string) {
  if (!dist$1.Assert.isString(string)) {
    throw new Error('Cannot decode non-string values.');
  }

  return decodeURIComponent(encodeURIComponent(string));
}

});

const index = unwrapExports(string);
var string_1 = string.encodeBase64;
var string_2 = string.decodeBase64;
var string_3 = string.encodeUtf8;
var string_4 = string.decodeUtf8;

var dist = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Document", {
  enumerable: true,
  get: function get() {
    return _Document["default"];
  }
});
Object.defineProperty(exports, "Event", {
  enumerable: true,
  get: function get() {
    return _Event["default"];
  }
});
Object.defineProperty(exports, "Window", {
  enumerable: true,
  get: function get() {
    return _Window["default"];
  }
});
Object.defineProperty(exports, "Key", {
  enumerable: true,
  get: function get() {
    return _Key["default"];
  }
});
Object.defineProperty(exports, "Keyboard", {
  enumerable: true,
  get: function get() {
    return _Keyboard["default"];
  }
});
Object.defineProperty(exports, "Swipe", {
  enumerable: true,
  get: function get() {
    return _Swipe["default"];
  }
});
Object.defineProperty(exports, "encodeBase64", {
  enumerable: true,
  get: function get() {
    return string.encodeBase64;
  }
});
Object.defineProperty(exports, "decodeBase64", {
  enumerable: true,
  get: function get() {
    return string.decodeBase64;
  }
});
Object.defineProperty(exports, "encodeUtf8", {
  enumerable: true,
  get: function get() {
    return string.encodeUtf8;
  }
});
Object.defineProperty(exports, "decodeUtf8", {
  enumerable: true,
  get: function get() {
    return string.decodeUtf8;
  }
});

var _Document = _interopRequireDefault(Document_1);

var _Event = _interopRequireDefault(Event_1);

var _Window = _interopRequireDefault(Window_1);

var _Key = _interopRequireDefault(Key_1);

var _Keyboard = _interopRequireDefault(Keyboard_1);

var _Swipe = _interopRequireDefault(Swipe_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

});

const index$1 = unwrapExports(dist);
var dist_1 = dist.Document;
var dist_2 = dist.Event;
var dist_3 = dist.Key;
var dist_4 = dist.Swipe;

export { dist_3 as a, dist_2 as b, dist_1 as c, dist_4 as d };
