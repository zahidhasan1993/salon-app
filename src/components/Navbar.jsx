import { useState } from "react";
import {
  FaFacebook,
  FaInnosoft,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto w-full bg-white text-black body-font mb-4 shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="hidden py-5 md:flex md:justify-between md:items-center">
        <p className="text-gray-700 ml-5">Welcome there!</p>
        <div className="flex gap-2">
          <FaFacebook className="text-3xl"></FaFacebook>
          <FaInstagram className="text-3xl"></FaInstagram>
          <FaInnosoft className="text-3xl"></FaInnosoft>
          <FaTwitter className="text-3xl"></FaTwitter>
          <FaPinterest className="text-3xl"></FaPinterest>
          <FaLinkedin className="text-3xl"></FaLinkedin>
          <p className="text-gray-300 ml-5 text-3xl">|</p>
          <button className="py-2 px-5 bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:scale-110 duration-300 ease-in-out ml-5">
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex justify-between items-center py-5 px-2">
        <div className="flex gap-16">
          {/* Site logo and Name */}
          <a
            href="#link"
            className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <span className="ml-3 font-new text-6xl text-black font-semibold antialiased">
              Blushlly
            </span>
          </a>
          {/* Navbar */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
            <a href="#link" className="mr-5 hover:text-gray-300">
              Home
            </a>
            <a href="#link" className="mr-5 hover:text-gray-300">
              Category
            </a>
            <a href="#link" className="mr-5 hover:text-gray-300">
              Makeup
            </a>
            <a href="#link" className="mr-5 hover:text-gray-300">
              Blog
            </a>
            <a href="#link" className="mr-5 hover:text-gray-300">
              About
            </a>
            <a href="#link" className="mr-5 hover:text-gray-300">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center gap-3">
          <p>search</p>
          <FaSearch></FaSearch>
        </div>
        {/* Avatar */}

        {/* Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-white text-black uppercase text-center font-semibold">
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-black hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-black hover:text-gray-600"
          >
            Category
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-black hover:text-gray-600"
          >
            Makeup
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-black hover:text-gray-600"
          >
            Blog
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-black hover:text-gray-600"
          >
            About
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-black hover:text-gray-600"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
