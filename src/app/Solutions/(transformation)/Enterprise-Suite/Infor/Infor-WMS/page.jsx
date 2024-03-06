"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../../public/icon.png";
import WhySection from "@/components/WhySection";
import Expertise from "@/components/Expertise";
import microsoft from "../../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../../public/upgradeCloud/cloudArrows.png";

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
import Benefits from "@/components/Benefits";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import Testimonial from "@/sections/testimonial/Testimonial";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Abstract from "@/components/Abstract";
import { NewTestimonial } from "@/components";
import React from "react";
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
    text: "Complex warehouse operations require solutions for accurate labor, inventory, and invoicing administration.",
  },
  {
    id: 2,
    text: "Warehouse operations need flexibility and agility to meet the constantly shifting needs of their clients.",
  },
  {
    id: 3,
    text: "Requirement for data-driven insights and real-time data availability to make well-informed decisions.",
  },
  {
    id: 4,
    text: "Supply chain operations require transformation, with a focus on intelligence, speed and flexibility.",
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
    title: "End-to-End Implementation",
    desc: "Streamlining every phase of the implementation, we provide capability of successful and on-time delivery of Infor solution",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 5,
    title: "Managed Services",
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
const page = () => {
  return (
    <>
      <EntIntro
        title="Leverage High Performance and Scalable Warehouse Management for Increased Efficiency with Infor WMS"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Challenges
          // Solution Highlights
          // Industry Solutions
          // Benefits
          // Testimonial

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Solution Highlights",
              link: "#SolutionHighlights",
            },
            {
              _id: 3,
              title: "Industry Solutions",
              link: "#IndustrySolutions",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 5,
              title: "Testimonial",
              link: "#Testimonial",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Infor WMS, with its enhanced supply chain management features, integrated labor management tools and increased inventory visibility, ensures streamlined warehouse operations. The application includes inbuilt labor management and 3D visual analysis, offering visibility into inventory, orders, equipment, and personnel. Godrej Infotech’s collaborative approach involves working closely with Key Users throughout the entire process, ensuring that your operational processes receive continuous support. Our team proactively takes ownership of the diverse functionalities within Infor WMS and aim to develop new reports that provide a comprehensive 360° view of your operation's performance."></Abstract>

      {/* Challengers Encountered */}
      <>
        <div id="Challenges" className={`w-full bg-white pb-16`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Warehouse and Supply chain - Challenges
                  </h3>
                  <p>
                    To satisfy customers&#39; ever-increasing demands for speed,
                    availability and affordability, warehouses today confront
                    more obstacles than ever before.
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
      {/* Infor WMS Industry solutions */}
      <>
        <div id="SolutionHighlights" className={`w-full bg-[#FFF] pt-10`}>
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
                  Enhancing the features of business applications, our
                  specialized solutions intend to add value to business with
                  handy support, streamlined processes and intense industry
                  expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full pt-48 pb-12 relative bg-cover`}
          style={{ backgroundImage: `url('/industrySolutionsInfor.png')` }}
        >
          {/* Overlay for background image */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="max-w-screen-xl md:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-10 justify-center">
            {[
              {
                _id: 1,
                title: "Retail",
                list: [
                  {
                    _id: 1,
                    title:
                      "Dynamic slotting to meet the changing product needs.",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Interactive Web & Mobile Dashboards.",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title:
                      "Omnichannel fulfilment combines in-store, depot and warehouse channels for customer orders.",
                    url: "/",
                  },
                ],
                cta: "",
                ctaUrl: "",
              },
              {
                _id: 2,
                title: "3 PL Logistics",
                list: [
                  {
                    _id: 1,
                    title: "Tailored 3PL Dashboard for Intelligent Reporting",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Advanced Inventory, Space and Labor Optimization",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title: "Multi-Warehouse, Multi-Owner Support",
                    url: "/",
                  },
                ],
                cta: "",
                ctaUrl: "",
              },
              {
                _id: 3,
                title: "Trading and Distribution",
                list: [
                  {
                    _id: 1,
                    title: "Warehouse optimisation",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Order fulfilment",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title: "Inventory management",
                    url: "/",
                  },
                  {
                    _id: 4,
                    title: "Minimize stockouts",
                    url: "/",
                  },
                ],
                cta: "",
                ctaUrl: "",
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
                      className="text-[#101828] hidden bg-[#F5F5F5] py-4 px-8 mt-4 text-[16px] font-medium leading-[22px] w-fit    transition-all hover:opacity-75  "
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

      {/* Infor WMS Key Highlights */}
      <>
        <div id="IndustrySolutions" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor WMS Key Highlights
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Extending the capabilities of Infor with tailored functional
                  enhancements for enhancement of business productivity
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full pt-48 pb-12 bg-[url('/InforWMSKeyHighlights.png')]`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 justify-center">
            {[
              {
                _id: 0,
                title: "3D Visualization",
                desc: "Experience streamlined operations with Infor WMS's 3D visual warehouse, providing real-time insights into bottlenecks and asset utilization.",
                cta: "",
                link: "",
              },
              {
                _id: 1,
                title: "Advanced Warehousing Processes",
                desc: "Enhance efficiency with RF receiving, voice-enabled pick/pack operations, and dynamic put-away options.",
                cta: "",
                link: "",
              },
              {
                _id: 2,
                title: "3PL Billing",
                desc: "Infor WMS integrates advanced activity-based features, enabling precise customer-level costing, billing, and invoicing. It supports multi-warehouse and multi-owner operations with tailored workflows and full traceability.",
                cta: "",
                link: "",
              },
              {
                _id: 3,
                title: "Labor Management & Configurability",
                desc: "The user experience is tailored for productivity, enabling you to measure, assess, and optimize DC activities, identify bottlenecks, and maintain resource balance with engineered labor standards and performance metrics.",
                cta: "",
                link: "",
              },
            ].map((item, index) => {
              return (
                <div key={index} className="mx-5 bg-white ">
                  <div className="p-5 w-fit ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-[22px] text-[#475467]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden w-full bg-[#0745D3] p-5">
                    <Link
                      href={item.link}
                      className="text-white  flex transition-all hover:opacity-75  "
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

      {/* Supply System */}
      <>
        <div
          className={`w-full hidden pt-48 pb-12 bg-[url('/SupplySystem.png')] bg-center bg-cover sm:bg-cover `}
        >
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="text-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor WMS - Intelligent Supply System
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Infor WMS is a cloud-based Tier-1 solution, reshaping
                  warehouse operations through advanced functionalities ensuring
                  efficient fulfillment in a dynamic business landscape. With
                  Infor WMS, enterprises gain a competitive edge, ready to
                  tackle the ever-evolving demands of the modern market.
                </p>
              </div>
            </div>
            {/* right */}
          </div>
        </div>

        {/* Overlay for background image */}
      </>

      {/* Benefits */}
      <Benefits
        ribbon="Infor WMS Benefits"
        ribbonTxtWhite="true"
        title="Achieving warehouse operation goals in an excellent way"
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title: "Personalised user interface in 14 languages",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title: "Seamless integration with ERP systems for smooth data flow",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title: "Reduction in space requirements",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title: "Gain immediate warehouse insights",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title: "Improve inventory throughput and management",
          },
          {
            _id: 6,
            icon: "Benefits-upgradeCloud/IntegrateBigDataAnalytics",
            title:
              "Efficient handling of B2B and D2C processing in one facility",
          },
          {
            _id: 7,
            icon: "Benefits-upgradeCloud/SecurelyStores",
            title: "Significant transportation costs savings ",
          },
        ]}
      ></Benefits>

      {/* Testimonial */}
      {/* <Testimonial
        ribbon="Testimonials "
        title="What Experts Think About Us "
        desc="It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "IT Manager",
            thumbnail: "1",
            description:
              "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
            category: "static",
            link: "/",
          },
        ]}
      /> */}

      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted Customers share their Experiences"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "IT Manager",
            thumbnail: "1",
            description:
              "India's Premier hi-tech Engineering Solutions Provider thanks GITL for the excellent work for cloud-enabling our Infor environment. The services provided were of high quality and we recommend Godrej Infotech as a professional cloud services provider.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation: "Manager Sales and Support",
            thumbnail: "1",
            description:
              "Leading Manufacturer of Antenna System Technology Implements Infor ERP LN. We have received timely inputs and guidance across the modules that have been implemented on the system.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation: "Manager Sales and Support",
            thumbnail: "1",
            description:
              "Leading Manufacturer of Antenna System Technology Implements Infor ERP LN. We have received timely inputs and guidance across the modules that have been implemented on the system.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title:
              "How does Infor WMS Enhances Visibility and Control in Warehousing?",
            desc: "In today's complex supply chain ecosystem, the efficient management of warehouses is crucial. Infor Warehouse Management System (WMS) emerges as a sophisticated solution that optimizes inventory control, order processing, and overall warehouse efficiency. It acts as the linchpin, harmonizing operations and providing a comprehensive platform for effective warehouse management.",
            cta: "Know More",
            link: "",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Explore Successful Infor WMS Journey"
        desc="World's top-notch businesses choose us for our excellent technical acumen and provide standards as we deliver high performing multi-disciplinary solutions across the spectrum of industries."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Multinational company specializing in international express courier services automates operations and streamlines order picking process with Infor WMS",
            thumbnail: "1",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 2,
            title:
              "Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN Implementation",
            thumbnail: "2",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
          },
        ]}
      />

      {/* Expertise */}
      <div className="hidden">
        <Expertise
          ribbon="Our Expertise "
          ribbonTxtWhite="true"
          title="Future Outlook with Intelligent Technologies  "
          desc="We are here to build edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
          arr={[
            {
              title: "85%",
              desc: "IDC states that 85% of enterprises to merge human expertise with AI, ML& NLP by 2026 ",
            },
            {
              title: "$200B",
              desc: "Forbes forecasts size for AI market by 2026 ",
            },
            {
              title: "$6.6T",
              desc: "PwC Research claims that $6.6T productivity growth is projected by 2030  ",
            },
          ]}
        ></Expertise>
      </div>

      {/* Subscription */}
      <div className="">
        <Subscription
          title="Fill in the form to schedule a discussion and strengthen your operations control, starting today!"
          blue=""
          title2=""
          desc=""
        />
      </div>

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
