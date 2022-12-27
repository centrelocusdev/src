import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavMenu = () => {
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false)
    const handleClick = () => {
        setSidebar((prev) => !prev)
    }

    const navItems = [
        {
            name: 'Dashboard',
            url: '/dashboard'
        }, {
            name: 'Transaction',
            url: '/transctions'
        }, {
            name: 'Transaction Details',
            url: '/transaction-details'
        }, {
            name: 'Profile',
            url: '/profile'
        }, {
            name: 'KYC Verification',
            url: '/kyc-verification'
        }, {
            name: 'KYC Completed',
            url: '/kyc-completed'
        }
    ]

    return (
        <div className="w-full bg-white">
            <div className="flex flex-wrap flex-col md:flex-row justify-between">

            <button onClick={handleClick} className="cursor-pointer md:hidden float-right m-5 right-0 relative" >
            <FaBars />
            </button>

                <ul className={`list-none md:ml-auto md:mr-auto md:flex lg:text-gray-500 text-gray-200 font-semibold text-[18px] text-left md:static fixed h-full md:w-auto md:bg-[transparent] bg-blue-600 right-0 top-0 md:space-y-0 overflow-hidden transition-all ${
                sidebar ? "w-[200px]" : "w-0"
                } md:pt-0 pt-10`}
                style={{
                backdropFilter: "blur(50px)",
                // backgroundColor:'rgba(0, 0, 0,.9)'
                }}>
                    {
                        navItems.map(({name, url}, index) => (
                            <li key={index}>
                                <button onClick={() => navigate(url)} className="mr-10 md:px-0 px-5 border-b border-blue-400 w-full lg:w-fit lg:border-transparent hover:border-blue-500 hover:text-blue-500 py-3 text-left">{name}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavMenu