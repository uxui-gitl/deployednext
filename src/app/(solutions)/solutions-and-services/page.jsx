"use client";

import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Image from "next/image";
import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import SME from "@/components/SME";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import Lottie from "lottie-react";
import robotAnimation from "../../../assets/robot.json";
export default function Home() {
  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main>
        {/* <Intro /> */}
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner.mp4"
        />

        {/* Solutions Robot */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Take Confident Business Decisions with Industry Tailored{" "}
                    <span className="text-[#0745D3]">Cloud Technology </span>{" "}
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    With acute expertise in delivering cloud-based solutions and
                    services that cater to diverse industries, we work closely
                    with our clients to devise and execute robust cloud systems
                    that generate predictable outcomes. Our track record of
                    delivering 200+ cloud projects showcase our proficiency
                    enabling clients to draw true benefits from their
                    investments.
                  </p>
                </div>
              </div>
              <div className={`bg-[#f5f5f5] `}>
                <div
                  className={` max-w-screen-xl md:max-w-screen-lg mx-auto px-[2rem] p-5`}
                >
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5`}
                  >
                    <div className={`  w-2/5 mx-auto`}>
                      <Lottie animationData={robotAnimation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        <SME />
        <CaseStudy />
        <Testimonials />
        {/* Join the Team */}
        <StrategySub />
      </main>
    </>
  );
}
