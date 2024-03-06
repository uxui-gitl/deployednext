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
import { mdiBullseyeArrow, mdiEyeOutline } from "@mdi/js";
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
import Abstract from "@/components/Abstract";
import {
  Benefits,
  Capabilities,
  NewTestimonial,
  OfferingsSlider,
  Spotlight,
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
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Employee Access Creation ",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Account Payable and Receivable Process",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Vendor Onboarding Process",
    cta: "Know More",
    link: "/",
    desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
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
const ConsiderRPA = [
  {
    _id: 1,
    title: "Azure SQL Data Ware Housing",
    desc: "Leverage seamless analysis of your business data and trust in our expertise to scale your insights.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
  },
  {
    _id: 2,
    title: "AWS Redshift",
    desc: "Optimize your data storage and queries while we provide the experience to enhance your data efficiency.",
    cta: "Know More",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title=" Effective and Smooth Implementation to
        Elevate your Business Results "
        desc="Elevate your Business Results "
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Our Expertise
          // Services
          // Testimonial
          // Methodology
          // Why GITL

          arr={[
            {
              _id: 1,
              title: "Our Expertise",
              link: "#OurExpertise",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Testimonial",
              link: "#Testimonial",
            },
            {
              _id: 4,
              title: "Methodology",
              link: "#Methodology",
            },
            {
              _id: 5,
              title: "Why GITL",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* two people expetise / Our Services */}
      <>
        <div className={`bg-ms-practise w-full    py-32  `} id="OurExpertise">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
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
                        <div className="mb-4 hidden">
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
                        <p className="text-[14px] leading-[22px]  mb-4 text-[#101828]">
                          {item.desc}
                        </p>
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

      {/* cards */}
      <>
        <div
          id="Services"
          className={`  text-[white] bg-[rgb(91,_98,_138)] bg-[linear-gradient(90deg,_rgba(49,_9,_74,_1)_0%,_rgba(29,_8,_69,_1)_15%,_rgba(14,_0,_42,_1)_100%)]`}
          style={{}}
        >
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[5em]  ">
            <div className="mt-[3em] mb-[12em]">
              <h3 className=" text-7xl font-bold leading-[90px]">
                The Guiding Principles We Live By
              </h3>
              <p className="text-base font-regular">
                Every day, we endeavour to create a meaningful impact, driven by
                our core principles and essence, reaching beyond our industry to
                positively touch every association we encounter.
              </p>
            </div>
          </div>
        </div>
      </>
      {/* Offset cards */}
      <>
        <div className="offsetCardWrap relative pb-32  ">
          <div className="max-w-screen-lg shadow-md mx-auto left-0 right-0 absolute bg-[#f2f4f7] grid grid-cols-3 -top-32">
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Vision</h4>
              <p className="text-base font-medium">
                Create Sustainable Value for our Stakeholders by connecting
                People and Technology.
              </p>
            </div>
            <div className="offsetCard border-dashed hover:bg-[#f2f4f7] border-2 border-[#DBDBDB] border-y-0 bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Purpose</h4>
              <p className="text-base font-medium">
                Be a world class provider of high-quality Information &
                Technology solutions.
              </p>
            </div>
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Values</h4>
              <p className="text-base font-medium">
                Integrity <br /> Responsiveness <br /> Commitment & Teamwork
              </p>
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

      {/* Spotlight test - Streamline Cloud Upgrade Service with Our Process Map */}
      <div id="Methodology">
        <>
          <div className={`w-full text-left bg-[#f2f4f7] pt-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
              <div className="bg-[#f2f4f7] text-left">
                <h4 className={`font-medium text-[#0745D3] uppercase ribbon`}>
                  Services for successful results
                </h4>
                <div className="flex flex-col md:flex-row gap-8 ">
                  <h3 className="text-4xl leading-[42px] my-4 font-bold">
                    Streamline Cloud Upgrade Service with Our Process Map
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] my-4 "></p>
                </div>
              </div>
            </div>
          </div>
        </>
        <div className={`w-full bg-[#f2f4f7] text-left `}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
            <Spotlight
              arr={[
                {
                  label: "01",
                  expandedLabel: "Step 01",
                  title: "Current Infrastructure and Data Evaluation",
                  expandedTitle: "Current Infrastructure and Data Evaluation",
                  desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action.",
                  image: "/upgradeCloud/Services-Strategy-Designing.jpg",
                },
                {
                  label: "02",
                  expandedLabel: "Step 02",
                  title: "Strategy Designing",
                  expandedTitle: "Strategy Designing",
                  desc: "Aligning business needs and goals, we set KPIs and devise strategy which is documented & communicated for smooth cloud adoption.",
                  image: "/upgradeCloud/Services-Strategy-Designing.jpg",
                },
                {
                  label: "03",
                  expandedLabel: "Step 03",
                  title: "Milestone Blueprint Development",
                  expandedTitle: "Milestone Blueprint Development",
                  desc: "Define and prioritize tasks, align assets, establish iterations and timelines for a journey blueprint.",
                  image:
                    "/upgradeCloud/Services-Milestone-Blueprint-Development.jpg",
                },
                {
                  label: "04",
                  expandedLabel: "Step 04",
                  title: "Establishing Readiness",
                  expandedTitle: "Establishing Readiness",
                  desc: "Expanding the landing zone blueprint and adequately preparing well-designed cloud environment.",
                  image: "/upgradeCloud/Services-Establishing-Readiness.jpg",
                },
                {
                  label: "05",
                  expandedLabel: "Step 05",
                  title: "Upgradation and Execution",
                  expandedTitle: "Upgradation and Execution",
                  desc: "This phase involves assessing readiness, refactoring IT architecture, rehosting and making anticipated changes that deliver desired outcomes.",
                  image: "/upgradeCloud/Services-Upgradation-and-Execution.jpg",
                },
                {
                  label: "06",
                  expandedLabel: "Step 06",
                  title: "Management and Contro",
                  expandedTitle: "Management and Controon",
                  desc: "This phase involves assessing readiness, refactoring IT architecture, rehosting and making anticipated changes that deliver desired outcomes.",
                  image: "/upgradeCloud/Services-Management-and-Control.jpg",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Our Expertise */}
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

      {/* 360 degree implem. */}
      <>
        <div className={`w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  DATA Management
                </h3>
                <p>
                  We blend technology capabilities with a human touch to elevate
                  your data management to new heights.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-1">
            {ConsiderRPA.map((item, index) => (
              <div
                className="flex flex-col sm:flex-row  bg-white"
                key={item._id}
              >
                <Image
                  src={item.image}
                  height={120}
                  width={120}
                  className="w-[100%] sm:w-fit object-cover"
                  alt={item.title}
                />
                <div className="p-4 sm:justify-start sm:flex sm:flex-col w-full">
                  <p className="text-[#101828] font-bold text-[26px] leading-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal mt-2 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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
            ))}
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

      {/* WHy Section */}
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

      {/* Subscription */}
      <Subscription
        title="Are you Ready for Infor-driven growth?"
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
