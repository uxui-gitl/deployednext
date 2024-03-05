import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import checkout from "../../public/icon/whygitl/WhyGITL.svg";
import curiousPerson from "../../public/curiousPerson.png";
import cloud from "../../public/cloud.png";
import cloudArrows from "../../public/cloudArrows.png";
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
const WhySection = ({
  ribbon,
  title,
  desc,
  arr = [],
  renderInlineSpans = false,
}) => {
  return (
    <>
      <div id="WhyUs" className={` w-full overflow-hidden bg-[#F2F4F7] pt-24`}>
        <div className=" overflow-hidden items-center pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl    mx-auto p-5   px-[2rem]">
          {/* left */}
          <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
            <div className="">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                {ribbon}
              </h4>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                {title}
              </h3>
              <p className="font-normal leading-[22px] md:w-[90%] ">{desc}</p>
              <div className="  mt-[20rem]">
                <Image
                  className="absolute bottom-0 z-20"
                  src={cloudArrows}
                  alt="cloud Arrows"
                />
                <Image
                  className="absolute left-5 bottom-10 z-30"
                  src={cloud}
                  alt="cloud"
                />
                <Image
                  className="absolute bottom-0 z-20"
                  src={curiousPerson}
                  alt="curious Person"
                />
              </div>
            </div>
          </div>
          {/* right */}
          {/* <div className="relative">{children}</div> */}
          <div className="relative">
            <AnimatePresence>
              {Array.isArray(arr) &&
                arr.map((item) => (
                  <motion.div
                    key={item._id}
                    initial="initial"
                    whileInView="animate"
                    custom={item._id}
                    viewport={{
                      once: true,
                    }}
                    className={`flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 ${
                      item._id > 0 ? "sm:ml-" + 2.5 * item._id + "rem" : "" // Apply margin only for desktop
                    }`}
                    variants={fadeInAnimationVariant}
                  >
                    <Image src={checkout} alt="checkout" />
                    <p className="text-base font-medium leading-[22px]">
                      {renderInlineSpans ? (
                        <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                      ) : (
                        item.desc
                      )}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySection;
