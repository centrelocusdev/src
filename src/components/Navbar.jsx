import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false)
    const handleClick = () => {
        setSidebar((prev) => !prev)
    }

    const navItems = [
        {
            name: 'About Us',
            url: '/dashboard'
        }, {
            name: 'Features',
            url: '/buy-tokens'
        }, {
            name: 'Our Projects',
            url: '/ico-distribution'
        }, {
            name: 'FAQ',
            url: '/transctions'
        }
    ]

    return (
        <div className="w-full bg-[#111] py-3 shadow-lg">
            <div className="flex flex-wrap flex-col md:flex-row justify-between">

            <button onClick={handleClick} className="cursor-pointer md:hidden float-right m-5 right-0 relative text-white w-fit" >
            <FaBars />
            </button>
                <ul className={`bg-[#111] z-10 h-screenlist-none md:ml-auto md:mr-auto md:flex text-gray-200  text-lg text-left md:static fixed h-full md:w-auto md:bg-[transparent] bg-zinc-900 right-0 top-0 md:space-y-0 overflow-hidden transition-all ${
                sidebar ? "w-[200px]" : "w-0"
                } md:pt-0 pt-10`}
                style={{
                backdropFilter: "blur(50px)",
                }}>
                    {
                        navItems.map(({name, url}, index) => (
                            <li key={index}>
                                <button onClick={() => navigate(url)} className="mr-10 md:px-0 px-5 md:border-b-4 border-b-2 border-zinc-700 w-full lg:w-fit lg:border-transparent hover:border-yellow-500 hover:text-yellow-500 py-3 text-left">{name}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar