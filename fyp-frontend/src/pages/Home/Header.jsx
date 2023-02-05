import React from "react";
import TopNav from "../../components/ui/TopNav";
import {AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';
function Header() {
    const ICON_SIZE = "2.1rem";
    const navLinks = ['Home', 'Collections', 'Contact', 'About']

  return (
    <div>
        <header>
            <TopNav />
            <div className="flex items-center flex-col sm:flex-row py-4 max-w-3xl lg:max-w-5xl xl:max-w-6xl px-1 m-auto">
                <div className="site-logo">Site Logo</div>
                <ul className="flex justify-center flex-1 items-center flex-col sm:flex-row gap-8 text-lg m-auto">
                    {navLinks.map(navlink => (
                        <li className="text-sm sm:text-base xl:text-lg hover:font-medium" key={navlink}><a href="">{navlink}</a></li>
                    ))
                    }
                </ul>
                <ul className="sm:flex items-center gap-4 sm:gap-6 md:gap-8 text-xl sm:text-2xl xl:text-3xl hover:font-medium sm:ml-auto hidden">
                    <li><a href=""><AiOutlineSearch /></a></li>
                    <li><a href=""><AiOutlineUser /></a></li>
                    <li><a href=""><AiOutlineShoppingCart /></a></li>
                </ul>
            </div>
        </header>
    </div>
  )
  
}

export default Header;
