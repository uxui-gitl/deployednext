"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../public/upgradeCloud/puzzle.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import Expertise from "@/components/Expertise";
import WhySection from "@/components/WhySection";
import icon from "../../../../public/icon.png";
import microsoft from "../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../public/upgradeCloud/azure.png";
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
import { mdiBullseyeArrow } from "@mdi/js";
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

import infor from "../../../../public/upgradeCloud/infor.png";
import OracleDB from "../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../public/upgradeCloud/Dynamic.png";
import dotnet from "../../../../public/technologyStack/dotnet.png";
import sharepoint from "../../../../public/technologyStack/sharepoint.png";

import Abstract from "@/components/Abstract";
import {
  Benefits,
  Capabilities,
  NewTestimonial,
  OfferingsSlider,
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
    title: "Salesforce",
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
    title: "Implementation Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Upgrade & Migration Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Support & Maintenance Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Consulting Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Customization and Integration Services",
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

const AIOfferings = [
  {
    _id: 1,
    title: "Customer Experience",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Salesforce",
        url: "/",
      },
      {
        title: "Microsoft CRM",
        url: "/",
      },
      {
        title: "Infor CRM",
        url: "/",
      },
      {
        title: "D365 Commerce",
        url: "/",
      },
      {
        title: "LS Central - Kiosk",
        url: "/",
      },
      {
        title: "POS",
        url: "/",
      },
      {
        title: "Clienteling",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Ecommerce",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Adobe Commerce Cloud",
        url: "/",
      },
      {
        title: "Shopify",
        url: "/",
      },
      {
        title: "Odoo Commerce",
        url: "/",
      },
      {
        title: "Woo Commerce",
        url: "/",
      },
      {
        title: "Big Commerce",
        url: "/",
      },
      
    ],
  },
  {
    _id: 3,
    title: "Supply chain management",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Infor WMS",
        url: "/",
      },
      
    ],
  },

  {
    _id: 4,
    title: "Data Insights",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Power BI",
        url: "/",
      },
      {
        title: "BIRST",
        url: "/",
      },
      {
        title: "Tableau",
        url: "/",
      },
      
    ],
  },
  {
    _id: 5,
    title: "Intelligent technologies",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
     {
        title: "IOT",
        url: "/",
      },
    ],
  },
  {
    _id: 6,
    title: "Data & Information Security",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      
    ],
  },
  {
    _id: 7,
    title: "Integration Services",
    desc: "",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Oracle",
        url: "/",
      },
      {
        title: "SAP",
        url: "/",
      },
      {
        title: "LS Retail",
        url: "/",
      },
      {
        title: "Salesforce",
        url: "/",
      },
      {
        title: "eCommerce",
        url: "/",
      },
      {
        title: "Infor WMS",
        url: "/",
      },
    ],
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
const page = () => {
  return (
    <>
      <EntIntro
        title="Driving Deeper Customer Connection and Optimised Value Chain with Seamless Digital Experience for Retail Businesses"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Industries
          // Solutions
          // Capabilities
          // Services
          // Case Study

          arr={[
            {
              _id: 1,
              title: "Industries",
              link: "#Industries",
            },
            {
              _id: 2,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 3,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 4,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 5,
              title: "Case Study",
              link: "#CaseStudy",
            },
          ]}
        />
      </>

      {/* OVerview with list */}
      <Abstract
        abstractdesc="Retail landscape is undergoing rapid transformation and technology has established as a key driver of change. At Godrej Infotech, we recognize the significance of these shifts and are dedicated to leveraging our expertise to support retailers in adapting to these changes. From the adoption of CRM and e-commerce to the integration of data analytics, our expert team holds extensive experience of providing comprehensive modernization solutions for global businesses."
        list={true}
        ribbon="Retail"
        listArr={[
          // { _id: 1, icon: "dummy", title: "Customer loyalty retention" },
          // { _id: 2, icon: "dummy", title: "Customer loyalty retention" },
          // { _id: 3, icon: "dummy", title: "Customer loyalty retention" },
          // { _id: 4, icon: "dummy", title: "Customer loyalty retention" },
          // { _id: 5, icon: "dummy", title: "Customer loyalty retention" },
        ]}
      ></Abstract>

      {/* Retail segment slider */}
      <>
        <>
          <div id="Industries" className={` w-full bg-[#FFF] pt-24`}>
            <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    Retail Segments We Serve
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-normal leading-[22px] md:w-[90%] ">
                   Understanding unique demands of each segment and capitalizing tech capabilities, we equip businesses to thrive in competitive market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className={`bg-img w-full pt-12 pb-12 mt-20`} id="productivity">
            <div className="flex flex-col sm:flex-row gap-5 justify-center text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "Retail",
                  desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                  list: [
                    "Hypermarket",
                    "Supermarket",
                    "Eyewear Stores",
                    "Fashion Retail",
                    "Speciality Stores",
                    "Electronic stores",
                    "Departmental Stores",
                    "Beauty and Personal Care",
                    
                  ],
                },
                {
                  _id: 2,
                  title: "Hospitality",
                  desc: "",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  cta: "Know More",
                  link: "/",
                  list: [
                    "Full-Service (Fine Dining) Restaurants",
                    "Quick & Fast Service Rest",
                    "Food Services",
                  ],
                },
                {
                  _id: 3,
                  title: "Travel Retail",
                  desc: "",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  cta: "Know More",
                  link: "/",
                  list: [
                    "Duty free & Travel Retail",
                    
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
                      <p className="text-[16px] hidden font-medium leading-[22px] text-[#101828]">
                        {item.desc}
                      </p>

                      <div>
                        <ul>
                          {item.list.map((li, index) => (
                            <li
                              key={index}
                              className="text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                            >
                              {li}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5 hidden">
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
                  Our proficiency with tech platforms paves the way for progressive business results, blending innovation and competency effortlessly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row my-5 justify-center items-center mx-auto gap-10 sm:gap-16">
                <div>
                  <Image src={infor} alt="infor" />
                </div>
                {/* <div>
                  <Image src={OracleDB} alt="oracle" />
                </div> */}

                <div>
                  <Image src={Dynamic} alt="dynamic365" />
                </div>
                <div>
                  <Image src={azure} alt="azure" />
                </div>
                 <div className="max-w-[200px] mb-4">
                  <Image src={dotnet} alt="dotnet" />
                </div>
                <div className="max-w-[200px] mb-4">
                  <Image src={sharepoint} alt="sharepoint" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Solutions we offer slider */}

      

      {/* Our Ai Offerings */}
      <>
        <div id="AIOfferings" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Solution Offerings for Retail Industry
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  From specialty stores to large-scale retailers, we help businesses to thrive by offering solutions that increase competence, customer engagement and inclusive performance.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-4">
            {AIOfferings.map((item, index) => (
              <div className="bg-[#EDF1FF] p-5" key={item._id}>
                <div className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="my-8">
                      {item.links.map((list, index) => (
                        <li
                          key={index}
                          className=" border-b-2 border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={list.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
              </div>
            ))}
          </div>
        </div>
      </>

      {/* Our capabilites faq */}
      <div id="Capabilities">
        <Capabilities
          ribbon=" "
          title="Our Capabilities"
          desc=""
          arr={[
            {
              _id: 1,
              icon: "gear",
              title: "Retail Store Transformation",
              desc: "Enabling personalization in sales process, loyalty management programs,  and enhancing customer experience with retail stores modernization.",
              cta: "",
              ctaUrl: "",
              list: [
                {
                  title:
                    "Customer experience (CX) modernization",
                  url: "/",
                },
                {
                  title:
                    "Digital stores development",
                  url: "/",
                },
                {
                  title:
                    "Point-of-Sale (POS) modernization",
                  url: "/",
                },
                {
                  title:
                    "Clienteling",
                  url: "/",
                },
                {
                  title:
                    "Personalization & loyalty management",
                  url: "/",
                },
              ],
            },
            {
              _id: 2,
              icon: "gear",
              title: "Supply Chain Management and Tracking",
              desc: "Increasing the responsiveness of supply chain with flexibility and effective order management.",
              cta: "",
              ctaUrl: "",
              list: [
                {
                  title:
                    "Omni channel order management",
                  url: "/",
                },
                {
                  title:
                    "End-to-end supply chain tracking",
                  url: "/",
                },
                {
                  title:
                    "Multichannel and last mile management",
                  url: "/",
                },
                {
                  title:
                    "Delivery re-routing",
                  url: "/",
                },
              ],
            },
            {
              _id: 3,
              icon: "gear",
              title: "Commerce Transformation",
              desc: "Modernizing the shopping journey of customer for global customer base increasing operational effectiveness.",
              cta: "",
              ctaUrl: "",
              list: [
                {
                  title:
                    "Omni-channel Commerce for B2B/B2C Integration",
                  url: "/",
                },
                {
                  title:
                    "Intelligent Order Management Systems",
                  url: "/",
                },
                {
                  title:
                    "Digital payments",
                  url: "/",
                },
                {
                  title:
                    "Scam Protection",
                  url: "/",
                },
              ],
            },
            {
              _id: 4,
              icon: "gear",
              title: "Integrated Digital Functionalities",
              desc: "A single intelligent platform serving multiple channels, streamlining data sharing, helping in improving operational efficiency.",
              cta: "",
              ctaUrl: "",
              list: [
                {
                  title:
                    "Automated Warehousing",
                  url: "/",
                },
                {
                  title:
                    "Dynamics 365 for Retail, Operations, Commerce",
                  url: "/",
                },
                {
                  title:
                    "Merchandising Solutions",
                  url: "/",
                },
              ],
            },
            
          ]}
        />
      </div>

      {/* Our Services */}
      <>
        <div className={`bg-ms-practise w-full py-32`} id="Services">
          <div className={`w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                     Service Offerings
                  </h3>
                </div>
                <div>
                  <p className="font-medium  leading-[22px] md:w-[90%] ">
                    Driving growth across retail segments, our end-to-end service offerings aim to enhance customer experiences, optimize processes and nurture growth.
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

      {/* Expertise */}
      <Expertise
        ribbon="Our Expertise"
        ribbonTxtWhite="true"
        title="Hub of Expertise"
        desc="We are here to build a competitive edge with technology brilliance for businesses across the world."
        arr={[
          {
            title: "200 +",
            desc: "Implementation Experience and Project Deliveries",
          },
          {
            title: "300 +",
            desc: "Happy customers",
          },
          {
            title: "24/7",
            desc: "Support Desk.",
          },
          {
            title: "Consultative",
            desc: "Approach for Modern Retail",
          },
          {
            title: "25 years",
            desc: "of strategic partnership with Microsoft",
          },
        ]}
      ></Expertise>

{/* Infographics */}
        <>
          <div
            id="OurApproach"
            className="max-w-screen-xl mx-auto px-[2rem] pb-20 bg-white"
          >
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Delivering Omnichannel 2.0 for Connected Shopping Experience
                </h3>
                <p className="font-normal leading-[22px] w-[80%] mx-auto">
                  Seamlessly connecting every aspect of the retail experience, we modernise shopping with a unified, personalized and connected approach. From online to in-store, our solutions ensure a cohesive and engaging journey for customers. 
                </p>
              </div>
            </div>
            <div className="mx-auto text-center w-[60%]">
              <Infographics src="/infographics/Retail.svg" />
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

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Retail Projects Highlights"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries."
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
      {/* Testimonials */}
      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted customers share their success experiences"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Manager, Saudi Arabia based Superstore",
            thumbnail: "",
            description:
              "Our earnest gratitude to Godrej Infotech for their exceptional service and genuine support during the implementation/ support of Microsoft Dynamics NAV, LS Retail and Payroll add-on. Our team is highly impressed with GITL team's meticulous conduct, dedication, professionalism, and profound knowledge regarding the retail domain.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "General Manager, IT, Indian Eyewear Brand",
            thumbnail: "",
            description:
              "Optical retail demands complex solutions, and Godrej Infotech's expert advice in Microsoft Dynamics implementation and support has been invaluable. Huge thanks to the innovative and dedicated Godrej Infotech team – keep up the awesome work!",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "IT manager, Saudi Arabia's Hypermarket Retail Chain",
            thumbnail: "",
            description:
              "We're delighted to report significant benefits from our IT partnership with Godrej Infotech Limited as our IT solutions partner. Implementing the LS Retail Solution has streamlined our processes, aligning with shared values of simplicity, cost-effectiveness and high quality",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* WHy Section */}
      <WhySection
        ribbon="Let's Collaborate and Make it Happen"
        title="Why Godrej Infotech"
        desc="We help global retailers in growing businesses by curating bespoke experience and helping them to serve the shoppers at critical decision moments."
        arr={[
          {
            _id: 1,
            desc: "Deliver customized solutions through platform engineering",
            icon: "",
          },
          {
            _id: 2,
            desc: "Offer efficient managed services for retail stores, commerce, PoS and platforms",
            icon: "",
          },
          {
            _id: 3,
            desc: "Design retail Marchitecture using platform characteristics",
            icon: "",
          },
          {
            _id: 4,
            desc: "Consultative approach and extensive industry knowledge in specialty retail, health & beauty, fashion & apparel, consumer goods",
            icon: "",
          },
          {
            _id: 5,
            desc: "Right fit partner for complete Digital transformation journey",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Dummy Text"
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
