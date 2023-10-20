import Icon from "@mdi/react";
import React from "react";
import { mdiArrowRight } from "@mdi/js";
import Image from "next/image";

import SMEIMG from "../../public/EntSolution/SME-Biju.png";

const SME = () => {
  return (
    <>
      <div className={` w-full bg-[#f2f4f7]  py-32`}>
        <div className="text-left flex max-w-screen-xl md:max-w-screen-2xl  mx-auto bg-white ">
          {/* Left */}
          <div className="flex-none">
            <>
              <Image src={SMEIMG} alt="SME" />
            </>
          </div>
          {/* right */}
          <div className="grow flex flex-col justify-center px-[4rem]">
            <div>
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                Introducing our Enterprise Solutions Leader
              </h4>
              <p className="text-[26px]  leading-[34px] mb-3 font-bold md:w-[90%] ">
                We help our clients to reinforce their customer-centric focus,
                optimize application landscapes and accelerate business results
                through the standardization, digitalization and automation of
                their IT infrastructure with enterprise solutions.
              </p>
            </div>
            <div>
              <p className="text-base font-bold leading-[28px] text-[#475467]">
                Biju Thomas
              </p>
              <p className="text-base leading-[28px] text-[#475467]">
                Enterprise Head, Godrej Infotech
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SME;
