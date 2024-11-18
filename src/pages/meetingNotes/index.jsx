import React from "react";
import { CalendarOutline } from "antd-mobile-icons";
import "./index.scss";

const MeetingItem = ({ title, time, index, total }) => {
  return (
    <div key={time} className="meeting-item">
      <div className="split">
        <div className="icon"></div>
        {/* 不展示虚线。case:最后一项   */}
        {index !== total - 1 && <div className="line" />}
      </div>
      <div className="content">{title}</div>
    </div>
  );
};

function MeetingNotes() {
  const meetingList = [
    { title: "参会人员需佩戴统一胸卡进入会场" },
    {
      title:
        "会议期间所有人员必须着正装，男士着深色西服、白衬衣、系领带；女士着深色商务套装",
    },
    {
      title:
        "所有参会人员严格遵守会场纪律，将手机调为振动或静音状态，不允许在会场内随意走动，不允许出现随意打电话、交头接耳等违反会议秩序的行为",
    },
    {
      title:
        "会议召开期间，任何人员不允许通过手机微信、网络等任何形式进行传播，一经发现进行严肃处理",
    },
    {
      title:
        "各大区对所属参会人员做好纪律要求，会议期间严格自律，认真倾听、酝酿",
    },
  ];

  return (
    <div className="meetingNotes">
      <div className="container">
        <div className="title">
          <span className="icon">
            <CalendarOutline />
          </span>
          <span className="text">参会须知</span>
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

export default MeetingNotes;
