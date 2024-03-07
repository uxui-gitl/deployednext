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

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../../public/Power-App.png";
import Birst from "../../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../../public/dummy.png";

import Icon from "@mdi/react"; // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { mdiBullseyeArrow, mdiTableLarge } from "@mdi/js";
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
import WhySection from "@/components/WhySection";
import clsx from "clsx";
import Benefits from "@/components/Benefits";
import Subscription from "@/components/Subscription";
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import InsightSlider from "@/components/InsightSlider";
import Abstract from "@/components/Abstract";
const blogData = [
  {
    _id: 1,
    ribbon: "Blog",
    title: "Why customizing hxgn eam is important for your business",
    desc: "Every advantage counts in the extremely competitive asset management market of today. Thus, it's critical to comprehend why Customizing HxGN EAM is a game-changer rather than just a nice-to-have.",
    cta: "Know More",
    link: "/",
    imgUrl: "hxgn_blog",
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
    title: "Healthcare",
    imgUrl: "Healthcare",
    url: "/",
  },
  {
    _id: 2,
    title: "Facility Management",
    imgUrl: "FacilityManagement",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading & Distribution",
    imgUrl: "TradingDistribution",
    url: "/",
  },
  {
    _id: 4,
    title: "Manufacturing",
    imgUrl: "Manufacturing",
    url: "/",
  },
  {
    _id: 5,
    title: "Projects",
    imgUrl: "Projects",
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
      title: "End-to-End Implementation ",
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
  const CoreCapabilitySlider = [
    {
      _id: 1,
      title: "Asset Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Record",
          url: "/",
        },
        {
          title: "Maintain",
          url: "/",
        },
        {
          title: "Structure",
          url: "/",
        },
        {
          title: "Standardize asset information",
          url: "/",
        },
      ],
    },
    {
      _id: 2,
      title: "Asset Performance Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Monitor Asset Performance",
          url: "/",
        },
        {
          title: "Predictive Maintenance",
          url: "/",
        },
        {
          title: "Asset Health Monitoring",
          url: "/",
        },
        {
          title: "Asset Lifecycle Management",
          url: "/",
        },
      ],
    },
    {
      _id: 3,
      title: "Work Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Work order generation and scheduling",
          url: "/",
        },
        {
          title: "Revision control",
          url: "/",
        },
        {
          title: "Case management",
          url: "/",
        },
        {
          title: "Purchase-order tracking",
          url: "/",
        },
        {
          title: "Preventive maintenance",
          url: "/",
        },
      ],
    },
    {
      _id: 4,
      title: "Inspection management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Simplify inspection routes.",
          url: "/",
        },
        {
          title: "Inspection planning and organization",
          url: "/",
        },
        {
          title: "Inspection point scheduling and classification",
          url: "/",
        },
      ],
    },
    {
      _id: 5,
      title: "Intelligent nonconformity tracking",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Potential issues quick detection",
          url: "/",
        },
        {
          title: "Issues segmentation based on preset nonconformity index.",
          url: "/",
        },
      ],
    },
    {
      _id: 6,
      title: "Safety management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Identify and control all hazardous situations.",
          url: "/",
        },
        {
          title: "HSE compliance regulations.",
          url: "/",
        },
      ],
    },
    {
      _id: 7,
      title: "Asset management services",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Service cost tracking delivered to customers.",
          url: "/",
        },
        {
          title: "Automatic cost inclusion through invoices",
          url: "/",
        },
      ],
    },
    {
      _id: 8,
      title: "Electronic records and signatures",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Electronic records of database events requiring signature",
          url: "/",
        },
        {
          title: "Preventative management version control",
          url: "/",
        },
        {
          title: "Track attribute changes for every table in HxGN EAM",
          url: "/",
        },
      ],
    },
    {
      _id: 9,
      title: "Calibration",
      cta: "Know more",
      ctaUrl: "",
      icon: "dummy",
      links: [
        {
          title:
            "Track calibration data for equipment categories, assets, systems and positions",
          url: "/",
        },
        {
          title: "Define test point data",
          url: "/",
        },
        {
          title:
            "Associate test-point sets with work orders and preventive maintenance work orders",
          url: "/",
        },
      ],
    },
  ];
  return (
    <>
      <EntIntro
        title="Gain Asset Management Visibility for Informed Capital Investments with HxGN EAM"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          // Capabilities
          // Industries
          // Benefits
          // Insights
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
              title: "Insights",
              link: "#Insights",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview */}
      {/* Overview  */}
      <Abstract abstractdesc="HxGN EAM, formerly known as Infor EAM, offers holistic solutions to address the pressing challenges of asset performance in both the present and the future. This robust and adaptable solution helps in attaining enhanced insights into your assets, elevating their reliability and performance while efficiently reducing the total cost of ownership. Godrej Infotech has successfully implemented HxGN EAM for a diverse range of clients, each experiencing tangible improvements in their asset management processes. Our expertise extends to deploying predictive maintenance strategies, leveraging real-time data to anticipate asset issues, reduce downtime and optimize maintenance costs."></Abstract>

      {/* Core Capabilities */}
      <>
        <div id="Capabilities" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5  ">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Core Capabilities
                </h3>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Beyond static approaches, HxGN EAM dynamically adapts to the
                    lifecycle stages ensuring assets remain at their peak
                    throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` pt-48 pb-12 bg-[url('/bgEcomScreen.png')] flex justify-center items-center w-full`}
          >
            <div className="text-left max-w-screen-xl md:max-w-screen-xl ">
              <Swiper
                slidesPerView={"auto"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {CoreCapabilitySlider.map((item) => (
                  <>
                    <SwiperSlide
                      key={item._id}
                      className="w-[283px] max-w-[283px] mr-4  relative group"
                    >
                      <div className="bg-[#EDF1FF]" key={item._id}>
                        <div className=" h-full flex flex-col justify-between">
                          <div className=" p-5">
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
                            className="text-[#fff] bg-[#0745D3]  p-5 w-full text-[14px] font-medium leading-[22px]  flex transition-all hover:opacity-75  "
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
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      <>
        <div id="Industries" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-center  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] mb-3 md:w-[90%] ">
                  Understanding unique demands of industry vertical and
                  capitalizing Infor CloudSuite capabilities, we equip
                  businesses to thrive in competitive market.
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

      {/* Assest Managment Solutions */}
      <>
        <div className={` w-full bg-[#FFF] hidden pt-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-center  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Best in class Asset management Solution
                </h3>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div className="flex flex-col md:flex-row gap-8">
                  {[0, 1].map((item, index) => (
                    <div className="w-1/2 my-4" key={index}>
                      <Image
                        src={`/placeholderImage.png`}
                        height={350}
                        width={283}
                        alt="icon"
                        className="w-full"
                      />
                      <div className="  ">
                        <p className="text-[16px] text-left text-black  w-fit leading-[22px] my-4 font-semibold ">
                          HxGN EAM is recognized as a leader in the 2022
                          Verdantix Green Quadrant for Enterprise Asset
                          Management Software for its strengths in resource
                          planning, work management and analytics
                        </p>
                      </div>
                      <Link
                        href={"/"}
                        className="flex text-[14px] text-[#0745D3] leading-[22px]  max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                      >
                        Know more
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Insights slider */}
      <BlogSlider arr={blogData} />

      {/* Benefits */}

      <Benefits
        ribbon="The HxGN EAM advantage"
        ribbonTxtWhite="true"
        title="Discover the Key Tangible Benefits for Increased Business Efficiency and Cost Reduction."
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title:
              "Up to a 50% Reduction in maintenance overtime, labor and contractor costs",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title: "20% Reduction in production downtime",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title: "50% Increase in warranty cost recovery",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title: "30% Reduction in inventory levels",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title: "20% Reduction in inventory carrying costs",
          },
          {
            _id: 6,
            icon: "Benefits-upgradeCloud/IntegrateBigDataAnalytics",
            title: "10% Reduction in materials costs",
          },
          {
            _id: 7,
            icon: "Benefits-upgradeCloud/SecurelyStores",
            title: "50% Reduction in purchasing process costs",
          },
          {
            _id: 8,
            icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
            title: "20% Improvement in labor productivity",
          },
        ]}
      ></Benefits>
      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="EHxGN EAM Project Highlights"
        desc=""
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Indian based Global Oncology Pharmaceuticals Company Implements HxGN EAM Solution",
            thumbnail: "IndianBasedGlobal",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 2,
            title:
              "Indian Prominent Healthcare Organization Offering Emergency Medical Response Services Upgrades to Hexagon EAM 11.6.",
            thumbnail: "IndianProminentHealthcare",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="It is our Hexagon EAM expertise, experience and commitment to excellence that sets us apart in a competitive landscape."
        arr={[
          {
            _id: 1,
            desc: "Trusted global alliance partner for Infor and Hexagon.",
            icon: "",
          },
          {
            _id: 2,
            desc: "Our experts possess deep domain knowledge and a proven track record of success.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Expertise in delivering innovative solutions that address your most complex digital transformation needs.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready to Optimize Your Asset Performance?"
        blue="Let's Discuss!"
        title2=""
        desc="Talk to our experts to discuss your requirements"
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
