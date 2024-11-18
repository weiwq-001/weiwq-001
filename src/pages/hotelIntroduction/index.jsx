import React from "react";
import { BankcardOutline } from "antd-mobile-icons";
import "./index.scss";

function hotelIntroduction() {
  const cardData = [
    {
      icon: <BankcardOutline />,
      label: (
        <div className="label">
          <span>酒店名称:</span>
        </div>
      ),
      value: "海南三亚·亚特兰蒂斯酒店",
    },
    {
      icon: <BankcardOutline />,
      label: (
        <div className="label justify">
          <span>地</span>
          <span>址:</span>
        </div>
      ),
      value: "三亚 海棠区 海棠湾海棠北路36号，近风棠路三亚国际免税城",
    },
    {
      icon: <BankcardOutline />,
      label: (
        <div className="label justify">
          <span>电</span>
          <div>话:</div>
        </div>
      ),
      value: "950 135 1889",
    },
  ];

  return (
    <div className="hotelIntroduction">
      <div className="card">
        {cardData.map((item) => (
          <div className="card-item">
            <div className="icon">{item.icon}</div>
            <>{item.label}</>
            <div className="value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default hotelIntroduction;
