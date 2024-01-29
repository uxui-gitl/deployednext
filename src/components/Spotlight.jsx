import Image from "next/image";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";

const Spotlight = ({ arr }) => {
  const [activeCard, setActiveCard] = useState(0);

  const cardsArray = arr || [
    {
      label: "01",
      expandedLabel: "Step 01",
      title: "Infrastructure and  Data Evaluation",
      expandedTitle: "Current Infrastructure and  Data Evaluation",
      desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
      image: "/Spotlight/card1.png",
    },
    {
      label: "02",
      expandedLabel: "Step 02",
      title: "Strategy  Designing ",
      expandedTitle: "Current Infrastructure and  Data Evaluation",
      desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
      image: "/Spotlight/card1.png",
    },
    {
      label: "03",
      expandedLabel: "Step 03",
      title: "Establishing Readiness",
      expandedTitle: "Current Infrastructure and  Data Evaluation",
      desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
      image: "/Spotlight/card1.png",
    },
    {
      label: "04",
      expandedLabel: "Step 04",
      title: "Upgradation and Execution",
      expandedTitle: "Current Infrastructure and  Data Evaluation",
      desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
      image: "/Spotlight/card1.png",
    },
    {
      label: "05",
      expandedLabel: "Step 05",
      title: "Management and Control",
      expandedTitle: "Current Infrastructure and  Data Evaluation",
      desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
      image: "/Spotlight/card1.png",
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
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        {cardsArray.map((card, index) => (
          <div
            key={index}
            className={`  bg-[#fff] cursor-pointer min-w-full md:min-w-[155px] md:h-[320px] md:max-w-1/5 w-fit transition-transform mb-4 overflow-hidden ${
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
                    {card.isBullet ? (
                      <div className="text-[12px] leading-[18px] font-medium">
                        {card.list.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[12px] leading-[18px] font-medium">
                        {card.desc}
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-1/3">
                  <Image
                    src={card.image}
                    alt={`Card ${card.label}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Spotlight;
