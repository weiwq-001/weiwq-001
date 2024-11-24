import React from "react";
import { Image } from "antd-mobile";
import CANYIN from "src/assets/images/canyin.png";
import "./index.scss";

const EventItem = ({ time, title, icon, index, total, color }) => {
  return (
    <div className={"meeting-item"}>
      <div className="time">{time}</div>
      <div className="split">
        <>{icon}</>
        {/* 不展示虚线。case:最后一项   */}
        {index !== total - 1 && <div className="line" />}
      </div>
      <div className={"content"}>{title}</div>
    </div>
  );
};

export default function DiningInfo() {
  const eventList = [
    {
      time: "早餐",
      title: "",
      icon: (
        <div className="big-circle">
          <Image src={CANYIN} />
        </div>
      ),
    },
    {
      time: "午餐",
      title: "",
      icon: (
        <div className="big-circle">
          <Image src={CANYIN} />
        </div>
      ),
    },
    {
      time: "晚餐",
      title: "番红花餐厅(18:00-22:00)",
      icon: (
        <div className="big-circle">
          <Image src={CANYIN} />
        </div>
      ),
    },
  ];

  const eventList1 = [
    {
      time: "早餐",
      title: "番红花餐厅(6:00-8:30)",
      icon: (
        <div className="big-circle">
          <Image src={CANYIN} />
        </div>
      ),
    },
    {
      time: "午餐",
      title: "番红花餐厅(11:50-13:20)",
      icon: (
        <div className="big-circle">
          <Image src={CANYIN} />
        </div>
      ),
    },
    {
      time: "晚餐",
      title: "番红花餐厅(18:00-21:00)",
      icon: (
        <div className="big-circle">
          <Image src={CANYIN} />
        </div>
      ),
    },
  ];

  return (
    <div className="diningInfo">
      <div className="card" style={{padding: "16px" }}>
        <div className="remake">
          <div className="line"></div>
          <div className="text">备注</div>
        </div>
        <div className="desc">请根据指引到达餐厅,在餐厅入口处扫描后用餐</div>
      </div>
      <div className="card" style={{ marginTop: "24px" }}>
        <div className="title">12月9日</div>
        <div className="content">
          <div className="timeline">
            {eventList?.map((item, index) => (
              <EventItem index={index} total={eventList.length} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: "24px" }}>
        <div className="title">12月10日</div>
        <div className="content">
          <div className="timeline">
            {eventList1?.map((item, index) => (
              <EventItem index={index} total={eventList.length} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
