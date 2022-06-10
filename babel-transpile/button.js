"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TestButton = function TestButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: className
  }, "Click Me!");
};

var StyledTestButton = (0, _styledComponents["default"])(TestButton)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: palevioletred;\n  color: white;\n"])));
var _default = StyledTestButton;
exports["default"] = _default;