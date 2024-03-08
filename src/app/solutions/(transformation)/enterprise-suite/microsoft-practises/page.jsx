"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import Benefits from "@/components/Benefits";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import Awards from "@/sections/awards/Awards";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";

import infor from "../../../../../../public/upgradeCloud/infor.png";
import OracleDB from "../../../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../../../public/upgradeCloud/Dynamic.png";

import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import WhySection from "@/components/WhySection";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";

import Icon from "@mdi/react";
import Expertise from "@/components/Expertise";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Testimonial from "@/sections/testimonial/Testimonial";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import SpotlightImageGrid from "@/components/SpotlightImageGrid";

import styles from "./page.module.css";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import InsightSlider from "@/components/InsightSlider";
import { NewTestimonial } from "@/components";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
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
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 5,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];
const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title:
      "Microsoft Dynamics 365 Finance and Operations or Business Central? Which ERP investment will help you to take off your business?",
    desc: "Which business would not like to experience outstanding growth within a short span of time? But is that even feasible in this fast-paced world? We all understand that the needs of any organization are constantly evolving due to the dynamic nature of the market. And that is why a robust and agile platform is much needed for a business that can support these requirements. ",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
  {
    _id: 2,
    ribbon: "blog",
    title: "Upgrading Microsoft Dynamics AX to D365 Finance & Supply Chain",
    desc: "After successful client acquisitions and implementation projects across the globe, Microsoft Dynamics AX 2012 ERP is now entering its end-of-life phase. Microsoft has officially ended mainstream support for AX 2012 version since October 2021. Fortunately, there is a better, enhanced, and latest technology version i.e. MS Dynamics 365 Finance and Supply Chain ERP available to customers who are looking to upgrade their AX 2012 application.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Dealer Management",
    desc: "Benefit to valve manufacturing businesses from pre-configured business process mapping that seamlessly aligns with your unique requirements. Our work-around solutions for intricate business processes ensure smooth operations even in challenging scenarios.",
    url: "/",
    list: [
      "Streamline dealer interactions ",
      "Online order booking platform",
      "Access to invoice details  ",
    ],
  },
  {
    _id: 2,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Lease Process Management",
    desc: "Benefit to valve manufacturing businesses from pre-configured business process mapping that seamlessly aligns with your unique requirements. Our work-around solutions for intricate business processes ensure smooth operations even in challenging scenarios.",
    url: "/",
    list: [
      "Unit & Contract templates",
      "Fees structure and Contract signing ",
      "Automate amortization calculations",
      "Invoice scheduling and Finance management  ",
    ],
  },
  {
    _id: 3,
    title: "Gate Pass Management",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Returnable & non-returnable handling ",
      "RGP & NRGP cycles execution ",
      "Gate pass types for manufacturing and subcontracting  ",
    ],
  },
  {
    _id: 4,
    title: "Quality Management for Production Excellence",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Rigorous quality checks",
      "Preconfigured quality parameters",
      "Efficient item handling",
      "Quality parameter configuration till Bill of Material level  ",
    ],
  },
  {
    _id: 5,
    title: "Digital Certificate E-Signing",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Windows digital certificate retrieval ",
      "3rd-Party certificate integration for PDF E signature ",
      "Secure authentication management ",
      "Record activity logging ",
      "Device identification ",
      "Customizable signature position ",
    ],
  },
  {
    _id: 6,
    title: "Purchase Indent",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Standalone purchase indent creation  ",
      "Material request conversion into purchase indent ",
      "Purchase order generation ",
    ],
  },
  {
    _id: 7,
    title: "Material Request",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Material request generation from production orders ",
      "Material request conversion to tansfer order/ purchase indent ",
    ],
  },
  {
    _id: 8,
    title: "Payroll and HRMS",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Integration with HR and Financial systems ",
      "Adherence to local payroll regulations ",
      "Streamline payroll process ",
    ],
  },
  {
    _id: 9,
    title: "Off-line Call Centre & LS Loyalty",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Standard modules with LS Hospitality integration ",
      "Offline call center capabilities ",
      "LS Mobile loyalty features ",
    ],
  },
  {
    _id: 10,
    title: "Loyalty Management Mobile App",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Addition & redemption of points",
      "QR Code scanner integration",
      "Loyalty Point Ledger",
      "Arabic language support",
    ],
  },
  {
    _id: 11,
    title: "Employee & Candidate Management Web App",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
    list: [
      "Candidate Self-Service (CSS) for application processing",
      "HR Interaction with candidates",
      "Employee self service ",
      "Employee multi document handling",
      "Multi-level HR workflow  ",
    ],
  },
];
const UseCases = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementation & Rollout",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Upgrade & Migration",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Development & Customization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Training Workshop",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Managed Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Legacy Modernization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 8,
    title: "Bespoke Applications",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 9,
    title: "License sales and services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 10,
    title: "Data Insights",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const page = () => {
  return (
    <>
      <EntIntro
        title="Your Ace Microsoft Partner for Successful Business Outcomes"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section nav */}
      <>
        <SectionNav
          // Solutions
          // Services
          // Industry Expertise
          // AddOns
          // Testimonial

          arr={[
            {
              _id: 1,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Industry Expertise",
              link: "#IndustryExpertise",
            },
            {
              _id: 4,
              title: "AddOns",
              link: "#AddOns",
            },
            {
              _id: 5,
              title: "Testimonial",
              link: "#Testimonial",
            },
          ]}
        />
      </>

      {/* Overiew */}
      <>
        <div className={` w-full bg-[#F2F4F7] text-[#101828]`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl   mx-auto p-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className=" flex items-start flex-col justify-start mt-10  relative">
              <div className="">
                {/* <h4
                  className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
                >
                  MS PRactices
                </h4> */}
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Microsoft Solutions such as cloud, workplace & business
                  applications infused with our capability, enable businesses to
                  adapt, innovate and transform operations for excellence and
                  better customer satisfaction. With our Microsoft expertise of
                  20 years, we have been developing agile and resilient
                  businesses across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* MS Stack Slider */}
      <>
        <>
          <div id="Solutions" className={`w-full text-left bg-[#fff] pt-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
              <div className="bg-[#fff] text-left">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[95%]">
                    Delivering Full Stack Microsoft Solutions - Connecting
                    People, Data & Processes
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We bring together the power of Microsoft technologies
                    delivering cohesive ecosystems, enabling you to achieve
                    more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <div className={`w-full bg-[#fff] text-left`}>
          <div className="  max-w-screen  md:max-w-screen  mx-auto pt-5   ">
            <SpotlightImageGrid
              arr={[
                {
                  _id: 1,
                  title: "Azure",
                  expandedTitle: "Azure",
                  bgImg: "bg1",
                  bgColor: "",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Virtualization",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Backup & Disaster Recovery",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Azure IoT",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Business Applications on Azure",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "Networking",
                      url: "/",
                    },
                    {
                      _id: 6,
                      title: "Security & Governance",
                      url: "/",
                    },
                    {
                      _id: 7,
                      title: "Hybrid and multicloud Solutions",
                      url: "/",
                    },
                    {
                      _id: 8,
                      title: "Data and Analytics",
                      url: "/",
                    },
                  ],

                  ctaBtn: false,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 2,
                  title: "Microsoft Dynamics",
                  expandedTitle: "Microsoft Dynamics",
                  bgImg: "",
                  bgColor: "#101828",
                  linksArr: [
                    {
                      _id: 1,
                      title: "D365 Finance & Operations",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "D365 Business Central",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "D365 Commerce",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Dynamics AX",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "Dynamics Nav",
                      url: "/",
                    },
                  ],

                  ctaBtn: true,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 3,
                  title: "M 365",
                  expandedTitle: "M 365",
                  bgImg: "bg3",
                  bgColor: "",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Office apps and services",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Outlook and Exchange",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Cloud storage",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Device Security and Access Management",
                      url: "/",
                    },
                  ],

                  ctaBtn: false,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 4,
                  title: "Technologies",
                  expandedTitle: "Technologies",
                  bgImg: "bg1",
                  bgColor: "",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Dot Net",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "SQL",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Share Point",
                      url: "/",
                    },
                  ],

                  ctaBtn: false,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 5,
                  title: "Microsoft Fabric",
                  expandedTitle: "Microsoft Fabric",
                  bgImg: "",
                  bgColor: "#101828",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Data Factory",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Synapse Data Engineering",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Synapse5 Data Science",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Synapse Data Warehousing",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "Synapse Real-Time Analytics",
                      url: "/",
                    },
                    {
                      _id: 6,
                      title: "Data Activator",
                      url: "/",
                    },
                  ],

                  ctaBtn: true,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 6,
                  title: "Power Platform",
                  expandedTitle: "Business Applications",
                  bgImg: "bg3",
                  bgColor: "",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Power BI",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Power Apps",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Power Automate",
                      url: "/",
                    },
                  ],

                  ctaBtn: false,
                  ctaUrl: "/",
                  cta: "Know More",
                },
              ]}
            />
          </div>
        </div>
      </>

      {/* Microsoft Services */}
      <>
        <div
          className={`bg-ms-practise w-full  bg-[#9199A6]  py-32  `}
          id="Services"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Our comprehensive Microsoft services includes everything
                    that business requires to effectively digitize business
                    operations and customer relationship management.
                  </p>
                </div>
              </div>
              {/* right */}
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl md:max-w-screen-xl flex flex-col sm:flex-row gap-y-5 justify-center text-left  mb-5 mx-auto  p-5">
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className=" flex-grow"
            >
              {UseCases.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{ height: "auto" }}
                    key={item._id}
                    className="sm:w-full md:w-1/4 bg-white flex flex-col justify-between  mr-4  relative group"
                  >
                    <div
                      key={item._id}
                      className=" mx-2  w-fit flex flex-col justify-between"
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      <>
        <div id="IndustryExpertise" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector.
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

      {/* client logos */}
      <>
        <div className={` w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="text-left">
                <h3 className="text-left text-4xl leading-[42px] font-bold mb-5">
                  Partnerships
                </h3>
                <p className=" text-left font-medium leading-[22px]   mx-auto">
                  Our expansive worldwide network of market innovators enables
                  us to embrace breakthrough technologies and confront business
                  roadblocks effectively.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row my-5 justify-center items-center mx-auto gap-10 sm:gap-16">
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
      </>

      {/* Addon solution - Slider */}
      <>
        <div id="AddOns" className={` w-full bg-[#F2F4F7] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <>
                <div className={`w-full bg-[#F2F4F7] text-left`}>
                  <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                    <div className="bg-[#F2F4F7] text-left">
                      <h4
                        className={`font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        Experience the Next Level Efficiency
                      </h4>
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          GITL Microsoft Solutions
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          We design, develop and implement hundreds of custom
                          solutions and software applications using Microsoft
                          technologies across Azure, Microsoft 365, Dynamics 365
                          and Power Platform.
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
                            <h3 className="text-[22px] text-white font-bold  mb-5">
                              {item.title}
                            </h3>
                            <p className="text-white hidden leading-[20px] mb-5">
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
        ribbon=" Microsoft Dynamics Benefits"
        ribbonTxtWhite="true"
        title="Microsoft Promise for Your Business"
        desc="Driving transformational changes, Microsoft Dynamics minimizes operational cost and increases overall efficiency of employees and customers."
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "Platform scalability in accordance with business demands and render it suitable for varying sizes",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Live data analytics and insights from reporting, enabling smarter decisions",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Cloud or on-premises deployment options based on business requirements and preferences.",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Manage and nurture customer relationship from lead generation to post-sale support, improving customer satisfaction and retention.",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc:
              "Supply chain management functionalities for optimizing inventory, procurement and logistics processes that help to increase efficiency and cost savings.",
          },
          {
            _id: 6,
            icon: "benefits-ai-ml/healthcare",
            cardDesc:
              "Streamline financial processes like accounting, budgeting and forecasting, offering error-free insights for better financial management. ",
          },
        ]}
      ></Benefits>

      {/* Awards n achievements */}
      <div className="">
        <Awards />
      </div>

      {/* Why Infotech */}
      <WhySection
        ribbon="Ideal Choice as Your Microsoft Partner"
        title="Why Godrej Infotech?"
        desc="Prioritizing authenticity in our solutions and service delivery, we have established trustworthiness in the global marketplace with our high-level technical capabilities aligned with Microsoft's standards."
        arr={[
          {
            _id: 1,
            desc: "20 years of experience with deep understanding of Microsoft Solutions",
            icon: "",
          },
          {
            _id: 2,
            desc: "Proactive support to clients, ensuring needs are met with attentive assistance",
            icon: "",
          },
          {
            _id: 3,
            desc: "Project quality is ensured through milestone-wise quality checks performed by a dedicated quality team",
            icon: "",
          },
          {
            _id: 4,
            desc: "Actively incorporate customer feedback obtained from unbiased third-party sources",
            icon: "",
          },
          {
            _id: 5,
            desc: "Stability extends to both users and consultants involved in the project",
            icon: "",
          },
          {
            _id: 6,
            desc: "Dedicated team for comprehensive project audits",
            icon: "",
          },
          {
            _id: 7,
            desc: "Extensive domain expertise of Microsoft solutions",
            icon: "",
          },
          {
            _id: 8,
            desc: "Rigorous testing is conducted by standalone tester team to guarantee solution excellence",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Expertise */}
      <Expertise
        ribbon="Acing your Business Objectives"
        ribbonTxtWhite="true"
        title="Microsoft Excellence with GITL"
        desc="We are here to build an edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe.  "
        arr={[
          {
            title: "250 +",
            desc: "Microsoft Dynamics Projects Delivered",
          },
          {
            title: "150 +",
            desc: "Projects migrated to Microsoft",
          },
          {
            title: "1000 +",
            desc: "Management of Microsoft Licenses",
          },
          {
            title: "20",
            desc: "years of experience in Microsoft platform",
          },
        ]}
      ></Expertise>

      {/* Seamless Seamless Implementation to Customer Centric Support
       */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px] sm:text-[68px] sm:leading-[84px] leading-[54px] mb-3 font-bold ">
                  Seamless Implementation to Customer Centric Support
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  Employing proven methodologies such as Waterfall, Agile and
                  Rapid, we tailor our implementation strategy to meet the
                  distinct requirements of each project. The goal is to deliver
                  optimal system performance. In instances of system issues, our
                  team meticulously assesses the impact on business processes
                  and prioritizes swift resolutions. Further, our adaptable
                  support services offer both dedicated and shared teams to
                  effectively address individual customer needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

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
              "Director of Finance, Wildlife Conservation International NGO based in India",
            thumbnail: "1",
            description:
              "We've implemented LS Retail Solution, streamlining our store and backend operations. Our association with Godrej Infotech is rooted in shared values—simplicity, affordability and top-notch quality. I look forward to continuing association with GITL as we advance our vision of tech-driven business simplicity.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Director of Finance, Wildlife Conservation International NGO based in India",
            thumbnail: "1",
            description:
              "We're delighted with the successful D365 implementation executed by talented GITL team. Their collaboration with our team was seamless, ensuring timely delivery. They have dedicated significant effort to grasp our distinctive needs, reinforcing our satisfaction.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "Project Manager, Investment Holding Company in Riyadh & Dubai",
            thumbnail: "1",
            description:
              "Congratulations to GITL team for successful go-live of Microsoft Business Central SAAS and KSA GITL Add-on HR & Payroll Solution. The key achievement was the seamless integration between Business Central and bio-time attendance machine. Our material requisition efficiency has improved by 66%, purchase order processing time is cut down by 79% and boosted invoicing productivity by 60%.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Elevating Customer Experience with Cloud"
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

            description: "Middle East-based Electrical Products Manufacturer",
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

      {/* Blog */}
      <BlogSlider arr={blogData} />

      {/* Subscription */}
      <Subscription
        title="Ready to Streamline Your Business Operations? "
        blue=" "
        title2=""
        desc="Talk To Our Experts to discuss your requirements "
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
