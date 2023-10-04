import React from "react";
import styles from "./employeeExperience.module.css";
import Image from "next/image";
import award1 from "../../../public/awards/award-1.png";
import award2 from "../../../public/awards/award-2.png";
import Marquee from "react-fast-marquee";
import avatar from "../../../public/contact/avatar.png";

const EmployeeExperience = () => {
  return (
    <>
      <div className={`w-full bg-[#f2f4f7] py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
          <div className="bg-blue-50">
            <h4
              className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
            >
              Unleashing Joy at Work
            </h4>
            <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
              Employees Share Their Happy Experiences
            </h3>
            <p className="font-medium leading-[22px] md:w-[90%] ">
              Discover the heartwarming stories of our employees as they reveal
              their joyful experiences at work. From moments of triumph to
              instances of camaraderie, their testimonials showcase a workplace
              where happiness is unleashed and celebrated. Learn how fostering a
              positive environment can lead to a truly fulfilling and successful
              team dynamic.
            </p>
          </div>
          <div className="w-full overflow-clip">
            <Marquee pauseOnHover={true} direction="up" className={`w-full`}>
              <div class="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="space-y-6 py-4 text-base leading-7 text-gray-600">
                  <p>
                    On behalf of our entire organization, please accept our
                    sincere appreciation for the excellent job Godrej Infotech
                    Limited has done over the past several months in
                    implementation of LN ERP.
                  </p>
                </div>
                <div class="pt-2 text-base font-semibold leading-7 flex flex-row justify-start items-start gap-4">
                  <Image
                    src="https://placehold.co/100x100/EEE/31343C"
                    class="h-14"
                    alt="User"
                    width={100}
                    height={100}
                  />
                  <div>
                    <p class="text-gray-900">Rahul Dravid </p>

                    <p class="text-gray-400  hover:text-sky-600">
                      UI/UX Associate Manager{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="space-y-6 py-4 text-base leading-7 text-gray-600">
                  <p>
                    On behalf of our entire organization, please accept our
                    sincere appreciation for the excellent job Godrej Infotech
                    Limited has done over the past several months in
                    implementation of LN ERP.
                  </p>
                </div>
                <div class="pt-2 text-base font-semibold leading-7 flex flex-row justify-start items-start gap-4">
                  <Image
                    src="https://placehold.co/100x100/EEE/31343C"
                    class="h-14"
                    alt="User"
                    width={100}
                    height={100}
                  />
                  <div>
                    <p class="text-gray-900">Rahul Dravid </p>

                    <p class="text-gray-400  hover:text-sky-600">
                      UI/UX Associate Manager{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeExperience;
