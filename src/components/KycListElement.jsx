import React from "react";
import { FaDownload } from 'react-icons/fa';

const KycListElement = () => {
    return (
        <div className="flex justify-between w-full">
            <div className="">
                <h2 className="font-semibold text-gray-500">Abu Bin Ishtiyak</h2>
                <p className="text-gray-400">UD102001</p>
            </div>
            <div className="">
                <p className="text-gray-400">National Id Card</p>
            </div>
            <div className="">
                <div className="text-blue-500">
                    <p className="text-gray-400">Front Part</p>
                    <FaDownload className="text-2xl"  />
                </div>
                <div className="text-blue-500">
                <p className="text-gray-400">Back Part</p>
                <FaDownload className="text-2xl" />
                </div>
            </div>
            <div>
                <button className="border borde-green-500 rounded px-3 py-2">Approved</button>
            </div>
        </div>
    )
}

export default KycListElement