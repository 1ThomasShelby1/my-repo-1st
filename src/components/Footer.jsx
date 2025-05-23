import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-white px-1 md:px-28 pt-8 text-sm bg-black max-w-screen">
        {/* Logo */}
        <div className="flex justify-center w-[110px] mx-auto mb-6">
          <img src="/footer_logo.png" alt="Footer Logo" />
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-600 my-6" />

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 ml-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-4">
          {/* Reach Us */}
          <div className="font-poppins fle">
            <h3 className="mb-4">Reach Us</h3>
            <div className="flex items-center space-x-2 mb-3 whitespace-nowrap">
              <FaPhoneAlt className="text-white text-sm" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <FaEnvelope className="text-white text-sm" />
              <span>zebraapp@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <FaMapMarkerAlt className="text-white text-sm" />
              <span>Golden city center, prozon</span>
            </div>
          </div>

          {/* Company */}
          <div className="font-poppins">
            <h3 className="mb-4">Company</h3>
            <p className="mb-2 cursor-pointer hover:underline">About</p>
            <p className="cursor-pointer hover:underline">Contact</p>
          </div>

          {/* Legal */}
          <div className="font-poppins">
            <h3 className="mb-4">Legal</h3>
            <p className="mb-2 cursor-pointer hover:underline whitespace-nowrap">Privacy Policy</p>
            <p className="mb-2 cursor-pointer hover:underline whitespace-nowrap">Terms & Services</p>
            <p className="cursor-pointer hover:underline whitespace-nowrap">Terms of Use</p>
          </div>
          <div className="font-poppins">
            <h3 className="mb-4">Quick Links</h3>
            <div className="flex my-2 space-x-4 sm:block">
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <FaFacebookF className="text-white ml-3" />
                <span className="hidden sm:inline ">Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <FaInstagram className="text-white" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <FaYoutube className="text-white" />
                <span className="hidden sm:inline">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex md:flex-row sm:justify-end sm:items-end mt-10 pb-3 ml-2">
          <div className="flex items-center space-x-2 text-sm mr-4">
            <span className="font-varela font-[400]">Developed by</span>
            <img
              src="/tech_surya_logo.png"
              alt="Tech Surya"
              className="w-28 object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
