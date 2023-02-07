import React, { useState, useEffect } from "react";
import InputPrimary from "./InputPrimary";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../utils/api";

const SendOtp = ({ handleShowRegister = () => {} }) => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email == "") {
      toast.error("Please enter a valid email id");
    } else {
      const response = await sendOtp(email)

      if (response.Message) {
        toast.success(`${response.Message}`);
        handleShowRegister(true);
      } else if (response.Error) {
        toast.error(`${response.data.Error}`);
      }
    }
  };

  return (
    <div className="h-screen bg-zinc-900 w-screen text-zinc-400">
      <div className="flex justify-between">
        {/* form */}
        <div className="lg:w-1/3 h-screen px-16 flex flex-col justify-center">
          <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">
            Send OTP
          </h2>
          <form
            action=""
            className="text-xl mt-5"
            onSubmit={onSubmit}
            onChange={onChange}
          >
            <InputPrimary
              field={"Email Address"}
              name={"email"}
              placeholder={" "}
              value={email}
            />

            <button
              className="bg-yellow-500 text-gray-900 py-2 w-full rounded-2xl font-semibold ml-3"
              type="submit"
            >
              send email
            </button>
          </form>
        </div>

        {/* photo */}
        <div className="w-2/3 h-screen bg-yellow-500 hidden md:block"></div>
      </div>
    </div>
  );
};

export default SendOtp;
