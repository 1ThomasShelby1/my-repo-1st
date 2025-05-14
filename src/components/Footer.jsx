import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (

    <div>
      <footer className="text-white px-6 md:px-16 py-10 text-sm bg-black w-screen">
        {/* Logo */}
        <div className="flex justify-center w-[110px] mx-auto mb-6">
          <img src="../src/assets/footer_logo.png" alt="Footer Logo" />
        </div>



        {/* Divider */}
        <hr className="border-t border-gray-600 my-6" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Reach Us */}
          <div className="font-poppins">
            <h3 className="mb-4">Reach us</h3>
            <div className="flex items-center space-x-2 mb-3">
              <FaPhoneAlt className="text-white text-sm" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center space-x-2 mb-3 ">
              <FaEnvelope className="text-white text-sm" />
              <span>zebraapp@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
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
            <p className="mb-2 cursor-pointer hover:underline">Privacy Policy</p>
            <p className="mb-2 cursor-pointer hover:underline">Terms & Services</p>
            <p className="cursor-pointer hover:underline">Terms of Use</p>
          </div>

          {/* Quick Links */}
          <div className="font-poppins">
            <h3 className="mb-4">Quick Links</h3>
            <p className="mb-2 cursor-pointer hover:underline">Instagram</p>
            <p className="mb-2 cursor-pointer hover:underline">Facebook</p>
            <p className="cursor-pointer hover:underline">YouTube</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div>
          </div>
          <div className="flex items-center space-x-2 text-sm ">
            <span className="font-varela font-[400]">Develop by</span>
            <img
              src="../src/assets/tech_surya_logo.png"
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
