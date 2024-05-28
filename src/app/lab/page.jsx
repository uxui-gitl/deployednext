"use client";
import React from "react";
import GradientGrid from "@/components/GradientGrid";
import CircleBackground from "../../components/CircleBackground";

import Image from "next/image";

const Page = () => {
  return (
    <>
      {/* <GradientGrid
        arr={[
          {
            _id: 1,
            title: "Lift and Shift to Cloud",
            desc: "We smoothly relocate your IT to Azure Cloud without redesigning applications and with minimal disruption in your workflows.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
          {
            _id: 2,
            title: "ERP on Cloud",
            desc: "We revitalize your business performance delivering more agile, responsive and human-cantered ERP on Cloud.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
          {
            _id: 3,
            title: "Application Migration to the Cloud",
            desc: "With the ability to scale resources on-demand, we specialize in the precise, secure and efficient migration of your applications to the cloud, employing technical expertise for error-free deployment to ensure a seamless transition.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
          {
            _id: 4,
            title: "Cloud Backup and Disaster Recovery",
            desc: "We assure to secure your data and keep your business running, safeguarding your business against unexpected disruptions with scalable solution.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
          {
            _id: 5,
            title: "Cloud Database Migration",
            desc: "Our cloud migration experts employ a combination of Extract, Transform, Load (ETL) processes and real-time data replication to ensure a smooth transition.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
          {
            _id: 6,
            title: "Cloud Database Migration",
            desc: "Our cloud migration experts employ a combination of Extract, Transform, Load (ETL) processes and real-time data replication to ensure a smooth transition.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
          {
            _id: 7,
            title: "Cloud Database Migration",
            desc: "Our cloud migration experts employ a combination of Extract, Transform, Load (ETL) processes and real-time data replication to ensure a smooth transition.",
            cta: "Know more",
            link: "/",
            bg: "/gradient-1.png",
          },
        ]}
      /> */}

      <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
        <CircleBackground className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
        <div className="  h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
          <Image src="/heroRobot.png" alt="" width={100} height={300} />
          lorems
        </div>
      </div>
    </>
  );
};

export default Page;
