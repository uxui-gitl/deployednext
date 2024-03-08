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
    title: "Healthcare ",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 3,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 4,
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
    title: "Leverage Database Potential with Oracle Cloud",
    desc: "Oracle Cloud has become an indispensable asset for modern enterprises seeking transformative capabilities. It provides a powerful platform that integrates database functionalities with cloud services, offering a host of benefits for businesses striving towards digital evolution and cloud transformation services. This article explores the essence of Oracle Cloud Integration and how it facilitates database optimization and cloud-driven innovations.",
    cta: "Know More",
    link: "/",
    imgUrl: "leverageDatabaseBlog",
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
        title="Elevating Future-Ready Global Enterprises with Oracle"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* section nav */}
      <>
        <SectionNav
          //  Solutions
          //  Services
          //  Benefits
          //  Why Us

          arr={[
            {
              _id: 1,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 4,
              title: "Why Us",
              link: "#WhyUs",
            },
            {
              _id: 3,
              title: "Benefits",
              link: "#Benefits",
            },
          ]}
        />
      </>

      {/* Abstract */}
      <Abstract
        ribbon=""
        abstractdesc="With our extensive understanding of business operations across major industry verticals along with Oracle solution expertise, we position ourselves as an ideal partner for Oracle collaboration. Oracle offers a comprehensive and seamlessly integrated suite of both cloud and on-premises applications and platform services, which enhance cooperation and transparency throughout your organization. Allow us to assist you in fully harnessing the power of Oracle."
      ></Abstract>

      {/* Offerings Card */}
      <>
        <div id="Solutions">
          <AbstractCard
            ribbon="Oracle Solutions Offerings "
            desc="This solution leverages advanced technologies such as machine learning and artificial intelligence to optimize operations and transform organizations into information-driven enterprises."
            bgImgClass="bg-people"
            bgColor="#F2F4F7"
            title="Oracle Fusion Cloud"
            cta="Explore Service"
            link="/"
          ></AbstractCard>
        </div>
      </>

      {/* Key capabilites */}
      <div className={`bg-white w-full    py-32  `} id="Services">
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
                  title: "Financial Management",
                  desc: "Manage and track income, expenditures and assets while fulfilling tax obligations and ensuring compliance - This solution also helps to equip the finance team to enhance forecasting precision, reduce reporting timelines and streamline decision-making.",
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
                    <div className="p-5 w-fit">
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
                        {item.list && (
                          <>
                            <ul className=" list-disc pl-4">
                              {item.list.map((i, index) => (
                                <li
                                  className="text-white leading-[20px]"
                                  key={index}
                                >
                                  {i}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5 hidden">
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
                  title: "Supply chain Management",
                  desc: "Effortlessly oversee and monitor assets, information and services, spanning from the procurement of raw materials to the delivery of the final product - The solution enables organizations to swiftly adapt to evolving demand, supply dynamics and market fluctuations.",
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
                    <div className=" w-full bg-[#0745D3] p-5 hidden">
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
                  title: "Human Capital Management",
                  desc: "Experience new era cloud solution that assists in building a cohesive community with a unified user experience, a harmonized data model and effortlessly integrated processes, all underpinned by an AI-infused infrastructure.",
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
                    <div className="w-full bg-[#0745D3] p-5 hidden">
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

      {/* Stack Offering Sliders / Oracle services */}
      <>
        <OfferingsSlider
          arr={[
            /*One*/
            {
              _id: 1,
              title: "Business Consulting & Oracle implementation",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Strategic Assessment",
                  url: "/",
                },
                {
                  title: "Solution Design",
                  url: "/",
                },
                {
                  title: "Implementation",
                  url: "/",
                },
                {
                  title: "Training and Change Management",
                  url: "/",
                },
              ],
            },
            /*End One*/
            /*Two*/
            {
              _id: 2,
              title: "Oracle Cloud Integration Services",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Middleware Implementation",
                  url: "/",
                },
                {
                  title: "Electronic Data Interchange Implementation",
                  url: "/",
                },
                {
                  title: "API-led Integration",
                  url: "/",
                },
              ],
            },
            /*End Two*/

            {
              _id: 3,
              title: "Oracle Database Management",
              desc: "",
              cta: "Explore Service",
              subArrLinks: [],
              image: "rpa/Application-Security-Testing.jpg",
              inline: true,
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Design & Development of Database Model",
                  url: "/",
                },
                {
                  title: "Disaster Recovery Services",
                  url: "/",
                },
                {
                  title: "Maintenance",
                  url: "/",
                },
                {
                  title: "Upgrades and Migrations",
                  url: "/",
                },
              ],
            },

            {
              _id: 4,
              title: "Quality Assurance Service",
              desc: "",
              cta: "Explore Service",
              inline: true,
              image: "rpa/Cyber-security_vCISO.jpg",
              subArrLinks: [],
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Security Testing",
                  url: "/",
                },
                {
                  title: "Performance Testing",
                  url: "/",
                },
                {
                  title: "Test Data Management",
                  url: "/",
                },
              ],
            },

            {
              _id: 5,
              title: "Managed Services",
              desc: "",
              cta: "Explore Service",
              inline: true,
              image: "rpa/Cyber-security_vCISO.jpg",
              subArrLinks: [],
              subArr: false,
              ctaUrl: "/",
              links: [
                {
                  title: "Enterprise Application Management",
                  url: "/",
                },
                {
                  title: "Cloud Migration Services",
                  url: "/",
                },
                {
                  title: "Agile Product Lifecycle Management Services",
                  url: "/",
                },
                {
                  title: "Application Outsourcing",
                  url: "/",
                },
                {
                  title: "Database Services",
                  url: "/",
                },
              ],
            },
          ]}
        />
      </>

      {/* Industries */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Served
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] my-5">
                  Understanding unique demands of each industry vertical and
                  capitalizing Oracle capabilities, we equip businesses to
                  thrive in competitive market.
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
                    className="mySwiper h-[350px]"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden h-[350px]">
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

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
        desc="As your trusted Oracle partner, we ensure Oracle environment remains efficient, secure and aligned with changing business needs."
        arr={[
          {
            _id: 1,
            desc: "Extensive expertise in multidimensional modeling to deliver valuable insights into complex financial and operational data",
            icon: "",
          },
          {
            _id: 2,
            desc: "Providing cross-functional analysis for a holistic view of organization's operations.",
            icon: "",
          },
          {
            _id: 3,
            desc: "Maximize the potential of business efficiency and productivity.",
            icon: "",
          },
          {
            _id: 4,
            desc: "Smooth and risk-free transition to Oracle implementation, guaranteeing a hassle-free process.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Oracle EBS slider */}
      <div className="hidden">
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
                      many different applications and are broadly conventional
                      for integration, customization, and configuration
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
      </div>

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title="Oracle"
        desc=""
        arr={[
          {
            _id: 1,
            icon: "benefits-ai-ml/process-analyse",
            cardDesc:
              "Centralized data for insightful multidimensional reporting.",
          },
          {
            _id: 2,
            icon: "benefits-ai-ml/anticipate-future",
            cardDesc:
              "Accelerated business operation with regulatory compliance.",
          },
          {
            _id: 3,
            icon: "benefits-ai-ml/effortless-communicate",
            cardDesc:
              "Pre-built blockchain applications for cost-effective, transparent operations.",
          },
          {
            _id: 4,
            icon: "benefits-ai-ml/optimise-supply-chain",
            cardDesc:
              "Enable IoT applications for enhanced customer experiences and HR.",
          },
          {
            _id: 5,
            icon: "benefits-ai-ml/healthcare",
            cardDesc:
              "Improved decision-making and productivity with machine learning enablement",
          },
          {
            _id: 6,
            icon: "benefits-ai-ml/healthcare",
            cardDesc:
              "Unified financial management and streamlined procurement",
          },
          {
            _id: 7,
            icon: "benefits-ai-ml/healthcare",
            cardDesc:
              "Efficient project management and enhanced human capital management",
          },
        ]}
      ></Benefits>

      {/* Industry expertise expanded two cards */}
      <>
        <div className={`hidden w-full bg-[#F2F4F7] pt-20`}>
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

      {/* Subscription */}
      <Subscription
        title="Are you ready to charge"
        blue="your business efficiency?"
        title2=""
        desc="Fill out the form now and take your business forward with transformation!"
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
