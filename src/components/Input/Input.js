import React from "react";
import "./Input.css";

function Input(props) {
  const { size = "large", ...rest } = props;
  return <input type="text" className={`input ${size}`} {...rest} />;
}

export default Input;
