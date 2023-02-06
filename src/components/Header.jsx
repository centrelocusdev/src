import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = ({ name, toggleNavbar}) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('')
  const onChange = (e) => {
    setSearchText(e.target.value)
  }
  
  return (
    <div className="md:h-[8rem] pb-4 h-fit bg-gradient-to-r from-[#D9D9D9] via-blue-500 to-orange-300">
      <div className="md:flex justify-between p-6">
        <a href="" className="text-dark text-2xl font-semibold ">
          SRC
        </a>

        <HiMenuAlt1 className="text-2xl md:hidden" onClick={toggleNavbar} />
        <div className="md:flex items-center">
          <div className="m-2 flex justify-between bg-[rgba(0,0,0,0.4)] rounded-full py-2 px-3 w-full">
            <input
              type="text"
              className="border-none focus:outline-none borer-b-2 border-transparent focus:border-gray-900 bg-transparent text-sm text-white"
              value={searchText}
              onChange={onChange}
            />
            <button className="cusor-pointer text-white">
              <FaSearch />
            </button>
          </div>
          <div className="flex">
            <div className="text-xl capitalize flex font-semibold">{name}</div>
            <div className="ml-2 bg-blue-500 p-2 rounded-full w-fit h-fit">
              <FaUser className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
