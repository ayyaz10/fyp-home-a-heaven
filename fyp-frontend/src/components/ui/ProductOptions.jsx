import React, { useState } from "react";
import { BsCartPlus, BsCartPlusFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import ProductOption from "./ProductOption";
ProductOption
const ProductOptions = () => {
  
    
  return (
    <>
        <ProductOption icon={<BsCartPlus />} hoverIcon={<BsCartPlusFill />}/>
        <ProductOption icon={<BsHeart />} hoverIcon={<BsHeartFill />}/>
    </> 
  )
};

export default ProductOptions;
