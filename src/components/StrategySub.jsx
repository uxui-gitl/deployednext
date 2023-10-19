import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import Image from "next/image";
import Link from "next/link";
const StrategySub = () => {
  return (
    <>
      <div className={` w-full bg-[#f2f4f7] py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
          <div className="bg-blue-50 flex items-start flex-col justify-around">
            <div>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[60%]">
                <span className="text-[#0745D3]">Free 30-Minutes</span> Strategy
                Session with our Consultant
              </h3>
              <p className="font-medium leading-[22px] md:w-[90%] ">
                Let’s discuss how Godrej Infotech can help your business with
                efficiency and business continuity.
              </p>
            </div>
          </div>
          <div className=" ">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              placeat fuga assumenda odio hic corporis. Voluptatem consectetur
              similique, natus quaerat placeat, facere sunt ratione
              necessitatibus mollitia iste nemo explicabo cum!
            </div>
            <div className="z-50 flex gap-4 flex-col sm:flex-row justify-start items-center align-middle">
              <div className="max-w-max flex justify-start items-center my-5">
                <Link
                  href={"/"}
                  className="min-w-max flex bg-[#0745D3] py-2 px-10 border-2 border-[#0745D3] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                >
                  Send Message
                  <Icon
                    path={mdiArrowTopRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategySub;
