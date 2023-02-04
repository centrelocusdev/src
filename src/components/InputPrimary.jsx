import React from "react";
import { useState } from "react";
import { FaInfoCircle } from 'react-icons/fa'


const InputPrimary = ({type, field, name,placeholder, onInput, info}) => {
    return <div className="relative lg:mr-4 md:w-full lg:w-full lg:m-3">
    <label htmlFor={name} className="leading-7 text-sm text-gray-200 text-lg mb-1 font-semibold">{field}</label>
        <input type={type} id={name} name={name} className="mt-1 text-sm w-full bg-zinc-800 rounded-2xl bg-opacity-50 focus:border focus:border-yellow-200 focus:bg-transparent text-zinc-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={placeholder} />
       <p className="text-[10px] text-gray-400 flex flex items-center">
        <FaInfoCircle className="text-yellow-500 text-sm mr-1" /> {info}
       </p>
  </div>
}

InputPrimary.defaultProps = {
    type: 'text',
    info: 'please input values carefully'
}

export default InputPrimary