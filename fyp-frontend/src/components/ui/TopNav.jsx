import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";


function TopNav() {
  return (
    <div className="border py-1">
        <div className="max-w-screen-lg mx-auto">
            <div className="flex items-center">
                <ul className="flex items-center ml-auto text-sm">
                    <li><a href="#">My Whislist</a></li>
                    <li className="ml-4"><a href="#">Track Your Order</a></li>
                </ul>
                <ul className="flex items-center border-l ml-8">
                    <li className="ml-8"><a href=""><AiFillFacebook size="1.6rem"/></a></li>
                    <li className="ml-2"><a href=""><AiFillInstagram size="1.6rem"/></a></li>
                    <li className="ml-2"><a href=""><AiFillTwitterSquare size="1.6rem"/></a></li>
                    <li className="ml-2"><a href=""><AiFillLinkedin size="1.6rem"/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopNav;
