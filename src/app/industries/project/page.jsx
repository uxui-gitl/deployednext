"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import {
  mdiArrowRight,
  mdiArrowTopRight,
  mdiBullseyeArrow,
  mdiDomain,
} from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Testimonial from "@/sections/testimonial/Testimonial";

import inforCloudSuite from "../../../../public/inforCloudSuite.png";
import Testimonials from "@/sections/testimonial/Testimonial";
import puzzle from "../../../../public/upgradeCloud/puzzle.png";


import microsoft from "../../../../public/SpotlightLogoGrid/Microsoft-Office.png";
import infor from "../../../../public/SpotlightLogoGrid/infor.png";
import Oracle from "../../../../public/Oracle.png";
import automationAnywhere from "../../../../public/logos/rpa/automation-anywhere.svg";
import checkout from "../../../../public/checkout.png";
import MLExpertise from "../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Abstract from "@/components/Abstract";
import { AnimatePresence, motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSlider from "@/components/BlogSlider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Benefits from "@/components/Benefits";
import Capabilities from "@/components/Capabilities";
import Expertise from "@/components/Expertise";
import clsx from "clsx";
import { NewTestimonial, OfferingsSlider } from "@/components";
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
    text: "Resource procurement planning and hierarchy management within the project structure",
  },
  {
    id: 2,
    text: "Implementing post-delivery service and maintenance process",
  },
  {
    id: 3,
    text: "Accurate evaluation of manpower, machine and material procurement",
  },
  {
    id: 4,
    text: "Streamlining distribution and delivery process for project execution",
  },
  {
    id: 5,
    text: "Recognizing revenue, both directly and indirectly associated with the project",
  },
  {
    id: 6,
    text: "Progress tracking at both work and real-time project levels",
  },
  {
    id: 7,
    text: "Addressing the clumsy coordination process between sales and service teams",
  },
   {
    id: 8,
    text: "Ensuring active and meaningful engagement with stakeholders throughout the project",
  },
   {
    id: 9,
    text: "Effective management of budgets, compressed schedules and complex contractual requirements.",
  },
   {
    id: 10,
    text: "Handling large volume of data and multiple stakeholders, which often lead to inefficiencies, errors and delays.",
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
    title: "Implementation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Upgrade & Migration",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Support and Maintenance",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Customization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Integration",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Audit and Reporting Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  
];
const AIOfferings = [
  {
    _id: 1,
    title: "Automation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#E4F8ED",
    btnTheme: "#4F9D73",
    links: [
      {
        title: "Project Monitoring Tools ",
        url: "/",
      },
      {
        title: "Augmented Intelligence ",
        url: "/",
      },
      {
        title: "Budgeting and Forecasting ",
        url: "/",
      },
      {
        title: "Data Driven Analytics ",
        url: "/",
      },

      {
        title: "Quality Control Analysis  ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Cloud",
    desc: "  ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#EDF1FF",
    btnTheme: "#0745D3",
    links: [
      {
        title: "M365 ",
        url: "/",
      },
      {
        title: "Cloud Consulting",
        url: "/",
      },
      {
        title: "Upgrade/Migrate to cloud",
        url: "/",
      },
      {
        title: "ERP on cloud",
        url: "/",
      },
      {
        title: "Iot Data management in Cloud",
        url: "/",
      },
      {
        title: "DevOps",
        url: "/",
      },
      {
        title: "Cloud Security Solutions",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Transformation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#FFF8E5",
    btnTheme: "#D4A73B",
    links: [
      {
        title: "Architecture Designing",
        url: "/",
      },
      {
        title: "Hierarchy Management",
        url: "/",
      },
      {
        title: "Process Optimization",
        url: "/",
      },
      {
        title: "Stakeholder work/ role assignment",
        url: "/",
      },
      {
        title: "Multiple invoicing modes, flexible procurement and outsourcing coordination",
        url: "/",
      },
      {
        title: "Customer Experience - CRM and Ecommerce ",
        url: "/",
      },
    ],
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "gear",
    title: "Gain competitive edge",
  },
  {
    _id: 2,
    icon: "diamond",
    title: "Streamline operations",
  },
  {
    _id: 3,
    icon: "eyeGear",
    title: "Boost brand value",
  },
  {
    _id: 4,
    icon: "gear",
    title: "Gain competitive edge",
  },
  {
    _id: 5,
    icon: "diamond",
    title: "Streamline operations",
  },
  {
    _id: 6,
    icon: "eyeGear",
    title: "Boost brand value",
  },
];

const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title: "Digital Transformation in Megaprojects",
    desc: "Megaprojects stand as the epitome of complex endeavors that demand meticulous planning, precise execution, and seamless coordination. At the heart of these megaprojects lies the imperative need for digital transformation to propel success in an increasingly competitive environment. Digital transformation in megaprojects entails a comprehensive overhaul of traditional processes, leveraging advanced technologies to optimize efficiency, enhance collaboration, and drive innovation. From the integration of cloud computing and data analytics to the adoption of artificial intelligence and machine learning, the possibilities are vast and transformative.",
    cta: "Know More",
    link: "",
    imgUrl: "",
  },
  
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Revolutionizing Megaprojects with Advanced IT Services"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          // Challenges
          // Solutions
          // Capabilities
          // Services
          // Partners

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 3,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 4,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 5,
              title: "Partners",
              link: "#Partners",
            },
          ]}
        />
      </>
      {/* Abstract  */}
      <Abstract abstractdesc="It's crucial to prioritize key essentials like market share through adoption of modern technologies, enhancing ROI with modern operational and maintenance practise, and enabling swift decision-making in a global environment through collaborative efforts. Leveraging scalable technologies, we help project stakeholders to track and fasten operations, ensuring successful project results. We support clients in their digital transformation journey with improved effectiveness and reduced cost aligning with business requirements and encouraging competitiveness."></Abstract>


      {/* Challengers Para */}
      <>
        <div id="Challenges" className={` w-full bg-white pb-20`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Challenges
                  </h3>
                  <p>
                    Organizations face different levels of efficiency difficulties while managing projects with interdependent activities particularly with procurement routes.
                  </p>
                </div>
              </div>
            </div>
          </>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="mx-auto">
                <Image src={puzzle} alt="puzzle" />
              </div>
            </div>
            <div>
              <div>
                <ul>
                  {lists.map((list) => (
                    <li key={list.id}>
                      {" "}
                      <p className="flex gap-4 mb-6 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                        <span className="">
                          <Icon
                            path={mdiBullseyeArrow}
                            color="dodgerblue"
                            size={1}
                          />
                        </span>
                        {list.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Our Ai Offerings */}
      <>
        <div id="Solutions" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Project Solution Offerings
                </h3>
              </div>
            </div>
            <div>
              {/* <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Holistic and future- ready solutions to re-engineer your
                  business with our proven implementation methodologies for
                  maximum Return on Investment (RoI)
                </p>
              </div> */}
            </div>
          </div>
          <div className="text-left w-full bg-amber-100 mb-5 mx-auto   grid grid-cols-1 md:grid-cols-3">
            {AIOfferings.map((item, index) => (
              <div
                className={`bg-[${item.theme}] py-10 sm:py-20 px-8 sm:px-24`}
                key={item._id}
                style={{ backgroundColor: item.theme }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="my-8">
                      {item.links.map((list, index) => (
                        <li
                          key={index}
                          className=" border-b-[1px] last:border-b-[0px] w-fit border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={list.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.ctaUrl}>
                      <div
                        className={`text-[#fff] text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                        style={{ backgroundColor: item.btnTheme }}
                      >
                        {item.cta}{" "}
                        <Icon
                          path={mdiArrowTopRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* 3 column */}
      <>
        <OfferingsSlider
          title="Industry Segments We Serve"
          alignHorizontal="left"
          cardColor="#FFF"
          desc="From meticulous project estimation, planning and execution to seamless revenue recognition, we tailor our solutions to address the unique challenges of each segment."
          arr={[
            /*One*/
            {
              _id: 1,
              title: "Small Scale Projects",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Machine Building",
                  url: "/",
                },
                {
                  title:
                    "Power Energy",
                  url: "/",
                },
              ],
            },
            {
              _id: 2,
              title: "Turnkey Projects",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Infrastructure",
                  url: "/",
                },
                {
                  title:
                    "Ship building",
                  url: "/",
                },
                {
                  title:
                    "Mining",
                  url: "/",
                },
                {
                  title:
                    "Oil & Gas",
                  url: "/",
                },
                {
                  title:
                    "Drilling",
                  url: "/",
                },
              ],
            },
            {
              _id: 3,
              title: "Real estate",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Industrial Set Up",
                  url: "/",
                },
                {
                  title:
                    "Residential Complex",
                  url: "/",
                },
                {
                  title:
                    "Mall",
                  url: "/",
                },
                {
                  title:
                    "Showroom",
                  url: "/",
                },
              ],
            },
           
          ]}
        />
      </>

      {/* Our Capabilities */}
      <div id="Capabilities">
        <Capabilities
          ribbon=" "
          arr={[
            {
    _id: 1,
    icon: "gear",
    title: "Future of Projects",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    icon: "gear",
    title: "IoT Enabled Products",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "Industrial IoT",
        url: "/",
      },
      {
        title: "Plant efficiency with IoT",
        url: "/",
      },
      {
        title: "Asset Predictive Maintenance",
        url: "/",
      },
      {
        title: "Architecture Designing through IoT",
        url: "/",
      },
      
    ],
  },
  {
    _id: 3,
    icon: "gear",
    title: "Supply Chain Management  ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "Inventory management",
        url: "/",
      },
      {
        title: "Fleet management with IoT and AR",
        url: "/",
      },
      {
        title: "System logistics",
        url: "/",
      },
      {
        title: "Equipment rental",
        url: "/",
      },
      {
        title: "Supplier Communication and Inventory Management",
        url: "/",
      },
      
    ],
  },
  {
    _id: 4,
    icon: "gear",
    title: "Performance Management ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "Product lifecycle management",
        url: "/",
      },
      {
        title: "Asset management",
        url: "/",
      },
      {
        title: "Hierarchy workflow management",
        url: "/",
      },
      
    ],
  },
          ]}
          title="Our Capabilities"
          desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities help in success of mega projects."
        />
      </div>

      {/* Expertise */}
      <Expertise
        ribbon="The Hub of Expertise"
        ribbonTxtWhite="true"
        title="Future Outlook with Intelligent Technologies  "
        desc="We are here to build an edge and bring technology brilliance with the finest in the industry."
        arr={[
          {
            title: "50+",
            desc: "Countries Spanning our Happy Customers",
          },
          {
            title: "10.31 Billion",
            desc: "Total Revenue",
          },
          {
            title: "500+",
            desc: "Employees Worldwide",
          },
          {
            title: "700+",
            desc: "Implementations",
          },
          {
            title: "2 Decades",
            desc: "of Experience  ",
          },
        ]}
      ></Expertise>

      {/* Microsoft Services */}
      <>
        <div
          className={`bg-ms-practise w-full  bg-[#F2F4F7]  py-32  `}
          id="Services"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    Service Offerings
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We are a leading provider of a full suite of IT services to address the diverse needs of our clients across all projects.
                  </p>
                </div>
              </div>
              {/* right */}
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl md:max-w-screen-xl flex flex-col sm:flex-row gap-y-5 justify-center text-left  mb-5 mx-auto  p-5 overflow-hidden">
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className=" sm:flex-grow"
            >
              {UseCases.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{ height: "auto" }}
                    key={item._id}
                    className="sm:w-full max-w-full md:w-1/4 bg-white flex flex-col justify-between  mr-4  relative group"
                  >
                    <div
                      key={item._id}
                      className=" mx-2  w-fit flex flex-col justify-between"
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </>

      {/* ML Expertise */}
      <div className="hidden">
        <>
          <div className={` w-full bg-[#F2F4F7] py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
              <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-2 relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    ML Expertise
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] ">
                    We specialize in developing algorithms to make your
                    operations smarter, faster and more reliable
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
              {[0, 1, 2, 3].map((item, index) => (
                <div className="" key={index}>
                  <Image
                    src={MLExpertise}
                    className="w-[100%]"
                    alt="ML Expertise"
                  />
                  <div className="p-4 pb-0">
                    <p className="text-[#101828] font-medium text-base leading-[22px]">
                      Deep Learning
                    </p>
                    <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                      Our deep learning expertise is about making data come to
                      life. We use these cutting-edge practices to create
                      solutions that automate complex tasks data-driven
                    </p>
                    <Link
                      href={"/"}
                      className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      Know More{" "}
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
      </div>

      {/* Casestudy */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Delivering Results that Matters "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Leading Global Hydraulic Systems Manufacturer Successfully Rolls Out Infor LN with India Localization Features",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Read article",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
          },
          {
            id: 2,
            title:
              "India's Largest Manufacturer of Forklift Trucks Successfully Implements Salesforce Service Cloud Solution Integrated with Infor LN ",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Read article",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
          },
          {
            id: 3,
            title:
              "Global Leader in Industrial Packaging and Services implements Infor LN",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Read article",
            link: "/",
          },
        ]}
      />
      {/* Our Partners */}
      <>
        <div id="Partners" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Partners
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Our proficiency with tech platforms paves the way for progressive business results, blending innovation and efficiency seamlessly.
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={microsoft} alt="microsoft" />
                </div>
                <div>
                  <Image src={infor} alt="Infor" />
                </div>
                <div>
                  <Image src={automationAnywhere} alt="Automation" />
                </div>
                <div>
                  <Image src={Oracle} alt="oracle" />
                </div>
                {/* <div>
                  <Image src={lsCentral} alt="LsCentral" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Industry Spotlight Slider */}

      {/* Insights */}
      <BlogSlider arr={blogData} />

      {/* Testimonials */}
      <NewTestimonial
        ribbon="Testimonials"
        ribbonVisible={false}
        title="Delighted Customers Share their Success Experiences"
        desc="Discover how we have helped our customers to realize better results aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "India's Leading Manufacturer of Switchgears & Control gears",
            thumbnail: "",
            description:
              "Appreciation for all the hard work and diligent effort that GITL’s team has put into solving the issue of our Web Enquiry page. It was your persistent hard work and research that has given us results eventually. We are pleased to have you as our Azure support partner.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Leading Seafood Restaurant in Saudi Arabia",
            thumbnail: "",
            description:
              "Thanks to the GITL team for their exceptional work on the VAT Transition project! From database analysis to report modification, all tasks were completed precisely and on time. Despite the remote setup the efficient management from the Godrej Infotech team ensured seamless success.",
            category: "static",
            link: "/",
          },
          
        ]}
      />
      {/* Subscription */}
      <Subscription
        title="Free 30 Minutes "
        blue="Strategy for IT Services!"
        title2=""
        desc="Share your details to discover how we can assist your business with speedy growth."
      />
    </>
  );
};

export default page;
