import React from "react";
import { projects } from "../../assets/data";
import Card from "@/components/Card";

const RobotDetails = () => {
  return (
    <div
      style={{
        marginTop: "20vh",
        marginBottom: "20vh",
      }}
    >
      {projects.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};

export default RobotDetails;
