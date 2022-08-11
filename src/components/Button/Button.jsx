import React from "react";
import "./button.css";

const Button = ({ handleClick }) => {
  return (
    <div className="button-form-btn">
      <button className="button-btn" onClick={handleClick}>
        Next
      </button>
      <p>Cancel Payment</p>
    </div>
  );
};

export default Button;
