import React, { useState } from "react";
import Collection from "./Collection";

const Collections = () => {
 
    const collections = [
        {img: '/src/assets/collections/chair.png', cName: 'Chairs'},
        {img: '/src/assets/collections/clock.png', cName: 'Clocks'},
        {img: '/src/assets/collections/lamp.png', cName: 'Lamps'},
        // {img: '/src/assets/collections/poster.png', cName: 'Posters'},
        // {img: '/src/assets/collections/rack.png', cName: 'Racks'},
        // {img: '/src/assets/collections/rug.jpg', cName: 'Rugs'},
        // {img: '/src/assets/collections/table.jpg', cName: 'Tables'},
    ]

  return (
    <section className="z-10 max-w-3xl md:max-w-5xl xl:max-w-6xl py-10 md:py-16 px-2 md:px-6 m-auto">
        <h2 className=" text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Collections</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4">
            {collections.map((collection, id) => <Collection key={id} collection={collection}/>)}
        </div>
    </section>
    )
};

export default Collections;
