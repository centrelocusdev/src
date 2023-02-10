import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SendOtp from "../../components/SendOtp";
import { register } from "../../utils/api";

const Signup = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
    mobile_number: "",
    password1: "",
    password2: "",
    dob: "",
    otp: "",
    nationality: "",
  });

  const handleShowRegister = (value) => {
    setShowRegister(value ? true : false);
    console.log(showRegister);
  };

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
      formData.username = formData.email.substring(0, formData.email.indexOf('@'))
      console.log(formData)
      const res = await register(formData);
      if (res.user) navigate("/user-dashboard");
    }
  };

  return (
    <>
      {showRegister ? (
        <>
          <div className="min-h-screen bg-zinc-900 w-screen text-zinc-400">
            <div className="md:flex justify-between">
              <div className="lg:w-2/3 min-h-screen p-8 flex flex-col justify-center">
                <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">
                  Signup
                </h2>
                <form
                  action=""
                  className="text-xl mt-5"
                  onSubmit={onSubmit}
                  onChange={onChange}
                >
                  <div className="md:flex gap-4">
                    <InputPrimary
                      field={"Full name"}
                      name={"full_name"}
                      placeholder={" "}
                      value={formData.full_name}
                    />
                     <InputPrimary
                      field={"Email Address"}
                      name={"email"}
                      placeholder={" "}
                      value={formData.email}
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
                      field={"Mobile Number"}
                      name={"mobile_number"}
                      placeholder={" "}
                      value={formData.mobile_number}
                    />
                    <InputPrimary
                      field={"Date of Birth"}
                      name={"dob"}
                      placeholder={" "}
                      value={formData.dob}
                      type="date"
                    />
                  </div>
                  <div className="md:flex gap-4">
                    <InputPrimary
                      field={"Nationality"}
                      name={"nationality"}
                      placeholder={" "}
                      value={formData.nationality}
                    />
                    <InputPrimary
                      field={"OTP"}
                      name={"otp"}
                      placeholder={" "}
                      value={formData.otp}
                      className=""
                    />
                  </div>

                  <div className="md:flex items-center gap-4 justiyfy-between">
                    <button className="w-1/5 h-fit bg-yellow-500 text-gray-900 py-2 rounded-2xl font-semibold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-2/3 min-h-screen bg-yellow-500 hidden lg:block"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <SendOtp handleShowRegister={handleShowRegister} />
        </>
      )}
    </>
  );
};

export default Signup;
