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
import { mdiBullseyeArrow } from "@mdi/js";
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

import infor from "../../../../public/upgradeCloud/infor.png";
import OracleDB from "../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../public/upgradeCloud/Dynamic.png";

import Abstract from "@/components/Abstract";
import {
  Benefits,
  Capabilities,
  NewTestimonial,
  OfferingsSlider,
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
const page = () => {
  return (
    <>
      <EntIntro
        title="Elevate Your Retail Business  with Our Top-notch Services "
        desc="with Our Top-notch Services "
        cta="Let's Connect"
        width="80%"
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
        abstractdesc="Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application processes, we minimize implementation risk for our customers. With Godrej Infotech's persistent partnership of over two decades and a track record of successfully delivering APAC's largest Infor implementation, we enable businesses to set growth-driven business operations across the organization. "
        list={true}
        ribbon="Retail"
        listArr={[
          { _id: 1, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 2, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 3, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 4, icon: "dummy", title: "Customer loyalty retention" },
          { _id: 5, icon: "dummy", title: "Customer loyalty retention" },
        ]}
      ></Abstract>

      {/* Retail segment slider */}
      <>
        <>
          <div className={` w-full bg-[#FFF] pt-24`}>
            <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    The Retail Segments we serve
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
                      <p className="text-[16px] hidden font-medium leading-[22px] text-[#101828]">
                        {item.desc}
                      </p>

                      <div>
                        <ul>
                          {item.list.map((li, index) => (
                            <li
                              key={index}
                              className="text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                            >
                              {li}
                            </li>
                          ))}
                        </ul>
                      </div>
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

      {/* Solutions we offer slider */}

      <>
        <OfferingsSlider
          arr={[
            /*One*/
            {
              _id: 1,
              title: "Business Consulting",
              descOnly: true,
              desc: "We bring a wealth of industry knowledge and expertise to the table and follow the collaborative journey that ",
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
              title: "Implementation & Management",
              desc: "We bring a wealth of industry knowledge and expertise to the table and follow the collaborative journey that ",
              descOnly: true,

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
                  title: "Users",
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
              title: "Application Security Testing",
              descOnly: true,
              desc: "We bring a wealth of industry knowledge and expertise to the table and follow the collaborative journey that ",

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
              descOnly: true,
              desc: "We bring a wealth of industry knowledge and expertise to the table and follow the collaborative journey that ",

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
          title="Solutions we Offer"
          desc="As consumers expect a truly omni-channel experience, we respond to this challenge by helping brands to provide consistent and personalized service - before, during and after a purchase"
          alignHorizontal={true}
          cardOnly={true}
          imageDisabled={true}
        />
      </>

      {/* Our capabilites faq */}
      <Capabilities
        ribbon=" "
        title="Our Capabilities"
        desc="Data is catalyst to the transformation and our commitment to delivering cutting-edge data solutions is rooted in three fundamental aspects – our domain experience, technical excellence and business environment."
        arr={[
          {
            _id: 1,
            icon: "gear",
            title: "Data Platform Modernization",
            desc: "",
            cta: "",
            ctaUrl: "",
            list: [
              {
                title:
                  "Collaborating with industry-leading partners such as AWS, Microsoft, and Salesforce, we modernize your data infrastructure on any cloud platform steering optimal acceptance and performance.  ",
                url: "/",
              },
            ],
          },
          {
            _id: 2,
            icon: "gear",
            title: "Advance Analytics",
            desc: "",
            cta: "",
            ctaUrl: "",
            list: [
              {
                title:
                  "From planning and investigating data to developing, employing, managing and examining models, we leverage your enterprise with the modern progresses in AI, machine learning and automation. ",
                url: "/",
              },
            ],
          },
          {
            _id: 3,
            icon: "gear",
            title: "Business Intelligence",
            desc: "",
            cta: "",
            ctaUrl: "",
            list: [
              {
                title:
                  "Experience visuals of valuable insights from your crucial data sets from supply chain, finance and talent domains or more.",
                url: "/",
              },
            ],
          },
          {
            _id: 4,
            icon: "gear",
            title: "Data Warehouse and Integration",
            desc: "",
            cta: "",
            ctaUrl: "",
            list: [
              {
                title:
                  "We build scalable data warehouse architectures custom-made to your business requirements and our end-to-end data integration processes a unified view of your organization's information assets.",
                url: "/",
              },
            ],
          },
          {
            _id: 5,
            icon: "gear",
            title: "Data Governance",
            desc: "",
            cta: "",
            ctaUrl: "",
            list: [
              {
                title:
                  "Ensuring advanced metadata controls, precise access governance, and compliance mechanisms while adhering to stringent regulatory standards, we provide granular visibility and control over your data landscape.",
                url: "/",
              },
            ],
          },
        ]}
      />

      {/* Our Services */}
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
