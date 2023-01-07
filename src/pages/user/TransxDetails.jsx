import React from "react";

const TransxDetails = () => {
    return (
        <section className="lg:lg:w-3/4 lg:p-12 mx-auto p-6 min-h-screen container">
            <div className="p-5 bg-white w-full rounded">
                <h2 className="text-[24px] text-blue-500">Transaction Details</h2>

                <div className="lg:flex justify-between border rounded-lg p-5 mt-3">
                    <div className="my-2">
                        <h5 className="font-semibold text-gray-500">Transx Date</h5>
                        <span className="text-gray-600">24 Jul, 2018 10:11PM</span>
                    </div>
                    <div className="my-2">
                        <h5 className="font-semibold text-gray-500">Transx Status</h5>
                        <button className="bg-green-500 text-white px-3 py-1 text-center text-sm rounded mt-1">Approved</button>
                    </div>
                    <div className="my-2">
                        <h5 className="font-semibold text-gray-500">Tranx Approved Note</h5>
                        <span className="text-gray-600">By Admin at 24 Jul, 2018 10:12PM</span>
                    </div>
                </div>

                <div className="mt-4 font-semibold lg:p-5">
                    <h4 className="uppercase text-gray-500">Transaction Info</h4>
                    <div className="mt-3 border rounded-lg ">
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500">Transaction Type</button>
                            <p className="lg:w-3/4 border-b lg:border-l text-gray-600 lg:p-4">Purchase</p>
                        </div>
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 ">Payment Getway</button>
                            <p className="lg:lg:w-3/4 border-b lg:border-l text-gray-600 lg:p-4">Ethereum <span className="text-[12px] text-gray-500"> - Offline Payment</span></p>
                        </div>
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 ">Deposit From</button>
                            <p className="lg:w-3/4 border-b lg:border-l text-gray-600 overflow-hidden lg:p-4">0xa87d264f935920005810653734156d3342d5c385</p>
                        </div>
                        <div className="lg:flex py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 font-semibold">Tx Hash</button>
                            <p className="lg:w-3/4 border-b lg:border-l text-gray-600 lg:p-4 overflow-hidden">Tx156d3342d5c87d264f9359200xa058106537340385c87d264f93</p>
                        </div>
                        <div className="lg:flex py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 font-semibold">Deposit To</button>
                            <p className="lg:w-3/4 border-b lg:border-l text-gray-600 lg:p-4 overflow-hidden">0xa058106537340385156d3342d5c87d264f935920</p>
                        </div>
                        <div className="lg:flex py-3 px-2 lg:py-0 ">
                            <button className="lg:w-1/4 text-left text-gray-500 font-semibold">Details</button>
                            <p className="lg:w-3/4 border-b lg:border-l text-gray-600 lg:p-4">Tokens Purchase</p>
                        </div>
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 font-semibold">Transction Type</button>
                            <p className="lg:w-3/4 lg:border-l text-gray-600 lg:p-4">Purchase</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 font-semibold  lg:px-5">
                    <h4 className="uppercase text-gray-500">Token Details</h4>
                    <div className="border rounded-lg mt-3">
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500">Stage Name</button>
                            <p className="lg:w-3/4 text-gray-600 border-b lg:border-l lg:p-4">ICO Phase 3</p>
                        </div>
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 ">Contribution</button>
                            <p className="lg:w-3/4 text-gray-600 border-b lg:border-l lg:p-4">1.000 ETH  <a href="#" className="text-[12px] text-gray-500"> - know more</a></p>
                        </div>
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 ">Tokens Added To</button>
                            <p className="lg:w-3/4 text-gray-600 border-b lg:border-l lg:p-4">UD1020001  <a href="#" className="text-[12px] text-gray-500"> - infoicox@gmail.com</a></p>
                        </div>
                        <div className="lg:flex py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 font-semibold">Token (T)</button>
                            <p className="lg:w-3/4 text-gray-600 border-b lg:border-l lg:p-4">4,780.00</p>
                        </div>
                        <div className="lg:flex py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500 font-semibold">Bonus Tokens (B)</button>
                            <p className="lg:w-3/4 text-gray-600 border-b lg:border-l lg:p-4">956.00</p>
                        </div>
                        <div className="lg:flex font-semibold py-3 px-2 lg:py-0">
                            <button className="lg:w-1/4 text-left text-gray-500">Total Tokens</button>
                            <p className="lg:w-3/4 text-gray-600 lg:border-l lg:p-4">5,736.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransxDetails