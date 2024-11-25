import React from 'react';
import { Image } from "antd-mobile";
import warmTipsImg from "src/assets/images/warmTips.png";
import "./index.scss";

export default function WarmTips() {

  return (
    <div className='warmTips'>
      <Image src={warmTipsImg} />
    </div>
  )
}