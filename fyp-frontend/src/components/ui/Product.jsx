import React, { useState } from "react";


const Product = ({product}) => {
    const [open, setOpen] = useState(false);

  return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className="overflow-hidden relative hover:cursor-pointer w-full md:max-w-sm flex flex-col justify-center items-center content-center h-full px-3 py-6 my-4 md:my-6">
            <img className="object-cover" loading="lazy" src={product.img} width="300" height="auto" alt={product.pName} />
            <h3 className={`text-center text-lg ${open ? 'text-gray-500' : 'text-gray-800'} block left-10 top-4 py-2 md:px-8 transition-all duration-200 ease-in z-10`}>{product.pName}</h3>
            <p className={`text-center text-lg ${open ? 'text-gray-500' : 'text-gray-800'} block transition-all duration-200 ease-in z-10`}>${product.price}</p>
        </div>

    )
};

export default Product;
