import React from 'react'

const UsersList = () => {
  return (
    <section className='py-6'>
      <h5 className="text-yellow-500 text-2xl mb-4">Investor User List</h5>
      <div className='border border-dashed border-gray-600 rounded-2xl p-4'>
      <table className="table-auto lg:w-full w-full sm:table-fixed mt-4 overflow-scroll text-[15px]">
      <thead className="uppercase text-blue-500 text-left">
        <tr>
          <th>user</th>
          <th>email</th>
          <th>tokens</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody className="text-gray-100 font-normal">
        {kycApplications.map((kyc, key) => (
          <tr className="border-t border-gray-700 py-2">
            <td className='lg:px-2 px-4 lg:py-3'>
              <h6>{kyc.name}</h6>
              <span className="text-sm text-gray-400">{kyc.id}</span>
            </td>
            <td className='lg:px-2 px-4 lg:py-3 overflow-hidden'>
              <h6>{kyc.email}</h6>
            </td>
            <td className='lg:px-2 px-4 lg:py-3'>
              <h6>{kyc.tokens}</h6>
            </td>
            <td className='lg:px-2 px-4 lg:py-3'>
                <button className={`${kyc.status === 'Pending' ? 'bg-blue-500' : kyc.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'} px-3 py-1 rounded-xl text-[12px]  font-semibold text-gray-900 w-4/6`}>
                  {kyc.status}
                </button>
            </td>
            <td className='lg:px-2 px-4 lg:py-3'>
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
    email: 'Paolo.Farrell30@hotmail.com',
    tokens: '22062',
    status: 'Pending'
  },
  {
    name: 'Cora Mullar',
    email: 'Paolo.Farrell30@hotmail.com',
    tokens: '22062',
    status: 'Missing'
  },
  {
    name: 'Cora Mullar',
    email: 'Paolo.Farrell30@hotmail.com',
    tokens: '22062',
    status: 'Approved'
  }
]

export default UsersList