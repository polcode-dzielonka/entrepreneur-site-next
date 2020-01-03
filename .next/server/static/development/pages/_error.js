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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/data */ "./data/data.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/baseCss */ "./theme/baseCss.js");
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Footer/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Footer = ({
  menuOpen,
  onClick
}) => {
  return __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-nav-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, _data_data__WEBPACK_IMPORTED_MODULE_2__["footerLinks"].map((item, index) => {
    return __jsx("li", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, item.label)));
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-nav-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, _data_data__WEBPACK_IMPORTED_MODULE_2__["socialLinks"].map(({
    href,
    icon
  }, index) => {
    return __jsx("li", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, __jsx("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-item-social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        width: "30%"
      },
      src: icon,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    })));
  }))), __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-brand-style",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "WealthMack")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/business_motivation.svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-brand-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4249174082", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "footer-copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Copyright \xA9 2019 wealthmack.com"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4249174082",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font],
    __self: undefined
  }, `.footer.__jsx-style-dynamic-selector{padding-top:5rem;background:#111;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;clear:both;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer-brand.__jsx-style-dynamic-selector{display:block;text-align:center;margin-bottom:2rem;width:100%;position:relative;z-index:1;font-size:1.1em;font-weight:400;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.footer-brand.__jsx-style-dynamic-selector:before{border-top:0.5px solid hsla(0,0%,100%);content:"";margin:0 auto;position:absolute;top:40%;left:0;right:0;bottom:0;width:100%;z-index:-1;}.footer-brand-style.__jsx-style-dynamic-selector{background:#111;padding:0 1rem;}.footer-copy.__jsx-style-dynamic-selector{font-size:0.95em;font-weight:400;color:#fff;background:#161616;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:2.5rem 0;}.footer-icon.__jsx-style-dynamic-selector{text-align:center;width:100%;height:100%;}.footer-brand-image.__jsx-style-dynamic-selector{width:15%;background-color:white;height:15%;min-width:150px;border:1px solid white;}.footer-nav.__jsx-style-dynamic-selector{width:100%;max-width:1098px;margin:0 auto;}.footer-nav-list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:3rem;text-align:center;padding:0;}.footer-item.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font};color:#fff;cursor:pointer;padding:25px 25px;font-size:0.95rem;font-weight:300;-webkit-text-decoration:none;text-decoration:none;list-style:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-transform:uppercase;}.footer-item-social.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font};color:#fff;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;list-style:none;width:30%;}li.__jsx-style-dynamic-selector{list-style-type:none;}@media only screen and (max-width:643px){.footer-item.__jsx-style-dynamic-selector{font-size:0.95rem;font-weight:300;-webkit-text-decoration:none;text-decoration:none;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURlLEFBR3VCLEFBT0gsQUFjMkIsQUFZekIsQUFJQyxBQVVDLEFBS1IsQUFPQyxBQUtFLEFBUzRCLEFBWUEsQUFRcEIsQUFJRixVQTVDSSxDQU9OLEdBcERDLEVBMEJILENBakNDLEFBcUNBLENBVUwsQUFrRE0sR0FKbEIsT0FqQ2UsQ0FaRixFQWRiLENBMUJvQixDQVBOLEFBcUNGLEFBZUEsQ0E2Q1csS0E3RVgsRUE0QlosQUF3QlksQUFZQSxDQXhCWixFQXRCb0IsQUFlSCxNQWhDRixDQWJILENBaUVJLEFBWUEsUUEvQlEsRUE3Q0wsQ0E4QkwsQ0FqQkssR0FvREEsQUFZRyxPQXZCRixNQXJEVCxFQWFGLENBZ0NULENBMkNrQixDQXZCQyxLQWhFRixBQWFULE9BQ0MsR0EwRU0sR0F2QkUsRUFsRFAsQ0FkTyxDQVhMLE9BMEJBLEdBNERLLENBckZNLENBMkVELEdBaEVWLEdBZUEsUUFkYyxBQTBFZixHQTNEWCxDQVdvQixNQXdCSixBQXlCaEIsZUExRW9CLFdBK0RILEtBc0JoQixXQXJCbUIsV0E1RXBCLElBOER3Qiw4QkF4QkEscUJBekJ4QiwyQkFnRTBCLHFCQWROLElBZXBCLGVBZG1CLFdBekJELE9BMEJQLFVBekJYLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb290ZXJMaW5rcywgc29jaWFsTGlua3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi90aGVtZS9iYXNlQ3NzXCI7XG5cbmNvbnN0IEZvb3RlciA9ICh7IG1lbnVPcGVuLCBvbkNsaWNrIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItbmF2XCI+XG5cdFx0XHRcdDxuYXY+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZvb3Rlci1uYXYtbGlzdFwiPlxuXHRcdFx0XHRcdFx0e2Zvb3RlckxpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmb290ZXItaXRlbVwiPntpdGVtLmxhYmVsfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdi1saXN0XCI+XG5cdFx0XHRcdFx0XHR7c29jaWFsTGlua3MubWFwKCh7IGhyZWYsIGljb24gfSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtocmVmfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW0tc29jaWFsXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvaW1nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9XCJmb290ZXItYnJhbmRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290ZXItYnJhbmQtc3R5bGVcIj5XZWFsdGhNYWNrPC9zcGFuPlxuXHRcdFx0XHQ8L3N0cm9uZz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItaWNvblwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvb3Rlci1icmFuZC1pbWFnZVwiXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2J1c2luZXNzX21vdGl2YXRpb24uc3ZnXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weVwiPkNvcHlyaWdodCDCqSAyMDE5IHdlYWx0aG1hY2suY29tPC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5mb290ZXIge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1cmVtO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxMTE7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRjbGVhcjogYm90aDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItYnJhbmQge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZm9vdGVyLWJyYW5kOmJlZm9yZSB7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMC41cHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSk7XG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiA0MCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1icmFuZC1zdHlsZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzExMTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDFyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1jb3B5IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOTVlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxNjE2MTY7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDIuNXJlbSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItaWNvbiB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9vdGVyLWJyYW5kLWltYWdlIHtcblx0XHRcdFx0XHR3aWR0aDogMTUlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGhlaWdodDogMTUlO1xuXHRcdFx0XHRcdG1pbi13aWR0aDogMTUwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1uYXYge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTA5OHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItbmF2LWxpc3Qge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogM3JlbTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9vdGVyLWl0ZW0ge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnR9O1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDI1cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjk1cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItaXRlbS1zb2NpYWwge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnR9O1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0XHR3aWR0aDogMzAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDNweCkge1xuXHRcdFx0XHRcdC5mb290ZXItaXRlbSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOTVyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9mb290ZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/Footer/Footer.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/Head.js":
/*!***********************************!*\
  !*** ./components/Header/Head.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainHead = ({
  children
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html: charset=UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Khand",
    rel: "stylesheet",
    key: "google-font-khand",
    as: "font",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("meta", {
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("meta", {
    name: "description",
    content: "Dedicated to providing aspiring entrepreneurs and those who wish to improve their lives with some of the most inspirational and motivating content on the internet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("meta", {
    name: "keywords",
    content: "HTML, CSS, XML, XHTML, JavaScript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@WealthMack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@WealthMack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:title",
    content: "WealthMack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Dedicated to providing aspiring entrepreneurs and those who wish to improve their lives with some of the most inspirational and motivating content on the internet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://image-bucket-list.s3-eu-west-1.amazonaws.com/business_cover_photo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:url",
    content: "https://www.wealthmack.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:locale",
    content: "en_US",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:title",
    content: "WealthMack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:description",
    content: "Dedicated to providing aspiring entrepreneurs and those who wish to improve their lives with some of the most inspirational and motivating content on the internet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:image",
    content: "https://image-bucket-list.s3-eu-west-1.amazonaws.com/business_cover_photo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:image:width",
    content: "1024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:image:height",
    content: "576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:url",
    content: "https://www.wealthmack.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:card",
    content: "HTML, CSS, XML, XHTML, JavaScript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("meta", {
    name: "og:site_name",
    content: "WealthMack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("meta", {
    name: "fb:app_id",
    content: "495407517985667",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("meta", {
    name: "fb:pages",
    content: "495407517985667",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge,chrome=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("meta", {
    name: "msapplication-tap-highlight",
    content: "no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "WealthMack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    sizes: "16x16 32x32 64x64",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "196x196",
    href: "/static/favicon-192.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "160x160",
    href: "/static/favicon-160.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/static/favicon-96.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "64x64",
    href: "/static/favicon-64.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/static/favicon-57.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/favicon-114.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/favicon-72.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/favicon-144.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/favicon-60.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/favicon-120.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/favicon-76.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/favicon-152.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/favicon-180.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#FFFFFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), __jsx("meta", {
    name: "msapplication-TileImage",
    content: "/static/favicon-144.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "/static/browserconfig.xml",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainHead);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu_MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu/MenuButton */ "./components/Header/Menu/MenuButton.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/data */ "./data/data.js");
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/baseCss */ "./theme/baseCss.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Header = ({
  menuOpen,
  onClick
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "site-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "mobile-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_Menu_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: menuOpen,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "mobile-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "mobile-nav-menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/business_motivation.svg",
    style: {
      backgroundColor: "white",
      height: "100%",
      maxWidth: "300px",
      marginRight: "1rem",
      border: "1px solid #fefefe",
      marginTop: "6px"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }))))), !menuOpen && __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "head-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: "20%"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "nav-menu-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/business_motivation.svg",
    style: {
      width: "100%",
      backgroundColor: "white",
      height: "100%",
      border: "1px solid #fefefe"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })))), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "80%",
      marginLeft: "0.5rem"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].map(({
    href,
    label
  }, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "nav-menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, label)))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "head-social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/newsletter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "news-nav-menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Newsletter"))), _data_data__WEBPACK_IMPORTED_MODULE_4__["socialLinks"].map(({
    href,
    icon
  }, index) => __jsx("div", {
    key: index,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "social-nav-menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("img", {
    style: {
      width: 22
    },
    src: icon,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1830890702", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary]]]) + " " + "social-style",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1830890702",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth, _data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary],
    __self: undefined
  }, `.head-links.__jsx-style-dynamic-selector{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;cursor:pointer;}.head-social-links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:auto;cursor:pointer;}.mobile-nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;width:100%;margin:0 auto;}.mobile-links.__jsx-style-dynamic-selector{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;}.mobile-nav-menu-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;border-bottom:4px solid transparent;}.navbar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;max-width:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].contentMaxWidth};width:100%;margin:0 auto;}.nav-menu-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100% / ${_data_data__WEBPACK_IMPORTED_MODULE_4__["links"].length});border-bottom:4px solid transparent;}.nav-menu-logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:4px solid transparent;}.nav-menu-item.__jsx-style-dynamic-selector:hover{-webkit-animation:hoverEffect-__jsx-style-dynamic-selector;animation:hoverEffect-__jsx-style-dynamic-selector;-webkit-animation-duration:1s;animation-duration:1s;border-bottom:4px solid ${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary};}.nav-menu-link.__jsx-style-dynamic-selector{color:#f5f4f4;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font};margin:0 auto;}.news-nav-menu-item.__jsx-style-dynamic-selector{width:60%;margin-right:1rem;padding:0px 20px 0px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;border-bottom:4px solid transparent;}.news-nav-menu-item.__jsx-style-dynamic-selector:hover{-webkit-animation:hoverEffect-__jsx-style-dynamic-selector;animation:hoverEffect-__jsx-style-dynamic-selector;-webkit-animation-duration:1s;animation-duration:1s;border-bottom:4px solid ${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary};}.site-header.__jsx-style-dynamic-selector{background:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].secondary};height:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize};position:fixed;top:0;width:100%;z-index:10;}.social-nav-menu-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;padding:8px 15px 0px 15px;border-bottom:4px solid transparent;}@-webkit-keyframes hoverEffect-__jsx-style-dynamic-selector{from{border-bottom:4px solid transparent;}to{border-bottom:4px solid ${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary};}}@keyframes hoverEffect-__jsx-style-dynamic-selector{from{border-bottom:4px solid transparent;}to{border-bottom:4px solid ${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].primary};}}@media only screen and (max-width:1200px) and (min-width:960px){.head-social-links.__jsx-style-dynamic-selector{margin-right:1.75rem;}}@media only screen and (min-width:1001px){.mobile-nav.__jsx-style-dynamic-selector{display:none;}}@media only screen and (max-width:1000px){.navbar.__jsx-style-dynamic-selector{display:none;}}@media only screen and (max-width:1247px){.head-links.__jsx-style-dynamic-selector{margin-left:2rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZlLEFBR2dCLEFBTUcsQUFNQSxBQU9GLEFBTUUsQUFPQSxBQVFBLEFBTUEsQUFNUyxBQUtSLEFBT0osQUFTWSxBQUtrQixBQVMzQixBQVN3QixBQUdpQixBQU1oQyxBQUtSLEFBS0EsQUFLSSxVQXZITCxBQWdFSyxDQTdDTixFQTJGWixBQUtBLENBMUR5QixHQStEekIsSUFmQSxFQXJGYSxLQTZDYSxRQStCMUIsR0F0Q3FCLENBb0JlLGFBcUJwQyxDQWpDYSxvQkE1RE0sQUFNQSxBQWFRLEFBT1IsQUFRQSxBQU1BLEFBeUNBLEVBUkosUUE5RUksS0EwRHNCLEVBcUJuQyxNQTNEUyxBQTRESixXQUNBLEVBOUJXLEFBcUJBLEVBbkR2QixPQTZEQSxTQWhCb0IsRUFQTCxhQXJERyxBQU1MLEFBb0JBLENBNEJiLFNBM0RnQixFQVlKLEFBb0I0QixLQTFCeEIsRUE2Q3NDLEFBcUJBLElBM0R2QyxDQVdLLEFBZTZCLEFBT1osQUF3Q2xCLENBckZuQixPQU1BLEtBT0EsS0F5RTJCLFNBdERmLFNBY1osRUFiZSxNQXNEc0IsSUFoREEsQUFZckMsQUFxQkEsSUF0Q0EsRUErQm1CLGtCQUNrQixRQXNCckMsSUFoREEsU0FoQlksV0FDeUIsSUEwQ3JDLGdDQXpDQSIsImZpbGUiOiIvVXNlcnMvdGhvbWFzcGF0ZWwvRG9jdW1lbnRzL2VudHJlcHJlbmV1ci1zaXRlLW5leHQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4vTWVudS9NZW51QnV0dG9uXCI7XG5pbXBvcnQgeyBsaW5rcywgc29jaWFsTGlua3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi90aGVtZS9iYXNlQ3NzXCI7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuY29uc3QgSGVhZGVyID0gKHsgbWVudU9wZW4sIG9uQ2xpY2sgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cInNpdGUtaGVhZGVyXCI+XG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdlwiPlxuXHRcdFx0XHRcdDxNZW51QnV0dG9uIG9wZW49e21lbnVPcGVufSBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtcIi9cIn0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdi1tZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2J1c2luZXNzX21vdGl2YXRpb24uc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIzMDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogXCIxcmVtXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgI2ZlZmVmZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0eyFtZW51T3BlbiAmJiAoXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZC1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjIwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtcIi9cIn0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tZW51LWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvYnVzaW5lc3NfbW90aXZhdGlvbi5zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkICNmZWZlZmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCI4MCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtsaW5rcy5tYXAoKHsgaHJlZiwgbGFiZWwgfSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbWVudS1saW5rXCI+e2xhYmVsfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWQtc29jaWFsLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvbmV3c2xldHRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3cy1uYXYtbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbWVudS1saW5rXCI+TmV3c2xldHRlcjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHR7c29jaWFsTGlua3MubWFwKCh7IGhyZWYsIGljb24gfSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1uYXYtbWVudS1pdGVtXCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzb2NpYWwtc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAyMiB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuaGVhZC1saW5rcyB7XG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5oZWFkLXNvY2lhbC1saW5rcyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQubW9iaWxlLW5hdiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQubW9iaWxlLWxpbmtzIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1vYmlsZS1uYXYtbWVudS1pdGVtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmF2YmFyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdG1heC13aWR0aDogJHt0aGVtZS5jb250ZW50TWF4V2lkdGh9O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uYXYtbWVudS1pdGVtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAvICR7bGlua3MubGVuZ3RofSk7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uYXYtbWVudS1sb2dvIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5hdi1tZW51LWl0ZW06aG92ZXIge1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogaG92ZXJFZmZlY3Q7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiA0cHggc29saWQgJHt0aGVtZS5wcmltYXJ5fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmF2LW1lbnUtbGluayB7XG5cdFx0XHRcdFx0Y29sb3I6ICNmNWY0ZjQ7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udH07XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5ld3MtbmF2LW1lbnUtaXRlbSB7XG5cdFx0XHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XG5cdFx0XHRcdFx0cGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5ld3MtbmF2LW1lbnUtaXRlbTpob3ZlciB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiBob3ZlckVmZmVjdDtcblx0XHRcdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDFzO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAke3RoZW1lLnByaW1hcnl9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zaXRlLWhlYWRlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS5zZWNvbmRhcnl9O1xuXHRcdFx0XHRcdGhlaWdodDogJHt0aGVtZS5oZWFkZXJTaXplfTtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNvY2lhbC1uYXYtbWVudS1pdGVtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAxNXB4IDBweCAxNXB4O1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBrZXlmcmFtZXMgaG92ZXJFZmZlY3Qge1xuXHRcdFx0XHRcdGZyb20ge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0byB7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiA0cHggc29saWQgJHt0aGVtZS5wcmltYXJ5fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG5cdFx0XHRcdFx0LmhlYWQtc29jaWFsLWxpbmtzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMS43NXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAxcHgpIHtcblx0XHRcdFx0XHQubW9iaWxlLW5hdiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0XHRcdC5uYXZiYXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQ3cHgpIHtcblx0XHRcdFx0XHQuaGVhZC1saW5rcyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMnJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG1lbnVPcGVuOiBQcm9wVHlwZXMuQm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Header.js */`));
};

