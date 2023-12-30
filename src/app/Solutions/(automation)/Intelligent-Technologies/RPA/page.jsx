"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import { mdiCheckboxMultipleMarked } from "@mdi/js";

import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import Azure from "../../../../../../public/azure.png";
import RPAPlaceholder from "../../../../../../public/RPAPlaceholder.png";

import MLExpertise from "../../../../../../public/MLExpertise.png";
import scalable1 from "../../../../../../public/scalable1.png";
import scalable2 from "../../../../../../public/scalable2.png";
import scalable3 from "../../../../../../public/scalable3.png";
import scalable4 from "../../../../../../public/scalable4.png";
import scalable5 from "../../../../../../public/scalable5.png";
import scalable6 from "../../../../../../public/scalable6.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import IndustryExpertise from "@/components/IndustryExpertise";
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

const RPAServiceOfferings = [
  {
    _id: 1,
    title: "Deep Learning",
    desc: "Our deep learning expertise is about making data come to life. We use these cutting-edge practices to create solutions that automate complex tasks data-driven",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 2,
    title: "Feasibility Check Services ",
    desc: "A comprehensive platform for restaurants, pubs, cafes, food-halls and other food service businesses to manage everything from tableside ordering to inventory, kitchen operations and more",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 3,
    title: "RPA Deployment ",
    desc: "A seamlessly integrated cloud-based platform designed to optimize the management of retail enterprise and enhance the performance of individual store locations",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 4,
    title: "RPA Managed Services ",
    desc: "A comprehensive platform for restaurants, pubs, cafes, food-halls and other food service businesses to manage everything from tableside ordering to inventory, kitchen operations and more",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
];

const ConsiderRPA = [
  {
    _id: 1,
    title: "Extensive Customization",
    desc: "Comprehensive customization options that are tailored to explicit demands, workflows and processes, delivering a more competent and personalized CRM experience",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 2,
    title: "Effortless Integration",
    desc: " Seamless integration capability with Microsoft Outlook and Infor CloudSuite ERP systems, facilitating organizations to have an integrated view of customer information, minimizing data silos and augmenting collaboration through distinct structures",
    cta: "Know More",
    ctaUrl: "/",
  },
];

const UseCases = [
  {
    _id: 1,
    title: "Incident Management Tickets ",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 2,
    title: "Employee Access Creation ",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 3,
    title: "Workflow Automation",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 4,
    title: "Document Management",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 5,
    title: "Team and Territory Management",
    cta: "Know More",
    link: "/",
  },
];

const IndustryExperts = [
  {
    _id: 1,
    title: "Manufacturing",
    image: "manufacturing",
  },
  {
    _id: 2,
    title: "Accounts and Finance",
    image: "finance",
  },
  {
    _id: 3,
    title: "HR",
    image: "hr",
  },
  {
    _id: 4,
    title: "IT Infra",
    image: "itinfra",
  },
];

const RPACards = [
  {
    _id: 1,
    title: "Infrastructure Setup ",
    keyword: "Enable",
    color: "032573",
    bgcolor1: "7491D4",
    bgcolor2: "EDF1FF",
    bgcolor3: "0745D3",
    icon: "scalable1",
  },
  {
    _id: 2,
    title: "Project Governance ",
    keyword: "Prepare",
    color: "806113",
    bgcolor1: "F5D687",
    bgcolor2: "FFF8E5",
    bgcolor3: "F4C447",
    icon: "scalable2",
  },
  {
    _id: 3,
    title: "Workflow Design ",
    keyword: "Design",
    color: "224D37",
    bgcolor1: "6D917F",
    bgcolor2: "E5F8EE",
    bgcolor3: "429268",
    icon: "scalable3",
  },
  {
    _id: 4,
    title: "Workflow  Development ",
    keyword: "Build",
    color: "4E6EF2",
    bgcolor1: "8CA3FF",
    bgcolor2: "EDF1FF",
    bgcolor3: "4C6FFF",
    icon: "scalable4",
  },
  {
    _id: 5,
    title: "Quality  Assurance ",
    keyword: "Sustain",
    color: "732822",
    bgcolor1: "B56964",
    bgcolor2: "FEEDED",
    bgcolor3: "B42318",
    icon: "scalable6",
  },
  {
    _id: 6,
    title: "Hyper Care ",
    keyword: "Sustain",
    color: "DDDDDE",
    bgcolor1: "575D66",
    bgcolor2: "F5F5F5",
    bgcolor3: "475467",
    icon: "scalable6",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Automate operation efforts to multiply
        business efficiency and ROI with our RPA
        solutions and services"
        desc="Microsoft Solutions such as cloud, workplace & business applications infused with our capability enables businesses to adapt, innovate and transform operations for excellence and better customer satisfaction"
        cta="Let's Connect"
        width="70%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          arr={[
            {
              _id: 1,
              title: "Enterprise suite",
              link: "#about",
            },
            {
              _id: 2,
              title: "Act Cards",
              link: "#actCards",
            },
            {
              _id: 3,
              title: "Employee Experience",
              link: "#empExp",
            },
            {
              _id: 4,
              title: "Spotlight",
              link: "#spotlight",
            },
          ]}
        />
      </>

      {/* Why consider RPA for Your Business */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Why Consider RPA for your business?
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-1">
            {ConsiderRPA.map((item, index) => (
              <div
                className="flex flex-col sm:flex-row  bg-white"
                key={item._id}
              >
                <Image
                  src={RPAPlaceholder}
                  className="w-[100%] sm:w-fit"
                  alt="ML Expertise"
                />
                <div className="p-8">
                  <p className="text-[#101828] font-bold text-[26px] leading-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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
            ))}
          </div>
        </div>
      </>

      {/* RPA Platform Expertise Logos */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  RPA Platform Expertise
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
                  <Image src={Oracle} alt="Oracle" />
                </div>
                <div>
                  <Image src={Dynamic365} alt="Dynamic365" />
                </div>
                <div>
                  <Image src={Azure} alt="Azure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* RPA Service Offerings */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold text-center ">
                  RPA Service Offerings
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
            {RPAServiceOfferings.map((item, index) => (
              <div className="" key={item._id}>
                <Image
                  src={MLExpertise}
                  className="w-[100%]"
                  alt="ML Expertise"
                />
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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
            ))}
          </div>
        </div>
      </>

      {/* Industry Spotlight */}
      {/* RPA UseCases */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Godrej Infotech RPA Use Cases
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We endeavor to build actual business impact of Robotic Process
                  Automation (RPA) reforming industries, improving output and
                  leading digital transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className={`bg-rpa w-full pt-48 pb-12 `} id="productivity">
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {UseCases.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className=" mx-2 bg-white sm:w-[320px] w-fit flex flex-col justify-between"
                >
                  <div className="p-5 w-fit ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
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

      {/* Industry Expertise Slider */}
      <IndustryExpertise
        heading="Industry Expertise"
        desc="Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector"
        list={IndustryExperts}
      />

      {/* GITL RPA Cards */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold  ">
                  GITL RPA
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  From inception to upheld brilliance, every stage of our
                  project lifecycle is precisely devised to optimize your
                  business processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className={` w-full pb-12 `}>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {RPACards.map((item) => {
              return (
                <div
                  key={item._id}
                  className={`mx-2  sm:w-[320px] w-fit flex flex-col justify-between`}
                >
                  <div
                    className={`w-full text-2xl font-bold bg-[#${item.bgcolor1}] text-[#${item.color}] p-5`}
                  >
                    {item.keyword}
                  </div>
                  <div className={`p-5 w-full h-full bg-[#${item.bgcolor2}]`}>
                    <Image
                      src={`/${item.icon}.png`}
                      width={56}
                      height={56}
                      alt="scalable"
                    />
                    <h4 className={`text-2xl font-bold my-2 text-[#101828]`}>
                      {item.title}
                    </h4>
                  </div>
                  <div className={`w-full bg-[#${item.bgcolor3}] p-2`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </>

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
