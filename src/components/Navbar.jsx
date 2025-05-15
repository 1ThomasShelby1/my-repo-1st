import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '/zebra_logo.png';
import { HiOutlineMenu } from 'react-icons/hi'; // Hamburger icon
import { IoClose } from 'react-icons/io5'; // Close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-screen z-50 bg-white overflow-x-hidden ">
  <nav className="w-full max-w-screen mx-auto flex items-center justify-between px-2 md:px-12 py-1 md:py-2">

        
        {/* Logo */}
        <img src={logo} alt="Zebra Logo" className="w-16 md:w-14" />

        {/* Nav Links - Desktop Only */}
        <ul className="hidden md:flex md:flex-row items-center space-x-14 text-lg text-center">
          {['Home', 'How It Works', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-500 font-poppins"
              >
                {item.replace('_', ' ')}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:inline-block bg-gradient-to-br from-[#2C3E50] to-[#FD746C] p-[2px] rounded">
          <div className="bg-white px-7 py-2 rounded">
            <button className="text-transparent bg-clip-text bg-gradient-to-br from-[#2C3E50] to-[#FD746C] font-poppins">
              Download Now
            </button>
          </div>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden p-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoClose size={28} className="text-[#2C3E50]" />
            ) : (
              <HiOutlineMenu size={28} className="text-[#2C3E50]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 max-w-screen overflow-hidden">
          <ul className="flex flex-col space-y-4 text-sm font-poppins text-center">
            {['Home', 'How IT Works', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.replace('', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
