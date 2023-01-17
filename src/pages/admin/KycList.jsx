import React from 'react'

const KycList = () => {
  return (
    <section className='py-6'>
      <h5 className="text-yellow-500 text-2xl mb-4">All KYC Applications</h5>
      <div className='border border-dashed border-gray-600 rounded-2xl p-4'>
      <table className="table-auto lg:w-full w-full sm:table-fixed mt-4 overflow-scroll text-[15px]">
      <thead className="uppercase text-blue-500 text-left">
        <tr>
          <th>user</th>
          <th className='hidden md:block'>doc type</th>
          <th className='hidden md:block'>proof</th>
          <th className='hidden md:block'>submitted</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody className="text-gray-100 font-normal">
        {kycApplications.map((kyc, key) => (
          <tr className="border-t border-gray-700 py-2">
            <td className='lg:px-2 md:px-4 px-1 lg:py-3'>
              <h6>{kyc.name}</h6>
              <span className="text-sm text-gray-400">{kyc.id}</span>
            </td>
            <td className='lg:px-2 px-4 lg:py-3 hidden md:block'>
              <h6>{kyc.docType}</h6>
            </td>
            <td className='lg:px-2 px-4 lg:py-3 hidden md:block'>
              <h6>{kyc.proof}</h6>
            </td>
            <td className='lg:px-2 px-4 lg:py-3 hidden md:block'>
              <h6 className="text-sm text-gray-400">{kyc.date}</h6>
            </td>
            <td className='lg:px-2 md:px-4 px-1 lg:py-3'>
                <button className={`${kyc.status === 'Pending' ? 'bg-blue-500' : kyc.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'} md:px-3 px-2 py-1 rounded-xl text-[12px]  font-semibold text-gray-900 w-4/6 text-center`}>
                  {kyc.status}
                </button>
            </td>
            <td className='lg:px-2 md:px-4 px-1 lg:py-3'>
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
      </div>
    </section>
  )
}

const kycApplications = [
  {
    name: 'Cora Mullar',
    id: '07986-0224',
    docType: 'passport',
    proof: 'Front Document',
    date: '17 Dec, 2022 08:37 PM',
    status: 'Pending'
  },
  {
    name: 'Cora Mullar',
    id: '07986-0224',
    docType: 'passport',
    proof: 'Front Document',
    date: '17 Dec, 2022 08:37 PM',
    status: 'Approved'
  },
  {
    name: 'Cora Mullar',
    id: '07986-0224',
    docType: 'passport',
    proof: 'Front Document',
    date: '17 Dec, 2022 08:37 PM',
    status: 'Missing'
  }
]

export default KycList