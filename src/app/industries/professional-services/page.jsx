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

import Dynamic365 from "../../../../public/Dynamic365.png";
import Oracle from "../../../../public/Oracle.png";
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
import BlogSlider from "@/components/BlogSlider";
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
    text: "Complexities of Multi-entity Management and Global Consolidation",
  },
  {
    id: 2,
    text: "Resource Load Management and Tracking",
  },
  {
    id: 3,
    text: "Efficient Contract Management Systems and Processes",
  },
  {
    id: 4,
    text: "Attracting new clients and Managing customer programs",
  },
  {
    id: 5,
    text: "Efficiently managing assets and ensure accurate inventory management",
  },
  {
    id: 6,
    text: "Standardizing costing methodologies and consolidating and centralizing data",
  },
  {
    id: 7,
    text: "Managing billing terms diversity and ensuring financial reporting accuracy",
  },
  {
    id: 8,
    text: "Efficiently tracking employee time for project management and payroll processing",
  },
  {
    id: 9,
    text: "Scaling operations to meet growing demands of changing market conditions",
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
    title: "Implementation & Rollout",
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
    title: "Development & Customization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Training Workshop",
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
  {
    _id: 7,
    title: "Legacy Modernization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 8,
    title: "Bespoke Applications",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 9,
    title: "License sales and services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 10,
    title: "Data Insights",
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
        title: "Incident handling via customer portals",
        url: "/",
      },
      {
        title: "Augmented intelligence",
        url: "/",
      },
      {
        title: "Asset/ Equipment tracking solution",
        url: "/",
      },
      {
        title: "RFID based GPS tracking",
        url: "/",
      },
      {
        title: "Quality Control Analysis System",
        url: "/",
      },
      {
        title: "Revenue Recognition Platform",
        url: "/",
      },
      {
        title: "Data Driven Analytics Solutions",
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
        title: "Cloud Consulting and Computing",
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
        title: "Data management on Cloud",
        url: "/",
      },
      {
        title: "M365",
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
        title: "Stakeholder Role Assignment",
        url: "/",
      },
      {
        title: "Accounting and Invoicing System",
        url: "/",
      },
      {
        title: "Customer Experience Solutions",
        url: "/",
      },
      {
        title: "Integrated Sales, Project, Finance and Workforce Management",
        url: "/",
      },
      {
        title: "Client and Contractor Management",
        url: "/",
      },
      {
        title: "Project Management",
        url: "/",
      },
            {
        title: "Finance and Accounting Digital Integration",
        url: "/",
      },
            {
        title: "IT Architecture Design",
        url: "/",
      },
            {
        title: "Organizational Hierarchy",
        url: "/",
      },
       {
        title: "Field Activity Planning and Management",
        url: "/",
      },
    ],
  },
];

const BenefitsData = [
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
      "Effortless communication and efficient information retrieval through Natural Language Processing ",
  },
  {
    _id: 4,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
  },
];

const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Education",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Industry-Spotlight-Retail",
    title: "IT Consultancy",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Real Estate",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
  {
    _id: 4,
    title: "Non-Government Association",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
  {
    _id: 5,
    title: "Automotive",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
  {
    _id: 6,
    title: "Plant Maintenance",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
    {
    _id: 7,
    title: "Hospitality",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Achieving Enhanced Service Delivery, Customer Satisfaction and Profitability for Professional Services Businesses"
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
          // Offerings

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
              title: "Offerings",
              link: "#Offerings",
            },
          ]}
        />
      </>
      {/* Overview  */}
       {/* Abstract  */}
      <Abstract abstractdesc="Professional Services organisations need to focus on improving customer-centricity, creating differentiation, and optimizing operational efficiency is paramount. We understand the urgent needs of this sector and offers tailored IT services and solutions to address them effectively.
Our solutions and expertise help in prudent financial management, increase business performance, drive continuous operational improvement, ensure responsiveness to customer needs, streamline timesheet management, advanced expense management and entity consolidation. 
Our goal is to facilitate performance progress, reduced time to market and enhanced customer experience. By partnering with Godrej Infotech, Professional Services organisation can overcome their challenges with confidence while optimising cost.
"></Abstract>


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
                    From managing multiple entities, diverse client demands to navigating complex projects and organisational structure, professional services organisations face several obstacles such as
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

      {/* Our Ai Offerings - our solutions */}
      <>
        <div id="Solutions" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  GITL Project Solutions Portfolio
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Offerings
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  With a keen understanding of the unique needs of Professional Services businesses, discover our comprehensive suite of new and agile solutions, established on business results. 
                </p>
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

      {/* Our Capabilities */}
      <div id="Capabilities">
        <Capabilities
          ribbon=" "
          arr={[
            {
    _id: 1,
    icon: "gear",
    title: "Functions",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "Customer management",
        url: "/",
      },
      {
        title: "Real time activity tracking by mobile apps",
        url: "/",
      },
      {
        title: "AMC contract management",
        url: "/",
      },
      {
        title: "Supplier & Customer Claims",
        url: "/",
      },
      {
        title: "Preventive & schedule maintenance",
        url: "/",
      },
      {
        title: "Digital Documentation",
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
        title: "Spare parts Management",
        url: "/",
      },
      {
        title: "Fleet management with IoT and AR",
        url: "/",
      },
      {
        title: "System logistics management",
        url: "/",
      },
      {
        title: "Equipment rental management",
        url: "/",
      },
      {
        title: "Multi site management",
        url: "/",
      },
      
    ],
  },
  {
    _id: 4,
    icon: "gear",
    title: "Performance Management",
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
      {
        title: "Financial Tracking",
        url: "/",
      },
      
    ],
  },
          ]}
          title="Key Capabilities"
          desc="Leveraging industry-leading credentials and strategic partnerships, our extensive portfolio of capabilities and expertise is the result of years of valuable experience."
        />
      </div>

      {/* 3 column - Segment we serve */}
      <>
        <div id="IndustryVerticals" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                 Segments we Serve
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  We extend our expertise to a wide array of sectors of Professional services industry that facilitate optimization of operations to increase effectiveness and develop better client relationships.
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

       {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "Blog",
            title: "Crucial Factors for Professional Services Firms while selecting their IT Outsourcing Partner",
            desc: "It's imperative for professional services businesses to conduct a thorough assessment of their unique requirements and objectives. Whether it's enhancing operational efficiency through automation, harnessing the scalability of cloud computing, or undergoing a seamless digital transformation, clarity on these aspects will serve as a guiding light in the partner selection journey.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      

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
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Infor LN Managed Support Services for Europe's Leading Marine Services Provider",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Read article",
            link: "/",
          },
          
        ]}
      />
      {/* Our Partners */}
      
      {/* Industry Spotlight Slider */}

      {/* Testimonials */}
      <NewTestimonial
        ribbon="Testimonials"
        ribbonVisible={false}
        title="Delighted customers share their success experiences"
        desc="It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "Head Procurement & Project Manager",
            thumbnail: "1",
            description:
              "On behalf of our entire organization, please accept our sincere appreciation for the excellent job Godrej Infotech Limited has done over the past several months in implementation of LN ERP. It was an enormous undertaking but went smoothly and efficiently! Godrej was able to quickly understand our business needs, priorities and was able to make positive and quality contribution during LN ERP implementation, which was appreciated by all team members of our organization. ",
            category: "static",
            link: "/",
          },
         
        ]}
      />
      {/* Subscription */}
      <Subscription
        title="Ready to Get Started?"
        blue="Share your details now and take the next step towards modernizing your business for success."
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />
    </>
  );
};

export default page;
