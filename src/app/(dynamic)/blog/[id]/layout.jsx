"use client";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import RelatedSolutions from "@/sections/relatedSolutions/RelatedSolutions";
import Subscribe from "@/sections/subscribe/Subscribe";
import React from "react";

import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const layout = ({ children }) => {
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
  return (
    <>
      <Announcement />

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div>

      <div className="mt-20">
        <div className="py-8 text-center bg-[#F2F4F7] text-[#98A2B3] font-medium text-[16px] leading-[20px]">
          <Link href="/blog">Go back to pervious page</Link>
        </div>
        {children}
      </div>

      {/* Related Solutions */}
      <>
        <RelatedSolutions />
      </>

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Delivering Results that Matters "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "India's leading TV audience measurement firm employs calibrated RPA bots, reducing manual tasks of channel metrics, efficiently sharing results with stakeholders and saving consultant hours.",
            thumbnail: "",
            description: "",
            tags: ["Automation"],
            cta: "Read more",
            link: "/",
          },
          {
            id: 2,
            title:
              "Prominent American watch and lifestyle distribution organization achieves heightened uptime, seamless management, positive ROI and enhanced data durability and reliability by transitioning to Azure through a Lift and Shift approach.",
            thumbnail: "",
            description: "",
            tags: ["Cloud"],
            cta: "Read more",
            link: "/",
          },
          {
            id: 3,
            title:
              "Germany based Automotive Company navigates system complexities and optimizes efficiency with Infor CloudSuite automotive support services from Godrej Infotech",
            thumbnail: "",
            description: "",
            tags: ["Transformation"],
            cta: "Read more",
            link: "/",
          },
        ]}
      />

      {/* Subscriton */}
      <Subscribe
        title="Subscribe to our newsletter for all
        the latest updates"
        desc="The latest news, articles, and resources, sent to your inbox weekly."
        formCta="Subscribe"
        form={true}
      />
    </>
  );
};

export default layout;
