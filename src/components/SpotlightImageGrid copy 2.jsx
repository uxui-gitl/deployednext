import Image from "next/image";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";

const SpotlightImageGrid = ({ arr }) => {
  const [activeCard, setActiveCard] = useState(0);

  const cardsArray = arr || [
    {
      _id: 1,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
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
      bg: "/Spotlight/card1.png",
      ctaBtn: true,
      cta: "Know More",
    },
    {
      _id: 2,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
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
      bg: "/Spotlight/card1.png",
      ctaBtn: true,
      cta: "Know More",
    },
    {
      _id: 3,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
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
      bg: "/Spotlight/card1.png",
      ctaBtn: true,
      cta: "Know More",
    },
    {
      _id: 4,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
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
      bg: "/Spotlight/card1.png",
      ctaBtn: true,
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
      <div className="flex flex-col  md:flex-row md:gap-4">
        {cardsArray.map((card, index) => (
          <div
            key={index}
            className={`   bg-yellow-200 m-2 cursor-pointer   w-1/4 md:h-[320px] md:max-w-1/5  transition-transform mb-4 overflow-hidden ${
              activeCard === index ? " " : "p-4"
            }`}
            onClick={() => handleCardClick(index)}
          >
            {activeCard !== index && (
              <>
                <div className="flex flex-col justify-between h-full">
                  <div className="font-bold text-[26px] mb-4 md:mb-0 leading-[34px]">
                    {card.label}
                  </div>
                  <div className="font-bold text-[20px] md:text-[16px] leading-[22px]">
                    <Balancer>{card.title}</Balancer>
                  </div>
                </div>
              </>
            )}
            {activeCard === index && (
              <div className="flex flex-col-reverse  md:flex-row">
                <div className="p-4 flex justify-between flex-col md:w-2/3">
                  <div className="font-medium text-[14px] leading-[22px]">
                    {card.expandedLabel}
                  </div>
                  <div>
                    <div className="font-bold text-[26px] mb-4 leading-[34px]">
                      <Balancer>{card.expandedTitle}</Balancer>
                    </div>
                    <div className="text-[12px] leading-[18px] font-medium">
                      {card.desc}
                    </div>
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
