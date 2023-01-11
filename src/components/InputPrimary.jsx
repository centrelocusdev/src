import React from "react";
import { useState } from "react";

const InputPrimary = ({type, field, name,placeholder, onInput}) => {
    return <div class="relative lg:mr-4 md:w-full lg:w-full xl:w-1/2 w-full lg:m-3">
    <label for={name} class="leading-7 text-sm text-gray-200 text-[16px] font-semibold">{field}</label>
        <input type={type} id={name} name={name} class="w-full bg-zinc-800 rounded bg-opacity-50 focus:border focus:border-yellow-200 focus:bg-transparent text-zinc-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={placeholder} />
  </div>
}

InputPrimary.defaultProps = {
    type: 'text'
}

export default InputPrimary