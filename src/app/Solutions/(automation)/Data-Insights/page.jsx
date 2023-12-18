"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import Subscription from "@/components/Subscription";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../public/icon.png";
import microsoft from "../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";

import PowerBI from "../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../public/Power-App.png";
import Birst from "../../../../../public/Birst-logo.png";
import dummy from "../../../../../public/dummy.png";

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
import Awards from "@/sections/awards/Awards";

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

  const smartTools = [
    {
      _id: 1,
      type: "box",
      title: "Power BI",
      theme: "light",
      bg: "transparent",
      desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
      icon: "Power-BI-Logo.png",
      cta: "Know More",
    },
    {
      _id: 2,
      type: "box",
      title: "Power Apps",
      theme: "dark",
      bg: "#4C6FFF",
      desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
      icon: "Power-App.png",
      cta: "Know More",
    },
    {
      _id: 3,
      type: "box",
      title: "Birst ",
      theme: "dark",
      bg: "#07001F",
      desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
      icon: "Birst-logo.png",
      cta: "Know More",
    },
    {
      _id: 4,
      type: "box",
      title: "Big Data",
      theme: "dark",
      bg: "transparent",
      desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
      icon: "dummy.png",
      cta: "Know More",
    },
    {
      _id: 5,
      type: "box",
      title: "Data Lake",
      theme: "light",
      bg: "transparent",
      desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
      icon: "dummy.png",
      cta: "Know More",
    },
  ];

  return (
    <>
      <EntIntro
        title="Do More with Data Insights
        for Breakthrough Transformation"
        desc="We develop business bespoke strategies and align them with future-proof architectures, emphasizing governance and autonomous management to build your robust data estates. "
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
                  Smart Tools and Technologies
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
      {/* About Smart Tools grid */}
      <>
        <div
          className={` py-12 max-w-screen-xl px-[2rem] md:max-w-screen-2xl mb-5 mx-auto `}
        >
          <div className="flex flex-col sm:flex-row gap-10 justify-start flex-wrap">
            {smartTools.map((item, index) => (
              <div
                key={item._id}
                className={`  p-8 w-[400px] max-w-1/4 border border-[#707070] `}
              >
                <Image
                  src={`/${item.icon}`}
                  height="48"
                  width="48"
                  alt="PowerBI"
                />
                <h4 className="text-[26px] leading-[32px] my-5 font-bold text-[#101828]">
                  {item.title}
                </h4>
                <p className="text-[#475467] text-[14px] font-normal leading-[22px] ">
                  {item.desc}
                </p>
                <Link
                  href={"/"}
                  className=" flex transition-all mt-5 font-medium hover:opacity-75 border-b-2 w-fit border-[#101828] "
                >
                  {item.cta}
                  <Icon
                    path={mdiArrowTopRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </Link>
              </div>
            ))}
            <div className="p-8 w-[400px] max-w-1/4 ">
              <h4 className="text-[26px] leading-[32px] my-5 font-bold text-[#101828]">
                Let&apos;s Connect for a Walkthrough
              </h4>
              <Link
                href={"/"}
                className="min-w-max w-fit flex bg-[#0A002F] py-2 px-10 border-2 border-[#0A002F] font-medium text-base text-[#FFF] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
              >
                Let&apos; Connect
                <Icon
                  path={mdiArrowTopRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </Link>
            </div>
          </div>
        </div>
      </>
      {/*
To be added Our Capabilities
*/}
      <Awards />
      {/*
To be added Data Insights Metrics
*/}
      <Testimonials />

      <Subscription
        title="Tap the faster and simpler way for futuristic seamless business experiences"
        desc="Let's discuss how intelligent technologies can help you with rapid growth"
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
