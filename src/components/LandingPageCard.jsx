import React from "react";
import {BsLightbulb} from 'react-icons/bs'

const LandingPageCard = ({icon, desc}) => {
  return (
    <div className="flex flex-col p-5 items-center justify-center">
      {
        icon
      }
      <p className="text-center my-2">
        {desc}
      </p>
    </div>
  )
}

export default LandingPageCard