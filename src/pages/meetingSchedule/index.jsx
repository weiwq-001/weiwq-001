import React, { useState } from "react";
import { CalendarOutline } from "antd-mobile-icons";
import { FileOutline } from "antd-mobile-icons";
import "./index.scss";

const MeetingItem = ({
  title,
  time,
  icon,
  childRender,
  index,
  total,
}) => {
  return (
    <div key={time}>
      <div className="meeting-item">
        <div className="time">{time}</div>
        <div className="split">
          <div className="icon">{icon}</div>
          {/* 不展示虚线。case:最后一项 | 存在子容器  */}
          {index !== total - 1 && !childRender && <div className="line" />}
        </div>
        <div className="content">{title}</div>
      </div>
      {/* 存在详情 */}
      {!!childRender && childRender}
    </div>
  );
};

const CircleIcon = () => {
  return (
    <div className="circle-outer">
      <div className="circle-inner">
        <FileOutline />
      </div>
    </div>
  );
};

const SmallCircle = () => {
  return <div className="small-circle"></div>;
};

function MeetingSchedule() {
  const [toggle, setToggle] = useState(false);
  const meetingMap = {
    "12月5号": [
      { time: "7:50-8:50", title: "签到&入场", icon: <SmallCircle /> },
      { time: "8:50-8:52", title: "倒计时开场视频", icon: <SmallCircle /> },
      {
        time: "8:52-9:00",
        title: "主持人开场，集团视频",
        icon: <SmallCircle />,
      },
      { time: "9:00-9:10", title: "集团领导致辞", icon: <SmallCircle /> },
      { time: "9:10-9:30", title: "事业部领导致辞", icon: <SmallCircle /> },
      { time: "9:30-10:30", title: "颁奖典礼", icon: <SmallCircle /> },
      { time: "10:30-10:50", title: "茶歇", icon: <SmallCircle /> },
      { time: "10:50-11:30", title: "营销系统报告", icon: <SmallCircle /> },
      { time: "11:30-12:00", title: "市场部报告", icon: <SmallCircle /> },
      { time: "12:00-14:00", title: "翻台/午餐", icon: <SmallCircle /> },
      { time: "14:00-14:05", title: "主持人开场", icon: <SmallCircle /> },
      { time: "14:05-18:00", title: "外部专家分享", icon: <SmallCircle /> },
    ],
  };

  const meetingList = [
    { time: "12月4号", title: "报道", icon: <CircleIcon /> },
    {
      type: "custom",
      time: "12月5号(****厅)",
      title: (
        <>
          <div>上午: 健康饮品事业部2024年度客户大会</div>
          <div style={{ marginTop: 10 }}>
            下午: 健康饮品事业部2024年度客户大会
          </div>
          <div className="detail-meeting">
            <div className="toggle-btn" onClick={() => setToggle(!toggle)}>
              <span>详细日程</span>
              <div className="arrow">
                {toggle ? (
                  <div className="rotate180">{"<"}</div>
                ) : (
                  <div className="rotate90">{">"}</div>
                )}
              </div>
            </div>
          </div>
        </>
      ),
      icon: <CircleIcon />,
      childRender: toggle && (
        <div className="toggle-view">
          {meetingMap["12月5号"]?.map((item, index) => (
            <MeetingItem
              toggle={toggle}
              index={index}
              total={meetingMap["12月5号"]?.length}
              {...item}
            />
          ))}
        </div>
      ),
    },
    { time: "12月6号", title: "结束", icon: <CircleIcon /> },
  ];

  return (
    <div className="meetingSchedule">
      <div className="container">
        <div className="title">
          <span className="icon">
            <CalendarOutline />
          </span>
          <span className="text">会议日程</span>
        </div>
        <div className="content">
          <div className="timeline">
            {meetingList?.map((item, index) => (
              <MeetingItem index={index} total={meetingList.length} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingSchedule;
