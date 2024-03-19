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
import uiPath from "../../../../public/logos/rpa/uiPath.svg";
import automationAnywhere from "../../../../public/logos/rpa/automation-anywhere.svg";
import checkout from "../../../../public/checkout.png";
import MLExpertise from "../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import { AnimatePresence, motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Benefits from "@/components/Benefits";
import Capabilities from "@/components/Capabilities";
import Expertise from "@/components/Expertise";
import clsx from "clsx";
import { NewTestimonial, OfferingsSlider } from "@/components";
import Abstract from "@/components/Abstract";
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
    text: "No Remote Access",
  },
  {
    id: 2,
    text: "Siloes in the Healthcare World",
  },
  {
    id: 3,
    text: "Issues with Medicare and Medicaid Reimbursement",
  },
  {
    id: 4,
    text: "Absence of Supply Management System",
  },
  {
    id: 5,
    text: "Managing the Massive Volumes of Patient-Related Data",
  },
  {
    id: 6,
    text: "Inefficiencies and Errors in Data Sharing",
  },
  {
    id: 7,
    text: "Lack of Online Pharmaceutical Stores",
  },
    {
    id: 8,
    text: "No Early Warning Healthcare Devices",
  },
    {
    id: 9,
    text: "Slow Pace with Modern Solutions",
  },
];
const UseCases = [
  {
    _id: 1,
    title: "Consulting Services",
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
    title: "Upgrade & Migration Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Support & Maintenance Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Customization Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Integration Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Audit Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 8,
    title: "Reporting Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  
];
const UseCasesSlider = [
  {
    _id: 1,
    title: "Pharma Manufacturer",
    cta: "Know More",
    desc: "Enhance your pharmaceutical business with our tailored IT services to streamline equipment management, driving success in the highly competitive industry.",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Health Facility Centre",
    cta: "Know More",
    desc: "Elevate financial performance by providing comprehensive Revenue Cycle Management (RCM) services, optimizing revenue capture and financial operations.",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Medical Equipment & Supplies",
    cta: "Know More",
    desc: "Elevate your medical equipment and supplies operations to the next level with our IT services, from product configuration, asset Management.",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Pharma Distributors",
    cta: "Know More",
    desc: "Empower your medicines and injectables business with our advanced IT services, optimizing inventory control and distribution efficiency.",
    link: "/",
    image: "",
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
        title: "Data Driven Analytics",
        url: "/",
      },
      {
        title: "Predictive Maintenance for Asset",
        url: "/",
      },
      {
        title: "Robotics and Automation",
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
        title: "Data Management",
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
        title: "ERP Implementation",
        url: "/",
      },
      {
        title: "Supply Chain Management",
        url: "/",
      },
      {
        title: "Finance Management",
        url: "/",
      },
      {
        title: "Process Optimization",
        url: "/",
      },
      {
        title: "Customer Experience - CRM",
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

const page = () => {
  return (
    <>
      <EntIntro
        title="Digitizing Healthcare with All-Inclusive Avant-Garde IT Solutions and Services"
        desc=""
        cta="Let's Connect"
        width="70%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
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
      {/* Abstract  */}
      <Abstract abstractdesc="Acknowledging the intricate challenges faced by the healthcare sector, we prioritize the streamlining of operations to achieve optimal efficiency and minimize bottlenecks. Our suite of solutions and services helps you in developing a cohesive ecosystem, fostering collaboration and ensuring data accuracy."></Abstract>


      {/* Challengers Para */}
      <>
        <div className={`w-full bg-white pb-20`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Challenges Confronting Healthcare Organisations
                  </h3>
                  <p>
                   Streamlining healthcare operations and interoperability is a complex task. Our customised IT solutions streamline operational intricacies and processes for seamless functionality.
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

      {/*  Cards  Sliders*/}
      <>
        <div className={`w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
              <h3 className="text-4xl leading-[42px] font-bold">
                Segments We Serve
              </h3>

              <p className="font-normal leading-[22px]">
                
              </p>
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="flex flex-col sm:flex-row gap-y-5 flex-wrap justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5 "
            >
              {UseCasesSlider.map((item, index) => {
                return (
                  <SwiperSlide
                    key={item._id}
                    className="sm:w-full h-full flex flex-col justify-between  mr-4  relative group"
                  >
                    <div className="sm:w-full h-full bg-white  flex flex-col justify-between">
                      <div
                        className={` overflow-hidden w-[100%] h-auto relative`}
                      >
                        <Image
                          src={
                            item.thumbnail
                              ? `/project-${item.thumbnail}.png`
                              : `/project-placeholder.png`
                          }
                          alt={`${item.thumbnail}`}
                          className="w-full hover:scale-125 transition-transform duration-[0.75s] ease-[ease]"
                          width="315"
                          height="200"
                          // className="w-full h-auto lg:w-315 lg:h-200"
                        />
                      </div>
                      <div className="p-5  mx-2">
                        <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                          {item.title}
                        </h4>
                        <p>{item.desc}</p>
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

      {/* Our Ai Offerings */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                {/* <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  Reinventing Growth Opportunities
                </h4> */}
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Solutions
                </h3>
              </div>
            </div>
            <div>
              <div>
                {/* <p className="font-medium leading-[22px] md:w-[90%] ">
                  Holistic and future- ready solutions to re-engineer your
                  business with our proven implementation methodologies for
                  maximum Return on Investment (RoI)
                </p> */}
              </div>
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

      {/* Microsoft Services */}
      <>
        <div className={`bg-ms-practise w-full    py-32  `} id="productivity">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]   leading-[54px] mb-3 font-bold ">
                    Our Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium  leading-[22px] md:w-[90%] ">
                    {/* We deliver high-performing services for a comprehensive
                    suite Microsoft ecosystem, devised to elevate growth and
                    productivity and build stronger stakeholder connections */}
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

      {/* Expertise */}
      {/* <Expertise
        ribbon="Our Expertise "
        ribbonTxtWhite="true"
        title="Hub of Expertise"
        desc=""
        arr={[
          {
            title: "200+",
            desc: "Implementation Experience and Project Deliveries",
          },
          {
            title: "300+",
            desc: "Happy customers across 140+ Countries.",
          },
          {
            title: "24/7",
            desc: "Support Desk",
          },
        ]}
      ></Expertise> */}

      {/*  Cards */}
      {/* <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
              <h3 className="text-4xl leading-[42px] font-bold">
                Our Capabilities
              </h3>

              <p className="font-normal leading-[22px]">
                Every successful implementation needs more than technology
                expertise. Our all-inclusive approach reflects every aspect of
                your organization and is our commitment to deliver winning
                implementation service to you
              </p>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-1">
            {[
              {
                _id: 1,
                title: "Increased Productivity",
                desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI. Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 2,
                title: "Gain Accurate Outcomes",
                desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services. Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/GainAccurateOutcomes.png",
              },
              {
                _id: 3,
                title: "Increased Productivity",
                desc: "Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI. Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
                cta: "Know More",
                ctaUrl: "/",
                image: "/rpa/IncreasedProductivity.png",
              },
              {
                _id: 4,
                title: "Gain Accurate Outcomes",
                desc: "Automate the time-consuming and error-prone manual tasks and get consistent, error-free results while strengthening trust in your services. Speed up operations with smart work of RPA, delivering proficient service to your customers and increasing your ROI.",
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
      </> */}

      {/* Casestudy */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Delivering Results that Matters"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Global Healthcare Solutions Organization Successfully Migrates IT Environment from .NET 2.0 to .NET 4.5.",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Read article",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
          },
          {
            id: 2,
            title:
              "Indian Prominent Healthcare Organization Offering Emergency Medical Response Services Upgrades to Hexagon EAM 11.6 ",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "Read article",
            link: "https://www.godrejinfotech.com/knowledge-center/case-studies.aspx",
          },
          
        ]}
      />

      {/* Our Partners */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
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
                  We are your trusted RPA partner, and our experience extends to
                  industry-leading RPA platforms and expertise to customize
                  solutions that fulfil your exclusive business needs
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
                  <Image src={Oracle} alt="oracle" />
                </div>
                {/* <div>
                  <Image src={lsCentral} alt="LsCentral" />
                </div> */}
                <div>
                  <Image src={uiPath} alt="UIpath" />
                </div>
                <div>
                  <Image src={automationAnywhere} alt="Automation" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Subscription */}
      <Subscription
        title="Request a Personalized Demo"
        blue=""
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />
    </>
  );
};

export default page;
