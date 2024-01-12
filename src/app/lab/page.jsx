import React from "react";
import GradientGrid from "@/components/GradientGrid";

const page = () => {
  return (
    <>
      <GradientGrid
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
      />
    </>
  );
};

export default page;
