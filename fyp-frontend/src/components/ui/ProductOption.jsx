import React, { useState } from "react";

const ProductOption = ({ icon, hoverIcon }) => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className="flex justify-center items-center flex-1 h-full hover:bg-gray-100" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        {icon}
        {open && <div className={`absolute z-10 ${open ? 'text-gray-700' : ''}`}>{hoverIcon}</div>}
    </div>
    </>
  )
};

export default ProductOption;
