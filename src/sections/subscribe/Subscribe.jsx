import React from "react";
import styles from "./subscribe.module.css";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import Balancer from "react-wrap-balancer";
const Subscribe = ({ title, desc, cta, ctaArrow, link, form }) => {
  return (
    <div className={`${styles["container"]} bg-white`}>
      <div
        className={` max-w-screen-lg flex justify-center flex-col text-center mx-auto `}
      >
        <div className="mx-4 mt-[5em] mb-[2em] flex justify-center flex-col sm:flex-col">
          <h3 className="mb-2 sm:w-2/3 mx-auto sm:mb-5">
            <Balancer>
              {(title && title) || "Subscribe NOW for Updates!"}
            </Balancer>
          </h3>
          <p className="text-base w-1/2 text-center mx-auto leading-[22px] font-medium mb-4">
            {desc && desc}
          </p>

          <div className="flex justify-center text-center items-center">
            {form ? (
              <form
                action=""
                className="flex justify-center flex-col sm:flex-row items-center"
              >
                <input
                  type="email"
                  className="bg-[#fff]"
                  name=""
                  id=""
                  placeholder="Email Address"
                />
                <button type="submit" className="flex">
                  Subscribe{" "}
                  <Icon
                    path={mdiArrowRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </button>
              </form>
            ) : (
              ""
            )}
          </div>

          {cta && cta !== "" ? (
            <div className="flex mt-4 justify-center text-center items-center">
              <button type="submit" className="flex">
                {cta}
                <Icon
                  path={mdiArrowRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </button>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
