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
  mdiEyeOutline,
} from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Testimonial from "@/sections/testimonial/Testimonial";

import inforCloudSuite from "../../../public/inforCloudSuite.png";
import { projects } from "../../assets/data";
import Testimonials from "@/sections/testimonial/Testimonial";
import puzzle from "../../../public/upgradeCloud/puzzle.png";

import Dynamic365 from "../../../public/Dynamic365.png";
import Oracle from "../../../public/Oracle.png";
import checkout from "../../../public/checkout.png";
import MLExpertise from "../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import { AnimatePresence, motion, useScroll } from "framer-motion";
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
import { JoinExpTeam, NewTestimonial, OfferingsSlider } from "@/components";
import Robot from "@/sections/robot/Robot";
import ACTCard from "@/sections/ACTCard/ACTCard";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Announcement from "@/sections/announcement/Announcement";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

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
const UseCases = [
  {
    _id: 1,
    title: "Business Consulting",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementations & Global Rollout",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Migrations & Transformation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Legacy Modernisation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Infrastructure as a service",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Managed Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  
];
const UseCasesSlider = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementation & Rollout",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Upgrade & Migration",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Development & Customization",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Training Workshop",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Managed Services",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Legacy Modernization",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 8,
    title: "Bespoke Applications",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    image: "",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 9,
    title: "License sales and services",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 10,
    title: "Data Insights",
    cta: "Know More",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const locations = [
  {
    id: 1,
    loc: "Mumbai",
    loc2: "India",
    desc: "Godrej Infotech Ltd. Plant 10, Pirojshanagar, Vikhroli (West), Mumbai- 400 079, India.",
    phone: "+91 226 796 4086",
    phone2: "+91 226 796 4084",
    extension: "4087",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 2,
    loc: "Delhi",
    loc2: "India",
    desc: "Godrej Infotech Ltd. C/O Awfis, Plot No. A-24/9, Mohan Co-operative Industrial Area, New Delhi - 110044, India.",
    phone: "",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 3,
    loc: "Kolkata",
    loc2: "India",
    desc: "Godrej Infotech Ltd. Block GN, Plot No. 30, Sector-V, Salt Lake City, Kolkata - 700 091, India.",
    phone: "+91 336 601 3500",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 4,
    loc: "Bengaluru",
    loc2: "India",
    desc: "Godrej Infotech Ltd. Workenstein Collaborative Spaces Pvt Ltd, Workafella, 150, 1, Infantry Rd, Opp. Commissioner Office, Shivaji Nagar, Bengaluru, Karnataka 560001",
    phone: "",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 5,
    loc: "UAE",
    loc2: "",
    desc: "Godrej Infotech Ltd. Executive Suite Z-61, PO Box 121806, Sharjah, UAE.",
    phone: "+971 655 798 39",
    phone2: "+971 655 708 66",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 6,
    loc: "Belgium",
    loc2: "",
    desc: "LVD Godrej Infotech nv. Hondschotestraat 112, B-8560, Wevelgem (Gullegem)",
    phone: "",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@lvdgi.be",
  },
  {
    id: 7,
    loc: "Singapore",
    loc2: "",
    desc: "Godrej Infotech Singapore Pte Ltd. 105 Cecil Street, The Octagon, Singapore-069534",
    phone: "+65 846 816 94",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 8,
    loc: "Singapore",
    loc2: "",
    desc: "Godrej Infotech Singapore Pte Ltd. 11 Lok yang way, Singapore-628632",
    phone: "",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
  },
  {
    id: 9,
    loc: "Saudi Arabia",
    loc2: "",
    desc: "",
    phone: "+966 546 416 385",
    phone2: "",
    extension: "",
    extension2: "",
    email: "infotech@godrej.com",
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
        title: "Cloud Security Solutions for Mfg.",
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
        title: "Architecture Designing  ",
        url: "/",
      },
      {
        title: "Hierarchy Management ",
        url: "/",
      },
      {
        title: "Process Optimization ",
        url: "/",
      },
      {
        title: "Stakeholder work/ role assignment ",
        url: "/",
      },
      {
        title: "Multiple invoicing modes",
        url: "/",
      },
      {
        title: "Customer Experience - CRM and Ecommerce ",
        url: "/",
      },
    ],
  },
];

