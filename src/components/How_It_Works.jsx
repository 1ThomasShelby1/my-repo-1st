import React from 'react';

const Compo2 = () => {
  return (
    <div id="How_It_Works" className='overflow-x-hidden'>
      {/* Heading */}
      <div className="pt-16 bg-[#F8F9FB] text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            <span className="text-3xl font-Montserrat">How It</span>
            <span className="text-3xl font-Montserrat text-transparent bg-clip-text bg-[linear-gradient(to_top_left,rgb(40,60,75),rgb(260,130,150))]">
              Works
            </span>
          </div>
          <h1 className="font-Montserrat text-slate-600">
            How Zebra Makes Salon Bookings Effortless
          </h1>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-[#F8F9FB] py-16  md:-mr-4 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 ">
          
          {/* Step 1 */}
          <div className="p-1 ">
            <div className="p-[2px] bg-gradient-to-br from-[#2C3E50] to-[#FD746C] rounded-md">
              <div className="bg-white rounded-md p-4 text-center">
                <h1 className="font-Montserrat">Step 1</h1>
                <h2 className="text-sm text-slate-600 font-Montserrat">Browse Salons</h2>
                <img
                  src="/logo_person.png"
                  alt="Step 1"
                  className="w-full max-w-[250px] mx-auto h-48 sm:h-60"
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600 text-center font-Montserrat">
              Explore top-rated salons near you.
            </p>
          </div>

          {/* Divider (Responsive Border) */}
          <div className="my-4 md:my-0 md:mx-4">
            {/* Vertical for small screens */}
            <div className="block md:hidden w-[2px] h-10 bg-gradient-to-b from-[#2C3E50] to-[#FD746C] mx-auto" />
            {/* Horizontal for medium+ screens */}
            <div className="hidden md:block h-[2px] w-36 bg-gradient-to-r from-[#2C3E50] to-[#FD746C] mx-auto" />
          </div>

          {/* Step 2 */}
          <div className="p-1">
            <div className="p-[2px] bg-gradient-to-br from-[#2C3E50] to-[#FD746C] rounded-md">
              <div className="bg-white rounded-md p-4 text-center">
                <h1 className="font-Montserrat">Step 2</h1>
                <h2 className="text-sm text-slate-600 font-Montserrat">Book in Seconds</h2>
                <img
                  src="/logo_person2.png"
                  alt="Step 2"
                  className="w-full max-w-[250px] mx-auto h-48 sm:h-60"
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600 text-center font-Montserrat">
              Choose a time and confirm instantly.
            </p>
          </div>

          {/* Divider (Responsive Border) */}
          <div className="my-4 md:my-0 md:mx-4">
            <div className="block md:hidden w-[2px] h-10 bg-gradient-to-b from-[#2C3E50] to-[#FD746C] mx-auto" />
            <div className="hidden md:block h-[2px] w-36 bg-gradient-to-r from-[#2C3E50] to-[#FD746C] mx-auto" />
          </div>

          {/* Step 3 */}
          <div className="p-1 ">
            <div className="p-[2px] bg-gradient-to-br from-[#2C3E50] to-[#FD746C] rounded-md">
              <div className="bg-white rounded-md p-4 text-center">
                <h1 className="font-Montserrat">Step 3</h1>
                <h2 className="text-sm text-slate-600 font-Montserrat">Get Pampered</h2>
                <img
                  src="/logo_person3.png"
                  alt="Step 3"
                  className="w-full max-w-[250px] mx-auto h-48 sm:h-60 "
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600 text-center font-Montserrat">
              Visit & enjoy your beauty service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo2;
