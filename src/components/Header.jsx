import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";

const Header = ({name}) => {
  return (
    <div className="h-[8rem] bg-gradient-to-r from-[#D9D9D9] via-blue-500 to-orange-300">
        <div className="flex justify-between p-6">
        <a href="" className="text-dark text-2xl font-semibold ">
          SRC
        </a>

        <div className="flex">
          <div className="mx-2 flex bg-[rgba(0,0,0,0.4)] rounded-full px-3">
              <input type="text" className="border-none focus:outline-none borer-b-2 border-transparent focus:border-gray-900 bg-transparent text-sm text-white" />
              <button className="cusor-pointer text-white">
              <FaSearch />
              </button>
          </div>
          <span className="text-xl">Hello,  {name}</span>
          <div className="ml-2 bg-blue-500 p-2 rounded-full">
          <FaUser className="text-white" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header