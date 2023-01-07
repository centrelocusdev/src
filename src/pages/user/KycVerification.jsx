import React from "react";
import { FaFile } from 'react-icons/fa'
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const KycVerification = () => {
    const navigate = useNavigate()

    return (
        <section className="w-full p-6 mx-auto min-h-screen container leading-7 rounded lg:p-12 lg:w-3/4">
            <div className="text-center ">
                <h2 className="text-3xl font-normal text-blue-500 lg:text-4xl">KYC Verification</h2>
                <p className="text-[15px] text-justify text-gray-600 border lg:w-[75%] mx-auto mt-3 lg:text-[18px] lg:text-center ">
                To comply with regulation each participant will have to go through indentity verification (KYC/AML) to prevent fraud causes. Please, complete our fast and secure verification process to participate in our token sale.
                </p>
            </div>

            <div className="bg-white text-gray-600 p-7 mt-5 lg:p-16">
                <div className="border-2 border-blue-300 rounded-full p-6 mx-auto w-fit">
                <FaFile className="text-4xl text-blue-200" />
                </div>

                <div className="w-full text-center mx-auto text-[16px] mt-5 lg:w-[75%] lg:text-center lg:text-[18px]">
                    <p className="">
                    You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity.
                    </p>

                    <ButtonPrimary text={'Click here to complete your KYC'} handleClick={() => navigate('/kyc-form')} />
                </div>
            </div>
        </section>
    )
}

export default KycVerification