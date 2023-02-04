import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-900">
      <div className="w-4/5 h-4/5 m-auto">
        <FaSpinner />
      </div>
    </div>
  );
};

export default Spinner;