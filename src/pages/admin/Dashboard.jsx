import React from "react";
import AdminTransactions from "../../components/AdminTransactions";
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
      <div className="md:flex justify-between lg:px-12 md:-translate-y-10 mt-5 md:mt-0">
        <div className="bg-zinc-800 rounded-2xl p-4 my-2">
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

        <div className="bg-zinc-800 rounded-2xl p-4 my-2">
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

        <div className="bg-zinc-800 rounded-2xl p-4 my-2">
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

      <div className="md:mx-16 my-8 min-h-[16rem] border border-dashed border-gray-600 rounded-2xl p-5">
        <h5 className="text-yellow-500 text-2xl">Token Sale Graph</h5>
        <div className="max-h-[16rem]">
        <Line data={data} />
        </div>
      </div>

      <div className="block md:mx-16 my-8 min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5">
        <h5 className="text-yellow-500 text-2xl">Recent Transaction</h5>

        <AdminTransactions transactions={transactions} />
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
