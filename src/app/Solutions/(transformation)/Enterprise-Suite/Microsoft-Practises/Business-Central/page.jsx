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
import Abstract from "@/components/Abstract";
import { NewTestimonial } from "@/components";

const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Food & Beverage",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Industry-Spotlight-Retail",
    title: "Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Consumer Goods",
    desc: "",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
  },
  {
    _id: 4,
    title: "Wholesale & Distribution",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 5,
    title: "Retail ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 6,
    title: "Projects",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
  {
    _id: 7,
    title: "Professional Services",
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
        title="Manage Your Operations Effortlessly and Boost Business Efficiency with Microsoft Dynamics D365 Business Central Expertise"
        desc=""
        cta="Let's Connect"
        width="90%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* section Nav */}
      <>
        <SectionNav
          // Capabilities
          // Industry Spotlight
          // Benefits
          // Why Us
          // Testimonials

          arr={[
            {
              _id: 1,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 2,
              title: "Industry Spotlight",
              link: "#IndustrySpotlight",
            },
            {
              _id: 3,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 4,
              title: "Why Us",
              link: "#WhyUs",
            },
            {
              _id: 5,
              title: "Testimonials",
              link: "#Testimonial",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract
        abstractdesc="Microsoft D365 Business Central is an innovative cloud-based solution that seamlessly integrates ERP, CRM and Office 365 into a unified platform, bringing sales, service, finance and operations teams together for enhanced adaptability and faster results. This all-in-one affordable management tool paves the way for growth for small, medium and upper mid-sized organizations. Businesses have a choice between on-premises or cloud implementation providing ultimate control over operations.
 With team of adept developers specializing in Microsoft Dynamics 365 Business Central, our team is well-equipped to meet your business needs, offering tailored solutions to address the requirements of your enterprise.
"
      ></Abstract>

      {/* Capabilites */}
      <div id="Capabilities">
        <Capabilities
          ribbon=" "
          title="Key Capabilities"
          desc="Embrace a modern, efficient and cost-effective approach to managing your business right at your fingertips."
          arr={[
            {
              _id: 1,
              icon: "gear",
              title: "Future of Projects",
              desc: "",
              cta: "Know More",
              ctaUrl: "/",
              list: [
                {
                  title:
                    "Financial Data Consolidation : Seamlessly consolidate data from accounting, sales, purchasing, inventory to achieve a unified financial perspective.",
                  url: "/",
                },
                {
                  title:
                    "Built-in Power BI Dashboards: Visualize real-time financial performance data to identify patterns and trends with precision.",
                  url: "/",
                },
                {
                  title:
                    "Process Streamlining: Streamline essential accounting processes, such as accounts receivable and payable, Fixed Assets, Cash & Bank Management, Taxation ensuring automatic reconciliation.",
                  url: "/",
                },
                {
                  title:
                    "Data Modeling and Analysis: Conduct multi-dimensional data analysis and improve forecasting accuracy.",
                  url: "/",
                },
                {
                  title:
                    "Customized Reporting: Easily customize and share reports, featuring seamless Excel integration.",
                  url: "/",
                },
              ],
            },
            {
              _id: 2,
              icon: "gear",
              title: "Supply Chain",
              desc: "",
              cta: "Know More",
              ctaUrl: "/",
              list: [
                {
                  title:
                    "Automated Stock Management: Receive automated suggestions for inventory replenishment, based on calculations of stock levels, lead times, and reorder points.",
                  url: "/",
                },
                {
                  title:
                    "Approval Workflow: Prevent unnecessary purchases and avoid vendor overdue penalties with a structured approval workflow.",
                  url: "/",
                },
                {
                  title:
                    "Built-in Intelligence: Make informed inventory replenishment decisions using sales forecasts and anticipated stock-outs.",
                  url: "/",
                },
              ],
            },
            {
              _id: 3,
              icon: "gear",
              title: "Sales and Marketing",
              desc: "",
              cta: "Know More",
              ctaUrl: "/",
              list: [
                {
                  title:
                    "Client Interaction Tracking: Gain automated guidance on optimal upsell, cross-sell and renewal opportunities by tracking historical client data.",
                  url: "/",
                },
                {
                  title:
                    "Efficient Sales Process: Streamline the quote-to-cash sales process and manage service requests directly through Outlook integration.",
                  url: "/",
                },
              ],
            },
            {
              _id: 4,
              icon: "gear",
              title: "Project Management",
              desc: "",
              cta: "Know More",
              ctaUrl: "/",
              list: [
                {
                  title:
                    "Timesheets: Manage client projects with advanced job costing and reporting capabilities, while tracking timesheets.",
                  url: "/",
                },
                {
                  title:
                    "Invoice Tracking: Keep tabs on client invoicing in relation to planned costs on orders and quotes.",
                  url: "/",
                },
                {
                  title:
                    "Real-Time Insights: Monitor real-time project status, profitability and resource usage metrics.",
                  url: "/",
                },
              ],
            },
            {
              _id: 5,
              icon: "gear",
              title: "Service Management",
              desc: "",
              cta: "Know More",
              ctaUrl: "/",
              list: [
                {
                  title:
                    "Planning and dispatching : Assign and log work order details, manage dispatch with personnel, skills and stock filters for efficiency.",
                  url: "/",
                },
                {
                  title:
                    "Service contract management: Agree on service levels, track contract history, renewal and warranties. Manage details, measure profitability and generate quotes.",
                  url: "/",
                },
                {
                  title:
                    "Service Item Management: Manage service items comprehensively, recording contracts, components, BOM, and warranty data, analysing key performance indicators efficiently.",
                  url: "/",
                },
                {
                  title:
                    "Service Order Management: Handle post-sales issues, service requests, and equipment loans; let customers initiate or auto-create requests based on agreements.",
                  url: "/",
                },
                {
                  title:
                    "Service Price Management: Establish, track, and adjust prices with automated assignment based on criteria for profitability insights.",
                  url: "/",
                },
              ],
            },
          ]}
        />
      </div>

      {/* Industry Spotlight Slider */}
      <>
        <div id="IndustrySpotlight" className={` w-full bg-[#FFF] pt-20`}>
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
                  Being preferred Microsoft partner, we deliver brilliant value
                  driven D365 Business Central Solution to your sector.
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
        title="D365 Business Central"
        desc="Microsoft Dynamics 365 Business Central offers your business a strategic edge."
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc: "Enhanced Productivity and Efficiency ",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc: "Real-time Insights and Collaborative Capabilities ",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc: "Customisable and Scalable System",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc: "Any time and Any place System Accessibility with Cloud",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Integration with other Microsoft Products",
          },
          {
            _id: 6,
            icon: "benefits-ai-ml/healthcare",
            cardDesc: "Advanced Security Measures for Data and Applications ",
          },
        ]}
      ></Benefits>

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="Our substantial experience and expertise in the implementation of D365 Business Central solution guarantee a business system that impeccably aligns with your organization's unique requirements."
        arr={[
          {
            _id: 1,
            desc: "ISO-certified company dedicated to delivering top-notch D365 solution and services, adapted to your specific business demands.",
            icon: "",
          },
          {
            _id: 2,
            desc: "Expert team committed to quick turnarounds and always meeting deadlines with precision.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Dedicated solution support from in-house team",
            icon: "",
          },
          {
            _id: 4,
            desc: "Extensive experience in integrating Business Central with various systems, including CRM, ERP and E-commerce platforms",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted Customers share their Experiences"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Procurement Manager, Indian Highway Construction Company",
            thumbnail: "1",
            description:
              "Godrej Infotech has successfully upgraded our software from NAV 2016 to Business Central on-SaaS, including data migration. We were impressed by the expertise of their team, who not only saved us additional subscription costs but also enabled faster transactional updates.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Finance Manager, India based Worldwide Fast-Food chain",
            thumbnail: "1",
            description:
              "GITL upgraded our NAV 2016 system to Business Central on-SaaS, including seamless data migration. We were highly impressed by the proficiency of GITL team.  This upgradation has helped us save on subscription costs but also facilitated quicker transactional updates.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "IT Head, Middle East base Popular Fast-food Chain",
            thumbnail: "1",
            description:
              "We appreciate Godrej Infotech team for successfully completing two critical projects - upgrading the old ERP system to the latest SaaS solution Dynamics Business Central and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="D365 Business Central in Action"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Saudi Trading Company Successfully Implements LS Central & Upgrades NAV to Business Central",
            thumbnail: "1",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/SaudiCompanySuccessfullyImplementsLSCentralandBusinessCentral.pdf",
          },
          {
            id: 2,
            title:
              "Tyre Trading Organization in the Middle East Successfully Deploys Web-based, On-Premises Microsoft D365 Business Central with Servers on Azure.",
            thumbnail: "2",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 3,
            title:
              "India's Modern Manufacturing & Testing Provider Successfully Implements D365 Business Central Online.",
            thumbnail: "3",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title:
              "Microsoft Dynamics 365 Finance and Operations or Business Central? Which ERP investment will help you to take off your business?",
            desc: "Which business would not like to experience outstanding growth within a short span of time? But is that even feasible in this fast-paced world? We all understand that the needs of any organization are constantly evolving due to the dynamic nature of the market. And that is why a robust and agile platform is much needed for a business that can support these requirements.",
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

      {/* Testimonial */}
      <div className="hidden">
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
      </div>

      {/* Subscription */}
      <Subscription
        title="Have Questions? Our experts are ready to assist you with business process optimization."
        blue=" "
        title2=""
        desc="Share your details NOW to schedule a call!"
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
