"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";
import React, { useState } from "react";
import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import { mdiCheckboxMultipleMarked } from "@mdi/js";

import Capabilities from "@/components/Capabilities";
import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import Azure from "../../../../../../public/azure.png";
import RPAPlaceholder from "../../../../../../public/RPAPlaceholder.png";

/**
 * * Sandeep Rana
 * Logos
 */

import uiPath from "../../../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import MLExpertise from "../../../../../../public/MLExpertise.png";
import scalable1 from "../../../../../../public/scalable1.png";
import scalable2 from "../../../../../../public/scalable2.png";
import scalable3 from "../../../../../../public/scalable3.png";
import scalable4 from "../../../../../../public/scalable4.png";
import scalable5 from "../../../../../../public/scalable5.png";
import scalable6 from "../../../../../../public/scalable6.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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
    title: "Consultation Services",
    desc: "We conduct process and platform estimations, capture automation requirements, create business cases, process validations and make clear Standard Operating Procedures (SoPs), ensuring your RPA journey aligns perfectly with your business goals.",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 2,
    title: "Feasibility Check Services",
    desc: "Our expert team design RPA pilot and build Proof of Concepts (PoCs) taking your RPA vision into consideration.",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 3,
    title: "RPA Deployment ",
    desc: "We install / configure automation scripts with precision followed by continuous enhancements, run end-to-end testing, manage QA processes and carefully document the code.",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 4,
    title: "RPA Managed Services ",
    desc: "We maintain and monitor your RPA application and Bot for their excellent performance, offering ongoing support and driving continuous improvement, ensuring efficient operations.",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
];

