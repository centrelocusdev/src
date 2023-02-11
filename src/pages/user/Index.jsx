import React from "react";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import BuyTokens from "./BuyTokens";
import Transactions from "./Transactions";
import IcoDistribution from "./IcoDistribution";
import KycApplication from "./KycApplication";
import Settings from "./Settings";
import { getCurrentUser } from "../../utils/api";
import Header from "../../components/Header";

const Index = () => {
  const tabs = [
    "Dashboard",
    "Buy Tokens",
    "Transactions",
    "ICO Distribution",
    "Settings",
    "KYC Application",
  ];
  const [tab, setTab] = useState(tabs[0]);
  const [showNav, setShowNav] = useState(false);
  const [currentUser, setCurrentUser] = useState('')

  const toggleNavbar = (e) => {
    setShowNav((prev) => !prev)
  }

  const handleCurrentTab = (currentTab) => {
    setTab(currentTab);
  };

  const navItems = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "FaThLarge",
    },
    {
      name: "Buy Tokens",
      url: "/buy-tokens",
      icon: "FaListAlt",
    },
    {
      name: "Transactions",
      url: "/transctions",
      icon: "FaExchangeAlt",
    },
    {
      name: "ICO Distribution",
      url: "/ico-distribution",
      icon: "FaListAlt",
    },
    {
      name: "Settings",
      url: "/settings",
      icon: "FaCube",
    },
    {
      name: "KYC Application",
      url: "/kyc-application",
      icon: "FaCube",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }    
    fetchData()
  }, []);

  return (
    <>
      <Header name={currentUser.username} toggleNavbar={toggleNavbar}/>
      <section className="bg-zinc-900 min-w-screen min-h-screen">
        <div className="flex md:mx-12 px-6">
          {/* menu */}
          <div
            className={`md:w-1/4 md:-translate-y-10 bg-zinc-800 text-gray-300 md:rounded-2xl md:mr-16 lg:block top-0 right-0 h-screen ${
              showNav ? "fixed" : "hidden"
            }`}
            onClick={(e) => {
              showNav ? e.target.parentElement.parentElement.parentElement.classList.add('hidden') : e.target.parentElement.parentElement.parentElement.classList.remove('hidden')
              setShowNav(false)
            }}
          >
            <ul className={`list-none p-5 `}>
              {navItems.map(({ name, url, icon }, index) => (
                <li key={index} className="my-5">
                  <button
                    onClick={(e) => {handleCurrentTab(e.target.textContent)}}
                    className={`${
                      tab == name && "text-orange-300"
                    } flex mr-10 md:px-0 px-5 w-full lg:w-fit hover:text-orange-300 py-3 text-left font-semibold`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* pages */}
          <div className="w-full">
            <div className="flex justify-between bg-zinc-800 rounded-2xl p-4 w-fit px-10 md:gap-8 md:-translate-y-10 mt-5 uppercase mb-3 ">
              <div>
                <h6 className="text-sm text-gray-300">Tokens balance</h6>
                <h5 className="text-white text-2xl font-semibold">
                  9,950,000{" "}
                </h5>
                <span className="text-[#7C9CBF]">usd</span>
              </div>
              <div>
                <h6 className="text-sm text-blue-500">Your contribution</h6>
                <h5 className="text-white text-2xl font-semibold">5223.199</h5>
                <span className="text-[#7C9CBF]">Cardano</span>
              </div>
            </div>
            {tab === tabs[0] && <Dashboard />}
            {tab === tabs[1] && <BuyTokens />}
            {tab === tabs[2] && <Transactions />}
            {tab === tabs[3] && <IcoDistribution />}
            {tab === tabs[4] && <Settings />}
            {tab === tabs[5] && <KycApplication />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
