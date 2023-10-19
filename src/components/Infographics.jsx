import Image from "next/image";
import React from "react";
import Infographic from "../../public/infographics/Infographic-Enterprise.png";

const Infographics = ({ src }) => {
  return (
    <>
      <div>
        <Image
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Infographic"
        />
      </div>
    </>
  );
};

export default Infographics;
