import React from 'react'
import AdminTransactions from '../../components/AdminTransactions'

const Transactions = () => {
  return (
    <section className='py-6'>
      <h5 className="text-yellow-500 text-2xl mb-4">All Transactions</h5>
      <div className='border border-dashed border-gray-600 rounded-2xl p-4'>
        <AdminTransactions transactions={transactions} />
      </div>
    </section>
  )
}

const transactions = [
  {
    tId: "TNX005927",
    date: "29 DEC, 2022 09:35 PM",
    tokens: "+70000",
    tokenType: "src",
    amount: "283.5",
    amountType: "ada",
    baseAmount: "287.5",
    currency: "usd",
  },
  {
    tId: "TNX005937",
    date: "29 DEC, 2022 09:35 PM",
    tokens: "+70000",
    tokenType: "src",
    amount: "283.5",
    amountType: "ada",
    baseAmount: "287.5",
    currency: "usd",
  },
  {
    tId: "TNX005937",
    date: "29 DEC, 2022 09:35 PM",
    tokens: "+70000",
    tokenType: "src",
    amount: "283.5",
    amountType: "ada",
    baseAmount: "287.5",
    currency: "usd",
  },
  {
    tId: "TNX005937",
    date: "29 DEC, 2022 09:35 PM",
    tokens: "+70000",
    tokenType: "src",
    amount: "283.5",
    amountType: "ada",
    baseAmount: "287.5",
    currency: "usd",
  },
]

export default Transactions