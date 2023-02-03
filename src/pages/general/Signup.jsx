import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../config/authSlice";
import Spinner from '../../components/Spinner';
import SendOtp from "../../components/SendOtp";

const Signup = () => {
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

  const {
    fullname,
    username,
    email,
    phone,
    password1,
    password2,
    wallet_address,
    otp,
    project,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleShowRegister = (value) => {
    setShowRegister(value ? true : false)
    console.log(showRegister)
  }

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/user')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        fullname,
        username,
        email,
        phone,
        password1,
        password2,
        wallet_address,
        otp,
        project,
      };

      dispatch(register(userData))
    }
  };

  if(isLoading) {
    return <Spinner />
  }

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
              />
              <InputPrimary
                field={"Username"}
                name={"username"}
                placeholder={" "}
              />
            </div>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Email Address"}
                name={"email"}
                placeholder={" "}
              />
              <InputPrimary
                field={"Phone number"}
                name={"phone"}
                placeholder={" "}
              />
            </div>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Password"}
                name={"password1"}
                placeholder={" "}
              />
              <InputPrimary
                field={"Confirm Password"}
                name={"password2"}
                placeholder={" "}
              />
            </div>
            <div className="md:flex gap-4">
              <InputPrimary
                field={"Wallet Address"}
                name={"wallet_address"}
                placeholder={" "}
              />
              <InputPrimary
                field={"Project"}
                name={"project"}
                placeholder={" "}
              />
            </div>

            <div className="md:flex items-center gap-4 justiyfy-between">
              <InputPrimary
                field={"OTP"}
                name={"otp"}
                placeholder={" "}
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
