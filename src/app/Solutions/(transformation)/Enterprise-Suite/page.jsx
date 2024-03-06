"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import Infographics from "@/components/Infographics";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Expertise from "@/components/Expertise";
import SME from "@/components/SME";
import CardSwiper from "@/components/CardSwiper";
import StrategySub from "@/components/StrategySub";
import Spotlight from "@/components/Spotlight";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Subscription from "@/components/Subscription";
import handShake from "../../../../../public/handShake.png";
import styles from "./page.module.css";
import BlogSlider from "@/components/BlogSlider";
import { SectionNav } from "@/components";
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
    title: "Digital Transformation - The need of the hour",
    desc: "Digital Transformation is changing the way business is done in every sector of the economy. Businesses need to transform themselves into digital enterprises to thrive and succeed in this new era. It is not just about adopting new technologies. It is about learning how these technologies can be applied to the existing business models so as to yield better results. For this, today’s leaders must debunk the myths in the industry, be open to learning, adapting & collaborating, thereby helping their organizations to ride this tide by following a successful transformation roadmap.",
    cta: "Read More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
    imgUrl: "",
  },
];

const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "Dealer-Management",
    title: "Dealer Management",
    desc: "Experience user friendly Dealer management system built for retail dealers to easily manage end-to-end inventory operations and order process. Developed using Dot NET technology and integrated with Business Central, this cutting-edge solution eliminates manual data entry, reducing errors, streamlines processes and provides accurate information. Leveraging this solution customers can access real-time insights, track inventory, monitor sales and make data-driven decisions effortlessly.",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Valve Manufacturing Process Management",
    desc: "Specifically built for unique requirements of valve manufacturing industry, this solution encompasses pre-configured business process mapping and standardize process. This work-around solution for intricate business processes ensures smooth operations even in challenging scenarios.",
    url: "/",
  },
  {
    _id: 3,
    title: "Metal Recycling Operations Management",
    desc: "This pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
  },
  // {
  //   _id: 4,
  //   title: "Dealer Management",
  //   desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
  //   imgUrl: "2",
  //   url: "/",
  // },
];
export default function Home() {
  return (
    <>
      <main>
        {/* <Intro /> */}
        <EntIntro
          title="Bridging Transformation with Enterprise Agility"
          desc=""
          cta="Let's Connect"
          width="60%"
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
        />

        <>
          <SectionNav
            // Solutions
            // Our Approach
            // Services
            // Add-Ons
            // Industries
            arr={[
              {
                _id: 1,
                title: "Solutions",
                link: "#Solutions",
              },
              {
                _id: 2,
                title: "Our Approach",
                link: "#OurApproach",
              },
              {
                _id: 3,
                title: "Services",
                link: "#Services",
              },
              {
                _id: 4,
                title: "Add-Ons",
                link: "#AddOns",
              },
              {
                _id: 5,
                title: "Industries",
                link: "#Industries",
              },
            ]}
          />
        </>

        {/* transformation */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-transparent z-30 relative">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-[42px] leading-[54px] w-[80%] mx-auto font-bold">
                  Your Trusted Partner for Enterprise Transformation Success
                </h3>
                <p className="font-normal leading-[22px] w-[70%] mx-auto">
                  With long standing experience of diverse industries and a
                  strong technology partner ecosystem, we deliver 360-degree
                  transformation solutions and consultation service helping
                  organizations to modernize their core technology model and
                  go-to-market framework. This enables businesses to embrace
                  high end digitalization and leverage data analytics for taking
                  better and proactive decisions along with enriching customer
                  and employee experiences.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles["container"]} absolute z-10 left-0 right-0  bg-[#f2f4f7] w-full`}
          >
            <Image src={handShake} className="w-[100vw] -top-20" alt="hands" />
          </div>
        </>

        <div id="Solutions">
          <div className={`w-full bg-[#fff] text-left `}>
            <div className=" max-w-screen md:max-w-screen mx-auto pt-5 ">
              <SpotlightLogoGrid
                arr={[
                  {
                    _id: 1,
                    logo: "infor",
                    bgColor: "#e4f8ed",
                    btnColor: "#fff",
                    btnBg: "#4f9d73",
                    ctaBtn: true,
                    ctaUrl: "/",
                    cta: "Know More",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Infor Cloud Suite",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Infor LN (On Premise & Infor Cloud - MT)",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Infor WMS",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "HxGN EAM",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 2,
                    logo: "Microsoft-Office",
                    bgColor: "#fff8e5",
                    btnColor: "#fff",
                    btnBg: "#dc6803",
                    ctaBtn: true,
                    ctaUrl: "/",
                    cta: "Know More",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Dynamics 365 Finance and Operations",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Dynamics 365 Commerce",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Dynamics 365 Business Central",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "Dynamics 365 CRM",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 3,
                    logo: "Oracle",
                    bgColor: "#fff8e5",
                    btnColor: "#fff",
                    btnBg: "#dc6803",
                    ctaBtn: true,
                    ctaUrl: "/",
                    cta: "Know More",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Oracle Fusion Cloud",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Oracle EBS ",
                        url: "/",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Infographics */}
        <>
          <div
            id="OurApproach"
            className="max-w-screen-xl mx-auto px-[2rem] pb-20 bg-white"
          >
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  With our Holistic Approach
                </h3>
                <p className="font-normal leading-[22px] w-[80%] mx-auto">
                  We redefine success standards globally with robust enterprise
                  solutions to enhance stakeholder experiences, strengthen
                  business resilience and modernize IT environment.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center w-[60%]">
              <Infographics src="/infographics/Enterprise.svg" />
            </div>
          </div>
        </>

        {/* Accomplishing Your Goals */}
        <div id="Services">
          <>
            <div className={`w-full bg-[#F2F4F7] text-left pt-32`}>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#F2F4F7] text-left">
                  {/* <h4 className={`font-medium text-[#0745D3] uppercase ribbon`}>
                    People-led and Innovation-empowered Services for Successful
                    results
                  </h4> */}
                  <div className="flex flex-col md:flex-row gap-8 ">
                    <h3 className="text-4xl leading-[42px] my-4 font-bold">
                      Accomplishing Your Goals at Every stage
                    </h3>
                    <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                      Equipping your organization to thrive in the digital era,
                      we deliver high-end solutions, spanning from core ERP
                      suite to our accelerators across complete technology
                      spectrum.
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
                    title: "Business Consulting & Journey Mapping",
                    expandedTitle: "Business Consulting & Journey Mapping",
                    isBullet: true,
                    list: [
                      "Audit for a right fit solution & defining technology landscape",
                      "Identify inefficiencies and bottlenecks",
                    ],
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image:
                      "/Spotlight/Services-Business-Situation-Review-for-journey-mapping.jpg",
                  },
                  {
                    label: "02",
                    expandedLabel: "Step 02",
                    title: "Development Aimed at Performance Enhancement",
                    expandedTitle:
                      "Development Aimed at Performance Enhancement",
                    isBullet: true,
                    list: [
                      "Infrastructure configuration & management",
                      "Data Management",
                      "Process Reengineering & Automation",
                    ],
                    desc: "Dummy",
                    image:
                      "/Spotlight/Services-Optimization-Aimed-at-Performance--Enhancement.jpg",
                  },
                  {
                    label: "03",
                    expandedLabel: "Step 03",
                    title: "Deployment to Ensure Seamless Transition ",
                    expandedTitle: "Deployment to Ensure Seamless Transition ",
                    list: [
                      "Solution Implementation",
                      "Data Migration",
                      "Customization",
                      "Rollouts & Country Localization",
                    ],
                    desc: "Dummy",
                    isBullet: true,
                    image:
                      "/Spotlight/Services-Deployment-to-Ensure-Seamless-Transition.jpg",
                  },
                  {
                    label: "04",
                    expandedLabel: "Step 04",
                    title: "Support for System Maintenance",
                    expandedTitle: "Support for System Maintenance",
                    isBullet: true,
                    desc: "Dummy",
                    list: [
                      "Monitoring",
                      "Troubleshooting",
                      "Training",
                      "Maintenance and Upgrades",
                    ],
                    image:
                      "/Spotlight/Services-Technical-Support-for-System-Maintenance.jpg",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Industry Solutions Slider */}
        <>
          <div id="AddOns" className={` w-full bg-[#F2F4F7] pt-20`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
              <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
                <>
                  <div className={`w-full bg-[#F2F4F7] text-left`}>
                    <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                      <div className="bg-[#F2F4F7] text-left">
                        {/* <h4
                          className={`font-medium text-[#0745D3] uppercase ribbon`}
                        >
                          Accelerating Business Engineering
                        </h4> */}
                        <div className="flex flex-col md:flex-row gap-8 ">
                          <h3 className="text-4xl leading-[42px] my-4 font-bold">
                            Add On Solutions
                          </h3>
                          <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                            Enhancing the features of business applications, our
                            easily integrating specialized solutions intend to
                            add value to business with handy support,
                            streamlined processes and intense industry
                            expertise.
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

        {/* Industry Spotlight Slider */}
        <>
          <div id="Industries" className={` w-full bg-[#FFF] pt-20`}>
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
                    Delivering industry-centric solutions with a strategic ACT
                    (Automation, Cloud and Transformation) program.
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

        {/* Expertise */}
        <Expertise
          ribbon="Acing Your Business Objectives"
          ribbonTxtWhite="true"
          title="The Hub of Expertise"
          desc="We are here to build competitive edge with technology brilliance for businesses across the world."
          arr={[
            {
              title: "25+",
              desc: "Years of Experience",
            },
            {
              title: "500+",
              desc: "Customers Worldwide",
            },
            {
              title: "500+",
              desc: "Employees Worldwide",
            },
            {
              title: "1000+",
              desc: "Implementation Sites",
            },
            {
              title: "15000+",
              desc: "Man Years of Experience",
            },
            {
              title: "24*7",
              desc: "Support",
            },
          ]}
        ></Expertise>

        {/* Blog */}
        <BlogSlider arr={blogData} />

        {/* Godrej Infotech Solutions */}
        {/* <div className={` w-full bg-[#fff] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
            <div className=" flex items-start flex-col justify-around">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                Accelerating Business Engineering
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Godrej Infotech Solutions
                </h3>
                <p className="font-normal leading-[22px]">
                  Resolving complex business challenges and seizing growth
                  opportunities through our purpose driven solutions designed by
                  our experts
                </p>
              </div>
            </div>
          </div>
          <>
            <CardSwiper />
          </>
        </div> */}

        {/* Subscription */}
        <Subscription
          title="Free 30 minutes IT strategy session with our consultant?"
          desc="Let's discuss how Godrej Infotech can help your business with efficiency and business continuity. Your Tomorrow Starts Here!"
        />
        <InfotechWeeklyAlt />
      </main>
    </>
  );
}
