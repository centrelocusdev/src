import React from "react";
import { FaExclamationTriangle, FaStopwatch, FaCheck } from "react-icons/fa";

const UserTransxElement = ({transx}) => {
    return (
        <tr className="text-gray-600 text-center border-b lg:text-sm text-[12px] ">
            <td className="lg:px-4 lg:py-2 font-semibold ">{transx.tokens}</td>
            <td className="lg:px-4 lg:py-2 font-semibold">{transx.amount} <span className="text-gray-400 uppercase">{transx.currency}</span></td>
            <td className="lg:px-4 lg:py-2 w-fit">{transx.date}</td>
            <td className="lg:px-4 lg:py-4 text-green-500">{transx.type}</td>
        </tr>
    )
}

export default UserTransxElement