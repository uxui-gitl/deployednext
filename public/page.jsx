import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      {/* <div>My Post: {params.slug}</div> */}

      <>
        <div
          id=""
          className={" max-w-screen-xl text-left  mb-5 mx-auto p-5   px-[2rem]"}
        >
          <div className={`iw-card-img-wrap  w-[100%] h-auto relative`}>
            <Image
              // src={`/project-${cases.thumbnail}.png`}

              src={`/project-placeholder.png`}
              alt={"cases.thumbnail"}
              className="w-[100%]"
              width="315"
              height="200"
              // className="w-full h-auto lg:w-315 lg:h-200"
            />
          </div>
        </div>
      </>
      <>
        <div
          id=""
          className={" max-w-screen-xl text-left  mb-5 mx-auto p-5   px-[2rem]"}
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
              <h3 className="text-4xl leading-[42px] font-bold">title</h3>

              <p className="font-normal leading-[22px]">desc</p>
            </div>
          </div>

          <div className={` w-full flex pb-12 `}>
            <div
              style={{ height: "auto" }}
              className="sm:w-full flex flex-col justify-between  mr-4  relative group"
            >
              <div className={`  mx-2 flex flex-col h-full `}>
                <div
                  className={`p-5 w-full h-full flex flex-col justify-between`}
                >
                  <div
                    className={
                      "block  text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]"
                    }
                  >
                    item.description
                  </div>
                  <div>
                    <p class="text-sm font-medium text-[#101828] leading-[22px]">
                      item.clientDesignation
                    </p>
                  </div>
                </div>

                <div className={`w-full p-1 `}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default page;
