import React from 'react';

const Compo4 = () => {
  return (
    <div className="bg-[#F8F9FB] py-6">
      {/* Header Section */}
      <div className="text-center p-4 ">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-wrap justify-center space-x-2">
            <span className="text-3xl font-montserrat">Discover Services by</span>
            <span className="text-3xl font-montserrat inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#2C3E50] to-[#FD746C]">Category</span>
          </div>
          <h1 className="font-montserrat text-slate-600">
            Find the perfect beauty service and book seamlessly.
          </h1>
        </div>
      </div>

      <div className="p-10 px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="bg-white rounded-md p-4 m-4 justify-items-center">
            <img src="../src/assets/C-4/C-4.png" alt="Hair Cut & Styling" className="flex flex-col" />
            <span className="flex justify-center text-black mt-2">Hair Cut & Styling</span>
            <p className="font-poppins text-center text-black/60 ">
              Expert cuts & styling for a fresh, confident look
            </p>
          </div>

          <div className="bg-white rounded-md p-4 m-4 justify-items-center">
            <img src="../src/assets/C-4/C-4 (2).png" alt="Nail Care" className="" />
            <span className="flex justify-center text-black mt-2">Nail Care</span>
            <p className="font-poppins text-center text-black/60">
              Perfectly polished nails with expert care and precision
            </p>
          </div>

          <div className="bg-white rounded-md p-4 m-4 justify-items-center">
            <img src="../src/assets/C-4/C-4 (3).png" alt="Body Spa" className="" />
            <span className="flex justify-center text-black mt-2">Body Spa</span>
            <p className="font-poppins text-center text-black/60">
              Relax, rejuvenate, and restore with expert spa treatments.
            </p>
          </div>

          <div className="bg-white rounded-md p-4 m-4 justify-items-center">
            <img src="../src/assets/C-4/C-4 (8).png" alt="Facial & Skin care" className="mx-auto" />
            <span className="flex justify-center text-black mt-2">Facial & Skin care</span>
            <p className="font-poppins text-center text-black/60">
              Radiant skin with expert facial care. Fresh, confident look
            </p>
          </div>

          <div className="bg-white rounded-md p-4 m-4 justify-items-center">
            <img src="../src/assets/C-4/C-4 (7).png" alt="Hair Color" className="mx-auto" />
            <span className="flex justify-center text-black mt-2">Hair Color</span>
            <p className="font-poppins text-center text-black/60">
              Vibrant, long-lasting color tailored to your style
            </p>
          </div>

          <div className="bg-white rounded-md p-2 m-4 justify-items-center">
            <img src="../src/assets/C-4/C-4 (6).png" alt="Makeup" className="mx-auto" />
            <span className="flex justify-center text-black mt-2">Makeup</span>
            <p className="font-poppins text-center text-black/60">
              Flawless, professional makeup for every occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo4;
