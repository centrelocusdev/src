import React from "react";

const ButtonPrimary = ({text, color, handleClick}) => {
    return <button className={`px-3 py-2 m-4 text-gray-900 font-semibold text-[16px] bg-${color} rounded lg:text-md`} onClick={handleClick}>{text}</button>
}

ButtonPrimary.defaultProps = {
    text: 'submit',
    color: 'yellow-500'
}

export default ButtonPrimary