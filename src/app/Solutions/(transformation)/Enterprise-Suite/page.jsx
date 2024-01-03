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
const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "1",
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "2",
    title: "Valve Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 3,
    title: "Valve Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "4",
    url: "/",
  },
];
const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "1",
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "2",
    title: "Valve Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    url: "/",
  },
  {
    _id: 3,
    title: "Valve 2 Management Solutions",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 4,
    title: "Dealer Management",
    desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
    imgUrl: "2",
    url: "/",
  },
];
export default function Home() {
  return (
    <>
      <main>
        {/* <Intro /> */}
        <EntIntro
          title="Bridging Transformation
          with Enterprise Agility"
          desc="We drive digital business revolution for tangible results, optimized bottom line and a dynamic digital edge"
          cta="Let's Connect"
          width="60%"
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
        />

        {/* transformation */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-transparent z-30 relative">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-[42px] leading-[54px] w-[80%] mx-auto font-bold">
                  Your capable partner for{" "}
                  <span className="text-[#0745D3]">
                    Enterprise Transformation
                  </span>{" "}
                  Success
                </h3>
                <p className="font-normal leading-[22px] w-[70%] mx-auto">
                  Collaborating with top- tier application providers, we
                  recognise and deliver right technology for your business to
                  bring forth scalable transformation
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

        <div id="spotlightGrid">
          <>
            <div className={`w-full text-left bg-[#f2f4f7] pt-32`}>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#f2f4f7] text-left">
                  <div className="flex flex-col md:flex-row gap-8 ">
                    <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                      Maximizing Your Business Outcomes with Cloud Technology
                    </h3>
                    <p className="font-medium leading-[22px] md:w-[90%] ">
                      Our verified proficiency in execution and innovation in
                      cloud adaptability facilitate the process of business
                      transformation at each juncture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className={`w-full bg-[#f2f4f7] text-left `}>
            <div className=" max-w-screen md:max-w-screen mx-auto pt-5 ">
              <SpotlightLogoGrid
                arr={[
                  {
                    _id: 1,
                    logo: "Microsoft-Office",
                    bgColor: "#e4f8ed",
                    btnColor: "#fff",
                    btnBg: "#4f9d73",
                    ctaBtn: true,
                    ctaUrl: "/",
                    cta: "Know More",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Microsoft Dynamics 365",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Infor",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Oracle",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "LS Retail",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 2,
                    logo: "infor",
                    bgColor: "#fff8e5",
                    btnColor: "#fff",
                    btnBg: "#dc6803",
                    ctaBtn: true,
                    ctaUrl: "/",
                    cta: "Know More",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Microsoft Dynamics 365",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Infor",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Oracle",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "LS Retail",
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
                        title: "Microsoft Dynamics 365",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Infor",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Oracle",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "LS Retail",
                        url: "/",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Expertise */}
        <Expertise
          ribbon="Our Expertise "
          ribbonTxtWhite="true"
          title="Future Outlook with Intelligent Technologies  "
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
        ></Expertise>
        {/* Industry Spotlight Slider */}
        <>
          <div className={` w-full bg-[#FFF] pt-20`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
              {/* left */}
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    Industry Expertise
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Being preferred partner of leading industries, we help in
                    shaping specific technology prerequisites and deliver
                    brilliant value driven solutions tailored to your sector
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
                                src={`/industrySpotlight/${item.imgUrl}.png`}
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
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "02",
                    expandedLabel: "Step 02",
                    title: "Strategy  Designing ",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "03",
                    expandedLabel: "Step 03",
                    title: "Establishing Readiness",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "04",
                    expandedLabel: "Step 04",
                    title: "Upgradation and Execution",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "05",
                    expandedLabel: "Step 05",
                    title: "Management and Control",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Infographics */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Helping Enterprises to Succeed
                </h3>
                <p className="font-normal leading-[22px] w-[80%] mx-auto">
                  As your transformation partner, we provide robust enterprise
                  solutions to enhance stakeholder experiences, strengthen
                  business resilience and modernize IT environment. Together, we
                  can redefine success standards globally.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center w-max">
              <Infographics src="/infographics/Infographic-Enterprise.png" />
            </div>
          </div>
        </>

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

        {/* Industry Solutions Slider */}
        <>
          <div className={` w-full bg-[#F2F4F7] pt-20`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0   grid grid-cols-1 ">
              <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
                <>
                  <div className={`w-full bg-[#F2F4F7] text-left`}>
                    <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5  ">
                      <div className="bg-[#F2F4F7] text-left">
                        <h4
                          className={`font-medium text-[#0745D3] uppercase ribbon`}
                        >
                          Services for successful results
                        </h4>
                        <div className="flex flex-col md:flex-row gap-8 ">
                          <h3 className="text-4xl leading-[42px] my-4 font-bold">
                            Accomplishing Your Goals at Every stage
                          </h3>
                          <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                            Enabling you to thrive in digital era, we prepare
                            your organisation with scaling growth for
                            sustainable tomorrow
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
                              src={`/IndustrySolutionsSlider/${item.imgUrl}.png`}
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

        {/* Subscription */}
        <Subscription
          title="Tap the faster and simpler way for futuristic seamless business experiences"
          desc="Let's discuss how intelligent technologies can help you with rapid growth"
        />
        <InfotechWeeklyAlt />
      </main>
    </>
  );
}
