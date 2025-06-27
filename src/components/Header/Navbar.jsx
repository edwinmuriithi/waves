import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  function toggleMenu() {
    setIsClicked((prev) => !prev);
  }

  return (
    <div>
      {/* Top contact bar */}
      <div className="h-10 w-full bg-gradient-to-r from-blue-300 to-blue-600 flex justify-end">
        <h1 className="text-white mr-4 items-center">+254769212169</h1>
      </div>

      {/* Main navbar */}
      <div className="flex items-center h-30 bg-blue-300 justify-between px-4">
        {/* Logo section */}
        <div className="hover:bg-blue-200">
          <h1 className="text-blue-500">Waves</h1>
          {/* Example logo placeholder */}
          <img src="/logo.png" alt="logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mr-4">
          {["Home", "About", "Programs", "Donate"].map((item) => (
            <li
              key={item}
              className="text-white relative m-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-3xl focus:outline-none "
          >
            {isClicked ? "X" : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isClicked && (
        <ul className="md:hidden flex flex-col bg-blue-500 px-4 py-2 space-y-2">
          {["Home", "About", "Programs", "Donate"].map((item) => (
            <li
              key={item}
              className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
