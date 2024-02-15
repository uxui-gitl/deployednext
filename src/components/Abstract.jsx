import { mdiBullseyeArrow } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

const Abstract = (AbstractProps) => {
  return (
    <div className={` w-full bg-[#FFF] py-24`}>
      <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
        <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
          <div>
            {AbstractProps.ribbon ? (
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                {" "}
                {AbstractProps.ribbon}
              </h4>
            ) : null}
          </div>
          <div className="">
            <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
              Overview
            </h3>
          </div>
          <div>
            <p className="font-medium leading-[22px] md:w-[90%]">
              {AbstractProps.abstractdesc}
            </p>
          </div>
          {AbstractProps.list ? (
            <div className="mt-8">
              <ul>
                {AbstractProps.listArr.map((list) => (
                  <li key={list._id}>
                    {" "}
                    <p className="flex gap-4 mb-4 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                      <span className="">
                        <Icon
                          path={mdiBullseyeArrow}
                          color="dodgerblue"
                          size={1}
                        />
                      </span>
                      {list.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Abstract;
