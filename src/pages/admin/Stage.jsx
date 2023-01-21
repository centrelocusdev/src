import React from "react";
import Tag from "../../components/Tag";
import { CircularProgressbar } from "react-circular-progressbar";

const Stage = ({ stages }) => {
  return (
    <div className="md:mx-12 my-8 min-h-[16rem] text-gray-400">
      <h5 className="text-orange-300 text-2xl">Available ICO/STO Stage</h5>

      <div className="flex md:flex-row flex-col gap-6 justify-between mt-3">
        {stages.map((stage, key) => (
          <div className="md:w-1/3 border border-dashed border-gray-600 rounded-2xl p-5">
            <h6 className="flex items-center">
              STAGE NAME <Tag text={"Running"} color={"bg-green-500"} />
            </h6>
            <h4 className="uppercase text-lg font-semibold text-white">
              {stage.stageName}
            </h4>

            <div className="flex justify-start gap-5 w-full my-4">
              <div className="md:w-1/2 ">
                <div className="w-16 h-16 text-center border-4 border-yellow-500 rounded-full flex flex-col justify-center items-center text-xl text-white">
                  {stage.soldPercentage}%
                </div>
              </div>
              <div className="md:w-1/2">
                <h6 className="uppercase text-xs">Token issued</h6>
                <p className="text-white text-white text-xl">{stage.tokenIssued}</p>
                <p className="uppercase text-xs ">
                  sold <span className="text-white mx-1">{stage.soldTokens}</span>tokens
                </p>
              </div>
            </div>

            <div className="flex justify-between my-4">
              <div className="w-1/2">
                <h6>Base Price</h6>
                <p className="text-white">
                  {stage.basePrice} <span className="text-sm text-gray-400">USD</span>
                </p>
              </div>
              <div className="w-1/2">
                <h6>Base Bonus</h6>
                <p className="text-white">{stage.baseBonus}%</p>
              </div>
            </div>

            <div className="flex justify-between my-4">
              <div className="w-1/2">
                <h6 className="">Start Date</h6>
                <p className="text-white">{stage.startDate}</p>
              </div>
              <div className="w-1/2">
                <h6 className="">End Date</h6>
                <p className="text-white">{stage.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Stage.defaultProps = {
  stages: [
    {
      status: "running",
      stageName: "Demo stage",
      soldPercentage: "97",
      soldTokens: "927,694",
      tokenIssued: "950,000",
      basePrice: "0.25",
      baseBonus: "15",
      startDate: "06 Jan, 2023",
      endDate: "31 Aug, 2023",
    },
    {
      status: "running",
      stageName: "Demo stage",
      soldPercentage: "97",
      soldTokens: "927,694",
      tokenIssued: "950,000",
      basePrice: "0.25",
      baseBonus: "15",
      startDate: "06 Jan, 2023",
      endDate: "31 Aug, 2023",
    },
    {
      status: "running",
      stageName: "Demo stage",
      soldPercentage: "97",
      soldTokens: "927,694",
      tokenIssued: "950,000",
      basePrice: "0.25",
      baseBonus: "15",
      startDate: "06 Jan, 2023",
      endDate: "31 Aug, 2023",
    },
  ],
};

export default Stage;
