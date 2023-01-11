import React from "react";
import AdminTransactions from "../../components/AdminTransactions";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between px-12 -translate-y-10">
        <div className="bg-zinc-800 rounded-2xl p-4">
          <h6 className="text-sm text-gray-300 uppercase">
            token stage - demo stage 4
          </h6>
          <h5 className="text-white text-3xl font-semibold">
            9,950,000
            <span className="bg-yellow-500 text-sm text-yellow-900 px-1 rounded-xl float-right mt-4">
              79.1%
            </span>
          </h5>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-4">
          <h6 className="text-sm text-gray-300 uppercase">
            totol users
            <span className="text-[12px] bg-blue-100 text-blue-900 rounded-xl px-1 mx-2">
              KYC
            </span>
            <span className="text-blue-400">user</span>
          </h6>
          <h5 className="text-white text-3xl font-semibold">
            9,950,000
            <span className="bg-yellow-500 text-sm text-yellow-900 px-1 rounded-xl float-right mt-4 ml-2">
              79.1%
            </span>
          </h5>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-4">
          <h6 className="text-sm text-gray-300 uppercase">
            token stage - demo stage 4
            <span className="text-[12px] bg-blue-100 text-blue-900 rounded-xl px-1 mx-2">
              FIAT
            </span>
            <span className="text-blue-400">crypto</span>
          </h6>
          <div className="flex justify-between">
            <p className="text-white text-lg font-semibold">
              9,950,000
              <h5 className="text-blue-300 text-sm">USD</h5>
            </p>
            <p className="text-white text-lg font-semibold">
              9,950,000
              <h5 className="text-blue-300 text-sm">Cardno</h5>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-16 my-8 min-h-[16rem] border border-dashed border-gray-600 rounded-2xl p-5">
        <h5 className="text-yellow-500 text-2xl">Token Sale Graph</h5>
      </div>

      <div className="mx-16 my-8 min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5">
        <h5 className="text-yellow-500 text-2xl">Recent Transaction</h5>

        <AdminTransactions transactions={transactions} />
      </div>
    </>
  );
};

const transactions = [
    {
      tId: "TNX005927",
      date: "29 DEC, 2022 09:35 PM",
      tokens: "+70000",
      tokenType: "src",
      amount: "283.5",
      amountType: "ada",
      baseAmount: "287.5",
      currency: "usd",
    },
    {
      tId: "TNX005937",
      date: "29 DEC, 2022 09:35 PM",
      tokens: "+70000",
      tokenType: "src",
      amount: "283.5",
      amountType: "ada",
      baseAmount: "287.5",
      currency: "usd",
    },
]

export default Dashboard;
