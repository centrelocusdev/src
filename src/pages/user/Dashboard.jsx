import React from "react";
import UserTransaction from "../../components/UserTransaction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <>
      <div className="md:flex justify-between mb-3">
        <div className="md:w-4/6 md:mr-8">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl py-5 px-3">
            <h5 className="text-orange-300 text-2xl">Recent Transaction</h5>

            <UserTransaction transactions={transactions} />
          </div>

          <div className="my-8 min-h-[16rem] border border-dashed border-gray-600 rounded-2xl p-5">
            <h5 className="text-orange-300 text-2xl">Token Sale Graph</h5>

            {/* <div className="w-full  min-h-[15rem] max-h-min border mt-3"> */}
              <Line data={data} />
            {/* </div> */}
          </div>
        </div>
        <div className="md:w-2/6">
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

const dataPeek = [12,45,65,23,87,46,24,17,87,65]

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
        label: 'Token sales graph',
        fill: true,
        borderColor: '#facc15',
        data: dataPeek,
    }
  ],
  options: {
    responsive: true,
    scales: {
        y: {
        min: 0,
        max: Math.max(...dataPeek)+5,
        ticks: {
            stepSize: 5
        }
        }
    },
    }
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
