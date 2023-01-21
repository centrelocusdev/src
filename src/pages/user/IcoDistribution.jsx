import React from "react";
import PreSaleTokens from "../../components/PreSaleTokens";
import Tag from "../../components/Tag";
import { FaLink, FaCopy } from "react-icons/fa";

const IcoDistribution = () => {
  return (
    <>
      <div className="md:flex justify-between">
        <div className="md:w-4/6 md:mr-8">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5 text-zinc-400">
          <h2 className="text-2xl text-orange-300">ICO Schedule</h2>

          <div className="shadow-lg bg-[rgba(0,0,0,0.3)] rounded-2xl p-5 mt-3">
            <div className="md:flex justify-between">
              <div className="">
                <div className="flex md:flex-row flex-col gap-2 my-2">
                  <h4 className="text-yellow-500 font-semibold">Pre-Sale ICO</h4>
                  <Tag text={'10% Bonus'} color={'bg-yellow-500'} />
                  <Tag text={'Running'} color={'bg-green-500'} />
                </div>
                <p className="text-zinc-400">Start at Dec 02, 2022 - 11:00 AM</p>
                <p className="text-zinc-400">End at Jan 15, 2023 - 11:00 AM</p>
              </div>

              <div className="">
                <div className="flex my-2">
                  <h4 className="text-yellow-500 font-semibold">0.00080 SRC</h4>
                </div>
                <p className="text-zinc-400">Min purchase - 0.35 SRC</p>
                <p className="text-zinc-400">Token Distribute - 250,000</p>
              </div>
            </div>

            <div className="md:flex justify-between mt-4">
              <div className="">
                <div className="md:flex-row flex flex-col gap-2 my-2">
                  <h4 className="text-yellow-500 font-semibold">Main ICO Sale</h4>
                  <Tag text={'5% Discount'} color={'bg-blue-500'} />
                  <Tag text={'Upcomming'} color={'bg-zinc-300'} />
                </div>
                <p className="text-zinc-400">Start at Dec 02, 2022 - 11:00 AM</p>
                <p className="text-zinc-400">End at Jan 15, 2023 - 11:00 AM</p>
              </div>

              <div className="">
                <div className="flex my-2">
                  <h4 className="text-yellow-500 font-semibold">0.00080 SRC</h4>
                </div>
                <p className="text-zinc-400">Min purchase - 0.35 SRC</p>
                <p className="text-zinc-400">Token Distribute - 250,000</p>
              </div>
            </div>
          </div>
          <span className="m-3">* Time zone set in</span>

          <div className="my-3">
            <h2 className="text-xl text-orange-300">Invite your friends and family and receive free tokens</h2>

            <p className="text-sm my-2">
            Each member have a unique SRC referral link to share with friends and family and receive a bonus - 10% of the value of their contribution. If any one sign-up with this link, will be added to your referral program. The referral link may be used during a token sales running.
            </p>

            <div className="flex justify-between text-lg font-semibold text-yellow-500">
              <h3>Referral URL</h3>
              <h3 className="text-sm">SEE YOUR REFERRAL</h3>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded-2xl flex gap-3 text-base items-center my-1">
              <FaLink />
              <p className="truncate"> https://demo.themenio.com/tokenwiz?ref=7d264f90653733592</p>
              <FaCopy className="text-orange-300 hover:text-gray-200 cursor-pointer" title="copy to clipboard" />
            </div>
          </div>
        </div>
        </div>

        <PreSaleTokens />
      </div>
    </>
  )
}

export default IcoDistribution