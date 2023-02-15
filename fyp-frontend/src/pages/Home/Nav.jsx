import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const navLinks = ['Home', 'Collections', 'Contact', 'About']
  return (
        <div className="flex items-center flex-col md:flex-row max-w-3xl md:max-w-5xl xl:max-w-6xl px-2 md:px-6 m-auto">
            <div className="site-logo hidden md:flex"><a href="#"><img src="src/assets/black-logo.png" width="140" alt="Site Logo" /></a></div>
            <div className="flex items-center bg-white w-full md:hidden py-5 px-2 sm:px-3 md:py-4 md:px-6 z-50 relative ">
                <div className="site-logo flex-1"><a href="#"><img src="src/assets/black-logo.png" width="120" alt="Site Logo" /></a></div>
                <div onClick={() => setOpen(!open)} className="flex justify-end flex-1 text-2xl w-full cursor-pointer">
                    {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
            </div>
            <ul className={`absolute md:static w-full md:w-auto flex justify-center flex-1 items-center flex-col md:flex-row gap-8 bg-white md:bg-white text-lg m-auto py-6 transition-all duration-500 ease-in ${open ? 'top-24 opacity-100' : `top-[-130px] md:opacity-100 opacity-0`}`}>
                {navLinks.map(navlink => (
                    <li className="text-sm sm:text-base xl:text-lg hover:font-medium" key={navlink}><a href="">{navlink}</a></li>
                ))
                }
            </ul>
            <ul className="md:flex hidden items-center gap-4 sm:gap-6 md:gap-8 text-xl sm:text-2xl xl:text-3xl hover:font-medium sm:ml-auto">
                <li><a href=""><AiOutlineSearch /></a></li>
                <li><a href=""><AiOutlineUser /></a></li>
                <li><a href=""><AiOutlineShoppingCart /></a></li>
            </ul>
        </div>
    )
};

export default Nav;
