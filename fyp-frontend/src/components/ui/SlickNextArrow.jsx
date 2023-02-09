import React from "react";
const SlickNextArrow = ({className, style, onClick}) => {
  return (
        <div 
            className="absolute -top-8 right-0 text-1xl font-semibold cursor-pointer z-10"
            style={{...style, display: 'block'}}
            onClick={onClick}
        >
             | Next
        </div>
    )
};

export default SlickNextArrow;
