import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { FaCheck } from "react-icons/fa";

const KycCompleted = () => {
    return (
        <section className="w-full p-6 mx-auto min-h-screen container leading-7 rounded lg:p-12 lg:w-3/4">
             <div className="bg-white text-gray-600 p-7 mt-5 lg:p-16">
                <div className="border-2 border-green-300 rounded-full p-6 mx-auto w-fit">
                <FaCheck className="text-4xl text-green-300" />
                </div>

                <div className="w-full text-center mx-auto text-[16px] mt-5 lg:w-[75%] lg:text-center lg:text-[18px]">
                    <p className="">
                    We are still waiting for your identity verification. Once our team verified your indentity, you will be notified by email. You can also check your KYC compliance status from your profile page.
                    </p>

                    <ButtonPrimary text={'Back to Profile'} />
                </div>
            </div>
        </section>
    )
}

export default KycCompleted