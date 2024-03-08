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
import Testimonial from "@/sections/testimonial/Testimonial";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SectionNav from "@/components/SectionNav";
import "swiper/css/pagination";
import Awards from "@/sections/awards/Awards";
import Subscription from "@/components/Subscription";
import handShake from "../../../../../public/handShake.png";
import styles from "./page.module.css";
import BlogSlider from "@/components/BlogSlider";
import {
  Abstract,
  Benefits,
  NewTestimonial,
  ServiceOfferingGrid,
  WhySection,
} from "@/components";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
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
          title="Transforming your customer lifecycle with purpose driven technology"
          desc=""
          cta="Let's Connect"
          width="90%"
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
        />

        {/* Section Nav */}
        <>
          <SectionNav
            // Solutions
            // Services
            // Our Approach
            // Benefits
            // Why Us

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
                _id: 3,
                title: "Our Approach",
                link: "#OurApproach",
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
        <Abstract abstractdesc="We help businesses to respond to the most important stakeholder’s expectations with agility and accuracy. Our team collaborates closely with clients to drive transformation throughout their entire customer journey. With Customer Relationship Management (CRM) and Ecommerce solutions, we guarantee optimal outcomes at every stage of the customer interaction process."></Abstract>

        {/* Grid Solutions */}
        <>
          <div id="Solutions">
            <ServiceOfferingGrid
              title="Advance Solutions for Transforming Customer Experience"
              ctaVisible={false}
              cta="Let's Connect"
              desc="We understand that partnering with an expert is paramount to deliver remarkable customer experiences. Thus, we partner with market-leading technologies to help businesses like yours to optimize sales processes and drive greater sales results."
              ctaDesc="Let's Connect for a Walkthrough"
              arr={[
                {
                  _id: 1,
                  type: "box",
                  title: "Infor CRM",
                  theme: "light",
                  bg: "transparent",
                  desc: "Delivering streamlined customer interactions while ensuring tailored experiences at every touchpoint.",
                  icon: "Power-BI-Logo.png",
                  cta: "Know More",
                },
                {
                  _id: 2,
                  type: "box",
                  title: "Microsoft CRM",
                  theme: "dark",
                  bg: "#4C6FFF",
                  desc: "Seamless integration with Microsoft ecosystem, offering an integrated platform for enriched efficiency and collaboration.",
                  icon: "Power-App.png",
                  cta: "Know More",
                },
                {
                  _id: 3,
                  type: "box",
                  title: "Salesforce",
                  theme: "dark",
                  bg: "#07001F",
                  desc: "Helping organizations with intuitive tools for developing deep customer relationships through personalized interactions.",
                  icon: "Birst-logo.png",
                  cta: "Know More",
                },
                {
                  _id: 1,
                  type: "box",
                  title: "LS Retail",
                  theme: "light",
                  bg: "transparent",
                  desc: "Provides a holistic retail management solution, enabling seamless operations and enhanced customer experiences across all channels.",
                  icon: "Power-BI-Logo.png",
                  cta: "Know More",
                },
              {
                  _id: 2,
                  type: "box",
                  title: "Magento",
                  theme: "dark",
                  bg: "#4C6FFF",
                  desc: "Facilitate seamless sales transactions with in-store delight and ease, and build responsive eCommerce experiences",
                  icon: "Power-App.png",
                  cta: "Know More",
                },
              ]}
            />
          </div>
        </>

        {/* Experience solutions */}
        <>
          <div id="Services">
            <>
              <div className={` w-full bg-[#FFF] pt-24`}>
                <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
                  <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                    <div className="">
                      <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                        Customer experience Service
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-normal leading-[22px] md:w-[90%] ">
                        Featuring your customers at the forefront of every interaction, our services help to shape the future of customer engagements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
            <>
              <div
                className={`bg-img w-full pt-24 pb-12 mt-20`}
                id="productivity"
              >
                <div className="flex flex-col sm:flex-row gap-5 justify-center text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
                  {[
                    {
                      _id: 1,
                      title: "CRM",
                      desc: "Understanding and anticipating needs of your customer touchpoints, we meticulously select and implement the most suitable CRM tailored to business vision that helps in developing meaningful connections.",
                      cta: "Know More",
                      icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                      link: "/",
                    },
                    {
                      _id: 2,
                      title: "Ecommerce",
                      desc: "We're committed to delivering unified and optimized online shopping experiences to maximize your customer satisfaction.",
                      icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                      cta: "Know More",
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
                        <div className="w-full bg-[#0745D3] p-5">
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
            </>
          </div>
        </>

        {/* Infographics */}
        <>
          <div
            id="OurApproach"
            className="max-w-screen-xl mx-auto px-[2rem] pb-20 bg-white"
          >
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Doctrine of Customer Experience / Customer Experience Modus Operandi
                </h3>
                <p className="font-normal leading-[22px] w-[80%] mx-auto">
                  It is our human -centric paradigm approach that enables streamlined user journeys to enhance customer satisfaction and loyalty. 
                </p>
                   <div className="mx-auto text-center w-[75%]">
            <Infographics src="/infographics/CustomerExperience.svg" />
          </div>
              </div>
            </div>
            <div className="mx-auto text-center w-max hidden">
              <Infographics src="/customerExperience/Doctorine.png" />
            </div>
          </div>
        </>

        {/* Benefits Vertical Slider */}
        <Benefits
          ribbon="Benefits"
          ribbonTxtWhite="true"
          title="Customer Experience Transformation"
          desc="Maximizing Business Opportunities &Building Resilient Brand"
          arr={[
            {
              _id: 1,
              icon: "benefits-ai-ml/process-analyse",
              cardDesc:
                "Drop in manual tasks of sales, marketing and customer service operations ",
            },
            {
              _id: 2,
              icon: "benefits-ai-ml/anticipate-future",
              cardDesc:
                "Rise in sales efficiency and performance",
            },
            {
              _id: 3,
              icon: "benefits-ai-ml/effortless-communicate",
              cardDesc:
                "Decline in customer service tickets",
            },
            {
              _id: 4,
              icon: "benefits-ai-ml/optimise-supply-chain",
              cardDesc:
                "Growth in lead pool",
            },
            {
              _id: 5,
              icon: "benefits-ai-ml/healthcare",
              cardDesc:
                "Increase in lead conversion rate",
            },
            {
              _id: 6,
              icon: "benefits-ai-ml/healthcare",
              cardDesc:
                "Improvement in customer retention",
            },
          ]}
        ></Benefits>

        {/* Why Infotech */}
        <WhySection
          ribbon="The Distinctive Edge"
          title="Why Godrej Infotech"
          desc="We deliver tailored technology solutions keeping your customers' requirements in mind, encouraging genuine connections and driving continuous growth."
          arr={[
            {
              _id: 1,
              desc: "We offer full fledge spectrum including strategic planning, design, development and support operations.",
              icon: "",
            },
            {
              _id: 2,
              desc: "Employing our insight-led methodology, we upheld proficiency in technology implementation and have vast experience in customer relationship management (CRM).",
              icon: "",
            },
            {
              _id: 3,
              desc: "We tap the transformative potential of data and artificial intelligence to provide context-driven customer experience capabilities, ensuring customer delight. ",
              icon: "",
            },
       
          ]}
          renderInlineSpans={true}
        ></WhySection>

        {/* Expertise */}
        <Expertise
          ribbon="Acing Your Business Objectives"
          ribbonTxtWhite="true"
          title="The Hub of Expertise"
          desc="We are here to build a competitive edge with technology brilliance for businesses across the world."
          arr={[
            {
              title: "50+",
              desc: "Countries Spanning our Happy Customers",
            },
            {
              title: "600+",
              desc: "Employees Worldwide ",
            },
            {
              title: "700+",
              desc: "Implementations ",
            },
            {
              title: "2",
              desc: "Decades of Experience",
            },
            
          ]}
        ></Expertise>

        {/* Awards n achievements */}
        <div className="hidden">
          <Awards />
        </div>

        {/* Testimonaisl */}
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
                "Saudi Arabia's Hypermarket Retail Chain",
              thumbnail: "1",
              description:
                "We have gained tremendous benefits from working with Godrej Infotech Limited as an IT Solutions Partner. LS Retail Solution implemented by Godrej Infotech has streamlined our store and backend processes, aligning with our shared values of simplicity, cost-effectiveness and high quality.",
              category: "static",
              link: "/",
            },
            {
              id: 2,
              clientName: "",
              clientDesignation:
                "Leading Manufacturer of Optical Fibers in USA",
              thumbnail: "1",
              description:
                "Thank you for the seamless migration of our CRM 2016 to D365 for Sales. We appreciate the timely completion and outstanding quality of the project. The 100% offshore execution is commendable, and the CRM & Outlook integration has significantly boosted our sales team's productivity, up to 90%.",
              category: "static",
              link: "/",
            },
            
          ]}
        />

        {/* Subscription */}
        <Subscription
          title="Ready to Transform Your Customer Relationship Approach?"
          desc="Share your details to digitize your customer experience and enhance benefits for your valued customers."
        />

        {/* infotech weekly */}
        <>
          <div className="hidden">
            <InfotechWeeklyAlt />
          </div>
        </>
      </main>
    </>
  );
}
