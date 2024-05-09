"use client";
import React, { useCallback, useEffect, useState } from "react";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
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

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Expertise from "@/components/Expertise";
import Benefits from "@/components/Benefits";

import Testimonial from "@/sections/testimonial/Testimonial";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import WhySection from "@/components/WhySection";
import Abstract from "@/components/Abstract";

import InsightSlider from "@/components/InsightSlider";

const Page = () => {
  const [selectedColumn, setSelectedColumn] = useState(0);

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
  const handleColumnClick = (columnId) => {
    setSelectedColumn(columnId);
  };
  const eComCapabilities = [
    {
      _id: 1,
      title: "Omnichannel Engagement ",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Buying Experience: Immersive buying experience across channels, uniting digital, in-store and back-office operations on a unified platform.",
        "Consistent Customer Engagement: Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
        "Flexible Purchase Options: Freedom to select preferred method, facilitating integrated ordering and fulfilment.",
        "Efficient Sales Promotions: Centrally manage and oversee sales promotions across channels with real-time data.",
        "Enhanced B2B Engagement: Tailored functionality for B2B organizations and self-service purchasing experiences.",
      ],
    },
    {
      _id: 2,
      title: "Customer Loyalty and Personalization",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Buying Experience: Immersive buying experience across channels, uniting digital, in-store and back-office operations on a unified platform.",
        "Consistent Customer Engagement: Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
        "Flexible Purchase Options: Freedom to select preferred method, facilitating integrated ordering and fulfilment.",
        "Efficient Sales Promotions: Centrally manage and oversee sales promotions across channels with real-time data.",
        "Enhanced B2B Engagement: Tailored functionality for B2B organizations and self-service purchasing experiences.",
      ],
    },
    {
      _id: 3,
      title: "Streamlined Digital Commerce",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Buying Experience: Immersive buying experience across channels, uniting digital, in-store and back-office operations on a unified platform.",
        "Consistent Customer Engagement: Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
        "Flexible Purchase Options: Freedom to select preferred method, facilitating integrated ordering and fulfilment.",
        "Efficient Sales Promotions: Centrally manage and oversee sales promotions across channels with real-time data.",
        "Enhanced B2B Engagement: Tailored functionality for B2B organizations and self-service purchasing experiences.",
      ],
    },
    {
      _id: 4,
      title: "AI-Driven Intelligent Commerce ",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Buying Experience: Immersive buying experience across channels, uniting digital, in-store and back-office operations on a unified platform.",
        "Consistent Customer Engagement: Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
        "Flexible Purchase Options: Freedom to select preferred method, facilitating integrated ordering and fulfilment.",
        "Efficient Sales Promotions: Centrally manage and oversee sales promotions across channels with real-time data.",
        "Enhanced B2B Engagement: Tailored functionality for B2B organizations and self-service purchasing experiences.",
      ],
    },
    {
      _id: 5,
      title: "Connected Customer Journeys ",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Buying Experience: Immersive buying experience across channels, uniting digital, in-store and back-office operations on a unified platform.",
        "Consistent Customer Engagement: Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
        "Flexible Purchase Options: Freedom to select preferred method, facilitating integrated ordering and fulfilment.",
        "Efficient Sales Promotions: Centrally manage and oversee sales promotions across channels with real-time data.",
        "Enhanced B2B Engagement: Tailored functionality for B2B organizations and self-service purchasing experiences.",
      ],
    },
    {
      _id: 6,
      title: "Headless, Scalable API-First Solution ",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Buying Experience: Immersive buying experience across channels, uniting digital, in-store and back-office operations on a unified platform.",
        "Consistent Customer Engagement: Hassle-free engagement, allowing customers to choose when, how and where they purchase.",
        "Flexible Purchase Options: Freedom to select preferred method, facilitating integrated ordering and fulfilment.",
        "Efficient Sales Promotions: Centrally manage and oversee sales promotions across channels with real-time data.",
        "Enhanced B2B Engagement: Tailored functionality for B2B organizations and self-service purchasing experiences.",
      ],
    },
  ];

  const [selectedCapability, setSelectedCapability] = useState(0);

  const handleClick = useCallback((index) => {
    setSelectedCapability(index);
  }, []);

  return (
    <>
      <EntIntro
        title="Get Scalable and Mobile friendly E-Commerce Platform to Build and Elevate Your Online Business for Growth"
        desc=""
        cta="Let's Connect"
        width="75%%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          // Challenges
          // Industries
          // Solutions
          // Services
          // Capabilities

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Industries",
              link: "#Industries",
            },
            {
              _id: 3,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 4,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 5,
              title: "Capabilities",
              link: "#Capabilities",
            },
          ]}
        />
      </>

       {/* Overview  */}
        <Abstract abstractdesc="Well-designed and developed e-commerce website is crucial for retail success. It's not just about having an appealing appearance; it's about generating real sales and profits. A robust e-commerce portal streamlines the ordering process for your customers and contributes to building a solid brand image. With the expertise of Godrej Infotech, we ensure that your e-commerce platform is not only visually appealing but also technically optimized to drive business growth and enhance customer experience. Let us help propel your business to new heights in the digital landscape."></Abstract>


      {/* On premises Challenges*/}
      <>
        <div id="Challenges" className={` w-full bg-[#f2f4f7] py-24`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-[#f2f4f7]">
              <div className="  ">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                  <h3 className="text-left text-4xl leading-[42px] font-bold">
                    On-premises <br /> Infrastructure Challenges
                  </h3>
                </div>
              </div>
            </div>
          </>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-[#f2f4f7] flex items-start flex-col justify-start">
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
                      <p className="flex gap-4 mb-4 border-dashed border-b-2 pb-3 text-base leading-[22px]">
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

      {/* Capabilites grid */}
      <>
        <div id="Industries" className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-center max-w-screen-xl sm:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem]  flex justify-center flex-row">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Globally Trusted Core Infor expertise
                </h3>
                <p>
                  We deliver high-performing services for a comprehensive suite
                  Microsoft ecosystem, devised to elevate growth and
                  productivity and build stronger stakeholder connections
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full  `}>
          <div className="grid my-32 max-w-screen-xl sm:max-w-screen-xl mx-auto col-span-1 grid-cols-1 sm:grid-cols-5 grid-rows-3 w-full">
            {eComCapabilities.map((item, index) => (
              <div
                key={index}
                className={`mb-2 capability-item ${
                  selectedCapability === index ? "selected" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <div className="h-full">
                  <div
                    className={`flex justify-between p-4  flex-col h-full ${
                      selectedCapability === index
                        ? "bg-[#0745D3] text-white transition-all"
                        : "transparent text-inherit transition-all"
                    }`}
                  >
                    <div>
                      <Image
                        src={`/${item.icon}.png`}
                        height={36}
                        width={36}
                        alt="dummy"
                      />
                      <p className="text-[26px] font-bold leading-[34px]">
                        {item.title}
                      </p>
                    </div>
                    <Link
                      href={item.ctaUrl}
                      className={`flex text-[14px] leading-[22px] mt-10 max-w-max text-[#0745D3] items-center font-medium hover:scale-105 ${
                        selectedCapability === index
                          ? " text-white transition-all"
                          : " text-inherit transition-all"
                      }`}
                    >
                      Know More
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {selectedCapability !== null && (
              <div className="bg-img-ecom col-span-3 row-span-3 col-start-3 row-start-1 relative">
                <div className="absolute inset-0 bg-[#0745D3] bg-opacity-80 transition-opacity ">
                  <div className="absolute top-4 p-8 left-4 text-white">
                    <h3 className="text-[30px] text-white w-fit leading-[42px] font-bold mb-5">
                      {eComCapabilities[selectedCapability].title}
                    </h3>
                    <ul>
                      {eComCapabilities[selectedCapability].list.map(
                        (item, index) => (
                          <li
                            key={index}
                            className="border-b-[1px] mb-4 text-[14px] font-medium leading-[16px] pb-2"
                          >
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>

      {/* grid test */}

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title="AI&ML "
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business."
        arr={[
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
              "Effortless communication and efficient information retrieval through Natural Language Processing",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Revolutionising Healthcare with medical image analysis",
          },
        ]}
      ></Benefits>

      {/* 3 columsn */}
      <>
        <>
          <div id="Solutions" className={` w-full bg-[#FFF] pt-24`}>
            <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    Industry Solutions
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-normal leading-[22px] md:w-[90%] ">
                    Embrace the future and stay ahead in digital era, harnessing
                    the potential of innovative technologies.
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
                  title: "Retail Automations",
                  desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                  list: [
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                  ],
                },
                {
                  _id: 2,
                  title: "Intelligent Merchandising ",
                  desc: "Improvement in customer experiences, facilitating acceleration and optimized business operations.",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  cta: "Know More",
                  link: "/",
                  list: [
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                  ],
                },
                {
                  _id: 3,
                  title: "Customers Recommendation ",
                  desc: "Improvement in customer experiences, facilitating acceleration and optimized business operations.",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  cta: "Know More",
                  link: "/",
                  list: [
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
                    "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
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
                      <p className="text-[16px] font-medium leading-[22px] text-[#101828]">
                        {item.desc}
                      </p>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5">
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

      {/* Why Infotech */}
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
            thumbnail: "",

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
            thumbnail: "",

            description: "Coffee Brand Distributor in Egypt and Middle East",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

      {/* Testimonial */}
      <Testimonial
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
      />

      {/* Subscription */}
      <Subscription
        title="Ready to Streamline Your
        Business Operations? "
        blue=" "
        title2=""
        desc="Talk To Our Experts to discuss your requirements "
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default Page;
