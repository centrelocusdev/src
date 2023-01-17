import React from "react";
import Navbar from "../components/Navbar";
import LandingPageCard from "../components/LandingPageCard";
import { BsLightbulb, BsBarChartLine } from "react-icons/bs";
import { IoFootsteps } from "react-icons/io5";
import Footer  from "../components/Footer";

const LandingPage = (props) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-900 text-zinc-400 py-8">
        <div className="h-96 w-96 rounded-3xl bg-[rgba(255,255,255,0.1)] absolute z-50 mt-20 ml-12 rotate-45"></div>
        {/* hero section */}
        <section className="md:flex gap-4 justify-center md:p-24 p-6 text-center md:text-left  z-40  backdrop-blur-lg min-h-screen">
          <div className="md:w-3/5">
            <h2 className="md:w-4/5 text-white md:text-3xl text-xl md:leading-9 font-semibold">
              Blockchain can provide major benefits for the energy sectors
            </h2>

            <p className="w-4/5 leading-6 mt-3 mx-auto md:mx-0">
              Join the movement and invest in sustainable energy with the Wind
              Energy Company by investing in our ICO
            </p>

            <div className="md:w-4/6 my-8 border-2 border-yellow-500 rounded-2xl p-3 text-center text-white bg-zinc-900">
              <h5 className="text-xl">Pre ICO Ends:</h5>

              <div className="flex gap-1 justify-center text-3xl">
                <div className="">
                  <h5 className="font-semibold">29</h5>
                  <span className="text-sm">Days</span>
                </div>
                <span className="text-white font-semibold">:</span>
                <div className="">
                  <h5 className="font-semibold">02</h5>
                  <span className="text-sm">Hours</span>
                </div>
                <span className="text-white font-semibold">:</span>
                <div className="">
                  <h5 className="font-semibold">32</h5>
                  <span className="text-sm">Minutes</span>
                </div>
                <span className="text-white font-semibold">:</span>
                <div className=" ">
                  <h5 className="font-semibold">45</h5>
                  <span className="text-sm">Seconds</span>
                </div>
              </div>

              <div className="text-gray-900 w-fit mx-auto bg-gradient-to-r from-orange-500 to-yellow-300 px-8 py-2 rounded font-semibold translate-y-8">
                <h5 className="capitalize">Participate in pre ICO</h5>
              </div>
            </div>
          </div>
          <div className="w-1/4 hidden md:block flex">
            <div className="border-8 bg-[rgba(0,0,0,0.3)] p-5 border-yellow-400 rounded-full h-2/3 w-full flex flex-col justify-center text-center text-4xl font-semibold shadow-xl shadow-yellow-500/40">
              <h2 className="text-yellow-500 underline underline-offset-8 decoration-4 decoration-yellow-500">
                3,422,3452
              </h2>
              <h2 className="text-white text-center mt-3 ">20,000,000 </h2>
            </div>
          </div>
        </section>

        <section className="w-4/5 md:p-16 p-6 mx-auto bg-zinc-800 md:my-8 m-4 rounded-2xl shadow-xl shadow-black/40 ">
          <div className="md:flex justify-between gap-7">
            <div className="md:w-1/5">
              <img
                src="https://dummyimage.com/24x24/#ffffff"
                alt="dummmyimage"
                className="w-full"
              />
            </div>
            <div className="md:w-2/3 text-center mt-5">
              <h2 className="text-yellow-500 text-3xl font-semibold">
                Why Should You Join Us?
              </h2>
              <h4 className="text-orange-300 text-lg font-semibold my-2">
                About Us
              </h4>
              <p className="my-2">
                Our company is a wind energy startup that aims to revolutionize
                the renewable energy industry. We are developing a cutting-edge
                technology that will allow us to generate more energy from wind
                power than ever before. Our goal is to provide a sustainable and
                environmentally friendly energy source that will help reduce
                dependence on fossil fuels and combat climate change.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-white my-5 text-center text-orange-300 text-2xl">
              Investment opportunities
            </h4>
            <div className="md:flex justify-center gap-7">
              <div className="md:w-1/4 w-full mx-auto bg-[rgba(0,0,0,0.2)] p-5 rounded-2xl m-3">
                <BsLightbulb className="text-yellow-500 text-4xl mx-auto" />
                <p className="text-center my-3 break-all">
                  Underperformance and root-cause identified real time
                </p>
              </div>
              <div className="md:w-1/4 w-full mx-auto bg-[rgba(0,0,0,0.2)] p-5 rounded-2xl m-3">
                <BsBarChartLine className="text-yellow-500 text-4xl mx-auto" />
                <p className="text-center my-3 break-all">
                  Cost-effective since it utilizes 20-27 per cent lower than the
                  cheapest fossil fuel.
                </p>
              </div>
              <div className="md:w-1/4 w-full mx-auto bg-[rgba(0,0,0,0.2)] p-5 rounded-2xl m-3">
                <IoFootsteps className="text-yellow-500 text-4xl mx-auto" />
                <p className="text-center my-3 break-all">
                  Invest in a green future: Support the development of wind
                  energy projects and reduce carbon footprint
                </p>
              </div>
            </div>
            <div className="md:flex gap-7 my-12">
              <div className="md:w-2/3 text-center">
                <h4 className="text-orange-300 text-3xl my-3">Our Mission</h4>
                <p>
                  We are committed to using energy effectively and efficiently
                  with new advancements in technology and share the technology
                  to make the world less depended on non - renewable energy.
                  Join The Movement By Subscribing For Our ICO.
                </p>
              </div>

              <div className="w-1/5 hidden md:block">
                <img
                  src="https://dummyimage.com/24x24/#ffffff"
                  alt="dummmyimage"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="md:w-4/5 md:p-16 p-6 mx-auto">
          <h2 className="text-white text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          {faqs.map(({question, answer}, index) => (
            <div className="bg-zinc-800 m-5 text-center md:text-left rounded-2xl shadow-lg shadow-black/40 min-h-1/5 p-8 ">
              <h4 className="text-yellow-500 text-xl font-semibold">
                {index+1}. {question}
              </h4>
              <p className="">
                {answer}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

LandingPage.defaultProps = {};

const faqs = [
  {
    question: "What type of wind energy technology are you developing?",
    answer:
      "We are developing a new type of wind turbine that utilizes advanced aerodynamics and materials to generate more energy from the wind than current turbine designs.",
  },
  {
    question: "How does the return on investment work for the investors?",
    answer:
      "Our revenue will come from the sale of energy generated by our wind turbines, this revenue will be distributed among the token holders according to their ownership percentage.",
  },
  {
    question: "Will the company be conducting regular audits?",
    answer:
      "Yes, the company will conduct regular financial and performance audits to ensure transparency and accountability to our investors.",
  },
];

export default LandingPage;
