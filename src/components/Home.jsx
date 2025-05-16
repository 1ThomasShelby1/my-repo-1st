import threePhones from '/3_imges.png';

const Compo1 = () => {
  return (
    <div id="Home" className="relative bg-[linear-gradient(180deg,#FFFFFF_23.36%,#FD746C_100%)]   md:h-screen lg:h-screen xl:h-screen sm:h-screen h-[700px] max-w-screen">

      {/* Text Section */}
      <div className="text-center px-4 py-4 pt-60 sm:pt-32 ">
        <h1 className="text-5xl sm:text-6xl md:text-5xl font-qurova">Zebra</h1>
        <p className="mt-4 text-sm sm:text-base font-montserrat">
          India's #1 Salon Booking App – Trusted by 10,000+ Users.
        </p>
      </div>

      {/* Image Section */} 
     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[570px]">
  <img
    src={threePhones}
    alt="Phones"
    className=""
  />
</div>


    </div>
  );
}

export default Compo1;
