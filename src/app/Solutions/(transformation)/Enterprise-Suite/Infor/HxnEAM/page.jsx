"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../../public/icon.png";
import microsoft from "../../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../../public/Power-App.png";
import Birst from "../../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../../public/dummy.png";

import Icon from "@mdi/react"; // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { mdiBullseyeArrow, mdiTableLarge } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import WhySection from "@/components/WhySection";
import clsx from "clsx";
import Benefits from "@/components/Benefits";
import Subscription from "@/components/Subscription";
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import InsightSlider from "@/components/InsightSlider";
const blogData = [
  {
    _id: 1,
    ribbon: "insights",
    title: "Voice Assistant Challenges in 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
  {
    _id: 2,
    ribbon: "insights",
    title: "Hyper automation trends in 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
];
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
const ChoiceSlider = [
  {
    _id: 1,
    title: "Healthcare",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Automotive",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "Logistic",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Retail",
    imgUrl: "4",
    url: "/",
  },
  {
    _id: 5,
    title: "Manufacturing",
    imgUrl: "5",
    url: "/",
  },
];
const page = () => {
  const lists = [
    {
      id: 1,
      text: "Navigating intricate warehouse operations demands sophisticated solutions for precise management of inventory, labor and billing",
    },
    {
      id: 2,
      text: "Meeting the ever-changing needs of customers requires agility and adaptability within warehouse functions",
    },
    {
      id: 3,
      text: "Success in today's business landscape hinges on real-time data access and data-driven insights for informed decision-making",
    },
    {
      id: 4,
      text: "To stay competitive, businesses must undergo a significant transformation of their supply chain operations, prioritizing speed, flexibility, and intelligence",
    },
    {
      id: 5,
      text: "Embracing digitization is the key to converting the supply chain from a cost center into a source of competitive advantage",
    },
  ];

  const upgradeCloud = [
    {
      _id: 1,
      title: "Migrate to the Cloud from On-Prem",
      desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 2,
      title: "Migrate From a Different ERP Platform to Infor LN  ",
      desc: "Experience seamless and transformative migration with data integrity for your business",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 3,
      title: "Upgrade with Infor",
      desc: "Get access to enhanced innovation, business preferences and value",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 4,
      title: "End-to-End Implementation ",
      desc: "Streamlining every phase of the implementation, we provide capability of successful and on-time delivery of Infor solution",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 5,
      title: "Managed Services ",
      desc: "Managing every complexity, time-consuming and resource-rigorous process and on demand maintenance of Infor application",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 6,
      title: "Custom Development & Integrations",
      desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
  ];
  const CoreCapabilitySlider = [
    {
      _id: 1,
      title: "Asset Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Record",
          url: "/",
        },
        {
          title: "Maintain",
          url: "/",
        },
        {
          title: "Structure",
          url: "/",
        },
        {
          title: "Standardize asset information",
          url: "/",
        },
      ],
    },
    {
      _id: 2,
      title: "Asset Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Record",
          url: "/",
        },
        {
          title: "Maintain",
          url: "/",
        },
        {
          title: "Structure",
          url: "/",
        },
        {
          title: "Standardize asset information",
          url: "/",
        },
      ],
    },
    {
      _id: 3,
      title: "Asset Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Record",
          url: "/",
        },
        {
          title: "Maintain",
          url: "/",
        },
        {
          title: "Structure",
          url: "/",
        },
        {
          title: "Standardize asset information",
          url: "/",
        },
      ],
    },
    {
      _id: 4,
      title: "Asset Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Record",
          url: "/",
        },
        {
          title: "Maintain",
          url: "/",
        },
        {
          title: "Structure",
          url: "/",
        },
        {
          title: "Standardize asset information",
          url: "/",
        },
      ],
    },
    {
      _id: 4,
      title: "Asset Management",
      cta: "Know more",
      ctaUrl: "/",
      icon: "dummy",
      links: [
        {
          title: "Record",
          url: "/",
        },
        {
          title: "Maintain",
          url: "/",
        },
        {
          title: "Structure",
          url: "/",
        },
        {
          title: "Standardize asset information",
          url: "/",
        },
      ],
    },
  ];
  return (
    <>
      <EntIntro
        title="Maximize Asset Value and Productivity
        with HxGN EAM Godrej Infotech Expertise "
        desc="HxGN EAM, formerly known as Infor EAM, presents holistic solutions to address the pressing challenges of asset performance in both the present and the future"
        cta="Let's Connect"
        width="60%"
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

      {/* Overview */}
      <>
        <div className={` w-full bg-white py-10`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col gap-x-10">
                  <h4
                    className={` font-medium w-fit text-[#0745D3] uppercase ribbon`}
                  >
                    HxnEAM
                  </h4>
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Overview
                  </h3>
                  <p>
                    Our commitment is to make your transformation journey as
                    smooth as possible, guaranteeing that you attain your
                    ambitious results. That&apos;s why we build a holistic
                    viewpoint on your implementation and rollout project and
                    assure that your project is on time, exceeding your
                    expectations
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </>

      {/* Core Capabilities */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5  ">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Core Capabilities
                </h3>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We are committed to bringing the power of AI to your
                    business operations, providing tailored solutions that
                    drives business proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` pt-48 pb-12 bg-[url('/bgEcomScreen.png')] flex justify-center items-center w-full`}
          >
            <div className="text-left max-w-screen-xl md:max-w-screen-xl ">
              <Swiper
                slidesPerView={"auto"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {CoreCapabilitySlider.map((item) => (
                  <>
                    <SwiperSlide
                      key={item._id}
                      className="w-[283px] max-w-[283px] mr-4  relative group"
                    >
                      <div className="bg-[#EDF1FF]" key={item._id}>
                        <div className=" h-full flex flex-col justify-between">
                          <div className=" p-5">
                            <div>
                              <Icon
                                path={mdiTableLarge}
                                size={2}
                                className="mb-4"
                              />
                            </div>
                            <div>
                              <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                                {item.title}
                              </p>
                            </div>
                            <div>
                              <ul className="mt-4 mb-8">
                                {item.links.map((list, index) => (
                                  <li
                                    key={index}
                                    className=" border-b-2 border-[#DBDBDB] py-2 "
                                  >
                                    <Link
                                      href={list.url}
                                      className="text-[#101828]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                                    >
                                      {list.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <Link
                            href={item.ctaUrl}
                            className="text-[#fff] bg-[#0745D3]  p-5 w-full text-[14px] font-medium leading-[22px]  flex transition-all hover:opacity-75  "
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
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-center  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industries Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] mb-3 md:w-[90%] ">
                  Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector
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

      {/* Assest Managment Solutions */}
      <>
        <div className={` w-full bg-[#FFF] hidden pt-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-center  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Best in class Asset management Solution
                </h3>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div className="flex flex-col md:flex-row gap-8">
                  {[0, 1].map((item, index) => (
                    <div className="w-1/2 my-4" key={index}>
                      <Image
                        src={`/placeholderImage.png`}
                        height={350}
                        width={283}
                        alt="icon"
                        className="w-full"
                      />
                      <div className="  ">
                        <p className="text-[16px] text-left text-black  w-fit leading-[22px] my-4 font-semibold ">
                          HxGN EAM is recognized as a leader in the 2022
                          Verdantix Green Quadrant for Enterprise Asset
                          Management Software for its strengths in resource
                          planning, work management and analytics
                        </p>
                      </div>
                      <Link
                        href={"/"}
                        className="flex text-[14px] text-[#0745D3] leading-[22px]  max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                      >
                        Know more
                        <span>
                          <Icon
                            path={mdiArrowRight}
                            style={{
                              marginLeft: "0.5em",
                              width: "1rem",
                              fontSize: "14px",
                            }}
                            className="cta-know-more"
                          />
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Insights slider */}
      <BlogSlider arr={blogData} />

      {/* Benefits */}

      <Benefits
        ribbon="Upgrade to Cloud Benefits "
        ribbonTxtWhite="true"
        title="Experience business performance surge with cloud"
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title: "Minimize operational expenses of IT portfolio",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title: "Enable user concurrency to support large-scale workloads",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title:
              "Enhanced collaboration through cross-device accessibility to information",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title:
              "Advanced data management solutions, modernized process and cloud services",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title: "Aptitude to respond to shifting business requirements",
          },
          {
            _id: 6,
            icon: "Benefits-upgradeCloud/IntegrateBigDataAnalytics",
            title:
              "Integrate Big Data Analytics into business processes for data-driven decision-making",
          },
          {
            _id: 7,
            icon: "Benefits-upgradeCloud/SecurelyStores",
            title: "Securely stores confidential business information",
          },
          {
            _id: 8,
            icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
            title:
              "Enhance system performance and user experience by scaling up the system",
          },
        ]}
      ></Benefits>
      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Elevating Customer Experience with Cloud  "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
            thumbnail: "1",

            description: "Non-government Association of Indian Industries ",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 2,
            title:
              "Cut down environment development cost by 60% and business performance boost of 5 sister companies with On-Cloud D365 F&O implementation ",
            thumbnail: "2",

            description: " Middle East-based Electrical Products Manufacturer ",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 3,
            title:
              "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
            thumbnail: "3",

            description: "Coffee Brand Distributor in Egypt and Middle East",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

      {/* Why Infotech */}
      <WhySection
        ribbon="Spend LESS, GROW MORE"
        title="Why Godrej Infotech ?"
        desc="Embark on cloud upgradation journey by harnessing our credible
        assessment process, strategic resources and fluent data
        migration practice to minimise your business risk, time to
        market and cost. Our time-tested delivery framework enables
        businesses"
        arr={[
          {
            _id: 1,
            desc: "One of the most dedicated and <span style='color: #4C6FFF;'> reliable partners </span>  for Azure Migration Services and Managed Cloud Service across ",
            icon: "",
          },
          {
            _id: 2,
            desc: "<span style='color: #4C6FFF;'>1 Billion+</span> Unfailing Cloud Hosting availability managing <span style='color: #4C6FFF;'>40000+</span> VMs",
            icon: "",
          },
          {
            _id: 3,
            desc: "<span style='color: #4C6FFF;'>25000+</span> Apps and Databases migrated",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready to Streamline Your
        Business Operations? "
        blue=" "
        title2=""
        desc="Talk To Our Experts to discuss your requirements "
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
