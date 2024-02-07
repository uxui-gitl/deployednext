"use client";
import EntIntro from "@/components/EntIntro";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../../public/icon.png";
import microsoft from "../../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../../public/upgradeCloud/checkout.png";
import Capabilities from "@/components/Capabilities";
import curiousPerson from "../../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../../public/upgradeCloud/cloudArrows.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import WhySection from "@/components/WhySection";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../../public/Power-App.png";
import Birst from "../../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../../public/dummy.png";
import Expertise from "@/components/Expertise";
import Benefits from "@/components/Benefits";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
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
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import InsightSlider from "@/components/InsightSlider";
const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Industry-Spotlight-Retail",
    title: "Retail",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    desc: "",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
  },
  {
    _id: 4,
    title: "Healthcare ",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 5,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 6,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
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

  return (
    <>
      <EntIntro
        title="Manage Your Operations Effortlessly and
        Boost Business Efficiency with Microsoft
        Dynamics D365 Business Central Expertise
        from Experienced Partner"
        desc=""
        cta="Let's Connect"
        width="90%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* section Nav */}
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

      {/* Overiew */}
      <>
        <div className={` w-full bg-[#F2F4F7] text-[#101828]`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl   mx-auto p-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className=" flex items-start flex-col justify-start mt-10  relative">
              <div className="">
                <h4
                  className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
                >
                  MS business central
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Microsoft Dynamics 365 Business Central is the innovative
                  cloud-based solution with business transformative
                  capabilities. This solution seamlessly integrates ERP, CRM,
                  and Office 365 into a unified platform, bringing your sales,
                  service, finance and operations teams together for enhanced
                  adaptability and faster results. It serves as the all-in-one
                  management tool. Designed with affordability in mind, it paves
                  the way for growth for small, medium and upper mid-sized
                  organizations. The choice between on-premises or cloud
                  implementation is with you, providing ultimate control over
                  your business operations.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Capabilites */}
      <Capabilities
        ribbon=" "
        title="Our Capabilities "
        desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
        arr={[
          {
            _id: 1,
            icon: "gear",
            title: "Future of Projects  ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
          {
            _id: 2,
            icon: "gear",
            title: "IoT Enabled Products ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
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
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
          {
            _id: 4,
            icon: "gear",
            title: "Performance Management ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
        ]}
      />

      {/* Industry Spotlight Slider */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector.
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

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title="AI&ML "
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business."
        arr={[
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
              "Effortless communication and efficient information retrieval through Natural Language Processing",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Revolutionising Healthcare with medical image analysis",
          },
        ]}
      ></Benefits>

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title: "Migrate your IT Infrastructure to the Cloud",
            desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Expertise */}
      <>
        <div className="hidden">
          <Expertise
            ribbon="Acing your Business Objectives"
            ribbonTxtWhite="true"
            title="The Hub of Expertise"
            desc="We are here to build edge and bring technology brilliance with the finest in industry. Driving the innovation path, we develop better results for business across the globe."
            arr={[
              {
                title: "15 +",
                desc: "Cloud Certified Professionals",
              },
              {
                title: "50 +",
                desc: "Cloud Deployments",
              },
              {
                title: "15 +",
                desc: "Cloud Certified Professionals",
              },
              {
                title: "50 +",
                desc: "Cloud Deployments",
              },
            ]}
          ></Expertise>
        </div>
      </>

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
        ribbon="Let's Collaborate and Make it Happen"
        title="Why Choose GITL for AI and ML?"
        desc="It is our Hexagon EAM expertise , experience and commitment to excellence that sets us apart in a competitive landscape."
        arr={[
          {
            _id: 1,
            desc: "<span style='color: #4C6FFF;'> Deep understanding of your specific business domain </span> is crucial for creating AI and ML solutions that truly meet your needs",
            icon: "",
          },
          {
            _id: 2,
            desc: "<span style='color: #4C6FFF;'> Agile approach  </span> that keeps projects on cutting edge .",
            icon: "",
          },
          {
            _id: 3,
            desc: "Fully signed Non-Disclosure Agreement (NDA) to <span style='color: #4C6FFF;'> protect your sensitive information.</span>",
            icon: "",
          },
          {
            _id: 4,
            desc: "<span style='color: #4C6FFF;'> Exceed customer expectations</span> and deliver AI and ML solutions in most effective way.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

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
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
