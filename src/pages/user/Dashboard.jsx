import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import NavHeader from "../../components/NavHeader";
import NavMenu from "../../components/NavMenu";
import UserTransaction from "../../components/UserTransaction";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-4/6 mr-8">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl py-5 px-3">
            <h5 className="text-orange-300 text-2xl">Recent Transaction</h5>

            <UserTransaction transactions={transactions} />
          </div>

          <div className="my-8 min-h-[16rem] border border-dashed border-gray-600 rounded-2xl p-5">
            <h5 className="text-orange-300 text-2xl">Token Sale Graph</h5>
          </div>
        </div>
        <div className="w-2/6">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl py-5 px-3">
              <h2 className="text-2xl text-orange-300">Token Calculation</h2>
              <p className="text-gray-400">Enter amount to calculate token.</p>

              <div className="flex my-4">
                <div className="flex w-1/2 border p-2 rounded-2xl h-fit">
                  <input
                    type="text"
                    value={"1"}
                    className="w-1/2 focus:outline-none text-gray-400 bg-transparent"
                  />
                  <select
                    name=""
                    id=""
                    className="w-1/2 border-l text-gray-400 bg-transparent"
                  >
                    <option value="ETH">ETH</option>
                    <option value="BTC">BTC</option>
                    <option value="LTC">LTC</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="ml-2">
                  <h2 className="text-white text-[24px] text-left">
                    = 123,500.84{" "}
                    <span className="text-gray-400 text-[12px] uppercase">
                      src
                    </span>
                  </h2>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Amount calculated based current tokens price.
              </p>

              <div className="w-full mx-auto">
                <button className="px-3 py-2 rounded-xl bg-[#FFF013] text-gray-900 w-full font-semibold">
                  Buy Tokens
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

const transactions = [
  {
    tId: "TNX005927",
    date: "29 DEC, 2022 09:35 PM",
    amount: "283.5",
    amountType: "ada",
    submitted: "29 DEC, 2022 09:35 PM",
  },
  {
    tId: "TNX005927",
    date: "29 DEC, 2022 09:35 PM",
    amount: "283.5",
    amountType: "ada",
    submitted: "29 DEC, 2022 09:35 PM",
  },
  {
    tId: "TNX005927",
    date: "29 DEC, 2022 09:35 PM",
    amount: "283.5",
    amountType: "ada",
    submitted: "29 DEC, 2022 09:35 PM",
  },
];
export default Dashboard;
