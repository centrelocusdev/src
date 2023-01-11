import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";

const KycApplication = () => {
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
        <form
          action=""
          className="mt-3 rounded-xl shadow-lg border border-dashed border-gray-400 px-5"
        >
          <div className="py-3 bg-zinc-800 mt-6 px-6 rounded">
            <h3 className="text-[24px] text-yellow-500">Personal Details</h3>
            <p className="text-gray-500">
            Please type carefully and fill out the form with your personal
              details. Your can’t edit these details once you submitted the
              form.
            </p>
          </div>

          <div className="px-4">
            <div className="mt-6 -mb-12 ">
              <div className="lg:flex md:flex justify-between">
                <InputPrimary
                  field={"First name"}
                  name={"firstName"}
                  placeholder={"John"}
                />
                <InputPrimary
                  field={"Last name"}
                  name={"lastName"}
                  placeholder={"Smith"}
                />
                <InputPrimary
                  field={"Email address"}
                  name={"email"}
                  placeholder={"you@example.com"}
                />
              </div>

              <div className="lg:flex md:flex justify-between">
              <InputPrimary
                  field={"phone number"}
                  name={"phoneNumber"}
                  placeholder={" "}
                />
                <InputPrimary
                  field={"Date of Birth"}
                  name={"dateOfBirth"}
                  placeholder={" "}
                />
                <InputPrimary
                  field={"Telegram username"}
                  name={"telegramUsername"}
                  placeholder={" "}
                />
              </div>

              <div className="mt-3">
                <h4 className="text-lg px-3 text-yellow-500 font-semibold">
                  Your Address
                </h4>

                <div className="lg:flex md:flex justify-between">
                  <InputPrimary
                    field={"Address line 1"}
                    name={"address1"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Address line 2"}
                    name={"address2"}
                    placeholder={" "}
                  />
                   <InputPrimary
                    field={"City"}
                    name={"city"}
                    placeholder={" "}
                  />
                </div>

                <div className="lg:flex md:flex justify-between">
                <InputPrimary
                    field={"State"}
                    name={"state"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Nationality"}
                    name={"nationality"}
                    placeholder={" "}
                  />
                  <InputPrimary
                    field={"Zip Code"}
                    name={"zipCode"}
                    placeholder={" "}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 lg:px-12 px-6 py-6 mt-16 rounded">
            <h3 className="text-[24px] text-yellow-500">Document Upload</h3>
            <p className="text-gray-500">
            In order to complete, please upload any of the following personal
              document.
            </p>
          </div>

          <div className="py-6">
            <div className="lg:flex md:flex justify-between mt-3">
              <InputPrimary
                type={"file"}
                field={"Passport"}
                name={"passport"}
                placeholder={" "}
              />
              <InputPrimary
                type={"file"}
                field={"National card"}
                name={"nationalCard"}
                placeholder={" "}
              />
              <InputPrimary
                type={"file"}
                field={"Driver's license"}
                name={"driverLicense"}
                placeholder={" "}
              />
            </div>

            <div className="my-4">
              <h3 className="text-yellow-500 font-semibold text-[18px]">
                To avoid delays when verifying account, Please make sure bellow:
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
        </form>
      </section>
    </>
  );
};

export default KycApplication;
