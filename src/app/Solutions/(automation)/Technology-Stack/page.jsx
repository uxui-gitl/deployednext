"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import java from "../../../../../public/java.png";
import dotnet from "../../../../../public/dotnet.png";
import sharepoint from "../../../../../public/sharepoint.png";
import ms from "../../../../../public/ms.png";
import RPAPlaceholder from "../../../../../public/RPAPlaceholder.png";
import techStack1 from "../../../../../public/techStack1.png";
import techStack2 from "../../../../../public/techStack2.png";
import techStack3 from "../../../../../public/techStack3.png";
import techStack4 from "../../../../../public/techStack4.png";
import techStack5 from "../../../../../public/techStack5.png";
import techStack6 from "../../../../../public/techStack6.png";
import checkout from "../../../../../public/checkout.png";

import MLExpertise from "../../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import InsightSlider from "@/components/InsightSlider";
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
        title="Your Trusted Technology Partner
        for Scalable and Customized
        Business Applications "
        desc="The comprehensive suite of advanced technologies along with our dedicated capability is primed to deliver bespoke applications across various industry domains"
        cta="Let's Connect"
        width="70%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <SectionNav />

      {/* Tech Stack Platform Expertise Logos */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  100 + Applications developed & 50 + Expert developers
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Our focus centers on leveraging cutting-edge emerging
                  technologies to craft high-performing applications
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={java} alt="java" />
                </div>
                <div>
                  <Image src={dotnet} alt="dotnet" />
                </div>
                <div>
                  <Image src={sharepoint} alt="sharepoint" />
                </div>
                <div>
                  <Image src={ms} alt="ms" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Tech Stack Service Offerings */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold text-center ">
                  Service Offerings
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
              <div className="" key={index}>
                <Image
                  src={techStack1}
                  className="w-[100%]"
                  alt="ML Expertise"
                />
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    Custom Application Development
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    With our extensive experience in the global marketplace, we
                    understand necessitating a bespoke software solution that
                    goes beyond
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

      {/* Insights */}
      <InsightSlider />

      {/* Tech Stack Benefit Vertical Slider */}
      {/* Engg. with our Methodology */}

      {/* WhySection GITL */}
      <WhySection
        ribbon="Spend LESS, GROW MORE"
        title="Why Godrej Infotech ?"
        desc="We aim for business faster growth with our extensive client collaboration, and to achieve this, we seek to convert effective pilot initiatives into enterprise-scale implementation, while comprehensively addressing all technical and business requirements."
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
        title="Let Us Transform Your"
        blue="Vision into Reality"
        title2=""
        desc="Complete the Form to Begin"
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
