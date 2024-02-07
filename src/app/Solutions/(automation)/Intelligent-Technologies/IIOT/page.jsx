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
import { CaseStudy } from "@/components";
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
      "Process and analyse vast volumes of data and round-the-clock assistance to customers",
  },
  {
    _id: 2,
    icon: "benefits-ai-ml/anticipate-future",
    cardDesc:
      "Anticipate future outcomes based on historical data, making informed decisions",
  },
  {
    _id: 3,
    icon: "benefits-ai-ml/effortless-communicate",
    cardDesc:
      "Effortless communication and efficient information retrieval through Natural Language Processing ",
  },
  {
    _id: 4,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
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
        title="Discover Real-Time Data Brilliance
        with Godrej Infotech IoT Expertise "
        desc="Our IoT services enable you to make informed decisions, proactively address issues, and implement data-driven strategies. From smart manufacturing to intelligent supply chain management, "
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* section Nav */}
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
      {/* Overview  */}
      <Abstract abstractdesc="By employing a pragmatic approach and tapping into the capabilities of AI and ML, we meticulously fine-tune business parameters, ensuring a notable enhancement in your overall business proficiency. Join with us to fully immerse in the transformative power of AI and ML, setting off on a collaborative journey toward enriching innovation and achieving exceptional success for your business endeavours. "></Abstract>

      {/* GITL IOT solutions */}
      <>
        <div
          className={`text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]`}
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="hidden">
              <h4
                className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
              >
                GITL IoT Solutions
              </h4>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
              <h3 className="text-4xl leading-[42px] font-bold">
                GITL IoT Solutions
              </h3>

              <p className="font-normal leading-[22px]">
                We specialize in delivering cutting-edge Internet of Things
                (IoT) solutions that are tailored to meet your unique needs.
              </p>
            </div>
          </div>
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
              {
                _id: 2,
                title: "Bespoke IoT Solutions",
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
      <CaseStudy
        ribbon="CASE STUDY "
        title="Data Insights in Action / Case study"
        desc=""
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Leading Indian Refiner of Precious Metals Gains Strategic Decision-Making Capability with Power BI Solution",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Precious-Metals-Refiner.pdf ",
          },
          {
            id: 2,
            title:
              "Leading Indian Refiner of Precious Metals Gains Strategic Decision-Making Capability with Power BI Solution",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Precious-Metals-Refiner.pdf ",
          },
          {
            id: 3,
            title:
              "Leading Indian Refiner of Precious Metals Gains Strategic Decision-Making Capability with Power BI Solution",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Precious-Metals-Refiner.pdf ",
          },
        ]}
      />

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title=""
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business."
        arr={BenefitsData}
      ></Benefits>

      {/* blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Insights",
            title: "Unveiling Hyper-automation for Supply Chain Efficiency",
            desc: "Hyper-automation, specifically in the context of supply chain management, marks a significant milestone in the evolution of industry practices. It represents the convergence of cutting-edge technologies, reshaping how businesses manage their supply chains. In 2024, the prominence of hyper-automation has soared, transforming supply chain dynamics. This article aims to explore the essence of hyper-automation, its benefits in supply chain management, and various examples illustrating its application. ",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
          {
            _id: 2,
            ribbon: "Insights",
            title: "Unveiling Hyper-automation for Supply Chain Efficiency",
            desc: "Hyper-automation, specifically in the context of supply chain management, marks a significant milestone in the evolution of industry practices. It represents the convergence of cutting-edge technologies, reshaping how businesses manage their supply chains. In 2024, the prominence of hyper-automation has soared, transforming supply chain dynamics. This article aims to explore the essence of hyper-automation, its benefits in supply chain management, and various examples illustrating its application. ",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Why choose gitl and ai and ml */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="Prioritising your success, we help you thrive in a digital landscape with seamless deployment."
        arr={[
          {
            _id: 1,
            desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
            icon: "",
          },
          {
            _id: 2,
            desc: "Agile approach that keeps projects on cutting edge.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Fully signed Non-Disclosure Agreement (NDA) to protect your sensitive information.",
            icon: "",
          },
          {
            _id: 4,
            desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
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
