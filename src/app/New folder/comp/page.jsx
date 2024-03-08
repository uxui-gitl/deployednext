"use client";
import EntIntro from "@/components/EntIntro";
import EmployeeExp from "@/components/EmployeeExp";

import { useState } from "react";
import ACTCard from "@/sections/ACTCard/ACTCard";
import { useScroll } from "framer-motion";
import { projects } from "../../assets/data";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
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
  return (
    <>
      <>
        {/* Intro Section */}
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://godrej-gitl.s3.ap-south-1.amazonaws.com/videos/banner.mp4"
        />

        <>
          <div className=" max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
            <main ref={container} className={`relative mt-[20vh]`}>
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  // console.log(targetScale),
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

        <>
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
        </>
      </>
    </>
  );
}
