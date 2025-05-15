import React from 'react';

const Compo5 = () => {
  return (
    <div id='Contact' className=" max-w-screen min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,#FFFFFF_23.36%,#FD746C_100%)] sm:px-32 py-28 pt-32 xs:pt-16 xs:px-3 p-2 ">
      <div className="bg-white shadow-xl w-full max-w-6xl rounded-xl flex flex-col md:flex-row overflow-hidden mt-5">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#2C3E50] to-[#FD746C] p-8 text-white flex flex-col justify-between m-2 rounded-md">
          <div>
            <h2 className="text-2xl font-Montserrat mb-2">Contact Information</h2>
            <p className="text-sm font-poppins text-white/80">Say something to start a live chat!</p>
          </div>
          <div className="flex flex-col items-center sm:mb-24  mt-12 ">
            <img
              className="w-36 h-auto object-contain "
              src="\Group 7 (2) 1.png"
              alt="Logo"
            />
            <p className="mt-4 text-sm font-Montserrat text-center">Beauty, booked effortlessly</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-2/3 p-8">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-poppins text-[#8D8D8D]">First Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 outline-none py-1 text-sm"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label className="block text-sm font-poppins text-[#8D8D8D]">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 outline-none py-1 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-poppins text-[#8D8D8D]">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-400 outline-none py-1 text-sm"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label className="block text-sm font-poppins text-[#8D8D8D]">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border-b border-gray-400 outline-none py-1 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-poppins text-[#8D8D8D]">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border-b border-gray-400 outline-none text-sm "
              ></textarea>
            </div>

            <div className="flex justify-end pb-14">
              <button
                type="submit"
                className="bg-gradient-to-br from-[#2C3E50] to-[#FD746C] px-6 py-2 rounded shadow-md hover:opacity-90 transition text-white font-poppins"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Compo5;
