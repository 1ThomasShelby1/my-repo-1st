import threePhones from '../assets/3_imges.png';

const Compo1 = () => {
  return (
    <div id="Home" className="relative bg-[linear-gradient(180deg,#FFFFFF_23.36%,#FD746C_100%)] h-screen  md:h-screen lg:h-screen xl:h-screen sm:h-screen xs:h-[450px] max-w-screen">

      {/* Text Section */}
      <div className="text-center px-4 py-4 pt-28">
        <h1 className="text-5xl sm:text-6xl md:text-5xl font-qurova">Zebra</h1>
        <p className="mt-4 text-sm sm:text-base font-montserrat">
          India's #1 Salon Booking App – Trusted by 10,000+ Users.
        </p>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 left-1 right-4  flex justify-center">
        <img
          src={threePhones}
          alt="Phones"
          className="w-[75%] sm:w-[70%] md:w-[500px] max-w-[550px] "
        />
      </div>

    </div>
  );
}

export default Compo1;