Header.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].func.isRequired,
  menuOpen: prop_types__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].Boolean
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Menu/Menu.js":
/*!****************************************!*\
  !*** ./components/Header/Menu/Menu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ "./data/data.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./components/Header/Menu/MenuItem.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Menu/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Menu = ({
  onClick
}) => {
  const menuItems = _data_data__WEBPACK_IMPORTED_MODULE_1__["mobileLinks"].map((val, index) => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: val.href,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, __jsx(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      delay: `${index * 0.1}s`,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, val.label));
  });
  return __jsx("div", {
    style: {
      position: "fixed",
      zIndex: 50,
      background: "black",
      opacity: 0.95,
      left: 0,
      height: "100%",
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      top: 0,
      left: 0,
      height: "100%",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      background: "black",
      opacity: 0.95,
      color: "#fafafa",
      transition: "height 0.3s ease",
      zIndex: 2,
      marginTop: 10,
      paddingBottom: "4.25rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, menuItems));
};

Menu.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Header/Menu/MenuButton.js":
/*!**********************************************!*\
  !*** ./components/Header/Menu/MenuButton.js ***!
  \**********************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Menu/MenuButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const MenuButton = ({
  open,
  onClick
}) => {
  const styles = {
    container: {
      height: "32px",
      width: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "16px"
    },
    line: {
      height: "2px",
      width: "20px",
      background: "white",
      //"this.state.color",
      transition: "all 0.2s ease"
    },
    lineTop: {
      transform: open ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px"
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      transform: open ? "translateX(-16px)" : "none"
    },
    lineBottom: {
      transform: open ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px"
    }
  };
  return __jsx("div", {
    style: styles.container,
    onClick: onClick,
    className: "jsx-3769649349" + " " + "menu-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    style: _objectSpread({}, styles.line, {}, styles.lineTop),
    className: "jsx-3769649349",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("div", {
    style: _objectSpread({}, styles.line, {}, styles.lineMiddle),
    className: "jsx-3769649349",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("div", {
    style: _objectSpread({}, styles.line, {}, styles.lineBottom),
    className: "jsx-3769649349",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "3769649349",
    __self: undefined
  }, "@media only screen and (min-width:1001px){.jsx-3769649349{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL0hlYWRlci9NZW51L01lbnVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NLLEFBR29CLGFBQ2QiLCJmaWxlIjoiL1VzZXJzL3Rob21hc3BhdGVsL0RvY3VtZW50cy9lbnRyZXByZW5ldXItc2l0ZS1uZXh0L2NvbXBvbmVudHMvSGVhZGVyL01lbnUvTWVudUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5jb25zdCBNZW51QnV0dG9uID0gKHsgb3Blbiwgb25DbGljayB9KSA9PiB7XG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRjb250YWluZXI6IHtcblx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0cGFkZGluZzogXCIxNnB4XCIsXG5cdFx0fSxcblx0XHRsaW5lOiB7XG5cdFx0XHRoZWlnaHQ6IFwiMnB4XCIsXG5cdFx0XHR3aWR0aDogXCIyMHB4XCIsXG5cdFx0XHRiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIC8vXCJ0aGlzLnN0YXRlLmNvbG9yXCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjJzIGVhc2VcIixcblx0XHR9LFxuXHRcdGxpbmVUb3A6IHtcblx0XHRcdHRyYW5zZm9ybTogb3BlbiA/IFwicm90YXRlKDQ1ZGVnKVwiIDogXCJub25lXCIsXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46IFwidG9wIGxlZnRcIixcblx0XHRcdG1hcmdpbkJvdHRvbTogXCI1cHhcIixcblx0XHR9LFxuXHRcdGxpbmVNaWRkbGU6IHtcblx0XHRcdG9wYWNpdHk6IG9wZW4gPyAwIDogMSxcblx0XHRcdHRyYW5zZm9ybTogb3BlbiA/IFwidHJhbnNsYXRlWCgtMTZweClcIiA6IFwibm9uZVwiLFxuXHRcdH0sXG5cdFx0bGluZUJvdHRvbToge1xuXHRcdFx0dHJhbnNmb3JtOiBvcGVuID8gXCJ0cmFuc2xhdGVYKC0xcHgpIHJvdGF0ZSgtNDVkZWcpXCIgOiBcIm5vbmVcIixcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjogXCJ0b3AgbGVmdFwiLFxuXHRcdFx0bWFyZ2luVG9wOiBcIjVweFwiLFxuXHRcdH0sXG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwibWVudS1idXR0b25cIj5cblx0XHRcdDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxpbmUsIC4uLnN0eWxlcy5saW5lVG9wIH19IC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5saW5lLCAuLi5zdHlsZXMubGluZU1pZGRsZSB9fSAvPlxuXHRcdFx0PGRpdiBzdHlsZT17eyAuLi5zdHlsZXMubGluZSwgLi4uc3R5bGVzLmxpbmVCb3R0b20gfX0gLz5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAxcHgpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbk1lbnVCdXR0b24ucHJvcFR5cGVzID0ge1xuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRvcGVuOiBQcm9wVHlwZXMuQm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b247XG4iXX0= */\n/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Menu/MenuButton.js */"));
};

