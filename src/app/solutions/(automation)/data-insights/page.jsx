"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonial from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import Subscription from "@/components/Subscription";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../public/icon.png";
import microsoft from "../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";
import Capabilities from "@/components/Capabilities";

import PowerBI from "../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../public/Power-App.png";
import Birst from "../../../../../public/Birst-logo.png";
import dummy from "../../../../../public/dummy.png";
import Expertise from "@/components/Expertise";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import ServiceOfferingGrid from "@/components/ServiceOfferingGrid";
import Abstract from "@/components/Abstract";
import { NewTestimonial } from "@/components";

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

  const ConsiderRPA = [
    {
      _id: 1,
      title: "Azure SQL Data Ware Housing",
      desc: "Leverage seamless analysis of your business data and trust in our expertise to scale your insights.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/IncreasedProductivity.png",
    },
    {
      _id: 2,
      title: "AWS Redshift",
      desc: "Optimize your data storage and queries while we provide the experience to enhance your data efficiency.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/GainAccurateOutcomes.png",
    },
    {
      _id: 3,
      title: "Azure Synapse",
      desc: "Seamlessly integrate, analyze and visualize your data with Azure Synapse, and rely on us for real-time insights that drive informed decisions.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/EnsureCompliance.png",
    },
    {
      _id: 4,
      title: "Azure Data Factory",
      desc: "Effortlessly move, transform and orchestrate data while we streamline your data workflows for you.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/StrengthenPotential.png",
    },
    {
      _id: 5,
      title: "Databricks",
      desc: "Harness unified data analytics gaining deeper insights with our guidance and empowering data-driven strategies.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/OptimizeFTEcost.png",
    },
    {
      _id: 6,
      title: "Amazon S3",
      desc: "Securely store, retrieve and manage data knowing that we offer right scalability and durability to safeguard your valuable information.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/EnhanceFlexibility.png",
    },
    {
      _id: 7,
      title: "Azure Data Lake",
      desc: "Experience high-performance and secure data management with Azure Data Lake, customized to meet your evolving data needs while we provide our expertise.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/ReduceAHT.png",
    },
    {
      _id: 8,
      title: "Microsoft Fabric",
      desc: "We leverage the capabilities of Microsoft Fabric, an integrated Lakehouse, Datawarehouse & AI-powered platform designed to drive your business efficiency through the seamless consolidation of data estate, enhanced access management, robust governance and compliance mechanisms.",
      cta: "Know More",
      ctaUrl: "/",
      image: "/rpa/ReduceAHT.png",
    },
  ];

  const upgradeCloud = [
    {
      _id: 1,
      title: "Upgrade AX to D365 F&O",
      desc: "Upgrade AX to D365 F&O to Revitalize Your Business Performance",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 2,
      title: "Upgrade Nav to Business Central ",
      desc: "Unlock Maximum Modern Benefits with Business Central Upgrade",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 3,
      title: "Upgrade to Infor LN Cloud",
      desc: "Future proof your business growth with Upgrade to Infor LN Cloud",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 4,
      title: "Application Migration",
      desc: "Migrate your Application to Cloud to Unleash Modernisation",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 5,
      title: "Migrate email to cloud",
      desc: "We aim for a more efficient and collaborative communication environment that will improve efficiency and streamline communication with minimum disruption to your everyday operations",
      cta: "Know more",
      link: "/",
      bg: "",
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

  const blogData = [
    {
      _id: 1,
      ribbon: "blog",
      title: "Azure Data Lake – Data Storage Solution for Big Data Analytics",
      desc: "Data Science today has become essential for organizations that are looking to bring about predictability in their business functions. It removes the guesswork and provides companies with accurate insights related to product features, target audiences and user behaviour. ",
      cta: "Know More",
      link: "/",
      imgUrl: "",
    },
  ];

  const smartTools = [
    {
      _id: 1,
      type: "box",
      title: "Power BI",
      theme: "light",
      bg: "transparent",
      desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
      icon: "Power-BI-Logo.png",
      cta: "Know More",
    },
    {
      _id: 2,
      type: "box",
      title: "Power Apps",
      theme: "dark",
      bg: "#4C6FFF",
      desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
      icon: "Power-App.png",
      cta: "Know More",
    },
    {
      _id: 3,
      type: "box",
      title: "Birst ",
      theme: "dark",
      bg: "#07001F",
      desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
      icon: "Birst-logo.png",
      cta: "Know More",
    },
  ];
  //   Data Visualization
  // Data Management Tools
  // Capabilities

  const navLinks = [
    {
      _id: 1,
      title: "Data Visualization",
      link: "#DataVisualization",
    },
    {
      _id: 2,
      title: "Data Management Tools",
      link: "#DataManagementTools",
    },
    {
      _id: 3,
      title: "Capabilities",
      link: "#Capabilities",
    },
  ];
  return (
    <>
      <EntIntro
        title="Achieve Breakthrough Performance through Data-Driven Automation"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav arr={navLinks} />
      </>

      {/* Abstract  */}
      <Abstract abstractdesc="We develop and execute bespoke strategies emphasizing governance and autonomous management to build your data estates for abstracting actionable insights. Through seamless integration of data into critical workflows, we optimize operational efficiency while implementing AI and automation at key junctures."></Abstract>

      {/* Smart Tools Dynamic - DataVisualization*/}
      <>
        <div id="DataVisualization">
          <ServiceOfferingGrid
            title="Data Visualization"
            ctaVisible={false}
            desc="With real-time data access and visualization, you'll always have your finger on the pulse of your business operations. "
            ctaDesc="Let's Connect for a Walkthrough"
            cta="Let's Connect"
            arr={[
              {
                _id: 1,
                type: "box",
                title: "Power BI",
                theme: "light",
                bg: "transparent",
                desc: "Backed by seasoned professionals, we have developed a distinct proficiency in harnessing the capabilities of Power BI. Our focus is to distill intricate data into actionable insights that catalyze a culture of business excellence.",
                icon: "Power-BI-Logo.png",
                cta: "",
              },
              {
                _id: 2,
                type: "box",
                title: "Tableau",
                theme: "dark",
                bg: "#4C6FFF",
                desc: "Seamlessly integrate Tableau into your operations, enabling to visualize data in captivating ways, discover hidden trends and insights, and make informed decisions.",
                icon: "Power-App.png",
                cta: "",
              },
              {
                _id: 3,
                type: "box",
                title: "Birst ",
                theme: "dark",
                bg: "#07001F",
                desc: "The aim is to facilitate faster decision-making with flexibility and keep your business agile and forward-thinking. Birst seamlessly connect and consolidates data from various sources, regardless of their structure or location.",
                icon: "Birst-logo.png",
                cta: "",
              },
            ]}
          />
        </div>
      </>

      {/* Data Management */}
      <>
        <div id="DataManagementTools" className={`w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  DATA Management
                </h3>
                <p>
                  We blend technology capabilities with a human touch to elevate
                  your data management to new heights.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
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
      </>

      {/* Capabilites - Capabilities */}
      <>
        <div id="Capabilities">
          <Capabilities
            ribbon=" "
            title="Our Capabilities"
            desc="Data is catalyst to the transformation and our commitment to delivering cutting-edge data solutions is rooted in three fundamental aspects – our domain experience, technical excellence and business environment."
            arr={[
              {
                _id: 1,
                icon: "gear",
                title: "Data Platform Modernization",
                desc: "",
                cta: "",
                ctaUrl: "",
                list: [
                  {
                    title:
                      "Collaborating with industry-leading partners such as AWS, Microsoft, and Salesforce, we modernize your data infrastructure on any cloud platform steering optimal acceptance and performance.  ",
                    url: "/",
                  },
                ],
              },
              {
                _id: 2,
                icon: "gear",
                title: "Advance Analytics",
                desc: "",
                cta: "",
                ctaUrl: "",
                list: [
                  {
                    title:
                      "From planning and investigating data to developing, employing, managing and examining models, we leverage your enterprise with the modern progresses in AI, machine learning and automation. ",
                    url: "/",
                  },
                ],
              },
              {
                _id: 3,
                icon: "gear",
                title: "Business Intelligence",
                desc: "",
                cta: "",
                ctaUrl: "",
                list: [
                  {
                    title:
                      "Experience visuals of valuable insights from your crucial data sets from supply chain, finance and talent domains or more.",
                    url: "/",
                  },
                ],
              },
              {
                _id: 4,
                icon: "gear",
                title: "Data Warehouse and Integration",
                desc: "",
                cta: "",
                ctaUrl: "",
                list: [
                  {
                    title:
                      "We build scalable data warehouse architectures custom-made to your business requirements and our end-to-end data integration processes a unified view of your organization's information assets.",
                    url: "/",
                  },
                ],
              },
              {
                _id: 5,
                icon: "gear",
                title: "Data Governance",
                desc: "",
                cta: "",
                ctaUrl: "",
                list: [
                  {
                    title:
                      "Ensuring advanced metadata controls, precise access governance, and compliance mechanisms while adhering to stringent regulatory standards, we provide granular visibility and control over your data landscape.",
                    url: "/",
                  },
                ],
              },
            ]}
          />
        </div>
      </>

      {/* <Awards /> */}

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
              "Leading Indian Refiner of Precious Metals Gains Strategic Decision-Making Capability with Power BI Solution",
            thumbnail: "1",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Precious-Metals-Refiner.pdf",
          },
          {
            id: 2,
            title:
              "Leading Cooling Services Provider in the Middle East Successfully Implements Power BI Solution",
            thumbnail: "2",
            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Leading-Cooling-Services-Provider.pdf",
          },
        ]}
      />

      {/* Blog */}
      <BlogSlider arr={blogData} />

      {/* Expertise */}
      {/* <Expertise
        ribbon="Our Expertise "
        ribbonTxtWhite="true"
        title="Future Outlook with Intelligent Technologies"
        desc="We are here to build edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
        arr={[
          {
            title: "85%",
            desc: "IDC states that 85% of enterprises to merge human expertise with AI, ML& NLP by 2026 ",
          },
          {
            title: "$200B",
            desc: "Forbes forecasts size for AI market by 2026 ",
          },
          {
            title: "$6.6T",
            desc: "PwC Research claims that $6.6T productivity growth is projected by 2030  ",
          },
        ]}
      ></Expertise> */}

      {/* Testimonial */}
      <div className="hidden">
        <Testimonial
          ribbon="Testimonials"
          ribbonVisible={false}
          title="Delighted Customers Share their Customer Experience"
          desc="It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
          arr={[
            {
              id: 1,
              clientName: "",
              clientDesignation:
                "IT Manager, Leading Cooling Services Provider in the Middle East",
              thumbnail: "1",
              description:
                "We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
              category: "static",
              link: "/",
            },
            {
              id: 2,
              clientName: "",
              clientDesignation:
                "IT Manager, Saudi Arabia's Major Retail Chain",
              thumbnail: "1",
              description:
                "We decided to choose the LS Retail NAV solution after technical. One of the most interesting aspects of this implementation is the Automated Data Capture System (ADCS) which provides a real-time interface between the handheld devices at the warehouse and the back-end ERP system at the head-office.",
              category: "static",
              link: "/",
            },
          ]}
        />
      </div>

      {/* fix */}

      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted customers share their success experience "
        desc="Discover how we have helped our clients to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "IT Manager, Leading Cooling Services Provider in the Middle East",
            thumbnail: "1",
            description:
              "We sincerely appreciate GITL team for delivering Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation: "IT Manager, Saudi Arabia's Major Retail Chain",
            thumbnail: "1",
            description:
              "We decided to choose the LS Retail NAV solution after technical. One of the most interesting aspects of this implementation is the Automated Data Capture System (ADCS) which provides a real-time interface between the handheld devices at the warehouse and the back-end ERP system at the head-office.",
            category: "static",
            link: "/",
          },
        ]}
      />

      <Subscription
        title="Free 30 Minutes Strategy Session with Our Data Expert"
        desc="Let's discuss how data can help your business with innovation."
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
