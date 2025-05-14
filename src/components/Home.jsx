import threePhones from '../assets/3_imges.png';

const Compo1 = () => {
  return (
    <div id="Home" className="relative bg-[linear-gradient(180deg,#FFFFFF_23.36%,#FD746C_100%)] h-screen ">

      {/* Text Section */}
      <div className="text-center px-4 py-4 pt-28">
        <h1 className="text-6xl sm:text-5xl md:text-4xl font-qurova">Zebra</h1>
        <p className="mt-4 text-sm sm:text-base font-montserrat">
          India's #1 Salon Booking App – Trusted by 10,000+ Users.
        </p>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 left-0 right-2 sm:top-64 top-60 flex justify-center">
        <img
          src={threePhones}
          alt="Phones"
          className="w-[85%] sm:w-[80%] md:w-[600px] max-w-[650px] " 
        />
      </div>

    </div>
  );
}

export default Compo1;
