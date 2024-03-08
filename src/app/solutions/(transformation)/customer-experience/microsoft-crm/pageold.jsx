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
    title: "Consultation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Managed Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Customization and Integration",
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
      title: "Understanding Organization's Unique Needs",
      desc: "We thoroughly assess current processes for successfully integrating Dynamics 365 CRM without disrupting existing workflows.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/IncreasedProductivity.png",
    },
    {
      _id: 2,
      title: "Strategize Your Implementation",
      desc: "We define clear roles and responsibilities for implementation team, outline processes for data migration and integration and establish comprehensive training and support strategies.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/GainAccurateOutcomes.png",
    },
    {
      _id: 3,
      title: "Training",
      desc: "We provide thorough training to encourage user adoption, enhances usability and instills confidence in leveraging its capabilities across sales, marketing and customer service departments.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/EnsureCompliance.png",
    },
    {
      _id: 4,
      title: "Secure Ongoing Support",
      desc: "Maintaining and managing CRM requires ongoing support beyond what an internal help desk can provide.  We make sure system runs smoothly and team is productive.",

      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/OptimizeFTEcost.png",
    },
  ];

  return (
    <>
      <EntIntro
        title="A Cohesive Suite of CRM Application with Integrated Sales and Customer Service Excellence"
        desc=""
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
      <Abstract abstractdesc="With our proficiency in Microsoft CRM technology consulting, implementation and support, we have the capability to revolutionize your sales operations and boost client engagement. Backed by a team of certified D365 Customer experience experts, we deliver an all-inclusive solution that offers accessibility and visibility, thereby enabling businesses to deliver best in class experience consistently. We make sure you gain an edge from the latest advancements and best industry practices."></Abstract>

      {/* Stack Offering Sliders */}
      <>
        <div id="Offerings">
          <OfferingsSlider
            arr={[
              /*One*/
              {
                _id: 1,
                title: "Marketing",
                desc: "Understand customer preferences, behavior, and interactions to create targeted and personalized campaigns.",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Integrated Sales and Marketing solution",
                    url: "/",
                  },
                  {
                    title:
                      "AI-powered and Tailor- made Customer Interaction",
                    url: "/",
                  },
                  {
                    title: "Holistic Strategy for Enhancing Customer Experiences",
                    url: "/",
                  },
                  {
                    title:
                      "Real-time Monitoring for Personalized Journeys",
                    url: "/",
                  },
                ],
              },
              /*End One*/

              /*Two*/
               {
                _id: 2,
                title: "Sales",
                desc: "Prioritize, track and close deals with ease so that your sales team focuses on high-value opportunities for maximum impact.",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Monitor Customer Activity and Order Status",
                    url: "/",
                  },
                  {
                    title:
                      "Manage Quotations, Orders and Invoices",
                    url: "/",
                  },
                  {
                    title: "Templates for Sales Forecasting and Reporting",
                    url: "/",
                  },
                  {
                    title:
                      "Access Information on Mobile Devices",
                    url: "/",
                  },
                ],
              },
              /*End Two*/

              {
                _id: 3,
                title: "Customer Service",
                desc: "Effortlessly manage customer inquiries, requests and feedback for a seamless and efficient support experience.",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Application-Security-Testing.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Customer Service across Multiple channels along with Ticket Tracking",
                    url: "/",
                  },
                  {
                    title: "Reduced Call Time and higher first call resolution charges",
                    url: "/",
                  },
                  {
                    title:
                      "Efficient Customer Support with Telephony Integration",
                    url: "/",
                  },
                    {
                    title:
                      "Quick Access to Information with Guided navigation",
                    url: "/",
                  },
                ],
              },

              {
                _id: 4,
                title: "Field Service",
                desc: "Create, assign and track work orders ensuring that your field service team operates with precision and efficiency.",
                cta: "Explore Service",
                inline: true,
                image: "rpa/Cyber-security_vCISO.jpg",
                subArrLinks: [],
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Cut Down Maintenance Expenses using Predictive Maintenance",
                    url: "/",
                  },
                  {
                    title: "Maintenance Operations with Automated Field Agent Dispatch",
                    url: "/",
                  },
                  {
                    title: "Insights Access to Engineers for Maintenance Planning",
                    url: "/",
                  },
                  {
                    title: "Assess Production Capacity, Order Completion, and Maintenance Expenditures",
                    url: "/",
                  },
                  
                ],
              },
              {
                _id: 5,
                title: "Project Operations",
                desc: "Optimize efficiency and encourage collaboration with this advanced project management tool, affirming smooth project success.",
                cta: "Explore Service",
                inline: true,
                image: "rpa/Cyber-security_vCISO.jpg",
                subArrLinks: [],
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Integrated & flexible solution to build customer confidence",
                    url: "/",
                  },
                  {
                    title: "Customised customer experience with AI",
                    url: "/",
                  },
                  {
                    title: "End to end customer experience delivery",
                    url: "/",
                  },
                  {
                    title: "Real-time customer engagement for personalized journeys.",
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
        <div className={`bg-ms-practise w-full py-32`} id="Services">
          <div className={`w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
                    Maximizing value from Microsoft Dynamics 365 CRM and leveraging 20 years of partnership with Microsoft, our suite of CRM services effectively digitizes vision of customer relationship management and drives remarkable sales productivity.
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
                  D365 CRM Implementation Process
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
          ribbon="Advantages"
          ribbonTxtWhite="true"
          title="Microsoft D365 CRM"
          desc="Microsoft Dynamics 365 CRM emerges as a game-changer for customer facing teams, offering a spectrum of benefits along with customization capabilities."
          arr={[
            {
              _id: 1,
              icon: "benefits-ai-ml/process-analyse",
              cardDesc:
                "Scalability to adapt distinct business requirements",
            },
            {
              _id: 2,
              icon: "benefits-ai-ml/anticipate-future",
              cardDesc:
                "Advanced decision-making potential through Artificial Intelligence",
            },
            {
              _id: 3,
              icon: "benefits-ai-ml/effortless-communicate",
              cardDesc:
                "Scope to plan Data-driven strategies with real time insights",
            },
            {
              _id: 4,
              icon: "benefits-ai-ml/optimise-supply-chain",
              cardDesc:
                "Comprehensive repository of contacts, leads and client information",
            },
            {
              _id: 5,
              icon: "benefits-ai-ml/healthcare",
              cardDesc:
                "Cloud-based infrastructure enabling connectivity with clients from any device and location",
            },
            {
              _id: 6,
              icon: "benefits-ai-ml/healthcare",
              cardDesc:
                "Seamless integration with other Microsoft products such as Microsoft 365 and Power BI",
            },
            
          ]}
        ></Benefits>
      </div>

      {/* Why Section */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="Prioritizing your growth journey, we help you excel in customer experience landscape with our CRM expertise."
        arr={[
          {
            _id: 1,
            desc: "Microsoft Gold Partnership with a demonstrated history of thriving multi-site, global deployments and upgrades.",
            icon: "",
          },
          {
            _id: 2,
            desc: "Talented pool of Microsoft Certified Professionals.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Support Dynamics CRM clients decreasing complexity and delivering encouraging results.",
            icon: "",
          },
          {
            _id: 4,
            desc: "Comprehensive user training that ensures smooth onboarding experience.",
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
            title: "Future Trends in Microsoft CRM: What to Expect in the Next 5 Years",
            desc: "AI in CRM and AI-powered CRM tools, particularly within Dynamics 365, are revolutionizing how businesses function. These advancements mark the trajectory of Microsoft CRM market while ensuring a more intuitive and personalized user experience.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Microsoft CRM in Action"
        desc="World’s top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "India's leading integrated Vending Service provider leverages predictable sales operations and gains consolidated information visibility with Microsoft CRM",
            thumbnail: "1",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/LeadingTableTopBeverageVendingMachinesManufacturer.pdf",
          },
          {
            id: 2,
            title:
              "Microsoft CRM Accelerates Response Time and Complaint Closure for Leading Indian Construction Company",
            thumbnail: "2",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/IndiasLeadingConstructionOrganization_MSDCRM.pdf",
          },
          {
            id: 3,
            title:
              "Integration of MS CRM 2011 with ERP for India's World Class Provider of High Quality Information Technology Solutions",
            thumbnail: "3",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/A_WorldClassProvide.pdf",
          },
          {
            id: 4,
            title:
              "Integration of MS CRM for Flexible Printing and Packaging Company in KSA:",
            thumbnail: "3",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/PrintingPackagingIntegrationMSCRM.pdf",
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
              "Manufacturer of Optical Fibers in USA",
            thumbnail: "1",
            description:
              "Thank you to Godrej Infotech for seamlessly migrating our CRM 2016 to D365 for Sales. Completed on time and with top-notch quality, the entire execution from offshore showcases commendable achievement. The CRM & Outlook integration significantly boosts sales efficiency, leading to a remarkable 90% increase in workforce productivity. ",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Business Head, Leading Indian Business Group",
            thumbnail: "1",
            description:
              "Appreciation to the Godrej Infotech for Microsoft Dynamics CRM consulting services. It has been a pleasure working with their team and we highly recommend Godrej Infotech’s services to other organizations. ",
            category: "static",
            link: "/",
          },
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Vice President, Indian Offshore Training Provide",
            thumbnail: "1",
            description:
              "Choosing Microsoft Dynamics CRM, we automated sales and marketing, gaining a 360-degree customer view. Godrej Infotech's project management team ensured transparency, kept us informed on project status and risks, and collaboratively devised mitigation plans. The result: on-time, on-budget project completion. We highly recommend Godrej Infotech for Microsoft Dynamics CRM services.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Manager IT, India's leading Energy Management System and Solutions provider",
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
