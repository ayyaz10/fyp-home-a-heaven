import React from "react";
import Input from "./Input";
import Button from "./Button";

const Subscribe = ({inputData, buttonData}) => {
  return (
        <form action="" className="relative mb-6 w-full max-w-lg">
            <Input style={inputData.style} placeHolder={inputData.placeHolder}/>
            <Button style={buttonData.style} buttonText={buttonData.text}/>
        </form>
  )
};

export default Subscribe;
