import React from "react";
import { Image } from "antd-mobile";
import serviceForYouImg from "src/assets/images/serviceForYou.png";
import "./index.scss";

export default function ServiceForYou() {
  return (
    <div className="serviceForYou">
      <Image src={serviceForYouImg} />
    </div>
  );
}
