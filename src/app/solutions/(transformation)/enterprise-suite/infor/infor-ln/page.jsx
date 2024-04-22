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
import WhySection from "@/components/WhySection";

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
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import clsx from "clsx";
import Benefits from "@/components/Benefits";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Subscription from "@/components/Subscription";
import { Abstract } from "@/components";
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
    imgUrl: "AerospaceAndDefense",
    title: "Aerospace and Defense",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "IndustrialManufacturing",
    title: "Industrial Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Automotive",
    desc: "",
    imgUrl: "Automotive",
    url: "/",
  },
  {
    _id: 4,
    title: "Construction and Engineering",
    desc: "",
    imgUrl: "ConstructionEngineering",
    url: "/",
  },
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "DataConversionUtilityTool",
    title: "Data Conversion Utility Tool",
    desc: "",
    url: "/",
    list: [
      "Business Need - Data conversion from legacy systems are complex due to change in table structure and new requirements for maintaining same master data in upgraded systems.",
      "Solution - This utility tool enables conversion and relationship between legacy and new system’s data structure in simpler way and with required checks.",
    ],
  },
  {
    _id: 2,
    imgUrl: "PreBuiltBusinessReporting",
    title: "Pre-built business reporting",
    desc: "",
    url: "/",
    list: [
      "Business need - Time and efforts required to work on data analysis",
      "Solution - Add on solution that generates pre-configured reports to analyse business data and make insightful decisions on day-to-day basis.",
    ],
  },
  {
    _id: 3,
    title: "Infor Cloud Migration Planner",
    desc: "",
    imgUrl: "InforCloudMigrationPlanner",
    url: "/",
    list: [
      "Business Need - Complicated data migration from legacy systems that needs strategy and involves factors like validation, obsolete values, structural changes and application compatibility.",
      "Solution - Coded standard practices offering consistent results in every run. This tool reduces time and brings better quality results in the data migration process.",
    ],
  },
  {
    _id: 4,
    title: "Business Process Mapping and Customization.",
    desc: "",
    imgUrl: "BusinessProcessMapping",
    url: "/",
    list: [
      "Business need  Industry standard practices need to be configured from scratch.",
      "Solution - Tool with industry standard practices and experienced based add-ons that meets customer requirements with less efforts and time",
    ],
  },
];
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
    title: "End-to-End Implementation ",
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

