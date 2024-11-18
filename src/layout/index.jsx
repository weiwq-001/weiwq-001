import React from "react";
import { Image } from "antd-mobile";
import { Outlet } from "react-router-dom";
import Banner from 'src/assets/images/banner.webp'
import "./index.scss";

export default function Layout() {

  return (
    <div className="layout">
      <div className="banner">
        <Image src={Banner} fit="contain" />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
