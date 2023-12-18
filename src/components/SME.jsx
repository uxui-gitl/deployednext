import Icon from "@mdi/react";
import React from "react";
import { mdiArrowRight } from "@mdi/js";
import Image from "next/image";

import SMEIMG from "../../public/EntSolution/SME-Biju.png";

const SME = ({ imgSrc, ribbon, desc, sme, designation }) => {
  return (
    <>
      <div className={` w-full bg-[#f2f4f7]  py-32`}>
        <div className="text-left max-w-screen-xl  mb-5 mx-auto flex flex-col sm:flex-row px-[2rem]  py-10 sm:py-0   ">
          {/* Left */}
          <div className="sm:flex-none mx-auto sm:m-0 mb-5  bg-white  ">
            <>
              <Image src="/SME-Biju.png" alt={sme} width={458} height={480} />
            </>
          </div>
          {/* right */}
          <div className="grow flex flex-col justify-center pr-[2rem] sm:px-[4rem] bg-white ">
            <div>
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                {ribbon}
              </h4>
              <p className="text-[26px]  leading-[34px] mb-3 font-bold md:w-[90%] ">
                {desc}
              </p>
            </div>
            <div>
              <p className="text-base font-bold leading-[28px] text-[#475467]">
                {sme}
              </p>
              <p className="text-base leading-[28px] text-[#475467]">
                {designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SME;
