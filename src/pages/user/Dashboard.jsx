import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import UserTransxElement from '../../components/UserTransxElement'

const Dashboard = () => {
    return (
        <>
        <section className="w-full p-6 mx-auto min-h-screen container leading-7 rounded lg:p-12 lg:w-4/5">
            <div className="lg:flex justify-between border">
                <div className="lg:w-1/3 bg-blue-500 text-white p-7 rounded">
                    <div className="flex">
                        <img src="https://dummyimage.com/16x16" alt="" className="w-12 h-12 rounded-full" />
                        <div className="mx-4">
                            <p className="text-cyan-300 uppercase tracking-wide font-semibold text-[14px]">tokens balance</p>
                            <h5 className="text-[24px] font-semibold">120,000,000 <span className="text-[12px] uppercase">twz</span></h5>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h6 className="text-cyan-300 uppercase tracking-wide font-semibold text-[14px]">your contribution </h6>

                        <div className="flex justify-between">
                            <div className="font-semibold">
                                <p className="">2.646</p>
                                <p className="text-[12px] uppercase -mt-2">eth</p>
                            </div>
                            <div className="font-semibold">
                                <p className="">1.265</p>
                                <p className="text-[12px] uppercase -mt-2">btc</p>
                            </div>
                            <div className="font-semibold">
                                <p className="">6.506</p>
                                <p className="text-[12px] uppercase -mt-2">ltc</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 lg:flex lg:ml-8 lg:mt-0 mt-8 bg-white text-gray-600 rounded">
                    <div className="lg:w-1/2 flex flex-col justify-center text-center border-r p-7">
                        <img src="https://dummyimage.com/16x16" alt="" className="w-12 h-12 mx-auto rounded-full" />

                        <h5 className="text-2xl text-gray-500 font-smeibold mt-2">1 ETH = TWZ</h5>
                        <p className="text-[18px]">1 ETH = 254.05 USD</p>
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-center text-center p-7">
                        <p>
                            Token Name: <span className="text-blue-500">TokenWiz</span>
                        </p>
                        <p>
                            Token Symbol: <span className="text-blue-500">TWZ</span>
                        </p>

                        <ButtonPrimary text={'Download Whitepaper'} />
                    </div>
                </div>
            </div>

            <div className="lg:flex justify-between mt-8">
                <div className="lg:w-2/3 mx-auto bg-white py-7 rounded w-fit overflow-hidden">
                    <div className="flex justify-between mx-7 mb-3">
                        <h2 className="text-[24px] text-blue-500 font-semibold">Transaction</h2>

                        <button className="uppercase text-blue-500 font-semibold text-sm hover:underline">View all</button>
                    </div>
                <table className="table-auto w-full sm:table-fixed">
                    <thead>
                        <tr className="uppercase text-blue-500 font-semibold text-[12px]" >
                            <th className="px-4 py-2">tokens</th>
                            <th className="px-4 py-2">amount</th>
                            <th className="px-4 py-2">date</th>
                            <th className="px-4 py-2">type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userTranxs.map((transx, key) => (
                                <UserTransxElement transx={transx} key={key} />
                            ))
                        }
                    </tbody>
                </table>
                </div>
                <div className="lg:w-1/3 lg:ml-8 lg:mt-auto bg-white p-7 rounded mt-8">
                <h2 className="text-[24px] text-blue-500 font-semibold">Token Calculation</h2>
                <p className="text-gray-600">Enter amount to calculate token.</p>

                <div className="flex mt-4">
                    <div className="flex w-1/2 border p-2 rounded-2xl h-fit">
                    <input type="text" value={'1'} className="w-1/2 focus:outline-none text-gray-400" />
                    <select name="" id="" className="w-1/2 border-l text-gray-400">
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="LTC">LTC</option>
                        <option value="USD">USD</option>
                    </select>
                    </div>
                    <div className="ml-2">
                        <h2 className="text-blue-500 text-[24px] text-right">123,500.84 <span className="text-gray-400 text-[12px] uppercase">twz</span></h2>
                    </div>
                </div>
                <p className="text-gray-600 text-sm">Amount calculated based current tokens price.</p>

                <div className="w-fit mx-auto">
                    <ButtonPrimary text={'Buy Tokens'} className="mx-auto" />
                </div>
                </div>
            </div>

            {/* <div className="flex justify-between mt-8">
                <div className="w-2/3 bg-white py-7 rounded">
                <h2 className="text-[24px] text-blue-500 mx-7 font-semibold">Transaction</h2>
                </div>
            </div> */}
        </section>
        </>
    )
}

const userTranxs = [{
    tokens: '18,750',
    amount: '3.543',
    currency: 'eth',
    date: '	2018-08-24 10:20 PM',
    type: 'Purchase'
}, {
    tokens: '8,052',
    amount: '0.165',
    currency: 'btc',
    date: '	2018-08-24 10:20 PM',
    type: 'Bonus'
}, {
    tokens: '19,000',
    amount: '3.141',
    currency: 'ltc',
    date: '	2018-08-24 10:20 PM',
    type: 'Bonus'
}]

export default Dashboard