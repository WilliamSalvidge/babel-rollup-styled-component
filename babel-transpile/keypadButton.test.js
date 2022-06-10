"use strict";

var _react = require("@testing-library/react");

require("@testing-library/jest-dom");

var _react2 = _interopRequireDefault(require("react"));

var _styledButton = _interopRequireDefault(require("./styledButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('does button render', function () {
  var _render = (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_styledButton["default"], null, "Hello, world!")),
      getByText = _render.getByText;

  expect(getByText('Hello, world!')).toBeInTheDocument();
});