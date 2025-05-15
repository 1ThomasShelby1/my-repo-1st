import React from 'react';
import C from '/C-4.png';

const Compo4 = () => {
  return (
    <div className="bg-[#F8F9FB] py-6 max-w-screen">
      {/* Header Section */}
      <div className="text-center p-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-wrap justify-center space-x-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-montserrat">
              Discover Services by
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-montserrat inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#2C3E50] to-[#FD746C]">
              Category
            </span>
          </div>
          <h1 className="font-montserrat text-slate-600 text-sm  md:text-lg">
            Find the perfect beauty service and book seamlessly.
          </h1>
        </div>
      </div>

      <div className="px-2 sm:px-6 md:px-12 lg:px-36 py-14 justify-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-md flex flex-col items-center w-[190px] space-y-3">
            <img
              src={C}
              alt="Hair Cut & Styling"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
            <span className="text-black mt-1 text-base sm:text-lg">
              Hair Cut & Styling
            </span>
            <p className="font-poppins text-center text-black/60 mx-2 text-sm ">
              Expert cuts & styling for a fresh, confident look
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md flex flex-col items-center w-[190px] space-y-3">
            <img
              src="/C-4 (2).png"
              alt="Nail Care"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
            <span className="text-black mt-1 text-base sm:text-lg">
              Nail Care
            </span>
            <p className="font-poppins text-center text-black/60 mt-2 text-sm sm:text-">
              Perfectly polished nails with expert care and precision
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-md flex flex-col items-center w-[190px] space-y-3">
            <img
              src="/C-4 (3).png"
              alt="Body Spa"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
            <span className="text-black mt-1 text-base sm:text-lg">
              Body Spa
            </span>
            <p className="font-poppins text-center text-black/60 mt-2 text-sm ">
              Relax, rejuvenate, and restore with expert spa treatments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-md flex flex-col items-center w-[190px] space-y-3">
            <img
              src="/C-4 (8).png"
              alt="Facial & Skin care"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
            <span className="text-black mt-1 text-base sm:text-lg">
              Facial & Skin care
            </span>
            <p className="font-poppins text-center text-black/60 mt-2 text-sm ">
              Radiant skin with expert facial care. Fresh, confident look
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-md flex flex-col items-center w-[190px] space-y-3">
            <img
              src="/C-4 (7).png"
              alt="Hair Color"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
            <span className="text-black mt-1 text-base sm:text-lg">
              Hair Color
            </span>
            <p className="font-poppins text-center text-black/60 mt-2 text-sm ">
              Vibrant, long-lasting color tailored to your style
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-md flex flex-col items-center w-[190px] space-y-3">
            <img
              src="/C-4 (6).png"
              alt="Makeup"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
            <span className="text-black mt-1 text-base sm:text-lg">
              Makeup
            </span>
            <p className="font-poppins text-center text-black/60 mt-2 text-sm ">
              Flawless, professional makeup for every occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo4;
