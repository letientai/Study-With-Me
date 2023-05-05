import React from "react";

export const VideoComponent = ({ data }) => {
  return (
    <div>
      <video src={data}></video>
    </div>
  );
};
