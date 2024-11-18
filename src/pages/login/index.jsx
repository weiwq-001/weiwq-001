import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Toast } from "antd-mobile";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import Api from "src/apis";
import SmsVerification from "./smsVerification";
import Phone from "./phone";
import "./index.scss";

export default function Login() {
  const navigate = useNavigate();
  const form = useRef(null);
  const toastRef = useRef();
  const [errorMsg, setErrorMsg] = useState();
  const { run, loading, data, error } = useRequest(Api.test, {
    manual: true,
  });

  const validatePhone = (phone) => {
    // 校验手机号
    if (!phone) {
      setErrorMsg("手机号不能为空");
      return false;
    }
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setErrorMsg("手机号格式不正确");
      return false;
    }

    setErrorMsg();
    return true;
  };

  const submitForm = async () => {
    // 获取表单数据
    const values = form.current.getFieldsValue();
    // 校验手机号
    if (!validatePhone(values.phone)) {
      return false;
    }
    // 校验验证码
    if (!values.verificationCode) {
      setErrorMsg("验证码不能为空");
      return false;
    }

    // 提交表单api
    run({
      method: "GET",
      params: {
        key: "9bf00a79af76b984e7edce54b24d30ba",
      },
    });
  };

  // 请求处理
  useEffect(() => {
    if (loading) {
      toastRef.current = Toast.show({
        content: "loading...",
        duration: 0,
        position: "top",
      });
    } else {
      toastRef.current?.close();
    }

    if (data) {
      navigate('/'); // 跳转到目标路径
    }

    if (error) {
      toastRef.current = Toast.show({
        content: error,
        duration: 0,
        position: "top",
      });
    }
  }, [data, error, loading]);

  return (
    <div className="login">
      <Form className="form" ref={form} layout="horizontal" hasFeedback={false}>
        <Form.Item name="phone">
          <Phone />
        </Form.Item>
        {/* <Form.Item
          name="verificationCode"
          label="短信验证码"
          extra={
            seconds60 === 0 ? (
              <Button size="mini" color="primary" onClick={sendMessage}>
                获取短信验证码
              </Button>
            ) : (
              <Button size="mini" color="primary">
                {seconds60}秒后重新发送
              </Button>
            )
          }
        >
          <Input placeholder="请输入验证码" type="number" />
        </Form.Item> */}
        <Form.Item name="verificationCode">
          <SmsVerification />
        </Form.Item>
      </Form>
      {Boolean(errorMsg) && <div className="error-msg">{errorMsg}</div>}
      <div className="form-footer">
        <Button
          block
          className="submit-button"
          type="submit"
          onClick={submitForm}
        >
          登录
        </Button>
      </div>
    </div>
  );
}