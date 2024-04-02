import Image from "next/image";
import React from "react";

const Avatar = ({ src, alt, fullName }) => {
  let firstName, lastName;
  if (fullName) {
    const nameParts = fullName.split(" ");
    firstName = nameParts[0];
    lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  }

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        height={155}
        width={155}
        className="rounded-[9999px] h-[155px] w-[155px] max-h-[155px] max-w-[155px] min-h-[155px] min-w-[155px] object-cover"
      />
    );
  } else {
    const initials = `${firstName ? firstName.charAt(0) : ""}${
      lastName ? lastName.charAt(0) : ""
    }`;
    return (
      <div
        style={{
          borderRadius: "9999px",
          backgroundColor: "#ccc",
          border: "6px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem",
          fontWeight: "500",
          color: "#fff",
        }}
        className="ring-2 ring-status-green min-w-[155px] min-h-[155px] w-[155px] h-[155px] max-w-[155px] max-h-[155px]"
      >
        {initials}
      </div>
    );
  }
};

export default Avatar;
