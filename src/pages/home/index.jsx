import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import MENULIST from "../../constant/menu";
import "./index.scss";

export default function Home() {
  const navigate = useNavigate();
  const menu = useRef(MENULIST);

  const jumpPage = (pageName) => {
    navigate(pageName); // 跳转到目标路径
  };

  return (
    <div className="home">
      <div className="menu-list">
        {menu.current.map((item) => {
          return (
            <div
              className="menu-item"
              key={item.path}
              onClick={() => jumpPage(item.name)}
            >
              <div style={{ backgroundColor: item.bgColor }} className="icon">
                {item.icon}
              </div>
              <div className="text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
