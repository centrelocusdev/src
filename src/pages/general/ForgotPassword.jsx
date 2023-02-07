import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api_url } from "../../utils/config";
import { sendToken, forgotPassword } from "../../utils/api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSentToken, setIsSentToken] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    token: ""
  })

 //send email
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await sendToken(email)

    if (response.status == 'OK') {
      toast.success("Please check your email");
      setIsSentToken(true);
    } else {
      toast.error(`Could not send email`);
    }
  };

  //reset password
  const onChangePassword = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitPassword = async (e) => {
    e.preventDefault()
    if(formData.password !== formData.confirm_password)
      toast.error('Password does not match')

    const response = await forgotPassword(formData.password, formData.token)
    if(response.status == 'OK') navigate('/login')
  };

  return (
    <>
      <div className="h-screen bg-zinc-900 w-screen text-zinc-400">
        <div className="flex justify-between">
          {/* form */}
          <div className="lg:w-1/3 h-screen px-16 flex flex-col justify-center">
            <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">
              Forgot password
            </h2>
            {isSentToken ? (
              <>
                <form
                  action=""
                  className="text-xl mt-5"
                  onSubmit={onSubmitPassword}
                  onChange={onChangePassword}
                >
                  <InputPrimary
                    field={"New Password"}
                    name={"password"}
                    placeholder={" "}
                    value={formData.password}
                  />

                  <InputPrimary
                    field={"Confirm Password"}
                    name={"confirm_password"}
                    placeholder={" "}
                    value={formData.confirm_password}
                  />

                  <InputPrimary
                    field={"Token"}
                    name={"token"}
                    placeholder={" "}
                    value={formData.token}
                  />

                  <button
                    className="bg-yellow-500 text-gray-900 py-2 w-full rounded-2xl font-semibold ml-3"
                    type="submit"
                  >Submit</button>
                </form>
              </>
            ) : (
              <>
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
                    Send Token
                  </button>
                </form>
              </>
            )}
          </div>

          {/* photo */}
          <div className="w-2/3 h-screen bg-yellow-500 hidden md:block"></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
