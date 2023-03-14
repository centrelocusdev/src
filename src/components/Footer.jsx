import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="min-h-32 bg-[#111] md:p-16 p-6 text-zinc-400">
      <div className="md:flex justify-between text-center md:text-left border-b border-zinc-600">
        <h6 className="md:w-2/5 text-zinc-200 text-3xl">
          Let’s preserve the environment by using wind turbines
        </h6>

        <div>
          <button className="mt-4 text-gray-900 bg-yellow-500 p-3 rounded-lg font-semibold">
            Whitepaper
          </button>
          <p className="my-3 text-gray-400">Join Our Whitepaper</p>
        </div>
      </div>

      <footer className="text-zinc-300 body-font">
        <div className="container px-5 pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-center">
          <div className="md:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-yellow font-bold">
              <span className=" text-xl">SRC</span>
            </a>
            <p className="mt-2 text-base text-zinc-400">
              with SRC, we can save on spending on energy usage.
            </p>

            <p className="flex gap-2 items-center mt-8">
              <FaRegCopyright /> 2023 SRC. All rights reserved
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center text-zinc-400 justify-end">
            <div class="lg:w-1/4 md:w-1/2 w-full px-2">
              <h2 class="title-font text-yellow font-bold tracking-widest text-sm mb-3 uppercase">
                menu
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Our Work
                  </a>
                </li>
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Office
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-2">
              <h2 class="title-font font-medium text-yellow font-bold tracking-widest text-sm mb-3 uppercase">
                social media
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Linkedin
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-2">
              <h2 class="title-font font-medium text-yellow font-bold tracking-widest text-sm mb-3 uppercase">
                license
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="hover:text-yellow-500 cursor-pointer hover:underline">
                    Copyright
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
