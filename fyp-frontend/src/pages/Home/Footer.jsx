import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-900">
        <div className="flex text-white max-w-3xl md:max-w-5xl xl:max-w-6xl m-auto py-14">
            <div className="col-1 flex-1 flex flex-col items-center">
                <div className="flex flex-col justify-center">
                    <div>
                        <a href="#"><img src="src/assets/white-logo.png" width="140" alt="Footer Logo" /></a>
                    </div>
                    <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                    <div className="flex gap-4">
                        <a href="#"><img src="src/assets/payment/payment-1.webp" alt="master card" /></a>
                        <a href="#"><img src="src/assets/payment/payment-2.webp" alt="master card" /></a>
                        <a href="#"><img src="src/assets/payment/payment-3.webp" alt="master card" /></a>
                        <a href="#"><img src="src/assets/payment/payment-4.webp" alt="master card" /></a>
                        <a href="#"><img src="src/assets/payment/payment-5.webp" alt="master card" /></a>
                    </div>
                </div>
            </div>
            <div className="col-2 flex-1 flex flex-col items-center">
                <div>
                    <h3 className="text-xl mb-4">Quick Links</h3>
                    <div className="flex flex-col">
                        <a href="">Collections</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">FAQ</a>
                    </div>
                </div>
            </div>
            <div className="col-2 flex-1 flex flex-col items-center">
                <div>
                    <h3 className="text-xl mb-4">Acounts</h3>
                    <div className="flex flex-col">
                        <a href="">Collections</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">FAQ</a>
                    </div>
                </div>
            </div>
            <div className="col-4 flex-1 flex flex-col items-center">
                <div>
                    <h3 className="text-xl mb-4">Newsletter</h3>
                    <ul className="flex gap-2">
                        <li><a href="" className="block bg-gray-300 p-2 rounded-full cursor-pointer"><AiFillFacebook /></a></li>
                        <li><a href="" className="block bg-gray-300 p-2 rounded-full cursor-pointer"><AiFillInstagram /></a></li>
                        <li><a href="" className="block bg-gray-300 p-2 rounded-full cursor-pointer"><AiFillTwitterSquare /></a></li>
                        <li><a href="" className="block bg-gray-300 p-2 rounded-full cursor-pointer"><AiFillLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer;
