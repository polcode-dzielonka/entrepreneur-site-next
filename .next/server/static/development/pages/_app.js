module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Ripples.js":
/*!**************************************!*\
  !*** ./components/Button/Ripples.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Button/Ripples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const Ripple = props => {
  const {
    children,
    styling
  } = props;
  const {
    0: boxStyle,
    1: setBoxStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(_objectSpread({
    position: "relative",
    display: "inline-flex",
    overflow: "hidden",
    width: "100%",
    marginBottom: "20px",
    marginTop: "20px"
  }, styling));
  const {
    0: rippleStyles,
    1: setRippleStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    rippleStyle: {
      position: "absolute",
      borderRadius: "50%",
      opacity: 0.5,
      width: 35,
      height: 35,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none"
    }
  });
  const {
    0: timer,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: size,
    1: setSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const {
      during
    } = props;

    if (timer) {
      setTimeout(() => {
        setRippleStyle({
          rippleStyle: _objectSpread({}, rippleStyles.rippleStyle, {
            opacity: 0,
            transform: `scale(${size / 9})`,
            transition: `all ${during}ms`
          })
        });
      }, 50);
      setTimer(false);
      setSize(0);
    }
  }, [timer]);

  const onClick = ev => {
    const {
      color,
      buttonClick
    } = props;
    ev.stopPropagation();
    const {
      pageX,
      pageY,
      currentTarget
    } = ev;
    const rect = currentTarget.getBoundingClientRect();
    const left = pageX - (rect.left + window.scrollX);
    const top = pageY - (rect.top + window.scrollY);
    const buttonSize = Math.max(rect.width, rect.height);
    setSize(buttonSize);
    setTimer(true);
    setRippleStyle({
      rippleStyle: _objectSpread({}, rippleStyles.rippleStyle, {
        left,
        top,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
        transition: "initial",
        backgroundColor: color
      })
    });
    if (buttonClick) buttonClick(ev);
  };

  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, props, {
    className: `react-ripples`,
    style: boxStyle,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), children, __jsx("s", {
    style: rippleStyles.rippleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }));
};

Ripple.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.Object,
  color: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.String,
  buttonClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.Func,
  during: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.Int,
  styling: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.Object
};
Ripple.defaultProps = {
  color: "rgba(0, 0, 0, .3)",
  buttonClick: () => {},
  during: 1200,
  styling: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ }),

/***/ "./components/FormValidation/Validation.js":
/*!*************************************************!*\
  !*** ./components/FormValidation/Validation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

const validateForm = (values, name, setErrors, errors) => {
  switch (name) {
    case "firstName":
      if (!values.firstName) {
        return setErrors(_objectSpread({}, errors, {
          firstName: "Please Enter Your First Name"
        }));
      } else if (values.firstName) {
        return setErrors(_objectSpread({}, errors, {
          firstName: ""
        }));
      }

      break;

    case "lastName":
      if (!values.lastName) {
        return setErrors(_objectSpread({}, errors, {
          lastName: "Please Enter Your Last Name"
        }));
      } else if (values.lastName) {
        return setErrors(_objectSpread({}, errors, {
          lastName: ""
        }));
      }

      break;

    case "email":
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        return setErrors(_objectSpread({}, errors, {
          email: "Please Enter A Valid Email Address"
        }));
      } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        return setErrors(_objectSpread({}, errors, {
          email: ""
        }));
      }

      break;

    case "subject":
      if (!values.subject) {
        return setErrors(_objectSpread({}, errors, {
          subject: "Please Enter A Subject"
        }));
      } else if (values.subject) {
        return setErrors(_objectSpread({}, errors, {
          subject: ""
        }));
      }

  }
};

/* harmony default export */ __webpack_exports__["default"] = (validateForm);

/***/ }),

/***/ "./components/Icons/crossIcon.js":
/*!***************************************!*\
  !*** ./components/Icons/crossIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Icons/crossIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const CrossIcon = ({
  onClick
}) => {
  const styles = {
    container: {
      height: "16px",
      width: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      margin: "0 auto",
      cursor: "pointer",
      padding: "16px"
    },
    line: {
      height: "2px",
      width: "20px",
      background: "white",
      margin: "0 auto",
      transition: "all 0.2s ease"
    },
    lineTop: {
      transform: "rotate(45deg)",
      transformOrigin: "top left",
      marginBottom: "5px"
    },
    lineMiddle: {
      opacity: 0,
      transform: "translateX(-16px)"
    },
    lineBottom: {
      transform: "translateX(-1px) rotate(-45deg)",
      transformOrigin: "top left",
      marginTop: "5px"
    }
  };
  return __jsx("div", {
    style: styles.container,
    onClick: onClick,
    className: "menu-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    style: _objectSpread({}, styles.line, {}, styles.lineTop),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("div", {
    style: _objectSpread({}, styles.line, {}, styles.lineMiddle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("div", {
    style: _objectSpread({}, styles.line, {}, styles.lineBottom),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }));
};

CrossIcon.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8__["PropTypes"].func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_8__["PropTypes"].Boolean
};
/* harmony default export */ __webpack_exports__["default"] = (CrossIcon);

/***/ }),

/***/ "./components/SignUpModal/signUpModal.js":
/*!***********************************************!*\
  !*** ./components/SignUpModal/signUpModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/baseCss */ "./theme/baseCss.js");
/* harmony import */ var _Button_Ripples__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Button/Ripples */ "./components/Button/Ripples.js");
/* harmony import */ var _utils_Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/Context */ "./utils/Context.js");
/* harmony import */ var _Icons_crossIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Icons/crossIcon */ "./components/Icons/crossIcon.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_emailSignUp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../graphql/emailSignUp */ "./graphql/emailSignUp.js");
/* harmony import */ var _data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../data/emailSignupData */ "./data/emailSignupData.js");
/* harmony import */ var _components_FormValidation_Validation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/FormValidation/Validation */ "./components/FormValidation/Validation.js");
/* harmony import */ var _successModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./successModal */ "./components/SignUpModal/successModal.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_20__);








