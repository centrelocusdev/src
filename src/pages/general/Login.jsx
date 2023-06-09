import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
      e.preventDefault();
      const res = await login(formData)
      if(res?.user.is_staff)
        navigate('/admin-dashboard')
      else
        navigate('/user-dashboard')
  };

  return (
    <div className="h-screen bg-zinc-900 w-screen text-zinc-400">
      <div className="flex justify-between">
        {/* form */}
        <div className="lg:w-1/3 h-screen px-16 flex flex-col justify-center">
          <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">
            Login
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
              value={formData.email}
            />
            <InputPrimary
              field={"Password"}
              name={"password"}
              placeholder={" "}
              value={formData.password}
            />
            <div className="md:-translate-y-10 -translate-y-8 float-right ">
            <a href="/forgot-password" className="text-yellow-500 text-xs hover:text-zinc-400">Forgot password</a>
            </div>

            <button
              className="bg-yellow-500 text-gray-900 py-2 w-full rounded-2xl font-semibold ml-3"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>

        {/* photo */}
        <div className="w-2/3 h-screen bg-yellow-500 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Login;
