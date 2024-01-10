import React from "react";


const Abstract = (AbstractProps) => {
    return (
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
             
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Abstract
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  {AbstractProps.abstractdesc}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Abstract