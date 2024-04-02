"use client";
import EntIntro from "@/components/EntIntro";
import EmployeeExp from "@/components/EmployeeExp";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import ACTCard from "@/sections/ACTCard/ACTCard";
import { useScroll } from "framer-motion";
import { projects } from "../../assets/data";
import { useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import gmap from "../../../public/contact/map.png";
import CAT from "../../../public/Capabilities---Application-transformation.jpg";

import Spotlight from "@/components/Spotlight";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Dropdown from "@/components/Dropdown";
import OfferingsSlider from "@/components/OfferingsSlider";
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Set the default center location (San Francisco, CA in this case)
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDG18Tve3ll06G12C9fUK6l_0-Mg0NsF8Y",
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const navLinks = [
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
  ];

  return (
    <>
      <main>
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://godrej-gitl.s3.ap-south-1.amazonaws.com/videos/banner.mp4"
        />

        {/* React Tabs */}
        <>
          <div
            id="about"
            className=" max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]"
          >
            <Tabs>
              <TabList>
                <Tab>Statutory Report</Tab>
                <Tab>Corporate Policies</Tab>
                <Tab>CSR Updates</Tab>
                <Tab>Statutory Updates</Tab>
              </TabList>

              <TabPanel>
                <>
                  <div className="grid grid-rows-2 grid-cols-3 gap-8">
                    {/* card */}
                    {[0, 1, 2, 3, 4, 5].map((i, index) => (
                      <>
                        <div key={index} className=" border w-full">
                          <div className="p-5">
                            <h5 className="text-[26px] font-bold leading-[36px]">
                              FY 2022-2023
                            </h5>
                          </div>
                          <div>
                            <Link href="/">
                              <div
                                className={`text-[#fff] bg-blue-400 text-[14px] font-medium leading-[22px] w-full py-2 px-8 flex transition-all hover:opacity-75`}
                              >
                                Know More
                                <Icon
                                  path={mdiArrowRight}
                                  style={{ marginLeft: "0.5em" }}
                                  size={1}
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              </TabPanel>
              <TabPanel>
                <h2> content tab 2</h2>
              </TabPanel>
              <TabPanel>
                <h2> content tab 3</h2>
              </TabPanel>
              <TabPanel>
                <h2> content tab 4</h2>
              </TabPanel>
            </Tabs>
          </div>
        </>

        {/* Section Nav Test */}

        <>
          <SectionNav arr={navLinks} />
        </>

        {/* ACT cards vertical slider */}
        <>
          <div
            id="actCards"
            className=" max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]"
          >
            <main ref={container} className={`relative mt-[20vh]`}>
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  <ACTCard
                    key={`p_${i}`}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </main>
          </div>
        </>

        {/* Employee Speak slider */}

        <>
          <div id="empExp">
            <EmployeeExp
              ribbon="Unleashing Joy at Work"
              heading="Employees Share Their Happy Experiences"
              desc="Discover the heartwarming stories of our employees as they reveal
            their joyful experiences at work. From moments of triumph to
            instances of camaraderie, their testimonials showcase a workplace
            where happiness is unleashed and celebrated. Learn how fostering a
            positive environment can lead to a truly fulfilling and successful
            team dynamic."
              arr={[
                {
                  _id: 1,
                  name: "Yazdi Navalmanek",
                  designation: "Associate Manager",
                  avatar: "avatar1",
                  desc: "I have been associated with Godrej Infotech for almost two decades, acquiring a wealth of knowledge and valuable experience. What I admire most is that this organization has always prioritized human values.  Plus, the company is growing tremendously - from relying on revenue from its parent company to becoming a diversified business with operations spanning Asia, Middle East & Europe. I am currently enjoying my work in the Human Resources Department and feel privileged to contribute to the company's success.",
                },
                {
                  _id: 2,
                  name: "Jaseem Aboo",
                  designation: "Regional Sales Director for the Middle East ",
                  avatar: "avatar2",
                  desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
                },
                {
                  _id: 3,
                  name: "Yazdi Navalmanek",
                  designation: "Associate Manager",
                  avatar: "avatar1",
                  desc: "I have been associated with Godrej Infotech for almost two decades, acquiring a wealth of knowledge and valuable experience. What I admire most is that this organization has always prioritized human values.  Plus, the company is growing tremendously - from relying on revenue from its parent company to becoming a diversified business with operations spanning Asia, Middle East & Europe. I am currently enjoying my work in the Human Resources Department and feel privileged to contribute to the company's success.",
                },
                {
                  _id: 4,
                  name: "Jaseem Aboo",
                  designation: "Regional Sales Director for the Middle East ",
                  avatar: "avatar2",
                  desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
                },
                {
                  _id: 5,
                  name: "Yazdi Navalmanek",
                  designation: "Associate Manager",
                  avatar: "avatar1",
                  desc: "I have been associated with Godrej Infotech for almost two decades, acquiring a wealth of knowledge and valuable experience. What I admire most is that this organization has always prioritized human values.  Plus, the company is growing tremendously - from relying on revenue from its parent company to becoming a diversified business with operations spanning Asia, Middle East & Europe. I am currently enjoying my work in the Human Resources Department and feel privileged to contribute to the company's success.",
                },
                {
                  _id: 6,
                  name: "Jaseem Aboo",
                  designation: "Regional Sales Director for the Middle East ",
                  avatar: "avatar2",
                  desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
                },
              ]}
            />
          </div>
        </>

        {/* Spotlight test */}
        <div id="spotlight">
          <>
            <div className={`w-full text-left pt-32`}>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
                <div className="bg-[#fff] text-left">
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
          <div className={`w-full text-left `}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
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
      </main>
    </>
  );
}
