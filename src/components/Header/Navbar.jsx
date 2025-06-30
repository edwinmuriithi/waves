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

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About us",
      dropdown: [
        { name: "Our Mission", path: "/about/mission" },
        { name: "Our History", path: "/about/history" },
        { name: "Our Team", path: "/about/team" },
      ],
    },
    {
      name: "Our Programs",
      dropdown: [
        { name: "Youth Program", path: "/programs/youth" },
        { name: "Community Program", path: "/programs/community" },
        { name: "Outreach Program", path: "/programs/outreach" },
      ],
    },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div>
     
      <div className="h-10 w-full bg-gradient-to-r from-blue-300 to-blue-600 md:flex hidden justify-end">
        <h1 className="text-white mr-4 items-center">+254769212169</h1>
      </div>

    
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

     
        <ul className="hidden md:flex mr-4">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group text-white m-4">
              {item.dropdown ? (
                <>
                  <span className="cursor-pointer">{item.name}</span>
                  <ul className="absolute hidden group-hover:block bg-gray-500 text-white shadow-lg rounded-md mt-2 min-w-max z-10">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name} className="px-4 py-2">
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                              isActive
                                ? "after:w-full text-blue-500 font-medium"
                                : "after:w-0 hover:after:w-full"
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
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
                        ? "after:w-full text-blue-800"
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

        <div>
          <button className="flex items-center gap-2 bg-blue-500 text-white m-2 p-2 rounded-b-xl hover:bg-blue-700">
            <FaHandHoldingHeart />
            Donate <span className="hidden md:flex">to our cause</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {isClicked && (
        <nav className="relative md:hidden flex flex-col h-screen bg-white">
          <ul className="px-4 py-2 space-y-2 text-black">
            {menuItems.map((item) => (
              <li key={item.name} className="space-y-1">
                {item.dropdown ? (
                  <>
                    <span className="font-semibold">{item.name}</span>
                    <ul className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                                isActive
                                  ? "after:w-full text-blue-500 font-medium"
                                  : "after:w-0 hover:after:w-full"
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
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
                          ? "after:w-full text-blue-800"
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
