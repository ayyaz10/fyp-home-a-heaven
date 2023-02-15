import React, { useState } from "react";

import ProductOptions from "./ProductOptions";

const Product = ({product}) => {
    const [open, setOpen] = useState(false);

  return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className="overflow-hidden relative hover:cursor-pointer w-full md:max-w-sm flex flex-col justify-center items-center content-center h-full px-3 my-4 md:my-6">
            <div className="flex justify-center relative overflow-hidden">
                <img className={`object-cover ${open ? 'scale-105' : ''} h-96 transition-all duration-800 ease-in`} loading="lazy" src={product.img} width="300" height="" alt={product.pName} />
                <div className={`absolute ${open ? 'bottom-6  opacity-100' : 'bottom-0 opacity-0'} flex justify-center items-center w-36 h-full max-h-10 md:w-40 text-2xl bg-gray-700 text-white transition-all duration-400 ease-in z-10 rounded-sm`}>
                    <ProductOptions />
                </div>
            </div>
                
            <h3 className={`text-center text-lg ${open ? 'text-gray-500' : 'text-gray-800'} block left-10 top-4 py-2 md:px-8 transition-all duration-200 ease-in z-10`}>{product.pName}</h3>
            <p className={`text-center text-lg ${open ? 'text-gray-500' : 'text-gray-800'} block transition-all duration-200 ease-in z-10`}>${product.price}</p>
        </div>

    )
};

export default Product;
