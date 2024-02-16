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

      {/* Overview */}
      <>
        <div className={` w-full bg-white py-10`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col gap-x-10">
                  <h4
                    className={` font-medium w-fit text-[#0745D3] uppercase ribbon`}
                  >
                    Infor CRM
                  </h4>
                  <h3 className="text-4xl leading-[42px] font-bold">
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
        <div className={` w-full bg-white pb-20`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Challenges Encountered by Businesses
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

      {/* Construction guy */}
      <>
        <div className={` w-full  pt-32`}></div>
        <div
          className={`w-full pt-48 pb-12 bg-[url('/SupplySystem.png')] bg-center bg-cover sm:bg-contain `}
        >
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="text-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor Intelligent Supply System
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

      {/* Managed services card slider */}
      <>
        <div className={` w-full    py-12  `} id="productivity">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Microsoft Services
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
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
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

      {/* Technology cover logo */}
      <>
        <div className={` w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="text-left ml-0 mb-4">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                  Technology Coverage
                </h3>
                <p className="font-medium leading-[22px]  mx-auto">
                  Our expansive worldwide network of market innovators enables
                  us to embrace breakthrough technologies and confront business
                  roadblocks effectively.
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
                  Microsoft
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
                  Digital
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
                  Infrastructure
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

      {/* Left right bg cart column card */}
      <>
        <div className={` w-full bg-[#FFF] py-10`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor WMS Industry Solutions
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
        <div
          className={`w-full pt-48 pb-12 relative bg-cover`}
          style={{ backgroundImage: `url('/bgEcomScreen.png')` }}
        >
          {/* Overlay for background image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="max-w-screen-xl md:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-10 justify-center">
            {[
              {
                _id: 1,
                title: "Retail",
                list: [
                  {
                    _id: 1,
                    title: "Digital stores & connected associates",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Point-of-Sale (POS) modernization",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title: "Client Eling, Assisted sales",
                    url: "/",
                  },
                  {
                    _id: 4,
                    title:
                      "Customer experience (CX) transformation & measurement",
                    url: "/",
                  },
                ],
                cta: "Let's Connect",
                ctaUrl: "#contact",
              },
              {
                _id: 2,
                title: "3 PL Logistics",
                list: [
                  {
                    _id: 1,
                    title: "Digital stores & connected associates",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Point-of-Sale (POS) modernization",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title: "Client Eling, Assisted sales",
                    url: "/",
                  },
                  {
                    _id: 4,
                    title:
                      "Customer experience (CX) transformation & measurement",
                    url: "/",
                  },
                ],
                cta: "Know More",
                ctaUrl: "#contact",
              },
            ].map((item, index) => {
              return (
                <div key={item._id} className="mx-5 text-white relative">
                  <div className=" w-fit relative z-10">
                    <h4 className="text-[22px] font-bold  leading-[28px] text-[#fff]">
                      {item.title}
                    </h4>
                  </div>
                  <div>
                    <ul className="my-4">
                      {item.list.map((listItem) => (
                        <li
                          key={listItem._id}
                          className="border-b-2 w-fit border-[#DBDBDB] py-2"
                        >
                          <Link
                            href={listItem.url}
                            className="text-[#fff] text-[14px] font-medium leading-[16px] w-fit flex transition-all hover:opacity-75"
                          >
                            {listItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.ctaUrl}
                      className="text-[#101828] bg-[#F5F5F5] py-4 px-8 mt-4 text-[16px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}
                      <Icon
                        path={mdiArrowTopRight}
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

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Elevating Customer Experience with Cloud  "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
            thumbnail: "1",

            description: "Non-government Association of Indian Industries ",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 2,
            title:
              "Cut down environment development cost by 60% and business performance boost of 5 sister companies with On-Cloud D365 F&O implementation ",
            thumbnail: "2",

            description: " Middle East-based Electrical Products Manufacturer ",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 3,
            title:
              "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
            thumbnail: "3",

            description: "Coffee Brand Distributor in Egypt and Middle East",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

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

      {/* WHy Section */}
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
