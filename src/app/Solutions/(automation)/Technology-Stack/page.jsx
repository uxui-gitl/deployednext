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

import MLExpertise from "../../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import InsightSlider from "@/components/InsightSlider";

import ServiceOfferingGrid from "@/components/ServiceOfferingGrid";

import Benefits from "@/components/Benefits";
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
    title: "Migrate your IT Infrastructure to the Cloud",
    desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
  {
    _id: 2,
    ribbon: "News",
    title: "Migrate your IT Infrastructure to the Cloud",
    desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
  {
    _id: 3,
    ribbon: "blog",
    title: "Migrate your IT Infrastructure to the Cloud",
    desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
];
const TechStackOfferings = [
  {
    _id: 1,
    title: "Custom Application Development",
    image: "CustomApplicationDevelopment",
    desc: "With our extensive experience in the global marketplace, we understand necessitating a bespoke software solution that goes beyond off-the-shelf offerings. We ensure a truly tailored experience for our valued clientele",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 2,
    title: "Legacy Modernisation",
    image: "LegacyModernisation",
    desc: "From effectively optimizing system uptime to impeccably transiting from a colossal architecture to a microservices-based environment, we redesign and rebuild your existing application with accuracy and adeptness",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 3,
    title: "Application managed services",
    image: "Applicationmanagedservices",
    desc: "We offer instrumental assistance to businesses in ascending challenges, thereby enhancing application performance and attaining better business results that align seamlessly with your IT and business objectives",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 4,
    title: "Application Testing Services",
    image: "ApplicationTestingServices",
    desc: "With On-site, Off-shore and Hybrid catering, we conduct rigorous testing and validation across multiple scopes such as functionality, security, integration, compatibility, performance, data migration and UI/UX, trailed by user acceptance testing",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 5,
    title: "Mobile Application ",
    image: "MobileApplication",
    desc: "We deliver every solution to our clients that is needed on fingertips. Experience uniform connectivity and enriched user engagement with our comprehensive cycle of mobile app development services",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 6,
    title: "Enterprise Application Integration ",
    image: "EnterpriseApplicationIntegration",
    desc: "We foster business growth and drive time-to-market with the adoption of cutting-edge architecture paradigms and seamlessly integrating data, processes and applications",
    cta: "Know More",
    link: "/",
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "gear",
    title: "Process and analyze vast volumes of data",
  },
  {
    _id: 2,
    icon: "diamond",
    title: "Ensure Uniformity in Financial Information",
  },
  {
    _id: 3,
    icon: "eyeGear",
    title: "Boost brand value",
  },
  {
    _id: 4,
    icon: "gear",
    title: "Process and analyze vast volumes of data",
  },
  {
    _id: 5,
    icon: "diamond",
    title: "Ensure Uniformity in Financial Information",
  },
  {
    _id: 6,
    icon: "eyeGear",
    title: "Boost brand value",
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
        title="Your Trusted Technology Partner
        for Scalable and Customized
        Business Applications "
        desc="The comprehensive suite of advanced technologies along with our dedicated capability is primed to deliver bespoke applications across various industry domains"
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
      <>
        <ServiceOfferingGrid
          title="Service Offerings"
          arr={TechStackOfferings}
        />
      </>

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
                    Accomplishing Your Goals at Every stage
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                    Enabling you to thrive in digital era, we prepare your
                    organisation with scaling growth for sustainable tomorrow
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
                  title: "Infrastructure and  Data Evaluation",
                  expandedTitle: "Current Infrastructure and  Data Evaluation",
                  desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                  image: "/Spotlight/card1.png",
                },
                {
                  label: "02",
                  expandedLabel: "Step 02",
                  title: "Strategy  Designing ",
                  expandedTitle: "Current Infrastructure and  Data Evaluation",
                  desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                  image: "/Spotlight/card1.png",
                },
                {
                  label: "03",
                  expandedLabel: "Step 03",
                  title: "Establishing Readiness",
                  expandedTitle: "Current Infrastructure and  Data Evaluation",
                  desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                  image: "/Spotlight/card1.png",
                },
                {
                  label: "04",
                  expandedLabel: "Step 04",
                  title: "Upgradation and Execution",
                  expandedTitle: "Current Infrastructure and  Data Evaluation",
                  desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                  image: "/Spotlight/card1.png",
                },
                {
                  label: "05",
                  expandedLabel: "Step 05",
                  title: "Management and Control",
                  expandedTitle: "Current Infrastructure and  Data Evaluation",
                  desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                  image: "/Spotlight/card1.png",
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
