import React from 'react'
import InputPrimary from '../../components/InputPrimary'
import { FaSyncAlt } from 'react-icons/fa'

const Settings = () => {
  return (
    <div className="mx-16 my-8 min-h-[16rem] border border-dashed border-gray-600 rounded-2xl p-5 text-gray-400">
        <h5 className="text-orange-300 text-2xl">ICO/STO Settings</h5>
        <span>ICO/STO Token Details</span>

        <form action="">
          <div className='lg:flex md:flex justify-between'>
            <InputPrimary field={"Token Name"} placeholder={'Albert Bartell'} name={'tokenName'} info={'Enter name of token without spaces. Lower and uppercase can be used.'} />
            <InputPrimary field={"Token Symbol"} placeholder={'ADA'} name={'tokenSymbol'} info={'Usually 3-4 Letters like ETH, BTC, WISH etc.'} />
          </div>
          <div className='lg:flex md:flex justify-between'>
            <InputPrimary field={"Decimal Minimum"} placeholder={'632-702-0026'} name={'decMin'} info={'Minimum number of decimal point for calculation. 2-8 are accepted.'} />
            <InputPrimary field={"Decimal Maximum"} placeholder={'01-04-2002 '} name={'decMax'} info={'Maximum number of decimal point for calculation. 6-18 are accepted.'} />
          </div>
          <div className='lg:flex md:flex justify-between'>
            <InputPrimary field={"Decimal Display"} placeholder={'632-702-0026'} name={'decDisplay'} info={'The number of decimal point apply to show number in User/Admin Card balance.'} />
          </div>

          <button className='bg-yellow-500 text-gray-900 px-3 py-1 flex items-center rounded-xl gap-2 px-2 py-3'><FaSyncAlt /> Update Profile</button>
        </form>

        <div className='border-t border-dashed border-gray-400 my-5 py-5'>
          <h5 className="text-orange-300 text-2xl">Purchase & Additional Settings</h5>

          <div className='flex'>
          <InputPrimary field={"Default Selection"} placeholder={'632-702-0026'} name={'defaultSelection'} />
          <InputPrimary field={"Token Price Show in"} placeholder={'632-702-0026'} name={'tokenPrice'} />
          </div>
        </div>
      </div>
  )
}

export default Settings