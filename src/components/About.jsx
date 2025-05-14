import React from 'react'

const Compo3 = () => {
  return (
    <div id='About' className="flex flex-col md:flex-row items-center justify-center my-16 md:my-32 px-4 md:px-24 gap-8">

        {/* Text Section */}
      <div className="w-full md:w-1/2">
        <div>
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-black">
            Why Choose
            <span className="px-2 inline-block text-transparent bg-clip-text bg-[linear-gradient(to_bottom_right,rgb(44,62,80),rgb(253,116,108))]">
              Zebra
            </span>
            App?
          </h2>
        </div>

        <p className="py-4 text-black/60 text-base md:text-lg font-segoe">
          Zebra Salon App is your go-to beauty companion, making salon bookings effortless. With a sleek interface, real-time availability, and exclusive deals, it ensures a hassle-free experience. Browse top-rated stylists, schedule appointments with ease, and enjoy seamless payments—all in one place. Elevate your self-care routine with convenience and quality at your fingertips!
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-2 font-segoe text-black/80">
          <li>
            Effortless Booking:
            <span className="pl-2 text-black/60">
              Quick appointment scheduling with top-rated stylists.
            </span>
          </li>
          <li>
            Personalized Experience:
            <span className="pl-2 text-black/60">
              Smart recommendations & exclusive deals.
            </span>
          </li>
          <li>
            Quality & Trust:
            <span className="pl-2 text-black/60">
              Verified professionals, genuine reviews & transparent pricing.
            </span>
          </li>
          <li>
            All-in-One Beauty Hub:
            <span className="pl-2 text-black/60">
              Salon & spa services with seamless support.
            </span>
          </li>
        </ul>

        <div className="mt-10 space-y-2 font-poppins">
          <div className="flex flex-wrap items-center">
            <img src="../src/assets/Vector.png" alt="Vector" className="w-4 h-4 mr-2 mt-1" />
            <span>Instant Bookings</span>
            <span className="ml-auto">🌟 Top-Rated Service</span>
          </div>
          <div className="flex justify-between">
            <span>💸 Exclusive Discounts</span>
            <span>📍 Nearby Salons</span>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="../src/assets/🍱 Bento.png"
          alt="Bento"
          className="w-[90%] md:w-full max-w-[500px] h-auto object-contain"
        />
      </div>

    
    </div>
  )
}

export default Compo3
