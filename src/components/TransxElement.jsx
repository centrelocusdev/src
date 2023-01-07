import React from "react";

const TransxElement = ({transx}) => {
    console.log(transx)
    return (
         <tr className="text-gray-600 text-left border-b lg:text-sm text-[12px] ">
             <td className="lg:px-2 px-4 lg:py-3 font-semibold ">
                <h5 className="text-gray-600 font-semibold uppercase">{transx.transxNumber}</h5>
                <span className="text-gray-400">{transx.transxDate}</span>
             </td>
             <td className="lg:px-2 px-4 lg:py-3 font-semibold">
                <h5 className="text-gray-600 font-semibold uppercase">{transx.tokensTotal}</h5>
                <span className="text-gray-400">{transx.tokenType}</span>
             </td>
             <td className="lg:px-2 px-4 lg:py-3 w-fit">
                <h5 className="text-gray-600 font-semibold uppercase">{transx.amountPrice}</h5>
                <span className="text-gray-400">{transx.amountCurrency}</span>    
             </td>
             <td className="lg:px-2 px-4 lg:py-3 text-green-500">
                <h5 className="text-gray-600 font-semibold uppercase">{transx.usdAmount}</h5>
                <span className="text-gray-400">{transx.usd}</span>
             </td>
             <td className="lg:px-2 px-4 lg:py-3 text-green-500">
                <h5 className="text-gray-600 font-semibold uppercase">{transx.fromId}</h5>
                <span className="text-gray-400">{transx.fromDate}</span>
             </td>
             <td>
             <button className="border border-green-500 rounded px-3 py-1 text-center">Details</button>
             </td>
         </tr>
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