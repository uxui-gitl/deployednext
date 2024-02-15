"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import Benefits from "@/components/Benefits";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import Awards from "@/sections/awards/Awards";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";

import infor from "../../../../../../public/upgradeCloud/infor.png";
import OracleDB from "../../../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../../../public/upgradeCloud/Dynamic.png";

import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import WhySection from "@/components/WhySection";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";

import Icon from "@mdi/react";
import Expertise from "@/components/Expertise";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Testimonial from "@/sections/testimonial/Testimonial";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import SpotlightImageGrid from "@/components/SpotlightImageGrid";

import styles from "./page.module.css";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import InsightSlider from "@/components/InsightSlider";
import { NewTestimonial } from "@/components";
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
const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title: "Migrate your IT Infrastructure to the Cloud",
    desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Dealer Management",
    desc: "Developed using Dot NET technology and integrated with Business Central, this cutting-edge solution eliminates manual data entry, reducing errors, streamlines processes and provides accurate information for better decision-making. Leveraging this solution customers can access real-time insights, track inventory, monitor sales and make data-driven decisions.",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Valve Manufacturing Process Management",
    desc: "Benefit to valve manufacturing businesses from pre-configured business process mapping that seamlessly aligns with your unique requirements. Our work-around solutions for intricate business processes ensure smooth operations even in challenging scenarios.",
    url: "/",
  },
  {
    _id: 3,
    title: "Metal Recycling Operations Management",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
  },
  // {
  //   _id: 4,
  //   title: "Dealer Management",
  //   desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
  //   imgUrl: "2",
  //   url: "/",
  // },
];
const UseCases = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Employee Access Creation ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Account Payable and Receivable Process",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Vendor Onboarding Process",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Customer Onboarding Process",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const page = () => {
  return (
    <>
      <EntIntro
        title="Maximize Asset Value and Productivity
        with HxGN EAM Godrej Infotech Expertise "
        desc="HxGN EAM, formerly known as Infor EAM, presents holistic solutions to address the pressing challenges of asset performance in both the present and the future"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section nav */}
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

      {/* MS Stack Slider */}
      <>
        <>
          <div className={`w-full text-left bg-[#fff] pt-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
              <div className="bg-[#fff] text-left">
                <div className="flex flex-col md:flex-row gap-8 ">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                    Maximizing Your Business Outcomes with Cloud Technology
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Our verified proficiency in execution and innovation in
                    cloud adaptability facilitate the process of business
                    transformation at each juncture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <div className={`w-full bg-[#fff] text-left  `}>
          <div className="  max-w-screen  md:max-w-screen  mx-auto pt-5   ">
            <SpotlightImageGrid
              arr={[
                {
                  _id: 1,
                  title: "Infrastructure",
                  expandedTitle: "Infrastructure",
                  bgImg: "bg1",
                  bgColor: "",
                  linksArr: [
                    {
                      _id: 1,
                      title:
                        "Infrastructure as a Service(IAAS) and Virtual Desktop Infrastructure (VDI)",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Platform as a Service(PAAS)",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Disaster Recovery as a Service(DrAAS)",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Database as a Service(DBaaS",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "BaaS: Backup as a Service(BaaS)",
                      url: "/",
                    },
                    {
                      _id: 6,
                      title: "Azure IoT",
                      url: "/",
                    },
                    {
                      _id: 7,
                      title: "DevOps and Bespoke Applications",
                      url: "/",
                    },
                    {
                      _id: 8,
                      title: "Hybrid and Multicloud Managed Services",
                      url: "/",
                    },
                  ],

                  ctaBtn: false,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 2,
                  title: "M365",
                  expandedTitle: "M365",
                  bgImg: "",
                  bgColor: "#101828",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Office apps and services",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Collaboration Tools",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Cloud storage",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Device Security and Access Management",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "Lowcode Application Development",
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
                  expandedTitle: "Business Applications",
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
                {
                  _id: 4,
                  title: "Infrastructure",
                  expandedTitle: "Infrastructure",
                  bgImg: "bg1",
                  bgColor: "",
                  linksArr: [
                    {
                      _id: 1,
                      title:
                        "Infrastructure as a Service(IAAS) and Virtual Desktop Infrastructure (VDI)",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Platform as a Service(PAAS)",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Disaster Recovery as a Service(DrAAS)",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Database as a Service(DBaaS",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "BaaS: Backup as a Service(BaaS)",
                      url: "/",
                    },
                    {
                      _id: 6,
                      title: "Azure IoT",
                      url: "/",
                    },
                    {
                      _id: 7,
                      title: "DevOps and Bespoke Applications",
                      url: "/",
                    },
                    {
                      _id: 8,
                      title: "Hybrid and Multicloud Managed Services",
                      url: "/",
                    },
                  ],

                  ctaBtn: false,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 5,
                  title: "M365",
                  expandedTitle: "M365",
                  bgImg: "",
                  bgColor: "#101828",
                  linksArr: [
                    {
                      _id: 1,
                      title: "Office apps and services",
                      url: "/",
                    },
                    {
                      _id: 2,
                      title: "Collaboration Tools",
                      url: "/",
                    },
                    {
                      _id: 3,
                      title: "Cloud storage",
                      url: "/",
                    },
                    {
                      _id: 4,
                      title: "Device Security and Access Management",
                      url: "/",
                    },
                    {
                      _id: 5,
                      title: "Lowcode Application Development",
                      url: "/",
                    },
                  ],

                  ctaBtn: true,
                  ctaUrl: "/",
                  cta: "Know More",
                },
                {
                  _id: 6,
                  title: "Business Applications",
                  expandedTitle: "Business Applications",
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
              ]}
            />
          </div>
        </div>
      </>

      {/* Microsoft Services */}
      <>
        <div className={`bg-ms-practise w-full    py-32  `} id="productivity">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#fff]  leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium text-[#fff] leading-[22px] md:w-[90%] ">
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
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
            {UseCases.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className=" mx-2 bg-white sm:w-[320px] w-fit flex flex-col justify-between"
                >
                  <div className="p-5 w-fit ">
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
                      hidden: item.link === "/" || item.link === "",
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
              );
            })}
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
                  Industry Spotlight
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
                  Our expansive worldwide network of market innovators enables
                  us to embrace breakthrough technologies and confront business
                  roadblocks effectively.
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
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Addon solution - Slider */}
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
                        Accelerating Business Engineering
                      </h4>
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          Godrej Infotech Solutions
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          Resolving complex business challenges and seizing
                          growth opportunities through our purpose driven
                          solutions designed by our experts.
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
                            src={`/IndustrySolutionsSlider/${item.imgUrl}.jpg`}
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

      {/* Seamless Seamless Implementation to Customer Centric Support
       */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px] sm:text-[68px] sm:leading-[84px] leading-[54px] mb-3 font-bold ">
                  Seamless Implementation to Customer Centric Support
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  We leverage time-tested methodologies such as waterfall, rapid
                  methodologies and agile to pilot our implementation approach
                  according to the specific project requirements. Our prior
                  purpose is to assure optimal system performance. While
                  addressing system glitches, we understand their implications
                  on our customers&apos; business processes, and prioritize on
                  the swift resolutions. Our support services are all ears with
                  dedicated and shared teams, enabling us to effectively address
                  our customers&apos; unique support requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Testimonials */}
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
            thumbnail: "1",
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
            thumbnail: "1",
            description:
              "Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Blog */}
      <BlogSlider arr={blogData} />

      {/* Awards n achievements */}
      <div className="hidden">
        <Awards />
      </div>

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

export default page;
