import React, { useState } from "react";
import { Button, Input } from "antd-mobile";
import { KoubeiOutline } from "antd-mobile-icons";
import "./index.scss";

function SmsVerification(props) {
  const { id, value, onChange, sendVerificationCodeFn } = props;
  const [seconds60, setSeconds60] = useState(0);

  const sendMessage = async () => {
    try {
      // 发送验证码
      await sendVerificationCodeFn?.();

      // 开启倒计时
      setSeconds60(2);
      // 倒计时
      const timer = setInterval(() => {
        setSeconds60((seconds60) => {
          if (seconds60 === 0) {
            clearInterval(timer);
            return 0;
          }

          return seconds60 - 1;
        });
      }, 1000);
    } catch (error) {
      console.log("🚀 ~ sendMessage ~ error:", error);
    }
  };

  const triggerValue = (changedValue) => {
    onChange?.(changedValue);
  };

  return (
    <div className="sms-verification">
      <div className="label">
        <KoubeiOutline color="#fff"/>
      </div>
      <div className="value">
        <Input
          className="input"
          placeholder="请输入验证码"
          type="number"
          value={value?.[id]}
          onChange={triggerValue}
        />
        {seconds60 === 0 ? (
          <Button
            className="button"
            size="mini"
            color="primary"
            onClick={sendMessage}
          >
            获取短信验证码
          </Button>
        ) : (
          <Button className="button disabled" size="mini" color="primary">
            {seconds60}秒后重新发送
          </Button>
        )}
      </div>
    </div>
  );
}

export default SmsVerification;
