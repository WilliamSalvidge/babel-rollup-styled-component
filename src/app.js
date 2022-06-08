import React from "react";
import { createRoot } from "react-dom/client";
import StyledTestButton from "./button.js";
import StyleButton from "./styledButton.js";
import StyledDiv from "./styledDiv.js";

const App = () => {
    return (
        <>
            <h1>Hey again!!!</h1>
            <StyledDiv>
                <StyledTestButton onClick={() => alert('Hey Will!')}/>
                <StyleButton onClick={() => alert('Hey Will!')}>Primary Button</StyleButton>
                <StyleButton primary>Secondary Button</StyleButton>
            </StyledDiv>
        </>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)