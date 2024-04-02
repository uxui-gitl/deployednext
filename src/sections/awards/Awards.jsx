import React from "react";
import styles from "./awards.module.css";
import Image from "next/image";
import award1 from "../../../public/awards/award-1.png";
import award2 from "../../../public/awards/award-2.png";
import Marquee from "react-fast-marquee";

const Awards = () => {
  return (
    <>
      <div className={` w-full bg-[#f2f4f7] py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-50">
            <h4
              className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
            >
              Achievements
            </h4>
            <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
              Awards and Recognition
            </h3>
            <p className="font-medium leading-[22px] md:w-[90%] ">
              Our proficiency in the technology ecosystem and collaborative work culture have earned us appreciation from the partners, business sector, and the industry. It is the Kaizen attitude that we infuse at every level which consistently strengthens our organisation performance.
            </p>
          </div>
          <div className=" ">
            <Marquee pauseOnHover={true}>
              <Image
                src={award1}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{
                  height: "376px",
                  width: "100%",
                  objectFit: "cover",
                  marginTop: "4rem",
                }}
                alt="award"
              />
              <Image
                src={award2}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="award"
              />
              <Image
                src={award1}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{
                  height: "376px",
                  width: "100%",
                  objectFit: "cover",
                  marginTop: "4rem",
                }}
                alt="award"
              />
              <Image
                src={award2}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="award"
              />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
