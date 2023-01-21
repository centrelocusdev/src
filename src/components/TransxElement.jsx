import React from "react";

const TransxElement = ({transx}) => {
    console.log(transx)
    return (
         <tr className="text-gray-600 text-left border-b border-dashed border-gray-600 lg:text-sm text-[12px] ">
             <td className="md:px-2 px-4 md:py-3 ">
                <h5 className="text-gray-100 font-semibold uppercase">{transx.transxNumber}</h5>
                <span className="text-gray-400">{transx.transxDate}</span>
             </td>
             <td className="md:px-2 px-4 md:py-3 hidden md:inline-block">
                <h5 className="text-gray-100 font-semibold uppercase">{transx.tokensTotal}</h5>
                <span className="text-gray-400">{transx.tokenType}</span>
             </td>
             <td className="md:px-2 px-4 md:py-3 w-fit">
                <h5 className="text-gray-100 font-semibold uppercase">{transx.amountPrice}</h5>
                <span className="text-gray-400">{transx.amountCurrency}</span>    
             </td>
             {/* <td className="md:px-2 px-4 md:py-3 text-green-500 hidden md:inline-block">
                <h5 className="text-gray-100 font-semibold uppercase">{transx.usdAmount}</h5>
                <span className="text-gray-400">{transx.usd}</span>
             </td> */}
             <td className="md:px-2 px-4 md:py-3 text-green-500 hidden md:inline-block">
                <h5 className="text-gray-100 font-semibold uppercase">{transx.fromId}</h5>
                <span className="text-gray-400">{transx.fromDate}</span>
             </td>
             <td className='md:px-2 px-4 md:py-3'>
                <button className={`${transx.type === 'Bonus' ? 'bg-blue-500' : transx.type === 'Purchase' ? 'bg-green-500' : 'bg-yellow-500'} px-3 py-1 rounded-xl text-[12px]  font-semibold text-gray-900 w-4/6`}>
                  {transx.type}
                </button>
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