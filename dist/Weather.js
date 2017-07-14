module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_KEY = 'ab3b62af06e932c934c1e7b9de501f00';

var Weather = function (_React$Component) {
  _inherits(Weather, _React$Component);

  function Weather(props) {
    _classCallCheck(this, Weather);

    var _this = _possibleConstructorReturn(this, (Weather.__proto__ || Object.getPrototypeOf(Weather)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Weather, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          _this2.setState({
            coordinates: pos.coords
          });
          _this2.checkLocation();
        }, function () {
          _this2.checkLocation();
        }, options);
      }

      setInterval(function () {
        return _this2.checkLocation();
      }, 10 * 60 * 1000);
    }
  }, {
    key: 'checkLocation',
    value: function checkLocation() {
      var _this3 = this;

      if (!this.state.coordinates) {
        fetch('https://ipinfo.io/json').then(function (res) {
          return res.json();
        }).then(function (ip) {
          _this3.setState({
            coordinates: {
              latitude: +ip.loc.split(',')[0],
              longitude: +ip.loc.split(',')[1]
            }
          });

          _this3.fetchForecast();
        });
      } else {
        this.fetchForecast();
      }
    }
  }, {
    key: 'fetchForecast',
    value: function fetchForecast() {
      var _this4 = this;

      var coordinates = this.state.coordinates;

      var API_URL = '//api.openweathermap.org/data/2.5/weather?units=metric&lat=' + coordinates.latitude + '&lon=' + coordinates.longitude + '&appid=' + API_KEY;
      fetch(API_URL).then(function (c) {
        return c.json();
      }).then(function (forecast) {
        _this4.setState({ forecast: forecast });
      });
    }
  }, {
    key: 'renderWeather',
    value: function renderWeather() {
      if (!this.state.forecast) {
        return _react2.default.createElement(
          'div',
          { className: 'weather-container' },
          _react2.default.createElement(
            'p',
            null,
            'Loading...'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'weather-container' },
        _react2.default.createElement(
          'h2',
          null,
          'Weather for ',
          this.state.forecast.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Current temperature: ',
          this.state.forecast.main.temp,
          '\xB0c'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Forecast High: ',
          this.state.forecast.main.temp_max,
          '\xB0c'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Forecast Low: ',
          this.state.forecast.main.temp_min,
          '\xB0c'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Humidity: ',
          this.state.forecast.main.humidity,
          '%'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Wind Speed: ',
          this.state.forecast.wind.speed,
          ' km/h'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderWeather()
      );
    }
  }]);

  return Weather;
}(_react2.default.Component);

exports.default = Weather;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);