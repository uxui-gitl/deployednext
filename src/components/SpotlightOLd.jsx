import Image from "next/image";
import React, { useState } from "react";
const Spotlight = () => {
  const [activeCard, setActiveCard] = useState(1);

  const cards = [
    { label: "01", image: "/Spotlight/card01.png" },
    { label: "02", image: "/Spotlight/card02.png" },
    { label: "03", image: "/Spotlight/card03.png" },
    { label: "04", image: "/Spotlight/card04.png" },
    { label: "05", image: "/Spotlight/card05.png" },
  ];

  const handleCardHover = (index) => {
    setActiveCard(index);
  };
  return (
    <>
      <div className="card-group">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(1)}
          >
            <div className="card-label">{card.label}</div>
            {index === 0 && (
              <Image
                src="/Spotlight/card01.png"
                width={213}
                height={474}
                alt={`Card ${card.label}`}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Spotlight;
