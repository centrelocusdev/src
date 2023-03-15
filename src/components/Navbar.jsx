import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Scroll from "react-scroll"

const Link = Scroll.Link

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => {
    setSidebar((prev) => !prev);
  };

  const navItems = [
    'About',
    'FAQ'
  ];

  return (
    <div className="w-full bg-[#111] py-3 shadow-lg top-0 fixed z-10">
      <div className="flex flex-wrap flex-col md:flex-row justify-between md:items-center md:px-5">
        <div className="flex items-center">
          <button
            onClick={handleClick}
            className="cursor-pointer md:hidden float-right m-5 right-0 relative text-white w-fit"
          >
            <FaBars />
          </button>
          <h2 className="text-2xl text-yellow-500 font-bold uppercase">src</h2>
        </div>
        <ul
          className={`bg-[#111] z-10 h-screenlist-none md:flex items-center text-gray-200  text-md text-left md:static fixed h-full md:w-auto md:bg-[transparent] bg-zinc-900 right-0 top-0 md:space-y-0 overflow-hidden transition-all ${
            sidebar ? "w-[200px]" : "w-0"
          } md:pt-0 pt-10`}
          style={{
            backdropFilter: "blur(50px)",
          }}
        >
          {navItems.map((name, index) => (
            <li key={index}>
              <Link to={name} spy={true} smooth={true} duration={250}>
              <button
                className="mx-3 md:px-0 px-5 md:border-b-2 border-b-2 border-zinc-700 w-full lg:w-fit lg:border-transparent hover:border-yellow-500 hover:text-yellow-500 py-2 text-left"
              >
                {name}
              </button>
              </Link>
            </li>
          ))}
          <li className="text-zinc-200 flex md:items-center md:flex-row h-fit flex-col gap-4">
            <a
              href="/register"
              className="mx-3 md:px-0 px-5 md:border-b-2 border-b-2 border-zinc-700 w-full lg:w-fit lg:border-transparent hover:border-yellow-500 hover:text-yellow-500 py-2 text-left"
            >
              Register
            </a>
            <a
              href="/login"
              className="mx-3 h-fit text-center border border-yellow-600 text-yellow-500 rounded-lg px-3 py-1 hover:bg-yellow-500 hover:text-zinc-900 hover:border-yellow-600"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
