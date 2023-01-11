import React, {useState} from 'react'
import InputPrimary from '../../components/InputPrimary';
import ButtonPrimary from '../../components/ButtonPrimary';
import Tag from '../../components/Tag'
import { FaLink, FaCopy } from 'react-icons/fa';

const Settings = () => {
  const tabs = ["Personal Data", "Setting", "Password"];
  const [tab, setTab] = useState(tabs[0]);
  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => {
    setDisabled(false);
  };

  const handleCurrentTab = (currentTab) => {
    setTab(currentTab);
  };

  return (
    <>
      <div className="flex justify-between mb-8">
        <div className="w-4/6 mr-8">
          <div className="min-h-[10rem] border border-dashed border-gray-600 rounded-2xl p-5">

          <h5 className="text-orange-300 text-2xl">Profile Details</h5>

          <nav className="flex justify-start gap-16 text-xl font-semibold uppercase">
              <button
                onClick={(e) => handleCurrentTab(e.target.textContent)}
                className={`mt-3 transition-all ${
                  tab === "Personal Data" && "text-yellow-500 border-yellow-500"
                } pt-2 border-b-2 border-transparent text-gray-400 text-[17px] hover:text-yellow-500 hover:border-yellow-500`}
              >
                Personal Data
              </button>
              <button
                onClick={(e) => handleCurrentTab(e.target.textContent)}
                className={`mt-3 transition-all ${
                  tab === "Setting" && "text-yellow-500 border-yellow-500"
                } pt-2 border-b-2 border-transparent text-gray-400 text-[17px] hover:text-yellow-500 hover:border-yellow-500`}
              >
                Setting
              </button>
              <button
                onClick={(e) => handleCurrentTab(e.target.textContent)}
                className={`mt-3 transition-all ${
                  tab === "Password" && "text-yellow-500 border-yellow-500"
                } pt-2 border-b-2 border-transparent text-gray-400 text-[17px] hover:text-yellow-500 hover:border-yellow-500`}
              >
                Password
              </button>
            </nav>

            {tab === tabs[0] && (
              <form action="">
                <div className="lg:flex md:flex justify-between">
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
                </div>
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"Phone number"}
                    name={"phoneNumber"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Date of Birth"}
                    name={"dateOfBirth"}
                    placeholder={" "}
                  />
                </div>
                <div className="lg:mr-16">
                  <InputPrimary
                    field={"Nationality"}
                    name={"nationality"}
                    placeholder={" "}
                  />
                </div>

                <ButtonPrimary text={"Update profile"} />
              </form>
            )}
            {tab === tabs[1] && (
              <div className="text-center text-gray-400">Coming soon</div>
            )}
            {tab === tabs[2] && (
              <form action="">
                <div className="lg:mr-16">
                  <InputPrimary
                    field={"Old Password"}
                    name={"oldPassword"}
                    placeholder={" "}
                  />
                </div>
                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"New Password"}
                    name={"newPassword"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Confirm Password"}
                    name={"confirmPassword"}
                    placeholder={" "}
                  />
                </div>

                <p className="text-orange-300 text-[12px]">
                  *Password should be minmum 8 letter and include lower and
                  uppercase letter.
                </p>

                <ButtonPrimary text={"Update"} />
              </form>
            )}
          </div>
        </div>

        <div className="w-2/6">
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
                className="text-gray-200 border-0 focus:outline-none focus:border rounded-full bg-transparent"
                disabled={disabled}
                value="0x39deb3.....e2ac64rd"
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
              Invite your friends & family and receive a <span className='text-yellow-500'>bonus - 15%</span> of the
              value of contribution.
            </p>
            <div className="flex gap-2 text-gray-200 font-semibold w-full my-2 items-center p-3 rounded-xl bg-[rgba(0,0,0,0.3)]">
            <FaLink className='text-md' />
            <a className="overflow-hidden font-normal">
              https://demo.themenio.com/
            </a>
            <FaCopy className='text-md cursor-pointer hover:text-gray-400' title='copy to clipboard' />
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

            <button className='my-2 p-2 rounded-2xl bg-yellow-500 text-gray-900 font-semibold'>Click to Procees</button>

            <p className="text-orange-300">
              * KYC verification required for purchase token
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings