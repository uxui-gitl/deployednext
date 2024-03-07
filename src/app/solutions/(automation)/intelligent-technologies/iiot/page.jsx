"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import {
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowTopRight,
  mdiBullseyeArrow,
} from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import checkout from "../../../../../../public/checkout.png";
import MLExpertise from "../../../../../../public/MLExpertise.png";
/**
 * Sandeep Rana
 * Imported logos
 */
import MSAzure from "../../../../../../public/ai-ml/ms-azure.png";
import GoogleAI from "../../../../../../public/ai-ml/google-ai-logo.png";
import TensorFlow from "../../../../../../public/ai-ml/tensorflow-logo.png";

import anticipatefuture from "../../../../../../public/icon/benefits-ai-ml/anticipate-future.svg";

import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import Benefits from "@/components/Benefits";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import BlogSlider from "@/components/BlogSlider";
import Abstract from "@/components/Abstract";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import { useState } from "react";
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

const AIOfferings = [
  {
    _id: 1,
    title: "Computer Vision",
    desc: "We specialize in custom video and image analysis tool leveraging advanced technologies like OpenCV to optimize or create computer vision algorithms.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Data Labelling and Real-time Object Detection",
        url: "/",
      },
      {
        title: "Security Solution",
        url: "/",
      },
      {
        title: "Equipment Monitoring",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Speech & Language",
    desc: "Our reliable approach to Speech and Language AI empowers your business with the tools to elevate customer experiences and stand tall in competition.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Transcription Services",
        url: "/",
      },
      {
        title: "Speech Recognition",
        url: "/",
      },
      {
        title: "Language translation",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Document  Understanding",
    desc: "We help you to achieve error-free AI-driven data capture from diverse document types and helps your business with unstructured data.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Optical Character Recognition (OCR)",
        url: "/",
      },
      {
        title: "Text extraction",
        url: "/",
      },
      {
        title: "Financial Processing",
        url: "/",
      },
    ],
  },

  {
    _id: 4,
    title: "Conversational AI",
    desc: "Ensuring a more human-centric engagement with data, we provide solutions that facilitate customer-centric decision-making.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Document processing",
        url: "/",
      },
      {
        title: "Sentiment analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    title: "Healthcare",
    imgUrl: "/ai-ml/Industry-served_Healthcare.jpg",
    url: "/",
  },
  {
    _id: 2,
    title: "Automotive",
    imgUrl: "/ai-ml/Industry-served_Automotive.jpg",
    url: "/",
  },
  {
    _id: 3,
    title: "Logistic",
    imgUrl: "/ai-ml/Industry-served_Logistic.jpg",
    url: "/",
  },
  {
    _id: 4,
    title: "Retail",
    imgUrl: "/ai-ml/Industry-served_Retail.jpg",
    url: "/",
  },
  {
    _id: 5,
    title: "Manufacturing",
    imgUrl: "/ai-ml/Industry-served_Manufacturing.jpg",
    url: "/",
  },
];
const BenefitsData = [
  {
    _id: 1,
    icon: "benefits-ai-ml/process-analyse",
    cardDesc:
      "Improvement of OEE (Overall Equipment Efficiency) leading to optimised throughput and enhanced quality.",
  },
  {
    _id: 2,
    icon: "benefits-ai-ml/anticipate-future",
    cardDesc:
      "Effective use of Equipment Service Cost and Improved Safety Compliance",
  },
  {
    _id: 3,
    icon: "benefits-ai-ml/effortless-communicate",
    cardDesc:
      "Optimised Maintenance TAT in terms of MTBF (Measures the time between failures for devices) and MTTR (Measures the time that it takes to repair those failed devices)",
  },
  {
    _id: 4,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Promotes the concept of Connected Factory with actionable insights for Operations, Tactical and Strategic Levels of Management – Shopfloor to Top floor",
  },
    {
    _id: 5,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Optimised Energy Consumption leading to Optimised Carbon Footprint",
  },
    {
    _id: 6,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Defect Tracking using image analytics leading to improved quality",
  },
];

