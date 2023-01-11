import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaExchangeAlt,
  FaListAlt,
  FaSmile,
  FaCube,
  FaCog,
} from "react-icons/fa";
import Dashboard from "./Dashboard";
import BuyTokens from "./BuyTokens";
import Transactions from "./Transactions";
import IcoDistribution from "./IcoDistribution";
import KycApplication from "./KycApplication";
// import UsersList from "./UsersList";
// import Stage from "./Stage";
import Settings from "./Settings";

import Header from "../../components/Header";

const Index = () => {
  const navigate = useNavigate();
  const tabs = [
    "Dashboard",
    "Buy Tokens",
    "Transactions",
    "ICO Distribution",
    "Settings",
    "KYC Application",
  ];
  const [tab, setTab] = useState(tabs[0]);

  console.log(tab);
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

  return (
    <>
      <Header name={"Henry"} />
      <section className="bg-zinc-900 min-w-screen min-h-screen">
        <div className="flex mx-12">
          {/* menu */}
          <div className="w-1/5 -translate-y-10 mr-16">
            <ul className="list-none bg-zinc-800 text-gray-300 rounded-2xl p-5">
              {navItems.map(({ name, url, icon }, index) => (
                <li key={index} className="my-5">
                  <button
                    onClick={(e) => handleCurrentTab(e.target.textContent)}
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
            <div className="flex justify-between bg-zinc-800 rounded-2xl p-4 w-fit px-10 gap-8 -translate-y-10 uppercase ">
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
