import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
function TopNav() {
    const ICON_SIZE = "1.6rem";
  return (
    <div className="border py-1">
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl px-1 sm:px-6 mx-auto">
            <div className="flex items-center text-gray-500">
                <ul className="flex items-center ml-auto text-sm">
                    <li><a href="#">My Whislist</a></li>
                    <li className="ml-4"><a href="#">Track Your Order</a></li>
                </ul>
                <ul className="flex items-center border-l ml-8">
                    <li className="ml-8"><a href=""><AiFillFacebook size={ICON_SIZE}/></a></li>
                    <li className="ml-2"><a href=""><AiFillInstagram size={ICON_SIZE}/></a></li>
                    <li className="ml-2"><a href=""><AiFillTwitterSquare size={ICON_SIZE}/></a></li>
                    <li className="ml-2"><a href=""><AiFillLinkedin size={ICON_SIZE}/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default TopNav;
