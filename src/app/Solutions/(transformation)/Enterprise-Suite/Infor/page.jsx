"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Expertise from "@/components/Expertise";
const smartTools = [
  {
    _id: 1,
    type: "box",
    title: "Infor CRM",
    theme: "light",
    bg: "transparent",
    desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
    icon: "Power-BI-Logo.png",
    cta: "Know More",
  },
  {
    _id: 2,
    type: "box",
    title: "Microsoft CRM",
    theme: "dark",
    bg: "#4C6FFF",
    desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
    icon: "Power-App.png",
    cta: "Know More",
  },
  {
    _id: 3,
    type: "box",
    title: "Salesforce ",
    theme: "dark",
    bg: "#07001F",
    desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
    icon: "Birst-logo.png",
    cta: "Know More",
  },
  {
    _id: 4,
    type: "box",
    title: "Magento",
    theme: "dark",
    bg: "transparent",
    desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
    icon: "dummy.png",
    cta: "Know More",
  },
  {
    _id: 5,
    type: "box",
    title: "LS Retail",
    theme: "light",
    bg: "transparent",
    desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
    icon: "dummy.png",
    cta: "Know More",
  },
];
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
const page = () => {
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
      title: "Migrate to the Cloud from On-Prem",
      desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations.",
      cta: "",
      link: "",
      bg: "/gradient-1.png",
    },
    {
      _id: 2,
      title: "Migrate From a Different ERP Platform to Infor LN  ",
      desc: "Experience seamless and transformative migration with data integrity for your business.",
      cta: "",
      link: "",
      bg: "/gradient-1.png",
    },
    {
      _id: 3,
      title: "Upgrade with Infor",
      desc: "Get access to enhanced innovation, business preferences and value.",
      cta: "",
      link: "",
      bg: "/gradient-1.png",
    },
    {
      _id: 4,
      title: "End-to-End Implementation ",
      desc: "Streamlining every phase of the implementation, we provide capability of successful and on-time delivery of Infor solution.",
      cta: "",
      link: "",
      bg: "/gradient-1.png",
    },
    {
      _id: 5,
      title: "Managed Services",
      desc: "Managing every complexity, time-consuming and resource-rigorous process and on demand maintenance of Infor application.",
      cta: "",
      link: "",
      bg: "/gradient-1.png",
    },
    {
      _id: 6,
      title: "Custom Development & Integrations",
      desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes.",
      cta: "",
      link: "",
      bg: "/gradient-1.png",
    },
  ];

  const InforDrivers = [
    {
      _id: 1,
      title: "InsightEdge+",
      desc: "Industry-specific pre-built business reporting readily available on Power BI tailored to meet the needs of MIS and India localization requirements.",
    },
    {
      _id: 2,
      title: "DataMasterX / DataSwiftPro",
      desc: "Godrej Infotech Data Conversion Utility Tool offers data migration utilities facilitating faster & structured data upload and managing source & target systems, table structures, field mapping and data download/upload scripts.",
    },
    {
      _id: 3,
      title: "VertiNexus Catalyst",
      desc: "Industry vertical focused accelerator offering Pre-Configured Business Process Mapping and Pre-Built Industry required Customization. ",
    },
    {
      _id: 4,
      title: "Cloud Navigator / Cloud Co-Pilot",
      desc: "Infor Cloud Migration Planner addressing critical factors like data migration strategies, application compatibility, network architecture and security protocols to assure steady and effectual transition to the Infor cloud environment.",
    },
    {
      _id: 5,
      title: "Prosoft 2.0",
      desc: "Robust project management solution and inventory controls are designed to streamline operations in on-site project management. PS2.0 is integrated with the Infor platform, ensuring an efficient project management experience.",
    },
  ]

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
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Infor"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <SectionNav />

      <CaseStudy />

      {/* Data Metrics Insights to be created */}

      {/* Why Infotech */}
      <>
        <div className={` w-full bg-[#F2F4F7] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <div className="">
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  Let's Collaborate and Make it Happen
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Why Godrej Infotech ?
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">

                  Your satisfaction is paramount to us. Godrej Infotech prioritizes client feedback and collaboration, ensuring the final solution not only meets but exceeds your expectations.
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
                        Proven excellence of 20 + years and 200+ successful implementations, rollouts and migrations
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
                        Comprehensive in-house product ecosystem delivering unified functionality and operational effectiveness.
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
                        Being a subsidiary of the globally renowned Godrej conglomerate, worth $4.1Bn, we leverage our synergies of business and IT solutions to deliver holistic solutions.
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
                        Strategic partnership as Infor's Centre of Excellence and Co-development Partner enables us to deliver innovative and industry-specific solutions.
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
                        Repository of ready-to-use use-cases guarantees swift implementation and seamless integration, driving enhanced productivity.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <Testimonials />
      <Awards />

      {/* Infor service grid */}
      <>
        <div className={` w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="md:flex-row flex-col flex text-left gap-x-10">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                  Infor Services with Expert Consulting and Success Delivery
                </h3>
                <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                  Our commitment to your project's success drives our ownership and determination to go above and beyond. This steadfast dedication has positioned us as a trusted long-term collaborator in our industry.
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  px-[2rem]">
            <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 grid-flow-row gap-5 md:gap-10 mx-auto ">
              {upgradeCloud.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={clsx(
                      `col flex justify-between flex-col bg-[#320A53] text-white bg-cover px-14 py-16`,
                      {
                        " bg-[#344CA9]": item._id === 2 || item._id === 6,
                        " bg-[url('/gradient-1.png')]": item._id === 1,
                        " bg-[url('/gradient-2.png')]": item._id === 3,
                      }
                    )}
                  >
                    <div>
                      <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                        {item.title}
                      </h4>
                      <p className="text-base leading-6 font-semibold">
                        {item.desc}
                      </p>
                    </div>
                    {/*<Link
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
                        </Link>*/}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>

      {/* Innovative Infor Drivers */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Innovative Infor Drivers
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Extending the capabilities of Infor with tailored functional
                  enhancements for enhancement of business productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${styles["bg-img"]} w-full py-32 `}>
          <div className=" grid grid-cols-2 sm:flex-row gap-y-10 justify-center px-[2rem]">
            {InforDrivers.map((item, i) => {
              return (
                <div key={i} className="mx-5 bg-white ">
                  <div className="p-5  w-full ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-[22px] text-[#475467]">
                      {item.desc}
                    </p>
                  </div>
                  {/*<div className=" w-full bg-[#0745D3] p-5">
                    <Link
                      href={"/"}
                      className="text-white  flex transition-all hover:opacity-75  "
                    >
                      Know More{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
              </div>*/}

                </div>
              );
            })}
          </div>
        </div>
      </>

      <Expertise
        ribbon="Quantifying Our Infor Impact"
        ribbonTxtWhite="true"
        title="From Enhanced operations to Measurable growth"
        desc="Driving the innovation path, we develop better results for businesses across the globe."
        arr={[
          {
            title: "1500+",
            desc: "Infor Users",
          },
          {
            title: "10+",
            desc: "Countries Opted Infor Applications",
          },
          {
            title: "55+",
            desc: "Infor Implementations",
          },

        ]}
      ></Expertise>

      <SME
        imgSrc="/SME-Biju.png"
        ribbon="Introducing Infor Practice Leader"
        title="Right intelligence, background and abilities to ensure your 360-degree business progress"
        desc="Godrej Infotech has been at the forefront of building compelling business cases that enable organizations to attain last-mile functionality with Infor. Through our proven record of success in process transformation, we push innovation boundaries with Infor, charting a path toward sustained growth."
        sme="Ranjeet Kumar"
        designation=""
      />

      {/* Subscription */}
      <Subscription
        title="Ready for Transformation with"
        blue="Infor"
        title2=""
        desc="Let's start a conversation about your business optimization - we're eager to pave the way for your business wins. Whether it's optimizing your supply chain or implementing industry-specific enhancements, our team is ready to guide you towards measurable business growth."
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