var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/SignUpModal/signUpModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }












 //Set Cookie Expiration if not signed up (in minutes)

const cookieTime = 60;

const SignUpModal = () => {
  const {
    emailCookie,
    handleState
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_utils_Context__WEBPACK_IMPORTED_MODULE_13__["default"]);
  const {
    0: formData,
    1: setFormData
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(_data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"]);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(_data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__["ERROR_STATE"]);
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);
  const {
    0: successModal,
    1: setSuccessModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    if (top > 200 && count < 1) {
      setCount(count + 1);
      setShowModal(top > 200);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeEmailCookie = value => {
    //if clicked away and not signed up push cookie expiry to a couple of hours
    const expiryDate = new Date(new Date().getTime() + cookieTime * 60 * 1000);
    js_cookie__WEBPACK_IMPORTED_MODULE_20___default.a.set("wealth-cookie-email-signup", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(false), {
      expires: expiryDate
    });
    handleState({
      emailCookie: value
    });
  };

  const validateForm = e => {
    Object(_components_FormValidation_Validation__WEBPACK_IMPORTED_MODULE_18__["default"])(formData, e.target.name, setErrors, errors);
  };

  const handleChange = e => {
    setFormData(_objectSpread({}, formData, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (errors.badRequest) {
      setErrors(_objectSpread({}, errors, {
        badRequest: false
      }));
    }

    const submitForm = _objectSpread({}, formData, {
      id: formData.email,
      emailSignupSiteId: "24840fa4-16de-45be-8786-968b50f79904",
      popUp: true
    });

    try {
      const mutationData = {
        query: _graphql_emailSignUp__WEBPACK_IMPORTED_MODULE_16__["EMAIL_SIGN_UP"],
        operationName: "CreateEmailSignup",
        variables: {
          input: submitForm
        }
      };
      await axios__WEBPACK_IMPORTED_MODULE_15___default()({
        url: "https://35tlenbo4neavaaoewbrxlvkpq.appsync-api.eu-west-1.amazonaws.com/graphql",
        method: "POST",
        data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(mutationData),
        headers: {
          Accept: "application/json",
          "x-api-key": "da2-mzaxx5r755axpcfyderzhoafz4"
        }
      });
      const expiryDate = "365"; //Days

      js_cookie__WEBPACK_IMPORTED_MODULE_20___default.a.set("wealth-cookie-email-signup", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(false), {
        expires: Number(expiryDate)
      });
      setFormData(_data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"]);
      setSuccessModal(true);
      handleState({
        emailCookie: false
      });
      setErrors({
        ERROR_STATE: _data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__["ERROR_STATE"]
      });
    } catch (err) {
      console.log("Error with request", err);
      setFormData(_data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"]);
      setErrors(_objectSpread({}, errors, {
        badRequest: true
      }));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, emailCookie && showModal && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_Icons_crossIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: () => changeEmailCookie(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "logo-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/business_motivation.svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  })), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "header-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, "Keep Me Updated"), !errors.badRequest && __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "header-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Stay up to date with the most inspirational Business and Personal Development content on the internet."), errors.badRequest && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "header-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Uh Oh! Something went wrong - Please try again or Contact support", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("a", {
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "here."))))), __jsx("form", {
    onSubmit: handleSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, _data_emailSignupData__WEBPACK_IMPORTED_MODULE_17__["emailSignUp"].map((input, index) => {
    return __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: undefined
    }, __jsx("label", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, input.label), __jsx("input", {
      name: input.name,
      required: input.required,
      value: formData[input.name],
      type: input.type,
      placeholder: errors[input.name] ? errors[input.name] : input.placeholder,
      rows: input.rows,
      onChange: handleChange,
      onBlur: validateForm,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + ((errors[input.name] ? "error" : input.className) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }));
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "cookie-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, __jsx(_Button_Ripples__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].rippleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx("button", {
    onClick: changeEmailCookie,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, "Subscribe")), __jsx(_Button_Ripples__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].rippleColor,
    styling: {
      marginBottom: "0px",
      marginTop: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => changeEmailCookie(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "non-subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, "No Thanks I don't want expert knowledge of how to build wealth")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, "By clicking Submit, you are subscribing to receive newsletters from Derivative Media Ltd. Your data will be processed in accordance with our", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/cookies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, __jsx("a", {
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["195695831", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font]]]) + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, "Privacy and Cookie Policy.")))))))), __jsx(_successModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    successModal: successModal,
    setSuccessModal: setSuccessModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "195695831",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font],
    __self: undefined
  }, `.cookie-wrapper.__jsx-style-dynamic-selector{margin:0;}h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector,h3.__jsx-style-dynamic-selector{color:#fefefe;margin:0 auto;position:relative;text-align:center;width:100%;padding:0;margin:0;}.header-container.__jsx-style-dynamic-selector{padding:0rem 2rem;}.header-primary.__jsx-style-dynamic-selector{font-size:3.75rem;}.header-secondary.__jsx-style-dynamic-selector{font-size:1.75rem;}.error.__jsx-style-dynamic-selector{font-size:1.1em;font-weight:400;color:#2e2c2b;background:#fff;display:block;border:0;padding-left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.5rem;margin:0px;width:100%;border-radius:0;font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font};border:1px solid ${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary};}.error.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary};}.error.__jsx-style-dynamic-selector::-moz-placeholder{color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary};}.error.__jsx-style-dynamic-selector:-ms-input-placeholder{color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary};}.error.__jsx-style-dynamic-selector::placeholder{color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary};}.form-container.__jsx-style-dynamic-selector{margin:0.5rem 0.5rem;padding:0rem 2.5rem;}.form-group.__jsx-style-dynamic-selector{position:relative;margin-top:0.5rem;width:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.form-label.__jsx-style-dynamic-selector{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;}.form-input.__jsx-style-dynamic-selector{font-size:1.3em;font-weight:400;color:#2e2c2b;background:#fff;border:0;padding:0px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.5rem;margin:0px;width:100%;border-radius:0;font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font};}.form-input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:grey;}.form-input.__jsx-style-dynamic-selector::-moz-placeholder{color:grey;}.form-input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:grey;}.form-input.__jsx-style-dynamic-selector::placeholder{color:grey;}.form-input.__jsx-style-dynamic-selector:focus{outline:none;}.link.__jsx-style-dynamic-selector{color:#fefefe;font-weight:900;}.logo-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}.modal-background.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;top:0;left:0;z-index:500;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.6);}.modal-box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:58%;position:fixed;background-color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].secondary};top:15%;left:20%;right:20%;z-index:1000;margin:0 auto;max-width:750px;border:none;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);-webkit-animation-name:animateTop-__jsx-style-dynamic-selector;animation-name:animateTop-__jsx-style-dynamic-selector;-webkit-animation-duration:1s;animation-duration:1s;}.modal-content-wrapper.__jsx-style-dynamic-selector{height:100%;width:100%;}.modal-content.__jsx-style-dynamic-selector{color:#fefefe;padding-left:0.2rem;}.modal-exit.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.modal-logo.__jsx-style-dynamic-selector{height:75px;opacity:1;background-color:white;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;border:1px solid white;}.modal-title.__jsx-style-dynamic-selector{margin:0 auto;position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@-webkit-keyframes animateTop-__jsx-style-dynamic-selector{from{top:-100%;opacity:1;}to{top:15%;opacity:1;}}@keyframes animateTop-__jsx-style-dynamic-selector{from{top:-100%;opacity:1;}to{top:15%;opacity:1;}}button.__jsx-style-dynamic-selector{background-color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].primary};color:#fefefe;width:100%;border:none;margin:0;}button.__jsx-style-dynamic-selector:focus{display:none;}.subscribe.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font};font-size:2rem;}.non-subscribe.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_11__["theme"].font};font-size:1.2rem;}@media only screen and (max-width:1081px){.modal-box.__jsx-style-dynamic-selector{height:56%;width:75%;left:0;right:0;}.header-primary.__jsx-style-dynamic-selector{font-size:3.5rem;}.header-secondary.__jsx-style-dynamic-selector{font-size:1.5rem;}}@media only screen and (max-width:800px){.modal-box.__jsx-style-dynamic-selector{height:64%;width:90%;}.header-primary.__jsx-style-dynamic-selector{font-size:3.5rem;}.header-secondary.__jsx-style-dynamic-selector{font-size:1.5rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL1NpZ25VcE1vZGFsL3NpZ25VcE1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtPZSxBQUdlLEFBS0ssQUFTSSxBQUdBLEFBR0EsQUFHRixBQWdCbUIsQUFHZCxBQUlILEFBT0EsQUFPRixBQWNMLEFBR0UsQUFJQyxBQUlELEFBT0QsQUFVQyxBQW1CRCxBQUlFLEFBSUQsQUFNRCxBQVFFLEFBUUgsQUFJRixBQUtxQyxBQU9qQyxBQUc0QixBQUlBLEFBTTdCLEFBT00sQUFHQSxBQUtOLEFBSU0sQUFHQSxRQTlDUCxDQTNKWixDQXVKWSxDQTdFWixBQTBHWSxBQWVBLENBdkdBLEFBNkJBLEFBY0QsQ0ExRFgsQUEwRkEsQ0FsS2UsQUE0RUUsQUE0Q0ksQUFrQkYsRUF4SEYsQUFxQ0EsQ0ErSGhCLEFBR0EsQUFTQSxBQUdBLENBNUxELEFBR0EsQUFHQSxBQTBCbUIsQUFPUixBQXVHVixFQUpBLENBOUdvQixBQTJJWixBQWVSLENBNUR1QixDQTNDUixBQTZCaEIsS0FwSG1CLEFBZ0RQLEFBZ0lGLEVBcEdWLEVBMURlLEFBcUNBLEFBbUZILEVBbEJaLENBdkZBLENBUVksQUF3SVgsRUF6Rk0sQ0F2Q00sRUFaYixBQStIZ0IsQUFJRSxFQTdCSixDQWxETixDQTBDWSxDQWxJRCxBQWtCRixBQXFDQSxBQWtHRixDQWhIRSxJQVFBLEFBd0NKLEtBMkViLEVBSUEsRUFkWSxFQXZJRyxBQXFDTCxDQWRJLEFBZ0RpQixDQXpGbkIsR0FpRFosSUFPa0IsQUFrR0wsR0E3RUQsQUFpQlEsQUEyQkEsQ0F4SFQsQ0FrQkQsT0F3SUEsRUF6SkEsQUFrQlMsQUEwRE4sR0FyQkMsR0FpQ3VCLENBa0VyQyxFQXpKQSxHQTRFb0IsTUExRE4sY0FxSFMsT0EvQ3ZCLGFBakRBLENBd0ZlLEtBUk8sU0FTRSxVQXpFVCxLQXFDUyxRQXFDeEIsQ0F6RVksQ0FyQ0csVUFzQ0gsR0FvQkcsQ0F6REgsSUFvSFosR0E5RWlCLElBckNMLEVBeURaLFNBeERpQixDQXFDeUIsZUFwQ0EsZUFpR2hCLFdBNUQxQixXQWlDWSxJQXJFbUMsT0FzRS9CLGVBQytCLHdCQXRFL0Msc0JBdUVTLEdBeUJULEtBeEJVLFNBQ0MsVUFDRyxhQUNDLGNBQ0UsZ0JBQ0osWUFFcUIsc0VBQ1Asc0hBQ0osb0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL1NpZ25VcE1vZGFsL3NpZ25VcE1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vLi4vdGhlbWUvYmFzZUNzc1wiO1xuaW1wb3J0IFJpcHBsZXMgZnJvbSBcIi4uL0J1dHRvbi9SaXBwbGVzXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vLi4vdXRpbHMvQ29udGV4dFwiO1xuaW1wb3J0IENyb3NzSWNvbiBmcm9tIFwiLi4vSWNvbnMvY3Jvc3NJY29uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBFTUFJTF9TSUdOX1VQIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvZW1haWxTaWduVXBcIjtcbmltcG9ydCB7XG5cdGVtYWlsU2lnblVwLFxuXHRJTklUSUFMX1NUQVRFLFxuXHRFUlJPUl9TVEFURSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZW1haWxTaWdudXBEYXRhXCI7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRpb24vVmFsaWRhdGlvblwiO1xuaW1wb3J0IFN1Y2Nlc3NNb2RhbCBmcm9tIFwiLi9zdWNjZXNzTW9kYWxcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG4vL1NldCBDb29raWUgRXhwaXJhdGlvbiBpZiBub3Qgc2lnbmVkIHVwIChpbiBtaW51dGVzKVxuY29uc3QgY29va2llVGltZSA9IDYwO1xuY29uc3QgU2lnblVwTW9kYWwgPSAoKSA9PiB7XG5cdGNvbnN0IHsgZW1haWxDb29raWUsIGhhbmRsZVN0YXRlIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXHRjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKElOSVRJQUxfU1RBVEUpO1xuXHRjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoRVJST1JfU1RBVEUpO1xuXHRjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc3VjY2Vzc01vZGFsLCBzZXRTdWNjZXNzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG5cdGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblx0XHRjb25zdCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuXHRcdGlmICh0b3AgPiAyMDAgJiYgY291bnQgPCAxKSB7XG5cdFx0XHRzZXRDb3VudChjb3VudCArIDEpO1xuXHRcdFx0c2V0U2hvd01vZGFsKHRvcCA+IDIwMCk7XG5cdFx0fVxuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cdFx0aGFuZGxlU2Nyb2xsKCk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgY2hhbmdlRW1haWxDb29raWUgPSB2YWx1ZSA9PiB7XG5cdFx0Ly9pZiBjbGlja2VkIGF3YXkgYW5kIG5vdCBzaWduZWQgdXAgcHVzaCBjb29raWUgZXhwaXJ5IHRvIGEgY291cGxlIG9mIGhvdXJzXG5cdFx0Y29uc3QgZXhwaXJ5RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgY29va2llVGltZSAqIDYwICogMTAwMCk7XG5cdFx0Q29va2llLnNldChcIndlYWx0aC1jb29raWUtZW1haWwtc2lnbnVwXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSwge1xuXHRcdFx0ZXhwaXJlczogZXhwaXJ5RGF0ZSxcblx0XHR9KTtcblx0XHRoYW5kbGVTdGF0ZSh7IGVtYWlsQ29va2llOiB2YWx1ZSB9KTtcblx0fTtcblxuXHRjb25zdCB2YWxpZGF0ZUZvcm0gPSBlID0+IHtcblx0XHR2YWxpZGF0ZShmb3JtRGF0YSwgZS50YXJnZXQubmFtZSwgc2V0RXJyb3JzLCBlcnJvcnMpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuXHRcdHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKGVycm9ycy5iYWRSZXF1ZXN0KSB7XG5cdFx0XHRzZXRFcnJvcnMoe1xuXHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdGJhZFJlcXVlc3Q6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VibWl0Rm9ybSA9IHtcblx0XHRcdC4uLmZvcm1EYXRhLFxuXHRcdFx0aWQ6IGZvcm1EYXRhLmVtYWlsLFxuXHRcdFx0ZW1haWxTaWdudXBTaXRlSWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TSVRFX0lELFxuXHRcdFx0cG9wVXA6IHRydWUsXG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBtdXRhdGlvbkRhdGEgPSB7XG5cdFx0XHRcdHF1ZXJ5OiBFTUFJTF9TSUdOX1VQLFxuXHRcdFx0XHRvcGVyYXRpb25OYW1lOiBcIkNyZWF0ZUVtYWlsU2lnbnVwXCIsXG5cdFx0XHRcdHZhcmlhYmxlczogeyBpbnB1dDogc3VibWl0Rm9ybSB9LFxuXHRcdFx0fTtcblx0XHRcdGF3YWl0IGF4aW9zKHtcblx0XHRcdFx0dXJsOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPRF9FTkRQT0lOVCxcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkobXV0YXRpb25EYXRhKSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdFx0XHRcdFx0XCJ4LWFwaS1rZXlcIjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BST0RfQVBJX0tFWSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBleHBpcnlEYXRlID0gcHJvY2Vzcy5lbnYuQ09PS0lFX0FDQ0VQVF9FWFBJUlk7IC8vRGF5c1xuXG5cdFx0XHRDb29raWUuc2V0KFwid2VhbHRoLWNvb2tpZS1lbWFpbC1zaWdudXBcIiwgSlNPTi5zdHJpbmdpZnkoZmFsc2UpLCB7XG5cdFx0XHRcdGV4cGlyZXM6IE51bWJlcihleHBpcnlEYXRlKSxcblx0XHRcdH0pO1xuXHRcdFx0c2V0Rm9ybURhdGEoSU5JVElBTF9TVEFURSk7XG5cdFx0XHRzZXRTdWNjZXNzTW9kYWwodHJ1ZSk7XG5cdFx0XHRoYW5kbGVTdGF0ZSh7IGVtYWlsQ29va2llOiBmYWxzZSB9KTtcblx0XHRcdHNldEVycm9ycyh7XG5cdFx0XHRcdEVSUk9SX1NUQVRFLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdpdGggcmVxdWVzdFwiLCBlcnIpO1xuXHRcdFx0c2V0Rm9ybURhdGEoSU5JVElBTF9TVEFURSk7XG5cdFx0XHRzZXRFcnJvcnMoe1xuXHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdGJhZFJlcXVlc3Q6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e2VtYWlsQ29va2llICYmIHNob3dNb2RhbCAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2dyb3VuZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm94XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1leGl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENyb3NzSWNvbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VFbWFpbENvb2tpZShmYWxzZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2J1c2luZXNzX21vdGl2YXRpb24uc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtb2RhbC1sb2dvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRlci1wcmltYXJ5XCI+S2VlcCBNZSBVcGRhdGVkPC9oMT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0eyFlcnJvcnMuYmFkUmVxdWVzdCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJoZWFkZXItc2Vjb25kYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U3RheSB1cCB0byBkYXRlIHdpdGggdGhlIG1vc3QgaW5zcGlyYXRpb25hbCBCdXNpbmVzcyBhbmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQZXJzb25hbCBEZXZlbG9wbWVudCBjb250ZW50IG9uIHRoZSBpbnRlcm5ldC5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmJhZFJlcXVlc3QgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJoZWFkZXItc2Vjb25kYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRVaCBPaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcgLSBQbGVhc2UgdHJ5IGFnYWluIG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0IHN1cHBvcnR7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlcmUuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHRcdFx0XHRcdHtlbWFpbFNpZ25VcC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57aW5wdXQubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtpbnB1dC5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17aW5wdXQucmVxdWlyZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtmb3JtRGF0YVtpbnB1dC5uYW1lXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnNbaW5wdXQubmFtZV0gPyBcImVycm9yXCIgOiBpbnB1dC5jbGFzc05hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXtpbnB1dC50eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JzW2lucHV0Lm5hbWVdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGVycm9yc1tpbnB1dC5uYW1lXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBpbnB1dC5wbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9e2lucHV0LnJvd3N9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dmFsaWRhdGVGb3JtfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb29raWUtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmlwcGxlcyBjb2xvcj17dGhlbWUucmlwcGxlQ29sb3J9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwic3Vic2NyaWJlXCIgb25DbGljaz17Y2hhbmdlRW1haWxDb29raWV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U3Vic2NyaWJlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmlwcGxlcz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJpcHBsZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj17dGhlbWUucmlwcGxlQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGluZz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJub24tc3Vic2NyaWJlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGNoYW5nZUVtYWlsQ29va2llKGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRObyBUaGFua3MgSSBkb24ndCB3YW50IGV4cGVydCBrbm93bGVkZ2Ugb2YgaG93IHRvIGJ1aWxkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3ZWFsdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SaXBwbGVzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRCeSBjbGlja2luZyBTdWJtaXQsIHlvdSBhcmUgc3Vic2NyaWJpbmcgdG8gcmVjZWl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdzbGV0dGVycyBmcm9tIERlcml2YXRpdmUgTWVkaWEgTHRkLiBZb3VyIGRhdGEgd2lsbCBiZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzZWQgaW4gYWNjb3JkYW5jZSB3aXRoIG91cntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb29raWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UHJpdmFjeSBhbmQgQ29va2llIFBvbGljeS5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0PFN1Y2Nlc3NNb2RhbFxuXHRcdFx0XHRzdWNjZXNzTW9kYWw9e3N1Y2Nlc3NNb2RhbH1cblx0XHRcdFx0c2V0U3VjY2Vzc01vZGFsPXtzZXRTdWNjZXNzTW9kYWx9XG5cdFx0XHQvPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuY29va2llLXdyYXBwZXIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRoMSxcblx0XHRcdFx0aDIsXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRjb2xvcjogI2ZlZmVmZTtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5oZWFkZXItY29udGFpbmVyIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwcmVtIDJyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmhlYWRlci1wcmltYXJ5IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDMuNzVyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmhlYWRlci1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS43NXJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXJyb3Ige1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRjb2xvcjogIzJlMmMyYjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIuNXJlbTtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnR9O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUucHJpbWFyeX07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmVycm9yOjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvcm0tY29udGFpbmVyIHtcblx0XHRcdFx0XHRtYXJnaW46IDAuNXJlbSAwLjVyZW07XG5cdFx0XHRcdFx0cGFkZGluZzogMHJlbSAyLjVyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvcm0tZ3JvdXAge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjVyZW07XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0d2lkdGg6IDFweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdFx0XHRtYXJnaW46IC0xcHg7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9ybS1pbnB1dCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjNlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMmUyYzJiO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweCAxMHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyLjVyZW07XG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJHt0aGVtZS5mb250fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdGNvbG9yOiBncmV5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb3JtLWlucHV0OmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lmxpbmsge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmVmZWZlO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmxvZ28td3JhcHBlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQubW9kYWwtYmFja2dyb3VuZCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR6LWluZGV4OiA1MDA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5tb2RhbC1ib3gge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IDU4JTtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5zZWNvbmRhcnl9O1xuXHRcdFx0XHRcdHRvcDogMTUlO1xuXHRcdFx0XHRcdGxlZnQ6IDIwJTtcblx0XHRcdFx0XHRyaWdodDogMjAlO1xuXHRcdFx0XHRcdHotaW5kZXg6IDEwMDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA3NTBweDtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHRcdFx0XHRcdFx0MCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVUb3A7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcblx0XHRcdFx0fVxuXHRcdFx0XHQubW9kYWwtY29udGVudC13cmFwcGVyIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vZGFsLWNvbnRlbnQge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmVmZWZlO1xuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMC4ycmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5tb2RhbC1leGl0IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vZGFsLWxvZ28ge1xuXHRcdFx0XHRcdGhlaWdodDogNzVweDtcblx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vZGFsLXRpdGxlIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdEBrZXlmcmFtZXMgYW5pbWF0ZVRvcCB7XG5cdFx0XHRcdFx0ZnJvbSB7XG5cdFx0XHRcdFx0XHR0b3A6IC0xMDAlO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dG8ge1xuXHRcdFx0XHRcdFx0dG9wOiAxNSU7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG5cdFx0XHRcdFx0Y29sb3I6ICNmZWZlZmU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b246Zm9jdXMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnN1YnNjcmliZSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udH07XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5ub24tc3Vic2NyaWJlIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJHt0aGVtZS5mb250fTtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MXB4KSB7XG5cdFx0XHRcdFx0Lm1vZGFsLWJveCB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDU2JTtcblx0XHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlci1wcmltYXJ5IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMy41cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaGVhZGVyLXNlY29uZGFyeSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuXHRcdFx0XHRcdC5tb2RhbC1ib3gge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2NCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaGVhZGVyLXByaW1hcnkge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzLjVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5oZWFkZXItc2Vjb25kYXJ5IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcE1vZGFsO1xuIl19 */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/SignUpModal/signUpModal.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpModal);

/***/ }),

/***/ "./components/SignUpModal/successModal.js":
/*!************************************************!*\
  !*** ./components/SignUpModal/successModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/baseCss */ "./theme/baseCss.js");
/* harmony import */ var _Button_Ripples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Ripples */ "./components/Button/Ripples.js");
/* harmony import */ var _Icons_crossIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/crossIcon */ "./components/Icons/crossIcon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/SignUpModal/successModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 //Set Cookie Expiration if not signed up (in minutes)

const SuccessModal = ({
  successModal,
  setSuccessModal
}) => {
  const clickAway = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const awayClick = e => {
    if (e.target.className === clickAway.current.className) {
      setSuccessModal(false);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, successModal && __jsx("div", {
    ref: clickAway,
    onClick: awayClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "modal-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "modal-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "modal-content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "modal-exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_Icons_crossIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => setSuccessModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "logo-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/business_motivation.svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "modal-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "header-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Congratulations!"), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "header-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "You have been successfully added to our Newsletter."), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "header-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Keep an eye out in your inbox for our latest content.")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "cookie-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_Button_Ripples__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].rippleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => setSuccessModal(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Continue")), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1915798973", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font]]]) + " " + "header-tertiary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "If you don't see anything from us, please check your Promotions or Spam folder.")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1915798973",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font],
    __self: undefined
  }, `.cookie-wrapper.__jsx-style-dynamic-selector{margin:0;padding:0rem 2rem;}h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector,h3.__jsx-style-dynamic-selector{color:#fefefe;margin:0 auto;position:relative;text-align:center;width:100%;padding:0;margin:0;}.header-container.__jsx-style-dynamic-selector{padding:0rem 2rem;}.header-primary.__jsx-style-dynamic-selector{font-size:4rem;}.header-secondary.__jsx-style-dynamic-selector{font-size:1.75rem;}.header-tertiary.__jsx-style-dynamic-selector{font-size:1.5rem;}.logo-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:75px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}.modal-background.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;top:0;left:0;z-index:500;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.6);}.modal-box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:40%;position:fixed;background-color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].secondary};top:15%;left:20%;right:20%;z-index:1000;margin:0 auto;max-width:750px;border:none;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.modal-content-wrapper.__jsx-style-dynamic-selector{height:100%;width:100%;border:3px solid #fefefe;}.modal-exit.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.modal-logo.__jsx-style-dynamic-selector{height:75px;opacity:1;background-color:white;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;border:1px solid white;}.modal-title.__jsx-style-dynamic-selector{margin:0 auto;position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}button.__jsx-style-dynamic-selector{background-color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].primary};color:#fefefe;width:100%;border:none;margin:0;}button.__jsx-style-dynamic-selector:focus{display:none;}.subscribe.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_2__["theme"].font};font-size:2rem;}@media only screen and (max-width:1081px){.modal-box.__jsx-style-dynamic-selector{height:40%;width:75%;left:0;right:0;}.header-primary.__jsx-style-dynamic-selector{font-size:3.5rem;}.header-secondary.__jsx-style-dynamic-selector{font-size:1.5rem;}}@media only screen and (max-width:800px){.modal-box.__jsx-style-dynamic-selector{height:40%;width:90%;}.header-primary.__jsx-style-dynamic-selector{font-size:3rem;margin-top:0.5rem;}.header-secondary.__jsx-style-dynamic-selector{font-size:1.2rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL1NpZ25VcE1vZGFsL3N1Y2Nlc3NNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGUsQUFHZSxBQU1LLEFBU0ksQUFHSCxBQUdHLEFBR0QsQUFHSixBQU9ELEFBVUMsQUFpQkQsQUFNQyxBQU1ELEFBUUUsQUFRZ0MsQUFPakMsQUFHNEIsQUFNN0IsQUFNTSxBQUdBLEFBS04sQUFJSSxBQUlFLFNBOUhBLEVBeUdQLEFBY0EsQ0FyRkEsQUEyQkEsQUFZRCxDQXVCWCxDQTFGZSxBQTJFSSxDQS9EbkIsQUF5R29CLEVBbkdwQixBQXVGQyxBQUdBLEFBYUEsQ0FoSEQsQUFNQSxHQXFGUyxBQWNSLENBOUN1QixDQXZDUixBQTJCVSxJQTdEMUIsQ0FNbUIsQUFvR1QsSUF6QkUsQ0EwQ1gsR0FoQkEsRUF4RU0sR0ErRFMsRUFoQkYsQ0E5Q04sQ0FzQ1ksQ0FuRUQsQUFpRkosRUExQmYsR0F6QmEsS0E4RGIsSUFWWSxHQW5EbUIsQ0E5Qm5CLE9Ba0ZDLEdBaEVELEFBaUJRLEFBdUJBLENBekRULFFBa0ZELEVBakZBLEFBaUJHLE1BWXdCLENBcURyQyxFQWpGQSxHQWlCb0Isb0JBdURHLE9BM0N2QixjQW1DZSxLQVJPLFNBU0UsZUFoQ0EsUUFpQ3hCLGVBaERlLEtBdURmLFNBdERBLHdDQXNDMEIsc0JBdkJkLFdBQ0ksZUFDK0IsOENBQ3RDLEdBcUJULEtBcEJVLFNBQ0MsVUFDRyxhQUNDLGNBQ0UsZ0JBQ0osWUFFcUIsc0VBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL1NpZ25VcE1vZGFsL3N1Y2Nlc3NNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vLi4vdGhlbWUvYmFzZUNzc1wiO1xuaW1wb3J0IFJpcHBsZXMgZnJvbSBcIi4uL0J1dHRvbi9SaXBwbGVzXCI7XG5pbXBvcnQgQ3Jvc3NJY29uIGZyb20gXCIuLi9JY29ucy9jcm9zc0ljb25cIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vU2V0IENvb2tpZSBFeHBpcmF0aW9uIGlmIG5vdCBzaWduZWQgdXAgKGluIG1pbnV0ZXMpXG5jb25zdCBTdWNjZXNzTW9kYWwgPSAoeyBzdWNjZXNzTW9kYWwsIHNldFN1Y2Nlc3NNb2RhbCB9KSA9PiB7XG5cdGNvbnN0IGNsaWNrQXdheSA9IHVzZVJlZihudWxsKTtcblxuXHRjb25zdCBhd2F5Q2xpY2sgPSBlID0+IHtcblx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBjbGlja0F3YXkuY3VycmVudC5jbGFzc05hbWUpIHtcblx0XHRcdHNldFN1Y2Nlc3NNb2RhbChmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtzdWNjZXNzTW9kYWwgJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tncm91bmRcIiByZWY9e2NsaWNrQXdheX0gb25DbGljaz17YXdheUNsaWNrfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJveFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZXhpdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDcm9zc0ljb24gb25DbGljaz17KCkgPT4gc2V0U3VjY2Vzc01vZGFsKGZhbHNlKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvYnVzaW5lc3NfbW90aXZhdGlvbi5zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtb2RhbC1sb2dvXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXByaW1hcnlcIj5Db25ncmF0dWxhdGlvbnMhPC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJoZWFkZXItc2Vjb25kYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFlvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIG91ciBOZXdzbGV0dGVyLlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJoZWFkZXItc2Vjb25kYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEtlZXAgYW4gZXllIG91dCBpbiB5b3VyIGluYm94IGZvciBvdXIgbGF0ZXN0IGNvbnRlbnQuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb29raWUtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJpcHBsZXMgY29sb3I9e3RoZW1lLnJpcHBsZUNvbG9yfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInN1YnNjcmliZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U3VjY2Vzc01vZGFsKGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENvbnRpbnVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9SaXBwbGVzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImhlYWRlci10ZXJ0aWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRJZiB5b3UgZG9uJ3Qgc2VlIGFueXRoaW5nIGZyb20gdXMsIHBsZWFzZSBjaGVjayB5b3VyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFByb21vdGlvbnMgb3IgU3BhbSBmb2xkZXIuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5jb29raWUtd3JhcHBlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDByZW0gMnJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRoMSxcblx0XHRcdFx0aDIsXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRjb2xvcjogI2ZlZmVmZTtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5oZWFkZXItY29udGFpbmVyIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwcmVtIDJyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmhlYWRlci1wcmltYXJ5IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDRyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmhlYWRlci1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS43NXJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaGVhZGVyLXRlcnRpYXJ5IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQubG9nby13cmFwcGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogNzVweDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5tb2RhbC1iYWNrZ3JvdW5kIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHotaW5kZXg6IDUwMDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vZGFsLWJveCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGhlaWdodDogNDAlO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnNlY29uZGFyeX07XG5cdFx0XHRcdFx0dG9wOiAxNSU7XG5cdFx0XHRcdFx0bGVmdDogMjAlO1xuXHRcdFx0XHRcdHJpZ2h0OiAyMCU7XG5cdFx0XHRcdFx0ei1pbmRleDogMTAwMDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDc1MHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdFx0XHRcdFx0XHQwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQubW9kYWwtY29udGVudC13cmFwcGVyIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAzcHggc29saWQgI2ZlZmVmZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tb2RhbC1leGl0IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vZGFsLWxvZ28ge1xuXHRcdFx0XHRcdGhlaWdodDogNzVweDtcblx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vZGFsLXRpdGxlIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnl9O1xuXHRcdFx0XHRcdGNvbG9yOiAjZmVmZWZlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnV0dG9uOmZvY3VzIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zdWJzY3JpYmUge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnR9O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MXB4KSB7XG5cdFx0XHRcdFx0Lm1vZGFsLWJveCB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5oZWFkZXItcHJpbWFyeSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhlYWRlci1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblx0XHRcdFx0XHQubW9kYWwtYm94IHtcblx0XHRcdFx0XHRcdGhlaWdodDogNDAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhlYWRlci1wcmltYXJ5IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhlYWRlci1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5TdWNjZXNzTW9kYWwucHJvcFR5cGVzID0ge1xuXHRzdWNjZXNzTW9kYWw6IFByb3BUeXBlcy5Cb29sZWFuLFxuXHRzZXRTdWNjZXNzTW9kYWw6IFByb3BUeXBlcy5GdW5jLFxufTtcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3NNb2RhbDtcbiJdfQ== */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/SignUpModal/successModal.js */`));
};