const MLData = [
  {
    _id: 1,
    imgURL: "/ai-ml/Expertise_Deep-Learning.jpg",
    title: "Deep Learning",
    subTitle:
      "Our deep learning expertise builds solutions that automate complex tasks helping in data-driven decision-making, especially when it comes to forecasting your business's future.",
    ctaURL: "",
  },
  {
    _id: 2,
    imgURL: "/ai-ml/Expertise_Supervised-Learning.jpg",
    title: "Supervised Learning",
    subTitle:
      "We deliver customer sentiment analysis, image recognition and predictive maintenance services that help you make informed decisions and create happier customers.",
    ctaURL: "",
  },
  {
    _id: 3,
    imgURL: "/ai-ml/Expertise_Unsupervised-Learning.jpg",
    title: "Unsupervised Learning",
    subTitle:
      "Our unsupervised learning services reveal hidden patterns for business sustainability through data exploration without constraints, helping in customer segmentation, anomaly detection and more.",
    ctaURL: "",
  },
  {
    _id: 4,
    imgURL: "/ai-ml/Expertise_Reinforcement-Learning.jpg",
    title: "Reinforcement Learning",
    subTitle:
      "Our reinforcement learning expertise is like a guiding hand for applications such as autonomous systems and resource optimisation.",
    ctaURL: "",
  },
];
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

  return (
    <>
      <EntIntro
        title="Discover Real-Time Data Brilliance with Godrej Infotech IIoT Expertise"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* section Nav */}
      <>
        <SectionNav
          // Solutions
          // Case Study
          // Benefits
          // Insights
          // Why Us

          arr={[
            {
              _id: 1,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 2,
              title: "Case Study",
              link: "#CaseStudy",
            },
            {
              _id: 3,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 4,
              title: "Insights",
              link: "#Insights",
            },
            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>
      {/* Overview  */}
      <Abstract abstractdesc="We focus on refining businesses through IIoT services across diverse sectors, spanning Manufacturing, Supply Chain, Construction, Transportation, Power Generation and Smart Cities. Our IIoT (Industrial Internet of Things) and Industry 4.0 solutions are meticulously developed to strengthen manufacturing supply chain resilience, thereby influencing crucial performance metrics like OEE (Overall Equipment Efficiency), Cycle Time, Machine Throughput, Line Efficiency, and TPM (Total Productive Maintenance) Losses. 

Our expert team extends support to clients by enabling them to monitor production order-wise part movement, implement consumption-based costing, and closely monitor quality parameters."></Abstract>

      {/* GITL IOT solutions */}
      <>
        <div
          id="Solutions"
          className={`text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]`}
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="hidden">
              <h4
                className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
              >
                Our IIoT Solutions
              </h4>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
              <h3 className="text-4xl leading-[42px] font-bold">
               Our IIoT Solutions
              </h3>

              <p className="font-normal leading-[22px]">
                We specialize in delivering cutting-edge Internet of Things
                (IIOT) solutions that are tailored to meet your unique needs.
              </p>
            </div>
          </div>
          <div className="gap-x-8 flex flex-row justify-between">
            {[
              {
                _id: 1,
                title:
                  "Low Code, No Code Configurable Portals on Azure IIOT or AWS IIOT",
                desc: "We bring a wealth of industry knowledge and expertise to the table and follow the",
                cta: "Explore Solutions",
                isNested: true,
                ctaLink: "/",
                ctaHide: false,
                tabData: [
                  {
                    _tabId: 1,
                    title:
                      "Remote Asset Tracking with Connected Field Service & Predictive Analytics",
                    isBullet: true,
                    list: [
                      {
                        _listId: 1,
                        title: "Solution Feature",
                        li: [
                          "Alerts, Machine Parameter wise Graphical Real Time Report, Work Order Management, Workforce, Management, Warranty Tracking",
                          "Real Time Asset/Machine/Equipment Tracking",
                          "Multivariate Azure ML Driven Predictive Failure Analytics leading to Predictive Maintenance",
                          "Service Performance Monitoring",
                          "Expense Management, Notifications",
                          "Reporting and Analytics, Service Contracts (AMC)",
                          "Chat Collaboration Integration with SAP using file-based data transfer mechanism Customer Portal",
                        ],
                      },
                    ],
                  },
                  {
                    _tabId: 2,
                    title:
                      "Industry 4.0 Accelerator (IIOT for shopfloor) for implementation of IIOT in shopfloor – Both for Discrete & Process Manufacturing",
                    isBullet: true,
                    list: [
                      {
                        _listId: 1,
                        title: "Solution Feature",
                        li: [
                          "Real Time Production Monitoring",
                          "Usage Based Costing",
                          "16 Total Productive Maintenance Loss Reports",
                          "Realtime Machine wise/ Batchwise/Partwise Production Analysis",
                          "Analysis of Rejection, Cycle time Report & Shot Count Report",
                          "Realtime Partwise Material Consumption Analysis, Quality Reports - SPC Reports",
                          "Analysis of Defect, Root Cause and Machine Downtime",
                          "Production Order & Item Wise & MHU(Material Handling Unit) wise Tracking",
                          "OEE Optimization and Line Efficiency calculation",
                          "Energy & Utility Monitoring",
                          "Predictive Maintenance",
                          "Trace and Tracking of MHU Equipment",
                          "Trace and Track of Parts across Shopfloor",
                          "Energy &Utility Monitoring",
                          "MTBF(Measures the time between failures for devices) and MTTR (Measures the time that it takes to repair those failed devices) Reports",
                          "Energy Consumption Report in KwH and Safety Compliance Reports",
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                _id: 2,
                title: "Bespoke IIOT Solutions",
                desc: "Require Development from Scratch. Customisation of manufacturing reports",
                cta: "Explore Solutions",
                ctaHide: true,
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
                      "Industry 4.0 Accelerator (IIOT for shopfloor)   for implementation of IIOT in shopfloor – Both for Discrete & Process Manufacturing",
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
              <div key={index} className="bg-img-boxbg w-1/2 py-14 px-24 ">
                <div className="flex flex-col justify-between h-full">
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
                    {!item.ctaHide ? (
                      <button
                        onClick={() => openPopup(item.title, item.tabData)}
                        className="min-w-max text-[12px] leading-[15px] flex bg-transparent py-2 items-center pr-10  font-medium text-base text-[#101828] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                      >
                        {item.cta || "Explore Solutions"}
                        <Icon
                          path={mdiArrowTopRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
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
                                    className="min-w-[300px] w-full inline-flex"
                                  >
                                    <div className="flex p-4 md:p-8 flex-col">
                                      <p className="text-[18px] font-semibold mb-4">
                                        {item.title}
                                      </p>

                                      {/* tab nested Li goes here */}
                                      <ul className="">
                                        {item.li.map((list, index) => (
                                          <li key={index}>
                                            <p className="flex gap-4 mb-4 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                                              <span className="">
                                                <Icon
                                                  path={mdiBullseyeArrow}
                                                  color="dodgerblue"
                                                  size={1}
                                                />
                                              </span>
                                              {list}
                                            </p>
                                          </li>
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
      </>

      {/* case study */}
       <div id="CaseStudy">
      <CaseStudy
        ribbon="CASE STUDY "
        title="Data Insights in Action / Case study"
        desc=""
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "India's Largest Lift Truck Manufacturer & Exporter Implements IIOT Solution for Enterprise Asset Integration",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/India%E2%80%99s_Largest_Lift_Truck_Manufacturer_Exporter_IoT_Solution_Enterprise_Asset_Integration.pdf",
          },
          {
            id: 2,
            title:
              "India's Leading Construction Organization Implements IIOT & ML Solution for Real Time Cement Inventory Calibration",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Indias_Leading_Construction_Organization_IoT_ML_Real_Time_Cement_Inventory.pdf",
          },
          
        ]}
      />
       </div>


      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title=""
        desc="IIoT offers a multitude of benefits that enable businesses to gain competitive edge through innovation and succeed in digital era."
        arr={BenefitsData}
      ></Benefits>

      {/* blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Blog",
            title: "The Powerful Duo: AI and the Internet of Things (IIOT) Reshaping Our World",
            desc: "Imagine a world where machines talk to each other, predicting problems before they happen and adjusting on the fly. This isn't magic; it's the incredible team of artificial intelligence (AI) and the Internet of things (IIOT) in Industry 4.0, the latest wave of technological revolution.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
          
        ]}
      />

      {/* Why choose gitl and ai and ml */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="Incorporating our IIOT expertise into business can transform the way business operates and paving the way for long-term success."
        arr={[
          {
            _id: 1,
            desc: "Actively shaping the future of manufacturing for our clients through Industry 4.0 and IIOT.",
            icon: "",
          },
          {
            _id: 2,
            desc: "Innovative IIOT and Industry 4.0 solutions deployed in various manufacturing scenarios.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Ensure replicable success stories for your business.",
            icon: "",
          },
          {
            _id: 4,
            desc: "Expertise in Predictive and Prescriptive analytics using IIOT and AI/ML (Machine Learning) to foresee potential device failures.",
            icon: "",
          },
          {
            _id: 5,
            desc: "Efficiently ingests machine telemetry data across diverse PLC (Programmable Logic Controller), CNC (Computer Numerical Control) controllers, and OT (Operational Technology) network data points.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready for Intelligent Solutions? "
        blue=""
        title2=""
        desc="Share your details NOW for Smarter Business Future!"
      />
    </>
  );
};

export default Page;
