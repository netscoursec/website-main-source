(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/pro-duotone-svg-icons");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(32);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(34);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(17);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(16);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(12);

var _helpers = __webpack_require__(35);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(12);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(33)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(9);

// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/components/Router.js

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(25);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/components/MainMenu.js




var items = [{
  label: 'Product',
  key: 'product' //icon: <MailOutlined />,

}, {
  label: 'Company',
  key: 'company' //icon: <AppstoreOutlined />,

}, {
  label: 'Inquiry',
  key: 'inquiry' //icon: <SettingOutlined />,

}];
function MainMenu() {
  var _useState = Object(external_react_["useState"])('product'),
      _useState2 = slicedToArray_default()(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var onClick = function onClick(e) {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"], {
    onClick: onClick,
    selectedKeys: [current],
    mode: "horizontal"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "product"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "Product")), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "company"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/company"
  }, "Company")), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "inquiry"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/inquiry"
  }, "Inquiry")));
}
{
  /* <div className="main-menu">
       <Link to="/">Product</Link>
       <Link to="/company">Company</Link>
       <Link to="/inquiry">Inquiry</Link>
     </div> */
}
// EXTERNAL MODULE: external "antd/dist/antd.css"
var antd_css_ = __webpack_require__(43);

// EXTERNAL MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/app.css
var app = __webpack_require__(44);

// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/App.js







var Header = external_antd_["Layout"].Header,
    Footer = external_antd_["Layout"].Footer,
    Content = external_antd_["Layout"].Content; // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Layout"], null, /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./img/NetScourSecLogo.png"
  }), " NetScour Security"), /*#__PURE__*/external_react_default.a.createElement(MainMenu, null)), /*#__PURE__*/external_react_default.a.createElement(Content, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))))), /*#__PURE__*/external_react_default.a.createElement(Footer, null)));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(7);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("/home/nutcracker/data/projects/netscoursec/website-main-source/node_modules/react-static/lib/browser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Blog; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/pro-duotone-svg-icons"
var pro_duotone_svg_icons_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(3);

// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/components/CompanyDescriptionItem.js




var Meta = external_antd_["Card"].Meta;
function CompanyDescriptionItem(props) {
  var data = props.data;
  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: data.icon
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    title: data.title,
    description: data.text
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Popover"], {
    content: /*#__PURE__*/external_react_default.a.createElement("ul", null, data.textItems.map(function (i) {
      return /*#__PURE__*/external_react_default.a.createElement("li", null, i);
    }))
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    className: "find-out-more",
    block: true
  }, "Find out more")));
}
// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/components/CompanyDescription.js




var items1 = [{
  icon: pro_duotone_svg_icons_["faVault"],
  title: "Security",
  text: "NetScour Security considers user data sacred and will do everything in our power to protect it",
  textItems: ["We will perform internal penetration tests regularly", "We will perform third-party penetration tests as regularly as possible", "We will start with the bug bounty program as soon as possible", "We will publish security findings on our platform"]
}, {
  icon: pro_duotone_svg_icons_["faUserSecret"],
  title: "Privacy",
  text: "We will never give our customers' data away",
  textItems: ["As previously stated, we consider our users' data sacred", "We will never sell or give away our customers' data", "We will never use our customers' data ourselves", "This is your bread and butter; our task is to protect it."]
}, {
  icon: pro_duotone_svg_icons_["faEye"],
  title: "Transparency",
  text: "We believe in transparency as the primary driver of great relationships",
  textItems: ["As stated earlier, we will publish third-party pentest results as transparently as possible", "We will publish bug bounty finds", "We will always publish bad news when it comes, and we will never wait to do so"]
}];
var items2 = [{
  icon: pro_duotone_svg_icons_["faTrowelBricks"],
  title: "Availability",
  text: "We want to build and provide affordable software security testing tools and services to everyone that needs them",
  textItems: ["We want to make our platform affordable to anyone who wishes to use it", "We will work on modularizing it so that the base license becomes affordable"]
}, {
  icon: pro_duotone_svg_icons_["faPeopleGroup"],
  title: "Community",
  text: "We will always proactively support communication and collaboration both online and in-person",
  textItems: ["We will be organizing online services for learning, code sharing, and information sharing", "We will encourage cooperation and collaboration on all our platforms", "We will be joining as many live events as possible so that our customers can meet us in person"]
}, {
  icon: pro_duotone_svg_icons_["faGlobe"],
  title: "Equality",
  text: "One thing that we will never tolerate is hatred, hate speeches, or any inequality-based degradation or humiliation. Be kind to each other. Period.",
  textItems: ["We pledge to work hard against gender inequalities in the infosec community because gender inequality simply makes no sense", "We will investigate and ban anyone providing any kind of hate speech", "We will work hard to make our community centered around information sharing and networking, not on \"infosec drama.\""]
}];
function CompanyDescription() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "company-description-item-row",
    style: {
      marginTop: "100px"
    },
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    justify: "center"
  }, items1.map(function (item) {
    return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
      xl: {
        span: 5
      }
    }, /*#__PURE__*/external_react_default.a.createElement(CompanyDescriptionItem, {
      data: item
    }));
  })), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "company-description-item-row",
    style: {
      marginBottom: "100px"
    },
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    justify: "center"
  }, items2.map(function (item) {
    return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
      xl: {
        span: 5
      }
    }, /*#__PURE__*/external_react_default.a.createElement(CompanyDescriptionItem, {
      data: item
    }));
  })));
}
// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/pages/company.js





