import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerAdmin, reset } from "../../config/authSlice";
import Spinner from "../../components/Spinner";
import SendOtp from "../../components/SendOtp";

const AdminRegistration = () => {
  const [showRegister, setShowRegister] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password1: "",
    password2: "",
    description: "",
  });

  const handleShowRegister = (value) => {
    setShowRegister(value ? true : false)
    console.log(showRegister)
  }

  const { username, email, phone, password1, password2, description } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/admin");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

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
        username,
        email,
        phone,
        password1,
        password2,
        description,
      };

      dispatch(registerAdmin(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {showRegister ? (
        <>
          <div className="min-h-screen bg-zinc-900 w-screen text-zinc-400">
            <div className="md:flex justify-between">
              {/* form */}
              <div className="lg:w-2/3 min-h-screen px-16 flex flex-col justify-center">
                <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">
                  Admin Registeration
                </h2>
                <form
                  action=""
                  className="text-xl mt-5"
                  onSubmit={onSubmit}
                  onChange={onChange}
                >
                  <div className="md:flex gap-4">
                    <InputPrimary
                      field={"Username"}
                      name={"username"}
                      placeholder={" "}
                    />
                    <InputPrimary
                      field={"Email Address"}
                      name={"email"}
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
                      field={"Phone number"}
                      name={"phone"}
                      placeholder={" "}
                    />
                    <InputPrimary
                      field={"Description"}
                      name={"description"}
                      placeholder={" "}
                      className=""
                    />
                  </div>

                  <button className="w-1/2 h-fit bg-yellow-500 text-gray-900 py-2 rounded-2xl font-semibold">
                    Submit
                  </button>
                </form>
              </div>

              {/* photo */}
              <div className="w-2/3 min-h-screen bg-yellow-500 hidden lg:block"></div>
            </div>
          </div>
        </>
      ) : (
        <SendOtp handleShowRegister={handleShowRegister} />
      )}
    </>
  );
};

export default AdminRegistration;
