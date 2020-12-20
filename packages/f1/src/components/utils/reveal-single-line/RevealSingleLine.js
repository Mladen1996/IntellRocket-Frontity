import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

function RevealSingleLine({ tag, text, customClass }) {
  const [isVisible, setIsVisible] = useState(false);

  const CustomTag = `${tag}`;
  return (
    <Waypoint bottomOffset1="10px" onEnter={() => setIsVisible(true)}>
      <div className="overflow">
        <CustomTag className={isVisible ? `text-slide-in ${customClass}` : null}>{text}</CustomTag>
      </div>
    </Waypoint>
  );
}

export default RevealSingleLine;