import React from "react";
import { Image } from "antd-mobile";
import cls from "classnames";
import Board from "src/assets/images/jiezhanfuwu.png";
import Car from "src/assets/images/jiezhan.png";
import Location from "src/assets/images/chufadihedidian.png";
import Bus from "src/assets/images/gongjiao.png";
import "./index.scss";

const EventItem = ({ type, title, icon, index, total, color }) => {
  return (
    <div
      className={cls("meeting-item", {
        [type]: true,
      })}
    >
      <div className="split">
        <>{icon}</>
        {/* 不展示虚线。case:最后一项   */}
        {index !== total - 1 && <div className="line" />}
      </div>
      <div
        className={cls("right-content", {
          [color]: !!color,
        })}
      >
        {title}
      </div>
    </div>
  );
};

export default function TransportationRoutes() {
  const eventList = [
    {
      title: "接送服务",
      icon: (
        <div className="big-circle">
          <Image src={Board} />
        </div>
      ),
      type: "event",
    },
    {
      title: "大会统一安排车辆接送",
      icon: <div className="small-circle"></div>,
      type: "desc",
    },
    {
      title: "接站",
      icon: (
        <div className="big-circle">
          <Image src={Car} />
        </div>
      ),
      type: "event",
    },
    {
      title: "12月9日 8:00-22:00",
      icon: <div className="small-circle"></div>,
      type: "desc",
    },
    {
      title: "地点",
      icon: (
        <div className="big-circle">
          <Image src={Location} style={{ width: "10px", height: "12px" }} />
        </div>
      ),
      type: "event",
    },
    {
      title: "三亚凤凰机场到达口、主亚高铁站",
      icon: <div className="small-circle"></div>,
      type: "desc",
    },
    {
      title: "班次",
      icon: (
        <div className="big-circle">
          <Image src={Bus} style={{ width: "12px", height: "12px" }} />
        </div>
      ),
      type: "event",
    },
    {
      title: "每隔1小时发车",
      icon: <div className="small-circle"></div>,
      type: "desc",
      color: "red",
    },
  ];

  const eventList1 = [
    {
      title: "出发",
      icon: (
        <div className="big-circle">
          <Image src={Board} />
        </div>
      ),
      type: "event",
    },
    {
      title: "亚特兰蒂斯酒店",
      icon: <div className="small-circle"></div>,
      type: "desc",
    },
    {
      title: "送站",
      icon: (
        <div className="big-circle">
          <Image src={Car} />
        </div>
      ),
      type: "event",
    },
    {
      title: "12月11日6:00-14:00",
      icon: <div className="small-circle"></div>,
      type: "desc",
    },
    {
      title: "到达",
      icon: (
        <div className="big-circle">
          <Image src={Location} style={{ width: "10px", height: "12px" }} />
        </div>
      ),
      type: "event",
    },
    {
      title: "三亚高铁站--三亚凤凰机场",
      icon: <div className="small-circle"></div>,
      type: "desc",
    },
    {
      title: "班次",
      icon: (
        <div className="big-circle">
          <Image src={Bus} style={{ width: "12px", height: "12px" }} />
        </div>
      ),
      type: "event",
    },
    {
      title: "每隔1小时发车",
      icon: <div className="small-circle"></div>,
      type: "desc",
      color: "red",
    },
  ];

  return (
    <div className="transportationRoutes">
      <div className="card">
        <div className="title">交通路线</div>
        <div className="content">
          <div className="timeline">
            {eventList?.map((item, index) => (
              <EventItem index={index} total={eventList.length} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: "12px",padding: '16px' }}>
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