SuccessModal.propTypes = {
  successModal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.Boolean,
  setSuccessModal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.Func
};
/* harmony default export */ __webpack_exports__["default"] = (SuccessModal);

/***/ }),

/***/ "./data/emailSignupData.js":
/*!*********************************!*\
  !*** ./data/emailSignupData.js ***!
  \*********************************/
/*! exports provided: emailSignUp, INITIAL_STATE, ERROR_STATE, quickEmailSignUp, QUICK_INITIAL_STATE, QUICK_ERROR_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailSignUp", function() { return emailSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_STATE", function() { return ERROR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickEmailSignUp", function() { return quickEmailSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICK_INITIAL_STATE", function() { return QUICK_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICK_ERROR_STATE", function() { return QUICK_ERROR_STATE; });
const emailSignUp = [{
  name: "firstName",
  placeholder: "First Name",
  type: "text",
  required: true,
  className: "form-input",
  rows: 1,
  textarea: false
}, {
  name: "lastName",
  placeholder: "Last Name",
  type: "text",
  required: true,
  className: "form-input",
  rows: 1,
  textarea: false
}, {
  name: "email",
  placeholder: "Email Address",
  type: "email",
  required: true,
  className: "form-input",
  rows: 1,
  textarea: false
}];
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};
const ERROR_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  badRequest: false
};
const quickEmailSignUp = [{
  name: "email",
  placeholder: "Email Address",
  type: "email",
  required: true,
  className: "form-input",
  rows: 1,
  textarea: false
}];
const QUICK_INITIAL_STATE = {
  email: ""
};
const QUICK_ERROR_STATE = {
  email: "",
  badRequest: false
};


/***/ }),

