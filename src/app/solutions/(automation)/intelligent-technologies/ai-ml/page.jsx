"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import checkout from "../../../../../../public/checkout.png";
import MLExpertise from "../../../../../../public/MLExpertise.png";
/**
 * Sandeep Rana
 * Imported logos
 */
import MSAzure from "../../../../../../public/ai-ml/ms-azure.png";
import GoogleAI from "../../../../../../public/ai-ml/google-ai-logo.png";
import TensorFlow from "../../../../../../public/ai-ml/tensorflow-logo.png";

import anticipatefuture from "../../../../../../public/icon/benefits-ai-ml/anticipate-future.svg";

import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import Benefits from "@/components/Benefits";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import BlogSlider from "@/components/BlogSlider";
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
    ribbon: "Insights",
    title: "Unveiling Hyper-automation for Supply Chain Efficiency",
    desc: "Hyper-automation, specifically in the context of supply chain management, marks a significant milestone in the evolution of industry practices. It represents the convergence of cutting-edge technologies, reshaping how businesses manage their supply chains. In 2024, the prominence of hyper-automation has soared, transforming supply chain dynamics. This article aims to explore the essence of hyper-automation, its benefits in supply chain management, and various examples illustrating its application. ",
    cta: "Know More",
    link: "/",
    imgUrl: "",
  },
];

