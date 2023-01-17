import React from "react";
import { FaWallet, FaCopy, FaArrowRight, FaInfoCircle } from "react-icons/fa";
import PreSaleTokens from "../../components/PreSaleTokens";

const BuyTokens = () => {
  return (
    <>
      <div className="flex justify-between text-zinc-400 mb-8">
        <div className="w-4/6 mr-8">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5">
            <span className="text-sm  uppercase font-semibold">step 1</span>
            <h2 className="text-[24px] text-orange-300">Amount to Contribute</h2>
            <p className="">
              Enter your amount, you would like to contribute and calculate the
              amount of token you will received. The calculator helps to convert
              required currency to tokens.
            </p>

            <div className="flex my-4">
              <div className="flex w-1/5 bg-[rgba(0,0,0,0.3)] p-2 rounded-2xl h-fit">
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

            <div className="flex justify-between rounded-2xl bg-[rgba(0,0,0,0.3)] p-3">
              <div>
                <span className="text-yellow-500 font-semibold text-sm">
                  + 10% SALE BONUS
                </span>
                <h5 className="text-white text-xl">15,000.00</h5>
              </div>
              <div>
                <span className="text-yellow-500 font-semibold text-sm">
                  + 5% Referral BONUS
                </span>
                <h5 className="text-white text-xl">5,000.00</h5>
              </div>
              <div>
                <span className="text-yellow-500 font-semibold text-sm">
                  TOTAL SRC
                </span>
                <h5 className="text-white text-xl">1,823,500.84</h5>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-sm uppercase font-semibold">step 2</span>
              <h2 className="text-[24px] text-orange-300">Make a payment</h2>
              <p className="">
                To get tokens please make a payment. You can send payment
                directly to our address or you may pay online. Once you paid,
                you will receive an email about the successfull deposit.
              </p>

              <div className="flex justify-between mt-5">
                <div className="w-2/5 bg-[rgba(0,0,0,0.3)] p-3 rounded-2xl flex items-center gap-3 truncate">
                  <FaWallet />
                  <p className="w-4/5 truncate">0x39deb3jsuwiue2324nkee434er3e2ac64rd</p>
                  <FaCopy />
                </div>
                <span className="text-xl font-semibold">Or</span>
                <button className="w-2/5 bg-yellow-500 text-zinc-900 p-3 rounded-2xl flex gap-3 font-semibold justify-center cursor-pointer border border-transparent hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500">
                  Connect ADA Wallet <FaArrowRight className="mt-1" />
                </button>
              </div>
            </div>

            <div className="flex my-5">
              <FaInfoCircle className=" mr-2 text-yellow-500 text-3xl" />
              <p className="">
                Tokens will appear in your account after payment successfully
                made and approved by our team. Please note that, SRC tokens will
                distributed end of ICO Token Sales.
              </p>
            </div>
          </div>
        </div>

        <PreSaleTokens />
      </div>
    </>
  );
};

export default BuyTokens;
