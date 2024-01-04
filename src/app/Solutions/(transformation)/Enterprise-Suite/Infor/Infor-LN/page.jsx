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
    imgUrl: "1",
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "2",
    title: "Valve Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 3,
    title: "Valve Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "4",
    url: "/",
  },
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "1",
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "2",
    title: "Valve Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 3,
    title: "Valve 2 Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 4,
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "2",
    url: "/",
  },
];
const page = () => {
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
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 2,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 3,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 4,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 5,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 6,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 7,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 7,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
    {
      _id: 8,
      icon: "dummy",
      title: "Master Complexity",
      list: [
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
        "Better decision taking ability",
      ],
    },
  ];

  return (
    <>
      <EntIntro
        title="A Global ERP Cloud and On-Premises
        Solution for complex and large businesses"
        desc="Our expertise is refined and matured over years of close engagement with multiple enterprises, thus ensures that our customers derive maximum value from their Infor LN ERP. We offer end-to-end services across the application lifecycle (Plan-Build-Run) that enable us to design and deliver the right solutions "
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
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

      {/* Key Capabilites */}
      <>
        <div className={` w-full bg-[#fff] pt-20`}>
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
                          What all we are Capable of
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          We offer strategic insights, specialized knowledge and
                          experience in helping businesses adapt, grow and
                          thrive.
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
                <div className="flex justify-center flex-row items-start flex-wrap gap-4">
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
                              className="text-[16px] leading-[22px] font-normal text-[#475467]"
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
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector
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
        ribbon="Upgrade to Cloud Benefits "
        ribbonTxtWhite="true"
        title="Experience business performance surge with cloud"
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title: "Minimize operational expenses of IT portfolio",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title: "Enable user concurrency to support large-scale workloads",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title:
              "Enhanced collaboration through cross-device accessibility to information",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title:
              "Advanced data management solutions, modernized process and cloud services",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title: "Aptitude to respond to shifting business requirements",
          },
          {
            _id: 6,
            icon: "Benefits-upgradeCloud/IntegrateBigDataAnalytics",
            title:
              "Integrate Big Data Analytics into business processes for data-driven decision-making",
          },
          {
            _id: 7,
            icon: "Benefits-upgradeCloud/SecurelyStores",
            title: "Securely stores confidential business information",
          },
          {
            _id: 8,
            icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
            title:
              "Enhance system performance and user experience by scaling up the system",
          },
        ]}
      ></Benefits>

      {/* Why Infotech */}
      <WhySection
        ribbon="Spend LESS, GROW MORE"
        title="Why Godrej Infotech ?"
        desc="Embark on cloud upgradation journey by harnessing our credible
        assessment process, strategic resources and fluent data
        migration practice to minimise your business risk, time to
        market and cost. Our time-tested delivery framework enables
        businesses"
        arr={[
          {
            _id: 1,
            desc: "One of the most dedicated and <span style='color: #4C6FFF;'> reliable partners </span>  for Azure Migration Services and Managed Cloud Service across ",
            icon: "",
          },
          {
            _id: 2,
            desc: "<span style='color: #4C6FFF;'>1 Billion+</span> Unfailing Cloud Hosting availability managing <span style='color: #4C6FFF;'>40000+</span> VMs",
            icon: "",
          },
          {
            _id: 3,
            desc: "<span style='color: #4C6FFF;'>25000+</span> Apps and Databases migrated",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Industry Solutions Slider */}
      <>
        <div className={` w-full bg-[#F2F4F7] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <>
                <div className={`w-full bg-[#F2F4F7] text-left`}>
                  <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                    <div className="bg-[#F2F4F7] text-left">
                      <h4
                        className={`font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        Services for successful results
                      </h4>
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          Accomplishing Your Goals at Every stage
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          Enabling you to thrive in digital era, we prepare your
                          organisation with scaling growth for sustainable
                          tomorrow
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

      {/* Subscription */}
      <Subscription
        title="Let Us Transform Your "
        blue="Vision into Reality"
        title2=""
        desc="Complete the Form to Begin"
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
