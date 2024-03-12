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
    text: "Inadequate understanding of business and customer perspectives",
  },
  {
    id: 2,
    text: "Existing or upcoming market conditions ambiguity",
  },
  {
    id: 3,
    text: "Discord between business vision and strategy",
  },
  {
    id: 4,
    text: "Innovation challenges and new capabilities deployment",
  },
  {
    id: 5,
    text: "Absence of enterprise-wide adaptability",
  },
  {
    id: 6,
    text: "Ineffectual strategy implementation",
  },
  {
    id: 7,
    text: "Change management dissatisfaction",
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

const businessConsultingData = [
  {
    _id: 1,
    title: "Consulting Offerings",
    desc: "",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
    listItem: [
      "Digital Model Strategy",
      "Operation Transformation",
      "Value Chain",
      "Workplace",
    ],
  },
  {
    _id: 2,
    title: "Consulting Process",
    desc: "",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
    listItem: [
      "Business Audit",
      "Prioritize Issues and Analysis Plan",
      "Conduct Analysis",
      "Solution selection",
      "Roadmap designing",
    ],
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title=" Building Strategic Opportunities and Business Success Stories with Our Consulting Services"
        desc=""
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
                    Achieving transformation requires strategic action plan,
                    technological advancements and a comprehensive understanding
                    of evolving stakeholder needs. A purpose centric business
                    strategy plays a key role. Our strategic consultant team
                    specializes in designing digital programs that enables
                    enterprises to prepare for the future. With a proven history
                    of executing over 1000 large-scale digital ecosystem
                    projects, we are committed to maximizing your business
                    potential. Our trusted consulting practice emphasizes
                    collaborative efforts to drive intelligent optimization and
                    manage change management effectively.
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
                    We help executive leadership in navigating critical
                    challenges, process complexity and developing future-ready
                    organization.
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
                  Business Consulting Services
                </h4>
              </div>
              {/* <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                <h3 className="text-4xl leading-[42px] font-bold">
                  Business Consulting
                  <br />
                  Services
                </h3>

                <p className="font-normal leading-[22px]">
                  With deep digital experience and broad global reach we help
                  enterprises to embrace the digital future that enhances
                  decision making across the organisation.
                </p>
              </div> */}
            </div>
          </div>
          {/* 3 Cards */}
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1  sm:grid-cols-2  ">
            <div className="gap-x-8 flex flex-row justify-between">
              {[
                {
                  _id: 1,
                  title:
                    "Business Consulting Services",
                  desc: "With deep digital experience and broad global reach we help enterprises to embrace the digital future that enhances decision making across the organisation.",
                  cta: "",
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
                        <h3 className="text-4xl  leading-[42px] mb-3 font-bold ">
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
                    {/* <div className="max-w-max flex justify-start items-center mt-5">
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
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto   pb-0 grid grid-cols-1 sm:grid-cols-2">
              {businessConsultingData.map((item, index) => (
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
                      {item.listItem.map((list, index) => (
                        <li
                          className=" text-[14px] font-medium border-b-[1px] border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          key={index}
                        >
                          {list}
                        </li>
                      ))}
                    </ul>
                    {/* <Link
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
                    </Link> */}
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
                title: "Automation and Data Consulting",
                desc: "",
                cta: "",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
                offerings: [
                  "AI and RPA",
                  "Data Infrastructure Consulting",
                  "Data and decision intelligence",
                ],
                process: [
                  "Discovery",
                  "Requirement Analysis",
                  "Strategic Plan Map",
                  "Solution Design and Customization",
                  "Proof of Concept Development",
                  "Cloud Consulting",
                ],
              },
              {
                _id: 2,
                title: "Cloud Consulting Services",
                desc: "",
                cta: "",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
                offerings: [
                  "Cloud Architecture",
                  "Containerization",
                  "Cloud Optimization",
                ],
                process: [
                  "Cloud adoption strategy and roadmap",
                  "Cloud architecture evaluation",
                  "Cloud capacity plan",
                ],
              },
              {
                _id: 3,
                title: "Transformation Consulting",
                desc: "",
                cta: "",
                ctaUrl: "/",
                image: "/rpa/EnsureCompliance.png",
                offerings: [
                  "Enterprise Architecture",
                  "Business Process",
                  "Customer Experience",
                  "Application Modernization",
                  "E commerce Strategy",
                ],
                process: [
                  "Initial assessment and Strategy development",
                  "Skill gap evaluation and Change management plan",
                  "Operation model transformation design",
                  "Technology and Data asset transformation design",
                ],
              },
              {
                _id: 4,
                title: "Cybersecurity consulting",
                desc: "",
                cta: "",
                ctaUrl: "/",
                image: "/rpa/OptimizeFTEcost.png",
                offerings: [
                  "Enterprise security architecture design and re-design",
                  "Information Security Strategy and Design",
                  "Policy and Plan Development",
                ],
                process: [
                  "Initial Risk Management",
                  "Gap Analysis and Security strategy development",
                  "Security Policy and Procedure Development",
                ],
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
                  <p className="text-[#101828] font-bold text-[24px] leading-[28px]">
                    {item.title}
                  </p>
                  <div className="text-[#475467] text-[14px] font-normal my-2 leading-[22px]">
                    <ul>
                      <h2 className="font-bold">Offerings</h2>

                      {item.offerings.map((list, index) => (
                        <li
                          className=" text-[14px] font-medium border-b-[1px] border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          key={index}
                        >
                          {list}
                        </li>
                      ))}
                    </ul>
                    <br />
                    <ul>
                      <h2 className="font-bold">Process</h2>

                      {item.process.map((list, index) => (
                        <li
                          key={index}
                          className=" text-[14px] font-medium border-b-[1px] border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                        >
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    {item.cta}{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link> */}
                </div>
              </div>
            ))}
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
            title: "500 +",
            desc: "Consultants around the world",
          },
          {
            title: "Zero",
            desc: "Surprise cost overruns",
          },
          {
            title: "200 +",
            desc: "Consultants engage in specialized training courses quarterly",
          },
        ]}
      ></Expertise>

      {/* Infographics */}
      <>
        <div
          id="ConsultingApproach"
          className="max-w-screen-xl mx-auto px-[2rem] bg-white"
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
              <h3 className="text-4xl leading-[42px] font-bold">
                Consulting Service Approach
              </h3>
              <p>
                Our consulting service embeds Automation, Cloud and
                Transformation into the blueprint of organisation, translating
                ambitions into milestones, enabling them to thrive in a dynamic
                competitive landscape with vision, and insights.
              </p>
            </div>
          </div>
          <div className="mx-auto text-center w-[75%]">
            <Infographics src="/infographics/Infographic_ServicesDynamic.svg" />
          </div>
        </div>
      </>

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Blog",
            title: "Optimizing Operations",
            desc: "A Holistic Approach to Process Improvement One of the most effective ways to achieve this is through process improvement strategies. By refining workflows, eliminating bottlenecks, and streamlining operations, businesses can enhance productivity, reduce costs and drive growth. In this blog, we'll explore the importance of process improvement and discuss key strategies for implementing it effectively.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Why Section */}
      <WhySection
        ribbon="Why Godrej Infotech"
        title="The Distinctive Edge"
        desc="We act as strategic IT partner to ambitious enterprises on their journey towards business progression."
        arr={[
          {
            _id: 1,
            desc: "Strong legacy of our parent group – Godrej & Boyce which has succeeded for <span style='color: #4C6FFF;'>more than 125 years</span> .",
            icon: "",
          },
          {
            _id: 2,
            desc: "Shared DNA of engineering expertise from our parent group – Godrej &Boyce featuring <span style='color: #4C6FFF;'>$4.1 Bn revenue.</span> .",
            icon: "",
          },
          {
            _id: 3,
            desc: "Long-term global relationships built on <span style='color: #4C6FFF;'> trust, reliability and collaboration.</span>",
            icon: "",
          },
          {
            _id: 4,
            desc: "<span style='color: #4C6FFF;'> Industry-focused teams</span>  of brilliant brains executing time-tested practices of excellence.",
            icon: "",
          },
          {
            _id: 5,
            desc: "Holistic ecosystem including scalable deployment, support services and diverse portfolio of <span style='color: #4C6FFF;'> ERPs and digital solutions.</span>",
            icon: "",
          },
          {
            _id: 6,
            desc: "Responsive approach and defined processes that set <span style='color: #4C6FFF;'> high standards.</span>",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready to Discuss with our"
        blue=" Expert Consultant?"
        title2=""
        desc="Share your details to discover how we can help you achieve better results."
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
