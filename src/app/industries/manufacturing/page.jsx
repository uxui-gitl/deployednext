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
    title: "Implementation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Upgrade & Migration",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Support & Maintenance",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Consulting",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Customization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Application/System Audit",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Reporting",
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
    text: "Real-time access to role-specific information and tools to perform tasks in the office, shop floor, from any location around the world.",
  },
  {
    id: 2,
    text: "Struggle to coordinate with suppliers and optimize inventory levels and logistics operations.",
  },
  {
    id: 3,
    text: "Hassle with equipment maintenance due to a lack of tracking and schedules.",
  },
  {
    id: 4,
    text: "Difficulty in optimizing production sequences, balancing workloads, and handling disruptions effectively.",
  },
  {
    id: 5,
    text: "Lack of real-time data analysis affecting your manufacturing performance.",
  },
  {
    id: 6,
    text: "Poor quality control and tracking defects.",
  },
  {
    id: 7,
    text: "Regulatory compliance and potential legal issues.",
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
const CustomSolutions = [
  {
    _id: 1,
    title: "PS2.0 - Prosoft 2.0",
    desc: "We specialize in custom video and image analysis tool leveraging advanced technologies like OpenCV to optimize or create computer vision algorithms.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Subcontracting material process after sales delivery",
        url: "/",
      },
      {
        title: "Customer centric operations with back-to-back vendor document ",
        url: "/",
      },
      
    ],
  },
  {
    _id: 2,
    title: "Industry 4.0 - Interface with MES",
    desc: "Precise production order scheduling per machine, real-time progress reporting, inventory tracking.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Integration of Infor LN Product Orders with MES via BOD_XML-based interface",
        url: "/",
      },
      {
        title: "Transfer of operation completion data from MES to Infor LN",
        url: "/",
      },
      {
        title: "Recording of hours accounting within MES",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Industry 4.0 - IoT",
    desc: "Accurately capture machine operations, including on-off times, Overall Equipment Efficiency (OEE), 16-TPM losses and utilization rates. Plus, monitoring electric motor conditions like temperature, vibration and oil levels is crucial for optimal performance.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Sensors installed on machines/motors",
        url: "/",
      },
      {
        title: "Convert sensor data into CSV format",
        url: "/",
      },
      {
        title: "Import CSV file into software for breakdown analysis, utilization tracking and alerts.",
        url: "/",
      },
    ],
  },

  {
    _id: 4,
    title: "Industry 4.0 - RPA - Robotic Process Automation",
    desc: "Streamline the repetitive and labor-intensive task of item code and BOM creation. This involves reducing manual workload and increasing the accuracy of master data to ensure efficient operations and product quality.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Partnered with Automation Anywhere",
        url: "/",
      },
      {
        title: "Developed BOT to read data from Excel templates",
        url: "/",
      },
      {
        title: "BOT inputs data into ERP Infor LN sessions",
        url: "/",
      },
      {
        title: "BOT operates 24/7, creating items & BOMs quickly upon file detection on server",
        url: "/",
      },
    ],
  },
  {
    _id: 5,
    title: "QCAT - Quality control traceability",
    desc: "Online inspection of product and special process parameters to ensure quality standards. This involves conducting sample checks or 100% checks on product and process parameters for quality assurance. Additionally, maintaining project and product-wise feature checklists and insights for product performance.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Interface between Infor LN & QCAT system",
        url: "/",
      },
      {
        title: "Production order data imported into QCAT",
        url: "/",
      },
      {
        title: "Attach test conditions, checklists and parameters to each item",
        url: "/",
      },
      {
        title: "Maintain test data and generate reports",
        url: "/",
      },
      {
        title: "Link child items to parent items using serial & lot functionality",
        url: "/",
      },
      {
        title: "Traceability from child to parent and vice versa",
        url: "/",
      },
    ],
  },
  {
    _id: 6,
    title: "Mobile App - Industrial Safety & Field Quality",
    desc: "Need for thorough online quality assurance and safety checks at site locations to ensure adherence to standards.  Further documentation of quality defects and hazards for immediate action and improvement. ",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Mobile app and web-based system",
        url: "/",
      },
      {
        title: "Ensuring all web-based sessions accessible on mobile app",
        url: "/",
      },
      {
        title: "Manage NC raising, approval and closure processes",
        url: "/",
      },
      {
        title: "Fishbone analysis for issue resolution",
        url: "/",
      },
      {
        title: "Capture images for documentation purposes",
        url: "/",
      },
      {
        title: "Alerts/notifications for NCs and non-closures",
        url: "/",
      },
    ],
  },
  {
    _id: 7,
    title: "Quality App",
    desc: "Manage and monitor all open quality orders effectively. Manufactures require immediate visibility into the quality status and ensure product quality standard.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Centralized platform for managing open quality orders",
        url: "/",
      },
      {
        title: "Scanning feature that expedites order updates",
        url: "/",
      },
      {
        title: "Real-time quality result updates enable timely decisions",
        url: "/",
      },
      {
        title: "Integrated with Dynamics 365 for synchronized quality management",
        url: "/",
      },
      
    ],
  },
  {
    _id: 8,
    title: "Production App",
    desc: "Comprehensive production order visibility and management, along with insights into production processes.  Goal is to develop smooth production operations and informed decision-making.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Centralized view for managing open production orders",
        url: "/",
      },
      {
        title: "Track route card journals for production monitoring",
        url: "/",
      },
      {
        title: "Update runtime and output quantity for accurate records",
        url: "/",
      },
      {
        title: "Scan feature for quick, accurate output updates",
        url: "/",
      },
      {
        title: "Integrate with Dynamics 365 for synchronized production data",
        url: "/",
      },
      
    ],
  },
];
const AIOfferings = [
  {
    _id: 1,
    title: "Automation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#E4F8ED",
    btnTheme: "#4F9D73",
    links: [
      {
        title: "Smart Manufacturing ERP",
        url: "/",
      },
      {
        title: "Customer Experience - CRM",
        url: "/",
      },
      {
        title: "Supply Chain Management",
        url: "/",
      },
      {
        title: "Process Optimization",
        url: "/",
      },

      {
        title: "Quality Control Analysis",
        url: "/",
      },
      {
        title: "Process Automation",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Cloud",
    desc: "  ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#EDF1FF",
    btnTheme: "#0745D3",
    links: [
      {
        title: "M365 ",
        url: "/",
      },
      {
        title: "Cloud Consulting",
        url: "/",
      },
      {
        title: "Upgrade/Migrate to cloud",
        url: "/",
      },
      {
        title: "ERP on cloud",
        url: "/",
      },
      {
        title: "Iot Data management in Cloud",
        url: "/",
      },
      {
        title: "MES In Cloud",
        url: "/",
      },
      {
        title: "DevOps",
        url: "/",
      },
      {
        title: "Cloud Security Solutions for Mfg.",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Transformation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#FFF8E5",
    btnTheme: "#D4A73B",
    links: [
      {
        title: "IOT Based Digital Transformation",
        url: "/",
      },
      {
        title: "Data Driven Analytics- Data lake",
        url: "/",
      },
      {
        title: "Predictive & Preventive Maintenance",
        url: "/",
      },
      {
        title: "Augmented Intelligence",
        url: "/",
      },
      {
        title: "Robotics and Automation",
        url: "/",
      },
     
    ],
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
        title="Transformative solutions and services helping manufacturers to achieve new level of agility with velocity"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Challenges
          // Capabilities
          // Solutions
          // Add-Ons
          // Case Study

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 3,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 4,
              title: "Add-Ons",
              link: "#AddOns",
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
        abstractdesc="The manufacturing industry is one of the most volatile industries that is known for its fluctuating pace and increasing competitiveness. The dynamic and ever-changing nature of these businesses requires fast tracking and complete monitoring of each operation, the absence of which can lead to downtime in production, resource wastage and major losses."
        list={false}
        ribbon=""
        listArr={[
          { _id: 1, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 2, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 3, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 4, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 5, icon: "dummy", title: "Customer loyalty retention" },
        ]}
      ></Abstract>

      {/* Challengers Para */}
      <>
        <div id="Challenges" className={` w-full bg-white pb-20`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Challenges Faced by Manufacturing Businesses
                  </h3>
                  
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

      {/* Segment we serve */}
      <div className={`bg-white w-full py-32`} id="productivity">
        <div className={` w-full`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="  flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                  Segments we serve
                </h3>
              </div>
              <div></div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
                  Our micro-vertical expertise enables you to drive efficient operations across the value chain.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-key1 bg-cover  sm:bg-[length:75%_auto] mb-12 sm:mb-20 w-full sm:min-h-[90vh] ">
            <div className="flex flex-col sm:flex-row gap-5 justify-end text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "Automotive/Discrete/Industrial",
                  desc: "",
                  cta: "",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "",
                  list: [
                    "Automotive OEM / Suppliers",
                    "Industrial Manufacturing",
                    "High-Tech & Electronics",
                    "Machinery & Equipment",
                    "Automotive Components",
                    "Electricals & Electronics",
                    "Valve",
                    "Cables",
                    "Optical Glass",
                  ],
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="sm:mx-2 w-full sm:w-[40%] bg-white  flex flex-col justify-between "
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
                      <div>
                        <ul className="my-4">
                          {item.list.map((i, index) => (
                            <li
                              className="text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                              key={index}
                            >
                              {i}
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
          <div className="bg-key2 bg-cover sm:bg-[length:75%_auto] mb-12 sm:mb-20   w-full sm:min-h-[90vh]">
            <div className="flex flex-col sm:flex-row gap-5 justify-start text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "Engineering and construction",
                  desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                  list: [
                    "Refinery, Petrochemical & Process Equipment",
                    "Aerospace & Defense Equipment",
                    "Infrastructure / EPC with Turnkey & BOOT BOLT",
                    "Ship Design, Building & Repairs",
                 ],
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="sm:mx-2 w-full sm:w-[40%] bg-white  flex flex-col justify-between "
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
                      <div>
                        <ul className="my-4">
                          {item.list.map((i, index) => (
                            <li
                              className="text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                              key={index}
                            >
                              {i}
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
          <div className="bg-key3 bg-cover sm:bg-[length:75%_auto] mb-12 sm:mb-20   w-full sm:min-h-[90vh]">
            <div className="flex flex-col sm:flex-row gap-5 justify-end text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "Process Manufacturing",
                  desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                  list: [
                    "Chemicals",
                    "Paints",
                    "Pharmaceutical",
                    "Lubricants",
                    "Fragrance",
                    "Polymers",
                    "Glass",
                    "Cement",
                    "Bottling Plant",
                  ],
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="sm:mx-2 w-full sm:w-[40%] bg-white  flex flex-col justify-between "
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
                      <div>
                        <ul className="my-4">
                          {item.list.map((i, index) => (
                            <li
                              className="text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                              key={index}
                            >
                              {i}
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
        </div>
      </div>

      {/* Our Capabilities */}
      <>
        <div id="Capabilities" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="text-center">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Capabilities
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] hidden ">
                  Holistic and future- ready solutions to re-engineer your
                  business with our proven implementation methodologies for
                  maximum Return on Investment (RoI)
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-3    ">
            {[
              {
                _id: 1,
                title: "Future of Factories",
                desc: "",
                cta: "",
                icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                link: "",
                list: [
                  "Industry 4.0",
                  "Factory Track",
                  "Intelligent Operations using AI and ML",
                  "Industry 4.0 RPA - Robotic Process Automation",
                  "Industry 4.0 - Interface with MES",
                  "Industry 4.0 IoT Solution",
                ],
              },
              {
                _id: 2,
                title: "IoT Enabled Products",
                desc: "",
                cta: "Know More",
                icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                link: "/",
                list: [
                  "Industrial IOT",
                  "Plant Efficiency with IOT",
                  "Asset Predictive Maintenance",
                  "",
                ],
              },
              {
                _id: 3,
                title: "Supply Chain Management",
                desc: "",
                cta: "Know More",
                icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                link: "/",
                list: [
                  "Inventory Management",
                  "Fleet Management with Iot and AR",
                  "Loft ware",
                  "Production Planning",
                ],
              },
              {
                _id: 4,
                title: "Performance Management",
                desc: "",
                cta: "Know More",
                icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                link: "/",
                list: [
                  "Product Lifecycle Management",
                  "Asset Management",
                  
                ],
              },
              {
                _id: 5,
                title: "Advanced Manufacturing",
                desc: "",
                cta: "Know More",
                icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                link: "/",
                list: [
                  "Barcode and RFID",
                  "Stock Buffer Management",
                  "CCPM Critical Chain Path",
                ],
              },
            ].map((item, index) => (
              <>
                {/* icon */}
                {/* title */}
                {/* list */}
                <div
                  key={item._id}
                  className="sm:mx-2 w-full flex flex-col justify-between "
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
                    <div>
                      <ul className="mt-4">
                        {item.list.map((i, index) => (
                          <li
                            className="text-[#475467] text-[14px] font-medium py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                            key={index}
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>

      {/* Our Services / Ms Services */}
      <>
        <div
          className={`bg-ms-practise w-full  bg-[#9199A6]   py-32  `}
          id="Solutions"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]   leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium  leading-[22px] md:w-[90%] ">
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
                  slidesPerView: 4,
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

      {/* Custom Solutions */}
      <>
        <div id="CustomSolutions" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Godrej Infotech Custom Solutions
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Our commitment to helping you succeed is backed by years of experience and a dedicated team of experts who will work closely with you to ensure our solutions align perfectly with your objectives. 
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-4">
            {CustomSolutions.map((item, index) => (
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

      {/* Our Solutions growth */}
      <>
        <div id="AddOns" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  Solution Offerings
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Holistic and future ready
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] hidden">
                  Holistic and future- ready solutions to re-engineer your
                  business with our proven implementation methodologies for
                  maximum Return on Investment (RoI)
                </p>
              </div>
            </div>
          </div>
          <div className="text-left w-full bg-amber-100 mb-5 mx-auto   grid grid-cols-1 md:grid-cols-3">
            {AIOfferings.map((item, index) => (
              <div
                className={`bg-[${item.theme}] py-10 sm:py-20 px-8 sm:px-24`}
                key={item._id}
                style={{ backgroundColor: item.theme }}
              >
                <div className="h-full flex flex-col justify-between">
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
                          className=" border-b-[1px] last:border-b-[0px] w-fit border-[#DBDBDB] py-2 "
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
                    <Link href={item.ctaUrl}>
                      <div
                        className={`text-[#fff] text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                        style={{ backgroundColor: item.btnTheme }}
                      >
                        {item.cta}{" "}
                        <Icon
                          path={mdiArrowTopRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* GITL Custom Solutions / Acc. business enginering */}

      {/* Case Study  */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Elevating Our Customer Experience with Infor"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions globally."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Leading manufacturer of Electrical components for the Automobile sector modernize its business application with successful implementation of Infor LN",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
          },
          {
            id: 2,
            title:
              "India's Largest Manufacturer of Forklift Trucks Successfully Implements Salesforce Service Cloud Solution Integrated with Infor LN",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Case-Study-Salesforce-Implementation.pdf",
          },
          
        ]}
      />

      {/* Partnership */}
      <>
        <div className={` w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="text-left">
                <h3 className="text-left text-4xl leading-[42px] font-bold mb-5">
                  Partnerships
                </h3>
                <p className=" text-left font-medium leading-[22px]   mx-auto">
                 Our experience with esteemed technology partners helps you to drive growth in this digital age.
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

      {/* Testimonials */}
      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted Customers share their Experiences"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Indian Automotive Manufacturer & Supplier",
            thumbnail: "",
            description:
              "We're pleased with Godrej Infotech Ltd.'s support during the service contract. Over a year since Infor ERP Ln 6.1 implementation, our strong business relationship is set to strengthen.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Global Leader in Ice-Cold Merchandiser & Glass Bottle Manufacturer",
            thumbnail: "",
            description:
              "Appreciation to Godrej Infotech Limited's effective solutions and support, we acknowledge their expertise for optimizing ERP LN FP2 since April 2009.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "IT Manager, Indian Petrochemical Manufacturer of Resins & Plastics ",
            thumbnail: "",
            description:
              "Thank you Godrej Infotech team for cloud-enabling our Navision system, enhancing system availability, offering cost-effective OPEX pricing, and providing  anytime, anywhere accessibility.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Expertise */}
      <Expertise
        ribbon="Our Expertise"
        ribbonTxtWhite="true"
        title="Hub of Expertise"
        desc="We're here to build an edge."
        arr={[
          {
            title: "30 +",
            desc: "Years of Domain Experience",
          },
          {
            title: "200 +",
            desc: "Implementation Experience and Project Deliveries",
          },
          {
            title: "300 +",
            desc: "Happy customers",
          },
          {
            title: "100 +",
            desc: "Subject Matter experts",
          },
          {
            title: "24/7",
            desc: "Support Desk",
          },
        ]}
      ></Expertise>

      {/* Subscriptions ============*/}
      <Subscription
        title="Ready to optimize your"
        blue="manufacturing performance?"
        title2=""
        desc="Share your details to discover how our  ACT solutions can help you with leading edge growth."
      />
    </>
  );
};

export default page;
