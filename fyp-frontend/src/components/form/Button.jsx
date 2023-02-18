import React from "react";

const Button = ({ style, buttonText }) => {
  return (
    <button type="submit" className={style}>{buttonText}</button>
  )
};

export default Button;
