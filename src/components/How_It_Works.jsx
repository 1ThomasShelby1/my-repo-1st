import React from 'react'

const Compo2 = () => {
  return (
    <div id='How_It_Works'>
      <div className="pt-16 bg-[#F8F9FB] text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            <span className="text-3xl font-Montserrat ">How It</span>
            <span className="text-3xl font-Montserrat inline-block text-transparent bg-clip-text bg-[linear-gradient(to_top_left,rgb(40,60,75),rgb(260,130,150))]">Works</span>
          </div>
          <h1 className="font-Montserrat text-slate-600 ">How Zebra Makes Salon Bookings Effortless</h1>
        </div>
      </div>
      <div className="bg-[#F8F9FB] py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          <div className="p-1">
            <div className="p-[2px] bg-gradient-to-br from-[#2C3E50] to-[#FD746C] rounded-md">
              <div className="bg-white rounded-md p-4 text-center">
                <h1 className="font-Montserrat">Step 1</h1>
                <h2 className="text-sm text-slate-600 font-Montserrat">Browse Salons</h2>
                <img src="/src/assets/logo_person.png" alt="Logo" className="w-full max-w-[200px] mx-auto" />
              </div>
            </div>
            <p className=" mt-2 text-sm text-slate-600 text-center font-Montserrat whitespace-nowrap truncate">Explore top-rated salons near you.</p>
          </div>
          <div className="w-28 h-0 border-t-2 border-solid border-transparent [border-image:linear-gradient(302.78deg,#2C3E50_10.83%,#FD746C_89.17%)_1]"></div>
          <div className="p-1">
            <div className="p-[2px] bg-gradient-to-br from-[#2C3E50] to-[#FD746C] rounded-md">
              <div className="bg-white rounded-md p-4 text-center">
                <h1 className="font-Montserrat">Step 2</h1>
                <h2 className="text-sm text-slate-600 font-Montserrat">Book in Seconds</h2>
                <img src="/src/assets/logo_person2.png" alt="Logo" className="w-full max-w-[200px] mx-auto" />
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600 text-center font-Montserrat whitespace-nowrap truncate">Choose a time and confirm instantly.</p>
          </div>
          <div className="w-28 h-0 border-t-2 border-solid border-transparent [border-image:linear-gradient(302.78deg,#2C3E50_10.83%,#FD746C_89.17%)_1]"></div>
          <div className="p-1">
            <div className="p-[2px] bg-gradient-to-br from-[#2C3E50] to-[#FD746C] rounded-md">
              <div className="bg-white rounded-md p-4 text-center">
                <h1 className="font-Montserrat">Step 3</h1>
                <h2 className="text-sm text-slate-600 font-Montserrat">Get Pampered</h2>
                <img src="/src/assets/logo_person3.png" alt="Logo" className="w-full max-w-[200px] mx-auto" />
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600 text-center font-Montserrat whitespace-nowrap truncate">Visit & enjoy your beauty service.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compo2