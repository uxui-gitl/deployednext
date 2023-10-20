"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../public/upgradeCloud/puzzle.png";
import Image from "next/image";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";

export default function Home() {
  const lists = [
    {
      id: 1,
      text: "Inadequate Scalability and Availability",
    },
    {
      id: 2,
      text: "Unreliable Backup Storage",
    },
    {
      id: 3,
      text: "Weak Disaster Recovery and Redundancy",
    },
    {
      id: 4,
      text: "Inadequate Data Integrity and Automation Capabilities",
    },
    {
      id: 5,
      text: "Subpar IT Performance",
    },
    {
      id: 6,
      text: "Limited IT Universality and Centralized Monitoring",
    },
    {
      id: 7,
      text: "High Management Costs of IT Infrastructure",
    },
  ];

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
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
        />

        {/* Upgrade to Cloud */}
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

        {/* <div>
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                UPGRADE TO CLOUD{""}
              </h4>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                On-premises Infrastructure Challenges
              </h3>
            </div> */}

        {/* Upgrade to Cloud */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  On-premises Infrastructure Challenges
                </h3>
              </div>
            </div>
          </div>
        </>
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
              <div className="bg-white flex items-start flex-col justify-start">
                <div className="mx-auto">
                  <Image src={puzzle} alt="puzzle" />
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    {lists.map((list) => (
                      <li key={list.id}>
                        {" "}
                        <p className="flex gap-4 mb-6 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                          <span className="">
                            <Icon
                              path={mdiBullseyeArrow}
                              color="dodgerblue"
                              size={1}
                            />
                          </span>
                          {list.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
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
