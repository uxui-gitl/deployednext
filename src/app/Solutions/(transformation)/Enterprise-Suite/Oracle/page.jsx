"use client";

import Awards from "@/sections/awards/Awards";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";

import clsx from "clsx";
import {
  Abstract,
  Explore,
  SectionNav,
  AbstractCard,
  GoogleMaps,
  ServiceOfferingGrid,
  Accordioncopy,
  GradientGrid,
  SME,
  Accordion,
  SplashScreen,
  Benefits,
  IndustryExpertise,
  Spotlight,
  BlogSlider,
  Infographics,
  SpotlightImageGrid,
  Button,
  InsightSlider,
  SpotlightLogoGrid,
  Capabilities,
  JoinExpTeam,
  SpotlightOLd,
  Card,
  StrategySubcopy,
  CardSwiper,
  Navbar,
  StrategySub,
  CareerAbout,
  Subscription,
  CareerSlider,
  NavLoop,
  Timeline,
  Container,
  NavNav,
  VerticalSlider,
  Dialog,
  NavTest,
  VideoModal,
  Dropdown,
  NewTestimonial,
  WhyInfotechOld,
  EmployeeExp,
  NumberGrid,
  WhySection,
  EntIntro,
  OfferingsGrid,
  Expertise,
  OfferingsSlider,
} from "@/components";

