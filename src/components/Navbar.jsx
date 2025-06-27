import React, { useState } from "react";
import { FaArrowRightLong, FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  function toggleMenu() {
    setIsClicked((prev) => !prev);
  }

  return (
    <div>
      {/* Top contact bar */}
      <div className="h-10 w-full bg-gradient-to-r from-blue-300 to-blue-600 md:flex hidden justify-end">
        <h1 className="text-white mr-4 items-center">+254769212169</h1>
      </div>

      {/* Main navbar */}
      <div className="flex items-center h-30 bg-blue-300 justify-between px-4">
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl  md:hidden"
          >
            {isClicked ? <MdOutlineCloseFullscreen /> : <RxHamburgerMenu />}
          </button>
          <h1 className="text-white  text-3xl font-sans font-bold">WAVES</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mr-4">
          {[
            "Home",
            "About us",
            "Our Programs",
            "Our Team",
            "Get Involved",
            "Contact Us",
          ].map((item) => (
            <li
              key={item}
              className="text-white relative m-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <button className="flex items-center gap-2 bg-blue-500 text-white m-2 p-2 rounded-b-xl ">
            <FaHandHoldingHeart />
            Donate <span className="hidden md:flex">to our cause</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isClicked && (
        <nav className="relative md:hidden flex flex-col h-screen bg-white  ">
          <ul className=" px-4 py-2 space-y-2 text-black">
            {[
              "Home",
              "About us",
              "Our Programs",
              "Our Team",
              "Get Involved",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-25"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
