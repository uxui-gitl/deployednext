"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import Expertise from "@/components/Expertise";
import WhySection from "@/components/WhySection";
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

import uiPath from "../../../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../../../public/logos/rpa/automation-anywhere.svg";
import powerAutomate from "../../../../../../public/logos/rpa/microsoft-power-automate-logo.jpg";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Abstract from "@/components/Abstract";
import { Benefits, OfferingsSlider } from "@/components";
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
const page = () => {
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

  return (
    <>
      <EntIntro
        title="Salesforce CRM: Accelerating Sales for High-Velocity Enterprises "
        desc="High-Velocity Enterprises"
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Modules
          // Key Capabilities
          // Industries
          // Benefits
          // Testimonials - Temp Removed since no data

          arr={[
            {
              _id: 1,
              title: "Modules",
              link: "#Modules",
            },
            {
              _id: 2,
              title: "Key Capabilities",
              link: "#KeyCapabilities",
            },
            {
              _id: 3,
              title: "Industries",
              link: "#Industries",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application processes, we minimize implementation risk for our customers. With Godrej Infotech's persistent partnership of over two decades and a track record of successfully delivering APAC's largest Infor implementation, we enable businesses to set growth-driven business operations across the organization. "></Abstract>

      {/* Stack Offering Sliders */}
      <>
        <div id="Modules">
          <OfferingsSlider
            title="Modules"
            alignment="left"
            expandedDesc={true}
            arr={[
              /*One*/
              {
                _id: 1,
                title: "Business Consulting",
                desc: "",
                cta: "Explore Service",
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Sales Execution CRM",
                    desc: "Lead your sales team to the next best action. Automate lead qualification, prioritization, and distribution. Identify sales opportunities and automatically assign them to the most suitable representatives",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Sales Cloud",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 3,
                    icon: "gear",
                    title: "Salesforce CPQ (Configure, Price, Quote)",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                ],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                ctaUrl: "/",
                links: [
                  {
                    title: "Sales Execution CRM",
                    url: "/",
                  },
                  {
                    title:
                      "Assessment services against cyber security frameworks & standards",
                    url: "/",
                  },
                ],
              },
              /*End One*/
              {
                _id: 2,
                title: "Technology Solutions - Implementation & Management",
                desc: "",
                inline: true,
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Sales Execution CRM",
                    desc: "Lead your sales team to the next best action. Automate lead qualification, prioritization, and distribution. Identify sales opportunities and automatically assign them to the most suitable representatives",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Sales Cloud",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 3,
                    icon: "gear",
                    title: "Salesforce CPQ (Configure, Price, Quote)",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                ],
                cta: "Explore Service",
                image: "rpa/Cyber-security_Technology-Solutions.jpg",
                ctaUrl: "/",
                links: [
                  [
                    {
                      title: "Transcription Services",
                      url: "/",
                    },
                    {
                      title: "Speech recognition",
                      url: "/",
                    },
                    {
                      title: "Language translation",
                      url: "/",
                    },
                  ],
                ],
              },
              {
                _id: 3,
                title: "Application Security testing",
                desc: "",
                cta: "Explore Service",
                image: "rpa/Application-Security-Testing.jpg",
                inline: true,
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Sales Execution CRM",
                    desc: "Lead your sales team to the next best action. Automate lead qualification, prioritization, and distribution. Identify sales opportunities and automatically assign them to the most suitable representatives",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Sales Cloud",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 3,
                    icon: "gear",
                    title: "Salesforce CPQ (Configure, Price, Quote)",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                ],
                ctaUrl: "/",
                links: [
                  {
                    title: "Web application Security testing",
                    url: "/",
                  },
                  {
                    title: "Mobile App Security testing",
                    url: "/",
                  },
                  {
                    title:
                      "Vulnerability Assessment and Penetration Testing (VAPT)",
                    url: "/",
                  },
                ],
              },

              {
                _id: 4,
                title: "vCISO Services",
                desc: "",
                cta: "Explore Service",
                inline: true,
                image: "rpa/Cyber-security_vCISO.jpg",
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Sales Execution CRM",
                    desc: "Lead your sales team to the next best action. Automate lead qualification, prioritization, and distribution. Identify sales opportunities and automatically assign them to the most suitable representatives",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Sales Cloud",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                  {
                    _id: 3,
                    icon: "gear",
                    title: "Salesforce CPQ (Configure, Price, Quote)",
                    desc: "A cloud-based solution that empowers organizations to manage Lead to order contacts from any device and location. Recognized as the top CRM system for businesses",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [],
                  },
                ],
                ctaUrl: "/",
                links: [
                  {
                    title: "Strategy",
                    url: "/",
                  },
                  {
                    title: "Risk Management",
                    url: "/",
                  },
                  {
                    title: "Regulatory & Standards compliance",
                    url: "/",
                  },
                  {
                    title: "Policy & procedures",
                    url: "/",
                  },
                  {
                    title: "Security Program",
                    url: "/",
                  },
                  {
                    title: "End user Training",
                    url: "/",
                  },
                ],
              },
            ]}
          />
        </div>
      </>

      {/* Ms slider */}
      <>
        <div
          className={`bg-ms-practise w-full    py-32  `}
          id="KeyCapabilities"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
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

      {/* Industry Spotlight Slider */}
      <>
        <div id="Industries" className={` w-full bg-[#FFF] pt-20`}>
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

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title: "Migrate your IT Infrastructure to the Cloud",
            desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Elevating Our Customer Experience with Infor"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions globally."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN",
            thumbnail: "1",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
          },
          {
            id: 2,
            title:
              "Global Oncology Pharmaceuticals Company leverages Preventive Maintenance Scheduling and asset lifecycle management with HxGN EAM",
            thumbnail: "2",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Global-Oncology-Pharmaceuticals-Company.pdf",
          },
          {
            id: 3,
            title:
              "Global Hydraulic Systems Manufacturer Achieves Enhanced User Experience and Workforce Enablement with Infor LN",
            thumbnail: "3",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Infor-LN-India-Localization.pdf",
          },
        ]}
      />

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
