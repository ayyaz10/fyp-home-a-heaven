import React, { useState } from "react";

import ProductOptions from "./ProductOptions";

const Product = ({product}) => {
    const [open, setOpen] = useState(true);

  return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className="overflow-hidden relative hover:cursor-pointer w-full md:max-w-sm flex flex-col justify-center items-center content-center h-full px-3 py-6 my-4 md:my-6">
            <img className="object-cover border" loading="lazy" src={product.img} width="300" height="auto" alt={product.pName} />
            <h3 className={`text-center text-lg ${open ? 'text-gray-500' : 'text-gray-800'} block left-10 top-4 py-2 md:px-8 transition-all duration-200 ease-in z-10`}>{product.pName}</h3>
            <p className={`text-center text-lg ${open ? 'text-gray-500' : 'text-gray-800'} block transition-all duration-200 ease-in z-10`}>${product.price}</p>
            <div className={`flex justify-between w-full text-2xl bg-gray-700 text-white rounded-full absolute transition-all duration-400 ease-in py-3 px-10 z-10 ${open ? 'bottom-28 opacity-100' : '-bottom-0 opacity-0'}`}><ProductOptions /></div>
        </div>

    )
};

export default Product;