import Testimonial from "@/sections/testimonial/Testimonial";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

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
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Infrastructure",
    desc: "Developed using Dot NET technology and integrated with Business Central, this cutting-edge solution eliminates manual data entry, reducing errors, streamlines processes and provides accurate information for better decision-making. Leveraging this solution customers can access real-time insights, track inventory, monitor sales and make data-driven decisions.",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Manufacturing",
    desc: "Benefit to valve manufacturing businesses from pre-configured business process mapping that seamlessly aligns with your unique requirements. Our work-around solutions for intricate business processes ensure smooth operations even in challenging scenarios.",
    url: "/",
  },
  {
    _id: 3,
    title: "Metal Recycling Operations Management",
    desc: "Our pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.   ",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
  },
  // {
  //   _id: 4,
  //   title: "Infrastructure",
  //   desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
  //   imgUrl: "2",
  //   url: "/",
  // },
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
const page = () => {
  return (
    <>
      {/* Intro */}
      <EntIntro
        title="Maximize Asset Value and Productivity
        with HxGN EAM Godrej Infotech Expertise "
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

      {/* Abstract */}
      <Abstract
        ribbon="Oracle"
        abstractdesc="Our primary goal is to realize positive business outcomes by harnessing our business-grade intelligent capabilities while concurrently optimizing overall business performance. We prioritize achieving positive results through the application of advanced competencies, ensuring strategic alignment with our clients' business objectives. Intelligent Technologies drive transformative innovations, utilizing AI, ML, and IoT to optimize processes, enhance decision-making, and propel businesses into a future of efficiency and agility."
      ></Abstract>

      {/* Offerings Card */}
      <>
        <AbstractCard
          ribbon="Oracle Solutions Offerings "
          desc="Our primary goal is to realize positive business outcomes by harnessing our business-grade intelligent capabilities while concurrently optimizing overall business performance. We prioritize achieving positive results through the application of advanced competencies, ensuring strategic alignment with our clients' business objectives. Intelligent Technologies drive transformative innovations, utilizing AI, ML, and IoT to optimize processes, enhance decision-making, and propel businesses into a future of efficiency and agility."
          bgImgClass="bg-people"
          bgColor="#F2F4F7"
          title="Oracle Fusion Cloud"
          cta="Explore Service"
          link="/"
        ></AbstractCard>
      </>

      {/* Left right cards */}
      <div className={`bg-white w-full    py-32  `} id="productivity">
        <div className={` w-full`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="  flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                  Key Capabailities
                </h3>
              </div>
              <div></div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
                  It is a single business software system that consists of many
                  different applications and are broadly conventional for
                  integration, customization, and configuration
                </p>
              </div>
            </div>
          </div>
          <div className="bg-key1 w-full">
            <div className="flex flex-col sm:flex-row gap-5 justify-end text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "CRM services",
                  desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="mx-2 w-fit md:w-1/2 bg-white flex flex-col justify-between "
                  >
                    <div className="p-5 w-fit ">
                      <div className="mb-4">
                        {item.icon !== "" ? (
                          <Image
                            src={`/${item.icon}.svg`}
                            width={56}
                            height={56}
                            alt={item.icon}
                          />
                        ) : (
                          <Icon path={mdiDomain} size={3} />
                        )}
                      </div>
                      <h4 className="text-[26px] font-bold mb-4 md:mb-8 leading-[34px] text-[#101828]">
                        {item.title}
                      </h4>
                      <div>
                        <p className="text-[14px] leading-[22px] mb-4 text-[#101828]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5">
                      <Link
                        href={item.link}
                        className="text-white  flex transition-all hover:opacity-75  "
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
                );
              })}
            </div>
          </div>
          <div className="bg-key2 w-full">
            <div className="flex flex-col sm:flex-row gap-5 justify-start text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "CRM services",
                  desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="mx-2 w-fit md:w-1/2 bg-white flex flex-col justify-between "
                  >
                    <div className="p-5 w-fit ">
                      <div className="mb-4">
                        {item.icon !== "" ? (
                          <Image
                            src={`/${item.icon}.svg`}
                            width={56}
                            height={56}
                            alt={item.icon}
                          />
                        ) : (
                          <Icon path={mdiDomain} size={3} />
                        )}
                      </div>
                      <h4 className="text-[26px] font-bold mb-4 md:mb-8 leading-[34px] text-[#101828]">
                        {item.title}
                      </h4>
                      <div>
                        <p className="text-[14px] leading-[22px] mb-4 text-[#101828]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5">
                      <Link
                        href={item.link}
                        className="text-white  flex transition-all hover:opacity-75  "
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
                );
              })}
            </div>
          </div>
          <div className="bg-key3 w-full">
            <div className="flex flex-col sm:flex-row gap-5 justify-end text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
              {[
                {
                  _id: 1,
                  title: "CRM services",
                  desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                  cta: "Know More",
                  icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                  link: "/",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="mx-2 w-fit md:w-1/2 bg-white flex flex-col justify-between "
                  >
                    <div className="p-5 w-fit ">
                      <div className="mb-4">
                        {item.icon !== "" ? (
                          <Image
                            src={`/${item.icon}.svg`}
                            width={56}
                            height={56}
                            alt={item.icon}
                          />
                        ) : (
                          <Icon path={mdiDomain} size={3} />
                        )}
                      </div>
                      <h4 className="text-[26px] font-bold mb-4 md:mb-8 leading-[34px] text-[#101828]">
                        {item.title}
                      </h4>
                      <div>
                        <p className="text-[14px] leading-[22px] mb-4 text-[#101828]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5">
                      <Link
                        href={item.link}
                        className="text-white  flex transition-all hover:opacity-75  "
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
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Oracle EBS slider */}
      <>
        <div className={`bg-white w-full    py-32  `} id="productivity">
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] text-[#101828]  leading-[54px] mb-3 font-bold ">
                    Oracle EBS
                  </h3>
                </div>
                <div></div>
              </div>
              {/* right */}
              <div>
                <div>
                  <p className="font-medium text-[#475467] leading-[22px] md:w-[90%] ">
                    It is a single business software system that consists of
                    many different applications and are broadly conventional for
                    integration, customization, and configuration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  px-5 py-16 bg-[#F2F4F7]">
            {UseCases.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className=" mx-2 bg-white sm:w-[320px] w-fit flex flex-col justify-between"
                >
                  <div className="p-5 w-fit ">
                    <div className="mb-4">
                      {item.icon !== "" ? (
                        <Image
                          src={`/icon/${item.icon}.svg`}
                          width="48"
                          height="48"
                          alt={item.icon}
                        />
                      ) : (
                        <Icon path={mdiDomain} size={3} />
                      )}
                    </div>
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                  </div>
                  <div
                    className={clsx("w-full bg-[#0745D3] p-5", {
                      hidden: item.link === "/" || item.link === "",
                    })}
                  >
                    <Link
                      href={item.link}
                      className={
                        "text-white flex transition-all hover:opacity-75"
                      }
                    >
                      {item.cta}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
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

      {/* Stack Offering Sliders */}
      <>
        <OfferingsSlider
          arr={[
            /*One*/
            {
              _id: 1,
              title: "Business Consulting",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Cybersecurity roadmap development",
                  url: "/",
                },
                {
                  title:
                    "Assessment services against cyber security frameworks & standards",
                  url: "/",
                },
              ],
            },
            /*End One*/
            {
              _id: 2,
              title: "Technology Solutions - Implementation & Management",
              desc: "",
              inline: true,
              subArr: true,
              subArrLinks: [
                {
                  _id: 1,
                  icon: "gear",
                  title: "Perimeter Security",
                  desc: "",
                  cta: "Know More",
                  ctaUrl: "/",
                  list: [
                    {
                      title: "Zero Trust Security",
                      url: "/",
                    },
                    {
                      title: "Secure access service edge (SASE)",
                      url: "/",
                    },
                    {
                      title: "Next Generation Firewall (NGFW)",
                      url: "/",
                    },
                    {
                      title: "Secure Remote Access (VPN)",
                      url: "/",
                    },
                    {
                      title: "Multi Factor Authentication (MFA)",
                      url: "/",
                    },
                    {
                      title: "Distributed Denial of Service (DDoS)",
                      url: "/",
                    },
                    {
                      title: "Web Security Gateways",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 2,
                  icon: "gear",
                  title: "Network Security",
                  desc: "",
                  cta: "Know More",
                  ctaUrl: "/",
                  list: [
                    {
                      title: "Next Generation Firewalls",
                      url: "/",
                    },
                    {
                      title: "Unified Threat Management",
                      url: "/",
                    },
                    {
                      title: "Software Defined WAN",
                      url: "/",
                    },
                    {
                      title: "Network Access Control (NAC)",
                      url: "/",
                    },
                    {
                      title: "Deception Technology",
                      url: "/",
                    },
                    {
                      title: "Advanced Persistent Threat (APT)",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 3,
                  icon: "gear",
                  title: "End Point Security",
                  desc: "",
                  cta: "Know More",
                  ctaUrl: "/",
                  list: [
                    {
                      title: "Endpoint Protection Suite",
                      url: "/",
                    },
                    {
                      title: "Endpoint Detection Response (EDR)",
                      url: "/",
                    },
                    {
                      title: "Software Asset Management (SAM)",
                      url: "/",
                    },
                    {
                      title: "Patch Management Solutions",
                      url: "/",
                    },
                    {
                      title:
                        "Mobile Device or Application Management (MDM / MAM)",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 4,
                  icon: "gear",
                  title: "Application Security",
                  desc: "",
                  cta: "Know More",
                  ctaUrl: "/",
                  list: [
                    {
                      title: "Web Application Security (WAF)",
                      url: "/",
                    },
                    {
                      title: "API Gateways",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 5,
                  icon: "gear",
                  title: "e. Users",
                  desc: "",
                  cta: "Know More",
                  ctaUrl: "/",
                  list: [
                    {
                      title: "O365",
                      url: "/",
                    },
                    {
                      title: "Mobile Device / Application",
                      url: "/",
                    },
                    {
                      title: "Management (MDM/ MAM)",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 6,
                  icon: "gear",
                  title: "Data",
                  desc: "",
                  cta: "Know More",
                  ctaUrl: "/",
                  list: [
                    {
                      title: "Data Loss Prevention (DLP)",
                      url: "/",
                    },
                    {
                      title: "Privilege Identity Management (PIM)",
                      url: "/",
                    },
                    {
                      title: "Cloud Security",
                      url: "/",
                    },
                    {
                      title: "Disaster Recovery",
                      url: "/",
                    },
                  ],
                },
                // Add more items as needed
              ],
              cta: "Explore Service",
              image: "rpa/Cyber-security_Technology-Solutions.jpg",
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
              title: "Application Security testing",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Application-Security-Testing.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Web application Security testing",
                  url: "/",
                },
                {
                  title: "Mobile App Security testing",
                  url: "/",
                },
                {
                  title:
                    "Vulnerability Assessment and Penetration Testing (VAPT)",
                  url: "/",
                },
              ],
            },

            {
              _id: 4,
              title: "vCISO Services",
              desc: "",
              cta: "Explore Service",
              inline: true,
              image: "rpa/Cyber-security_vCISO.jpg",
              subArrLinks: [],
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Strategy",
                  url: "/",
                },
                {
                  title: "Risk Management",
                  url: "/",
                },
                {
                  title: "Regulatory & Standards compliance",
                  url: "/",
                },
                {
                  title: "Policy & procedures",
                  url: "/",
                },
                {
                  title: "Security Program",
                  url: "/",
                },
                {
                  title: "End user Training",
                  url: "/",
                },
              ],
            },
          ]}
        />
      </>

      {/* Industry expertise expanded two cards */}
      <>
        <div className={` w-full bg-[#F2F4F7] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
            <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
              <>
                <div className={`w-full bg-[#F2F4F7] text-left`}>
                  <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                    <div className="bg-[#F2F4F7] text-left">
                      <h4
                        className={`font-medium hidden text-[#0745D3] uppercase ribbon`}
                      >
                        Accelerating Business Engineering
                      </h4>
                      <div className="flex flex-col md:flex-row gap-8 ">
                        <h3 className="text-4xl leading-[42px] my-4 font-bold">
                          Industry Expertise
                        </h3>
                        <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                          Being preferred partner of leading industries, we help
                          in shaping specific technology prerequisites and
                          deliver brilliant value driven solutions tailored to
                          your sector
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {expandedCardSlider.map((item) => (
                      <SwiperSlide
                        key={item._id}
                        className="w-[500px] max-w-[500px] mr-4 relative group"
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/IndustrySolutionsSlider/${item.imgUrl}.jpg`}
                            height={313}
                            width={500}
                            alt="icon"
                            className="transition-transform transform group-hover:scale-105"
                          />

                          {/* Default overlay */}
                          <div className="absolute inset-0  flex flex-col justify-end p-4">
                            <h3 className="text-[22px] text-white font-bold mb-1">
                              {item.title}
                            </h3>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-[#4c6fff] transition-opacity opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                            <h3 className="text-[22px] text-white font-bold mb-1">
                              {item.title}
                            </h3>
                            <p className="text-white leading-[20px] mb-5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Blog */}
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
