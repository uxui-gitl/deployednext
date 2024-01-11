"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";
import WhySection from "@/components/WhySection";
import BlogSlider from "@/components/BlogSlider";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Capabilities from "@/components/Capabilities";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";
import Testimonial from "@/sections/testimonial/Testimonial";

import Icon from "@mdi/react";
import { mdiBullseyeArrow, mdiTableLarge } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import clsx from "clsx";
import Subscription from "@/components/Subscription";

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
  const blogData = [
    {
      _id: 1,
      ribbon: "blog",
      title:
        "Digitalization with Infor Coleman Artificial Intelligence & Machine Learning",
      desc: "Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI. Having worked with Infor solutions for many years now, I see that Infor too has evolved its applications by introducing artificial intelligence & machine learning features to meet the needs of these organizations. Let’s take a closer look at these exciting features in Infor Coleman and how organizations can benefit from them.",
      cta: "Read More",
      link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
      imgUrl: "",
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
  ];
  return (
    <>
      <EntIntro
        title="Empowering Global Retailers to Achieve
        Ambitious Goals with Front-to-Back
        Unified Retail Management Application"
        desc="Microsoft Solutions such as cloud, workplace & business applications infused with our capability enables businesses to adapt, innovate and transform operations for excellence and better customer satisfaction"
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

      {/* Blog */}
      <BlogSlider arr={blogData} />

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
                      className="w-[308px] max-w-[308px] mr-8  relative group"
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

      {/* Testimonial */}
      <Testimonial
        ribbon="Testimonials "
        title="What Experts Think About Us "
        desc="It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "IT Manager",
            thumbnail: "1",
            description:
              "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
            category: "static",
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
        title="Ready for Transformation with"
        blue="AI and ML?"
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
