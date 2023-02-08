import React, { useState } from "react";

const Collection = ({collection}) => {
    const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className="overflow-hidden relative hover:cursor-pointer h-full rounded-3xl border border-gray-100">
        <img className={`${open ? 'scale-105' : ''} transition-all duration-500 ease-in`} src={collection.img} width="300" alt={collection.cName} />
        <h2 className={`transition-all duration-500 ease-in text-center text-2xl text-white absolute ${open ? 'bottom-10 opacity-100' : 'bottom-0'} block left-1/2 -translate-x-1/2 font-semibold h-20 w-full px-6 py-2 :md:px-8 rounded-sm z-10`}>{collection.cName}</h2>
        <a className={`transition-all duration-500 ease-in text-white underline text-lg md:text-lg font-semibold absolute ${open ? 'bottom-6 opacity-100' : '-bottom-6 opacity-0'} block left-1/2 -translate-y-1/2  -translate-x-1/2 z-10`}>Shop Now</a>
        <div className={`absolute bottom-0 z-0 block left-1/2 -translate-x-1/2 font-semibold h-40 w-full bg-gradient-to-t from-gray-800  px-6 py-2 :md:px-8 rounded-sm`}></div>
    </div>

    )
};

export default Collection;
