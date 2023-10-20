"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../public/upgradeCloud/sheild.png";
import Image from "next/image";
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
          video="/SS/banner.mov"
        />

        {/* Solutions Robot */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h4
                    className={` font-medium text-[#0745D3] uppercase ribbon`}
                  >
                    UPGRADE TO CLOUD{""}
                  </h4>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Minimizing Cost and Strengthening Agility with{" "}
                    <span className="text-[#0745D3]"> Better Security</span>{" "}
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We help enterprises to foster resilience by entailing
                    bespoke and inclusive cloud upgradation roadmap. Our cloud
                    experts ensure migration of intricate IT environments to
                    advanced cloud platform without causing any interruption or
                    data loss while providing agility and scalability for
                    sustainable growth of our customers.
                  </p>
                </div>
              </div>
              <div>
                <Image src={shield} alt="shield" />
              </div>
            </div>
          </div>
        </>

        <Testimonials />
        {/* Join the Team */}
        <StrategySub />
      </main>
    </>
  );
}
