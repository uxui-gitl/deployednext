"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import workplaceWellness from "../../public/careers/workplace-wellness.png";
const CareerAbout = () => {
  return (
    <>
      <div className={` w-full bg-[#f2f4f7] py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
          <div className="bg-blue-50">
            <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
              Your synergetic workspace
            </h3>
          </div>
          <div className=" ">
            We ensure employee well-being and professional growth through
            best-in-class infrastructure, facilities and inclusive opportunities
            for growth and development.
          </div>
        </div>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
          <div className="bg-blue-50">
            <Image src={workplaceWellness} alt="career video" />
          </div>
          <div className="ml-12">
            <div className="  mb-5 md:mb-0">
              <h4 className="text-5xl font-bold text-[#101828]">
                <CountUp end={25} duration={2} separator=" " suffix=" +" />
              </h4>
              <p className="">
                <span className="text-[#b2c8f8]">Years</span> of Excellence
              </p>
            </div>
            <div className="  mb-5 md:mb-0">
              <h4 className="text-5xl font-bold text-[#101828]">
                <CountUp end={500} duration={2} separator=" " suffix=" +" />
              </h4>
              <p className="">
                Global Reach with{" "}
                <span className="text-[#b2c8f8]">Satisfied Customers</span>
              </p>
            </div>
            <div className="mb-5 md:mb-0">
              <h4 className="text-5xl font-bold text-[#101828]">
                <CountUp end={15000} duration={2} separator=" " suffix=" +" />
              </h4>
              <p className="pr-2">
                <span className="text-[#b2c8f8]">Man</span> Years of Expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerAbout;
