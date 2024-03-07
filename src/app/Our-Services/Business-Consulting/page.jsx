"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../public/upgradeCloud/puzzle.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import Expertise from "@/components/Expertise";

import infor from "../../../../public/upgradeCloud/infor.png";
import OracleDB from "../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../public/upgradeCloud/Dynamic.png";
import azure from "../../../../public/upgradeCloud/azure.png";
import WhySection from "@/components/WhySection";
import icon from "../../../../public/icon.png";
import microsoft from "../../../../public/upgradeCloud/microsoft.png";
import checkout from "../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../public/Power-App.png";
import Birst from "../../../../public/Birst-logo.png";
import dummy from "../../../../public/dummy.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Icon from "@mdi/react";
import { mdiBullseyeArrow, mdiEyeOutline, mdiTableLarge } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import uiPath from "../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Abstract from "@/components/Abstract";
import {
  Benefits,
  Capabilities,
  NewTestimonial,
  OfferingsSlider,
  Spotlight,
} from "@/components";
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
    imgUrl: "Industry-Spotlight-Retail",
    title: "Retail",
    desc: "",
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
    title: "Healthcare ",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 5,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 6,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];
const UseCases = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
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
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const InforGrid = [
  {
    _id: 1,
    title: "Infor LN (On Prem & On Cloud - MT)",
    icon: "dummy",
  },
  {
    _id: 2,
    title: "Factory Track",
    icon: "dummy",
  },
  {
    _id: 3,
    title: "Infor OS",
    icon: "dummy",
  },
  {
    _id: 4,
    title: "Infor CPQ",
    icon: "dummy",
  },
  {
    _id: 5,
    title: "Infor HCM ",
    icon: "dummy",
  },
  {
    _id: 6,
    title: "Infor WMS",
    icon: "dummy",
  },
  {
    _id: 7,
    title: "HxGN EAM",
    icon: "dummy",
  },
  {
    _id: 8,
    title: "Infor XM",
    icon: "dummy",
  },

  {
    _id: 9,
    title: "Infor CRM",
    icon: "dummy",
  },
  {
    _id: 10,
    title: "Infor Birst",
    icon: "dummy",
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
const supplylists = [
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
];

const upgradeCloud = [
  {
    _id: 1,
    title: "Migrate to the Cloud ",
    desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations.",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 2,
    title: "Migrate From a different ERP Platform to Infor LN",
    desc: "Experience seamless and transformative migration with data integrity for your business.",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 3,
    title: "Upgrade with Infor",
    desc: "Get access to enhanced innovation, business preferences and value.",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 4,
    title: "End-to-End Implementation",
    desc: "Streamlining every phase of the implementation, we provide the capability of successful and on-time delivery of Infor solution.",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 5,
    title: "Managed Services ",
    desc: "Managing every complex, time-consuming and resource-rigorous process and on demand maintenance of Infor application.",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 6,
    title: "Custom Development & Integrations",
    desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes.",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
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

const ul = [
  {
    _id: 1,
    title: "Business Applications",
    expandedTitle: "Business Applications On Cloud",
    bgImg: "bg1",
    bgColor: "",
    linksArr: [
      {
        _id: 1,
        title: "Microsoft Dynamics 365",
        url: "/",
      },
      {
        _id: 2,
        title: "Infor",
        url: "/",
      },
      {
        _id: 3,
        title: "Oracle",
        url: "/",
      },
      {
        _id: 4,
        title: "LS Retail",
        url: "/",
      },
    ],

    ctaBtn: false,
    ctaUrl: "/",
    cta: "Know More",
  },
  {
    _id: 2,
    title: "Business Applications",
    expandedTitle: "Business Applications On Cloud",
    bgImg: "",
    bgColor: "#101828",
    linksArr: [
      {
        _id: 1,
        title: "Microsoft Dynamics 365",
        url: "/",
      },
      {
        _id: 2,
        title: "Infor",
        url: "/",
      },
      {
        _id: 3,
        title: "Oracle",
        url: "/",
      },
      {
        _id: 4,
        title: "LS Retail",
        url: "/",
      },
    ],

    ctaBtn: true,
    ctaUrl: "/",
    cta: "Know More",
  },
  {
    _id: 3,
    title: "Business Applications",
    expandedTitle: "Business Applications On Cloud",
    bgImg: "bg3",
    bgColor: "",
    linksArr: [
      {
        _id: 1,
        title: "Microsoft Dynamics 365",
        url: "/",
      },
      {
        _id: 2,
        title: "Infor",
        url: "/",
      },
      {
        _id: 3,
        title: "Oracle",
        url: "/",
      },
      {
        _id: 4,
        title: "LS Retail",
        url: "/",
      },
    ],

    ctaBtn: false,
    ctaUrl: "/",
    cta: "Know More",
  },
];
const ConsiderRPA = [
  {
    _id: 1,
    title: "Azure SQL Data Ware Housing",
    desc: "Leverage seamless analysis of your business data and trust in our expertise to scale your insights.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
  },
  {
    _id: 2,
    title: "AWS Redshift",
    desc: "Optimize your data storage and queries while we provide the experience to enhance your data efficiency.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title=" Effective and Smooth Implementation to
        Elevate your Business Results "
        desc="Elevate your Business Results "
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Challenges
          // Services
          // Consulting Approach
          // Our Expertise
          // Why GITL

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Consulting Approach",
              link: "#ConsultingApproach",
            },
            {
              _id: 4,
              title: "Our Expertise",
              link: "#OurExpertise",
            },
            {
              _id: 5,
              title: "Why GITL",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview */}
      <>
        <div className={` w-full bg-white py-10`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col gap-x-10">
                  <h3 className="text-4xl mb-4 leading-[42px] font-bold">
                    Overview
                  </h3>
                  <p>
                    Our commitment is to make your transformation journey as
                    smooth as possible, guaranteeing that you attain your
                    ambitious results. That&apos;s why we build a holistic
                    viewpoint on your implementation and rollout project and
                    assure that your project is on time, exceeding your
                    expectations
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </>

      {/* Challengers Para */}
      <>
        <div id="Challenges" className={` w-full bg-white pb-20`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Knocking Business Challenges
                  </h3>
                  <p>
                    We offer strategic insights, specialized knowledge and
                    experience in helping businesses adapt, grow and thrive.
                  </p>
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

      {/* 3 column compone */}

      <>
        <div className={` w-full bg-[#fff] py-20`}>
          <div
            id="Services"
            className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] "
          >
            <div className=" mt-[5em] mb-[2em]">
              <div className="hidden">
                <h4
                  className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
                >
                  Paramount Business Consulting Services
                </h4>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                <h3 className="text-4xl leading-[42px] font-bold">
                  Paramount Business Consulting Services
                </h3>

                <p className="font-normal leading-[22px]">
                  We bring a wealth of industry knowledge and expertise to the
                  table and follow the collaborative journey that effectively
                  addresses your unique challenges, with the sole aim of your
                  success
                </p>
              </div>
            </div>
          </div>
          {/* 3 Cards */}
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1  sm:grid-cols-2  ">
            <div className="gap-x-8 flex flex-row justify-between">
              {[
                {
                  _id: 1,
                  title:
                    "Low Code, No Code Configurable Portals on Azure IoT or AWS IoT",
                  desc: "We bring a wealth of industry knowledge and expertise to the table and follow the",
                  cta: "Explore Solutions",
                  isNested: true,
                  ctaLink: "/",
                  tabData: [
                    {
                      _tabId: 1,
                      title:
                        "Remote Asset Tracking with Connected Field  Service & Predictive Analytics",
                      isBullet: true,
                      list: [
                        {
                          _listId: 1,
                          title: "Solution Feature",
                          li: [
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                          ],
                        },
                      ],
                    },
                    {
                      _tabId: 2,
                      title:
                        "Industry 4.0 Accelerator (IoT for shopfloor)   for implementation of IoT in shopfloor – Both for Discrete & Process Manufacturing",
                      isBullet: true,
                      list: [
                        {
                          _listId: 1,
                          title: "Solution Feature",
                          li: [
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                            "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                          ],
                        },
                      ],
                    },
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="bg-img-boxbg w-full py-14 px-24 ">
                  <div className="flex flex-col justify-center h-full">
                    <div className="">
                      {item.title ? (
                        <h3 className="text-[23px]  leading-[28px] mb-3 font-bold ">
                          {" "}
                          {item.title}
                        </h3>
                      ) : null}
                    </div>
                    <div className="">
                      {item.desc ? (
                        <p className="font-medium  text-[14px] leading-[22px]">
                          {" "}
                          {item.desc}
                        </p>
                      ) : null}
                    </div>
                    <div className="max-w-max flex justify-start items-center mt-5">
                      <button
                        onClick={() => openPopup(item.title, item.tabData)}
                        className="min-w-max text-[12px] leading-[15px] flex  py-2 items-center px-10  font-medium text-base bg-[#101828] text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                      >
                        {item.cta || "Explore Solutions"}
                        <Icon
                          path={mdiArrowTopRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto   pb-0 grid grid-cols-1 sm:grid-cols-2">
              {[
                {
                  _id: 1,
                  title: "Increase Productivity",
                  desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                  cta: "Contact Us",
                  ctaUrl: "/",
                  image: "/rpa/IncreasedProductivity.png",
                },
                {
                  _id: 2,
                  title: "Gain Accurate Outcomes",
                  desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
                  cta: "Contact Us",
                  ctaUrl: "/",
                  image: "/rpa/GainAccurateOutcomes.png",
                },
              ].map((item, index) => (
                <div
                  className={`flex flex-col sm:flex-row py-24 ${
                    index == 1 ? "bg-cardBg text-white" : ""
                  } bg-[#F2F4F7]`}
                  key={item._id}
                >
                  <div className="px-8 sm:justify-start sm:flex sm:flex-col w-full">
                    <p
                      className={`text-[#101828] font-bold text-[26px] leading-[32px] ${
                        index == 1 ? "text-white" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-[#475467] text-[14px] font-normal my-2 leading-[22px] ${
                        index == 1 ? "text-white" : ""
                      }`}
                    >
                      {item.desc}
                    </p>
                    <ul
                      className={`text-[#475467] mb-8 text-[14px] font-normal my-2 leading-[22px] ${
                        index == 1 ? "text-white" : ""
                      }`}
                    >
                      {[0, 1, 2, 3].map((i, index) => (
                        <li
                          className=" text-[14px] font-medium border-b-[1px] border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          key={index}
                        >
                          Lorem, ipsum.
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.ctaUrl}
                      className={`${
                        index == 1 ? "hidden" : ""
                      } w-fit text-[14px] leading-[15px] flex  py-2 items-center px-10  font-medium text-base bg-[#101828] text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105`}
                    >
                      {item.cta}{" "}
                      <Icon
                        path={mdiArrowTopRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 4 cards */}
          <div
            id=""
            className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-2 sm:grid-cols-4"
          >
            {[
              {
                _id: 1,
                title: "Increase Productivity",
                desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                cta: "Explore Service",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 2,
                title: "Gain Accurate Outcomes",
                desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
                cta: "Explore Service",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
              {
                _id: 3,
                title: "Ensure Compliance and Consistency",
                desc: "Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision, consistency, reducing the risk of noncompliance and the hassle of audits.",
                cta: "Explore Service",
                ctaUrl: "/",
                image: "/rpa/EnsureCompliance.png",
              },
              {
                _id: 4,
                title: "Optimize FTE Cost",
                desc: "Cut down the requirement for additional full-time equivalent employees (FTEs), leading to major cost savings in salaries, benefits and allied overheads.",
                cta: "Explore Service",
                ctaUrl: "/",
                image: "/rpa/OptimizeFTEcost.png",
              },
            ].map((item, index) => (
              <div
                className="flex flex-col sm:flex-row py-24  bg-[#F2F4F7]"
                key={item._id}
              >
                <div className="px-8 sm:justify-start sm:flex sm:flex-col w-full">
                  <div>
                    <Icon
                      path={mdiTableLarge}
                      size={2}
                      className="text-[#0745D3] mb-4"
                    />
                  </div>
                  <p className="text-[#101828] font-bold text-[26px] leading-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-2 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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

      {/* Infographics */}
      <>
        <div
          id="ConsultingApproach"
          className="max-w-screen-xl mx-auto px-[2rem] bg-white"
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
              <h3 className="text-4xl leading-[42px] font-bold">
                Consulting Approach
              </h3>
            </div>
          </div>
          <div className="mx-auto text-center w-[75%]">
            <Infographics src="/infographics/Infographic_ServicesDynamic.svg" />
          </div>
        </div>
      </>

      {/* Expertise */}
      <Expertise
        ribbon="Acing your Business Objectives"
        ribbonTxtWhite="true"
        title="The Hub of Expertise"
        desc="We are here to build edge and bring technology brilliance with the finest in industry. Driving the innovation path, we develop better results for business across the globe."
        arr={[
          {
            title: "15 +",
            desc: "Cloud Certified Professionals",
          },
          {
            title: "50 +",
            desc: "Cloud Deployments",
          },
          {
            title: "15 +",
            desc: "Cloud Certified Professionals",
          },
          {
            title: "50 +",
            desc: "Cloud Deployments",
          },
        ]}
      ></Expertise>

      {/* Why Section */}
      <WhySection
        ribbon="Let's Collaborate and Make it Happen"
        title="Why Choose GITL for AI and ML?"
        desc="It is our Hexagon EAM expertise , experience and commitment to excellence that sets us apart in a competitive landscape."
        arr={[
          {
            _id: 1,
            desc: "<span style='color: #4C6FFF;'> Deep understanding of your specific business domain </span> is crucial for creating AI and ML solutions that truly meet your needs",
            icon: "",
          },
          {
            _id: 2,
            desc: "<span style='color: #4C6FFF;'> Agile approach  </span> that keeps projects on cutting edge .",
            icon: "",
          },
          {
            _id: 3,
            desc: "Fully signed Non-Disclosure Agreement (NDA) to <span style='color: #4C6FFF;'> protect your sensitive information.</span>",
            icon: "",
          },
          {
            _id: 4,
            desc: "<span style='color: #4C6FFF;'> Exceed customer expectations</span> and deliver AI and ML solutions in most effective way.",
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
            ribbon: "ingsights",
            title: "Migrate your IT Infrastructure to the Cloud",
            desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Subscription */}
      <Subscription
        title="Are you Ready for Infor-driven growth?"
        blue="Let's get started!?"
        title2=""
        desc="Share your details now to optimize your business operations or implement industry-specific enhancements."
      />

      {/* Infotech weekly */}
      <>
        <div className="hidden">
          <InfotechWeeklyAlt />
        </div>
      </>
    </>
  );
};

export default page;
