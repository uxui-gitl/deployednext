import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";

const SpotlightLogoGrid = ({ arr }) => {
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
      <div className="flex flex-col  md:flex-row ">
        {cardsArray.map((card, index) => (
          <div
            key={index}
            className={` text-white w-full  md:w-1/3 md:max-h-[500px] h-fit md:h-[400px] md:max-w-1/5 transition-transform  overflow-hidden `}
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
                  <div className="flex justify-center items-center h-full border-r-2">
                    <Image
                      src={`/SpotlightLogoGrid/${card.logo}.png`}
                      width={237}
                      height={128}
                      alt={card.logo}
                    />
                  </div>
                </div>
              </>
            )}
            {activeCard === index && (
              <div className="flex flex-col-reverse h-full md:flex-row border-r-2">
                <div className="px-[2rem] py-8 flex justify-between flex-col items-start w-full">
                  <div className="font-medium text-[14px] leading-[22px]">
                    <Image
                      src={`/SpotlightLogoGrid/${card.logo}.png`}
                      width={237}
                      height={128}
                      alt={card.logo}
                    />
                  </div>

                  <div>
                    <ul className="my-4">
                      {card.linksArr.map((item, index) => (
                        <li
                          key={item._id}
                          className="border-b-[1px] w-fit border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={item.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {card.ctaBtn && (
                      <Link href={card.ctaUrl} className="mb-4">
                        <div
                          className={`text-[#101828] bg-yellow-50  text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                          style={{ backgroundColor: card.btnBg, color: "#FFF" }}
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

export default SpotlightLogoGrid;
