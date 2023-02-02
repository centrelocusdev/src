import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../config/authSlice";
import Spinner from "../../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
      navigate("/user");
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
      const userData = {
        email, 
        password
      }

      dispatch(login(userData))
  };

  if(isLoading) {
    return <Spinner />
  }

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
            />
            <InputPrimary
              field={"Password"}
              name={"password"}
              placeholder={" "}
            />

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
