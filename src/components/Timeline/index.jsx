import React from "react";
import "./index.scss";

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events?.map((event, index) => (
        <div key={index} className="event">
          <div className="time">{event.time}</div>
          <div className="split">
            <div className="icon"></div>
            {index !== events.length - 1 && <div className="line" />}
          </div>
          <div className="content">{event.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
