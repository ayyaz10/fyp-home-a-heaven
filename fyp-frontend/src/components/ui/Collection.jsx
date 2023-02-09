import React, { useState } from "react";

const Collection = ({collection}) => {
    const [open, setOpen] = useState(false);

  return (
      <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className="overflow-hidden relative hover:cursor-pointer w-full max-w-sm border border-gray-200 flex justify-center items-center content-center h-full">
          <img className={`${open ? 'scale-105' : ''} transition-all duration-500 ease-in`} src={collection.img} width="300" alt={collection.cName} />
          <h2 className={`transition-all duration-300 ease-in text-center text-2xl font-bold absolute ${open ? 'text-white' : 'text-gray-800'} block left-10 top-4 py-2 :md:px-8 z-10`}>{collection.cName}</h2>
          <a className={`transition-all duration-500 ease-in underline text-lg md:text-lg font-semibold absolute ${open ? 'text-white bottom-12 opacity-100' : '-bottom-6 opacity-0'} block left-10 z-10`}>Shop Now</a>
          <div className={`transition-all duration-300 ease-in absolute bottom-0 z-0 block left-1/2 -translate-x-1/2 font-semibold h-full w-full ${open ? 'bg-blue-700 bg-opacity-40' : ''}  px-6 py-2 :md:px-8 rounded-sm`}></div>
    </div>
    )
};

export default Collection;
