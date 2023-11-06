"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../public/icon.png";
import microsoft from "../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

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

  const upgradeCloud = [
    {
      _id: 1,
      title: "Upgrade AX to D365 F&O",
      desc: "Upgrade AX to D365 F&O to Revitalize Your Business Performance",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 2,
      title: "Upgrade Nav to Business Central ",
      desc: "Unlock Maximum Modern Benefits with Business Central Upgrade",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 3,
      title: "Upgrade to Infor LN Cloud",
      desc: "Future proof your business growth with Upgrade to Infor LN Cloud",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 4,
      title: "Application Migration",
      desc: "Migrate your Application to Cloud to Unleash Modernisation",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 5,
      title: "Migrate email to cloud",
      desc: "We aim for a more efficient and collaborative communication environment that will improve efficiency and streamline communication with minimum disruption to your everyday operations",
      cta: "Know more",
      link: "/",
      bg: "",
    },
  ];

  const aglity = [
    {
      _id: 1,
      title: "Database Migration",
    },
    {
      _id: 2,
      title: "Infrastructure Migration ",
    },
    {
      _id: 3,
      title: "Enterprise Platforms Migration",
    },
    {
      _id: 4,
      title: "Cloud Microservices",
    },
    {
      _id: 5,
      title: "Disaster Recovery and Enterprise Backup Service",
    },
    {
      _id: 6,
      title: "Application Migration and Modernization",
    },
    {
      _id: 7,
      title: "Cloud Monitoring and Reporting ",
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
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
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

        <CaseStudy />

        {/* On Prem changes*/}

        <>
          <div className={` w-full bg-white py-32`}>
            <>
              <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
                <div className=" mt-[5em] mb-[2rem]">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                    <h3 className="text-4xl leading-[42px] font-bold">
                      On-premises Infrastructure Challenges
                    </h3>
                  </div>
                </div>
              </div>
            </>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
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

        {/* Upgrade Now */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    Upgrade Now?
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    We revamp your core business application with cloud-native
                    development so that you can win a competitive threshold in
                    the marketplace. Our adept hyper-scaler team can help
                    rearchitect your business operations with an efficient
                    approach
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5 sm:gap-10 mx-auto px-20 sm:px-[8rem]">
              {upgradeCloud.map((item, i) => {
                return (
                  <div key={i} className="col bg-orange-300 px-14 py-16">
                    <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-base leading-6 font-semibold">
                      {item.desc}
                    </p>
                    <Link
                      href={item.link}
                      className="flex text-[14px] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                    >
                      {item.cta}{" "}
                      <span>
                        <Icon
                          path={mdiArrowRight}
                          style={{
                            marginLeft: "0.5em",
                            width: "1rem",
                            fontSize: "14px",
                          }}
                          className="cta-know-more"
                        />
                      </span>
                    </Link>
                  </div>
                );
              })}
              <div className="col flex flex-col sm:flex-row gap-5 sm:gap-10  ">
                <div className=" bg-orange-300 px-10 py-10">
                  <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                    Upgrade Infrastructure to Cloud
                  </h4>
                  <p className="text-base leading-6 font-semibold">
                    As a renowned Infrastructure-as-a-Service (IaaS) provider,
                    we enhance your IT infrastructure in the cloud era
                  </p>
                </div>
                <div className=" bg-orange-300 px-10 py-10">
                  <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                    Lift and Shift to Azure{" "}
                  </h4>
                  <p className="text-base leading-6 font-semibold">
                    We smoothly relocate your IT to Azure Cloud without
                    redesigning applications and with minimal disruption in your
                    workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Unlocking agility */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] justify-center flex">
              <div className="bg-white ">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    Unlocking Agility and Intelligent Cloud Performance
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid  sm:grid-rows-2 gap-10 sm:grid-flow-col-dense mx-auto px-20 sm:px-[8rem]">
              {aglity.map((item) => {
                return (
                  <div key={item._id} className=" p-8 bg-[#EDF1FF] h-full">
                    <Image src={icon} alt="icon" className="mb-5" />
                    <p className="text-[22px] font-bold leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>

        {/* why godrej infotech */}
        <>
          <div className={` w-full bg-[#F2F4F7] pt-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h4
                    className={` font-medium text-[#0745D3] uppercase ribbon`}
                  >
                    Spend LESS, GROW MORE
                  </h4>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Why Godrej Infotech ?
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Embark on cloud upgradation journey by harnessing our
                    credible assessment process, strategic resources and fluent
                    data migration practice to minimise your business risk, time
                    to market and cost. Our time-tested delivery framework
                    enables businesses
                  </p>
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
                  <div className="relative">
                    <AnimatePresence>
                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={1}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          One of the most dedicated and{" "}
                          <span className="text-[#4C6FFF]">
                            reliable partners
                          </span>{" "}
                          for Azure Migration Services and Managed Cloud Service
                          across{" "}
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={2}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-10 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          <span className="text-[#4C6FFF]">1 Billion+</span>{" "}
                          Unfailing Cloud Hosting availability managing{" "}
                          <span className="text-[#4C6FFF]">40000+</span> VMs
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={3}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          <span className="text-[#4C6FFF]">25000+</span> Apps
                          and Databases migrated
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* az cloud services */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    We are Trained and Accredited in Azure Cloud Services
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    Being certified Microsoft Solutions Partner, we undergo
                    demanding assessment and authorisation to guarantee that our
                    expertise and practices fulfil highest standards of
                    excellence.
                  </p>
                </div>
                <div className="flex justify-center flex-col sm:flex-row items-center mx-auto gap-5">
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                  <div>
                    <Image src={microsoft} alt="microsoft" />
                  </div>
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
