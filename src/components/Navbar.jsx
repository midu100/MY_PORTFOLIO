import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/img/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const myNav = [
    { Name: "Home", add: "/" },
    { Name: "About", add: "/about" },
    { Name: "Portfolio", add: "/portfolio" },
    { Name: "Services", add: "/service" },
    { Name: "Contact", add: "/contact" },
  ];

  return (
    <div>
      <nav id="navbar" className="py-[8px] bg-[#121212]">
        <div className="container bg-[#FFE29866] py-[8px] px-[16px] md:px-[32px] rounded-[8px]">
          <div className="navRow flex justify-between items-center">
            {/* Logo */}
            <div className="Logo w-[90px] md:w-[113px]">
              <Link to={"#"}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-[40px] lg:gap-[61px] text-[16px] lg:text-[20px] font-outfit font-normal text-white">
              {myNav.map((item, i) => (
                <li key={i}>
                  <Link
                    className="hover:line-through duration-[.3s]"
                    to={item.add}
                  >
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <div className="flex items-center gap-3">
              <Link
                to={"/contact"}
                className="py-[6px] px-[20px] md:px-[40px] text-[16px] md:text-[18px] text-[#000] font-outfit font-normal rounded-[8px] bg-[#FEAA00] cursor-pointer hover:bg-sky-600 hover:text-white hover:tracking-[1px] duration-400"
              >
                Contact Me
              </Link>

              {/* Mobile Menu Icon */}
              <button
                className="text-white text-[22px] md:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <ul className="flex flex-col items-center mt-4 gap-4 text-[18px] font-outfit font-normal text-white bg-[#121212] p-4 rounded-[8px] md:hidden">
              {myNav.map((item, i) => (
                <li key={i}>
                  <Link
                    onClick={() => setOpen(false)}
                    className="block hover:line-through duration-[.3s]"
                    to={item.add}
                  >
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
