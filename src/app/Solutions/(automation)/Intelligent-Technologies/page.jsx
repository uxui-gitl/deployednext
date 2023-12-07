"use client";
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
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import Benefits from "@/components/Benefits";
import Expertise from "@/components/Expertise";
import Subscription from "@/components/Subscription";
import Navbar from "@/components/Navbar";

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

  const AdvancedSolutions = [
    {
      _id: 1,
      title: "Machine Learning",
      desc: "With our ability in constructing, training and deploying ML models, we assure an effective implementation process.",
      cta: "Know More",
      link: "/",
    },
    {
      _id: 2,
      title: "Artificial Intelligence ",
      desc: "With our ability in constructing, training and deploying ML models, we assure an effective implementation process.",
      cta: "Know More",
      link: "/",
    },
    {
      _id: 3,
      title: "Robotic Process Automation",
      desc: "With our ability in constructing, training and deploying ML models, we assure an effective implementation process.",
      cta: "Know More",
      link: "/",
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
  return (
    <>
      <EntIntro
        title="Step into the Future of
        Business Success Today"
        desc="Our core emphasis revolves around tangible and advantageous business outcomes through our business grade intelligent solutions and competency"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <SectionNav />

      {/* About Section */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Advance Solutions for Business Future Readiness
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Starting precisely where you stand in your digital
                  transformation journey, we seamlessly integrate our teams into
                  your culture, fostering a collaborative environment for
                  success
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div
          className={` ${styles["bg-img"]} w-full pt-48 pb-12 `}
          id="productivity"
        >
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {AdvancedSolutions.map((item, index) => {
              return (
                <div key={item._id} className="mx-2 bg-white ">
                  <div className="p-5 w-fit ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-[22px] text-[#475467]">
                      {item.desc}
                    </p>
                  </div>
                  <div className=" w-full bg-[#0745D3] p-5">
                    <Link
                      href={item.link}
                      className="text-white  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>

      <BlogSlider />

      <Benefits
        ribbon="Business Benefits "
        title="Intelli-Tech Advantages of Transforming Business Landscape"
        desc=""
        arr={BenefitsData}
      ></Benefits>

      {/* Business Benefits TO BE CREATED  */}
      <SME />

      {/* Why Infotech */}
      <>
        <WhySection
          title="Why Godrej Infotech?"
          desc="Embark on cloud upgradation journey by harnessing our credible
                  assessment process, strategic resources and fluent data
                  migration practice to minimise your business risk, time to
                  market and cost. Our time-tested delivery framework enables
                  businesses"
          ribbon="Spend LESS, GROW MORE"
        >
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
                      <span className="text-[#4C6FFF]">reliable partners</span>{" "}
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
                      <span className="text-[#4C6FFF]">25000+</span> Apps and
                      Databases migrated
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </WhySection>
      </>

      {/* Expertise */}
      <Expertise
        ribbon="Our Expertise "
        title="Future Outlook with Intelligent Technologies  "
        desc="We are here to build edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
        arr={[
          {
            title: "85%",
            desc: "IDC states that 85% of enterprises to merge human expertise with AI, ML& NLP by 2026 ",
          },
          {
            title: "$200B",
            desc: "Forbes forecasts size for AI market by 2026 ",
          },
          {
            title: "$6.6T",
            desc: "PwC Research claims that $6.6T productivity growth is projected by 2030  ",
          },
        ]}
      ></Expertise>
      {/* Stats TO BE CREATED */}
      <Testimonials />

      {/* Subscription */}
      <Subscription
        title=""
        blue="Free 30-Minutes"
        title2="Strategy Session with our Consultant"
        desc="Let's discuss how Godrej Infotech can help your business with efficiency and business continuity. "
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
