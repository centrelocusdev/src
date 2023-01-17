import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaThLarge, FaExchangeAlt, FaListAlt, FaSmile, FaCube, FaCog } from "react-icons/fa";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import KycList from "./KycList";
import UsersList from "./UsersList";
import Stage from "./Stage";
import Settings from "./Settings";
import Header from "../../components/Header";


const Index = () => {
  const navigate = useNavigate()
  const tabs = ["Dashboard", "Transactions", "KYC List", "Users List", "ICO/STO Stage", "Settings"]
  const [tab, setTab] = useState(tabs[0])

  console.log(tab)
  const handleCurrentTab = (currentTab) => {
    setTab(currentTab)
  }

  const navItems = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'FaThLarge'
    }, {
      name: 'Transactions',
      url: '/transctions',
      icon: 'FaExchangeAlt'
    }, {
      name: 'KYC List',
      url: '/kyc-list',
      icon: 'FaListAlt'
    }, {
      name: 'Users List',
      url: '/users-list',
      icon: 'FaSmile'
    }, {
      name: 'ICO/STO Stage',
      url: '/stage',
      icon: 'FaCube'
    }, {
      name: 'Settings',
      url: '/settings',
      icon: 'FaCube'
    }
  ]

  return (
    <>
    <Header name={'Admin'} />
    <section className="bg-zinc-900 min-w-screen min-h-screen">
      <div className="flex md:mx-12 mx-6">
        {/* menu */}
        <div className="md:w-2/5 md:-translate-y-10 mt-5 hidden">
          <ul className="md:w-[60%] list-none bg-zinc-800 text-zinc-300 rounded-2xl p-5">
            {
              navItems.map(({name, url, icon}, index) => (
                <li key={index} className="my-5">
                  <button onClick={(e) => handleCurrentTab(e.target.textContent)} className={`${tab == name && "text-amber-500"} flex mr-10 md:px-0 px-5 w-full lg:w-fit hover:text-amber-500 py-3 text-left font-semibold`}>
                    {name}</button>
                </li>
              ))
            }
          </ul>
        </div>

        {/* pages */}
        <div className="w-full">
            {tab === tabs[0] && <Dashboard />}
            {tab === tabs[1] && <Transactions />}
            {tab === tabs[2] && <KycList />}
            {tab === tabs[3] && <UsersList />}
            {tab === tabs[4] && <Stage />}
            {tab === tabs[5] && <Settings />}
        </div>
      </div>
    </section>
    </>
  )
}

export default Index