function Blog() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "company-page"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    justify: "center"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    span: 16
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "platform-name"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: pro_duotone_svg_icons_["faBuildingShield"]
  }), " NetScour Security"), " - the company"), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Mission"), /*#__PURE__*/external_react_default.a.createElement("p", null, "To build a next-generation platform for software security testing."), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Vision"), /*#__PURE__*/external_react_default.a.createElement("p", null, "To provide quality tools and services for software security testing that will be affordable to everyone."))), /*#__PURE__*/external_react_default.a.createElement(CompanyDescription, null), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    justify: "center",
    style: {
      marginTop: "100px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 10
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    block: true,
    className: "shout-button"
    /*onClick={() => document.location = "/visit"}*/

  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: pro_duotone_svg_icons_["faMegaphone"]
  }), " Interested? Give us a shout!"))));
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(3);

// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/components/PlatformDescriptionItem.js


var items = [{
  image: "./img/platform/project-details.png",
  textItems: ["Easily access project notes and information", "Manage initial seed resources", "Review changes from automated scans"]
}, {
  image: "./img/platform/automation.png",
  textItems: ["Use publicly available tools as well as the proprietary nodes", "Run the workflows manually or schedule them", "Set them up to be triggered from outside environments", "Observe the changes between the scan runs", "Get alerted on changes or interesting finds", "Automatically generate reports or add information to notes"]
}, {
  image: "./img/platform/attack-surface.png",
  textItems: ["Review discovered resources and their relationships", "Review discovered CVE-s, bugs, keys, and other loot", "Expand the attack surface by automatic discovery workflows or by manual testing", "Execute per-resource tools to perform manual inspection, discovery, or attack", "Import resources from other tools"]
}, {
  image: "./img/platform/report-templates.png",
  textItems: ["Build report templates, either for client reports or internal technical reports", "Fill them up automatically by running workflows or manual tools", "Update them manually as needed and review them easily", "Build mind maps and checklists for your internal use"]
}, {
  image: "./img/platform/knowledge-base.png",
  textItems: ["Keep the knowledge base and project notes as correlated pieces of information", "Effortlessly locate your notes related to discovered resources, like ports and services, directly from the attack surface monitor", "Effortlessly locate your knowledge base notes related to tools and procedures directly from the flowgraphs and manual run screens"]
}, {
  image: "./img/platform/timeline.png",
  textItems: ["The platform will automatically keep the timeline for you", "Set up what goes into the timeline and how it is displayed", "Manually edit the timeline", "Automatically use the timeline in your reports"]
}, {
  image: "./img/platform/collaboration.png",
  textItems: ["Collaborate with your team, company, or fellow hackers", "Selectively share the pieces of your knowledgebase", "Jointly edit the project notes, group knowledgebase, or project information", "Split the tasks, and create the tickets in one of the supported ticketing systems"]
}];
function PlatformDescriptionItem() {
  return items.map(function (item, idx) {
    return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
      className: "platform-description-item-row",
      gutter: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32
      },
      align: "middle",
      justify: "center"
    }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
      xl: {
        span: 8,
        push: idx % 2 == 0 ? 0 : 8
      }
    }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Image"], {
      src: item.image
    })), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
      xl: {
        span: 8,
        pull: idx % 2 == 0 ? 0 : 8
      }
    }, /*#__PURE__*/external_react_default.a.createElement("ul", null, item.textItems.map(function (textItem) {
      return /*#__PURE__*/external_react_default.a.createElement("li", null, textItem);
    }))));
  });
}
// EXTERNAL MODULE: external "@fortawesome/pro-duotone-svg-icons"
var pro_duotone_svg_icons_ = __webpack_require__(2);

// CONCATENATED MODULE: /home/nutcracker/data/projects/netscoursec/website-main-source/src/pages/index.js





