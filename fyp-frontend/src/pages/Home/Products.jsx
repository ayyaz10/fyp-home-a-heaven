import React from "react";
import Slider from "react-slick";

import Product from "../../components/ui/Product";
import SlickPrevArrow from '../../components/ui/SlickPrevArrow';
import SlickNextArrow from '../../components/ui/SlickNextArrow';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
    const products = [
        {img: '/src/assets/products/izadora-table-lamp.png', pName: 'Izadora Table Lamp',  price: "120.00"},
        {img: '/src/assets/products/ross-table-lamp.png', pName: 'Ross Table Lamp',  price: "120.00"},
        {img: '/src/assets/products/bedeck-table-lamp.png', pName: 'Bedeck Table Lamp',  price: "120.00"},
        {img: '/src/assets/products/dorothy-book-rack.png', pName: 'Dorothy Book Rack',  price: "120.00"},
        {img: '/src/assets/products/melanie-book-shelf-and-rack.jpg', pName: 'Melanie Book Shelf & Rack',  price: "120.00"},
        {img: '/src/assets/products/ashlore-coffee-table.jpg', pName: 'Shlore Coffe Table',  price: "120.00"},
        {img: '/src/assets/products/altari-coffee-table.jpg', pName: 'Altari Coffee Table',  price: "120.00"},
        {img: '/src/assets/products/classic-coastal-clock.png', pName: 'Classic Coastal Clock',  price: "120.00"},
        {img: '/src/assets/products/markhor-brass-wall-clock.png', pName: 'Markhor Brass Wall Clock',  price: "120.00"},
        {img: '/src/assets/products/thanlyin-cushioned-chair--orange-and-pink.png', pName: 'Thanlyin Cushioned Chair Orange & Pink',  price: "120.00"},
        {img: '/src/assets/products/hashme-lounge-chair.png', pName: 'Hashme Lounge Chair', price: "120.00"},
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        // autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 2,
        lazyLoad: true,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };
  return (    
      <section className="max-w-3xl md:max-w-5xl xl:max-w-6xl py-10 md:py-16 px-2 md:px-6 m-auto z-10">
        <h2 className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-20 md:mb-28">Feature Products</h2>
        <div className="">
        <Slider {...settings}> 
                {products.map((product, id) => <Product key={id} product={product}/>)}
        </Slider>
        </div>
    </section>
    )
};

export default Products;
