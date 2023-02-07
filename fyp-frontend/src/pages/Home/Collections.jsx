import React, { useState } from "react";


const Collections = () => {

    const [open, setOpen] = useState(false);
    
    const collections = [
        {img: '/src/assets/collections/chair.png', cName: 'Chairs'},
        {img: '/src/assets/collections/clock.png', cName: 'Clocks'},
        {img: '/src/assets/collections/lamp.png', cName: 'Lamps'},
        {img: '/src/assets/collections/poster.png', cName: 'Posters'},
        {img: '/src/assets/collections/rack.png', cName: 'Racks'},
        {img: '/src/assets/collections/rug.jpg', cName: 'Rugs'},
        {img: '/src/assets/collections/table.jpg', cName: 'Tables'},
    ]
  return (
        <section className="max-w-3xl md:max-w-5xl xl:max-w-6xl py-10 md:py-16 px-2 md:px-6 m-auto">
            <h2 className=" text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Collections</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center">
                {collections.map((collection, id) => (
                <div className="collection relative bg-slate-400 text-center border" key={id}>
                    <img onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} src={collection.img} width="300" alt={collection.cName} />
                    <h2 className="text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/">{collection.cName}</h2>
                    {open && <button className="absolute bottom-2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-sm md:text-base font-semibold bg-gray-800 px-6 py-2 :md:px-8 rounded-sm">Shop</button>}
                </div>
                ))}
            </div>
        </section>
    )
};

export default Collections;
