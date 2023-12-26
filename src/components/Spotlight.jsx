// components/CardGroup.js
import Image from "next/image";
import React, { useState } from "react";

const Spotlight = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
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
      <div className="flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`border p-4 m-2 cursor-pointer transition-transform ${
              activeCard === index ? "transform scale-105" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="font-bold text-2xl">{card.label}</div>
            {activeCard === index && (
              <div className="flex">
                <div>
                  <div className="font-bold text-xl">{card.expandedLabel}</div>
                  <div className="font-semibold text-lg">
                    {card.expandedTitle}
                  </div>
                  <div className="text-sm">{card.desc}</div>
                </div>
                <div>
                  <Image
                    src={card.image}
                    width={213}
                    height={474}
                    alt={`Card ${card.label}`}
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
