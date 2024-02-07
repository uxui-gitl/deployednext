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
import Testimonial from "@/sections/testimonial/Testimonial";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Benefits from "@/components/Benefits";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import OfferingsSlider from "@/components/OfferingsSlider";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import InsightSlider from "@/components/InsightSlider";
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

const OfferingsSliderData = [
  {
    _id: 1,
    title: "Computer Vision ",
    subArr: false,
    inline: false,
    image: "OfferingsSlider.png",
    desc: "We specialize in custom video and image analysis tool development for computer vision and machine vision systems. Our expert team leverages advanced technologies like OpenCV to optimize existing computer vision algorithms or develop entirely new algorithms based on mathematical models ",
    cta: "Explore Service",
    ctaUrl: "/",
    links: [
      {
        title: "Real-time Object Detection",
        url: "/",
      },
      {
        title: "Data Labelling",
        url: "/",
      },
      {
        title: "Security Solution",
        url: "/",
      },
      {
        title: "Equipment Monitoring",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Speech &  Language ",
    desc: "Our reliable approach to Speech and Language AI empowers your business with the tools needed to elevate customer experiences, streamline operations and stand tall in competition ",
    subArr: false,
    inline: false,
    subArrLinks: [
      {
        title: "Perimeter Security ",
        links: [
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
        ],
      },
      {
        title: "Web Security Gateways ",
        links: [
          {
            title: "Network Security  ",
            url: "/",
          },
        ],
      },
    ],
    cta: "Explore Service",
    image: "OfferingsSlider.png",
    ctaUrl: "/",
    links: [
      {
        title: "Transcription Services",
        url: "/",
      },
      {
        title: "Speech recognition",
        url: "/",
      },
      {
        title: "Language translation",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Document  Understanding",
    desc: "We help you to achieve error-free AI-driven data capture from diverse document types, including invoices, receipts, driver's licenses, passports, and more. Our approach helps your business with unstructured data, whether it's in the form of text documents, images, voice or videos",
    cta: "Explore Service",
    image: "OfferingsSlider.png",
    ctaUrl: "/",
    subArr: false,
    inline: false,
    links: [
      {
        title: "Optical Character Recognition (OCR)",
        url: "/",
      },
      {
        title: "Text extraction",
        url: "/",
      },
      {
        title: "Optical Character Recognition - PDF",
        url: "/",
      },
      {
        title: "AP Automation ",
        url: "/",
      },
    ],
  },
  {
    _id: 4,
    title: "Conversational AI",
    desc: "Ensuring your engagement with data more human-centric we offer solutions that helps you with smarter and customer-centric decision-making.",
    cta: "Explore Service",
    image: "OfferingsSlider.png",
    subArr: false,
    inline: false,
    ctaUrl: "/",
    links: [
      {
        title: "Document processing",
        url: "/",
      },
      {
        title: "Sentiment analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
  {
    _id: 5,
    title: "Conversational AI",
    desc: "Ensuring your engagement with data more human-centric we offer solutions that helps you with smarter and customer-centric decision-making.",
    cta: "Explore Service",
    subArr: false,
    inline: false,
    image: "OfferingsSlider.png",
    ctaUrl: "/",
    links: [
      {
        title: "Document processing",
        url: "/",
      },
      {
        title: "Sentiment analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
];
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
const OfferingsSliderDataHeader = [
  {
    _id: 1,
    title: "Proposed GITL Offerings ",
    alignment: "center",
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

const page = () => {
  return (
    <>
      <EntIntro
        title="Make your business smart with seamless
        Infor Cloud Suite implementation -
        Pre-configured for Your Success"
        desc="HxGN EAM, formerly known as Infor EAM, presents holistic solutions to address the pressing challenges of asset performance in both the present and the future"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* section nav */}
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
        <div className={` w-full bg-white py-5`}>
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

      {/* slider */}
      {/*  Card Slider Offerings */}

      <>
        <OfferingsSlider
          arr={OfferingsSliderData}
          header={OfferingsSliderDataHeader}
        />
      </>

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

      {/* blog */}
      <BlogSlider arr={blogData} />

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

      {/* Subscription */}
      <Subscription
        title="Ready to Streamline Your
        Business Operations? "
        blue=" "
        title2=""
        desc="Talk To Our Experts to discuss your requirements "
      />

      {/* Infotehc weekly */}
      <div className="hidden">
        <InfotechWeeklyAlt />
      </div>
    </>
  );
};

export default page;
