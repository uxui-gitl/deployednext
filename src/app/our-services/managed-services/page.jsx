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
import { mdiBullseyeArrow, mdiEyeOutline } from "@mdi/js";
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
    title: "Cost effectiveness and Business Continuity",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Optimized Resources and Proactive Contingency management",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Business Process Aligned Service Delivery Model",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Standardized processes and practices",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Predictive approach and cohesive process",
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
    text: "Adapt to progressing business demands and swiftly implementing new strategies",
  },
  {
    id: 2,
    text: "Struggle with ineffective end-to-end support from current partners",
  },
  {
    id: 3,
    text: "Confront relentless technological advancements in the competitive landscape",
  },
  {
    id: 4,
    text: "Continual effort to update with new skills and effectively manage talent retention",
  },
  {
    id: 5,
    text: "Need for refinement in incident resolution approaches to facilitate effective tracking and management of issues.",
  },
  {
    id: 6,
    text: "Optimization requirement in crucial IT processes management for a more cohesive operational framework.",
  },
  {
    id: 7,
    text: "Inconsistent formats and irregular audits of documentation for business process",
  },
];
const supplylists = [
  {
    id: 1,
    text: "Improved end user satisfaction and experience with responsive IT environment and minimum interruptions.",
  },
  {
    id: 2,
    text: "Optimized business time and cost, helps in gaining precious time to focus on strategic actions.",
  },
  {
    id: 3,
    text: "Swift resolutions of IT challenges, reducing response time.",
  },
  {
    id: 4,
    text: "Impeccable performance, reliability & flexibility",
  },
  {
    id: 5,
    text: "‘Cater to the needs’ philosophy for providing best-fit solutions based on organization size.",
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
        title="Elevate your IT Support with our Comprehensive Managed Services for Enhanced Value and Seamless Digital Continuity"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Challenges
          // Offerings
          // Why Us
          // Expertise
          // Methodology

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 5,
              title: "Methodology",
              link: "#Methodology",
            },
            {
              _id: 2,
              title: "Offerings",
              link: "#Offerings",
            },
            {
              _id: 4,
              title: "Expertise",
              link: "#OurExpertise",
            },
            {
              _id: 3,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Abstract  */}
      <Abstract abstractdesc="Our Managed Services are driven by round-the-clock live helpdesk support so that you retrieve your spotlight on essential operations. To cater the diverse needs of businesses, we offer an extensive range of services including both strategic and operational support, instilling IT confidence within your organization. For more than 5 years, we have been offering support with multi-time zone Infor expertise in LN, OS, XM and ION to our customer - a global leader in dredging and maritime operations with 120 + entities involved within  their organization structure."></Abstract>

      {/* Overview */}
      <>
        <div className={`hidden w-full bg-white py-10`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col gap-x-10">
                  {/* <h4
                    className={` font-medium w-fit text-[#0745D3] uppercase ribbon`}
                  >
                    Infor CRM
                  </h4> */}
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Overview
                  </h3>
                  <p>
                    Our Managed Services are driven by round-the-clock live
                    helpdesk support so that you retrieve your spotlight on
                    essential operations. To cater the diverse needs of
                    businesses, we offer an extensive range of services
                    including both strategic and operational support, instilling
                    IT confidence within your organization. For more than 5
                    years, we have been offering support with multi-time zone
                    Infor expertise in LN, OS, XM and ION to our customer - a
                    global leader in dredging and maritime operations with 120 +
                    entities involved within their organization structure.
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
                    Challenges
                  </h3>
                  <p>
                    From navigating business process transformations to
                    addressing transactional support and operational
                    inefficiencies, absence of managed services hinders business
                    growth with numerous obstacles.
                  </p>
                </div>
              </div>
            </div>
          </>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
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

      {/* Infographics*/}
      <>
        <div
          id="ConsultingApproach"
          className="max-w-screen-xl mx-auto px-[2rem] bg-white"
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
              <h3 className="text-4xl leading-[42px] font-bold">
                How Can We Assist You?
              </h3>
              <p>
                Our team employs proactive monitoring to identify and address
                potential issues before they impact your operations, ensuring a
                seamless and uninterrupted roadmap.
              </p>
            </div>
          </div>
          <div className="mx-auto text-center w-[75%]">
            <Infographics src="/infographics/Infographic_ServicesDynamic.svg" />
          </div>
        </div>
      </>

      {/* Technology cover logo */}
      <>
        <div className={` w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="text-left ml-0 mb-4">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                  Technology Spectrum
                </h3>
                <p className="font-medium leading-[22px]  mx-auto">
                  We offer Managed Services across multiple technologies to
                  navigate the complexities of technological landscape and
                  ensure continual efficiency.
                </p>
              </div>
              {/* set 1 */}
              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Infor
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>
              {/* set 2 */}
              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Microsoft Dynamics
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>
              {/* set 3 */}
              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  LS Retail
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              {/* set 4 */}

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Oracle
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  AWS
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Azure
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  HxN EAM
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Java
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Dot Net
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>

              <div className="my-4 border-b-2">
                <h5 className=" font-bold text-[22px] leading-[28px] text-left">
                  Sharepoint
                </h5>
                <div className="flex flex-col sm:flex-row mb-5 justify-center items-center mx-auto gap-x-10 sm:gap-x-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Managed services card slider */}
      <>
        <div className={` w-full    py-12  `} id="Offerings">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Our Cornerstones of Managed Services
                  </h3>
                </div>
                <div className="hidden">
                  <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
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
          <div className="flex flex-col bg-[#F2F4F7] sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {UseCases.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className=" mx-2 bg-white sm:w-[320px] w-fit flex flex-col justify-between"
                >
                  <div className="p-5 w-fit ">
                    <div className="mb-4">
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
                    <h4 className="text-[20px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
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
                </div>
              );
            })}
          </div>
        </div>
      </>

      {/* Construction guy */}
      <>
        <div
          id="Methodology"
          className={`w-full pt-48 pb-12 bg-[url('/SupplySystem.png')] bg-center bg-cover sm:bg-contain `}
        >
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="text-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Why Managed Services/ Benefits of Managed Services
                </h3>
                <ul>
                  {supplylists.map((list) => (
                    <li key={list.id}>
                      {" "}
                      <p className="flex gap-4 mb-6 border-dashed border-[#70707070] border-b-2 pb-3 text-base leading-[22px]">
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
            {/* right */}
          </div>
        </div>
      </>

      {/* Infographics*/}
      <>
        <div
          id="ConsultingApproach"
          className="max-w-screen-xl mx-auto px-[2rem] bg-white"
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
              <h3 className="text-4xl leading-[42px] font-bold">
                How do We Make it Happen?
              </h3>
            </div>
          </div>
          <div className="mx-auto text-center w-[75%]">
            <Infographics src="/infographics/Infographic_ServicesDynamic.svg" />
          </div>
        </div>
      </>

      {/* WHy Section */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="We focus on managing all aspects of infrastructure and business applications, minimizing the need for in-house expertise and ensuring security and optimal system performance."
        arr={[
          {
            _id: 1,
            desc: "Trusted legacy of 25 years with experience of supporting 40+ Godrej & Boyce applications",
            icon: "",
          },
          {
            _id: 2,
            desc: "Prioritize incident resolution beyond SLAs and conduct thorough problem analysis using data and facts",
            icon: "",
          },
          {
            _id: 3,
            desc: "Ensure your IT adapts, scales and evolves with business dynamics",
            icon: "",
          },
          {
            _id: 4,
            desc: "Global and Ticket-based support with weekly reviews",
            icon: "",
          },
          {
            _id: 5,
            desc: "Resilient incident management and timely IT support",
            icon: "",
          },
          {
            _id: 6,
            desc: "Reduce direct employment while maintaining effective operations",
            icon: "",
          },
          {
            _id: 7,
            desc: "Access to specialized IT expertise and proactive solutions",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Expertise */}
      <Expertise
        ribbon="Acing your Business Objectives"
        ribbonTxtWhite="true"
        title="The Hub of Expertise"
        desc="We're here to build an edge and bring technology brilliance with the finest in the industry."
        arr={[
          {
            title: "25 +",
            desc: "Years of Excellence",
          },
          {
            title: "500 +",
            desc: "Global Reach with 500+ Satisfied Customers",
          },
          {
            title: "15000 +",
            desc: "Man Years of Expertise",
          },
        ]}
      ></Expertise>

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Managed Services Projects Highlights"
        desc=""
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Europe's Leading Marine Services Provider Selects LVDGI for Infor LN Managed & Rollout Services from Offshore",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://godrejinfotech.com/assets/pdf/case-studies/EuropeLeadingMarineService_InforLN.pdf",
          },
        ]}
      />

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Blog",
            title: "Managed Services: The Promised Land?",
            desc: "Reaching the Promised land is no mean feat. Not all can endure the journey but those who do, are surely the chosen ones. With this biblical analogy let’s try to decode Managed Services.",
            cta: "Know More",
            link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=10",
            imgUrl: "",
          },
        ]}
      />

      {/* Subscription */}
      {/* <Subscription
        title="Are you Ready for Infor-driven growth?"
        blue="Let's get started!?"
        title2=""
        desc="Share your details now to optimize your business operations or implement industry-specific enhancements."
      /> */}

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