MenuButton.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9__["PropTypes"].func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_9__["PropTypes"].Boolean
};
/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./components/Header/Menu/MenuItem.js":
/*!********************************************!*\
  !*** ./components/Header/Menu/MenuItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/baseCss */ "./theme/baseCss.js");
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Header/Menu/MenuItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MenuItem = ({
  delay,
  onClick,
  children
}) => {
  const {
    0: hover,
    1: setHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const styles = {
    container: {
      opacity: 1,
      animation: "1s appear forwards",
      position: "relative",
      animationDelay: delay
    },
    menuItem: {
      // fontFamily: `'Open Sans', sans-serif`,
      textDecoration: "none",
      fontFamily: _theme_baseCss__WEBPACK_IMPORTED_MODULE_1__["theme"].font,
      fontSize: "1.1rem",
      padding: "1rem 0",
      margin: "0 5%",
      cursor: "pointer",
      color: hover ? "gray" : "#fafafa",
      transition: "color 0.2s ease-in-out",
      animation: "0.5s slideIn forwards",
      animationDelay: delay,
      textTransform: "uppercase"
    },
    line: {
      width: "90%",
      height: "1px",
      background: "gray",
      margin: "0 auto",
      animation: "0.5s shrink forwards",
      animationDelay: delay
    }
  };
  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.menuItem,
    onMouseEnter: () => {
      setHover(true);
    },
    onMouseLeave: () => {
      setHover(false);
    },
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, children), __jsx("div", {
    style: styles.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./components/Layouts/Layout.js":
/*!**************************************!*\
  !*** ./components/Layouts/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _Header_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Menu/Menu */ "./components/Header/Menu/Menu.js");
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/baseCss */ "./theme/baseCss.js");
/* harmony import */ var _cookies_cookieBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cookies/cookieBanner */ "./components/cookies/cookieBanner.js");
/* harmony import */ var _Header_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Header/Head */ "./components/Header/Head.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/Layouts/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const Layout = props => {
  const {
    background,
    children
  } = props;
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onClick = e => {
    setMenuOpen(!menuOpen);
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4184030022", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, background ? "#111" : "white", _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize]]]) + " " + "top-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_Header_Head__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuOpen: menuOpen,
    onClick: e => onClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), menuOpen && __jsx(_Header_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: e => onClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4184030022", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, background ? "#111" : "white", _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize]]]) + " " + "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, children), __jsx(_cookies_cookieBanner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4184030022",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize, background ? "#111" : "white", _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize],
    __self: undefined
  }, `body{margin:0px;font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font};}.page-layout.__jsx-style-dynamic-selector{margin-top:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize};}.top-layout.__jsx-style-dynamic-selector{margin:0;background-color:${background ? "#111" : "white"};}@media only screen and (max-width:960px){.page-layout.__jsx-style-dynamic-selector{width:100%;margin:0 auto;margin-top:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].headerSize};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZSxBQUdpQixBQUk2QixBQUcvQixBQUtHLFNBSmtDLEVBUEwsQUFZMUIsY0FDMEIsZUFUMUMsWUFIQSxHQU9BLFVBTUMiLCJmaWxlIjoiL1VzZXJzL3Rob21hc3BhdGVsL0RvY3VtZW50cy9lbnRyZXByZW5ldXItc2l0ZS1uZXh0L2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL0hlYWRlci9NZW51L01lbnVcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uL3RoZW1lL2Jhc2VDc3NcIjtcbmltcG9ydCBDb29raWVCYW5uZXIgZnJvbSBcIi4uL2Nvb2tpZXMvY29va2llQmFubmVyXCI7XG5pbXBvcnQgRGVmYXVsdEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCB7IGJhY2tncm91bmQsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3Qgb25DbGljayA9IGUgPT4ge1xuXHRcdHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcC1sYXlvdXRcIj5cblx0XHRcdDxEZWZhdWx0SGVhZGVyIC8+XG5cdFx0XHQ8SGVhZGVyIG1lbnVPcGVuPXttZW51T3Blbn0gb25DbGljaz17ZSA9PiBvbkNsaWNrKCl9IC8+XG5cdFx0XHR7bWVudU9wZW4gJiYgPE1lbnUgb25DbGljaz17ZSA9PiBvbkNsaWNrKCl9IC8+fVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWxheW91dFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdDxDb29raWVCYW5uZXIgLz5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJHt0aGVtZS5mb250fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQucGFnZS1sYXlvdXQge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6ICR7dGhlbWUuaGVhZGVyU2l6ZX07XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRvcC1sYXlvdXQge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmQgPyBcIiMxMTFcIiA6IFwid2hpdGVcIn07XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuXHRcdFx0XHRcdC5wYWdlLWxheW91dCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogJHt0aGVtZS5oZWFkZXJTaXplfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG5cdGJhY2tncm91bmQ6IFByb3BUeXBlcy5PYmplY3QsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuT2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/Layouts/Layout.js */`));
};

