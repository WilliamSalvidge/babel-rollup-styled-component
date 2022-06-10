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

var ButtonWithNumber = function ButtonWithNumber(props) {
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: props.style
  }, props.number);
};

var StyledButtonWithNumber = (0, _styledComponents["default"])(ButtonWithNumber)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: green;\n"])));
console.log(StyledButtonWithNumber);
var _default = StyledButtonWithNumber;
exports["default"] = _default;