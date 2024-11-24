import React, { useEffect } from "react";
import { BankcardOutline } from "antd-mobile-icons";
import AMapLoader from "@amap/amap-jsapi-loader"; // 引入高德地图
import "./index.scss";

function hotelIntroduction() {
  const cardData = [
    {
      icon: <BankcardOutline />,
      label: <div className="label">会议时间:</div>,
      value: "12月10日",
    },
    {
      icon: <BankcardOutline />,
      label: <div className="label">会议地址:</div>,
      value: "海南·三亚·亚特兰蒂斯酒店\n(海棠湾海棠北路36号)",
    },
    {
      icon: <BankcardOutline />,
      label: <div className="label justify">会议联系:</div>,
      value: "武瑞秀 13304700525\n李天保 18910724879\n石峻峰 18011898226",
    },
  ];

  useEffect(() => {
    AMapLoader.load({
      key: "4b5dc234dc09aed3c258e27a01e156a7", // 替换为你的高德地图 API 密钥
      version: "2.0",
      plugins: [], // 根据需求引入插件，例如 Geocoder
    })
      .then((AMap) => {
        const map = new AMap.Map("map-container", {
          center: [116.397428, 39.90923], // 北京天安门
          zoom: 14,
        });

        // 添加标记
        new AMap.Marker({
          position: [116.397428, 39.90923],
          map,
          title: "天安门",
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="hotelIntroduction">
      <div
        id="map-container"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "20px",
          boxShadow: "0 0 2px 0px rgba(0, 0, 0, .1)",
        }}
      ></div>
      <div className="card">
        {cardData.map((item) => (
          <div className="card-item">
            <div className="icon">{item.icon}</div>
            <>{item.label}</>
            <div className="value">
              {item.value?.split("\n").map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default hotelIntroduction;
