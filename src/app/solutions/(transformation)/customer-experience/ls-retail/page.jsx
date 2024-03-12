"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import Expertise from "@/components/Expertise";
import WhySection from "@/components/WhySection";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiBullseyeArrow, mdiTableLarge } from "@mdi/js";
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
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Abstract from "@/components/Abstract";
import { useState } from "react";
import { Benefits, NewTestimonial } from "@/components";

const CoreCapabilitySlider = [
  {
    _id: 1,
    title: "Retail ( Hypermarket, supermarket, Electronics, Fashion, Health & Beauty, Specialty stores)",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Point of Sale",
        url: "/",
      },
      {
        title: "Loyalty Management",
        url: "/",
      },
      {
        title: "Replenishment",
        url: "/",
      },
      {
        title: "eCommerce Integration",
        url: "/",
      },
      {
        title: "Store Operations",
        url: "/",
      },
      {
        title: "Offers & Promotion",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Duty-Free and Travel Retail ",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Multi-currency cash back",
        url: "/",
      },
      {
        title: "Transit Bank guarantee management",
        url: "/",
      },
      {
        title: "Customer quota-based offers",
        url: "/",
      },
      
    ],
  },
  {
    _id: 3,
    title: "Hospitality",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Restaurant POS ( Fine dining, Take away, QSR and more.)",
        url: "/",
      },
      {
        title: "Kitchen Display System (KDS)",
        url: "/",
      },
      {
        title: "Guest Loyalty",
        url: "/",
      },
      {
        title: "Recipe Management",
        url: "/",
      },
      {
        title: "Split Bill & Table Transfer",
        url: "/",
      },
    ],
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
const ChoiceSlider = [
  {
    _id: 1,
    title: "Manufacturing",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Retail",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Project",
    imgUrl: "4",
    url: "/",
  },
  {
    _id: 5,
    title: "Professional Services",
    imgUrl: "5",
    url: "/",
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
const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedTabContent, setSelectedTabContent] = useState([]);
  const [selectedTabContentListID, setSelectedTabContentListID] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const openPopup = (title, tab) => {
    setSelectedTitle(title);
    setIsPopupOpen(true);
    setSelectedTabContent(tab);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleTabClick = (index, _tabId) => {
    // console.log(index["_tabId"]);
    setActiveTab(index["_tabId"] - 1);
    setSelectedTabContentListID(_tabId);
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

  const upgradeCloud = [
    {
      _id: 1,
      title: "Point of Sale (POS) System",
      desc: "Intuitive interfaces, supporting various payment methods and streamlined operations for a hassle-free checkout experience.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
    },
    {
      _id: 2,
      title: "Inventory Management",
      desc: "Capabilities include real-time tracking of stock levels, replenishment management and inventory optimization across multiple locations.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
    },
    {
      _id: 3,
      title: "Omnichannel Retailing",
      desc: "Integrating online and offline channels seamlessly ensuring a consistent experience for shoppers across all touchpoints.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
    },
    {
      _id: 4,
      title: "Customer Relationship Management (CRM)",
      desc: "Build and maintain customer relationships through personalized experiences and manage customer profiles, preferences, targeted marketing campaigns and loyalty programs to drive engagement.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
    },
    {
      _id: 5,
      title: "Retail Analytics",
      desc: "Powerful analytics tools for sales trends, monitoring KPIs and identifying growth opportunities to optimize performance.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
    },
    {
      _id: 6,
      title: "Back Office Management",
      desc: "Features include financial management, purchasing, and vendor management. Streamlining processes and ensuring compliance enables retailers to work hassle free.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
      
    },
    {
      _id: 7,
      title: "Flexible Customization",
      desc: "From adding features to modifying workflows and integrating with third-party systems, retailers can adapt to changing requirements and stay competitive.",
      cta: "",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        
      ],
      
    },
  ];

  return (
    <>
      <EntIntro
        title="Simplifying and Streamlining Retail Management with Front & Backend Unified Solution"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Our Offerings
          // LS Retail Features
          // Solutions
          // Benefits
          // Why GITL

          arr={[
            {
              _id: 1,
              title: "Our Offerings",
              link: "#OurOfferings",
            },
            {
              _id: 2,
              title: "LS Retail Features",
              link: "#LSRetailFeatures",
            },
            {
              _id: 3,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 5,
              title: "Why GITL",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Facilitating efficient management for omnichannel operations, LS Retail is a distinguished and state-of-the-art business application with remarkable functionalities and extensive configurability options. specifically tailored for the retail and hospitality sectors of all sizes."></Abstract>

      {/* our offerings left right para only */}
      <div
        id="OurOfferings"
        className={`text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]`}
      >
        <div className=" mt-[5em] mb-[2em]">
          <div className={`  grid-cols-1 md:grid-cols-2 gap-4`}>
            <h3 className="text-4xl leading-[42px] font-bold text-center">
              Our Offerings
            </h3>

            <p className="font-normal leading-[22px]">Delivering experience of unified commerce with advanced retail management applications and ensuring personalized journey for every shopper.</p>
          </div>
        </div>
        <motion.div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {[
            {
              id: 1,
              title: "LS Central for Retail",
              thumbnail: "1",
              description:
                "Seamlessly integrated cloud-based platform designed to optimize the management of retail enterprise and enhance the performance of individual store locations.",
              tags: [""],
              cta: "",
              link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
            },
            {
              id: 2,
              title: "LS Central for Restaurants",
              thumbnail: "1",
              description:
                "Comprehensive platform for restaurants, pubs, cafes, food halls and other food service businesses to manage everything from tableside ordering to inventory, kitchen operations and more.",
              tags: [""],
              cta: "",
              link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
            },
          ].map((cases, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className={`flex justify-start items-start flex-col w-full mb-5 gap-4 h-[350px] overflow-hidden`}

              // className={`${styles["iw-card"]} item`}
            >
              <div className={` overflow-hidden w-[100%] h-auto relative`}>
                <Image
                  // src={`/project-${cases.thumbnail}.png`}
                  src={
                    cases.thumbnail
                      ? `/project-${cases.thumbnail}.png`
                      : `/project-placeholder.png`
                  }
                  alt={`${cases.tags}`}
                  className="w-full hover:scale-125 transition-transform duration-[0.75s] ease-[ease]"
                  width="315"
                  height="200"
                  // className="w-full h-auto lg:w-315 lg:h-200"
                />
                <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                  <p
                    className={`text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium  ${
                      cases.tags == "" ? "hidden" : "block"
                    } `}
                  >
                    {`${cases.tags}`}
                  </p>
                </div>
              </div>
              <div className={`${styles["iw-card-content"]}`}>
                {cases.subtitle && (
                  <p
                    className={`my-2  text-[#101828] font-semibold leading-[22px] text-[16px]`}
                  >
                    {cases.subtitle}
                  </p>
                )}
                <p
                  className={`${
                    styles["iw-card-content-desc "]
                  } text-clip  text-[#101828]  mb-3 font-semibold text-sm ${
                    cases.description.length <= 0 ? "hidden" : "block"
                  }`}
                >
                  {cases.title}
                </p>
                <p
                  className={`text-base mt-2 font-normal  pb-2 leading-[22px] text-[#101828]`}
                >
                  {" "}
                  {cases.description}
                </p>

                <p className={styles["iw-card-content-link-wrap"]}>
                  <Link
                    href={`${cases.link}`}
                    className={`${styles["iw-card-content-link"]} flex items-center hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                  >
                    {cases.cta}
                    <span className=" inline-flex">
                      <Icon
                        path={mdiArrowRight}
                        style={{
                          marginLeft: "0.5em",
                          width: "1rem",
                          fontSize: "14px",
                        }}
                        className="cta-know-more"
                      />
                    </span>
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Retail excellence grid - Features */}
      <>
        <div id="LSRetailFeatures" className={`w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="md:flex-row flex-col flex text-left gap-x-10">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                  LS Retail Features and Functionalities
                </h3>
                <p className="font-medium leading-[22px] md:w-[80%] mx-auto"></p>
              </div>
            </div>
          </div>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  px-[2rem]">
            <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 grid-flow-row gap-5 md:gap-10 mx-auto ">
              {upgradeCloud.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={clsx(
                      `col flex justify-between flex-col bg-[#320A53] text-white bg-cover px-14 py-16`,
                      {
                        " bg-[#344CA9]": item._id === 2 || item._id === 6,
                        " bg-[url('/gradient-1.png')]": item._id === 1,
                        " bg-[url('/gradient-2.png')]": item._id === 3,
                      }
                    )}
                  >
                    <div>
                      <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                        {item.title}
                      </h4>
                      <p className="text-base leading-6 font-semibold">
                        {item.desc}
                      </p>
                    </div>
                    {item.cta && (
                      <button
                        onClick={() => openPopup(item.title, item.tabData)}
                        className="flex text-[14px] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                      >
                        {item.cta}
                        <span>
                          <Icon
                            path={mdiArrowRight}
                            style={{
                              marginLeft: "0.5em",
                              width: "1rem",
                              fontSize: "14px",
                            }}
                            className="cta-know-more"
                          />
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Popup */}
          {isPopupOpen && (
            <div className="fixed w-full inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex-col flex items-center justify-center">
              <div className="bg-[#ededed] w-full  max-w-screen-xl md:max-w-screen-xl md:h-auto max-h-[66%]">
                <div className="p-4 md:p-8">
                  <div>
                    <button
                      onClick={closePopup}
                      className="text-blue-500 flex items-center gap-2 mb-4"
                    >
                      <span>
                        <Icon
                          path={mdiArrowLeft}
                          style={{
                            width: "1rem",
                            fontSize: "14px",
                          }}
                          className="cta-know-more"
                        />
                      </span>{" "}
                      Back to solutions
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedTitle}</h3>
                </div>
                {/* Tabs */}
                <div>
                  <div>
                    <div className="px-4 pt-4 md:px-8 md:pt-8 flex justify-start gap-4">
                      {selectedTabContent.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => handleTabClick(item, item._tabId)}
                          className={`cursor-pointer px-4 py-2 ${
                            index === activeTab
                              ? "text-blue-500 border-b-2 border-blue-500"
                              : "border-b-2"
                          }`}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                    {/* Tab Content */}
                    <div className="">
                      <div className="bg-white w-full px-4 md:px-8 py-8 md:py-16 max-w-screen-xl md:max-w-screen-xl ">
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                          {selectedTabContent.map((tabContent, index) => (
                            <>
                              {tabContent._tabId == selectedTabContentListID
                                ? tabContent.list.map((item, index) => (
                                    <div
                                      key={index}
                                      className="min-w-[300px] w-full md:w-2/3 bg-[#ededed]  inline-flex"
                                    >
                                      <div className="flex p-4 md:p-8 flex-col">
                                        <p className="text-[18px] font-semibold mb-4">
                                          {item.title}
                                        </p>

                                        {/* tab nested Li goes here */}
                                        <ul className=" list-disc ml-4">
                                          {item.li.map((list, index) => (
                                            <li key={index}>{list}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>

      {/* targeted solutions - Core Capabilities */}
      <>
        <div id="Solutions" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5  ">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Godrej Infotech Targeted Solutions for Industries
                </h3>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We are committed to bringing the power of AI to your
                    business operations, providing tailored solutions that
                    drives business proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` pt-48 pb-12 bg-[url('/bgEcomScreen.png')] flex justify-center items-center w-full`}
          >
            <div className=" md:max-w-screen-xl w-full text-left  mb-5 mx-auto p-5   px-[2rem]">
              <div className={` w-full flex pb-12 `}>
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
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Pagination]}
                  className=" flex-grow"
                >
                  {CoreCapabilitySlider.map((item, index) => {
                    return (
                      <SwiperSlide
                        style={{ height: "auto" }}
                        key={item._id}
                        className="sm:w-full md:w-1/3 flex flex-col justify-between  mr-4  relative group"
                      >
                        <motion.div
                          key={item._id}
                          variants={fadeInAnimationVariant}
                          initial="initial"
                          whileInView="animate"
                          viewport={{
                            once: true,
                          }}
                          custom={index}
                          className={`  mx-2 flex flex-col h-full `}
                        >
                          <div className=" bg-white p-5">
                            <div>
                              <Icon
                                path={mdiTableLarge}
                                size={2}
                                className="mb-4"
                              />
                            </div>
                            <div>
                              <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                                {item.title}
                              </p>
                            </div>
                            <div>
                              <ul className="mt-4 mb-8">
                                {item.links.map((list, index) => (
                                  <li
                                    key={index}
                                    className=" border-b-2 border-[#DBDBDB] py-2 "
                                  >
                                    <Link
                                      href={list.url}
                                      className="text-[#101828]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                                    >
                                      {list.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <Link
                            href={item.ctaUrl}
                            className="text-[#fff] bg-[#0745D3]  p-5 w-full text-[14px] font-medium leading-[22px]  flex transition-all   "
                          >
                            {item.cta}{" "}
                            <Icon
                              path={mdiArrowRight}
                              style={{ marginLeft: "0.5em" }}
                              size={1}
                            />
                          </Link>
                        </motion.div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title="LS Central"
        desc="LS Central is the ultimate all-in-one solution for modern retailers. Join thousands of retailers worldwide who trust LS Central to power their success."
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "On-demand Business Performance Insights at Convenience",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Improve Customer Experience with Integrated Loyalty Programs and Personalized Marketing Campaigns",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Access Financial Data, Point of Sale Systems, Supply Chain Management and more—all in one place",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Notifications and Reports at all Channels on Fingertips",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "No More Additional Integration Cost",
          },
             {
            _id: 6,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Ensure Uniformity in Financial Information",
          },
             {
            _id: 7,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Complete Control over Pricing, Inventory, Promotions and beyond",
          },
             {
            _id: 8,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Flexible System Architecture and Modular Design to Scale Business",
          },
             {
            _id: 9,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Flexible System Architecture and Modular Design to Scale Business",
          },
        ]}
      ></Benefits>

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="It is our solution-focused approach, domain consulting and value-added services that enable us to manage projects of every size and complexity in the global transformation landscape."
        arr={[
          {
            _id: 1,
            desc: "Proven excellence of 20 + years and 300+ successful implementations",
            icon: "",
          },
          {
            _id: 2,
            desc: "Comprehensive in-house product ecosystem delivering unified functionality and operational effectiveness",
            icon: "",
          },
          {
            _id: 3,
            desc: "Subsidiary of the globally renowned Godrej conglomerate, worth $4.1Bn enable us in leveraging synergies of business and IT solutions to deliver holistic solutions",
            icon: "",
          },
          {
            _id: 4,
            desc: "Infor's Centre of Excellence and Co-development Partnership program help us to deliver innovative and industry-specific solutions",
            icon: "",
          },
          {
            _id: 5,
            desc: "Repository of ready-to-use use-cases guarantees swift implementation and seamless integration, driving enhanced productivity.",
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
            ribbon: "blog",
            title:
              "Secure & Scalable E-Commerce Solution from Adobe",
            desc: "With the digital culture finding its way into the lives of today’s urban & even rural population, many organizations that were previously reluctant to move to e-commerce due to their thriving brick and mortar business model have started to enhance their online ecosystems, leading to a greater demand for e-Commerce solutions. Some interesting statistics on this topic as per IBEF (India Brand Equity Foundation) are:",
            cta: "Know More",
            link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=17",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Elevating Our Customer Experience with Infor"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions globally."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Global Travel Retailer Gains Cost Efficiency and Lowers Total Cost of Ownership with the All-in-One NAV LS Retail Pack",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/GlobalTravelRetailer_NAVLS_IndiaUAE.pdf",
          },
          {
            id: 2,
            title:
              "Saudi Arabia's Hypermarket Chain Accelerate the Business Process by 40% and Boost its Scalability with LS Retail - Microsoft Dynamics Platform",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/HypermarketChain_NAVLS_KSA.pdf",
          },
          {
            id: 3,
            title:
              "Large Retailer in Mauritius Capitalizes Discount Matrix based on Operational Hierarchy with MS Dynamics & LS Retail",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/LargeRetailerinMauritiusSuccessfullyImplementsMSNAV2017andLSRetail.pdf",
          },
        ]}
      />
      {/* Testimonaisl */}
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
              "",
            thumbnail: "",
            description:
              "Leading Retail Coffee Chain in KSA Controls Consumption with LS Retail NAV Having the LS NAV system in place makes it extremely easy for our organization to make real-time decisions. We get a holistic and accurate view of what's going on in each location. We are now assured of standardized processes being followed across all our outlets. The in-depth experience of the consultants at Godrej Infotech Limited greatly simplified the complex processes right from requirements to rollout.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "",
            thumbnail: "",
            description:
              "Leading Fitness service provider in Saudi Arabia Implements LS Retail On behalf of our entire organization, I would like to thank the Godrej Infotech team that implemented Dynamics NAV 2017. As a result of this implementation, our organization is moving in the paperless direction. We have completely removed manual activities in revenue booking, subscription payments, and syncing of created master between NAV and CRM.GITL add-on for KSA Attendance and Payroll has helped us streamline our HR processes considerably. With the integrated ERP & CRM, we have witnessed a significant increase in the productivity of our operations. We have almost completely done away with manual processing and can now see the difference that an automated system brings to the table.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "",
            thumbnail: "",
            description:
              "Godrej Infotech Ltd successfully rolls out LS Central Hospitality in the World's first super-premium ice cream Franchise based out of KSA We congratulate the team from Godrej Infotech for completing the rollout of LS Central Hospitality. This solution has been deployed at our ice cream retail stores and has features to manage dining, takeaway, delivery, and cart sales for events. With this solution, the manual process for HR and Payroll activities is automated. The point-of-sale is 100% operational and has resulted in a 70% reduction in time taken for material procurement and movement and we have also seen a 60% increase in the productivity of the finance process. Expiry date-based stock tracking and replenishment has helped increase sales through offers and promotions, resulting in reduced expiry loss and maintenance of adequate material stock levels. Dynamics Business Central also has helped in sharing the real-time reports with our Franchisers.",
            category: "static",
            link: "/",
          },
          
        ]}
      />

      {/* Subscription */}
      <Subscription
        title="Achieve Swift and Tangible Returns with LS Retail Journey and Godrej Infotech"
        blue="Let Us Transform Your Vision into Reality."
        title2=""
        desc="Complete the Form to Begin. "
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

export default Page;