/***/ "./graphql/emailSignUp.js":
/*!********************************!*\
  !*** ./graphql/emailSignUp.js ***!
  \********************************/
/*! exports provided: EMAIL_SIGN_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_SIGN_UP", function() { return EMAIL_SIGN_UP; });
const EMAIL_SIGN_UP = `
	mutation CreateEmailSignup($input: CreateEmailSignupInput!) {
		createEmailSignup(input: $input) {
			id
			firstName
			lastName
			popUp
			createdAt
			updatedAt
			email
			contentType
			contentHeadline
			contentCategory
			source
		}
	}
`;

/***/ }),

/***/ "./gtag/lib.js":
/*!*********************!*\
  !*** ./gtag/lib.js ***!
  \*********************/
/*! exports provided: pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = url => {
  window.gtag("config", "GTM-PJHSSP6", {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/Context */ "./utils/Context.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_SignUpModal_signUpModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SignUpModal/signUpModal */ "./components/SignUpModal/signUpModal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _gtag_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../gtag/lib */ "./gtag/lib.js");








var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








class OverviewApp extends next_app__WEBPACK_IMPORTED_MODULE_9___default.a {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "state", {
      cookie: false,
      emailCookie: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "handleState", value => {
      this.setState(_objectSpread({}, this.state, {}, value));
    });
  }

  componentDidMount() {
    next_router__WEBPACK_IMPORTED_MODULE_13___default.a.events.on("routeChangeComplete", url => Object(_gtag_lib__WEBPACK_IMPORTED_MODULE_14__["pageview"])(url));
    const cookieMarker = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("cookie-accept") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("cookie-accept")) : true;
    const cookieEmailMarker = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("wealth-cookie-email-signup") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("wealth-cookie-email-signup")) : true;
    this.setState({
      cookie: cookieMarker,
      emailCookie: cookieEmailMarker
    });
  }

  render() {
    const {
      Component,
      pageProps,
      initialCookieValue
    } = this.props;
    return __jsx(_utils_Context__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
      value: {
        cookie: this.state.cookie,
        handleState: this.handleState,
        emailCookie: this.state.emailCookie
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_components_SignUpModal_signUpModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OverviewApp);

/***/ }),

/***/ "./theme/baseCss.js":
/*!**************************!*\
  !*** ./theme/baseCss.js ***!
  \**************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
const theme = {
  primary: "#ff4500",
  secondary: "#101010",
  rippleColor: "#FFAB66",
  font: "Khand, Arial Narrow, arial, sans-serif",
  secondaryFont: "arial,helvetica,clean,sans-serif;",
  thirdFont: "helvetica,verdana,arial,sans-serif;",
  lineHeight: "1.8rem",
  fontSize: "1.4rem",
  headerSize: "4.25rem",
  quizButton: "#1486cd",
  quizRipple: "#7AECFF",
  quizCorrect: "rgba(64,136,11,1)",
  quizCorrectOverlay: "#5bc20f",
  // "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
  //"arial, sans-serif",
  contentMaxWidth: "1200px"
};


/***/ }),

/***/ "./utils/Context.js":
/*!**************************!*\
  !*** ./utils/Context.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map