const ChoiceSlider = [
  {
    _id: 1,
    title: "Manufacturing ",
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
    title: "Project",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Trading & Distribution",
    imgUrl: "4",
    url: "/",
  },
  {
    _id: 5,
    title: "Professional Service",
    imgUrl: "5",
    url: "/",
  },
    {
    _id: 6,
    title: "Healthcare",
    imgUrl: "5",
    url: "/",
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

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Announcement />
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>
      <EntIntro
        title="DELIVERING BUSINESS VALUE WITH AUTOMATION / CLOUD / TRANSFORMATION"
        desc=""
        cta="Let's Connect"
        width="70%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Partner logos */}
      {/* <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            
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
                  <Image src={inforCloudSuite} alt="Infor" />
                </div>
                <div>
                  <Image src={Oracle} alt="Infor" />
                </div>
                <div>
                  <Image src={Dynamic365} alt="Infor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </> */}

      {/* about us */}
      <>
        <div className={` w-full bg-[#F2F4F7] text-[#101828]`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl   mx-auto p-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className=" flex items-start flex-col justify-start mt-10  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  About Us
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] mb-8">
                  Headquartered in Belgium (Wevelgem-Gullegem), LVD Godrej Infotech (LVDGI), is a fully owned subsidiary of Godrej Infotech Limited (GITL) which is based in Mumbai, India. A leading IT service provider specializing in end-to-end IT solutions, GITL is part of the USD 4.1 Billion Godrej group of companies. The Godrej Group is one of India's leading corporate houses dealing in High Tech Engineering, Consumer Products, Aerospace, Chemicals, Construction, Material Handling, Storage & Security Solutions. 
                </p>
                <p className="font-medium leading-[22px] md:w-[90%] mb-8">
                  LVDGI's service offerings include Business Consulting, ERP Implementation & Support, Application Development, Integration, Digital Transformation, Analytical Services, Mobile Application Development, Infrastructure Management, and e-Commerce. We have domain and technology expertise in the Manufacturing, Retail, Trading, Distribution, Logistics, Hospitality, Project, and Service industries. 
                </p>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                 A technology focused organization, LVDGI has emerged as a pioneer in the Digital Solutions space. Driven by the values of Integrity, Responsiveness, Commitment and Teamwork, we have been providing Microsoft, Infor, LS Retail, and Oracle services and solutions for leading organizations in the Europe region. 
                </p>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                 Our team of knowledge experts provide ready-to-deploy and customizable IT-solutions for individual business functions like Enterprise Resource Planning (ERP), Customer Relationship Management, Product Life Cycle Management, Asset Management and Business Intelligence (BI). We also have a Remote Infrastructure Management team that works as an extended IT arm for their clients and provides skilled IT proactive services of Azure Cloud, Database, Network, System and Security Administration. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* ACT header */}

      {/* Robot */}
      <Robot />
      <>
        <div
          id="actCards"
          className=" max-w-screen-xl  mb-5 mx-auto p-5 px-[2rem]"
        >
          <main ref={container} className={`relative mt-[20vh]`}>
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <ACTCard
                  key={`p_${i}`}
                  i={i}
                  {...project}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </main>
        </div>
      </>

      {/* Robot Cards */}

      {/* Case Study */}

      {/* Casestudy */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Data Insights in Action / Case study"
        desc=""
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Belgium based Global Manufacturer of Sheet Metal Forming Machines Selects LVDGI for Infor LN Implementation, Rollout & Support",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "",
          },
          {
            id: 2,
            title:
              "Europe's Leading Marine Services Provider headquartered in Netherlands Selects LVDGI for Infor LN Managed Support Services",
            thumbnail: "2",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "",
          },
          {
            id: 3,
            title:
              "Europe's Leading Machine Manufacturer Automates Operations with Integrated Infor LN 10.4 Solutions",
            thumbnail: "2",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "",
          },
          {
            id: 4,
            title:
              "Global Leader in Industrial Packaging Products and Services company signs contract with LVDGI for Infor LN rollout & support activities.",
            thumbnail: "2",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "",
          },
        ]}
      />

      {/* MS Services Slider */}
      <>
        <div className={`bg-ms-practise w-full    py-32  `} id="productivity">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]   leading-[54px] mb-3 font-bold ">
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

      {/* Industry Spotlight */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-center  relative">
              <>
                <div className="max-w-screen-xl mx-auto   bg-white">
                  <div className=" mt-[5em] mb-[2rem]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 text-left">
                      <div>
                        <h3 className="text-4xl leading-[42px] font-bold">
                          Industries Spotlight
                        </h3>
                      </div>
                      <div>
                        <p>
                          Being preferred partner of leading industries, we help
                          in shaping specific technology prerequisites and
                          deliver brilliant value driven solutions tailored to
                          your sector
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>

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
                              src={`/industrySpotlight/${item.imgUrl}.png`}
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

      {/* About us CTA and Para */}
      <>
        <div
          style={{
            color: "white",
            background: "rgb(91, 98, 138)",
            backgroundImage: `linear-gradient(90deg, rgba(49, 9, 74, 1) 0%, rgba(29, 8, 69, 1) 15%, rgba(14, 0, 42, 1) 100%)`,
          }}
        >
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[5em]  ">
            <div className="mt-[3em] mb-[12em]">
              <h3 className=" text-7xl font-bold leading-[90px]">
                Our team is the driving force behind our mission, and their
                passion and expertise make it possible.
              </h3>
              <p className="text-base hidden font-regular">
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
        <div className="offsetCardWrap relative sm:pb-48 pb-32 bg-[#f2f4f7]">
          <div className="max-w-screen-lg shadow-md mx-auto left-0 right-0 absolute bg-[#f2f4f7] grid grid-cols-3 -top-32">
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Vision</h4>
              <p className="text-base font-medium">
                Be a world class provider of high-quality Information's & Technology solutions.
              </p>
            </div>
            <div className="offsetCard border-dashed hover:bg-[#f2f4f7] border-2 border-[#DBDBDB] border-y-0 bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Mission</h4>
              <p className="text-base font-medium">
                Beyond Business through integrated IT solutions.
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

      {/* Career Leap CTA */}
      <JoinExpTeam
        title="The work culture in Godrej supports learning at every stage of your work life. Opportunities in learning are available in the technical, functional, behavioural, general management and leadership areas through options like EDPs (Executive Development Programmes), MDPs (Management Development Programmes), E-learning and On the Job exposure to International Practices. 
For more info write to us at: gitlhrd@godrej.com"
        desc=""
        cta="Take the Cloud Career Leap"
        link=""
        img=""
      />

      {/* Subscription */}
      <Subscription
        title="Let's discuss how we can help you to"
        blue="enhance your business's growth potential."
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />

      {/* Infotech Weekly */}

      {/* Contact  */}
      <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
        <div className=" mt-[5em] mb-[2em]">
          <div className="hidden">
            <h4 className={` font-medium  text-[#0745D3] uppercase ribbon`}>
              OUR LOCATIONS
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-4xl leading-[42px] font-bold">
              Our Global Footprint
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 mb-[5em] gap-0 sm:gap-10">
          {locations.map((add) => {
            return (
              <>
                <div className="my-5">
                  <p className="font-bold">
                    {add.loc},{" "}
                    <span className="text-[#98A2B3]">{add.loc2}</span>
                  </p>
                  <p className="font-medium my-2">{add.desc}</p>
                  {add.phone && (
                    <p>
                      Phone: <Link href={`tel:${add.phone}`}>{add.phone}</Link>
                      {add.extension && <span> / {add.extension}</span>}
                    </p>
                  )}
                  {add.phone2 && (
                    <p>
                      Phone:{" "}
                      <Link href={`tel:${add.phone2}`}>{add.phone2}</Link>
                      {add.extension2 && <span> / {add.extension2}</span>}
                    </p>
                  )}
                  <p>
                    Email:{" "}
                    <span className="text-[#0745D3]">
                      <Link href={`mailto:${add.email}`}>{add.email}</Link>
                    </span>
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
