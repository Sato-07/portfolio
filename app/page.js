"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiArrowDownThin,
  PiGithubLogoThin,
} from "react-icons/pi";

import { IoIosMailUnread } from "react-icons/io";

import { RiTwitterXLine } from "react-icons/ri";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";


function Homepage() {
  const { theme } = useTheme();

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >

          <motion.img
            
            className="h-full object-cover"
            src={"/indiaFlag.png"}
            alt=""
          />
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Mode</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-lg flex justify-start items-center font-semibold te max-sm:mt-16 sm:mt-4  ">
                Active
              </p>

              <button href="mailto:forevrsmart@outlook.com" className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60  mt-9 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">

                 <a href="mailto:forevrsmart@outlook.com" className="flex w-full justify-between " >Contact me <PiArrowUpRight/></a>  

                
              </button>
            </div>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">ForevrSmart</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold   leading-5">
            Located in Mumbai, our Evernode host stands ready to support your decentralized applications (dApps).
            With three instances available, we offer seamless hosting for your projects.
            Create your smart contracts with ease, leasing a slot for just 0.0001 EVR. 
            Trust in our reliable service to keep your dApps running smoothly.
            </p>
          </div>
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Instance</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2  ">
              <h4 className=" dark:text-white  font-bold text-xs w-28 shrink-0  ">
                Lease amount
              </h4>
              <div>
                <p className="text-xs dark:text-neutral-400  font-bold">0.00001 Evr</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex gap-x-3 mt-8 px-2  ">
              <h4 className=" dark:text-white  font-bold text-xs w-28 shrink-0  ">
                Leased
              </h4>
              <div>
                <p className="text-xs dark:text-neutral-400  font-bold">Not Leased</p>
              </div>
            </div>



            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>


            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>


          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get in touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 mb-4">
            <div className="flex justify-center gap-x-2 px-2">
              <Tooltip showArrow={true} content="X (Twitter)" color="#161616">
                <a
                href="mailto:forevrsmart@outlook.com"
                className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <RiTwitterXLine className="text-xl" />
                </a>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub" color="#161616">
                <a
                href="mailto:forevrsmart@outlook.com"
                className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl" />
                  </a>
              </Tooltip>
              <Tooltip showArrow={true} content="Behance" color="#161616">
                <a
                href="mailto:forevrsmart@outlook.com"
                className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiBehanceLogoThin className="text-xl" />
                </a>

              </Tooltip>
              <Tooltip showArrow={true} content="E-mail" color="#161616">
                <a
                href="mailto:forevrsmart@outlook.com"
                className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <IoIosMailUnread className="text-xl" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg h-full col-span-2 row-span-3 md:row-span-2 ">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs"></p>
              <p className="text-neutral-500 text-xs "></p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg "
        >
          <div className=" absolute w-full  p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs text-zinc-300">Location</p>
              <p className=" text-zinc-300 text-xs ">Mumbai</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ scale: 3 }}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src={"/Mumbai.jpeg"}
            alt=""
          />
        </motion.div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Instance</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2  ">
              <h4 className=" dark:text-white  font-bold text-xs w-28 shrink-0  ">
                Lease amount
              </h4>
              <div>
                <p className="text-xs dark:text-neutral-400  font-bold">0.00001 Evr</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex gap-x-3 mt-8 px-2  ">
              <h4 className=" dark:text-white  font-bold text-xs w-28 shrink-0  ">
                Leased
              </h4>
              <div>
                <p className="text-xs dark:text-neutral-400  font-bold">Not Leased</p>
              </div>
            </div>



            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>


            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>


          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Instance</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2  ">
              <h4 className=" dark:text-white  font-bold text-xs w-28 shrink-0  ">
                Lease amount
              </h4>
              <div>
                <p className="text-xs dark:text-neutral-400  font-bold">0.00001 Evr</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex gap-x-3 mt-8 px-2  ">
              <h4 className=" dark:text-white  font-bold text-xs w-28 shrink-0  ">
                Leased
              </h4>
              <div>
                <p className="text-xs dark:text-neutral-400  font-bold">Not Leased</p>
              </div>
            </div>



            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>


            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>


          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>



      </div>
    </div>
  );
}

export default Homepage;
