import React from "react";
import Subscribe from "../../components/form/Subscribe";
import CountDown from "../../components/ui/CountDown";

const SpecialOffer = () => { 

  return (
    <div className="bg-orange-100 py-20 lg:py-28">
        <div className="flex justify-around md:gap-10 flex-col md:flex-row items-center max-w-7xl m-auto px-6 sm:px-24 md:px-10">
            <div className="col-1 md:flex-1 lg:flex-initial">
                <img src="src/assets/products/bg-removed-aleksandra-chair.png" loading="lazy" alt="Offered Product Image" />
            </div>
            <div className="col-2 flex-1 m-auto lg:m-0 max-w-lg w-full">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-10 md:mt-0">Weeky Sale on 60% Off All Products</h3>
                <CountDown />
                <div className="mt-10">
                    <Subscribe inputData={{style:"w-full py-4 px-6 rounded-tl rounded-bl", placeHolder: "Enter Email Address"}} buttonData={{style:"absolute right-0 bg-gray-800 hover:bg-gray-900 text-white font-semibold bg-white py-4 px-6 rounded-tr rounded-br transition duration-700 ease-in-out", text: "Book Now"}}/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SpecialOffer;
