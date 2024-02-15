import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";

const SpotlightImageGrid = ({ expanded, arr }) => {
  const [activeCard, setActiveCard] = useState(0);

  const cardsArray = arr || [
    {
      _id: 1,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "bg1",
      bgColor: "",
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

      ctaBtn: false,
      ctaUrl: "/",
      cta: "Know More",
    },
    {
      _id: 2,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "",
      bgColor: "#101828",
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

      ctaBtn: true,
      ctaUrl: "/",
      cta: "Know More",
    },
    {
      _id: 3,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "bg3",
      bgColor: "",
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

      ctaBtn: false,
      ctaUrl: "/",
      cta: "Know More",
    },
    {
      _id: 4,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "",
      bgColor: "#320A53",
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

      ctaBtn: false,
      ctaUrl: "/",
      cta: "Know More",
    },
  ];

  const handleCardClick = (index) => {
    // Check if the clicked card is already active, if yes, do nothing
    if (activeCard === index) {
      return;
    }

    setActiveCard(index);
  };

  return (
    <>
      <div className="flex flex-col  md:flex-row  ">
        {cardsArray.map((card, index) => (
          <div
            key={index}
            // className={`text-white w-full  md:w-1/4 md:max-h-[500px] h-fit md:h-[400px] md:max-w-1/5 transition-transform mb-4 overflow-hidden`}
            className={` text-white w-full  md:w-1/4 md:max-h-[500px] h-fit md:h-[400px] md:max-w-1/5 transition-transform  overflow-hidden ${
              activeCard === index ? "w-full md:w-2/3" : "p-4"
            }`}
            style={{
              backgroundImage: `url(/SpotlightGrid/${card.bgImg}.png)`,
              backgroundColor: `${card.bgColor}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => handleCardClick(index)}
          >
            {activeCard !== index && (
              <>
                <div className="flex flex-col justify-end h-full">
                  <div className="font-bold text-[26px] mb-8 md:mb-0 leading-[34px]">
                    <Balancer>{card.title}</Balancer>
                  </div>
                </div>
              </>
            )}
            {activeCard === index && (
              <div className="flex flex-col-reverse h-full md:flex-row">
                <div className="p-4 flex justify-end flex-col ">
                  <div className="font-medium text-[14px] leading-[22px]">
                    {card.expandedLabel}
                  </div>
                  <div>
                    <div className="font-bold text-[26px] mb-4 leading-[34px]">
                      <Balancer>{card.expandedTitle}</Balancer>
                    </div>
                  </div>
                  <div>
                    <ul className="my-4">
                      {card.linksArr.map((item, index) => (
                        // <li key={item._id}>
                        //   <Link href={item.url}>{item.title}</Link>
                        // </li>
                        <li
                          key={item._id}
                          className="border-b-[1px] w-fit border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={item.url}
                            className="text-[#fff] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {card.ctaBtn && (
                      <Link href={card.ctaUrl}>
                        <div
                          className={`text-[#101828] bg-yellow-50  text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                        >
                          {card.cta}
                          <Icon
                            path={mdiArrowTopRight}
                            style={{ marginLeft: "0.5em" }}
                            size={1}
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SpotlightImageGrid;
