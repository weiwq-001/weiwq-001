import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import Api from "src/apis";
import MENULIST from "../../constant/menu";
import "./index.scss";

export default function Home() {
  const navigate = useNavigate();
  const menu = useRef(MENULIST);
  const { run, loading, data, error } = useRequest(() =>
    Api.fetchCode({ method: "post" , data: { } })
  );

  const jumpPage = (pageName) => {
    navigate(pageName); // 跳转到目标路径
  };

  return (
    <div className="home">
      <div className="long-btn">
        <span>点击切换成人营养客户大会</span>
        <span className="icon"></span>
      </div>
      <h1>
        请求接口{JSON.stringify(data)}
        {error?.message}
      </h1>
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
