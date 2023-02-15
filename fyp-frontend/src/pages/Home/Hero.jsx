import React from "react";
import heroImage from '../../assets/hero-image.jpg'

const Hero = () => {
  return(
    <section>
        <div className="hero flex md:items-center w-full md:h-screen bg-blue-50 bg-[url('../../assets/hero-image.jpg')] bg-no-repeat bg-cover h-96 md:bg-none">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-3xl md:max-w-5xl xl:max-w-6xl px-3 py-0 md:px-6 m-auto">
                <div className="max-w-xl text-center md:text-left px-10 bg-gray-50 bg-opacity-50 md:bg-inherit py-5">
                    <h1 className="text-gray-800 text-3xl md:text-4xl font-bold mb-2">Design your home with our collection</h1>
                    <p className="text-gray-800 text-md mb-4">Explore our collection of curated design accessories to add to your home and create a space you love.</p>
                    <button className="text-white text-sm md:text-base font-semibold bg-gray-800 px-6 py-2 :md:px-8 rounded-sm">Explore</button>
                </div>
                <div className="max-w-sm w-full hidden md:block">
                    <img className="h-full object-cover" width="500" height="auto" src={heroImage} alt="Hero Image"/>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Hero;
