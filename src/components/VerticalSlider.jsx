import React from "react";

const verticalSlider = () => {
  return (
    <>
      <div className={` w-full bg-white py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
          <div className="bg-white flex items-start flex-col justify-start">
            <div>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                Take Confident Business Decisions with Industry Tailored{" "}
                <span className="text-[#0745D3]">Cloud Technology </span>{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                architecto illo laboriosam cum libero enim, et itaque ipsam
                incidunt cumque, aut molestias mollitia omnis qui fuga iusto in
                repellendus officia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default verticalSlider;
