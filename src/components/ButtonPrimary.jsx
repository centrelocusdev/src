import React from "react";

const ButtonPrimary = ({text, color, handleClick}) => {
    return <button className={`px-3 py-2 m-4 text-white font-semibold text-md bg-${color} rounded`} onClick={handleClick}>{text}</button>
}

ButtonPrimary.defaultProps = {
    text: 'submit',
    color: 'blue-500'
}

export default ButtonPrimary