import React, { useState } from "react";
import cls from "classnames";
import "./index.scss";

const MeetingItem = ({ title, content, time, childRender, index, total }) => {
  return (
    <div className="meeting-item" key={time}>
      <div
        className={cls("time", {
          hide: !time,
        })}
      >
        {time}
      </div>
      <div className="split">
        <div className="small-circle"></div>
        {/* 不展示虚线。case:最后一项 | 存在子容器  */}
        {index !== total - 1 && !childRender && <div className="line" />}
      </div>
      <div className="content">
        <div className="event">{title}</div>
        <div className="desc">
          {content.split("\n")?.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

function MeetingSchedule() {
  const meetingList = [
    {
      time: "08:10-08:50",
      title: "各参会代表队整队入场",
      content: "",
    },
    {
      time: "08:50-08:57",
      title: "新品TVC视频",
      content: "",
    },
    {
      time: "08:57-08:58",
      title: "领导入场",
      content: "集团、事业部领导",
    },
    {
      time: "08:58-09:00",
      title: "伊利消防视频",
      content: "",
    },
    {
      time: "09:00-09:07",
      title: "集团客户大会视频",
      content: "",
    },
    {
      time: "09:07-09:10",
      title: "倒计时视频+酸奶开场视频",
      content: "",
    },
    {
      time: "09:10-09:15",
      title: "主持人开场",
      content: "关丁弋 李丹",
    },
    {
      time: "09:15-09:35",
      title: "集团领导致辞",
      content: "集团领导",
    },
    {
      time: "09:35-10:00",
      title: "事业部负责人工作部署",
      content: "李伟",
    },
    {
      time: "10:00-10:30",
      title: "颁奖典礼",
      content: "颁奖嘉宾+颁奖客户",
    },
    {
      time: "10:30-10:50",
      title: "会间休息",
      content: "全体人员",
    },
    {
      time: "10:50-11:25",
      title: "营销系统工作报告",
      content: "付彪",
    },
    {
      time: "11:25-11:45",
      title: "客户分享",
      content: "客户",
    },
    {
      time: "11:45-12:05",
      title: "《***》-客户成功经营案例分享",
      content: "客户",
    },
    {
      time: "12:05-13:20",
      title: "午餐",
      content: "全体人员",
    },
    {
      time: "13:20-13:50",
      title: "各参会代表队整队入场",
      content: "全体人员",
    },
    {
      time: "13:50-13:57",
      title: "新品TVC视频",
      content: "",
    },
    {
      time: "13:57-13:58",
      title: "领导入场",
      content: "集团、事业部领导",
    },
    {
      time: "13:58-14:00",
      title: "主持人串场",
      content: "关丁弋 李丹",
    },
    {
      time: "14:00-14:30",
      title: "市场部工作报告",
      content: "宋源",
    },
    {
      time: "14:30-15:40",
      title: "品牌秀",
      content: "品牌负责人",
    },

    {
      time: "15:40-16:00",
      title: "会间休息",
      content: "全体人员",
    },
    {
      time: "16:00-17:00",
      title: "销售部工作报告",
      content: "吴瑞刚",
    },
    {
      time: "17:00-17:20",
      title: "冲锋宣誓+启动",
      content: "集团领导\n事业部领导\n营销总部负责人",
    },
    {
      time: "17:20-17:30",
      title: "发布冷柜订购政策",
      content: "吴瑞刚",
    },
    {
      time: "17:30-18:00",
      title: "冷柜订购",
      content: "全员",
    },
    {
      time: "18:00-18:05",
      title: "合唱司歌",
      content: "全员",
    },
    {
      time: "18:05-18:10",
      title: "主持人致结束词",
      content: "主持人",
    },
    {
      time: "",
      title: "会议结束",
      content: "嘉宾有序离场",
    },
  ];

  return (
    <div className="meetingSchedule">
      <div className="container">
        <div className="title">会议日程</div>
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
