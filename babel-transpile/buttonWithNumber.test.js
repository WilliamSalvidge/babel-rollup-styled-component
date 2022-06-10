"use strict";

var _react = require("@testing-library/react");

require("@testing-library/jest-dom");

var _react2 = _interopRequireDefault(require("react"));

var _buttonWithNumber = _interopRequireDefault(require("./buttonWithNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('does button show correct number', function () {
  var _render = (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_buttonWithNumber["default"], {
    number: 3
  })),
      getByRole = _render.getByRole;

  expect(getByRole('button')).toHaveTextContent('3');
});
it('button should be green', function () {
  var _render2 = (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_buttonWithNumber["default"], null)),
      getByRole = _render2.getByRole;

  expect(getByRole('button')).toHaveStyle('background-color: green');
});