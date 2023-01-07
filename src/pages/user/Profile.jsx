import React from "react";
import { useState } from 'react'
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";

const Profile = () => {
    const tabs = ["Personal Data", "Setting", "Password"];
    const [tab, setTab] = useState(tabs[0]);
    const [disabled, setDisabled] = useState(true)

    const handleEditClick = () => {
        setDisabled(false)
    }

    const handleCurrentTab = (currentTab) => {
        setTab(currentTab);
    };

    return (
        <section className="lg:w-[80%] bg-blue-100 lg:flex justify-between mx-auto">
            <div className="m-5 lg:w-3/5">
                <div className="bg-white rounded p-5">
                    <h2 className="text-blue-500 font-semibold text-[24px]">Profile Details</h2>

                    <nav className="flex justify-between text-[20px] font-semibold uppercase border-b">
                        <button
                        onClick={(e) => handleCurrentTab(e.target.textContent)}
                        className={`mt-3 transition-all ${
                            tab === "Personal Data" && "text-blue-500 border-blue-500"
                        } pt-2 border-b-2 border-transparent text-gray-400 text-[17px] hover:text-blue-500 hover:border-blue-500`}
                        >
                        Personal Data
                        </button>
                        <button
                        onClick={(e) => handleCurrentTab(e.target.textContent)}
                        className={`mt-3 transition-all ${
                            tab === "Setting" && "border-blue-500"
                        } pt-2 border-b-2 border-transparent text-gray-400 text-[17px] hover:text-blue-500 hover:border-blue-500`}
                        >
                        Setting
                        </button>
                        <button
                        onClick={(e) => handleCurrentTab(e.target.textContent)}
                        className={`mt-3 transition-all  ${
                            tab === "Password" && "border-blue-500"
                        } py-2 border-b-2  border-transparent text-gray-400 text-[17px] hover:text-blue-500 hover:border-blue-500`}
                        >
                        Password
                        </button>
                    </nav>

                    {tab === tabs[0] && 
                        <form action="">
                            <div className="lg:flex md:flex justify-between">
                                <InputPrimary field={'Full name'} name={'fullname'} placeholder={' '} />
                                <InputPrimary field={'Email Address'} name={'emailAddress'} placeholder={' '} />
                            </div>
                            <div className="lg:flex md:flex justify-between">
                                <InputPrimary field={'Phone number'} name={'phoneNumber'} placeholder={' '} />
                                <InputPrimary field={'Date of Birth'} name={'dateOfBirth'} placeholder={' '} />
                            </div>
                            <div className="lg:mr-16">
                                <InputPrimary field={'Nationality'} name={'nationality'} placeholder={' '} />
                            </div>

                            <ButtonPrimary text={'Update profile'} />
                        </form>
                    }
                    {tab === tabs[1] && 
                    <div  className="text-center text-gray-400">
                        Coming soon
                    </div>
                    }
                    {tab === tabs[2] && 
                    <form action="">
                    <div className="lg:mr-16">
                    <InputPrimary field={'Old Password'} name={'oldPassword'} placeholder={' '} />
                    </div>
                    <div className="lg:flex md:flex justify-between">
                        <InputPrimary field={'New Password'} name={'newPassword'} placeholder={' '} />
                        <InputPrimary field={'Confirm Password'} name={'confirmPassword'} placeholder={' '} />
                    </div>

                    <p className="text-blue-500 text-[12px]">*Password should be minmum 8 letter and include lower and uppercase letter.</p>

                    <ButtonPrimary text={'Update'} />
                </form>
                    }
                </div>
                {/* two factor verfication */}
                {/* <div className="border-red-500 bg-white rounded p-5 mt-10">
                    <h2 className="text-blue-500 font-semibold text-[24px]">Two Factor verfication</h2>

                    <p className="mt-2">Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>

                    <div className="flex justify-between mt-3">
                        <ButtonPrimary text={'Enable 2FA'} />

                        <p className="uppercase text-sm font-semibold text-gray-700">current status: <span className="px-2 bg-gray-200">disable</span> </p>
                    </div>
                </div> */}
            </div>
            <div className="m-5 lg:w-2/5">
                <div className="p-5 border text-gray-600 bg-white rounded">
                    <h3 className="text-[20px] text-blue-500 font-semibold">Your Account Status</h3>
                    <div className="w-full flex">
                        <ButtonPrimary text={'Email Verified'} color={'green-500'} />
                        <ButtonPrimary text={'KYC Pending'} color={'amber-500'} />
                    </div>
                    <h3 className="text-[20px] text-blue-500">Recieving wallet</h3>
                    <div className="flex justify-between">
                        <input className="text-gray-500 font-semibold border-0 focus:outline-none focus:border rounded-full px-2" disabled={disabled} value="0x39deb3.....e2ac64rd" />

                        <button className="font-semibold text-blue-500" onClick={handleEditClick}>Edit</button>
                    </div>
                </div>
                <div className="p-5 border text-gray-600 bg-white rounded mt-10">
                    <h3 className="text-[20px] text-blue-500 font-semibold">Earn with Referral</h3>
                
                    <p>
                    Invite your friends & family and receive a bonus - 15% of the value of contribution.
                    </p>
                        <p className="w-full text-gray-500 font-semibold w-full overflow-hidden">https://demo.themenio.com/ico?ref=7d264f90653733592</p>

                </div>
                <div className="flex flex-col w-full p-5 border text-gray-600 bg-white rounded mt-10">
                    <h3 className="text-[20px] text-blue-500 font-semibold">Identity Verification - KYC</h3>
                
                    <p className="text-gray-800">
                    To comply with regulation, participant will have to go through indentity verification.
                    </p>

                    <p className="leading-6 text-[18px] mt-2">You have not submitted your KYC application to verify your indentity.</p>
                        
                    <ButtonPrimary text={'Click to Proceed'} />

                    <p className="text-red-500">* KYC verification required for purchase token</p>
                </div>
            </div>            
        </section>
    )
}

export default Profile