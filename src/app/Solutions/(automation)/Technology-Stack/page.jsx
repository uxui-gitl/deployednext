"use client";

// Our methodology section

import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";
import BlogSlider from "@/components/BlogSlider";
import Spotlight from "@/components/Spotlight";
import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import java from "../../../../../public/java.png";
import dotnet from "../../../../../public/dotnet.png";
import sharepoint from "../../../../../public/sharepoint.png";
import ms from "../../../../../public/ms.png";
import RPAPlaceholder from "../../../../../public/RPAPlaceholder.png";
import techStack1 from "../../../../../public/techStack1.png";
import techStack2 from "../../../../../public/techStack2.png";
import techStack3 from "../../../../../public/techStack3.png";
import techStack4 from "../../../../../public/techStack4.png";
import techStack5 from "../../../../../public/techStack5.png";
import techStack6 from "../../../../../public/techStack6.png";
import checkout from "../../../../../public/checkout.png";

/**
 * * Sandeep Rana
 * ! Images Import
 */


import MLExpertise from "../../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import InsightSlider from "@/components/InsightSlider";

import ServiceOfferingGrid from "@/components/ServiceOfferingGrid";

import Benefits from "@/components/Benefits";
import OfferingsGrid from "@/components/OfferingsGrid";
import { fromJSON } from "postcss";
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
const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title: "Legacy Modernization in Manufacturing Industry",
    desc: "The Manufacturing Industry is in midst of transformation with some organizations accelerating to Industry 4.0+ platforms while other organizations struggle with infrastructure which has been built for the past. The current pandemic situation has further exacerbated the situation with hackers looking at vulnerabilities for exploitation in the Industry Infrastructure. ",
    cta: "Know More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=8",
    imgUrl: "",
  },
  {
    _id: 2,
    ribbon: "blog",
    title: "ASP.Net-A popular choice for Web development ",
    desc: "Most enterprises are in the process of migration from legacy systems to new, user-friendly dynamic and robust web applications. In this crowded market of different technologies such as PHP, HTML5, WordPress, Magento and several others, Microsoft’s ASP.NET has proved to be ‘the popular choice’.",
    cta: "Know More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=4 ",
    imgUrl: "",
  },
  {
    _id: 3,
    ribbon: "blog",
    title: "Application Modernization – Proven Growth Strategy for Progressive Organizations",
    desc: "The IT Industry has seen various phases of evolution of application development & maintenance. In the earlier days, there used to be monolithic applications that used to be deployed on physical servers. Waterfall methodology was used wherein analysis, design, development & deployment phases were done in a sequential manner one after the other, and each succeeding phase could not be started before the preceding phase was completed.",
    cta: "Know More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=16 ",
    imgUrl: "",
  },
];
const TechStackOfferings = [
  {
    _id: 1,
    title: "Custom Application Development",
    image: "/technology-stack/Service-Offerings_Custom-Application-Development.jpg",
    desc: "With our extensive experience in the global marketplace, we build bespoke software solution that goes beyond off-the-shelf offerings.",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 2,
    title: "Legacy Modernisation",
    image: "/technology-stack/Service-Offerings_Legacy-Modernisation.jpg",
    desc: "We expertly enhance your application, optimizing system uptime and seamlessly transitioning from large architectures to microservices.",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 3,
    title: "Application managed services",
    image: "/technology-stack/Service-Offerings_Application-Managed-Services.jpg",
    desc: "Instrumental assistance to businesses in ascending challenges, thereby enhancing application performance and attaining better business results.",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 4,
    title: "Mobile Application ",
    image: "/technology-stack/Service-Offerings_Mobile-Application.jpg",
    desc: "Experience uniform connectivity and enriched user engagement on fingertips with our comprehensive mobile app development services.",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 5,
    title: "Enterprise Application Integration ",
    image: "/technology-stack/Service-Offerings_Enterprise-Application-Integration.jpg",
    desc: "We drive time-to-market with the adoption of cutting-edge architecture paradigms and seamlessly integrating data, processes and applications.",
    cta: "Know More",
    link: "/",
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "benefits-technology-stack/process-analyze",
    title: "Process and analyze vast volumes of data",
  },
  {
    _id: 2,
    icon: "benefits-technology-stack/ensure-uniformity",
    title: "Ensure Uniformity in Financial Information",
  },
  {
    _id: 3,
    icon: "benefits-technology-stack/boost-brand-value",
    title: "Boost brand value",
  },
  {
    _id: 4,
    icon: "benefits-technology-stack/process-analyze",
    title: "Process and analyze vast volumes of data",
  },
  {
    _id: 5,
    icon: "benefits-technology-stack/ensure-uniformity",
    title: "Ensure Uniformity in Financial Information",
  }
];
const navLinks = [
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
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Your Trusted Technology Partner
        for Scalable and Customized
        Business Applications "
        desc="Technology being keystone of business success plays an essential role in driving innovation for businesses across diverse industries. Our comprehensive suite of advanced technologies along with our dedicated capability is primed to deliver bespoke applications across various industry domains."
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
      {/* Tech Stack Platform Expertise Logos */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  100 + Applications developed & 50 + Expert developers
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Our focus centers on leveraging cutting-edge emerging
                  technologies to craft high-performing applications
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={java} alt="java" />
                </div>
                <div>
                  <Image src={dotnet} alt="dotnet" />
                </div>
                <div>
                  <Image src={sharepoint} alt="sharepoint" />
                </div>
                <div>
                  <Image src={ms} alt="ms" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Tech Stack Service Offerings */}
      {/* <>
        <ServiceOfferingGrid
          title="Service Offerings"
          arr={TechStackOfferings}
        />
      </> */}

      {/* Offerings 3 col grid */}
      <OfferingsGrid
        title="Service Offerings"
        titleOnly={true}
        desc=""
        columns="3"
        arr={TechStackOfferings}
      />

      {/* Insights */}
      <BlogSlider arr={blogData} />

      {/* Tech Stack Benefit Vertical Slider */}
      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Tech stack Benefits"
        ribbonTxtWhite="Tech stack Benefits"
        title="Benefits of Application Development with Our Technology Stack Expertise "
        desc=""
        arr={BenefitsData}
      ></Benefits>

      {/* Engg. with our Methodology */}
      <div id="spotlight">
        <>
          <div className={`w-full bg-[#F2F4F7] text-left pt-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
              <div className="bg-[#F2F4F7] text-left">
                <h4 className={`font-medium text-[#0745D3] uppercase ribbon`}>
                  Services for successful results
                </h4>
                <div className="flex flex-col md:flex-row gap-8 ">
                  <h3 className="text-4xl leading-[42px] my-4 font-bold">
                  Engineering Success with Our Methodology
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                  This approach helps us to adeptly manage software development projects involving complexity levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <div className={`w-full bg-[#F2F4F7] text-left `}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mx-auto p-5 px-[2rem] ">
            <Spotlight
              arr={[
                {
                  label: "01",
                  expandedLabel: "Step 01",
                  title: "Application Planning",
                  expandedTitle: "Application Planning",
                  desc: "Bridging the vision and projected application result with precision",
                  image: "/technologyStack/Application-Planning.jpg"
                },
                {
                  label: "02",
                  expandedLabel: "Step 02",
                  title: "Application Designing",
                  expandedTitle: "Application Designing",
                  desc: "Architecting solution design through the strategic approach",
                  image: "/technologyStack/Application-Designing.jpg",
                },
                {
                  label: "03",
                  expandedLabel: "Step 03",
                  title: "Defining technology stack",
                  expandedTitle: "Defining technology stack",
                  desc: "Evaluation and selection of frameworks, programming languages, libraries and tools",
                  image: "/technologyStack/Application-Designing.jpg",
                },
                {
                  label: "04",
                  expandedLabel: "Step 04",
                  title: "Application Development",
                  expandedTitle: "Application Development",
                  desc: "Emphasizing clean code architecture and development of state-of-the-art application",
                  image: "/technologyStack/Application-Development.jpg",
                },
                {
                  label: "05",
                  expandedLabel: "Step 05",
                  title: "Application Testing",
                  expandedTitle: "Application Testing",
                  desc: "Detecting defects, verifying compliance and ensuring seamless functionality and user experience",
                  image: "/technologyStack/Application-Testing.jpg",
                },
                {
                  label: "06",
                  expandedLabel: "Step 05",
                  title: "Application Deployment",
                  expandedTitle: "Application Deployment",
                  desc: "Efficient release of application with a focus on automation and DevOps practices",
                  image: "/technologyStack/Application-Testing.jpg",
                },
                {
                  label: "07",
                  expandedLabel: "Step 05",
                  title: "Application Maintenance",
                  expandedTitle: "Application Maintenance",
                  desc: "Ensuring long-term stability, reliability and scalability of the application",
                  image: "/technologyStack/Application-Testing.jpg",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <WhySection
        title="Why Choose Godrej Infotech as your preferred innovation partner?"
        desc="We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators."
        ribbon="Let's Collaborate and Make it Happen"
        arr={[
          {
            _id: 1,
            desc: "One of the most dedicated and <span style='color: #4C6FFF;'>reliable partners</span> for Azure Migration Services and Managed Cloud Service across",
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
        title="Let Us Transform Your"
        blue="Vision into Reality"
        title2=""
        desc="Complete the Form to Begin"
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
