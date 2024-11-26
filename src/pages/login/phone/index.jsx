import React, { useState } from "react";
import { Button, Input } from "antd-mobile";
import { PhonebookOutline } from "antd-mobile-icons";
import "./index.scss";

function SmsVerification(props) {
  const { id, value, onChange } = props;

  const triggerValue = (changedValue) => {
    onChange?.(changedValue);
  };

  return (
    <div className="phone">
      <div className="label">
        <PhonebookOutline color="#fff"/>
      </div>
      <div className="value">
        <Input
          placeholder="请输入手机号"
          type="number"
          value={value?.[id]}
          onChange={triggerValue}
        />
      </div>
    </div>
  );
}

export default SmsVerification;
