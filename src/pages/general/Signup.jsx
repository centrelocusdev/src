import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { register, reset } from "../../config/authSlice";
import Spinner from '../../components/Spinner';
import SendOtp from "../../components/SendOtp";
import { register } from "../../utils/api";

const Signup = () => {
  const navigate = useNavigate()
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password1: "",
    password2: "",
    wallet_address: "",
    otp: "",
    project: "",
  });

  const handleShowRegister = (value) => {
    setShowRegister(value ? true : false)
    console.log(showRegister)
  }
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      toast.error("Passwords do not match");
    } else {
      const res = await register(formData)
      if(res.user) navigate('/user-dashboard')
    }
  };

  return (
    <>
      {
        showRegister ? <>
          <div className="min-h-screen bg-zinc-900 w-screen text-zinc-400">
      <div className="md:flex justify-between">
        <div className="lg:w-2/3 min-h-screen p-8 flex flex-col justify-center">
          <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">
            Signup
          </h2>
          <form action="" className="text-xl mt-5" onSubmit={onSubmit} onChange={onChange}>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Full name"}
                name={"fullname"}
                placeholder={" "}
                value={formData.fullname}
              />
              <InputPrimary
                field={"Username"}
                name={"username"}
                placeholder={" "}
                value={formData.username}
              />
            </div>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Email Address"}
                name={"email"}
                placeholder={" "}
                value={formData.email}
              />
              <InputPrimary
                field={"Phone number"}
                name={"phone"}
                placeholder={" "}
                value={formData.phone}
              />
            </div>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Password"}
                name={"password1"}
                placeholder={" "}
                value={formData.password1}
              />
              <InputPrimary
                field={"Confirm Password"}
                name={"password2"}
                placeholder={" "}
                value={formData.password2}
              />
            </div>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Wallet Address"}
                name={"wallet_address"}
                placeholder={" "}
                value={formData.wallet_address}
              />
              <InputPrimary
                field={"Project"}
                name={"project"}
                placeholder={" "}
                value={formData.project}
              />
            </div>

            <div className="md:flex items-center gap-4 justiyfy-between">
              <InputPrimary
                field={"OTP"}
                name={"otp"}
                placeholder={" "}
                value={formData.otp}
                className=""
              />
              <button className="w-full h-fit bg-yellow-500 text-gray-900 py-2 rounded-2xl font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/3 min-h-screen bg-yellow-500 hidden lg:block"></div>
      </div>
    </div>
        </> : (<>
          <SendOtp handleShowRegister={handleShowRegister} />
        </>)
      }
    </>
  );
};

export default Signup;
