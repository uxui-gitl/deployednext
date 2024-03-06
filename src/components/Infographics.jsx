import Image from "next/image";
import React from "react";
import Infographic from "../../public/infographics/Infographic-Enterprise.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const Infographics = ({ src }) => {
  return (
    <>
      <div>
        <Zoom>
          <Image
            src={src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Infographic"
          />
        </Zoom>
      </div>
    </>
  );
};

export default Infographics;
