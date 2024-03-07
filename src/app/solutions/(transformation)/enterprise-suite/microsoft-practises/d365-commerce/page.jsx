"use client";
import React, { useCallback, useEffect, useState } from "react";
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

import InsightSlider from "@/components/InsightSlider";
import { Abstract, NewTestimonial } from "@/components";

const Page = () => {
  const [selectedColumn, setSelectedColumn] = useState(0);

  const lists = [
    {
      id: 1,
      text: "Need of digital self-service purchase options for seamless customer experiences.",
    },
    {
      id: 2,
      text: "Real-time insights to enable proactive responses to customer demands.",
    },
    {
      id: 3,
      text: "Solve data silos and inefficiencies to improve collaboration, data access and decision-making.",
    },
    {
      id: 4,
      text: "Precise information and reporting for tracking sales, customer acquisition costs and inventory turnover metrics.",
    },
    
  ];
  const handleColumnClick = (columnId) => {
    setSelectedColumn(columnId);
  };
  const ChoiceSlider = [
    {
      _id: 1,
      imgUrl: "Industry-Spotlight-Manufacturing",
      title: "Retail",
      desc: "",
      url: "/",
    },
    {
      _id: 2,
      imgUrl: "Industry-Spotlight-Retail",
      title: "Duty-Free and Travel Retail",
      desc: "",
      url: "/",
    },
    {
      _id: 3,
      title: "Food and Beverage ",
      desc: "",
      imgUrl: "Industry-Spotlight-rading-and-Distribution",
      url: "/",
    },
    
  ];
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
        "Enhanced Customer Experiences: Offer personalized product selections across shopping channels.",
        "Expanded Purchasing Options: Give customers access to your full product catalogue, regardless of stock levels or location.",
        "Comprehensive Customer View: Seamlessly connect physical and digital storefronts for a 360-degree view of customer data.",
        "Employee Empowerment: Build lasting customer relationships through AI-driven recommendations and loyalty programs.",
        "Enhanced Sales Capabilities: Utilize native support for D365 Sales and Customer Service",
      ],
    },
    {
      _id: 3,
      title: "Streamlined Digital Commerce",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Dynamic Website Creation: Launch dynamic websites effortlessly with a user-friendly visual page builder.",
        "Elevated Shopper Engagement: Enhance engagement with personalized, content-driven commerce strategies.",
        "Improved B2B Experience: Enhance B2B purchasing with intelligent B2C-like features and custom catalogues.",
        "Efficient Channel Management: Manage content, assets, promotions, stock and pricing across all channels.",
        "Optimized Digital Channels: Implement experiments and personalization for digital growth.",
      ],
    },
    {
      _id: 4,
      title: "AI-Driven Intelligent Commerce ",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Sales Boost: Increase sales with AI-driven product recommendations.",
        "Revenue Enhancement: Enhance revenue and security with Dynamics 365 Fraud Protection.",
        "Conversion Elevation: Elevate conversion rates through AI-moderated ratings and reviews.",
        "Enhanced Product Discovery: Facilitate easy product discovery with intelligent search capabilities.",
        "Accessibility Prioritization: Prioritize accessibility with user-friendly content tools and Accessibility Insights.",
      ],
    },
    {
      _id: 5,
      title: "Connected Customer Journeys ",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Personalized Multichannel Journeys: Craft personalized journeys with Commerce and Dynamics 365 Marketing.",
        "Cart Abandonment Reduction: Decrease cart abandonment with engaging e-commerce experiences.",
        "24/7 AI-Powered Support: Provide round-the-clock AI-powered chatbot support with Dynamics 365 Customer Service.",
        "Customer Satisfaction Enhancement: Enhance satisfaction with an intuitive call centre and service management.",
        "Data-Driven Targeting: Target customers effectively through data-driven segmentation for relevant campaigns.",
      ],
    },
    {
      _id: 6,
      title: "Headless, Scalable API-First Solution",
      cta: "Explore Solutions",
      icon: "dummy",
      ctaUrl: "/",
      list: [
        "Adaptable Commerce: Deploy adaptable, API-first commerce for various channels.",
        "Global Business Flexibility: Customize your solution effortlessly to match global business requirements.",
        "Data Security: Go global with flexible deployment options and secure data management.",
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
        title="Scale Up Your Omnichannel Business with Personalised Experience - Microsoft D365 Commerce"
        desc=""
        cta="Let's Connect"
        width="75%%"
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

      {/* OVerview with list */}
      <Abstract
        abstractdesc="Dynamics 365 Commerce offers a complete solution to increase customer engagement through intuitive shopping experiences. It brings together several retail channels, including back-office, in-store, call centre, and digital building a unified framework. Further, this solution attunes with the evolving consumer behavior and research-driven purchasing to   meet customer demands. One of the significant aspects that distinguish Godrej Infotech from other Microsoft partners is its meticulous implementation approach.  Partnership with us brings speed, improved outcomes, quality and industry best practices along with proven retail and supply chain practice and global support."
        list={false}
        // ribbon="Commerce"
        listArr={[
          { _id: 1, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 2, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 3, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 4, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 5, icon: "dummy", title: "Customer loyalty retention" },
        ]}
      ></Abstract>

      {/* On premises Challenges*/}
      <>
        <div className={` w-full bg-[#f2f4f7] py-24`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-[#f2f4f7]">
              <div className="  ">
                <div className="md:flex-row flex-col flex text-left gap-x-10">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                   Challenges of Retail and Ecommerce Management
                </h3>
                <p className="font-medium leading-[22px] md:w-[80%] mx-auto mb-10">
                 Customers now seek personalized experiences, seamless interactions, and a sense of connection with the brands they choose. Businesses face the challenge of understanding this shift and creating strategies that resonate with each customer&#39;s individuality. The rapid pace of technological evolution poses a risk for retailers; failing to adapt may disconnect them from their tech-savvy customer base. Adaptability is crucial for businesses to stay connected and relevant in this evolving landscape. 
                </p>
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
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-center max-w-screen-xl sm:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem]  flex justify-center flex-row">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Key Capabilities
                </h3>
                <p>
                  Dive deep into the fundamental strengths of D365 Commerce, equipping your business with powerful tools for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full  `}>
          <div className="grid my-16 max-w-screen-xl sm:max-w-screen-xl mx-auto col-span-1 grid-cols-1 sm:grid-cols-5 grid-rows-3 w-full">
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
                  <div className="absolute top-4 p-8 left-4 text-white flex justify-between h-[90%] flex-col">
                    <div>
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
                    <div className="w-fit">
                      <Link
                        href={"/"}
                        className="min-w-max flex bg-[#F5F5F5] py-2 px-10 border-2 border-[#F5F5F5] font-medium text-base text-[#101828] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                      >
                        {eComCapabilities[selectedCapability].cta ||
                          "Know More"}

                        <Icon
                          path={mdiArrowRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits"
        ribbonTxtWhite="true"
        title=""
        desc="Explore business efficiency and customer-centric experiences with D365 commerce"
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "AI-based suggestions for cross-selling and up-selling that improves customer buying propositions.",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Strengthened commerce operations and customer experiences with omnichannel selling and real-time inventory visibility.",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Open access to full product catalogues and advanced in-built tools for proactive actions and decision-making.",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Connected view of marketing and commerce operations for improved coordination.",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Engaging digital storefronts with user-friendly web authoring and development tools.",
          },
        ]}
      ></Benefits>

      {/* 3 columsn */}
      <div className="hidden">
        <>
          <div className={` w-full bg-[#FFF] pt-24`}>
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
      </div>

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="Our substantial experience and expertise in implementing the D365 Commerce solution guarantees a business system that impeccably aligns with the unique requirements of your organization."
        arr={[
          {
            _id: 1,
            desc: "Strong track record in Customer and Channel Commerce (C-Commerce) domain.",
            icon: "",
          },
          {
            _id: 2,
            desc: "Proficiency in Magento CE & Enterprise for a seamless end-to-end customer experience journey.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Expertise in developing native iOS and Android apps for end-users, dealers, and sales personnel.",
            icon: "",
          },
          {
            _id: 4,
            desc: "Gold Partnership with Microsoft and specialized expertise in retail vertical, SMEs, and Channel Commerce.",
            icon: "",
          },


          {
            _id: 5,
            desc: "Troubleshoot, evaluates and optimizes D365 Commerce solution with expertise.",
            icon: "",
          },
          {
            _id: 6,
            desc: "Global delivery model and pool of certified D365 experts.",
            icon: "",
          },
          {
            _id: 7,
            desc: "Microsoft cloud partner and proven history of working with small, medium and large size enterprises.",
            icon: "",
          },
          
          
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Industry Served Slider */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Served
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
                    className="mySwiper h-[350px]"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden h-[350px]">
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

      {/* Expertise */}
      <div className="hidden">
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
      </div>

      {/* Case Study */}
      <div className="hidden">
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
              thumbnail: "",

              description:
                " Middle East-based Electrical Products Manufacturer ",
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
      </div>

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Blog",
            title: "The Significance of Dynamics 365 Commerce in B2B Sales Evolution",
            desc: "In the realm of B2B digital sales, Dynamics 365 Commerce stands as a beacon of innovation. This platform plays a pivotal role in reshaping B2B sales strategies, enabling businesses to navigate the digital landscape effectively. Dynamics 365 Commerce integrates cutting-edge technology and streamlined processes to elevate B2B digital sales practices. Understanding the essence of this platform is crucial in harnessing its potential to revolutionize B2B sales, marking a significant evolution in this arena.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Testimonials */}
      <div className="hidden">
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
              "ERP and Business Intelligence Head, Fast food service chain  ",
            thumbnail: "",
            description:
              "Appreciation to Godrej Infotech's team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We're experiencing significant improvements in operational efficiency.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Manager IT, India's leading Energy Management System and Solutions provider ",
            thumbnail: "",
            description:
              "Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "Manager IT, India's leading Energy Management System and Solutions provider ",
            thumbnail: "",
            description:
              "Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.",
            category: "static",
            link: "/",
          },
        ]}
      />
</div>
      {/* Subscription */}
      <Subscription
        title="Ready to strengthen your "
        blue="commerce experience?"
        title2=""
        desc="Share your details to leverage the competency of D365 Commerce for your business."
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default Page;
