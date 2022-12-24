import React from "react";

const TransxElement = ({elem}) => {
    return (
        <div className="flex justify-between border-b py-5">
            <div className="inline">
                <h5 className="text-gray-600 font-semibold uppercase">{elem.transxNumber}</h5>
                <span className="text-gray-400">{elem.transxDate}</span>
            </div>
            <div className="inline">
                <h5 className="text-gray-600 font-semibold uppercase">{elem.tokensTotal}</h5>
                <span className="text-gray-400">{elem.tokenType}</span>
            </div>
            <div className="inline">
                <h5 className="text-gray-600 font-semibold uppercase">{elem.amountPrice}</h5>
                <span className="text-gray-400">{elem.amountCurrency}</span>
            </div>
            <div className="inline">
                <h5 className="text-gray-600 font-semibold uppercase">{elem.usdAmount}</h5>
                <span className="text-gray-400">{elem.usd}</span>
            </div>
            <div className="inline">
                <h5 className="text-gray-600 font-semibold uppercase">{elem.fromId}</h5>
                <span className="text-gray-400">{elem.fromDate}</span>
            </div>
            <div>
                <button className="border border-green-500 rounded px-3 py-1 text-center">Purchase</button>
            </div>
        </div>
    )
}

TransxElement.defaultProps = {
    elem: {
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
    }
}

export default TransxElement