Layout.propTypes = {
  background: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.Object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.Object
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/cookies/cookieBanner.js":
/*!********************************************!*\
  !*** ./components/cookies/cookieBanner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/baseCss */ "./theme/baseCss.js");
/* harmony import */ var _Button_Ripples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Ripples */ "./components/Button/Ripples.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Context */ "./utils/Context.js");

var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/components/cookies/cookieBanner.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const CookieBanner = () => {
  const {
    cookie,
    handleState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_utils_Context__WEBPACK_IMPORTED_MODULE_7__["default"]);

  const changeCookie = () => {
    //set expiry to 10 minutes:- new Date(new Date().getTime() + 10 * 60 * 1000)
    const expiryDate = "365"; //Days

    js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set("cookie-accept", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(false), {
      expires: Number(expiryDate)
    });
    handleState({
      cookie: false
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, cookie && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3120214465", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "alert-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3120214465", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "alert-box-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3120214465", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "banner-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "We use cookies to ensure you get the best experience possible. Carry on browsing if you're okay with this, or find out how to manage cookies in our Cookie Settings. In addition, by navigating on this website you acknowledge that Cookies may be used to serve you personalized ads throughout your online experience. To learn more or disable this service please consult our", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cookies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3120214465", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Cookie Policy."))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3120214465", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]) + " " + "cookie-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_Button_Ripples__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].rippleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("button", {
    onClick: changeCookie,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3120214465", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Accept"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3120214465",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary, _theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font],
    __self: undefined
  }, `.alert-box.__jsx-style-dynamic-selector{color:#fefefe;bottom:0;position:fixed;border:none;background-color:rgba(0,0,0,0.85);-webkit-animation-name:slideIn-__jsx-style-dynamic-selector;animation-name:slideIn-__jsx-style-dynamic-selector;-webkit-animation-duration:1s;animation-duration:1s;}.alert-box-wrapper.__jsx-style-dynamic-selector{font-family:Arial,sans-serif;line-height:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:100%;position:relative;}.banner-content.__jsx-style-dynamic-selector{padding:0.75rem;margin:0;}button.__jsx-style-dynamic-selector{background-color:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].primary};color:#fefefe;font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_4__["theme"].font};font-size:2rem;width:100%;max-width:300px;border:none;padding:0rem 2.1rem 0rem 2.1rem;cursor:pointer;}button.__jsx-style-dynamic-selector:focus{display:none;}.cookie-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:1.2rem;}.link.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:#fefefe;font-weight:900;}@-webkit-keyframes slideIn-__jsx-style-dynamic-selector{from{bottom:-300px;opacity:0;}to{bottom:0;opacity:1;}}@keyframes slideIn-__jsx-style-dynamic-selector{from{bottom:-300px;opacity:0;}to{bottom:0;opacity:1;}}@media only screen and (max-width:1000px){.alert-box-wrapper.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:0rem;margin:0rem;}.banner-content.__jsx-style-dynamic-selector{padding:0rem 0.75rem 0rem 0.75rem;margin-bottom:0;}.cookie-wrapper.__jsx-style-dynamic-selector{margin:0rem;padding:0rem;}button.__jsx-style-dynamic-selector{width:100%;max-width:100%;padding:0;margin:0;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9jb21wb25lbnRzL2Nvb2tpZXMvY29va2llQmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDZSxBQUdvQixBQVVnQixBQVNkLEFBSThCLEFBV2pDLEFBR0EsQUFJUSxBQU1OLEFBSUwsQUFNYSxBQU1ZLEFBSXRCLEFBSUQsU0FuQkQsRUFvQkssQ0FKRixDQWpDZixDQWxDVSxBQStDRSxFQTVCRixHQWlDVCxJQW5EZSxDQStDZixDQTVCRCxBQWdEQyxDQUlXLEdBOURRLEtBcURGLEVBVVAsRUF2RUUsT0F3RVosQ0FuRGMsRUFaRCxFQVJ3QixBQXNDdkIsQUF1QmQsVUF4Q3lDLElBa0J6QixVQUxJLElBb0JSLEVBZGIsSUF2Q3dCLEtBc0RULEtBcEJmLE9BYmdCLENBa0NGLFlBQ2IsRUFsQ1csTUFkUSxLQWVILGdCQUNKLFlBQ29CLGdDQUNqQixJQWpCSixLQVJXLE1BU1YsQUFpQmIsWUFoQm1CLGtCQUNuQixnQkFWQSIsImZpbGUiOiIvVXNlcnMvdGhvbWFzcGF0ZWwvRG9jdW1lbnRzL2VudHJlcHJlbmV1ci1zaXRlLW5leHQvY29tcG9uZW50cy9jb29raWVzL2Nvb2tpZUJhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uL3RoZW1lL2Jhc2VDc3NcIjtcbmltcG9ydCBSaXBwbGVzIGZyb20gXCIuLi9CdXR0b24vUmlwcGxlc1wiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vLi4vdXRpbHMvQ29udGV4dFwiO1xuXG5jb25zdCBDb29raWVCYW5uZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHsgY29va2llLCBoYW5kbGVTdGF0ZSB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuXHRjb25zdCBjaGFuZ2VDb29raWUgPSAoKSA9PiB7XG5cdFx0Ly9zZXQgZXhwaXJ5IHRvIDEwIG1pbnV0ZXM6LSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEwICogNjAgKiAxMDAwKVxuXHRcdGNvbnN0IGV4cGlyeURhdGUgPSBwcm9jZXNzLmVudi5DT09LSUVfQUNDRVBUX0VYUElSWTsgLy9EYXlzXG5cblx0XHRDb29raWUuc2V0KFwiY29va2llLWFjY2VwdFwiLCBKU09OLnN0cmluZ2lmeShmYWxzZSksIHtcblx0XHRcdGV4cGlyZXM6IE51bWJlcihleHBpcnlEYXRlKSxcblx0XHR9KTtcblx0XHRoYW5kbGVTdGF0ZSh7IGNvb2tpZTogZmFsc2UgfSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e2Nvb2tpZSAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtYm94XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydC1ib3gtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0V2UgdXNlIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBwb3NzaWJsZS5cblx0XHRcdFx0XHRcdFx0Q2Fycnkgb24gYnJvd3NpbmcgaWYgeW91J3JlIG9rYXkgd2l0aCB0aGlzLCBvciBmaW5kIG91dCBob3cgdG9cblx0XHRcdFx0XHRcdFx0bWFuYWdlIGNvb2tpZXMgaW4gb3VyIENvb2tpZSBTZXR0aW5ncy4gSW4gYWRkaXRpb24sIGJ5IG5hdmlnYXRpbmdcblx0XHRcdFx0XHRcdFx0b24gdGhpcyB3ZWJzaXRlIHlvdSBhY2tub3dsZWRnZSB0aGF0IENvb2tpZXMgbWF5IGJlIHVzZWQgdG8gc2VydmVcblx0XHRcdFx0XHRcdFx0eW91IHBlcnNvbmFsaXplZCBhZHMgdGhyb3VnaG91dCB5b3VyIG9ubGluZSBleHBlcmllbmNlLiBUbyBsZWFyblxuXHRcdFx0XHRcdFx0XHRtb3JlIG9yIGRpc2FibGUgdGhpcyBzZXJ2aWNlIHBsZWFzZSBjb25zdWx0IG91cntcIiBcIn1cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb29raWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0Q29va2llIFBvbGljeS5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29va2llLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PFJpcHBsZXMgY29sb3I9e3RoZW1lLnJpcHBsZUNvbG9yfT5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2NoYW5nZUNvb2tpZX0+QWNjZXB0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvUmlwcGxlcz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5hbGVydC1ib3gge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmVmZWZlO1xuXHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG5cdFx0XHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hbGVydC1ib3gtd3JhcHBlciB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmJhbm5lci1jb250ZW50IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG5cdFx0XHRcdFx0Y29sb3I6ICNmZWZlZmU7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udH07XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDByZW0gMi4xcmVtIDByZW0gMi4xcmVtO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b246Zm9jdXMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNvb2tpZS13cmFwcGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMS4ycmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5saW5rIHtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZWZlZmU7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRAa2V5ZnJhbWVzIHNsaWRlSW4ge1xuXHRcdFx0XHRcdGZyb20ge1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAtMzAwcHg7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0byB7XG5cdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0XHRcdC5hbGVydC1ib3gtd3JhcHBlciB7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwcmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYmFubmVyLWNvbnRlbnQge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMHJlbSAwLjc1cmVtIDByZW0gMC43NXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jb29raWUtd3JhcHBlciB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDByZW07XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwcmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvb2tpZUJhbm5lcjtcbiJdfQ== */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/components/cookies/cookieBanner.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (CookieBanner);

/***/ }),

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/*! exports provided: links, mobileLinks, socialLinks, footerLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileLinks", function() { return mobileLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLinks", function() { return socialLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerLinks", function() { return footerLinks; });
const links = [{
  href: "/people",
  label: "People"
}, {
  href: "/motivation",
  label: "Motivation"
}, {
  href: "/quotes",
  label: "Quotes"
}, {
  href: "/networth",
  label: "Net Worth"
}, {
  href: "/quiz",
  label: "Quiz"
}];
const mobileLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/people",
  label: "People"
}, {
  href: "/motivation",
  label: "Motivation"
}, {
  href: "/quotes",
  label: "Quotes"
}, {
  href: "/networth",
  label: "Net Worth"
}, {
  href: "/quiz",
  label: "Quiz"
}];
const footerLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/contact",
  label: "Contact Us"
}, {
  href: "/terms",
  label: "Terms"
}, {
  href: "/privacy",
  label: "Privacy"
}, {
  href: "/cookies",
  label: "Cookies"
}, {
  href: "/about",
  label: "About Us"
}];
const socialLinks = [{
  href: "https://www.facebook.com/WealthMack-103552984448329/",
  icon: "/static/facebookIcon.png"
}, {
  href: "https://www.bbc.co.uk/",
  icon: "/static/youtubeIcon.png"
}, {
  href: "https://www.bbc.co.uk/",
  icon: "/static/instagramIcon.png"
}, {
  href: "https://twitter.com/wealthmack",
  icon: "/static/twitterIcon.png"
}];


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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/Layout */ "./components/Layouts/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/baseCss */ "./theme/baseCss.js");
var _jsxFileName = "/Users/thomaspatel/Documents/entrepreneur-site-next/pages/_error.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // const social = [
// 	{ name: "description", content: `${helmetMetaComment}` },
// 	{ name: "twitter:title", content: `${helmetTitle}` },
// 	{ name: "twitter:description", content: `${helmetMetaComment}` },
// 	{ name: "twitter:image", content: `${helmetImage}` },
// 	{ property: "og:title", content: `${helmetTitle}` },
// 	{ property: "og:type", content: "article" },
// 	{ property: "og:image", content: `${helmetImage}` },
// 	{ property: "og:description", content: `${helmetMetaComment}` },
// ];

const DefaultError = () => {
  return __jsx(_components_Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "404 Error")), __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]) + " " + "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "404 Error"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]) + " " + "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "The page you requested does not exist or has moved."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Click\xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1488045495", [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize]]]) + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "here")), "\xA0to get back to the Home page.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1488045495",
    dynamic: [_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font, _theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize],
    __self: undefined
  }, `.content.__jsx-style-dynamic-selector{margin-bottom:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;line-height:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].lineHeight};text-align:center;}.link.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:black;font-weight:900;}.main-title.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font};margin-top:3.5rem;font-size:2.8em;font-weight:700;color:#101010;text-transform:uppercase;}.main-content.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font};font-size:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize};color:#101010;}.main-content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:center;}section.__jsx-style-dynamic-selector{padding-top:5rem;padding-bottom:4rem;}@media only screen and (max-width:960px){.content.__jsx-style-dynamic-selector{margin-bottom:5rem;width:100%;min-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:70%;margin:0 auto;}.main-title.__jsx-style-dynamic-selector{text-align:center;}.main-content.__jsx-style-dynamic-selector{font-family:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].font};font-size:${_theme_baseCss__WEBPACK_IMPORTED_MODULE_5__["theme"].fontSize};font-weight:300;color:#101010;width:80%;margin:0 auto;margin-bottom:5rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNLLEFBRzBCLEFBUUUsQUFLb0IsQUFRQSxBQUt2QixBQUdELEFBS0csQUFVRCxBQUd1QixpQkFqQnRCLENBSHJCLEFBa0JDLENBNUNhLEFBa0NELFdBQ0ksT0FMakIsSUFqQm1CLEFBUXFCLEFBMEJDLElBWDFCLEtBNUJGLFNBTUksR0FMQSxhQU1BLEdBTGpCLEVBWWUsQUEwQkcsV0FoQ0gsRUFmRixDQXNCYixFQTBCZ0IsU0FoQ1UsS0FpQ2QsU0FiRSxDQWNFLFVBakNoQixJQWtDcUIsbUJBQ3BCLFdBbkRzQiwwQkFvQ0Msb0RBbkNrQiwwQkFvQzlCLFVBQ0ksS0FwQ0csU0FxQ2xCLFNBcENEIiwiZmlsZSI6Ii9Vc2Vycy90aG9tYXNwYXRlbC9Eb2N1bWVudHMvZW50cmVwcmVuZXVyLXNpdGUtbmV4dC9wYWdlcy9fZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi90aGVtZS9iYXNlQ3NzXCI7XG4vLyBjb25zdCBzb2NpYWwgPSBbXG4vLyBcdHsgbmFtZTogXCJkZXNjcmlwdGlvblwiLCBjb250ZW50OiBgJHtoZWxtZXRNZXRhQ29tbWVudH1gIH0sXG4vLyBcdHsgbmFtZTogXCJ0d2l0dGVyOnRpdGxlXCIsIGNvbnRlbnQ6IGAke2hlbG1ldFRpdGxlfWAgfSxcbi8vIFx0eyBuYW1lOiBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiwgY29udGVudDogYCR7aGVsbWV0TWV0YUNvbW1lbnR9YCB9LFxuLy8gXHR7IG5hbWU6IFwidHdpdHRlcjppbWFnZVwiLCBjb250ZW50OiBgJHtoZWxtZXRJbWFnZX1gIH0sXG4vLyBcdHsgcHJvcGVydHk6IFwib2c6dGl0bGVcIiwgY29udGVudDogYCR7aGVsbWV0VGl0bGV9YCB9LFxuLy8gXHR7IHByb3BlcnR5OiBcIm9nOnR5cGVcIiwgY29udGVudDogXCJhcnRpY2xlXCIgfSxcbi8vIFx0eyBwcm9wZXJ0eTogXCJvZzppbWFnZVwiLCBjb250ZW50OiBgJHtoZWxtZXRJbWFnZX1gIH0sXG4vLyBcdHsgcHJvcGVydHk6IFwib2c6ZGVzY3JpcHRpb25cIiwgY29udGVudDogYCR7aGVsbWV0TWV0YUNvbW1lbnR9YCB9LFxuLy8gXTtcblxuY29uc3QgRGVmYXVsdEVycm9yID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPjQwNCBFcnJvcjwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+NDA0IEVycm9yPC9oMT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHA+VGhlIHBhZ2UgeW91IHJlcXVlc3RlZCBkb2VzIG5vdCBleGlzdCBvciBoYXMgbW92ZWQuPC9wPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdENsaWNrJm5ic3A7XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibGlua1wiPmhlcmU8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0Jm5ic3A7dG8gZ2V0IGJhY2sgdG8gdGhlIEhvbWUgcGFnZS5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuY29udGVudCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cmVtO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0fTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmxpbmsge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1haW4tdGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udH07XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzLjVyZW07XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMTAxMDEwO1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1haW4tY29udGVudCB7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJHt0aGVtZS5mb250fTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZX07XG5cdFx0XHRcdFx0XHRjb2xvcjogIzEwMTAxMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1haW4tY29udGVudCBwIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VjdGlvbiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNXJlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG5cdFx0XHRcdFx0XHQuY29udGVudCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVyZW07XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubWFpbi10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5tYWluLWNvbnRlbnQge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJHt0aGVtZS5mb250fTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplfTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMxMDEwMTA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cmVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0RXJyb3I7XG4iXX0= */
/*@ sourceURL=/Users/thomaspatel/Documents/entrepreneur-site-next/pages/_error.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultError);

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

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomaspatel/Documents/entrepreneur-site-next/pages/_error.js */"./pages/_error.js");


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=_error.js.map