var Meta = external_antd_["Card"].Meta;
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "main-body"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "app-logo"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 2,
      offset: 3
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./img/ScourNomadLogo.png"
  })), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: 8
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "intro-text"
  }, "NetScour Security presents"), /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "header1"
  }, "ScourNomad"), /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "header2"
  }, "Redefining infosec toolbox"))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "initial-description",
    justify: "center"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 16
    }
  }, /*#__PURE__*/external_react_default.a.createElement("h3", null, "Build and execute your software security testing methodologies quickly and easily with ", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "platform-name"
  }, "ScourNomad.")), /*#__PURE__*/external_react_default.a.createElement("p", null, "The goal of the ScourNomad platform is to reduce the security experts' time and effort performing mundane tasks and improve testing performance. It enhances the penetration tests and bug hunts speed and precision, providing easy-to-use interfaces and powerful integrations."))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "initial-description",
    justify: "center",
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 4
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: pro_duotone_svg_icons_["faBugs"]
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    description: "Build security testing methodologies"
  }))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 4
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: pro_duotone_svg_icons_["faGears"]
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    description: "Automate what can be automated"
  }))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 4
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: pro_duotone_svg_icons_["faRadar"]
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    description: "Discover resources and loot by automated or manual security testing"
  })))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "initial-description",
    justify: "center",
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 4
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: pro_duotone_svg_icons_["faListCheck"]
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    description: "Build easy notes and reports"
  }))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 4
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: pro_duotone_svg_icons_["faSignsPost"]
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    description: "Visualize your tasks with checklists and mindmaps"
  }))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 4
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: pro_duotone_svg_icons_["faBrainCircuit"]
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Meta, {
    description: "Correlate your knowledge base with the attack surface resources"
  })))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    className: "initial-description",
    justify: "center",
    style: {
      marginTop: "100px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 16
    }
  }, /*#__PURE__*/external_react_default.a.createElement("h3", null, "How ", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "platform-name"
  }, "ScourNomad"), " platform works:"), /*#__PURE__*/external_react_default.a.createElement("p", null, "ScourNomad platform will provide multiple user interfaces to cover all the tasks that software security professionals require on the daily basis."))), /*#__PURE__*/external_react_default.a.createElement(PlatformDescriptionItem, null), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    justify: "center",
    style: {
      marginTop: "100px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xl: {
      span: 10
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    block: true,
    className: "shout-button"
    /*onClick={() => document.location = "/visit"}*/

  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: pro_duotone_svg_icons_["faMegaphone"]
  }), " Interested? Give us a shout!"))));
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(8);

var _router = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(29);
module.exports = __webpack_require__(36);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(28)["default"];

var _require = __webpack_require__(14),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(14),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(30),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);








Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/company.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/company */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/company.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/company";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/company.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/company.js': t_1,
  '__react_static_root__/src/pages/index.js': t_2
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 7,
	"./": 7,
	"./index": 7,
	"./index.js": 7
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(16);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(17);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(18);

var _interopRequireWildcard = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(37);

var _Suspense = _interopRequireDefault(__webpack_require__(38));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(41)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("/home/nutcracker/data/projects/netscoursec/website-main-source/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(19);

var _interopRequireDefault = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("antd/dist/antd.css");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// Imports
var urlEscape = __webpack_require__(46);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(47));

