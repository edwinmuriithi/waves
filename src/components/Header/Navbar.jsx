import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong, FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  function toggleMenu() {
    setIsClicked((prev) => !prev);
  }

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsClicked(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Our Programs", path: "/our-programs" },
        { name: "Our Approach", path: "/our-approach" },
        { name: "Our Team", path: "/our-team" },
      ],
    },
    { name: "Take Action", path: "/take-action" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Resources", path: "/resources" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div>
      {/* Top Contact Bar */}
      <div className="h-10 w-full bg-gradient-to-r from-blue-300 to-blue-600 md:flex hidden justify-end">
        <h1 className="text-white mr-4 items-center">+254716152699</h1>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center h-30 bg-blue-300 justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {isClicked ? <MdOutlineCloseFullscreen /> : <RxHamburgerMenu />}
          </button>
          <h1 className="text-white text-3xl font-sans font-bold">WAVES</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex mr-4">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group text-white m-4 ">
              {item.dropdown ? (
                <>
                  <span className="cursor-pointer">{item.name}</span>
                  <ul className="absolute hidden group-hover:block bg-blue-300 text-white shadow-lg rounded-md min-w-max z-10">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name} className="px-4 py-2">
                        {subItem.path ? (
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 ${
                                isActive
                                  ? "after:w-full  font-bold"
                                  : "after:w-0 hover:after:w-full"
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ) : (
                          <button
                            onClick={() => handleScrollTo(subItem.id)}
                            className="w-full text-left hover:text-blue-300"
                          >
                            {subItem.name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 ${
                      isActive
                        ? "after:w-full font-bold"
                        : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Donate Button */}
        <div>
          <button className="flex items-center gap-2 bg-blue-500 text-white m-2 p-2 rounded-b-xl hover:bg-blue-700 transition duration-300">
            <FaHandHoldingHeart />
            Donate <span className="hidden md:flex">to our course</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isClicked && (
        <nav className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-md transition-transform transform duration-300 ease-in-out z-50">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold">WAVES</h2>
            <button onClick={toggleMenu} className="text-2xl">
              <MdOutlineCloseFullscreen />
            </button>
          </div>
          <ul className="px-4 py-2 space-y-4 text-black">
            {menuItems.map((item) => (
              <li key={item.name} className="space-y-1">
                {item.dropdown ? (
                  <>
                    <span className="font-semibold text-lg">{item.name}</span>
                    <ul className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          {subItem.path ? (
                            <NavLink
                              to={subItem.path}
                              onClick={() => setIsClicked(false)}
                              className={({ isActive }) =>
                                `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                                  isActive
                                    ? "after:w-full font-bold"
                                    : "after:w-0 hover:after:w-full"
                                }`
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          ) : (
                            <button
                              onClick={() => handleScrollTo(subItem.id)}
                              className="w-full text-left hover:text-blue-500"
                            >
                              {subItem.name}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsClicked(false)}
                    className={({ isActive }) =>
                      `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 ${
                        isActive
                          ? "after:w-full  font-bold"
                          : "after:w-0 hover:after:w-full"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
