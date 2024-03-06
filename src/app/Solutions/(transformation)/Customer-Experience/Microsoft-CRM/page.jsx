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
import { Benefits, NewTestimonial, OfferingsSlider } from "@/components";
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

  const ConsiderRPA = [
    {
      _id: 1,
      title: "Increase Productivity",
      desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/IncreasedProductivity.png",
    },
    {
      _id: 2,
      title: "Gain Accurate Outcomes",
      desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/GainAccurateOutcomes.png",
    },
    {
      _id: 3,
      title: "Ensure Compliance and Consistency",
      desc: "Manage contract workflows, form updates, and compliance notifications, adhering to regulations with precision, consistency, reducing the risk of noncompliance and the hassle of audits.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/EnsureCompliance.png",
    },
    {
      _id: 4,
      title: "Optimize FTE Cost",
      desc: "Cut down the requirement for additional full-time equivalent employees (FTEs), leading to major cost savings in salaries, benefits and allied overheads.",

      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/OptimizeFTEcost.png",
    },
  ];

  return (
    <>
      <EntIntro
        title="Discover the Power of Microsoft CRM
        Elevate Your Customer Relationship
        Management"
        desc="Discover the Power of Microsoft CRM
        Elevate Your Customer Relationship
        Management"
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Offerings
          // Services
          // Implementation Process
          // Benefits
          // Testimonials

          arr={[
            {
              _id: 1,
              title: "Offerings",
              link: "#Offerings",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Implementation Process",
              link: "#ImplementationProcess",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 5,
              title: "Testimonials",
              link: "#Testimonial",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application processes, we minimize implementation risk for our customers. With Godrej Infotech's persistent partnership of over two decades and a track record of successfully delivering APAC's largest Infor implementation, we enable businesses to set growth-driven business operations across the organization. "></Abstract>

      {/* Stack Offering Sliders */}
      <>
        <div id="Offerings">
          <OfferingsSlider
            arr={[
              /*One*/
              {
                _id: 1,
                title: "Business Consulting",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Cybersecurity roadmap development",
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
                    title: "Perimeter Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Zero Trust Security",
                        url: "/",
                      },
                      {
                        title: "Secure access service edge (SASE)",
                        url: "/",
                      },
                      {
                        title: "Next Generation Firewall (NGFW)",
                        url: "/",
                      },
                      {
                        title: "Secure Remote Access (VPN)",
                        url: "/",
                      },
                      {
                        title: "Multi Factor Authentication (MFA)",
                        url: "/",
                      },
                      {
                        title: "Distributed Denial of Service (DDoS)",
                        url: "/",
                      },
                      {
                        title: "Web Security Gateways",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Network Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Next Generation Firewalls",
                        url: "/",
                      },
                      {
                        title: "Unified Threat Management",
                        url: "/",
                      },
                      {
                        title: "Software Defined WAN",
                        url: "/",
                      },
                      {
                        title: "Network Access Control (NAC)",
                        url: "/",
                      },
                      {
                        title: "Deception Technology",
                        url: "/",
                      },
                      {
                        title: "Advanced Persistent Threat (APT)",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 3,
                    icon: "gear",
                    title: "End Point Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Endpoint Protection Suite",
                        url: "/",
                      },
                      {
                        title: "Endpoint Detection Response (EDR)",
                        url: "/",
                      },
                      {
                        title: "Software Asset Management (SAM)",
                        url: "/",
                      },
                      {
                        title: "Patch Management Solutions",
                        url: "/",
                      },
                      {
                        title:
                          "Mobile Device or Application Management (MDM / MAM)",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 4,
                    icon: "gear",
                    title: "Application Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Web Application Security (WAF)",
                        url: "/",
                      },
                      {
                        title: "API Gateways",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 5,
                    icon: "gear",
                    title: "e. Users",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "O365",
                        url: "/",
                      },
                      {
                        title: "Mobile Device / Application",
                        url: "/",
                      },
                      {
                        title: "Management (MDM/ MAM)",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 6,
                    icon: "gear",
                    title: "Data",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Data Loss Prevention (DLP)",
                        url: "/",
                      },
                      {
                        title: "Privilege Identity Management (PIM)",
                        url: "/",
                      },
                      {
                        title: "Cloud Security",
                        url: "/",
                      },
                      {
                        title: "Disaster Recovery",
                        url: "/",
                      },
                    ],
                  },
                  // Add more items as needed
                ],
                cta: "Explore Service",
                image: "rpa/Cyber-security_Technology-Solutions.jpg",
                ctaUrl: "/",
                links: [
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
              },
              {
                _id: 3,
                title: "Application Security testing",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Application-Security-Testing.jpg",
                inline: true,
                subArr: false,
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
                subArrLinks: [],
                subArr: false,
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
        <div className={`bg-ms-practise w-full    py-32  `} id="Services">
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
      {/*  Cards */}
      <>
        <div
          className={` w-full bg-[#F2F4F7] py-32`}
          id="ImplementationProcess"
        >
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Why Consider RPA for your business?
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
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
                    className="text-[#0745D3] hidden text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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

      {/* Benefits Vertical Slider */}
      <div id="Benefits">
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
              cardDesc:
                "Revolutionising Healthcare with medical image analysis",
            },
          ]}
        ></Benefits>
      </div>

      {/* Why Section */}
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

      {/* Industry Spotlight Slider */}
      <div className="hidden">
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
      </div>

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

      {/* Testimonaisl */}
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