const AIOfferings = [
  {
    _id: 1,
    title: "Computer Vision",
    desc: "We specialize in custom video and image analysis tool leveraging advanced technologies like OpenCV to optimize or create computer vision algorithms.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Data Labelling and Real-time Object Detection",
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
    title: "Speech & Language",
    desc: "Our reliable approach to Speech and Language AI empowers your business with the tools to elevate customer experiences and stand tall in competition.",
    cta: "Explore Service",
    ctaUrl: "",
    links: [
      {
        title: "Transcription Services",
        url: "/",
      },
      {
        title: "Speech Recognition",
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
    title: "Document Understanding",
    desc: "We help you to achieve error-free AI-driven data capture from diverse document types and helps your business with unstructured data.",
    cta: "Explore Service",
    ctaUrl: "",
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
        title: "Financial Processing",
        url: "/",
      },
    ],
  },

  {
    _id: 4,
    title: "Conversational AI",
    desc: "Ensuring a more human-centric engagement with data, we provide solutions that facilitate customer-centric decision-making.",
    cta: "Explore Service",
    ctaUrl: "",
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
const ChoiceSlider = [
  {
    _id: 1,
    title: "Healthcare",
    imgURL: "/assest/ai-ml/Industry-served_Healthcare.jpg",
    url: "/",
  },
  {
    _id: 2,
    title: "Automotive",
    imgURL: "/assest/ai-ml/Industry-served_Automotive.jpg",
    url: "/",
  },
  {
    _id: 3,
    title: "Logistic",
    imgURL: "/assest/ai-ml/Industry-served_Logistic.jpg",
    url: "/",
  },
  {
    _id: 4,
    title: "Retail",
    imgURL: "/assest/ai-ml/Industry-served_Retail.jpg",
    url: "/",
  },
  {
    _id: 5,
    title: "Manufacturing",
    imgURL: "/assest/ai-ml/Industry-served_Manufacturing.jpg",
    url: "/",
  },
];
const BenefitsData = [
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
      "Effortless communication and efficient information retrieval through Natural Language Processing ",
  },
  {
    _id: 4,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
  },
];

const MLData = [
  {
    _id: 1,
    imgURL: "/assest/ai-ml/Expertise_Deep-Learning.jpg",
    title: "Deep Learning",
    subTitle:
      "Our deep learning expertise builds solutions that automate complex tasks helping in data-driven decision-making, especially when it comes to forecasting your business's future.",
    ctaURL: "",
  },
  {
    _id: 2,
    imgURL: "/assest/ai-ml/Expertise_Supervised-Learning.jpg",
    title: "Supervised Learning",
    subTitle:
      "We deliver customer sentiment analysis, image recognition and predictive maintenance services that help you make informed decisions and create happier customers.",
    ctaURL: "",
  },
  {
    _id: 3,
    imgURL: "/assest/ai-ml/Expertise_Unsupervised-Learning.jpg",
    title: "Unsupervised Learning",
    subTitle:
      "Our unsupervised learning services reveal hidden patterns for business sustainability through data exploration without constraints, helping in customer segmentation, anomaly detection and more.",
    ctaURL: "",
  },
  {
    _id: 4,
    imgURL: "/assest/ai-ml/Expertise_Reinforcement-Learning.jpg",
    title: "Reinforcement Learning",
    subTitle:
      "Our reinforcement learning expertise is like a guiding hand for applications such as autonomous systems and resource optimisation.",
    ctaURL: "",
  },
];
const page = () => {
  return (
    <>
      <EntIntro
        title="Leverage Optimized Business Intelligence with Advanced Solutions of Artificial Intelligence and Machine Learning"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          arr={[
            // AI Offerings
            // ML Expertise
            // Platforms
            // Benefits
            // Why Us

            {
              _id: 1,
              title: "AI Offerings",
              link: "#AIOfferings",
            },
            {
              _id: 2,
              title: "ML Expertise",
              link: "#MLExpertise",
            },
            {
              _id: 3,
              title: "Platforms",
              link: "#Platforms",
            },
            {
              _id: 4,
              title: "Benefits",
              link: "#Benefits",
            },

            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="By employing a pragmatic approach and tapping into the capabilities of AI and ML, we meticulously fine-tune business parameters, ensuring a notable enhancement in your overall business proficiency. Join with us to fully immerse in the transformative power of AI and ML, setting off on a collaborative journey toward enriching innovation and achieving exceptional success for your business endeavours. "></Abstract>

      {/* Our Ai Offerings */}
      <>
        <div id="AIOfferings" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our AI Offerings
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We are committed to bringing the power of Artificial
                  Intelligence to your business operations, providing tailored
                  solutions that drives business proficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-4">
            {AIOfferings.map((item, index) => (
              <div className="bg-[#EDF1FF] p-5" key={item._id}>
                <div className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="my-8">
                      {item.links.map((list, index) => (
                        <li
                          key={index}
                          className=" border-b-2 border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={list.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
              </div>
            ))}
          </div>
        </div>
      </>

      {/* ML Expertise */}
      <>
        <div id="MLExpertise" className={` w-full bg-[#F2F4F7] py-24`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-1 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  ML Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] ">
                  We specialize in developing algorithms to make your operations
                  smarter, faster and more reliable.
                </p>
              </div>
            </div>
          </div>

          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
            {MLData.map((item, index) => (
              <div className="" key={index}>
                <Image
                  src={item.imgURL}
                  className="w-[100%]"
                  alt="ML Expertise"
                  width={500}
                  height={500}
                  quality={100}
                />
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    {item.subTitle}
                  </p>
                  <Link
                    href={item.ctaURL}
                    className="text-[#0745D3] hidden text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    Know More{" "}
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

      {/* AI & ML Partners */}
      <>
        <div id="Platforms" className={`w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold">
                  Intelligent Technologies Platforms
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%]">
                  Our proficiency with AI/ML platforms paves the way for
                  progressive business results with the intersection of
                  innovation and efficiency.
                </p>
              </div>
              <div className="flex justify-center items-center gap-20 p-5 mb-5">
                <div>
                  <Image src={MSAzure} alt="Microsoft Azure" />
                </div>
                <div>
                  <Image src={GoogleAI} alt="Google AI" />
                </div>
                <div>
                  <Image src={TensorFlow} alt="TensorFlow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Benefits Vertical Slider */}
      <>
        <div id="Benefits">
          <Benefits
            ribbon="Benefits"
            ribbonTxtWhite="true"
            title=""
            desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business."
            arr={BenefitsData}
          ></Benefits>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      {/* <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left /}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industries Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] p-5 ">
                We help in shaping technology prerequisites and deliver value to customers, catering to diverse industries across the spectrum.
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
                              src={item.imgUrl}
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
      </> */}

      <BlogSlider arr={blogData} />
      {/* Why choose gitl and ai and ml  WhyUs*/}
      <div id="WhyUs">
        <WhySection
          ribbon="The Distinctive Edge"
          title="Why Godrej Infotech?"
          desc="Prioritising your success, we help you thrive in a digital landscape with seamless deployment."
          arr={[
            {
              _id: 1,
              desc: "Deep understanding of specific business domains for developing AI and ML solutions that truly meet your needs.",
              icon: "",
            },
            {
              _id: 2,
              desc: "Agile approach that keeps projects on cutting edge.",
              icon: "",
            },
            {
              _id: 3,
              desc: "Fully signed Non-Disclosure Agreement (NDA) to protect your sensitive information.",
              icon: "",
            },
            {
              _id: 4,
              desc: "Exceed customer expectations and deliver AI and ML solutions in most effective way.",
              icon: "",
            },
          ]}
          renderInlineSpans={true}
        ></WhySection>
      </div>

      {/* Subscription */}
      <Subscription
        title="Ready for Intelligent Solutions?"
        blue=""
        title2=""
        desc="Share your details NOW for Smarter Business Future!"
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
