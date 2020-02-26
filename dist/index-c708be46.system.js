System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            exports({
                c: createCommonjsModule,
                u: unwrapExports
            });
            var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
            function commonjsRequire() {
                throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
            }
            function unwrapExports(x) {
                return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
            }
            function createCommonjsModule(fn, module) {
                return module = { exports: {} }, fn(module, module.exports), module.exports;
            }
            function getCjsExportFromNamespace(n) {
                return n && n['default'] || n;
            }
            var Assert_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) { return typeof obj; };
                }
                else {
                    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                } return _typeof(obj); }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                /**
                 * @class Assert
                 * @summary Encapsulates common assertions providing a clear API.
                 */
                var Assert = 
                /*#__PURE__*/
                function () {
                    function Assert() {
                        _classCallCheck(this, Assert);
                    }
                    _createClass(Assert, null, [{
                            key: "isNull",
                            /**
                             * @summary Returns true if and only if value is null.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                            value: function isNull(value) {
                                return value === null;
                            }
                            /**
                             * @summary Returns true if and only if value is an empty string, empty array, or empty object literal.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isEmpty",
                            value: function isEmpty(value) {
                                return Assert.isString(value) && value === '' || Assert.isArray(value) && value.length < 1 || Assert.isObjectLiteral(value) && Object.keys(value).length < 1;
                            }
                            /**
                             * @summary Returns true if and only if value is undefined.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isUndefined",
                            value: function isUndefined(value) {
                                return typeof value === 'undefined';
                            }
                            /**
                             * @summary Returns true if and only if value is zero.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isZero",
                            value: function isZero(value) {
                                return value === 0;
                            }
                            /**
                             * @summary Returns true if value is null or undefined.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "exists",
                            value: function exists(value) {
                                return !(Assert.isUndefined(value) || Assert.isNull(value));
                            }
                            /**
                             * @summary Returns true if value not {exists} or {isEmpty}.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isNullOrEmpty",
                            value: function isNullOrEmpty(value) {
                                return !Assert.exists(value) || Assert.isEmpty(value);
                            }
                            /**
                             * @summary Returns true if and only if value is an Array.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isArray",
                            value: function isArray(value) {
                                return Array.isArray(value);
                            }
                            /**
                             * @summary Returns true if and only if value is a boolean.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isBool",
                            value: function isBool(value) {
                                return typeof value === 'boolean';
                            }
                            /**
                             * @summary Returns true if and only if value is `true`.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isTrue",
                            value: function isTrue(value) {
                                return Assert.isBool(value) && value === true;
                            }
                            /**
                             * @summary Returns true if and only if value is `false`.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isFalse",
                            value: function isFalse(value) {
                                return Assert.isBool(value) && value === false;
                            }
                            /**
                             * @summary Returns true if and only if value is a Date.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isDate",
                            value: function isDate(value) {
                                return value instanceof Date;
                            }
                            /**
                             * @summary Returns true if and only if value is a number.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isNumber",
                            value: function isNumber(value) {
                                return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
                            }
                            /**
                             * @summary Returns true if value is a number and is even.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isEven",
                            value: function isEven(value) {
                                return this.isNumber(value) && !this.isZero(value) && value % 2 === 0;
                            }
                            /**
                             * @summary Returns true if value is a number and is odd.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isOdd",
                            value: function isOdd(value) {
                                return this.isNumber(value) && !this.isZero(value) && !this.isEven(value);
                            }
                            /**
                             * @summary Returns true if and only if value is a string.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isString",
                            value: function isString(value) {
                                return typeof value === 'string' || value instanceof String;
                            }
                            /**
                             * @summary Returns true if and only if value is a function.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isFunction",
                            value: function isFunction(value) {
                                return value instanceof Function;
                            }
                            /**
                             * @summary Returns true if and only if value is an Object.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isObject",
                            value: function isObject(value) {
                                return Assert.exists(value) && _typeof(value) === 'object' && !(Assert.isBool(value) || Assert.isNumber(value) || Assert.isDate(value) || Assert.isArray(value) || Assert.isString(value) || Assert.isFunction(value));
                            }
                            /**
                             * @summary Returns true if and only if value is an object literal.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isObjectLiteral",
                            value: function isObjectLiteral(value) {
                                return Assert.isObject(value) && value.constructor === {}.constructor;
                            }
                            /**
                             * @summary Returns true if value is not {isFalsy}.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isTruthy",
                            value: function isTruthy(value) {
                                return !Assert.isFalsy(value);
                            }
                            /**
                             * @summary Returns true if value {isZero}, {isFalse}, {isNullOrEmpty}, or {isNaN}.
                             * @memberOf Assert
                             * @static
                             * @param {*} value - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isFalsy",
                            value: function isFalsy(value) {
                                return Assert.isZero(value) || Assert.isFalse(value) || Assert.isNullOrEmpty(value) || isNaN(value);
                            }
                        }]);
                    return Assert;
                }();
                exports["default"] = Assert;
            });
            var Assert = unwrapExports(Assert_1);
            var string = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.build = build;
                exports.format = format;
                exports.trim = trim;
                exports.trimStart = trimStart;
                exports.trimEnd = trimEnd;
                exports.capitalize = capitalize;
                var _Assert = _interopRequireDefault(Assert_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                /**
                 * @summary Builds a string from string arguments
                 * @param rest
                 * @returns {string}
                 */
                function build() {
                    var _ref;
                    return (_ref = '').concat.apply(_ref, arguments);
                }
                /**
                 * @summary Returns a string template filled with passed values.
                 * @param {string} format - String format in the form "${0} indexed ${1}."
                 * @param {string} rest - Value arguments e.g. "Zero", "arguments"
                 * @returns {string}
                 */
                function format(format) {
                    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        rest[_key - 1] = arguments[_key];
                    }
                    return rest.reduce(function (format, value, i) {
                        return format.replace(new RegExp("\\{".concat(i, "\\}"), 'g'), value.toString());
                    }, format);
                }
                /**
                 * @summary Returns a string with leading and trailing whitespace trimmed.
                 * @param string
                 * @returns {string}
                 */
                function trim(string) {
                    return trimStart(trimEnd(string));
                }
                /**
                 * @summary Returns a string with leading whitespace trimmed.
                 * @param string
                 * @returns {string}
                 */
                function trimStart(string) {
                    return _Assert["default"].exists(string) && _Assert["default"].isFunction(string.replace) ? string.replace(/^[\s\n]*/, '') : string;
                }
                /**
                 * @summary Returns a string with trailing whitespace trimmed.
                 * @param string
                 * @returns {string}
                 */
                function trimEnd(string) {
                    return _Assert["default"].exists(string) && _Assert["default"].isFunction(string.replace) ? string.replace(/[\s\n]*$/, '') : string;
                }
                /**
                 * @summary Returns a string with the first character capitalized.
                 * @param string
                 * @returns {string}
                 */
                function capitalize() {
                    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                    return (string || '').charAt(0).toUpperCase() + (string || '').slice(1).toLowerCase();
                }
            });
            var index = unwrapExports(string);
            var string_1 = string.build;
            var string_2 = string.format;
            var string_3 = string.trim;
            var string_4 = string.trimStart;
            var string_5 = string.trimEnd;
            var string_6 = string.capitalize;
            var Name_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Assert = _interopRequireDefault(Assert_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var Name = 
                /*#__PURE__*/
                function () {
                    /**
                     * @constructor Name
                     * @summary A person's proper name
                     * @param {string} first
                     * @param {string} middle
                     * @param {string} last
                     */
                    function Name() {
                        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                        var middle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                        var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
                        _classCallCheck(this, Name);
                        this._first = first || '';
                        this._middle = middle || '';
                        this._last = last || '';
                    }
                    /**
                     * @summary First name.
                     * @memberOf Name
                     * @public
                     * @member {string}
                     * @instance
                     * @returns {string}
                     */
                    _createClass(Name, [{
                            key: "equals",
                            /**
                             * @summary Returns true if this is equal to another Name.
                             * @memberOf Name
                             * @public
                             * @instance
                             * @param {Name} other
                             * @returns {boolean}
                             */
                            value: function equals(other) {
                                return _Assert["default"].exists(other) && other.first === this.first && other.middle === this.middle && other.last === this.last;
                            }
                            /**
                             * @memberOf Name
                             * @public
                             * @instance
                             * @param {string} [format] - An optional format that can include: F, M, L, f, m, l
                             * where F, M, L represent the first, middle, and last name values respectively, and
                             * f, m, l represent the first initial, middle initial, and last initial respectively.<br/>
                             * _**Example**: `new Name('John', 'Bob', 'Doe').toString('F m. L')` === `'John B. Doe'`_
                             * @returns {string}
                             */
                        }, {
                            key: "toString",
                            value: function toString(format) {
                                var firstInitial = this.first.charAt(0);
                                var middleInitial = this.middle.charAt(0);
                                var lastInitial = this.last.charAt(0);
                                return _Assert["default"].isNullOrEmpty(format) ? this.full : format.replace(/([FfMmLl])/g, '{$1}').replace('{F}', this.first).replace('{M}', this.middle).replace('{L}', this.last).replace('{f}', firstInitial).replace('{m}', middleInitial).replace('{l}', lastInitial);
                            }
                        }, {
                            key: "first",
                            get: function get() {
                                return this._first;
                            }
                            /**
                             * @summary Middle name.
                             * @memberOf Name
                             * @public
                             * @member {string}
                             * @instance
                             * @returns {string}
                             */
                        }, {
                            key: "middle",
                            get: function get() {
                                return this._middle;
                            }
                            /**
                             * @summary Last name.
                             * @memberOf Name
                             * @public
                             * @member {string}
                             * @instance
                             * @returns {string}
                             */
                        }, {
                            key: "last",
                            get: function get() {
                                return this._last;
                            }
                            /**
                             * @summary Space delimited first, [middle] and last name.
                             * @memberOf Name
                             * @public
                             * @member {string}
                             * @instance
                             * @returns {string}
                             */
                        }, {
                            key: "full",
                            get: function get() {
                                var format = _Assert["default"].isNullOrEmpty(this.middle) ? 'F L' : 'F M L';
                                return (0, string.trim)(this.toString(format).replace(/\s+/, ' '));
                            }
                            /**
                             * @summary Initials delimited by '.'.
                             * @memberOf Name
                             * @member {string}
                             * @public
                             * @instance
                             * @returns {string}
                             */
                        }, {
                            key: "initials",
                            get: function get() {
                                var format = _Assert["default"].isNullOrEmpty(this.middle) ? 'f.l.' : 'f.m.l.';
                                return (0, string.trim)(this.toString(format).replace(/\s{2,}/, ''));
                            }
                        }]);
                    return Name;
                }();
                exports["default"] = Name;
            });
            var Name = unwrapExports(Name_1);
            var DayPoint_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Assert = _interopRequireDefault(Assert_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
                function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
                function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                    return;
                } var _arr = []; var _n = true; var _d = false; var _e = undefined; try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                }
                catch (err) {
                    _d = true;
                    _e = err;
                }
                finally {
                    try {
                        if (!_n && _i["return"] != null)
                            _i["return"]();
                    }
                    finally {
                        if (_d)
                            throw _e;
                    }
                } return _arr; }
                function _arrayWithHoles(arr) { if (Array.isArray(arr))
                    return arr; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var _assumeNow;
                var DayPoint = 
                /*#__PURE__*/
                function () {
                    /**
                     * @constructor DayPoint
                     * @summary Date utility class.
                     * @param {number} year - a valid year.
                     * @param {number} month - a valid month (1-12) where 1 = January and 12 = December.
                     * @param {number} date - a valid date for a given month.
                     */
                    function DayPoint(year, month, date) {
                        _classCallCheck(this, DayPoint);
                        if (month < 1 || month > 12) {
                            throw new Error('Invalid month at Assert.DayPoint');
                        }
                        if (date < 1 || date > findDaysInMonth(month, year)) {
                            throw new Error('Invalid date at DayPoint');
                        }
                        this.value = arguments.length >= 3 ? new Date(year, month - 1, date) : new Date();
                        this.day = this.value.getDay();
                        this.date = date;
                        this.month = month;
                        this.year = year;
                    }
                    /**
                     * @summary Returns a truncated two digit year.
                     * @memberOf DayPoint
                     * @public
                     * @member {string}
                     * @instance
                     * @returns {number}
                     */
                    _createClass(DayPoint, [{
                            key: "add",
                            /**
                             * @summary Returns a DayPoint modified by the number of years, months, and days passed.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @param {number} years - The number of years to add or subtract from this DayPoint.
                             * @param {number} months - The number of months to add or subtract from this DayPoint.
                             * @param {number} days - The number of days to add or subtract from this DayPoint.
                             * @returns {DayPoint}
                             */
                            value: function add(years, months, days) {
                                function a(x, n, property) {
                                    var d = x;
                                    var c = n;
                                    while (c--) {
                                        d = d[property];
                                    }
                                    return d;
                                }
                                var abs = Math.abs;
                                var y = abs(years);
                                var d = abs(days);
                                var m = abs(months);
                                var ym = years < 0 ? 'prevYear' : 'nextYear';
                                var dm = days < 0 ? 'prevDay' : 'nextDay';
                                var mm = months < 0 ? 'prevMonth' : 'nextMonth';
                                return a(a(a(this, y, ym), m, mm), d, dm);
                            }
                            /**
                             * @summary Returns true if the other DayPoint is before this DayPoint.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @param {DayPoint} other - DayPoint to compare.
                             * @returns {boolean}
                             */
                        }, {
                            key: "isBefore",
                            value: function isBefore(other) {
                                return !(this.isAfter(other) || this.equals(other));
                            }
                            /**
                             * @summary Returns true if the other DayPoint is after this DayPoint.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @param {DayPoint} other - DayPoint to compare.
                             * @returns {boolean}
                             */
                        }, {
                            key: "isAfter",
                            value: function isAfter(other) {
                                var ty = this.year;
                                var oy = other.year;
                                var tm = this.month;
                                var om = other.month;
                                if (ty > oy) {
                                    return true;
                                }
                                if (ty === oy && tm > om) {
                                    return true;
                                }
                                return ty === oy && tm === om && this.date > other.date;
                            }
                            /**
                             * @summary Returns true if the other DayPoint is equal to this DayPoint.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @param {DayPoint} other - DayPoint to compare.
                             * @returns {boolean}
                             */
                        }, {
                            key: "equals",
                            value: function equals(other) {
                                return this.year === other.year && this.month === other.month && this.date === other.date;
                            }
                            /**
                             * @summary Returns a date string formatted per the passed format string.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @param {string} formatString - format string where m = month, d = date, y = year.<br/>
                             * _**Example**: For date, January, 12, 2018, `'mm/dd/yy' -> '01/12/18'` & `'dd/mm/yyyy' -> '12/01/2018'`._
                             * @returns {string}
                             */
                        }, {
                            key: "toString",
                            value: function toString() {
                                var formatString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mm/dd/yyyy';
                                var y = /y{3,}/i.test(formatString) ? this.year : this.shortYear;
                                var m = this.month;
                                var d = this.date;
                                var yf = '{0}';
                                var mf = /m{2}/i.test(formatString) && m < 10 ? '0{1}' : '{1}';
                                var df = /d{2}/i.test(formatString) && d < 10 ? '0{2}' : '{2}';
                                var f = formatString.replace(/y+/gi, yf).replace(/m+/gi, mf).replace(/d+/gi, df);
                                return (0, string.format)(f, y, m, d);
                            }
                            /**
                             * @summary Returns a `Date` value of this.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @returns {Date}
                             */
                        }, {
                            key: "toDate",
                            value: function toDate() {
                                return this.value;
                            }
                            /**
                             * @summary Returns a JSON string value of this.
                             * @memberOf DayPoint
                             * @public
                             * @instance
                             * @returns {string}
                             */
                        }, {
                            key: "toJson",
                            value: function toJson() {
                                return this.value.toJSON();
                            }
                            /**
                             * @summary Returns true if the value can be successfully parsed.
                             * @memberOf DayPoint
                             * @public
                             * @static
                             * @param {string} value - A string value to test.
                             * @returns {boolean}
                             */
                        }, {
                            key: "shortYear",
                            get: function get() {
                                var y = this.year.toString();
                                return parseInt(y.substr(y.length - 2));
                            }
                            /**
                             * @summary Returns true for days Monday-Friday.
                             * @memberOf DayPoint
                             * @public
                             * @member {boolean}
                             * @instance
                             * @returns {boolean}
                             */
                        }, {
                            key: "isWeekday",
                            get: function get() {
                                var d = this.day;
                                return d > 0 && d < 6;
                            }
                            /**
                             * @summary Returns true for days Saturday and Sunday
                             * @memberOf DayPoint
                             * @public
                             * @member {boolean}
                             * @instance
                             * @returns {boolean}
                             */
                        }, {
                            key: "isWeekend",
                            get: function get() {
                                return !this.isWeekday;
                            }
                            /**
                             * @summary Returns true for years that have a February 29th date.
                             * @memberOf DayPoint
                             * @public
                             * @member {boolean}
                             * @instance
                             * @returns {boolean}
                             */
                        }, {
                            key: "isLeapYear",
                            get: function get() {
                                return isLeapYear(this.year);
                            }
                            /**
                             * @summary Returns the day following this day.
                             * @memberOf DayPoint
                             * @public
                             * @member {boolean}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "nextDay",
                            get: function get() {
                                return createDay(this, 1, 0, 0);
                            }
                            /**
                             * @summary Returns the day preceding this day.
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "prevDay",
                            get: function get() {
                                return createDay(this, -1, 0, 0);
                            }
                            /**
                             * @summary Returns the month following this month.<br/>
                             * _**Warning**: This method will error when navigating to next months that do not include a current day._
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "nextMonth",
                            get: function get() {
                                return createDay(this, 0, 1, 0);
                            }
                            /**
                             * @summary Returns the month preceding this month.<br/>
                             * _**Warning**: This method will error when navigating to previous months that do not include a current day._
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "prevMonth",
                            get: function get() {
                                return createDay(this, 0, -1, 0);
                            }
                            /**
                             * @summary Returns the month following this month.<br/>
                             * _**Warning**: This method will error when navigating to next years that do not include a current day._
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "nextYear",
                            get: function get() {
                                return createDay(this, 0, 0, 1);
                            }
                            /**
                             * @summary Returns the month preceding this month.<br/>
                             * _**Warning**: This method will error when navigating to previous years that do not include a current day._
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "prevYear",
                            get: function get() {
                                return createDay(this, 0, 0, -1);
                            }
                            /**
                             * @summary Returns the first day of this month and year.
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "firstDayOfMonth",
                            get: function get() {
                                return new DayPoint(this.year, this.month, 1);
                            }
                            /**
                             * @summary Returns the last day of this month and year.
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @instance
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "lastDayOfMonth",
                            get: function get() {
                                return new DayPoint(this.year, this.month, findDaysInMonth(this.month, this.year));
                            }
                        }], [{
                            key: "canParse",
                            value: function canParse(value) {
                                return _Assert["default"].isString(value) || _Assert["default"].isNumber(value) || _Assert["default"].isDate(value) ? !isNaN(new Date(value).valueOf()) : false;
                            }
                            /**
                             * @summary Returns a DayPoint with the parsed value of the passed value.<br/>
                             * _**Warning**: this method will throw an error for values that cannot be parsed._
                             * @memberOf DayPoint
                             * @public
                             * @static
                             * @param {string} value - A string value to test.
                             * @returns {boolean}
                             */
                        }, {
                            key: "parse",
                            value: function parse(value) {
                                if (value instanceof DayPoint) {
                                    return value;
                                }
                                var v = _Assert["default"].isString(value) ? (0, string.trim)(value).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/, '') : value;
                                if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(v)) {
                                    var components = v.split('-');
                                    var _components = _slicedToArray(components, 1), component = _components[0];
                                    components.push(component);
                                    components.shift();
                                    v = components.join('/');
                                }
                                var D = new Date(v);
                                if (!_Assert["default"].exists(v) || isNaN(D.valueOf())) {
                                    throw new Error((0, string.format)('Cannot parse value= {0}', v));
                                }
                                return new DayPoint(D.getFullYear(), D.getMonth() + 1, D.getDate());
                            }
                            /**
                             * @summary Returns a DayPoint with the parsed value of the passed value.
                             * _**Note**: Will return null for values that cannot be parsed._
                             * @memberOf DayPoint
                             * @public
                             * @static
                             * @param {string} value - A string value to test.
                             * @returns {boolean}
                             */
                        }, {
                            key: "tryParse",
                            value: function tryParse(value) {
                                return DayPoint.canParse(value) ? DayPoint.parse(value) : null;
                            }
                            /**
                             * @summary Sets the concept of now to the passed value instead of using
                             * now as defined by the system clock.
                             * @memberOf DayPoint
                             * @public
                             * @static
                             * @param {DayPoint} dayPoint
                             */
                        }, {
                            key: "assumeNow",
                            value: function assumeNow(dayPoint) {
                                _assumeNow = DayPoint.parse(dayPoint);
                            }
                            /**
                             * @summary Returns a DayPoint with value now.
                             * @memberOf DayPoint
                             * @public
                             * @member {DayPoint}
                             * @static
                             * @returns {DayPoint}
                             */
                        }, {
                            key: "today",
                            get: function get() {
                                return _assumeNow || DayPoint.parse(new Date());
                            }
                        }]);
                    return DayPoint;
                }();
                exports["default"] = DayPoint;
                function findDaysInMonth(month, year) {
                    if (month === 2) {
                        return isLeapYear(year) ? 29 : 28;
                    }
                    return month < 8 && _Assert["default"].isEven(month) || month > 7 && _Assert["default"].isOdd(month) ? 30 : 31;
                }
                function isLeapYear(year) {
                    var y = year.toString().split(/\B/);
                    var d = parseFloat((0, string.build)(y[y.length - 2], y[y.length - 1]));
                    return d % 4 === 0;
                }
                function createDay(dp, d, m, y) {
                    var tm = dp.month;
                    var ty = dp.year;
                    var td = dp.date;
                    var ld = findDaysInMonth(tm, ty);
                    var dd = d;
                    var mm = m;
                    var yy = y;
                    var date = td + dd;
                    var month = tm + mm;
                    var year = ty + yy;
                    if (td + dd > ld) {
                        date = 1;
                        month = tm + mm + 1;
                    }
                    if (td + dd < 1) {
                        var pm = dp.prevMonth;
                        date = findDaysInMonth(pm.month, pm.year);
                        month = tm + mm - 1;
                    }
                    if (month > 12) {
                        month = 1;
                        year = ty + yy + 1;
                    }
                    if (month < 1) {
                        month = 12;
                        year = ty + yy - 1;
                    }
                    return new DayPoint(year, month, date);
                }
            });
            var DayPoint = unwrapExports(DayPoint_1);
            var math = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.round = round;
                exports.roundUp = roundUp;
                exports.roundDown = roundDown;
                exports.roundTowardZero = roundTowardZero;
                exports.gcd = gcd;
                exports.fib = fib;
                exports.fib2 = fib2;
                exports.fibArray = fibArray;
                exports.fib2Array = fib2Array;
                exports.tryParseInt = tryParseInt;
                exports.tryParseFloat = tryParseFloat;
                /**
                 * @function round
                 * @summary Rounds a value to the nearest tens exponent.
                 * @global
                 * @param {number} value
                 * @param {number} toNearest
                 * @returns {number}
                 */
                function round(value) {
                    var toNearest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var operand = Math.pow(10, -toNearest);
                    return Math.round(parseFloat((value * operand).toFixed(Math.abs(toNearest)))) / operand;
                }
                /**
                 * @function roundUp
                 * @summary Rounds a value up to the nearest tens exponent.
                 * @global
                 * @param {number} value
                 * @param {number} toNearest
                 * @returns {number}
                 */
                function roundUp(value) {
                    var toNearest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var operand = 5 * Math.pow(10, toNearest - 1);
                    return round(value + operand, toNearest);
                }
                /**
                 * @function roundDown
                 * @summary Rounds a value down to the nearest tens exponent.
                 * @global
                 * @param {number} value
                 * @param {number} toNearest
                 * @returns {number}
                 */
                function roundDown(value) {
                    var toNearest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    if (value === 0) {
                        return 0;
                    }
                    var operand = 5 * Math.pow(10, toNearest - 1);
                    return round(value - operand, toNearest);
                }
                /**
                 * @function roundTowardZero
                 * @summary Rounds a value toward zero to the nearest tens exponent.
                 * @global
                 * @param {number} value
                 * @param {number} toNearest
                 * @returns {number}
                 */
                function roundTowardZero(value) {
                    var toNearest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    return value < 0 ? roundUp(value, toNearest) : roundDown(value, toNearest);
                }
                /**
                 * @function gcd
                 * @summary Returns the greatest common denominator for arguments a and b.
                 * @global
                 * @param {number} a
                 * @param {number} b
                 * @returns {number}
                 */
                function gcd(a, b) {
                    return b === 0 ? Math.abs(a) : gcd(b, a % b);
                }
                /**
                 * @function fib
                 * @summary Returns the nth number in a Fibonacci set.<br/>
                 * _**Note**: zero indexed._<br/>
                 * _**Warning**: Due to this function's attempt at leveraging tail-calls
                 * it can cause stack overflows for large values of n._
                 * @global
                 * @param {number} n - index.
                 * @returns {number}
                 */
                function fib(n) {
                    var f = function f(n) {
                        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                        return 0 < n ? f(--n, b, a + b) : a;
                    };
                    return f(n);
                }
                /**
                 * @function fib2
                 * @summary Returns the nth number in a Fibonacci set.<br/>
                 * _**Note**: zero indexed._<br/>
                 * _**Warning**: This function has better performance and is not
                 * prone to stack overflows as is fib._
                 * @global
                 * @param {number} n - index.
                 * @returns {number}
                 */
                function fib2(n) {
                    var a = 0;
                    var b = 1;
                    var c = 0;
                    while (n > 1) {
                        c = a;
                        a = b;
                        b = b + c;
                        n--;
                    }
                    return n < 1 ? a : b;
                }
                /**
                 * @function fibArray
                 * @summary Returns an array of length n with Fibonacci values.<br/>
                 * _**Warning**: Due to this function's attempt at leveraging tail-calls
                 * it can cause stack overflows for large values of n._
                 * @global
                 * @param {number} n - length.
                 * @returns {number}
                 */
                function fibArray(n) {
                    return Array(n).fill(0).map(function () {
                        return fib(--n);
                    }).reverse();
                }
                /**
                 * @function fibArray2
                 * @summary Returns an array of length n with Fibonacci values.<br/>
                 * _**Warning**: This function has better performance and is not
                 * prone to stack overflows as is fibArray._
                 * @global
                 * @param {number} n - length.
                 * @returns {number}
                 */
                function fib2Array(n) {
                    return Array(n).fill(0).map(function () {
                        return fib2(--n);
                    }).reverse();
                }
                /**
                 * @function tryParseInt
                 * @summary Returns a parsed integer value for values that can be parsed,
                 * or a set value if passed, or zero.
                 * @global
                 * @param {string} value - value to parse.
                 * @param {number} valueIfNan - value to return if {value} cannot be parsed.
                 * @returns {number}
                 */
                function tryParseInt(value) {
                    var valueIfNan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var result = parseInt(value);
                    return isNaN(result) ? valueIfNan : result;
                }
                /**
                 * @function tryParseFloat
                 * @summary Returns a parsed float value for values that can be parsed,
                 * or a set value if passed, or zero.
                 * @global
                 * @param {string} value - value to parse.
                 * @param {number} valueIfNan - value to return if {value} cannot be parsed.
                 * @returns {number}
                 */
                function tryParseFloat(value) {
                    var valueIfNan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
                    var result = parseFloat(value);
                    return isNaN(result) ? valueIfNan : result;
                }
            });
            var index$1 = unwrapExports(math);
            var math_1 = math.round;
            var math_2 = math.roundUp;
            var math_3 = math.roundDown;
            var math_4 = math.roundTowardZero;
            var math_5 = math.gcd;
            var math_6 = math.fib;
            var math_7 = math.fib2;
            var math_8 = math.fibArray;
            var math_9 = math.fib2Array;
            var math_10 = math.tryParseInt;
            var math_11 = math.tryParseFloat;
            var Money_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Assert = _interopRequireDefault(Assert_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
                function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
                function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                    return;
                } var _arr = []; var _n = true; var _d = false; var _e = undefined; try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                }
                catch (err) {
                    _d = true;
                    _e = err;
                }
                finally {
                    try {
                        if (!_n && _i["return"] != null)
                            _i["return"]();
                    }
                    finally {
                        if (_d)
                            throw _e;
                    }
                } return _arr; }
                function _arrayWithHoles(arr) { if (Array.isArray(arr))
                    return arr; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var Money = 
                /*#__PURE__*/
                function () {
                    /**
                     * @constructor Money
                     * @param {number} amount
                     * @param {string} [currency]
                     */
                    function Money() {
                        var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                        var currency = arguments.length > 1 ? arguments[1] : undefined;
                        _classCallCheck(this, Money);
                        if (!_Assert["default"].isNumber(amount)) {
                            throw new Error('Money requires valid numeric amount.');
                        }
                        var dollars = (0, math.roundTowardZero)(amount);
                        this.cents = /\./.test(amount) ? parseFloat(amount.toString().replace(/\d+\./, '.')) : 0;
                        this.dollars = dollars;
                        this.currency = currency || '$';
                        this.value = amount;
                    }
                    /**
                     * @summary Returns the sum two `Money`s.<br/>
                     * _**Warning**: will throw an error for dissimilar currencies.
                     * Use `isOfCurrency` to check currencies and `exchange` as necessary._
                     * @memberOf Money
                     * @public
                     * @instance
                     * @param {Money} other - {Money} of currency to add to this
                     * @returns {Money}
                     */
                    _createClass(Money, [{
                            key: "add",
                            value: function add(other) {
                                checkCurrency(this, other);
                                return new Money(this.value + other.value, this.currency);
                            }
                            /**
                             * @summary Returns the difference two `Money`s.<br/>
                             * _**Warning**: will throw an error for dissimilar currencies.
                             * Use `isOfCurrency` to check currencies and `exchange` as necessary._
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {Money} other
                             * @returns {Money}
                             */
                        }, {
                            key: "subtract",
                            value: function subtract(other) {
                                checkCurrency(this, other);
                                return new Money(this.value - other.value, this.currency);
                            }
                            /**
                             * @summary Returns the product of `this` multiplied by factor
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {number} factor
                             * @returns {Money}
                             */
                        }, {
                            key: "multiply",
                            value: function multiply(factor) {
                                if (!_Assert["default"].isNumber(factor)) {
                                    throw new Error("Invalid factor ".concat(factor));
                                }
                                return new Money(this.value * factor, this.currency);
                            }
                            /**
                             * @summary Returns the quotient of `this` divided by divisor.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {number} divisor
                             * @returns {Money}
                             */
                        }, {
                            key: "divide",
                            value: function divide(divisor) {
                                if (!_Assert["default"].isNumber(divisor)) {
                                    throw new Error("Invalid divisor ".concat(divisor));
                                }
                                return new Money(this.value / divisor, this.currency);
                            }
                            /**
                             * @summary Returns true if `this` and another `Money` have equal values and currencies.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {Money} other
                             * @returns {boolean}
                             */
                        }, {
                            key: "equals",
                            value: function equals(other) {
                                return this.isOfCurrency(other) && this.value === other.value;
                            }
                            /**
                             * @summary Returns true if `this` value is greater than another `Money` of the same currency's value.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {Money} other
                             * @returns {boolean}
                             */
                        }, {
                            key: "isGreaterThan",
                            value: function isGreaterThan(other) {
                                checkCurrency(this, other);
                                return this.value > other.value;
                            }
                            /**
                             * @summary Returns true if `this` value is less than another `Money` of the same currency's value.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {Money} other
                             * @returns {boolean}
                             */
                        }, {
                            key: "isLessThan",
                            value: function isLessThan(other) {
                                checkCurrency(this, other);
                                return this.value < other.value;
                            }
                            /**
                             * @summary Returns `Money` rounded to the nearest whole value.
                             * @memberOf Money
                             * @public
                             * @member {Money}
                             * @instance
                             * @returns {Money}
                             */
                        }, {
                            key: "round",
                            /**
                             * @summary Returns a `Money` rounded to the nearest tens exponent.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {number} [to] - tens exponent to round to.
                             * @returns {Money}
                             */
                            value: function round() {
                                var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -2;
                                return new Money((0, math.round)(this.value, to), this.currency);
                            }
                            /**
                             * @summary Returns a `Money` rounded down to the nearest tens exponent.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {number} [to] - tens exponent to round to.
                             * @returns {Money}
                             */
                        }, {
                            key: "roundDown",
                            value: function roundDown() {
                                var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -2;
                                return new Money((0, math.roundDown)(this.value, to), this.currency);
                            }
                            /**
                             * @summary Returns a `Money` rounded up to the nearest tens exponent.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {number} [to] - tens exponent to round to.
                             * @returns {Money}
                             */
                        }, {
                            key: "roundUp",
                            value: function roundUp() {
                                var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -2;
                                return new Money((0, math.roundUp)(this.value, to), this.currency);
                            }
                            /**
                             * @summary Returns a `Money` with type currency and value calculated over the passed rate of exchange.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {number} rate - rate of exchange
                             * @param {string} currency - symbol for target currency
                             * @returns {Money}
                             */
                        }, {
                            key: "exchange",
                            value: function exchange(rate, currency) {
                                return new Money(this.multiply(rate).value, currency);
                            }
                            /**
                             * @summary Returns true if the target `Money` is of the same currency.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {Money} other - other Money
                             * @returns {boolean}
                             */
                        }, {
                            key: "isOfCurrency",
                            value: function isOfCurrency(other) {
                                return this.currency === other.currency;
                            }
                            /**
                             * @summary Returns a string representation of this formatted to the
                             * passed format, where format follows the following rules:<br/>
                             * `<wholeValue(d)><decimalCharacter(.|,)><fractionalValue(c)><numberOfFractionalValues(#)>`<br/>
                             *  _**Example**: for money with value `1234.5678` and currency 'C', `d,c2` would return `'C1.234,56'`_
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {string} [format] - format string.
                             * @returns {string}
                             */
                        }, {
                            key: "toString",
                            value: function toString() {
                                var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'd.c2';
                                var _$exec = /d(.)c(\d+)/.exec(format), _$exec2 = _slicedToArray(_$exec, 3), decimal = _$exec2[1], precision = _$exec2[2];
                                var delimiter = {
                                    '.': ',',
                                    ',': '.'
                                }[decimal];
                                var dollars = formatDollars(this.dollars, delimiter);
                                var cents = formatCents(this.cents, (0, math.tryParseInt)(precision, 2));
                                var amount = "".concat(this.currency).concat(dollars).concat(decimal).concat(cents);
                                return this.value < 0 ? "(".concat(amount, ")") : amount;
                            }
                            /**
                             * @summary Returns `Money` with a zero value.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {string} currency
                             * @returns {Money}
                             */
                        }, {
                            key: "nearestWhole",
                            get: function get() {
                                return new Money((0, math.round)(this.value, 0), this.currency);
                            }
                            /**
                             * @summary Returns a `Money` rounded to the nearest whole value.
                             * _**Note**: This property is simply an API for common US usage.
                             * @memberOf Money
                             * @public
                             * @member {Money}
                             * @instance
                             * @returns {Money}
                             */
                        }, {
                            key: "nearestDollar",
                            get: function get() {
                                return this.nearestWhole;
                            }
                        }], [{
                            key: "zero",
                            value: function zero(currency) {
                                return new Money(0, currency);
                            }
                            /**
                             * @summary Returns true if other is an instance of `Money`.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {*} other - value to test
                             * @returns {boolean}
                             */
                        }, {
                            key: "isMoney",
                            value: function isMoney(other) {
                                return other instanceof Money;
                            }
                            /**
                             * @summary Returns true if value can be parsed to `Money`.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {*} value
                             * @returns {boolean}
                             */
                        }, {
                            key: "canParse",
                            value: function canParse(value) {
                                try {
                                    Money.parse(value);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                }
                            }
                            /**
                             * @summary Returns `Money` with value and currency calculated from passed value
                             * if value can be parsed into `Money`. Otherwise will throw an error.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {*} value - value to parse to Money
                             * @returns {Money}
                             */
                        }, {
                            key: "parse",
                            value: function parse(value) {
                                if (_Assert["default"].isNumber(value)) {
                                    return new Money(value);
                                }
                                var val = value;
                                if (/,\d{2}$/.test(value)) {
                                    var split = value.split(',');
                                    var cents = split.pop();
                                    var dollars = split.join().replace(/\./g, ',');
                                    val = "".concat(dollars, ".").concat(cents);
                                }
                                var b = /(\(.*\))|(-)/.test(val);
                                var i = b ? 1 : 0;
                                var u = val.match(/[^\d.,-]/g);
                                var U = _Assert["default"].isArray(u) ? u[i] : null;
                                var n = parseFloat(val.replace(/[^\d.]/g, ''));
                                var v = b ? -n : n;
                                return new Money(v, U);
                            }
                            /**
                             * @summary Returns `Money` with value and currency calculated from passed value
                             * if value can be parsed into `Money`, otherwise null.
                             * @memberOf Money
                             * @public
                             * @instance
                             * @param {*} value - value to parse to Money
                             * @returns {Money}
                             */
                        }, {
                            key: "tryParse",
                            value: function tryParse(value) {
                                return Money.canParse(value) ? Money.parse(value) : null;
                            }
                        }]);
                    return Money;
                }();
                exports["default"] = Money;
                function checkCurrency(money, other) {
                    if (!money.isOfCurrency(other)) {
                        throw new Error("Invalid operation on non-conforming currencies. ".concat(money.currency, " !== ").concat(other.currency));
                    }
                }
                function formatDollars(dollars, delimeter) {
                    if (dollars === 0) {
                        return '0';
                    }
                    var characters = dollars.toString().replace(/[^\d]/, '').split(/\B/);
                    var i = 0;
                    return characters.reverse().reduce(function (f, _char) {
                        if (i > 0 && !(i % 3)) {
                            f.push(delimeter);
                            i = 0;
                        }
                        f.push(_char);
                        i++;
                        return f;
                    }, []).reverse().join('').replace(/[^\d]$/, '');
                }
                function formatCents(cents, precision) {
                    var value = cents.toString().replace(/[^\d]|0\./g, '');
                    var pad = '0'.repeat(precision);
                    return "".concat(value).concat(pad).slice(0, precision);
                }
            });
            var Money = unwrapExports(Money_1);
            var Coord_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Assert = _interopRequireDefault(Assert_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var Coord = 
                /*#__PURE__*/
                function () {
                    function Coord() {
                        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        _classCallCheck(this, Coord);
                        if (!(_Assert["default"].isNumber(x) && _Assert["default"].isNumber(y))) {
                            throw new Error('Coord requires numeric x and y values');
                        }
                        this.x = x;
                        this.y = y;
                    }
                    _createClass(Coord, [{
                            key: "abs",
                            value: function abs() {
                                return new Coord(Math.abs(this.x), Math.abs(this.y));
                            }
                        }, {
                            key: "add",
                            value: function add(other) {
                                return new Coord(this.x + other.x, this.y + other.y);
                            }
                        }, {
                            key: "divide",
                            value: function divide(other) {
                                return new Coord(this.x / other.x, this.y / other.y);
                            }
                        }, {
                            key: "equals",
                            value: function equals(other) {
                                return this.x === other.x && this.y === other.y;
                            }
                        }, {
                            key: "multiply",
                            value: function multiply(other) {
                                return new Coord(this.x * other.x, this.y * other.y);
                            }
                        }, {
                            key: "subtract",
                            value: function subtract(other) {
                                return new Coord(this.x - other.x, this.y - other.y);
                            }
                        }, {
                            key: "round",
                            value: function round() {
                                var decimal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                                return new Coord((0, math.round)(this.x, decimal), (0, math.round)(this.y, decimal));
                            }
                        }, {
                            key: "half",
                            value: function half() {
                                return this.divide(new Coord(2, 2));
                            }
                        }, {
                            key: "value",
                            value: function value() {
                                return {
                                    x: this.x,
                                    y: this.y
                                };
                            }
                        }, {
                            key: "toString",
                            value: function toString() {
                                return "(".concat(this.x, ",").concat(this.y, ")");
                            }
                        }], [{
                            key: "canParse",
                            value: function canParse(candidate) {
                                if (_Assert["default"].isArray(candidate)) {
                                    return !(isNaN(candidate[0]) || isNaN(candidate[1]));
                                }
                                if (_Assert["default"].isObjectLiteral(candidate) && 'x' in candidate && 'y' in candidate) {
                                    return !(isNaN(candidate.x) || isNaN(candidate.y));
                                }
                                return candidate instanceof Coord;
                            }
                        }, {
                            key: "parse",
                            value: function parse(obj) {
                                if (!_Assert["default"].exists(obj)) {
                                    return null;
                                }
                                if (obj instanceof Coord) {
                                    return obj;
                                }
                                if (_Assert["default"].isArray(obj)) {
                                    return new Coord(obj[0], obj[1]);
                                }
                                if (_Assert["default"].isObjectLiteral(obj) && _Assert["default"].exists(obj.x) && _Assert["default"].exists(obj.y)) {
                                    return new Coord(obj.x, obj.y);
                                }
                                return null;
                            }
                        }, {
                            key: "tryParse",
                            value: function tryParse(obj) {
                                return Coord.canParse(obj) ? Coord.parse(obj) : null;
                            }
                        }]);
                    return Coord;
                }();
                exports["default"] = Coord;
            });
            var Coord = unwrapExports(Coord_1);
            var Vector_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Coord2 = _interopRequireDefault(Coord_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) { return typeof obj; };
                }
                else {
                    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                } return _typeof(obj); }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                } return _assertThisInitialized(self); }
                function _assertThisInitialized(self) { if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                } return self; }
                function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass)
                    _setPrototypeOf(subClass, superClass); }
                function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
                var Vector = 
                /*#__PURE__*/
                function (_Coord) {
                    _inherits(Vector, _Coord);
                    function Vector() {
                        var _this;
                        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        _classCallCheck(this, Vector);
                        _this = _possibleConstructorReturn(this, _getPrototypeOf(Vector).call(this, x, y));
                        _this.lengthSquared = Math.pow(x, 2) + Math.pow(y, 2);
                        _this.magnitude = Math.sqrt(_this.lengthSquared);
                        _this.unitNormalX = x === 0 && y === 0 ? 0 : x / _this.magnitude;
                        _this.unitNormalY = x === 0 && y === 0 ? 0 : y / _this.magnitude;
                        return _this;
                    }
                    _createClass(Vector, [{
                            key: "isZero",
                            value: function isZero() {
                                return this.x === 0 && this.y === 0;
                            }
                        }, {
                            key: "equals",
                            value: function equals(other) {
                                return other instanceof Vector && this.x === other.x && this.y === other.y;
                            }
                        }, {
                            key: "normal",
                            value: function normal() {
                                return new Vector(this.unitNormalX, this.unitNormalY);
                            }
                        }, {
                            key: "invert",
                            value: function invert() {
                                return new Vector(-this.x, -this.y);
                            }
                        }, {
                            key: "norm",
                            value: function norm() {
                                return new Vector(Math.abs(this.x), Math.abs(this.y));
                            }
                        }, {
                            key: "perpendicular",
                            value: function perpendicular() {
                                return new Vector(-this.y, this.x);
                            }
                        }, {
                            key: "add",
                            value: function add(other) {
                                return other instanceof Vector ? new Vector(this.x + other.x, this.y + other.y) : null;
                            }
                        }, {
                            key: "dot",
                            value: function dot(other) {
                                return other instanceof Vector ? this.x * other.x + this.y * other.y : null;
                            }
                        }, {
                            key: "perpendicularAtTo",
                            value: function perpendicularAtTo(other) {
                                if (!(other instanceof Vector)) {
                                    return null;
                                }
                                var p = other.add(this.projectionOfOnto(other).invert());
                                return new Vector(p.x, p.y);
                            }
                        }, {
                            key: "projectionOfOnto",
                            value: function projectionOfOnto(other) {
                                if (!(other instanceof Vector)) {
                                    return null;
                                }
                                var p = other.normal().scale(this.dot(other.normal()));
                                return new Vector(p.x, p.y);
                            }
                        }, {
                            key: "scale",
                            value: function scale(scalar) {
                                return new Vector(this.x * scalar, this.y * scalar);
                            }
                        }, {
                            key: "unitNormalDot",
                            value: function unitNormalDot(other) {
                                if (!(other instanceof Vector)) {
                                    return null;
                                }
                                return this.normal().x * other.normal().x + this.normal().y * other.normal().y;
                            }
                        }, {
                            key: "reflect",
                            value: function reflect(incident) {
                                if (!(incident instanceof Vector)) {
                                    return null;
                                }
                                if (incident.isZero()) {
                                    return this;
                                }
                                var inorm = incident.normal();
                                return this.add(inorm.scale(2 * inorm.dot(this)).invert());
                            }
                        }, {
                            key: "round",
                            value: function round() {
                                var decimal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                                return new Vector((0, math.round)(this.x, decimal), (0, math.round)(this.y, decimal));
                            }
                        }]);
                    return Vector;
                }(_Coord2["default"]);
                exports["default"] = Vector;
            });
            var Vector = unwrapExports(Vector_1);
            var Point_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Coord2 = _interopRequireDefault(Coord_1);
                var _Vector = _interopRequireDefault(Vector_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) { return typeof obj; };
                }
                else {
                    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                } return _typeof(obj); }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                } return _assertThisInitialized(self); }
                function _assertThisInitialized(self) { if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                } return self; }
                function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass)
                    _setPrototypeOf(subClass, superClass); }
                function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
                var Point = 
                /*#__PURE__*/
                function (_Coord) {
                    _inherits(Point, _Coord);
                    function Point(x, y) {
                        _classCallCheck(this, Point);
                        return _possibleConstructorReturn(this, _getPrototypeOf(Point).call(this, x, y));
                    }
                    _createClass(Point, [{
                            key: "isAbove",
                            value: function isAbove(other) {
                                return this.y < other.y;
                            }
                        }, {
                            key: "isBelow",
                            value: function isBelow(other) {
                                return this.y > other.y;
                            }
                        }, {
                            key: "isLeftOf",
                            value: function isLeftOf(other) {
                                return this.x < other.x;
                            }
                        }, {
                            key: "isRightOf",
                            value: function isRightOf(other) {
                                return this.x > other.x;
                            }
                        }, {
                            key: "distanceFrom",
                            value: function distanceFrom(other) {
                                return new _Vector["default"](this.x - other.x, this.y - other.y);
                            }
                        }, {
                            key: "distanceTo",
                            value: function distanceTo(other) {
                                return this.distanceFrom(other).invert();
                            }
                        }], [{
                            key: "canParse",
                            value: function canParse(candidate) {
                                return candidate instanceof Point || _Coord2["default"].canParse(candidate);
                            }
                        }, {
                            key: "parse",
                            value: function parse(obj) {
                                if (obj instanceof Point) {
                                    return obj;
                                }
                                var coord = _Coord2["default"].parse(obj);
                                return new Point(coord.x, coord.y);
                            }
                        }, {
                            key: "tryParse",
                            value: function tryParse(candidate) {
                                return Point.canParse(candidate) ? Point.parse(candidate) : null;
                            }
                        }]);
                    return Point;
                }(_Coord2["default"]);
                exports["default"] = Point;
            });
            var Point = unwrapExports(Point_1);
            var Rectangle_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _Coord = _interopRequireDefault(Coord_1);
                var _Point = _interopRequireDefault(Point_1);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var Rectangle = 
                /*#__PURE__*/
                function () {
                    function Rectangle() {
                        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                        _classCallCheck(this, Rectangle);
                        this.origin = new _Point["default"](x, y);
                        this.dimensions = new _Coord["default"](width, height);
                        this.diagonal = _Point["default"].parse(this.origin.add(this.dimensions));
                        this.center = this.diagonal.half();
                    }
                    _createClass(Rectangle, [{
                            key: "contains",
                            value: function contains(coord) {
                                return this.origin.isAbove(coord) && this.origin.isLeftOf(coord) && this.diagonal.isRightOf(coord) && this.diagonal.isBelow(coord);
                            }
                        }, {
                            key: "aspectToFit",
                            value: function aspectToFit(other) {
                                var thisDims = this.dimensions;
                                var otherDims = other.dimensions;
                                var maxWidth = otherDims.x;
                                var maxHeight = otherDims.y;
                                var width = thisDims.x;
                                var height = thisDims.y;
                                if (width > height && width !== 0) {
                                    height *= maxWidth / width;
                                    width = maxWidth;
                                    if (height > maxHeight) {
                                        height = maxHeight;
                                        width *= height / thisDims.y;
                                    }
                                }
                                else {
                                    if (height > maxHeight) {
                                        width *= maxHeight / height;
                                        height = maxHeight;
                                    }
                                }
                                return new Rectangle(this.origin.x, this.origin.y, width, height);
                            }
                        }]);
                    return Rectangle;
                }();
                exports["default"] = Rectangle;
            });
            var Rectangle = unwrapExports(Rectangle_1);
            var identity = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.uid = uid;
                exports.uuid = uuid;
                /**
                 * @summary Returns a "unique" string.
                 * @function uid
                 * @global
                 * @returns {string}
                 */
                function uid() {
                    return Math.random().toString().substr(2);
                }
                /**
                 * @summary Returns a universally "unique" string.
                 * @function uuid
                 * @global
                 * @returns {string}
                 */
                function uuid() {
                    function b(a) {
                        return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
                    }
                    return b();
                }
            });
            var index$2 = unwrapExports(identity);
            var identity_1 = identity.uid;
            var identity_2 = identity.uuid;
            'use strict';
            var bind = function bind(fn, thisArg) {
                return function wrap() {
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i];
                    }
                    return fn.apply(thisArg, args);
                };
            };
            'use strict';
            /*global toString:true*/
            // utils is a library of generic helper functions non-specific to axios
            var toString = Object.prototype.toString;
            /**
             * Determine if a value is an Array
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Array, otherwise false
             */
            function isArray(val) {
                return toString.call(val) === '[object Array]';
            }
            /**
             * Determine if a value is undefined
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if the value is undefined, otherwise false
             */
            function isUndefined(val) {
                return typeof val === 'undefined';
            }
            /**
             * Determine if a value is a Buffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Buffer, otherwise false
             */
            function isBuffer(val) {
                return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
                    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
            }
            /**
             * Determine if a value is an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an ArrayBuffer, otherwise false
             */
            function isArrayBuffer(val) {
                return toString.call(val) === '[object ArrayBuffer]';
            }
            /**
             * Determine if a value is a FormData
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an FormData, otherwise false
             */
            function isFormData(val) {
                return (typeof FormData !== 'undefined') && (val instanceof FormData);
            }
            /**
             * Determine if a value is a view on an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
             */
            function isArrayBufferView(val) {
                var result;
                if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
                    result = ArrayBuffer.isView(val);
                }
                else {
                    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
                }
                return result;
            }
            /**
             * Determine if a value is a String
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a String, otherwise false
             */
            function isString(val) {
                return typeof val === 'string';
            }
            /**
             * Determine if a value is a Number
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Number, otherwise false
             */
            function isNumber(val) {
                return typeof val === 'number';
            }
            /**
             * Determine if a value is an Object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Object, otherwise false
             */
            function isObject(val) {
                return val !== null && typeof val === 'object';
            }
            /**
             * Determine if a value is a Date
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Date, otherwise false
             */
            function isDate(val) {
                return toString.call(val) === '[object Date]';
            }
            /**
             * Determine if a value is a File
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a File, otherwise false
             */
            function isFile(val) {
                return toString.call(val) === '[object File]';
            }
            /**
             * Determine if a value is a Blob
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Blob, otherwise false
             */
            function isBlob(val) {
                return toString.call(val) === '[object Blob]';
            }
            /**
             * Determine if a value is a Function
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Function, otherwise false
             */
            function isFunction(val) {
                return toString.call(val) === '[object Function]';
            }
            /**
             * Determine if a value is a Stream
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Stream, otherwise false
             */
            function isStream(val) {
                return isObject(val) && isFunction(val.pipe);
            }
            /**
             * Determine if a value is a URLSearchParams object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a URLSearchParams object, otherwise false
             */
            function isURLSearchParams(val) {
                return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
            }
            /**
             * Trim excess whitespace off the beginning and end of a string
             *
             * @param {String} str The String to trim
             * @returns {String} The String freed of excess whitespace
             */
            function trim(str) {
                return str.replace(/^\s*/, '').replace(/\s*$/, '');
            }
            /**
             * Determine if we're running in a standard browser environment
             *
             * This allows axios to run in a web worker, and react-native.
             * Both environments support XMLHttpRequest, but not fully standard globals.
             *
             * web workers:
             *  typeof window -> undefined
             *  typeof document -> undefined
             *
             * react-native:
             *  navigator.product -> 'ReactNative'
             * nativescript
             *  navigator.product -> 'NativeScript' or 'NS'
             */
            function isStandardBrowserEnv() {
                if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                    navigator.product === 'NativeScript' ||
                    navigator.product === 'NS')) {
                    return false;
                }
                return (typeof window !== 'undefined' &&
                    typeof document !== 'undefined');
            }
            /**
             * Iterate over an Array or an Object invoking a function for each item.
             *
             * If `obj` is an Array callback will be called passing
             * the value, index, and complete array for each item.
             *
             * If 'obj' is an Object callback will be called passing
             * the value, key, and complete object for each property.
             *
             * @param {Object|Array} obj The object to iterate
             * @param {Function} fn The callback to invoke for each item
             */
            function forEach(obj, fn) {
                // Don't bother if no value provided
                if (obj === null || typeof obj === 'undefined') {
                    return;
                }
                // Force an array if not already something iterable
                if (typeof obj !== 'object') {
                    /*eslint no-param-reassign:0*/
                    obj = [obj];
                }
                if (isArray(obj)) {
                    // Iterate over array values
                    for (var i = 0, l = obj.length; i < l; i++) {
                        fn.call(null, obj[i], i, obj);
                    }
                }
                else {
                    // Iterate over object keys
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            fn.call(null, obj[key], key, obj);
                        }
                    }
                }
            }
            /**
             * Accepts varargs expecting each argument to be an object, then
             * immutably merges the properties of each object and returns result.
             *
             * When multiple objects contain the same key the later object in
             * the arguments list will take precedence.
             *
             * Example:
             *
             * ```js
             * var result = merge({foo: 123}, {foo: 456});
             * console.log(result.foo); // outputs 456
             * ```
             *
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */
            function merge( /* obj1, obj2, obj3, ... */) {
                var result = {};
                function assignValue(val, key) {
                    if (typeof result[key] === 'object' && typeof val === 'object') {
                        result[key] = merge(result[key], val);
                    }
                    else {
                        result[key] = val;
                    }
                }
                for (var i = 0, l = arguments.length; i < l; i++) {
                    forEach(arguments[i], assignValue);
                }
                return result;
            }
            /**
             * Function equal to merge with the difference being that no reference
             * to original objects is kept.
             *
             * @see merge
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */
            function deepMerge( /* obj1, obj2, obj3, ... */) {
                var result = {};
                function assignValue(val, key) {
                    if (typeof result[key] === 'object' && typeof val === 'object') {
                        result[key] = deepMerge(result[key], val);
                    }
                    else if (typeof val === 'object') {
                        result[key] = deepMerge({}, val);
                    }
                    else {
                        result[key] = val;
                    }
                }
                for (var i = 0, l = arguments.length; i < l; i++) {
                    forEach(arguments[i], assignValue);
                }
                return result;
            }
            /**
             * Extends object a by mutably adding to it the properties of object b.
             *
             * @param {Object} a The object to be extended
             * @param {Object} b The object to copy properties from
             * @param {Object} thisArg The object to bind function to
             * @return {Object} The resulting value of object a
             */
            function extend(a, b, thisArg) {
                forEach(b, function assignValue(val, key) {
                    if (thisArg && typeof val === 'function') {
                        a[key] = bind(val, thisArg);
                    }
                    else {
                        a[key] = val;
                    }
                });
                return a;
            }
            var utils = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: isBuffer,
                isFormData: isFormData,
                isArrayBufferView: isArrayBufferView,
                isString: isString,
                isNumber: isNumber,
                isObject: isObject,
                isUndefined: isUndefined,
                isDate: isDate,
                isFile: isFile,
                isBlob: isBlob,
                isFunction: isFunction,
                isStream: isStream,
                isURLSearchParams: isURLSearchParams,
                isStandardBrowserEnv: isStandardBrowserEnv,
                forEach: forEach,
                merge: merge,
                deepMerge: deepMerge,
                extend: extend,
                trim: trim
            };
            var utils_1 = utils.isArray;
            var utils_2 = utils.isArrayBuffer;
            var utils_3 = utils.isBuffer;
            var utils_4 = utils.isFormData;
            var utils_5 = utils.isArrayBufferView;
            var utils_6 = utils.isString;
            var utils_7 = utils.isNumber;
            var utils_8 = utils.isObject;
            var utils_9 = utils.isUndefined;
            var utils_10 = utils.isDate;
            var utils_11 = utils.isFile;
            var utils_12 = utils.isBlob;
            var utils_13 = utils.isFunction;
            var utils_14 = utils.isStream;
            var utils_15 = utils.isURLSearchParams;
            var utils_16 = utils.isStandardBrowserEnv;
            var utils_17 = utils.forEach;
            var utils_18 = utils.merge;
            var utils_19 = utils.deepMerge;
            var utils_20 = utils.extend;
            var utils_21 = utils.trim;
            'use strict';
            function encode(val) {
                return encodeURIComponent(val).
                    replace(/%40/gi, '@').
                    replace(/%3A/gi, ':').
                    replace(/%24/g, '$').
                    replace(/%2C/gi, ',').
                    replace(/%20/g, '+').
                    replace(/%5B/gi, '[').
                    replace(/%5D/gi, ']');
            }
            /**
             * Build a URL by appending params to the end
             *
             * @param {string} url The base of the url (e.g., http://www.google.com)
             * @param {object} [params] The params to be appended
             * @returns {string} The formatted url
             */
            var buildURL = function buildURL(url, params, paramsSerializer) {
                /*eslint no-param-reassign:0*/
                if (!params) {
                    return url;
                }
                var serializedParams;
                if (paramsSerializer) {
                    serializedParams = paramsSerializer(params);
                }
                else if (utils.isURLSearchParams(params)) {
                    serializedParams = params.toString();
                }
                else {
                    var parts = [];
                    utils.forEach(params, function serialize(val, key) {
                        if (val === null || typeof val === 'undefined') {
                            return;
                        }
                        if (utils.isArray(val)) {
                            key = key + '[]';
                        }
                        else {
                            val = [val];
                        }
                        utils.forEach(val, function parseValue(v) {
                            if (utils.isDate(v)) {
                                v = v.toISOString();
                            }
                            else if (utils.isObject(v)) {
                                v = JSON.stringify(v);
                            }
                            parts.push(encode(key) + '=' + encode(v));
                        });
                    });
                    serializedParams = parts.join('&');
                }
                if (serializedParams) {
                    var hashmarkIndex = url.indexOf('#');
                    if (hashmarkIndex !== -1) {
                        url = url.slice(0, hashmarkIndex);
                    }
                    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
                }
                return url;
            };
            'use strict';
            function InterceptorManager() {
                this.handlers = [];
            }
            /**
             * Add a new interceptor to the stack
             *
             * @param {Function} fulfilled The function to handle `then` for a `Promise`
             * @param {Function} rejected The function to handle `reject` for a `Promise`
             *
             * @return {Number} An ID used to remove interceptor later
             */
            InterceptorManager.prototype.use = function use(fulfilled, rejected) {
                this.handlers.push({
                    fulfilled: fulfilled,
                    rejected: rejected
                });
                return this.handlers.length - 1;
            };
            /**
             * Remove an interceptor from the stack
             *
             * @param {Number} id The ID that was returned by `use`
             */
            InterceptorManager.prototype.eject = function eject(id) {
                if (this.handlers[id]) {
                    this.handlers[id] = null;
                }
            };
            /**
             * Iterate over all the registered interceptors
             *
             * This method is particularly useful for skipping over any
             * interceptors that may have become `null` calling `eject`.
             *
             * @param {Function} fn The function to call for each interceptor
             */
            InterceptorManager.prototype.forEach = function forEach(fn) {
                utils.forEach(this.handlers, function forEachHandler(h) {
                    if (h !== null) {
                        fn(h);
                    }
                });
            };
            var InterceptorManager_1 = InterceptorManager;
            'use strict';
            /**
             * Transform the data for a request or a response
             *
             * @param {Object|String} data The data to be transformed
             * @param {Array} headers The headers for the request or response
             * @param {Array|Function} fns A single function or Array of functions
             * @returns {*} The resulting transformed data
             */
            var transformData = function transformData(data, headers, fns) {
                /*eslint no-param-reassign:0*/
                utils.forEach(fns, function transform(fn) {
                    data = fn(data, headers);
                });
                return data;
            };
            'use strict';
            var isCancel = function isCancel(value) {
                return !!(value && value.__CANCEL__);
            };
            'use strict';
            var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
                utils.forEach(headers, function processHeader(value, name) {
                    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                        headers[normalizedName] = value;
                        delete headers[name];
                    }
                });
            };
            'use strict';
            /**
             * Update an Error with the specified config, error code, and response.
             *
             * @param {Error} error The error to update.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The error.
             */
            var enhanceError = function enhanceError(error, config, code, request, response) {
                error.config = config;
                if (code) {
                    error.code = code;
                }
                error.request = request;
                error.response = response;
                error.isAxiosError = true;
                error.toJSON = function () {
                    return {
                        // Standard
                        message: this.message,
                        name: this.name,
                        // Microsoft
                        description: this.description,
                        number: this.number,
                        // Mozilla
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        // Axios
                        config: this.config,
                        code: this.code
                    };
                };
                return error;
            };
            'use strict';
            /**
             * Create an Error with the specified message, config, error code, request and response.
             *
             * @param {string} message The error message.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The created error.
             */
            var createError = function createError(message, config, code, request, response) {
                var error = new Error(message);
                return enhanceError(error, config, code, request, response);
            };
            'use strict';
            /**
             * Resolve or reject a Promise based on response status.
             *
             * @param {Function} resolve A function that resolves the promise.
             * @param {Function} reject A function that rejects the promise.
             * @param {object} response The response.
             */
            var settle = function settle(resolve, reject, response) {
                var validateStatus = response.config.validateStatus;
                if (!validateStatus || validateStatus(response.status)) {
                    resolve(response);
                }
                else {
                    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
                }
            };
            'use strict';
            /**
             * Determines whether the specified URL is absolute
             *
             * @param {string} url The URL to test
             * @returns {boolean} True if the specified URL is absolute, otherwise false
             */
            var isAbsoluteURL = function isAbsoluteURL(url) {
                // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
                // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
                // by any combination of letters, digits, plus, period, or hyphen.
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
            };
            'use strict';
            /**
             * Creates a new URL by combining the specified URLs
             *
             * @param {string} baseURL The base URL
             * @param {string} relativeURL The relative URL
             * @returns {string} The combined URL
             */
            var combineURLs = function combineURLs(baseURL, relativeURL) {
                return relativeURL
                    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
                    : baseURL;
            };
            'use strict';
            /**
             * Creates a new URL by combining the baseURL with the requestedURL,
             * only when the requestedURL is not already an absolute URL.
             * If the requestURL is absolute, this function returns the requestedURL untouched.
             *
             * @param {string} baseURL The base URL
             * @param {string} requestedURL Absolute or relative URL to combine
             * @returns {string} The combined full path
             */
            var buildFullPath = function buildFullPath(baseURL, requestedURL) {
                if (baseURL && !isAbsoluteURL(requestedURL)) {
                    return combineURLs(baseURL, requestedURL);
                }
                return requestedURL;
            };
            'use strict';
            // Headers whose duplicates are ignored by node
            // c.f. https://nodejs.org/api/http.html#http_message_headers
            var ignoreDuplicateOf = [
                'age', 'authorization', 'content-length', 'content-type', 'etag',
                'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
                'last-modified', 'location', 'max-forwards', 'proxy-authorization',
                'referer', 'retry-after', 'user-agent'
            ];
            /**
             * Parse headers into an object
             *
             * ```
             * Date: Wed, 27 Aug 2014 08:58:49 GMT
             * Content-Type: application/json
             * Connection: keep-alive
             * Transfer-Encoding: chunked
             * ```
             *
             * @param {String} headers Headers needing to be parsed
             * @returns {Object} Headers parsed into an object
             */
            var parseHeaders = function parseHeaders(headers) {
                var parsed = {};
                var key;
                var val;
                var i;
                if (!headers) {
                    return parsed;
                }
                utils.forEach(headers.split('\n'), function parser(line) {
                    i = line.indexOf(':');
                    key = utils.trim(line.substr(0, i)).toLowerCase();
                    val = utils.trim(line.substr(i + 1));
                    if (key) {
                        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                            return;
                        }
                        if (key === 'set-cookie') {
                            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                        }
                        else {
                            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                        }
                    }
                });
                return parsed;
            };
            'use strict';
            var isURLSameOrigin = (utils.isStandardBrowserEnv() ?
                // Standard browser envs have full support of the APIs needed to test
                // whether the request URL is of the same origin as current location.
                (function standardBrowserEnv() {
                    var msie = /(msie|trident)/i.test(navigator.userAgent);
                    var urlParsingNode = document.createElement('a');
                    var originURL;
                    /**
                  * Parse a URL to discover it's components
                  *
                  * @param {String} url The URL to be parsed
                  * @returns {Object}
                  */
                    function resolveURL(url) {
                        var href = url;
                        if (msie) {
                            // IE needs attribute set twice to normalize properties
                            urlParsingNode.setAttribute('href', href);
                            href = urlParsingNode.href;
                        }
                        urlParsingNode.setAttribute('href', href);
                        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                        return {
                            href: urlParsingNode.href,
                            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                            host: urlParsingNode.host,
                            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                            hostname: urlParsingNode.hostname,
                            port: urlParsingNode.port,
                            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                                urlParsingNode.pathname :
                                '/' + urlParsingNode.pathname
                        };
                    }
                    originURL = resolveURL(window.location.href);
                    /**
                  * Determine if a URL shares the same origin as the current location
                  *
                  * @param {String} requestURL The URL to test
                  * @returns {boolean} True if URL shares the same origin, otherwise false
                  */
                    return function isURLSameOrigin(requestURL) {
                        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
                        return (parsed.protocol === originURL.protocol &&
                            parsed.host === originURL.host);
                    };
                })() :
                // Non standard browser envs (web workers, react-native) lack needed support.
                (function nonStandardBrowserEnv() {
                    return function isURLSameOrigin() {
                        return true;
                    };
                })());
            'use strict';
            var cookies = (utils.isStandardBrowserEnv() ?
                // Standard browser envs support document.cookie
                (function standardBrowserEnv() {
                    return {
                        write: function write(name, value, expires, path, domain, secure) {
                            var cookie = [];
                            cookie.push(name + '=' + encodeURIComponent(value));
                            if (utils.isNumber(expires)) {
                                cookie.push('expires=' + new Date(expires).toGMTString());
                            }
                            if (utils.isString(path)) {
                                cookie.push('path=' + path);
                            }
                            if (utils.isString(domain)) {
                                cookie.push('domain=' + domain);
                            }
                            if (secure === true) {
                                cookie.push('secure');
                            }
                            document.cookie = cookie.join('; ');
                        },
                        read: function read(name) {
                            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                            return (match ? decodeURIComponent(match[3]) : null);
                        },
                        remove: function remove(name) {
                            this.write(name, '', Date.now() - 86400000);
                        }
                    };
                })() :
                // Non standard browser env (web workers, react-native) lack needed support.
                (function nonStandardBrowserEnv() {
                    return {
                        write: function write() { },
                        read: function read() { return null; },
                        remove: function remove() { }
                    };
                })());
            'use strict';
            var xhr = function xhrAdapter(config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                    var requestData = config.data;
                    var requestHeaders = config.headers;
                    if (utils.isFormData(requestData)) {
                        delete requestHeaders['Content-Type']; // Let the browser set it
                    }
                    var request = new XMLHttpRequest();
                    // HTTP basic authentication
                    if (config.auth) {
                        var username = config.auth.username || '';
                        var password = config.auth.password || '';
                        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                    }
                    var fullPath = buildFullPath(config.baseURL, config.url);
                    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
                    // Set the request timeout in MS
                    request.timeout = config.timeout;
                    // Listen for ready state
                    request.onreadystatechange = function handleLoad() {
                        if (!request || request.readyState !== 4) {
                            return;
                        }
                        // The request errored out and we didn't get a response, this will be
                        // handled by onerror instead
                        // With one exception: request that using file: protocol, most browsers
                        // will return status as 0 even though it's a successful request
                        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                            return;
                        }
                        // Prepare the response
                        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                        var response = {
                            data: responseData,
                            status: request.status,
                            statusText: request.statusText,
                            headers: responseHeaders,
                            config: config,
                            request: request
                        };
                        settle(resolve, reject, response);
                        // Clean up request
                        request = null;
                    };
                    // Handle browser request cancellation (as opposed to a manual cancellation)
                    request.onabort = function handleAbort() {
                        if (!request) {
                            return;
                        }
                        reject(createError('Request aborted', config, 'ECONNABORTED', request));
                        // Clean up request
                        request = null;
                    };
                    // Handle low level network errors
                    request.onerror = function handleError() {
                        // Real errors are hidden from us by the browser
                        // onerror should only fire if it's a network error
                        reject(createError('Network Error', config, null, request));
                        // Clean up request
                        request = null;
                    };
                    // Handle timeout
                    request.ontimeout = function handleTimeout() {
                        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
                        if (config.timeoutErrorMessage) {
                            timeoutErrorMessage = config.timeoutErrorMessage;
                        }
                        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request));
                        // Clean up request
                        request = null;
                    };
                    // Add xsrf header
                    // This is only done if running in a standard browser environment.
                    // Specifically not if we're in a web worker, or react-native.
                    if (utils.isStandardBrowserEnv()) {
                        var cookies$1 = cookies;
                        // Add xsrf header
                        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
                            cookies$1.read(config.xsrfCookieName) :
                            undefined;
                        if (xsrfValue) {
                            requestHeaders[config.xsrfHeaderName] = xsrfValue;
                        }
                    }
                    // Add headers to the request
                    if ('setRequestHeader' in request) {
                        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                                // Remove Content-Type if data is undefined
                                delete requestHeaders[key];
                            }
                            else {
                                // Otherwise add header to the request
                                request.setRequestHeader(key, val);
                            }
                        });
                    }
                    // Add withCredentials to request if needed
                    if (!utils.isUndefined(config.withCredentials)) {
                        request.withCredentials = !!config.withCredentials;
                    }
                    // Add responseType to request if needed
                    if (config.responseType) {
                        try {
                            request.responseType = config.responseType;
                        }
                        catch (e) {
                            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                            if (config.responseType !== 'json') {
                                throw e;
                            }
                        }
                    }
                    // Handle progress if needed
                    if (typeof config.onDownloadProgress === 'function') {
                        request.addEventListener('progress', config.onDownloadProgress);
                    }
                    // Not all browsers support upload events
                    if (typeof config.onUploadProgress === 'function' && request.upload) {
                        request.upload.addEventListener('progress', config.onUploadProgress);
                    }
                    if (config.cancelToken) {
                        // Handle cancellation
                        config.cancelToken.promise.then(function onCanceled(cancel) {
                            if (!request) {
                                return;
                            }
                            request.abort();
                            reject(cancel);
                            // Clean up request
                            request = null;
                        });
                    }
                    if (requestData === undefined) {
                        requestData = null;
                    }
                    // Send the request
                    request.send(requestData);
                });
            };
            'use strict';
            var DEFAULT_CONTENT_TYPE = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                    headers['Content-Type'] = value;
                }
            }
            function getDefaultAdapter() {
                var adapter;
                if (typeof XMLHttpRequest !== 'undefined') {
                    // For browsers use XHR adapter
                    adapter = xhr;
                }
                else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
                    // For node use HTTP adapter
                    adapter = xhr;
                }
                return adapter;
            }
            var defaults = {
                adapter: getDefaultAdapter(),
                transformRequest: [function transformRequest(data, headers) {
                        normalizeHeaderName(headers, 'Accept');
                        normalizeHeaderName(headers, 'Content-Type');
                        if (utils.isFormData(data) ||
                            utils.isArrayBuffer(data) ||
                            utils.isBuffer(data) ||
                            utils.isStream(data) ||
                            utils.isFile(data) ||
                            utils.isBlob(data)) {
                            return data;
                        }
                        if (utils.isArrayBufferView(data)) {
                            return data.buffer;
                        }
                        if (utils.isURLSearchParams(data)) {
                            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                            return data.toString();
                        }
                        if (utils.isObject(data)) {
                            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                            return JSON.stringify(data);
                        }
                        return data;
                    }],
                transformResponse: [function transformResponse(data) {
                        /*eslint no-param-reassign:0*/
                        if (typeof data === 'string') {
                            try {
                                data = JSON.parse(data);
                            }
                            catch (e) { /* Ignore */ }
                        }
                        return data;
                    }],
                /**
                 * A timeout in milliseconds to abort a request. If set to 0 (default) a
                 * timeout is not created.
                 */
                timeout: 0,
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
                maxContentLength: -1,
                validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                }
            };
            defaults.headers = {
                common: {
                    'Accept': 'application/json, text/plain, */*'
                }
            };
            utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
                defaults.headers[method] = {};
            });
            utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            });
            var defaults_1 = defaults;
            'use strict';
            /**
             * Throws a `Cancel` if cancellation has been requested.
             */
            function throwIfCancellationRequested(config) {
                if (config.cancelToken) {
                    config.cancelToken.throwIfRequested();
                }
            }
            /**
             * Dispatch a request to the server using the configured adapter.
             *
             * @param {object} config The config that is to be used for the request
             * @returns {Promise} The Promise to be fulfilled
             */
            var dispatchRequest = function dispatchRequest(config) {
                throwIfCancellationRequested(config);
                // Ensure headers exist
                config.headers = config.headers || {};
                // Transform request data
                config.data = transformData(config.data, config.headers, config.transformRequest);
                // Flatten headers
                config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
                utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
                    delete config.headers[method];
                });
                var adapter = config.adapter || defaults_1.adapter;
                return adapter(config).then(function onAdapterResolution(response) {
                    throwIfCancellationRequested(config);
                    // Transform response data
                    response.data = transformData(response.data, response.headers, config.transformResponse);
                    return response;
                }, function onAdapterRejection(reason) {
                    if (!isCancel(reason)) {
                        throwIfCancellationRequested(config);
                        // Transform response data
                        if (reason && reason.response) {
                            reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                        }
                    }
                    return Promise.reject(reason);
                });
            };
            'use strict';
            /**
             * Config-specific merge-function which creates a new config-object
             * by merging two configuration objects together.
             *
             * @param {Object} config1
             * @param {Object} config2
             * @returns {Object} New object resulting from merging config2 to config1
             */
            var mergeConfig = function mergeConfig(config1, config2) {
                // eslint-disable-next-line no-param-reassign
                config2 = config2 || {};
                var config = {};
                var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
                var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
                var defaultToConfig2Keys = [
                    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
                    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
                    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
                    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
                    'httpsAgent', 'cancelToken', 'socketPath'
                ];
                utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
                    if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                });
                utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
                    if (utils.isObject(config2[prop])) {
                        config[prop] = utils.deepMerge(config1[prop], config2[prop]);
                    }
                    else if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                    else if (utils.isObject(config1[prop])) {
                        config[prop] = utils.deepMerge(config1[prop]);
                    }
                    else if (typeof config1[prop] !== 'undefined') {
                        config[prop] = config1[prop];
                    }
                });
                utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
                    if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                    else if (typeof config1[prop] !== 'undefined') {
                        config[prop] = config1[prop];
                    }
                });
                var axiosKeys = valueFromConfig2Keys
                    .concat(mergeDeepPropertiesKeys)
                    .concat(defaultToConfig2Keys);
                var otherKeys = Object
                    .keys(config2)
                    .filter(function filterAxiosKeys(key) {
                    return axiosKeys.indexOf(key) === -1;
                });
                utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
                    if (typeof config2[prop] !== 'undefined') {
                        config[prop] = config2[prop];
                    }
                    else if (typeof config1[prop] !== 'undefined') {
                        config[prop] = config1[prop];
                    }
                });
                return config;
            };
            'use strict';
            /**
             * Create a new instance of Axios
             *
             * @param {Object} instanceConfig The default config for the instance
             */
            function Axios(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new InterceptorManager_1(),
                    response: new InterceptorManager_1()
                };
            }
            /**
             * Dispatch a request
             *
             * @param {Object} config The config specific for this request (merged with this.defaults)
             */
            Axios.prototype.request = function request(config) {
                /*eslint no-param-reassign:0*/
                // Allow for axios('example/url'[, config]) a la fetch API
                if (typeof config === 'string') {
                    config = arguments[1] || {};
                    config.url = arguments[0];
                }
                else {
                    config = config || {};
                }
                config = mergeConfig(this.defaults, config);
                // Set config.method
                if (config.method) {
                    config.method = config.method.toLowerCase();
                }
                else if (this.defaults.method) {
                    config.method = this.defaults.method.toLowerCase();
                }
                else {
                    config.method = 'get';
                }
                // Hook up interceptors middleware
                var chain = [dispatchRequest, undefined];
                var promise = Promise.resolve(config);
                this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                    chain.unshift(interceptor.fulfilled, interceptor.rejected);
                });
                this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                    chain.push(interceptor.fulfilled, interceptor.rejected);
                });
                while (chain.length) {
                    promise = promise.then(chain.shift(), chain.shift());
                }
                return promise;
            };
            Axios.prototype.getUri = function getUri(config) {
                config = mergeConfig(this.defaults, config);
                return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
            };
            // Provide aliases for supported request methods
            utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, config) {
                    return this.request(utils.merge(config || {}, {
                        method: method,
                        url: url
                    }));
                };
            });
            utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, data, config) {
                    return this.request(utils.merge(config || {}, {
                        method: method,
                        url: url,
                        data: data
                    }));
                };
            });
            var Axios_1 = Axios;
            'use strict';
            /**
             * A `Cancel` is an object that is thrown when an operation is canceled.
             *
             * @class
             * @param {string=} message The message.
             */
            function Cancel(message) {
                this.message = message;
            }
            Cancel.prototype.toString = function toString() {
                return 'Cancel' + (this.message ? ': ' + this.message : '');
            };
            Cancel.prototype.__CANCEL__ = true;
            var Cancel_1 = Cancel;
            'use strict';
            /**
             * A `CancelToken` is an object that can be used to request cancellation of an operation.
             *
             * @class
             * @param {Function} executor The executor function.
             */
            function CancelToken(executor) {
                if (typeof executor !== 'function') {
                    throw new TypeError('executor must be a function.');
                }
                var resolvePromise;
                this.promise = new Promise(function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                });
                var token = this;
                executor(function cancel(message) {
                    if (token.reason) {
                        // Cancellation has already been requested
                        return;
                    }
                    token.reason = new Cancel_1(message);
                    resolvePromise(token.reason);
                });
            }
            /**
             * Throws a `Cancel` if cancellation has been requested.
             */
            CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                if (this.reason) {
                    throw this.reason;
                }
            };
            /**
             * Returns an object that contains a new `CancelToken` and a function that, when called,
             * cancels the `CancelToken`.
             */
            CancelToken.source = function source() {
                var cancel;
                var token = new CancelToken(function executor(c) {
                    cancel = c;
                });
                return {
                    token: token,
                    cancel: cancel
                };
            };
            var CancelToken_1 = CancelToken;
            'use strict';
            /**
             * Syntactic sugar for invoking a function and expanding an array for arguments.
             *
             * Common use case would be to use `Function.prototype.apply`.
             *
             *  ```js
             *  function f(x, y, z) {}
             *  var args = [1, 2, 3];
             *  f.apply(null, args);
             *  ```
             *
             * With `spread` this example can be re-written.
             *
             *  ```js
             *  spread(function(x, y, z) {})([1, 2, 3]);
             *  ```
             *
             * @param {Function} callback
             * @returns {Function}
             */
            var spread = function spread(callback) {
                return function wrap(arr) {
                    return callback.apply(null, arr);
                };
            };
            'use strict';
            /**
             * Create an instance of Axios
             *
             * @param {Object} defaultConfig The default config for the instance
             * @return {Axios} A new instance of Axios
             */
            function createInstance(defaultConfig) {
                var context = new Axios_1(defaultConfig);
                var instance = bind(Axios_1.prototype.request, context);
                // Copy axios.prototype to instance
                utils.extend(instance, Axios_1.prototype, context);
                // Copy context to instance
                utils.extend(instance, context);
                return instance;
            }
            // Create the default instance to be exported
            var axios = createInstance(defaults_1);
            // Expose Axios class to allow class inheritance
            axios.Axios = Axios_1;
            // Factory for creating new instances
            axios.create = function create(instanceConfig) {
                return createInstance(mergeConfig(axios.defaults, instanceConfig));
            };
            // Expose Cancel & CancelToken
            axios.Cancel = Cancel_1;
            axios.CancelToken = CancelToken_1;
            axios.isCancel = isCancel;
            // Expose all/spread
            axios.all = function all(promises) {
                return Promise.all(promises);
            };
            axios.spread = spread;
            var axios_1 = axios;
            // Allow use of default import syntax in TypeScript
            var default_1 = axios;
            axios_1.default = default_1;
            var axios$1 = axios_1;
            var bluebird = createCommonjsModule(function (module, exports) {
                /* @preserve
                 * The MIT License (MIT)
                 *
                 * Copyright (c) 2013-2018 Petka Antonov
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 *
                 */
                /**
                 * bluebird build version 3.7.2
                 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
                */
                !function (e) { if ("object" == 'object' && "undefined" != 'object')
                    module.exports = e();
                else if ("function" == typeof undefined && undefined.amd)
                    undefined([], e);
                else {
                    var f;
                    "undefined" != typeof window ? f = window : "undefined" != typeof commonjsGlobal ? f = commonjsGlobal : "undefined" != typeof self && (f = self), f.Promise = e();
                } }(function () {
                    var define, module, exports;
                    return (function e(t, n, r) { function s(o, u) { if (!n[o]) {
                        if (!t[o]) {
                            var a = typeof _dereq_ == "function" && _dereq_;
                            if (!u && a)
                                return a(o, !0);
                            if (i)
                                return i(o, !0);
                            var f = new Error("Cannot find module '" + o + "'");
                            throw f.code = "MODULE_NOT_FOUND", f;
                        }
                        var l = n[o] = { exports: {} };
                        t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e); }, l, l.exports, e, t, n, r);
                    } return n[o].exports; } var i = typeof _dereq_ == "function" && _dereq_; for (var o = 0; o < r.length; o++)
                        s(r[o]); return s; })({ 1: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise) {
                                    var SomePromiseArray = Promise._SomePromiseArray;
                                    function any(promises) {
                                        var ret = new SomePromiseArray(promises);
                                        var promise = ret.promise();
                                        ret.setHowMany(1);
                                        ret.setUnwrap();
                                        ret.init();
                                        return promise;
                                    }
                                    Promise.any = function (promises) {
                                        return any(promises);
                                    };
                                    Promise.prototype.any = function () {
                                        return any(this);
                                    };
                                };
                            }, {}], 2: [function (_dereq_, module, exports) {
                                "use strict";
                                var firstLineError;
                                try {
                                    throw new Error();
                                }
                                catch (e) {
                                    firstLineError = e;
                                }
                                var schedule = _dereq_("./schedule");
                                var Queue = _dereq_("./queue");
                                function Async() {
                                    this._customScheduler = false;
                                    this._isTickUsed = false;
                                    this._lateQueue = new Queue(16);
                                    this._normalQueue = new Queue(16);
                                    this._haveDrainedQueues = false;
                                    var self = this;
                                    this.drainQueues = function () {
                                        self._drainQueues();
                                    };
                                    this._schedule = schedule;
                                }
                                Async.prototype.setScheduler = function (fn) {
                                    var prev = this._schedule;
                                    this._schedule = fn;
                                    this._customScheduler = true;
                                    return prev;
                                };
                                Async.prototype.hasCustomScheduler = function () {
                                    return this._customScheduler;
                                };
                                Async.prototype.haveItemsQueued = function () {
                                    return this._isTickUsed || this._haveDrainedQueues;
                                };
                                Async.prototype.fatalError = function (e, isNode) {
                                    if (isNode) {
                                        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
                                            "\n");
                                        process.exit(2);
                                    }
                                    else {
                                        this.throwLater(e);
                                    }
                                };
                                Async.prototype.throwLater = function (fn, arg) {
                                    if (arguments.length === 1) {
                                        arg = fn;
                                        fn = function () { throw arg; };
                                    }
                                    if (typeof setTimeout !== "undefined") {
                                        setTimeout(function () {
                                            fn(arg);
                                        }, 0);
                                    }
                                    else
                                        try {
                                            this._schedule(function () {
                                                fn(arg);
                                            });
                                        }
                                        catch (e) {
                                            throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                };
                                function AsyncInvokeLater(fn, receiver, arg) {
                                    this._lateQueue.push(fn, receiver, arg);
                                    this._queueTick();
                                }
                                function AsyncInvoke(fn, receiver, arg) {
                                    this._normalQueue.push(fn, receiver, arg);
                                    this._queueTick();
                                }
                                function AsyncSettlePromises(promise) {
                                    this._normalQueue._pushOne(promise);
                                    this._queueTick();
                                }
                                Async.prototype.invokeLater = AsyncInvokeLater;
                                Async.prototype.invoke = AsyncInvoke;
                                Async.prototype.settlePromises = AsyncSettlePromises;
                                function _drainQueue(queue) {
                                    while (queue.length() > 0) {
                                        _drainQueueStep(queue);
                                    }
                                }
                                function _drainQueueStep(queue) {
                                    var fn = queue.shift();
                                    if (typeof fn !== "function") {
                                        fn._settlePromises();
                                    }
                                    else {
                                        var receiver = queue.shift();
                                        var arg = queue.shift();
                                        fn.call(receiver, arg);
                                    }
                                }
                                Async.prototype._drainQueues = function () {
                                    _drainQueue(this._normalQueue);
                                    this._reset();
                                    this._haveDrainedQueues = true;
                                    _drainQueue(this._lateQueue);
                                };
                                Async.prototype._queueTick = function () {
                                    if (!this._isTickUsed) {
                                        this._isTickUsed = true;
                                        this._schedule(this.drainQueues);
                                    }
                                };
                                Async.prototype._reset = function () {
                                    this._isTickUsed = false;
                                };
                                module.exports = Async;
                                module.exports.firstLineError = firstLineError;
                            }, { "./queue": 26, "./schedule": 29 }], 3: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
                                    var calledBind = false;
                                    var rejectThis = function (_, e) {
                                        this._reject(e);
                                    };
                                    var targetRejected = function (e, context) {
                                        context.promiseRejectionQueued = true;
                                        context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
                                    };
                                    var bindingResolved = function (thisArg, context) {
                                        if (((this._bitField & 50397184) === 0)) {
                                            this._resolveCallback(context.target);
                                        }
                                    };
                                    var bindingRejected = function (e, context) {
                                        if (!context.promiseRejectionQueued)
                                            this._reject(e);
                                    };
                                    Promise.prototype.bind = function (thisArg) {
                                        if (!calledBind) {
                                            calledBind = true;
                                            Promise.prototype._propagateFrom = debug.propagateFromFunction();
                                            Promise.prototype._boundValue = debug.boundValueFunction();
                                        }
                                        var maybePromise = tryConvertToPromise(thisArg);
                                        var ret = new Promise(INTERNAL);
                                        ret._propagateFrom(this, 1);
                                        var target = this._target();
                                        ret._setBoundTo(maybePromise);
                                        if (maybePromise instanceof Promise) {
                                            var context = {
                                                promiseRejectionQueued: false,
                                                promise: ret,
                                                target: target,
                                                bindingPromise: maybePromise
                                            };
                                            target._then(INTERNAL, targetRejected, undefined, ret, context);
                                            maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
                                            ret._setOnCancel(maybePromise);
                                        }
                                        else {
                                            ret._resolveCallback(target);
                                        }
                                        return ret;
                                    };
                                    Promise.prototype._setBoundTo = function (obj) {
                                        if (obj !== undefined) {
                                            this._bitField = this._bitField | 2097152;
                                            this._boundTo = obj;
                                        }
                                        else {
                                            this._bitField = this._bitField & (~2097152);
                                        }
                                    };
                                    Promise.prototype._isBound = function () {
                                        return (this._bitField & 2097152) === 2097152;
                                    };
                                    Promise.bind = function (thisArg, value) {
                                        return Promise.resolve(value).bind(thisArg);
                                    };
                                };
                            }, {}], 4: [function (_dereq_, module, exports) {
                                "use strict";
                                var old;
                                if (typeof Promise !== "undefined")
                                    old = Promise;
                                function noConflict() {
                                    try {
                                        if (Promise === bluebird)
                                            Promise = old;
                                    }
                                    catch (e) { }
                                    return bluebird;
                                }
                                var bluebird = _dereq_("./promise")();
                                bluebird.noConflict = noConflict;
                                module.exports = bluebird;
                            }, { "./promise": 22 }], 5: [function (_dereq_, module, exports) {
                                "use strict";
                                var cr = Object.create;
                                if (cr) {
                                    var callerCache = cr(null);
                                    var getterCache = cr(null);
                                    callerCache[" size"] = getterCache[" size"] = 0;
                                }
                                module.exports = function (Promise) {
                                    var util = _dereq_("./util");
                                    var canEvaluate = util.canEvaluate;
                                    var isIdentifier = util.isIdentifier;
                                    var getMethodCaller;
                                    var getGetter;
                                    if (!true) {
                                        var makeMethodCaller = function (methodName) {
                                            return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
                                        };
                                        var makeGetter = function (propertyName) {
                                            return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
                                        };
                                        var getCompiled = function (name, compiler, cache) {
                                            var ret = cache[name];
                                            if (typeof ret !== "function") {
                                                if (!isIdentifier(name)) {
                                                    return null;
                                                }
                                                ret = compiler(name);
                                                cache[name] = ret;
                                                cache[" size"]++;
                                                if (cache[" size"] > 512) {
                                                    var keys = Object.keys(cache);
                                                    for (var i = 0; i < 256; ++i)
                                                        delete cache[keys[i]];
                                                    cache[" size"] = keys.length - 256;
                                                }
                                            }
                                            return ret;
                                        };
                                        getMethodCaller = function (name) {
                                            return getCompiled(name, makeMethodCaller, callerCache);
                                        };
                                        getGetter = function (name) {
                                            return getCompiled(name, makeGetter, getterCache);
                                        };
                                    }
                                    function ensureMethod(obj, methodName) {
                                        var fn;
                                        if (obj != null)
                                            fn = obj[methodName];
                                        if (typeof fn !== "function") {
                                            var message = "Object " + util.classString(obj) + " has no method '" +
                                                util.toString(methodName) + "'";
                                            throw new Promise.TypeError(message);
                                        }
                                        return fn;
                                    }
                                    function caller(obj) {
                                        var methodName = this.pop();
                                        var fn = ensureMethod(obj, methodName);
                                        return fn.apply(obj, this);
                                    }
                                    Promise.prototype.call = function (methodName) {
                                        var args = [].slice.call(arguments, 1);
                                        ;
                                        if (!true) {
                                            if (canEvaluate) {
                                                var maybeCaller = getMethodCaller(methodName);
                                                if (maybeCaller !== null) {
                                                    return this._then(maybeCaller, undefined, undefined, args, undefined);
                                                }
                                            }
                                        }
                                        args.push(methodName);
                                        return this._then(caller, undefined, undefined, args, undefined);
                                    };
                                    function namedGetter(obj) {
                                        return obj[this];
                                    }
                                    function indexedGetter(obj) {
                                        var index = +this;
                                        if (index < 0)
                                            index = Math.max(0, index + obj.length);
                                        return obj[index];
                                    }
                                    Promise.prototype.get = function (propertyName) {
                                        var isIndex = (typeof propertyName === "number");
                                        var getter;
                                        if (!isIndex) {
                                            if (canEvaluate) {
                                                var maybeGetter = getGetter(propertyName);
                                                getter = maybeGetter !== null ? maybeGetter : namedGetter;
                                            }
                                            else {
                                                getter = namedGetter;
                                            }
                                        }
                                        else {
                                            getter = indexedGetter;
                                        }
                                        return this._then(getter, undefined, undefined, propertyName, undefined);
                                    };
                                };
                            }, { "./util": 36 }], 6: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, PromiseArray, apiRejection, debug) {
                                    var util = _dereq_("./util");
                                    var tryCatch = util.tryCatch;
                                    var errorObj = util.errorObj;
                                    var async = Promise._async;
                                    Promise.prototype["break"] = Promise.prototype.cancel = function () {
                                        if (!debug.cancellation())
                                            return this._warn("cancellation is disabled");
                                        var promise = this;
                                        var child = promise;
                                        while (promise._isCancellable()) {
                                            if (!promise._cancelBy(child)) {
                                                if (child._isFollowing()) {
                                                    child._followee().cancel();
                                                }
                                                else {
                                                    child._cancelBranched();
                                                }
                                                break;
                                            }
                                            var parent = promise._cancellationParent;
                                            if (parent == null || !parent._isCancellable()) {
                                                if (promise._isFollowing()) {
                                                    promise._followee().cancel();
                                                }
                                                else {
                                                    promise._cancelBranched();
                                                }
                                                break;
                                            }
                                            else {
                                                if (promise._isFollowing())
                                                    promise._followee().cancel();
                                                promise._setWillBeCancelled();
                                                child = promise;
                                                promise = parent;
                                            }
                                        }
                                    };
                                    Promise.prototype._branchHasCancelled = function () {
                                        this._branchesRemainingToCancel--;
                                    };
                                    Promise.prototype._enoughBranchesHaveCancelled = function () {
                                        return this._branchesRemainingToCancel === undefined ||
                                            this._branchesRemainingToCancel <= 0;
                                    };
                                    Promise.prototype._cancelBy = function (canceller) {
                                        if (canceller === this) {
                                            this._branchesRemainingToCancel = 0;
                                            this._invokeOnCancel();
                                            return true;
                                        }
                                        else {
                                            this._branchHasCancelled();
                                            if (this._enoughBranchesHaveCancelled()) {
                                                this._invokeOnCancel();
                                                return true;
                                            }
                                        }
                                        return false;
                                    };
                                    Promise.prototype._cancelBranched = function () {
                                        if (this._enoughBranchesHaveCancelled()) {
                                            this._cancel();
                                        }
                                    };
                                    Promise.prototype._cancel = function () {
                                        if (!this._isCancellable())
                                            return;
                                        this._setCancelled();
                                        async.invoke(this._cancelPromises, this, undefined);
                                    };
                                    Promise.prototype._cancelPromises = function () {
                                        if (this._length() > 0)
                                            this._settlePromises();
                                    };
                                    Promise.prototype._unsetOnCancel = function () {
                                        this._onCancelField = undefined;
                                    };
                                    Promise.prototype._isCancellable = function () {
                                        return this.isPending() && !this._isCancelled();
                                    };
                                    Promise.prototype.isCancellable = function () {
                                        return this.isPending() && !this.isCancelled();
                                    };
                                    Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
                                        if (util.isArray(onCancelCallback)) {
                                            for (var i = 0; i < onCancelCallback.length; ++i) {
                                                this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
                                            }
                                        }
                                        else if (onCancelCallback !== undefined) {
                                            if (typeof onCancelCallback === "function") {
                                                if (!internalOnly) {
                                                    var e = tryCatch(onCancelCallback).call(this._boundValue());
                                                    if (e === errorObj) {
                                                        this._attachExtraTrace(e.e);
                                                        async.throwLater(e.e);
                                                    }
                                                }
                                            }
                                            else {
                                                onCancelCallback._resultCancelled(this);
                                            }
                                        }
                                    };
                                    Promise.prototype._invokeOnCancel = function () {
                                        var onCancelCallback = this._onCancel();
                                        this._unsetOnCancel();
                                        async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
                                    };
                                    Promise.prototype._invokeInternalOnCancel = function () {
                                        if (this._isCancellable()) {
                                            this._doInvokeOnCancel(this._onCancel(), true);
                                            this._unsetOnCancel();
                                        }
                                    };
                                    Promise.prototype._resultCancelled = function () {
                                        this.cancel();
                                    };
                                };
                            }, { "./util": 36 }], 7: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (NEXT_FILTER) {
                                    var util = _dereq_("./util");
                                    var getKeys = _dereq_("./es5").keys;
                                    var tryCatch = util.tryCatch;
                                    var errorObj = util.errorObj;
                                    function catchFilter(instances, cb, promise) {
                                        return function (e) {
                                            var boundTo = promise._boundValue();
                                            predicateLoop: for (var i = 0; i < instances.length; ++i) {
                                                var item = instances[i];
                                                if (item === Error ||
                                                    (item != null && item.prototype instanceof Error)) {
                                                    if (e instanceof item) {
                                                        return tryCatch(cb).call(boundTo, e);
                                                    }
                                                }
                                                else if (typeof item === "function") {
                                                    var matchesPredicate = tryCatch(item).call(boundTo, e);
                                                    if (matchesPredicate === errorObj) {
                                                        return matchesPredicate;
                                                    }
                                                    else if (matchesPredicate) {
                                                        return tryCatch(cb).call(boundTo, e);
                                                    }
                                                }
                                                else if (util.isObject(e)) {
                                                    var keys = getKeys(item);
                                                    for (var j = 0; j < keys.length; ++j) {
                                                        var key = keys[j];
                                                        if (item[key] != e[key]) {
                                                            continue predicateLoop;
                                                        }
                                                    }
                                                    return tryCatch(cb).call(boundTo, e);
                                                }
                                            }
                                            return NEXT_FILTER;
                                        };
                                    }
                                    return catchFilter;
                                };
                            }, { "./es5": 13, "./util": 36 }], 8: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise) {
                                    var longStackTraces = false;
                                    var contextStack = [];
                                    Promise.prototype._promiseCreated = function () { };
                                    Promise.prototype._pushContext = function () { };
                                    Promise.prototype._popContext = function () { return null; };
                                    Promise._peekContext = Promise.prototype._peekContext = function () { };
                                    function Context() {
                                        this._trace = new Context.CapturedTrace(peekContext());
                                    }
                                    Context.prototype._pushContext = function () {
                                        if (this._trace !== undefined) {
                                            this._trace._promiseCreated = null;
                                            contextStack.push(this._trace);
                                        }
                                    };
                                    Context.prototype._popContext = function () {
                                        if (this._trace !== undefined) {
                                            var trace = contextStack.pop();
                                            var ret = trace._promiseCreated;
                                            trace._promiseCreated = null;
                                            return ret;
                                        }
                                        return null;
                                    };
                                    function createContext() {
                                        if (longStackTraces)
                                            return new Context();
                                    }
                                    function peekContext() {
                                        var lastIndex = contextStack.length - 1;
                                        if (lastIndex >= 0) {
                                            return contextStack[lastIndex];
                                        }
                                        return undefined;
                                    }
                                    Context.CapturedTrace = null;
                                    Context.create = createContext;
                                    Context.deactivateLongStackTraces = function () { };
                                    Context.activateLongStackTraces = function () {
                                        var Promise_pushContext = Promise.prototype._pushContext;
                                        var Promise_popContext = Promise.prototype._popContext;
                                        var Promise_PeekContext = Promise._peekContext;
                                        var Promise_peekContext = Promise.prototype._peekContext;
                                        var Promise_promiseCreated = Promise.prototype._promiseCreated;
                                        Context.deactivateLongStackTraces = function () {
                                            Promise.prototype._pushContext = Promise_pushContext;
                                            Promise.prototype._popContext = Promise_popContext;
                                            Promise._peekContext = Promise_PeekContext;
                                            Promise.prototype._peekContext = Promise_peekContext;
                                            Promise.prototype._promiseCreated = Promise_promiseCreated;
                                            longStackTraces = false;
                                        };
                                        longStackTraces = true;
                                        Promise.prototype._pushContext = Context.prototype._pushContext;
                                        Promise.prototype._popContext = Context.prototype._popContext;
                                        Promise._peekContext = Promise.prototype._peekContext = peekContext;
                                        Promise.prototype._promiseCreated = function () {
                                            var ctx = this._peekContext();
                                            if (ctx && ctx._promiseCreated == null)
                                                ctx._promiseCreated = this;
                                        };
                                    };
                                    return Context;
                                };
                            }, {}], 9: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, Context, enableAsyncHooks, disableAsyncHooks) {
                                    var async = Promise._async;
                                    var Warning = _dereq_("./errors").Warning;
                                    var util = _dereq_("./util");
                                    var es5 = _dereq_("./es5");
                                    var canAttachTrace = util.canAttachTrace;
                                    var unhandledRejectionHandled;
                                    var possiblyUnhandledRejection;
                                    var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
                                    var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
                                    var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
                                    var stackFramePattern = null;
                                    var formatStack = null;
                                    var indentStackFrames = false;
                                    var printWarning;
                                    var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                                        (true ||
                                            util.env("BLUEBIRD_DEBUG") ||
                                            util.env("NODE_ENV") === "development"));
                                    var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
                                        (debugging || util.env("BLUEBIRD_WARNINGS")));
                                    var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
                                        (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));
                                    var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
                                        (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                                    var deferUnhandledRejectionCheck;
                                    (function () {
                                        var promises = [];
                                        function unhandledRejectionCheck() {
                                            for (var i = 0; i < promises.length; ++i) {
                                                promises[i]._notifyUnhandledRejection();
                                            }
                                            unhandledRejectionClear();
                                        }
                                        function unhandledRejectionClear() {
                                            promises.length = 0;
                                        }
                                        deferUnhandledRejectionCheck = function (promise) {
                                            promises.push(promise);
                                            setTimeout(unhandledRejectionCheck, 1);
                                        };
                                        es5.defineProperty(Promise, "_unhandledRejectionCheck", {
                                            value: unhandledRejectionCheck
                                        });
                                        es5.defineProperty(Promise, "_unhandledRejectionClear", {
                                            value: unhandledRejectionClear
                                        });
                                    })();
                                    Promise.prototype.suppressUnhandledRejections = function () {
                                        var target = this._target();
                                        target._bitField = ((target._bitField & (~1048576)) |
                                            524288);
                                    };
                                    Promise.prototype._ensurePossibleRejectionHandled = function () {
                                        if ((this._bitField & 524288) !== 0)
                                            return;
                                        this._setRejectionIsUnhandled();
                                        deferUnhandledRejectionCheck(this);
                                    };
                                    Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
                                        fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
                                    };
                                    Promise.prototype._setReturnedNonUndefined = function () {
                                        this._bitField = this._bitField | 268435456;
                                    };
                                    Promise.prototype._returnedNonUndefined = function () {
                                        return (this._bitField & 268435456) !== 0;
                                    };
                                    Promise.prototype._notifyUnhandledRejection = function () {
                                        if (this._isRejectionUnhandled()) {
                                            var reason = this._settledValue();
                                            this._setUnhandledRejectionIsNotified();
                                            fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
                                        }
                                    };
                                    Promise.prototype._setUnhandledRejectionIsNotified = function () {
                                        this._bitField = this._bitField | 262144;
                                    };
                                    Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
                                        this._bitField = this._bitField & (~262144);
                                    };
                                    Promise.prototype._isUnhandledRejectionNotified = function () {
                                        return (this._bitField & 262144) > 0;
                                    };
                                    Promise.prototype._setRejectionIsUnhandled = function () {
                                        this._bitField = this._bitField | 1048576;
                                    };
                                    Promise.prototype._unsetRejectionIsUnhandled = function () {
                                        this._bitField = this._bitField & (~1048576);
                                        if (this._isUnhandledRejectionNotified()) {
                                            this._unsetUnhandledRejectionIsNotified();
                                            this._notifyUnhandledRejectionIsHandled();
                                        }
                                    };
                                    Promise.prototype._isRejectionUnhandled = function () {
                                        return (this._bitField & 1048576) > 0;
                                    };
                                    Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
                                        return warn(message, shouldUseOwnTrace, promise || this);
                                    };
                                    Promise.onPossiblyUnhandledRejection = function (fn) {
                                        var context = Promise._getContext();
                                        possiblyUnhandledRejection = util.contextBind(context, fn);
                                    };
                                    Promise.onUnhandledRejectionHandled = function (fn) {
                                        var context = Promise._getContext();
                                        unhandledRejectionHandled = util.contextBind(context, fn);
                                    };
                                    var disableLongStackTraces = function () { };
                                    Promise.longStackTraces = function () {
                                        if (async.haveItemsQueued() && !config.longStackTraces) {
                                            throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        if (!config.longStackTraces && longStackTracesIsSupported()) {
                                            var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
                                            var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                                            var Promise_dereferenceTrace = Promise.prototype._dereferenceTrace;
                                            config.longStackTraces = true;
                                            disableLongStackTraces = function () {
                                                if (async.haveItemsQueued() && !config.longStackTraces) {
                                                    throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                                }
                                                Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                                                Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                                                Promise.prototype._dereferenceTrace = Promise_dereferenceTrace;
                                                Context.deactivateLongStackTraces();
                                                config.longStackTraces = false;
                                            };
                                            Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                                            Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                                            Promise.prototype._dereferenceTrace = longStackTracesDereferenceTrace;
                                            Context.activateLongStackTraces();
                                        }
                                    };
                                    Promise.hasLongStackTraces = function () {
                                        return config.longStackTraces && longStackTracesIsSupported();
                                    };
                                    var legacyHandlers = {
                                        unhandledrejection: {
                                            before: function () {
                                                var ret = util.global.onunhandledrejection;
                                                util.global.onunhandledrejection = null;
                                                return ret;
                                            },
                                            after: function (fn) {
                                                util.global.onunhandledrejection = fn;
                                            }
                                        },
                                        rejectionhandled: {
                                            before: function () {
                                                var ret = util.global.onrejectionhandled;
                                                util.global.onrejectionhandled = null;
                                                return ret;
                                            },
                                            after: function (fn) {
                                                util.global.onrejectionhandled = fn;
                                            }
                                        }
                                    };
                                    var fireDomEvent = (function () {
                                        var dispatch = function (legacy, e) {
                                            if (legacy) {
                                                var fn;
                                                try {
                                                    fn = legacy.before();
                                                    return !util.global.dispatchEvent(e);
                                                }
                                                finally {
                                                    legacy.after(fn);
                                                }
                                            }
                                            else {
                                                return !util.global.dispatchEvent(e);
                                            }
                                        };
                                        try {
                                            if (typeof CustomEvent === "function") {
                                                var event = new CustomEvent("CustomEvent");
                                                util.global.dispatchEvent(event);
                                                return function (name, event) {
                                                    name = name.toLowerCase();
                                                    var eventData = {
                                                        detail: event,
                                                        cancelable: true
                                                    };
                                                    var domEvent = new CustomEvent(name, eventData);
                                                    es5.defineProperty(domEvent, "promise", { value: event.promise });
                                                    es5.defineProperty(domEvent, "reason", { value: event.reason });
                                                    return dispatch(legacyHandlers[name], domEvent);
                                                };
                                            }
                                            else if (typeof Event === "function") {
                                                var event = new Event("CustomEvent");
                                                util.global.dispatchEvent(event);
                                                return function (name, event) {
                                                    name = name.toLowerCase();
                                                    var domEvent = new Event(name, {
                                                        cancelable: true
                                                    });
                                                    domEvent.detail = event;
                                                    es5.defineProperty(domEvent, "promise", { value: event.promise });
                                                    es5.defineProperty(domEvent, "reason", { value: event.reason });
                                                    return dispatch(legacyHandlers[name], domEvent);
                                                };
                                            }
                                            else {
                                                var event = document.createEvent("CustomEvent");
                                                event.initCustomEvent("testingtheevent", false, true, {});
                                                util.global.dispatchEvent(event);
                                                return function (name, event) {
                                                    name = name.toLowerCase();
                                                    var domEvent = document.createEvent("CustomEvent");
                                                    domEvent.initCustomEvent(name, false, true, event);
                                                    return dispatch(legacyHandlers[name], domEvent);
                                                };
                                            }
                                        }
                                        catch (e) { }
                                        return function () {
                                            return false;
                                        };
                                    })();
                                    var fireGlobalEvent = (function () {
                                        if (util.isNode) {
                                            return function () {
                                                return process.emit.apply(process, arguments);
                                            };
                                        }
                                        else {
                                            if (!util.global) {
                                                return function () {
                                                    return false;
                                                };
                                            }
                                            return function (name) {
                                                var methodName = "on" + name.toLowerCase();
                                                var method = util.global[methodName];
                                                if (!method)
                                                    return false;
                                                method.apply(util.global, [].slice.call(arguments, 1));
                                                return true;
                                            };
                                        }
                                    })();
                                    function generatePromiseLifecycleEventObject(name, promise) {
                                        return { promise: promise };
                                    }
                                    var eventToObjectGenerator = {
                                        promiseCreated: generatePromiseLifecycleEventObject,
                                        promiseFulfilled: generatePromiseLifecycleEventObject,
                                        promiseRejected: generatePromiseLifecycleEventObject,
                                        promiseResolved: generatePromiseLifecycleEventObject,
                                        promiseCancelled: generatePromiseLifecycleEventObject,
                                        promiseChained: function (name, promise, child) {
                                            return { promise: promise, child: child };
                                        },
                                        warning: function (name, warning) {
                                            return { warning: warning };
                                        },
                                        unhandledRejection: function (name, reason, promise) {
                                            return { reason: reason, promise: promise };
                                        },
                                        rejectionHandled: generatePromiseLifecycleEventObject
                                    };
                                    var activeFireEvent = function (name) {
                                        var globalEventFired = false;
                                        try {
                                            globalEventFired = fireGlobalEvent.apply(null, arguments);
                                        }
                                        catch (e) {
                                            async.throwLater(e);
                                            globalEventFired = true;
                                        }
                                        var domEventFired = false;
                                        try {
                                            domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
                                        }
                                        catch (e) {
                                            async.throwLater(e);
                                            domEventFired = true;
                                        }
                                        return domEventFired || globalEventFired;
                                    };
                                    Promise.config = function (opts) {
                                        opts = Object(opts);
                                        if ("longStackTraces" in opts) {
                                            if (opts.longStackTraces) {
                                                Promise.longStackTraces();
                                            }
                                            else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
                                                disableLongStackTraces();
                                            }
                                        }
                                        if ("warnings" in opts) {
                                            var warningsOption = opts.warnings;
                                            config.warnings = !!warningsOption;
                                            wForgottenReturn = config.warnings;
                                            if (util.isObject(warningsOption)) {
                                                if ("wForgottenReturn" in warningsOption) {
                                                    wForgottenReturn = !!warningsOption.wForgottenReturn;
                                                }
                                            }
                                        }
                                        if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                                            if (async.haveItemsQueued()) {
                                                throw new Error("cannot enable cancellation after promises are in use");
                                            }
                                            Promise.prototype._clearCancellationData =
                                                cancellationClearCancellationData;
                                            Promise.prototype._propagateFrom = cancellationPropagateFrom;
                                            Promise.prototype._onCancel = cancellationOnCancel;
                                            Promise.prototype._setOnCancel = cancellationSetOnCancel;
                                            Promise.prototype._attachCancellationCallback =
                                                cancellationAttachCancellationCallback;
                                            Promise.prototype._execute = cancellationExecute;
                                            propagateFromFunction = cancellationPropagateFrom;
                                            config.cancellation = true;
                                        }
                                        if ("monitoring" in opts) {
                                            if (opts.monitoring && !config.monitoring) {
                                                config.monitoring = true;
                                                Promise.prototype._fireEvent = activeFireEvent;
                                            }
                                            else if (!opts.monitoring && config.monitoring) {
                                                config.monitoring = false;
                                                Promise.prototype._fireEvent = defaultFireEvent;
                                            }
                                        }
                                        if ("asyncHooks" in opts && util.nodeSupportsAsyncResource) {
                                            var prev = config.asyncHooks;
                                            var cur = !!opts.asyncHooks;
                                            if (prev !== cur) {
                                                config.asyncHooks = cur;
                                                if (cur) {
                                                    enableAsyncHooks();
                                                }
                                                else {
                                                    disableAsyncHooks();
                                                }
                                            }
                                        }
                                        return Promise;
                                    };
                                    function defaultFireEvent() { return false; }
                                    Promise.prototype._fireEvent = defaultFireEvent;
                                    Promise.prototype._execute = function (executor, resolve, reject) {
                                        try {
                                            executor(resolve, reject);
                                        }
                                        catch (e) {
                                            return e;
                                        }
                                    };
                                    Promise.prototype._onCancel = function () { };
                                    Promise.prototype._setOnCancel = function (handler) { ; };
                                    Promise.prototype._attachCancellationCallback = function (onCancel) {
                                        ;
                                    };
                                    Promise.prototype._captureStackTrace = function () { };
                                    Promise.prototype._attachExtraTrace = function () { };
                                    Promise.prototype._dereferenceTrace = function () { };
                                    Promise.prototype._clearCancellationData = function () { };
                                    Promise.prototype._propagateFrom = function (parent, flags) {
                                        ;
                                        ;
                                    };
                                    function cancellationExecute(executor, resolve, reject) {
                                        var promise = this;
                                        try {
                                            executor(resolve, reject, function (onCancel) {
                                                if (typeof onCancel !== "function") {
                                                    throw new TypeError("onCancel must be a function, got: " +
                                                        util.toString(onCancel));
                                                }
                                                promise._attachCancellationCallback(onCancel);
                                            });
                                        }
                                        catch (e) {
                                            return e;
                                        }
                                    }
                                    function cancellationAttachCancellationCallback(onCancel) {
                                        if (!this._isCancellable())
                                            return this;
                                        var previousOnCancel = this._onCancel();
                                        if (previousOnCancel !== undefined) {
                                            if (util.isArray(previousOnCancel)) {
                                                previousOnCancel.push(onCancel);
                                            }
                                            else {
                                                this._setOnCancel([previousOnCancel, onCancel]);
                                            }
                                        }
                                        else {
                                            this._setOnCancel(onCancel);
                                        }
                                    }
                                    function cancellationOnCancel() {
                                        return this._onCancelField;
                                    }
                                    function cancellationSetOnCancel(onCancel) {
                                        this._onCancelField = onCancel;
                                    }
                                    function cancellationClearCancellationData() {
                                        this._cancellationParent = undefined;
                                        this._onCancelField = undefined;
                                    }
                                    function cancellationPropagateFrom(parent, flags) {
                                        if ((flags & 1) !== 0) {
                                            this._cancellationParent = parent;
                                            var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                                            if (branchesRemainingToCancel === undefined) {
                                                branchesRemainingToCancel = 0;
                                            }
                                            parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
                                        }
                                        if ((flags & 2) !== 0 && parent._isBound()) {
                                            this._setBoundTo(parent._boundTo);
                                        }
                                    }
                                    function bindingPropagateFrom(parent, flags) {
                                        if ((flags & 2) !== 0 && parent._isBound()) {
                                            this._setBoundTo(parent._boundTo);
                                        }
                                    }
                                    var propagateFromFunction = bindingPropagateFrom;
                                    function boundValueFunction() {
                                        var ret = this._boundTo;
                                        if (ret !== undefined) {
                                            if (ret instanceof Promise) {
                                                if (ret.isFulfilled()) {
                                                    return ret.value();
                                                }
                                                else {
                                                    return undefined;
                                                }
                                            }
                                        }
                                        return ret;
                                    }
                                    function longStackTracesCaptureStackTrace() {
                                        this._trace = new CapturedTrace(this._peekContext());
                                    }
                                    function longStackTracesAttachExtraTrace(error, ignoreSelf) {
                                        if (canAttachTrace(error)) {
                                            var trace = this._trace;
                                            if (trace !== undefined) {
                                                if (ignoreSelf)
                                                    trace = trace._parent;
                                            }
                                            if (trace !== undefined) {
                                                trace.attachExtraTrace(error);
                                            }
                                            else if (!error.__stackCleaned__) {
                                                var parsed = parseStackAndMessage(error);
                                                util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
                                                util.notEnumerableProp(error, "__stackCleaned__", true);
                                            }
                                        }
                                    }
                                    function longStackTracesDereferenceTrace() {
                                        this._trace = undefined;
                                    }
                                    function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
                                        if (returnValue === undefined && promiseCreated !== null &&
                                            wForgottenReturn) {
                                            if (parent !== undefined && parent._returnedNonUndefined())
                                                return;
                                            if ((promise._bitField & 65535) === 0)
                                                return;
                                            if (name)
                                                name = name + " ";
                                            var handlerLine = "";
                                            var creatorLine = "";
                                            if (promiseCreated._trace) {
                                                var traceLines = promiseCreated._trace.stack.split("\n");
                                                var stack = cleanStack(traceLines);
                                                for (var i = stack.length - 1; i >= 0; --i) {
                                                    var line = stack[i];
                                                    if (!nodeFramePattern.test(line)) {
                                                        var lineMatches = line.match(parseLinePattern);
                                                        if (lineMatches) {
                                                            handlerLine = "at " + lineMatches[1] +
                                                                ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                                                        }
                                                        break;
                                                    }
                                                }
                                                if (stack.length > 0) {
                                                    var firstUserLine = stack[0];
                                                    for (var i = 0; i < traceLines.length; ++i) {
                                                        if (traceLines[i] === firstUserLine) {
                                                            if (i > 0) {
                                                                creatorLine = "\n" + traceLines[i - 1];
                                                            }
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            var msg = "a promise was created in a " + name +
                                                "handler " + handlerLine + "but was not returned from it, " +
                                                "see http://goo.gl/rRqMUw" +
                                                creatorLine;
                                            promise._warn(msg, true, promiseCreated);
                                        }
                                    }
                                    function deprecated(name, replacement) {
                                        var message = name +
                                            " is deprecated and will be removed in a future version.";
                                        if (replacement)
                                            message += " Use " + replacement + " instead.";
                                        return warn(message);
                                    }
                                    function warn(message, shouldUseOwnTrace, promise) {
                                        if (!config.warnings)
                                            return;
                                        var warning = new Warning(message);
                                        var ctx;
                                        if (shouldUseOwnTrace) {
                                            promise._attachExtraTrace(warning);
                                        }
                                        else if (config.longStackTraces && (ctx = Promise._peekContext())) {
                                            ctx.attachExtraTrace(warning);
                                        }
                                        else {
                                            var parsed = parseStackAndMessage(warning);
                                            warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
                                        }
                                        if (!activeFireEvent("warning", warning)) {
                                            formatAndLogError(warning, "", true);
                                        }
                                    }
                                    function reconstructStack(message, stacks) {
                                        for (var i = 0; i < stacks.length - 1; ++i) {
                                            stacks[i].push("From previous event:");
                                            stacks[i] = stacks[i].join("\n");
                                        }
                                        if (i < stacks.length) {
                                            stacks[i] = stacks[i].join("\n");
                                        }
                                        return message + "\n" + stacks.join("\n");
                                    }
                                    function removeDuplicateOrEmptyJumps(stacks) {
                                        for (var i = 0; i < stacks.length; ++i) {
                                            if (stacks[i].length === 0 ||
                                                ((i + 1 < stacks.length) && stacks[i][0] === stacks[i + 1][0])) {
                                                stacks.splice(i, 1);
                                                i--;
                                            }
                                        }
                                    }
                                    function removeCommonRoots(stacks) {
                                        var current = stacks[0];
                                        for (var i = 1; i < stacks.length; ++i) {
                                            var prev = stacks[i];
                                            var currentLastIndex = current.length - 1;
                                            var currentLastLine = current[currentLastIndex];
                                            var commonRootMeetPoint = -1;
                                            for (var j = prev.length - 1; j >= 0; --j) {
                                                if (prev[j] === currentLastLine) {
                                                    commonRootMeetPoint = j;
                                                    break;
                                                }
                                            }
                                            for (var j = commonRootMeetPoint; j >= 0; --j) {
                                                var line = prev[j];
                                                if (current[currentLastIndex] === line) {
                                                    current.pop();
                                                    currentLastIndex--;
                                                }
                                                else {
                                                    break;
                                                }
                                            }
                                            current = prev;
                                        }
                                    }
                                    function cleanStack(stack) {
                                        var ret = [];
                                        for (var i = 0; i < stack.length; ++i) {
                                            var line = stack[i];
                                            var isTraceLine = "    (No stack trace)" === line ||
                                                stackFramePattern.test(line);
                                            var isInternalFrame = isTraceLine && shouldIgnore(line);
                                            if (isTraceLine && !isInternalFrame) {
                                                if (indentStackFrames && line.charAt(0) !== " ") {
                                                    line = "    " + line;
                                                }
                                                ret.push(line);
                                            }
                                        }
                                        return ret;
                                    }
                                    function stackFramesAsArray(error) {
                                        var stack = error.stack.replace(/\s+$/g, "").split("\n");
                                        for (var i = 0; i < stack.length; ++i) {
                                            var line = stack[i];
                                            if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
                                                break;
                                            }
                                        }
                                        if (i > 0 && error.name != "SyntaxError") {
                                            stack = stack.slice(i);
                                        }
                                        return stack;
                                    }
                                    function parseStackAndMessage(error) {
                                        var stack = error.stack;
                                        var message = error.toString();
                                        stack = typeof stack === "string" && stack.length > 0
                                            ? stackFramesAsArray(error) : ["    (No stack trace)"];
                                        return {
                                            message: message,
                                            stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
                                        };
                                    }
                                    function formatAndLogError(error, title, isSoft) {
                                        if (typeof console !== "undefined") {
                                            var message;
                                            if (util.isObject(error)) {
                                                var stack = error.stack;
                                                message = title + formatStack(stack, error);
                                            }
                                            else {
                                                message = title + String(error);
                                            }
                                            if (typeof printWarning === "function") {
                                                printWarning(message, isSoft);
                                            }
                                            else if (typeof console.log === "function" ||
                                                typeof console.log === "object") {
                                                console.log(message);
                                            }
                                        }
                                    }
                                    function fireRejectionEvent(name, localHandler, reason, promise) {
                                        var localEventFired = false;
                                        try {
                                            if (typeof localHandler === "function") {
                                                localEventFired = true;
                                                if (name === "rejectionHandled") {
                                                    localHandler(promise);
                                                }
                                                else {
                                                    localHandler(reason, promise);
                                                }
                                            }
                                        }
                                        catch (e) {
                                            async.throwLater(e);
                                        }
                                        if (name === "unhandledRejection") {
                                            if (!activeFireEvent(name, reason, promise) && !localEventFired) {
                                                formatAndLogError(reason, "Unhandled rejection ");
                                            }
                                        }
                                        else {
                                            activeFireEvent(name, promise);
                                        }
                                    }
                                    function formatNonError(obj) {
                                        var str;
                                        if (typeof obj === "function") {
                                            str = "[function " +
                                                (obj.name || "anonymous") +
                                                "]";
                                        }
                                        else {
                                            str = obj && typeof obj.toString === "function"
                                                ? obj.toString() : util.toString(obj);
                                            var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                            if (ruselessToString.test(str)) {
                                                try {
                                                    var newStr = JSON.stringify(obj);
                                                    str = newStr;
                                                }
                                                catch (e) {
                                                }
                                            }
                                            if (str.length === 0) {
                                                str = "(empty array)";
                                            }
                                        }
                                        return ("(<" + snip(str) + ">, no stack trace)");
                                    }
                                    function snip(str) {
                                        var maxChars = 41;
                                        if (str.length < maxChars) {
                                            return str;
                                        }
                                        return str.substr(0, maxChars - 3) + "...";
                                    }
                                    function longStackTracesIsSupported() {
                                        return typeof captureStackTrace === "function";
                                    }
                                    var shouldIgnore = function () { return false; };
                                    var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                                    function parseLineInfo(line) {
                                        var matches = line.match(parseLineInfoRegex);
                                        if (matches) {
                                            return {
                                                fileName: matches[1],
                                                line: parseInt(matches[2], 10)
                                            };
                                        }
                                    }
                                    function setBounds(firstLineError, lastLineError) {
                                        if (!longStackTracesIsSupported())
                                            return;
                                        var firstStackLines = (firstLineError.stack || "").split("\n");
                                        var lastStackLines = (lastLineError.stack || "").split("\n");
                                        var firstIndex = -1;
                                        var lastIndex = -1;
                                        var firstFileName;
                                        var lastFileName;
                                        for (var i = 0; i < firstStackLines.length; ++i) {
                                            var result = parseLineInfo(firstStackLines[i]);
                                            if (result) {
                                                firstFileName = result.fileName;
                                                firstIndex = result.line;
                                                break;
                                            }
                                        }
                                        for (var i = 0; i < lastStackLines.length; ++i) {
                                            var result = parseLineInfo(lastStackLines[i]);
                                            if (result) {
                                                lastFileName = result.fileName;
                                                lastIndex = result.line;
                                                break;
                                            }
                                        }
                                        if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
                                            firstFileName !== lastFileName || firstIndex >= lastIndex) {
                                            return;
                                        }
                                        shouldIgnore = function (line) {
                                            if (bluebirdFramePattern.test(line))
                                                return true;
                                            var info = parseLineInfo(line);
                                            if (info) {
                                                if (info.fileName === firstFileName &&
                                                    (firstIndex <= info.line && info.line <= lastIndex)) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        };
                                    }
                                    function CapturedTrace(parent) {
                                        this._parent = parent;
                                        this._promisesCreated = 0;
                                        var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
                                        captureStackTrace(this, CapturedTrace);
                                        if (length > 32)
                                            this.uncycle();
                                    }
                                    util.inherits(CapturedTrace, Error);
                                    Context.CapturedTrace = CapturedTrace;
                                    CapturedTrace.prototype.uncycle = function () {
                                        var length = this._length;
                                        if (length < 2)
                                            return;
                                        var nodes = [];
                                        var stackToIndex = {};
                                        for (var i = 0, node = this; node !== undefined; ++i) {
                                            nodes.push(node);
                                            node = node._parent;
                                        }
                                        length = this._length = i;
                                        for (var i = length - 1; i >= 0; --i) {
                                            var stack = nodes[i].stack;
                                            if (stackToIndex[stack] === undefined) {
                                                stackToIndex[stack] = i;
                                            }
                                        }
                                        for (var i = 0; i < length; ++i) {
                                            var currentStack = nodes[i].stack;
                                            var index = stackToIndex[currentStack];
                                            if (index !== undefined && index !== i) {
                                                if (index > 0) {
                                                    nodes[index - 1]._parent = undefined;
                                                    nodes[index - 1]._length = 1;
                                                }
                                                nodes[i]._parent = undefined;
                                                nodes[i]._length = 1;
                                                var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;
                                                if (index < length - 1) {
                                                    cycleEdgeNode._parent = nodes[index + 1];
                                                    cycleEdgeNode._parent.uncycle();
                                                    cycleEdgeNode._length =
                                                        cycleEdgeNode._parent._length + 1;
                                                }
                                                else {
                                                    cycleEdgeNode._parent = undefined;
                                                    cycleEdgeNode._length = 1;
                                                }
                                                var currentChildLength = cycleEdgeNode._length + 1;
                                                for (var j = i - 2; j >= 0; --j) {
                                                    nodes[j]._length = currentChildLength;
                                                    currentChildLength++;
                                                }
                                                return;
                                            }
                                        }
                                    };
                                    CapturedTrace.prototype.attachExtraTrace = function (error) {
                                        if (error.__stackCleaned__)
                                            return;
                                        this.uncycle();
                                        var parsed = parseStackAndMessage(error);
                                        var message = parsed.message;
                                        var stacks = [parsed.stack];
                                        var trace = this;
                                        while (trace !== undefined) {
                                            stacks.push(cleanStack(trace.stack.split("\n")));
                                            trace = trace._parent;
                                        }
                                        removeCommonRoots(stacks);
                                        removeDuplicateOrEmptyJumps(stacks);
                                        util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
                                        util.notEnumerableProp(error, "__stackCleaned__", true);
                                    };
                                    var captureStackTrace = (function stackDetection() {
                                        var v8stackFramePattern = /^\s*at\s*/;
                                        var v8stackFormatter = function (stack, error) {
                                            if (typeof stack === "string")
                                                return stack;
                                            if (error.name !== undefined &&
                                                error.message !== undefined) {
                                                return error.toString();
                                            }
                                            return formatNonError(error);
                                        };
                                        if (typeof Error.stackTraceLimit === "number" &&
                                            typeof Error.captureStackTrace === "function") {
                                            Error.stackTraceLimit += 6;
                                            stackFramePattern = v8stackFramePattern;
                                            formatStack = v8stackFormatter;
                                            var captureStackTrace = Error.captureStackTrace;
                                            shouldIgnore = function (line) {
                                                return bluebirdFramePattern.test(line);
                                            };
                                            return function (receiver, ignoreUntil) {
                                                Error.stackTraceLimit += 6;
                                                captureStackTrace(receiver, ignoreUntil);
                                                Error.stackTraceLimit -= 6;
                                            };
                                        }
                                        var err = new Error();
                                        if (typeof err.stack === "string" &&
                                            err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
                                            stackFramePattern = /@/;
                                            formatStack = v8stackFormatter;
                                            indentStackFrames = true;
                                            return function captureStackTrace(o) {
                                                o.stack = new Error().stack;
                                            };
                                        }
                                        var hasStackAfterThrow;
                                        try {
                                            throw new Error();
                                        }
                                        catch (e) {
                                            hasStackAfterThrow = ("stack" in e);
                                        }
                                        if (!("stack" in err) && hasStackAfterThrow &&
                                            typeof Error.stackTraceLimit === "number") {
                                            stackFramePattern = v8stackFramePattern;
                                            formatStack = v8stackFormatter;
                                            return function captureStackTrace(o) {
                                                Error.stackTraceLimit += 6;
                                                try {
                                                    throw new Error();
                                                }
                                                catch (e) {
                                                    o.stack = e.stack;
                                                }
                                                Error.stackTraceLimit -= 6;
                                            };
                                        }
                                        formatStack = function (stack, error) {
                                            if (typeof stack === "string")
                                                return stack;
                                            if ((typeof error === "object" ||
                                                typeof error === "function") &&
                                                error.name !== undefined &&
                                                error.message !== undefined) {
                                                return error.toString();
                                            }
                                            return formatNonError(error);
                                        };
                                        return null;
                                    })([]);
                                    if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
                                        printWarning = function (message) {
                                            console.warn(message);
                                        };
                                        if (util.isNode && process.stderr.isTTY) {
                                            printWarning = function (message, isSoft) {
                                                var color = isSoft ? "\u001b[33m" : "\u001b[31m";
                                                console.warn(color + message + "\u001b[0m\n");
                                            };
                                        }
                                        else if (!util.isNode && typeof (new Error().stack) === "string") {
                                            printWarning = function (message, isSoft) {
                                                console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                                            };
                                        }
                                    }
                                    var config = {
                                        warnings: warnings,
                                        longStackTraces: false,
                                        cancellation: false,
                                        monitoring: false,
                                        asyncHooks: false
                                    };
                                    if (longStackTraces)
                                        Promise.longStackTraces();
                                    return {
                                        asyncHooks: function () {
                                            return config.asyncHooks;
                                        },
                                        longStackTraces: function () {
                                            return config.longStackTraces;
                                        },
                                        warnings: function () {
                                            return config.warnings;
                                        },
                                        cancellation: function () {
                                            return config.cancellation;
                                        },
                                        monitoring: function () {
                                            return config.monitoring;
                                        },
                                        propagateFromFunction: function () {
                                            return propagateFromFunction;
                                        },
                                        boundValueFunction: function () {
                                            return boundValueFunction;
                                        },
                                        checkForgottenReturns: checkForgottenReturns,
                                        setBounds: setBounds,
                                        warn: warn,
                                        deprecated: deprecated,
                                        CapturedTrace: CapturedTrace,
                                        fireDomEvent: fireDomEvent,
                                        fireGlobalEvent: fireGlobalEvent
                                    };
                                };
                            }, { "./errors": 12, "./es5": 13, "./util": 36 }], 10: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise) {
                                    function returner() {
                                        return this.value;
                                    }
                                    function thrower() {
                                        throw this.reason;
                                    }
                                    Promise.prototype["return"] =
                                        Promise.prototype.thenReturn = function (value) {
                                            if (value instanceof Promise)
                                                value.suppressUnhandledRejections();
                                            return this._then(returner, undefined, undefined, { value: value }, undefined);
                                        };
                                    Promise.prototype["throw"] =
                                        Promise.prototype.thenThrow = function (reason) {
                                            return this._then(thrower, undefined, undefined, { reason: reason }, undefined);
                                        };
                                    Promise.prototype.catchThrow = function (reason) {
                                        if (arguments.length <= 1) {
                                            return this._then(undefined, thrower, undefined, { reason: reason }, undefined);
                                        }
                                        else {
                                            var _reason = arguments[1];
                                            var handler = function () { throw _reason; };
                                            return this.caught(reason, handler);
                                        }
                                    };
                                    Promise.prototype.catchReturn = function (value) {
                                        if (arguments.length <= 1) {
                                            if (value instanceof Promise)
                                                value.suppressUnhandledRejections();
                                            return this._then(undefined, returner, undefined, { value: value }, undefined);
                                        }
                                        else {
                                            var _value = arguments[1];
                                            if (_value instanceof Promise)
                                                _value.suppressUnhandledRejections();
                                            var handler = function () { return _value; };
                                            return this.caught(value, handler);
                                        }
                                    };
                                };
                            }, {}], 11: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL) {
                                    var PromiseReduce = Promise.reduce;
                                    var PromiseAll = Promise.all;
                                    function promiseAllThis() {
                                        return PromiseAll(this);
                                    }
                                    function PromiseMapSeries(promises, fn) {
                                        return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
                                    }
                                    Promise.prototype.each = function (fn) {
                                        return PromiseReduce(this, fn, INTERNAL, 0)
                                            ._then(promiseAllThis, undefined, undefined, this, undefined);
                                    };
                                    Promise.prototype.mapSeries = function (fn) {
                                        return PromiseReduce(this, fn, INTERNAL, INTERNAL);
                                    };
                                    Promise.each = function (promises, fn) {
                                        return PromiseReduce(promises, fn, INTERNAL, 0)
                                            ._then(promiseAllThis, undefined, undefined, promises, undefined);
                                    };
                                    Promise.mapSeries = PromiseMapSeries;
                                };
                            }, {}], 12: [function (_dereq_, module, exports) {
                                "use strict";
                                var es5 = _dereq_("./es5");
                                var Objectfreeze = es5.freeze;
                                var util = _dereq_("./util");
                                var inherits = util.inherits;
                                var notEnumerableProp = util.notEnumerableProp;
                                function subError(nameProperty, defaultMessage) {
                                    function SubError(message) {
                                        if (!(this instanceof SubError))
                                            return new SubError(message);
                                        notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
                                        notEnumerableProp(this, "name", nameProperty);
                                        if (Error.captureStackTrace) {
                                            Error.captureStackTrace(this, this.constructor);
                                        }
                                        else {
                                            Error.call(this);
                                        }
                                    }
                                    inherits(SubError, Error);
                                    return SubError;
                                }
                                var _TypeError, _RangeError;
                                var Warning = subError("Warning", "warning");
                                var CancellationError = subError("CancellationError", "cancellation error");
                                var TimeoutError = subError("TimeoutError", "timeout error");
                                var AggregateError = subError("AggregateError", "aggregate error");
                                try {
                                    _TypeError = TypeError;
                                    _RangeError = RangeError;
                                }
                                catch (e) {
                                    _TypeError = subError("TypeError", "type error");
                                    _RangeError = subError("RangeError", "range error");
                                }
                                var methods = ("join pop push shift unshift slice filter forEach some " +
                                    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");
                                for (var i = 0; i < methods.length; ++i) {
                                    if (typeof Array.prototype[methods[i]] === "function") {
                                        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
                                    }
                                }
                                es5.defineProperty(AggregateError.prototype, "length", {
                                    value: 0,
                                    configurable: false,
                                    writable: true,
                                    enumerable: true
                                });
                                AggregateError.prototype["isOperational"] = true;
                                var level = 0;
                                AggregateError.prototype.toString = function () {
                                    var indent = Array(level * 4 + 1).join(" ");
                                    var ret = "\n" + indent + "AggregateError of:" + "\n";
                                    level++;
                                    indent = Array(level * 4 + 1).join(" ");
                                    for (var i = 0; i < this.length; ++i) {
                                        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
                                        var lines = str.split("\n");
                                        for (var j = 0; j < lines.length; ++j) {
                                            lines[j] = indent + lines[j];
                                        }
                                        str = lines.join("\n");
                                        ret += str + "\n";
                                    }
                                    level--;
                                    return ret;
                                };
                                function OperationalError(message) {
                                    if (!(this instanceof OperationalError))
                                        return new OperationalError(message);
                                    notEnumerableProp(this, "name", "OperationalError");
                                    notEnumerableProp(this, "message", message);
                                    this.cause = message;
                                    this["isOperational"] = true;
                                    if (message instanceof Error) {
                                        notEnumerableProp(this, "message", message.message);
                                        notEnumerableProp(this, "stack", message.stack);
                                    }
                                    else if (Error.captureStackTrace) {
                                        Error.captureStackTrace(this, this.constructor);
                                    }
                                }
                                inherits(OperationalError, Error);
                                var errorTypes = Error["__BluebirdErrorTypes__"];
                                if (!errorTypes) {
                                    errorTypes = Objectfreeze({
                                        CancellationError: CancellationError,
                                        TimeoutError: TimeoutError,
                                        OperationalError: OperationalError,
                                        RejectionError: OperationalError,
                                        AggregateError: AggregateError
                                    });
                                    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
                                        value: errorTypes,
                                        writable: false,
                                        enumerable: false,
                                        configurable: false
                                    });
                                }
                                module.exports = {
                                    Error: Error,
                                    TypeError: _TypeError,
                                    RangeError: _RangeError,
                                    CancellationError: errorTypes.CancellationError,
                                    OperationalError: errorTypes.OperationalError,
                                    TimeoutError: errorTypes.TimeoutError,
                                    AggregateError: errorTypes.AggregateError,
                                    Warning: Warning
                                };
                            }, { "./es5": 13, "./util": 36 }], 13: [function (_dereq_, module, exports) {
                                var isES5 = (function () {
                                    "use strict";
                                    return this === undefined;
                                })();
                                if (isES5) {
                                    module.exports = {
                                        freeze: Object.freeze,
                                        defineProperty: Object.defineProperty,
                                        getDescriptor: Object.getOwnPropertyDescriptor,
                                        keys: Object.keys,
                                        names: Object.getOwnPropertyNames,
                                        getPrototypeOf: Object.getPrototypeOf,
                                        isArray: Array.isArray,
                                        isES5: isES5,
                                        propertyIsWritable: function (obj, prop) {
                                            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                                            return !!(!descriptor || descriptor.writable || descriptor.set);
                                        }
                                    };
                                }
                                else {
                                    var has = {}.hasOwnProperty;
                                    var str = {}.toString;
                                    var proto = {}.constructor.prototype;
                                    var ObjectKeys = function (o) {
                                        var ret = [];
                                        for (var key in o) {
                                            if (has.call(o, key)) {
                                                ret.push(key);
                                            }
                                        }
                                        return ret;
                                    };
                                    var ObjectGetDescriptor = function (o, key) {
                                        return { value: o[key] };
                                    };
                                    var ObjectDefineProperty = function (o, key, desc) {
                                        o[key] = desc.value;
                                        return o;
                                    };
                                    var ObjectFreeze = function (obj) {
                                        return obj;
                                    };
                                    var ObjectGetPrototypeOf = function (obj) {
                                        try {
                                            return Object(obj).constructor.prototype;
                                        }
                                        catch (e) {
                                            return proto;
                                        }
                                    };
                                    var ArrayIsArray = function (obj) {
                                        try {
                                            return str.call(obj) === "[object Array]";
                                        }
                                        catch (e) {
                                            return false;
                                        }
                                    };
                                    module.exports = {
                                        isArray: ArrayIsArray,
                                        keys: ObjectKeys,
                                        names: ObjectKeys,
                                        defineProperty: ObjectDefineProperty,
                                        getDescriptor: ObjectGetDescriptor,
                                        freeze: ObjectFreeze,
                                        getPrototypeOf: ObjectGetPrototypeOf,
                                        isES5: isES5,
                                        propertyIsWritable: function () {
                                            return true;
                                        }
                                    };
                                }
                            }, {}], 14: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL) {
                                    var PromiseMap = Promise.map;
                                    Promise.prototype.filter = function (fn, options) {
                                        return PromiseMap(this, fn, options, INTERNAL);
                                    };
                                    Promise.filter = function (promises, fn, options) {
                                        return PromiseMap(promises, fn, options, INTERNAL);
                                    };
                                };
                            }, {}], 15: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, tryConvertToPromise, NEXT_FILTER) {
                                    var util = _dereq_("./util");
                                    var CancellationError = Promise.CancellationError;
                                    var errorObj = util.errorObj;
                                    var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
                                    function PassThroughHandlerContext(promise, type, handler) {
                                        this.promise = promise;
                                        this.type = type;
                                        this.handler = handler;
                                        this.called = false;
                                        this.cancelPromise = null;
                                    }
                                    PassThroughHandlerContext.prototype.isFinallyHandler = function () {
                                        return this.type === 0;
                                    };
                                    function FinallyHandlerCancelReaction(finallyHandler) {
                                        this.finallyHandler = finallyHandler;
                                    }
                                    FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
                                        checkCancel(this.finallyHandler);
                                    };
                                    function checkCancel(ctx, reason) {
                                        if (ctx.cancelPromise != null) {
                                            if (arguments.length > 1) {
                                                ctx.cancelPromise._reject(reason);
                                            }
                                            else {
                                                ctx.cancelPromise._cancel();
                                            }
                                            ctx.cancelPromise = null;
                                            return true;
                                        }
                                        return false;
                                    }
                                    function succeed() {
                                        return finallyHandler.call(this, this.promise._target()._settledValue());
                                    }
                                    function fail(reason) {
                                        if (checkCancel(this, reason))
                                            return;
                                        errorObj.e = reason;
                                        return errorObj;
                                    }
                                    function finallyHandler(reasonOrValue) {
                                        var promise = this.promise;
                                        var handler = this.handler;
                                        if (!this.called) {
                                            this.called = true;
                                            var ret = this.isFinallyHandler()
                                                ? handler.call(promise._boundValue())
                                                : handler.call(promise._boundValue(), reasonOrValue);
                                            if (ret === NEXT_FILTER) {
                                                return ret;
                                            }
                                            else if (ret !== undefined) {
                                                promise._setReturnedNonUndefined();
                                                var maybePromise = tryConvertToPromise(ret, promise);
                                                if (maybePromise instanceof Promise) {
                                                    if (this.cancelPromise != null) {
                                                        if (maybePromise._isCancelled()) {
                                                            var reason = new CancellationError("late cancellation observer");
                                                            promise._attachExtraTrace(reason);
                                                            errorObj.e = reason;
                                                            return errorObj;
                                                        }
                                                        else if (maybePromise.isPending()) {
                                                            maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                                                        }
                                                    }
                                                    return maybePromise._then(succeed, fail, undefined, this, undefined);
                                                }
                                            }
                                        }
                                        if (promise.isRejected()) {
                                            checkCancel(this);
                                            errorObj.e = reasonOrValue;
                                            return errorObj;
                                        }
                                        else {
                                            checkCancel(this);
                                            return reasonOrValue;
                                        }
                                    }
                                    Promise.prototype._passThrough = function (handler, type, success, fail) {
                                        if (typeof handler !== "function")
                                            return this.then();
                                        return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
                                    };
                                    Promise.prototype.lastly =
                                        Promise.prototype["finally"] = function (handler) {
                                            return this._passThrough(handler, 0, finallyHandler, finallyHandler);
                                        };
                                    Promise.prototype.tap = function (handler) {
                                        return this._passThrough(handler, 1, finallyHandler);
                                    };
                                    Promise.prototype.tapCatch = function (handlerOrPredicate) {
                                        var len = arguments.length;
                                        if (len === 1) {
                                            return this._passThrough(handlerOrPredicate, 1, undefined, finallyHandler);
                                        }
                                        else {
                                            var catchInstances = new Array(len - 1), j = 0, i;
                                            for (i = 0; i < len - 1; ++i) {
                                                var item = arguments[i];
                                                if (util.isObject(item)) {
                                                    catchInstances[j++] = item;
                                                }
                                                else {
                                                    return Promise.reject(new TypeError("tapCatch statement predicate: "
                                                        + "expecting an object but got " + util.classString(item)));
                                                }
                                            }
                                            catchInstances.length = j;
                                            var handler = arguments[i];
                                            return this._passThrough(catchFilter(catchInstances, handler, this), 1, undefined, finallyHandler);
                                        }
                                    };
                                    return PassThroughHandlerContext;
                                };
                            }, { "./catch_filter": 7, "./util": 36 }], 16: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
                                    var errors = _dereq_("./errors");
                                    var TypeError = errors.TypeError;
                                    var util = _dereq_("./util");
                                    var errorObj = util.errorObj;
                                    var tryCatch = util.tryCatch;
                                    var yieldHandlers = [];
                                    function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
                                        for (var i = 0; i < yieldHandlers.length; ++i) {
                                            traceParent._pushContext();
                                            var result = tryCatch(yieldHandlers[i])(value);
                                            traceParent._popContext();
                                            if (result === errorObj) {
                                                traceParent._pushContext();
                                                var ret = Promise.reject(errorObj.e);
                                                traceParent._popContext();
                                                return ret;
                                            }
                                            var maybePromise = tryConvertToPromise(result, traceParent);
                                            if (maybePromise instanceof Promise)
                                                return maybePromise;
                                        }
                                        return null;
                                    }
                                    function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
                                        if (debug.cancellation()) {
                                            var internal = new Promise(INTERNAL);
                                            var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                                            this._promise = internal.lastly(function () {
                                                return _finallyPromise;
                                            });
                                            internal._captureStackTrace();
                                            internal._setOnCancel(this);
                                        }
                                        else {
                                            var promise = this._promise = new Promise(INTERNAL);
                                            promise._captureStackTrace();
                                        }
                                        this._stack = stack;
                                        this._generatorFunction = generatorFunction;
                                        this._receiver = receiver;
                                        this._generator = undefined;
                                        this._yieldHandlers = typeof yieldHandler === "function"
                                            ? [yieldHandler].concat(yieldHandlers)
                                            : yieldHandlers;
                                        this._yieldedPromise = null;
                                        this._cancellationPhase = false;
                                    }
                                    util.inherits(PromiseSpawn, Proxyable);
                                    PromiseSpawn.prototype._isResolved = function () {
                                        return this._promise === null;
                                    };
                                    PromiseSpawn.prototype._cleanup = function () {
                                        this._promise = this._generator = null;
                                        if (debug.cancellation() && this._finallyPromise !== null) {
                                            this._finallyPromise._fulfill();
                                            this._finallyPromise = null;
                                        }
                                    };
                                    PromiseSpawn.prototype._promiseCancelled = function () {
                                        if (this._isResolved())
                                            return;
                                        var implementsReturn = typeof this._generator["return"] !== "undefined";
                                        var result;
                                        if (!implementsReturn) {
                                            var reason = new Promise.CancellationError("generator .return() sentinel");
                                            Promise.coroutine.returnSentinel = reason;
                                            this._promise._attachExtraTrace(reason);
                                            this._promise._pushContext();
                                            result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                                            this._promise._popContext();
                                        }
                                        else {
                                            this._promise._pushContext();
                                            result = tryCatch(this._generator["return"]).call(this._generator, undefined);
                                            this._promise._popContext();
                                        }
                                        this._cancellationPhase = true;
                                        this._yieldedPromise = null;
                                        this._continue(result);
                                    };
                                    PromiseSpawn.prototype._promiseFulfilled = function (value) {
                                        this._yieldedPromise = null;
                                        this._promise._pushContext();
                                        var result = tryCatch(this._generator.next).call(this._generator, value);
                                        this._promise._popContext();
                                        this._continue(result);
                                    };
                                    PromiseSpawn.prototype._promiseRejected = function (reason) {
                                        this._yieldedPromise = null;
                                        this._promise._attachExtraTrace(reason);
                                        this._promise._pushContext();
                                        var result = tryCatch(this._generator["throw"])
                                            .call(this._generator, reason);
                                        this._promise._popContext();
                                        this._continue(result);
                                    };
                                    PromiseSpawn.prototype._resultCancelled = function () {
                                        if (this._yieldedPromise instanceof Promise) {
                                            var promise = this._yieldedPromise;
                                            this._yieldedPromise = null;
                                            promise.cancel();
                                        }
                                    };
                                    PromiseSpawn.prototype.promise = function () {
                                        return this._promise;
                                    };
                                    PromiseSpawn.prototype._run = function () {
                                        this._generator = this._generatorFunction.call(this._receiver);
                                        this._receiver =
                                            this._generatorFunction = undefined;
                                        this._promiseFulfilled(undefined);
                                    };
                                    PromiseSpawn.prototype._continue = function (result) {
                                        var promise = this._promise;
                                        if (result === errorObj) {
                                            this._cleanup();
                                            if (this._cancellationPhase) {
                                                return promise.cancel();
                                            }
                                            else {
                                                return promise._rejectCallback(result.e, false);
                                            }
                                        }
                                        var value = result.value;
                                        if (result.done === true) {
                                            this._cleanup();
                                            if (this._cancellationPhase) {
                                                return promise.cancel();
                                            }
                                            else {
                                                return promise._resolveCallback(value);
                                            }
                                        }
                                        else {
                                            var maybePromise = tryConvertToPromise(value, this._promise);
                                            if (!(maybePromise instanceof Promise)) {
                                                maybePromise =
                                                    promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
                                                if (maybePromise === null) {
                                                    this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                                                        "From coroutine:\u000a" +
                                                        this._stack.split("\n").slice(1, -7).join("\n")));
                                                    return;
                                                }
                                            }
                                            maybePromise = maybePromise._target();
                                            var bitField = maybePromise._bitField;
                                            ;
                                            if (((bitField & 50397184) === 0)) {
                                                this._yieldedPromise = maybePromise;
                                                maybePromise._proxy(this, null);
                                            }
                                            else if (((bitField & 33554432) !== 0)) {
                                                Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
                                            }
                                            else if (((bitField & 16777216) !== 0)) {
                                                Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
                                            }
                                            else {
                                                this._promiseCancelled();
                                            }
                                        }
                                    };
                                    Promise.coroutine = function (generatorFunction, options) {
                                        if (typeof generatorFunction !== "function") {
                                            throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        var yieldHandler = Object(options).yieldHandler;
                                        var PromiseSpawn$ = PromiseSpawn;
                                        var stack = new Error().stack;
                                        return function () {
                                            var generator = generatorFunction.apply(this, arguments);
                                            var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
                                            var ret = spawn.promise();
                                            spawn._generator = generator;
                                            spawn._promiseFulfilled(undefined);
                                            return ret;
                                        };
                                    };
                                    Promise.coroutine.addYieldHandler = function (fn) {
                                        if (typeof fn !== "function") {
                                            throw new TypeError("expecting a function but got " + util.classString(fn));
                                        }
                                        yieldHandlers.push(fn);
                                    };
                                    Promise.spawn = function (generatorFunction) {
                                        debug.deprecated("Promise.spawn()", "Promise.coroutine()");
                                        if (typeof generatorFunction !== "function") {
                                            return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        var spawn = new PromiseSpawn(generatorFunction, this);
                                        var ret = spawn.promise();
                                        spawn._run(Promise.spawn);
                                        return ret;
                                    };
                                };
                            }, { "./errors": 12, "./util": 36 }], 17: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports =
                                    function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async) {
                                        var util = _dereq_("./util");
                                        var canEvaluate = util.canEvaluate;
                                        var tryCatch = util.tryCatch;
                                        var errorObj = util.errorObj;
                                        var reject;
                                        if (!true) {
                                            if (canEvaluate) {
                                                var thenCallback = function (i) {
                                                    return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
                                                };
                                                var promiseSetter = function (i) {
                                                    return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
                                                };
                                                var generateHolderClass = function (total) {
                                                    var props = new Array(total);
                                                    for (var i = 0; i < props.length; ++i) {
                                                        props[i] = "this.p" + (i + 1);
                                                    }
                                                    var assignment = props.join(" = ") + " = null;";
                                                    var cancellationCode = "var promise;\n" + props.map(function (prop) {
                                                        return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
                                                    }).join("\n");
                                                    var passedArguments = props.join(", ");
                                                    var name = "Holder$" + total;
                                                    var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";
                                                    code = code.replace(/\[TheName\]/g, name)
                                                        .replace(/\[TheTotal\]/g, total)
                                                        .replace(/\[ThePassedArguments\]/g, passedArguments)
                                                        .replace(/\[TheProperties\]/g, assignment)
                                                        .replace(/\[CancellationCode\]/g, cancellationCode);
                                                    return new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
                                                };
                                                var holderClasses = [];
                                                var thenCallbacks = [];
                                                var promiseSetters = [];
                                                for (var i = 0; i < 8; ++i) {
                                                    holderClasses.push(generateHolderClass(i + 1));
                                                    thenCallbacks.push(thenCallback(i + 1));
                                                    promiseSetters.push(promiseSetter(i + 1));
                                                }
                                                reject = function (reason) {
                                                    this._reject(reason);
                                                };
                                            }
                                        }
                                        Promise.join = function () {
                                            var last = arguments.length - 1;
                                            var fn;
                                            if (last > 0 && typeof arguments[last] === "function") {
                                                fn = arguments[last];
                                                if (!true) {
                                                    if (last <= 8 && canEvaluate) {
                                                        var ret = new Promise(INTERNAL);
                                                        ret._captureStackTrace();
                                                        var HolderClass = holderClasses[last - 1];
                                                        var holder = new HolderClass(fn);
                                                        var callbacks = thenCallbacks;
                                                        for (var i = 0; i < last; ++i) {
                                                            var maybePromise = tryConvertToPromise(arguments[i], ret);
                                                            if (maybePromise instanceof Promise) {
                                                                maybePromise = maybePromise._target();
                                                                var bitField = maybePromise._bitField;
                                                                ;
                                                                if (((bitField & 50397184) === 0)) {
                                                                    maybePromise._then(callbacks[i], reject, undefined, ret, holder);
                                                                    promiseSetters[i](maybePromise, holder);
                                                                    holder.asyncNeeded = false;
                                                                }
                                                                else if (((bitField & 33554432) !== 0)) {
                                                                    callbacks[i].call(ret, maybePromise._value(), holder);
                                                                }
                                                                else if (((bitField & 16777216) !== 0)) {
                                                                    ret._reject(maybePromise._reason());
                                                                }
                                                                else {
                                                                    ret._cancel();
                                                                }
                                                            }
                                                            else {
                                                                callbacks[i].call(ret, maybePromise, holder);
                                                            }
                                                        }
                                                        if (!ret._isFateSealed()) {
                                                            if (holder.asyncNeeded) {
                                                                var context = Promise._getContext();
                                                                holder.fn = util.contextBind(context, holder.fn);
                                                            }
                                                            ret._setAsyncGuaranteed();
                                                            ret._setOnCancel(holder);
                                                        }
                                                        return ret;
                                                    }
                                                }
                                            }
                                            var args = [].slice.call(arguments);
                                            ;
                                            if (fn)
                                                args.pop();
                                            var ret = new PromiseArray(args).promise();
                                            return fn !== undefined ? ret.spread(fn) : ret;
                                        };
                                    };
                            }, { "./util": 36 }], 18: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                                    var util = _dereq_("./util");
                                    var tryCatch = util.tryCatch;
                                    var errorObj = util.errorObj;
                                    var async = Promise._async;
                                    function MappingPromiseArray(promises, fn, limit, _filter) {
                                        this.constructor$(promises);
                                        this._promise._captureStackTrace();
                                        var context = Promise._getContext();
                                        this._callback = util.contextBind(context, fn);
                                        this._preservedValues = _filter === INTERNAL
                                            ? new Array(this.length())
                                            : null;
                                        this._limit = limit;
                                        this._inFlight = 0;
                                        this._queue = [];
                                        async.invoke(this._asyncInit, this, undefined);
                                        if (util.isArray(promises)) {
                                            for (var i = 0; i < promises.length; ++i) {
                                                var maybePromise = promises[i];
                                                if (maybePromise instanceof Promise) {
                                                    maybePromise.suppressUnhandledRejections();
                                                }
                                            }
                                        }
                                    }
                                    util.inherits(MappingPromiseArray, PromiseArray);
                                    MappingPromiseArray.prototype._asyncInit = function () {
                                        this._init$(undefined, -2);
                                    };
                                    MappingPromiseArray.prototype._init = function () { };
                                    MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
                                        var values = this._values;
                                        var length = this.length();
                                        var preservedValues = this._preservedValues;
                                        var limit = this._limit;
                                        if (index < 0) {
                                            index = (index * -1) - 1;
                                            values[index] = value;
                                            if (limit >= 1) {
                                                this._inFlight--;
                                                this._drainQueue();
                                                if (this._isResolved())
                                                    return true;
                                            }
                                        }
                                        else {
                                            if (limit >= 1 && this._inFlight >= limit) {
                                                values[index] = value;
                                                this._queue.push(index);
                                                return false;
                                            }
                                            if (preservedValues !== null)
                                                preservedValues[index] = value;
                                            var promise = this._promise;
                                            var callback = this._callback;
                                            var receiver = promise._boundValue();
                                            promise._pushContext();
                                            var ret = tryCatch(callback).call(receiver, value, index, length);
                                            var promiseCreated = promise._popContext();
                                            debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
                                            if (ret === errorObj) {
                                                this._reject(ret.e);
                                                return true;
                                            }
                                            var maybePromise = tryConvertToPromise(ret, this._promise);
                                            if (maybePromise instanceof Promise) {
                                                maybePromise = maybePromise._target();
                                                var bitField = maybePromise._bitField;
                                                ;
                                                if (((bitField & 50397184) === 0)) {
                                                    if (limit >= 1)
                                                        this._inFlight++;
                                                    values[index] = maybePromise;
                                                    maybePromise._proxy(this, (index + 1) * -1);
                                                    return false;
                                                }
                                                else if (((bitField & 33554432) !== 0)) {
                                                    ret = maybePromise._value();
                                                }
                                                else if (((bitField & 16777216) !== 0)) {
                                                    this._reject(maybePromise._reason());
                                                    return true;
                                                }
                                                else {
                                                    this._cancel();
                                                    return true;
                                                }
                                            }
                                            values[index] = ret;
                                        }
                                        var totalResolved = ++this._totalResolved;
                                        if (totalResolved >= length) {
                                            if (preservedValues !== null) {
                                                this._filter(values, preservedValues);
                                            }
                                            else {
                                                this._resolve(values);
                                            }
                                            return true;
                                        }
                                        return false;
                                    };
                                    MappingPromiseArray.prototype._drainQueue = function () {
                                        var queue = this._queue;
                                        var limit = this._limit;
                                        var values = this._values;
                                        while (queue.length > 0 && this._inFlight < limit) {
                                            if (this._isResolved())
                                                return;
                                            var index = queue.pop();
                                            this._promiseFulfilled(values[index], index);
                                        }
                                    };
                                    MappingPromiseArray.prototype._filter = function (booleans, values) {
                                        var len = values.length;
                                        var ret = new Array(len);
                                        var j = 0;
                                        for (var i = 0; i < len; ++i) {
                                            if (booleans[i])
                                                ret[j++] = values[i];
                                        }
                                        ret.length = j;
                                        this._resolve(ret);
                                    };
                                    MappingPromiseArray.prototype.preservedValues = function () {
                                        return this._preservedValues;
                                    };
                                    function map(promises, fn, options, _filter) {
                                        if (typeof fn !== "function") {
                                            return apiRejection("expecting a function but got " + util.classString(fn));
                                        }
                                        var limit = 0;
                                        if (options !== undefined) {
                                            if (typeof options === "object" && options !== null) {
                                                if (typeof options.concurrency !== "number") {
                                                    return Promise.reject(new TypeError("'concurrency' must be a number but it is " +
                                                        util.classString(options.concurrency)));
                                                }
                                                limit = options.concurrency;
                                            }
                                            else {
                                                return Promise.reject(new TypeError("options argument must be an object but it is " +
                                                    util.classString(options)));
                                            }
                                        }
                                        limit = typeof limit === "number" &&
                                            isFinite(limit) && limit >= 1 ? limit : 0;
                                        return new MappingPromiseArray(promises, fn, limit, _filter).promise();
                                    }
                                    Promise.prototype.map = function (fn, options) {
                                        return map(this, fn, options, null);
                                    };
                                    Promise.map = function (promises, fn, options, _filter) {
                                        return map(promises, fn, options, _filter);
                                    };
                                };
                            }, { "./util": 36 }], 19: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports =
                                    function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
                                        var util = _dereq_("./util");
                                        var tryCatch = util.tryCatch;
                                        Promise.method = function (fn) {
                                            if (typeof fn !== "function") {
                                                throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
                                            }
                                            return function () {
                                                var ret = new Promise(INTERNAL);
                                                ret._captureStackTrace();
                                                ret._pushContext();
                                                var value = tryCatch(fn).apply(this, arguments);
                                                var promiseCreated = ret._popContext();
                                                debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
                                                ret._resolveFromSyncValue(value);
                                                return ret;
                                            };
                                        };
                                        Promise.attempt = Promise["try"] = function (fn) {
                                            if (typeof fn !== "function") {
                                                return apiRejection("expecting a function but got " + util.classString(fn));
                                            }
                                            var ret = new Promise(INTERNAL);
                                            ret._captureStackTrace();
                                            ret._pushContext();
                                            var value;
                                            if (arguments.length > 1) {
                                                debug.deprecated("calling Promise.try with more than 1 argument");
                                                var arg = arguments[1];
                                                var ctx = arguments[2];
                                                value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                                    : tryCatch(fn).call(ctx, arg);
                                            }
                                            else {
                                                value = tryCatch(fn)();
                                            }
                                            var promiseCreated = ret._popContext();
                                            debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
                                            ret._resolveFromSyncValue(value);
                                            return ret;
                                        };
                                        Promise.prototype._resolveFromSyncValue = function (value) {
                                            if (value === util.errorObj) {
                                                this._rejectCallback(value.e, false);
                                            }
                                            else {
                                                this._resolveCallback(value, true);
                                            }
                                        };
                                    };
                            }, { "./util": 36 }], 20: [function (_dereq_, module, exports) {
                                "use strict";
                                var util = _dereq_("./util");
                                var maybeWrapAsError = util.maybeWrapAsError;
                                var errors = _dereq_("./errors");
                                var OperationalError = errors.OperationalError;
                                var es5 = _dereq_("./es5");
                                function isUntypedError(obj) {
                                    return obj instanceof Error &&
                                        es5.getPrototypeOf(obj) === Error.prototype;
                                }
                                var rErrorKey = /^(?:name|message|stack|cause)$/;
                                function wrapAsOperationalError(obj) {
                                    var ret;
                                    if (isUntypedError(obj)) {
                                        ret = new OperationalError(obj);
                                        ret.name = obj.name;
                                        ret.message = obj.message;
                                        ret.stack = obj.stack;
                                        var keys = es5.keys(obj);
                                        for (var i = 0; i < keys.length; ++i) {
                                            var key = keys[i];
                                            if (!rErrorKey.test(key)) {
                                                ret[key] = obj[key];
                                            }
                                        }
                                        return ret;
                                    }
                                    util.markAsOriginatingFromRejection(obj);
                                    return obj;
                                }
                                function nodebackForPromise(promise, multiArgs) {
                                    return function (err, value) {
                                        if (promise === null)
                                            return;
                                        if (err) {
                                            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                                            promise._attachExtraTrace(wrapped);
                                            promise._reject(wrapped);
                                        }
                                        else if (!multiArgs) {
                                            promise._fulfill(value);
                                        }
                                        else {
                                            var args = [].slice.call(arguments, 1);
                                            ;
                                            promise._fulfill(args);
                                        }
                                        promise = null;
                                    };
                                }
                                module.exports = nodebackForPromise;
                            }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise) {
                                    var util = _dereq_("./util");
                                    var async = Promise._async;
                                    var tryCatch = util.tryCatch;
                                    var errorObj = util.errorObj;
                                    function spreadAdapter(val, nodeback) {
                                        var promise = this;
                                        if (!util.isArray(val))
                                            return successAdapter.call(promise, val, nodeback);
                                        var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
                                        if (ret === errorObj) {
                                            async.throwLater(ret.e);
                                        }
                                    }
                                    function successAdapter(val, nodeback) {
                                        var promise = this;
                                        var receiver = promise._boundValue();
                                        var ret = val === undefined
                                            ? tryCatch(nodeback).call(receiver, null)
                                            : tryCatch(nodeback).call(receiver, null, val);
                                        if (ret === errorObj) {
                                            async.throwLater(ret.e);
                                        }
                                    }
                                    function errorAdapter(reason, nodeback) {
                                        var promise = this;
                                        if (!reason) {
                                            var newReason = new Error(reason + "");
                                            newReason.cause = reason;
                                            reason = newReason;
                                        }
                                        var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
                                        if (ret === errorObj) {
                                            async.throwLater(ret.e);
                                        }
                                    }
                                    Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
                                        if (typeof nodeback == "function") {
                                            var adapter = successAdapter;
                                            if (options !== undefined && Object(options).spread) {
                                                adapter = spreadAdapter;
                                            }
                                            this._then(adapter, errorAdapter, undefined, this, nodeback);
                                        }
                                        return this;
                                    };
                                };
                            }, { "./util": 36 }], 22: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function () {
                                    var makeSelfResolutionError = function () {
                                        return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                    };
                                    var reflectHandler = function () {
                                        return new Promise.PromiseInspection(this._target());
                                    };
                                    var apiRejection = function (msg) {
                                        return Promise.reject(new TypeError(msg));
                                    };
                                    function Proxyable() { }
                                    var UNDEFINED_BINDING = {};
                                    var util = _dereq_("./util");
                                    util.setReflectHandler(reflectHandler);
                                    var getDomain = function () {
                                        var domain = process.domain;
                                        if (domain === undefined) {
                                            return null;
                                        }
                                        return domain;
                                    };
                                    var getContextDefault = function () {
                                        return null;
                                    };
                                    var getContextDomain = function () {
                                        return {
                                            domain: getDomain(),
                                            async: null
                                        };
                                    };
                                    var AsyncResource = util.isNode && util.nodeSupportsAsyncResource ?
                                        _dereq_("async_hooks").AsyncResource : null;
                                    var getContextAsyncHooks = function () {
                                        return {
                                            domain: getDomain(),
                                            async: new AsyncResource("Bluebird::Promise")
                                        };
                                    };
                                    var getContext = util.isNode ? getContextDomain : getContextDefault;
                                    util.notEnumerableProp(Promise, "_getContext", getContext);
                                    var enableAsyncHooks = function () {
                                        getContext = getContextAsyncHooks;
                                        util.notEnumerableProp(Promise, "_getContext", getContextAsyncHooks);
                                    };
                                    var disableAsyncHooks = function () {
                                        getContext = getContextDomain;
                                        util.notEnumerableProp(Promise, "_getContext", getContextDomain);
                                    };
                                    var es5 = _dereq_("./es5");
                                    var Async = _dereq_("./async");
                                    var async = new Async();
                                    es5.defineProperty(Promise, "_async", { value: async });
                                    var errors = _dereq_("./errors");
                                    var TypeError = Promise.TypeError = errors.TypeError;
                                    Promise.RangeError = errors.RangeError;
                                    var CancellationError = Promise.CancellationError = errors.CancellationError;
                                    Promise.TimeoutError = errors.TimeoutError;
                                    Promise.OperationalError = errors.OperationalError;
                                    Promise.RejectionError = errors.OperationalError;
                                    Promise.AggregateError = errors.AggregateError;
                                    var INTERNAL = function () { };
                                    var APPLY = {};
                                    var NEXT_FILTER = {};
                                    var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
                                    var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
                                    var Context = _dereq_("./context")(Promise);
                                    /*jshint unused:false*/
                                    var createContext = Context.create;
                                    var debug = _dereq_("./debuggability")(Promise, Context, enableAsyncHooks, disableAsyncHooks);
                                    var CapturedTrace = debug.CapturedTrace;
                                    var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
                                    var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
                                    var nodebackForPromise = _dereq_("./nodeback");
                                    var errorObj = util.errorObj;
                                    var tryCatch = util.tryCatch;
                                    function check(self, executor) {
                                        if (self == null || self.constructor !== Promise) {
                                            throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        if (typeof executor !== "function") {
                                            throw new TypeError("expecting a function but got " + util.classString(executor));
                                        }
                                    }
                                    function Promise(executor) {
                                        if (executor !== INTERNAL) {
                                            check(this, executor);
                                        }
                                        this._bitField = 0;
                                        this._fulfillmentHandler0 = undefined;
                                        this._rejectionHandler0 = undefined;
                                        this._promise0 = undefined;
                                        this._receiver0 = undefined;
                                        this._resolveFromExecutor(executor);
                                        this._promiseCreated();
                                        this._fireEvent("promiseCreated", this);
                                    }
                                    Promise.prototype.toString = function () {
                                        return "[object Promise]";
                                    };
                                    Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
                                        var len = arguments.length;
                                        if (len > 1) {
                                            var catchInstances = new Array(len - 1), j = 0, i;
                                            for (i = 0; i < len - 1; ++i) {
                                                var item = arguments[i];
                                                if (util.isObject(item)) {
                                                    catchInstances[j++] = item;
                                                }
                                                else {
                                                    return apiRejection("Catch statement predicate: " +
                                                        "expecting an object but got " + util.classString(item));
                                                }
                                            }
                                            catchInstances.length = j;
                                            fn = arguments[i];
                                            if (typeof fn !== "function") {
                                                throw new TypeError("The last argument to .catch() " +
                                                    "must be a function, got " + util.toString(fn));
                                            }
                                            return this.then(undefined, catchFilter(catchInstances, fn, this));
                                        }
                                        return this.then(undefined, fn);
                                    };
                                    Promise.prototype.reflect = function () {
                                        return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
                                    };
                                    Promise.prototype.then = function (didFulfill, didReject) {
                                        if (debug.warnings() && arguments.length > 0 &&
                                            typeof didFulfill !== "function" &&
                                            typeof didReject !== "function") {
                                            var msg = ".then() only accepts functions but was passed: " +
                                                util.classString(didFulfill);
                                            if (arguments.length > 1) {
                                                msg += ", " + util.classString(didReject);
                                            }
                                            this._warn(msg);
                                        }
                                        return this._then(didFulfill, didReject, undefined, undefined, undefined);
                                    };
                                    Promise.prototype.done = function (didFulfill, didReject) {
                                        var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
                                        promise._setIsFinal();
                                    };
                                    Promise.prototype.spread = function (fn) {
                                        if (typeof fn !== "function") {
                                            return apiRejection("expecting a function but got " + util.classString(fn));
                                        }
                                        return this.all()._then(fn, undefined, undefined, APPLY, undefined);
                                    };
                                    Promise.prototype.toJSON = function () {
                                        var ret = {
                                            isFulfilled: false,
                                            isRejected: false,
                                            fulfillmentValue: undefined,
                                            rejectionReason: undefined
                                        };
                                        if (this.isFulfilled()) {
                                            ret.fulfillmentValue = this.value();
                                            ret.isFulfilled = true;
                                        }
                                        else if (this.isRejected()) {
                                            ret.rejectionReason = this.reason();
                                            ret.isRejected = true;
                                        }
                                        return ret;
                                    };
                                    Promise.prototype.all = function () {
                                        if (arguments.length > 0) {
                                            this._warn(".all() was passed arguments but it does not take any");
                                        }
                                        return new PromiseArray(this).promise();
                                    };
                                    Promise.prototype.error = function (fn) {
                                        return this.caught(util.originatesFromRejection, fn);
                                    };
                                    Promise.getNewLibraryCopy = module.exports;
                                    Promise.is = function (val) {
                                        return val instanceof Promise;
                                    };
                                    Promise.fromNode = Promise.fromCallback = function (fn) {
                                        var ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                            : false;
                                        var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
                                        if (result === errorObj) {
                                            ret._rejectCallback(result.e, true);
                                        }
                                        if (!ret._isFateSealed())
                                            ret._setAsyncGuaranteed();
                                        return ret;
                                    };
                                    Promise.all = function (promises) {
                                        return new PromiseArray(promises).promise();
                                    };
                                    Promise.cast = function (obj) {
                                        var ret = tryConvertToPromise(obj);
                                        if (!(ret instanceof Promise)) {
                                            ret = new Promise(INTERNAL);
                                            ret._captureStackTrace();
                                            ret._setFulfilled();
                                            ret._rejectionHandler0 = obj;
                                        }
                                        return ret;
                                    };
                                    Promise.resolve = Promise.fulfilled = Promise.cast;
                                    Promise.reject = Promise.rejected = function (reason) {
                                        var ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        ret._rejectCallback(reason, true);
                                        return ret;
                                    };
                                    Promise.setScheduler = function (fn) {
                                        if (typeof fn !== "function") {
                                            throw new TypeError("expecting a function but got " + util.classString(fn));
                                        }
                                        return async.setScheduler(fn);
                                    };
                                    Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
                                        var haveInternalData = internalData !== undefined;
                                        var promise = haveInternalData ? internalData : new Promise(INTERNAL);
                                        var target = this._target();
                                        var bitField = target._bitField;
                                        if (!haveInternalData) {
                                            promise._propagateFrom(this, 3);
                                            promise._captureStackTrace();
                                            if (receiver === undefined &&
                                                ((this._bitField & 2097152) !== 0)) {
                                                if (!((bitField & 50397184) === 0)) {
                                                    receiver = this._boundValue();
                                                }
                                                else {
                                                    receiver = target === this ? undefined : this._boundTo;
                                                }
                                            }
                                            this._fireEvent("promiseChained", this, promise);
                                        }
                                        var context = getContext();
                                        if (!((bitField & 50397184) === 0)) {
                                            var handler, value, settler = target._settlePromiseCtx;
                                            if (((bitField & 33554432) !== 0)) {
                                                value = target._rejectionHandler0;
                                                handler = didFulfill;
                                            }
                                            else if (((bitField & 16777216) !== 0)) {
                                                value = target._fulfillmentHandler0;
                                                handler = didReject;
                                                target._unsetRejectionIsUnhandled();
                                            }
                                            else {
                                                settler = target._settlePromiseLateCancellationObserver;
                                                value = new CancellationError("late cancellation observer");
                                                target._attachExtraTrace(value);
                                                handler = didReject;
                                            }
                                            async.invoke(settler, target, {
                                                handler: util.contextBind(context, handler),
                                                promise: promise,
                                                receiver: receiver,
                                                value: value
                                            });
                                        }
                                        else {
                                            target._addCallbacks(didFulfill, didReject, promise, receiver, context);
                                        }
                                        return promise;
                                    };
                                    Promise.prototype._length = function () {
                                        return this._bitField & 65535;
                                    };
                                    Promise.prototype._isFateSealed = function () {
                                        return (this._bitField & 117506048) !== 0;
                                    };
                                    Promise.prototype._isFollowing = function () {
                                        return (this._bitField & 67108864) === 67108864;
                                    };
                                    Promise.prototype._setLength = function (len) {
                                        this._bitField = (this._bitField & -65536) |
                                            (len & 65535);
                                    };
                                    Promise.prototype._setFulfilled = function () {
                                        this._bitField = this._bitField | 33554432;
                                        this._fireEvent("promiseFulfilled", this);
                                    };
                                    Promise.prototype._setRejected = function () {
                                        this._bitField = this._bitField | 16777216;
                                        this._fireEvent("promiseRejected", this);
                                    };
                                    Promise.prototype._setFollowing = function () {
                                        this._bitField = this._bitField | 67108864;
                                        this._fireEvent("promiseResolved", this);
                                    };
                                    Promise.prototype._setIsFinal = function () {
                                        this._bitField = this._bitField | 4194304;
                                    };
                                    Promise.prototype._isFinal = function () {
                                        return (this._bitField & 4194304) > 0;
                                    };
                                    Promise.prototype._unsetCancelled = function () {
                                        this._bitField = this._bitField & (~65536);
                                    };
                                    Promise.prototype._setCancelled = function () {
                                        this._bitField = this._bitField | 65536;
                                        this._fireEvent("promiseCancelled", this);
                                    };
                                    Promise.prototype._setWillBeCancelled = function () {
                                        this._bitField = this._bitField | 8388608;
                                    };
                                    Promise.prototype._setAsyncGuaranteed = function () {
                                        if (async.hasCustomScheduler())
                                            return;
                                        var bitField = this._bitField;
                                        this._bitField = bitField |
                                            (((bitField & 536870912) >> 2) ^
                                                134217728);
                                    };
                                    Promise.prototype._setNoAsyncGuarantee = function () {
                                        this._bitField = (this._bitField | 536870912) &
                                            (~134217728);
                                    };
                                    Promise.prototype._receiverAt = function (index) {
                                        var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
                                        if (ret === UNDEFINED_BINDING) {
                                            return undefined;
                                        }
                                        else if (ret === undefined && this._isBound()) {
                                            return this._boundValue();
                                        }
                                        return ret;
                                    };
                                    Promise.prototype._promiseAt = function (index) {
                                        return this[index * 4 - 4 + 2];
                                    };
                                    Promise.prototype._fulfillmentHandlerAt = function (index) {
                                        return this[index * 4 - 4 + 0];
                                    };
                                    Promise.prototype._rejectionHandlerAt = function (index) {
                                        return this[index * 4 - 4 + 1];
                                    };
                                    Promise.prototype._boundValue = function () { };
                                    Promise.prototype._migrateCallback0 = function (follower) {
                                        var bitField = follower._bitField;
                                        var fulfill = follower._fulfillmentHandler0;
                                        var reject = follower._rejectionHandler0;
                                        var promise = follower._promise0;
                                        var receiver = follower._receiverAt(0);
                                        if (receiver === undefined)
                                            receiver = UNDEFINED_BINDING;
                                        this._addCallbacks(fulfill, reject, promise, receiver, null);
                                    };
                                    Promise.prototype._migrateCallbackAt = function (follower, index) {
                                        var fulfill = follower._fulfillmentHandlerAt(index);
                                        var reject = follower._rejectionHandlerAt(index);
                                        var promise = follower._promiseAt(index);
                                        var receiver = follower._receiverAt(index);
                                        if (receiver === undefined)
                                            receiver = UNDEFINED_BINDING;
                                        this._addCallbacks(fulfill, reject, promise, receiver, null);
                                    };
                                    Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, context) {
                                        var index = this._length();
                                        if (index >= 65535 - 4) {
                                            index = 0;
                                            this._setLength(0);
                                        }
                                        if (index === 0) {
                                            this._promise0 = promise;
                                            this._receiver0 = receiver;
                                            if (typeof fulfill === "function") {
                                                this._fulfillmentHandler0 = util.contextBind(context, fulfill);
                                            }
                                            if (typeof reject === "function") {
                                                this._rejectionHandler0 = util.contextBind(context, reject);
                                            }
                                        }
                                        else {
                                            var base = index * 4 - 4;
                                            this[base + 2] = promise;
                                            this[base + 3] = receiver;
                                            if (typeof fulfill === "function") {
                                                this[base + 0] =
                                                    util.contextBind(context, fulfill);
                                            }
                                            if (typeof reject === "function") {
                                                this[base + 1] =
                                                    util.contextBind(context, reject);
                                            }
                                        }
                                        this._setLength(index + 1);
                                        return index;
                                    };
                                    Promise.prototype._proxy = function (proxyable, arg) {
                                        this._addCallbacks(undefined, undefined, arg, proxyable, null);
                                    };
                                    Promise.prototype._resolveCallback = function (value, shouldBind) {
                                        if (((this._bitField & 117506048) !== 0))
                                            return;
                                        if (value === this)
                                            return this._rejectCallback(makeSelfResolutionError(), false);
                                        var maybePromise = tryConvertToPromise(value, this);
                                        if (!(maybePromise instanceof Promise))
                                            return this._fulfill(value);
                                        if (shouldBind)
                                            this._propagateFrom(maybePromise, 2);
                                        var promise = maybePromise._target();
                                        if (promise === this) {
                                            this._reject(makeSelfResolutionError());
                                            return;
                                        }
                                        var bitField = promise._bitField;
                                        if (((bitField & 50397184) === 0)) {
                                            var len = this._length();
                                            if (len > 0)
                                                promise._migrateCallback0(this);
                                            for (var i = 1; i < len; ++i) {
                                                promise._migrateCallbackAt(this, i);
                                            }
                                            this._setFollowing();
                                            this._setLength(0);
                                            this._setFollowee(maybePromise);
                                        }
                                        else if (((bitField & 33554432) !== 0)) {
                                            this._fulfill(promise._value());
                                        }
                                        else if (((bitField & 16777216) !== 0)) {
                                            this._reject(promise._reason());
                                        }
                                        else {
                                            var reason = new CancellationError("late cancellation observer");
                                            promise._attachExtraTrace(reason);
                                            this._reject(reason);
                                        }
                                    };
                                    Promise.prototype._rejectCallback =
                                        function (reason, synchronous, ignoreNonErrorWarnings) {
                                            var trace = util.ensureErrorObject(reason);
                                            var hasStack = trace === reason;
                                            if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                                                var message = "a promise was rejected with a non-error: " +
                                                    util.classString(reason);
                                                this._warn(message, true);
                                            }
                                            this._attachExtraTrace(trace, synchronous ? hasStack : false);
                                            this._reject(reason);
                                        };
                                    Promise.prototype._resolveFromExecutor = function (executor) {
                                        if (executor === INTERNAL)
                                            return;
                                        var promise = this;
                                        this._captureStackTrace();
                                        this._pushContext();
                                        var synchronous = true;
                                        var r = this._execute(executor, function (value) {
                                            promise._resolveCallback(value);
                                        }, function (reason) {
                                            promise._rejectCallback(reason, synchronous);
                                        });
                                        synchronous = false;
                                        this._popContext();
                                        if (r !== undefined) {
                                            promise._rejectCallback(r, true);
                                        }
                                    };
                                    Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
                                        var bitField = promise._bitField;
                                        if (((bitField & 65536) !== 0))
                                            return;
                                        promise._pushContext();
                                        var x;
                                        if (receiver === APPLY) {
                                            if (!value || typeof value.length !== "number") {
                                                x = errorObj;
                                                x.e = new TypeError("cannot .spread() a non-array: " +
                                                    util.classString(value));
                                            }
                                            else {
                                                x = tryCatch(handler).apply(this._boundValue(), value);
                                            }
                                        }
                                        else {
                                            x = tryCatch(handler).call(receiver, value);
                                        }
                                        var promiseCreated = promise._popContext();
                                        bitField = promise._bitField;
                                        if (((bitField & 65536) !== 0))
                                            return;
                                        if (x === NEXT_FILTER) {
                                            promise._reject(value);
                                        }
                                        else if (x === errorObj) {
                                            promise._rejectCallback(x.e, false);
                                        }
                                        else {
                                            debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
                                            promise._resolveCallback(x);
                                        }
                                    };
                                    Promise.prototype._target = function () {
                                        var ret = this;
                                        while (ret._isFollowing())
                                            ret = ret._followee();
                                        return ret;
                                    };
                                    Promise.prototype._followee = function () {
                                        return this._rejectionHandler0;
                                    };
                                    Promise.prototype._setFollowee = function (promise) {
                                        this._rejectionHandler0 = promise;
                                    };
                                    Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
                                        var isPromise = promise instanceof Promise;
                                        var bitField = this._bitField;
                                        var asyncGuaranteed = ((bitField & 134217728) !== 0);
                                        if (((bitField & 65536) !== 0)) {
                                            if (isPromise)
                                                promise._invokeInternalOnCancel();
                                            if (receiver instanceof PassThroughHandlerContext &&
                                                receiver.isFinallyHandler()) {
                                                receiver.cancelPromise = promise;
                                                if (tryCatch(handler).call(receiver, value) === errorObj) {
                                                    promise._reject(errorObj.e);
                                                }
                                            }
                                            else if (handler === reflectHandler) {
                                                promise._fulfill(reflectHandler.call(receiver));
                                            }
                                            else if (receiver instanceof Proxyable) {
                                                receiver._promiseCancelled(promise);
                                            }
                                            else if (isPromise || promise instanceof PromiseArray) {
                                                promise._cancel();
                                            }
                                            else {
                                                receiver.cancel();
                                            }
                                        }
                                        else if (typeof handler === "function") {
                                            if (!isPromise) {
                                                handler.call(receiver, value, promise);
                                            }
                                            else {
                                                if (asyncGuaranteed)
                                                    promise._setAsyncGuaranteed();
                                                this._settlePromiseFromHandler(handler, receiver, value, promise);
                                            }
                                        }
                                        else if (receiver instanceof Proxyable) {
                                            if (!receiver._isResolved()) {
                                                if (((bitField & 33554432) !== 0)) {
                                                    receiver._promiseFulfilled(value, promise);
                                                }
                                                else {
                                                    receiver._promiseRejected(value, promise);
                                                }
                                            }
                                        }
                                        else if (isPromise) {
                                            if (asyncGuaranteed)
                                                promise._setAsyncGuaranteed();
                                            if (((bitField & 33554432) !== 0)) {
                                                promise._fulfill(value);
                                            }
                                            else {
                                                promise._reject(value);
                                            }
                                        }
                                    };
                                    Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
                                        var handler = ctx.handler;
                                        var promise = ctx.promise;
                                        var receiver = ctx.receiver;
                                        var value = ctx.value;
                                        if (typeof handler === "function") {
                                            if (!(promise instanceof Promise)) {
                                                handler.call(receiver, value, promise);
                                            }
                                            else {
                                                this._settlePromiseFromHandler(handler, receiver, value, promise);
                                            }
                                        }
                                        else if (promise instanceof Promise) {
                                            promise._reject(value);
                                        }
                                    };
                                    Promise.prototype._settlePromiseCtx = function (ctx) {
                                        this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
                                    };
                                    Promise.prototype._settlePromise0 = function (handler, value, bitField) {
                                        var promise = this._promise0;
                                        var receiver = this._receiverAt(0);
                                        this._promise0 = undefined;
                                        this._receiver0 = undefined;
                                        this._settlePromise(promise, handler, receiver, value);
                                    };
                                    Promise.prototype._clearCallbackDataAtIndex = function (index) {
                                        var base = index * 4 - 4;
                                        this[base + 2] =
                                            this[base + 3] =
                                                this[base + 0] =
                                                    this[base + 1] = undefined;
                                    };
                                    Promise.prototype._fulfill = function (value) {
                                        var bitField = this._bitField;
                                        if (((bitField & 117506048) >>> 16))
                                            return;
                                        if (value === this) {
                                            var err = makeSelfResolutionError();
                                            this._attachExtraTrace(err);
                                            return this._reject(err);
                                        }
                                        this._setFulfilled();
                                        this._rejectionHandler0 = value;
                                        if ((bitField & 65535) > 0) {
                                            if (((bitField & 134217728) !== 0)) {
                                                this._settlePromises();
                                            }
                                            else {
                                                async.settlePromises(this);
                                            }
                                            this._dereferenceTrace();
                                        }
                                    };
                                    Promise.prototype._reject = function (reason) {
                                        var bitField = this._bitField;
                                        if (((bitField & 117506048) >>> 16))
                                            return;
                                        this._setRejected();
                                        this._fulfillmentHandler0 = reason;
                                        if (this._isFinal()) {
                                            return async.fatalError(reason, util.isNode);
                                        }
                                        if ((bitField & 65535) > 0) {
                                            async.settlePromises(this);
                                        }
                                        else {
                                            this._ensurePossibleRejectionHandled();
                                        }
                                    };
                                    Promise.prototype._fulfillPromises = function (len, value) {
                                        for (var i = 1; i < len; i++) {
                                            var handler = this._fulfillmentHandlerAt(i);
                                            var promise = this._promiseAt(i);
                                            var receiver = this._receiverAt(i);
                                            this._clearCallbackDataAtIndex(i);
                                            this._settlePromise(promise, handler, receiver, value);
                                        }
                                    };
                                    Promise.prototype._rejectPromises = function (len, reason) {
                                        for (var i = 1; i < len; i++) {
                                            var handler = this._rejectionHandlerAt(i);
                                            var promise = this._promiseAt(i);
                                            var receiver = this._receiverAt(i);
                                            this._clearCallbackDataAtIndex(i);
                                            this._settlePromise(promise, handler, receiver, reason);
                                        }
                                    };
                                    Promise.prototype._settlePromises = function () {
                                        var bitField = this._bitField;
                                        var len = (bitField & 65535);
                                        if (len > 0) {
                                            if (((bitField & 16842752) !== 0)) {
                                                var reason = this._fulfillmentHandler0;
                                                this._settlePromise0(this._rejectionHandler0, reason, bitField);
                                                this._rejectPromises(len, reason);
                                            }
                                            else {
                                                var value = this._rejectionHandler0;
                                                this._settlePromise0(this._fulfillmentHandler0, value, bitField);
                                                this._fulfillPromises(len, value);
                                            }
                                            this._setLength(0);
                                        }
                                        this._clearCancellationData();
                                    };
                                    Promise.prototype._settledValue = function () {
                                        var bitField = this._bitField;
                                        if (((bitField & 33554432) !== 0)) {
                                            return this._rejectionHandler0;
                                        }
                                        else if (((bitField & 16777216) !== 0)) {
                                            return this._fulfillmentHandler0;
                                        }
                                    };
                                    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                                        es5.defineProperty(Promise.prototype, Symbol.toStringTag, {
                                            get: function () {
                                                return "Object";
                                            }
                                        });
                                    }
                                    function deferResolve(v) { this.promise._resolveCallback(v); }
                                    function deferReject(v) { this.promise._rejectCallback(v, false); }
                                    Promise.defer = Promise.pending = function () {
                                        debug.deprecated("Promise.defer", "new Promise");
                                        var promise = new Promise(INTERNAL);
                                        return {
                                            promise: promise,
                                            resolve: deferResolve,
                                            reject: deferReject
                                        };
                                    };
                                    util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);
                                    _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
                                    _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
                                    _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
                                    _dereq_("./direct_resolve")(Promise);
                                    _dereq_("./synchronous_inspection")(Promise);
                                    _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async);
                                    Promise.Promise = Promise;
                                    Promise.version = "3.7.2";
                                    _dereq_('./call_get.js')(Promise);
                                    _dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
                                    _dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                                    _dereq_('./nodeify.js')(Promise);
                                    _dereq_('./promisify.js')(Promise, INTERNAL);
                                    _dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
                                    _dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
                                    _dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                                    _dereq_('./settle.js')(Promise, PromiseArray, debug);
                                    _dereq_('./some.js')(Promise, PromiseArray, apiRejection);
                                    _dereq_('./timers.js')(Promise, INTERNAL, debug);
                                    _dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
                                    _dereq_('./any.js')(Promise);
                                    _dereq_('./each.js')(Promise, INTERNAL);
                                    _dereq_('./filter.js')(Promise, INTERNAL);
                                    util.toFastProperties(Promise);
                                    util.toFastProperties(Promise.prototype);
                                    function fillTypes(value) {
                                        var p = new Promise(INTERNAL);
                                        p._fulfillmentHandler0 = value;
                                        p._rejectionHandler0 = value;
                                        p._promise0 = value;
                                        p._receiver0 = value;
                                    }
                                    // Complete slack tracking, opt out of field-type tracking and           
                                    // stabilize map                                                         
                                    fillTypes({ a: 1 });
                                    fillTypes({ b: 2 });
                                    fillTypes({ c: 3 });
                                    fillTypes(1);
                                    fillTypes(function () { });
                                    fillTypes(undefined);
                                    fillTypes(false);
                                    fillTypes(new Promise(INTERNAL));
                                    debug.setBounds(Async.firstLineError, util.lastLineError);
                                    return Promise;
                                };
                            }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36, "async_hooks": undefined }], 23: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
                                    var util = _dereq_("./util");
                                    var isArray = util.isArray;
                                    function toResolutionValue(val) {
                                        switch (val) {
                                            case -2: return [];
                                            case -3: return {};
                                            case -6: return new Map();
                                        }
                                    }
                                    function PromiseArray(values) {
                                        var promise = this._promise = new Promise(INTERNAL);
                                        if (values instanceof Promise) {
                                            promise._propagateFrom(values, 3);
                                            values.suppressUnhandledRejections();
                                        }
                                        promise._setOnCancel(this);
                                        this._values = values;
                                        this._length = 0;
                                        this._totalResolved = 0;
                                        this._init(undefined, -2);
                                    }
                                    util.inherits(PromiseArray, Proxyable);
                                    PromiseArray.prototype.length = function () {
                                        return this._length;
                                    };
                                    PromiseArray.prototype.promise = function () {
                                        return this._promise;
                                    };
                                    PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
                                        var values = tryConvertToPromise(this._values, this._promise);
                                        if (values instanceof Promise) {
                                            values = values._target();
                                            var bitField = values._bitField;
                                            ;
                                            this._values = values;
                                            if (((bitField & 50397184) === 0)) {
                                                this._promise._setAsyncGuaranteed();
                                                return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
                                            }
                                            else if (((bitField & 33554432) !== 0)) {
                                                values = values._value();
                                            }
                                            else if (((bitField & 16777216) !== 0)) {
                                                return this._reject(values._reason());
                                            }
                                            else {
                                                return this._cancel();
                                            }
                                        }
                                        values = util.asArray(values);
                                        if (values === null) {
                                            var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                                            this._promise._rejectCallback(err, false);
                                            return;
                                        }
                                        if (values.length === 0) {
                                            if (resolveValueIfEmpty === -5) {
                                                this._resolveEmptyArray();
                                            }
                                            else {
                                                this._resolve(toResolutionValue(resolveValueIfEmpty));
                                            }
                                            return;
                                        }
                                        this._iterate(values);
                                    };
                                    PromiseArray.prototype._iterate = function (values) {
                                        var len = this.getActualLength(values.length);
                                        this._length = len;
                                        this._values = this.shouldCopyValues() ? new Array(len) : this._values;
                                        var result = this._promise;
                                        var isResolved = false;
                                        var bitField = null;
                                        for (var i = 0; i < len; ++i) {
                                            var maybePromise = tryConvertToPromise(values[i], result);
                                            if (maybePromise instanceof Promise) {
                                                maybePromise = maybePromise._target();
                                                bitField = maybePromise._bitField;
                                            }
                                            else {
                                                bitField = null;
                                            }
                                            if (isResolved) {
                                                if (bitField !== null) {
                                                    maybePromise.suppressUnhandledRejections();
                                                }
                                            }
                                            else if (bitField !== null) {
                                                if (((bitField & 50397184) === 0)) {
                                                    maybePromise._proxy(this, i);
                                                    this._values[i] = maybePromise;
                                                }
                                                else if (((bitField & 33554432) !== 0)) {
                                                    isResolved = this._promiseFulfilled(maybePromise._value(), i);
                                                }
                                                else if (((bitField & 16777216) !== 0)) {
                                                    isResolved = this._promiseRejected(maybePromise._reason(), i);
                                                }
                                                else {
                                                    isResolved = this._promiseCancelled(i);
                                                }
                                            }
                                            else {
                                                isResolved = this._promiseFulfilled(maybePromise, i);
                                            }
                                        }
                                        if (!isResolved)
                                            result._setAsyncGuaranteed();
                                    };
                                    PromiseArray.prototype._isResolved = function () {
                                        return this._values === null;
                                    };
                                    PromiseArray.prototype._resolve = function (value) {
                                        this._values = null;
                                        this._promise._fulfill(value);
                                    };
                                    PromiseArray.prototype._cancel = function () {
                                        if (this._isResolved() || !this._promise._isCancellable())
                                            return;
                                        this._values = null;
                                        this._promise._cancel();
                                    };
                                    PromiseArray.prototype._reject = function (reason) {
                                        this._values = null;
                                        this._promise._rejectCallback(reason, false);
                                    };
                                    PromiseArray.prototype._promiseFulfilled = function (value, index) {
                                        this._values[index] = value;
                                        var totalResolved = ++this._totalResolved;
                                        if (totalResolved >= this._length) {
                                            this._resolve(this._values);
                                            return true;
                                        }
                                        return false;
                                    };
                                    PromiseArray.prototype._promiseCancelled = function () {
                                        this._cancel();
                                        return true;
                                    };
                                    PromiseArray.prototype._promiseRejected = function (reason) {
                                        this._totalResolved++;
                                        this._reject(reason);
                                        return true;
                                    };
                                    PromiseArray.prototype._resultCancelled = function () {
                                        if (this._isResolved())
                                            return;
                                        var values = this._values;
                                        this._cancel();
                                        if (values instanceof Promise) {
                                            values.cancel();
                                        }
                                        else {
                                            for (var i = 0; i < values.length; ++i) {
                                                if (values[i] instanceof Promise) {
                                                    values[i].cancel();
                                                }
                                            }
                                        }
                                    };
                                    PromiseArray.prototype.shouldCopyValues = function () {
                                        return true;
                                    };
                                    PromiseArray.prototype.getActualLength = function (len) {
                                        return len;
                                    };
                                    return PromiseArray;
                                };
                            }, { "./util": 36 }], 24: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL) {
                                    var THIS = {};
                                    var util = _dereq_("./util");
                                    var nodebackForPromise = _dereq_("./nodeback");
                                    var withAppended = util.withAppended;
                                    var maybeWrapAsError = util.maybeWrapAsError;
                                    var canEvaluate = util.canEvaluate;
                                    var TypeError = _dereq_("./errors").TypeError;
                                    var defaultSuffix = "Async";
                                    var defaultPromisified = { __isPromisified__: true };
                                    var noCopyProps = [
                                        "arity", "length",
                                        "name",
                                        "arguments",
                                        "caller",
                                        "callee",
                                        "prototype",
                                        "__isPromisified__"
                                    ];
                                    var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");
                                    var defaultFilter = function (name) {
                                        return util.isIdentifier(name) &&
                                            name.charAt(0) !== "_" &&
                                            name !== "constructor";
                                    };
                                    function propsFilter(key) {
                                        return !noCopyPropsPattern.test(key);
                                    }
                                    function isPromisified(fn) {
                                        try {
                                            return fn.__isPromisified__ === true;
                                        }
                                        catch (e) {
                                            return false;
                                        }
                                    }
                                    function hasPromisified(obj, key, suffix) {
                                        var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
                                        return val ? isPromisified(val) : false;
                                    }
                                    function checkValid(ret, suffix, suffixRegexp) {
                                        for (var i = 0; i < ret.length; i += 2) {
                                            var key = ret[i];
                                            if (suffixRegexp.test(key)) {
                                                var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
                                                for (var j = 0; j < ret.length; j += 2) {
                                                    if (ret[j] === keyWithoutAsyncSuffix) {
                                                        throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                                                            .replace("%s", suffix));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
                                        var keys = util.inheritedDataKeys(obj);
                                        var ret = [];
                                        for (var i = 0; i < keys.length; ++i) {
                                            var key = keys[i];
                                            var value = obj[key];
                                            var passesDefaultFilter = filter === defaultFilter
                                                ? true : defaultFilter(key, value, obj);
                                            if (typeof value === "function" &&
                                                !isPromisified(value) &&
                                                !hasPromisified(obj, key, suffix) &&
                                                filter(key, value, obj, passesDefaultFilter)) {
                                                ret.push(key, value);
                                            }
                                        }
                                        checkValid(ret, suffix, suffixRegexp);
                                        return ret;
                                    }
                                    var escapeIdentRegex = function (str) {
                                        return str.replace(/([$])/, "\\$");
                                    };
                                    var makeNodePromisifiedEval;
                                    if (!true) {
                                        var switchCaseArgumentOrder = function (likelyArgumentCount) {
                                            var ret = [likelyArgumentCount];
                                            var min = Math.max(0, likelyArgumentCount - 1 - 3);
                                            for (var i = likelyArgumentCount - 1; i >= min; --i) {
                                                ret.push(i);
                                            }
                                            for (var i = likelyArgumentCount + 1; i <= 3; ++i) {
                                                ret.push(i);
                                            }
                                            return ret;
                                        };
                                        var argumentSequence = function (argumentCount) {
                                            return util.filledRange(argumentCount, "_arg", "");
                                        };
                                        var parameterDeclaration = function (parameterCount) {
                                            return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
                                        };
                                        var parameterCount = function (fn) {
                                            if (typeof fn.length === "number") {
                                                return Math.max(Math.min(fn.length, 1023 + 1), 0);
                                            }
                                            return 0;
                                        };
                                        makeNodePromisifiedEval =
                                            function (callback, receiver, originalName, fn, _, multiArgs) {
                                                var newParameterCount = Math.max(0, parameterCount(fn) - 1);
                                                var argumentOrder = switchCaseArgumentOrder(newParameterCount);
                                                var shouldProxyThis = typeof callback === "string" || receiver === THIS;
                                                function generateCallForArgumentCount(count) {
                                                    var args = argumentSequence(count).join(", ");
                                                    var comma = count > 0 ? ", " : "";
                                                    var ret;
                                                    if (shouldProxyThis) {
                                                        ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
                                                    }
                                                    else {
                                                        ret = receiver === undefined
                                                            ? "ret = callback({{args}}, nodeback); break;\n"
                                                            : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
                                                    }
                                                    return ret.replace("{{args}}", args).replace(", ", comma);
                                                }
                                                function generateArgumentSwitchCase() {
                                                    var ret = "";
                                                    for (var i = 0; i < argumentOrder.length; ++i) {
                                                        ret += "case " + argumentOrder[i] + ":" +
                                                            generateCallForArgumentCount(argumentOrder[i]);
                                                    }
                                                    ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", (shouldProxyThis
                                                        ? "ret = callback.apply(this, args);\n"
                                                        : "ret = callback.apply(receiver, args);\n"));
                                                    return ret;
                                                }
                                                var getFunctionCode = typeof callback === "string"
                                                    ? ("this != null ? this['" + callback + "'] : fn")
                                                    : "fn";
                                                var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
                                                    .replace("[GetFunctionCode]", getFunctionCode);
                                                body = body.replace("Parameters", parameterDeclaration(newParameterCount));
                                                return new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
                                            };
                                    }
                                    function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
                                        var defaultThis = (function () { return this; })();
                                        var method = callback;
                                        if (typeof method === "string") {
                                            callback = fn;
                                        }
                                        function promisified() {
                                            var _receiver = receiver;
                                            if (receiver === THIS)
                                                _receiver = this;
                                            var promise = new Promise(INTERNAL);
                                            promise._captureStackTrace();
                                            var cb = typeof method === "string" && this !== defaultThis
                                                ? this[method] : callback;
                                            var fn = nodebackForPromise(promise, multiArgs);
                                            try {
                                                cb.apply(_receiver, withAppended(arguments, fn));
                                            }
                                            catch (e) {
                                                promise._rejectCallback(maybeWrapAsError(e), true, true);
                                            }
                                            if (!promise._isFateSealed())
                                                promise._setAsyncGuaranteed();
                                            return promise;
                                        }
                                        util.notEnumerableProp(promisified, "__isPromisified__", true);
                                        return promisified;
                                    }
                                    var makeNodePromisified = canEvaluate
                                        ? makeNodePromisifiedEval
                                        : makeNodePromisifiedClosure;
                                    function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
                                        var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
                                        var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);
                                        for (var i = 0, len = methods.length; i < len; i += 2) {
                                            var key = methods[i];
                                            var fn = methods[i + 1];
                                            var promisifiedKey = key + suffix;
                                            if (promisifier === makeNodePromisified) {
                                                obj[promisifiedKey] =
                                                    makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                            }
                                            else {
                                                var promisified = promisifier(fn, function () {
                                                    return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                                });
                                                util.notEnumerableProp(promisified, "__isPromisified__", true);
                                                obj[promisifiedKey] = promisified;
                                            }
                                        }
                                        util.toFastProperties(obj);
                                        return obj;
                                    }
                                    function promisify(callback, receiver, multiArgs) {
                                        return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
                                    }
                                    Promise.promisify = function (fn, options) {
                                        if (typeof fn !== "function") {
                                            throw new TypeError("expecting a function but got " + util.classString(fn));
                                        }
                                        if (isPromisified(fn)) {
                                            return fn;
                                        }
                                        options = Object(options);
                                        var receiver = options.context === undefined ? THIS : options.context;
                                        var multiArgs = !!options.multiArgs;
                                        var ret = promisify(fn, receiver, multiArgs);
                                        util.copyDescriptors(fn, ret, propsFilter);
                                        return ret;
                                    };
                                    Promise.promisifyAll = function (target, options) {
                                        if (typeof target !== "function" && typeof target !== "object") {
                                            throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        options = Object(options);
                                        var multiArgs = !!options.multiArgs;
                                        var suffix = options.suffix;
                                        if (typeof suffix !== "string")
                                            suffix = defaultSuffix;
                                        var filter = options.filter;
                                        if (typeof filter !== "function")
                                            filter = defaultFilter;
                                        var promisifier = options.promisifier;
                                        if (typeof promisifier !== "function")
                                            promisifier = makeNodePromisified;
                                        if (!util.isIdentifier(suffix)) {
                                            throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        var keys = util.inheritedDataKeys(target);
                                        for (var i = 0; i < keys.length; ++i) {
                                            var value = target[keys[i]];
                                            if (keys[i] !== "constructor" &&
                                                util.isClass(value)) {
                                                promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
                                                promisifyAll(value, suffix, filter, promisifier, multiArgs);
                                            }
                                        }
                                        return promisifyAll(target, suffix, filter, promisifier, multiArgs);
                                    };
                                };
                            }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
                                    var util = _dereq_("./util");
                                    var isObject = util.isObject;
                                    var es5 = _dereq_("./es5");
                                    var Es6Map;
                                    if (typeof Map === "function")
                                        Es6Map = Map;
                                    var mapToEntries = (function () {
                                        var index = 0;
                                        var size = 0;
                                        function extractEntry(value, key) {
                                            this[index] = value;
                                            this[index + size] = key;
                                            index++;
                                        }
                                        return function mapToEntries(map) {
                                            size = map.size;
                                            index = 0;
                                            var ret = new Array(map.size * 2);
                                            map.forEach(extractEntry, ret);
                                            return ret;
                                        };
                                    })();
                                    var entriesToMap = function (entries) {
                                        var ret = new Es6Map();
                                        var length = entries.length / 2 | 0;
                                        for (var i = 0; i < length; ++i) {
                                            var key = entries[length + i];
                                            var value = entries[i];
                                            ret.set(key, value);
                                        }
                                        return ret;
                                    };
                                    function PropertiesPromiseArray(obj) {
                                        var isMap = false;
                                        var entries;
                                        if (Es6Map !== undefined && obj instanceof Es6Map) {
                                            entries = mapToEntries(obj);
                                            isMap = true;
                                        }
                                        else {
                                            var keys = es5.keys(obj);
                                            var len = keys.length;
                                            entries = new Array(len * 2);
                                            for (var i = 0; i < len; ++i) {
                                                var key = keys[i];
                                                entries[i] = obj[key];
                                                entries[i + len] = key;
                                            }
                                        }
                                        this.constructor$(entries);
                                        this._isMap = isMap;
                                        this._init$(undefined, isMap ? -6 : -3);
                                    }
                                    util.inherits(PropertiesPromiseArray, PromiseArray);
                                    PropertiesPromiseArray.prototype._init = function () { };
                                    PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
                                        this._values[index] = value;
                                        var totalResolved = ++this._totalResolved;
                                        if (totalResolved >= this._length) {
                                            var val;
                                            if (this._isMap) {
                                                val = entriesToMap(this._values);
                                            }
                                            else {
                                                val = {};
                                                var keyOffset = this.length();
                                                for (var i = 0, len = this.length(); i < len; ++i) {
                                                    val[this._values[i + keyOffset]] = this._values[i];
                                                }
                                            }
                                            this._resolve(val);
                                            return true;
                                        }
                                        return false;
                                    };
                                    PropertiesPromiseArray.prototype.shouldCopyValues = function () {
                                        return false;
                                    };
                                    PropertiesPromiseArray.prototype.getActualLength = function (len) {
                                        return len >> 1;
                                    };
                                    function props(promises) {
                                        var ret;
                                        var castValue = tryConvertToPromise(promises);
                                        if (!isObject(castValue)) {
                                            return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        else if (castValue instanceof Promise) {
                                            ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
                                        }
                                        else {
                                            ret = new PropertiesPromiseArray(castValue).promise();
                                        }
                                        if (castValue instanceof Promise) {
                                            ret._propagateFrom(castValue, 2);
                                        }
                                        return ret;
                                    }
                                    Promise.prototype.props = function () {
                                        return props(this);
                                    };
                                    Promise.props = function (promises) {
                                        return props(promises);
                                    };
                                };
                            }, { "./es5": 13, "./util": 36 }], 26: [function (_dereq_, module, exports) {
                                "use strict";
                                function arrayMove(src, srcIndex, dst, dstIndex, len) {
                                    for (var j = 0; j < len; ++j) {
                                        dst[j + dstIndex] = src[j + srcIndex];
                                        src[j + srcIndex] = void 0;
                                    }
                                }
                                function Queue(capacity) {
                                    this._capacity = capacity;
                                    this._length = 0;
                                    this._front = 0;
                                }
                                Queue.prototype._willBeOverCapacity = function (size) {
                                    return this._capacity < size;
                                };
                                Queue.prototype._pushOne = function (arg) {
                                    var length = this.length();
                                    this._checkCapacity(length + 1);
                                    var i = (this._front + length) & (this._capacity - 1);
                                    this[i] = arg;
                                    this._length = length + 1;
                                };
                                Queue.prototype.push = function (fn, receiver, arg) {
                                    var length = this.length() + 3;
                                    if (this._willBeOverCapacity(length)) {
                                        this._pushOne(fn);
                                        this._pushOne(receiver);
                                        this._pushOne(arg);
                                        return;
                                    }
                                    var j = this._front + length - 3;
                                    this._checkCapacity(length);
                                    var wrapMask = this._capacity - 1;
                                    this[(j + 0) & wrapMask] = fn;
                                    this[(j + 1) & wrapMask] = receiver;
                                    this[(j + 2) & wrapMask] = arg;
                                    this._length = length;
                                };
                                Queue.prototype.shift = function () {
                                    var front = this._front, ret = this[front];
                                    this[front] = undefined;
                                    this._front = (front + 1) & (this._capacity - 1);
                                    this._length--;
                                    return ret;
                                };
                                Queue.prototype.length = function () {
                                    return this._length;
                                };
                                Queue.prototype._checkCapacity = function (size) {
                                    if (this._capacity < size) {
                                        this._resizeTo(this._capacity << 1);
                                    }
                                };
                                Queue.prototype._resizeTo = function (capacity) {
                                    var oldCapacity = this._capacity;
                                    this._capacity = capacity;
                                    var front = this._front;
                                    var length = this._length;
                                    var moveItemsCount = (front + length) & (oldCapacity - 1);
                                    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
                                };
                                module.exports = Queue;
                            }, {}], 27: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
                                    var util = _dereq_("./util");
                                    var raceLater = function (promise) {
                                        return promise.then(function (array) {
                                            return race(array, promise);
                                        });
                                    };
                                    function race(promises, parent) {
                                        var maybePromise = tryConvertToPromise(promises);
                                        if (maybePromise instanceof Promise) {
                                            return raceLater(maybePromise);
                                        }
                                        else {
                                            promises = util.asArray(promises);
                                            if (promises === null)
                                                return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
                                        }
                                        var ret = new Promise(INTERNAL);
                                        if (parent !== undefined) {
                                            ret._propagateFrom(parent, 3);
                                        }
                                        var fulfill = ret._fulfill;
                                        var reject = ret._reject;
                                        for (var i = 0, len = promises.length; i < len; ++i) {
                                            var val = promises[i];
                                            if (val === undefined && !(i in promises)) {
                                                continue;
                                            }
                                            Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
                                        }
                                        return ret;
                                    }
                                    Promise.race = function (promises) {
                                        return race(promises, undefined);
                                    };
                                    Promise.prototype.race = function () {
                                        return race(this, undefined);
                                    };
                                };
                            }, { "./util": 36 }], 28: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                                    var util = _dereq_("./util");
                                    var tryCatch = util.tryCatch;
                                    function ReductionPromiseArray(promises, fn, initialValue, _each) {
                                        this.constructor$(promises);
                                        var context = Promise._getContext();
                                        this._fn = util.contextBind(context, fn);
                                        if (initialValue !== undefined) {
                                            initialValue = Promise.resolve(initialValue);
                                            initialValue._attachCancellationCallback(this);
                                        }
                                        this._initialValue = initialValue;
                                        this._currentCancellable = null;
                                        if (_each === INTERNAL) {
                                            this._eachValues = Array(this._length);
                                        }
                                        else if (_each === 0) {
                                            this._eachValues = null;
                                        }
                                        else {
                                            this._eachValues = undefined;
                                        }
                                        this._promise._captureStackTrace();
                                        this._init$(undefined, -5);
                                    }
                                    util.inherits(ReductionPromiseArray, PromiseArray);
                                    ReductionPromiseArray.prototype._gotAccum = function (accum) {
                                        if (this._eachValues !== undefined &&
                                            this._eachValues !== null &&
                                            accum !== INTERNAL) {
                                            this._eachValues.push(accum);
                                        }
                                    };
                                    ReductionPromiseArray.prototype._eachComplete = function (value) {
                                        if (this._eachValues !== null) {
                                            this._eachValues.push(value);
                                        }
                                        return this._eachValues;
                                    };
                                    ReductionPromiseArray.prototype._init = function () { };
                                    ReductionPromiseArray.prototype._resolveEmptyArray = function () {
                                        this._resolve(this._eachValues !== undefined ? this._eachValues
                                            : this._initialValue);
                                    };
                                    ReductionPromiseArray.prototype.shouldCopyValues = function () {
                                        return false;
                                    };
                                    ReductionPromiseArray.prototype._resolve = function (value) {
                                        this._promise._resolveCallback(value);
                                        this._values = null;
                                    };
                                    ReductionPromiseArray.prototype._resultCancelled = function (sender) {
                                        if (sender === this._initialValue)
                                            return this._cancel();
                                        if (this._isResolved())
                                            return;
                                        this._resultCancelled$();
                                        if (this._currentCancellable instanceof Promise) {
                                            this._currentCancellable.cancel();
                                        }
                                        if (this._initialValue instanceof Promise) {
                                            this._initialValue.cancel();
                                        }
                                    };
                                    ReductionPromiseArray.prototype._iterate = function (values) {
                                        this._values = values;
                                        var value;
                                        var i;
                                        var length = values.length;
                                        if (this._initialValue !== undefined) {
                                            value = this._initialValue;
                                            i = 0;
                                        }
                                        else {
                                            value = Promise.resolve(values[0]);
                                            i = 1;
                                        }
                                        this._currentCancellable = value;
                                        for (var j = i; j < length; ++j) {
                                            var maybePromise = values[j];
                                            if (maybePromise instanceof Promise) {
                                                maybePromise.suppressUnhandledRejections();
                                            }
                                        }
                                        if (!value.isRejected()) {
                                            for (; i < length; ++i) {
                                                var ctx = {
                                                    accum: null,
                                                    value: values[i],
                                                    index: i,
                                                    length: length,
                                                    array: this
                                                };
                                                value = value._then(gotAccum, undefined, undefined, ctx, undefined);
                                                if ((i & 127) === 0) {
                                                    value._setNoAsyncGuarantee();
                                                }
                                            }
                                        }
                                        if (this._eachValues !== undefined) {
                                            value = value
                                                ._then(this._eachComplete, undefined, undefined, this, undefined);
                                        }
                                        value._then(completed, completed, undefined, value, this);
                                    };
                                    Promise.prototype.reduce = function (fn, initialValue) {
                                        return reduce(this, fn, initialValue, null);
                                    };
                                    Promise.reduce = function (promises, fn, initialValue, _each) {
                                        return reduce(promises, fn, initialValue, _each);
                                    };
                                    function completed(valueOrReason, array) {
                                        if (this.isFulfilled()) {
                                            array._resolve(valueOrReason);
                                        }
                                        else {
                                            array._reject(valueOrReason);
                                        }
                                    }
                                    function reduce(promises, fn, initialValue, _each) {
                                        if (typeof fn !== "function") {
                                            return apiRejection("expecting a function but got " + util.classString(fn));
                                        }
                                        var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
                                        return array.promise();
                                    }
                                    function gotAccum(accum) {
                                        this.accum = accum;
                                        this.array._gotAccum(accum);
                                        var value = tryConvertToPromise(this.value, this.array._promise);
                                        if (value instanceof Promise) {
                                            this.array._currentCancellable = value;
                                            return value._then(gotValue, undefined, undefined, this, undefined);
                                        }
                                        else {
                                            return gotValue.call(this, value);
                                        }
                                    }
                                    function gotValue(value) {
                                        var array = this.array;
                                        var promise = array._promise;
                                        var fn = tryCatch(array._fn);
                                        promise._pushContext();
                                        var ret;
                                        if (array._eachValues !== undefined) {
                                            ret = fn.call(promise._boundValue(), value, this.index, this.length);
                                        }
                                        else {
                                            ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
                                        }
                                        if (ret instanceof Promise) {
                                            array._currentCancellable = ret;
                                        }
                                        var promiseCreated = promise._popContext();
                                        debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
                                        return ret;
                                    }
                                };
                            }, { "./util": 36 }], 29: [function (_dereq_, module, exports) {
                                "use strict";
                                var util = _dereq_("./util");
                                var schedule;
                                var noAsyncScheduler = function () {
                                    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                };
                                var NativePromise = util.getNativePromise();
                                if (util.isNode && typeof MutationObserver === "undefined") {
                                    var GlobalSetImmediate = commonjsGlobal.setImmediate;
                                    var ProcessNextTick = process.nextTick;
                                    schedule = util.isRecentNode
                                        ? function (fn) { GlobalSetImmediate.call(commonjsGlobal, fn); }
                                        : function (fn) { ProcessNextTick.call(process, fn); };
                                }
                                else if (typeof NativePromise === "function" &&
                                    typeof NativePromise.resolve === "function") {
                                    var nativePromise = NativePromise.resolve();
                                    schedule = function (fn) {
                                        nativePromise.then(fn);
                                    };
                                }
                                else if ((typeof MutationObserver !== "undefined") &&
                                    !(typeof window !== "undefined" &&
                                        window.navigator &&
                                        (window.navigator.standalone || window.cordova)) &&
                                    ("classList" in document.documentElement)) {
                                    schedule = (function () {
                                        var div = document.createElement("div");
                                        var opts = { attributes: true };
                                        var toggleScheduled = false;
                                        var div2 = document.createElement("div");
                                        var o2 = new MutationObserver(function () {
                                            div.classList.toggle("foo");
                                            toggleScheduled = false;
                                        });
                                        o2.observe(div2, opts);
                                        var scheduleToggle = function () {
                                            if (toggleScheduled)
                                                return;
                                            toggleScheduled = true;
                                            div2.classList.toggle("foo");
                                        };
                                        return function schedule(fn) {
                                            var o = new MutationObserver(function () {
                                                o.disconnect();
                                                fn();
                                            });
                                            o.observe(div, opts);
                                            scheduleToggle();
                                        };
                                    })();
                                }
                                else if (typeof setImmediate !== "undefined") {
                                    schedule = function (fn) {
                                        setImmediate(fn);
                                    };
                                }
                                else if (typeof setTimeout !== "undefined") {
                                    schedule = function (fn) {
                                        setTimeout(fn, 0);
                                    };
                                }
                                else {
                                    schedule = noAsyncScheduler;
                                }
                                module.exports = schedule;
                            }, { "./util": 36 }], 30: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports =
                                    function (Promise, PromiseArray, debug) {
                                        var PromiseInspection = Promise.PromiseInspection;
                                        var util = _dereq_("./util");
                                        function SettledPromiseArray(values) {
                                            this.constructor$(values);
                                        }
                                        util.inherits(SettledPromiseArray, PromiseArray);
                                        SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
                                            this._values[index] = inspection;
                                            var totalResolved = ++this._totalResolved;
                                            if (totalResolved >= this._length) {
                                                this._resolve(this._values);
                                                return true;
                                            }
                                            return false;
                                        };
                                        SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
                                            var ret = new PromiseInspection();
                                            ret._bitField = 33554432;
                                            ret._settledValueField = value;
                                            return this._promiseResolved(index, ret);
                                        };
                                        SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
                                            var ret = new PromiseInspection();
                                            ret._bitField = 16777216;
                                            ret._settledValueField = reason;
                                            return this._promiseResolved(index, ret);
                                        };
                                        Promise.settle = function (promises) {
                                            debug.deprecated(".settle()", ".reflect()");
                                            return new SettledPromiseArray(promises).promise();
                                        };
                                        Promise.allSettled = function (promises) {
                                            return new SettledPromiseArray(promises).promise();
                                        };
                                        Promise.prototype.settle = function () {
                                            return Promise.settle(this);
                                        };
                                    };
                            }, { "./util": 36 }], 31: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports =
                                    function (Promise, PromiseArray, apiRejection) {
                                        var util = _dereq_("./util");
                                        var RangeError = _dereq_("./errors").RangeError;
                                        var AggregateError = _dereq_("./errors").AggregateError;
                                        var isArray = util.isArray;
                                        var CANCELLATION = {};
                                        function SomePromiseArray(values) {
                                            this.constructor$(values);
                                            this._howMany = 0;
                                            this._unwrap = false;
                                            this._initialized = false;
                                        }
                                        util.inherits(SomePromiseArray, PromiseArray);
                                        SomePromiseArray.prototype._init = function () {
                                            if (!this._initialized) {
                                                return;
                                            }
                                            if (this._howMany === 0) {
                                                this._resolve([]);
                                                return;
                                            }
                                            this._init$(undefined, -5);
                                            var isArrayResolved = isArray(this._values);
                                            if (!this._isResolved() &&
                                                isArrayResolved &&
                                                this._howMany > this._canPossiblyFulfill()) {
                                                this._reject(this._getRangeError(this.length()));
                                            }
                                        };
                                        SomePromiseArray.prototype.init = function () {
                                            this._initialized = true;
                                            this._init();
                                        };
                                        SomePromiseArray.prototype.setUnwrap = function () {
                                            this._unwrap = true;
                                        };
                                        SomePromiseArray.prototype.howMany = function () {
                                            return this._howMany;
                                        };
                                        SomePromiseArray.prototype.setHowMany = function (count) {
                                            this._howMany = count;
                                        };
                                        SomePromiseArray.prototype._promiseFulfilled = function (value) {
                                            this._addFulfilled(value);
                                            if (this._fulfilled() === this.howMany()) {
                                                this._values.length = this.howMany();
                                                if (this.howMany() === 1 && this._unwrap) {
                                                    this._resolve(this._values[0]);
                                                }
                                                else {
                                                    this._resolve(this._values);
                                                }
                                                return true;
                                            }
                                            return false;
                                        };
                                        SomePromiseArray.prototype._promiseRejected = function (reason) {
                                            this._addRejected(reason);
                                            return this._checkOutcome();
                                        };
                                        SomePromiseArray.prototype._promiseCancelled = function () {
                                            if (this._values instanceof Promise || this._values == null) {
                                                return this._cancel();
                                            }
                                            this._addRejected(CANCELLATION);
                                            return this._checkOutcome();
                                        };
                                        SomePromiseArray.prototype._checkOutcome = function () {
                                            if (this.howMany() > this._canPossiblyFulfill()) {
                                                var e = new AggregateError();
                                                for (var i = this.length(); i < this._values.length; ++i) {
                                                    if (this._values[i] !== CANCELLATION) {
                                                        e.push(this._values[i]);
                                                    }
                                                }
                                                if (e.length > 0) {
                                                    this._reject(e);
                                                }
                                                else {
                                                    this._cancel();
                                                }
                                                return true;
                                            }
                                            return false;
                                        };
                                        SomePromiseArray.prototype._fulfilled = function () {
                                            return this._totalResolved;
                                        };
                                        SomePromiseArray.prototype._rejected = function () {
                                            return this._values.length - this.length();
                                        };
                                        SomePromiseArray.prototype._addRejected = function (reason) {
                                            this._values.push(reason);
                                        };
                                        SomePromiseArray.prototype._addFulfilled = function (value) {
                                            this._values[this._totalResolved++] = value;
                                        };
                                        SomePromiseArray.prototype._canPossiblyFulfill = function () {
                                            return this.length() - this._rejected();
                                        };
                                        SomePromiseArray.prototype._getRangeError = function (count) {
                                            var message = "Input array must contain at least " +
                                                this._howMany + " items but contains only " + count + " items";
                                            return new RangeError(message);
                                        };
                                        SomePromiseArray.prototype._resolveEmptyArray = function () {
                                            this._reject(this._getRangeError(0));
                                        };
                                        function some(promises, howMany) {
                                            if ((howMany | 0) !== howMany || howMany < 0) {
                                                return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                            }
                                            var ret = new SomePromiseArray(promises);
                                            var promise = ret.promise();
                                            ret.setHowMany(howMany);
                                            ret.init();
                                            return promise;
                                        }
                                        Promise.some = function (promises, howMany) {
                                            return some(promises, howMany);
                                        };
                                        Promise.prototype.some = function (howMany) {
                                            return some(this, howMany);
                                        };
                                        Promise._SomePromiseArray = SomePromiseArray;
                                    };
                            }, { "./errors": 12, "./util": 36 }], 32: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise) {
                                    function PromiseInspection(promise) {
                                        if (promise !== undefined) {
                                            promise = promise._target();
                                            this._bitField = promise._bitField;
                                            this._settledValueField = promise._isFateSealed()
                                                ? promise._settledValue() : undefined;
                                        }
                                        else {
                                            this._bitField = 0;
                                            this._settledValueField = undefined;
                                        }
                                    }
                                    PromiseInspection.prototype._settledValue = function () {
                                        return this._settledValueField;
                                    };
                                    var value = PromiseInspection.prototype.value = function () {
                                        if (!this.isFulfilled()) {
                                            throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                        }
                                        return this._settledValue();
                                    };
                                    var reason = PromiseInspection.prototype.error =
                                        PromiseInspection.prototype.reason = function () {
                                            if (!this.isRejected()) {
                                                throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                            }
                                            return this._settledValue();
                                        };
                                    var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
                                        return (this._bitField & 33554432) !== 0;
                                    };
                                    var isRejected = PromiseInspection.prototype.isRejected = function () {
                                        return (this._bitField & 16777216) !== 0;
                                    };
                                    var isPending = PromiseInspection.prototype.isPending = function () {
                                        return (this._bitField & 50397184) === 0;
                                    };
                                    var isResolved = PromiseInspection.prototype.isResolved = function () {
                                        return (this._bitField & 50331648) !== 0;
                                    };
                                    PromiseInspection.prototype.isCancelled = function () {
                                        return (this._bitField & 8454144) !== 0;
                                    };
                                    Promise.prototype.__isCancelled = function () {
                                        return (this._bitField & 65536) === 65536;
                                    };
                                    Promise.prototype._isCancelled = function () {
                                        return this._target().__isCancelled();
                                    };
                                    Promise.prototype.isCancelled = function () {
                                        return (this._target()._bitField & 8454144) !== 0;
                                    };
                                    Promise.prototype.isPending = function () {
                                        return isPending.call(this._target());
                                    };
                                    Promise.prototype.isRejected = function () {
                                        return isRejected.call(this._target());
                                    };
                                    Promise.prototype.isFulfilled = function () {
                                        return isFulfilled.call(this._target());
                                    };
                                    Promise.prototype.isResolved = function () {
                                        return isResolved.call(this._target());
                                    };
                                    Promise.prototype.value = function () {
                                        return value.call(this._target());
                                    };
                                    Promise.prototype.reason = function () {
                                        var target = this._target();
                                        target._unsetRejectionIsUnhandled();
                                        return reason.call(target);
                                    };
                                    Promise.prototype._value = function () {
                                        return this._settledValue();
                                    };
                                    Promise.prototype._reason = function () {
                                        this._unsetRejectionIsUnhandled();
                                        return this._settledValue();
                                    };
                                    Promise.PromiseInspection = PromiseInspection;
                                };
                            }, {}], 33: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL) {
                                    var util = _dereq_("./util");
                                    var errorObj = util.errorObj;
                                    var isObject = util.isObject;
                                    function tryConvertToPromise(obj, context) {
                                        if (isObject(obj)) {
                                            if (obj instanceof Promise)
                                                return obj;
                                            var then = getThen(obj);
                                            if (then === errorObj) {
                                                if (context)
                                                    context._pushContext();
                                                var ret = Promise.reject(then.e);
                                                if (context)
                                                    context._popContext();
                                                return ret;
                                            }
                                            else if (typeof then === "function") {
                                                if (isAnyBluebirdPromise(obj)) {
                                                    var ret = new Promise(INTERNAL);
                                                    obj._then(ret._fulfill, ret._reject, undefined, ret, null);
                                                    return ret;
                                                }
                                                return doThenable(obj, then, context);
                                            }
                                        }
                                        return obj;
                                    }
                                    function doGetThen(obj) {
                                        return obj.then;
                                    }
                                    function getThen(obj) {
                                        try {
                                            return doGetThen(obj);
                                        }
                                        catch (e) {
                                            errorObj.e = e;
                                            return errorObj;
                                        }
                                    }
                                    var hasProp = {}.hasOwnProperty;
                                    function isAnyBluebirdPromise(obj) {
                                        try {
                                            return hasProp.call(obj, "_promise0");
                                        }
                                        catch (e) {
                                            return false;
                                        }
                                    }
                                    function doThenable(x, then, context) {
                                        var promise = new Promise(INTERNAL);
                                        var ret = promise;
                                        if (context)
                                            context._pushContext();
                                        promise._captureStackTrace();
                                        if (context)
                                            context._popContext();
                                        var synchronous = true;
                                        var result = util.tryCatch(then).call(x, resolve, reject);
                                        synchronous = false;
                                        if (promise && result === errorObj) {
                                            promise._rejectCallback(result.e, true, true);
                                            promise = null;
                                        }
                                        function resolve(value) {
                                            if (!promise)
                                                return;
                                            promise._resolveCallback(value);
                                            promise = null;
                                        }
                                        function reject(reason) {
                                            if (!promise)
                                                return;
                                            promise._rejectCallback(reason, synchronous, true);
                                            promise = null;
                                        }
                                        return ret;
                                    }
                                    return tryConvertToPromise;
                                };
                            }, { "./util": 36 }], 34: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, INTERNAL, debug) {
                                    var util = _dereq_("./util");
                                    var TimeoutError = Promise.TimeoutError;
                                    function HandleWrapper(handle) {
                                        this.handle = handle;
                                    }
                                    HandleWrapper.prototype._resultCancelled = function () {
                                        clearTimeout(this.handle);
                                    };
                                    var afterValue = function (value) { return delay(+this).thenReturn(value); };
                                    var delay = Promise.delay = function (ms, value) {
                                        var ret;
                                        var handle;
                                        if (value !== undefined) {
                                            ret = Promise.resolve(value)
                                                ._then(afterValue, null, null, ms, undefined);
                                            if (debug.cancellation() && value instanceof Promise) {
                                                ret._setOnCancel(value);
                                            }
                                        }
                                        else {
                                            ret = new Promise(INTERNAL);
                                            handle = setTimeout(function () { ret._fulfill(); }, +ms);
                                            if (debug.cancellation()) {
                                                ret._setOnCancel(new HandleWrapper(handle));
                                            }
                                            ret._captureStackTrace();
                                        }
                                        ret._setAsyncGuaranteed();
                                        return ret;
                                    };
                                    Promise.prototype.delay = function (ms) {
                                        return delay(ms, this);
                                    };
                                    var afterTimeout = function (promise, message, parent) {
                                        var err;
                                        if (typeof message !== "string") {
                                            if (message instanceof Error) {
                                                err = message;
                                            }
                                            else {
                                                err = new TimeoutError("operation timed out");
                                            }
                                        }
                                        else {
                                            err = new TimeoutError(message);
                                        }
                                        util.markAsOriginatingFromRejection(err);
                                        promise._attachExtraTrace(err);
                                        promise._reject(err);
                                        if (parent != null) {
                                            parent.cancel();
                                        }
                                    };
                                    function successClear(value) {
                                        clearTimeout(this.handle);
                                        return value;
                                    }
                                    function failureClear(reason) {
                                        clearTimeout(this.handle);
                                        throw reason;
                                    }
                                    Promise.prototype.timeout = function (ms, message) {
                                        ms = +ms;
                                        var ret, parent;
                                        var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                                            if (ret.isPending()) {
                                                afterTimeout(ret, message, parent);
                                            }
                                        }, ms));
                                        if (debug.cancellation()) {
                                            parent = this.then();
                                            ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                            ret._setOnCancel(handleWrapper);
                                        }
                                        else {
                                            ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                        }
                                        return ret;
                                    };
                                };
                            }, { "./util": 36 }], 35: [function (_dereq_, module, exports) {
                                "use strict";
                                module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
                                    var util = _dereq_("./util");
                                    var TypeError = _dereq_("./errors").TypeError;
                                    var inherits = _dereq_("./util").inherits;
                                    var errorObj = util.errorObj;
                                    var tryCatch = util.tryCatch;
                                    var NULL = {};
                                    function thrower(e) {
                                        setTimeout(function () { throw e; }, 0);
                                    }
                                    function castPreservingDisposable(thenable) {
                                        var maybePromise = tryConvertToPromise(thenable);
                                        if (maybePromise !== thenable &&
                                            typeof thenable._isDisposable === "function" &&
                                            typeof thenable._getDisposer === "function" &&
                                            thenable._isDisposable()) {
                                            maybePromise._setDisposable(thenable._getDisposer());
                                        }
                                        return maybePromise;
                                    }
                                    function dispose(resources, inspection) {
                                        var i = 0;
                                        var len = resources.length;
                                        var ret = new Promise(INTERNAL);
                                        function iterator() {
                                            if (i >= len)
                                                return ret._fulfill();
                                            var maybePromise = castPreservingDisposable(resources[i++]);
                                            if (maybePromise instanceof Promise &&
                                                maybePromise._isDisposable()) {
                                                try {
                                                    maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                                                }
                                                catch (e) {
                                                    return thrower(e);
                                                }
                                                if (maybePromise instanceof Promise) {
                                                    return maybePromise._then(iterator, thrower, null, null, null);
                                                }
                                            }
                                            iterator();
                                        }
                                        iterator();
                                        return ret;
                                    }
                                    function Disposer(data, promise, context) {
                                        this._data = data;
                                        this._promise = promise;
                                        this._context = context;
                                    }
                                    Disposer.prototype.data = function () {
                                        return this._data;
                                    };
                                    Disposer.prototype.promise = function () {
                                        return this._promise;
                                    };
                                    Disposer.prototype.resource = function () {
                                        if (this.promise().isFulfilled()) {
                                            return this.promise().value();
                                        }
                                        return NULL;
                                    };
                                    Disposer.prototype.tryDispose = function (inspection) {
                                        var resource = this.resource();
                                        var context = this._context;
                                        if (context !== undefined)
                                            context._pushContext();
                                        var ret = resource !== NULL
                                            ? this.doDispose(resource, inspection) : null;
                                        if (context !== undefined)
                                            context._popContext();
                                        this._promise._unsetDisposable();
                                        this._data = null;
                                        return ret;
                                    };
                                    Disposer.isDisposer = function (d) {
                                        return (d != null &&
                                            typeof d.resource === "function" &&
                                            typeof d.tryDispose === "function");
                                    };
                                    function FunctionDisposer(fn, promise, context) {
                                        this.constructor$(fn, promise, context);
                                    }
                                    inherits(FunctionDisposer, Disposer);
                                    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
                                        var fn = this.data();
                                        return fn.call(resource, resource, inspection);
                                    };
                                    function maybeUnwrapDisposer(value) {
                                        if (Disposer.isDisposer(value)) {
                                            this.resources[this.index]._setDisposable(value);
                                            return value.promise();
                                        }
                                        return value;
                                    }
                                    function ResourceList(length) {
                                        this.length = length;
                                        this.promise = null;
                                        this[length - 1] = null;
                                    }
                                    ResourceList.prototype._resultCancelled = function () {
                                        var len = this.length;
                                        for (var i = 0; i < len; ++i) {
                                            var item = this[i];
                                            if (item instanceof Promise) {
                                                item.cancel();
                                            }
                                        }
                                    };
                                    Promise.using = function () {
                                        var len = arguments.length;
                                        if (len < 2)
                                            return apiRejection("you must pass at least 2 arguments to Promise.using");
                                        var fn = arguments[len - 1];
                                        if (typeof fn !== "function") {
                                            return apiRejection("expecting a function but got " + util.classString(fn));
                                        }
                                        var input;
                                        var spreadArgs = true;
                                        if (len === 2 && Array.isArray(arguments[0])) {
                                            input = arguments[0];
                                            len = input.length;
                                            spreadArgs = false;
                                        }
                                        else {
                                            input = arguments;
                                            len--;
                                        }
                                        var resources = new ResourceList(len);
                                        for (var i = 0; i < len; ++i) {
                                            var resource = input[i];
                                            if (Disposer.isDisposer(resource)) {
                                                var disposer = resource;
                                                resource = resource.promise();
                                                resource._setDisposable(disposer);
                                            }
                                            else {
                                                var maybePromise = tryConvertToPromise(resource);
                                                if (maybePromise instanceof Promise) {
                                                    resource =
                                                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                                                            resources: resources,
                                                            index: i
                                                        }, undefined);
                                                }
                                            }
                                            resources[i] = resource;
                                        }
                                        var reflectedResources = new Array(resources.length);
                                        for (var i = 0; i < reflectedResources.length; ++i) {
                                            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
                                        }
                                        var resultPromise = Promise.all(reflectedResources)
                                            .then(function (inspections) {
                                            for (var i = 0; i < inspections.length; ++i) {
                                                var inspection = inspections[i];
                                                if (inspection.isRejected()) {
                                                    errorObj.e = inspection.error();
                                                    return errorObj;
                                                }
                                                else if (!inspection.isFulfilled()) {
                                                    resultPromise.cancel();
                                                    return;
                                                }
                                                inspections[i] = inspection.value();
                                            }
                                            promise._pushContext();
                                            fn = tryCatch(fn);
                                            var ret = spreadArgs
                                                ? fn.apply(undefined, inspections) : fn(inspections);
                                            var promiseCreated = promise._popContext();
                                            debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
                                            return ret;
                                        });
                                        var promise = resultPromise.lastly(function () {
                                            var inspection = new Promise.PromiseInspection(resultPromise);
                                            return dispose(resources, inspection);
                                        });
                                        resources.promise = promise;
                                        promise._setOnCancel(resources);
                                        return promise;
                                    };
                                    Promise.prototype._setDisposable = function (disposer) {
                                        this._bitField = this._bitField | 131072;
                                        this._disposer = disposer;
                                    };
                                    Promise.prototype._isDisposable = function () {
                                        return (this._bitField & 131072) > 0;
                                    };
                                    Promise.prototype._getDisposer = function () {
                                        return this._disposer;
                                    };
                                    Promise.prototype._unsetDisposable = function () {
                                        this._bitField = this._bitField & (~131072);
                                        this._disposer = undefined;
                                    };
                                    Promise.prototype.disposer = function (fn) {
                                        if (typeof fn === "function") {
                                            return new FunctionDisposer(fn, this, createContext());
                                        }
                                        throw new TypeError();
                                    };
                                };
                            }, { "./errors": 12, "./util": 36 }], 36: [function (_dereq_, module, exports) {
                                "use strict";
                                var es5 = _dereq_("./es5");
                                var canEvaluate = typeof navigator == "undefined";
                                var errorObj = { e: {} };
                                var tryCatchTarget;
                                var globalObject = typeof self !== "undefined" ? self :
                                    typeof window !== "undefined" ? window :
                                        typeof commonjsGlobal !== "undefined" ? commonjsGlobal :
                                            this !== undefined ? this : null;
                                function tryCatcher() {
                                    try {
                                        var target = tryCatchTarget;
                                        tryCatchTarget = null;
                                        return target.apply(this, arguments);
                                    }
                                    catch (e) {
                                        errorObj.e = e;
                                        return errorObj;
                                    }
                                }
                                function tryCatch(fn) {
                                    tryCatchTarget = fn;
                                    return tryCatcher;
                                }
                                var inherits = function (Child, Parent) {
                                    var hasProp = {}.hasOwnProperty;
                                    function T() {
                                        this.constructor = Child;
                                        this.constructor$ = Parent;
                                        for (var propertyName in Parent.prototype) {
                                            if (hasProp.call(Parent.prototype, propertyName) &&
                                                propertyName.charAt(propertyName.length - 1) !== "$") {
                                                this[propertyName + "$"] = Parent.prototype[propertyName];
                                            }
                                        }
                                    }
                                    T.prototype = Parent.prototype;
                                    Child.prototype = new T();
                                    return Child.prototype;
                                };
                                function isPrimitive(val) {
                                    return val == null || val === true || val === false ||
                                        typeof val === "string" || typeof val === "number";
                                }
                                function isObject(value) {
                                    return typeof value === "function" ||
                                        typeof value === "object" && value !== null;
                                }
                                function maybeWrapAsError(maybeError) {
                                    if (!isPrimitive(maybeError))
                                        return maybeError;
                                    return new Error(safeToString(maybeError));
                                }
                                function withAppended(target, appendee) {
                                    var len = target.length;
                                    var ret = new Array(len + 1);
                                    var i;
                                    for (i = 0; i < len; ++i) {
                                        ret[i] = target[i];
                                    }
                                    ret[i] = appendee;
                                    return ret;
                                }
                                function getDataPropertyOrDefault(obj, key, defaultValue) {
                                    if (es5.isES5) {
                                        var desc = Object.getOwnPropertyDescriptor(obj, key);
                                        if (desc != null) {
                                            return desc.get == null && desc.set == null
                                                ? desc.value
                                                : defaultValue;
                                        }
                                    }
                                    else {
                                        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
                                    }
                                }
                                function notEnumerableProp(obj, name, value) {
                                    if (isPrimitive(obj))
                                        return obj;
                                    var descriptor = {
                                        value: value,
                                        configurable: true,
                                        enumerable: false,
                                        writable: true
                                    };
                                    es5.defineProperty(obj, name, descriptor);
                                    return obj;
                                }
                                function thrower(r) {
                                    throw r;
                                }
                                var inheritedDataKeys = (function () {
                                    var excludedPrototypes = [
                                        Array.prototype,
                                        Object.prototype,
                                        Function.prototype
                                    ];
                                    var isExcludedProto = function (val) {
                                        for (var i = 0; i < excludedPrototypes.length; ++i) {
                                            if (excludedPrototypes[i] === val) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    };
                                    if (es5.isES5) {
                                        var getKeys = Object.getOwnPropertyNames;
                                        return function (obj) {
                                            var ret = [];
                                            var visitedKeys = Object.create(null);
                                            while (obj != null && !isExcludedProto(obj)) {
                                                var keys;
                                                try {
                                                    keys = getKeys(obj);
                                                }
                                                catch (e) {
                                                    return ret;
                                                }
                                                for (var i = 0; i < keys.length; ++i) {
                                                    var key = keys[i];
                                                    if (visitedKeys[key])
                                                        continue;
                                                    visitedKeys[key] = true;
                                                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                                                    if (desc != null && desc.get == null && desc.set == null) {
                                                        ret.push(key);
                                                    }
                                                }
                                                obj = es5.getPrototypeOf(obj);
                                            }
                                            return ret;
                                        };
                                    }
                                    else {
                                        var hasProp = {}.hasOwnProperty;
                                        return function (obj) {
                                            if (isExcludedProto(obj))
                                                return [];
                                            var ret = [];
                                            /*jshint forin:false */
                                            enumeration: for (var key in obj) {
                                                if (hasProp.call(obj, key)) {
                                                    ret.push(key);
                                                }
                                                else {
                                                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                                                        if (hasProp.call(excludedPrototypes[i], key)) {
                                                            continue enumeration;
                                                        }
                                                    }
                                                    ret.push(key);
                                                }
                                            }
                                            return ret;
                                        };
                                    }
                                })();
                                var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
                                function isClass(fn) {
                                    try {
                                        if (typeof fn === "function") {
                                            var keys = es5.names(fn.prototype);
                                            var hasMethods = es5.isES5 && keys.length > 1;
                                            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                                                !(keys.length === 1 && keys[0] === "constructor");
                                            var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;
                                            if (hasMethods || hasMethodsOtherThanConstructor ||
                                                hasThisAssignmentAndStaticMethods) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    }
                                    catch (e) {
                                        return false;
                                    }
                                }
                                function toFastProperties(obj) {
                                    /*jshint -W027,-W055,-W031*/
                                    function FakeConstructor() { }
                                    FakeConstructor.prototype = obj;
                                    var receiver = new FakeConstructor();
                                    function ic() {
                                        return typeof receiver.foo;
                                    }
                                    ic();
                                    ic();
                                    return obj;
                                    eval(obj);
                                }
                                var rident = /^[a-z$_][a-z$_0-9]*$/i;
                                function isIdentifier(str) {
                                    return rident.test(str);
                                }
                                function filledRange(count, prefix, suffix) {
                                    var ret = new Array(count);
                                    for (var i = 0; i < count; ++i) {
                                        ret[i] = prefix + i + suffix;
                                    }
                                    return ret;
                                }
                                function safeToString(obj) {
                                    try {
                                        return obj + "";
                                    }
                                    catch (e) {
                                        return "[no string representation]";
                                    }
                                }
                                function isError(obj) {
                                    return obj instanceof Error ||
                                        (obj !== null &&
                                            typeof obj === "object" &&
                                            typeof obj.message === "string" &&
                                            typeof obj.name === "string");
                                }
                                function markAsOriginatingFromRejection(e) {
                                    try {
                                        notEnumerableProp(e, "isOperational", true);
                                    }
                                    catch (ignore) { }
                                }
                                function originatesFromRejection(e) {
                                    if (e == null)
                                        return false;
                                    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
                                        e["isOperational"] === true);
                                }
                                function canAttachTrace(obj) {
                                    return isError(obj) && es5.propertyIsWritable(obj, "stack");
                                }
                                var ensureErrorObject = (function () {
                                    if (!("stack" in new Error())) {
                                        return function (value) {
                                            if (canAttachTrace(value))
                                                return value;
                                            try {
                                                throw new Error(safeToString(value));
                                            }
                                            catch (err) {
                                                return err;
                                            }
                                        };
                                    }
                                    else {
                                        return function (value) {
                                            if (canAttachTrace(value))
                                                return value;
                                            return new Error(safeToString(value));
                                        };
                                    }
                                })();
                                function classString(obj) {
                                    return {}.toString.call(obj);
                                }
                                function copyDescriptors(from, to, filter) {
                                    var keys = es5.names(from);
                                    for (var i = 0; i < keys.length; ++i) {
                                        var key = keys[i];
                                        if (filter(key)) {
                                            try {
                                                es5.defineProperty(to, key, es5.getDescriptor(from, key));
                                            }
                                            catch (ignore) { }
                                        }
                                    }
                                }
                                var asArray = function (v) {
                                    if (es5.isArray(v)) {
                                        return v;
                                    }
                                    return null;
                                };
                                if (typeof Symbol !== "undefined" && Symbol.iterator) {
                                    var ArrayFrom = typeof Array.from === "function" ? function (v) {
                                        return Array.from(v);
                                    } : function (v) {
                                        var ret = [];
                                        var it = v[Symbol.iterator]();
                                        var itResult;
                                        while (!((itResult = it.next()).done)) {
                                            ret.push(itResult.value);
                                        }
                                        return ret;
                                    };
                                    asArray = function (v) {
                                        if (es5.isArray(v)) {
                                            return v;
                                        }
                                        else if (v != null && typeof v[Symbol.iterator] === "function") {
                                            return ArrayFrom(v);
                                        }
                                        return null;
                                    };
                                }
                                var isNode = typeof process !== "undefined" &&
                                    classString(process).toLowerCase() === "[object process]";
                                var hasEnvVariables = typeof process !== "undefined" &&
                                    typeof process.env !== "undefined";
                                function env(key) {
                                    return hasEnvVariables ? process.env[key] : undefined;
                                }
                                function getNativePromise() {
                                    if (typeof Promise === "function") {
                                        try {
                                            var promise = new Promise(function () { });
                                            if (classString(promise) === "[object Promise]") {
                                                return Promise;
                                            }
                                        }
                                        catch (e) { }
                                    }
                                }
                                var reflectHandler;
                                function contextBind(ctx, cb) {
                                    if (ctx === null ||
                                        typeof cb !== "function" ||
                                        cb === reflectHandler) {
                                        return cb;
                                    }
                                    if (ctx.domain !== null) {
                                        cb = ctx.domain.bind(cb);
                                    }
                                    var async = ctx.async;
                                    if (async !== null) {
                                        var old = cb;
                                        cb = function () {
                                            var args = (new Array(2)).concat([].slice.call(arguments));
                                            ;
                                            args[0] = old;
                                            args[1] = this;
                                            return async.runInAsyncScope.apply(async, args);
                                        };
                                    }
                                    return cb;
                                }
                                var ret = {
                                    setReflectHandler: function (fn) {
                                        reflectHandler = fn;
                                    },
                                    isClass: isClass,
                                    isIdentifier: isIdentifier,
                                    inheritedDataKeys: inheritedDataKeys,
                                    getDataPropertyOrDefault: getDataPropertyOrDefault,
                                    thrower: thrower,
                                    isArray: es5.isArray,
                                    asArray: asArray,
                                    notEnumerableProp: notEnumerableProp,
                                    isPrimitive: isPrimitive,
                                    isObject: isObject,
                                    isError: isError,
                                    canEvaluate: canEvaluate,
                                    errorObj: errorObj,
                                    tryCatch: tryCatch,
                                    inherits: inherits,
                                    withAppended: withAppended,
                                    maybeWrapAsError: maybeWrapAsError,
                                    toFastProperties: toFastProperties,
                                    filledRange: filledRange,
                                    toString: safeToString,
                                    canAttachTrace: canAttachTrace,
                                    ensureErrorObject: ensureErrorObject,
                                    originatesFromRejection: originatesFromRejection,
                                    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                                    classString: classString,
                                    copyDescriptors: copyDescriptors,
                                    isNode: isNode,
                                    hasEnvVariables: hasEnvVariables,
                                    env: env,
                                    global: globalObject,
                                    getNativePromise: getNativePromise,
                                    contextBind: contextBind
                                };
                                ret.isRecentNode = ret.isNode && (function () {
                                    var version;
                                    if (process.versions && process.versions.node) {
                                        version = process.versions.node.split(".").map(Number);
                                    }
                                    else if (process.version) {
                                        version = process.version.split(".").map(Number);
                                    }
                                    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
                                })();
                                ret.nodeSupportsAsyncResource = ret.isNode && (function () {
                                    var supportsAsync = false;
                                    try {
                                        var res = _dereq_("async_hooks").AsyncResource;
                                        supportsAsync = typeof res.prototype.runInAsyncScope === "function";
                                    }
                                    catch (e) {
                                        supportsAsync = false;
                                    }
                                    return supportsAsync;
                                })();
                                if (ret.isNode)
                                    ret.toFastProperties(process);
                                try {
                                    throw new Error();
                                }
                                catch (e) {
                                    ret.lastLineError = e;
                                }
                                module.exports = ret;
                            }, { "./es5": 13, "async_hooks": undefined }] }, {}, [4])(4);
                });
                ;
                if (typeof window !== 'undefined' && window !== null) {
                    window.P = window.Promise;
                }
                else if (typeof self !== 'undefined' && self !== null) {
                    self.P = self.Promise;
                }
            });
            var Service_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                var _axios = _interopRequireDefault(axios$1);
                var _bluebird = _interopRequireDefault(bluebird);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var Service = 
                /*#__PURE__*/
                function () {
                    /**
                     * @constructor Service
                     * @summary Service abstraction.
                     * @param {Object} [config={}] - Additional configurations to set for all calls. See axios documentation for list of available values.
                     */
                    function Service() {
                        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        _classCallCheck(this, Service);
                        this._config = config;
                    }
                    /**
                     * @summary Call endpoint with GET request.
                     * @memberOf Service
                     * @protected
                     * @instance
                     * @param {String} endpoint - Target endpoint address
                     * @param {Object} [payload={}] - Payload to pass with request
                     * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                     */
                    _createClass(Service, [{
                            key: "$get",
                            value: function $get(endpoint) {
                                var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                                var params = Object.keys(payload).length < 1 ? {} : {
                                    params: payload
                                };
                                return _bluebird["default"].resolve(_axios["default"].get(endpoint, Object.assign(params, Object.assign(this._config, config))));
                            }
                            /**
                             * @summary Call endpoint with POST request.
                             * @memberOf Service
                             * @protected
                             * @instance
                             * @param {String} endpoint - Target endpoint address
                             * @param {Object} [payload={}] - Payload to pass with request
                             * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                             */
                        }, {
                            key: "$post",
                            value: function $post(endpoint) {
                                var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                                return _bluebird["default"].resolve(_axios["default"].post(endpoint, payload, Object.assign(this._config, config)));
                            }
                            /**
                             * @summary Call endpoint with PUT request.
                             * @memberOf Service
                             * @protected
                             * @instance
                             * @param {String} endpoint - Target endpoint address
                             * @param {Object} [payload={}] - Payload to pass with request
                             * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                             */
                        }, {
                            key: "$put",
                            value: function $put(endpoint) {
                                var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                                return _bluebird["default"].resolve(_axios["default"].put(endpoint, payload, Object.assign(this._config, config)));
                            }
                            /**
                             * @summary Call endpoint with PATCH request.
                             * @memberOf Service
                             * @protected
                             * @instance
                             * @param {String} endpoint - Target endpoint address
                             * @param {Object} [payload={}] - Payload to pass with request
                             * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                             */
                        }, {
                            key: "$patch",
                            value: function $patch(endpoint) {
                                var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                                return _bluebird["default"].resolve(_axios["default"].patch(endpoint, payload, Object.assign(this._config, config)));
                            }
                            /**
                             * @summary Call endpoint with DELETE request.
                             * @memberOf Service
                             * @protected
                             * @instance
                             * @param {String} endpoint - Target endpoint address
                             * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                             */
                        }, {
                            key: "$delete",
                            value: function $delete(endpoint) {
                                var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                return _bluebird["default"].resolve(_axios["default"]["delete"](endpoint, Object.assign(this._config, config)));
                            }
                            /**
                             * @summary Call endpoint with HEAD request.
                             * @memberOf Service
                             * @protected
                             * @instance
                             * @param {String} endpoint - Target endpoint address
                             * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                             */
                        }, {
                            key: "$head",
                            value: function $head(endpoint) {
                                var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                return _bluebird["default"].resolve(_axios["default"].head(endpoint, Object.assign(this._config, config)));
                            }
                            /**
                             * @summary Call endpoint with OPTIONS request.
                             * @memberOf Service
                             * @protected
                             * @instance
                             * @param {String} endpoint - Target endpoint address
                             * @param {Object} [config={}] - Additional configurations to set for this call. See axios documentation for list of available values.
                             */
                        }, {
                            key: "$options",
                            value: function $options(endpoint) {
                                var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                return _bluebird["default"].resolve(_axios["default"].options(endpoint, Object.assign(this._config, config)));
                            }
                            /**
                             * @summary Call an array of endpoints in parallel.
                             * @memberOf Service
                             * @public
                             * @static
                             * @param {Array} operations
                             */
                        }], [{
                            key: "all",
                            value: function all(operations) {
                                return _bluebird["default"].all(operations);
                            }
                            /**
                             * @summary Set an HTTP header for every and all instances of Service in the target application context.
                             * @memberOf Service
                             * @public
                             * @static
                             * @param {String} key - Header key
                             * @param {String} value - Header value
                             */
                        }, {
                            key: "setGlobalHeader",
                            value: function setGlobalHeader(key, value) {
                                _axios["default"].defaults.headers.common[key] = value;
                            }
                            /**
                             * @summary Unset an HTTP header for every and all instances of Service in the target application context.
                             * @memberOf Service
                             * @public
                             * @static
                             * @param {string} key - Header key
                             */
                        }, {
                            key: "unsetGlobalHeader",
                            value: function unsetGlobalHeader(key) {
                                delete _axios["default"].defaults.headers.common[key];
                            }
                            /**
                             * @summary Expose access to axios for interacting with any features not exposed through the Service API.
                             * @returns {axios}
                             */
                        }, {
                            key: "axios",
                            get: function get() {
                                return _axios["default"];
                            }
                        }]);
                    return Service;
                }();
                exports["default"] = Service;
            });
            var Service = unwrapExports(Service_1);
            var specification = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.FalseSpecification = exports.TrueSpecification = exports.NotSpecification = exports.XorSpecification = exports.OrSpecification = exports.AndSpecification = exports["default"] = void 0;
                function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) { return typeof obj; };
                }
                else {
                    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                } return _typeof(obj); }
                function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                } return _assertThisInitialized(self); }
                function _assertThisInitialized(self) { if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                } return self; }
                function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass)
                    _setPrototypeOf(subClass, superClass); }
                function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                // !!! READ THE FOLLOWING BEFORE MODIFYING THIS FILE !!!
                /* This file contains multiple classes because of the nature of the "circular dependency"
                 * between AbstractSpecification and the child specifications, and the fact that `import`
                 * is not able to deal with this fact and will error out. If/when there is a concept of
                 * 'weak' imports, these classes can be defined in separate files.
                 */
                var AbstractSpecification = 
                /*#__PURE__*/
                function () {
                    /**
                     * @constructor AbstractSpecification
                     */
                    function AbstractSpecification() {
                        _classCallCheck(this, AbstractSpecification);
                        if (this.constructor === AbstractSpecification) {
                            throw new Error('Cannot instantiate abstract class: AbstractSpecification');
                        }
                    }
                    /**
                     * @memberOf AbstractSpecification
                     * @public
                     * @instance
                     */
                    _createClass(AbstractSpecification, [{
                            key: "and",
                            value: function and(other) {
                                return new AndSpecification(this, other);
                            }
                            /**
                             * @memberOf AbstractSpecification
                             * @public
                             * @instance
                             */
                        }, {
                            key: "or",
                            value: function or(other) {
                                return new OrSpecification(this, other);
                            }
                            /**
                             * @memberOf AbstractSpecification
                             * @public
                             * @instance
                             */
                        }, {
                            key: "xor",
                            value: function xor(other) {
                                return new XorSpecification(this, other);
                            }
                            /**
                             * @memberOf AbstractSpecification
                             * @public
                             * @instance
                             */
                        }, {
                            key: "not",
                            value: function not(other) {
                                return new NotSpecification(this, other);
                            }
                            /**
                             * @memberOf AbstractSpecification
                             * @public
                             * @abstract
                             * @instance
                             */
                        }, {
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy() {
                                throw new Error('Abstract method must be implemented.');
                            }
                        }]);
                    return AbstractSpecification;
                }();
                exports["default"] = AbstractSpecification;
                var AndSpecification = 
                /*#__PURE__*/
                function (_AbstractSpecificatio) {
                    _inherits(AndSpecification, _AbstractSpecificatio);
                    /**
                     * @constructor AndSpecification
                     * @extends AbstractSpecification
                     * @package
                     */
                    function AndSpecification(specificationA, specificationB) {
                        var _this;
                        _classCallCheck(this, AndSpecification);
                        _this = _possibleConstructorReturn(this, _getPrototypeOf(AndSpecification).call(this));
                        _this._specificationA = specificationA;
                        _this._specificationB = specificationB;
                        return _this;
                    }
                    /**
                     * @memberOf AndSpecification
                     * @public
                     * @override
                     * @instance
                     */
                    _createClass(AndSpecification, [{
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy(candidate) {
                                return this._specificationA.isSatisfiedBy(candidate) && this._specificationB.isSatisfiedBy(candidate);
                            }
                        }]);
                    return AndSpecification;
                }(AbstractSpecification);
                exports.AndSpecification = AndSpecification;
                var OrSpecification = 
                /*#__PURE__*/
                function (_AbstractSpecificatio2) {
                    _inherits(OrSpecification, _AbstractSpecificatio2);
                    /**
                     * @constructor OrSpecification
                     * @extends AbstractSpecification
                     * @package
                     */
                    function OrSpecification(specificationA, specificationB) {
                        var _this2;
                        _classCallCheck(this, OrSpecification);
                        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(OrSpecification).call(this));
                        _this2._specificationA = specificationA;
                        _this2._specificationB = specificationB;
                        return _this2;
                    }
                    /**
                     * @memberOf OrSpecification
                     * @public
                     * @override
                     * @instance
                     */
                    _createClass(OrSpecification, [{
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy(candidate) {
                                return this._specificationA.isSatisfiedBy(candidate) || this._specificationB.isSatisfiedBy(candidate);
                            }
                        }]);
                    return OrSpecification;
                }(AbstractSpecification);
                exports.OrSpecification = OrSpecification;
                var XorSpecification = 
                /*#__PURE__*/
                function (_AbstractSpecificatio3) {
                    _inherits(XorSpecification, _AbstractSpecificatio3);
                    /**
                     * @constructor XorSpecification
                     * @extends AbstractSpecification
                     * @package
                     */
                    function XorSpecification(specificationA, specificationB) {
                        var _this3;
                        _classCallCheck(this, XorSpecification);
                        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(XorSpecification).call(this));
                        _this3._specificationA = specificationA;
                        _this3._specificationB = specificationB;
                        return _this3;
                    }
                    /**
                     * @memberOf XorSpecification
                     * @public
                     * @override
                     * @instance
                     */
                    _createClass(XorSpecification, [{
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy(candidate) {
                                return !this._specificationA.isSatisfiedBy(candidate) !== !this._specificationB.isSatisfiedBy(candidate);
                            }
                        }]);
                    return XorSpecification;
                }(AbstractSpecification);
                exports.XorSpecification = XorSpecification;
                var NotSpecification = 
                /*#__PURE__*/
                function (_AbstractSpecificatio4) {
                    _inherits(NotSpecification, _AbstractSpecificatio4);
                    /**
                     * @constructor NotSpecification
                     * @extends AbstractSpecification
                     * @package
                     */
                    function NotSpecification(specification) {
                        var _this4;
                        _classCallCheck(this, NotSpecification);
                        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(NotSpecification).call(this));
                        _this4._specification = specification;
                        return _this4;
                    }
                    /**
                     * @memberOf NotSpecification
                     * @public
                     * @override
                     * @instance
                     */
                    _createClass(NotSpecification, [{
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy(candidate) {
                                return !this._specification.isSatisfiedBy(candidate);
                            }
                        }]);
                    return NotSpecification;
                }(AbstractSpecification);
                exports.NotSpecification = NotSpecification;
                var TrueSpecification = 
                /*#__PURE__*/
                function (_AbstractSpecificatio5) {
                    _inherits(TrueSpecification, _AbstractSpecificatio5);
                    function TrueSpecification() {
                        _classCallCheck(this, TrueSpecification);
                        return _possibleConstructorReturn(this, _getPrototypeOf(TrueSpecification).apply(this, arguments));
                    }
                    _createClass(TrueSpecification, [{
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy() {
                                return true;
                            }
                        }]);
                    return TrueSpecification;
                }(AbstractSpecification);
                exports.TrueSpecification = TrueSpecification;
                var FalseSpecification = 
                /*#__PURE__*/
                function (_AbstractSpecificatio6) {
                    _inherits(FalseSpecification, _AbstractSpecificatio6);
                    function FalseSpecification() {
                        _classCallCheck(this, FalseSpecification);
                        return _possibleConstructorReturn(this, _getPrototypeOf(FalseSpecification).apply(this, arguments));
                    }
                    _createClass(FalseSpecification, [{
                            key: "isSatisfiedBy",
                            value: function isSatisfiedBy() {
                                return false;
                            }
                        }]);
                    return FalseSpecification;
                }(AbstractSpecification);
                exports.FalseSpecification = FalseSpecification;
            });
            var index$3 = unwrapExports(specification);
            var specification_1 = specification.FalseSpecification;
            var specification_2 = specification.TrueSpecification;
            var specification_3 = specification.NotSpecification;
            var specification_4 = specification.XorSpecification;
            var specification_5 = specification.OrSpecification;
            var specification_6 = specification.AndSpecification;
            var AbstractStrategy_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                var AbstractStrategy = 
                /*#__PURE__*/
                function () {
                    /**
                     * @summary Strategy pattern allows a class to delegate behavior or execution
                     * to an eternal dependency that can be selected at runtime. Because
                     * JavaScript is not a statically typed language and does not support
                     * Interfaces or Generics, it is only possible to restrict access to
                     * target members via convention. Because of this, it is allowed for
                     * the implementation of the `execute` method of an extending
                     * concrete strategy to access both the public and $private members
                     * of it's target.
                     * @constructor AbstractStrategy
                     * @abstract
                     */
                    function AbstractStrategy() {
                        _classCallCheck(this, AbstractStrategy);
                        if (this.constructor === AbstractStrategy) {
                            throw new Error('Cannot instantiate abstract class.');
                        }
                    }
                    /**
                     * @memberOf AbstractStrategy
                     * @public
                     * @abstract
                     * @instance
                     */
                    _createClass(AbstractStrategy, [{
                            key: "execute",
                            value: function execute() {
                                throw new Error('Abstract method must be implemented.');
                            }
                        }]);
                    return AbstractStrategy;
                }();
                exports["default"] = AbstractStrategy;
            });
            var AbstractStrategy = unwrapExports(AbstractStrategy_1);
            var debounce = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                /**
                 * @function debounce
                 * @summary Returns a debounced function per the function and wait passed
                 * @param {Function} func - The function to debounce.
                 * @param {number} wait - The time to wait between calls of func.
                 * @param {boolean} [immediate] - True if func should be called immediately.
                 * @returns {function(...[*])}
                 */
                var _default = function _default(func, wait) {
                    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var timeout;
                    return function () {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        var callNow = immediate && !timeout;
                        var later = function later() {
                            timeout = null;
                            if (!immediate) {
                                func.apply(void 0, args);
                            }
                        };
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);
                        if (callNow) {
                            func.apply(void 0, args);
                        }
                    };
                };
                exports["default"] = _default;
            });
            var debounce$1 = unwrapExports(debounce);
            var regex = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.uuid = exports.url = exports.uid = exports.script = exports.numeric = exports.empty = exports.email = exports.dataUrl = exports.base64 = exports.alphaNumeric = exports.alpha = void 0;
                /**
                 * @constant alpha
                 * @type {RegExp}
                 */
                var alpha = /^[A-z]+$/;
                /**
                 * @constant alphaNumeric
                 * @type {RegExp}
                 */
                exports.alpha = alpha;
                var alphaNumeric = /^[A-z0-9]+$/;
                /**
                 * @constant base64
                 * @type {RegExp}
                 */
                exports.alphaNumeric = alphaNumeric;
                var base64 = /^[A-z0-9=]+$/;
                /**
                 * @constant dataUrl
                 * @type {RegExp}
                 */
                exports.base64 = base64;
                var dataUrl = /^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i;
                /**
                 * @constant email
                 * @type {RegExp}
                 */
                exports.dataUrl = dataUrl;
                var email = /^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/;
                /**
                 * @constant empty
                 * @type {RegExp}
                 */
                exports.email = email;
                var empty = /^$/;
                /**
                 * @constant numeric
                 * @type {RegExp}
                 */
                exports.empty = empty;
                var numeric = /^-?[0-9]+$/;
                /**
                 * @constant script
                 * @type {RegExp}
                 */
                exports.numeric = numeric;
                var script = /(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/;
                /**
                 * @constant uid
                 * @type {RegExp}
                 */
                exports.script = script;
                var uid = /^\d{14,}$/i;
                /**
                 * @constant url
                 * @type {RegExp}
                 */
                exports.uid = uid;
                var url = /^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/;
                /**
                 * @constant uuid
                 * @type {RegExp}
                 */
                exports.url = url;
                var uuid = /^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i;
                exports.uuid = uuid;
            });
            var index$4 = unwrapExports(regex);
            var regex_1 = regex.uuid;
            var regex_2 = regex.url;
            var regex_3 = regex.uid;
            var regex_4 = regex.script;
            var regex_5 = regex.numeric;
            var regex_6 = regex.empty;
            var regex_7 = regex.email;
            var regex_8 = regex.dataUrl;
            var regex_9 = regex.base64;
            var regex_10 = regex.alphaNumeric;
            var regex_11 = regex.alpha;
            var nextTick = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                /**
                 * @summary Postpones function execution until the next event loop.
                 * @function nextTick
                 * @param {function} func - function to move to the next event loop
                 * @returns {number}
                 */
                var _default = function _default(func) {
                    return setTimeout(func, 0);
                };
                exports["default"] = _default;
            });
            var nextTick$1 = unwrapExports(nextTick);
            var Timeout_1 = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                } }
                function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                } }
                function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps); if (staticProps)
                    _defineProperties(Constructor, staticProps); return Constructor; }
                function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) {
                    throw new TypeError("attempted to get private field on non-instance");
                } if (descriptor.get) {
                    return descriptor.get.call(receiver);
                } return descriptor.value; }
                function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) {
                    throw new TypeError("attempted to set private field on non-instance");
                } if (descriptor.set) {
                    descriptor.set.call(receiver, value);
                }
                else {
                    if (!descriptor.writable) {
                        throw new TypeError("attempted to set read only private field");
                    }
                    descriptor.value = value;
                } return value; }
                var Timeout = 
                /*#__PURE__*/
                function () {
                    /**
                     * @constructor Timeout
                     * @summary encapsulates timer boilerplate
                     * @param {number} milliseconds
                     */
                    function Timeout(milliseconds) {
                        _classCallCheck(this, Timeout);
                        _didTimeout.set(this, {
                            writable: true,
                            value: void 0
                        });
                        _milliseconds.set(this, {
                            writable: true,
                            value: void 0
                        });
                        _timeoutId.set(this, {
                            writable: true,
                            value: void 0
                        });
                        _classPrivateFieldSet(this, _milliseconds, milliseconds);
                    }
                    /**
                     * @summary Returns true if this Timeout is running.
                     * @memberOf Timeout
                     * @public
                     * @instance
                     * @returns {boolean}
                     */
                    _createClass(Timeout, [{
                            key: "onTimeout",
                            /**
                             * @summary Sets method to call on timeout.
                             * @memberOf Timeout
                             * @public
                             * @instance
                             * @param {Function} method.
                             * @returns {this}
                             */
                            value: function onTimeout(method) {
                                _classPrivateFieldSet(this, _didTimeout, method);
                                return this;
                            }
                            /**
                             * @summary Starts timer.
                             * @memberOf Timeout
                             * @public
                             * @instance
                             * @returns {this}
                             */
                        }, {
                            key: "start",
                            value: function start() {
                                var _this = this;
                                if (!_classPrivateFieldGet(this, _timeoutId)) {
                                    _classPrivateFieldSet(this, _timeoutId, setTimeout(function () {
                                        _classPrivateFieldGet(_this, _didTimeout).call(_this);
                                        _classPrivateFieldSet(_this, _timeoutId, null);
                                    }, _classPrivateFieldGet(this, _milliseconds)));
                                }
                                return this;
                            }
                            /**
                             * @summary Clears timer.
                             * @memberOf Timeout
                             * @public
                             * @instance
                             * @returns {this}
                             */
                        }, {
                            key: "clear",
                            value: function clear() {
                                if (_classPrivateFieldGet(this, _timeoutId)) {
                                    clearTimeout(_classPrivateFieldGet(this, _timeoutId));
                                    _classPrivateFieldSet(this, _timeoutId, null);
                                }
                                return this;
                            }
                        }, {
                            key: "isRunning",
                            get: function get() {
                                return !!_classPrivateFieldGet(this, _timeoutId);
                            }
                        }]);
                    return Timeout;
                }();
                exports["default"] = Timeout;
                var _didTimeout = new WeakMap();
                var _milliseconds = new WeakMap();
                var _timeoutId = new WeakMap();
            });
            var Timeout = unwrapExports(Timeout_1);
            var wait = createCommonjsModule(function (module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;
                /**
                 * @summary A promisified setTimeout.
                 * @function wait
                 * @param {number} timeout - the number of milliseconds to wait
                 * @returns {Promise<any>}
                 */
                var _default = function _default(timeout) {
                    return new Promise(function (resolve) {
                        return setTimeout(resolve, timeout);
                    });
                };
                exports["default"] = _default;
            });
            var wait$1 = unwrapExports(wait);
            var dist = exports('d', createCommonjsModule(function (module, exports) {
                "use strict";
                function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) { return typeof obj; };
                }
                else {
                    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                } return _typeof(obj); }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "Assert", {
                    enumerable: true,
                    get: function get() {
                        return _Assert["default"];
                    }
                });
                Object.defineProperty(exports, "Name", {
                    enumerable: true,
                    get: function get() {
                        return _Name["default"];
                    }
                });
                Object.defineProperty(exports, "DayPoint", {
                    enumerable: true,
                    get: function get() {
                        return _DayPoint["default"];
                    }
                });
                Object.defineProperty(exports, "Money", {
                    enumerable: true,
                    get: function get() {
                        return _Money["default"];
                    }
                });
                Object.defineProperty(exports, "Coord", {
                    enumerable: true,
                    get: function get() {
                        return _Coord["default"];
                    }
                });
                Object.defineProperty(exports, "Point", {
                    enumerable: true,
                    get: function get() {
                        return _Point["default"];
                    }
                });
                Object.defineProperty(exports, "Rectangle", {
                    enumerable: true,
                    get: function get() {
                        return _Rectangle["default"];
                    }
                });
                Object.defineProperty(exports, "Vector", {
                    enumerable: true,
                    get: function get() {
                        return _Vector["default"];
                    }
                });
                Object.defineProperty(exports, "uid", {
                    enumerable: true,
                    get: function get() {
                        return identity.uid;
                    }
                });
                Object.defineProperty(exports, "uuid", {
                    enumerable: true,
                    get: function get() {
                        return identity.uuid;
                    }
                });
                Object.defineProperty(exports, "round", {
                    enumerable: true,
                    get: function get() {
                        return math.round;
                    }
                });
                Object.defineProperty(exports, "roundUp", {
                    enumerable: true,
                    get: function get() {
                        return math.roundUp;
                    }
                });
                Object.defineProperty(exports, "roundDown", {
                    enumerable: true,
                    get: function get() {
                        return math.roundDown;
                    }
                });
                Object.defineProperty(exports, "roundTowardZero", {
                    enumerable: true,
                    get: function get() {
                        return math.roundTowardZero;
                    }
                });
                Object.defineProperty(exports, "gcd", {
                    enumerable: true,
                    get: function get() {
                        return math.gcd;
                    }
                });
                Object.defineProperty(exports, "tryParseFloat", {
                    enumerable: true,
                    get: function get() {
                        return math.tryParseFloat;
                    }
                });
                Object.defineProperty(exports, "tryParseInt", {
                    enumerable: true,
                    get: function get() {
                        return math.tryParseInt;
                    }
                });
                Object.defineProperty(exports, "Service", {
                    enumerable: true,
                    get: function get() {
                        return _Service["default"];
                    }
                });
                Object.defineProperty(exports, "AbstractSpecification", {
                    enumerable: true,
                    get: function get() {
                        return _specification["default"];
                    }
                });
                Object.defineProperty(exports, "AbstractStrategy", {
                    enumerable: true,
                    get: function get() {
                        return _AbstractStrategy["default"];
                    }
                });
                Object.defineProperty(exports, "debounce", {
                    enumerable: true,
                    get: function get() {
                        return _debounce["default"];
                    }
                });
                Object.defineProperty(exports, "build", {
                    enumerable: true,
                    get: function get() {
                        return string.build;
                    }
                });
                Object.defineProperty(exports, "format", {
                    enumerable: true,
                    get: function get() {
                        return string.format;
                    }
                });
                Object.defineProperty(exports, "trim", {
                    enumerable: true,
                    get: function get() {
                        return string.trim;
                    }
                });
                Object.defineProperty(exports, "trimStart", {
                    enumerable: true,
                    get: function get() {
                        return string.trimStart;
                    }
                });
                Object.defineProperty(exports, "trimEnd", {
                    enumerable: true,
                    get: function get() {
                        return string.trimEnd;
                    }
                });
                Object.defineProperty(exports, "capitalize", {
                    enumerable: true,
                    get: function get() {
                        return string.capitalize;
                    }
                });
                Object.defineProperty(exports, "nextTick", {
                    enumerable: true,
                    get: function get() {
                        return _nextTick["default"];
                    }
                });
                Object.defineProperty(exports, "Timeout", {
                    enumerable: true,
                    get: function get() {
                        return _Timeout["default"];
                    }
                });
                Object.defineProperty(exports, "wait", {
                    enumerable: true,
                    get: function get() {
                        return _wait["default"];
                    }
                });
                exports.regex = void 0;
                var _Assert = _interopRequireDefault(Assert_1);
                var _Name = _interopRequireDefault(Name_1);
                var _DayPoint = _interopRequireDefault(DayPoint_1);
                var _Money = _interopRequireDefault(Money_1);
                var _Coord = _interopRequireDefault(Coord_1);
                var _Point = _interopRequireDefault(Point_1);
                var _Rectangle = _interopRequireDefault(Rectangle_1);
                var _Vector = _interopRequireDefault(Vector_1);
                var _Service = _interopRequireDefault(Service_1);
                var _specification = _interopRequireDefault(specification);
                var _AbstractStrategy = _interopRequireDefault(AbstractStrategy_1);
                var _debounce = _interopRequireDefault(debounce);
                var regex$1 = _interopRequireWildcard(regex);
                exports.regex = regex$1;
                var _nextTick = _interopRequireDefault(nextTick);
                var _Timeout = _interopRequireDefault(Timeout_1);
                var _wait = _interopRequireDefault(wait);
                function _getRequireWildcardCache() { if (typeof WeakMap !== "function")
                    return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }
                function _interopRequireWildcard(obj) { if (obj && obj.__esModule) {
                    return obj;
                } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                    return { "default": obj };
                } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) {
                    return cache.get(obj);
                } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) {
                            Object.defineProperty(newObj, key, desc);
                        }
                        else {
                            newObj[key] = obj[key];
                        }
                    }
                } newObj["default"] = obj; if (cache) {
                    cache.set(obj, newObj);
                } return newObj; }
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
            }));
            var index$5 = unwrapExports(dist);
            var dist_1 = exports('a', dist.Assert);
            var dist_2 = exports('b', dist.uid);
            var dist_3 = dist.Timeout;
            var dist_4 = dist.regex;
        }
    };
});
