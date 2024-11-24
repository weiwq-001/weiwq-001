import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { UserOutline, UnorderedListOutline } from "antd-mobile-icons";
import "./index.scss";

export default function ExclusiveInfo() {
  const [qrValue, setQrValue] = useState("0123");

  return (
    <div className="exclusiveInfo">
      <div className="container">
        <div className="title">个人信息</div>
        <div className="content">
          <div className="qr-code-view">
            <div id="QR-code" style={{ width: "120px", height: "120px" }}>
              <QRCodeCanvas value={qrValue} size={120} />
            </div>
            <div className="text">签到二维码，请妥善保存</div>
          </div>
          <div className="split"></div>
          <div className="info">
            <div className="field">
              <div className="label">
                <UserOutline />
                <span>姓名</span>
              </div>
              <div className="value">
                <span>张三</span>
              </div>
            </div>

            <div className="field" style={{ marginTop: "12px" }}>
              <div className="label">
                <UnorderedListOutline />
                <span>编号</span>
              </div>
              <div className="value">
                <span>123456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
