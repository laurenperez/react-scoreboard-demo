import React from "react";
import "./Button.css";

const Button = (props) => (
  <div
    className={`default-button ${props.buttonStyle}`}
    onClick={props.handleClick}
  >
    {props.buttonText}
  </div>
);

export default Button;
