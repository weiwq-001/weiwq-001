import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { UserOutline, UnorderedListOutline } from "antd-mobile-icons";
import { SpinLoading } from "antd-mobile";
import Api from "src/apis";
import "./index.scss";

export default function ExclusiveInfo() {
  const [userInfo, setUserInfo] = useState({});
  const [qrValue, setQrValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const openId = localStorage.getItem("openId");

    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        const result = await Api.getUserInfoByOpenId({
          method: "GET",
          params: {
            openId: openId || "",
          },
        });

        if (result.data.status === 200) {
          setUserInfo(result.data?.data);
          setQrValue(result.data?.data?.gateMachineId);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="exclusiveInfo">
      <div className="container">
        <div className="title">个人信息</div>
        <div className="content">
          <div className="qr-code-view">
            <div id="QR-code" style={{ width: "120px", height: "120px" }}>
              {loading ? (
                <SpinLoading color="primary" />
              ) : !qrValue ? (
                <span>请求失败</span>
              ) : (
                <QRCodeCanvas value={qrValue} size={120} />
              )}
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
                <span>{userInfo?.loginName || "-"}</span>
              </div>
            </div>

            <div className="field" style={{ marginTop: "12px" }}>
              <div className="label">
                <UnorderedListOutline />
                <span>编号</span>
              </div>
              <div className="value">
                <span>{userInfo?.gateMachineId || "-"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
