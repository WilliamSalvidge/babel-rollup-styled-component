import React from "react";
import styled from 'styled-components';

const TestButton = ({
  className,
  onClick
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: className
  }, "Click Me!");
};

const StyledTestButton = styled(TestButton)`
  background: palevioletred;
  color: white;
`;
export default StyledTestButton;