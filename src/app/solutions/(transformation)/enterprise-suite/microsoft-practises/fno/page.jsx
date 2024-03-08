"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../../public/icon.png";
import microsoft from "../../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../../public/Power-App.png";
import Birst from "../../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../../public/dummy.png";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
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
import Benefits from "@/components/Benefits";

import Testimonial from "@/sections/testimonial/Testimonial";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import WhySection from "@/components/WhySection";
import Abstract from "@/components/Abstract";

import InsightSlider from "@/components/InsightSlider";
import { useState } from "react";
import { NewTestimonial } from "@/components";
const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    desc: "",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
  },

  {
    _id: 4,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Manufacturing",
    desc: "",
    url: "/",
    list: [
      "Full process coverage for discrete and process manufacturing",
      "Real-time planning and optimization",
      "IoT and mixed reality roadmap for a connected factory experience",
    ],
  },
  {
    _id: 2,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Trading & Distribution",
    desc: "",
    url: "/",
    list: [
      "Comprehensive process coverage for trading & distribution",
      "Material requirement planning",
      "Machine learning-driven demand forecasting",
    ],
  },
  {
    _id: 3,
    title: "Professional services",
    desc: "",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Financial precision for budgeting, invoicing and expense management",
      "Project-centric approach for professional services firms",
    ],
  },
  {
    _id: 4,
    title: "Projects",
    desc: "",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Financial transparency and control for budgeting and cost management",
      "Real-time project insights for better decision-making and proactive issue resolution",
      "Precise project management and resource optimization",
    ],
  },
];

