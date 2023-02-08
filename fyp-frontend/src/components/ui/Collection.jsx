import React, { useState } from "react";

const Collection = ({collection}) => {
    const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className="relative hover:cursor-pointer">
        <img src={collection.img} width="300" alt={collection.cName} />
        <h2 className="text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{collection.cName}</h2>
        <div className={`transition-all duration-500 ease-in text-center text-2xl text-white absolute ${open ? 'bottom-10 opacity-100' : 'bottom-0'} block left-1/2 -translate-x-1/2 font-semibold h-20 w-full px-6 py-2 :md:px-8 rounded-sm z-10`}>{collection.cName}</div>
        <a className={`transition-all duration-500 ease-in ${open ? 'bottom-6 opacity-100' : '-bottom-20 opacity-0'} absolute block left-1/2 -translate-y-1/2  -translate-x-1/2 text-white underline text-lg md:text-xl font-semibold z-10`}>Shop Now</a>
        <div className={`transition-all duration-500 ease-in absolute bottom-0 z-0 block left-1/2 -translate-x-1/2 font-semibold h-full w-full bg-gradient-to-t from-gray-400  px-6 py-2 :md:px-8 rounded-sm`}></div>
    </div>

    )
};

export default Collection;
