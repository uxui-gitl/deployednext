import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch("/assets/blog_data.json");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    console.log(data),
    (
      <>
        <>
          <div
            id=""
            className={
              "  max-w-screen-xl text-left  mx-auto pt-5 mt-5   px-[2rem]"
            }
          >
            <div className={`iw-card-img-wrap  w-[100%] h-auto relative`}>
              <Image
                src={`/blogPlaceholder.png`}
                // src={
                //   cases.thumbnail
                //     ? cases.thumbnail == "1" || "2" || "3"
                //       ? `/caseStudies/${cases.thumbnail}.png`
                //       : `/caseStudies/${cases.thumbnail}.png`
                //     : `/project-placeholder.png`
                // }
                alt={"blog"}
                className="w-[100%]"
                width="980"
                height="558"
              />
            </div>
          </div>
          <div
            id=""
            className={
              " max-w-screen-xl text-left  mb-5 mx-auto p-5   px-[2rem]"
            }
          >
            <div className="  mb-[2em]">
              <div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
                <p className="text-[14px] leading-[22px] font-medium">
                  20 Jan 2023
                </p>
                <h3 className="text-4xl leading-[42px] font-semibold">
                  MIT&apos;s Vaccine Printer: The Game-Changer in Vaccine
                  Distribution
                </h3>

                <p className="font-normal leading-[22px]">post</p>
              </div>
            </div>
          </div>
        </>
      </>
    )
  );
};

export default page;