// Module
exports.push([module.i, "/* ========== General elements ========== */\n\n* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  background-color: #111;\n  color: #CCC;\n  overflow-x: clip;\n}\n\na {\n  text-decoration: none;\n  color: #9e70c7;\n  font-weight: bold;\n}\n\nh1, h2, h3, h4, h5 {\n  color: #CCC;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.content,\n.main-body,\n.ant-layout {\n  background-color: #1F1F1F;\n}\n\n.platform-name {\n  color: #9e70c7;\n}\n\n.ant-popover-inner-content,\n.ant-popover-arrow-content {\n  background-color: #3f3f3f;\n  --antd-arrow-background-color: #3f3f3f;\n  color: #CCC;\n}\n\n/* ========== Header ========== */\n\n.ant-layout-header {\n  background-color: #1F1F1F;\n  color: #CCC;\n  z-index: 100;\n\n  /* Test */\n  position: fixed;\n  width: 100%;\n  box-shadow: #111 0px 5px 5px;\n}\n\n.ant-layout-header .ant-menu {\n  float: right;\n  background-color: #1F1F1F;\n  border: 0;\n  width: 300px;\n}\n\n.ant-layout-header .ant-menu li a {\n  color: #9e70c7 !important;\n}\n\n.ant-layout-header .ant-menu li:hover a {\n  color: #cf9ff8 !important;\n}\n\n.ant-layout-header .ant-menu li:active,\n.ant-layout-header .ant-menu li:focus-visible {\n  background-color: #1F1F1F;\n  box-shadow: none;\n}\n\n.ant-layout-header .ant-menu li:hover::after {\n  border-bottom: 2px solid #9e70c7 !important;\n}\n\n.ant-layout-header .logo {\n  float: left;\n}\n\n.ant-layout-header li.ant-menu-item-selected a {\n  color: #cf9ff8 !important;\n  font-weight: bold;\n}\n\n.ant-layout-header li.ant-menu-item-selected::after {\n  border-bottom: 2px solid #cf9ff8 !important;\n}\n\n.logo img {\n  height: 50px;\n}\n\n/* ========== Content ========== */\n\n/* App logo */\n\n.app-logo {\n  padding: 250px 0 550px 0;\n  background:\n    url(" + ___CSS_LOADER_URL___0___ + ");\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-color: #333;\n  background-position-x: center;\n  background-position-y: 0px;\n  background-size: cover;\n  position: relative;\n  top: -64px;\n  /* opacity: 0.7; */\n}\n\n.app-logo .intro-text {\n  font-size: 16px;\n  text-shadow: 10px 10px 2px #222;\n  color: #CCC;\n  padding: 10px 0 0 0;\n  display: block;\n}\n\n.app-logo .header1 {\n  color: #b62025;\n  font-size: 60px;\n  line-height: 60px;\n  margin: 0;\n  text-shadow: 10px 10px 2px #222;\n}\n\n.app-logo .header2 {\n  text-shadow: 10px 10px 2px #222;\n  color: #CCC;\n}\n\n.app-logo img {\n  filter: drop-shadow(10px 10px 2px #222);\n}\n\n/* App logo - end */\n\n/* Initial Description */\n\n.initial-description {\n  margin-bottom: 50px;\n}\n\n.initial-description h3 {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 30px;\n}\n\n.initial-description .ant-card {\n  background-color: #333;\n  color: #CCC;\n  border: none;\n  padding-top: 40px;\n  height: 100%;\n  box-shadow: #111 5px 5px 20px;\n}\n\n.initial-description .ant-card:hover {\n  background-color: #3F3F3F;\n  transition: 0.3s;\n}\n\n.initial-description .ant-card svg {\n  font-size: 100px;\n  color: #9e70c7;\n}\n\n.initial-description .ant-card .ant-card-meta-description {\n  color: #CCC !important;\n  text-align: center;\n  width: 100%;\n}\n\n.initial-description .ant-card .ant-card-meta-detail {\n  width: 100%;\n}\n\n/* Initial Description - end*/\n\n/* Platform description item */\n\n.platform-description-item-row {\n  margin-bottom: 100px;\n}\n\n.platform-description-item-row ul\n{\n  margin: 30px;\n}\n\n.platform-description-item-row .ant-image {\n  box-shadow: #111 5px 5px 20px;\n  margin: 30px;\n}\n\n/* Platform description item - end */\n\n/* Company page */\n\n.company-page h2 {\n  font-size: 40px;\n  margin-top: 150px;\n}\n\n.company-page h3 {\n  font-size: 30px;\n}\n\n.company-page .ant-card {\n  background-color: #333;\n  color: #CCC;\n  border: none;\n  padding-top: 40px;\n  height: 100%;\n  box-shadow: #111 5px 5px 20px;\n}\n\n.company-page .ant-card:hover {\n  background-color: #3F3F3F;\n  transition: 0.3s;\n}\n\n.company-page .ant-card svg {\n  font-size: 100px;\n  color: #9e70c7;\n}\n\n.company-page .ant-card .ant-card-meta-description {\n  color: #CCC !important;\n  text-align: left;\n  width: 100%;\n  min-height: 66px;\n}\n\n.company-page .ant-card .ant-card-meta-title {\n  color: #CCC;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.company-page .ant-card .ant-card-meta-detail {\n  width: 100%;\n}\n\n.company-page .ant-card .ant-btn.find-out-more {\n  margin-top: 30px;\n  background-color: #3f3f3f !important;\n  color: #CCC;\n  border: none;\n}\n\n.company-description-item-row {\n  margin: 50px 0;\n}\n\n/* Company page - end */\n\n/* Shout Button */\n\n.shout-button,\n.shout-button:active,\n.shout-button:focus {\n  height: 60px;\n  font-size: 25px;\n  font-weight: bold;\n  background-color: #333;\n  color: #CCC;\n  margin-bottom: 100px;\n  border: none;\n}\n\n.shout-button:hover {\n  background-color: #3F3F3F;\n  color: #CCC;\n}\n\n.shout-button svg {\n  font-size: 20px;\n  color: #9e70c7;\n}\n\n.shout-button span {\n  font-size: 20px;\n  margin-left: 15px;\n}\n\n/* Shout button - end */\n\n/* ========== Footer ========== */\n\nfooter {\n  min-height: 200px;\n  background-color: #111 !important;\n  flex: 0 1 200px;\n}", ""]);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/background1.cc1e5246.png";

/***/ })
/******/ ]);
});