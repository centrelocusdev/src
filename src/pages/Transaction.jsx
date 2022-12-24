import React from "react";
import TransxElement from "../components/TransxElement";

const Transaction = () => {
    return (
        <section className="w-3/4 mx-auto p-12 min-h-screen">
            <div className="p-5 bg-white w-full rounded">
                <h2 className="text-[24px] text-blue-500">User Transactions</h2>

                <ul className="list-none uppercase text-blue-500 flex justify-between mt-5 font-semibold inline">
                    <li>tranx no</li>
                    <li>tokens</li>
                    <li>amount</li>
                    <li>usd amount</li>
                    <li>form</li>
                    <li>type</li>
                </ul>
                <div className="border-b mb-5">
                {
                    TransxArray.map((elem, key) => (
                        <TransxElement elem={elem} key={key} />
                    ))
                }
                </div>
                
                <div className="flex justify-between">
                    <div className="flex">
                        <button className="bg-gray-200 text-gray-600 px-4 py-2 text-center rounded m-1 hover:bg-blue-500 hover:text-white">Prev</button>
                        <button className="py-2 px-4 bg-blue-500 text-white rounded m-1 hover:bg-gray-200 hover:text-gray-600">1</button>
                        <button className="py-2 px-4 bg-blue-500 text-white rounded m-1 hover:bg-gray-200 hover:text-gray-600">2</button>
                        <button className="bg-gray-200 text-gray-600 px-4 py-2 text-center rounded m-1 hover:bg-blue-500 hover:text-white">Next</button>
                    </div>
                    <p className="text-gray-500">1-3 of 10</p>       
                </div>
            </div>
        </section>
    )
}

const TransxArray = [{
    transxNumber: 'TNX100232',
    transxDate: '2018-08-24 10:45PM',
    tokensTotal: '18,750',
    tokenType: 'TWZ',
    amountPrice: '50.00',
    amountCurrency: 'ETH',
    usdAmount: '245.52',
    usd: 'USD',
    fromId: '1F1T....4XQX',
    fromDate: '08 Jul, 18 10:20PM'
}, {
    transxNumber: 'TNX1002',
    transxDate: '2018-08-24 10:45PM',
    tokensTotal: '18,750',
    tokenType: 'TWZ',
    amountPrice: '50.00',
    amountCurrency: 'ETH',
    usdAmount: '245.52',
    usd: 'USD',
    fromId: '1F1T....4XQX',
    fromDate: '08 Jul, 18 10:20PM'
}, {
    transxNumber: 'TNX1002',
    transxDate: '2018-08-24 10:45PM',
    tokensTotal: '18,750',
    tokenType: 'TWZ',
    amountPrice: '50.00',
    amountCurrency: 'ETH',
    usdAmount: '245.52',
    usd: 'USD',
    fromId: '1F1T....4XQX',
    fromDate: '08 Jul, 18 10:20PM'
}]

export default Transaction