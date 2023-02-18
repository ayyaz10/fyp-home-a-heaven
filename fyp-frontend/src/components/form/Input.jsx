import React from "react";

const Input = ({ style, placeHolder }) => {
  return (
    <input type="text" className={style} placeholder={placeHolder} />
  )
};

export default Input;
