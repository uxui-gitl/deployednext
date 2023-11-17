"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import checkout from "../../../../../../public/checkout.png";
import MLExpertise from "../../../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <>
      <EntIntro
        title="Artificial Intelligence &
        Machine Learning"
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
                  AI & ML
                </h4>
              </div>
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  With our pragmatic approach and AI and ML capabilities, we
                  optimize business parameters ensuring rise in your business
                  efficiency. Join us in embracing the power of AI and ML, and
                  let's start journey together towards innovation and success.
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
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our AI Offerings
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We are committed to bringing the power of AI to your business
                  operations, providing tailored solutions that drive efficiency
                  and growth for your data driven future
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-4">
            {[0, 1, 2, 3].map((item, index) => (
              <div className="bg-[#EDF1FF] p-5" key={index}>
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                    Computer Vision
                  </p>
                  <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                    We specialize in custom video and image analysis tool
                    development for computer vision and machine vision systems.
                    Our expert team leverages advanced technologies like OpenCV
                    to optimize existing computer vision algorithms or develop
                    entirely new algorithms based on mathematical models
                  </p>
                  <ul className="my-8">
                    <li className=" border-b-2 border-[#DBDBDB] py-2 ">
                      <Link
                        href={"/"}
                        className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                      >
                        Real-time Object Detection
                      </Link>
                    </li>
                    <li className=" border-b-2 border-[#DBDBDB] py-2 ">
                      <Link
                        href={"/"}
                        className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                      >
                        Data Labelling
                      </Link>
                    </li>
                    <li className=" border-b-2 border-[#DBDBDB] py-2 ">
                      <Link
                        href={"/"}
                        className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                      >
                        Security Solution
                      </Link>
                    </li>
                    <li className=" border-b-2 border-[#DBDBDB] py-2 ">
                      <Link
                        href={"/"}
                        className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                      >
                        Equipment Monitoring
                      </Link>
                    </li>
                  </ul>
                  <Link
                    href={"/"}
                    className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    Explore Service{" "}
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

      {/* ML Expertise */}
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
              One of the most dedicated and{" "}
              <span className="text-[#4C6FFF]">reliable partners</span> for
              Azure Migration Services and Managed Cloud Service across{" "}
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
              <span className="text-[#4C6FFF]">1 Billion+</span> Unfailing Cloud
              Hosting availability managing{" "}
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
              <span className="text-[#4C6FFF]">25000+</span> Apps and Databases
              migrated
            </p>
          </motion.div>
        </AnimatePresence>
      </WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready for Transformation with"
        blue="AI and ML?"
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
