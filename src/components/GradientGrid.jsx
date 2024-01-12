"use client";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import React, { useState } from "react";

const GradientGrid = () => {
  const upgradeCloud = [
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
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openPopup = (title) => {
    setSelectedTitle(title);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className={` w-full bg-white py-24`}>
        <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
          <div className="bg-white flex items-start flex-col justify-start">
            <div>
              <h3 className="text-4xl leading-[42px] font-bold mb-5">
                Upgrade Now?
              </h3>
              <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                We revamp your core business application with cloud-native
                development so that you can win a competitive threshold in the
                marketplace. Our adept hyper-scaler team can help rearchitect
                your business operations with an efficient approach.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5 sm:gap-10 mx-auto px-[2rem] md:px-20 sm:px-[8rem]">
          {upgradeCloud.map((item, i) => {
            return (
              <div
                key={i}
                className={clsx(`col px-14 py-16 text-white`, {
                  "bg-[#344CA9]": item._id === 2,
                  " bg-[#320A53]": item._id === 4 || item._id === 5,
                  " bg-[url('/gradient-1.png')]": item._id === 1,
                  " bg-[url('/gradient-2.png')]": item._id === 3,
                })}
              >
                <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                  {item.title}
                </h4>
                <p className="text-base leading-6 font-medium">{item.desc}</p>
                <button
                  onClick={() => openPopup(item.title)}
                  className="flex text-[14px] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                >
                  {item.cta}{" "}
                  <span>
                    <Icon
                      path={mdiArrowRight}
                      style={{
                        marginLeft: "0.5em",
                        width: "1rem",
                        fontSize: "14px",
                      }}
                      className="cta-know-more"
                    />
                  </span>
                </button>
              </div>
            );
          })}
          <div className="col text-[#fff] flex flex-col sm:flex-row gap-5 sm:gap-10  ">
            <div className=" bg-[#344CA9] px-10 py-10">
              <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                Cloud Monitoring and Reporting
              </h4>
              <p className="text-base leading-6 font-medium">
                Whether you&apos;re overseeing multi-cloud environments or
                managing a single cloud provider, our solutions provide you with
                the transparency and control you need to optimize resource
                allocation, control costs and enhance overall cloud efficiency.
              </p>
            </div>
            <div className=" bg-[#320A53] px-10 py-10">
              <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                Cloud Microservices{" "}
              </h4>
              <p className="text-base leading-6 font-medium">
                We transform monolithic apps into agile, deployable
                microservices. Tailored for specific tasks, our microservices
                enhance agility, reduce time-to-market and ensure seamless
                deployment, scaling, resource efficiency and robust fault
                tolerance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed  inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white  w-full max-w-screen-xl">
            <div className="bg-[#F2F4F7] p-8">
              <button
                onClick={closePopup}
                className="text-blue-500 flex flex-row mb-8 gap-2 items-center "
              >
                <span>
                  <Icon
                    path={mdiArrowLeft}
                    style={{
                      width: "1rem",
                      fontSize: "14px",
                    }}
                    className="cta-know-more"
                  />
                </span>{" "}
                Back to solutions
              </button>
              <h3 className="text-[36px] font-bold leading-[42px] mb-4">
                {selectedTitle}
              </h3>
              {/* Tab Indicators here */}
            </div>
            <div className="bg-[#fff] p-8">
              <div>tab 1 content</div>
              <div>tab 2 content</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GradientGrid;
