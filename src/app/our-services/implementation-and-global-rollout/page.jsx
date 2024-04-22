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
    title: "End to End Implementation",
    cta: "Know More",
    link: "/",
    desc: "Employing our best practices to enhance processes, we provide effective solution deployment, risk mitigation and complete adoption of the solution.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Global Rollouts",
    cta: "Know More",
    link: "/",
    desc: "We initiate by executing a pilot implementation at selected locations predetermined by the client. Upon approval of the solution by the client, it is then deployed to all other stores, branches, and offices of the organization according to agreed-upon schedules.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Godrej Infotech Solutions",
    cta: "Know More",
    link: "/",
    desc: "Supporting primary business application with our specialized solution, we provide a distinct advantage for managing essential business functions including Finance, Master Planning, Sales and Marketing, Inventory and Warehouse, Procurement, Sourcing, Service Management and more, all within reasonable implementation budgets.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Customization and Integration",
    cta: "Know More",
    link: "/",
    desc: "We consistently go above and beyond to deliver valuable end-user experience, while managing a complex combination of new processes, business models, technologies, systems and devices.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Data Migration",
    cta: "Know More",
    link: "/",
    desc: "With the responsibility of extracting data from source systems, cleansing it, loading the combined data into the target system, and executing Master Data Governance, we facilitate a smooth transition while reducing testing requirement, downtime and cost overruns.",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Reimplementation",
    cta: "Know More",
    link: "/",
    desc: "Taking into account the current project scenario, organizational bottlenecks, and perspectives from relevant stakeholders, we eliminate erroneous transactions, re-architect and progress through the project in a simple and structured manner. This ensures that our clients can reclaim the original investments made in ERP systems.",
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
    title: "People Centricity",
    desc: "Bridging the crucial gap, we bring together functional and implementation teams and create bottom-up planning, leveraging the right symphony of expertise and insights for your business.",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/IncreasedProductivity.png",
  },
  {
    _id: 2,
    title: "Process Quality",
    desc: "While continuously improving every phase, we identify areas where enhancements are required and execute them methodically that lead to greater effectiveness.",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
  {
    _id: 3,
    title: "Technology Proficiency",
    desc: "Our expert team is well-versed with the innovative technology trends and proficiently implements the right-fit solution to navigate your business challenges.",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
  {
    _id: 4,
    title: "Effective Change Management",
    desc: "Understanding the obvious resistance to the change, we exercise strong change management practices, ensuring efficient acceptance.",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
  {
    _id: 5,
    title: "Adaptive Business Environment",
    desc: "We constantly scan the business environment, examining market dynamics and industry trends to ensure successful implementation, especially at the time of ambiguity.",
    cta: "",
    ctaUrl: "/",
    image: "/rpa/GainAccurateOutcomes.png",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Effective and Smooth Implementation Services to Elevate your Business Results"
        desc=""
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

       {/* Abstract  */}
      <Abstract abstractdesc="As a trustworthy transformation partner, your ambitious goals become our shared mission. Embracing a holistic strategy for your implementation and rollout project and assuring timely delivery, we exceed your expectations and nurture a genuine partnership that drives us toward goal realization together. With over 25 years of experience in implementing End to End IT solutions, we have the expertise to deliver avant-garde solutions that meets the needs of our global clients'. Our services include fast and secure rollouts tailored to diverse locations, divisions and subsidiaries. Each project is meticulously managed by seasoned subject matter experts and technology specialists, ensuring precise execution."></Abstract>


      {/* Overview */}
      {/* <>
        <div className={` w-full bg-white py-10`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col gap-x-10">
                  <h3 className="text-4xl mb-4 leading-[42px] font-bold">
                    Overview
                  </h3>
                  <p>
                    As a trustworthy transformation partner, your ambitious
                    goals become our shared mission. Embracing a holistic
                    strategy for your implementation and rollout project and
                    assuring timely delivery, we exceed your expectations and
                    nurture a genuine partnership that drives us toward goal
                    realization together. With over 25 years of experience in
                    implementing End to End IT solutions, we have the expertise
                    to deliver avant-garde solutions that meets the needs of our
                    global clients&apos;. Our services include fast and secure
                    rollouts tailored to diverse locations, divisions and
                    subsidiaries. Each project is meticulously managed by
                    seasoned subject matter experts and technology specialists,
                    ensuring precise execution.
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </> */}

      {/* two people expetise / Our Services */}
      <>
        <div className={`bg-ms-practise w-full    py-32  `} id="OurExpertise">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Our Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
                    We offer implementation services focused on delivering specific outcomes from inception to project completion with our commitment to quality.
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
                Our Implementation Service Virtues
              </h3>
              {/* <p className="text-base font-regular">
                Every day, we endeavour to create a meaningful impact, driven by
                our core principles and essence, reaching beyond our industry to
                positively touch every association we encounter.
              </p> */}
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
              <h4 className="text-[22px] font-bold mt-3 mb-2">
                Result Focused Services
              </h4> 
              <p className="text-base font-medium">
               We measure our success, based on the tangible results we deliver for our customers.
              </p>
            </div>
            <div className="offsetCard border-dashed hover:bg-[#f2f4f7] border-2 border-[#DBDBDB] border-y-0 bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">
                Agile Approach
              </h4>
              <p className="text-base font-medium">
                Repository of ready solutions enable us to proactively respond
                to customers evolving needs.
              </p>
            </div>
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">
                Quality Practice
              </h4>
              <p className="text-base font-medium">
                We are dedicated to maintaining the highest quality standard
                which is non-negotiable and is embedded in our work culture.
              </p>
            </div>
          </div>
        </div>
      </>

      {/* Testimonials */}
      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted Customers Share their Successful Experiences"
        desc="Discover how we have helped our customers to realize better results aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "Managing Director",
            clientDesignation:
              "Saudi Arabia’s Manufacturer & Supplier of Piping Products & Fitting",
            thumbnail: "1",
            description:
              "I would like to thank the dedicated team at Godrej Infotech for a successful Dynamics 365 for Sales Professional implementation. We can now generate customized reports and track sales personnel in the field. This achievement adds significant value to our business.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "Head Procurement & Project Manager",
            clientDesignation: "Leading Global Supplier of Process Equipments",
            thumbnail: "1",
            description:
              "We appreciate Godrej Infotech team for their exceptional work during Infor LN ERP implementation. Project was executed smoothly and efficiently. Your understanding of our needs and your positive contributions were highly valued. We applause your leadership, dedication and the collaborative effort of your team. Gratitude to all the project members.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "Finance/Project Manager",
            clientDesignation:
              "KSA based World's first super-premium ice cream Franchise",
            thumbnail: "1",
            description:
              "Congratulations to the Godrej Infotech team for successfully rolling out LS Central Hospitality. This solution has revolutionized our ice-cream retail stores, streamlining operations and automating HR and Payroll tasks. Our POS is now 100% operational, leading to a 70% reduction in procurement time and a 60% boost in finance process productivity. We thank the entire Godrej Infotech team for their outstanding 100% offshore delivery.",
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
                  Key Implementation Phases
                </h4>
                <div className="flex flex-col md:flex-row gap-8 ">
                  
                  <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                    Constant optimization is important during every stage, as we
                    fine-tune the solution to maximize its value.
                  </p>
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
                  expandedLabel: "01",
                  title: "Site Analysis and Project Planning",
                  expandedTitle: "Site Analysis and Project Planning",
                  desc: "Understand your precise needs and build the foundation for an effective project execution.",
                  image: "/upgradeCloud/Services-Strategy-Designing.jpg",
                },
                {
                  label: "02",
                  expandedLabel: "02",
                  title: "Design Solution Architecture and Mapping: Development",
                  expandedTitle: "Design Solution Architecture and Mapping: Development",
                  desc: "Employ the latest tools and methodologies to build robust and scalable solutions tailored to your specific requirements.",
                  image: "/upgradeCloud/Services-Strategy-Designing.jpg",
                },
                {
                  label: "03",
                  expandedLabel: "03",
                  title: "Efficient Knowledge Transfer",
                  expandedTitle: "Efficient Knowledge Transfer",
                  desc: "Offer user acceptance testing to ensure proficiency with the new application.",
                  image:
                    "/upgradeCloud/Services-Milestone-Blueprint-Development.jpg",
                },
                {
                  label: "04",
                  expandedLabel: "Step 04",
                  title: "Data Migration & Go-Live Readiness",
                  expandedTitle: "Data Migration & Go-Live Readiness",
                  desc: "Thoroughly assess, cleanse, transform, and migrate data from legacy systems to the new solution, ensuring system readiness for a smooth launch with minimal hiccups and if all is set as per your anticipation.",
                  image: "/upgradeCloud/Services-Establishing-Readiness.jpg",
                },
                {
                  label: "05",
                  expandedLabel: "Step 05",
                  title: "Go-Live and Post Go Live Support",
                  expandedTitle: "Go-Live and Post Go Live Support",
                  desc: "Launch chosen solution and provide ongoing monitoring, troubleshooting and performance tuning to ensure peak efficiency of solution.",
                  image: "/upgradeCloud/Services-Upgradation-and-Execution.jpg",
                },
                
              ]}
            />
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      {/* Expertise */}
      <Expertise
        ribbon=""
        ribbonTxtWhite="true"
        title="The Hub of Expertise"
        desc="We are here to build edge and bring technology brilliance with the finest in industry. Driving the innovation path, we develop better results for business across the globe."
        arr={[
          {
            title: "25 years",
            desc: "of Experience",
          },
          {
            title: "500 +",
            desc: "Customers",
          },
          {
            title: "300 +",
            desc: "Successful Deployments check",
          },
        ]}
      ></Expertise>

      {/* 360 degree implem. */}
      <>
        <div className={`w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                  360 Degree Implementation Practice
                </h3>
                <p>
                  Every successful implementation needs more than technology expertise. Our all-inclusive approach delivers winning implementation services for our customers.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-2 gap-10 sm:grid-cols-2">
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
                  {/* <Link
                    href={item.ctaUrl}
                    className="text-[#0745D3]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    {item.cta}{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link> */}
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
            ribbon: "Blogs",
            title:
              "Mastering Data Migration: Key Strategies for Seamless Implementation",
            desc: "As organizations transition to new systems or upgrade existing ones, ensuring smooth data migration becomes imperative to maintain continuity, accuracy, and efficiency in operations. In this blog, we'll delve into the critical aspects of data migration and outline key strategies to ensure a seamless implementation process.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* WHy Section */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="With our track record of consistently delivering projects on schedule, budget and with high value-added outcomes, we are recognized as the trusted partner for solution implementation, migration and rollouts worldwide."
        arr={[
          {
            _id: 1,
            desc: "Accountability at every phase of the implementation process",
            icon: "",
          },
          {
            _id: 2,
            desc: "Rigorous unit testing for every configuration and customization",
            icon: "",
          },
          {
            _id: 3,
            desc: "End-to-end proficiency in implementing comprehensive solutions",
            icon: "",
          },
          {
            _id: 4,
            desc: "Simplified data management for better decision making",
            icon: "",
          },
          {
            _id: 5,
            desc: "Smooth user adoption and dedicated support service",
            icon: "",
          },
          {
            _id: 6,
            desc: "Enhanced customer and employee satisfaction",
            icon: "",
          },
          {
            _id: 7,
            desc: "Committed to punctual and on-budget implementations",
            icon: "",
          },
          {
            _id: 8,
            desc: "Streamlined full implementation cycles for efficiency",
            icon: "",
          },
          {
            _id: 9,
            desc: "Accelerated project timelines for quicker results",
            icon: "",
          },
          {
            _id: 10,
            desc: "Minimum business disruption through proven methodology",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Start your implementation journey with us for"
        blue=" seamless experience"
        title2=""
        desc="Need expert guidance? Share your details in the form and let's make it happen!"
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
