import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import StyledTestButton from "./button.js";
import StyleButton from "./styledButton.js";
import StyledDiv from "./styledDiv.js";

const App = () => {
  const [isPush, setIsPush] = useState();

  const sendRequest = async () => {
    const result = await fetch(
      "http://localhost:8081"
    );
    const text = await result.text();
    setIsPush(text);
  };

  return (
    <>
      <h1>Hey again!!!</h1>
      <StyledDiv>
        <StyledTestButton
          onClick={() => sendRequest()}
        />
        <StyleButton
          onClick={() => alert("Hey Will!")}
        >
          Primary Button
        </StyleButton>
        <StyleButton primary>
          Secondary Button
        </StyleButton>
      </StyledDiv>
      {isPush ? <p>{isPush}</p> : null}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
