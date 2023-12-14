// components/Accordion.js

import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiDomain } from "@mdi/js";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Link from "next/link";
import Image from "next/image";

const AccordionItem = ({
  _id,
  title,
  list,
  cta,
  ctaUrl,
  icon,
  isOpen,
  onClick,
}) => (
  <div className={`accordionItem mb-4 bg-[#fff]`}>
    <div
      className={`accordionHeader cursor-pointer px-4 justify-between items-center flex`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="font-semibold text-[#101828] text-[22px] leading-[42px]">
          {icon !== "" ? (
            <Image
              src={`/icons/${icon}.svg`}
              width="80"
              height="80"
              alt={icon}
            />
          ) : (
            <Icon path={mdiDomain} size={3} />
          )}
        </span>
        <span className="font-semibold text-[#101828] text-[22px] leading-[42px]">
          {title}
        </span>
      </div>
      <Icon path={isOpen ? mdiChevronUp : mdiChevronDown} size={1} />
    </div>
    {isOpen && (
      <div className={`accordionContent `}>
        <div className=" px-8 py-2">
          <ul>
            {list.map((item, index) => (
              <li
                key={item._id}
                className=" border-b-2 last:border-b-0 last:mb-4 border-[#DBDBDB] py-2 "
              >
                <p className="text-[14px] my-1 leading-[16px] text-[#101828]">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="\"
          className="text-[#F5F5F5] text-[14px] font-medium leading-[22px] py-4 px-8 w-full flex transition-all hover:opacity-75 bg-[#0745D3]"
        >
          Know More
          <Icon path={mdiArrowRight} style={{ marginLeft: "0.5em" }} size={1} />
        </Link>
      </div>
    )}
  </div>
);
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`accordion w-[100%]`}>
      {items.map((item, index) => (
        <AccordionItem
          key={item._id}
          title={item.title}
          icon={item.icon}
          cta={item.cta}
          ctaUrl={item.ctaUrl}
          list={item.list}
          isOpen={item._id === openIndex}
          onClick={() => handleItemClick(item._id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
