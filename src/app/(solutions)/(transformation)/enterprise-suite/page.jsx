"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import Infographics from "@/components/Infographics";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import SME from "@/components/SME";
import CardSwiper from "@/components/CardSwiper";
import StrategySub from "@/components/StrategySub";
import Image from "next/image";
import handShake from "../../../../../public/handShake.png";
import styles from "./page.module.css";
import SectionNav from "@/components/SectionNav";
import NavTest from "@/components/NavTest";

export default function Home() {
  return (
    <>
      <main>
        <NavTest />
        {/* <Intro /> */}
        <EntIntro
          title="Bridging Transformation
          with Enterprise Agility"
          desc="We drive digital business revolution for tangible results, optimized bottom line and a dynamic digital edge"
          cta="Let's Connect"
          width="60%"
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
        />
        <SectionNav />
        {/* transformation */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-transparent z-30 relative">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-[42px] leading-[54px] w-[80%] mx-auto font-bold">
                  Your capable partner for{" "}
                  <span className="text-[#0745D3]">
                    Enterprise Transformation
                  </span>{" "}
                  Success
                </h3>
                <p className="font-normal leading-[22px] w-[70%] mx-auto">
                  Collaborating with top- tier application providers, we
                  recognise and deliver right technology for your business to
                  bring forth scalable transformation
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles["container"]} absolute z-10 left-0 right-0 -top-96 bg-[#f2f4f7] w-full`}
          >
            <Image src={handShake} className="w-[100vw] -top-20" alt="hands" />
          </div>
        </>

        {/* Infographics */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Helping Enterprises to Succeed
                </h3>
                <p className="font-normal leading-[22px] w-[80%] mx-auto">
                  As your transformation partner, we provide robust enterprise
                  solutions to enhance stakeholder experiences, strengthen
                  business resilience and modernize IT environment. Together, we
                  can redefine success standards globally.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center w-max">
              <Infographics src="/infographics/Infographic-Enterprise.png" />
            </div>
          </div>
        </>

        {/* SME */}
        <>
          <SME />
        </>

        {/* Godrej Infotech Solutions */}
        <div className={` w-full bg-[#fff] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] ">
            <div className=" flex items-start flex-col justify-around">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                Accelerating Business Engineering
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Godrej Infotech Solutions
                </h3>
                <p className="font-normal leading-[22px]">
                  Resolving complex business challenges and seizing growth
                  opportunities through our purpose driven solutions designed by
                  our experts
                </p>
              </div>
            </div>
          </div>
          <>
            <CardSwiper />
          </>
        </div>

        <StrategySub />
        <InfotechWeeklyAlt />
      </main>
    </>
  );
}
