'use client';
import React, { Fragment, useState } from "react";

import styles from './announcement.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import ReactFlagsSelect from "react-flags-select";
const Announcement = () => {

  
  const [selected, setSelected] = useState("IN");
  const handleCountrySelect = (code) => {
    setSelected(code);
    let url = "";

    switch (code) {
      case "BE":
        url = "https://www.godrejinfotech.com/en-be/";
        break;
      case "SG":
        url = "https://www.godrejinfotech.com/en-sg/";
        break;
      case "US":
        url = "https://www.godrejinfotech.com/en-usa/";
        break;
      case "IN":
        url = "/";
        break;
      default:
        url = "/";
    }

    window.open(url, "_blank");
  };
  return (

    <div className={styles['top-banner']}>
            <div className={styles['container']}>
              <div className={styles['content']}>
                <span className={styles['tb-text']}>Delivering Business value
      with Automation - </span>
                 
              <Link className={styles['tb-link']} href='/'>Learn more</Link>
              </div>
              <div id={styles['tb-close']}>
                {/* <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 4L3.5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12.5 13L3.5 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg> */}

                <div className={styles['tb-flag-wrap']}>
                  <ReactFlagsSelect
                    className={styles['tb-flags']}
                    selected={selected}
                    fullWidth={false}
                    countries={["BE", "SG", "US", "IN"]} 
                    customLabels={{
                      BE: "BEL",
                      SG: "SGP",
                      US: "USA",
                      IN: "IND",
                    }}
                    onSelect={handleCountrySelect}
                     
                  />
                </div>
              </div>
            </div>
          </div>

  )
}

export default Announcement