const capabilities = [
  {
    _id: 1,
    icon: "MasterComplexity",
    title: "Master complexity",
    list: [
      "Better decision taking ability",
      "Promote Manufacturing excellence",
      "Exceptional customer experience fulfillment",
      "Efficiently manage people, technology, activities, information and resources",
    ],
  },
  {
    _id: 2,
    icon: "AgileSupplyChain",
    title: "Agile supply chain",
    list: [
      "Segment the supply base",
      "Measure and improve supplier performance",
      "Minimize supply chain risk",
      "Multimodal manufacturing capabilities",
      "Mass-customization capabilities",
      "Direct management of subcontracted production",
    ],
  },
  {
    _id: 3,
    icon: "ServiceLifecycleManagement",
    title: "Service lifecycle management",
    list: [
      "Service planning and scheduling",
      "Warranty and contract management",
      "Parts and inventory control",
      "Field service support",
      "Analytics for performance analysis",
    ],
  },
  {
    _id: 4,
    icon: "QualityManagement",
    title: "Quality management",
    list: [
      "Minimize product recalls and warranty claims",
      "Ensure business requirements",
      "Implement quality control",
      "Reduce rework and scrap costs",
    ],
  },
  {
    _id: 5,
    icon: "ProjectLifecycleManagement",
    title: "Project lifecycle management",
    list: [
      "Project planning, tracking and reporting",
      "Resource management",
      "Cost management",
      "Risk management",
    ],
  },
  {
    _id: 6,
    icon: "IntegrationWorkflow",
    title: "Integration and workflow",
    list: [
      "Infor ION enabling seamless integration",
      "Integrate and manage data workflow",
      "Manage data workflow",
      "Receive tasks and alerts across organization",
      "Mobile device access",
    ],
  },
  {
    _id: 7,
    icon: "BusinessIntelligenceInforBirst",
    title: "Business intelligence with Infor Birst",
    list: [
      "Integrated BI platform",
      "Financial and operational analytics",
      "Infor LN Analytics synergy",
      "Key performance indicators (KPIs) delivery",
      "Predictive analytics",
    ],
  },
  {
    _id: 8,
    icon: "ProductLifecycleManagement",
    title: "Product lifecycle management",
    list: [
      "Integrated product lifecycle management (PLM)",
      "Seamless workflows between engineering and manufacturing",
      "Impact analysis for engineering changes",
      "Integration with leading CAD solutions",
      "Collaboration between engineering and design teams",
    ],
  },
];
const page = () => {
  return (
    <>
      <EntIntro
        title="Infor LN - A Global ERP Cloud Solution for complex and large businesses "
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          // Capabilities
          // Industries
          // Benefits
          // Add-Ons
          // Why Us

          arr={[
            {
              _id: 1,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 2,
              title: "Industries",
              link: "#Industries",
            },
            {
              _id: 3,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 4,
              title: "Add-Ons",
              link: "#AddOns",
            },
            {
              _id: 4,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Our expertise is refined and matured over years of close engagement with multiple enterprises, thus ensuring that our customers derive maximum value from their Infor LN ERP. We offer end-to-end services across the application lifecycle (Plan-Build-Run) that enable us to design and deliver the right solutions on time and at the right cost."></Abstract>

      {/* Key Capabilites */}
      <>
        <div id="Capabilities" className={` w-full bg-[#fff] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#fff] flex items-start flex-col justify-between  relative">
              <>
                <div className={`w-full bg-[#fff] text-left`}>
                  <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                    <div className="bg-[#fff] text-left">
                      <h4
                        className={`font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        Key capabilities
                      </h4>
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          Driving Operational Brilliance
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          Infor LN stands out as a game-changer, renowned for
                          its robust capabilities, making it the top choice
                          among leading enterprises globally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </>
      <>
        <div className={` w-full bg-[#F2F4F7]`}>
          <div className="text-left  mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <div className="text-left p-5  ">
                <div className="flex justify-left flex-row items-start flex-wrap gap-4">
                  {capabilities.map((item) => (
                    <div key={item._id} className="w-full sm:w-[32%] mb-8">
                      <div>
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
                      <div>
                        <h4 className="text=[22px] font-semibold leading-[22px] my-4">
                          {item.title}
                        </h4>
                        <ul>
                          {item.list.map((i, index) => (
                            <li
                              key={index}
                              className="text-[16px] leading-[22px] font-normal text-[#475467] p-2 ml-5 list-disc"
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      <>
        <div id="Industries" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industries Served
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Understanding unique demands of each sector and capitalizing
                  Infor LN capabilities, we equip businesses to thrive in
                  competitive market.
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

      {/* Benefits */}

      <Benefits
        ribbon="Benefits of Infor LN"
        ribbonTxtWhite="true"
        title="Discover substantial benefits that Infor LN brings to the table, helping in competitive business landscape."
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title:
              "Access advanced global financials, supply chain, manufacturing, project and service lifecycle management features.",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title:
              "Empower the entire organization with modern user experience.",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title:
              "Acquire a top-notch global ERP solution that offers agility and quick value delivery.",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title:
              "Guarantee optimal industry business processes following global best practices.",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title:
              "Create transparent end-to-end processes encompassing sales, planning, production, procurement, financial management, inventory, logistics and after-sales service.",
          },
        ]}
      ></Benefits>

      {/* Industry Solutions Slider */}
      <>
        <div id="AddOns" className={` w-full bg-[#F2F4F7] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <>
                <div className={`w-full bg-[#F2F4F7] text-left`}>
                  <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                    <div className="bg-[#F2F4F7] text-left">
                      {/* <h4
                        className={`font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        Services for successful results
                      </h4> */}
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          Add On Solutions
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          Enhancing the functionalities of business applications, our specialized solutions intend to add value to business with handy support.
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
                            src={`/IndustrySolutionsSlider/${item.imgUrl}.png`}
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

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="Our substantial experience and expertise in the implementation of Infor LN solution, ensuring a business system that impeccably aligns with the unique requirements of your organization."
        arr={[
          {
            _id: 1,
            desc: "Serving one of the Asia's largest Infor LN user base",
            icon: "",
          },
          {
            _id: 2,
            desc: "Project managers take complete responsibility for delivering quality on time.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Proprietary tool integrating project management and communication, ensuring 100% transparency.",
            icon: "",
          },
          {
            _id: 4,
            desc: "Streamlined processes and enhanced efficiency offering significant advantages, especially for multi-site manufacturing enterprises.",
            icon: "",
          },
          {
            _id: 5,
            desc: "Enable businesses to make data-driven decisions, stay ahead of the competition, reduce costs and deliver top notch products and services to customers.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready to Accelerate"
        blue="Your Business Progression?"
        title2=""
        desc="Share your details and let our Infor LN experts accelerate your path to business growth."
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
