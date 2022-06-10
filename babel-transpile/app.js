"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = require("react-dom/client");

var _button = _interopRequireDefault(require("./button.js"));

var _styledButton = _interopRequireDefault(require("./styledButton.js"));

var _styledDiv = _interopRequireDefault(require("./styledDiv.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hey again!!!"), /*#__PURE__*/_react["default"].createElement(_styledDiv["default"], null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: function onClick() {
      return alert('Hey Will!');
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledButton["default"], {
    onClick: function onClick() {
      return alert('Hey Will!');
    }
  }, "Primary Button"), /*#__PURE__*/_react["default"].createElement(_styledButton["default"], {
    primary: true
  }, "Secondary Button")));
};

var container = document.getElementById('root');
var root = (0, _client.createRoot)(container);
root.render( /*#__PURE__*/_react["default"].createElement(App, null));