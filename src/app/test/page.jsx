"use client";
import EntIntro from "@/components/EntIntro";
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
      <main>
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://godrej-gitl.s3.ap-south-1.amazonaws.com/videos/banner.mp4"
        />

        <>
          <main ref={container} className={`relative mt-[50vh]`}>
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
        </>
      </main>
    </>
  );
}
