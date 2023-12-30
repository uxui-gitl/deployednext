import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const WhyInfotech = ({ ribbon, title, desc, children }) => {
  return (
    <>
      <div className={` w-full overflow-hidden bg-[#F2F4F7] pt-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* left */}
          <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
            <div className="">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                {ribbon}
              </h4>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                {title}
              </h3>
              <p className="font-medium leading-[22px] md:w-[90%] ">{desc}</p>
              <div className="  mt-[20rem]">
                <Image
                  className="absolute bottom-0 z-20"
                  src={cloudArrows}
                  alt="cloud Arrows"
                />
                <Image
                  className="absolute left-5 bottom-10 z-30"
                  src={cloud}
                  alt="cloud"
                />
                <Image
                  className="absolute bottom-0 z-20"
                  src={curiousPerson}
                  alt="curious Person"
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            <div>
              <div className="relative">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyInfotech;
