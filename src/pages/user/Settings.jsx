import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import Tag from "../../components/Tag";
import { FaLink, FaCopy } from "react-icons/fa";
import { getCurrentUser, changePassword, getUserDetails, updateUserDetails } from "../../utils/api";
import { toast } from "react-toastify";

const Settings = () => {
  const [currentUser, setCurrentUser] = useState('')
  //tabs 
  const tabs = ["Personal Data", "Setting", "Password"];
  const [tab, setTab] = useState(tabs[0]);
  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => {
    setDisabled(false);
  };

  const handleCurrentTab = (currentTab) => {
    setTab(currentTab);
  };

  //update password
  const initialPasswordsState = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  }

  const [passwords, setPasswords] = useState(initialPasswordsState);

  const onChangePassword = (e) => {
    setPasswords((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitPassword = async (e) => {
    e.preventDefault();
    if (passwords.new_password !== passwords.confirm_password) {
      toast.error("Password does not match");
    } else {
      await changePassword(passwords);
      setPasswords(initialPasswordsState)
    }
  };

  //update profile details
  useEffect(() => {
    async function fetchUserDetails () {
      const response = await getUserDetails()
    }
    fetchUserDetails()
  })

  const [profileDetails, setProfileDetails] = useState({
    full_name: "",
    dob: "",
    mobile_number: "",
    nationality: ""
  })

  const onChangeProfileDetails = (e) => {
    setProfileDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmitProfileDetails = async (e) => {
    e.preventDefault()
    const response = await updateUserDetails(profileDetails)
    if(response) {
      setProfileDetails({
        full_name: "",
        dob: "",
        mobile_number: "",
        nationality: ""
      })

      toast.success("Profile updated successfully")
    }
      
  }

  return (
    <>
      <div className="md:flex justify-between mb-8">
        <div className="md:w-4/6 md:mr-8">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5">
            <h5 className="text-orange-300 text-2xl">Profile Details</h5>

            <nav className="flex justify-start md:gap-16 gap-7 text-xl font-semibold uppercase">
              <button
                onClick={(e) => handleCurrentTab(e.target.textContent)}
                className={`mt-3 transition-all ${
                  tab === "Personal Data" && "text-yellow-500 border-yellow-500"
                } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
              >
                Personal Data
              </button>
              <button
                onClick={(e) => handleCurrentTab(e.target.textContent)}
                className={`mt-3 transition-all ${
                  tab === "Setting" && "text-yellow-500 border-yellow-500"
                } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
              >
                Setting
              </button>
              <button
                onClick={(e) => handleCurrentTab(e.target.textContent)}
                className={`mt-3 transition-all ${
                  tab === "Password" && "text-yellow-500 border-yellow-500"
                } pt-2 border-b-2 border-transparent text-gray-400 text-sm md:text-lg hover:text-yellow-500 hover:border-yellow-500`}
              >
                Password
              </button>
            </nav>

            {tab === tabs[0] && (
              <form action="" onChange={onChangeProfileDetails} onSubmit={onSubmitProfileDetails}>
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"Full name"}
                    name={"full_name"}
                    placeholder={" "}
                    value={profileDetails.full_name}
                  />
                  <InputPrimary
                    type={'date'}
                    field={"Date of Birth"}
                    name={"dob"}
                    placeholder={" "}
                    value={profileDetails.dob}
                  />
                </div>
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"Mobile number"}
                    name={"mobile_number"}
                    placeholder={" "}
                    value={profileDetails.mobile_number}
                  />
                  <InputPrimary
                    field={"Nationality"}
                    name={"nationality"}
                    placeholder={" "}
                    value={profileDetails.nationality}
                  />
                </div>
      
                <button className="px-3 py-2 m-4 text-gray-900 font-semibold text-[16px] bg-yellow-500 rounded lg:text-md" type="submit">Update profile</button>
              </form>
            )}
            {tab === tabs[1] && (
              <div className="text-center text-gray-400">Coming soon</div>
            )}
            {tab === tabs[2] && (
              <form
                action=""
                onSubmit={onSubmitPassword}
                onChange={onChangePassword}
              >
                <div className="lg:mr-16">
                  <InputPrimary
                    field={"Old Password"}
                    name={"old_password"}
                    placeholder={" "}
                    value={passwords.old_password}
                  />
                </div>
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"New Password"}
                    name={"new_password"}
                    placeholder={" "}
                    value={passwords.new_password}
                  />
                  <InputPrimary
                    field={"Confirm Password"}
                    name={"confirm_password"}
                    placeholder={" "}
                    value={passwords.confirm_password}
                  />
                </div>

                <p className="text-orange-300 text-[12px]">
                  *Password should be minmum 8 letter and include lower and
                  uppercase letter.
                </p>

                <button
                  className={`px-3 py-2 m-4 text-gray-900 font-semibold text-[16px] bg-yellow-500 rounded lg:text-md`}
                  types="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="md:w-2/6 mt-8 md:mt-0">
          <div className="text-zinc-400">
            <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl text-orange-300 font-semibold">
                Your Account Status
              </h3>
              <div className="w-full flex my-2">
                <Tag text={"Email Verified"} color={"bg-yellow-500"} />
                <Tag text={"KYC Pending"} color={"bg-orange-300"} />
              </div>
              <h3 className="text-lg text-orange-300">Recieving wallet</h3>
              <div className="flex justify-between mt-1">
                <input
                  className="text-gray-200 border-0 focus:outline-none focus:border rounded-full bg-transparent truncate"
                  disabled={disabled}
                  value="0x39deb3sjdsdsyduweywehwjewe2ac64rd"
                />

                <button
                  className="font-semibold text-orange-300"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5 mt-8">
              <h3 className="text-[20px] text-orange-300 font-semibold">
                Earn with Referral
              </h3>

              <p>
                Invite your friends & family and receive a{" "}
                <span className="text-yellow-500">bonus - 15%</span> of the
                value of contribution.
              </p>
              <div className="flex gap-2 text-gray-200 font-semibold w-full my-2 items-center p-3 rounded-xl bg-[rgba(0,0,0,0.3)]">
                <FaLink className="text-md" />
                <a className="overflow-hidden font-normal truncate">
                  https://demo.themenio.com/ref=7d264f90653733592
                </a>
                <FaCopy
                  className="text-md cursor-pointer hover:text-gray-400"
                  title="copy to clipboard"
                />
              </div>
            </div>
            <div className="flex flex-col w-full min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5 mt-8">
              <h3 className="text-[20px] text-orange-300 font-semibold">
                Identity Verification - KYC
              </h3>

              <p className="text-gray-300 text-sm my-2">
                To comply with regulation, participant will have to go through
                indentity verification.
              </p>

              <p className="leading-6 text-md mt-2 uppercase">
                You have not submitted your KYC application to verify your
                indentity.
              </p>

              <button className="my-2 p-2 rounded-2xl bg-yellow-500 text-gray-900 font-semibold">
                Click to Procees
              </button>

              <p className="text-orange-300">
                * KYC verification required for purchase token
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
