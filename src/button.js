import React from "react";
import styled from 'styled-components';

const TestButton = ({ className, onClick }) => {
    return <button onClick={onClick} className={className}>Click Me!</button>
};

const StyledTestButton = styled(TestButton)`
  background: palevioletred;
  color: white;
`;

export default StyledTestButton;