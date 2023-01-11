import React from "react";

const Tag = ({text, color}) => {
  return (
    <div className={`text-sm mx-1 py-1 px-2 text-[rgba(0,0,0,1)] rounded-xl ${color}`}>
        {text}
    </div>
  )
}

export default Tag