const ConsiderRPA = [
  {
    _id: 1,
    title: "Increased Productivity",
    desc: "Lift up your team's productivity and speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 2,
    title: "Assured Outcomes",
    desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 3,
    title: "Compliance and Consistency",
    desc: "Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision, consistency, reducing the risk of noncompliance and the hassle of audits.",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 4,
    title: "Resource Optimization/ Optimize FTE Cost",
    desc: "Enable employees to focus on more meaningful and strategic endeavours, helping them to deliver attentive experience to customers. ",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 5,
    title: "Optimize FTE Cost",
    desc: "Cut down the requirement for additional full-time employees (FTEs), leading to major cost savings of salaries, benefits, and allied overheads.",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 6,
    title: "Enhance Flexibility",
    desc: "Enables businesses to quickly adapt to changing business needs without the time and expense required to hire and train new employees.",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 7,
    title: "Reduce AHT (Average Handling Time)",
    desc: "Businesses can enhance customer service quality, shrink response times and improve operational efficiency.",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 8,
    title: "Strengthen Accuracy",
    desc: "Bots execute tasks with accuracy, leading to decreased rework.",
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
    title: "Account Payable and Receivable Process",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 4,
    title: "Vendor Onboarding Process",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 5,
    title: "Customer Onboarding Process",
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
    title: "Infrastructure",
    keyword: "Enable",
    color: "#032573",
    bgcolor1: "#7491D4",
    bgcolor2: "#EDF1FF",
    bgcolor3: "#0745D3",
    icon: "scalable1",
    list: ["Link1", "L2ink2", "Li2nk3"],
  },
  {
    _id: 2,
    title: "Project Governance ",
    keyword: "Prepare",
    color: "#806113",
    bgcolor1: "#F5D687",
    bgcolor2: "#FFF8E5",
    bgcolor3: "#F4C447",
    icon: "scalable2",
    list: ["Link1", "Link2", "Lir4nk3"],
  },
  {
    _id: 3,
    title: "Workflow ",
    keyword: "Design",
    color: "#224D37",
    bgcolor1: "#6D917F",
    bgcolor2: "#E5F8EE",
    bgcolor3: "#429268",
    icon: "scalable3",
    list: ["Link1", "Link22", "Link13"],
  },
  {
    _id: 4,
    title: "Workflow  Development ",
    keyword: "Build",
    color: "#4E6EF2",
    bgcolor1: "#8CA3FF",
    bgcolor2: "#EDF1FF",
    bgcolor3: "#4C6FFF",
    icon: "scalable4",
    list: ["Link1", "Link2", "Link3"],
  },
  {
    _id: 5,
    title: "Quality  Assurance ",
    keyword: "Test",
    color: "#732822",
    bgcolor1: "#B56964",
    bgcolor2: "#FEEDED",
    bgcolor3: "#B42318",
    icon: "scalable6",
    list: ["Link1", "Link2", "Link3"],
  },
  {
    _id: 6,
    title: "Hyper Care ",
    keyword: "Sustain",
    color: "#DDDDDE",
    bgcolor1: "#575D66",
    bgcolor2: "#F5F5F5",
    bgcolor3: "#475467",
    icon: "scalable6",
    list: ["Link1", "Link2", "Link3"],
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    title: "Manufacturing",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Accounts and Finance",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "HR",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "IT Infra",
    imgUrl: "4",
    url: "/",
  },
];

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <EntIntro
        title="Automate operation efforts to multiply
        business efficiency and ROI with our RPA
        solutions and services"
        desc="Our forte lies in upgrading business operations with the high-powered productivity of Robotic Process Automation (RPA). We help you to manage high-volume tasks by cutting down time requirements with precise results."
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
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Why Consider RPA for your business?
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left hidden max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem]  grid-cols-1 gap-10 sm:grid-cols-1">
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
          {/* Capabilites */}
          <Capabilities
            ribbon=" "
            title="Our Capabilities "
            desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
            arr={[
              {
                _id: 1,
                icon: "gear",
                title: "Future of Projects  ",
                desc: "",
                cta: "Know More",
                ctaUrl: "/",
                list: [
                  {
                    title:
                      "External integration with project monitoring tools  ",
                    url: "/",
                  },
                  {
                    title: "Mobile applications for task assignment",
                    url: "/",
                  },
                  {
                    title: "After sales service",
                    url: "/",
                  },
                  {
                    title: "Data Security & Digital Documentation ",
                    url: "/",
                  },
                  {
                    title: "Multi site management  ",
                    url: "/",
                  },
                  {
                    title: "Project Task Assignment & Management  ",
                    url: "/",
                  },
                  {
                    title: "Remote Work and Cost Accuracy   ",
                    url: "/",
                  },
                ],
              },
              {
                _id: 2,
                icon: "gear",
                title: "IoT Enabled Products ",
                desc: "",
                cta: "Know More",
                ctaUrl: "/",
                list: [
                  {
                    title:
                      "External integration with project monitoring tools  ",
                    url: "/",
                  },
                  {
                    title: "Mobile applications for task assignment",
                    url: "/",
                  },
                  {
                    title: "After sales service",
                    url: "/",
                  },
                  {
                    title: "Data Security & Digital Documentation ",
                    url: "/",
                  },
                  {
                    title: "Multi site management  ",
                    url: "/",
                  },
                  {
                    title: "Project Task Assignment & Management  ",
                    url: "/",
                  },
                  {
                    title: "Remote Work and Cost Accuracy   ",
                    url: "/",
                  },
                ],
              },
              {
                _id: 3,
                icon: "gear",
                title: "Supply Chain Management  ",
                desc: "",
                cta: "Know More",
                ctaUrl: "/",
                list: [
                  {
                    title:
                      "External integration with project monitoring tools  ",
                    url: "/",
                  },
                  {
                    title: "Mobile applications for task assignment",
                    url: "/",
                  },
                  {
                    title: "After sales service",
                    url: "/",
                  },
                  {
                    title: "Data Security & Digital Documentation ",
                    url: "/",
                  },
                  {
                    title: "Multi site management  ",
                    url: "/",
                  },
                  {
                    title: "Project Task Assignment & Management  ",
                    url: "/",
                  },
                  {
                    title: "Remote Work and Cost Accuracy   ",
                    url: "/",
                  },
                ],
              },
              {
                _id: 4,
                icon: "gear",
                title: "Performance Management ",
                desc: "",
                cta: "Know More",
                ctaUrl: "/",
                list: [
                  {
                    title:
                      "External integration with project monitoring tools  ",
                    url: "/",
                  },
                  {
                    title: "Mobile applications for task assignment",
                    url: "/",
                  },
                  {
                    title: "After sales service",
                    url: "/",
                  },
                  {
                    title: "Data Security & Digital Documentation ",
                    url: "/",
                  },
                  {
                    title: "Multi site management  ",
                    url: "/",
                  },
                  {
                    title: "Project Task Assignment & Management  ",
                    url: "/",
                  },
                  {
                    title: "Remote Work and Cost Accuracy   ",
                    url: "/",
                  },
                ],
              },
            ]}
          />
        </div>
      </>

      {/* RPA Platform Expertise Logos */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
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
                  solutions that fulfil your exclusive business needs.
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={uiPath} alt="uiPath" width={200} />
                </div>
                <div>
                  <Image src={powerAutomate} alt="powerAutomate" width={320} />
                </div>
                <div>
                  <Image
                    src={automationAnywhere}
                    alt="automationAnywhere"
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* RPA Service Offerings */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold text-center ">
                  RPA Service Offerings
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
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

      {/* Industry Spotlight Slider */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Elevating RPA Domain Advantage - Industry
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] pb-4">
                  We deliver innovative RPA solutions backed by our extensive
                  experience and commitment to excellence.
                </p>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.png`}
                              height={350}
                              width={283}
                              alt="icon"
                              className=" transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity  ">
                              <h3 className="text-[22px] text-white absolute bottom-4 left-4 w-fit leading-[30px] font-bold mb-5">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* RPA UseCases */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
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
      {/* <IndustryExpertise
        heading="Industry Expertise"
        desc="Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector"
        list={IndustryExperts}
      /> */}

      {/* GITL RPA Cards */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold  ">
                  GITL RPA Project Lifecycle
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] mb-2 ">
                  The journey towards efficiency and competency{" "}
                </p>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  From inception to upheld brilliance, every stage of our
                  project lifecycle is precisely devised to optimize your
                  business processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Rpa Card Backup */}
      <>
        <div className={` w-full pb-12 `}>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {RPACards.map((item) => {
              const isHovered = item._id === hoveredCard;
              return (
                <div
                  key={item._id}
                  className={`mx-2  sm:w-[320px] w-fit flex flex-col justify-between`}
                  onMouseOver={() => setHoveredCard(item._id)}
                  onMouseOut={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-full text-2xl font-bold ${
                      isHovered ? "hidden" : "block"
                    }  p-5`}
                    style={{
                      backgroundColor: item.bgcolor1,
                      color: item.color,
                    }}
                  >
                    {item.keyword}
                  </div>
                  <div
                    className={`p-5 w-full h-full `}
                    style={{
                      backgroundColor: item.bgcolor2,
                    }}
                  >
                    <div className="mb-4">
                      {item.icon !== "" ? (
                        <Image
                          src={`/${item.icon}.png`}
                          width={56}
                          height={56}
                          alt={item.icon}
                        />
                      ) : (
                        <Icon path={mdiDomain} size={3} />
                      )}
                    </div>
                    <h4 className={`text-2xl font-bold my-2 text-[#101828]`}>
                      {item.title}
                    </h4>
                    <div className={`${isHovered ? "block" : "hidden"} `}>
                      <ul>
                        {item.list.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`w-full p-2`}
                    style={{
                      backgroundColor: item.bgcolor3,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </>

      {/* <>
        <div className={`w-full pb-12`}>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5">
            {RPACards.map((item) => {
              const isHovered = item._id === hoveredCard;

              return (
                <div
                  key={item._id}
                  className={`mx-2 sm:w-[320px] w-fit flex flex-col justify-between relative ${
                    isHovered ? "shadow-lg" : ""
                  }`}
                  onMouseOver={() => setHoveredCard(item._id)}
                  onMouseOut={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-full text-2xl font-bold p-5 ${
                      isHovered ? "block" : "hidden"
                    }`}
                    style={{
                      backgroundColor: item.bgcolor1,
                      color: item.color,
                    }}
                  >
                    {item.keyword}
                  </div>
                  <div
                    className={`p-5 w-full h-full `}
                    style={{
                      backgroundColor: isHovered
                        ? item.bgcolor2
                        : item.bgcolor2,
                    }}
                  >
                    {isHovered && (
                      <>
                        <Image
                          src={`/${item.icon}.png`}
                          width={32}
                          height={32}
                          alt="scalable"
                        />
                        <h4 className={`text-lg font-bold my-2 text-[#101828]`}>
                          {item.title}
                        </h4>
                        <ul className="list-disc ml-5">
                          {item.list.map((link, index) => (
                            <li key={index}>{link}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div
                    className={`w-full p-2`}
                    style={{
                      backgroundColor: isHovered
                        ? item.bgcolor3
                        : item.bgcolor3,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </> */}

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
