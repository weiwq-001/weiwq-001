import React from "react";
import { Image } from "antd-mobile";
import venueGuideImg from "src/assets/images/venueGuide.png";
import "./index.scss";

export default function VenueGuide() {
  return (
    <div className="venueGuide">
      <Image src={venueGuideImg} />
    </div>
  );
}
