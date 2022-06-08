import React from "react";
import { createRoot } from "react-dom/client";
import StyledTestButton from "./button.js";
import StyleButton from "./styledButton.js";
import StyledDiv from "./styledDiv.js";

const App = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hey again!!!"), /*#__PURE__*/React.createElement(StyledDiv, null, /*#__PURE__*/React.createElement(StyledTestButton, {
    onClick: () => alert('Hey Will!')
  }), /*#__PURE__*/React.createElement(StyleButton, {
    onClick: () => alert('Hey Will!')
  }, "Primary Button"), /*#__PURE__*/React.createElement(StyleButton, {
    primary: true
  }, "Secondary Button")));
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));