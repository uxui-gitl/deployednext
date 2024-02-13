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
import dotnet from "../../../../../public/technologyStack/dotnet.png";
import sharepoint from "../../../../../public/technologyStack/sharepoint.png";
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
const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title: "Legacy Modernization in Manufacturing Industry",
    desc: "The Manufacturing Industry is in midst of transformation with some organizations accelerating to Industry 4.0+ platforms while other organizations struggle with infrastructure which has been built for the past. The current pandemic situation has further exacerbated the situation with hackers looking at vulnerabilities for exploitation in the Industry Infrastructure.",
    cta: "Know More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=8",
    imgUrl: "",
  },
  {
    _id: 2,
    ribbon: "blog",
    title: "ASP.Net-A popular choice for Web development ",
    desc: "Most enterprises are in the process of migration from legacy systems to new, user-friendly dynamic and robust web applications. In this crowded market of different technologies such as PHP, HTML5, WordPress, Magento and several others, Microsoft's ASP.NET has proved to be 'the popular choice'.",
    cta: "Know More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=4 ",
    imgUrl: "",
  },
  {
    _id: 3,
    ribbon: "blog",
    title:
      "Application Modernization - Proven Growth Strategy for Progressive Organizations",
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
    image:
      "/technologyStack/Service-Offerings_Custom-Application-Development.jpg",
    desc: "Leveraging extensive global experience, we specialize in developing bespoke applications that transcend generic off-the-shelf offerings. Our custom application development service ensures precise alignment with unique business needs, delivering an efficient application in the dynamic global marketplace. Our focus on technical excellence guarantees the delivery of application that exceed the expectations of our clients.",
    cta: "",
    link: "",
  },
  {
    _id: 2,
    title: "Legacy Modernization - ROI capital",
    image: "/technologyStack/Service-Offerings_Legacy-Modernisation.jpg",
    desc: "We are committed to continual improvement in our best practices. Through application legacy modernization service, we enable businesses to achieve Triple Aim goals, assuring optimal Return on Investment (RoI) and a smooth transition to modernized, agile and future-ready application. By harnessing cutting-edge technologies, we transform legacy systems into effective and scalable solution.",
    cta: "",
    link: "",
  },
  {
    _id: 3,
    title: "Application Managed Services",
    image:
      "/technologyStack/Service-Offerings_Application-managed-services.jpg",
    desc: "Providing instrumental assistance to businesses as they face challenges, we deliver enhanced value by placing the right people with the right skills in the right positions. Additionally, we bring tools and methods developed with our experiences across various industry verticals. Our application management approach covers the entire lifecycle: Build, Run and Evolve.",
    cta: "",
    link: "",
  },
  {
    _id: 4,
    title: "Mobile Application",
    image: "/technologyStack/Service-Offerings_Mobile-Application.jpg",
    desc: "Optimising the strengths of each operating system, our expert team develops a robust backend and an aesthetically pleasing frontend. Our goal is to provide you with the most advanced, high performing mobile application, elevating your user engagement and delivering a seamless experience across any platform. ",
    cta: "",
    link: "",
  },
  {
    _id: 5,
    title: "Enterprise Application Integration",
    image:
      "/technologyStack/Service-Offerings_Enterprise-Application-Integration.jpg",
    desc: "Accelerating time-to-market, we embrace modern architecture paradigms, seamlessly integrating data, processes and applications. Our diligent approach guarantees swift solution deployment, enhancing overall system responsiveness. We make sure of optimized data flow and synchronization of processes and applications, creating a dynamic ecosystem that aligns seamlessly with the ever-evolving landscape of modern business demands.",
    cta: "",
    link: "",
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "benefits-technology-stack/GainCompetitiveEdge",
    title: "Gain a competitive edge",
  },
  {
    _id: 2,
    icon: "benefits-technology-stack/ElevateBrandValue",
    title: "Elevate brand value",
  },
  {
    _id: 3,
    icon: "benefits-technology-stack/ReduceTrainingOverheads",
    title: "Reduce training overheads and time investment",
  },
  {
    _id: 4,
    icon: "benefits-technology-stack/EnsureSeamlessPerformance",
    title: "Ensure seamless performance",
  },
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
        title="Your Trusted Technology Partner for Scalable and Customized Business Applications "
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

      <Abstract abstractdesc="As the cornerstone of business success, technology plays a pivotal role in fostering innovation across diverse industries. Our robust suite of advanced technologies, coupled with dedicated expertise, is equipped to deliver tailor-made applications spanning various industry domains. We are committed to providing cutting-edge solutions that align with the unique needs of each sector, ensuring businesses stay at the forefront of innovation, efficiency and adaptability in this rapidly evolving technological landscape."></Abstract>

      {/* Tech Stack Platform Expertise Logos */}
      <>
        <div className={`w-full bg-[#FFF] py-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  200 + Applications Built and Delivered
                </h3>
              </div>
              <div>
                {/* <p className="font-medium leading-[22px] md:w-[90%] ">
                  Our focus centres on leveraging cutting edge and emerging
                  technologies to develop high performing applications.
                </p> */}
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
        ribbon="Bespoke Application Benefits"
        ribbonTxtWhite="Bespoke Application Benefits"
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
                  Application Development Process
                </h4>
                <div className="flex flex-col md:flex-row gap-8 ">
                  <h3 className="text-4xl leading-[42px] my-4 font-bold">
                    Engineering Success with Our Methodology
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                    This approach helps us to adeptly manage software
                    development projects involving complexity levels.
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
                  title: "Planning & Designing",
                  expandedTitle: "Planning & Designing",
                  desc: "Bridging the envisioned outcome with the planned application and designing application architecture.",
                  image: "/technologyStack/Application-Planning.jpg",
                },
                {
                  label: "02",
                  expandedLabel: "Step 02",
                  title: "Define Technology Stack & Develop",
                  expandedTitle: "Define Technology Stack & Develop",
                  desc: "Meticulous selection of frameworks, programming languages, libraries and tools followed by the development of innovative application with a clean code architecture.",
                  image: "/technologyStack/Defining-technology-stack.jpg",
                },
                {
                  label: "03",
                  expandedLabel: "Step 03",
                  title: "Application Testing",
                  expandedTitle: "Application Testing",
                  desc: "Detecting defects, verifying compliance while ensuring seamless functionality and user experience.",
                  image: "/technologyStack/Application-Testing.jpg",
                },
                {
                  label: "04",
                  expandedLabel: "Step 04",
                  title: "Application Deployment",
                  expandedTitle: "Application Deployment",
                  desc: "Efficient release of application with a focus on automation and DevOps practice.",
                  image: "/technologyStack/Application-Development.jpg",
                },
                {
                  label: "05",
                  expandedLabel: "Step 05",
                  title: "Application Maintenance",
                  expandedTitle: "Application Maintenance",
                  desc: "Ensuring long-term stability, reliability and scalability of the application.",
                  image: "/technologyStack/Application-Maintenance.jpg",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <WhySection
        title="Why Godrej Infotech"
        desc="We understand the intricacies of diverse technologies, leverage our capability and experience to deliver solutions that ally exquisitely with your business ambitions."
        ribbon="The Distinctive Edge"
        arr={[
          {
            _id: 1,
            desc: "Scalable infrastructure support for your business requirements",
            icon: "",
          },
          {
            _id: 2,
            desc: "High agility and elevated user experience delivery while meeting timelines",
            icon: "",
          },
          {
            _id: 3,
            desc: "Assured continuous support through bug fixing and upgradation",
            icon: "",
          },
          {
            _id: 4,
            desc: "100% collaborative approach, quality guidelines & adherence to the right coding standards",
            icon: "",
          },
          {
            _id: 5,
            desc: "Comprehensive requirement analysis and scope-of-work documentation before designing",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Free 30 Minutes Strategy"
        blue="Session with Tech Expert "
        title2=""
        desc="Let's discuss how technology can help you with innovation. Please fill the form so that we can connect & collaborate."
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
