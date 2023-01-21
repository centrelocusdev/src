import React from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";

const Signup = () => {
  return (
    <div className="h-screen bg-zinc-900 w-screen text-zinc-400">
      <div className="md:flex justify-between">
        {/* form */}
        <div className="lg:w-1/3 h-screen px-16 flex flex-col justify-center">
          <h2 className="text-3xl text-white font-bold uppercase underline decoration-4 underline-offset-8 decoration-yellow-500">Signup</h2>
        <form action="" className="text-xl mt-5">
                  <InputPrimary
                    field={"Full name"}
                    name={"fullname"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Email Address"}
                    name={"emailAddress"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Phone number"}
                    name={"phoneNumber"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Password"}
                    name={"password"}
                    placeholder={" "}
                  />

                <button className="bg-yellow-500 text-gray-900 py-2 w-full rounded-2xl font-semibold ml-3">Submit</button>
              </form>
        </div>

        {/* photo */}
        <div className="w-2/3 h-screen bg-yellow-500 hidden lg:block">

        </div>
      </div>
    </div>
  )
}

export default Signup