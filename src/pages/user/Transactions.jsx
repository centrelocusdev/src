import React from "react";
import NavHeader from "../../components/NavHeader";
import NavMenu from "../../components/NavMenu";
import TransxElement from "../../components/TransxElement";

const Transaction = () => {
    return (
        <>
        <section className="mx-auto min-h-screen w-fit">
            <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl py-5 px-3">
                <h2 className="text-[24px] text-orange-300">User Transactions</h2>

                <table className="table-auto lg:w-full w-full sm:table-fixed mt-4 overflow-scroll bg-transaprent p-5">
                <thead>
                        <tr className="uppercase text-blue-500 font-semibold text-sm text-left" >
                            <th className="p-2">tranx no</th>
                            <th className="p-2">tokens</th>
                            <th className="p-2">amount</th>
                            <th className="p-2">usd amount</th>
                            <th className="p-2">form</th>
                            <th className="p-2">type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        TransxArray.map((elem, key) => (
                            <TransxElement transx={elem} key={key} />
                        ))
                    }
                    </tbody>
                </table>
                
                <div className="flex justify-between mt-4">
                    <div className="flex">
                        <button className="bg-gray-200 text-gray-600 px-4 py-2 text-center rounded m-1 hover:bg-amber-600 hover:text-white">Prev</button>
                        <button className="py-2 px-4 bg-amber-600 text-white rounded m-1 hover:bg-gray-200 hover:text-gray-600">1</button>
                        <button className="py-2 px-4 bg-amber-600 text-white rounded m-1 hover:bg-gray-200 hover:text-gray-600">2</button>
                        <button className="bg-gray-200 text-gray-600 px-4 py-2 text-center rounded m-1 hover:bg-amber-600 hover:text-white">Next</button>
                    </div>
                    <p className="text-gray-500">1-3 of 10</p>       
                </div>
            </div>
        </section>
        </>
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
    fromDate: '08 Jul, 18 10:20PM',
    type: 'Bonus'
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
    fromDate: '08 Jul, 18 10:20PM',
    type: 'Missing'
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
    fromDate: '08 Jul, 18 10:20PM',
    type: 'Purchase'
}]

export default Transaction