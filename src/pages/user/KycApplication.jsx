import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";
import { kycForm } from "../../utils/api";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const KycApplication = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    dob: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    nationality: "",
    zip_code: "",
    national_id_image: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await kycForm(formData);
    toast.success("KYC completed");
  };

  //tabs
  const tabs = ["Personal Details", "Your Address", "Document Upload", "Finals"];
  const [tab, setTab] = useState(tabs[0]);

  const handleCurrentTab = (currentTab) => {
    setTab(currentTab);
  };

  const onPressNext = () => {
    const index = tabs.indexOf(tab)+1
    console.log(index < tabs.length-1)
    if(index <= tabs.length-1) {
      setTab(tabs[index])
    }
    else {
      setTab(tabs[0])
    }
  }

  const onPressPrevious = () => {
    const index = tabs.indexOf(tab)-1
    console.log(index, tabs.length-1)
    if(index >= 0) {
      setTab(tabs[index])
    }
    else {
      setTab(tabs[tabs.length-1])
    }
  }

  return (
    <>
      <section className="p-5 text-zinc-400">
        <div className="">
          <h2 className="text-4xl text-yellow-500 leading-2">
            Begin your ID-Verification
          </h2>
          <p className="text-gray-500 text-lg pt-2">
            Verify your identity to participate in token sale.
          </p>
        </div>

        <nav className="flex justify-start md:gap-16 gap-7 text-xl font-semibold uppercase">
          <button
            onClick={(e) => handleCurrentTab(e.target.textContent)}
            className={`mt-3 transition-all ${
              tab === "Personal Details" && "text-yellow-500 border-yellow-500"
            } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
          >
            Personal Details
          </button>
          <button
            onClick={(e) => handleCurrentTab(e.target.textContent)}
            className={`mt-3 transition-all ${
              tab === "Your Address" && "text-yellow-500 border-yellow-500"
            } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
          >
            Your Address
          </button>
          <button
            onClick={(e) => handleCurrentTab(e.target.textContent)}
            className={`mt-3 transition-all ${
              tab === "Document Upload" && "text-yellow-500 border-yellow-500"
            } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
          >
            Document Upload
          </button>
          <button
            onClick={(e) => handleCurrentTab(e.target.textContent)}
            className={`mt-3 transition-all ${
              tab === "Finals" && "text-yellow-500 border-yellow-500"
            } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
          >
            Finals
          </button>
        </nav>

        <form
          action=""
          className="mt-3 rounded-xl shadow-lg border border-dashed border-gray-400 p-5"
        >

          {tab === tabs[0] && (
            <>
              <p className="text-gray-500 pl-3 mt-5 border-l-4 border-gray-400">
                Please type carefully and fill out the form with your personal
                details. Your can’t edit these details once you submitted the
                form.
              </p>

              <div className="px-4">
                <div className="mt-6">
                  <div className="lg:flex md:flex justify-between">
                    <InputPrimary
                      field={"First Name"}
                      name={"first_name"}
                      placeholder={"John"}
                      value={formData.first_name}
                    />
                    <InputPrimary
                      field={"Last Name"}
                      name={"last_name"}
                      placeholder={"Smith"}
                      value={formData.last_name}
                    />
                  </div>

                  <div className="lg:flex md:flex justify-between">
                    <InputPrimary
                      field={"Email Address"}
                      name={"email"}
                      placeholder={"you@example.com"}
                      value={formData.email}
                    />
                    <InputPrimary
                      field={"Phone Number"}
                      name={"phone_number"}
                      placeholder={" "}
                      value={formData.phone_number}
                    />
                  </div>
                  <div className="lg:w-[375px]">
                    <InputPrimary
                      field={"Date of Birth"}
                      name={"dob"}
                      placeholder={" "}
                      type="date"
                      value={formData.dob}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {tab === tabs[1] && (
            <>
              <p className="text-gray-500 text-gray-500 pl-3 mt-5 border-l-4 border-gray-400">
                We care about your privacy and your address won't be shared with anybody. Please enter the details carefully as we might need to contact you in future
              </p>
              <div className="mt-3">
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"Address line 1"}
                    name={"address_line_1"}
                    placeholder={" "}
                    value={formData.address_line_1}
                  />
                  <InputPrimary
                    field={"Address line 2"}
                    name={"address_line_2"}
                    placeholder={" "}
                    value={formData.address_line_2}
                  />
                </div>

                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"City"}
                    name={"city"}
                    placeholder={" "}
                    value={formData.city}
                  />
                  <InputPrimary
                    field={"State"}
                    name={"state"}
                    placeholder={" "}
                    value={formData.state}
                  />
                </div>
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"Nationality"}
                    name={"nationality"}
                    placeholder={" "}
                    value={formData.nationality}
                  />
                  <InputPrimary
                    field={"Zip Code"}
                    name={"zip_code"}
                    placeholder={" "}
                    value={formData.zip_code}
                  />
                </div>
              </div>
            </>
          )}
          {tab === tabs[2] && (
            <>
              <p className="text-gray-500 text-gray-500 pl-3 mt-5 border-l-4 border-gray-400">
                In order to complete your KYC, please upload any/all of the following
                personal documents carefully
              </p>
              <div className="py-6">
                <div className="lg:flex md:flex justify-between mt-3">
                  <InputPrimary
                    type={"file"}
                    field={"Passport"}
                    name={"passport_image"}
                    placeholder={" "}
                    value={formData.passport_image}
                  />
                  <InputPrimary
                    type={"file"}
                    field={"National card"}
                    name={"national_id_image"}
                    placeholder={" "}
                    value={formData.national_id_image}
                  />
                </div>
                <div className="lg:w-[390px]">
                  <InputPrimary
                    type={"file"}
                    field={"Driver's license"}
                    name={"driver_license"}
                    placeholder={" "}
                    value={formData.driver_license}
                  />
                </div>

                <div className="my-4">
                  <h3 className="text-yellow-500 font-semibold text-[18px]">
                    To avoid delays when verifying account, Please make sure
                    bellow:
                  </h3>

                  <p className="my-1">
                    Chosen credential must not be expaired.
                  </p>
                  <p className="my-1">
                    Document should be good condition and clearly visible.
                  </p>
                  <p className="my-1">
                    Make sure that there is no light glare on the card.
                  </p>
                </div>
              </div>
            </>
          )}
          {tab === tabs[3] && (
            <>
              <p className="text-gray-500 text-gray-500 pl-3 my-5 border-l-4 border-gray-400">
                You almost reached to end of your KYC proccess. Please check the following feilds carefully
              </p>
              <div className="flex lg:px-13 mx-2">
                <input type="checkbox" name={"privacyPolicy"} className="" />
                <label htmlFor="privacyPolicy" className="mx-3">
                  I Have Read The Terms Of Condition And Privary Policy.
                </label>
              </div>

              <div className="flex lg:px-13 mx-2">
                <input type="checkbox" name={"isCorrect"} className="" />
                <label htmlFor="isCorrect" className="mx-3">
                  All The Personal Information I Have Entered Is Correct.
                </label>
              </div>

              <ButtonPrimary text={"Proccess to verify"} />
            </>
          )}

          <div className="mt-5 w-full text-yellow-500 flex justify-between text-xl">
              <FaArrowAltCircleLeft className="hover:text-yellow-200 cursor-pointer" title="Previous" onClick={onPressPrevious} />
              <FaArrowAltCircleRight className="hover:text-yellow-200 cursor-pointer" title="Next" onClick={onPressNext} />
          </div>

          {/* <div className="bg-zinc-800 p-6 mt-5">
            <h3 className="text-[24px] text-yellow-500">Your Paying Wallet</h3>
            <p className="text-gray-500">
              Submit your wallet address that you are going to send funds
            </p>
          </div>
          <div className="pt-3">
            <div className="lg:flex md:flex flex-col justify-between">
              <select
                name="wallet"
                id="wallet"
                className="w-2/3 bg-white rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-3 mx-3"
              >
                <option value=" " className="">
                  Daedalus wallet
                </option>
                <option value="Ethereum" className="">
                  Ethereum
                </option>
                <option value="DashCoin" className="">
                  DashCoin
                </option>
                <option value="BitCoin" className="">
                  BitCoin
                </option>
              </select>

              <InputPrimary
                field={"Your address for token"}
                name={"walletAddress"}
                placeholder={" "}
              />
            </div>
          </div> */}
        </form>
      </section>
    </>
  );
};

export default KycApplication;
