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
    title: "Manufacturing",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Retail",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Project",
    imgUrl: "4",
    url: "/",
  },
  {
    _id: 5,
    title: "Professional Services",
    imgUrl: "5",
    url: "/",
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
        title="Infor CRM - The Ultimate CRM Solution for Enterprise-level Sales and Marketing Performance"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Modules
          // Benefits
          // Blog
          // Why Us
          // Case Study

          arr={[
            {
              _id: 1,
              title: "Modules",
              link: "#Modules",
            },
            {
              _id: 2,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 3,
              title: "Blog",
              link: "#Insights",
            },
            {
              _id: 4,
              title: "Why Us",
              link: "#WhyUs",
            },
            {
              _id: 4,
              title: "Case Study",
              link: "#CaseStudy",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="We are dedicated to a technically refined and impactful implementation aimed at optimizing your sales operations. Our guarantee ensures a smooth and impactful deployment, intending to optimize your sales operations. Capitalizing the expertise of our seasoned Infor CRM professionals, we assist in maximizing the benefits of this popular solution for quantifiable outcomes. Infor CRM proudly serves a global clientele of over 2,500 organizations, with user counts ranging from 5 to 3,000 across various industries."></Abstract>

      {/* Infor CRM Modules */}
      <>
        <div id="Modules" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                  Infor CRM Offerings  
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Count on us for an impactful deployment that finely tunes Infor CRM to elevate your sales operations.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center bg-[#F2F4F7] text-left max-w-screen-xl md:max-w-screen-2xl  mx-auto px-8 pt-8 pb-14 flex-wrap">
            {[
              {
                _id: 1,
                title: "Sales and Marketing Automation",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 2,
                title: "Customer Service and Support",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 3,
                title: "Mobile CRM",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 4,
                title: "Analytics and Reporting",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 5,
                title: "Integration with Microsoft Outlook (Infor CRM Xbar)",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 6,
                title: "Social Media Integration",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 7,
                title: "Workflow Automation",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 8,
                title: "Document Management",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 9,
                title: "Team and Territory Management",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              {
                _id: 10,
                title: "Integrations with Back-office Systems",
                cta: "Know More",
                link: "/",
                icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
              },
              
            ].map((item, index) => {
              return (
                <div
                  key={item._id}
                  className=" mx-2 bg-white sm:w-[250px] w-fit flex flex-col justify-between"
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
              );
            })}
          </div>
        </div>
      </>

      {/* Key Feature and Benefits of Infor CRM  */}
      <>
        <div id="Benefits" className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Key Feature and Benefits of Infor CRM
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-2 gap-10 sm:grid-cols-2">
            {[
              {
                _id: 1,
                title: "Extensive Customization ",
                desc: "Comprehensive customization options that are tailored to explicit demands, workflows and processes, delivering a more competent and personalized CRM experience.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 2,
                title: "Effortless Integration",
                desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
              {
                _id: 3,
                title: "Mobile-Centric",
                desc: "Dedicated mobile accessibility guarantees real-time customer engagement and responsiveness ensuing enhanced customer service and boosted sales opportunities.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 4,
                title: "Mobile Customer Intelligence",
                desc: "Advance cutting-edge mobile customer intelligence capabilities such as integrating contextual KPIs, comprehensive charts, and user-friendly menus which help to optimize workflows with precision. ",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
              {
                _id: 5,
                title: "New Multi-Attendee Support for Activities",
                desc: "Seamless support for multiple contacts, leads, and users are included in activities and historical records that fosters smoother communication among stakeholders.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 6,
                title: "Licensing Options",
                desc: "Multiple license types that cater to diverse businesses sizes, providing flexibility to select cost-efficient ownership models that line up with operational preferences.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
              {
                _id: 7,
                title: "Marketing and Sales Automation",
                desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
              {
                _id: 8,
                title: "Reliable Customer Support",
                desc: "Assist businesses in leveraging maximum CRM investment with prompt issue resolution.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
                 {
                _id: 9,
                title: "Scalability",
                desc: "Infor CRM is devised to scale with business expansion and adapt to ever -changing market scenarios.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
                 {
                _id: 10,
                title: "Reporting and Analytics",
                desc: "Suite with 70 + readily available business and sales reports and analytics & reporting capabilities that provide valuable insights to drive insightful customer interactions.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
            ].map((item, index) => (
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

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title: "Infor CRM vs. Competitors",
            desc: " A Comprehensive Comparison for Making the Right Choice",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
          {
            _id: 2,
            ribbon: "blog",
            title: "Infor CRM Implementation Best Practices",
            desc: "Hacks for a Successful Deployment",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="It is our Hexagon EAM expertise , experience and commitment to excellence that sets us apart in a competitive landscape."
        arr={[
          {
            _id: 1,
            desc: "We aim to optimize Infor CRM potential and ensure winning results by capitalizing on our extensive expertise in Infor and diverse industry experience. ",
            icon: "",
          },
          {
            _id: 2,
            desc: "Our solutions and services are devised to elevate your customer experience, enabling you to nourish compelling relationships and scale your business effortlessly.",
            icon: "",
          },
          {
            _id: 3,
            desc: "We are committed to providing dedicated customer support, assisting businesses at every implementation and beyond. ",
            icon: "",
          },
          
        ]}
        renderInlineSpans={true}
      ></WhySection>

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
              "Indian Offices of Leading Metal Plate Cutting Machine Manufacturer Gains 360 degree of Customer and transactional data   with Infor CRM Solution ",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Metal-Plate-Machine-Manufacturer.pdf",
          },
         
        ]}
      />

      {/*  */}
      {/* Supply System */}
      
      <>
        <div
          className={`w-full pt-48 pb-12 bg-[url('/SupplySystem1.png')] bg-center bg-cover sm:bg-contain `}
        >
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div>&nbsp;</div>
            {/* right */}
            <div className="text-[#FFF] flex items-end flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor Intelligent Supply System
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Infor proudly presents the most extensive suite of global
                  supply chain solutions, including the world&apos;s largest
                  single-instance, multi-enterprise business network and
                  comprehensive CloudSuite capabilities. These capabilities
                  optimize supply chains from end to end, covering planning,
                  procurement, orchestration and fulfillment. Infor WMS is a
                  cloud-based Tier-1 solution, reshaping warehouse operations
                  through advanced functionalities ensuring efficient
                  fulfillment in a dynamic business landscape. With Infor WMS,
                  enterprises gain a competitive edge, ready to tackle the
                  ever-evolving demands of the modern market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Infor CRM Manuf. */}

      {/* Subscription */}
      <Subscription
        title="Are you Ready for Infor-driven growth?"
        blue="Let's get started!?"
        title2=""
        desc="Share your details to Maximize customer satisfaction with Infor CRM Capabilities."
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
