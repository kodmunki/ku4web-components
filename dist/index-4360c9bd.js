import { d as dist$1, c as createCommonjsModule, u as unwrapExports } from './index-79290777.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vRXZlbnQuanMiXSwibmFtZXMiOlsiX2V2dCIsIkV2ZW50IiwiZXZlbnQiLCJBc3NlcnQiLCJleGlzdHMiLCJpc0Z1bmN0aW9uIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxFQUFiO0FBRUE7Ozs7OztJQUtxQkMsSzs7Ozs7Ozs7OztBQUVuQjs7Ozs7Ozs7eUJBUVlDLEssRUFBTztBQUNqQixVQUFHLENBQUNDLG9CQUFPQyxNQUFQLENBQWNGLEtBQWQsQ0FBSixFQUEwQjtBQUFFLGVBQU8sS0FBUDtBQUFlOztBQUMzQyxVQUFHQyxvQkFBT0UsVUFBUCxDQUFrQkgsS0FBSyxDQUFDSSxjQUF4QixDQUFILEVBQTRDO0FBQUVKLFFBQUFBLEtBQUssQ0FBQ0ksY0FBTjtBQUF5Qjs7QUFDdkUsVUFBR0gsb0JBQU9FLFVBQVAsQ0FBa0JILEtBQUssQ0FBQ0ssZUFBeEIsQ0FBSCxFQUE2QztBQUFFTCxRQUFBQSxLQUFLLENBQUNLLGVBQU47QUFBMEI7O0FBQ3pFLFVBQUdKLG9CQUFPRSxVQUFQLENBQWtCSCxLQUFLLENBQUNNLHdCQUF4QixDQUFILEVBQXNEO0FBQUVOLFFBQUFBLEtBQUssQ0FBQ00sd0JBQU47QUFBbUM7O0FBQzNGLFVBQUdMLG9CQUFPQyxNQUFQLENBQWNGLEtBQUssQ0FBQ08sWUFBcEIsQ0FBSCxFQUFzQztBQUFFUCxRQUFBQSxLQUFLLENBQUNPLFlBQU4sR0FBcUIsSUFBckI7QUFBNEI7O0FBQ3BFLGFBQU8sS0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozt3QkFZV0MsTyxFQUFTUixLLEVBQU9TLFEsRUFBVUMsTyxFQUFTO0FBQzVDLFVBQU1DLEVBQUUsR0FBRyx1QkFBWDtBQUNBYixNQUFBQSxJQUFJLENBQUNhLEVBQUQsQ0FBSixHQUFXO0FBQUVILFFBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXUixRQUFBQSxLQUFLLEVBQUxBLEtBQVg7QUFBa0JTLFFBQUFBLFFBQVEsRUFBUkEsUUFBbEI7QUFBNEJDLFFBQUFBLE9BQU8sRUFBUEE7QUFBNUIsT0FBWDtBQUNBRixNQUFBQSxPQUFPLENBQUNJLGdCQUFSLENBQXlCWixLQUF6QixFQUFnQ1MsUUFBaEMsRUFBMENDLE9BQTFDO0FBQ0EsYUFBT0MsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7MkJBT2NBLEUsRUFBSTtBQUFBLG9CQUM4QmIsSUFBSSxDQUFDYSxFQUFELENBRGxDO0FBQUEsVUFDUkgsT0FEUSxXQUNSQSxPQURRO0FBQUEsVUFDQ1IsS0FERCxXQUNDQSxLQUREO0FBQUEsVUFDUVMsUUFEUixXQUNRQSxRQURSO0FBQUEsVUFDa0JDLE9BRGxCLFdBQ2tCQSxPQURsQjtBQUVoQkYsTUFBQUEsT0FBTyxDQUFDSyxtQkFBUixDQUE0QmIsS0FBNUIsRUFBbUNTLFFBQW5DLEVBQTZDQyxPQUE3QztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNzZXJ0LCB1aWQgfSBmcm9tICdrdTRlcy1rZXJuZWwnO1xuXG5jb25zdCBfZXZ0ID0geyB9O1xuXG4vKipcbiAqIEBjbGFzcyBFdmVudFxuICogQHN1bW1hcnkgRXZlbnQgYWJzdHJhY3Rpb25cbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnQge1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBIYXJkIHN0b3BzIGFueSBmdXJ0aGVyIGFjdGl2aXR5IGZyb20gcGFzc2VkIGV2ZW50LlxuICAgKiBAbWVtYmVyT2YgRXZlbnRcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gRXZlbnQgdG8gaGFyZCBzdG9wLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBtdXRlKGV2ZW50KSB7XG4gICAgaWYoIUFzc2VydC5leGlzdHMoZXZlbnQpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmKEFzc2VydC5pc0Z1bmN0aW9uKGV2ZW50LnByZXZlbnREZWZhdWx0KSkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgaWYoQXNzZXJ0LmlzRnVuY3Rpb24oZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSkgeyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIGlmKEFzc2VydC5pc0Z1bmN0aW9uKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikpIHsgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7IH1cbiAgICBpZihBc3NlcnQuZXhpc3RzKGV2ZW50LmNhbmNlbEJ1YmJsZSkpIHsgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTsgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBBZGRzIGFuIGV2ZW50IGxpc3RlciB0byB0YXJnZXQgZWxlbWVudCBhbmQgcmV0dXJucyBhbiBpZCBmb3IgZnV0dXJlXG4gICAqIGV2ZW50IGxpc3RlbmVyIHJlbW92YWwgYW5kIG1lbW9yeSBsZWFrIHByZXZlbnRpb24uXG4gICAqIEBtZW1iZXJPZiBFdmVudFxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhZGQgZXZlbnQgbGlzdGVuZXIgdG8uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIGV2ZW50IHRvIHN1YnNjcmliZSB0by5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBtZXRob2QgdG8gY2FsbCB3aGVuIGNsaWNrIGV2ZW50IGZpcmVzLlxuICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zIC0gVUlFdmVudCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgc3RhdGljIGFkZChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IHVpZCgpO1xuICAgIF9ldnRbaWRdID0geyBlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMgfTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmVtb3ZlcyBldmVudCBsaXN0ZW5lciBzdWJzY3JpYmVkIHdpdGggYEV2ZW50LmFkZGBcbiAgICogQG1lbWJlck9mIEV2ZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBJZCByZXR1cm5lZCBmcm9tIGBFdmVudC5hZGRgXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlKGlkKSB7XG4gICAgY29uc3QgeyBlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMgfSA9IF9ldnRbaWRdO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9XG5cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vRG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJwb3NpdGlvbiIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnRXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImRvY3VtZW50SGVpZ2h0Iiwib3ZlcmZsb3dZIiwic2Nyb2xsWCIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxUbyIsImNhbGxiYWNrIiwib3B0aW9ucyIsIkV2ZW50IiwiYWRkIiwiaWQiLCJyZW1vdmUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJBc3NlcnQiLCJleGlzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCQSxROzs7Ozs7Ozs7O0FBcUNuQjs7Ozs7O29DQU11QjtBQUNyQkEsTUFBQUEsUUFBUSxDQUFDQyxRQUFULEdBQW9CQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkgsUUFBeEM7QUFDQUQsTUFBQUEsUUFBUSxDQUFDSyxHQUFULEdBQWVILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxHQUFuQztBQUNBTCxNQUFBQSxRQUFRLENBQUNNLElBQVQsR0FBZ0JKLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CRSxJQUFwQztBQUNBTixNQUFBQSxRQUFRLENBQUNPLEtBQVQsR0FBaUJMLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CRyxLQUFyQztBQUNBUCxNQUFBQSxRQUFRLENBQUNRLE1BQVQsR0FBa0JOLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CSSxNQUF0QztBQUNBUixNQUFBQSxRQUFRLENBQUNTLGFBQVQsR0FBeUJQLFFBQVEsQ0FBQ1EsZUFBVCxDQUF5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dCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxuLyoqXG4gKiBAY2xhc3MgRG9jdW1lbnRcbiAqIEBzdW1tYXJ5IERvY3VtZW50IGFic3RyYWN0aW9uXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IHtcblxuICBzdGF0aWMgcG9zaXRpb247XG5cbiAgc3RhdGljIGxlZnQ7XG5cbiAgc3RhdGljIHRvcDtcblxuICBzdGF0aWMgd2lkdGg7XG5cbiAgc3RhdGljIGhlaWdodDtcblxuICBzdGF0aWMgZG9jdW1lbnRXaWR0aDtcblxuICBzdGF0aWMgZG9jdW1lbnRIZWlnaHQ7XG5cbiAgc3RhdGljIG92ZXJmbG93WTtcblxuICBzdGF0aWMgc2Nyb2xsWDtcblxuICBzdGF0aWMgc2Nyb2xsWTtcblxuICBzdGF0aWMgZ2V0IHNjcm9sbGJhcldpZHRoKCkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIHRydWUgaWYgZG9jdW1lbnQgc2Nyb2xsaW5nIGlzIHByZXZlbnRlZFxuICAgKiBAbWVtYmVyT2YgRG9jdW1lbnRcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGdldCBpc1Njcm9sbFByZXZlbnRlZCgpIHtcbiAgICByZXR1cm4gQXNzZXJ0LmV4aXN0cyhEb2N1bWVudC5zY3JvbGxZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBQcmV2ZW50cyBkb2N1bWVudCBmcm9tIGJlaW5nIHNjcm9sbGFibGVcbiAgICogQG1lbWJlck9mIERvY3VtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHByZXZlbnRTY3JvbGwoKSB7XG4gICAgRG9jdW1lbnQucG9zaXRpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uO1xuICAgIERvY3VtZW50LnRvcCA9IGRvY3VtZW50LmJvZHkuc3R5bGUudG9wO1xuICAgIERvY3VtZW50LmxlZnQgPSBkb2N1bWVudC5ib2R5LnN0eWxlLmxlZnQ7XG4gICAgRG9jdW1lbnQud2lkdGggPSBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoO1xuICAgIERvY3VtZW50LmhlaWdodCA9IGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0O1xuICAgIERvY3VtZW50LmRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2lkdGg7XG4gICAgRG9jdW1lbnQuZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0O1xuICAgIERvY3VtZW50Lm92ZXJmbG93WSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgRG9jdW1lbnQuc2Nyb2xsWCA9IHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICBEb2N1bWVudC5zY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgY29uc3QgeyBzY3JvbGxiYXJXaWR0aCB9ID0gRG9jdW1lbnQ7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5sZWZ0ID0gYC0ke0RvY3VtZW50LnNjcm9sbFh9cHhgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYC0ke0RvY3VtZW50LnNjcm9sbFl9cHhgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBgY2FsYygxMDB2dyAtICR7c2Nyb2xsYmFyV2lkdGh9cHgpYDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMCUgKyAxcHgpJztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwd2gnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSBzY3JvbGxiYXJXaWR0aCAmJiAnc2Nyb2xsJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZXN1bWVzIHNjcm9sbGFiaWxpdHkgZm9yIGRvY3VtZW50IGFmdGVyIGJlaW5nXG4gICAqIHJlbmRlcmVkIHVuc2Nyb2xsYWJsZS5cbiAgICogQG1lbWJlck9mIERvY3VtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHJlc3VtZVNjcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gRG9jdW1lbnQucG9zaXRpb247XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBEb2N1bWVudC50b3A7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5sZWZ0ID0gRG9jdW1lbnQubGVmdDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gRG9jdW1lbnQud2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBEb2N1bWVudC5oZWlnaHQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndpZHRoID0gRG9jdW1lbnQuZG9jdW1lbnRXaWR0aDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gRG9jdW1lbnQuZG9jdW1lbnRIZWlnaHQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IERvY3VtZW50Lm92ZXJmbG93WTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oRG9jdW1lbnQuc2Nyb2xsWCwgRG9jdW1lbnQuc2Nyb2xsWSk7XG4gICAgRG9jdW1lbnQucG9zaXRpb24gPSBudWxsO1xuICAgIERvY3VtZW50LnRvcCA9IG51bGw7XG4gICAgRG9jdW1lbnQubGVmdCA9IG51bGw7XG4gICAgRG9jdW1lbnQud2lkdGggPSBudWxsO1xuICAgIERvY3VtZW50LmhlaWdodCA9IG51bGw7XG4gICAgRG9jdW1lbnQuZG9jdW1lbnRXaWR0aCA9IG51bGw7XG4gICAgRG9jdW1lbnQuZG9jdW1lbnRIZWlnaHQgPSBudWxsO1xuICAgIERvY3VtZW50Lm92ZXJmbG93WSA9IG51bGw7XG4gICAgRG9jdW1lbnQuc2Nyb2xsWCA9IG51bGw7XG4gICAgRG9jdW1lbnQuc2Nyb2xsWSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgU3Vic2NyaWJlcyB0byBjbGljayBldmVudCBhbmQgcmV0dXJucyBwb2ludGVyIHRvIHRoZSBzdWJzY3JpcHRpb25cbiAgICogdG8gYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0byB0aGUgZXZlbnQgYW5kIHByZXZlbnQgbWVtb3J5IGxlYWthZ2UuXG4gICAqIEBtZW1iZXJPZiBEb2N1bWVudFxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBtZXRob2QgdG8gY2FsbCB3aGVuIGNsaWNrIGV2ZW50IGZpcmVzLlxuICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zIC0gVUlFdmVudCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEV2ZW50SWQgLSBJZCBvZiBldmVudCBzdWJzY3JpcHRpb24uIFVzZSB0byByZW1vdmUgZXZlbnQuXG4gICAqL1xuICBzdGF0aWMgb25DbGljayhjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIHJldHVybiBFdmVudC5hZGQoZG9jdW1lbnQsICdjbGljaycsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBTdWJzY3JpYmVzIHRvIGtleXVwIGV2ZW50IGFuZCByZXR1cm5zIHBvaW50ZXIgdG8gdGhlIHN1YnNjcmlwdGlvblxuICAgKiB0byBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRvIHRoZSBldmVudCBhbmQgcHJldmVudCBtZW1vcnkgbGVha2FnZS5cbiAgICogQG1lbWJlck9mIERvY3VtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIG1ldGhvZCB0byBjYWxsIHdoZW4ga2V5dXAgZXZlbnQgZmlyZXMuXG4gICAqIEBwYXJhbSB7e319IG9wdGlvbnMgLSBVSUV2ZW50IG9wdGlvbnNcbiAgICogQHJldHVybnMge3N0cmluZ30gRXZlbnRJZCAtIElkIG9mIGV2ZW50IHN1YnNjcmlwdGlvbi4gVXNlIHRvIHJlbW92ZSBldmVudC5cbiAgICovXG4gIHN0YXRpYyBvbktleVVwKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIEV2ZW50LmFkZChkb2N1bWVudCwgJ2tleXVwJywgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJlbW92ZXMgZXZlbnQgbGlzdGVuZXIgc3Vic2NyaWJlZCB3aXRoIGBEb2N1bWVudC5bbWV0aG9kXWBcbiAgICogQG1lbWJlck9mIERvY3VtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBJZCByZXR1cm5lZCBmcm9tIGBEb2N1bWVudC5bbWV0aG9kXWBcbiAgICovXG4gIHN0YXRpYyByZW1vdmVFdmVudChpZCkge1xuICAgIEV2ZW50LnJlbW92ZShpZCk7XG4gIH1cblxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vV2luZG93LmpzIl0sIm5hbWVzIjpbIldpbmRvdyIsImNhbGxiYWNrIiwib3B0aW9ucyIsIkV2ZW50IiwiYWRkIiwid2luZG93IiwiaWQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUVBOzs7OztJQUtxQkEsTTs7Ozs7Ozs7OztBQUVuQjs7Ozs7Ozs7Ozs0QkFVZUMsUSxFQUFVQyxPLEVBQVM7QUFDaEMsYUFBT0Msa0JBQU1DLEdBQU4sQ0FBVUMsTUFBVixFQUFrQixPQUFsQixFQUEyQkosUUFBM0IsRUFBcUNDLE9BQXJDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OzRCQVVlRCxRLEVBQVVDLE8sRUFBUztBQUNoQyxhQUFPQyxrQkFBTUMsR0FBTixDQUFVQyxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCSixRQUEzQixFQUFxQ0MsT0FBckMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Z0NBT21CSSxFLEVBQUk7QUFDckJILHdCQUFNSSxNQUFOLENBQWFELEVBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxuLyoqXG4gKiBAY2xhc3MgV2luZG93XG4gKiBAc3VtbWFyeSBXaW5kb3cgYWJzdHJhY3Rpb25cbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IHtcblxuICAvKipcbiAgICogQHN1bW1hcnkgU3Vic2NyaWJlcyB0byBjbGljayBldmVudCBhbmQgcmV0dXJucyBwb2ludGVyIHRvIHRoZSBzdWJzY3JpcHRpb25cbiAgICogdG8gYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0byB0aGUgZXZlbnQgYW5kIHByZXZlbnQgbWVtb3J5IGxlYWthZ2UuXG4gICAqIEBtZW1iZXJPZiBXaW5kb3dcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gbWV0aG9kIHRvIGNhbGwgd2hlbiBjbGljayBldmVudCBmaXJlcy5cbiAgICogQHBhcmFtIHt7fX0gb3B0aW9ucyAtIFVJRXZlbnQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBFdmVudElkIC0gSWQgb2YgZXZlbnQgc3Vic2NyaXB0aW9uLiBVc2UgdG8gcmVtb3ZlIGV2ZW50LlxuICAgKi9cbiAgc3RhdGljIG9uQ2xpY2soY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gRXZlbnQuYWRkKHdpbmRvdywgJ2NsaWNrJywgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFN1YnNjcmliZXMgdG8ga2V5dXAgZXZlbnQgYW5kIHJldHVybnMgcG9pbnRlciB0byB0aGUgc3Vic2NyaXB0aW9uXG4gICAqIHRvIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdG8gdGhlIGV2ZW50IGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrYWdlLlxuICAgKiBAbWVtYmVyT2YgV2luZG93XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIG1ldGhvZCB0byBjYWxsIHdoZW4ga2V5dXAgZXZlbnQgZmlyZXMuXG4gICAqIEBwYXJhbSB7e319IG9wdGlvbnMgLSBVSUV2ZW50IG9wdGlvbnNcbiAgICogQHJldHVybnMge3N0cmluZ30gRXZlbnRJZCAtIElkIG9mIGV2ZW50IHN1YnNjcmlwdGlvbi4gVXNlIHRvIHJlbW92ZSBldmVudC5cbiAgICovXG4gIHN0YXRpYyBvbktleVVwKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIEV2ZW50LmFkZCh3aW5kb3csICdrZXl1cCcsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZW1vdmVzIGV2ZW50IGxpc3RlbmVyIHN1YnNjcmliZWQgd2l0aCBgV2luZG93LlttZXRob2RdYFxuICAgKiBAbWVtYmVyT2YgV2luZG93XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBJZCByZXR1cm5lZCBmcm9tIGBXaW5kb3cuW21ldGhvZF1gXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlRXZlbnQoaWQpIHtcbiAgICBFdmVudC5yZW1vdmUoaWQpO1xuICB9XG5cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pby9LZXkuanMiXSwibmFtZXMiOlsiS2V5IiwiTUROS2V5SWRlbnRpZmllciIsIk1TS2V5SWRlbnRpZmllciIsImtleSIsIm1zS2V5Iiwib3RoZXIiLCJldmVudCIsImNvZGUiLCJ2YWx1ZSIsImVxdWFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFxQkEsRzs7O0FBQ25COzs7Ozs7Ozs7QUFTQSxlQUFZQyxnQkFBWixFQUE4QkMsZUFBOUIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0MsR0FBTCxHQUFXRixnQkFBWDtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsZUFBZSxJQUFJRCxnQkFBaEM7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7MkJBUU9JLEssRUFBTztBQUNaLGFBQ0VBLEtBQUssWUFBWUwsR0FBakIsS0FDQyxLQUFLRyxHQUFMLEtBQWFFLEtBQUssQ0FBQ0YsR0FBbkIsSUFBMEIsS0FBS0MsS0FBTCxLQUFlQyxLQUFLLENBQUNELEtBRGhELENBREY7QUFJRDtBQUVEOzs7Ozs7Ozs7Ozs0QkFRUUUsSyxFQUFPO0FBQUEsVUFDTEMsSUFESyxHQUNTRCxLQURULENBQ0xDLElBREs7QUFBQSxVQUNDSixHQURELEdBQ1NHLEtBRFQsQ0FDQ0gsR0FERDtBQUViLFVBQU1LLEtBQUssR0FBR0wsR0FBRyxLQUFLLE1BQVIsR0FBaUJJLElBQWpCLEdBQXdCSixHQUF0QztBQUNBLGFBQU9HLEtBQUssS0FBSyxLQUFLRyxNQUFMLENBQVksSUFBSVQsR0FBSixDQUFRUSxLQUFSLENBQVosS0FBK0IsS0FBS0wsR0FBTCxLQUFhLEtBQWpELENBQVo7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9tQjtBQUNqQixhQUFPLFVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9rQjtBQUNoQixhQUFPLFNBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9nQjtBQUNkLGFBQU8sT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7d0JBT2lCO0FBQ2YsYUFBTyxJQUFJSCxHQUFKLENBQVEsS0FBUixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozt3QkFPaUI7QUFDZixhQUFPLElBQUlBLEdBQUosQ0FBUSxRQUFSLEVBQWtCLEtBQWxCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9tQjtBQUNqQixhQUFPLElBQUlBLEdBQUosQ0FBUSxPQUFSLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9tQjtBQUNqQixhQUFPLElBQUlBLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBYixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozt3QkFPaUI7QUFDZixhQUFPLElBQUlBLEdBQUosQ0FBUSxLQUFSLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9rQjtBQUNoQixhQUFPLElBQUlBLEdBQUosQ0FBUSxXQUFSLEVBQXFCLE1BQXJCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O3dCQU9tQjtBQUNqQixhQUFPLElBQUlBLEdBQUosQ0FBUSxZQUFSLEVBQXNCLE9BQXRCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3IgS2V5XG4gICAqIEBzdW1tYXJ5IEtleWJvYXJkIEtleSBhYnN0cmFjdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gTUROS2V5SWRlbnRpZmllciAtIFRoZSBNRE4gS2V5IElkZW50aWZpZXJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5L0tleV9WYWx1ZXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtNU0tleUlkZW50aWZpZXJdIC0gVGhlIE1pY3Jvc29mdCBLZXkgSWRlbnRpZmllciBmb3IgdGhvc2VcbiAgICoga2V5cyB0aGF0IGhhdmUgYnJvd3NlciBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbnMgZm9yIE1TXG4gICAqIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2llL2dnMzA1NTY4KHY9dnMuOTQpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihNRE5LZXlJZGVudGlmaWVyLCBNU0tleUlkZW50aWZpZXIpIHtcbiAgICB0aGlzLmtleSA9IE1ETktleUlkZW50aWZpZXI7XG4gICAgdGhpcy5tc0tleSA9IE1TS2V5SWRlbnRpZmllciB8fCBNRE5LZXlJZGVudGlmaWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJldHVybnMgdHJ1ZSBpZiB0aGlzIEtleSBlcXVhbHMgb3RoZXIuXG4gICAqIEBtZW1iZXJPZiBLZXlcbiAgICogQHB1YmxpY1xuICAgKiBAaW5zdGFuY2VcbiAgICogQHBhcmFtIHtLZXl9IG90aGVyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG90aGVyIGluc3RhbmNlb2YgS2V5ICYmXG4gICAgICAodGhpcy5rZXkgPT09IG90aGVyLmtleSB8fCB0aGlzLm1zS2V5ID09PSBvdGhlci5tc0tleSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJldHVybnMgdHJ1ZSBpZiB0aGlzIEtleSBkaWQgZmlyZSBldmVudC5cbiAgICogQG1lbWJlck9mIEtleVxuICAgKiBAcHVibGljXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZGlkRmlyZShldmVudCkge1xuICAgIGNvbnN0IHsgY29kZSwga2V5IH0gPSBldmVudDtcbiAgICBjb25zdCB2YWx1ZSA9IGtleSA9PT0gJ0RlYWQnID8gY29kZSA6IGtleTtcbiAgICByZXR1cm4gZXZlbnQgJiYgKHRoaXMuZXF1YWxzKG5ldyBLZXkodmFsdWUpKSB8fCB0aGlzLmtleSA9PT0gJ0FOWScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJldHVybnMgYSBLZXkgYWN0aW9uIGtleXByZXNzLlxuICAgKiBAbWVtYmVyT2YgS2V5XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJucyB7S2V5fVxuICAgKi9cbiAgc3RhdGljIGdldCBwcmVzcygpIHtcbiAgICByZXR1cm4gJ2tleXByZXNzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgS2V5IGFjdGlvbiBrZXlkb3duLlxuICAgKiBAbWVtYmVyT2YgS2V5XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJucyB7S2V5fVxuICAgKi9cbiAgc3RhdGljIGdldCBkb3duKCkge1xuICAgIHJldHVybiAna2V5ZG93bic7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmV0dXJucyBhIEtleSBhY3Rpb24ga2V5dXAuXG4gICAqIEBtZW1iZXJPZiBLZXlcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm5zIHtLZXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHVwKCkge1xuICAgIHJldHVybiAna2V5dXAnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJldHVybnMgYSBLZXkgdGhhdCB3aWxsIGVxdWFsIGFueSBvdGhlciBLZXkuXG4gICAqIEBtZW1iZXJPZiBLZXlcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm5zIHtLZXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGFueSgpIHtcbiAgICByZXR1cm4gbmV3IEtleSgnQU5ZJyk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmV0dXJucyBLZXksIEVzYWNwZS5cbiAgICogQG1lbWJlck9mIEtleVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybnMge0tleX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZXNjKCkge1xuICAgIHJldHVybiBuZXcgS2V5KCdFc2NhcGUnLCAnRXNjJyk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmV0dXJucyBLZXksIEVudGVyLlxuICAgKiBAbWVtYmVyT2YgS2V5XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJucyB7S2V5fVxuICAgKi9cbiAgc3RhdGljIGdldCBlbnRlcigpIHtcbiAgICByZXR1cm4gbmV3IEtleSgnRW50ZXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIEtleSwgU3BhY2UuXG4gICAqIEBtZW1iZXJPZiBLZXlcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm5zIHtLZXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNwYWNlKCkge1xuICAgIHJldHVybiBuZXcgS2V5KCcgJywgJ1NwYWNlYmFyJyk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmV0dXJucyBLZXksIFRhYi5cbiAgICogQG1lbWJlck9mIEtleVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybnMge0tleX1cbiAgICovXG4gIHN0YXRpYyBnZXQgdGFiKCkge1xuICAgIHJldHVybiBuZXcgS2V5KCdUYWInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIEtleSwgTGVmdCBBcnJvdy5cbiAgICogQG1lbWJlck9mIEtleVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybnMge0tleX1cbiAgICovXG4gIHN0YXRpYyBnZXQgbGVmdCgpIHtcbiAgICByZXR1cm4gbmV3IEtleSgnQXJyb3dMZWZ0JywgJ0xlZnQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIEtleSwgUmlnaHQgQXJyb3cuXG4gICAqIEBtZW1iZXJPZiBLZXlcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm5zIHtLZXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHJpZ2h0KCkge1xuICAgIHJldHVybiBuZXcgS2V5KCdBcnJvd1JpZ2h0JywgJ1JpZ2h0Jyk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pby9LZXlib2FyZC5qcyJdLCJuYW1lcyI6WyJLZXlib2FyZCIsImV2ZW50Iiwia2V5IiwibWV0aG9kIiwiY2FwdHVyZSIsImxpc3RlbmVyIiwiZSIsImRpZEZpcmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidW5zdWJzY3JpYmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib24iLCJLZXkiLCJwcmVzcyIsImRvd24iLCJ1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7O0FBRW5COzs7Ozs7Ozs7Ozt1QkFXVUMsSyxFQUFPQyxHLEVBQUtDLE0sRUFBeUI7QUFBQSxVQUFqQkMsT0FBaUIsdUVBQVAsS0FBTzs7QUFDN0MsVUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsQ0FBQztBQUFBLGVBQUtKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZRCxDQUFaLElBQWlCSCxNQUFNLENBQUNHLENBQUQsRUFBSUosR0FBSixDQUF2QixHQUFrQyxJQUF2QztBQUFBLE9BQWxCOztBQUNBTSxNQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCUixLQUF4QixFQUErQkksUUFBL0IsRUFBeUNELE9BQXpDO0FBQ0EsYUFBTztBQUNMTSxRQUFBQSxXQUFXLEVBQUUsdUJBQU07QUFDakJGLFVBQUFBLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkJWLEtBQTNCLEVBQWtDSSxRQUFsQztBQUNEO0FBSEksT0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7K0JBVWtCSCxHLEVBQUtDLE0sRUFBeUI7QUFBQSxVQUFqQkMsT0FBaUIsdUVBQVAsS0FBTztBQUM5QyxhQUFPSixRQUFRLENBQUNZLEVBQVQsQ0FBWUMsZ0JBQUlDLEtBQWhCLEVBQXVCWixHQUF2QixFQUE0QkMsTUFBNUIsRUFBb0NDLE9BQXBDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OzhCQVVpQkYsRyxFQUFLQyxNLEVBQXlCO0FBQUEsVUFBakJDLE9BQWlCLHVFQUFQLEtBQU87QUFDN0MsYUFBT0osUUFBUSxDQUFDWSxFQUFULENBQVlDLGdCQUFJRSxJQUFoQixFQUFzQmIsR0FBdEIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs0QkFVZUYsRyxFQUFLQyxNLEVBQXlCO0FBQUEsVUFBakJDLE9BQWlCLHVFQUFQLEtBQU87QUFDM0MsYUFBT0osUUFBUSxDQUFDWSxFQUFULENBQVlDLGdCQUFJRyxFQUFoQixFQUFvQmQsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDQyxPQUFqQyxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBTdWJzY3JpYmVzIHRvIGtleWJvYXJkIGV2ZW50XG4gICAqIEBtZW1iZXJPZiBEb2N1bWVudFxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZVxuICAgKiBAcmV0dXJucyB7e3Vuc3Vic2NyaWJlOiB1bnN1YnNjcmliZX19XG4gICAqL1xuICBzdGF0aWMgb24oZXZlbnQsIGtleSwgbWV0aG9kLCBjYXB0dXJlID0gZmFsc2UpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGUgPT4gKGtleS5kaWRGaXJlKGUpID8gbWV0aG9kKGUsIGtleSkgOiBudWxsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFN1YnNjcmliZXMgdG8ga2V5Ym9hcmQga2V5cHJlc3MgZXZlbnRcbiAgICogQG1lbWJlck9mIERvY3VtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge0tleX0ga2V5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmVcbiAgICogQHJldHVybnMge3t1bnN1YnNjcmliZTogdW5zdWJzY3JpYmV9fVxuICAgKi9cbiAgc3RhdGljIG9uS2V5UHJlc3Moa2V5LCBtZXRob2QsIGNhcHR1cmUgPSBmYWxzZSkge1xuICAgIHJldHVybiBLZXlib2FyZC5vbihLZXkucHJlc3MsIGtleSwgbWV0aG9kLCBjYXB0dXJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBTdWJzY3JpYmVzIHRvIGtleWJvYXJkIGtleWRvd24gZXZlbnRcbiAgICogQG1lbWJlck9mIERvY3VtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge0tleX0ga2V5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmVcbiAgICogQHJldHVybnMge3t1bnN1YnNjcmliZTogdW5zdWJzY3JpYmV9fVxuICAgKi9cbiAgc3RhdGljIG9uS2V5RG93bihrZXksIG1ldGhvZCwgY2FwdHVyZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIEtleWJvYXJkLm9uKEtleS5kb3duLCBrZXksIG1ldGhvZCwgY2FwdHVyZSk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgU3Vic2NyaWJlcyB0byBrZXlib2FyZCBrZXl1cCBldmVudFxuICAgKiBAbWVtYmVyT2YgRG9jdW1lbnRcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZVxuICAgKiBAcmV0dXJucyB7e3Vuc3Vic2NyaWJlOiB1bnN1YnNjcmliZX19XG4gICAqL1xuICBzdGF0aWMgb25LZXlVcChrZXksIG1ldGhvZCwgY2FwdHVyZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIEtleWJvYXJkLm9uKEtleS51cCwga2V5LCBtZXRob2QsIGNhcHR1cmUpO1xuICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pby9Td2lwZS5qcyJdLCJuYW1lcyI6WyJTd2lwZSIsImVsZW1lbnQiLCJ0b2xlcmFuY2UiLCJkaWRUb3VjaFN0YXJ0IiwiYmluZCIsImRpZFRvdWNoRW5kIiwiZGlkVG91Y2hNb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJwYXNzaXZlIiwibWV0aG9kIiwiZGlkU3dpcGVMZWZ0IiwiZGlkU3dpcGVSaWdodCIsImRpZE1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG91Y2hlcyIsInRvdWNoIiwidG91Y2hTdGFydFBvaW50IiwiUG9pbnQiLCJwYWdlWCIsInBhZ2VZIiwiZSIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hFbmRQb2ludCIsImlzTGVmdE9mIiwiTWF0aCIsImFicyIsImRpc3RhbmNlRnJvbSIsIngiLCJpc1JpZ2h0T2YiLCJkaXN0YW5jZSIsInVwIiwiaXNBYm92ZSIsImRvd24iLCJpc0JlbG93IiwibGVmdCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7O0FBYW5COzs7Ozs7QUFNQSxpQkFBWUMsT0FBWixFQUFvQztBQUFBLFFBQWZDLFNBQWUsdUVBQUgsQ0FBRzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwwQ0FackIsWUFBTSxDQUFFLENBWWE7O0FBQUEsMkNBVnBCLFlBQU0sQ0FBRSxDQVVZOztBQUFBLHFDQVIxQixZQUFNLENBQUUsQ0FRa0I7O0FBQ2xDLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0UsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUVBSCxJQUFBQSxPQUFPLENBQUNN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S1AsT0FBTCxDQUFhO0FBQ1hpQixRQUFBQSxRQUFRLEVBQUVQLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQlYsZUFBM0IsQ0FEQztBQUVYYyxRQUFBQSxFQUFFLEVBQUVSLGFBQWEsQ0FBQ1MsT0FBZCxDQUFzQmYsZUFBdEIsQ0FGTztBQUdYZ0IsUUFBQUEsSUFBSSxFQUFFVixhQUFhLENBQUNXLE9BQWQsQ0FBc0JqQixlQUF0QixDQUhLO0FBSVhrQixRQUFBQSxJQUFJLEVBQUVaLGFBQWEsQ0FBQ0MsUUFBZCxDQUF1QlAsZUFBdkIsQ0FKSztBQUtYbUIsUUFBQUEsS0FBSyxFQUFFYixhQUFhLENBQUNNLFNBQWQsQ0FBd0JaLGVBQXhCO0FBTEksT0FBYjtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdrdTRlcy1rZXJuZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZSB7XG4gIGVsZW1lbnQ7XG5cbiAgdG9sZXJhbmNlO1xuXG4gIHRvdWNoU3RhcnRQb2ludDtcblxuICBkaWRTd2lwZUxlZnQgPSAoKSA9PiB7fTtcblxuICBkaWRTd2lwZVJpZ2h0ID0gKCkgPT4ge307XG5cbiAgZGlkTW92ZSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3IgU3dpcGVcbiAgICogQHN1bW1hcnkgRW5jYXBzdWxhdGVzIHRvdWNoIGV2ZW50IG1hbmFnZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fSAtIEVsZW1lbnQgdGhhdCB3aWxsIGxpc3RlbiBmb3Igc3dpcGUgZXZlbnRzLlxuICAgKiBAcGFyYW0gdG9sZXJhbmNlIHtudW1iZXJ9IC0gVGhlIGRpc3RhbmNlIGluIHBpeGVscyBhIHN3aXBlIG11c3QgdHJhdmVsIHRvIHRyaWdnZXIgYSBzd2lwZSBldmVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRvbGVyYW5jZSA9IDApIHtcbiAgICB0aGlzLmRpZFRvdWNoU3RhcnQgPSB0aGlzLmRpZFRvdWNoU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpZFRvdWNoRW5kID0gdGhpcy5kaWRUb3VjaEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlkVG91Y2hNb3ZlID0gdGhpcy5kaWRUb3VjaE1vdmUuYmluZCh0aGlzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZGlkVG91Y2hTdGFydCwgeyBjYXB0dXJlOiBmYWxzZSwgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kaWRUb3VjaEVuZCwgIHsgY2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWUgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRpZFRvdWNoTW92ZSwgIHsgY2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFN1YnNjcmliZXMgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHVzZXIgc3dpcGVzIGxlZnQuXG4gICAqIEBtZW1iZXJPZiBTd2lwZVxuICAgKiBAcHVibGljXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXRob2RcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuICBvbkxlZnQobWV0aG9kKSB7XG4gICAgdGhpcy5kaWRTd2lwZUxlZnQgPSBtZXRob2Q7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgU3Vic2NyaWJlcyBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gdXNlciBzd2lwZXMgcmlnaHQuXG4gICAqIEBtZW1iZXJPZiBTd2lwZVxuICAgKiBAcHVibGljXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXRob2RcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuICBvblJpZ2h0KG1ldGhvZCkge1xuICAgIHRoaXMuZGlkU3dpcGVSaWdodCA9IG1ldGhvZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBTdWJzY3JpYmVzIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiB1c2VyIHN3aXBlcy5cbiAgICogQG1lbWJlck9mIFN3aXBlXG4gICAqIEBwdWJsaWNcbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZFxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG4gIG9uTW92ZShtZXRob2QpIHtcbiAgICB0aGlzLmRpZE1vdmUgPSBtZXRob2Q7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgQ2xlYW4gdXAgYWxsIHBvdGVudGlhbCBtZW1vcnkgbGVha3MuXG4gICAqIEBtZW1iZXJPZiBTd2lwZVxuICAgKiBAcHVibGljXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZGlkVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRpZFRvdWNoRW5kLCBmYWxzZSk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRpZFRvdWNoTW92ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlkVG91Y2hTdGFydCh7dG91Y2hlczogW3RvdWNoXX0pIHtcbiAgICB0aGlzLnRvdWNoU3RhcnRQb2ludCA9IG5ldyBQb2ludCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuICB9XG5cbiAgZGlkVG91Y2hFbmQoZSkge1xuICAgIGNvbnN0IFt0b3VjaF0gPSBlLmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IHsgdG91Y2hTdGFydFBvaW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IHRvdWNoRW5kUG9pbnQgPSBuZXcgUG9pbnQodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblxuICAgIGlmIChcbiAgICAgIHRvdWNoRW5kUG9pbnQuaXNMZWZ0T2YodG91Y2hTdGFydFBvaW50KSAmJlxuICAgICAgTWF0aC5hYnModG91Y2hFbmRQb2ludC5kaXN0YW5jZUZyb20odG91Y2hTdGFydFBvaW50KS54KSA+IHRoaXMudG9sZXJhbmNlXG4gICAgKSB7XG4gICAgICB0aGlzLmRpZFN3aXBlTGVmdChlKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdG91Y2hFbmRQb2ludC5pc1JpZ2h0T2YodG91Y2hTdGFydFBvaW50KSAmJlxuICAgICAgTWF0aC5hYnModG91Y2hFbmRQb2ludC5kaXN0YW5jZUZyb20odG91Y2hTdGFydFBvaW50KS54KSA+IHRoaXMudG9sZXJhbmNlXG4gICAgKSB7XG4gICAgICB0aGlzLmRpZFN3aXBlUmlnaHQoZSk7XG4gICAgfVxuICB9XG5cbiAgZGlkVG91Y2hNb3ZlKGUpIHtcbiAgICBjb25zdCBbdG91Y2hdID0gZS50b3VjaGVzO1xuICAgIGNvbnN0IHsgdG91Y2hTdGFydFBvaW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IHRvdWNoRW5kUG9pbnQgPSBuZXcgUG9pbnQodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblxuICAgIHRoaXMuZGlkTW92ZSh7XG4gICAgICBkaXN0YW5jZTogdG91Y2hFbmRQb2ludC5kaXN0YW5jZUZyb20odG91Y2hTdGFydFBvaW50KSxcbiAgICAgIHVwOiB0b3VjaEVuZFBvaW50LmlzQWJvdmUodG91Y2hTdGFydFBvaW50KSxcbiAgICAgIGRvd246IHRvdWNoRW5kUG9pbnQuaXNCZWxvdyh0b3VjaFN0YXJ0UG9pbnQpLFxuICAgICAgbGVmdDogdG91Y2hFbmRQb2ludC5pc0xlZnRPZih0b3VjaFN0YXJ0UG9pbnQpLFxuICAgICAgcmlnaHQ6IHRvdWNoRW5kUG9pbnQuaXNSaWdodE9mKHRvdWNoU3RhcnRQb2ludCksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiZW5jb2RlQmFzZTY0Iiwic3RyaW5nIiwiQXNzZXJ0IiwiaXNTdHJpbmciLCJFcnJvciIsIndpbmRvdyIsImJ0b2EiLCJkZWNvZGVCYXNlNjQiLCJhdG9iIiwiZW5jb2RlVXRmOCIsImRlY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRlY29kZVV0ZjgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7QUFLQSxTQUFTQSxZQUFULENBQXNCQyxNQUF0QixFQUE4QjtBQUM1QixNQUFHLENBQUNDLG9CQUFPQyxRQUFQLENBQWdCRixNQUFoQixDQUFKLEVBQTZCO0FBQzNCLFVBQU0sSUFBSUcsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsTUFBWixDQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQVNNLFlBQVQsQ0FBc0JOLE1BQXRCLEVBQThCO0FBQzVCLE1BQUcsQ0FBQ0Msb0JBQU9DLFFBQVAsQ0FBZ0JGLE1BQWhCLENBQUosRUFBNkI7QUFDM0IsVUFBTSxJQUFJRyxLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9DLE1BQU0sQ0FBQ0csSUFBUCxDQUFZUCxNQUFaLENBQVA7QUFDRDtBQUVEOzs7Ozs7O0FBS0EsU0FBU1EsVUFBVCxDQUFvQlIsTUFBcEIsRUFBNEI7QUFDMUIsTUFBRyxDQUFDQyxvQkFBT0MsUUFBUCxDQUFnQkYsTUFBaEIsQ0FBSixFQUE2QjtBQUFFLFVBQU0sSUFBSUcsS0FBSixDQUFVLGtDQUFWLENBQU47QUFBc0Q7O0FBQ3JGLFNBQU9NLGtCQUFrQixDQUFDQyxrQkFBa0IsQ0FBQ1YsTUFBRCxDQUFuQixDQUF6QjtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxTQUFTVyxVQUFULENBQW9CWCxNQUFwQixFQUE0QjtBQUMxQixNQUFHLENBQUNDLG9CQUFPQyxRQUFQLENBQWdCRixNQUFoQixDQUFKLEVBQTZCO0FBQUUsVUFBTSxJQUFJRyxLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUFzRDs7QUFDckYsU0FBT00sa0JBQWtCLENBQUNDLGtCQUFrQixDQUFDVixNQUFELENBQW5CLENBQXpCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3NlcnQgfSBmcm9tICdrdTRlcy1rZXJuZWwnO1xuXG4vKipcbiAqIEBzdW1tYXJ5IEJhc2U2NCBlbmNvZGVzIGEgc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIHN0cmluZyB0byBlbmNvZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUJhc2U2NChzdHJpbmcpIHtcbiAgaWYoIUFzc2VydC5pc1N0cmluZyhzdHJpbmcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZW5jb2RlIG5vbi1zdHJpbmcgdmFsdWVzLicpO1xuICB9XG4gIHJldHVybiB3aW5kb3cuYnRvYShzdHJpbmcpO1xufVxuXG4vKipcbiAqIEBzdW1tYXJ5IERlY29kZXMgQmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIHN0cmluZyB0byBkZWNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBkZWNvZGVCYXNlNjQoc3RyaW5nKSB7XG4gIGlmKCFBc3NlcnQuaXNTdHJpbmcoc3RyaW5nKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGVuY29kZSBub24tc3RyaW5nIHZhbHVlcy4nKTtcbiAgfVxuICByZXR1cm4gd2luZG93LmF0b2Ioc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBAc3VtbWFyeSBVVEY4IGVuY29kZXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gc3RyaW5nIHRvIGVuY29kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVXRmOChzdHJpbmcpIHtcbiAgaWYoIUFzc2VydC5pc1N0cmluZyhzdHJpbmcpKSB7IHRocm93IG5ldyBFcnJvcignQ2Fubm90IGVuY29kZSBub24tc3RyaW5nIHZhbHVlcy4nKTsgfVxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpKTtcbn1cblxuLyoqXG4gKiBAc3VtbWFyeSBEZWNvZGVzIFVURjggZW5jb2RlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gc3RyaW5nIHRvIGRlY29kZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRlY29kZVV0Zjgoc3RyaW5nKSB7XG4gIGlmKCFBc3NlcnQuaXNTdHJpbmcoc3RyaW5nKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWNvZGUgbm9uLXN0cmluZyB2YWx1ZXMuJyk7IH1cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKSk7XG59XG5cbmV4cG9ydCB7XG4gIGVuY29kZUJhc2U2NCxcbiAgZGVjb2RlQmFzZTY0LFxuICBlbmNvZGVVdGY4LFxuICBkZWNvZGVVdGY4XG59O1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCBmcm9tICcuL2RvbS9Eb2N1bWVudCc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9kb20vRXZlbnQnO1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuL2RvbS9XaW5kb3cnO1xuaW1wb3J0IEtleSBmcm9tICcuL2lvL0tleSc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9pby9LZXlib2FyZCc7XG5pbXBvcnQgU3dpcGUgZnJvbSAnLi9pby9Td2lwZSc7XG5pbXBvcnQgeyBlbmNvZGVCYXNlNjQsIGRlY29kZUJhc2U2NCwgZW5jb2RlVXRmOCwgZGVjb2RlVXRmOCB9IGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IHtcbiAgRG9jdW1lbnQsXG4gIEV2ZW50LFxuICBXaW5kb3csXG4gIEtleSxcbiAgS2V5Ym9hcmQsXG4gIFN3aXBlLFxuICBlbmNvZGVCYXNlNjQsXG4gIGRlY29kZUJhc2U2NCxcbiAgZW5jb2RlVXRmOCxcbiAgZGVjb2RlVXRmOFxufTtcbiJdfQ==
});

const index$1 = unwrapExports(dist);
var dist_1 = dist.Document;
var dist_2 = dist.Event;
var dist_3 = dist.Key;
var dist_4 = dist.Swipe;

export { dist_3 as a, dist_2 as b, dist_1 as c, dist_4 as d };
