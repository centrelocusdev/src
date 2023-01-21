import React from "react";

const UserTransaction = ({transactions}) => {
  return (
    <table className="table-auto lg:w-full w-full sm:table-fixed mt-4 overflow-scroll text-[15px]">
        <thead className="uppercase text-blue-500 text-left">
          <tr>
            <th>tranx id</th>
            <th className="">amount</th>
            <th className="hidden">submitted</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="uppercase text-gray-100 font-normal">
          {transactions.map((t, key) => (
            <tr className="border-t border-gray-700 py-2">
              <td className="lg:px-2 px-4 lg:py-3">
                <h6>{t.tId}</h6>
                <span className="text-sm text-gray-400">{t.date}</span>
              </td>
              <td className="lg:px-2 px-4 lg:py-3">
                <h6>{t.amount}</h6>
                <span className="text-sm text-gray-400">{t.amountType}</span>
              </td>
              <td className="lg:px-2 px-4 lg:py-3 hidden">
                <span className="text-sm text-gray-400">{t.submitted}</span>
              </td>
              <td className="lg:px-2 px-4 lg:py-3">
                <a
                  href=""
                  className="text-sm text-gray-400 cursor-pointer underline"
                >
                  view details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default UserTransaction