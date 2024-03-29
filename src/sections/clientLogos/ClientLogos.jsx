import React from "react";
import styles from "./clientLogos.module.css";
import Image from "next/image";

const ClientLogos = () => {
  const clients = [
    {
      id: 1,
      title: "Emma",
      url: "/client/emma.png",
    },
    // {
    //   id: 2,
    //   title: "Pocl",
    //   url: "/client/pocl.png",
    // },
    {
      id: 3,
      title: "Boskalis",
      url: "/client/boskalis.png",
    },
    {
      id: 4,
      title: "Cii",
      url: "/client/cii.png",
    },
    {
      id: 5,
      title: "Reza",
      url: "/client/REZA.png",
    },
  ];

  return (
    <div className="w-full  ">
      <div className="max-w-screen-lg mx-auto  ">
        <div className="mx-4 mt-11 mb-[2em]">
          <p className="text-center">
            500 + organizations trust our exceptional expertise. Join them today!
          </p>
          <div>
            <div className={styles.clientImgWrap}>
              {clients.map((client) => {
                return (
                  <div key={client.id}>
                    <Image
                      src={client.url}
                      alt={client.title}
                      width="125"
                      height="45"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
