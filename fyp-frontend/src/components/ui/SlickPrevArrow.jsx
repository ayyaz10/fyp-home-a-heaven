import React from "react";
const SlickPrevArrow = ({className, style, onClick}) => {
  return (
        <div 
            className="absolute -top-8 right-0 text-1xl font-bold cursor-pointer z-10"
            style={{...style, display: 'block', marginRight: "50px" }}
            onClick={onClick}
        >
               Previous
        </div>
    )
};

export default SlickPrevArrow;
