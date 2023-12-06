/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/assets-manager.js":
/*!**********************************!*\
  !*** ./blocks/assets-manager.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lit_labs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit-labs/react */ "./node_modules/@lit-labs/react/development/index.js");
/* harmony import */ var kemet_ui_dist_components_kemet_field_kemet_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-field/kemet-field.js */ "./node_modules/kemet-ui/dist/components/kemet-field/kemet-field.js");
/* harmony import */ var kemet_ui_dist_components_kemet_input_kemet_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-input/kemet-input.js */ "./node_modules/kemet-ui/dist/components/kemet-input/kemet-input.js");
/* harmony import */ var kemet_ui_dist_components_kemet_combo_kemet_combo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-combo/kemet-combo.js */ "./node_modules/kemet-ui/dist/components/kemet-combo/kemet-combo.js");
/* harmony import */ var kemet_ui_dist_components_kemet_sortable_kemet_sortable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-sortable/kemet-sortable.js */ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable.js");
/* harmony import */ var kemet_ui_dist_components_kemet_sortable_kemet_sortable_item_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js */ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js");
/* harmony import */ var kemet_ui_dist_components_kemet_checkbox_kemet_checkbox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js */ "./node_modules/kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.blockEditor.InspectorControls;
var PanelBody = wp.components.PanelBody;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var KemetField = (0,_lit_labs_react__WEBPACK_IMPORTED_MODULE_1__.createComponent)(react__WEBPACK_IMPORTED_MODULE_0__, 'kemet-field', kemet_ui_dist_components_kemet_field_kemet_field_js__WEBPACK_IMPORTED_MODULE_2__.default);
var KemetInput = (0,_lit_labs_react__WEBPACK_IMPORTED_MODULE_1__.createComponent)(react__WEBPACK_IMPORTED_MODULE_0__, 'kemet-input', kemet_ui_dist_components_kemet_input_kemet_input_js__WEBPACK_IMPORTED_MODULE_3__.default);
var KemetCombo = (0,_lit_labs_react__WEBPACK_IMPORTED_MODULE_1__.createComponent)(react__WEBPACK_IMPORTED_MODULE_0__, 'kemet-combo', kemet_ui_dist_components_kemet_combo_kemet_combo_js__WEBPACK_IMPORTED_MODULE_4__.default, {
  onSelection: 'kemet-combo-selection'
});
var KemetSortable = (0,_lit_labs_react__WEBPACK_IMPORTED_MODULE_1__.createComponent)(react__WEBPACK_IMPORTED_MODULE_0__, 'kemet-sortable', kemet_ui_dist_components_kemet_sortable_kemet_sortable_js__WEBPACK_IMPORTED_MODULE_5__.default, {
  onDragEnd: 'kemet-sortable-drag-end'
});
var KemetSortableItem = (0,_lit_labs_react__WEBPACK_IMPORTED_MODULE_1__.createComponent)(react__WEBPACK_IMPORTED_MODULE_0__, 'kemet-sortable-item', kemet_ui_dist_components_kemet_sortable_kemet_sortable_item_js__WEBPACK_IMPORTED_MODULE_6__.default);
var KemetCheckbox = (0,_lit_labs_react__WEBPACK_IMPORTED_MODULE_1__.createComponent)(react__WEBPACK_IMPORTED_MODULE_0__, 'kemet-checkbox', kemet_ui_dist_components_kemet_checkbox_kemet_checkbox_js__WEBPACK_IMPORTED_MODULE_7__.default, {
  onCheckboxChange: 'kemet-checkbox-change'
});
var styles = {
  button: {
    cursor: 'pointer',
    color: 'var(--wp-admin-theme-color)',
    fontSize: '1.25rem',
    margin: '0.25rem 0 0 0',
    padding: '0',
    position: 'relative',
    top: '0.1rem',
    left: '0.2rem',
    border: 'none',
    background: 'none'
  },
  sortableItem: {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column'
  },
  sortableLabel: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  inspectorControls: {
    marginBottom: '40px'
  },
  toggle: {
    '--kemet-toggle-height': '1rem',
    '--kemet-toggle-width': '2rem',
    '--kemet-toggle-handle-diameter': '1rem'
  }
};

var AssetsManager = function AssetsManager(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      packages = _useState2[0],
      setPackages = _useState2[1];

  var getAssets = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var regExp, assets, cssFiles, jsFiles, cssAssets, jsAssets;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              regExp = /(?:\.([^.]+))?$/;
              _context.next = 3;
              return fetch("http://interactiveposts.local/wp-json/ippm/v1/package/".concat(event.detail.text)).then(function (response) {
                return response.json();
              });

            case 3:
              assets = _context.sent;
              cssFiles = assets.filter(function (asset) {
                return regExp.exec(asset)[1] === 'css';
              });
              jsFiles = assets.filter(function (asset) {
                return regExp.exec(asset)[1] === 'js';
              });
              cssAssets = cssFiles.map(function (file) {
                return {
                  filename: file,
                  isJSModule: false
                };
              });
              jsAssets = jsFiles.map(function (file) {
                return {
                  filename: file,
                  isJSModule: false
                };
              });
              props.setAttributes({
                currentPackage: event.detail.text
              });
              props.setAttributes({
                cssAssets: cssAssets
              });
              props.setAttributes({
                jsAssets: jsAssets
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAssets(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var sortFiles = function sortFiles(event, type) {
    var files = [];
    event.detail.all.forEach(function (item) {
      var _item$querySelector;

      var isJSModule = ((_item$querySelector = item.querySelector('kemet-checkbox')) === null || _item$querySelector === void 0 ? void 0 : _item$querySelector.checked) || false;
      files.push({
        filename: item.innerText,
        isJSModule: isJSModule
      });
    });
    props.setAttributes(_defineProperty({}, type, files));
  };

  var removePackage = function removePackage() {
    props.setAttributes({
      cssAssets: []
    });
    props.setAttributes({
      jsAssets: []
    });
    props.setAttributes({
      currentPackage: 'none'
    });
  };

  var checkboxChange = function checkboxChange(event, index) {
    // if you don't stringify, wordpress will not detect a change in setting the attribute
    // reference: https://stackoverflow.com/questions/61778389/why-doesnt-a-mutated-array-of-objects-save-in-gutenberg
    var jsAssets = JSON.parse(JSON.stringify(props.attributes.jsAssets));
    jsAssets[index].isJSModule = event.target.checked;
    props.setAttributes({
      jsAssets: jsAssets
    });
  };

  var Asset = function Asset(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetSortableItem, {
      style: styles.sortableItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: styles.sortableLabel
    }, props.children), props.type === 'js' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetCheckbox, {
      label: "Enable module type.",
      checked: props.isJSModule,
      onCheckboxChange: function onCheckboxChange(event) {
        return checkboxChange(event, props.index);
      }
    }));
  };

  var CSSAssets = function CSSAssets(props) {
    if (props.attributes.cssAssets.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "CSS Assets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetSortable, {
        onDragEnd: function onDragEnd(event) {
          return sortFiles(event, 'cssAssets');
        }
      }, props.attributes.cssAssets.map(function (file, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Asset, {
          key: index,
          index: index,
          filename: file.filename,
          isJSModule: props.attributes.cssAssets[index].isJSModule,
          type: "css"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, file.filename));
      })));
    }

    return null;
  };

  var JSAssets = function JSAssets(props) {
    if (props.attributes.jsAssets.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "JS Assets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetSortable, {
        onDragEnd: function onDragEnd(event) {
          return sortFiles(event, 'jsAssets');
        }
      }, props.attributes.jsAssets.map(function (file, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Asset, {
          key: index,
          index: index,
          filename: file.filename,
          isJSModule: props.attributes.jsAssets[index].isJSModule,
          type: "js"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, file.filename));
      })));
    }

    return null;
  };

  useEffect( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('/wp-json/ippm/v1/packages').then(function (response) {
              return response.json();
            });

          case 2:
            response = _context2.sent;
            setPackages(response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "ippm-assets-manager"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetField, {
    label: "Select a package."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetInput, {
    slot: "input",
    name: "package",
    value: props.attributes.currentPackage === 'none' ? null : props.attributes.currentPackage,
    placeholder: "Start typing a package name."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KemetCombo, {
    slot: "component",
    options: packages,
    onSelection: function onSelection(event) {
      return getAssets(event);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Current Package: ", props.attributes.currentPackage, props.attributes.currentPackage !== 'none' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: styles.button,
    onClick: function onClick() {
      return removePackage();
    }
  }, "\xD7") : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSAssets, {
    attributes: props.attributes,
    setAttributes: props.setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(JSAssets, {
    attributes: props.attributes,
    setAttributes: props.setAttributes
  }));
};

registerBlockType('ippm/assets-manager', {
  title: 'IPPM: Assets',
  description: 'Add CSS and or JavaScript to a post.',
  icon: 'format-image',
  category: 'design',
  // custom attributes
  attributes: {
    cssAssets: {
      type: 'array',
      default: []
    },
    jsAssets: {
      type: 'array',
      default: []
    },
    currentPackage: {
      type: 'string',
      default: 'none'
    }
  },
  edit: function edit(_ref3) {
    var className = _ref3.className,
        attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes;
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InspectorControls, {
      style: styles.inspectorControls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PanelBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetsManager, {
      attributes: attributes,
      setAttributes: setAttributes
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Asset Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Select the block then use the controls to the right to add assets."))];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./blocks/dependencies-manager.js":
/*!****************************************!*\
  !*** ./blocks/dependencies-manager.js ***!
  \****************************************/
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    URLInput = _wp$blockEditor.URLInput;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    IconButton = _wp$components.IconButton;
var PlainText = wp.editor.PlainText; // const { useState } = wp.element;

var styles = {
  heading: {
    margin: '1rem 0'
  },
  row: {
    display: 'grid',
    gap: '1rem',
    alignItems: 'center',
    gridTemplateColumns: '30% 1fr auto',
    marginBottom: '0.5rem'
  },
  input: {
    padding: '0.5rem 1rem',
    border: '1px solid gray',
    whiteSpace: 'nowrap'
  },
  button: {
    fontSize: '3rem',
    lineHeight: '0.5',
    cursor: 'pointer',
    border: 'none',
    padding: '0',
    margin: '0 0 0 -0.5rem',
    background: 'none'
  }
};

var Dependency = function Dependency(props) {
  var handleChange = function handleChange(name, url, index) {
    var dependencies = _toConsumableArray(props.attributes.dependencies);

    if (name) dependencies[index].name = name;
    if (url) dependencies[index].url = url;
    props.setAttributes({
      dependencies: dependencies
    });
  };

  var handleRemoveLocation = function handleRemoveLocation(index) {
    var dependencies = _toConsumableArray(props.attributes.dependencies);

    dependencies.splice(index, 1);
    props.setAttributes({
      dependencies: dependencies
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    style: styles.row
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlainText, {
    className: "dependency-name",
    placeholder: "Dependency Name",
    value: props.attributes.dependencies[props.index].name,
    onChange: function onChange(name) {
      return handleChange(name, null, props.index);
    },
    style: styles.input
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlainText, {
    className: "dependency-url",
    placeholder: "Dependency URL",
    value: props.attributes.dependencies[props.index].url,
    onChange: function onChange(url) {
      return handleChange(null, url, props.index);
    },
    style: styles.input
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    style: styles.button,
    onClick: function onClick() {
      return handleRemoveLocation(props.index);
    }
  }, "\xD7")));
};

registerBlockType('ippm/dependencies-manager', {
  title: 'IPPM: Dependencies',
  description: 'Add JavaScript dependencies to a post.',
  icon: 'format-image',
  category: 'design',
  // custom attributes
  attributes: {
    dependencies: {
      type: 'array',
      default: [{
        name: '',
        url: ''
      }]
    }
  },
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var handleAddDependency = function handleAddDependency() {
      var dependencies = _toConsumableArray(attributes.dependencies);

      dependencies.push({
        name: '',
        url: ''
      });
      setAttributes({
        dependencies: dependencies
      });
    };

    var dependencyFields;

    if (attributes.dependencies.length) {
      dependencyFields = attributes.dependencies.map(function (dependency, index) {
        return /*#__PURE__*/React.createElement(Dependency, {
          key: index,
          index: index,
          className: className,
          attributes: attributes,
          setAttributes: setAttributes
        });
      });
    }

    return [/*#__PURE__*/React.createElement(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement("p", null, "IPPM will create a import map of the dependencies you add here."))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
      style: styles.heading
    }, "Dependencies"), dependencyFields, /*#__PURE__*/React.createElement("button", {
      className: "button",
      onClick: handleAddDependency
    }, "Add Dependency"))];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./components/ippm-alert.js":
/*!**********************************!*\
  !*** ./components/ippm-alert.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IPPMAlert; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IPPMAlert = /*#__PURE__*/function (_LitElement) {
  _inherits(IPPMAlert, _LitElement);

  var _super = _createSuper(IPPMAlert);

  function IPPMAlert() {
    _classCallCheck(this, IPPMAlert);

    return _super.apply(this, arguments);
  }

  _createClass(IPPMAlert, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n    "])), this.message);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [(0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        :host {\n          display: none;\n          padding: 1rem;\n          margin: 1rem 1rem 1rem 0rem;\n          position: fixed;\n          top: 2rem;\n          z-index: 9;\n          background-color: #ffffff;\n        }\n\n        :host([opened]) {\n          display: block;\n        }\n\n        :host([status='success']) {\n          border-left: 3px solid var(--ippm-blue);\n        }\n\n        :host([status='error']) {\n          border-left: 3px solid var(--ippm-red);\n        }\n\n        :host([status='warning']) {\n          border-left: 3px solid var(--ippm-orange);\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        opened: {
          type: Boolean,
          reflect: true
        },
        status: {
          type: String,
          reflect: true
        },
        message: {
          type: String
        }
      };
    }
  }]);

  return IPPMAlert;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);


window.customElements.get('ippm-alert') || window.customElements.define('ippm-alert', IPPMAlert);

/***/ }),

/***/ "./components/ippm-package.js":
/*!************************************!*\
  !*** ./components/ippm-package.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IPPMPackage; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var kemet_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kemet-ui */ "./node_modules/kemet-ui/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var IPPMPackage = /*#__PURE__*/function (_LitElement) {
  _inherits(IPPMPackage, _LitElement);

  var _super = _createSuper(IPPMPackage);

  function IPPMPackage() {
    var _this;

    _classCallCheck(this, IPPMPackage);

    _this = _super.call(this);
    _this.packages = '';
    _this.assets = [];
    return _this;
  }

  _createClass(IPPMPackage, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.domain = window.location.origin;
      this.modal = this.shadowRoot.querySelector('kemet-modal');
    }
  }, {
    key: "updated",
    value: function updated(changedProps) {
      if (changedProps.has('package')) {
        this.getAssets();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <h3>", "</h3>\n      ", "\n      <kemet-button @click=", ">\n        <kemet-icon icon=\"trash\"></kemet-icon> Delete Package\n      </kemet-button>\n      <kemet-modal>\n        <div>\n          <p>Are you sure you want to delete <strong>", "</strong>?</p>\n          <kemet-button @click=", ">Yes, delete it.</kemet-button>\n          &nbsp;\n          <kemet-button @click=", ">No, keep package.</kemet-button>\n        </div>\n      </kemet-modal>\n    "])), this.package, this.makeAssetsList(), function () {
        return _this2.confirmDelete();
      }, this.package, function () {
        return _this2.requestDelete();
      }, function () {
        return _this2.closeModal();
      });
    }
  }, {
    key: "getAssets",
    value: function () {
      var _getAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var assets;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(this.domain, "/wp-json/ippm/v1/package/").concat(this.package)).then(function (response) {
                  return response.json();
                });

              case 2:
                assets = _context.sent;
                this.assets = assets;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAssets() {
        return _getAssets.apply(this, arguments);
      }

      return getAssets;
    }()
  }, {
    key: "makeAssetsList",
    value: function makeAssetsList() {
      var _this3 = this;

      if (this.assets.length > 0) {
        var assetList = this.assets.map(function (asset) {
          return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<li><a href=\"", "", "/", "\" target=\"_blank\">", "</a></li>"])), _this3.url, _this3.package, asset, asset);
        });
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<ul>", "</ul>"])), assetList);
      }

      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<p>There are no assets in this package.</p>"])));
    }
  }, {
    key: "confirmDelete",
    value: function confirmDelete() {
      this.modal.opened = true;
    }
  }, {
    key: "requestDelete",
    value: function requestDelete() {
      this.modal.opened = false;
      var url = this.ippmData.ajaxURL;
      var formData = new FormData();
      formData.append('action', 'ippm_package_delete');
      formData.append('security', this.ippmData.security);
      formData.append('package', this.package);
      var options = {
        body: formData,
        method: 'POST'
      };
      fetch(url, options).then(function (response) {
        return response.json();
      }).then(function (response) {
        var alertElement = document.querySelector('ippm-alert');

        if (response.code === 1) {
          var packagesElement = document.querySelector('ippm-packages');
          packagesElement.getPackages();
          alertElement.opened = true;
          alertElement.status = 'success';
          alertElement.message = 'Package deleted!';
          setTimeout(function () {
            alertElement.opened = false;
          }, 3000);
        } else {
          alertElement.opened = true;
          alertElement.status = response.status;
          alertElement.message = response.message;
          setTimeout(function () {
            alertElement.opened = false;
          }, 3000);
        }
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.opened = false;
    }
  }], [{
    key: "styles",
    get: function get() {
      return [(0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n          flex-direction: column;\n          font-size: 1rem;\n          padding: 1rem 1.25rem;\n          background: #ffffff;\n          border: 1px dashed var(--ippm-blue);\n        }\n\n        h3 {\n          font-size: 1rem;\n          margin: 0;\n          font-weight: normal;\n        }\n\n        ul {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          grid-auto-rows: 1rem;\n          gap: 1rem;\n          height: 100%;\n          margin: 0.5rem 0;\n          padding: 0.5rem 0;\n          list-style: none;\n          border-top: 1px dashed gray;\n          border-bottom: 1px dashed gray;\n        }\n\n        a {\n          font-size: 90%;\n          text-decoration: none;\n          color: var(--ippm-blue);\n        }\n\n        kemet-button {\n          --kemet-button-padding: 0.75rem;\n          font-size: 90%;\n          align-self: flex-start;\n        }\n\n        kemet-modal > div {\n          padding: 1.5rem 2rem;\n          background: white;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        url: {
          type: String
        },
        package: {
          type: String
        },
        assets: {
          type: Array
        },
        ippmData: {
          type: Object,
          reflect: true
        }
      };
    }
  }]);

  return IPPMPackage;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);


customElements.get('ippm-package') || customElements.define('ippm-package', IPPMPackage);

/***/ }),

/***/ "./components/ippm-packages.js":
/*!*************************************!*\
  !*** ./components/ippm-packages.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IPPMPackages; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ippm_package_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ippm-package.js */ "./components/ippm-package.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var IPPMPackages = /*#__PURE__*/function (_LitElement) {
  _inherits(IPPMPackages, _LitElement);

  var _super = _createSuper(IPPMPackages);

  function IPPMPackages() {
    var _this;

    _classCallCheck(this, IPPMPackages);

    _this = _super.call(this);
    _this.packages = [];
    return _this;
  }

  _createClass(IPPMPackages, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.domain = window.location.origin;
      this.getPackages();
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), this.makePackageList());
    }
  }, {
    key: "getPackages",
    value: function () {
      var _getPackages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var packages;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(this.domain, "/wp-json/ippm/v1/packages")).then(function (response) {
                  return response.json();
                });

              case 2:
                packages = _context.sent;
                this.packages = packages;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPackages() {
        return _getPackages.apply(this, arguments);
      }

      return getPackages;
    }()
  }, {
    key: "makePackageList",
    value: function makePackageList() {
      var _this2 = this;

      if (this.packages.length > 0) {
        var packageList = this.packages.map(function (thePackage) {
          return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<ippm-package url=", " package=", " .ippmData=", "></ippm-package>"])), encodeURIComponent(_this2.url), thePackage, _this2.ippmData);
        });
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", ""])), packageList);
      }

      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<p><strong>There are currently no packages available.</strong></p>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [(0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n          flex-wrap: wrap;\n          gap: 1rem;\n          margin-top: 1rem;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        url: {
          type: String
        },
        packages: {
          type: Array
        },
        ippmData: {
          type: Object
        }
      };
    }
  }]);

  return IPPMPackages;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);


customElements.get('ippm-packages') || customElements.define('ippm-packages', IPPMPackages);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_assets_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/assets-manager.js */ "./blocks/assets-manager.js");
/* harmony import */ var _blocks_dependencies_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/dependencies-manager.js */ "./blocks/dependencies-manager.js");
/* harmony import */ var _blocks_dependencies_manager_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_dependencies_manager_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ippm_packages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ippm-packages.js */ "./components/ippm-packages.js");
/* harmony import */ var _components_ippm_alert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ippm-alert.js */ "./components/ippm-alert.js");
/* harmony import */ var _scripts_upload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/upload.js */ "./scripts/upload.js");
/* harmony import */ var _scripts_upload_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_upload_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var kemet_ui_dist_components_kemet_upload_kemet_upload_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-upload/kemet-upload.js */ "./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload.js");
/* harmony import */ var kemet_ui_dist_components_kemet_upload_kemet_upload_file_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-upload/kemet-upload-file.js */ "./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload-file.js");








/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js":
/*!********************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetCheckbox; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/live.js */ "./node_modules/lit/directives/live.js");
/* harmony import */ var _utilities_controllers_forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/controllers/forms.js */ "./node_modules/kemet-ui/dist/utilities/controllers/forms.js");




class KemetCheckbox extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        input {
          cursor: pointer;
          margin: 0;
          padding: 0;
          width: var(--kemet-checkbox-size, 18px);
          height: var(--kemet-checkbox-size, 18px);
          position: absolute;
          opacity: 0;
        }

        button {
          margin: 0;
          border: none;
          background: none;
        }

        [part='checkbox'] {
          color: var(--kemet-checkbox-color, var(--kemet-color-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--kemet-checkbox-size, 18px);
          height: var(--kemet-checkbox-size, 18px);
          border: var(--kemet-checkbox-border, 1px solid var(--kemet-color-primary));
        }

        :host([rounded]) [part='checkbox'] {
          border-radius: var(--kemet-checkbox-border-radius, 4px);
        }

        :host([filled][checked]) [part='checkbox'],
        :host([filled][indeterminate]) [part='checkbox'] {
          border: none;
          background-color: var(--kemet-checkbox-filled-background-color, var(--kemet-color-primary));
        }

        [part='mark'] {
          display: flex;
          width: calc(var(--kemet-checkbox-size, 18px) - 4px);
          height: calc(var(--kemet-checkbox-size, 18px) - 4px);
        }

        :host([filled][checked]) [part='mark'],
        :host([filled][indeterminate]) [part='mark'] {
          color: var(--kemet-checkbox-filled-color, var(--kemet-color-white));
        }

        [part='message'] {
          display: block;
          margin-top: 0.5rem;
        }

        :host([status='error']) [part='message'] {
          color: var(--kemet-color-error);
        }

        :host([status='warning']) [part='message'] {
          color: var(--kemet-color-error);
        }
      `];
  }

  static get properties() {
    return {
      label: {
        type: String
      },
      checked: {
        type: Boolean,
        reflect: true
      },
      indeterminate: {
        type: Boolean,
        reflect: true
      },
      name: {
        type: String
      },
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      focused: {
        type: Boolean,
        reflect: true
      },
      rounded: {
        type: Boolean,
        reflect: true
      },
      filled: {
        type: Boolean,
        reflect: true
      },
      status: {
        type: String,
        reflect: true
      },
      message: {
        type: String
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.label = '';
    this.name = 'checkbox';
    this.disabled = false;
    this.required = false;
    this.rounded = false;
    this.filled = false;
    this.status = 'standard';
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new _utilities_controllers_forms_js__WEBPACK_IMPORTED_MODULE_3__.FormSubmitController(this);
  }

  firstUpdated() {
    this.input = this.shadowRoot.querySelector('input');
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <label part="label">
        <input
          type="checkbox"
          name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.name)}
          .value=${this.value}
          .indeterminate=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_2__.live)(this.indeterminate)}
          .checked=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_2__.live)(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${() => this.handleClick()}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
          @change=${() => this.handleChange()}
        />
        <button part="checkbox" aria-label=${this.label}>
          ${this.makeCheckMark()}
        </button>
        <span part="text">${this.label}</span>
      </label>
      ${this.makeMessage()}
    `;
  }

  click() {
    this.input.click();
  }

  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    /**
     * Fires when the state of the checkbox changes
     */

    this.dispatchEvent(new CustomEvent('kemet-checkbox-change', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  handleBlur() {
    this.focused = false;
    /**
     * Fires when the checkbox loses or receives focus
     */

    this.dispatchEvent(new CustomEvent('kemet-checkbox-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));
  }

  handleFocus() {
    this.focused = true;
    /**
     * Fires when the checkbox loses or receives focus
     */

    this.dispatchEvent(new CustomEvent('kemet-checkbox-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }

  handleChange() {
    this.value = this.checked;

    if (this.input.checkValidity()) {
      this.status = 'standard';
    }
  }

  makeMessage() {
    if (this.status === 'error' || this.status === 'warning') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<span part="message">${this.message}</span>`;
    }

    return null;
  }

  makeCheckMark() {
    if (this.checked) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(3.428571, 3.428571)">
                  <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                  <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
    }

    if (!this.checked && this.indeterminate) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(2.285714, 6.857143)">
                  <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
    }

    return null;
  }

  checkValidity() {
    return this.input.checkValidity();
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-checkbox') || customElements.define('kemet-checkbox', KemetCheckbox);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-combo/kemet-combo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-combo/kemet-combo.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetCombo; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

class KemetCombo extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
          opacity: 0;
          width: var(--kemet-combo-width, calc(100% - 2px));
          margin: var(--kemet-combo-margin, 1rem auto);
          pointer-events: none;
          display: block;
          position: relative;
          transition: opacity 0.3s ease-in-out;
        }

        :host([show]) {
          opacity: 1;
          pointer-events: auto;
        }

        ul {
          width: 100%;
          max-height: var(--kemet-combo-max-height, calc(5 * 3rem));
          position: absolute;
          z-index: 1;
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-y: scroll;
          border: var(--kemet-combo-border, 1px solid var(--kemet-color-primary));
          border-radius: var(--kemet-combo-border-radius, var(--kemet-border-radius));
          background-color: var(--kemet-combo-background-color, var(--kemet-color-white));
          box-shadow: var(--kemet-combo-shadow, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1));
        }
        li {
          line-height: 3rem;
          padding: 0 1.5rem;
          cursor: pointer;
        }
        li:hover,
        li:focus {
          color: var(--kemet-combo-hover-color, var(--kemet-color-white));
          outline: none;
          background-color: var(--kemet-combo-hover-background-color, var(--kemet-color-primary));
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Uniquely identifies the component. Should match the slug used in a control.
       */
      slug: {
        type: String
      },

      /**
       * An array of items listed for the combo box
       */
      options: {
        type: Array
      },

      /**
       * Used internally
       */
      filteredOptions: {
        type: Array
      },

      /**
       * Controls the display of the combo box
       */
      show: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.options = [];
  }

  firstUpdated() {
    // standard properties
    this.field = this.closest('kemet-field');
    this.input = this.field.querySelector('[slot="input"]'); // managed properties

    this.slug = this.field.slug || 'slug'; // events listeners

    this.input.addEventListener('kemet-input-input', this.handleInput.bind(this));
    this.input.addEventListener('keydown', event => this.handleInputKeyDown(event));
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <div
        role="combobox"
        aria-expanded=${this.show}
        aria-controls="${this.slug}-listbox"
        aria-haspopup="listbox"
        id="${this.slug}-combobox"
        aria-label="${this.field?.label}"
      >
        <ul role="listbox" aria-labelledby="${this.slug}-label" id="${this.slug}-listbox">
          ${this.makeOptions()}
        </ul>
      </div>
    `;
  }

  makeOptions() {
    if (this.input) {
      this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(this.input.value?.toLowerCase()) !== -1);
      const options = this.filteredOptions.map((option, index) => lit__WEBPACK_IMPORTED_MODULE_0__.html`<li
            id="${this.slug}-option-${index}"
            role="option"
            tabindex="0"
            aria-selected="false"
            @click=${event => this.handleSelection(event)}
            @keydown=${event => this.handleOptionKeyDown(event)}
          >
            ${option}
          </li>`);
      return options;
    }

    return null;
  }

  handleInput(event) {
    this.makeOptions();

    if (event.detail.length > 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  handleSelection(event) {
    this.input.value = event.target.innerText;
    this.show = false;
    /**
     * Fires when a selection has been made
     */

    this.dispatchEvent(new CustomEvent('kemet-combo-selection', {
      bubbles: true,
      composed: true,
      detail: {
        element: event.target,
        text: event.target.innerText,
        id: event.target.getAttribute('id')
      }
    }));
  }

  handleOptionKeyDown(event) {
    event.preventDefault();

    if (event.code === 'ArrowDown') {
      const next = event.target.nextElementSibling;

      if (next) {
        next.focus();
      } else {
        this.shadowRoot.querySelector('li').focus();
      }
    }

    if (event.code === 'ArrowUp') {
      const previous = event.target.previousElementSibling;

      if (previous) {
        previous.focus();
      } else {
        this.shadowRoot.querySelector('li:last-child').focus();
      }
    }

    if (event.code === 'Escape' || event.code === 'Tab') {
      this.show = false;
      this.input.focus();
    }

    if (event.code === 'Enter' || event.code === 'Space') {
      this.handleSelection(event);
    }
  }

  handleInputKeyDown(event) {
    if (event.code === 'ArrowDown') {
      this.shadowRoot.querySelector('li').focus();
    }

    if (event.code === 'Escape') {
      this.show = false;
    }
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-combo') || customElements.define('kemet-combo', KemetCombo);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-field/kemet-field.js":
/*!**************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-field/kemet-field.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetField; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

class KemetField extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          position: relative;
          display: block;
        }

        label span {
          color: inherit;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.8rem;
        }

        :host([status='error']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='success']) kemet-icon {
          color: var(--kemet-color-success);
        }

        :host([status='warning']) kemet-icon {
          color: var(--kemet-color-warning);
        }

        .message {
          font-size: 0.9rem;
          line-height: 1;
          display: block;
          margin-top: 0.8rem;
        }

        :host([status='error']) .message {
          color: var(--kemet-color-error);
        }

        :host([status='success']) .message {
          color: var(--kemet-color-success);
        }

        :host([status='warning']) .message {
          color: var(--kemet-color-warning);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Uniquely identifies the control. Use the same slug for slotted sub components.
       */
      slug: {
        type: String
      },

      /**
       * The label text
       */
      label: {
        type: String
      },

      /**
       * The validation message for error or success
       */
      message: {
        type: String
      },

      /**
       * Determines if the containing input is focused
       */
      focused: {
        type: Boolean,
        reflect: true
      },

      /**
       * The validation status of standard, error, or success
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Is true when the containing input has a value
       */
      filled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The length of the containing input
       */
      length: {
        type: Number
      },

      /**
       * Determines the disabled state of the control
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The icon while in an error or warning state
       */
      errorIcon: {
        type: String,
        attribute: 'error-icon'
      },

      /**
       * The icon while in an success state
       */
      successIcon: {
        type: String,
        attribute: 'success-icon'
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.status = 'standard';
    this.errorIcon = 'exclamation-triangle-fill';
    this.successIcon = 'check-lg'; // listeners

    this.addEventListener('kemet-input-focused', event => this.handleFocused(event));
    this.addEventListener('kemet-input-status', event => this.handleStatus(event));
    this.addEventListener('kemet-input-input', event => this.handleInput(event));
    this.addEventListener('kemet-count-status', event => this.handleStatus(event));
    this.addEventListener('kemet-combo-selection', event => this.handleSelection(event));
  }

  firstUpdated() {
    this.slotInput = this.querySelector('[slot="input"]');
    this.slotCombo = this.querySelector('[slot="combo"]');

    if (this.slotInput.value) {
      this.length = this.slotInput.value.length;
    } else {
      this.length = 0;
    }
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <label for="${this.slug}" id="${this.slug}-label" part="label">
        <span>${this.label}${this.makeStatusIcon()}</span>
        <slot name="input"></slot>
      </label>
      ${this.makeStatusMessage()}
      <slot name="component"></slot>
    `;
  }

  makeStatusIcon() {
    if (this.status === 'error' || this.status === 'warning') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<kemet-icon icon="${this.errorIcon}" size="16"></kemet-icon>`;
    }

    if (this.status === 'success') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<kemet-icon icon="${this.successIcon}" size="16"></kemet-icon>`;
    }

    return null;
  }

  makeStatusMessage() {
    if (this.status !== 'standard') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<span class="message" part="message">${this.message}</span>`;
    }

    return null;
  }

  handleFocused(event) {
    this.focused = event.detail;

    if (!this.focused && this.slotCombo && this.slotCombo.options.length < 1) {
      this.slotCombo.show = false;
    }
  }

  handleStatus(event) {
    this.status = event.detail.status;
  }

  handleInput(event) {
    /**
     * Fires when input fires on the input slot
     */
    this.dispatchEvent(new CustomEvent('kemet-field-input', {
      bubbles: false,
      detail: event.detail.length
    }));

    if (event.detail === '') {
      this.filled = false;
    } else {
      this.filled = true;
    }
  }

  handleSelection(event) {
    this.slotInput.setAttribute('aria-activedescendant', event.detail);
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-field') || customElements.define('kemet-field', KemetField);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-input/kemet-input.js":
/*!**************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-input/kemet-input.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetInput; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/live.js */ "./node_modules/lit/directives/live.js");
/* harmony import */ var _utilities_controllers_forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/controllers/forms.js */ "./node_modules/kemet-ui/dist/utilities/controllers/forms.js");




class KemetInput extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
          position: relative;
          display: block;
        }

        input {
          display: block;
          font-size: 1rem;
          width: 100%;
          height: var(--kemet-input-height, 50px);
          padding: var(--kemet-input-padding, 0.5rem 1rem);
          border: var(--kemet-input-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
        }

        input[type='color'] {
          min-width: 10rem;
        }

        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          display: none;
        }

        :host([status='error']) input {
          border: var(--kemet-input-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) input {
          border: var(--kemet-input-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) input {
          border: var(--kemet-input-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) input {
          opacity: 0.5;
        }

        :host([icon-left]) input {
          padding-left: var(--kemet-input-icon-left-padding, 3rem);
        }

        :host([icon-right]) input {
          padding-right: var(--kemet-input-icon-right-padding, 3rem);
        }

        :host([rounded]) input {
          border-radius: var(--kemet-input-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) input {
          border: var(--kemet-input-border-filled, none);
          color: var(--kemet-input-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-input-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) kemet-icon,
        :host([filled]) input::placeholder {
          color: var(--kemet-input-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) input {
          background-color: var(--kemet-input-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) input {
          background-color: var(--kemet-input-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) input {
          background-color: var(--kemet-input-background-color-warning, var(--kemet-color-warning));
        }

        kemet-icon {
          color: var(--kemet-color-primary);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        kemet-icon.left {
          left: 1rem;
        }

        kemet-icon.right {
          right: 1rem;
        }

        kemet-icon.eye,
        kemet-icon.search {
          cursor: pointer;
        }

        :host([status='error']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='warning']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='success']) kemet-icon {
          color: var(--kemet-color-success);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Used for the id of the input. Should match the slug used in a control if applicable.
       */
      slug: {
        type: String
      },

      /**
       * The name of the input
       */
      name: {
        type: String
      },

      /**
       * The placeholder attribute
       */
      placeholder: {
        type: String
      },

      /**
       * The minlength attribute
       */
      minlength: {
        type: String
      },

      /**
       * The maxlength attribute
       */
      maxlength: {
        type: String
      },

      /**
       * The min attribute
       */
      min: {
        type: String
      },

      /**
       * The max attribute
       */
      max: {
        type: String
      },

      /**
       * The step attribute
       */
      step: {
        type: String
      },

      /**
       * The autocomplete attribute
       */
      autocomplete: {
        type: String
      },

      /**
       * The pattern attribute
       */
      pattern: {
        type: String
      },

      /**
       * The input mode attribute
       */
      inputmode: {
        type: String
      },

      /**
       * The autofocus attribute
       */
      autofocus: {
        type: Boolean
      },

      /**
       * The disable attribute
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The readonly attribute
       */
      readonly: {
        type: Boolean
      },

      /**
       * The required attribute
       */
      required: {
        type: Boolean,
        reflect: true
      },

      /**
       * The type of input
       */
      type: {
        type: String
      },

      /**
       * The input's value
       */
      value: {
        type: String
      },

      /**
       * States whether or not the input is invalid
       */
      invalid: {
        type: Boolean,
        reflect: true
      },

      /**
       * The status of the input
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Activates validation on blur
       */
      validateOnBlur: {
        type: Boolean,
        attribute: 'validate-on-blur'
      },

      /**
       * Aria Autocomplete
       */
      ariaAutoComplete: {
        type: String,
        attribute: 'aria-autocomplete'
      },

      /**
       * Aria Controls
       */
      ariaControls: {
        type: String,
        attribute: 'aria-controls'
      },

      /**
       * Aria Active Descendant
       */
      ariaActiveDescendant: {
        type: String,
        attribute: 'aria-activedescendant'
      },

      /**
       * Displays rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true
      },

      /**
       * Displays a filled input box
       */
      filled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Custom Icon to the right of the input
       */
      iconRight: {
        type: String,
        reflect: true,
        attribute: 'icon-right'
      },

      /**
       * Custom Icon to the left of the input
       */
      iconLeft: {
        type: String,
        reflect: true,
        attribute: 'icon-left'
      },

      /**
       * Size of the icons
       */
      iconSize: {
        type: Number
      },

      /**
       * The HTML5 validity object.
       */
      validity: {
        type: Object
      },

      /**
       * Manages password visibility
       */
      isPasswordVisible: {
        type: Boolean
      },

      /**
       * Input Type of keypress handled through handleInput(e)
       */
      inputType: {
        type: String
      },

      /**
       * Determines if the input is focused
       */
      focused: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.name = 'input';
    this.type = 'text';
    this.value = '';
    this.status = 'standard';
    this.iconSize = 20;
    this.validateOnBlur = false;
    this.isPasswordVisible = false;
    this.focused = false;
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new _utilities_controllers_forms_js__WEBPACK_IMPORTED_MODULE_3__.FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.input = this.shadowRoot.querySelector('input');
    this.field = this.closest('kemet-field');
    this.form = this.closest('form');
    this.slug = this.field ? this.field.slug : 'input';

    if (this.field) {
      this.field.addEventListener('fmc-password-status', event => this.handleStatus(event));
    }
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <div>
        ${this.makeIconLeft()}
        <input
          part="input"
          id=${this.slug}
          name=${this.name}
          placeholder=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
          minlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.minlength)}
          maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.maxlength)}
          min=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.min)}
          max=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.max)}
          step=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.step)}
          autocomplete=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.autocomplete)}
          aria-autocomplete=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaAutoComplete)}
          aria-controls=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaControls)}
          aria-activedescendant=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaActiveDescendant)}
          pattern=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.pattern)}
          inputmode=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.inputmode)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .type="${this.type === 'password' && this.isPasswordVisible ? 'text' : this.type}"
          .value=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_2__.live)(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        ${this.makeIconRight()} ${this.makeIconClear()} ${this.makeVisibilityToggle()}
      </div>
    `;
  }
  /**
   * Makes the right icon
   * @private
   * @returns {templateResult} A right icon
   */


  makeIconRight() {
    if (this.iconRight) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <kemet-icon class="right" icon="${this.iconRight}" size="${this.iconSize ? this.iconSize : 20}"></kemet-icon>
      `;
    }

    return null;
  }
  /**
   * Makes the left icon
   * @private
   * @returns {templateResult} A left icon
   */


  makeIconLeft() {
    if (this.iconLeft) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <kemet-icon class="left" icon="${this.iconLeft}" size="${this.iconSize ? this.iconSize : 16}"></kemet-icon>
      `;
    }

    return null;
  }
  /**
   * Makes a clear icon for search.
   * @private
   * @returns {templateResult} A search icon
   */


  makeIconClear() {
    if (this.type === 'search' && this.value !== '') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <kemet-icon class="search right" icon="x-lg" size="${this.iconSize}" @click=${() => this.handleClear()}></kemet-icon>
      `;
    }

    return null;
  }
  /**
   * Makes a password visibility toggle button
   * @returns {templateResult} A mask or unmask icon
   */


  makeVisibilityToggle() {
    if (this.type === 'password') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<kemet-icon
        class="eye right"
        icon="${this.setPasswordIcon()}"
        @click=${() => this.togglePasswordVisibility()}
      ></kemet-icon>`;
    }

    return null;
  }

  setPasswordIcon() {
    if (this.isPasswordVisible) {
      return 'eye';
    }

    return 'eye-slash';
  }
  /**
   * Handles when the input receives focus
   * @private
   */


  handleFocus() {
    this.focused = true;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }
  /**
   * Handles when the input loses focus
   * @private
   */


  handleBlur() {
    if (this.validateOnBlur && this.form && !this.form.noValidate) {
      this.input.checkValidity();
      this.validity = this.input.validity;
    }

    this.focused = false;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));
  }
  /**
   * Handles when the input changes value
   * @private
   */


  handleChange() {
    this.value = this.input.value;

    if (this.input.checkValidity() && this.checkLimitValidity() && this.status !== 'success') {
      this.invalid = false;
      this.status = 'standard';
      this.validity = this.input.validity;
      /**
       * Fires when there's a change in status.
       * This event includes an object that reports:
       * 1) the status. 2) HTML5 validity object. 3) the component element.
       * Use the validity object to support custom validation messages.
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'standard',
          validity: this.input.validity,
          element: this
        }
      }));
    }
  }
  /**
   * Handles when the input receives input
   * @private
   */


  handleInput() {
    this.value = this.input.value;
    /**
     * Fires when the input receives input
     */

    this.dispatchEvent(new CustomEvent('kemet-input-input', {
      bubbles: true,
      composed: true,
      detail: this.value
    }));
  }
  /**
   * Handles when the input has an error
   * @private
   */


  handleInvalid() {
    this.validity = this.input.validity;

    if (this.validateOnBlur) {
      this.invalid = true;
      this.status = 'error';
      /**
       * Fires when there's a change in status
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'error',
          validity: this.input.validity,
          element: this
        }
      }));
    }
  }

  handleStatus(event) {
    this.status = event.detail.status;
  }
  /**
   * Toggles password visibility
   * @private
   */


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  /**
   * Handles the clear button for search
   * @private
   */


  handleClear() {
    this.value = '';
    /**
     * Fires when the input receives input
     */

    this.dispatchEvent(new CustomEvent('kemet-input-input', {
      bubbles: true,
      composed: true,
      detail: this.value
    }));
  }
  /**
   * Checks the validity of the character limit for the count component
   * @private
   * @returns {boolean}
   */


  checkLimitValidity() {
    if (this.field) {
      const count = this.field.querySelector('kemet-count');

      if (count) {
        return this.value.length < count.limit;
      }
    }

    return true;
  }
  /**
   * Checks the validity of the standard input
   * @public
   * @returns {boolean}
   */


  checkValidity() {
    return this.input.checkValidity();
  }
  /**
   * Focuses the standard input
   * @public
   */


  focus() {
    this.input.focus();
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-input') || customElements.define('kemet-input', KemetInput);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetSortableItem; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

class KemetSortableItem extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
          cursor: grab;
          display: block;
          padding: 1rem;
          border: 1px solid var(--kemet-color-primary);
        }

        :host([ghost]) {
          opacity: 0.5;
          border-style: dashed;
        }
      `];
  }

  static get properties() {
    return {
      /* Automatically set to true when an item is dragged to a new spot */
      ghost: {
        type: Boolean,
        reflect: true
      }
    };
  }

  firstUpdated() {
    this.draggable = true;
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<slot></slot>`;
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-sortable-item') || customElements.define('kemet-sortable-item', KemetSortableItem);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetSortable; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-drag-drop */ "./node_modules/mobile-drag-drop/index.min.js");
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_drag_drop__WEBPACK_IMPORTED_MODULE_1__);



const getMouseOffset = event => {
  const targetRect = event.target.getBoundingClientRect();
  const offset = {
    x: event.pageX - targetRect.left,
    y: event.pageY - targetRect.top
  };
  return offset;
};

const getElementVerticalCenter = element => {
  const rect = element.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

class KemetSortable extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
          display: flex;
          gap: 1rem;
          flex-direction: column;
        }
      `];
  }

  firstUpdated() {
    (0,mobile_drag_drop__WEBPACK_IMPORTED_MODULE_1__.polyfill)();
    this.addEventListener('dragstart', event => this.handleDragStart(event), false);
    this.addEventListener('dragenter', event => {
      event.preventDefault();
    });
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<slot></slot>`;
  }

  handleDragStart(event) {
    this.sortableItem = event.target;
    this.addEventListener('dragover', dragOverEvent => this.handleDragOver(dragOverEvent), false);
    this.addEventListener('dragend', dragEndEvent => this.handleDragEnd(dragEndEvent), false);
    setTimeout(() => {
      this.sortableItem.ghost = true;
    }, 0);
  }

  handleDragOver(event) {
    event.preventDefault();
    const {
      target
    } = event;

    if (target && target.tagName === 'KEMET-SORTABLE-ITEM') {
      const offset = getMouseOffset(event);
      const middleY = getElementVerticalCenter(event.target);

      if (offset.y > middleY) {
        this.insertBefore(this.sortableItem, target.nextSibling);
      } else {
        this.insertBefore(this.sortableItem, target);
      }
    }
  }

  handleDragEnd(event) {
    event.preventDefault();
    this.sortableItem.ghost = false;
    /**
     * Fires when an item has been moved to a new spot
     */

    this.dispatchEvent(new CustomEvent('kemet-sortable-drag-end', {
      bubbles: true,
      composed: true,
      detail: {
        event,
        current: this.sortableItem,
        all: this.querySelectorAll('kemet-sortable-item')
      }
    }));
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-sortable') || customElements.define('kemet-sortable', KemetSortable);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload-file.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload-file.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetUploadFile; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _kemet_upload_file_loaders_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemet-upload-file.loaders.styles.js */ "./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload-file.loaders.styles.js");



const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k)); // eslint-disable-next-line no-restricted-properties

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

class KemetUploadFile extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
          --kemet-upload-file-ripple-color: var(--kemet-color-primary);

          color: var(--kemet-upload-file-color, var(--kemet-color-gray7));
          display: grid;
          gap: 1rem;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: var(--kemet-upload-file-padding, 0.5rem 1rem);
          border: var(--kemet-upload-file-border, 1px solid var(--kemet-color-primary));
        }

        :host([status='error']) {
          border: 1px solid var(--kemet-color-error);
        }

        :host([status='complete']) {
          border: 1px solid var(--kemet-color-success);
        }

        h3 {
          margin: 0;
        }

        .percentage {
          font-size: clamp(2rem, 3vw, 2.5rem);
          align-self: center;
          justify-self: center;
        }

        .indicator {
          transform: scale(0.8);
        }

        :host([status='complete']) .message,
        :host([status='complete']) .indicator {
          color: var(--kemet-color-success);
        }

        :host([status='error']) .message,
        :host([status='error']) .indicator {
          color: var(--kemet-color-error);
        }
      `, _kemet_upload_file_loaders_styles_js__WEBPACK_IMPORTED_MODULE_1__.stylesLoaders];
  }

  static get properties() {
    return {
      /**
       * The name of the file
       */
      name: {
        type: String
      },

      /**
       * The number of bytes loaded
       */
      loaded: {
        type: Number
      },

      /**
       * The file size in bytes
       */
      size: {
        type: Number
      },

      /**
       * The file type
       */
      type: {
        type: String
      },

      /**
       * The status of the file. Values are complete | uploading | error.
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * A percentage of file completion that's calculated by the loaded property
       */
      percent: {
        type: Number
      },

      /**
       * An error message to give to users
       */
      message: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.loaded = 0;
    this.size = 0;
    this.percent = 0;
  }

  updated() {
    this.percent = this.calculatePercent();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="percentage" part="percentage">
        <span>${this.percent}%</span>
      </div>
      <div>
        <h3 part="filename">${this.name}</h3>
        <span part="loaded">${formatBytes(this.loaded)} / ${formatBytes(this.size)}</span>
        ${this.message ? lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="message" part="message">${this.message}</div>` : null}
      </div>
      <div class="indicator" part="indicator">
        ${this.getStatusIcon()}
      </div>
    `;
  }

  calculatePercent() {
    const percent = Math.round(this.loaded * 100.0 / this.size);
    return percent > 100 ? 100 : percent;
  }

  getStatusIcon() {
    if (this.status === 'uploading') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="lds-ripple"><div></div><div></div></div>`;
    }

    if (this.status === 'complete') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<kemet-icon icon="check-circle" size="48"></kemet-icon>`;
    }

    if (this.status === 'error') {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<kemet-icon icon="exclamation-circle" size="48"></kemet-icon>`;
    }

    return null;
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-upload-file') || customElements.define('kemet-upload-file', KemetUploadFile);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload-file.loaders.styles.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload-file.loaders.styles.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesLoaders": function() { return /* binding */ stylesLoaders; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const stylesLoaders = lit__WEBPACK_IMPORTED_MODULE_0__.css`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid var(--kemet-upload-file-ripple-color);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload.js":
/*!****************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-upload/kemet-upload.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KemetUpload; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");



const preventDefaults = event => {
  event.preventDefault();
  event.stopPropagation();
};

class KemetUpload extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return [lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
          color: var(--kemet-upload-color, var(--kemet-color-white));
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: var(--kemet-upload-height, 364px);
          border: var(--kemet-upload-border, 1rem solid var(--kemet-color-white));
          background-color: var(--kemet-upload-background-color, var(--kemet-color-primary));
        }

        :host([mobile]) {
          display: block;
          height: auto;
        }

        input {
          display: none;
        }

        .button {
          cursor: pointer;
          font-size: 1rem;
          display: block;
          color: var(--kemet-color-white);
          padding: 0.5rem 1rem;
          border: 1px solid var(--kemet-color-white);
          background-color: transparent;
        }

        .upload {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1rem;
          flex-direction: column;
          border: 2px dashed var(--kemet-color-white);
        }

        :host([over]) .upload {
          background-color: green;
        }

        :host([mobile]) .upload {
          height: 280px;
        }

        .files {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          padding: 0 1rem;
          overflow: auto;
          background-color: var(--kemet-color-white);
        }

        :host([mobile]) .files {
          padding: 0;
          max-height: 280px;
        }

        .heading {
          font-size: 1.25rem;
          margin: 0 0 2rem 0;
        }

        :host([no-drag-drop]) .heading {
          display: none;
        }

        ::slotted(:first-child) {
          margin-top: 1rem;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * A unique identifier for the component
       */
      slug: {
        type: String
      },

      /**
       * Determines what file types are accepted
       */
      accept: {
        type: String
      },

      /**
       * Allows for multiple files
       */
      multiple: {
        type: Boolean
      },

      /**
       * Automatically is true when a file is being dragged over the upload area
       */
      over: {
        type: Boolean,
        reflect: true
      },

      /**
       * Descriptive text for the upload area
       */
      heading: {
        type: String
      },

      /**
       * Displays the component in a mobile context
       */
      mobile: {
        type: Boolean,
        reflect: true
      },

      /**
       * Controls the point at which the component is considered mobile
       */
      breakpoint: {
        type: String,
        reflect: true
      },

      /**
       * If true if drag and drop support is not detected
       */
      noDragDrop: {
        type: Boolean,
        reflect: true,
        attribute: 'no-drag-drop'
      },

      /**
       * The maximum file size for uploads
       */
      maxSize: {
        type: Number,
        attribute: 'max-size'
      },

      /**
       * The browse files button text
       */
      buttonLabel: {
        type: String,
        attribute: 'button-label'
      }
    };
  }

  constructor() {
    super();
    this.slug = 'upload';
    this.breakpoint = '600px';
    this.buttonLabel = 'Browse Files';
    this.heading = 'Drag & Drop Files';
  }

  firstUpdated() {
    this.fileInputElement = this.shadowRoot.querySelector('[type="file"]');
    this.upload = this.shadowRoot.querySelector('.upload');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.upload.addEventListener(eventName, event => preventDefaults(event), false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
      this.upload.addEventListener(eventName, () => {
        this.over = true;
      }, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      this.upload.addEventListener(eventName, () => {
        this.over = false;
      }, false);
    });
    this.isMobile();
    this.hasDragDrop();
    window.addEventListener('resize', () => {
      this.isMobile();
    });
    this.upload.addEventListener('drop', event => this.handleDrop(event), false);
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="upload" part="upload">
        <kemet-icon icon="cloud-arrow-up" size="128"></kemet-icon>
        <input
          type="file"
          id=${this.slug}
          ?multiple=${this.multiple}
          accept=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accept) ? this.accept : null}
          @change=${event => this.handleChange(event)}
        />
        <h3 class="heading" part="heading">${this.heading}</h3>
        <label class="button" part="button" for=${this.slug}>${this.buttonLabel}</label>
      </div>
      <div class="files" part="files">
        <slot></slot>
      </div>
    `;
  }

  handleChange(event) {
    /**
     * Fires when files have been added
     */
    this.dispatchEvent(new CustomEvent('kemet-upload-change', {
      bubbles: true,
      composed: true,
      detail: {
        event,
        files: this.fileInputElement.files,
        fileElement: this.fileInputElement
      }
    }));
  }

  handleDrop(event) {
    /**
     * Fires when files have been added
     */
    this.dispatchEvent(new CustomEvent('kemet-upload-change', {
      bubbles: true,
      composed: true,
      detail: {
        event,
        files: event?.dataTransfer.files || [],
        fileElement: this.fileInputElement
      }
    }));
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  hasDragDrop() {
    if ('draggable' in document.createElement('span')) {
      this.noDragDrop = false;
    } else {
      this.noDragDrop = true;
    }
  }

} // eslint-disable-next-line no-unused-expressions

customElements.get('kemet-upload') || customElements.define('kemet-upload', KemetUpload);

/***/ }),

/***/ "./node_modules/kemet-ui/dist/kemet-components.js":
/*!********************************************************!*\
  !*** ./node_modules/kemet-ui/dist/kemet-components.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemetCarouselCurrent": function() { return /* binding */ KemetCarouselCurrent; },
/* harmony export */   "KemetCarouselFirst": function() { return /* binding */ KemetCarouselFirst; },
/* harmony export */   "KemetCarouselLast": function() { return /* binding */ KemetCarouselLast; },
/* harmony export */   "KemetCarouselPrev": function() { return /* binding */ KemetCarouselPrev; },
/* harmony export */   "KemetCarouselTotal": function() { return /* binding */ KemetCarouselTotal; },
/* harmony export */   "customTooltip": function() { return /* binding */ customTooltip; },
/* harmony export */   "fade": function() { return /* binding */ fade; },
/* harmony export */   "fall": function() { return /* binding */ fall; },
/* harmony export */   "flipHorizontal": function() { return /* binding */ flipHorizontal; },
/* harmony export */   "flipVertical": function() { return /* binding */ flipVertical; },
/* harmony export */   "scale": function() { return /* binding */ scale; },
/* harmony export */   "sign": function() { return /* binding */ sign; },
/* harmony export */   "slide": function() { return /* binding */ slide; },
/* harmony export */   "stylesKemetTabs": function() { return /* binding */ stylesKemetTabs; },
/* harmony export */   "stylesLoaders": function() { return /* binding */ stylesLoaders; },
/* harmony export */   "superScaled": function() { return /* binding */ superScaled; },
/* harmony export */   "tooltip": function() { return /* binding */ tooltip; }
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e$4 = Symbol(),
      n$3 = new Map();

class s$4 {
  constructor(t, n) {
    if (this._$cssResult$ = !0, n !== e$4) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    let e = n$3.get(this.cssText);
    return t$2 && void 0 === e && (n$3.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }

  toString() {
    return this.cssText;
  }

}

const o$4 = t => new s$4("string" == typeof t ? t : t + "", e$4),
      r$3 = (t, ...n) => {
  const o = 1 === t.length ? t[0] : n.reduce((e, n, s) => e + (t => {
    if (!0 === t._$cssResult$) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[s + 1], t[0]);
  return new s$4(o, e$4);
},
      i$2 = (e, n) => {
  t$2 ? e.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(t => {
    const n = document.createElement("style"),
          s = window.litNonce;
    void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
  });
},
      S$1 = t$2 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const n of t.cssRules) e += n.cssText;

  return o$4(e);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var s$3;

const e$3 = window.trustedTypes,
      r$2 = e$3 ? e$3.emptyScript : "",
      h$1 = window.reactiveElementPolyfillSupport,
      o$3 = {
  toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? r$2 : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },

  fromAttribute(t, i) {
    let s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }

},
      n$2 = (t, i) => i !== t && (i == i || t == t),
      l$4 = {
  attribute: !0,
  type: String,
  converter: o$3,
  reflect: !1,
  hasChanged: n$2
};

class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Eh(s, i);

      void 0 !== e && (this._$Eu.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = l$4) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
            e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }

  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },

      set(e) {
        const r = this[t];
        this[i] = e, this.requestUpdate(t, r, s);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l$4;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
            i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];

      for (const s of i) this.createProperty(s, t[s]);
    }

    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }

  static finalizeStyles(i) {
    const s = [];

    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());

      for (const i of e) s.unshift(S$1(i));
    } else void 0 !== i && s.push(S$1(i));

    return s;
  }

  static _$Eh(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  o() {
    var t;
    this._$Ep = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this._$Eg) && void 0 !== i ? i : this._$Eg = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this._$Eg) || void 0 === i || i.splice(this._$Eg.indexOf(t) >>> 0, 1);
  }

  _$Em() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return i$2(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }

  _$ES(t, i, s = l$4) {
    var e, r;

    const h = this.constructor._$Eh(t, s);

    if (void 0 !== h && !0 === s.reflect) {
      const n = (null !== (r = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== r ? r : o$3.toAttribute)(i, s.type);
      this._$Ei = t, null == n ? this.removeAttribute(h) : this.setAttribute(h, n), this._$Ei = null;
    }
  }

  _$AK(t, i) {
    var s, e, r;

    const h = this.constructor,
          n = h._$Eu.get(t);

    if (void 0 !== n && this._$Ei !== n) {
      const t = h.getPropertyOptions(n),
            l = t.converter,
            a = null !== (r = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== r ? r : o$3.fromAttribute;
      this._$Ei = n, this[n] = a(i, t.type), this._$Ei = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$2)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ep = this._$E_());
  }

  async _$E_() {
    this.isUpdatePending = !0;

    try {
      await this._$Ep;
    } catch (t) {
      Promise.reject(t);
    }

    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }

  scheduleUpdate() {
    return this.performUpdate();
  }

  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t, i) => this[i] = t), this._$Et = void 0);
    let i = !1;
    const s = this._$AL;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$EU();
    } catch (t) {
      throw i = !1, this._$EU(), t;
    }

    i && this._$AE(s);
  }

  willUpdate(t) {}

  _$AE(t) {
    var i;
    null === (i = this._$Eg) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this._$Ep;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this._$EC && (this._$EC.forEach((t, i) => this._$ES(i, this[i], t)), this._$EC = void 0), this._$EU();
  }

  updated(t) {}

  firstUpdated(t) {}

}

a$1.finalized = !0, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = {
  mode: "open"
}, null == h$1 || h$1({
  ReactiveElement: a$1
}), (null !== (s$3 = globalThis.reactiveElementVersions) && void 0 !== s$3 ? s$3 : globalThis.reactiveElementVersions = []).push("1.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var t$1;

const i$1 = globalThis.trustedTypes,
      s$2 = i$1 ? i$1.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      e$2 = `lit$${(Math.random() + "").slice(9)}$`,
      o$2 = "?" + e$2,
      n$1 = `<${o$2}>`,
      l$3 = document,
      h = (t = "") => l$3.createComment(t),
      r$1 = t => null === t || "object" != typeof t && "function" != typeof t,
      d = Array.isArray,
      u = t => {
  var i;
  return d(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      v = /-->/g,
      a = />/g,
      f$1 = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      _ = /'/g,
      m = /"/g,
      g = /^(?:script|style|textarea|title)$/i,
      p = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      $ = p(1),
      b = Symbol.for("lit-noChange"),
      w = Symbol.for("lit-nothing"),
      T = new WeakMap(),
      x = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;

  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new N(i.insertBefore(h(), t), t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
      A = l$3.createTreeWalker(l$3, 129, null, !1),
      C = (t, i) => {
  const o = t.length - 1,
        l = [];
  let h,
      r = 2 === i ? "<svg>" : "",
      d = c;

  for (let i = 0; i < o; i++) {
    const s = t[i];
    let o,
        u,
        p = -1,
        $ = 0;

    for (; $ < s.length && (d.lastIndex = $, u = d.exec(s), null !== u);) $ = d.lastIndex, d === c ? "!--" === u[1] ? d = v : void 0 !== u[1] ? d = a : void 0 !== u[2] ? (g.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = f$1) : void 0 !== u[3] && (d = f$1) : d === f$1 ? ">" === u[0] ? (d = null != h ? h : c, p = -1) : void 0 === u[1] ? p = -2 : (p = d.lastIndex - u[2].length, o = u[1], d = void 0 === u[3] ? f$1 : '"' === u[3] ? m : _) : d === m || d === _ ? d = f$1 : d === v || d === a ? d = c : (d = f$1, h = void 0);

    const y = d === f$1 && t[i + 1].startsWith("/>") ? " " : "";
    r += d === c ? s + n$1 : p >= 0 ? (l.push(o), s.slice(0, p) + "$lit$" + s.slice(p) + e$2 + y) : s + e$2 + (-2 === p ? (l.push(void 0), i) : y);
  }

  const u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return [void 0 !== s$2 ? s$2.createHTML(u) : u, l];
};

class E {
  constructor({
    strings: t,
    _$litType$: s
  }, n) {
    let l;
    this.parts = [];
    let r = 0,
        d = 0;
    const u = t.length - 1,
          c = this.parts,
          [v, a] = C(t, s);

    if (this.el = E.createElement(v, n), A.currentNode = this.el.content, 2 === s) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (l = A.nextNode()) && c.length < u;) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          const t = [];

          for (const i of l.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(e$2)) {
            const s = a[d++];

            if (t.push(i), void 0 !== s) {
              const t = l.getAttribute(s.toLowerCase() + "$lit$").split(e$2),
                    i = /([.?@])?(.*)/.exec(s);
              c.push({
                type: 1,
                index: r,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? M : "?" === i[1] ? H : "@" === i[1] ? I : S
              });
            } else c.push({
              type: 6,
              index: r
            });
          }

          for (const i of t) l.removeAttribute(i);
        }

        if (g.test(l.tagName)) {
          const t = l.textContent.split(e$2),
                s = t.length - 1;

          if (s > 0) {
            l.textContent = i$1 ? i$1.emptyScript : "";

            for (let i = 0; i < s; i++) l.append(t[i], h()), A.nextNode(), c.push({
              type: 2,
              index: ++r
            });

            l.append(t[s], h());
          }
        }
      } else if (8 === l.nodeType) if (l.data === o$2) c.push({
        type: 2,
        index: r
      });else {
        let t = -1;

        for (; -1 !== (t = l.data.indexOf(e$2, t + 1));) c.push({
          type: 7,
          index: r
        }), t += e$2.length - 1;
      }

      r++;
    }
  }

  static createElement(t, i) {
    const s = l$3.createElement("template");
    return s.innerHTML = t, s;
  }

}

function P(t, i, s = t, e) {
  var o, n, l, h;
  if (i === b) return i;
  let d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  const u = r$1(i) ? void 0 : i._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = P(t, d._$AS(t, i.values), d, e)), i;
}

class V {
  constructor(t, i) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  get parentNode() {
    return this._$AM.parentNode;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  p(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this._$AD,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : l$3).importNode(s, !0);
    A.currentNode = o;
    let n = A.nextNode(),
        h = 0,
        r = 0,
        d = e[0];

    for (; void 0 !== d;) {
      if (h === d.index) {
        let i;
        2 === d.type ? i = new N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new L(n, this, t)), this.v.push(i), d = e[++r];
      }

      h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
    }

    return o;
  }

  m(t) {
    let i = 0;

    for (const s of this.v) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }

}

class N {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }

  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
  }

  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }

  get startNode() {
    return this._$AA;
  }

  get endNode() {
    return this._$AB;
  }

  _$AI(t, i = this) {
    t = P(this, t, i), r$1(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.k(t) : u(t) ? this.S(t) : this.$(t);
  }

  M(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }

  k(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.M(t));
  }

  $(t) {
    this._$AH !== w && r$1(this._$AH) ? this._$AA.nextSibling.data = t : this.k(l$3.createTextNode(t)), this._$AH = t;
  }

  T(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = E.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
      const t = new V(o, this),
            i = t.p(this.options);
      t.m(s), this.k(i), this._$AH = t;
    }
  }

  _$AC(t) {
    let i = T.get(t.strings);
    return void 0 === i && T.set(t.strings, i = new E(t)), i;
  }

  S(t) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new N(this.M(h()), this.M(h()), this, this.options)) : s = i[e], s._$AI(o), e++;

    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }

  _$AR(t = this._$AA.nextSibling, i) {
    var s;

    for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }

  setConnected(t) {
    var i;
    void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }

}

class S {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
  }

  get tagName() {
    return this.element.tagName;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t, i = this, s, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o) t = P(this, t, i, 0), n = !r$1(t) || t !== this._$AH && t !== b, n && (this._$AH = t);else {
      const e = t;
      let l, h;

      for (t = o[0], l = 0; l < o.length - 1; l++) h = P(this, e[s + l], i, l), h === b && (h = this._$AH[l]), n || (n = !r$1(h) || h !== this._$AH[l]), h === w ? t = w : t !== w && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.C(t);
  }

  C(t) {
    t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }

  C(t) {
    this.element[this.name] = t === w ? void 0 : t;
  }

}

const k = i$1 ? i$1.emptyScript : "";

class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }

  C(t) {
    t && t !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }

}

class I extends S {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }

  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : w) === b) return;
    const e = this._$AH,
          o = t === w && e !== w || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== w && (e === w || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
  }

}

class L {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t) {
    P(this, t);
  }

}

const z = window.litHtmlPolyfillSupport;
null == z || z(E, N), (null !== (t$1 = globalThis.litHtmlVersions) && void 0 !== t$1 ? t$1 : globalThis.litHtmlVersions = []).push("2.2.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l$2, o$1;

class s$1 extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Dt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }

  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Dt = x(i, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return b;
  }

}

s$1.finalized = !0, s$1._$litElement$ = !0, null === (l$2 = globalThis.litElementHydrateSupport) || void 0 === l$2 || l$2.call(globalThis, {
  LitElement: s$1
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
  LitElement: s$1
});
(null !== (o$1 = globalThis.litElementVersions) && void 0 !== o$1 ? o$1 : globalThis.litElementVersions = []).push("3.2.0");
/* eslint-disable no-console */

class KemetIcon extends s$1 {
  static get properties() {
    return {
      /**
       * The name of the icon to reference.
       */
      icon: {
        type: String
      },

      /**
       * The sprite map from an open source project that an icon belongs too.
       * Values include:
       * (bootstrap | font-awesome-brand | font-awesome-regular | font-awesome-solid)
       */
      set: {
        type: String
      },

      /**
       * The width and height of the icon in pixels.
       */
      size: {
        type: Number
      }
    };
  }

  static get styles() {
    return [r$3`
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `];
  }

  constructor() {
    super();
    this.set = 'bootstrap';
    this.icon = 'alarm';
    this.size = 16;
  }

  updated() {
    this.getIcon();
    this.style.width = `${this.size}px`;
    this.style.height = `${this.size}px`;
  }

  render() {
    return $``;
  }

  async getIcon() {
    const parser = new DOMParser();
    let svgString;

    try {
      svgString = await fetch(`${this.getUrl()}/${this.icon}.svg`).then(response => response.text());

      if (svgString.indexOf('</svg>') < 0) {
        throw new Error('Not a valid svg.');
      }
    } catch (error) {
      svgString = '';
      console.error(error);
    }

    const svgElement = parser.parseFromString(svgString, 'image/svg+xml').documentElement;
    const svgPrevious = this.shadowRoot.querySelector('svg');

    if (svgElement.tagName === 'svg') {
      svgElement.setAttribute('id', this.icon);
      svgElement.setAttribute('width', `${this.size}px`);
      svgElement.setAttribute('height', `${this.size}px`);
      svgElement.setAttribute('fill', 'currentColor');
      if (svgPrevious) svgPrevious.remove();
      this.shadowRoot.appendChild(svgElement);
    } else {
      console.error(`Could not find icon "${this.icon}" in set "${this.set}"`);
      const errorIconString = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="kemet-error" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" width="${this.size}" height="${this.size}">
          <style type="text/css">
            .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
            .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#EC1C24;}
          </style>
          <g><path class="st0" d="M256,0c70.7,0,134.7,28.7,181,75c46.3,46.3,75,110.3,75,181c0,70.7-28.7,134.7-75,181   c-46.3,46.3-110.3,75-181,75c-70.7,0-134.7-28.7-181-75C28.7,390.7,0,326.7,0,256c0-70.7,28.7-134.7,75-181S185.3,0,256,0z"/><path class="st1" d="M512,256c0-70.7-28.7-134.7-75-181C390.7,28.7,326.7,0,256,0C193,0,135.5,22.8,90.9,60.6l-0.1-0.1   C85.3,65.1,80,69.9,75,75c-5,5.1-9.9,10.3-14.5,15.8l0.1,0.1C22.8,135.5,0,193,0,256c0,70.7,28.7,134.7,75,181   c46.3,46.3,110.3,75,181,75c63,0,120.5-22.8,165.1-60.6l0.1,0.1c5.4-4.6,10.7-9.5,15.8-14.5c5-5,9.9-10.3,14.5-15.8l-0.1-0.1   C489.2,376.6,512,319,512,256z M256,42.9c58.9,0,112.1,23.9,150.7,62.4c38.6,38.6,62.4,91.9,62.4,150.7c0,51.1-18.1,98-48.1,134.8   L121.2,90.9C158,60.9,204.9,42.9,256,42.9z M256,469.1c-58.8,0-112.1-23.9-150.7-62.4C66.7,368.1,42.9,314.9,42.9,256   c0-51.1,18.1-98,48.1-134.8l299.8,299.8C354,451.1,307.1,469.1,256,469.1z"/></g>
        </svg>
      `;
      const errorIconElement = parser.parseFromString(errorIconString, 'image/svg+xml').documentElement;
      if (svgPrevious) svgPrevious.remove();
      this.shadowRoot.appendChild(errorIconElement);
    }
  }

  getUrl() {
    let url;

    switch (this.set) {
      case 'bootstrap':
        url = 'https://unpkg.com/bootstrap-icons@latest/icons';
        break;

      case 'font-awesome-brands':
        url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/brands';
        break;

      case 'font-awesome-regular':
        url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/regular';
        break;

      case 'font-awesome-solid':
        url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/solid';
        break;

      default:
        url = 'https://unpkg.com/bootstrap-icons@latest/icons';
    }

    return url;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-icon') || customElements.define('kemet-icon', KemetIcon);

class KemetAccordionPanel extends s$1 {
  static get styles() {
    return [r$3`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
          padding: 1.5rem 1rem;
          border-bottom: 1px solid var(--kemet-color-primary);
        }

        .trigger {
          cursor: pointer;
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr auto;
          width: 100%;
          text-align: left;
          padding: 0;
          border: none;
          background: none;
        }

        .body {
          overflow: hidden;
          transition: all var(--kemet-accordion-panel-transition-speed, 300ms) ease;
        }

        ::slotted([slot='body']) {
          padding: 1rem 0;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Determines the opened state of the panel
       */
      opened: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the max height of the panel's body
       */
      maxHeight: {
        type: String,
        attribute: 'max-height'
      },

      /**
       * Uniquely identifies a panel for accessibility purposes
       */
      slug: {
        type: String
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.opened = undefined;
    this.maxHeight = '0px';
    this.slug = 'panel';
  }

  firstUpdated() {
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    this.bodyElement = this.querySelector('[slot="body"]');
    this.bodyElementFirst = this.bodyElement.querySelector(':first-child');
    this.bodyElementLast = this.bodyElement.querySelector(':last-child');
    if (this.bodyElementFirst) this.bodyElementFirst.style.marginTop = 0;
    if (this.bodyELementLast) this.bodyElementLast.style.marginBottom = 0;
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      this.maxHeight = `${this.bodyElement.offsetHeight}px`;
      /**
       * Fires when a panel is opened
       */

      this.dispatchEvent(new CustomEvent('kemet-accordion-panel-opened', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    if (prevProps.get('opened') && this.opened === false) {
      this.maxHeight = '0px';
      /**
       * Fires when a panel is closed
       */

      this.dispatchEvent(new CustomEvent('kemet-accordion-panel-closed', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    this.a11y();
    this.focusableBodyElements();
  }

  render() {
    return $`
      <button
        class="trigger"
        part="trigger"
        @click=${() => this.toggle()}
        @keydown=${event => this.handleKeyDown(event)}
      >
        <slot name="trigger"></slot>
        <slot name="icon"></slot>
      </button>
      <section class="body" part="body" style="max-height:${this.maxHeight};">
        <slot name="body"></slot>
      </section>
    `;
  }

  toggle() {
    this.opened = !this.opened;
  }

  focusableBodyElements() {
    const focusableElements = this.bodyElement.querySelectorAll(this.focusableSelector);

    if (this.opened) {
      focusableElements.forEach(element => {
        element.removeAttribute('tabindex');
      });
    } else {
      focusableElements.forEach(element => {
        element.setAttribute('tabindex', '-1');
      });
    }
  }

  a11y() {
    const trigger = this.shadowRoot.querySelector('.trigger');
    const body = this.shadowRoot.querySelector('.body');
    trigger.setAttribute('id', `${this.slug}-button`);
    trigger.setAttribute('aria-controls', `${this.slug}-content`);
    body.setAttribute('id', `${this.slug}-content`);
    body.setAttribute('aria-labelledby', `${this.slug}-button`);
    body.setAttribute('aria-hidden', `${!this.opened}`);
  }

  handleKeyDown(event) {
    if (event.key === 'Space' || event.key === 'Enter') {
      this.toggle();
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-accordion-panel') || customElements.define('kemet-accordion-panel', KemetAccordionPanel);

class KemetAccordion extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: block;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The index value for the most recently opened panel
       */
      currentPanel: {
        type: Number
      },

      /**
       * Support for closing all inactive panels when one is opened
       */
      togglePanels: {
        type: Boolean,
        attribute: 'toggle-panels'
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.togglePanels = false;
    this.currentPanel = undefined; // bindings

    this.addEventListener('kemet-accordion-panel-opened', this.handlePanelOpened.bind(this));
  }

  firstUpdated() {
    this.onKeyDown = event => this.handleKeyDown(event);
  }

  render() {
    return $`<slot @slotchange=${event => this.handleSlotChange(event)}></slot>`;
  }

  handleSlotChange() {
    this.panels = this.querySelectorAll('kemet-accordion-panel');
    this.panels.forEach(panel => {
      panel.removeEventListener('keydown', this.onKeyDown);
      panel.addEventListener('keydown', this.onKeyDown);
    });
  }

  handlePanelOpened(event) {
    if (this.togglePanels) {
      this.panels.forEach(panel => {
        if (panel !== event.detail) {
          panel.opened = false;
        }
      });
    }
  }

  navigatePanels(direction) {
    switch (direction) {
      case 'home':
        this.currentPanel = 0;
        break;

      case 'end':
        this.currentPanel = this.panels.length - 1;
        break;

      case 'next':
        this.currentPanel += 1;
        break;

      case 'prev':
        this.currentPanel -= 1;
        break;

      default:
        this.currentPanelFocus = 0;
        break;
    }

    if (this.currentPanel > this.panels.length - 1) this.currentPanel = 0;
    if (this.currentPanel < 0) this.currentPanel = this.panels.length - 1;
    this.panels[this.currentPanel].shadowRoot.querySelector('button').focus();
  }

  handleKeyDown(event) {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        event.preventDefault();
        event.target.click();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        this.navigatePanels('prev');
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        this.navigatePanels('next');
        break;

      case 'End':
        event.preventDefault();
        this.navigatePanels('end');
        break;

      case 'Home':
        event.preventDefault();
        this.navigatePanels('home');
        break;
    }
  }

  expandAll() {
    this.panels.forEach(panel => {
      panel.opened = true;
    });
  }

  collapseAll() {
    this.panels.forEach(panel => {
      panel.opened = false;
    });
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-accordion') || customElements.define('kemet-accordion', KemetAccordion);

class KemetBadge extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--kemet-badge-padding, 10px);
          line-height: 1;
          color: var(--kemet-color-white);
        }

        :host([status='primary']) {
          background-color: var(--kemet-color-primary);
        }

        :host([status='success']) {
          background-color: var(--kemet-color-success);
        }

        :host([status='standard']) {
          background-color: var(--kemet-color-gray6);
        }

        :host([status='warning']) {
          background-color: var(--kemet-color-warning);
        }

        :host([status='error']) {
          background-color: var(--kemet-color-error);
        }

        :host([circle]) {
          border-radius: 50%;
        }

        :host([pill]) {
          border-radius: 99rem;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The status of the badge
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Displays the badge in a circle
       */
      circle: {
        type: Boolean,
        reflect: true
      },

      /**
       * Rounds the corners on the badge
       */
      pill: {
        type: Boolean,
        reflect: true
      },

      /**
       * Padding on the badge as a circle
       */
      circlePadding: {
        type: Number,
        attribute: 'circle-padding'
      }
    };
  }

  constructor() {
    super();
    this.status = 'primary';
    this.pill = false;
    this.circle = false;
    this.circlePadding = 0;
  }

  render() {
    return $`<slot @slotchange=${() => this.handleSlotChange()}></slot>`;
  }

  handleSlotChange() {
    if (this.circle) {
      this.style.height = `${this.offsetWidth + this.circlePadding}px`;
      this.style.width = `${this.offsetWidth + this.circlePadding}px`;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-badge') || customElements.define('kemet-badge', KemetBadge);

class FormSubmitController {
  host;
  form;
  options;

  constructor(host, options) {
    (this.host = host).addController(this);
    this.options = {
      form: input => input.closest('form'),
      name: input => input.name,
      value: input => input.value,
      disabled: input => input.disabled,
      checkValidity: input => typeof input.checkValidity === 'function' ? input.checkValidity() : true,
      ...options
    };
    this.handleFormData = this.handleFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  hostConnected() {
    this.form = this.options.form(this.host);

    if (this.form) {
      this.form.addEventListener('formdata', this.handleFormData);
      this.form.addEventListener('submit', this.handleFormSubmit);
    }
  }

  hostDisconnected() {
    if (this.form) {
      this.form.removeEventListener('formdata', this.handleFormData);
      this.form.removeEventListener('submit', this.handleFormSubmit);
      this.form = undefined;
    }
  }

  handleFormData(event) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);

    if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        value.forEach(val => {
          event.formData?.append(name, val.toString());
        });
      } else {
        event.formData?.append(name, value.toString());
      }
    }
  }

  handleFormSubmit(event) {
    const disabled = this.options.disabled(this.host);
    const checkValidity = this.options.checkValidity;
    this.form = this.options.form(this.host);

    if (this.form && !this.form.noValidate && !disabled && !checkValidity(this.host)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const components = this.form.querySelectorAll('kemet-input, kemet-textarea, kemet-select, kemet-checkbox, kemet-radios');
      components.forEach(component => {
        component.checkValidity();

        if (!component.checkValidity()) {
          component.status = 'error';
          component.invalid = true;
          component.dispatchEvent(new CustomEvent('kemet-input-status', {
            bubbles: true,
            composed: true,
            detail: {
              status: 'error',
              validity: component.validity ? component.validity : {},
              element: component
            }
          }));
        }

        if (component.checkLimitValidity && !component.checkLimitValidity()) {
          component.status = 'error';
          component.invalid = true;
          component.dispatchEvent(new CustomEvent('kemet-input-status', {
            bubbles: true,
            composed: true,
            detail: {
              status: 'error',
              validity: {
                passedLimit: true
              },
              element: component
            }
          }));
        }
      });
    }
  }

  submit() {
    const button = document.createElement('button');

    if (this.form) {
      button.type = 'submit';
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clip = 'rect(0 0 0 0)';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';
      this.form.append(button);
      button.click();
      button.remove();
    }
  }

}

class KemetButton extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: var(--kemet-button-font-size, inherit);
          color: var(--kemet-button-color, var(--kemet-color-white));
          width: var(--kemet-button-width, auto);
          height: var(--kemet-button-height, auto);
          border: var(--kemet-button-border, 0);
          border-radius: var(--kemet-button-border-radius, 0);
          transition: filter var(--kemet-button-transition-speed, 300ms) ease;
          background-color: var(--kemet-button-background-color, var(--kemet-color-primary));
        }

        :host(:hover:not([disabled])) {
          filter: brightness(var(--kemet-button-hover-brightness, 1.25));
        }

        :host([disabled]) {
          opacity: var(--kemet-button-disabled-opacity, 0.5);
        }

        .button {
          cursor: pointer;
          text-decoration: none;
          display: flex;
          gap: var(--kemet-button-gap, 0.5rem);
          align-items: center;
          color: inherit;
          font-size: inherit;
          padding: var(--kemet-button-padding, 1rem 1.25rem);
          border: 0;
          background: none;
        }

        :host([disabled]) .button {
          cursor: not-allowed;
        }

        :host([type='text']) {
          --kemet-button-color: var(--kemet-color-primary);
          --kemet-button-background-color: none;
        }

        :host([type='text']:hover) {
          text-decoration: var(--kemet-button-hover-decoration, underline);
        }

        :host([type='circle']) {
          --kemet-button-border-radius: 50%;
          --kemet-button-width: var(--kemet-button-circle-size, 50px);
          --kemet-button-height: var(--kemet-button-circle-size, 50px);
        }

        :host([type='rounded']) {
          --kemet-button-border-radius: var(--kemet-button-rounded-amount, 6px);
        }

        :host([type='pill']) {
          --kemet-button-border-radius: 10rem;
        }

        :host([outlined]) {
          --kemet-button-color: var(--kemet-color-primary);
          --kemet-button-background-color: var(--kemet-color-white);
          --kemet-button-border: var(--kemet-button-border-width, 1px) var(--kemet-button-border-style, solid) var(--kemet-button-border-color, var(--kemet-color-primary));
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Determines whether or not the button is active
       */
      active: {
        type: Boolean,
        reflect: true
      },

      /**
       * Is true when the button is hovered
       */
      hover: {
        type: Boolean,
        reflect: true
      },

      /**
       * Is true when the button is focused
       */
      focused: {
        type: Boolean,
        reflect: true
      },

      /**
       * The url a button should link too
       */
      link: {
        type: String
      },

      /**
       * Outline style for a button
       */
      outlined: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines whether not a button is disabled
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Controls the type of button
       * standard | text | circle | rounded | pill
       */
      type: {
        type: String,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
    this.addEventListener('blur', this.handleBlur.bind(this));
    this.addEventListener('keyup', event => this.handleKeyUp(event));
    this.type = 'standard';
    this.outline = false;
    this.disable = false;
    /**
      * Used only for form reactive controller
      */

    this.formSubmitController = new FormSubmitController(this);
  }

  render() {
    if (this.link && !this.disabled) {
      return $`
        <a href=${this.link} class="button" role="button" part="button">
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </a>
      `;
    }

    return $`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </button>
    `;
  }
  /**
   * Sets hover to true onMouseOver
   * @private
   */


  handleMouseOver() {
    this.hover = true;
  }
  /**
   * Sets hover to false onMouseOut
   * @private
   */


  handleMouseOut() {
    this.hover = false;
  }
  /**
   * Handles click behavior
   * @private
   */


  handleClick() {
    this.hover = false;
    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 300);

    if (this.shadowRoot.querySelector('button')) {
      this.formSubmitController.submit(this);
    }
  }
  /**
   * Handles blur
   * @private
   */


  handleBlur() {
    this.focused = false;
    this.active = false;
    this.hover = false;
  }
  /**
   * Handles keyup
   * @private
   * @param {object} event - event object
   */


  handleKeyUp(event) {
    if (event.key === 'Tab') {
      this.focused = true;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-button') || customElements.define('kemet-button', KemetButton);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const l$1 = l => null != l ? l : w;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const t = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
},
      e$1 = t => (...e) => ({
  _$litDirective$: t,
  values: e
});

class i {
  constructor(t) {}

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }

  _$AS(t, e) {
    return this.update(t, e);
  }

  update(t, e) {
    return this.render(...e);
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const r = o => void 0 === o.strings,
      f = {},
      s = (o, i = f) => o._$AH = i;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const l = e$1(class extends i {
  constructor(r$1) {
    if (super(r$1), r$1.type !== t.PROPERTY && r$1.type !== t.ATTRIBUTE && r$1.type !== t.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!r(r$1)) throw Error("`live` bindings can only contain a single expression");
  }

  render(r) {
    return r;
  }

  update(i, [t$1]) {
    if (t$1 === b || t$1 === w) return t$1;
    const o = i.element,
          l = i.name;

    if (i.type === t.PROPERTY) {
      if (t$1 === o[l]) return b;
    } else if (i.type === t.BOOLEAN_ATTRIBUTE) {
      if (!!t$1 === o.hasAttribute(l)) return b;
    } else if (i.type === t.ATTRIBUTE && o.getAttribute(l) === t$1 + "") return b;

    return s(i), t$1;
  }

});

class KemetCheckbox extends s$1 {
  static get styles() {
    return [r$3`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        input {
          cursor: pointer;
          margin: 0;
          padding: 0;
          width: var(--kemet-checkbox-size, 18px);
          height: var(--kemet-checkbox-size, 18px);
          position: absolute;
          opacity: 0;
        }

        button {
          margin: 0;
          border: none;
          background: none;
        }

        [part='checkbox'] {
          color: var(--kemet-checkbox-color, var(--kemet-color-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--kemet-checkbox-size, 18px);
          height: var(--kemet-checkbox-size, 18px);
          border: var(--kemet-checkbox-border, 1px solid var(--kemet-color-primary));
        }

        :host([rounded]) [part='checkbox'] {
          border-radius: var(--kemet-checkbox-border-radius, 4px);
        }

        :host([filled][checked]) [part='checkbox'],
        :host([filled][indeterminate]) [part='checkbox'] {
          border: none;
          background-color: var(--kemet-checkbox-filled-background-color, var(--kemet-color-primary));
        }

        [part='mark'] {
          display: flex;
          width: calc(var(--kemet-checkbox-size, 18px) - 4px);
          height: calc(var(--kemet-checkbox-size, 18px) - 4px);
        }

        :host([filled][checked]) [part='mark'],
        :host([filled][indeterminate]) [part='mark'] {
          color: var(--kemet-checkbox-filled-color, var(--kemet-color-white));
        }

        [part='message'] {
          display: block;
          margin-top: 0.5rem;
        }

        :host([status='error']) [part='message'] {
          color: var(--kemet-color-error);
        }

        :host([status='warning']) [part='message'] {
          color: var(--kemet-color-error);
        }
      `];
  }

  static get properties() {
    return {
      label: {
        type: String
      },
      checked: {
        type: Boolean,
        reflect: true
      },
      indeterminate: {
        type: Boolean,
        reflect: true
      },
      name: {
        type: String
      },
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      focused: {
        type: Boolean,
        reflect: true
      },
      rounded: {
        type: Boolean,
        reflect: true
      },
      filled: {
        type: Boolean,
        reflect: true
      },
      status: {
        type: String,
        reflect: true
      },
      message: {
        type: String
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.label = '';
    this.name = 'checkbox';
    this.disabled = false;
    this.required = false;
    this.rounded = false;
    this.filled = false;
    this.status = 'standard';
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    this.input = this.shadowRoot.querySelector('input');
  }

  render() {
    return $`
      <label part="label">
        <input
          type="checkbox"
          name=${l$1(this.name)}
          .value=${this.value}
          .indeterminate=${l(this.indeterminate)}
          .checked=${l(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${() => this.handleClick()}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
          @change=${() => this.handleChange()}
        />
        <button part="checkbox" aria-label=${this.label}>
          ${this.makeCheckMark()}
        </button>
        <span part="text">${this.label}</span>
      </label>
      ${this.makeMessage()}
    `;
  }

  click() {
    this.input.click();
  }

  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    /**
     * Fires when the state of the checkbox changes
     */

    this.dispatchEvent(new CustomEvent('kemet-checkbox-change', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  handleBlur() {
    this.focused = false;
    /**
     * Fires when the checkbox loses or receives focus
     */

    this.dispatchEvent(new CustomEvent('kemet-checkbox-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));
  }

  handleFocus() {
    this.focused = true;
    /**
     * Fires when the checkbox loses or receives focus
     */

    this.dispatchEvent(new CustomEvent('kemet-checkbox-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }

  handleChange() {
    this.value = this.checked;

    if (this.input.checkValidity()) {
      this.status = 'standard';
    }
  }

  makeMessage() {
    if (this.status === 'error' || this.status === 'warning') {
      return $`<span part="message">${this.message}</span>`;
    }

    return null;
  }

  makeCheckMark() {
    if (this.checked) {
      return $`
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(3.428571, 3.428571)">
                  <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                  <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
    }

    if (!this.checked && this.indeterminate) {
      return $`
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(2.285714, 6.857143)">
                  <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
    }

    return null;
  }

  checkValidity() {
    return this.input.checkValidity();
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-checkbox') || customElements.define('kemet-checkbox', KemetCheckbox);

class KemetCarouselCurrent extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: inline-block;
        }
      `];
  }

  static get properties() {
    return {
      current: {
        type: Number
      }
    };
  }

  firstUpdated() {
    this.carousel = this.closest('kemet-carousel');
  }

  updated() {
    this.current = this.carousel.index + 1;
  }

  render() {
    return $`${this.current}`;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-current') || customElements.define('kemet-carousel-current', KemetCarouselCurrent);

class KemetCarouselFirst extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  render() {
    return $`
      <span tabindex="0" @keyup=${() => this.first()} @click=${() => this.first()}>
        <slot></slot>
      </span>
    `;
  }

  first() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-first', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-first') || customElements.define('kemet-carousel-first', KemetCarouselFirst);

class KemetCarouselLast extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  render() {
    return $`
      <span tabindex="0" @keyup=${() => this.last()} @click=${() => this.last()}>
        <slot></slot>
      </span>
    `;
  }

  last() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-last', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-last') || customElements.define('kemet-carousel-last', KemetCarouselLast);

class KemetCarouselPrev extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  render() {
    return $`
      <span tabindex="0" @keyup=${() => this.prev()} @click=${() => this.prev()}>
        <slot></slot>
      </span>
    `;
  }

  prev() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-prev', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-prev') || customElements.define('kemet-carousel-prev', KemetCarouselPrev);

class KemetCarouselLink extends s$1 {
  static get properties() {
    return {
      slide: {
        type: Number,
        reflect: true
      },
      selected: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [r$3`
        :host([selected]) {
          color: var(--kemet-carousel-link-selected-color, var(--kemet-color-primary));
        }

        :host(:not([selected])) {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `];
  }

  render() {
    return $`
      <span tabindex="0" @keyup=${() => this.changed()} @click=${() => this.changed()}>
        <slot></slot>
      </span>
    `;
  }

  changed() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-link', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-link') || customElements.define('kemet-carousel-link', KemetCarouselLink);

class KemetCarouselNext extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  render() {
    return $`
      <span tabindex="0" @keyup=${() => this.next()} @click=${() => this.next()}>
        <slot></slot>
      </span>
    `;
  }

  next() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-next', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-next') || customElements.define('kemet-carousel-next', KemetCarouselNext);

class KemetCarouselSlide extends s$1 {
  static get styles() {
    return [r$3`
        :host,
        :host *,
        :host *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          flex: 0 0 auto;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Determines if the slide is selected
       */
      selected: {
        type: Boolean,
        reflect: true
      },
      'aria-hidden': {
        type: String,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.selected = false;
    this['aria-hidden'] = 'true';
  }

  render() {
    return $`
      <slot></slot>
    `;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-slide') || customElements.define('kemet-carousel-slide', KemetCarouselSlide);

class KemetCarouselTotal extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: inline-block;
        }
      `];
  }

  static get properties() {
    return {
      total: {
        type: Number
      }
    };
  }

  firstUpdated() {
    this.carousel = this.closest('kemet-carousel');
  }

  updated() {
    this.total = this.carousel.total;
  }

  render() {
    return $`${this.total}`;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel-total') || customElements.define('kemet-carousel-total', KemetCarouselTotal);

class KemetCarousel extends s$1 {
  static get styles() {
    return r$3`
      :host,
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: center;
        width: var(--kemet-carousel-width, 100%);
        height: var(--kemet-carousel-height, auto);
        overflow: visible;
      }

      :host([arrows]) {
        grid-template-columns: auto minmax(0, 1fr) auto;
      }

      .toolbar {
        display: flex;
        gap: var(--kemet-carousel-toolbar-gap, 1rem);
        align-items: center;
        justify-content: var(--kemet-carousel-toolbar-justify-content, center);
        line-height: 1;
        padding: var(--kemet-carousel-toolbar-padding, 1rem);
      }

      :host([inner]) .toolbar {
        width: var(--kemet-carousel-toolbar-inner-width, 100%);
        position: absolute;
        bottom: var(--kemet-carousel-toolbar-inner-bottom, 0);
        top: var(--kemet-carousel-toolbar-inner-top, auto);
        color: var(--kemet-carousel-toolbar-inner-color, var(--kemet-color-white));
        background-color: var(--kemet-carousel-toolbar-inner-background-color, rgba(0, 0, 0, 0.4));
      }

      .slides {
        overflow: hidden;
        position: relative;
        padding: 1rem 0;
        border: var(--kemet-carousel-slides-border, 1px solid var(--kemet-color-gray1));
      }

      .slider {
        display: flex;
        flex-wrap: nowrap;
        transition: transform var(--kemet-carousel-transition-speed, 300ms) ease;
      }

      ::slotted([slot='next']),
      ::slotted([slot='prev']) {
        opacity: var(--kemet-carousel-arrows-opacity, 0.25);
        transition: opacity var(--kemet-carousel-arrows-transition-speed, 300ms) ease-in-out;
      }

      :host(:hover) ::slotted([slot='next']),
      :host(:hover) ::slotted([slot='prev']) {
        opacity: var(--kemet-carousel-arrows-opacity-hover, 1);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The current slide index.
       */
      index: {
        type: Number,
        reflect: true
      },

      /**
       * The total amount of slides
       */
      total: {
        type: Number
      },

      /**
       * The width of the slider
       */
      sliderWidth: {
        type: String
      },

      /**
       * The X position of the slider
       */
      sliderTranslateX: {
        type: String
      },

      /**
       * Displays the toolbar inside the carousel container
       */
      inner: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines whether or not to display arrows
       */
      arrows: {
        type: Boolean,
        reflect: true
      },

      /**
       * Default options for the carousel
       */
      options: {
        type: Object
      },

      /**
       * Options are different breakpoints for the carousel. Is mobile first.
       */
      breakpoints: {
        type: Object
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.index = 0;
    this.total = 0;
    this.sliderWidth = 'auto';
    this.sliderTranslateX = '0';
    this.inner = false;
    this.arrows = false;
    this.options = {
      perView: 1,
      perMove: 1,
      gap: 12,
      slideshow: 0,
      rewind: true,
      center: false
    };
    this.breakpoints = {
      768: {
        perView: 2,
        gap: 24,
        rewind: false
      },
      1280: {
        perView: 2.5,
        center: true
      }
    }; // bindings

    this.addEventListener('kemet-carousel-first', this.handleFirst.bind(this));
    this.addEventListener('kemet-carousel-last', this.handleLast.bind(this));
    this.addEventListener('kemet-carousel-next', this.handleNext.bind(this));
    this.addEventListener('kemet-carousel-prev', this.handlePrev.bind(this));
    this.addEventListener('kemet-carousel-link', this.handleLink.bind(this));
  }

  firstUpdated() {
    // standard properties
    this.slides = [];
    this.links = []; // elements

    this.containerElement = this.shadowRoot.querySelector('[part="container"]');
    this.slidesElement = this.shadowRoot.querySelector('[part="slides"]');
    this.sliderElement = this.shadowRoot.querySelector('[part="slider"]');
    this.toolbarElement = this.shadowRoot.querySelector('[part="toolbar"]');
    this.toolbarSlotElement = this.querySelector('[slot="toolbar"]');
    this.informationElement = this.querySelector('kemet-carousel-information'); // events

    window.addEventListener('resize', () => {
      this.setSlideSize();
      this.setToolbarSize();
      this.updateIndex(this.index);
    });
    this.sliderElement.addEventListener('transitionend', this.handleTransitionEnd.bind(this)); // methods

    this.swipeMove = event => {
      event.preventDefault();
      const pageX = event.touches ? event.touches[0].pageX : event.pageX;
      const currentSlide = this.slides[this.index];
      this.sliderTranslateX = `${pageX - this.startX - currentSlide.offsetLeft}px`;
    };

    this.handleSlideShow = () => {
      if (this.getOption('slideshow') > 0) {
        this.updateIndex(this.index + 1);
        clearTimeout(this.handleSlideShow);
      }
    }; // setup


    this.setSlideSize();
    this.goToSlide(this.index);
  }

  updated(prevProps) {
    this.setSlideSize();
    this.setToolbarSize();

    if (prevProps.has('index')) {
      this.updateIndex(this.index);
      setTimeout(this.handleSlideShow, this.getOption('slideshow') * 1000);
    }
  }

  render() {
    return $`
      <slot name="prev" @slotchange=${this.handleArrows}></slot>
      <div class="container" part="container">
        <section
          class="slides"
          part="slides"
          @mousedown=${this.swipeStart}
          @mouseup=${this.swipeEnd}
          @touchstart=${this.swipeStart}
          @touchend=${this.swipeEnd}
          @mouseleave=${this.swipeLeave}
        >
          <div class="slider" part="slider" style="width:${this.sliderWidth}; transform:translateX(${this.sliderTranslateX});">
            <slot name="slides" @slotchange="${this.handleSlotChange}"></slot>
          </div>
        </section>
        ${this.makeToolbar()}
      </div>
      <slot name="next" @slotchange=${this.handleArrows}></slot>
    `;
  }

  swipeStart(event) {
    this.startX = event.touches ? event.touches[0].pageX : event.pageX;
    this.addEventListener('mousemove', this.swipeMove);
    this.addEventListener('touchmove', this.swipeMove);
  }

  swipeEnd(event) {
    this.updateIndex(this.swipeUpdate(event));
    this.removeEventListener('mousemove', this.swipeMove, false);
    this.removeEventListener('touchmove', this.swipeMove, false);
  }

  swipeUpdate(event) {
    const pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
    const direction = this.startX > pageX ? 'right' : 'left';
    const threshold = this.slidesElement.offsetWidth / 3;
    const diff = this.startX - pageX;
    const shouldUpdate = Math.abs(diff) > threshold;
    let {
      index
    } = this;

    if (shouldUpdate && direction === 'right') {
      index = this.index >= this.slides.length - 1 ? this.index : this.index + 1;
    }

    if (shouldUpdate && direction === 'left') {
      index = this.index < 1 ? 0 : this.index - 1;
    }

    return index;
  }

  swipeLeave() {
    this.updateIndex(this.index);
    this.removeEventListener('mousemove', this.swipeMove, false);
    this.removeEventListener('touchmove', this.swipeMove, false);
  }

  setSlideSize() {
    this.slideWidth = this.containerElement.offsetWidth / this.getOption('perView');
    this.slides.forEach(slide => {
      slide.style.marginLeft = `${this.getOption('gap') / 2}px`;
      slide.style.marginRight = `${this.getOption('gap') / 2}px`;
      slide.style.width = `${this.slideWidth - this.getOption('gap')}px`;
    });
    this.sliderWidth = `${this.slideWidth * this.slides.length}px`;
  }

  setToolbarSize() {
    if (this.inner && this.toolbarElement) {
      const width = this.slidesElement.offsetWidth;
      this.toolbarElement.style.width = `${width}px`;
    }
  }

  makeToolbar() {
    if (this.toolbarSlotElement) {
      return $`
        <section class="toolbar" part="toolbar">
          <slot name="toolbar"></slot>
        </section>
      `;
    }

    return null;
  }

  handleSlotChange() {
    const slides = this.querySelectorAll('kemet-carousel-slide');
    const links = this.querySelectorAll('kemet-carousel-link'); // handle slides

    slides.forEach(slide => {
      this.slides.push(slide);
    });
    this.updateInformation();
    this.total = slides.length;
    slides[this.index].selected = true; // handle links

    links.forEach(link => {
      this.links.push(link);
    });
  }

  handleArrows() {
    this.arrows = true;
  }

  handleFirst() {
    this.updateIndex(0);
  }

  handleLast() {
    this.updateIndex(this.slides.length - 1);
  }

  handleNext() {
    let newIndex = this.index + this.getOption('perMove');

    if (newIndex >= this.slides.length) {
      if (this.getOption('rewind')) {
        newIndex = 0;
      } else {
        newIndex = this.index;
      }
    }

    this.updateIndex(newIndex);
  }

  handlePrev() {
    let newIndex = this.index - this.getOption('perMove'); // send them to the last slide

    if (newIndex < 0) {
      if (this.getOption('rewind')) {
        newIndex = this.slides.length - 1;
      } else {
        newIndex = this.index;
      }
    }

    this.updateIndex(newIndex);
  }

  updateIndex(newIndex) {
    let currentSlide = this.slides[this.index];
    let currentLink = this.links[newIndex]; // remove selected from all links

    this.links.forEach(link => {
      link.selected = false;
    }); // if current link is invalid assume it's the first link

    if (!currentLink) {
      [currentLink] = this.links;
    } // add selected to current link


    if (currentLink) {
      currentLink.selected = true;
    }

    if (currentSlide) {
      currentSlide.setAttribute('aria-hidden', 'true'); // correct for invalid indexes

      if (newIndex > -1 && newIndex < this.slides.length) {
        this.index = newIndex;
      } else {
        // eslint-disable-next-line no-console
        console.warn('An invalid index number was entered. The kemet-carousel has been reset to the first slide.');
        this.index = 0;
      } // move


      this.goToSlide(this.index); // update new slide

      currentSlide = this.slides[this.index];
      currentSlide.setAttribute('aria-hidden', 'false');
      this.slides.forEach(slide => {
        slide.selected = false;
      });
      currentSlide.selected = true; // notify consumers of slide change

      /**
       * Fires with the a slide has begun to change
       */

      this.dispatchEvent(new CustomEvent('kemet-carousel-change-start', {
        bubbles: true,
        composed: true,
        detail: this
      })); // update information element

      this.updateInformation();
    }
  }

  updateInformation() {
    this.informationSlot = this.slides[this.index].querySelector('[slot="information"]');

    if (this.informationElement) {
      if (this.informationSlot) {
        this.informationElement.innerHTML = this.informationSlot.outerHTML;
      } else {
        this.informationElement.innerHTML = '';
      }
    }
  }

  goToSlide(index) {
    if (this.getOption('center') === true) {
      const slidesCenter = this.slidesElement.offsetWidth / 2;
      const slideX = this.slideWidth * index;
      this.sliderTranslateX = `${slideX - (slideX - slidesCenter) - this.slideWidth / 2 - slideX}px`;
    } else {
      this.sliderTranslateX = `${this.slideWidth * index * -1}px`;
    }
  }

  handleTransitionEnd() {
    const currentElement = this.querySelector('kemet-carousel-current');

    if (currentElement) {
      currentElement.current = this.index + 1;
    }
    /**
     * Fires when a slide has changed and finished animating
     */


    this.dispatchEvent(new CustomEvent('kemet-carousel-change-finished', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  handleLink(event) {
    this.updateIndex(event.detail.slide);
  }

  getOption(option) {
    const breakpoints = Object.keys(this.breakpoints);
    let value = this.options[option];
    breakpoints.forEach(breakpoint => {
      if (window.matchMedia(`(min-width: ${breakpoint}px)`).matches && this.breakpoints[breakpoint][option] !== undefined) {
        value = this.breakpoints[breakpoint][option];
      }

      return value;
    });
    return value;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-carousel') || customElements.define('kemet-carousel', KemetCarousel);

class KemetCombo extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          opacity: 0;
          width: var(--kemet-combo-width, calc(100% - 2px));
          margin: var(--kemet-combo-margin, 1rem auto);
          pointer-events: none;
          display: block;
          position: relative;
          transition: opacity 0.3s ease-in-out;
        }

        :host([show]) {
          opacity: 1;
          pointer-events: auto;
        }

        ul {
          width: 100%;
          max-height: var(--kemet-combo-max-height, calc(5 * 3rem));
          position: absolute;
          z-index: 1;
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-y: scroll;
          border: var(--kemet-combo-border, 1px solid var(--kemet-color-primary));
          border-radius: var(--kemet-combo-border-radius, var(--kemet-border-radius));
          background-color: var(--kemet-combo-background-color, var(--kemet-color-white));
          box-shadow: var(--kemet-combo-shadow, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1));
        }
        li {
          line-height: 3rem;
          padding: 0 1.5rem;
          cursor: pointer;
        }
        li:hover,
        li:focus {
          color: var(--kemet-combo-hover-color, var(--kemet-color-white));
          outline: none;
          background-color: var(--kemet-combo-hover-background-color, var(--kemet-color-primary));
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Uniquely identifies the component. Should match the slug used in a control.
       */
      slug: {
        type: String
      },

      /**
       * An array of items listed for the combo box
       */
      options: {
        type: Array
      },

      /**
       * Used internally
       */
      filteredOptions: {
        type: Array
      },

      /**
       * Controls the display of the combo box
       */
      show: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.options = [];
  }

  firstUpdated() {
    // standard properties
    this.field = this.closest('kemet-field');
    this.input = this.field.querySelector('[slot="input"]'); // managed properties

    this.slug = this.field.slug || 'slug'; // events listeners

    this.input.addEventListener('kemet-input-input', this.handleInput.bind(this));
    this.input.addEventListener('keydown', event => this.handleInputKeyDown(event));
  }

  render() {
    return $`
      <div
        role="combobox"
        aria-expanded=${this.show}
        aria-controls="${this.slug}-listbox"
        aria-haspopup="listbox"
        id="${this.slug}-combobox"
        aria-label="${this.field?.label}"
      >
        <ul role="listbox" aria-labelledby="${this.slug}-label" id="${this.slug}-listbox">
          ${this.makeOptions()}
        </ul>
      </div>
    `;
  }

  makeOptions() {
    if (this.input) {
      this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(this.input.value?.toLowerCase()) !== -1);
      const options = this.filteredOptions.map((option, index) => $`<li
            id="${this.slug}-option-${index}"
            role="option"
            tabindex="0"
            aria-selected="false"
            @click=${event => this.handleSelection(event)}
            @keydown=${event => this.handleOptionKeyDown(event)}
          >
            ${option}
          </li>`);
      return options;
    }

    return null;
  }

  handleInput(event) {
    this.makeOptions();

    if (event.detail.length > 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  handleSelection(event) {
    this.input.value = event.target.innerText;
    this.show = false;
    /**
     * Fires when a selection has been made
     */

    this.dispatchEvent(new CustomEvent('kemet-combo-selection', {
      bubbles: true,
      composed: true,
      detail: {
        element: event.target,
        text: event.target.innerText,
        id: event.target.getAttribute('id')
      }
    }));
  }

  handleOptionKeyDown(event) {
    event.preventDefault();

    if (event.code === 'ArrowDown') {
      const next = event.target.nextElementSibling;

      if (next) {
        next.focus();
      } else {
        this.shadowRoot.querySelector('li').focus();
      }
    }

    if (event.code === 'ArrowUp') {
      const previous = event.target.previousElementSibling;

      if (previous) {
        previous.focus();
      } else {
        this.shadowRoot.querySelector('li:last-child').focus();
      }
    }

    if (event.code === 'Escape' || event.code === 'Tab') {
      this.show = false;
      this.input.focus();
    }

    if (event.code === 'Enter' || event.code === 'Space') {
      this.handleSelection(event);
    }
  }

  handleInputKeyDown(event) {
    if (event.code === 'ArrowDown') {
      this.shadowRoot.querySelector('li').focus();
    }

    if (event.code === 'Escape') {
      this.show = false;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-combo') || customElements.define('kemet-combo', KemetCombo);

class KemetCount extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: block;
          font-size: var(--kemet-count-font-size, 90%);
          margin-top: 0.8rem;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The text label shown to users
       */
      message: {
        type: String
      },

      /**
       * The number of characters remaining
       */
      remaining: {
        type: Number
      },

      /**
       * The maximum number of characters allowed
       */
      limit: {
        type: Number
      },

      /**
       * Set to true if the field should validate as soon as the character limit is reached
       */
      validateImmediately: {
        type: Boolean,
        attribute: 'validate-immediately'
      }
    };
  }

  firstUpdated() {
    this.field = this.closest('kemet-field');
    this.inputSlot = this.field.querySelector('[slot="input"]');
    this.remaining = this.limit - this.field.length;
    this.field.addEventListener('kemet-field-input', event => {
      this.remaining = this.limit - event.detail;
      const nativeElement = this.input || this.textarea;

      if (nativeElement) {
        if (this.remaining < 0) {
          nativeElement.validity.passedLimit = true;

          if (this.validateImmediately) {
            this.inputSlot.status = 'error';
            this.inputSlot.invalid = true;
            /**
             * Fires when there's a change in status.
             */

            this.dispatchEvent(new CustomEvent('kemet-count-status', {
              bubbles: true,
              composed: true,
              detail: {
                status: 'error',
                validity: nativeElement.validity,
                element: this.inputSlot
              }
            }));
          }
        } else {
          this.inputSlot.status = 'standard';
          nativeElement.checkValidity();
          /**
           * Fires when there's a change in status.
           */

          this.dispatchEvent(new CustomEvent('kemet-count-status', {
            bubbles: true,
            composed: true,
            detail: {
              status: 'standard',
              validity: nativeElement.validity,
              element: this.inputSlot
            }
          }));
        }
      }
    });
    this.input = this.inputSlot.shadowRoot.querySelector('input');
    this.textarea = this.inputSlot.shadowRoot.querySelector('textarea');
  }

  render() {
    return $`${this.remaining} ${this.message}`;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-count') || customElements.define('kemet-count', KemetCount);

class KemetDraggable extends s$1 {
  static get styles() {
    return r$3`
      :host {
        display: inline-block;
      }

      #draggable {
        position: absolute;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * A unique identifier used to store the element's position in local storage.
       */
      memory: {
        type: String
      },

      /**
       * The elements top position in pixels.
       */
      top: {
        type: String
      },

      /**
       * The element's left position in pixels.
       */
      left: {
        type: String
      },

      /**
       * If set to true, will measure the width and height
       * of the element's content and apply it to the host element.
       */
      measure: {
        type: Boolean
      }
    };
  }

  constructor() {
    super(); // managed properties defaults

    this.top = 'auto';
    this.left = 'auto';
    this.measure = false;
  }

  firstUpdated() {
    // standard properties
    this.position1 = 0;
    this.position2 = 0;
    this.position3 = 0;
    this.position4 = 0;

    this.mouseMove = event => this.drag(event);

    this.mouseUp = () => this.stopDrag();

    this.draggableElement = this.shadowRoot.getElementById('draggable');
    const savedPosition = JSON.parse(localStorage.getItem(this.memory));

    if (savedPosition) {
      this.top = savedPosition.top;
      this.left = savedPosition.left;
    }

    if (this.measure) {
      this.measureContent();
    }
  }

  render() {
    return $`
      <div id="draggable" @mousedown=${event => this.startDrag(event)} style="top:${this.top}; left:${this.left}">
        <slot></slot>
      </div>
    `;
  }

  startDrag(event) {
    if (event) {
      event.preventDefault();
      this.position3 = event.clientX;
      this.position4 = event.clientY;
    }

    document.addEventListener('mouseup', this.mouseUp);
    document.addEventListener('mousemove', this.mouseMove);
    this.dispatchEvent(new CustomEvent('kemet-draggable-start', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  drag(event) {
    event.preventDefault();
    this.position1 = this.position3 - event.clientX;
    this.position2 = this.position4 - event.clientY;
    this.position3 = event.clientX;
    this.position4 = event.clientY;
    this.top = `${this.draggableElement.offsetTop - this.position2}px`;
    this.left = `${this.draggableElement.offsetLeft - this.position1}px`;
  }

  stopDrag() {
    document.removeEventListener('mouseup', this.mouseUp);
    document.removeEventListener('mousemove', this.mouseMove);

    if (this.memory) {
      const savedPosition = {
        top: this.top,
        left: this.left
      };
      localStorage.setItem(this.memory, JSON.stringify(savedPosition));
    }

    this.dispatchEvent(new CustomEvent('kemet-draggable-stop', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  measureContent() {
    this.style.width = `${this.draggableElement.offsetWidth}px`;
    this.style.height = `${this.draggableElement.offsetHeight}px`;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-draggable') || customElements.define('kemet-draggable', KemetDraggable);
const documentHeight = `${document.documentElement.scrollHeight}px`;
const stylesBase$1 = r$3`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    width: 100%;
  }

  .off-canvas {
    position: relative;
    overflow: hidden;
  }

  .off-canvas__nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    visibility: hidden;
    height: 100%;
    transition: all 0.5s;
  }

  .off-canvas__nav::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    content: '';
    opacity: 1;
    transition: opacity 0.5s;
  }

  :host([opened]) .off-canvas__nav::after {
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
  }

  .off-canvas__pusher {
    position: relative;
    left: 0;
    z-index: 99;
    height: 100%;
    transition: transform 0.5s;
  }

  :host([overlay]) .off-canvas__pusher::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    background: var(--kemet-drawer-overlay-color, rgba(0, 0, 0, 0.2));
    content: '';
    opacity: 0;
    transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
  }

  :host([opened]) .off-canvas__pusher::after {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.5s;
    transform: scale(2);
  }

  .off-canvas__content {
    position: relative;
    /* overflow-y: scroll; */
    min-height: 100vh;
  }

  .off-canvas__wrapper {
    position: relative;
  }

  ::slotted([slot="content"]) {
    min-height: 100vh;
  }

  /* -------------------------------------- */
  /* custom properties */
  /* -------------------------------------- */

  .off-canvas__nav {
    width: var(--kemet-drawer-width, 300px);
    height: var(--kemet-drawer-height, 100%);
    color: var(--kemet-drawer-color, #fafafa);
    background: var(--kemet-drawer-background-color, #202020);
  }
`;
const stylesEffects$1 = r$3`
  /* slide */
  :host([effect='slide']) .off-canvas__nav {
    visibility: visible;
    transform: translate3d(-100%, 0, 0);
  }

  :host([effect='slide'][opened]) .off-canvas__nav {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }

  :host([effect='slide']) .off-canvas__nav:after {
    display: none;
  }

  :host([effect='slide'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='slide'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='slide'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='slide'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='slide'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${o$4(documentHeight)}, 0);
  }

  :host([effect='slide'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }

  /* reveal */
  :host([effect='reveal'][opened]) .off-canvas__pusher {
    transform: translate3d(var(--kemet-drawer-width, 300px), 0, 0);
  }

  :host([effect='reveal']) .off-canvas__nav {
    z-index: 1;
  }

  :host([effect='reveal'][opened]) .off-canvas__nav {
    visibility: visible;
    transition: transform 0.5s;
  }

  :host([effect='reveal']) .off-canvas__nav::after {
    display: none;
  }

  :host([effect='reveal'][side='right'][opened]) .off-canvas__pusher {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='reveal'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='reveal'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='reveal'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='reveal'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='reveal'][side='top'][opened]) .off-canvas__pusher {
    transform: translate3d(0, var(--kemet-drawer-height, 100vh), 0);
  }

  :host([effect='reveal'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${o$4(documentHeight)}, 0);
  }

  :host([effect='reveal'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }

  :host([effect='reveal'][side='bottom'][opened]) .off-canvas__pusher {
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  /* push */
  :host([effect='push'][opened]) .off-canvas__pusher {
    transform: translate3d(var(--kemet-drawer-width, 300px), 0, 0);
  }

  :host([effect='push']) .off-canvas__nav {
    transform: translate3d(-100%, 0, 0);
  }

  :host([effect='push'][opened]) .off-canvas__nav {
    visibility: visible;
    transition: transform 0.5s;
    transform: translate3d(0, 0, 0);
  }

  :host([effect='push']) .off-canvas__nav::after {
    display: none;
  }

  :host([effect='push'][side='right'][opened]) .off-canvas__pusher {
    transform: translate3d(calc(var(--kemet-drawer-width, 300px) * -1), 0, 0);
  }

  :host([effect='push'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='push'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='push'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='push'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='push'][side='top'][opened]) .off-canvas__pusher {
    transform: translate3d(0, var(--kemet-drawer-height, 100vh), 0);
  }

  :host([effect='push'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${o$4(documentHeight)}, 0);
  }

  :host([effect='push'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }

  :host([effect='push'][side='bottom'][opened]) .off-canvas__pusher {
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  /* scale */
  :host([effect='scale']) .off-canvas__pusher {
    transform-style: preserve-3d;
  }

  :host([effect='scale'][opened]) .off-canvas__pusher {
    transform: translate3d(0, 0, 0) scale(0.95);
  }

  :host([effect='scale']) .off-canvas__nav {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  :host([effect='scale'][opened]) .off-canvas__nav {
    visibility: visible;
    transition: transform 0.5s;
    transform: translate3d(0, 0, 0);
  }

  :host([effect='scale']) .off-canvas__nav::after {
    display: none;
  }

  :host([effect='scale'][side='right']) .off-canvas__nav {
    transform: translate3d(100vw, 0, 0);
  }

  :host([effect='scale'][side='right'][opened]) .off-canvas__nav {
    transform: translate3d(calc(100vw - var(--kemet-drawer-width, 300px)), 0, 0);
  }

  :host([effect='scale'][side='top']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, calc(var(--kemet-drawer-height, 100vh) * -1), 0);
  }

  :host([effect='scale'][side='top'][opened]) .off-canvas__nav {
    transform: translate3d(0, 0, 0);
  }

  :host([effect='scale'][side='bottom']) .off-canvas__nav {
    width: 100vw;
    height: var(--kemet-drawer-height, 100vh);
    transform: translate3d(0, ${o$4(documentHeight)}, 0);
  }

  :host([effect='scale'][side='bottom'][opened]) .off-canvas__nav {
    transform: translate3d(0, calc(100vh - var(--kemet-drawer-height, 100vh)), 0);
  }
`;

class KemetDrawer extends s$1 {
  static get styles() {
    return [stylesBase$1, stylesEffects$1];
  }

  static get properties() {
    return {
      /**
       * Determines if the drawer is opened or not.
       */
      opened: {
        type: Boolean,
        reflect: true
      },

      /**
       * The animation effect for opening and closing the drawer.
       * Values include: (slide | reveal | push | scale)
       */
      effect: {
        type: String,
        reflect: true
      },

      /**
       * Allows you to control which side the drawer opens from.
       * Values include: (left | right | top | bottom)
       */
      side: {
        type: String,
        reflect: true
      },

      /**
       * Adds a overlay over the content section of the Drawer when opened
       */
      overlay: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.opened = undefined;
    this.effect = 'slide';
    this.side = 'left';
    this.overlay = false;
  }

  firstUpdated() {
    this.addEventListener('click', event => {
      if (this.opened && event.target.tagName.toLowerCase() === 'kemet-drawer') {
        this.opened = false;
      }
    });
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      /**
       * Fires when the drawer opens.
       */
      this.dispatchEvent(new CustomEvent('kemet-drawer-opened', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    if (prevProps.get('opened') && this.opened === false) {
      /**
       * Fires when the drawer closes.
       */
      this.dispatchEvent(new CustomEvent('kemet-drawer-closed', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }

  render() {
    return $`
      <section class="off-canvas" part="container">
        <nav class="off-canvas__nav" part="drawer" title="Drawer">
          <slot name="navigation"></slot>
        </nav>
        <div class="off-canvas__pusher" part="pusher">
          <main class="off-canvas__content" part="content">
            <div class="off-canvas__wrapper" part="wrapper">
              <slot name="content"></slot>
            </div>
          </main>
        </div>
      </section>
    `;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-drawer') || customElements.define('kemet-drawer', KemetDrawer);

class KemetFAB extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          --kemet-fab-size: 50px;

          display: inline-block;
          position: relative;
        }

        button {
          color: var(--kemet-fab-color, var(--kemet-color-white));
          font-size: inherit;
          display: inline-flex;
          padding: 0;
          position: relative;
          min-height: var(--kemet-fab-size);
          min-width: var(--kemet-fab-size);
          max-width: var(--kemet-fab-size);
          align-items: center;
          justify-content: flex-start;
          transition: all 0.4s ease;
          border: none;
          background-color: var(--kemet-fab-background-color, var(--kemet-color-primary));
        }

        :host([outlined]) button {
          color: var(--kemet-fab-outlined-color, var(--kemet-color-primary));
          border: var(--kemet-fab-outlined-border, 1px solid var(--kemet-color-primary));
          background-color: transparent;
        }

        :host([pill]) button {
          border-radius: var(--kemet-fab-pill-radius, 10rem);
        }

        button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          transition: background-color 0.3s ease-in-out;
          background-color: var(--kemet-fab-background-color, var(--kemet-color-primary));
        }

        :host([pill]) button::before {
          border-radius: var(--kemet-fab-pill-radius, 10rem);
        }

        :host([outlined]) button::before {
          border: var(--kemet-fab-outline-border, 1px solid var(--kemet-color-primary));
          background-color: transparent;
        }

        :host([expanded]) button {
          max-width: 99rem;
          padding: 0 1.35rem 0 0.25rem;
        }

        :host([disabled]) button {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .icon {
          width: var(--kemet-fab-size);
          height: var(--kemet-fab-size);
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
        }

        .text {
          color: var(--kemet-fab-color, var(--kemet-color-white));
          z-index: 1;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }

        :host([outlined]) .text {
          color: var(--kemet-fab-outlined-color, var(--kemet-color-primary));
        }

        :host([expanded]) .text {
          opacity: 1;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The expanded state of the button
       */
      expanded: {
        type: Boolean,
        reflect: true
      },

      /**
       * Outline style for a button
       */
      outlined: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines whether not a button is disabled
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Displays the fab with rounded corners
       */
      pill: {
        type: Boolean,
        reflect: true
      },

      /**
       * The distance, in pixels, where the fab should automatically expand
       */
      expandPoint: {
        type: Number,
        attribute: 'expand-point'
      },

      /**
       * The distance, in pixels, where the fab should automatically collapse
       */
      collapsePoint: {
        type: Number,
        attribute: 'collapse-point'
      }
    };
  }

  constructor() {
    super();
    this.outlined = false;
    this.disabled = false;
    this.expanded = false;
  }

  firstUpdated() {
    // events
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }

  render() {
    return $`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <span class="icon" part="icon">
          <slot name="icon"></slot>
        </span>
        <span class="text" part="text">
          <slot></slot>
        </span>
      </button>
    `;
  }

  handleMouseOver() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }

  handleMouseOut() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }

  handleScroll() {
    if (window.scrollY > this.expandPoint) {
      this.expanded = true;
    }

    if (window.scrollY < this.expandPoint) {
      this.expanded = false;
    }

    if (window.scrollY > this.collapsePoint) {
      this.expanded = false;
    }

    if (window.scrollY < this.collapsePoint) {
      this.expanded = true;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-fab') || customElements.define('kemet-fab', KemetFAB);

class KemetField extends s$1 {
  static get styles() {
    return [r$3`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          position: relative;
          display: block;
        }

        label span {
          color: inherit;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.8rem;
        }

        :host([status='error']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='success']) kemet-icon {
          color: var(--kemet-color-success);
        }

        :host([status='warning']) kemet-icon {
          color: var(--kemet-color-warning);
        }

        .message {
          font-size: 0.9rem;
          line-height: 1;
          display: block;
          margin-top: 0.8rem;
        }

        :host([status='error']) .message {
          color: var(--kemet-color-error);
        }

        :host([status='success']) .message {
          color: var(--kemet-color-success);
        }

        :host([status='warning']) .message {
          color: var(--kemet-color-warning);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Uniquely identifies the control. Use the same slug for slotted sub components.
       */
      slug: {
        type: String
      },

      /**
       * The label text
       */
      label: {
        type: String
      },

      /**
       * The validation message for error or success
       */
      message: {
        type: String
      },

      /**
       * Determines if the containing input is focused
       */
      focused: {
        type: Boolean,
        reflect: true
      },

      /**
       * The validation status of standard, error, or success
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Is true when the containing input has a value
       */
      filled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The length of the containing input
       */
      length: {
        type: Number
      },

      /**
       * Determines the disabled state of the control
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The icon while in an error or warning state
       */
      errorIcon: {
        type: String,
        attribute: 'error-icon'
      },

      /**
       * The icon while in an success state
       */
      successIcon: {
        type: String,
        attribute: 'success-icon'
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.status = 'standard';
    this.errorIcon = 'exclamation-triangle-fill';
    this.successIcon = 'check-lg'; // listeners

    this.addEventListener('kemet-input-focused', event => this.handleFocused(event));
    this.addEventListener('kemet-input-status', event => this.handleStatus(event));
    this.addEventListener('kemet-input-input', event => this.handleInput(event));
    this.addEventListener('kemet-count-status', event => this.handleStatus(event));
    this.addEventListener('kemet-combo-selection', event => this.handleSelection(event));
  }

  firstUpdated() {
    this.slotInput = this.querySelector('[slot="input"]');
    this.slotCombo = this.querySelector('[slot="combo"]');

    if (this.slotInput.value) {
      this.length = this.slotInput.value.length;
    } else {
      this.length = 0;
    }
  }

  render() {
    return $`
      <label for="${this.slug}" id="${this.slug}-label" part="label">
        <span>${this.label}${this.makeStatusIcon()}</span>
        <slot name="input"></slot>
      </label>
      ${this.makeStatusMessage()}
      <slot name="component"></slot>
    `;
  }

  makeStatusIcon() {
    if (this.status === 'error' || this.status === 'warning') {
      return $`<kemet-icon icon="${this.errorIcon}" size="16"></kemet-icon>`;
    }

    if (this.status === 'success') {
      return $`<kemet-icon icon="${this.successIcon}" size="16"></kemet-icon>`;
    }

    return null;
  }

  makeStatusMessage() {
    if (this.status !== 'standard') {
      return $`<span class="message" part="message">${this.message}</span>`;
    }

    return null;
  }

  handleFocused(event) {
    this.focused = event.detail;

    if (!this.focused && this.slotCombo && this.slotCombo.options.length < 1) {
      this.slotCombo.show = false;
    }
  }

  handleStatus(event) {
    this.status = event.detail.status;
  }

  handleInput(event) {
    /**
     * Fires when input fires on the input slot
     */
    this.dispatchEvent(new CustomEvent('kemet-field-input', {
      bubbles: false,
      detail: event.detail.length
    }));

    if (event.detail === '') {
      this.filled = false;
    } else {
      this.filled = true;
    }
  }

  handleSelection(event) {
    this.slotInput.setAttribute('aria-activedescendant', event.detail);
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-field') || customElements.define('kemet-field', KemetField);

class KemetFlipcardTrigger extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: pointer;
        }
      `];
  }

  firstUpdated() {
    this.keyCodes = {
      ENTER: 13,
      SPACE: 32
    };
  }

  render() {
    return $`
      <slot tabindex="0" @click=${() => this.trigger()} @keypress=${event => this.handleKeyup(event)}></slot>
    `;
  }

  trigger() {
    this.dispatchEvent(new CustomEvent('kemet-flipcard-flipped', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  handleKeyup(event) {
    event.preventDefault();

    if (event.keyCode === this.keyCodes.ENTER) {
      this.trigger();
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-flipcard-trigger') || customElements.define('kemet-flipcard-trigger', KemetFlipcardTrigger);

class KemetFlipcard extends s$1 {
  static get styles() {
    return r$3`
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }

      :host {
        display: inline-block;
        width: var(--kemet-flipcard-width, 100%);
        height: var(--kemet-flipcard-height, auto);
        aspect-ratio: var(--kemet-flipcard-ratio, 16/9);
        perspective: 1000px;
      }

      section {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      .front,
      .back {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        /* overflow: hidden; */
        border-radius: var(--kemet-flipcard-border-radius, 0);
        border: var(--kemet-flipcard-border, 2px solid var(--kemet-color-primary));
      }

      :host([rounded]) .front,
      :host([rounded]) .back {
        border-radius: var(--kemet-border-radius);
      }

      .front {
        color: var(--kemet-flipcard-front-color, #202020);
        background-color: var(--kemet-flipcard-front-background-color, #fafafa);
      }

      :host([flipped]) .front {
        z-index: -1;
      }

      .back {
        color: var(--kemet-flipcard-back-color, #202020);
        background-color: var(--kemet-flipcard-back-background-color, #fafafa)
      }

      :host([axis="horizontal"]) .back {
        transform: rotateY(180deg);
      }

      :host([flipped][axis="horizontal"]) section {
        transform: rotateY(180deg);
      }

      :host([axis="vertical"]) .back {
        transform: rotateX(180deg);
      }

      :host([flipped][axis="vertical"]) section {
        transform: rotateX(180deg);
      }

      :host([flip-on-hover]) section {
        cursor: pointer;
      }

      ::slotted([slot="front"]),
      ::slotted([slot="back"]) {
        display: inline-block;
        margin: auto;
        position: relative;
        width: 100%;
        height: 100%;
      }
    `;
  }

  static get properties() {
    return {
      axis: {
        type: String,
        reflect: true
      },
      flipped: {
        type: Boolean,
        reflect: true
      },
      flipOnHover: {
        type: Boolean,
        attribute: 'flip-on-hover'
      },
      height: {
        type: String
      },
      measure: {
        type: Boolean
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.axis = 'horizontal';
    this.flipped = false;
    this.flipOnHover = false;
    this.height = 'auto';
    this.measure = false;
    this.addEventListener('kemet-flipcard-flipped', () => {
      this.flipped = !this.flipped;
    });
  }

  firstUpdated() {
    this.frontChildren = this.shadowRoot.querySelector('[name="front"]').assignedNodes({
      flatten: true
    });
    this.backChildren = this.shadowRoot.querySelector('[name="back"]').assignedNodes({
      flatten: true
    });
    [this.frontElement] = this.frontChildren;
    [this.backElement] = this.backChildren;
    window.addEventListener('resize', this.determineHeight.bind(this));
  }

  updated() {
    this.determineHeight();
  }

  render() {
    return $`
      <section
        tabindex="0"
        part="wrapper"
        @blur=${() => {
      if (this.flipOnHover) this.flipped = false;
    }}
        @focus=${() => {
      if (this.flipOnHover) this.flipped = true;
    }}
        @mouseover=${() => {
      if (this.flipOnHover) this.flipped = true;
    }}
        @mouseout=${() => {
      if (this.flipOnHover) this.flipped = false;
    }}>
        <div id="front" class="front" part="front">
          <slot name="front" @slotchange="${() => this.determineHeight()}"></slot>
        </div>
        <div id="back" class="back" part="back">
          <slot name="back" @slotchange="${() => this.determineHeight()}"></slot>
        </div>
      </section>
    `;
  }

  determineHeight() {
    // setTimeout is need to simulate a DOM repaint
    // without the repaint, offsetHeight on Custom Elements = 0
    // so this is needed for 'measure' to work correctly
    setTimeout(() => {
      if (this.measure) {
        if (this.frontElement.offsetHeight > this.backElement.offsetHeight) {
          this.height = `${this.frontElement.offsetHeight}px`;
        } else {
          this.height = `${this.backElement.offsetHeight}px`;
        }

        this.style.height = this.height;
      } else {
        this.style.removeProperty('height');
      }
    }, 0);
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-flipcard') || window.customElements.define('kemet-flipcard', KemetFlipcard);

class KemetInput extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          position: relative;
          display: block;
        }

        input {
          display: block;
          font-size: 1rem;
          width: 100%;
          height: var(--kemet-input-height, 50px);
          padding: var(--kemet-input-padding, 0.5rem 1rem);
          border: var(--kemet-input-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
        }

        input[type='color'] {
          min-width: 10rem;
        }

        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          display: none;
        }

        :host([status='error']) input {
          border: var(--kemet-input-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) input {
          border: var(--kemet-input-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) input {
          border: var(--kemet-input-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) input {
          opacity: 0.5;
        }

        :host([icon-left]) input {
          padding-left: var(--kemet-input-icon-left-padding, 3rem);
        }

        :host([icon-right]) input {
          padding-right: var(--kemet-input-icon-right-padding, 3rem);
        }

        :host([rounded]) input {
          border-radius: var(--kemet-input-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) input {
          border: var(--kemet-input-border-filled, none);
          color: var(--kemet-input-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-input-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) kemet-icon,
        :host([filled]) input::placeholder {
          color: var(--kemet-input-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) input {
          background-color: var(--kemet-input-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) input {
          background-color: var(--kemet-input-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) input {
          background-color: var(--kemet-input-background-color-warning, var(--kemet-color-warning));
        }

        kemet-icon {
          color: var(--kemet-color-primary);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        kemet-icon.left {
          left: 1rem;
        }

        kemet-icon.right {
          right: 1rem;
        }

        kemet-icon.eye,
        kemet-icon.search {
          cursor: pointer;
        }

        :host([status='error']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='warning']) kemet-icon {
          color: var(--kemet-color-error);
        }

        :host([status='success']) kemet-icon {
          color: var(--kemet-color-success);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Used for the id of the input. Should match the slug used in a control if applicable.
       */
      slug: {
        type: String
      },

      /**
       * The name of the input
       */
      name: {
        type: String
      },

      /**
       * The placeholder attribute
       */
      placeholder: {
        type: String
      },

      /**
       * The minlength attribute
       */
      minlength: {
        type: String
      },

      /**
       * The maxlength attribute
       */
      maxlength: {
        type: String
      },

      /**
       * The min attribute
       */
      min: {
        type: String
      },

      /**
       * The max attribute
       */
      max: {
        type: String
      },

      /**
       * The step attribute
       */
      step: {
        type: String
      },

      /**
       * The autocomplete attribute
       */
      autocomplete: {
        type: String
      },

      /**
       * The pattern attribute
       */
      pattern: {
        type: String
      },

      /**
       * The input mode attribute
       */
      inputmode: {
        type: String
      },

      /**
       * The autofocus attribute
       */
      autofocus: {
        type: Boolean
      },

      /**
       * The disable attribute
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The readonly attribute
       */
      readonly: {
        type: Boolean
      },

      /**
       * The required attribute
       */
      required: {
        type: Boolean,
        reflect: true
      },

      /**
       * The type of input
       */
      type: {
        type: String
      },

      /**
       * The input's value
       */
      value: {
        type: String
      },

      /**
       * States whether or not the input is invalid
       */
      invalid: {
        type: Boolean,
        reflect: true
      },

      /**
       * The status of the input
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Activates validation on blur
       */
      validateOnBlur: {
        type: Boolean,
        attribute: 'validate-on-blur'
      },

      /**
       * Aria Autocomplete
       */
      ariaAutoComplete: {
        type: String,
        attribute: 'aria-autocomplete'
      },

      /**
       * Aria Controls
       */
      ariaControls: {
        type: String,
        attribute: 'aria-controls'
      },

      /**
       * Aria Active Descendant
       */
      ariaActiveDescendant: {
        type: String,
        attribute: 'aria-activedescendant'
      },

      /**
       * Displays rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true
      },

      /**
       * Displays a filled input box
       */
      filled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Custom Icon to the right of the input
       */
      iconRight: {
        type: String,
        reflect: true,
        attribute: 'icon-right'
      },

      /**
       * Custom Icon to the left of the input
       */
      iconLeft: {
        type: String,
        reflect: true,
        attribute: 'icon-left'
      },

      /**
       * Size of the icons
       */
      iconSize: {
        type: Number
      },

      /**
       * The HTML5 validity object.
       */
      validity: {
        type: Object
      },

      /**
       * Manages password visibility
       */
      isPasswordVisible: {
        type: Boolean
      },

      /**
       * Input Type of keypress handled through handleInput(e)
       */
      inputType: {
        type: String
      },

      /**
       * Determines if the input is focused
       */
      focused: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.name = 'input';
    this.type = 'text';
    this.value = '';
    this.status = 'standard';
    this.iconSize = 20;
    this.validateOnBlur = false;
    this.isPasswordVisible = false;
    this.focused = false;
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.input = this.shadowRoot.querySelector('input');
    this.field = this.closest('kemet-field');
    this.form = this.closest('form');
    this.slug = this.field ? this.field.slug : 'input';

    if (this.field) {
      this.field.addEventListener('fmc-password-status', event => this.handleStatus(event));
    }
  }

  render() {
    return $`
      <div>
        ${this.makeIconLeft()}
        <input
          part="input"
          id=${this.slug}
          name=${this.name}
          placeholder=${l$1(this.placeholder)}
          minlength=${l$1(this.minlength)}
          maxlength=${l$1(this.maxlength)}
          min=${l$1(this.min)}
          max=${l$1(this.max)}
          step=${l$1(this.step)}
          autocomplete=${l$1(this.autocomplete)}
          aria-autocomplete=${l$1(this.ariaAutoComplete)}
          aria-controls=${l$1(this.ariaControls)}
          aria-activedescendant=${l$1(this.ariaActiveDescendant)}
          pattern=${l$1(this.pattern)}
          inputmode=${l$1(this.inputmode)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .type="${this.type === 'password' && this.isPasswordVisible ? 'text' : this.type}"
          .value=${l(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        ${this.makeIconRight()} ${this.makeIconClear()} ${this.makeVisibilityToggle()}
      </div>
    `;
  }
  /**
   * Makes the right icon
   * @private
   * @returns {templateResult} A right icon
   */


  makeIconRight() {
    if (this.iconRight) {
      return $`
        <kemet-icon class="right" icon="${this.iconRight}" size="${this.iconSize ? this.iconSize : 20}"></kemet-icon>
      `;
    }

    return null;
  }
  /**
   * Makes the left icon
   * @private
   * @returns {templateResult} A left icon
   */


  makeIconLeft() {
    if (this.iconLeft) {
      return $`
        <kemet-icon class="left" icon="${this.iconLeft}" size="${this.iconSize ? this.iconSize : 16}"></kemet-icon>
      `;
    }

    return null;
  }
  /**
   * Makes a clear icon for search.
   * @private
   * @returns {templateResult} A search icon
   */


  makeIconClear() {
    if (this.type === 'search' && this.value !== '') {
      return $`
        <kemet-icon class="search right" icon="x-lg" size="${this.iconSize}" @click=${() => this.handleClear()}></kemet-icon>
      `;
    }

    return null;
  }
  /**
   * Makes a password visibility toggle button
   * @returns {templateResult} A mask or unmask icon
   */


  makeVisibilityToggle() {
    if (this.type === 'password') {
      return $`<kemet-icon
        class="eye right"
        icon="${this.setPasswordIcon()}"
        @click=${() => this.togglePasswordVisibility()}
      ></kemet-icon>`;
    }

    return null;
  }

  setPasswordIcon() {
    if (this.isPasswordVisible) {
      return 'eye';
    }

    return 'eye-slash';
  }
  /**
   * Handles when the input receives focus
   * @private
   */


  handleFocus() {
    this.focused = true;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }
  /**
   * Handles when the input loses focus
   * @private
   */


  handleBlur() {
    if (this.validateOnBlur && this.form && !this.form.noValidate) {
      this.input.checkValidity();
      this.validity = this.input.validity;
    }

    this.focused = false;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));
  }
  /**
   * Handles when the input changes value
   * @private
   */


  handleChange() {
    this.value = this.input.value;

    if (this.input.checkValidity() && this.checkLimitValidity() && this.status !== 'success') {
      this.invalid = false;
      this.status = 'standard';
      this.validity = this.input.validity;
      /**
       * Fires when there's a change in status.
       * This event includes an object that reports:
       * 1) the status. 2) HTML5 validity object. 3) the component element.
       * Use the validity object to support custom validation messages.
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'standard',
          validity: this.input.validity,
          element: this
        }
      }));
    }
  }
  /**
   * Handles when the input receives input
   * @private
   */


  handleInput() {
    this.value = this.input.value;
    /**
     * Fires when the input receives input
     */

    this.dispatchEvent(new CustomEvent('kemet-input-input', {
      bubbles: true,
      composed: true,
      detail: this.value
    }));
  }
  /**
   * Handles when the input has an error
   * @private
   */


  handleInvalid() {
    this.validity = this.input.validity;

    if (this.validateOnBlur) {
      this.invalid = true;
      this.status = 'error';
      /**
       * Fires when there's a change in status
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'error',
          validity: this.input.validity,
          element: this
        }
      }));
    }
  }

  handleStatus(event) {
    this.status = event.detail.status;
  }
  /**
   * Toggles password visibility
   * @private
   */


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  /**
   * Handles the clear button for search
   * @private
   */


  handleClear() {
    this.value = '';
    /**
     * Fires when the input receives input
     */

    this.dispatchEvent(new CustomEvent('kemet-input-input', {
      bubbles: true,
      composed: true,
      detail: this.value
    }));
  }
  /**
   * Checks the validity of the character limit for the count component
   * @private
   * @returns {boolean}
   */


  checkLimitValidity() {
    if (this.field) {
      const count = this.field.querySelector('kemet-count');

      if (count) {
        return this.value.length < count.limit;
      }
    }

    return true;
  }
  /**
   * Checks the validity of the standard input
   * @public
   * @returns {boolean}
   */


  checkValidity() {
    return this.input.checkValidity();
  }
  /**
   * Focuses the standard input
   * @public
   */


  focus() {
    this.input.focus();
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-input') || customElements.define('kemet-input', KemetInput);

class KemetModalClose extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
        }
      `];
  }

  render() {
    return $`
      <slot @keyup=${() => this.close()} @click=${() => this.close()}></slot>
    `;
  }

  close() {
    /**
     * Fires when the close button is pressed
     */
    this.dispatchEvent(new CustomEvent('kemet-modal-close-pressed', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-modal-close') || customElements.define('kemet-modal-close', KemetModalClose);
const stylesBase = r$3`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    backface-visibility: hidden;
  }

  :host([opened]) {
    visibility: visible;
  }

  .content {
    position: relative;
    z-index: 3;
    margin: auto;
    min-width: var(--kemet-modal-content-min-width, 0);
    max-width: var(--kemet-modal-content-max-width, none);
  }

  :host([mobile]) .content {
    min-width: var(--kemet-modal-content-mobile-min-width, 100%);
    min-height: var(--kemet-modal-content-mobile-min-height, 80vh);
    padding: var(--kemet-modal-content-mobile-padding, 1rem);
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    background: var(--kemet-modal-overlay-background-color, rgba(0,0,0,0.2));
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([opened]) .overlay {
    opacity: 1;
    visibility: visible;
  }
`;
const stylesEffects = r$3`
  /* fadein-scaleup */
  :host([effect="fadein-scaleup"]) .content {
    transform: scale(0.7);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="fadein-scaleup"][opened]) .content {
    transform: scale(1);
    opacity: 1;
  }

  /* slide-right */
  :host([effect="slide-right"]) .content {
    transform: translateX(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="slide-right"][opened]) .content {
    transform: translateX(0);
    opacity: 1;
  }

  /* slide-bottom */
  :host([effect="slide-bottom"]) .content {
    transform: translateY(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="slide-bottom"][opened]) .content {
    transform: translateY(0);
    opacity: 1;
  }

  /* newspaper */
  :host([effect="newspaper"]) .content {
    transform: scale(0) rotate(720deg);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="newspaper"][opened]) .content {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  /* fall */
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) .content {
    transform-style: preserve-3d;
    transform: translateZ(600px) rotateX(20deg);
    opacity: 0;
  }

  :host([effect="fall"][opened]) .content {
    transition: all var(--kemet-modal-transition-speed, 0.3s) ease-in;
    transform: translateZ(0px) rotateX(0deg);
    opacity: 1;
  }

  /* side-fall */
  :host([effect="side-fall"]) {
    perspective: 1300px;
  }

  :host([effect="side-fall"]) .content {
    transform-style: preserve-3d;
    transform: translate(30%) translateZ(600px) rotate(10deg);
    opacity: 0;
  }

  :host([effect="side-fall"][opened]) .content {
    transition: all var(--kemet-modal-transition-speed, 0.3s) ease-in;
    transform: translate(0%) translateZ(0) rotate(0deg);
    opacity: 1;
  }

  /* flip-horizontal */
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) .content {
    transform-style: preserve-3d;
    transform: rotateY(-70deg);
    transition: all var(--kemet-modal-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) .content {
    transform: rotateY(0deg);
    opacity: 1;
  }

  /* flip-vertical */
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) .content {
    transform-style: preserve-3d;
    transform: rotateX(-70deg);
    transition: all var(--kemet-modal-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) .content {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* sign-3d */
  :host([effect="sign-3d"]) {
    perspective: 1300px;
  }

  :host([effect="sign-3d"]) .content {
    transform-style: preserve-3d;
    transform: rotateX(-60deg);
    transform-origin: 50% 0;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="sign-3d"][opened]) .content {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* super-scaled */
  :host([effect="super-scaled"]) .content {
    transform: scale(2);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="super-scaled"][opened]) .content {
    transform: scale(1);
    opacity: 1;
  }

  /* slit */
  :host([effect="slit"]) {
    perspective: 1300px;
  }

  :host([effect="slit"]) .content {
    transform-style: preserve-3d;
    transform: translateZ(-3000px) rotateY(90deg);
    opacity: 0;
  }

  :host([effect="slit"][opened]) .content {
    animation: slit .7s forwards ease-out;
  }

  @keyframes slit {
    50% {
      transform: translateZ(-250px) rotateY(89deg);
      opacity: 1;
      animation-timing-function: ease-in;}
    100% {
      transform: translateZ(0) rotateY(0deg);
      opacity: 1;
    }
  }

  /* rotate-bottom */
  :host([effect="rotate-bottom"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-bottom"]) .content {
    transform-style: preserve-3d;
    transform: translateY(100%) rotateX(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s) ease-out;
  }

  :host([effect="rotate-bottom"][opened]) .content {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }

  /* rotate-left */
  :host([effect="rotate-left"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-left"]) .content {
    transform-style: preserve-3d;
    transform: translateZ(100px) translateX(-30%) rotateY(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed, 0.3s);
  }

  :host([effect="rotate-left"][opened]) .content {
    transform: translateZ(0px) translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`;

class KemetModal extends s$1 {
  static get styles() {
    return [stylesBase, stylesEffects];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true
      },
      effect: {
        type: String,
        reflect: true
      },
      closeOnClick: {
        type: Boolean,
        attribute: 'close-on-click'
      },
      breakpoint: {
        type: String
      },
      mobile: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.opened = false;
    this.closeOnClick = false;
    this.breakpoint = '600px'; // bindings

    this.addEventListener('kemet-modal-close-pressed', () => {
      this.opened = false;
    });
  }

  firstUpdated() {
    // standard properties
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    this.focusableElements = this.querySelectorAll(this.focusableSelector); // events

    this.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        this.opened = false;
      }
    });
    this.addEventListener('click', event => {
      if (this.opened && this.closeOnClick && event.target.tagName.toLowerCase() === 'kemet-modal') {
        this.opened = false;
      }
    });
    window.addEventListener('resize', () => {
      this.isMobile();
    });
    this.focusableElements.forEach(element => {
      element.addEventListener('keydown', event => this.handleFocusableDown(event));
    });
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      setTimeout(() => {
        this.focusableElements[0]?.focus();
      }, 100);
      /**
       * Fires when the modal opens
       */

      this.dispatchEvent(new CustomEvent('kemet-modal-opened', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    if (prevProps.get('opened') && this.opened === false) {
      /**
       * Fires when the modal closes
       */
      this.dispatchEvent(new CustomEvent('kemet-modal-closed', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    this.isMobile();
  }

  render() {
    return $`
      <div class="content" part="content">
        <slot></slot>
      </div>
      <div class="overlay" part="overlay"></div>
    `;
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  handleFocusableDown(event) {
    const firstFocusable = this.focusableElements[0];
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-modal') || customElements.define('kemet-modal', KemetModal);

class KemetPassword extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          color: inherit;
          display: none;
        }

        :host([show]) {
          display: block;
        }

        p {
          margin: 1.6rem 0;
        }

        .status {
          display: grid;
          align-items: center;
          grid-template-columns: 1fr auto;
          line-height: 1;
          margin-top: 0.8rem;
        }

        .status > span {
          text-transform: capitalize;
        }

        .status--weak,
        .status--better {
          color: var(--kemet-color-error);
        }

        .status--strong {
          color: var(--kemet-color-success);
        }

        .indicator {
          display: flex;
          gap: 0.4rem;
          margin: 0;
          list-style: none;
        }

        .indicator li {
          width: 1.6rem;
          height: 0.2rem;
          background-color: var(--fds-color--gray2);
        }

        .status--weak .indicator li:nth-child(1) {
          background-color: var(--kemet-color-error);
        }

        .status--better .indicator li:nth-child(1),
        .status--better .indicator li:nth-child(2) {
          background-color: var(--kemet-color-error);
        }

        .status--strong .indicator li {
          background-color: var(--kemet-color-success);
        }

        .rules {
          color: var(--kemet-color-primary);
          list-style: none;
          font-size: 90%;
          padding-left: 2rem;
        }

        .rules li {
          position: relative;
        }

        .rules kemet-icon {
          color: var(--kemet-color-success);
          position: absolute;
          left: -2.4rem;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * An array of objects containing the rules the password must meet
       */
      rules: {
        type: Array
      },

      /**
       * Controls the display of the component
       */
      show: {
        type: Boolean,
        reflect: true
      },

      /**
       * The value of the input component
       */
      value: {
        type: String
      },

      /**
       * A message that is above the rules
       */
      message: {
        type: String
      },

      /**
       * The strength of the password. Weak | Better | Strong
       */
      strength: {
        type: String
      },
      icon: {
        type: String
      },
      iconSize: {
        type: Number
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.rules = [{
      pattern: '(?=.{8,}$)',
      message: 'At least 8 characters long'
    }, {
      pattern: '(?=.*[a-z])(?=.*[A-Z])',
      message: 'Uppercase and lowercase'
    }, {
      pattern: '(?=.*[0-9])',
      message: 'At least one number (0-9)'
    }];
    this.message = 'Please make sure you meet all the requirements.';
    this.icon = 'check2';
    this.iconSize = 16;
  }

  firstUpdated() {
    // standard properties
    this.field = this.closest('kemet-field');
    this.input = this.field.querySelector('[slot="input"]'); // managed properties

    this.slug = this.field.slug; // events listeners

    this.input.addEventListener('kemet-input-input', this.handleInput.bind(this));
  }

  render() {
    return $`
      <div role="alert" aria-live="assertive">
        <div class="status status--${this.strength}" part="status">
          <span>${this.strength}</span>
          <ul class="indicator" part="indicator">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <p class="message" part="message">${this.message}</p>
        <ul class="rules" part="rules">
          ${this.makeRules()}
        </ul>
      </div>
    `;
  }
  /**
   * Makes the list of rules
   * @private
   * @returns {templateResults} the criteria rules
   */


  makeRules() {
    if (this.input) {
      const rules = this.rules.map((rule, index) => {
        const regExp = new RegExp(rule.pattern);
        const meetsCriteria = regExp.test(this.input.value);
        this.rules[index].meetsCriteria = meetsCriteria;
        return $`<li>${this.makeCheckIcon(meetsCriteria)} ${rule.message}</li>`;
      });
      return rules;
    }

    return null;
  }
  /**
   * Makes the check icon if the criteria has been met
   * @param {boolean} meetsCriteria
   * @private
   * @returns {templateResults} an icon component
   */


  makeCheckIcon(meetsCriteria) {
    if (meetsCriteria) {
      return $`<kemet-icon icon=${this.icon} size=${this.iconSize}></kemet-icon>`;
    }

    return null;
  }
  /**
   * Handles the kemet-input-input event
   * @param {*} event
   * @private
   */


  handleInput(event) {
    this.value = event.detail;
    this.setStrength();
    this.visibility();
  }
  /**
   * Determines the strength of the password
   * @private
   */


  setStrength() {
    // We use a setTimeout here because makeRules adds the meetsCriteria
    // property to the rules. We need that to be set by render() before
    // setting the Strength because the percentage calc is based on it
    setTimeout(() => {
      const totalRules = this.rules.length;
      const metRules = this.rules.filter(rule => rule.meetsCriteria).length;
      const metRulesPercentage = Math.round(metRules / totalRules * 100) / 100;

      if (metRulesPercentage <= 0.33) {
        this.strength = 'weak';
        this.status = 'error';
      }

      if (metRulesPercentage > 0.33 && metRulesPercentage <= 0.67) {
        this.strength = 'better';
        this.status = 'error';
      }

      if (metRulesPercentage > 0.67) {
        this.strength = 'strong';
        this.status = 'success';
      }
      /**
       * Fires when there's a change in status.
       */


      this.dispatchEvent(new CustomEvent('kemet-password-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: this.status,
          validity: {
            meetsPasswordCriteria: this.status === 'success'
          },
          element: this
        }
      }));
    }, 1);
  }
  /**
   * Determines whether to show or hide the component
   * @private
   */


  visibility() {
    if (this.value.length > 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-password') || customElements.define('kemet-password', KemetPassword);
const keyCodes$1 = {
  ENTER: 13,
  SPACE: 32,
  ESC: 27
};

class KemetPopoverClose extends s$1 {
  static get styles() {
    return [r$3`
        button {
          font: inherit;
          color: inherit;
          cursor: pointer;
          border: 0;
          background: transparent;
        }
      `];
  }

  render() {
    return $`
      <button @click=${() => this.close()} @keyup=${event => this.handleKeyboard(event)}>
        <slot></slot>
      </button>
    `;
  }

  close() {
    this.dispatchEvent(new CustomEvent('kemet-popover-close-btn', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  handleKeyboard(event) {
    event.preventDefault();

    if (event.keyCode === keyCodes$1.SPACE || event.keyCode === keyCodes$1.ENTER) {
      this.close();
    }
  }

}

window.customElements.define('kemet-popover-close', KemetPopoverClose);
const fade = r$3`
  :host([effect="fade"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="fade"][opened]) #content {
    opacity: 1;
  }
`;
const scale = r$3`
  :host([effect="scale"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="scale"][opened]) #content {
    opacity: 1;
  }

  :host([effect="scale"][position="top"]) #content,
  :host([effect="scale"][position="bottom"]) #content {
    transform: translateX(-50%) scale(0.7);
  }

  :host([effect="scale"][position="top"][opened]) #content,
  :host([effect="scale"][position="bottom"][opened]) #content {
    transform: translateX(-50%) scale(1);
  }

  :host([effect="scale"][position="left"]) #content,
  :host([effect="scale"][position="right"]) #content {
    transform: translateY(-50%) scale(0.7);
  }

  :host([effect="scale"][position="left"][opened]) #content,
  :host([effect="scale"][position="right"][opened]) #content {
    transform: translateY(-50%) scale(1);
  }
`;
const slide = r$3`
  :host([effect="slide"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="slide"][opened]) #content {
    opacity: 1;
  }

  :host([effect="slide"][position="top"]) #content {
    transform: translateX(-50%) translateY(20%);
  }

  :host([effect="slide"][position="top"][opened]) #content {
    transform: translateX(-50%) translateY(0);
  }

  :host([effect="slide"][position="bottom"]) #content {
    transform: translateX(-50%) translateY(-20%);
  }

  :host([effect="slide"][position="bottom"][opened]) #content {
    transform: translateX(-50%) translateY(0);
  }

  :host([effect="slide"][position="right"]) #content {
    transform: translateY(-50%) translateX(-20%);
  }

  :host([effect="slide"][position="right"][opened]) #content {
    transform: translateY(-50%) translateX(0);
  }

  :host([effect="slide"][position="left"]) #content {
    transform: translateY(-50%) translateX(20%);
  }

  :host([effect="slide"][position="left"][opened]) #content {
    transform: translateY(-50%) translateX(0);
  }
`;
const fall = r$3`
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) #content {
    transform-style: preserve-3d;
    opacity: 0;
  }

  :host([effect="fall"][opened]) #content {
    transition: all var(--kemet-popover-transition-speed, 0.3s) ease-in;
    opacity: 1;
  }

  :host([effect="fall"][position="top"]) #content {
    transform: translateX(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="top"][opened]) #content {
    transform: translateX(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="bottom"]) #content {
    transform: translateX(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="bottom"][opened]) #content {
    transform: translateX(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="right"]) #content {
    transform: translateY(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="right"][opened]) #content {
    transform: translateY(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="left"]) #content {
    transform: translateY(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="left"][opened]) #content {
    transform: translateY(-50%) translateZ(0px) rotateX(0deg);
  }
`;
const flipHorizontal = r$3`
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) #content {
    opacity: 1;
  }

  :host([effect="flip-horizontal"][position="top"]) #content {
    transform: translateX(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="bottom"]) #content {
    transform: translateX(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="right"]) #content {
    transform: translateY(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="left"]) #content {
    transform: translateY(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }
`;
const flipVertical = r$3`
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) #content {
    opacity: 1;
  }

  :host([effect="flip-vertical"][position="top"]) #content {
    transform: translateX(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="bottom"]) #content {
    transform: translateX(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="right"]) #content {
    transform: translateY(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="left"]) #content {
    transform: translateY(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateX(0deg);
  }
`;
const sign = r$3`
  :host([effect="sign"]) {
    perspective: 1300px;
  }

  :host([effect="sign"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="sign"][opened]) #content {
    opacity: 1;
  }

  :host([effect="sign"][position="top"]) #content {
    transform-origin: 0 100%;
    transform: translateX(-50%) rotateX(90deg);
  }

  :host([effect="sign"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="sign"][position="bottom"]) #content {
    transform-origin: 100% 0;
    transform: translateX(-50%) rotateX(90deg);
  }

  :host([effect="sign"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="sign"][position="right"]) #content {
    transform-origin: 0 100%;
    transform: translateY(-50%) rotateY(90deg);
  }

  :host([effect="sign"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }

  :host([effect="sign"][position="left"]) #content {
    transform-origin: 100% 0;
    transform: translateY(-50%) rotateY(90deg);
  }

  :host([effect="sign"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }
`;
const superScaled = r$3`
  :host([effect="super-scaled"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="super-scaled"][opened]) #content {
    opacity: 1;
  }

  :host([effect="super-scaled"][position="top"]) #content,
  :host([effect="super-scaled"][position="bottom"]) #content {
    transform: translateX(-50%) scale(2);
  }

  :host([effect="super-scaled"][position="top"][opened]) #content,
  :host([effect="super-scaled"][position="bottom"][opened]) #content {
    transform: translateX(-50%) scale(1);
  }

  :host([effect="super-scaled"][position="left"]) #content,
  :host([effect="super-scaled"][position="right"]) #content {
    transform: translateY(-50%) scale(2);
  }

  :host([effect="super-scaled"][position="left"][opened]) #content,
  :host([effect="super-scaled"][position="right"][opened]) #content {
    transform: translateY(-50%) scale(1);
  }
`;
const tooltip = r$3`
  #tooltip {
    display: flex;
    position: absolute;
  }

  #tooltip polygon {
    fill: var(--kemet-popover-background-color, #202020);
  }

  :host([position="top"]) #tooltip {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="right"]) #tooltip {
    right: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  :host([position="bottom"]) #tooltip {
    bottom: 100%;
    left: 50%;
    transform-origin: left;
    transform: translateX(-50%);
  }

  :host([position="left"]) #tooltip {
    left: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  /* svg */
  #tooltip svg {
    position: relative;
  }

  :host([position="right"]) svg {
    transform: rotate(90deg);
    right: -8px;
  }

  :host([position="bottom"]) svg {
    transform: rotate(180deg);
    right: -8px;
  }

  :host([position="left"]) svg {
    transform: rotate(270deg);
    right: 8px;
  }
`;
const customTooltip = r$3`
  #custom-tooltip {
    display: flex;
    position: absolute;
    z-index: 3;
  }

  :host([position="top"]) #custom-tooltip {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="right"]) #custom-tooltip {
    right: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  :host([position="bottom"]) #custom-tooltip {
    bottom: 100%;
    left: 50%;
    transform-origin: left;
    transform: translateX(-50%);
  }

  :host([position="left"]) #custom-tooltip {
    left: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  ::slotted([slot="custom-tooltip"]) {
    display: flex;
  }
`;
const keyCodes = {
  ENTER: 13,
  SPACE: 32,
  ESC: 27
};

class KemetPopover extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: inline-block;
          position: relative;
          z-index: unset;
        }

        #trigger {
          display: inline-block;
          cursor: pointer;
        }

        ::slotted([slot="trigger"]) {
          position: relative;
          /* z-index: 2; */
        }

        #content {
          visibility: hidden;
          pointer-events: none;
          width: var(--kemet-popover-width, 100%);
          height: var(--kemet-popover-height, auto);
          position: absolute;
          z-index: -1;
        }

        :host([opened]) #content {
          visibility: visible;
          z-index: 9;
          pointer-events: auto;
        }

        ::slotted([slot="content"]) {
          color: var(--kemet-popover-color, #fafafa);
          display: block;
          position: relative;
          z-index: 2;
          cursor: default;
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
          background-color: var(--kemet-popover-background-color, #202020);
          transform: translate(var(--kemet-popover-content-offset-x, 0), var(--kemet-popover-content-offset-y, 0));
        }

        :host([position="top"]) #content {
          bottom: calc(100% + var(--kemet-popover-gap, 1rem));
          left: 50%;
          transform: translateX(-50%);
        }

        :host([position="right"]) #content {
          left: calc(100% + var(--kemet-popover-gap, 1rem));
          top: 50%;
          transform: translateY(-50%);
        }

        :host([position="bottom"]) #content {
          top: calc(100% + var(--kemet-popover-gap, 1rem));
          left: 50%;
          transform: translateX(-50%);
        }

        :host([position="left"]) #content {
          right: calc(100% + var(--kemet-popover-gap, 1rem));
          top: 50%;
          transform: translateY(-50%);
        }

        #overlay {
          display: none;
        }

        :host([opened]) #overlay {
          display: block;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          min-height: 100vh;
        }
      `, tooltip, customTooltip, fade, scale, slide, fall, flipHorizontal, flipVertical, sign, superScaled];
  }

  static get properties() {
    return {
      /**
       * Determines whether or not the popover displays.
       */
      opened: {
        type: Boolean,
        reflect: true
      },

      /**
       * The opening and closing effect of the popover. Is optional.
       * Values include:
       * (fade | scale | slide | fall | flip horizontal | flip vertical | sign | super scaled)
       */
      effect: {
        string: String,
        reflect: true
      },

      /**
       * Determines the placement of the popover.
       * Values include: (top | right | bottom | left)
       */
      position: {
        type: String,
        reflect: true
      },

      /**
       * Adds a built in tooltip to the popover.
       */
      tooltip: {
        type: Boolean
      },

      /**
       * Adds a custom tooltip to the popover.
       * Use the custom-tooltip slot to specify the custom tooltip.
       */
      customTooltip: {
        type: Boolean,
        attribute: 'custom-tooltip'
      },

      /**
       * Controls how the trigger should activate the popover.
       * Values include: (click | hover)
       */
      fireOn: {
        type: String,
        attribute: 'fire-on'
      },

      /**
       * Allows the popover to be closed by clicking outside of its content.
       */
      clickOutside: {
        type: Boolean,
        attribute: 'click-outside'
      },

      /**
       * Intelligently positions the popover.
       */
      smart: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.opened = false;
    this.effect = null;
    this.position = 'top';
    this.tooltip = false;
    this.customTooltip = false;
    this.fireOn = 'hover';
    this.clickOutside = false;
    this.smart = true;
    this.addEventListener('kemet-popover-close-btn', this.close.bind(this));
  }

  firstUpdated() {
    // standard properties
    this.focusableSelector = 'body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable], kemet-popover-close';
    this.focusableElements = this.querySelectorAll(this.focusableSelector); // eslint-disable-next-line prefer-destructuring

    this.contentElement = this.shadowRoot.querySelector('slot[name="content"]').assignedNodes({
      flatten: true
    })[0];
    window.addEventListener('resize', () => {
      this.smartContent();
    });

    if (this.fireOn === 'click') {
      this.focusableElements.forEach(element => {
        element.addEventListener('keydown', event => this.handleFocusableDown(event));
      });
    }
  }

  updated(prevProps) {
    if (!prevProps.get('opened') && this.opened === true) {
      /**
       * Fires when the popover opens.
       */
      this.dispatchEvent(new CustomEvent('kemet-popover-opened', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    if (prevProps.get('opened') && this.opened === false) {
      /**
       * Fires when the popover closes.
       */
      this.dispatchEvent(new CustomEvent('kemet-popover-closed', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }

    this.smartContent();
  }

  render() {
    return $`
      <div
        id="trigger"
        part="trigger"
        tabIndex="0"
        @click=${this.fireOn === 'click' ? event => this.toggle(event) : null}
        @keyup=${this.fireOn === 'click' ? event => this.handleKeyUp(event) : null}
        @mouseover=${this.fireOn !== 'click' ? () => this.open() : null}
        @focus=${this.fireOn !== 'click' ? () => this.open() : null}
        @mouseout=${this.fireOn !== 'click' ? () => this.close() : null}
        @blur=${this.fireOn !== 'click' ? () => this.close() : null}>
        <slot name="trigger"></slot>
        <div id="content" part="content">
          <slot name="content"></slot>
          ${this.makeTooltip()}
        </div>
      </div>
      ${this.makeOverlay()}
    `;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle(event) {
    const isSlotTrigger = event.target.getAttribute('slot') === 'trigger';
    const isPartTrigger = event.target.getAttribute('part') === 'trigger';

    if (isSlotTrigger || isPartTrigger) {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  handleKeyUp(event) {
    event.preventDefault();

    if (event.keyCode === keyCodes.ESC) {
      this.close();
    }

    if (event.keyCode === keyCodes.ENTER || event.keyCode === keyCodes.SPACE) {
      this.toggle();
    }
  }

  handleFocusableDown(event) {
    const firstFocusable = this.focusableElements[0];
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  makeTooltip() {
    if (this.customTooltip) {
      return $`
        <div id="custom-tooltip" part="custom-tooltip">
          <slot name="custom-tooltip"></slot>
        </div>
      `;
    }

    if (this.tooltip) {
      return $`
        <div id="tooltip" part="tooltip">
          <svg width="29px" height="14px" enable-background="new 0 0 29 14" viewBox="0 0 29 14">
            <polygon points="0.15,0 14.5,14.35 28.85,0 "/>
          </svg>
        </div>
      `;
    }

    return null;
  }

  makeOverlay() {
    if (this.clickOutside) {
      return $`
        <div id="overlay" @keyup=${() => this.close()} @click=${() => this.close()}></div>
      `;
    }

    return null;
  }

  smartContent() {
    if (this.smart) {
      // order here is important. to properly detect an offscreen popover,
      // we must remove the direction properties before getting contentRect
      this.contentElement.style.removeProperty('left');
      this.contentElement.style.removeProperty('right');
      this.contentElement.style.removeProperty('top');
      this.contentElement.style.removeProperty('bottom');
      const contentRect = this.contentElement.getBoundingClientRect();
      const padding = 24;
      const isOffScreenLeft = contentRect.left < 0;
      const isOffScreenRight = window.innerWidth - contentRect.right < 0;
      const isOffScreenTop = contentRect.top < 0;
      const isOffScreenBottom = contentRect.bottom > window.innerHeight; // adjust positioning

      if (this.position === 'top' && isOffScreenTop) {
        this.setPosition(contentRect);
      }

      if (this.position === 'right' && isOffScreenRight) {
        this.setPosition(contentRect);
      }

      if (this.position === 'bottom' && isOffScreenBottom) {
        this.setPosition(contentRect);
      }

      if (this.position === 'left' && isOffScreenLeft) {
        this.setPosition(contentRect);
      } // adjust content


      if (isOffScreenLeft) {
        this.contentElement.style.left = `${Math.abs(contentRect.left - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('left');
      }

      if (isOffScreenRight) {
        this.contentElement.style.right = `${Math.abs(window.innerWidth - contentRect.right - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('right');
      }

      if (isOffScreenTop) {
        this.contentElement.style.top = `${Math.abs(contentRect.top - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('top');
      }

      if (isOffScreenBottom) {
        this.contentElement.style.bottom = `${Math.abs(contentRect.bottom - window.innerHeight - padding)}px`;
      } else {
        this.contentElement.style.removeProperty('bottom');
      }
    }
  }

  setPosition(contentRect) {
    if (contentRect.top > 0) {
      this.position = 'top';
    } else if (contentRect.right < window.innerWidth) {
      this.position = 'right';
    } else if (contentRect.bottom < window.innerHeight) {
      this.position = 'bottom';
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-popover') || customElements.define('kemet-popover', KemetPopover);

class KemetRadio extends s$1 {
  static get styles() {
    return [r$3`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          cursor: pointer;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          margin-right: 0.5rem;
        }

        input {
          cursor: pointer;
          margin: 0;
          padding: 0;
          width: var(--kemet-radio-size, 18px);
          height: var(--kemet-radio-size, 18px);
          position: absolute;
          opacity: 0;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--kemet-radio-size, 18px);
          height: var(--kemet-radio-size, 18px);
          padding: 0;
          border-radius: 50%;
          background: none;
          border: var(--kemet-radio-border, 1px solid var(--kemet-color-primary));
        }

        [part='dot'] {
          display: inline-flex;
          border-radius: 50%;
          width: var(--kemet-radio-size, 18px);
          height: var(--kemet-radio-size, 18px);
          background: var(--kemet-radio-dot-color, var(--kemet-color-primary));
          border: var(--kemet-radio-border, 1px solid var(--kemet-color-primary));
          box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width, 3px) var(--kemet-radio-dot-border-color, var(--kemet-color-white));
        }

        :host([filled]) [part='dot'] {
          background: var(--kemet-radio-dot-color-filled, var(--kemet-color-white));
          box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width, 4px) var(--kemet-radio-dot-border-color, var(--kemet-color-primary));
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The text next to the radio button
       */
      label: {
        type: String
      },

      /**
       * Determines whether or not the button is checked
       */
      checked: {
        type: Boolean,
        reflect: true
      },

      /**
       * The name of the field
       */
      name: {
        type: String
      },

      /**
       * The value of the radio button
       */
      value: {
        type: String
      },

      /**
       * Determines if the button should be disabled
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Is true when the button is focused on
       */
      focused: {
        type: Boolean,
        reflect: true
      },

      /**
       * Displayed the button as a filled button
       */
      filled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.label = '';
    this.name = this.closest('kemet-radios').name || 'radio-button';
    this.disabled = false;
  }

  firstUpdated() {
    this.input = this.shadowRoot.querySelector('input');
    this.setAttribute('role', 'radio');

    if (this.checked) {
      this.setAttribute('aria-checked', 'true');
    } else {
      this.setAttribute('aria-checked', 'false');
    }
  }

  render() {
    return $`
      <label part="label">
        <input
          type="radio"
          name=${l$1(this.name)}
          .value=${this.value}
          .checked=${l(this.checked)}
          .disabled=${this.disabled}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
        />
        <button part="button" aria-label=${this.label}>${this.makeDot()}</button>
        <span part="text">${this.label}</span>
      </label>
    `;
  }

  click() {
    this.input.click();
  }

  blur() {
    this.input.blur();
  }

  focus() {
    this.input.focus();
  }

  handleBlur() {
    this.focused = false;
    /**
     * Fires when the checkbox loses or receives focus
     */

    this.dispatchEvent(new CustomEvent('kemet-radio-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));
  }

  handleFocus() {
    this.focused = true;
    /**
     * Fires when the checkbox loses or receives focus
     */

    this.dispatchEvent(new CustomEvent('kemet-radio-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }

  makeDot() {
    if (this.checked) {
      return $`
        <span part="dot"></span>
      `;
    }

    return null;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-radio') || customElements.define('kemet-radio', KemetRadio);

class KemetRadios extends s$1 {
  static get styles() {
    return [r$3`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 0.5rem;
        }

        legend {
          margin-bottom: 1rem;
        }

        :host([axis='vertical']) fieldset {
          flex-direction: column;
        }

        [part='message'] {
          display: block;
          margin-top: 0.5rem;
        }

        :host([status='error']) [part='message'] {
          color: var(--kemet-color-error);
        }

        :host([status='warning']) [part='message'] {
          color: var(--kemet-color-error);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The legend text for the fieldset
       */
      legend: {
        type: String
      },

      /**
       * The direction of the button's layout
       */
      axis: {
        type: String,
        reflect: true
      },

      /**
       * The value of the selected radio button
       */
      value: {
        type: String
      },

      /**
       * The name of the radio button set
       */
      name: {
        type: String
      },

      /**
       * The status of the radio button set
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Validation message for the user
       */
      message: {
        type: String
      },

      /**
       * Determines whether or not the radio button set is required
       */
      required: {
        type: Boolean
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.legend = '';
    this.axis = 'horizontal';
    this.name = 'radios';
    this.status = 'standard';
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    this.radios = this.querySelectorAll('kemet-radio');
    this.setAttribute('role', 'radiogroup');
  }

  render() {
    return $`
      <fieldset part="fieldset">
        ${this.legend !== '' ? $`<legend part="legend">${this.legend}</legend>` : null}
        <slot @click=${event => this.handleClick(event)} @keydown=${event => this.handleKeyDown(event)} @slotchange=${() => this.handleSlotChange()}></slot>
      </fieldset>
      ${this.makeMessage()}
    `;
  }

  handleClick(event) {
    const {
      target
    } = event;
    this.radios.forEach(radio => {
      radio.checked = false;
      radio.tabIndex = radio === target ? 0 : -1;
      radio.setAttribute('aria-checked', 'false');
    });

    if (!target.disabled) {
      target.checked = true;
      target.setAttribute('aria-checked', 'true');
      this.value = target.value;
      this.status = 'standard';
      /**
       * Fires when the state of the checkbox changes
       */

      this.dispatchEvent(new CustomEvent('kemet-radios-change', {
        bubbles: true,
        composed: true,
        detail: target
      }));
    }
  }

  handleKeyDown(event) {
    const radios = Array.from(this.radios);
    const arrowKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    const forwardKeys = ['ArrowRight', 'ArrowDown'];
    const shift = forwardKeys.includes(event.key) ? 1 : -1;
    const checkedIndex = radios.findIndex(radio => radio.checked) ?? radios[0];
    let index = checkedIndex + shift;

    if (arrowKeys.includes(event.key)) {
      if (index < 0) {
        index = radios.length - 1;
      }

      if (index > radios.length - 1) {
        index = 0;
      }

      this.radios.forEach(radio => {
        radio.checked = false;
        radio.tabIndex = -1;
      });
      this.radios[index].focus();
      this.radios[index].checked = true;
      this.radios[index].tabIndex = 0;
    }
  }

  handleSlotChange() {
    const radios = Array.from(this.radios);
    const checkedRadio = radios.find(radio => radio.checked);
    this.radios.forEach(radio => {
      radio.tabIndex = -1;
      radio.input.tabIndex = -1;
    });

    if (checkedRadio) {
      checkedRadio.tabIndex = 0;
    }
  }

  makeMessage() {
    if (this.status === 'error' || this.status === 'warning') {
      return $`<span part="message">${this.message}</span>`;
    }

    return null;
  }

  checkValidity() {
    if (this.required) {
      return !!this.value;
    }

    return true;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-radios') || customElements.define('kemet-radios', KemetRadios);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

class e extends i {
  constructor(i) {
    if (super(i), this.it = w, i.type !== t.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }

  render(r) {
    if (r === w || null == r) return this.ft = void 0, this.it = r;
    if (r === b) return r;
    if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.it) return this.ft;
    this.it = r;
    const s = [r];
    return s.raw = s, this.ft = {
      _$litType$: this.constructor.resultType,
      strings: s,
      values: []
    };
  }

}

e.directiveName = "unsafeHTML", e.resultType = 1;
const o = e$1(e);

class KemetRotator extends s$1 {
  static get styles() {
    return r$3`
      :host {
        display: flex;
      }

      .rotator__slide {
        pointer-events: none;
      }

      .rotator__slide--active {
        pointer-events: auto;
      }

      /* fade effect */
      :host([effect="fade"]) .rotator {
        display: inline-flex;
        flex-wrap: nowrap;
        flex-direction: row;
      }

      :host([effect="fade"]) .rotator__slide {
        width: 100%;
        flex: none;
        opacity: 0;
        box-sizing: border-box;
        transition: all var(--kemet-rotator-transition-speed, 500ms) ease;
      }

      :host([effect="fade"]) .rotator__slide:not(:first-child) {
        margin-left: -100%; /* this is the bulk of the overlay trick */
      }

      :host([effect="fade"]) .rotator__slide--active {
        opacity: 1;
      }

      /* flip effect */
      :host([effect="flip"]) .rotator {
        display: flex;
        position: relative;

        perspective: 500;
      }

      :host([effect="flip"]) .rotator__slide {
        display: block;
        width: auto;
        position: absolute;
        top: -20px;
        left: 0;

        opacity: 0;

        transform: rotateX(90deg);
        transform-origin: 0% 0%;
        transition: all var(--kemet-rotator-transition-speed, 500ms) ease;
      }

      :host([effect="flip"]) .rotator__slide--active {
        top: 0;
        opacity: 1;

        transform: rotateX(0deg);
      }

      :host([effect="flip"]) .rotator__slide--prev {
        top: 40px;;
        transform: rotateX(-90deg);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The index number for the current slide.
       */
      activeSlide: {
        type: Number
      },

      /**
       * The width of the rotator block.
       */
      width: {
        type: String
      },

      /**
       * The height of the rotator block.
       */
      height: {
        type: String
      },

      /**
       * Text in the rotator. Supports HTML.
       */
      messages: {
        type: Array
      },

      /**
       * The transition effect type.
       */
      effect: {
        type: String,
        reflect: true
      },

      /**
       * How fast, in seconds, each slide lasts. Stop the rotator with 0.
       */
      rotationSpeed: {
        type: Number,
        attribute: 'rotation-speed'
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.activeSlide = 0;
    this.messages = [];
    this.effect = 'fade';
    this.rotationSpeed = 3;
    this.width = 'auto';
    this.height = 'auto';
  }

  firstUpdated() {
    // standard properties
    this.prevSlide = null;
    window.addEventListener('resize', this.setDimensions.bind(this));
  }

  updated(changed) {
    const widthHasChanged = !!changed.get('width');
    const heightHasChanged = !!changed.get('height');
    this.setDimensions(); // only trigger slide updates when width and height has not changed

    if (!widthHasChanged && !heightHasChanged) {
      setTimeout(() => {
        if (this.rotationSpeed > 0) {
          this.nextSlide();
        }
      }, this.rotationSpeed * 1000);
    }
  }

  render() {
    const setWidth = this.effect === 'flip' ? `width:${this.width};` : '';
    const setHeight = this.effect === 'flip' ? `height:${this.height};` : '';
    return $`
      <span class="rotator" style="${setWidth} ${setHeight}">
        ${this.makeMessages()}
      </span>
    `;
  }

  makeMessages() {
    const messages = this.messages.map((message, index) => {
      const setActiveClass = this.activeSlide === index ? 'rotator__slide--active' : '';
      const setPrevClass = this.prevSlide === index ? 'rotator__slide--prev' : '';
      return $`
        <span class="rotator__slide ${setActiveClass} ${setPrevClass}">
          ${o(message)}
        </span>
      `;
    });
    return messages;
  }

  setDimensions() {
    if (this.effect === 'flip') {
      this.width = `${this.offsetWidth}px`;
      const slides = this.shadowRoot.querySelectorAll('.rotator__slide');
      let tallest = 0;
      slides.forEach(slide => {
        if (slide.offsetHeight > tallest) {
          tallest = slide.offsetHeight;
        }
      });
      this.height = `${tallest}px`;
    }
  }

  nextSlide() {
    if (this.activeSlide < this.messages.length - 1) {
      this.activeSlide += 1;
      this.prevSlide = this.activeSlide - 1;
    } else {
      this.activeSlide = 0;
      this.prevSlide = this.messages.length - 1;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-rotator') || customElements.define('kemet-rotator', KemetRotator);

class KemetScrollLink extends s$1 {
  static get styles() {
    return r$3`
      :host {
        cursor: pointer;
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * A DOM element that establishes the context of scrolling.
       */
      element: {
        type: Object
      },

      /**
       * A DOM element that represents the destination of the scroll link.
       * If no target is specified it will default to the top of the page.
       */
      target: {
        type: Object
      },

      /**
       * Allows the horizontal scrolling to stop short of the given value.
       */
      xOffset: {
        type: Number,
        attribute: 'x-offset',
        reflect: true
      },

      /**
       * Allows the vertical scrolling to stop short of the given value.
       */
      yOffset: {
        type: Number,
        attribute: 'y-offset',
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.element = this.element || window;
    this.target = this.target || document.querySelector('body');
    this.xOffset = 0;
    this.yOffset = 0;
  }

  firstUpdated() {
    // standard properties
    this.keyCodes = {
      ENTER: 13,
      SPACE: 32
    };
    this.isSmoothSupported = 'scrollBehavior' in document.documentElement.style;
  }

  render() {
    return $`
      <div tabindex="0" @click=${() => this.handleScroll()} @keyup=${event => this.handleKeyup(event)}>
        <slot></slot>
      </div>
    `;
  }

  handleKeyup(event) {
    if (event.keyCode === this.keyCodes.ENTER || event.keyCode === this.keyCodes.SPACE) {
      this.handleScroll();
    }
  }

  handleScroll() {
    const scrollTop = this.target.offsetTop + this.yOffset;
    const scrollLeft = this.target.offsetLeft + this.xOffset;

    if (this.isSmoothSupported) {
      this.element.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: 'smooth'
      });
    } else {
      this.element.scrollTo(scrollLeft, scrollTop);
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-scroll-link') || customElements.define('kemet-scroll-link', KemetScrollLink);

class KemetScrollNav extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: block;
          box-sizing: border-box;
          padding: var(--kemet-scroll-nav-padding, 1rem 2rem);
          background-color: var(--kemet-scroll-nav-background, #fafafa);
          transition: all var(--kemet-scroll-nav-transition, 300ms) ease;
        }

        :host([transform]),
        :host([effect="resize"]) {
          position: fixed;
          top: 0;
          width: 100%;
        }

        :host([effect="resize"]) {
          height: var(--kemet-scroll-nav-resize-height, 400px);
        }

        :host([transform][effect="resize"]) {
          height: var(--kemet-scroll-nav-resize-height-transformed, 100px);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Determines where the transform point is activated. Values include: (sticky | resize)
       */
      effect: {
        type: String,
        reflect: true
      },

      /**
       * Whether or not the nav has shifted into a new state.
       */
      transform: {
        type: Boolean,
        reflect: true
      },

      /**
       * Allows for an arbitrary adjustment of the transform point in pixels.
       * Works with negative values.
       */
      offset: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.effect = 'sticky';
    this.transform = false;
    this.offset = 0;
  }

  render() {
    return $`
      <slot></slot>
    `;
  }

  firstUpdated() {
    const stickPoint = this.offsetTop;
    const elementHeight = this.offsetHeight;
    window.addEventListener('scroll', () => {
      // we pass stickPoint and elementHeight as recorded constants
      // so that it does not update for each call to handleScroll
      this.handleScroll(stickPoint, elementHeight);
    });
  }

  handleScroll(stickPoint, elementHeight) {
    const transformPoint = this.effect === 'sticky' ? stickPoint + this.offset : elementHeight + this.offset;

    if (window.pageYOffset >= transformPoint) {
      this.transform = true;
    } else {
      this.transform = false;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-scroll-nav') || customElements.define('kemet-scroll-nav', KemetScrollNav);

class KemetScrollSnapPaginator extends s$1 {
  static get styles() {
    return r$3`
      :host {
        margin: auto;
        padding: var(--kemet-scroll-snap-paginator-padding, 1rem 0);
      }

      nav {
        display: flex;
        gap: var(--kemet-scroll-snap-paginator-gap, 0.5rem);
      }

      :host([center]) nav {
        justify-content: center;
      }

      .link {
        cursor: pointer;
        color: var(--kemet-scroll-snap-paginator-link-color, var(--kemet-color-primary));
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Information about each slide.
       */
      slides: {
        type: Array
      },

      /**
       * A string representing which icon to use for pagination. Supports icons used in kemet-icon.
       */
      icon: {
        type: String
      },

      /**
       * The size in pixels of the icons.
       */
      size: {
        type: Number
      },

      /**
       * Determines whether to center the pagination items.
       */
      center: {
        type: Boolean,
        reflect: true
      },

      /**
       * Will hide inactive pagination items if set to true.
       */
      hideFocusedLinks: {
        type: Boolean,
        attribute: 'hide-focused-links'
      },

      /**
       * If set to true, the pages in the pagination iterator will appear as a set of numbers.
       */
      useNumberPages: {
        type: Boolean,
        reflect: true,
        attribute: 'use-number-pages'
      },

      /**
       * If set to true, the pages in the pagination iterator will appear as the label set on
       * the slide.
       */
      useLabelPages: {
        type: Boolean,
        reflect: true,
        attribute: 'use-label-pages'
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.slides = [];
    this.icon = 'circle-fill';
    this.size = 16;
    this.hideFocusedLinks = false;
    this.useNumberPages = false;
    this.useLabelPages = false;
  }

  updated() {
    const scrollSnapElement = this.closest('kemet-scroll-snap');

    if (scrollSnapElement) {
      scrollSnapElement.addEventListener('kemet-scroll-snap-make-slides', event => {
        this.slides = event.detail;
      });
    }
  }

  render() {
    return $`
      <nav part="nav">${this.makePagination()}</nav>
    `;
  }

  makePagination() {
    let counter = 0;

    if (this.slides) {
      return this.slides.map(slide => {
        counter = counter += 1;

        if (slide.focused) {
          return $`
            <span part="span">${this.pageDisplay(slide, counter)}</span>
          `;
        }

        return $`
          <span
            class="link"
            tabindex="0"
            role="button"
            @keyup="${event => this.handleKeyboardInput(event, slide.id)}"
            @click=${() => this.slideLink(slide.id)}
            aria-label="${slide.label}">
            ${this.pageDisplay(slide, counter)}
          </span>
        `;
      });
    }

    return null;
  }

  pageDisplay(slide, visibleIndex) {
    if (this.useNumberPages) {
      return visibleIndex;
    }

    if (this.useLabelPages) {
      return slide.label;
    }

    return $`<kemet-icon icon=${this.icon} size=${this.size}></kemet-icon>`;
  }

  slideLink(index) {
    /**
     * Fires when a set of slides are focused on.
     */
    this.dispatchEvent(new CustomEvent('kemet-scroll-snap-focus', {
      bubbles: true,
      composed: true,
      detail: index
    }));
  }

  handleKeyboardInput(event, id) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.slideLink(id);
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-scroll-snap-paginator') || customElements.define('kemet-scroll-snap-paginator', KemetScrollSnapPaginator);

class KemetScrollSnapSlide extends s$1 {
  static get styles() {
    return r$3`
      :host {
        display: block;
        flex: 0 0 auto;
        width: var(--kemet-scroll-snap-slide-width, 100%);
        scroll-snap-align: var(--kemet-scroll-snap-slide-align, center);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Is true when the slide is fully visible in it's container.
       */
      focused: {
        type: Boolean,
        reflect: true
      },

      /**
       * Identifies the slide.
       */
      index: {
        type: String,
        reflect: true
      },

      /**
       * Labels the slide.
       */
      label: {
        type: String,
        reflect: true
      }
    };
  }

  updated() {
    this.addTabIndex();
  }

  render() {
    return $`
      <slot></slot>
    `;
  }

  addTabIndex() {
    this.setAttribute('tabindex', '0');
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-scroll-snap-slide') || customElements.define('kemet-scroll-snap-slide', KemetScrollSnapSlide);

class KemetScrollSnap extends s$1 {
  static get styles() {
    return r$3`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      :host([axis='horizontal']) {
        margin: auto;
        max-width: var(--kemet-scroll-snap-horizontal-max-width, 1024px);
      }

      :host([pagination="left"]),
      :host([pagination="right"]) {
        flex-direction: row;
      }

      :host([pagination="none"]) ::slotted([slot="pagination"]) {
        display: none;
      }

      :host([pagination="top"]) ::slotted([slot="pagination"]),
      :host([pagination="left"]) ::slotted([slot="pagination"]) {
        order: -1;
      }


      ::slotted([slot="slides"]) {
        display: flex;
        gap: var(--kemet-scroll-snap-gap, 1.5rem);
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
      }

      /* vertical */
      :host([axis="vertical"]) {
        height: var(--kemet-scroll-snap-vertical-height, 100vh);
      }

      :host([axis="vertical"]) ::slotted([slot="slides"]) {
        flex-direction: column;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
        padding: var(--kemet-scroll-snap-slides-vertical-padding, 0 2rem);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Determines the direction the component flows. Values include: (horizontal|vertical)
       */
      axis: {
        type: String,
        reflect: true
      },

      /**
       * Determines where to display the paginator. Values include: (top | right | bottom | left)
       */
      pagination: {
        type: String,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.axis = 'horizontal';
    this.pagination = 'bottom';
    this.addEventListener('kemet-scroll-snap-focus', event => {
      this.focusSlide(event.detail);
    });
  }

  firstUpdated() {
    // standard properties
    this.isTouchDevice = 'ontouchstart' in document.documentElement;
    this.slides = [];
    this.setFocusedSlides();
  }

  updated() {
    this.setVerticalAttribute();
  }

  render() {
    return $`
      <slot name="slides"></slot>
      <slot name="pagination"></slot>
    `;
  }

  setFocusedSlides() {
    // reference: https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/
    // reference: https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
    const slides = this.querySelectorAll('kemet-scroll-snap-slide');
    const container = this.querySelector('[slot="slides"]');
    const options = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = entries => {
      entries.forEach(entry => {
        const {
          target
        } = entry;

        if (entry.intersectionRatio >= 0.5) {
          target.focused = true;
        } else {
          target.focused = false;
        }
      });
      this.makeSlides();
    };

    const observer = new IntersectionObserver(callback, options);
    slides.forEach(slide => {
      observer.observe(slide);
    });
  }

  makeSlides() {
    const slides = [];
    this.querySelectorAll('kemet-scroll-snap-slide').forEach((element, index) => {
      const slide = element;
      slide.index = index;
      slides.push({
        id: index,
        focused: slide.focused,
        label: slide.label
      });
    });
    this.slides = slides;
    /**
     * Fires when slide data has been created.
     */

    this.dispatchEvent(new CustomEvent('kemet-scroll-snap-make-slides', {
      bubbles: true,
      composed: true,
      detail: this.slides
    }));
  }

  focusSlide(index) {
    const activeSlide = this.querySelector(`kemet-scroll-snap-slide[index="${index}"]`);
    activeSlide.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  setVerticalAttribute() {
    if (this.axis === 'vertical') {
      document.querySelector('html').setAttribute('kemet-scroll-snap-axis', 'vertical');
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-scroll-snap') || customElements.define('kemet-scroll-snap', KemetScrollSnap);

class KemetOption extends s$1 {
  static get properties() {
    return {
      /**
       * The label of the option
       */
      label: {
        type: String
      },

      /**
       * The value of the options
       */
      value: {
        type: String
      },

      /**
       * Determines whether to disable the option
       */
      disabled: {
        type: Boolean
      },

      /**
       * Selects the option if true
       */
      selected: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return $`<slot></slot>`;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-option') || customElements.define('kemet-option', KemetOption);

class KemetSelect extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          position: relative;
          display: block;
        }

        select {
          display: block;
          font-size: 1rem;
          width: 100%;
          padding: var(--kemet-select-padding, 1rem);
          border: var(--kemet-select-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
          background-color: transparent;
        }

        :host([status='error']) select {
          border: var(--kemet-select-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) select {
          border: var(--kemet-select-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) select {
          border: var(--kemet-select-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) select {
          opacity: 0.5;
        }

        :host([rounded]) select {
          border-radius: var(--kemet-select-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) select {
          border: var(--kemet-select-border-filled, none);
          color: var(--kemet-select-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-select-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) kemet-icon {
          color: var(--kemet-select-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) select {
          background-color: var(--kemet-select-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) select {
          background-color: var(--kemet-select-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) select {
          background-color: var(--kemet-select-background-color-warning, var(--kemet-color-warning));
        }

        kemet-icon {
          position: absolute;
          right: var(--kemet-select-icon-right, 1rem);
          top: 50%;
          transform: translateY(-50%);
        }
      `];
  }

  static get properties() {
    return {
      /**
       * A string the uniquely identifies the select
       */
      slug: {
        type: String
      },

      /**
       * The name of the select
       */
      name: {
        type: String
      },

      /**
       * The value of the select
       */
      value: {
        type: String
      },

      /**
       * The options the select contains
       */
      options: {
        type: Array
      },

      /**
       * The status of the select
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * Determines whether or not the field is required
       */
      required: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines whether or not the field is disabled
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Support of multiple choice selections
       */
      multiple: {
        type: Boolean
      },

      /**
       * The dropdown icon
       */
      icon: {
        type: String
      },

      /**
       * The dropdown icon size
       */
      iconSize: {
        type: Number,
        attribute: 'icon-size'
      },

      /**
       * Displays a filled select
       */
      filled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Displays rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.name = 'select';
    this.icon = 'chevron-down';
    this.iconSize = 16;
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new FormSubmitController(this); // elements

    this.control = this.closest('kemet-field');
  }

  firstUpdated() {
    // elements
    this.select = this.shadowRoot.querySelector('select');
    this.selectedOption = this.querySelector('[selected]');
    this.value = this.selecltedOption ? this.selectedOption.value : '';
  }

  render() {
    return $`
      <select
        part="select"
        id=${this.slug}
        name=${this.name}
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?multiple=${this.multiple}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @invalid=${this.handleInvalid}
      >
        ${this.makeOptions()}
      </select>
      ${this.makeIcon()}
      <slot @slotchange=${() => this.makeOptions()}></slot>
    `;
  }
  /**
   * Generates the option elements
   * @private
   * @returns {TemplateResult} An option element
   */


  makeOptions() {
    this.options = [];
    this.optionElements = this.querySelectorAll('kemet-option');
    this.optionElements.forEach(option => {
      // if (index === 0) this.value = option.value;
      // this.value = option.selected ? option.value : this.value;
      this.options = this.options.concat({
        label: option.label,
        value: option.value,
        disabled: option.disabled,
        selected: option.selected
      });
    });
    return this.options.map(option => $`<option value=${option.value} ?disabled=${option.disabled} ?selected=${option.selected}>
          ${option.label}
        </option>`);
  }
  /**
   * Generates an dropdown icon
   * @private
   */


  makeIcon() {
    if (this.icon || this.icon !== '') {
      return $`<kemet-icon icon=${this.icon} size=${this.iconSize}></kemet-icon>`;
    }

    return null;
  }
  /**
   * Handles when the input receives focus
   * @private
   */


  handleFocus() {
    this.hasFocus = true;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }
  /**
   * Handles when the input loses focus
   * @private
   */


  handleBlur() {
    this.hasFocus = false;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));
    this.select.checkValidity();

    if (!this.select.checkValidity()) {
      this.invalid = true;
      this.status = 'error';
      this.control.status = 'error';
      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'error',
          validity: this.select.validity,
          element: this
        }
      }));
    }
  }
  /**
   * Handles when the input changes value
   * @private
   */


  handleChange() {
    this.value = this.select.value;

    if (this.select.checkValidity()) {
      this.invalid = false;
      this.status = 'standard';
      /**
       * Fires when there's a change in status
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'standard',
          validity: this.select.validity,
          element: this
        }
      }));
    }
  }
  /**
   * Handles when the input has an error
   * @private
   */


  handleInvalid() {
    this.invalid = true;
    this.status = 'error';
    /**
     * Fires when there's a change in status
     */

    this.dispatchEvent(new CustomEvent('kemet-input-status', {
      bubbles: true,
      composed: true,
      detail: {
        status: 'error',
        validity: this.select.validity,
        element: this
      }
    }));
  }
  /**
   * Checks the validity of the standard select
   * @public
   * @returns {boolean}
   */


  checkValidity() {
    this.select.checkValidity();
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-select') || customElements.define('kemet-select', KemetSelect);

class KemetSortableItem extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          cursor: grab;
          display: block;
          padding: 1rem;
          border: 1px solid var(--kemet-color-primary);
        }

        :host([ghost]) {
          opacity: 0.5;
          border-style: dashed;
        }
      `];
  }

  static get properties() {
    return {
      /* Automatically set to true when an item is dragged to a new spot */
      ghost: {
        type: Boolean,
        reflect: true
      }
    };
  }

  firstUpdated() {
    this.draggable = true;
  }

  render() {
    return $`<slot></slot>`;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-sortable-item') || customElements.define('kemet-sortable-item', KemetSortableItem);
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};
var index_min = {
  exports: {}
};
/*! mobile-drag-drop 2.1.0 | Copyright (c) 2017 Tim Ruffles | MIT License */

(function (module, exports) {
  !function (a, b) {
    b(exports);
  }(commonjsGlobal, function (a) {
    function b() {
      var a = {
        dragEvents: "ondragstart" in document.documentElement,
        draggable: "draggable" in document.documentElement,
        touchEvents: "ontouchstart" in document.documentElement,
        userAgentSupportingNativeDnD: void 0
      },
          b = !!window.chrome || /chrome/i.test(navigator.userAgent);
      return a.userAgentSupportingNativeDnD = !(/iPad|iPhone|iPod|Android/.test(navigator.userAgent) || b && a.touchEvents), a;
    }

    function c() {
      var a = !1;

      try {
        var b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          }
        });
        window.addEventListener("test", null, b);
      } catch (a) {}

      return a;
    }

    function d(a) {
      if (a && Object.keys(a).forEach(function (b) {
        B[b] = a[b];
      }), !B.forceApply) {
        var d = b();
        if (d.userAgentSupportingNativeDnD && d.draggable && d.dragEvents) return !1;
      }

      return y = c(), B.holdToDrag ? h("touchstart", w, !1) : h("touchstart", e, !1), !0;
    }

    function e(a) {
      if (!z) {
        var b = f(a);
        if (b) try {
          z = new J(a, B, b, g);
        } catch (b) {
          throw g(B, a, 3), b;
        }
      }
    }

    function f(a) {
      var b = a.target;

      do if (b.draggable !== !1 && b.getAttribute && "true" === b.getAttribute("draggable")) return b; while ((b = b.parentNode) && b !== document.body);
    }

    function g(a, b, c) {
      if (0 === c && a.defaultActionOverride) try {
        a.defaultActionOverride(b), b.defaultPrevented;
      } catch (a) {}
      z = null;
    }

    function h(a, b, c) {
      void 0 === c && (c = !0), document.addEventListener(a, b, !!y && {
        passive: c
      });
    }

    function i(a, b) {
      document.removeEventListener(a, b);
    }

    function j(a) {
      return 0 === a.length ? 0 : a.reduce(function (a, b) {
        return b + a;
      }, 0) / a.length;
    }

    function k(a) {
      return a && a.tagName;
    }

    function l(a, b) {
      for (var c = 0; c < a.changedTouches.length; c++) {
        var d = a.changedTouches[c];
        if (d.identifier === b) return !0;
      }

      return !1;
    }

    function m(a, b, c, d, e, f, g) {
      void 0 === g && (g = null);
      var h = b.changedTouches[0],
          i = new Event(c, {
        bubbles: !0,
        cancelable: d
      });
      i.dataTransfer = f, i.relatedTarget = g, i.screenX = h.screenX, i.screenY = h.screenY, i.clientX = h.clientX, i.clientY = h.clientY, i.pageX = h.pageX, i.pageY = h.pageY;
      var j = a.getBoundingClientRect();
      return i.offsetX = i.clientX - j.left, i.offsetY = i.clientY - j.top, i;
    }

    function n(a, b, c) {
      for (var d = [], e = [], f = 0; f < b.touches.length; f++) {
        var g = b.touches[f];
        d.push(g[a + "X"]), e.push(g[a + "Y"]);
      }

      c.x = j(d), c.y = j(e);
    }

    function o(a, b) {
      if (1 === a.nodeType) {
        for (var c = getComputedStyle(a), d = 0; d < c.length; d++) {
          var e = c[d];
          b.style.setProperty(e, c.getPropertyValue(e), c.getPropertyPriority(e));
        }

        b.style.pointerEvents = "none", b.removeAttribute("id"), b.removeAttribute("class"), b.removeAttribute("draggable");
      }

      if (a.hasChildNodes()) for (var d = 0; d < a.childNodes.length; d++) o(a.childNodes[d], b.childNodes[d]);
    }

    function p(a) {
      var b = a.cloneNode(!0);
      return o(a, b), b.style.position = "absolute", b.style.left = "0px", b.style.top = "0px", b.style.zIndex = "999999", b.classList.add(G), b.classList.add(I), b;
    }

    function q(a) {
      return E.map(function (b) {
        var c = a.style[b + "transform"];
        return c && "none" !== c ? c.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g, "") : "";
      });
    }

    function r(a, b, c, d, e) {
      void 0 === e && (e = !0);
      var f = b.x,
          g = b.y;
      d && (f += d.x, g += d.y), e && (f -= parseInt(a.offsetWidth, 10) / 2, g -= parseInt(a.offsetHeight, 10) / 2);

      for (var h = "translate3d(" + f + "px," + g + "px, 0)", i = 0; i < E.length; i++) {
        var j = E[i] + "transform";
        a.style[j] = h + " " + c[i];
      }
    }

    function s(a, b, c, d) {
      var e = getComputedStyle(a);
      if ("hidden" === e.visibility || "none" === e.display) return void d();
      b.classList.add(H);
      var f = getComputedStyle(b),
          g = parseFloat(f.transitionDuration);
      if (isNaN(g) || 0 === g) return void d();
      var h = a.getBoundingClientRect(),
          i = {
        x: h.left,
        y: h.top
      };
      i.x += document.body.scrollLeft || document.documentElement.scrollLeft, i.y += document.body.scrollTop || document.documentElement.scrollTop, i.x -= parseInt(e.marginLeft, 10), i.y -= parseInt(e.marginTop, 10);
      var j = parseFloat(f.transitionDelay),
          k = Math.round(1e3 * (g + j));
      r(b, i, c, void 0, !1), setTimeout(d, k);
    }

    function t(a, b) {
      return a ? a === C[0] ? D[0] : 0 === a.indexOf(C[1]) || a === C[7] ? D[1] : 0 === a.indexOf(C[4]) ? D[3] : a === C[6] ? D[2] : D[1] : 3 === b.nodeType && "A" === b.tagName ? D[3] : D[1];
    }

    function u(a, b, c, d, e, f, g) {
      if (void 0 === f && (f = !0), void 0 === g && (g = null), A) ;
      var k = m(b, c, a, f, document.defaultView, e, g),
          l = !b.dispatchEvent(k);
      return d.g = 0, l;
    }

    function v(a, b) {
      if (!a || a === C[7]) return b;

      if (b === D[1]) {
        if (0 === a.indexOf(D[1])) return D[1];
      } else if (b === D[3]) {
        if (0 === a.indexOf(D[3]) || a.indexOf("Link") > -1) return D[3];
      } else if (b === D[2] && (0 === a.indexOf(D[2]) || a.indexOf("Move") > -1)) return D[2];

      return D[0];
    }

    function w(a) {
      var b = a.target,
          c = function () {
        g.off(), h.off(), i.off(), e(a);
      },
          d = function () {
        g.off(), h.off(), i.off(), clearTimeout(f);
      },
          f = setTimeout(c, B.holdToDrag),
          g = x(b, "touchend", d, this),
          h = x(b, "touchcancel", d, this),
          i = x(window, "scroll", d, this);
    }

    function x(a, b, c, d) {
      return d && (c = c.bind(d)), a.addEventListener(b, c), {
        off: function () {
          return a.removeEventListener(b, c);
        }
      };
    }

    var y,
        z,
        A = !1,
        B = {
      iterationInterval: 150
    },
        C = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all"],
        D = ["none", "copy", "move", "link"],
        E = ["", "-webkit-"],
        F = "dnd-poly-",
        G = F + "drag-image",
        H = F + "snapback",
        I = F + "icon",
        J = function () {
      function a(a, b, c, d) {
        this.h = a, this.i = b, this.j = c, this.k = d, this.l = 0, this.m = null, this.o = null, this.p = a, this.q = a.changedTouches[0], this.s = this.t.bind(this), this.u = this.v.bind(this), h("touchmove", this.s, !1), h("touchend", this.u, !1), h("touchcancel", this.u, !1);
      }

      return a.prototype.A = function () {
        var a = this;
        this.l = 1, this.B = D[0], this.C = {
          D: {},
          F: void 0,
          g: 3,
          G: []
        }, this.H = {
          x: null,
          y: null
        }, this.I = {
          x: null,
          y: null
        };
        var b = this.j;
        if (this.J = new K(this.C, function (c, d, e) {
          b = c, "number" != typeof d && "number" != typeof e || (a.K = {
            x: d || 0,
            y: e || 0
          });
        }), this.C.g = 2, this.J.dropEffect = D[0], u("dragstart", this.j, this.p, this.C, this.J)) return this.l = 3, this.L(), !1;
        if (n("page", this.p, this.I), this.M = p(b), this.N = q(this.M), !this.K) if (this.i.dragImageOffset) this.K = {
          x: this.i.dragImageOffset.x,
          y: this.i.dragImageOffset.y
        };else if (this.i.dragImageCenterOnTouch) {
          var c = getComputedStyle(b);
          this.K = {
            x: 0 - parseInt(c.marginLeft, 10),
            y: 0 - parseInt(c.marginTop, 10)
          };
        } else {
          var d = b.getBoundingClientRect(),
              c = getComputedStyle(b);
          this.K = {
            x: d.left - this.q.clientX - parseInt(c.marginLeft, 10) + d.width / 2,
            y: d.top - this.q.clientY - parseInt(c.marginTop, 10) + d.height / 2
          };
        }
        return r(this.M, this.I, this.N, this.K, this.i.dragImageCenterOnTouch), document.body.appendChild(this.M), this.O = setInterval(function () {
          a.P || (a.P = !0, a.R(), a.P = !1);
        }, this.i.iterationInterval), !0;
      }, a.prototype.L = function () {
        this.O && (clearInterval(this.O), this.O = null), i("touchmove", this.s), i("touchend", this.u), i("touchcancel", this.u), this.M && (this.M.parentNode.removeChild(this.M), this.M = null), this.k(this.i, this.p, this.l);
      }, a.prototype.t = function (a) {
        var b = this;

        if (l(a, this.q.identifier) !== !1) {
          if (this.p = a, 0 === this.l) {
            var c = void 0;
            if (this.i.dragStartConditionOverride) try {
              c = this.i.dragStartConditionOverride(a);
            } catch (a) {
              c = !1;
            } else c = 1 === a.touches.length;
            return c ? void (this.A() === !0 && (this.h.preventDefault(), a.preventDefault())) : void this.L();
          }

          if (a.preventDefault(), n("client", a, this.H), n("page", a, this.I), this.i.dragImageTranslateOverride) try {
            var d = !1;
            if (this.i.dragImageTranslateOverride(a, {
              x: this.H.x,
              y: this.H.y
            }, this.m, function (a, c) {
              b.M && (d = !0, b.H.x += a, b.H.y += c, b.I.x += a, b.I.y += c, r(b.M, b.I, b.N, b.K, b.i.dragImageCenterOnTouch));
            }), d) return;
          } catch (a) {}
          r(this.M, this.I, this.N, this.K, this.i.dragImageCenterOnTouch);
        }
      }, a.prototype.v = function (a) {
        if (l(a, this.q.identifier) !== !1) {
          if (this.i.dragImageTranslateOverride) try {
            this.i.dragImageTranslateOverride(void 0, void 0, void 0, function () {});
          } catch (a) {}
          if (0 === this.l) return void this.L();
          a.preventDefault(), this.l = "touchcancel" === a.type ? 3 : 2;
        }
      }, a.prototype.R = function () {
        var a = this;
        var e = this.B;
        this.C.g = 3, this.J.dropEffect = D[0];
        var f = u("drag", this.j, this.p, this.C, this.J);

        if (f && (this.B = D[0]), f || 2 === this.l || 3 === this.l) {
          var g = this.S(this.l);
          return g ? void s(this.j, this.M, this.N, function () {
            a.T();
          }) : void this.T();
        }

        var h = document.elementFromPoint(this.H.x, this.H.y),
            i = this.o;
        h !== this.m && h !== this.o && (this.m = h, null !== this.o && (this.C.g = 3, this.J.dropEffect = D[0], u("dragexit", this.o, this.p, this.C, this.J, !1)), null === this.m ? this.o = this.m : (this.C.g = 3, this.J.dropEffect = t(this.C.F, this.j), u("dragenter", this.m, this.p, this.C, this.J) ? (this.o = this.m, this.B = v(this.J.effectAllowed, this.J.dropEffect)) : this.m !== document.body && (this.o = document.body))), i !== this.o && k(i) && (this.C.g = 3, this.J.dropEffect = D[0], u("dragleave", i, this.p, this.C, this.J, !1, this.o)), k(this.o) && (this.C.g = 3, this.J.dropEffect = t(this.C.F, this.j), u("dragover", this.o, this.p, this.C, this.J) === !1 ? this.B = D[0] : this.B = v(this.J.effectAllowed, this.J.dropEffect)), e !== this.B && this.M.classList.remove(F + e);
        var j = F + this.B;
        this.M.classList.contains(j) === !1 && this.M.classList.add(j);
      }, a.prototype.S = function (a) {
        var d = this.B === D[0] || null === this.o || 3 === a;
        return d ? k(this.o) && (this.C.g = 3, this.J.dropEffect = D[0], u("dragleave", this.o, this.p, this.C, this.J, !1)) : k(this.o) && (this.C.g = 1, this.J.dropEffect = this.B, u("drop", this.o, this.p, this.C, this.J) === !0 ? this.B = this.J.dropEffect : this.B = D[0]), d;
      }, a.prototype.T = function () {
        this.C.g = 3, this.J.dropEffect = this.B, u("dragend", this.j, this.p, this.C, this.J, !1), this.l = 2, this.L();
      }, a;
    }(),
        K = function () {
      function a(a, b) {
        this.U = a, this.V = b, this.W = D[0];
      }

      return Object.defineProperty(a.prototype, "types", {
        get: function () {
          if (0 !== this.U.g) return Object.freeze(this.U.G);
        },
        enumerable: !0,
        configurable: !0
      }), a.prototype.setData = function (a, b) {
        if (2 === this.U.g) {
          if (a.indexOf(" ") > -1) throw new Error("illegal arg: type contains space");
          this.U.D[a] = b, this.U.G.indexOf(a) === -1 && this.U.G.push(a);
        }
      }, a.prototype.getData = function (a) {
        if (1 === this.U.g || 2 === this.U.g) return this.U.D[a] || "";
      }, a.prototype.clearData = function (a) {
        if (2 === this.U.g) {
          if (a && this.U.D[a]) {
            delete this.U.D[a];
            var b = this.U.G.indexOf(a);
            return void (b > -1 && this.U.G.splice(b, 1));
          }

          this.U.D = {}, this.U.G = [];
        }
      }, a.prototype.setDragImage = function (a, b, c) {
        2 === this.U.g && this.V(a, b, c);
      }, Object.defineProperty(a.prototype, "effectAllowed", {
        get: function () {
          return this.U.F;
        },
        set: function (a) {
          2 === this.U.g && C.indexOf(a) > -1 && (this.U.F = a);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(a.prototype, "dropEffect", {
        get: function () {
          return this.W;
        },
        set: function (a) {
          0 !== this.U.g && C.indexOf(a) > -1 && (this.W = a);
        },
        enumerable: !0,
        configurable: !0
      }), a;
    }();

    a.polyfill = d, Object.defineProperty(a, "__esModule", {
      value: !0
    });
  });
})(index_min, index_min.exports);

const getMouseOffset = event => {
  const targetRect = event.target.getBoundingClientRect();
  const offset = {
    x: event.pageX - targetRect.left,
    y: event.pageY - targetRect.top
  };
  return offset;
};

const getElementVerticalCenter = element => {
  const rect = element.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

class KemetSortable extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: flex;
          gap: 1rem;
          flex-direction: column;
        }
      `];
  }

  firstUpdated() {
    index_min.exports.polyfill();
    this.addEventListener('dragstart', event => this.handleDragStart(event), false);
    this.addEventListener('dragenter', event => {
      event.preventDefault();
    });
  }

  render() {
    return $`<slot></slot>`;
  }

  handleDragStart(event) {
    this.sortableItem = event.target;
    this.addEventListener('dragover', dragOverEvent => this.handleDragOver(dragOverEvent), false);
    this.addEventListener('dragend', dragEndEvent => this.handleDragEnd(dragEndEvent), false);
    setTimeout(() => {
      this.sortableItem.ghost = true;
    }, 0);
  }

  handleDragOver(event) {
    event.preventDefault();
    const {
      target
    } = event;

    if (target && target.tagName === 'KEMET-SORTABLE-ITEM') {
      const offset = getMouseOffset(event);
      const middleY = getElementVerticalCenter(event.target);

      if (offset.y > middleY) {
        this.insertBefore(this.sortableItem, target.nextSibling);
      } else {
        this.insertBefore(this.sortableItem, target);
      }
    }
  }

  handleDragEnd(event) {
    event.preventDefault();
    this.sortableItem.ghost = false;
    /**
     * Fires when an item has been moved to a new spot
     */

    this.dispatchEvent(new CustomEvent('kemet-sortable-drag-end', {
      bubbles: true,
      composed: true,
      detail: {
        event,
        current: this.sortableItem,
        all: this.querySelectorAll('kemet-sortable-item')
      }
    }));
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-sortable') || customElements.define('kemet-sortable', KemetSortable);

class KemetSVG extends s$1 {
  static get styles() {
    return r$3`
      :host {
        display: inline-block;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Defines which set of svgs is referenced.
       */
      set: {
        type: String
      },

      /**
       * The name (id) of the svg to be displayed.
       */
      svg: {
        type: String
      },

      /**
       * Sets the width and height of a the svg to the given value in pixels.
       */
      size: {
        type: Number
      },

      /**
       * The value for the preserveAspectRatio attribute of the svg.
       */
      ratio: {
        type: String
      },

      /**
       * The value for the viewBox attribute of the svg.
       */
      viewBox: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.set = 'svgs';
    this.ratio = 'none';
    this.viewBox = '0 0 128 128';
  }

  updated() {
    this.setSize();
    this.getIcon();
  }

  render() {
    return $`
      <svg part="svg" viewBox="${this.viewBox}" preserveAspectRatio="${this.ratio}"></svg>
    `;
  }

  setSize() {
    if (this.size) {
      this.style.width = `${this.size}px`;
      this.style.height = `${this.size}px`;
    }
  }

  getIcon() {
    let svgElement;
    const svgs = document.kemetSVGs[this.set];
    svgs.forEach((svg, index) => {
      const id = svg.getAttribute('id');

      if (id && id === this.svg) {
        svgElement = svgs[index];
      }
    });

    if (svgElement) {
      this.fillSVG(svgElement);
    } else {
      // eslint-disable-next-line no-console
      console.error(`Could not find svg "${this.svg}" in set "${this.set}".`);
    }
  }

  fillSVG(element) {
    const content = element.cloneNode(true);
    const svg = this.shadowRoot.querySelector('svg');
    const g = svg.querySelector('g');
    if (g) g.remove();
    svg.appendChild(content);
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-svg') || customElements.define('kemet-svg', KemetSVG);

class KemetSVGs extends s$1 {
  static get styles() {
    return r$3`
      :host {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Defines the name for the set of svgs.
       */
      set: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.set = 'svgs';
  }

  firstUpdated() {
    this.slotElement = this.shadowRoot.querySelector('slot');
    document.kemetSVGs = document.kemetSVGs || {};
    this.populateIcons();
    this.slotElement.addEventListener('slotchange', this.populateIcons());
  }

  render() {
    return $`<slot></slot>`;
  }

  populateIcons() {
    const svg = this.slotElement.assignedElements()[0];
    const svgContents = svg ? svg.querySelectorAll('defs > g') : null;

    if (svgContents) {
      document.kemetSVGs[this.set] = svgContents;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-svgs') || customElements.define('kemet-svgs', KemetSVGs);

class KemetTabPanel extends s$1 {
  static get styles() {
    return r$3`
      :host {
        width: 100%;
        flex: 0 0 auto;
      }

      ::slotted(img) {
        max-width: 100%;
      }

      :host(.fade) {
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--kemet-tab-panel-fade-speed, 0.5s) ease;
      }

      :host(.fade[selected]) {
        opacity: 1;
        pointer-events: auto;
      }

      :host(.fade.push) {
        margin-left: -100%;
      }

      :host(.vertical) {
        display: none;
      }

      :host(.vertical[selected]) {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Is true when a panel is selected
       */
      selected: {
        type: Boolean,
        reflect: true
      },

      /**
       * Identifies the panel to be linked by a tab
       */
      panel: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  updated() {
    this.a11y();
  }

  render() {
    return $`
      <slot></slot>
    `;
  }

  a11y() {
    this.setAttribute('role', 'tabpanel');

    if (this.selected) {
      this.setAttribute('tabindex', '0');
    } else {
      this.setAttribute('tabindex', '-1');
    }
  }

}

customElements.define('kemet-tab-panel', KemetTabPanel);

class KemetTab extends s$1 {
  static get styles() {
    return r$3`
      :host {
        cursor: pointer;
        display: inline-flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        padding: var(--kemet-tab-padding, 1rem);
      }

      :host([selected]) {
        cursor: auto;
        color: var(--kemet-tab-color, var(--kemet-color-primary));
      }

      kemet-icon {
        cursor: pointer;
        margin-left: 0.5rem;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Is true when the tab is selected
       */
      selected: {
        type: Boolean,
        reflect: true
      },

      /**
       * Links to a panel name
       */
      link: {
        type: String
      },

      /**
       * Determines if the tab can be closed
       */
      closable: {
        type: Boolean
      }
    };
  }

  constructor() {
    super(); // property defaults

    this.selected = false;
  }

  firstUpdated() {
    this.addEventListener('click', this.select.bind(this));
  }

  updated() {
    this.a11y();
  }

  render() {
    return $`
      <slot></slot>
      ${this.makeCloseable()}
    `;
  }

  select() {
    /**
     * Fires when a tab is selected
     */
    this.dispatchEvent(new CustomEvent('kemet-tab-selected', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

  a11y() {
    this.setAttribute('role', 'tab');

    if (this.selected) {
      this.setAttribute('aria-selected', 'true');
      this.setAttribute('tabindex', '0');
    } else {
      this.setAttribute('aria-selected', 'false');
      this.setAttribute('tabindex', '-1');
    }
  }

  makeCloseable() {
    if (this.closable) {
      return $`<kemet-icon icon="x-lg" @click=${() => this.handleClosable()}></kemet-icon>`;
    }

    return null;
  }

  handleClosable() {
    /**
     * Fires when the tab should close
     */
    this.dispatchEvent(new CustomEvent('kemet-tab-close', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }

}

customElements.define('kemet-tab', KemetTab);
const stylesKemetTabs = r$3`
  :host {
    --kemet-tabs-ink-size: 6px;
    --kemet-tabs-ink-radius: 6px;
    --kemet-tabs-divider-size: 1px;
    --kemet-tabs-spacer: 1rem;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  :host([placement='bottom']) {
    flex-direction: column-reverse;
  }

  :host([placement='left']) {
    flex-direction: row;
  }

  :host([placement='right']) {
    flex-direction: row-reverse;
  }

  :host([placement='left']),
  :host([placement='right']) {
    overflow: unset;
  }

  /* panels */

  [part='panels'] > div {
    display: flex;
  }

  :host([panel-effect='slide']) [part='panels'] {
    transition: transform var(--kemet-tabs-transition-speed, 0.5s) linear;
  }

  :host([panel-effect='fade']) [part='panels'] {
    transform: none !important;
  }

  :host([panel-effect='fade']) [part='panels'] > div {
    flex-flow: row nowrap;
  }

  :host([placement='left']) [part='panels'],
  :host([placement='right']) [part='panels'] {
    transform: none !important;
    position: relative;
    width: 100%;
  }

  :host([placement='top']) [part='panels'] > div {
    margin-top: var(--kemet-tabs-spacer);
  }

  :host([placement='right']) [part='panels'] > div {
    margin-right: var(--kemet-tabs-spacer);
  }

  :host([placement='bottom']) [part='panels'] > div {
    margin-bottom: var(--kemet-tabs-spacer);
  }

  :host([placement='left']) [part='panels'] > div {
    margin-left: var(--kemet-tabs-spacer);
  }

  /* tablist */

  [part='tablist'] {
    display: flex;
  }

  :host([placement='left']) [part='tablist'],
  :host([placement='right']) [part='tablist'] {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  :host([tabs-align='center']) [part='tablist'] {
    justify-content: center;
  }

  :host([tabs-align='between']) [part='tablist'] {
    justify-content: space-between;
  }

  :host([tabs-align='evenly']) [part='tablist'] {
    justify-content: space-evenly;
  }

  :host([tabs-align='around']) [part='tablist'] {
    justify-content: space-around
  }

  :host([tabs-align='start']) [part='tablist'] {
    justify-content: flex-start;
  }

  :host([tabs-align='end']) [part='tablist'] {
    justify-content: flex-end;
  }

  :host([overflow]) [part='tablist'] {
    justify-content: start;
  }

  /* divider */

  [part='divider'] {
    height: var(--kemet-tabs-divider-size);
    background-color: var(--kemet-tabs-divider-color, var(--kemet-color-gray4));
  }

  :host([placement='left']) [part='divider'],
  :host([placement='right']) [part='divider'] {
    width: var(--kemet-tabs-divider-size);
    height: auto;
  }

  /* ink */

  [part='ink'] {
    height: var(--kemet-tabs-ink-size);
    border-top-left-radius: var(--kemet-tabs-ink-radius);
    border-top-right-radius: var(--kemet-tabs-ink-radius);
    transition: all 300ms ease;
    background-color: var(--kemet-tabs-ink-color, var(--kemet-color-primary));
  }

  :host([placement='right']) [part='ink'] {
    width: var(--kemet-tabs-ink-size);
    border-top-right-radius: var(--kemet-tabs-ink-radius);
    border-bottom-right-radius: var(--kemet-tabs-ink-radius);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  :host([placement='left']) [part='ink'] {
    width: var(--kemet-tabs-ink-size);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: var(--kemet-tabs-ink-radius);
    border-bottom-left-radius: var(--kemet-tabs-ink-radius);
  }

  :host([placement='bottom']) [part='ink'] {
    border-top-right-radius: 0px;
    border-bottom-right-radius: var(--kemet-tabs-ink-radius);
    border-top-left-radius: 0px;
    border-bottom-left-radius: var(--kemet-tabs-ink-radius);
  }

  /* links */

  :host([overflow]) [part='links'] {
    overflow-x: auto;
    margin: 0 2rem;
    scroll-behavior: smooth;
  }

  :host([overflow]) [part='links']::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  :host([placement='bottom']) [part='links'] {
    display: flex;
    flex-direction: column-reverse;
  }

  /* icon */

  [icon*='chevron'] {
    cursor: pointer;
    position: absolute;
    top: 1rem;
  }

  [icon='chevron-left'] {
    left: 0;
  }

  [icon='chevron-right'] {
    right: 0;
  }

  :host([placement='bottom']) [icon*='chevron'] {
    top: auto;
    bottom: 1rem;
  }
`;
/* eslint-disable no-lonely-if */

class KemetTabs extends s$1 {
  static get styles() {
    return [stylesKemetTabs];
  }

  static get properties() {
    return {
      /**
       * The selected tab by name
       */
      selected: {
        type: String,
        reflect: true
      },

      /**
       * The selected tab by index
       */
      selectedIndex: {
        type: Number
      },

      /**
       * Positions the current panel
       */
      panelPosition: {
        type: Number
      },

      /**
       * The transition effect for panels
       */
      panelEffect: {
        type: String,
        reflect: true,
        attribute: 'panel-effect'
      },

      /**
       * Determines whether or not to enable swipe behavior
       */
      swipe: {
        type: Boolean
      },

      /**
       * Places the tabs to the top, right, bottom, or left
       */
      placement: {
        type: String,
        reflect: true
      },

      /**
       * Determines whether or not to show a divider line
       */
      divider: {
        type: Boolean
      },

      /**
       * Spacing alignment of the tabs
       */
      tabsAlign: {
        type: String,
        reflect: true,
        attribute: 'tabs-align'
      },

      /**
       * An object that contains information about the ink
       */
      ink: {
        type: Object
      },

      /**
       * Determines whether or not to hide the ink
       */
      hideInk: {
        type: Boolean,
        attribute: 'hide-ink'
      },

      /**
       * Is true when the space of the tabs is larger than it's container
       */
      overflow: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.selectedIndex = 0;
    this.panelPosition = 0;
    this.panelEffect = 'none';
    this.placement = 'top';
    this.tabsAlign = 'center';
    this.hideInk = false;
    this.addEventListener('kemet-tab-selected', this.tabSelectedChange.bind(this));
    this.addEventListener('kemet-tab-close', this.handleTabClose.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  firstUpdated() {
    // standard properties
    this.tabs = [];
    this.panels = [];
    this.xDown = null;
    this.yDown = null;
    this.links = this.shadowRoot.getElementById('links');
  }

  render() {
    return $`
      ${this.makeLeftArrow()}
      ${this.makeRightArrow()}
      <div id="links" part="links">
        <div part='tablist' role="tablist">
          <slot name="tab" @slotchange=${() => this.handleLinksSlotChange()}></slot>
        </div>
        ${this.makeInk('links')}
      </div>
      ${this.makeInk('host')}
      ${this.makeDivider()}
      <section id="panels" part="panels" style="transform:translateX(${this.panelPosition}px);">
        <div>
          <slot name="panel" @slotchange=${() => this.handlePanelsSlotChange()}></slot>
        </div>
      </section>
    `;
  }

  updated() {
    this.determineFade();
  }

  handleLinksSlotChange() {
    const tabs = this.querySelectorAll('kemet-tab');
    let index = 0;
    tabs.forEach(tab => {
      // give each tab an index to select by if link/panel is not used
      tab.index = index;
      index += 1; // store the list of tabs

      this.tabs = this.tabs.concat(tab); // add keyboard support

      tab.addEventListener('keydown', event => this.handleTabKeydown(event));
    }); // default to the first tab/panel selected

    if (this.tabs.length > 0) this.tabs[0].selected = true;
    setTimeout(() => {
      this.selectTab();
    }, 1);
    this.determineOverflow();
  }

  handlePanelsSlotChange() {
    const panels = this.querySelectorAll('kemet-tab-panel');
    const panelElement = this.shadowRoot.getElementById('panels');
    let index = 0;
    panels.forEach(panel => {
      // give each panel an index to select by if link/panel is not used
      panel.index = index;
      index += 1; // store the list of panels

      this.panels = this.panels.concat(panel);
    }); // default to the first tab/panel selected

    if (this.panels.length > 0) this.panels[0].selected = true; // add swipe support

    if (this.swipe) {
      panelElement.addEventListener('touchstart', event => this.handleTouchStart(event), false);
      panelElement.addEventListener('touchmove', event => this.handleTouchMove(event), false);
    }

    this.selectPanel();
  }

  handleLeftArrow() {
    const selectedElement = this.tabs.find(tab => tab.selected) || this.tabs[0];
    const previousElement = selectedElement.previousElementSibling;
    const selectedIndex = this.tabs.findIndex(tab => tab.selected);

    if (this.selected) {
      this.selected = previousElement ? previousElement.link : selectedElement.link;
    } else {
      this.selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : 0;
    }

    if (previousElement) {
      this.links.scrollLeft = previousElement.offsetLeft - 20;
    }

    this.selectTab();
    this.selectPanel();
  }

  handleRightArrow() {
    const selectedElement = this.tabs.find(tab => tab.selected) || this.tabs[this.tabs.length - 1];
    const nextElement = selectedElement.nextElementSibling;
    const selectedIndex = this.tabs.findIndex(tab => tab.selected);

    if (this.selected) {
      this.selected = nextElement ? nextElement.link : selectedElement.link;
    } else {
      this.selectedIndex = selectedIndex < this.tabs.length - 1 ? selectedIndex + 1 : this.tabs.length - 1;
    }

    if (nextElement) {
      this.links.scrollLeft = nextElement.offsetLeft - 20;
    }

    this.selectTab();
    this.selectPanel();
  }

  handleTabClose(event) {
    const tab = event.detail;
    const panel = this.panels[tab.index];
    this.selected = this.tabs[0].link;
    this.selectedIndex = 0;
    panel.remove();
    tab.remove();
  }

  makeInk(location) {
    if (this.hideInk) {
      return null;
    }

    if ((this.placement === 'top' || this.placement === 'bottom') && this.ink && location === 'links') {
      return $`<div part="ink" style="width:${this.ink.width}; transform:translateX(${this.ink.positionX})"></div>`;
    }

    if ((this.placement === 'left' || this.placement === 'right') && this.ink && location === 'host') {
      return $`<div part="ink" style="height:${this.ink.height}; transform:translateY(${this.ink.positionY})"></div>`;
    }

    return null;
  }

  makeDivider() {
    if (this.divider) {
      return $`<div part="divider"></div>`;
    }

    return null;
  }

  makeLeftArrow() {
    if (this.overflow) {
      return $`<kemet-icon icon='chevron-left' size="20" @click=${() => this.handleLeftArrow()}></kemet-icon>`;
    }

    return null;
  }

  makeRightArrow() {
    if (this.overflow) {
      return $`<kemet-icon icon='chevron-right' size="20" @click=${() => this.handleRightArrow()}></kemet-icon>`;
    }

    return null;
  }

  selectTab() {
    const marginLeft = this.links ? parseInt(window.getComputedStyle(this.links).marginLeft.replace('px', ''), 10) : 0;
    const overflowOffset = this.overflow ? marginLeft : 0; // if the user uses the selected attribute select by it

    if (this.selected) {
      this.tabs.forEach(tab => {
        const tabName = tab.getAttribute('link');

        if (tabName === this.selected) {
          tab.selected = true;
          this.selected = tabName;
          this.ink = {
            width: `${tab.offsetWidth}px`,
            height: `${tab.offsetHeight}px`,
            positionX: `${tab.offsetLeft - overflowOffset}px`,
            positionY: `${tab.offsetTop}px`
          };
          this.links.scrollLeft = tab.offsetLeft - overflowOffset;
        } else {
          tab.selected = false;
        }
      }); // otherwise select by index
    } else {
      this.tabs.forEach(tab => {
        if (this.selectedIndex === tab.index) {
          tab.selected = true;
          this.ink = {
            width: `${tab.offsetWidth}px`,
            height: `${tab.offsetHeight}px`,
            positionX: `${tab.offsetLeft - overflowOffset}px`,
            positionY: `${tab.offsetTop}px`
          };
          this.links.scrollLeft = tab.offsetLeft - overflowOffset;
        } else {
          tab.selected = false;
        }
      });
    }
  }

  selectPanel() {
    // if the user uses the selected attribute select by it
    if (this.selected) {
      this.panels.forEach(panel => {
        const panelName = panel.getAttribute('panel');

        if (this.panelEffect === 'fade' && panel.index !== 0) {
          panel.classList.add('push');
        }

        if (this.placement === 'left' || this.placement === 'right') {
          panel.classList.add('vertical');
        }

        if (panelName === this.selected) {
          panel.selected = true;
          this.animatePanel(panelName, null);
        } else {
          panel.selected = false;
        }
      }); // otherwise select by index
    } else {
      this.panels.forEach(panel => {
        if (this.panelEffect === 'fade' && panel.index !== 0) {
          panel.classList.add('push');
        }

        if (this.placement === 'left' || this.placement === 'right') {
          panel.classList.add('vertical');
        }

        if (this.selectedIndex === panel.index) {
          panel.selected = true;
          this.animatePanel(null, panel.index);
        } else {
          panel.selected = false;
        }
      });
    }
  }

  dispatchTabChange() {
    const tabChanged = new CustomEvent('kemet-tab-changed', {
      bubbles: true,
      composed: true,
      detail: this.selected
    });
    this.dispatchEvent(tabChanged);
  }

  tabSelectedChange(event) {
    if (this.selected) {
      // if selected has been set, use the string attribute
      this.selected = event.detail.getAttribute('link');
    } else {
      // otherwise use the generated index
      this.selectedIndex = event.detail.index;
    }

    this.selectTab();
    this.selectPanel();
    this.dispatchTabChange();
  }

  determineFade() {
    this.panels.forEach(panel => {
      // add fade class if panel effect is fade
      if (this.panelEffect === 'fade') panel.classList.add('fade');
    });
  }

  determineOverflow() {
    const tabsContainerWidth = this.offsetWidth;
    const tabElements = this.querySelectorAll('kemet-tab');
    let totalTabsWidth = 0;
    tabElements.forEach(tab => {
      totalTabsWidth += tab.offsetWidth;
    });

    if (totalTabsWidth > tabsContainerWidth && (this.placement === 'top' || this.placement === 'bottom')) {
      this.overflow = true;
    } else {
      this.overflow = false;
    }
  }

  handleResize() {
    if (this.tabs && this.panels) {
      const marginLeft = this.links ? parseInt(window.getComputedStyle(this.links).marginLeft.replace('px', ''), 10) : 0;
      const overflowOffset = this.overflow ? marginLeft : 0;
      const selectedElement = this.tabs.find(tab => tab.selected);

      if (selectedElement) {
        this.ink = {
          width: `${selectedElement.offsetWidth}px`,
          height: `${selectedElement.offsetHeight}px`,
          positionX: `${selectedElement.offsetLeft - overflowOffset}px`,
          positionY: `${selectedElement.offsetTop}px`
        };
      }

      this.determineOverflow();

      if (this.selected) {
        this.animatePanel(this.selected, null);
      } else {
        this.animatePanel(null, this.selectedIndex);
      }
    }
  }

  animatePanel(panelName, panelIndex) {
    if (panelName) {
      const selectedPanel = this.querySelector(`[panel="${panelName}"]`);
      if (selectedPanel) this.panelPosition = selectedPanel.offsetLeft * -1;
    } else {
      if (this.panels[panelIndex]) this.panelPosition = this.panels[panelIndex].offsetLeft * -1;
    }
  }

  handleTabKeydown(event) {
    if (this.selected) {
      switch (event.key) {
        case 'Home':
          this.selected = this.tabs[0].getAttribute('link');
          break;

        case 'End':
          this.selected = this.tabs[this.tabs.length - 1].getAttribute('link');
          break;

        case 'ArrowRight':
          const nextLinkElement = this.querySelector('kemet-tab[selected]').nextElementSibling;
          const nextLink = nextLinkElement ? nextLinkElement.getAttribute('link') : false;

          if (nextLink) {
            this.selected = nextLink;
          }

          break;

        case 'ArrowLeft':
          const previousLinkElement = this.querySelector('kemet-tab[selected]').previousElementSibling;
          const previousLink = previousLinkElement ? previousLinkElement.getAttribute('link') : false;

          if (previousLink) {
            this.selected = previousLink;
          }

          break;
      }

      this.tabs.find(tab => tab.link === this.selected).focus();
    } else {
      switch (event.key) {
        case 'Home':
          this.selectedIndex = 0;
          break;

        case 'End':
          this.selectedIndex = this.tabs.length - 1;
          break;

        case 'ArrowRight':
          if (this.selectedIndex < this.tabs.length - 1) {
            this.selectedIndex += 1;
          } else {
            this.selectedIndex = this.tabs.length - 1;
          }

          break;

        case 'ArrowLeft':
          if (this.selectedIndex < 1) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex -= 1;
          }

          break;
      }

      this.tabs[this.selectedIndex].focus();
    }
  }

  handleTouchStart(event) {
    this.xDown = event.touches[0].clientX;
    this.yDown = event.touches[0].clientY;
  }

  handleTouchMove(event) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;
    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;
    const nextElement = this.querySelector('kemet-tab-panel[selected]').nextElementSibling;
    const next = nextElement ? nextElement.getAttribute('panel') : false;
    const previousElement = this.querySelector('kemet-tab-panel[selected]').previousElementSibling;
    const previous = previousElement ? previousElement.getAttribute('panel') : false;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (this.selected) {
          if (next) this.selected = next;
        } else {
          if (this.selectedIndex < this.tabs.length) this.selectedIndex += 1;
        }
      } else {
        if (this.selected) {
          if (previous) this.selected = previous;
        } else {
          if (this.selectedIndex > 0) this.selectedIndex -= 1;
        }
      }

      this.selectTab();
      this.selectPanel();
    }

    this.xDown = null;
    this.yDown = null;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-tabs') || customElements.define('kemet-tabs', KemetTabs);

class KemetTextarea extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          position: relative;
          display: block;
        }

        textarea {
          display: block;
          width: 100%;
          padding: var(--kemet-textarea-padding, 1rem);
          border: var(--kemet-textarea-border, 1px solid var(--kemet-color-primary));
          appearance: none;
          box-sizing: border-box;
        }

        :host([status='error']) textarea {
          border: var(--kemet-textarea-border-color-error, 1px solid var(--kemet-color-error));
        }

        :host([status='success']) textarea {
          border: var(--kemet-textarea-border-color-success, 1px solid var(--kemet-color-success));
        }

        :host([status='warning']) textarea {
          border: var(--kemet-textarea-border-color-warning, 1px solid var(--kemet-color-warning));
        }

        :host([disabled]) textarea {
          opacity: 0.5;
        }

        :host([icon-left]) textarea {
          padding-left: var(--kemet-textarea-icon-left-padding, 3rem);
        }

        :host([icon-right]) textarea {
          padding-right: var(--kemet-textarea-icon-right-padding, 3rem);
        }

        :host([rounded]) textarea {
          border-radius: var(--kemet-textarea-border-radius-rounded, var(--kemet-border-radius));
        }

        :host([filled]) textarea {
          border: var(--kemet-textarea-border-filled, none);
          color: var(--kemet-textarea-color-filled, var(--kemet-color-white));
          background-color: var(--kemet-textarea-background-color-filled, var(--kemet-color-primary));
        }

        :host([filled]) textarea::placeholder {
          color: var(--kemet-textarea-color-filled, var(--kemet-color-white));
        }

        :host([status='error'][filled]) textarea {
          background-color: var(--kemet-textarea-background-color-error, var(--kemet-color-error));
        }

        :host([status='success'][filled]) textarea {
          background-color: var(--kemet-textarea-background-color-success, var(--kemet-color-success));
        }

        :host([status='warning'][filled]) textarea {
          background-color: var(--kemet-textarea-background-color-warning, var(--kemet-color-warning));
        }
      `];
  }

  static get properties() {
    return {
      /**
       * Used for the id of the input
       */
      slug: {
        type: String
      },

      /**
       * The name of the input
       */
      name: {
        type: String
      },

      /**
       * The placeholder attribute
       */
      placeholder: {
        type: String
      },

      /**
       * The minlength attribute
       */
      minlength: {
        type: String
      },

      /**
       * The maxlength attribute
       */
      maxlength: {
        type: String
      },

      /**
       * The input mode attribute
       */
      inputmode: {
        type: String
      },

      /**
       * The autofocus attribute
       */
      autofocus: {
        type: Boolean
      },

      /**
       * The disable attribute
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * The readonly attribute
       */
      readonly: {
        type: Boolean
      },

      /**
       * The required attribute
       */
      required: {
        type: Boolean,
        reflect: true
      },

      /**
       * The input's value
       */
      value: {
        type: String
      },

      /**
       * States whether or not the input is invalid
       */
      invalid: {
        type: Boolean,
        reflect: true
      },

      /**
       * The status of the input
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * The rows of the textarea
       */
      rows: {
        type: Number
      },

      /**
       * Activates validation on blur
       */
      validateOnBlur: {
        type: Boolean,
        attribute: 'validate-on-blur'
      },

      /**
       * Displays a filled textarea
       */
      filled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Displays a rounded corners
       */
      rounded: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // managed properties

    this.slug = 'textarea';
    this.name = 'textarea';
    this.value = '';
    this.status = 'standard';
    this.rows = 4;
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new FormSubmitController(this);
  }

  firstUpdated() {
    // elements
    this.form = this.closest('form');
    this.control = this.closest('kemet-field');
    this.textarea = this.shadowRoot.querySelector('textarea');
  }

  render() {
    return $`
      <textarea
        part="textarea"
        id=${this.slug}
        name=${this.name}
        .value=${l(this.value)}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        placeholder=${l$1(this.placeholder)}
        rows=${l$1(this.rows)}
        minlength=${l$1(this.minlength)}
        maxlength=${l$1(this.maxlength)}
        autocorrect=${l$1(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${l$1(this.spellcheck)}
        inputmode=${l$1(this.inputmode)}
        @change=${this.handleChange}
        @input=${this.handleInput}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @invalid=${this.handleInvalid}
      ></textarea>
    `;
  }
  /**
   * Handles when the textarea receives focus
   * @private
   */


  handleFocus() {
    this.hasFocus = true;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }
  /**
   * Handles when the textarea loses focus
   * @private
   */


  handleBlur() {
    this.hasFocus = false;
    /**
     * Fires when the input receives and loses focus
     */

    this.dispatchEvent(new CustomEvent('kemet-input-focused', {
      bubbles: true,
      composed: true,
      detail: false
    }));

    if (this.validateOnBlur && this.form && !this.form.noValidate) {
      this.textarea.checkValidity();
      this.validity = this.textarea.validity;
    }
  }
  /**
   * Handles when the textarea changes value
   * @private
   */


  handleChange() {
    this.value = this.textarea.value;

    if (this.textarea.checkValidity() && this.checkLimitValidity()) {
      this.invalid = false;
      this.status = 'standard';
      this.validity = this.textarea.validity;
      /**
       * Fires when there's a change in status
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'standard',
          validity: this.textarea.validity,
          element: this
        }
      }));
    }
  }
  /**
   * Handles when the textarea receives input
   * @private
   */


  handleInput() {
    this.value = this.textarea.value;
    /**
     * Fires when the input receives input
     */

    this.dispatchEvent(new CustomEvent('kemet-input-input', {
      bubbles: true,
      composed: true,
      detail: this.value
    }));
  }
  /**
   * Handles when the textarea has an error
   * @private
   */


  handleInvalid() {
    this.validity = this.textarea.validity;

    if (this.validateOnBlur) {
      this.invalid = true;
      this.status = 'error';
      /**
       * Fires when there's a change in status
       */

      this.dispatchEvent(new CustomEvent('kemet-input-status', {
        bubbles: true,
        composed: true,
        detail: {
          status: 'error',
          validity: this.textarea.validity,
          element: this
        }
      }));
    }
  }
  /**
   * Checks the validity of the character limit for the count component
   * @private
   * @returns {boolean}
   */


  checkLimitValidity() {
    if (this.control) {
      const count = this.control.querySelector('kemet-count');

      if (count) {
        return this.value.length < count.limit;
      }
    }

    return true;
  }
  /**
   * Checks the validity of the standard input
   * @public
   * @returns {boolean}
   */


  checkValidity() {
    return this.textarea.checkValidity();
  }
  /**
   * Focuses the standard input
   * @public
   */


  focus() {
    return this.textarea.focus();
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-textarea') || customElements.define('kemet-textarea', KemetTextarea);

class KemetToggle extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          --kemet-toggle-width: 3.5rem;
          --kemet-toggle-height: 2rem;
          --kemet-toggle-handle-diameter: 1.6rem;
          --kemet-toggle-handle-margin: calc((var(--kemet-toggle-height) - var(--kemet-toggle-handle-diameter)) / 2);

          display: flex;
          align-items: center;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        label {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: inherit;
          color: inherit;
        }

        :host([disabled]) label {
          cursor: not-allowed;
        }

        input {
          display: none;
        }

        [part='control'] {
          position: relative;
          display: inline-flex;
          margin: 0;
          width: var(--kemet-toggle-width);
          height: var(--kemet-toggle-height);
        }

        [part='control'] > span {
          transition: 300ms ease-in-out;
        }

        [part='track'] {
          width: var(--kemet-toggle-width);
          height: var(--kemet-toggle-height);
          border: var(--kemet-toggle-track-border, none);
          border-radius: var(--kemet-toggle-height);
          background-color: var(--kemet-toggle-track-color, var(--kemet-color-white));
          box-shadow: var(--kemet-toggle-track-shadow, inset 0 0.4rem 0.7rem 0 rgba(47, 47, 47, 0.35), inset 0 -0.2rem 0.4rem 0 var(--kemet-color-gray1));
        }

        :host([squared]) [part='track'] {
          border-radius: 0;
        }

        [part='handle'] {
          position: absolute;
          top: var(--kemet-toggle-handle-margin);
          left: var(--kemet-toggle-handle-margin);
          width: var(--kemet-toggle-handle-diameter);
          height: var(--kemet-toggle-handle-diameter);
          transform: translateX(0);
          border: var(--kemet-toggle-handle-border, none);
          border-radius: var(--kemet-toggle-handle-diameter);
          background-color: var(--kemet-toggle-handle-color, var(--kemet-color-primary));
          box-shadow: var(--kemet-toggle-handle-shadow, 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2));
        }

        :host([squared]) [part='handle'] {
          border-radius: 0;
        }

        :host([checked]) [part='handle'] {
          transform: translateX(calc(var(--kemet-toggle-width) - var(--kemet-toggle-handle-diameter) - var(--kemet-toggle-handle-margin) * 2));
        }

        .option {
          font-size: 90%;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The name on the input field
       */
      name: {
        type: String
      },

      /**
       * Determines whether or not the toggle is checked
       */
      checked: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines whether or not the toggle is disabled
       */
      disabled: {
        type: Boolean
      },

      /**
       * A description of the toggle's purpose
       */
      label: {
        type: String
      },

      /**
       * Determines whether or not to show text options
       */
      show: {
        type: Boolean
      },

      /**
       * Displays the toggle as squared instead of rounded
       */
      squared: {
        type: Boolean
      },

      /**
       * The checked option text
       */
      optionChecked: {
        type: String,
        attribute: 'option-checked'
      },

      /**
       * The unchecked option text
       */
      optionUnchecked: {
        type: String,
        attribute: 'option-unchecked'
      }
    };
  }

  constructor() {
    super();
    this.name = 'toggle-switch';
    this.disabled = false;
    this.checked = false;
    this.show = false;
    this.squared = false;
    this.label = '';
    this.optionChecked = 'on';
    this.optionUnchecked = 'off';
    this.value = this.checked ? this.optionChecked : this.optionUnchecked;
    /**
     * Used only for form reactive controller
     */

    this.formSubmitController = new FormSubmitController(this);
  }

  render() {
    return $`
      <label part="label">
        ${this.makeUncheckedOption()}
        <span part="control">
          <span part="track"></span>
          <span part="handle"></span>
        </span>
        <input
          role="switch"
          type="checkbox"
          name="${this.name}"
          aria-label="${this.label}"
          aria-checked=${this.checked ? 'true' : 'false'}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          @change=${this.handleChange}
        />
        ${this.makeCheckedOption()}
        <span part="text">${this.label}</span>
      </label>
    `;
  }

  handleChange() {
    this.checked = !this.checked;
    this.value = this.checked ? this.optionChecked : this.optionUnchecked;
    /**
     * Fires when the toggle changes state
     */

    this.dispatchEvent(new CustomEvent('kemet-toggle-change', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }

  makeUncheckedOption() {
    if (this.show) {
      return $`<span class="option" part="unchecked">${this.optionUnchecked}</span>`;
    }

    return null;
  }

  makeCheckedOption() {
    if (this.show) {
      return $`<span class="option" part="checked">${this.optionChecked}</span>`;
    }

    return null;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-toggle') || customElements.define('kemet-toggle', KemetToggle);

class KemetTrackerStep extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          --kemet-tracker-step-dot-size: 50px;
          --kemet-tracker-step-dot-size-mobile: 25px;
          --kemet-tracker-step-dot-gap: 4px;
          --kemet-tracker-step-standard-line-weight: 1px;
          --kemet-tracker-step-completed-line-weight: 3px;
          --kemet-tracker-step-dot-transition: all 300ms ease-in-out;

          position: relative;
          width: 100%;
          text-align: center;
        }

        .dot {
          font-size: var(--kemet-tracker-step-dot-font-size, 90%);
          color: var(--kemet-tracker-step-dot-color, var(--kemet-color-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          width: var(--kemet-tracker-step-dot-size);
          height: var(--kemet-tracker-step-dot-size);
          border-radius: 100%;
          transition: var(--kemet-tracker-step-dot-transition);
          background-color: var(--kemet-tracker-step-dot-background-color, var(--kemet-color-white));
        }

        .dot::after {
          content: "";
          width: unset;
          height: unset;
          position: absolute;
          top: var(--kemet-tracker-step-dot-gap);
          left: var(--kemet-tracker-step-dot-gap);
          right: var(--kemet-tracker-step-dot-gap);
          bottom: var(--kemet-tracker-step-dot-gap);
          z-index: -1;
          border-radius: 100%;
          transition: var(--kemet-tracker-step-dot-transition);
          border: var(--kemet-tracker-step-dot-border, 1px solid var(--kemet-color-primary));
          background-color: var(--kemet-tracker-step-dot-fill-color, transparent);
        }

        :host([completed]) .dot {
          color: var(--kemet-tracker-step-completed-color, var(--kemet-color-white));
        }

        :host([completed]) .dot::after {
          border: 0;
          background-color: var(--kemet-tracker-step-completed-fill-color, var(--kemet-color-success));
        }

        :host([current]) .dot.animate {
          color: var(--kemet-tracker-step-current-color, var(--kemet-color-white));
        }

        :host([current]) .dot.animate::after {
          border: 0;
          background-color: var(--kemet-tracker-step-current-fill-color, var(--kemet-color-primary));
        }

        :host([mobile]) .dot {
          width: var(--kemet-tracker-step-dot-size-mobile);
          height: var(--kemet-tracker-step-dot-size-mobile);
        }

        .line {
          display: block;
          position: absolute;
          left: 50%;
          right: 0;
          bottom: 0;
          width: 100%;

          /* standard */
          top: calc((var(--kemet-tracker-step-dot-size) - var(--kemet-tracker-step-standard-line-weight)) / 2);
          height: var(--kemet-tracker-step-standard-line-weight);
          background-color: var(--kemet-tracker-step-line-color, var(--kemet-color-primary));
        }

        .line.completed {
          width: 100%;
          transform: scaleX(0);
          transform-origin: left center;
          top: calc((var(--kemet-tracker-step-dot-size) - var(--kemet-tracker-step-completed-line-weight)) / 2);
          height: var(--kemet-tracker-step-completed-line-weight);
          background-color: var(--kemet-tracker-step-completed-line-color, var(--kemet-color-primary));
          animation-name: grow;
          animation-delay: 1s;
          animation-duration: 600ms;
          animation-fill-mode: forwards;
        }

        :host([mobile]) .line {
          top: calc((var(--kemet-tracker-step-dot-size-mobile) - var(--kemet-tracker-step-standard-line-weight)) / 2);
        }

        :host([mobile]) .line.completed {
          top: calc((var(--kemet-tracker-step-dot-size-mobile) - var(--kemet-tracker-step-completed-line-weight)) / 2);
        }

        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The current step number
       */
      step: {
        type: Number
      },

      /**
       * Determines whether or not a step renders as complete
       */
      completed: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines whether or not a step renders as the current step
       */
      current: {
        type: Boolean,
        reflect: true
      },

      /**
       * Is automatically added to the last step
       */
      last: {
        type: Boolean,
        reflect: true
      },

      /**
       * Determines if a step should render as mobile
       */
      mobile: {
        type: Boolean,
        reflect: true
      },

      /**
       * Hides the label inside of a dot
       */
      hideDotContent: {
        type: Boolean,
        reflect: true,
        attribute: 'hide-dot-content'
      },

      /**
       * The icon size for the completed check mark
       */
      completedSize: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.completedSize = 16;
  }

  firstUpdated() {
    this.tracker = this.closest('kemet-tracker');
  }

  render() {
    return $`
      ${this.makeLine()}
      ${this.makeCompletedLine()}
      <div class="dot" part="dot">${this.makeDotContent()}</div>
      ${this.makeSlotContent()}
    `;
  }

  makeLine() {
    if (!this.last) {
      return $`<div class="line" part="line"></div>`;
    }

    return null;
  }

  makeCompletedLine() {
    if (this.completed && !this.last) {
      return $`<div class="line completed" part="completed-line" @animationend=${() => this.handleCompletedLineEnd()}></div>`;
    }

    return null;
  }

  makeDotContent() {
    if (this.completed && !this.mobile && !this.hideDotContent) {
      return $`
        <kemet-icon icon="check2" size=${this.completedSize}></kemet-icon>
      `;
    }

    if (!this.mobile && !this.hideDotContent) {
      return $`
        <span>${this.step}/${this.tracker?.total}</span>
      `;
    }

    return null;
  }

  makeSlotContent() {
    if (!this.mobile) {
      return $`<slot></slot>`;
    }

    return null;
  }

  handleCompletedLineEnd() {
    const currentDot = this.tracker.querySelector('[current]').shadowRoot.querySelector('.dot');

    if (currentDot) {
      currentDot.classList.add('animate');
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-tracker-step') || customElements.define('kemet-tracker-step', KemetTrackerStep);

class KemetTracker extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * The total number of steps
       */
      total: {
        type: Number
      },

      /**
       * The point at which the tracker goes from mobile to standard
       */
      breakpoint: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.breakpoint = '767px';
  }

  firstUpdated() {
    // elements
    this.steps = this.querySelectorAll('kemet-tracker-step'); // methods exe

    this.isMobile(); // events

    window.addEventListener('resize', () => {
      this.isMobile();
    });
  }

  render() {
    return $`<slot @slotchange=${() => this.handleSlotChange()}></slot>`;
  }

  handleSlotChange() {
    this.total = this.steps.length;
    this.steps.forEach((step, index) => {
      step.step = index + 1;

      if (step.step === this.total) {
        step.last = true;
      }
    });
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.steps.forEach(step => {
      step.mobile = mediaQuery.matches;
    });
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-tracker') || customElements.define('kemet-tracker', KemetTracker);
const stylesLoaders = r$3`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid var(--kemet-upload-file-ripple-color);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k)); // eslint-disable-next-line no-restricted-properties

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

class KemetUploadFile extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          --kemet-upload-file-ripple-color: var(--kemet-color-primary);

          color: var(--kemet-upload-file-color, var(--kemet-color-gray7));
          display: grid;
          gap: 1rem;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: var(--kemet-upload-file-padding, 0.5rem 1rem);
          border: var(--kemet-upload-file-border, 1px solid var(--kemet-color-primary));
        }

        :host([status='error']) {
          border: 1px solid var(--kemet-color-error);
        }

        :host([status='complete']) {
          border: 1px solid var(--kemet-color-success);
        }

        h3 {
          margin: 0;
        }

        .percentage {
          font-size: clamp(2rem, 3vw, 2.5rem);
          align-self: center;
          justify-self: center;
        }

        .indicator {
          transform: scale(0.8);
        }

        :host([status='complete']) .message,
        :host([status='complete']) .indicator {
          color: var(--kemet-color-success);
        }

        :host([status='error']) .message,
        :host([status='error']) .indicator {
          color: var(--kemet-color-error);
        }
      `, stylesLoaders];
  }

  static get properties() {
    return {
      /**
       * The name of the file
       */
      name: {
        type: String
      },

      /**
       * The number of bytes loaded
       */
      loaded: {
        type: Number
      },

      /**
       * The file size in bytes
       */
      size: {
        type: Number
      },

      /**
       * The file type
       */
      type: {
        type: String
      },

      /**
       * The status of the file. Values are complete | uploading | error.
       */
      status: {
        type: String,
        reflect: true
      },

      /**
       * A percentage of file completion that's calculated by the loaded property
       */
      percent: {
        type: Number
      },

      /**
       * An error message to give to users
       */
      message: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.loaded = 0;
    this.size = 0;
    this.percent = 0;
  }

  updated() {
    this.percent = this.calculatePercent();
  }

  render() {
    return $`
      <div class="percentage" part="percentage">
        <span>${this.percent}%</span>
      </div>
      <div>
        <h3 part="filename">${this.name}</h3>
        <span part="loaded">${formatBytes(this.loaded)} / ${formatBytes(this.size)}</span>
        ${this.message ? $`<div class="message" part="message">${this.message}</div>` : null}
      </div>
      <div class="indicator" part="indicator">
        ${this.getStatusIcon()}
      </div>
    `;
  }

  calculatePercent() {
    const percent = Math.round(this.loaded * 100.0 / this.size);
    return percent > 100 ? 100 : percent;
  }

  getStatusIcon() {
    if (this.status === 'uploading') {
      return $`<div class="lds-ripple"><div></div><div></div></div>`;
    }

    if (this.status === 'complete') {
      return $`<kemet-icon icon="check-circle" size="48"></kemet-icon>`;
    }

    if (this.status === 'error') {
      return $`<kemet-icon icon="exclamation-circle" size="48"></kemet-icon>`;
    }

    return null;
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-upload-file') || customElements.define('kemet-upload-file', KemetUploadFile);

const preventDefaults = event => {
  event.preventDefault();
  event.stopPropagation();
};

class KemetUpload extends s$1 {
  static get styles() {
    return [r$3`
        :host {
          color: var(--kemet-upload-color, var(--kemet-color-white));
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: var(--kemet-upload-height, 364px);
          border: var(--kemet-upload-border, 1rem solid var(--kemet-color-white));
          background-color: var(--kemet-upload-background-color, var(--kemet-color-primary));
        }

        :host([mobile]) {
          display: block;
          height: auto;
        }

        input {
          display: none;
        }

        .button {
          cursor: pointer;
          font-size: 1rem;
          display: block;
          color: var(--kemet-color-white);
          padding: 0.5rem 1rem;
          border: 1px solid var(--kemet-color-white);
          background-color: transparent;
        }

        .upload {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1rem;
          flex-direction: column;
          border: 2px dashed var(--kemet-color-white);
        }

        :host([over]) .upload {
          background-color: green;
        }

        :host([mobile]) .upload {
          height: 280px;
        }

        .files {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          padding: 0 1rem;
          overflow: auto;
          background-color: var(--kemet-color-white);
        }

        :host([mobile]) .files {
          padding: 0;
          max-height: 280px;
        }

        .heading {
          font-size: 1.25rem;
          margin: 0 0 2rem 0;
        }

        :host([no-drag-drop]) .heading {
          display: none;
        }

        ::slotted(:first-child) {
          margin-top: 1rem;
        }
      `];
  }

  static get properties() {
    return {
      /**
       * A unique identifier for the component
       */
      slug: {
        type: String
      },

      /**
       * Determines what file types are accepted
       */
      accept: {
        type: String
      },

      /**
       * Allows for multiple files
       */
      multiple: {
        type: Boolean
      },

      /**
       * Automatically is true when a file is being dragged over the upload area
       */
      over: {
        type: Boolean,
        reflect: true
      },

      /**
       * Descriptive text for the upload area
       */
      heading: {
        type: String
      },

      /**
       * Displays the component in a mobile context
       */
      mobile: {
        type: Boolean,
        reflect: true
      },

      /**
       * Controls the point at which the component is considered mobile
       */
      breakpoint: {
        type: String,
        reflect: true
      },

      /**
       * If true if drag and drop support is not detected
       */
      noDragDrop: {
        type: Boolean,
        reflect: true,
        attribute: 'no-drag-drop'
      },

      /**
       * The maximum file size for uploads
       */
      maxSize: {
        type: Number,
        attribute: 'max-size'
      },

      /**
       * The browse files button text
       */
      buttonLabel: {
        type: String,
        attribute: 'button-label'
      }
    };
  }

  constructor() {
    super();
    this.slug = 'upload';
    this.breakpoint = '600px';
    this.buttonLabel = 'Browse Files';
    this.heading = 'Drag & Drop Files';
  }

  firstUpdated() {
    this.fileInputElement = this.shadowRoot.querySelector('[type="file"]');
    this.upload = this.shadowRoot.querySelector('.upload');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.upload.addEventListener(eventName, event => preventDefaults(event), false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
      this.upload.addEventListener(eventName, () => {
        this.over = true;
      }, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      this.upload.addEventListener(eventName, () => {
        this.over = false;
      }, false);
    });
    this.isMobile();
    this.hasDragDrop();
    window.addEventListener('resize', () => {
      this.isMobile();
    });
    this.upload.addEventListener('drop', event => this.handleDrop(event), false);
  }

  render() {
    return $`
      <div class="upload" part="upload">
        <kemet-icon icon="cloud-arrow-up" size="128"></kemet-icon>
        <input
          type="file"
          id=${this.slug}
          ?multiple=${this.multiple}
          accept=${l$1(this.accept) ? this.accept : null}
          @change=${event => this.handleChange(event)}
        />
        <h3 class="heading" part="heading">${this.heading}</h3>
        <label class="button" part="button" for=${this.slug}>${this.buttonLabel}</label>
      </div>
      <div class="files" part="files">
        <slot></slot>
      </div>
    `;
  }

  handleChange(event) {
    /**
     * Fires when files have been added
     */
    this.dispatchEvent(new CustomEvent('kemet-upload-change', {
      bubbles: true,
      composed: true,
      detail: {
        event,
        files: this.fileInputElement.files,
        fileElement: this.fileInputElement
      }
    }));
  }

  handleDrop(event) {
    /**
     * Fires when files have been added
     */
    this.dispatchEvent(new CustomEvent('kemet-upload-change', {
      bubbles: true,
      composed: true,
      detail: {
        event,
        files: event?.dataTransfer.files || [],
        fileElement: this.fileInputElement
      }
    }));
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  hasDragDrop() {
    if ('draggable' in document.createElement('span')) {
      this.noDragDrop = false;
    } else {
      this.noDragDrop = true;
    }
  }

} // eslint-disable-next-line no-unused-expressions


customElements.get('kemet-upload') || customElements.define('kemet-upload', KemetUpload);


/***/ }),

/***/ "./node_modules/kemet-ui/dist/utilities/controllers/forms.js":
/*!*******************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/utilities/controllers/forms.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSubmitController": function() { return /* binding */ FormSubmitController; }
/* harmony export */ });
class FormSubmitController {
  host;
  form;
  options;

  constructor(host, options) {
    (this.host = host).addController(this);
    this.options = {
      form: input => input.closest('form'),
      name: input => input.name,
      value: input => input.value,
      disabled: input => input.disabled,
      checkValidity: input => typeof input.checkValidity === 'function' ? input.checkValidity() : true,
      ...options
    };
    this.handleFormData = this.handleFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  hostConnected() {
    this.form = this.options.form(this.host);

    if (this.form) {
      this.form.addEventListener('formdata', this.handleFormData);
      this.form.addEventListener('submit', this.handleFormSubmit);
    }
  }

  hostDisconnected() {
    if (this.form) {
      this.form.removeEventListener('formdata', this.handleFormData);
      this.form.removeEventListener('submit', this.handleFormSubmit);
      this.form = undefined;
    }
  }

  handleFormData(event) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);

    if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        value.forEach(val => {
          event.formData?.append(name, val.toString());
        });
      } else {
        event.formData?.append(name, value.toString());
      }
    }
  }

  handleFormSubmit(event) {
    const disabled = this.options.disabled(this.host);
    const checkValidity = this.options.checkValidity;
    this.form = this.options.form(this.host);

    if (this.form && !this.form.noValidate && !disabled && !checkValidity(this.host)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const components = this.form.querySelectorAll('kemet-input, kemet-textarea, kemet-select, kemet-checkbox, kemet-radios');
      components.forEach(component => {
        component.checkValidity();

        if (!component.checkValidity()) {
          component.status = 'error';
          component.invalid = true;
          component.dispatchEvent(new CustomEvent('kemet-input-status', {
            bubbles: true,
            composed: true,
            detail: {
              status: 'error',
              validity: component.validity ? component.validity : {},
              element: component
            }
          }));
        }

        if (component.checkLimitValidity && !component.checkLimitValidity()) {
          component.status = 'error';
          component.invalid = true;
          component.dispatchEvent(new CustomEvent('kemet-input-status', {
            bubbles: true,
            composed: true,
            detail: {
              status: 'error',
              validity: {
                passedLimit: true
              },
              element: component
            }
          }));
        }
      });
    }
  }

  submit() {
    const button = document.createElement('button');

    if (this.form) {
      button.type = 'submit';
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clip = 'rect(0 0 0 0)';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';
      this.form.append(button);
      button.click();
      button.remove();
    }
  }

}

/***/ }),

/***/ "./node_modules/kemet-ui/index.js":
/*!****************************************!*\
  !*** ./node_modules/kemet-ui/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_kemet_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/kemet-components.js */ "./node_modules/kemet-ui/dist/kemet-components.js");


/***/ }),

/***/ "./node_modules/mobile-drag-drop/index.min.js":
/*!****************************************************!*\
  !*** ./node_modules/mobile-drag-drop/index.min.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! mobile-drag-drop 2.1.0 | Copyright (c) 2017 Tim Ruffles | MIT License */
!function (a, b) {
   true ? b(exports) : 0;
}(this, function (a) {
  "use strict";

  function b() {
    var a = {
      dragEvents: "ondragstart" in document.documentElement,
      draggable: "draggable" in document.documentElement,
      touchEvents: "ontouchstart" in document.documentElement,
      userAgentSupportingNativeDnD: void 0
    },
        b = !!window.chrome || /chrome/i.test(navigator.userAgent);
    return a.userAgentSupportingNativeDnD = !(/iPad|iPhone|iPod|Android/.test(navigator.userAgent) || b && a.touchEvents), A && Object.keys(a).forEach(function (a) {}), a;
  }

  function c() {
    var a = !1;

    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
      window.addEventListener("test", null, b);
    } catch (a) {}

    return a;
  }

  function d(a) {
    if (a && Object.keys(a).forEach(function (b) {
      B[b] = a[b];
    }), !B.forceApply) {
      var d = b();
      if (d.userAgentSupportingNativeDnD && d.draggable && d.dragEvents) return !1;
    }

    return y = c(), B.holdToDrag ? h("touchstart", w, !1) : h("touchstart", e, !1), !0;
  }

  function e(a) {
    if (!z) {
      var b = f(a);
      if (b) try {
        z = new J(a, B, b, g);
      } catch (b) {
        throw g(B, a, 3), b;
      }
    }
  }

  function f(a) {
    var b = a.target;

    do if (b.draggable !== !1 && b.getAttribute && "true" === b.getAttribute("draggable")) return b; while ((b = b.parentNode) && b !== document.body);
  }

  function g(a, b, c) {
    if (0 === c && a.defaultActionOverride) try {
      a.defaultActionOverride(b), b.defaultPrevented;
    } catch (a) {}
    z = null;
  }

  function h(a, b, c) {
    void 0 === c && (c = !0), document.addEventListener(a, b, !!y && {
      passive: c
    });
  }

  function i(a, b) {
    document.removeEventListener(a, b);
  }

  function j(a) {
    return 0 === a.length ? 0 : a.reduce(function (a, b) {
      return b + a;
    }, 0) / a.length;
  }

  function k(a) {
    return a && a.tagName;
  }

  function l(a, b) {
    for (var c = 0; c < a.changedTouches.length; c++) {
      var d = a.changedTouches[c];
      if (d.identifier === b) return !0;
    }

    return !1;
  }

  function m(a, b, c, d, e, f, g) {
    void 0 === g && (g = null);
    var h = b.changedTouches[0],
        i = new Event(c, {
      bubbles: !0,
      cancelable: d
    });
    i.dataTransfer = f, i.relatedTarget = g, i.screenX = h.screenX, i.screenY = h.screenY, i.clientX = h.clientX, i.clientY = h.clientY, i.pageX = h.pageX, i.pageY = h.pageY;
    var j = a.getBoundingClientRect();
    return i.offsetX = i.clientX - j.left, i.offsetY = i.clientY - j.top, i;
  }

  function n(a, b, c) {
    for (var d = [], e = [], f = 0; f < b.touches.length; f++) {
      var g = b.touches[f];
      d.push(g[a + "X"]), e.push(g[a + "Y"]);
    }

    c.x = j(d), c.y = j(e);
  }

  function o(a, b) {
    if (1 === a.nodeType) {
      for (var c = getComputedStyle(a), d = 0; d < c.length; d++) {
        var e = c[d];
        b.style.setProperty(e, c.getPropertyValue(e), c.getPropertyPriority(e));
      }

      b.style.pointerEvents = "none", b.removeAttribute("id"), b.removeAttribute("class"), b.removeAttribute("draggable");
    }

    if (a.hasChildNodes()) for (var d = 0; d < a.childNodes.length; d++) o(a.childNodes[d], b.childNodes[d]);
  }

  function p(a) {
    var b = a.cloneNode(!0);
    return o(a, b), b.style.position = "absolute", b.style.left = "0px", b.style.top = "0px", b.style.zIndex = "999999", b.classList.add(G), b.classList.add(I), b;
  }

  function q(a) {
    return E.map(function (b) {
      var c = a.style[b + "transform"];
      return c && "none" !== c ? c.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g, "") : "";
    });
  }

  function r(a, b, c, d, e) {
    void 0 === e && (e = !0);
    var f = b.x,
        g = b.y;
    d && (f += d.x, g += d.y), e && (f -= parseInt(a.offsetWidth, 10) / 2, g -= parseInt(a.offsetHeight, 10) / 2);

    for (var h = "translate3d(" + f + "px," + g + "px, 0)", i = 0; i < E.length; i++) {
      var j = E[i] + "transform";
      a.style[j] = h + " " + c[i];
    }
  }

  function s(a, b, c, d) {
    var e = getComputedStyle(a);
    if ("hidden" === e.visibility || "none" === e.display) return void d();
    b.classList.add(H);
    var f = getComputedStyle(b),
        g = parseFloat(f.transitionDuration);
    if (isNaN(g) || 0 === g) return void d();
    var h = a.getBoundingClientRect(),
        i = {
      x: h.left,
      y: h.top
    };
    i.x += document.body.scrollLeft || document.documentElement.scrollLeft, i.y += document.body.scrollTop || document.documentElement.scrollTop, i.x -= parseInt(e.marginLeft, 10), i.y -= parseInt(e.marginTop, 10);
    var j = parseFloat(f.transitionDelay),
        k = Math.round(1e3 * (g + j));
    r(b, i, c, void 0, !1), setTimeout(d, k);
  }

  function t(a, b) {
    return a ? a === C[0] ? D[0] : 0 === a.indexOf(C[1]) || a === C[7] ? D[1] : 0 === a.indexOf(C[4]) ? D[3] : a === C[6] ? D[2] : D[1] : 3 === b.nodeType && "A" === b.tagName ? D[3] : D[1];
  }

  function u(a, b, c, d, e, f, g) {
    if (void 0 === f && (f = !0), void 0 === g && (g = null), A) {
      var h = F + "debug",
          i = F + "event-target",
          j = F + "event-related-target";
      b.classList.add(h), b.classList.add(i), g && (g.classList.add(h), g.classList.add(j));
    }

    var k = m(b, c, a, f, document.defaultView, e, g),
        l = !b.dispatchEvent(k);
    return d.g = 0, A && (b.classList.remove(i), g && g.classList.remove(j)), l;
  }

  function v(a, b) {
    if (!a || a === C[7]) return b;

    if (b === D[1]) {
      if (0 === a.indexOf(D[1])) return D[1];
    } else if (b === D[3]) {
      if (0 === a.indexOf(D[3]) || a.indexOf("Link") > -1) return D[3];
    } else if (b === D[2] && (0 === a.indexOf(D[2]) || a.indexOf("Move") > -1)) return D[2];

    return D[0];
  }

  function w(a) {
    var b = a.target,
        c = function () {
      g.off(), h.off(), i.off(), e(a);
    },
        d = function () {
      g.off(), h.off(), i.off(), clearTimeout(f);
    },
        f = setTimeout(c, B.holdToDrag),
        g = x(b, "touchend", d, this),
        h = x(b, "touchcancel", d, this),
        i = x(window, "scroll", d, this);
  }

  function x(a, b, c, d) {
    return d && (c = c.bind(d)), a.addEventListener(b, c), {
      off: function () {
        return a.removeEventListener(b, c);
      }
    };
  }

  var y,
      z,
      A = !1,
      B = {
    iterationInterval: 150
  },
      C = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all"],
      D = ["none", "copy", "move", "link"],
      E = ["", "-webkit-"],
      F = "dnd-poly-",
      G = F + "drag-image",
      H = F + "snapback",
      I = F + "icon",
      J = function () {
    function a(a, b, c, d) {
      this.h = a, this.i = b, this.j = c, this.k = d, this.l = 0, this.m = null, this.o = null, this.p = a, this.q = a.changedTouches[0], this.s = this.t.bind(this), this.u = this.v.bind(this), h("touchmove", this.s, !1), h("touchend", this.u, !1), h("touchcancel", this.u, !1);
    }

    return a.prototype.A = function () {
      var a = this;
      this.l = 1, this.B = D[0], this.C = {
        D: {},
        F: void 0,
        g: 3,
        G: []
      }, this.H = {
        x: null,
        y: null
      }, this.I = {
        x: null,
        y: null
      };
      var b = this.j;
      if (this.J = new K(this.C, function (c, d, e) {
        b = c, "number" != typeof d && "number" != typeof e || (a.K = {
          x: d || 0,
          y: e || 0
        });
      }), this.C.g = 2, this.J.dropEffect = D[0], u("dragstart", this.j, this.p, this.C, this.J)) return this.l = 3, this.L(), !1;
      if (n("page", this.p, this.I), this.M = p(b), this.N = q(this.M), !this.K) if (this.i.dragImageOffset) this.K = {
        x: this.i.dragImageOffset.x,
        y: this.i.dragImageOffset.y
      };else if (this.i.dragImageCenterOnTouch) {
        var c = getComputedStyle(b);
        this.K = {
          x: 0 - parseInt(c.marginLeft, 10),
          y: 0 - parseInt(c.marginTop, 10)
        };
      } else {
        var d = b.getBoundingClientRect(),
            c = getComputedStyle(b);
        this.K = {
          x: d.left - this.q.clientX - parseInt(c.marginLeft, 10) + d.width / 2,
          y: d.top - this.q.clientY - parseInt(c.marginTop, 10) + d.height / 2
        };
      }
      return r(this.M, this.I, this.N, this.K, this.i.dragImageCenterOnTouch), document.body.appendChild(this.M), this.O = setInterval(function () {
        a.P || (a.P = !0, a.R(), a.P = !1);
      }, this.i.iterationInterval), !0;
    }, a.prototype.L = function () {
      this.O && (clearInterval(this.O), this.O = null), i("touchmove", this.s), i("touchend", this.u), i("touchcancel", this.u), this.M && (this.M.parentNode.removeChild(this.M), this.M = null), this.k(this.i, this.p, this.l);
    }, a.prototype.t = function (a) {
      var b = this;

      if (l(a, this.q.identifier) !== !1) {
        if (this.p = a, 0 === this.l) {
          var c = void 0;
          if (this.i.dragStartConditionOverride) try {
            c = this.i.dragStartConditionOverride(a);
          } catch (a) {
            c = !1;
          } else c = 1 === a.touches.length;
          return c ? void (this.A() === !0 && (this.h.preventDefault(), a.preventDefault())) : void this.L();
        }

        if (a.preventDefault(), n("client", a, this.H), n("page", a, this.I), this.i.dragImageTranslateOverride) try {
          var d = !1;
          if (this.i.dragImageTranslateOverride(a, {
            x: this.H.x,
            y: this.H.y
          }, this.m, function (a, c) {
            b.M && (d = !0, b.H.x += a, b.H.y += c, b.I.x += a, b.I.y += c, r(b.M, b.I, b.N, b.K, b.i.dragImageCenterOnTouch));
          }), d) return;
        } catch (a) {}
        r(this.M, this.I, this.N, this.K, this.i.dragImageCenterOnTouch);
      }
    }, a.prototype.v = function (a) {
      if (l(a, this.q.identifier) !== !1) {
        if (this.i.dragImageTranslateOverride) try {
          this.i.dragImageTranslateOverride(void 0, void 0, void 0, function () {});
        } catch (a) {}
        if (0 === this.l) return void this.L();
        a.preventDefault(), this.l = "touchcancel" === a.type ? 3 : 2;
      }
    }, a.prototype.R = function () {
      var a = this;
      if (A) var b = F + "debug",
          c = F + "immediate-user-selection",
          d = F + "current-drop-target";
      var e = this.B;
      this.C.g = 3, this.J.dropEffect = D[0];
      var f = u("drag", this.j, this.p, this.C, this.J);

      if (f && (this.B = D[0]), f || 2 === this.l || 3 === this.l) {
        var g = this.S(this.l);
        return g ? void s(this.j, this.M, this.N, function () {
          a.T();
        }) : void this.T();
      }

      var h = document.elementFromPoint(this.H.x, this.H.y),
          i = this.o;
      h !== this.m && h !== this.o && (A && (this.m && this.m.classList.remove(c), h && (h.classList.add(b), h.classList.add(c))), this.m = h, null !== this.o && (this.C.g = 3, this.J.dropEffect = D[0], u("dragexit", this.o, this.p, this.C, this.J, !1)), null === this.m ? this.o = this.m : (this.C.g = 3, this.J.dropEffect = t(this.C.F, this.j), u("dragenter", this.m, this.p, this.C, this.J) ? (this.o = this.m, this.B = v(this.J.effectAllowed, this.J.dropEffect)) : this.m !== document.body && (this.o = document.body))), i !== this.o && k(i) && (A && i.classList.remove(d), this.C.g = 3, this.J.dropEffect = D[0], u("dragleave", i, this.p, this.C, this.J, !1, this.o)), k(this.o) && (A && (this.o.classList.add(b), this.o.classList.add(d)), this.C.g = 3, this.J.dropEffect = t(this.C.F, this.j), u("dragover", this.o, this.p, this.C, this.J) === !1 ? this.B = D[0] : this.B = v(this.J.effectAllowed, this.J.dropEffect)), e !== this.B && this.M.classList.remove(F + e);
      var j = F + this.B;
      this.M.classList.contains(j) === !1 && this.M.classList.add(j);
    }, a.prototype.S = function (a) {
      if (A) {
        var b = F + "immediate-user-selection",
            c = F + "current-drop-target";
        this.o && this.o.classList.remove(c), this.m && this.m.classList.remove(b);
      }

      var d = this.B === D[0] || null === this.o || 3 === a;
      return d ? k(this.o) && (this.C.g = 3, this.J.dropEffect = D[0], u("dragleave", this.o, this.p, this.C, this.J, !1)) : k(this.o) && (this.C.g = 1, this.J.dropEffect = this.B, u("drop", this.o, this.p, this.C, this.J) === !0 ? this.B = this.J.dropEffect : this.B = D[0]), d;
    }, a.prototype.T = function () {
      this.C.g = 3, this.J.dropEffect = this.B, u("dragend", this.j, this.p, this.C, this.J, !1), this.l = 2, this.L();
    }, a;
  }(),
      K = function () {
    function a(a, b) {
      this.U = a, this.V = b, this.W = D[0];
    }

    return Object.defineProperty(a.prototype, "types", {
      get: function () {
        if (0 !== this.U.g) return Object.freeze(this.U.G);
      },
      enumerable: !0,
      configurable: !0
    }), a.prototype.setData = function (a, b) {
      if (2 === this.U.g) {
        if (a.indexOf(" ") > -1) throw new Error("illegal arg: type contains space");
        this.U.D[a] = b, this.U.G.indexOf(a) === -1 && this.U.G.push(a);
      }
    }, a.prototype.getData = function (a) {
      if (1 === this.U.g || 2 === this.U.g) return this.U.D[a] || "";
    }, a.prototype.clearData = function (a) {
      if (2 === this.U.g) {
        if (a && this.U.D[a]) {
          delete this.U.D[a];
          var b = this.U.G.indexOf(a);
          return void (b > -1 && this.U.G.splice(b, 1));
        }

        this.U.D = {}, this.U.G = [];
      }
    }, a.prototype.setDragImage = function (a, b, c) {
      2 === this.U.g && this.V(a, b, c);
    }, Object.defineProperty(a.prototype, "effectAllowed", {
      get: function () {
        return this.U.F;
      },
      set: function (a) {
        2 === this.U.g && C.indexOf(a) > -1 && (this.U.F = a);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(a.prototype, "dropEffect", {
      get: function () {
        return this.W;
      },
      set: function (a) {
        0 !== this.U.g && C.indexOf(a) > -1 && (this.W = a);
      },
      enumerable: !0,
      configurable: !0
    }), a;
  }();

  a.polyfill = d, Object.defineProperty(a, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }

    var ReactVersion = '18.2.0'; // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.

    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      transition: null
    };
    var ReactCurrentActQueue = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;

    function setExtraStackFrame(stack) {
      {
        currentExtraStackFrame = stack;
      }
    }

    {
      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
        {
          currentExtraStackFrame = stack;
        }
      }; // Stack implementation injected by the current renderer.


      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentExtraStackFrame) {
          stack += currentExtraStackFrame;
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    } // -----------------------------------------------------------------------------

    var enableScopeAPI = false; // Experimental Create Event Handle API.

    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing

    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.

    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner
    };
    {
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
      ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    } // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          printWarning('warn', format, args);
        }
      }
    }

    function error(format) {
      {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        } // eslint-disable-next-line react-internal/safe-string-coercion


        var argsWithFormat = args.map(function (item) {
          return String(item);
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
        throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
      }

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

    function isArray(a) {
      return isArrayImpl(a);
    }
    /*
     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
     *
     * The functions in this module will throw an easier-to-understand,
     * easier-to-debug exception with a clear errors message message explaining the
     * problem. (Instead of a confusing exception thrown inside the implementation
     * of the `value` object).
     */
    // $FlowFixMe only called in DEV, so void return is not possible.


    function typeName(value) {
      {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
      }
    } // $FlowFixMe only called in DEV, so void return is not possible.


    function willCoercionThrow(value) {
      {
        try {
          testStringCoercion(value);
          return false;
        } catch (e) {
          return true;
        }
      }
    }

    function testStringCoercion(value) {
      // If you ended up here by following an exception call stack, here's what's
      // happened: you supplied an object or symbol value to React (as a prop, key,
      // DOM attribute, CSS property, string ref, etc.) and when React tried to
      // coerce it to a string using `'' + value`, an exception was thrown.
      //
      // The most common types that will cause this exception are `Symbol` instances
      // and Temporal objects like `Temporal.Instant`. But any object that has a
      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
      // exception. (Library authors do this to prevent users from using built-in
      // numeric operators like `+` or comparison operators like `>=` because custom
      // methods are needed to perform accurate arithmetic or comparison.)
      //
      // To fix the problem, coerce this object or symbol value to a string before
      // passing it to React. The most reliable way is usually `String(value)`.
      //
      // To find which value is throwing, check the browser or debugger console.
      // Before this exception was thrown, there should be `console.error` output
      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
      // problem and how that type was used: key, atrribute, input value prop, etc.
      // In most cases, this console output also shows the component and its
      // ancestor components where the exception happened.
      //
      // eslint-disable-next-line react-internal/safe-string-coercion
      return '' + value;
    }

    function checkKeyStringCoercion(value) {
      {
        if (willCoercionThrow(value)) {
          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
      }
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var displayName = outerType.displayName;

      if (displayName) {
        return displayName;
      }

      var functionName = innerType.displayName || innerType.name || '';
      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber


    function getContextName(type) {
      return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


    function getComponentNameFromType(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            var outerName = type.displayName || null;

            if (outerName !== null) {
              return outerName;
            }

            return getComponentNameFromType(type.type) || 'Memo';

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          // eslint-disable-next-line no-fallthrough
        }
      }

      return null;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      if (element === null || element === undefined) {
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
      }

      var propName; // Original props are copied

      var props = assign({}, element.props); // Reserved names are extracted

      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = key.replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getElementKey(element, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof element === 'object' && element !== null && element.key != null) {
        // Explicit key
        {
          checkKeyStringCoercion(element.key);
        }
        return escape('' + element.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        var _child = children;
        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:

        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

        if (isArray(mappedChild)) {
          var escapedChildKey = '';

          if (childKey != null) {
            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
          }

          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            {
              // The `if` statement here prevents auto-disabling of the safe
              // coercion ESLint rule, so we must manually disable it below.
              // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                checkKeyStringCoercion(mappedChild.key);
              }
            }
            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
          }

          array.push(mappedChild);
        }

        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getElementKey(child, i);
          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          var iterableChildren = children;
          {
            // Warn about using Maps as children
            if (iteratorFn === iterableChildren.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
              }

              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(iterableChildren);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getElementKey(child, ii++);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else if (type === 'object') {
          // eslint-disable-next-line react-internal/safe-string-coercion
          var childrenString = String(children);
          throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
        }
      }

      return subtreeCount;
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      var count = 0;
      mapIntoArray(children, result, '', '', function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      var n = 0;
      mapChildren(children, function () {
        n++; // Don't return anything
      });
      return n;
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      mapChildren(children, function () {
        forEachFunc.apply(this, arguments); // Don't return anything.
      }, forEachContext);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      return mapChildren(children, function (child) {
        return child;
      }) || [];
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      if (!isValidElement(children)) {
        throw new Error('React.Children.only expected to receive a single React element child.');
      }

      return children;
    }

    function createContext(defaultValue) {
      // TODO: Second argument used to be an optional `calculateChangedBits`
      // function. Warn to reserve for future use?
      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      var hasWarnedAboutDisplayNameOnConsumer = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function () {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function (_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function () {
              return context._currentValue;
            },
            set: function (_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function () {
              return context._currentValue2;
            },
            set: function (_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function () {
              return context._threadCount;
            },
            set: function (_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function () {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          },
          displayName: {
            get: function () {
              return context.displayName;
            },
            set: function (displayName) {
              if (!hasWarnedAboutDisplayNameOnConsumer) {
                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                hasWarnedAboutDisplayNameOnConsumer = true;
              }
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;

    function lazyInitializer(payload) {
      if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor(); // Transition to the next state.
        // This might throw either because it's missing or throws. If so, we treat it
        // as still uninitialized and try again next time. Which is the same as what
        // happens if the ctor or any wrappers processing the ctor throws. This might
        // end up fixing it if the resolution was a concurrency bug.

        thenable.then(function (moduleObject) {
          if (payload._status === Pending || payload._status === Uninitialized) {
            // Transition to the next state.
            var resolved = payload;
            resolved._status = Resolved;
            resolved._result = moduleObject;
          }
        }, function (error) {
          if (payload._status === Pending || payload._status === Uninitialized) {
            // Transition to the next state.
            var rejected = payload;
            rejected._status = Rejected;
            rejected._result = error;
          }
        });

        if (payload._status === Uninitialized) {
          // In case, we're still uninitialized, then we're waiting for the thenable
          // to resolve. Set it as pending in the meantime.
          var pending = payload;
          pending._status = Pending;
          pending._result = thenable;
        }
      }

      if (payload._status === Resolved) {
        var moduleObject = payload._result;
        {
          if (moduleObject === undefined) {
            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
          }
        }
        {
          if (!('default' in moduleObject)) {
            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        }
        return moduleObject.default;
      } else {
        throw payload._result;
      }
    }

    function lazy(ctor) {
      var payload = {
        // We use these fields to store the result.
        _status: Uninitialized,
        _result: ctor
      };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe

        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function () {
              return defaultProps;
            },
            set: function (newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function () {
              return propTypes;
            },
            set: function (newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name; // The inner component shouldn't inherit this display name in most cases,
            // because the component may be used elsewhere.
            // But it's nice for anonymous functions to inherit the name,
            // so that our component-stack generation logic will display their frames.
            // An anonymous function generally suggests a pattern like:
            //   React.forwardRef((props, ref) => {...});
            // This kind of inner function is not used elsewhere so the side effect is okay.

            if (!render.name && !render.displayName) {
              render.displayName = name;
            }
          }
        });
      }
      return elementType;
    }

    var REACT_MODULE_REFERENCE;
    {
      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    }

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
          return true;
        }
      }

      return false;
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
        }
      }
      var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name; // The inner component shouldn't inherit this display name in most cases,
            // because the component may be used elsewhere.
            // But it's nice for anonymous functions to inherit the name,
            // so that our component-stack generation logic will display their frames.
            // An anonymous function generally suggests a pattern like:
            //   React.memo((props) => {...});
            // This kind of inner function is not used elsewhere so the side effect is okay.

            if (!type.name && !type.displayName) {
              type.displayName = name;
            }
          }
        });
      }
      return elementType;
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;
      {
        if (dispatcher === null) {
          error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
        }
      } // Will result in a null access error if accessed outside render phase. We
      // intentionally don't throw our own error because this is in a hot path.
      // Also helps ensure this is inlined.

      return dispatcher;
    }

    function useContext(Context) {
      var dispatcher = resolveDispatcher();
      {
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }

    function useInsertionEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useInsertionEffect(create, deps);
    }

    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }

    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }

    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }

    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }

    function useTransition() {
      var dispatcher = resolveDispatcher();
      return dispatcher.useTransition();
    }

    function useDeferredValue(value) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useDeferredValue(value);
    }

    function useId() {
      var dispatcher = resolveDispatcher();
      return dispatcher.useId();
    }

    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    } // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.


    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;

    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }

    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: assign({}, props, {
              value: prevLog
            }),
            info: assign({}, props, {
              value: prevInfo
            }),
            warn: assign({}, props, {
              value: prevWarn
            }),
            error: assign({}, props, {
              value: prevError
            }),
            group: assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;

    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }

    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher$1.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                    // but we have a user-provided "displayName"
                    // splice it in to make the stack more readable.


                    if (fn.displayName && _frame.includes('<anonymous>')) {
                      _frame = _frame.replace('<anonymous>', fn.displayName);
                    }

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher$1.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }

    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                // eslint-disable-next-line react-internal/prod-error-codes
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else {
          setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentNameFromType(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
      }

      {
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }

      if (isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentNameFromType(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentNameFromType(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = 'null';
        } else if (isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type;
        }

        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    var didWarnAboutDeprecatedCreateFactory = false;

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it


        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    function startTransition(scope, options) {
      var prevTransition = ReactCurrentBatchConfig.transition;
      ReactCurrentBatchConfig.transition = {};
      var currentTransition = ReactCurrentBatchConfig.transition;
      {
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
      }

      try {
        scope();
      } finally {
        ReactCurrentBatchConfig.transition = prevTransition;
        {
          if (prevTransition === null && currentTransition._updatedFibers) {
            var updatedFibersCount = currentTransition._updatedFibers.size;

            if (updatedFibersCount > 10) {
              warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
            }

            currentTransition._updatedFibers.clear();
          }
        }
      }
    }

    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;

    function enqueueTask(task) {
      if (enqueueTaskImpl === null) {
        try {
          // read require off the module object to get around the bundlers.
          // we don't want them to detect a require and bundle a Node polyfill.
          var requireString = ('require' + Math.random()).slice(0, 7);
          var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
          // version of setImmediate, bypassing fake timers if any.

          enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
        } catch (_err) {
          // we're in a browser
          // we can't use regular timers because they may still be faked
          // so we try MessageChannel+postMessage instead
          enqueueTaskImpl = function (callback) {
            {
              if (didWarnAboutMessageChannel === false) {
                didWarnAboutMessageChannel = true;

                if (typeof MessageChannel === 'undefined') {
                  error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
                }
              }
            }
            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      }

      return enqueueTaskImpl(task);
    }

    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;

    function act(callback) {
      {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;

        if (ReactCurrentActQueue.current === null) {
          // This is the outermost `act` scope. Initialize the queue. The reconciler
          // will detect the queue and use it instead of Scheduler.
          ReactCurrentActQueue.current = [];
        }

        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;

        try {
          // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
          // set to `true` while the given callback is executed, not for updates
          // triggered during an async event, because this is how the legacy
          // implementation of `act` behaved.
          ReactCurrentActQueue.isBatchingLegacy = true;
          result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
          // which flushed updates immediately after the scope function exits, even
          // if it's an async function.

          if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
            var queue = ReactCurrentActQueue.current;

            if (queue !== null) {
              ReactCurrentActQueue.didScheduleLegacyUpdate = false;
              flushActQueue(queue);
            }
          }
        } catch (error) {
          popActScope(prevActScopeDepth);
          throw error;
        } finally {
          ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }

        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
          var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
          // for it to resolve before exiting the current scope.

          var wasAwaited = false;
          var thenable = {
            then: function (resolve, reject) {
              wasAwaited = true;
              thenableResult.then(function (returnValue) {
                popActScope(prevActScopeDepth);

                if (actScopeDepth === 0) {
                  // We've exited the outermost act scope. Recursively flush the
                  // queue until there's no remaining work.
                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                } else {
                  resolve(returnValue);
                }
              }, function (error) {
                // The callback threw an error.
                popActScope(prevActScopeDepth);
                reject(error);
              });
            }
          };
          {
            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
              // eslint-disable-next-line no-undef
              Promise.resolve().then(function () {}).then(function () {
                if (!wasAwaited) {
                  didWarnNoAwaitAct = true;
                  error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
                }
              });
            }
          }
          return thenable;
        } else {
          var returnValue = result; // The callback is not an async function. Exit the current scope
          // immediately, without awaiting.

          popActScope(prevActScopeDepth);

          if (actScopeDepth === 0) {
            // Exiting the outermost act scope. Flush the queue.
            var _queue = ReactCurrentActQueue.current;

            if (_queue !== null) {
              flushActQueue(_queue);
              ReactCurrentActQueue.current = null;
            } // Return a thenable. If the user awaits it, we'll flush again in
            // case additional work was scheduled by a microtask.


            var _thenable = {
              then: function (resolve, reject) {
                // Confirm we haven't re-entered another `act` scope, in case
                // the user does something weird like await the thenable
                // multiple times.
                if (ReactCurrentActQueue.current === null) {
                  // Recursively flush the queue until there's no remaining work.
                  ReactCurrentActQueue.current = [];
                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                } else {
                  resolve(returnValue);
                }
              }
            };
            return _thenable;
          } else {
            // Since we're inside a nested `act` scope, the returned thenable
            // immediately resolves. The outer scope will flush the queue.
            var _thenable2 = {
              then: function (resolve, reject) {
                resolve(returnValue);
              }
            };
            return _thenable2;
          }
        }
      }
    }

    function popActScope(prevActScopeDepth) {
      {
        if (prevActScopeDepth !== actScopeDepth - 1) {
          error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
        }

        actScopeDepth = prevActScopeDepth;
      }
    }

    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              if (queue.length === 0) {
                // No additional work was scheduled. Finish.
                ReactCurrentActQueue.current = null;
                resolve(returnValue);
              } else {
                // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              }
            });
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(returnValue);
        }
      }
    }

    var isFlushing = false;

    function flushActQueue(queue) {
      {
        if (!isFlushing) {
          // Prevent re-entrance.
          isFlushing = true;
          var i = 0;

          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];

              do {
                callback = callback(true);
              } while (callback !== null);
            }

            queue.length = 0;
          } catch (error) {
            // If something throws, leave the remaining callbacks on the queue.
            queue = queue.slice(i + 1);
            throw error;
          } finally {
            isFlushing = false;
          }
        }
      }
    }

    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
  })();
}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./scripts/upload.js":
/*!***************************!*\
  !*** ./scripts/upload.js ***!
  \***************************/
/***/ (function() {

var kemetUpload = document.querySelector('kemet-upload');
var ippmPackages = document.querySelector('ippm-packages'); // send the ippmData to the packages

ippmPackages.ippmData = ippmData; // human readable bytes

var formatBytes = function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

var upload = function upload(file, kemetUploadFile) {
  var xhr = new XMLHttpRequest();
  var formData = new FormData(); // ippmData is created by wp_localize_script and contains the nonce for security and ajaxURL

  xhr.open('POST', ippmData.ajaxURL, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.upload.addEventListener('progress', function (event) {
    if (kemetUploadFile.loaded < kemetUpload.maxSize) {
      kemetUploadFile.loaded = event.loaded;
      kemetUploadFile.status = 'uploading';
    } else {
      xhr.abort();
      kemetUploadFile.status = 'error';
      kemetUploadFile.message = "File exceeded max upload size of ".concat(formatBytes(kemetUpload.maxSize));
    }
  });
  xhr.addEventListener('readystatechange', function (event) {
    var response;

    try {
      response = JSON.parse(xhr.response);
    } catch (_unused) {
      response = {};
    }

    if (xhr.readyState == 4 && xhr.status == 200) {
      // if the file uploads successfully
      kemetUploadFile.status = 'complete';
      ippmPackages.getPackages(); // fetch all the packages again to update the list
    } else if (xhr.readyState == 4 && xhr.status != 200) {
      // if the file doesn't upload successfully
      kemetUploadFile.status = 'error';

      if (response.message) {
        kemetUploadFile.message = response.message;
      }

      if (kemetUploadFile.size > kemetUpload.maxSize) {
        kemetUploadFile.message = "File exceeded max upload size of ".concat(formatBytes(kemetUpload.maxSize));
      }
    }
  });
  formData.append('file', file); // send the file in the request

  formData.append('action', 'ippm_package_upload'); // this is needed by admin-ajax.php to process the request and is based on the naming used for add_action

  formData.append('security', ippmData.security); // verify the nonce

  xhr.send(formData);
};

kemetUpload.addEventListener('kemet-upload-change', function (event) {
  var files = Array.from(event.detail.files);
  files.forEach(function (file) {
    // create a upload-file element and set its properties
    var kemetUploadFile = document.createElement('kemet-upload-file');
    kemetUploadFile.name = file.name;
    kemetUploadFile.size = file.size;
    kemetUploadFile.type = file.type;
    kemetUpload.append(kemetUploadFile); // upload the file

    upload(file, kemetUploadFile);
  });
});

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@lit-labs/react/development/create-component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@lit-labs/react/development/create-component.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComponent": function() { return /* binding */ createComponent; }
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const reservedReactProperties = new Set(['children', 'localName', 'ref', 'style', 'className']);
const listenedEvents = new WeakMap();
/**
 * Adds an event listener for the specified event to the given node. In the
 * React setup, there should only ever be one event listener. Thus, for
 * efficiency only one listener is added and the handler for that listener is
 * updated to point to the given listener function.
 */

const addOrUpdateEventListener = (node, event, listener) => {
  let events = listenedEvents.get(node);

  if (events === undefined) {
    listenedEvents.set(node, events = new Map());
  }

  let handler = events.get(event);

  if (listener !== undefined) {
    // If necessary, add listener and track handler
    if (handler === undefined) {
      events.set(event, handler = {
        handleEvent: listener
      });
      node.addEventListener(event, handler); // Otherwise just update the listener with new value
    } else {
      handler.handleEvent = listener;
    } // Remove listener if one exists and value is undefined

  } else if (handler !== undefined) {
    events.delete(event);
    node.removeEventListener(event, handler);
  }
};
/**
 * Sets properties and events on custom elements. These properties and events
 * have been pre-filtered so we know they should apply to the custom element.
 */


const setProperty = (node, name, value, old, events) => {
  const event = events === null || events === void 0 ? void 0 : events[name];

  if (event !== undefined) {
    // Dirty check event value.
    if (value !== old) {
      addOrUpdateEventListener(node, event, value);
    }
  } else {
    // But don't dirty check properties; elements are assumed to do this.
    node[name] = value;
  }
}; // Set a React ref. Note, there are 2 kinds of refs and there's no built in
// React API to set a ref.


const setRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  } else {
    ref.current = value;
  }
};
/**
 * Creates a React component for a custom element. Properties are distinguished
 * from attributes automatically, and events can be configured so they are
 * added to the custom element as event listeners.
 *
 * @param React The React module, typically imported from the `react` npm
 * package.
 * @param tagName The custom element tag name registered via
 * `customElements.define`.
 * @param elementClass The custom element class registered via
 * `customElements.define`.
 * @param events An object listing events to which the component can listen. The
 * object keys are the event property names passed in via React props and the
 * object values are the names of the corresponding events generated by the
 * custom element. For example, given `{onactivate: 'activate'}` an event
 * function may be passed via the component's `onactivate` prop and will be
 * called when the custom element fires its `activate` event.
 * @param displayName A React component display name, used in debugging
 * messages. Default value is inferred from the name of custom element class
 * registered via `customElements.define`.
 */


const createComponent = (React, tagName, elementClass, events, displayName) => {
  const Component = React.Component;
  const createElement = React.createElement; // Set of properties/events which should be specially handled by the wrapper
  // and not handled directly by React.

  const elementClassProps = new Set(Object.keys(events !== null && events !== void 0 ? events : {}));

  for (const p in elementClass.prototype) {
    if (!(p in HTMLElement.prototype)) {
      if (reservedReactProperties.has(p)) {
        // Note, this effectively warns only for `ref` since the other
        // reserved props are on HTMLElement.prototype. To address this
        // would require crawling down the prototype, which doesn't feel worth
        // it since implementing these properties on an element is extremely
        // rare.
        console.warn(`${tagName} contains property ${p} which is a React ` + `reserved property. It will be used by React and not set on ` + `the element.`);
      } else {
        elementClassProps.add(p);
      }
    }
  }

  class ReactComponent extends Component {
    constructor() {
      super(...arguments);
      this._element = null;
    }

    _updateElement(oldProps) {
      if (this._element === null) {
        return;
      } // Set element properties to the values in `this.props`


      for (const prop in this._elementProps) {
        setProperty(this._element, prop, this.props[prop], oldProps ? oldProps[prop] : undefined, events);
      } // Note, the spirit of React might be to "unset" any old values that
      // are no longer included; however, there's no reasonable value to set
      // them to so we just leave the previous state as is.

    }
    /**
     * Updates element properties correctly setting properties
     * on mount.
     */


    componentDidMount() {
      this._updateElement();
    }
    /**
     * Updates element properties correctly setting properties
     * on every update. Note, this does not include mount.
     */


    componentDidUpdate(old) {
      this._updateElement(old);
    }
    /**
     * Renders the custom element with a `ref` prop which allows this
     * component to reference the custom element.
     *
     * Standard attributes are passed to React and element properties and events
     * are updated in componentDidMount/componentDidUpdate.
     *
     */


    render() {
      // Since refs only get fulfilled once, pass a new one if the user's
      // ref changed. This allows refs to be fulfilled as expected, going from
      // having a value to null.
      const userRef = this.props.__forwardedRef;

      if (this._ref === undefined || this._userRef !== userRef) {
        this._ref = value => {
          if (this._element === null) {
            this._element = value;
          }

          if (userRef !== null) {
            setRef(userRef, value);
          }

          this._userRef = userRef;
        };
      } // Filters class properties out and passes the remaining
      // attributes to React. This allows attributes to use framework rules
      // for setting attributes and render correctly under SSR.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      const props = {
        ref: this._ref
      }; // Note, save element props while iterating to avoid the need to
      // iterate again when setting properties.

      this._elementProps = {};

      for (const [k, v] of Object.entries(this.props)) {
        if (k === '__forwardedRef') continue;

        if (elementClassProps.has(k)) {
          this._elementProps[k] = v;
        } else {
          // React does *not* handle `className` for custom elements so
          // coerce it to `class` so it's handled correctly.
          props[k === 'className' ? 'class' : k] = v;
        }
      }

      return createElement(tagName, props);
    }

  }

  ReactComponent.displayName = displayName !== null && displayName !== void 0 ? displayName : elementClass.name;
  const ForwardedComponent = React.forwardRef((props, ref) => createElement(ReactComponent, { ...props,
    __forwardedRef: ref
  }, props === null || props === void 0 ? void 0 : props.children)); // To ease debugging in the React Developer Tools

  ForwardedComponent.displayName = ReactComponent.displayName;
  return ForwardedComponent;
};

/***/ }),

/***/ "./node_modules/@lit-labs/react/development/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@lit-labs/react/development/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComponent": function() { return /* reexport safe */ _create_component_js__WEBPACK_IMPORTED_MODULE_0__.createComponent; }
/* harmony export */ });
/* harmony import */ var _create_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-component.js */ "./node_modules/@lit-labs/react/development/create-component.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsAdoptingStyleSheets": function() { return /* binding */ supportsAdoptingStyleSheets; },
/* harmony export */   "CSSResult": function() { return /* binding */ CSSResult; },
/* harmony export */   "unsafeCSS": function() { return /* binding */ unsafeCSS; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "adoptStyles": function() { return /* binding */ adoptStyles; },
/* harmony export */   "getCompatibleStyle": function() { return /* binding */ getCompatibleStyle; }
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */

class CSSResult {
  constructor(cssText, strings, safeToken) {
    // This property needs to remain unminified.
    this['_$cssResult$'] = true;

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
    this._strings = strings;
  } // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.


  get styleSheet() {
    // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
    // constructable.
    let styleSheet = this._styleSheet;
    const strings = this._strings;

    if (supportsAdoptingStyleSheets && styleSheet === undefined) {
      const cacheable = strings !== undefined && strings.length === 1;

      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }

      if (styleSheet === undefined) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);

        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }

    return styleSheet;
  }

  toString() {
    return this.cssText;
  }

}

const textFromCSSResult = value => {
  // This property needs to remain unminified.
  if (value['_$cssResult$'] === true) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ` + `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` + `to ensure page security.`);
  }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */


const unsafeCSS = value => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */

const css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */

const adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map(s => s instanceof CSSStyleSheet ? s : s.styleSheet);
  } else {
    styles.forEach(s => {
      const style = document.createElement('style'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      const nonce = window['litNonce'];

      if (nonce !== undefined) {
        style.setAttribute('nonce', nonce);
      }

      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    });
  }
};

const cssResultFromStyleSheet = sheet => {
  let cssText = '';

  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }

  return unsafeCSS(cssText);
};

const getCompatibleStyle = supportsAdoptingStyleSheets ? s => s : s => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult; },
/* harmony export */   "adoptStyles": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles; },
/* harmony export */   "css": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css; },
/* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle; },
/* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets; },
/* harmony export */   "unsafeCSS": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS; },
/* harmony export */   "defaultConverter": function() { return /* binding */ defaultConverter; },
/* harmony export */   "notEqual": function() { return /* binding */ notEqual; },
/* harmony export */   "ReactiveElement": function() { return /* binding */ ReactiveElement; }
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;

var _d;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */




const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = window.trustedTypes; // Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.

const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : '';
const polyfillSupport = DEV_MODE ? window.reactiveElementPolyfillSupportDevMode : window.reactiveElementPolyfillSupport;

if (DEV_MODE) {
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  const issuedWarnings = (_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : globalThis.litIssuedWarnings = new Set(); // Issue a warning, if we haven't already.

  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;

    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };

  issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`); // Issue polyfill support warning.

  if (((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && polyfillSupport === undefined) {
    issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` + `the \`polyfill-support\` module has not been loaded.`);
  }

  requestUpdateThenable = name => ({
    then: (onfulfilled, _onrejected) => {
      issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` + `does so on \`${name}\`. Use \`updateComplete\` instead.`);

      if (onfulfilled !== undefined) {
        onfulfilled(false);
      }
    }
  });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */


const debugLogEvent = DEV_MODE ? event => {
  const shouldEmit = window.emitLitDebugLogEvents;

  if (!shouldEmit) {
    return;
  }

  window.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */

/*@__INLINE__*/

const JSCompiler_renameProperty = (prop, _obj) => prop;

const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        value = value == null ? value : JSON.stringify(value);
        break;
    }

    return value;
  },

  fromAttribute(value, type) {
    let fromValue = value;

    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;

      case Number:
        fromValue = value === null ? null : Number(value);
        break;

      case Object:
      case Array:
        // Do *not* generate exception when invalid JSON is set as elements
        // don't normally complain on being mis-configured.
        // TODO(sorvell): Do generate exception in *dev mode*.
        try {
          // Assert to adhere to Bazel's "must type assert JSON parse" rule.
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }

        break;
    }

    return fromValue;
  }

};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

const notEqual = (value, old) => {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

class ReactiveElement extends HTMLElement {
  constructor() {
    super();
    this.__instanceProperties = new Map();
    /**
     * True if there is a pending update as a result of calling `requestUpdate()`.
     * Should only be read.
     * @category updates
     */

    this.isUpdatePending = false;
    /**
     * Is set to `true` after the first update. The element code cannot assume
     * that `renderRoot` exists before the element `hasUpdated`.
     * @category updates
     */

    this.hasUpdated = false;
    /**
     * Name of currently reflecting property
     */

    this.__reflectingProperty = null;

    this._initialize();
  }
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */


  static addInitializer(initializer) {
    var _a;

    (_a = this._initializers) !== null && _a !== void 0 ? _a : this._initializers = [];

    this._initializers.push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */


  static get observedAttributes() {
    // note: piggy backing on this to ensure we're finalized.
    this.finalize();
    const attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays

    this.elementProperties.forEach((v, p) => {
      const attr = this.__attributeNameForProperty(p, v);

      if (attr !== undefined) {
        this.__attributeToPropertyMap.set(attr, p);

        attributes.push(attr);
      }
    });
    return attributes;
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */


  static createProperty(name, options = defaultPropertyDeclaration) {
    var _a; // if this is a state property, force the attribute to false.


    if (options.state) {
      // Cast as any since this is readonly.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options.attribute = false;
    } // Note, since this can be called by the `@property` decorator which
    // is called before `finalize`, we ensure finalization has been kicked off.


    this.finalize();
    this.elementProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
    // it would be lost otherwise and that would never be the user's intention;
    // Instead, we expect users to call `requestUpdate` themselves from
    // user-defined accessors. Note that if the super has an accessor we will
    // still overwrite it

    if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
      const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
      const descriptor = this.getPropertyDescriptor(name, key, options);

      if (descriptor !== undefined) {
        Object.defineProperty(this.prototype, name, descriptor);

        if (DEV_MODE) {
          // If this class doesn't have its own set, create one and initialize
          // with the values in the set from the nearest ancestor class, if any.
          if (!this.hasOwnProperty('__reactivePropertyKeys')) {
            this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
          }

          this.__reactivePropertyKeys.add(name);
        }
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */


  static getPropertyDescriptor(name, key, options) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[key];
      },

      set(value) {
        const oldValue = this[name];
        this[key] = value;
        this.requestUpdate(name, oldValue, options);
      },

      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */


  static getPropertyOptions(name) {
    return this.elementProperties.get(name) || defaultPropertyDeclaration;
  }
  /**
   * Creates property accessors for registered properties, sets up element
   * styling, and ensures any superclasses are also finalized. Returns true if
   * the element was finalized.
   * @nocollapse
   */


  static finalize() {
    if (this.hasOwnProperty(finalized)) {
      return false;
    }

    this[finalized] = true; // finalize any superclasses

    const superCtor = Object.getPrototypeOf(this);
    superCtor.finalize();
    this.elementProperties = new Map(superCtor.elementProperties); // initialize Map populated in observedAttributes

    this.__attributeToPropertyMap = new Map(); // make any properties
    // Note, only process "own" properties since this element will inherit
    // any properties defined on the superClass, and finalization ensures
    // the entire prototype chain is finalized.

    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
      const props = this.properties; // support symbols in properties (IE11 does not support this)

      const propKeys = [...Object.getOwnPropertyNames(props), ...Object.getOwnPropertySymbols(props)]; // This for/of is ok because propKeys is an array

      for (const p of propKeys) {
        // note, use of `any` is due to TypeScript lack of support for symbol in
        // index types
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.createProperty(p, props[p]);
      }
    }

    this.elementStyles = this.finalizeStyles(this.styles); // DEV mode warnings

    if (DEV_MODE) {
      const warnRemovedOrRenamed = (name, renamed = false) => {
        if (this.prototype.hasOwnProperty(name)) {
          issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` + `has been ${renamed ? 'renamed' : 'removed'} ` + `in this version of LitElement.`);
        }
      };

      warnRemovedOrRenamed('initialize');
      warnRemovedOrRenamed('requestUpdateInternal');
      warnRemovedOrRenamed('_getUpdateComplete', true);
    }

    return true;
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */


  static finalizeStyles(styles) {
    const elementStyles = [];

    if (Array.isArray(styles)) {
      // Dedupe the flattened array in reverse order to preserve the last items.
      // Casting to Array<unknown> works around TS error that
      // appears to come from trying to flatten a type CSSResultArray.
      const set = new Set(styles.flat(Infinity).reverse()); // Then preserve original order by adding the set items in reverse order.

      for (const s of set) {
        elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
      }
    } else if (styles !== undefined) {
      elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
    }

    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */


  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   *
   * @internal
   */


  _initialize() {
    var _a;

    this.__updatePromise = new Promise(res => this.enableUpdating = res);
    this._$changedProperties = new Map();

    this.__saveInstanceProperties(); // ensures first update will be caught by an early access of
    // `updateComplete`


    this.requestUpdate();
    (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach(i => i(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */


  addController(controller) {
    var _a, _b;

    ((_a = this.__controllers) !== null && _a !== void 0 ? _a : this.__controllers = []).push(controller); // If a controller is added after the element has been connected,
    // call hostConnected. Note, re-using existence of `renderRoot` here
    // (which is set in connectedCallback) to avoid the need to track a
    // first connected state.

    if (this.renderRoot !== undefined && this.isConnected) {
      (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */


  removeController(controller) {
    var _a; // Note, if the indexOf is -1, the >>> will flip the sign which makes the
    // splice do nothing.


    (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */


  __saveInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    this.constructor.elementProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        this.__instanceProperties.set(p, this[p]);

        delete this[p];
      }
    });
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */


  createRenderRoot() {
    var _a;

    const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
    (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */


  connectedCallback() {
    var _a; // create renderRoot before first update.


    if (this.renderRoot === undefined) {
      this.renderRoot = this.createRenderRoot();
    }

    this.enableUpdating(true);
    (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach(c => {
      var _a;

      return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c);
    });
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */


  enableUpdating(_requestedUpdate) {}
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */


  disconnectedCallback() {
    var _a;

    (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach(c => {
      var _a;

      return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c);
    });
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */


  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }

  __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    var _a, _b;

    const attr = this.constructor.__attributeNameForProperty(name, options);

    if (attr !== undefined && options.reflect === true) {
      const toAttribute = (_b = (_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !== null && _b !== void 0 ? _b : defaultConverter.toAttribute;
      const attrValue = toAttribute(value, options.type);

      if (DEV_MODE && this.constructor.enabledWarnings.indexOf('migration') >= 0 && attrValue === undefined) {
        issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` + `undefined on element ${this.localName}. The attribute will be ` + `removed, but in the previous version of \`ReactiveElement\`, ` + `the attribute would not have changed.`);
      } // Track if the property is being reflected to avoid
      // setting the property again via `attributeChangedCallback`. Note:
      // 1. this takes advantage of the fact that the callback is synchronous.
      // 2. will behave incorrectly if multiple attributes are in the reaction
      // stack at time of calling. However, since we process attributes
      // in `update` this should not be possible (or an extreme corner case
      // that we'd like to discover).
      // mark state reflecting


      this.__reflectingProperty = name;

      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      } // mark state not reflecting


      this.__reflectingProperty = null;
    }
  }
  /** @internal */


  _$attributeToProperty(name, value) {
    var _a, _b;

    const ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
    // the type; it has issues with tracking types through statics

    const propName = ctor.__attributeToPropertyMap.get(name); // Use tracking info to avoid reflecting a property value to an attribute
    // if it was just set because the attribute changed.


    if (propName !== undefined && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = options.converter;
      const fromAttribute = (_b = (_a = converter === null || converter === void 0 ? void 0 : converter.fromAttribute) !== null && _a !== void 0 ? _a : typeof converter === 'function' ? converter : null) !== null && _b !== void 0 ? _b : defaultConverter.fromAttribute; // mark state reflecting

      this.__reflectingProperty = propName; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this[propName] = fromAttribute(value, options.type); // mark state not reflecting

      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */


  requestUpdate(name, oldValue, options) {
    let shouldRequestUpdate = true; // If we have a property key, perform property update steps.

    if (name !== undefined) {
      options = options || this.constructor.getPropertyOptions(name);
      const hasChanged = options.hasChanged || notEqual;

      if (hasChanged(this[name], oldValue)) {
        if (!this._$changedProperties.has(name)) {
          this._$changedProperties.set(name, oldValue);
        } // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `_reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.


        if (options.reflect === true && this.__reflectingProperty !== name) {
          if (this.__reflectingProperties === undefined) {
            this.__reflectingProperties = new Map();
          }

          this.__reflectingProperties.set(name, options);
        }
      } else {
        // Abort the request if the property should not be considered changed.
        shouldRequestUpdate = false;
      }
    }

    if (!this.isUpdatePending && shouldRequestUpdate) {
      this.__updatePromise = this.__enqueueUpdate();
    } // Note, since this no longer returns a promise, in dev mode we return a
    // thenable which warns if it's called.


    return DEV_MODE ? requestUpdateThenable(this.localName) : undefined;
  }
  /**
   * Sets up the element to asynchronously update.
   */


  async __enqueueUpdate() {
    this.isUpdatePending = true;

    try {
      // Ensure any previous update has resolved before updating.
      // This `await` also ensures that property changes are batched.
      await this.__updatePromise;
    } catch (e) {
      // Refire any previous errors async so they do not disrupt the update
      // cycle. Errors are refired so developers have a chance to observe
      // them, and this can be done by implementing
      // `window.onunhandledrejection`.
      Promise.reject(e);
    }

    const result = this.scheduleUpdate(); // If `scheduleUpdate` returns a Promise, we await it. This is done to
    // enable coordinating updates with a scheduler. Note, the result is
    // checked to avoid delaying an additional microtask unless we need to.

    if (result != null) {
      await result;
    }

    return !this.isUpdatePending;
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */


  scheduleUpdate() {
    return this.performUpdate();
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * Note: To ensure `performUpdate()` synchronously completes a pending update,
   * it should not be overridden. In LitElement 2.x it was suggested to override
   * `performUpdate()` to also customizing update scheduling. Instead, you should now
   * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
   * scheduling updates via `performUpdate()` continues to work, but will make
   * also calling `performUpdate()` to synchronously process updates difficult.
   *
   * @category updates
   */


  performUpdate() {
    var _a, _b; // Abort any update if one is not pending when this is called.
    // This can happen if `performUpdate` is called early to "flush"
    // the update.


    if (!this.isUpdatePending) {
      return;
    }

    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: 'update'
    }); // create renderRoot before first update.

    if (!this.hasUpdated) {
      // Produce warning if any class properties are shadowed by class fields
      if (DEV_MODE) {
        const shadowedProperties = [];
        (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach(p => {
          var _a;

          if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
            shadowedProperties.push(p);
          }
        });

        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not ` + `trigger updates as expected because they are set using class ` + `fields: ${shadowedProperties.join(', ')}. ` + `Native class fields and some compiled output will overwrite ` + `accessors used for detecting changes. See ` + `https://lit.dev/msg/class-field-shadowing ` + `for more information.`);
        }
      }
    } // Mixin instance properties once, if they exist.


    if (this.__instanceProperties) {
      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.__instanceProperties.forEach((v, p) => this[p] = v);

      this.__instanceProperties = undefined;
    }

    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;

    try {
      shouldUpdate = this.shouldUpdate(changedProperties);

      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach(c => {
          var _a;

          return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c);
        });
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      // Prevent `firstUpdated` and `updated` from running when there's an
      // update exception.
      shouldUpdate = false; // Ensure element can accept additional updates after an exception.

      this.__markUpdated();

      throw e;
    } // The update is no longer considered pending and further updates are now allowed.


    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */


  willUpdate(_changedProperties) {} // Note, this is an override point for polyfill-support.
  // @internal


  _$didUpdate(changedProperties) {
    var _a;

    (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach(c => {
      var _a;

      return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c);
    });

    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }

    this.updated(changedProperties);

    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
      issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` + `(generally because a property was set) ` + `after an update completed, causing a new update to be scheduled. ` + `This is inefficient and should be avoided unless the next update ` + `can only be scheduled as a side effect of the previous update.`);
    }
  }

  __markUpdated() {
    this._$changedProperties = new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */


  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */


  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */


  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */


  update(_changedProperties) {
    if (this.__reflectingProperties !== undefined) {
      // Use forEach so this works even if for/of loops are compiled to for
      // loops expecting arrays
      this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));

      this.__reflectingProperties = undefined;
    }

    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */


  updated(_changedProperties) {}
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */


  firstUpdated(_changedProperties) {}

}
_d = finalized;
/**
 * Marks class as having finished creating properties.
 */

ReactiveElement[_d] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */

ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */

ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */

ReactiveElement.shadowRootOptions = {
  mode: 'open'
}; // Apply polyfills if available

polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({
  ReactiveElement
}); // Dev mode warnings...

if (DEV_MODE) {
  // Default warning set.
  ReactiveElement.enabledWarnings = ['change-in-update'];

  const ensureOwnWarnings = function (ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };

  ReactiveElement.enableWarning = function (warning) {
    ensureOwnWarnings(this);

    if (this.enabledWarnings.indexOf(warning) < 0) {
      this.enabledWarnings.push(warning);
    }
  };

  ReactiveElement.disableWarning = function (warning) {
    ensureOwnWarnings(this);
    const i = this.enabledWarnings.indexOf(warning);

    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
} // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.


((_c = globalThis.reactiveElementVersions) !== null && _c !== void 0 ? _c : globalThis.reactiveElementVersions = []).push('1.3.3');

if (DEV_MODE && globalThis.reactiveElementVersions.length > 1) {
  issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
}

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult; },
/* harmony export */   "ReactiveElement": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement; },
/* harmony export */   "adoptStyles": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles; },
/* harmony export */   "css": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css; },
/* harmony export */   "defaultConverter": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter; },
/* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle; },
/* harmony export */   "notEqual": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual; },
/* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets; },
/* harmony export */   "unsafeCSS": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS; },
/* harmony export */   "_$LH": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH; },
/* harmony export */   "html": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html; },
/* harmony export */   "noChange": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange; },
/* harmony export */   "nothing": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing; },
/* harmony export */   "render": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render; },
/* harmony export */   "svg": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg; },
/* harmony export */   "UpdatingElement": function() { return /* binding */ UpdatingElement; },
/* harmony export */   "LitElement": function() { return /* binding */ LitElement; },
/* harmony export */   "_$LE": function() { return /* binding */ _$LE; }
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */





 // For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.

const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;

if (DEV_MODE) {
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  const issuedWarnings = (_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : globalThis.litIssuedWarnings = new Set(); // Issue a warning, if we haven't already.

  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;

    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */


class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
  constructor() {
    super(...arguments);
    /**
     * @category rendering
     */

    this.renderOptions = {
      host: this
    };
    this.__childPart = undefined;
  }
  /**
   * @category rendering
   */


  createRenderRoot() {
    var _a;

    var _b;

    const renderRoot = super.createRenderRoot(); // When adoptedStyleSheets are shimmed, they are inserted into the
    // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
    // any styles in Lit content render before adoptedStyleSheets. This is
    // important so that adoptedStyleSheets have precedence over styles in
    // the shadowRoot.

    (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : _b.renderBefore = renderRoot.firstChild;
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */


  update(changedProperties) {
    // Setting properties in `render` should not trigger an update. Since
    // updates are allowed after super.update, it's important to call `render`
    // before that.
    const value = this.render();

    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }

    super.update(changedProperties);
    this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */


  connectedCallback() {
    var _a;

    super.connectedCallback();
    (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */


  disconnectedCallback() {
    var _a;

    super.disconnectedCallback();
    (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */


  render() {
    return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
  }

}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */

LitElement['finalized'] = true; // This property needs to remain unminified.

LitElement['_$litElement$'] = true; // Install hydration if available

(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, {
  LitElement
}); // Apply polyfills if available

const polyfillSupport = DEV_MODE ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({
  LitElement
}); // DEV mode warnings

if (DEV_MODE) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  // Note, for compatibility with closure compilation, this access
  // needs to be as a string property index.
  LitElement['finalize'] = function () {
    const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);

    if (!finalized) {
      return false;
    }

    const warnRemovedOrRenamed = (obj, name, renamed = false) => {
      if (obj.hasOwnProperty(name)) {
        const ctorName = (typeof obj === 'function' ? obj : obj.constructor).name;
        issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` + `has been ${renamed ? 'renamed' : 'removed'} ` + `in this version of LitElement.`);
      }
    };

    warnRemovedOrRenamed(this, 'render');
    warnRemovedOrRenamed(this, 'getStyles', true);
    warnRemovedOrRenamed(this.prototype, 'adoptStyles');
    return true;
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */


const _$LE = {
  _$attributeToProperty: (el, name, value) => {
    // eslint-disable-next-line
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: el => el._$changedProperties
}; // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.

((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : globalThis.litElementVersions = []).push('3.2.1');

if (DEV_MODE && globalThis.litElementVersions.length > 1) {
  issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
}

/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPrimitive": function() { return /* binding */ isPrimitive; },
/* harmony export */   "TemplateResultType": function() { return /* binding */ TemplateResultType; },
/* harmony export */   "isTemplateResult": function() { return /* binding */ isTemplateResult; },
/* harmony export */   "isDirectiveResult": function() { return /* binding */ isDirectiveResult; },
/* harmony export */   "getDirectiveClass": function() { return /* binding */ getDirectiveClass; },
/* harmony export */   "isSingleExpression": function() { return /* binding */ isSingleExpression; },
/* harmony export */   "insertPart": function() { return /* binding */ insertPart; },
/* harmony export */   "setChildPartValue": function() { return /* binding */ setChildPartValue; },
/* harmony export */   "setCommittedValue": function() { return /* binding */ setCommittedValue; },
/* harmony export */   "getCommittedValue": function() { return /* binding */ getCommittedValue; },
/* harmony export */   "removePart": function() { return /* binding */ removePart; },
/* harmony export */   "clearPart": function() { return /* binding */ clearPart; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;


const {
  _ChildPart: ChildPart
} = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : node => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */

const isPrimitive = value => value === null || typeof value != 'object' && typeof value != 'function';
const TemplateResultType = {
  HTML: 1,
  SVG: 2
};
/**
 * Tests if a value is a TemplateResult.
 */

const isTemplateResult = (value, type) => type === undefined ? // This property needs to remain unminified.
(value === null || value === void 0 ? void 0 : value['_$litType$']) !== undefined : (value === null || value === void 0 ? void 0 : value['_$litType$']) === type;
/**
 * Tests if a value is a DirectiveResult.
 */

const isDirectiveResult = value => // This property needs to remain unminified.
(value === null || value === void 0 ? void 0 : value['_$litDirective$']) !== undefined;
/**
 * Retrieves the Directive class for a DirectiveResult
 */

const getDirectiveClass = value => // This property needs to remain unminified.
value === null || value === void 0 ? void 0 : value['_$litDirective$'];
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */

const isSingleExpression = part => part.strings === undefined;

const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */


const insertPart = (containerPart, refPart, part) => {
  var _a;

  const container = wrap(containerPart._$startNode).parentNode;
  const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;

  if (part === undefined) {
    const startNode = wrap(container).insertBefore(createMarker(), refNode);
    const endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    const endNode = wrap(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;

    if (parentChanged) {
      (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart); // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here

      part._$parent = containerPart; // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified

      let newConnectionState;

      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }

    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;

      while (start !== endNode) {
        const n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }

  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */

const setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);

  return part;
}; // A sentinal value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.

const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */

const setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being commited.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */

const getCommittedValue = part => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */

const removePart = part => {
  var _a;

  (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
  let start = part._$startNode;
  const end = wrap(part._$endNode).nextSibling;

  while (start !== end) {
    const n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
const clearPart = part => {
  part._$clear();
};

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartType": function() { return /* binding */ PartType; },
/* harmony export */   "directive": function() { return /* binding */ directive; },
/* harmony export */   "Directive": function() { return /* binding */ Directive; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */

const directive = c => (...values) => ({
  // This property needs to remain unminified.
  ['_$litDirective$']: c,
  values
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */

class Directive {
  constructor(_partInfo) {} // See comment in Disconnectable interface for why this is a getter


  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */


  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */


  _$resolve(part, props) {
    return this.update(part, props);
  }

  update(_part, props) {
    return this.render(...props);
  }

}

/***/ }),

/***/ "./node_modules/lit-html/development/directives/if-defined.js":
/*!********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": function() { return /* binding */ ifDefined; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = value => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;

/***/ }),

/***/ "./node_modules/lit-html/development/directives/live.js":
/*!**************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/live.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "live": function() { return /* binding */ live; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */




class LiveDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
  constructor(partInfo) {
    super(partInfo);

    if (!(partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.PROPERTY || partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE || partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.BOOLEAN_ATTRIBUTE)) {
      throw new Error('The `live` directive is not allowed on child or event bindings');
    }

    if (!(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isSingleExpression)(partInfo)) {
      throw new Error('`live` bindings can only contain a single expression');
    }
  }

  render(value) {
    return value;
  }

  update(part, [value]) {
    if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange || value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing) {
      return value;
    }

    const element = part.element;
    const name = part.name;

    if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.PROPERTY) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (value === element[name]) {
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
      }
    } else if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.BOOLEAN_ATTRIBUTE) {
      if (!!value === element.hasAttribute(name)) {
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
      }
    } else if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE) {
      if (element.getAttribute(name) === String(value)) {
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
      }
    } // Resets the part's value, causing its dirty-check to fail so that it
    // always sets the value.


    (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setCommittedValue)(part);
    return value;
  }

}
/**
 * Checks binding values against live DOM values, instead of previously bound
 * values, when determining whether to update the value.
 *
 * This is useful for cases where the DOM value may change from outside of
 * lit-html, such as with a binding to an `<input>` element's `value` property,
 * a content editable elements text, or to a custom element that changes it's
 * own properties or attributes.
 *
 * In these cases if the DOM value changes, but the value set through lit-html
 * bindings hasn't, lit-html won't know to update the DOM value and will leave
 * it alone. If this is not what you want--if you want to overwrite the DOM
 * value with the bound value no matter what--use the `live()` directive:
 *
 * ```js
 * html`<input .value=${live(x)}>`
 * ```
 *
 * `live()` performs a strict equality check against the live DOM value, and if
 * the new value is equal to the live value, does nothing. This means that
 * `live()` should not be used when the binding will cause a type conversion. If
 * you use `live()` with an attribute binding, make sure that only strings are
 * passed in, or the binding will update every render.
 */


const live = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(LiveDirective);

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "svg": function() { return /* binding */ svg; },
/* harmony export */   "noChange": function() { return /* binding */ noChange; },
/* harmony export */   "nothing": function() { return /* binding */ nothing; },
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "_$LH": function() { return /* binding */ _$LH; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;

const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */

const debugLogEvent = DEV_MODE ? event => {
  const shouldEmit = window.emitLitDebugLogEvents;

  if (!shouldEmit) {
    return;
  }

  window.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined; // Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.

let debugLogRenderId = 0;
let issueWarning;

if (DEV_MODE) {
  (_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : globalThis.litIssuedWarnings = new Set(); // Issue a warning, if we haven't already.

  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : '';

    if (!globalThis.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };

  issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}

const wrap = ENABLE_SHADYDOM_NOPATCH && ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && ((_c = window.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true ? window.ShadyDOM.wrap : node => node;
const trustedTypes = globalThis.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */

const policy = trustedTypes ? trustedTypes.createPolicy('lit-html', {
  createHTML: s => s
}) : undefined;

const identityFunction = value => value;

const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */


const setSanitizer = newSanitizer => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }

  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy.` + ` setSanitizeDOMValueFactory should be called at most once.`);
  }

  sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */


const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};

const createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
}; // Added to an attribute name to mark the attribute as bound so we can find
// it easily.


const boundAttributeSuffix = '$lit$'; // This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.

const marker = `lit$${String(Math.random()).slice(9)}$`; // String used to tell if a comment is a marker comment

const markerMatch = '?' + marker; // Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.

const nodeMarker = `<${markerMatch}>`;
const d = document; // Creates a dynamic marker. We never have to search for these in the DOM.

const createMarker = (v = '') => d.createComment(v);

const isPrimitive = value => value === null || typeof value != 'object' && typeof value != 'function';

const isArray = Array.isArray;

const isIterable = value => isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';

const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`; // These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.

/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */

const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */

const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */

const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */

const HTML_RESULT = 1;
const SVG_RESULT = 2; // TemplatePart types
// IMPORTANT: these must match the values in PartType

const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */

const tag = type => (strings, ...values) => {
  // Warn against templates octal escape sequences
  // We do this here rather than in render so that the warning is closer to the
  // template definition.
  if (DEV_MODE && strings.some(s => s === undefined)) {
    console.warn('Some template strings are undefined.\n' + 'This is probably caused by illegal octal escape sequences.');
  }

  return {
    // This property needs to remain unminified.
    ['_$litType$']: type,
    strings,
    values
  };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */


const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */

const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */

const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */

const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */

const templateCache = new WeakMap();
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */

const render = (value, container, options) => {
  var _a, _b;

  if (DEV_MODE && container == null) {
    // Give a clearer error message than
    //     Uncaught TypeError: Cannot read properties of null (reading
    //     '_$litPart$')
    // which reads like an internal Lit error.
    throw new TypeError(`The container to render into may not be ${container}`);
  }

  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container; // This property needs to remain unminified.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  let part = partOwnerNode['_$litPart$'];
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: 'begin render',
    id: renderId,
    value,
    container,
    options,
    part
  });

  if (part === undefined) {
    const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null; // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
  }

  part._$setValue(value);

  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: 'end render',
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};

if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;

  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

const walker = d.createTreeWalker(d, 129
/* NodeFilter.SHOW_{ELEMENT|COMMENT} */
, null, false);
let sanitizerFactoryInternal = noopSanitizer;
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment comment markers denoting the
 * `ChildPart`s and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */

const getTemplateHtml = (strings, type) => {
  // Insert makers into the template HTML to represent the position of
  // bindings. The following code scans the template strings to determine the
  // syntactic position of the bindings. They can be in text position, where
  // we insert an HTML comment, attribute value position, where we insert a
  // sentinel string and re-write the attribute name, or inside a tag where
  // we insert the sentinel string.
  const l = strings.length - 1; // Stores the case-sensitive bound attribute names in the order of their
  // parts. ElementParts are also reflected in this array as undefined
  // rather than a string, to disambiguate from attribute bindings.

  const attrNames = [];
  let html = type === SVG_RESULT ? '<svg>' : ''; // When we're inside a raw text tag (not it's text content), the regex
  // will still be tagRegex so we can find attributes, but will switch to
  // this regex when the tag ends.

  let rawTextEndRegex; // The current parsing state, represented as a reference to one of the
  // regexes

  let regex = textEndRegex;

  for (let i = 0; i < l; i++) {
    const s = strings[i]; // The index of the end of the last attribute name. When this is
    // positive at end of a string, it means we're in an attribute value
    // position and need to rewrite the attribute name.
    // We also use a special value of -2 to indicate that we encountered
    // the end of a string in attribute name position.

    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match; // The conditions in this loop handle the current parse state, and the
    // assignments to the `regex` variable are the state transitions.

    while (lastIndex < s.length) {
      // Make sure we start searching from where we previously left off
      regex.lastIndex = lastIndex;
      match = regex.exec(s);

      if (match === null) {
        break;
      }

      lastIndex = regex.lastIndex;

      if (regex === textEndRegex) {
        if (match[COMMENT_START] === '!--') {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== undefined) {
          // We started a weird comment, like </{
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== undefined) {
          if (rawTextElement.test(match[TAG_NAME])) {
            // Record if we encounter a raw-text element. We'll switch to
            // this regex at the end of the tag.
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
          }

          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
          if (DEV_MODE) {
            throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' + 'See https://lit.dev/docs/templates/expressions/#static-expressions');
          }

          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === '>') {
          // End of a tag. If we had started a raw-text element, use that
          // regex
          regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex; // We may be ending an unquoted attribute value, so make sure we
          // clear any pending attrNameEndIndex

          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === undefined) {
          // Attribute name position
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        // Not one of the five state regexes, so it must be the dynamically
        // created raw text regex and we're at the close of that element.
        regex = tagEndRegex;
        rawTextEndRegex = undefined;
      }
    }

    if (DEV_MODE) {
      // If we have a attrNameEndIndex, which indicates that we should
      // rewrite the attribute name, assert that we're in a valid attribute
      // position - either in a tag, or a quoted attribute value.
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
    } // We have four cases:
    //  1. We're in text position, and not in a raw text element
    //     (regex === textEndRegex): insert a comment marker.
    //  2. We have a non-negative attrNameEndIndex which means we need to
    //     rewrite the attribute name to add a bound attribute suffix.
    //  3. We're at the non-first binding in a multi-binding attribute, use a
    //     plain marker.
    //  4. We're somewhere else inside the tag. If we're in attribute name
    //     position (attrNameEndIndex === -2), add a sequential suffix to
    //     generate a unique attribute name.
    // Detect a binding next to self-closing tag end and insert a space to
    // separate the marker from the tag end:


    const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
    html += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
  }

  const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : ''); // A security check to prevent spoofing of Lit template results.
  // In the future, we may be able to replace this with Array.isTemplateObject,
  // though we might need to make that check inside of the html and svg
  // functions, because precompiled templates don't come in as
  // TemplateStringArray objects.

  if (!Array.isArray(strings) || !strings.hasOwnProperty('raw')) {
    let message = 'invalid template strings array';

    if (DEV_MODE) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.

          If you're using the html or svg tagged template functions normally
          and and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, '\n');
    }

    throw new Error(message);
  } // Returned as an array for terseness


  return [policy !== undefined ? policy.createHTML(htmlResult) : htmlResult, attrNames];
};

class Template {
  constructor( // This property needs to remain unminified.
  {
    strings,
    ['_$litType$']: type
  }, options) {
    /** @internal */
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts; // Create template element

    const [html, attrNames] = getTemplateHtml(strings, type);
    this.el = Template.createElement(html, options);
    walker.currentNode = this.el.content; // Reparent SVG nodes into template root

    if (type === SVG_RESULT) {
      const content = this.el.content;
      const svgElement = content.firstChild;
      svgElement.remove();
      content.append(...svgElement.childNodes);
    } // Walk the template to find binding markers and create TemplateParts


    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          const tag = node.localName; // Warn if `textarea` includes an expression and throw if `template`
          // does since these are not supported. We do this by checking
          // innerHTML for anything that looks like a marker. This catches
          // cases like bindings in textarea there markers turn into text nodes.

          if (/^(?:textarea|template)$/i.test(tag) && node.innerHTML.includes(marker)) {
            const m = `Expressions are not supported inside \`${tag}\` ` + `elements. See https://lit.dev/msg/expression-in-${tag} for more ` + `information.`;

            if (tag === 'template') {
              throw new Error(m);
            } else issueWarning('', m);
          }
        } // TODO (justinfagnani): for attempted dynamic tag names, we don't
        // increment the bindingIndex, and it'll be off by 1 in the element
        // and off by two after it.


        if (node.hasAttributes()) {
          // We defer removing bound attributes because on IE we might not be
          // iterating attributes in their template order, and would sometimes
          // remove an attribute that we still need to create a part for.
          const attrsToRemove = [];

          for (const name of node.getAttributeNames()) {
            // `name` is the name of the attribute we're iterating over, but not
            // _neccessarily_ the name of the attribute we will create a part
            // for. They can be different in browsers that don't iterate on
            // attributes in source order. In that case the attrNames array
            // contains the attribute name we'll process next. We only need the
            // attribute name here to know if we should process a bound attribute
            // on this element.
            if (name.endsWith(boundAttributeSuffix) || name.startsWith(marker)) {
              const realName = attrNames[attrNameIndex++];
              attrsToRemove.push(name);

              if (realName !== undefined) {
                // Lowercase for case-sensitive SVG attributes like viewBox
                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                const statics = value.split(marker);
                const m = /([.?@])?(.*)/.exec(realName);
                parts.push({
                  type: ATTRIBUTE_PART,
                  index: nodeIndex,
                  name: m[2],
                  strings: statics,
                  ctor: m[1] === '.' ? PropertyPart : m[1] === '?' ? BooleanAttributePart : m[1] === '@' ? EventPart : AttributePart
                });
              } else {
                parts.push({
                  type: ELEMENT_PART,
                  index: nodeIndex
                });
              }
            }
          }

          for (const name of attrsToRemove) {
            node.removeAttribute(name);
          }
        } // TODO (justinfagnani): benchmark the regex against testing for each
        // of the 3 raw text element names.


        if (rawTextElement.test(node.tagName)) {
          // For raw text elements we need to split the text content on
          // markers, create a Text node for each segment, and create
          // a TemplatePart for each marker.
          const strings = node.textContent.split(marker);
          const lastIndex = strings.length - 1;

          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : ''; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts
            // We can't use empty text nodes as markers because they're
            // normalized when cloning in IE (could simplify when
            // IE is no longer supported)

            for (let i = 0; i < lastIndex; i++) {
              node.append(strings[i], createMarker()); // Walk past the marker node we just added

              walker.nextNode();
              parts.push({
                type: CHILD_PART,
                index: ++nodeIndex
              });
            } // Note because this marker is added after the walker's current
            // node, it will be walked to in the outer loop (and ignored), so
            // we don't need to adjust nodeIndex here


            node.append(strings[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;

        if (data === markerMatch) {
          parts.push({
            type: CHILD_PART,
            index: nodeIndex
          });
        } else {
          let i = -1;

          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            parts.push({
              type: COMMENT_PART,
              index: nodeIndex
            }); // Move to the end of the match

            i += marker.length - 1;
          }
        }
      }

      nodeIndex++;
    }

    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: 'template prep',
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  } // Overridden via `litHtmlPolyfillSupport` to provide platform support.

  /** @nocollapse */


  static createElement(html, _options) {
    const el = d.createElement('template');
    el.innerHTML = html;
    return el;
  }

}

function resolveDirective(part, value, parent = part, attributeIndex) {
  var _a, _b, _c;

  var _d; // Bail early if the value is explicitly noChange. Note, this means any
  // nested directive is still attached and is not run.


  if (value === noChange) {
    return value;
  }

  let currentDirective = attributeIndex !== undefined ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? undefined : // This property needs to remain unminified.
  value['_$litDirective$'];

  if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
    // This property needs to remain unminified.
    (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);

    if (nextDirectiveConstructor === undefined) {
      currentDirective = undefined;
    } else {
      currentDirective = new nextDirectiveConstructor(part);

      currentDirective._$initialize(part, parent, attributeIndex);
    }

    if (attributeIndex !== undefined) {
      ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : _d.__directives = [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }

  if (currentDirective !== undefined) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }

  return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */


class TemplateInstance {
  constructor(template, parent) {
    /** @internal */
    this._parts = [];
    /** @internal */

    this._$disconnectableChildren = undefined;
    this._$template = template;
    this._$parent = parent;
  } // Called by ChildPart parentNode getter


  get parentNode() {
    return this._$parent.parentNode;
  } // See comment in Disconnectable interface for why this is a getter


  get _$isConnected() {
    return this._$parent._$isConnected;
  } // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.


  _clone(options) {
    var _a;

    const {
      el: {
        content
      },
      parts: parts
    } = this._$template;
    const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];

    while (templatePart !== undefined) {
      if (nodeIndex === templatePart.index) {
        let part;

        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }

        this._parts.push(part);

        templatePart = parts[++partIndex];
      }

      if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }

    return fragment;
  }

  _update(values) {
    let i = 0;

    for (const part of this._parts) {
      if (part !== undefined) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: 'set part',
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });

        if (part.strings !== undefined) {
          part._$setValue(values, part, i); // The number of values the part consumes is part.strings.length - 1
          // since values are in between template spans. We increment i by 1
          // later in the loop, so increment it by part.strings.length - 2 here


          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }

      i++;
    }
  }

}

class ChildPart {
  constructor(startNode, endNode, parent, options) {
    var _a;

    this.type = CHILD_PART;
    this._$committedValue = nothing; // The following fields will be patched onto ChildParts when required by
    // AsyncDirective

    /** @internal */

    this._$disconnectableChildren = undefined;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options; // Note __isConnected is only ever accessed on RootParts (i.e. when there is
    // no _$parent); the value on a non-root-part is "don't care", but checking
    // for parent would be more code

    this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;

    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      // Explicitly initialize for consistent class shape.
      this._textSanitizer = undefined;
    }
  } // See comment in Disconnectable interface for why this is a getter


  get _$isConnected() {
    var _a, _b; // ChildParts that are not at the root should always be created with a
    // parent; only RootChildNode's won't, so they return the local isConnected
    // state


    return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */


  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;

    if (parent !== undefined && parentNode.nodeType === 11
    /* Node.DOCUMENT_FRAGMENT */
    ) {
      // If the parentNode is a DocumentFragment, it may be because the DOM is
      // still in the cloned fragment during initial render; if so, get the real
      // parentNode the part will be committed into by asking the parent.
      parentNode = parent.parentNode;
    }

    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */


  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */


  get endNode() {
    return this._$endNode;
  }

  _$setValue(value, directiveParent = this) {
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }

    value = resolveDirective(this, value, directiveParent);

    if (isPrimitive(value)) {
      // Non-rendering child values. It's important that these do not render
      // empty text nodes to avoid issues with preventing default <slot>
      // fallback content.
      if (value === nothing || value == null || value === '') {
        if (this._$committedValue !== nothing) {
          debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit nothing to child',
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });

          this._$clear();
        }

        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      } // This property needs to remain unminified.

    } else if (value['_$litType$'] !== undefined) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== undefined) {
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      // Fallback, will render the string representation
      this._commitText(value);
    }
  }

  _insert(node, ref = this._$endNode) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
  }

  _commitNode(value) {
    var _a;

    if (this._$committedValue !== value) {
      this._$clear();

      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;

        if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
          let message = 'Forbidden';

          if (DEV_MODE) {
            if (parentNodeName === 'STYLE') {
              message = `Lit does not support binding inside style nodes. ` + `This is a security risk, as style injection attacks can ` + `exfiltrate data and spoof UIs. ` + `Consider instead using css\`...\` literals ` + `to compose styles, and make do dynamic styling with ` + `css custom properties, ::parts, <slot>s, ` + `and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. ` + `This is a security risk, as it could allow arbitrary ` + `code execution.`;
            }
          }

          throw new Error(message);
        }
      }

      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'commit node',
        start: this._$startNode,
        parent: this._$parent,
        value: value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }

  _commitText(value) {
    // If the committed value is a primitive it means we called _commitText on
    // the previous render, and we know that this._$startNode.nextSibling is a
    // Text node. We can now just replace the text content (.data) of the node.
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;

      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(node, 'data', 'property');
        }

        value = this._textSanitizer(value);
      }

      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'commit text',
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = document.createTextNode('');

        this._commitNode(textNode); // When setting text content, for security purposes it matters a lot
        // what the parent is. For example, <style> and <script> need to be
        // handled with care, while <span> does not. So first we need to put a
        // text node into the document, then we can sanitize its content.


        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(textNode, 'data', 'property');
        }

        value = this._textSanitizer(value);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: 'commit text',
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));

        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: 'commit text',
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }

    this._$committedValue = value;
  }

  _commitTemplateResult(result) {
    var _a; // This property needs to remain unminified.


    const {
      values,
      ['_$litType$']: type
    } = result; // If $litType$ is a number, result is a plain TemplateResult and we get
    // the template from the template cache. If not, result is a
    // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
    // to create the <template> element the first time we see it.

    const template = typeof type === 'number' ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(type.h, this.options)), type);

    if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'template updating',
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._parts,
        options: this.options,
        values
      });

      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);

      const fragment = instance._clone(this.options);

      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'template instantiated',
        template,
        instance,
        parts: instance._parts,
        options: this.options,
        fragment,
        values
      });

      instance._update(values);

      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'template instantiated and updated',
        template,
        instance,
        parts: instance._parts,
        options: this.options,
        fragment,
        values
      });

      this._commitNode(fragment);

      this._$committedValue = instance;
    }
  } // Overridden via `litHtmlPolyfillSupport` to provide platform support.

  /** @internal */


  _$getTemplate(result) {
    let template = templateCache.get(result.strings);

    if (template === undefined) {
      templateCache.set(result.strings, template = new Template(result));
    }

    return template;
  }

  _commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If value is an array, then the previous render was of an
    // iterable and value will contain the ChildParts from the previous
    // render. If value is not an array, clear this part and make a new
    // array for ChildParts.
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];

      this._$clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      if (partIndex === itemParts.length) {
        // If no existing part, create a new one
        // TODO (justinfagnani): test perf impact of always creating two parts
        // instead of sharing parts between nodes
        // https://github.com/lit/lit/issues/1266
        itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        // Reuse an existing part
        itemPart = itemParts[partIndex];
      }

      itemPart._$setValue(item);

      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // itemParts always have end nodes
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex); // Truncate the parts array so _value reflects the current state


      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */


  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    var _a;

    (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);

    while (start && start !== this._$endNode) {
      const n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this metod
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */


  setConnected(isConnected) {
    var _a;

    if (this._$parent === undefined) {
      this.__isConnected = isConnected;
      (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
    } else if (DEV_MODE) {
      throw new Error('part.setConnected() may only be called on a ' + 'RootPart returned from render().');
    }
  }

}

class AttributePart {
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    /** @internal */

    this._$committedValue = nothing;
    /** @internal */

    this._$disconnectableChildren = undefined;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;

    if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }

    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = undefined;
    }
  }

  get tagName() {
    return this.element.tagName;
  } // See comment in Disconnectable interface for why this is a getter


  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */


  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings; // Whether any of the values has changed, for dirty-checking

    let change = false;

    if (strings === undefined) {
      // Single-value binding case
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;

      if (change) {
        this._$committedValue = value;
      }
    } else {
      // Interpolation case
      const values = value;
      value = strings[0];
      let i, v;

      for (i = 0; i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);

        if (v === noChange) {
          // If the user-provided value is `noChange`, use the previous value
          v = this._$committedValue[i];
        }

        change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);

        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
        } // We always record each value, even if one is `nothing`, for future
        // change detection.


        this._$committedValue[i] = v;
      }
    }

    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */


  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === undefined) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
        }

        value = this._sanitizer(value !== null && value !== void 0 ? value : '');
      }

      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'commit attribute',
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value !== null && value !== void 0 ? value : '');
    }
  }

}

class PropertyPart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */


  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === undefined) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
      }

      value = this._sanitizer(value);
    }

    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: 'commit property',
      element: this.element,
      name: this.name,
      value,
      options: this.options
    }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.element[this.name] = value === nothing ? undefined : value;
  }

} // Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.


const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : '';

class BooleanAttributePart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */


  _commitValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: 'commit boolean attribute',
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });

    if (value && value !== nothing) {
      wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
    } else {
      wrap(this.element).removeAttribute(this.name);
    }
  }

}

class EventPart extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;

    if (DEV_MODE && this.strings !== undefined) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` + 'invalid content. Event listeners in templates must have exactly ' + 'one expression and no surrounding text.');
    }
  } // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex

  /** @internal */


  _$setValue(newListener, directiveParent = this) {
    var _a;

    newListener = (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;

    if (newListener === noChange) {
      return;
    }

    const oldListener = this._$committedValue; // If the new value is nothing or any options change we have to remove the
    // part as a listener.

    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive; // If the new value is not nothing and we removed the listener, we have
    // to add the part as a listener.

    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: 'commit event listener',
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }

    if (shouldAddListener) {
      // Beware: IE11 and Chrome 41 don't like using the listener as the
      // options object. Figure out how to deal w/ this in IE11 - maybe
      // patch addEventListener?
      this.element.addEventListener(this.name, this, newListener);
    }

    this._$committedValue = newListener;
  }

  handleEvent(event) {
    var _a, _b;

    if (typeof this._$committedValue === 'function') {
      this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }

}

class ElementPart {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    /** @internal */

    this._$disconnectableChildren = undefined;
    this._$parent = parent;
    this.options = options;
  } // See comment in Disconnectable interface for why this is a getter


  get _$isConnected() {
    return this._$parent._$isConnected;
  }

  _$setValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: 'commit to element binding',
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }

}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */


const _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in hydrate
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  // Used in tests and private-ssr-support
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
}; // Apply polyfills if available

const polyfillSupport = DEV_MODE ? window.litHtmlPolyfillSupportDevMode : window.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart); // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.

((_d = globalThis.litHtmlVersions) !== null && _d !== void 0 ? _d : globalThis.litHtmlVersions = []).push('2.2.6');

if (DEV_MODE && globalThis.litHtmlVersions.length > 1) {
  issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` + `Loading multiple versions is not recommended.`);
}

/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": function() { return /* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");


/***/ }),

/***/ "./node_modules/lit/directives/live.js":
/*!*********************************************!*\
  !*** ./node_modules/lit/directives/live.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "live": function() { return /* reexport safe */ lit_html_directives_live_js__WEBPACK_IMPORTED_MODULE_0__.live; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_live_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/live.js */ "./node_modules/lit-html/development/directives/live.js");


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult; },
/* harmony export */   "LitElement": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement; },
/* harmony export */   "ReactiveElement": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement; },
/* harmony export */   "UpdatingElement": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement; },
/* harmony export */   "_$LE": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE; },
/* harmony export */   "_$LH": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH; },
/* harmony export */   "adoptStyles": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles; },
/* harmony export */   "css": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css; },
/* harmony export */   "defaultConverter": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter; },
/* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle; },
/* harmony export */   "html": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html; },
/* harmony export */   "noChange": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange; },
/* harmony export */   "notEqual": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual; },
/* harmony export */   "nothing": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing; },
/* harmony export */   "render": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render; },
/* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets; },
/* harmony export */   "svg": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg; },
/* harmony export */   "unsafeCSS": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS; }
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./node_modules/regenerator-runtime/runtime.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=interactiveposts.js.map