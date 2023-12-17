import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import Image from "next/image";
import Link from "next/link";
const StrategySub = ({ title, blue, title2, desc }) => {
  return (
    <>
      <div className={` w-full bg-white py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0">
          <div className="bg-white flex items-start flex-col justify-start">
            <div>
              {/* <span className="text-[#0745D3]">Free 30-Minutes</span> Strategy
                Session with our Consultant */}
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                {title == null ? (
                  <>
                    <span className="text-[#0745D3]">Free 30-Minutes</span>{" "}
                    Strategy Session with our Consultant
                  </>
                ) : (
                  <>
                    {title}
                    <span className="text-[#0745D3]"> {blue} </span> {title2}
                  </>
                )}
              </h3>
              <p className="font-medium leading-[22px] md:w-[90%] ">
                {desc == null ? (
                  <>
                    Let&apos;s discuss how upgrade to cloud can help you to
                    enhance your business&apos;s growth potential.
                  </>
                ) : (
                  <>{desc}</>
                )}
              </p>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="fullname"
                  className="absolute px-2 py-0 ml-4 -mt-[0.55rem] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 text-[12px] bg-[#f2f4f7] z-20"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Darshan Sawant"
                  className="mt-1 block w-full px-3 py-2 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-3 border-2 border-[#98A2B3] bg-[#f2f4f7] rounded-sm relative"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="absolute px-2 py-0 ml-4 -mt-[0.55rem] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 text-[12px] bg-[#f2f4f7] z-20"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="mt-1 block w-full px-3 py-2 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-3 border-2 border-[#98A2B3] bg-[#f2f4f7] rounded-sm relative"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="absolute px-2 py-0 ml-4 -mt-[0.55rem] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 text-[12px] bg-[#f2f4f7] z-20"
                >
                  Message (Optional)
                </label>
                <textarea
                  type="text"
                  id="message"
                  placeholder="We would like to leverage our business potential
                  and accelerate the growth"
                  className="mt-1 block w-full px-3 py-2 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-3 border-2 border-[#98A2B3] bg-[#f2f4f7] rounded-sm relative"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex justify-start items-start gap-3 mb-5">
                  <input type="checkbox" class="default:ring-2" />
                  <p>
                    I consent to the processing of my personal data by Godrej
                    Infotech in accordance with the{" "}
                    <Link href={"/"} className="text-blue-600">
                      Privacy Notice
                    </Link>
                  </p>
                </label>
              </div>

              <div className="max-w-max flex justify-start items-center my-5">
                <Link
                  href={"/"}
                  className="min-w-max flex bg-[#0745D3] py-2 px-10 border-2 border-[#0745D3] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                >
                  Send Message
                  <Icon
                    path={mdiArrowRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategySub;
