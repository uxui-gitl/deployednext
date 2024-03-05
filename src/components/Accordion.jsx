import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const AccordionItem = ({
  item,
  inline,
  icons,
  isOpen,
  onClick,
  bullet,
  expandedDesc,
}) => (
  <div
    className={clsx("accordionItem", {
      "mb-4 bg-[#fff]": !inline,
      "border-b-2 bg-transparent": inline,
    })}
  >
    <div
      // className={`text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  `}
      className={clsx(
        "accordionHeader cursor-pointer py-1 mt-1  justify-between items-center flex",
        { "px-4": !inline }
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        {!inline ? (
          <span className="font-semibold text-[#101828] text-[22px] leading-[42px]">
            <Image
              src={`/icons/${item.icon}.svg`}
              width="80"
              height="80"
              alt={item.icon}
            />
          </span>
        ) : null}
        {inline ? (
          <span className="text-[14px] font-semibold my-1 leading-[16px] text-[#101828]">
            {item.title}
          </span>
        ) : (
          <span className="font-semibold text-[#101828] text-[22px] leading-[42px]">
            {item.title}
          </span>
        )}
      </div>
      <Icon path={isOpen ? mdiChevronUp : mdiChevronDown} size={1} />
    </div>
    {isOpen && (
      <div className="accordionContent">
        <div className={clsx({ "px-8 py-2": !inline, "px-0": inline })}>
          {/* {console.log({ item })} */}
          {expandedDesc ? (
            <p className="text-[14px] leading-[22px] font-normal">
              {item.desc}
            </p>
          ) : (
            <ul className={clsx({ "border-t-2 pt-2": inline })}>
              {item.list &&
                item.list.map((subItem) => (
                  <li
                    key={subItem._id}
                    className={clsx({
                      "border-b-2": !inline,
                      "list-disc": bullet,
                      "last:mb-2": inline,
                      "border-[#DBDBDB] pb-1 ml-4 list-disc": inline,
                      "border-b-2 last:border-b-0 last:mb-4 border-[#DBDBDB] py-2":
                        !inline,
                    })}
                  >
                    <p className="text-[14px] mb-1 leading-[16px] text-[#101828]">
                      {subItem.title}
                    </p>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {!inline && item.ctaUrl && (
          <Link
            href={item.ctaUrl}
            className="text-[#F5F5F5] text-[14px] font-medium leading-[22px] py-4 px-8 w-full flex transition-all hover:opacity-75 bg-[#0745D3]"
          >
            Know More
            <Icon path={mdiChevronUp} size={1} />
          </Link>
        )}
      </div>
    )}
  </div>
);

const Accordion = ({ items, inline, icons, expandedDesc }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item._id}
          item={item}
          inline={inline}
          icons={icons}
          expandedDesc={expandedDesc}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
