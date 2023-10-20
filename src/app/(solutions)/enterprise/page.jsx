"use client";
import Announcement from "@/sections/announcement/Announcement";
import ClientLogos from "@/sections/clientLogos/ClientLogos";
import Copyright from "@/sections/copyright/Copyright";
import Expertise from "@/sections/expertise/Expertise";
import Footer from "@/sections/footer/Footer";
import InfotechWeekly from "@/sections/infotechWeekly/InfotechWeekly";
import Intro from "@/sections/intro/Intro";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Review from "@/sections/review/Review";
import Robot from "@/sections/robot/Robot";
import RobotDetails from "@/sections/robotDetails/RobotDetails";
import Subscribe from "@/sections/subscribe/Subscribe";
import Testimonial from "@/sections/testimonial/Testimonial";
import ACT from "@/sections/ACT/ACT";
import Image from "next/image";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import Navbar from "@/components/Navbar";
import EntIntro from "@/components/EntIntro";
import Infographics from "@/components/Infographics";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import SME from "@/components/SME";
import CardSwiper from "@/components/CardSwiper";
import StrategySub from "@/components/StrategySub";

export default function Home() {
  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main>
        {/* <Intro /> */}
<<<<<<< HEAD
        <EntIntro
          title="Bridging Transformation
          with Enterprise Agility"
          desc="We drive digital business revolution for tangible results, optimized bottom line and a dynamic digital edge"
          cta="Let's Connect"
          width="60%"
          video="/EntSolution/EntBanner.mp4"
        />
=======
        <EntIntro />
>>>>>>> fa5d34ca00b2347c65d71074c91f8c40f0846fc9

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
<<<<<<< HEAD
          <>
            <CardSwiper />
          </>
        </div>

=======
        </div>

        <>
          <CardSwiper />
        </>

>>>>>>> fa5d34ca00b2347c65d71074c91f8c40f0846fc9
        <StrategySub />
        <InfotechWeeklyAlt />
      </main>
    </>
  );
}
