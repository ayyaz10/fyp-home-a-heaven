import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import Subscribe from "../../components/form/Subscribe";

const Footer = () => {
  return (
    <div className="bg-gray-800">
        <div className="flex flex-wrap text-white max-w-3xl md:max-w-5xl xl:max-w-6xl m-auto py-14 px-5 sm:px-8 md:px-6">
            <div className="col-1 flex-1 flex flex-col items-center">
                <div className="flex flex-col justify-center">
                    <div>
                        <a href="#"><img src="src/assets/white-logo.png" width="140" alt="Footer Logo" /></a>
                    </div>
                    <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                    <div className="flex flex-wrap gap-3">
                        <img src="src/assets/payment/payment-1.webp" width="40" alt="master card" />
                        <img src="src/assets/payment/payment-2.webp" width="40" alt="master card" />
                        <img src="src/assets/payment/payment-3.webp" width="40" alt="master card" />
                        <img src="src/assets/payment/payment-4.webp" width="40" alt="master card" />
                        <img src="src/assets/payment/payment-5.webp" width="40" alt="master card" />
                    </div>
                </div>
            </div>
            <div className="col-2 flex sm:flex-1 flex-col w-full sm:items-center mt-10 sm:mt-0">
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <div className="flex flex-col">
                        <a href=""  className="mb-2 hover:opacity-70">Collections</a>
                        <a href=""  className="mb-2 hover:opacity-70">About</a>
                        <a href=""  className="mb-2 hover:opacity-70">Contact</a>
                        <a href=""  className="mb-2 hover:opacity-70">FAQ</a>
                    </div>
                </div>
            </div>
            <div className="col-2 sm:flex-1 flex flex-col w-full sm:items-center mt-10 sm:mt-0">
                <div>
                    <h3 className="text-xl font-bold mb-4">Acounts</h3>
                    <div className="flex flex-col">
                        <a href="" className="mb-2 hover:opacity-70">My Account</a>
                        <a href="" className="mb-2 hover:opacity-70">Orders Tracking</a>
                        <a href="" className="mb-2 hover:opacity-70">Checkout</a>
                        <a href="" className="mb-2 hover:opacity-70">Wishlist</a>
                    </div>
                </div>
            </div>
            <div className="col-4 lg:flex-1 flex flex-col items-center w-full mt-10 lg:mt-0">
                <div className="w-full">
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <Subscribe inputData={{style:"bg-gray-900 w-full py-3 px-6 rounded-full", placeHolder: "Email"}} buttonData={{style: "absolute right-0 text-black font-semibold bg-white py-3 px-6 rounded-full", text:"Subscribe"}}/>
                    <ul className="flex gap-2">
                        <li><a href="" className="block text-xl bg-white bg-opacity-30 hover:bg-opacity-50 text p-3 rounded-full cursor-pointer"><AiFillFacebook /></a></li>
                        <li><a href="" className="block text-xl bg-white bg-opacity-30 hover:bg-opacity-50 text p-3  rounded-full cursor-pointer"><AiFillInstagram /></a></li>
                        <li><a href="" className="block text-xl bg-white bg-opacity-30 hover:bg-opacity-50 text p-3  rounded-full cursor-pointer"><AiFillTwitterSquare /></a></li>
                        <li><a href="" className="block text-xl bg-white bg-opacity-30 hover:bg-opacity-50 text p-3  rounded-full cursor-pointer"><AiFillLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer;
