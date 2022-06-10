import React from "react";
import styled from 'styled-components';

const ButtonWithNumber = (props) => {
    return <button className={props.className}>{props.number}</button>
}

const StyledButtonWithNumber = styled(ButtonWithNumber)`
    color: green;
`;

export default StyledButtonWithNumber;