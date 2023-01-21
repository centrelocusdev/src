import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PreSaleTokens = () => {
  return (
    <div className="md:w-2/6 mt-2">
      <button className="w-full bg-yellow-500 text-zinc-900 p-3 rounded-2xl flex gap-3 font-semibold justify-center cursor-pointer border border-transparent hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 text-sm mb-5">
        Add Your wallet address before you buy <FaArrowRight className="mt-1" />
      </button>

      <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl py-5 px-3">
        <h2 className="text-2xl text-orange-300">Pre-Sale Token Sales</h2>
        <p className="text-gray-400 font-semibold">SRC TOKEN PRICE</p>

        <div className="flex my-4">
          <div className="flex w-1/3 border p-2 rounded-2xl h-fit">
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
              = 5223.199{" "}
              <span className="text-gray-400 text-[12px] uppercase">src</span>
            </h2>
          </div>
        </div>

        <h5 className="uppercase text-gray-400 font-semibold">exchange rate</h5>
        <h3 className="text-xl text-zinc-100">1 ADA = 196.74 USD</h3>

        <div className="flex mt-3 justify-between">
          <div className="font-semibold">
            <h5 className="uppercase text-gray-400">CURRENT BONUS</h5>
            <span className="text-zinc-100 text-xl">20%</span>
          </div>
          <div>
            <p className="text-zinc-400">End at 10 Jan, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSaleTokens;