const ConsiderRPA = [
  {
    _id: 1,
    title: "Asset Management",
    desc: "Effectively monitor your business assets to maintain its optimal condition, ensuring the uniform business operations.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
  },
  {
    _id: 2,
    title: "Financial Management",
    desc: "Handle financial and accounting matters with precision, promoting financial stability.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
  {
    _id: 3,
    title: "Inventory Management",
    desc: "Assure that products are precisely where they need to be, precisely when they need to be there, enhancing business efficiency.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/EnsureCompliance.png",
  },

  {
    _id: 5,
    title: "Budgeting",
    desc: "Skilfully plan and manage organisation budgeting and allocate resources accordingly to achieve financial objectives.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/OptimizeFTEcost.png",
  },
  {
    _id: 6,
    title: "Supply Chain Management",
    desc: "Exercise comprehensive control on entire supply chain, facilitating the smooth flow of products from suppliers to customers, enhancing operational efficiency.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/EnhanceFlexibility.png",
  },
  {
    _id: 7,
    title: "Commerce",
    desc: "Craft a seamless shopping experience for your customers, both online and in-store, ensuring hassle-free shopping journey, thus enhancing customer satisfaction.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/ReduceAHT.png",
  },
  {
    _id: 8,
    title: "Customer and Vendor Collaboration",
    desc: "Cultivate robust relationships with both customers and vendors enhancing mutual success.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/ReduceAHT.png",
  },
  {
    _id: 9,
    title: "Manufacturing",
    desc: "Optimize your manufacturing processes, streamlining production and upholding product quality to meet or exceed market standards.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/ReduceAHT.png",
  },
  {
    _id: 10,
    title: "Project Management",
    desc: "Efficiently manage and coordinate projects, ensuring they are executed promptly and within budget constraints, delivering successful project outcomes.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/ReduceAHT.png",
  },
  {
    _id: 11,
    title: "Accounting",
    desc: "Maintain immaculate financial records, safeguarding business's financial health and ensuring compliance with accounting standards.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/ReduceAHT.png",
  },
];

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
const Page = () => {
  const lists = [
    {
      id: 1,
      text: "Navigating intricate warehouse operations demands sophisticated solutions for precise management of inventory, labor and billing",
    },
    {
      id: 2,
      text: "Meeting the ever-changing needs of customers requires agility and adaptability within warehouse functions",
    },
    {
      id: 3,
      text: "Success in today's business landscape hinges on real-time data access and data-driven insights for informed decision-making",
    },
    {
      id: 4,
      text: "To stay competitive, businesses must undergo a significant transformation of their supply chain operations, prioritizing speed, flexibility, and intelligence",
    },
    {
      id: 5,
      text: "Embracing digitization is the key to converting the supply chain from a cost center into a source of competitive advantage",
    },
  ];

  const upgradeCloud = [
    {
      _id: 1,
      title: "Migrate to the Cloud from On-Prem",
      desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 2,
      title: "Migrate From a Different ERP Platform to Infor LN  ",
      desc: "Experience seamless and transformative migration with data integrity for your business",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 3,
      title: "Upgrade with Infor",
      desc: "Get access to enhanced innovation, business preferences and value",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 4,
      title: "End-to-End Implementation ",
      desc: "Streamlining every phase of the implementation, we provide capability of successful and on-time delivery of Infor solution",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 5,
      title: "Managed Services ",
      desc: "Managing every complexity, time-consuming and resource-rigorous process and on demand maintenance of Infor application",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 6,
      title: "Custom Development & Integrations",
      desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
  ];
  const [hoveredCard, setHoveredCard] = useState(null);
  const UseCases = [
    {
      _id: 1,
      title: "Consulting ",
      cta: "Know More",
      link: "/",
      desc: "Effectively monitor your business assets to maintain its optimal condition, ensuring the uniform business operations",
      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
    },
    {
      _id: 2,
      title: "Employee Access Creation ",
      cta: "Know More",
      link: "/",
      desc: "Effectively monitor your business assets to maintain its optimal condition, ensuring the uniform business operations",
      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
    },
    {
      _id: 3,
      title: "Account Payable and Receivable Process",
      cta: "Know More",
      link: "/",
      desc: "Effectively monitor your business assets to maintain its optimal condition, ensuring the uniform business operations",
      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
    },
    {
      _id: 4,
      title: "Vendor Onboarding Process",
      cta: "Know More",
      link: "/",
      desc: "Effectively monitor your business assets to maintain its optimal condition, ensuring the uniform business operations",
      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
    },
    {
      _id: 5,
      title: "Customer Onboarding Process",
      cta: "Know More",
      link: "/",
      desc: "Effectively monitor your business assets to maintain its optimal condition, ensuring the uniform business operations",
      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
    },
  ];
  return (
    <>
      <EntIntro
        title="Revolutionize Your Business Dynamics with Our D365 F&O Expertise"
        desc=""
        cta="Let's Connect"
        width="75%%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          // Highlights
          // Add Ons
          // Industry Solutions
          // Benefits
          // Case Study

          arr={[
            {
              _id: 1,
              title: "Highlights",
              link: "#Highlights",
            },

            {
              _id: 2,
              title: "Industry Solutions",
              link: "#IndustrySolutions",
            },
            {
              _id: 3,
              title: "Add Ons",
              link: "#AddOns",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },

            {
              _id: 5,
              title: "Case Study",
              link: "#CaseStudy",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Microsoft Dynamics 365 Finance & Operations is a robust solution for medium- to large-sized businesses. It enables streamlining and automating global operations, offering real-time insights that form the bedrock of informed decision-making. Godrej Infotech is committed to helping clients for long-term success. Our seasoned D365 F&O team specializes in simplifying the adoption of this powerful solution, ensuring a seamless integration into your business processes."></Abstract>

      {/* key highlights */}

      <>
        <div id="Highlights" className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Key Highlights of Dynamics 365 F&O
                </h3>
                <p>
                  Microsoft D365 Finance and Operations powers up your business
                  with insights and comprehensive financial tools to streamline
                  operations and adapt to changing business environments.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
            {ConsiderRPA.map((item, index) => (
              <div
                className="flex flex-col sm:flex-row  bg-white"
                key={item._id}
              >
                <Image
                  src={item.image}
                  height={120}
                  width={120}
                  className="w-[100%] sm:w-fit object-cover"
                  alt={item.title}
                />
                <div className="p-4 sm:justify-start sm:flex sm:flex-col w-full">
                  <p className="text-[#101828] font-bold text-[26px] leading-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal mt-2 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3] hidden text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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

      {/* Ms slider */}
      <>
        <div className={`bg-ms-practise bg-white w-full py-32 hidden `} id="">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Key Highlights of F&O
                  </h3>
                </div>
                <div>
                  <p className="font-medium text-[16px] text-[#475467] leading-[22px] md:w-[90%] ">
                    Microsoft Dynamics 365 Finance and Operations (D365 F&O)
                    power up your business with AI-driven insights and
                    comprehensive financial tools to streamline operations and
                    adapt to changing business environments
                  </p>
                </div>
              </div>
              {/* right */}
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] flex gap-10  overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="flex flex-col sm:flex-row gap-y-5 flex-wrap justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5 "
            >
              {UseCases.map((item, index) => {
                return (
                  <SwiperSlide
                    key={item._id}
                    className="sm:w-full h-full flex flex-col justify-between  mr-4  relative group"
                  >
                    <div className="sm:w-full h-full bg-white  flex flex-col justify-between">
                      <div className="p-5  mx-2">
                        <div className={`hidden mb-4`}>
                          {item.icon !== "" ? (
                            <Image
                              src={`/icon/${item.icon}.svg`}
                              width="48"
                              height="48"
                              alt={item.icon}
                            />
                          ) : (
                            <Icon path={mdiDomain} size={3} />
                          )}
                        </div>
                        <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                          {item.title}
                        </h4>
                        <p className="text-[14px] font-normal  mb-2 leading-[22px] text[#475467]">
                          {item.desc}
                        </p>
                      </div>
                      <div
                        className={clsx("w-full bg-[#0745D3] p-5", {
                          hidden: item.link === "",
                        })}
                      >
                        <Link
                          href={item.link}
                          className={
                            "text-white flex transition-all hover:opacity-75"
                          }
                        >
                          {item.cta}
                          <Icon
                            path={mdiArrowRight}
                            style={{ marginLeft: "0.5em" }}
                            size={1}
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </>

      <div className="hidden">
        <>
          {/* Old */}
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
              <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
                {[
                  {
                    _id: 1,
                    title: "Increased Productivity",
                    desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                    cta: "Know More",
                    ctaUrl: "/",
                    image: "/rpa/IncreasedProductivity.png",
                  },
                  {
                    _id: 2,
                    title: "Gain Accurate Outcomes",
                    desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
                    cta: "Know More",
                    ctaUrl: "/",
                    image: "/rpa/GainAccurateOutcomes.png",
                  },
                  {
                    _id: 3,
                    title: "Ensure Compliance and Consistency",
                    desc: "Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision, consistency, reducing the risk of noncompliance and the hassle of audits.",
                    cta: "Know More",
                    ctaUrl: "/",
                    image: "/rpa/EnsureCompliance.png",
                  },
                  {
                    _id: 5,
                    title: "Optimize FTE Cost",
                    desc: "Cut down the requirement for additional full-time equivalent employees (FTEs), leading to major cost savings in salaries, benefits and allied overheads.",

                    cta: "Know More",
                    ctaUrl: "/",
                    image: "/rpa/OptimizeFTEcost.png",
                  },
                  {
                    _id: 6,
                    title: "Enhance Flexibility",
                    desc: "Enables businesses to quickly adapt to changing business needs without the time and expense required to hire and train new employees.",
                    cta: "Know More",
                    ctaUrl: "/",
                    image: "/rpa/EnhanceFlexibility.png",
                  },
                  {
                    _id: 7,
                    title: "Reduce AHT (Average Handling Time)",
                    desc: "Businesses can enhance customer service quality, shrink response times and improve operational efficiency.",
                    cta: "Know More",
                    ctaUrl: "/",
                    image: "/rpa/ReduceAHT.png",
                  },
                ].map((item, index) => (
                  <div
                    className="flex flex-col sm:flex-row  bg-white"
                    key={item._id}
                  >
                    <Image
                      src={item.image}
                      height={120}
                      width={120}
                      className="w-[100%] sm:w-fit object-cover"
                      alt={item.title}
                    />
                    <div className="p-4 sm:justify-start sm:flex sm:flex-col w-full">
                      <p className="text-[#101828] font-bold text-[26px] leading-[32px]">
                        {item.title}
                      </p>
                      <p className="text-[#475467] text-[14px] font-normal mt-2 leading-[22px]">
                        {item.desc}
                      </p>
                      <Link
                        href={item.ctaUrl}
                        className="text-[#0745D3] hidden text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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
          {/*  */}
          <>
            <div
              className={`bg-ms-practise w-full  hidden  py-32  `}
              id="productivity"
            >
              <div className={` w-full`}>
                <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* left */}
                  <div className="  flex items-start flex-col justify-between  relative">
                    <div className="">
                      <h3 className="text-[42px] text-[#fff]  leading-[54px] mb-3 font-bold ">
                        Microsoft Services
                      </h3>
                    </div>
                    <div>
                      <p className="font-medium text-[#fff] leading-[22px] md:w-[90%] ">
                        We deliver high-performing services for a comprehensive
                        suite Microsoft ecosystem, devised to elevate growth and
                        productivity and build stronger stakeholder connections
                      </p>
                    </div>
                  </div>
                  {/* right */}
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={20}
                  pagination={true}
                  modules={[Pagination]}
                >
                  {[
                    {
                      _id: 1,
                      title: "Consulting ",
                      cta: "Know More",
                      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                      link: "/",
                      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
                    },
                    {
                      _id: 2,
                      title: "Employee Access Creation ",
                      cta: "Know More",
                      link: "/",
                      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
                    },
                    {
                      _id: 3,
                      title: "Account Payable and Receivable Process",
                      cta: "Know More",
                      link: "/",
                      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
                    },
                    {
                      _id: 4,
                      title: "Vendor Onboarding Process",
                      cta: "Know More",
                      link: "/",
                      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
                    },
                    {
                      _id: 5,
                      title: "Customer Onboarding Process",
                      cta: "Know More",
                      link: "/",
                      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                      icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
                    },
                  ].map((item, index) => {
                    return (
                      <SwiperSlide
                        key={item._id}
                        className=" mx-2 bg-white flex flex-col justify-between"
                      >
                        <div className="p-5 w-full">
                          <div className="hidden mb-4">
                            {item.icon !== "" ? (
                              <Image
                                src={`/icon/${item.icon}.svg`}
                                width="48"
                                height="48"
                                alt={item.icon}
                              />
                            ) : (
                              <Icon path={mdiDomain} size={3} />
                            )}
                          </div>
                          <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                            {item.title}
                          </h4>
                          <p className="text-[14px] leading-[22px]  mb-4 text-[#101828]">
                            {item.desc}
                          </p>
                        </div>
                        <div
                          className={clsx("w-full bg-[#0745D3] p-5", {
                            hidden: item.link === "/" || item.link === "",
                          })}
                        >
                          <Link
                            href={item.link}
                            className={
                              "text-white flex transition-all hover:opacity-75"
                            }
                          >
                            {item.cta}
                            <Icon
                              path={mdiArrowRight}
                              style={{ marginLeft: "0.5em" }}
                              size={1}
                            />
                          </Link>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </>
        </>
      </div>

      {/* Infographics */}
      <>
        <div className="max-w-screen-xl mx-auto px-[2rem] bg-white hidden">
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
              <h3 className="text-4xl leading-[42px] font-bold">
                Infographics
              </h3>
            </div>
          </div>
          <div className="mx-auto text-center w-max mb-20">
            <Infographics src="/infographics/Infographic_ServicesDynamic.png" />
          </div>
        </div>
      </>

      {/* Industry Served Slider */}
      <>
        <div id="IndustrySolutions" className={`w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Served
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  Understanding unique demands of each industry vertical and
                  capitalizing Infor capabilities, we equip businesses to thrive
                  in competitive market.
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
                    className="mySwiper h-[350px]"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden h-[350px]">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.jpg`}
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

      {/* Industry solutions */}
      <>
        <>
          <div id="AddOns" className={` w-full bg-[#FFF] pt-24`}>
            <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    Godrej Infotech Value-Added Solutions
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-normal leading-[22px] md:w-[90%] ">
                    With our tailored D365 F&O solutions built using Power Apps,
                    we ensure seamless integration and efficient processes for
                    Quality and Production Orders. Our goal is to make your
                    journey towards enhanced operational efficiency as smooth as
                    possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className={`bg-img w-full pt-24 pb-12 mt-20`} id="productivity">
            <div className="flex flex-col sm:flex-row gap-5 justify-center text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "Quality Order Mobile Apps",
                  desc: "",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                  list: [
                    "Simplified Quality Order Generation",
                    "Real-Time Data Integration",
                    "Effortless QR Code Search to locate Quality Orders",
                    "Mobile Inspection Updates",
                    "Detailed Test Insights",
                    "Order-level validation, approval and closure",
                  ],
                },
                {
                  _id: 2,
                  title: "Production Order App",
                  desc: "",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  cta: "Know More",
                  link: "/",
                  list: [
                    "Seamless Production Order Creation",
                    "Real-Time Data Integration",
                    "Open Order Management",
                    "Quick QR Code Searches for Production Orders",
                    "Mobile Inspection Updates",
                    "Individual Test Results",
                    "Efficient Validation",
                  ],
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="mx-2 w-fit md:w-1/2 bg-white flex flex-col justify-between "
                  >
                    <div className="p-5 w-fit ">
                      <div className="mb-4">
                        {item.icon !== "" ? (
                          <Image
                            src={`/${item.icon}.svg`}
                            width={56}
                            height={56}
                            alt={item.icon}
                          />
                        ) : (
                          <Icon path={mdiDomain} size={3} />
                        )}
                      </div>
                      <h4 className="text-[26px] font-bold mb-4 md:mb-8 leading-[34px] text-[#101828]">
                        {item.title}
                      </h4>
                      <ul>
                        {item.list.map((i, index) => (
                          <li
                            className="text-[14px] leading-[22px] border-b-2 mb-4 text-[#101828]"
                            key={index}
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
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
      </>

      {/* Industry Solutions Slider */}
      <>
        <div className={` w-full bg-[#F2F4F7] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <>
                <div className={`w-full bg-[#F2F4F7] text-left`}>
                  <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                    <div className="bg-[#F2F4F7] text-left">
                      <h4
                        className={`font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        Accelerating Business Engineering
                      </h4>
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          Godrej Infotech Solutions
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          The high scalability of the Dynamics 365 F&O solution
                          makes it a valuable choice for medium size businesses
                          to large enterprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {expandedCardSlider.map((item) => (
                      <SwiperSlide
                        key={item._id}
                        className="w-[500px] max-w-[500px] mr-4 relative group"
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/IndustrySolutionsSlider/${item.imgUrl}.jpg`}
                            height={313}
                            width={500}
                            alt="icon"
                            className="transition-transform transform group-hover:scale-105"
                          />

                          {/* Default overlay */}
                          <div className="absolute inset-0  flex flex-col justify-end p-4">
                            <h3 className="text-[22px] text-white font-bold mb-1">
                              {item.title}
                            </h3>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-[#4c6fff] transition-opacity opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                            <h3 className="text-[22px] text-white font-bold mb-1">
                              {item.title}
                            </h3>
                            <p className="text-white leading-[20px] mb-5">
                              {item.desc}
                            </p>
                            {item.list && (
                              <>
                                <ul className=" list-disc pl-4">
                                  {item.list.map((i, index) => (
                                    <li
                                      className="text-white leading-[20px]"
                                      key={index}
                                    >
                                      {i}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits"
        ribbonTxtWhite="true"
        title="Dynamics 365 F&O"
        desc="Microsoft Dynamics 365 Finance & Operations (D365 F&O) stands out as a modern and adaptable solution, with a pivotal feature being its role-based design along with comprehensive support for all compliance-related necessities."
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "Unify supply chain operations for financial visibility, risk control and innovation",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Built-in data security safeguards with Azure integration",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Substantial return on investment (ROI) through enhanced efficiency and automation",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Gain real-time insights, reporting and AI-driven agility for growth",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc:
              "Achieve on-time, on-budget project delivery with integrated teams",
          },
          {
            _id: 6,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "International functionality for global uniformity",
          },
        ]}
      ></Benefits>
      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="Our highly experienced Microsoft team is dedicated to understanding your unique business needs, delivering a tailored solution, and ensuring you harness the full potential of D365 F&O for business efficiency."
        arr={[
          {
            _id: 1,
            desc: "Our dedicated team troubleshoots, evaluates and optimizes your Dynamics 365 Finance and Supply Chain solution with expertise.",
            icon: "",
          },
          {
            _id: 2,
            desc: "We modernize legacy applications with new technologies for enhanced speed, efficiency, security and scalability.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Our Microsoft Dynamics 365 certified experts have executed projects across diverse industries across globs.",
            icon: "",
          },
          {
            _id: 4,
            desc: "We hold a prestigious Gold Partnership with Microsoft and operate global delivery model.",
            icon: "",
          },
          {
            _id: 5,
            desc: "Our toolkit includes tested, proven and reusable tools and frameworks.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Blog",
            title:
              "The Future of Financial Agility: D365 Finance and Operations Insights",
            desc: "This innovative platform, coupled with the expertise of a Microsoft Dynamics Partner Company, promises agility and operational effectiveness. Dynamics 365 Finance stands at the forefront of revolutionizing financial management, offering a comprehensive suite of tools to navigate the evolving financial terrain.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Testimonials */}
      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted customers share their success experience "
        desc="Discover how we have helped our clients to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Distributor of a popular coffee brand in Egypt and Saudi Arabia",
            thumbnail: "1",
            description:
              "We are delighted to say that D365 F&O has solved our earlier performance issues and we now have an IT infrastructure that is streamlined, systematic, and secure. We would like to take this opportunity to express our gratitude to the entire team of Godrej Infotech that has worked along with our team to make this go live successful.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "General Manager, Distributor of Fruits & Vegetables in the Philippines",
            thumbnail: "1",
            description:
              "Godrej Infotech team's dedication and commitment with excellent domain knowledge of our business was the key factor to our success and we cannot thank them enough for their valuable contribution. We have benefited tremendously from working with Godrej Infotech and hope to have the opportunity to continue a long-term relationship with them.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Dynamics 365 F&O Project Highlights"
        desc=""
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Indian Wildlife Nature Conservation Organisation successfully implements Microsoft Dynamics 365 F&O",
            thumbnail: "1",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/IndiasLeadingWildlifeNatureConservation_MD365.pdf",
          },
          {
            id: 2,
            title:
              "KSA's Leading Distributor of Electrical Components integrates Dynamics 365 F&O with Microsoft CRM on Cloud for streamlined item creation process and increased quality compliance",
            thumbnail: "2",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/KSA-LeadingDistributor_ElectricalComponents.pdf",
          },
          {
            id: 3,
            title:
              "Achieved significant cost savings along with operations digitalization through D365 F&O Cloud Solution for Leading Distributor of Fruits & Vegetables in Philippines",
            thumbnail: "3",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "www.godrejinfotech.com/assets/pdf/case-studies/LeadingDistributorofFruitsVegetablesinthePhilippinesGoesLivewithD365FandOCloudSolution.pdf",
          },
        ]}
      />

      {/* Subscription */}
      <Subscription
        title="Ready to Streamline Your
        Business Operations? "
        blue=" "
        title2=""
        desc="Talk To Our Experts to discuss your requirements "
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default Page;
