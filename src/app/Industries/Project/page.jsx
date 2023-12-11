"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";

import inforCloudSuite from "../../../../public/inforCloudSuite.png";
import Testimonials from "@/sections/testimonial/Testimonial";
import Dynamic365 from "../../../../public/Dynamic365.png";
import Oracle from "../../../../public/Oracle.png";
import checkout from "../../../../public/checkout.png";
import MLExpertise from "../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import Benefits from "@/components/Benefits";
import Capabilities from "@/components/Capabilities";
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

const AIOfferings = [
  {
    _id: 1,
    title: "Automation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#E4F8ED",
    btnTheme: "#4F9D73",
    links: [
      {
        title: "Project Monitoring Tools ",
        url: "/",
      },
      {
        title: "Augmented Intelligence ",
        url: "/",
      },
      {
        title: "Budgeting and Forecasting ",
        url: "/",
      },
      {
        title: "Data Driven Analytics ",
        url: "/",
      },

      {
        title: "Quality Control Analysis  ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Cloud",
    desc: "  ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#EDF1FF",
    btnTheme: "#0745D3",
    links: [
      {
        title: "M365 ",
        url: "/",
      },
      {
        title: "Cloud Consulting",
        url: "/",
      },
      {
        title: "Upgrade/Migrate to cloud",
        url: "/",
      },
      {
        title: "ERP on cloud",
        url: "/",
      },
      {
        title: "Iot Data management in Cloud",
        url: "/",
      },
      {
        title: "DevOps",
        url: "/",
      },
      {
        title: "Cloud Security Solutions for Mfg.",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Transformation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#FFF8E5",
    btnTheme: "#D4A73B",
    links: [
      {
        title: "Architecture Designing  ",
        url: "/",
      },
      {
        title: "Hierarchy Management ",
        url: "/",
      },
      {
        title: "Process Optimization ",
        url: "/",
      },
      {
        title: "Stakeholder work/ role assignment ",
        url: "/",
      },
      {
        title: "Multiple invoicing modes",
        url: "/",
      },
      {
        title: "Customer Experience - CRM and Ecommerce ",
        url: "/",
      },
    ],
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "gear",
    title: "Gain competitive edge",
  },
  {
    _id: 2,
    icon: "diamond",
    title: "Streamline operations",
  },
  {
    _id: 3,
    icon: "eyeGear",
    title: "Boost brand value",
  },
  {
    _id: 4,
    icon: "gear",
    title: "Gain competitive edge",
  },
  {
    _id: 5,
    icon: "diamond",
    title: "Streamline operations",
  },
  {
    _id: 6,
    icon: "eyeGear",
    title: "Boost brand value",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Revolutionizing Megaprojects with Advanced IT Services"
        desc="Leading Your Success Way with Intelligent and Futuristic
        Business Solutions"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <SectionNav />
      {/* Overview  */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div>
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  Projects
                </h4>
              </div>
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  By harnessing the power of data analytics, machine learning,
                  and artificial intelligence, our advanced IT services empower
                  project stakeholders with valuable insights. These insights
                  facilitate informed decision-making, enabling teams to
                  proactively address risks and capitalize on opportunities. The
                  result is a catalytic boost in efficiency, significantly
                  reducing project timelines and costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Our Ai Offerings */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  GITL Project Solutions Portfolio
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Offerings
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Holistic and future- ready solutions to re-engineer your
                  business with our proven implementation methodologies for
                  maximum Return on Investment (RoI)
                </p>
              </div>
            </div>
          </div>
          <div className="text-left w-full bg-amber-100 mb-5 mx-auto   grid grid-cols-1 md:grid-cols-3">
            {AIOfferings.map((item, index) => (
              <div
                className={`bg-[${item.theme}] py-10 sm:py-20 px-8 sm:px-24`}
                key={item._id}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="my-8">
                      {item.links.map((list, index) => (
                        <li
                          key={index}
                          className=" border-b-[1px] w-fit border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={list.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.ctaUrl}>
                      <div
                        className={`text-[#fff] text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                        style={{ backgroundColor: item.btnTheme }}
                      >
                        {item.cta}{" "}
                        <Icon
                          path={mdiArrowTopRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
      {/* Our Capabilities */}
      <Capabilities
        ribbon=" "
        title="Our Capabilities "
        desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
      />
      ;{/* ML Expertise */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-2 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  ML Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] ">
                  We specialize in developing algorithms to make your operations
                  smarter, faster and more reliable
                </p>
              </div>
            </div>
          </div>

          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
            {[0, 1, 2, 3].map((item, index) => (
              <div className="" key={index}>
                <Image
                  src={MLExpertise}
                  className="w-[100%]"
                  alt="ML Expertise"
                />
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    Deep Learning
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    Our deep learning expertise is about making data come to
                    life. We use these cutting-edge practices to create
                    solutions that automate complex tasks data-driven
                  </p>
                  <Link
                    href={"/"}
                    className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    Know More{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
      {/* AI & ML Partners */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our AI/ML Partners
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We are your trusted RPA partner, and our experience extends to
                  industry-leading RPA platforms and expertise to customize
                  solutions that fulfil your exclusive business needs
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={inforCloudSuite} alt="Infor" />
                </div>
                <div>
                  <Image src={Oracle} alt="Infor" />
                </div>
                <div>
                  <Image src={Dynamic365} alt="Infor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        title="Benefits of AI&ML "
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business"
        arr={BenefitsData}
      ></Benefits>
      {/* Industry Spotlight Slider */}
      {/* Why choose gitl and ai and ml */}
      <WhySection
        ribbon="Let's Collaborate and Make it Happen"
        title="Why Choose GITL for AI and ML"
        desc="It is our Hexagon EAM expertise , experience and commitment to excellence that sets us apart in a competitive landscape."
      >
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
              <span className="text-[#4C6FFF]">
                Exceed customer expectations
              </span>
              and deliver AI and ML solutions in most effective way
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
              Fully signed Non-Disclosure Agreement (NDA) to
              <span className="text-[#4C6FFF]">
                protect your sensitive information
              </span>
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
              <span className="text-[#4C6FFF]">
                Deep understanding of your specific business domain
              </span>{" "}
              is crucial for creating AI and ML solutions that truly meet your
              needs
            </p>
          </motion.div>
        </AnimatePresence>
      </WhySection>
      {/* Testimonials */}
      <Testimonials />
      {/* Subscription */}
      <Subscription
        title="Ready for Transformation with"
        blue="AI and ML?"
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />
    </>
  );
};

export default page;
