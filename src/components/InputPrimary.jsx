import React from "react";
import { useState } from "react";
import { FaInfoCircle } from 'react-icons/fa'


const InputPrimary = ({type, field, name,placeholder, onInput, info}) => {
    return <div class="relative lg:mr-4 md:w-full lg:w-full xl:w-1/2 w-full lg:m-3">
    <label for={name} class="leading-7 text-sm text-gray-200 text-[16px] font-semibold">{field}</label>
        <input type={type} id={name} name={name} class="w-full bg-zinc-800 rounded-2xl bg-opacity-50 focus:border focus:border-yellow-200 focus:bg-transparent text-zinc-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={placeholder} />
       <p className="text-[10px] text-gray-400 flex mt-2">
        <FaInfoCircle className="text-yellow-500 text-sm mr-1" /> {info}
       </p>
  </div>
}

InputPrimary.defaultProps = {
    type: 'text',
    info: 'please input values carefully'
}

export default InputPrimary