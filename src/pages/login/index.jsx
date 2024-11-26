import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Toast } from "antd-mobile";
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
  const { openId } = useParams();

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

    let result;
    try {
      // 发送验证码
      result = await Api.login({
        method: "GET",
        params: {
          phone: values.phone,
          openId: openId || "aaazzzz",
          verificationCode: values.verificationCode,
        },
      });

      if (data.data.status === 200) {
        // 存储openId
        localStorage.setItem("openId", openId);
        toastRef.current?.close();
        navigate("/"); // 跳转到目标路径
      } else {
        setErrorMsg(result?.message);
        toastRef.current = Toast.show({
          content: result?.message,
          duration: 1500,
          position: "top",
        });
        throw new Error(result?.message);
      }
    } catch (error) {
      setErrorMsg(error?.message);
      toastRef.current = Toast.show({
        content: error?.message,
        duration: 1500,
        position: "top",
      });
      throw new Error(error?.message);
    }
  };

  const sendVerificationCodeFn = async () => {
    // 获取表单数据
    const values = form.current.getFieldsValue();

    // 校验手机号
    if (!validatePhone(values.phone)) {
      throw new Error(errorMsg);
    }

    toastRef.current = Toast.show({
      content: "loading...",
      duration: 0,
      position: "top",
    });

    let result;
    try {
      // 发送验证码
      result = await Api.getVerificationCode({
        method: "GET",
        params: {
          phone: values.phone,
        },
      });

      if (false) {
        toastRef.current?.close();
        navigate("/"); // 跳转到目标路径
      } else {
        setErrorMsg(result?.message);
        toastRef.current = Toast.show({
          content: result?.message,
          duration: 1500,
          position: "top",
        });
        throw new Error(result?.message);
      }
    } catch (error) {
      setErrorMsg(error?.message);
      toastRef.current = Toast.show({
        content: error?.message,
        duration: 1500,
        position: "top",
      });
      throw new Error(error?.message);
    }
  };

  useEffect(() => {
    const validOpenId = async () => {
      // 发送验证码
      const result = await Api.validOpenId({
        method: "GET",
        params: {
          openId: openId,
        },
      });

      // 返回 true 表示验证通过
      if (result?.data?.status === 200) {
        if (result?.data?.data) {
          const openId = result?.data?.data?.openId;
          // 存储openId
          localStorage.setItem("openId", openId);
          navigate("/"); // 跳转到目标路径
          return true;
        }
      } else {
        const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7ba069fa574a949e&redirect_uri=http://kkls.zaidaxue.com/api/wx/bindPhone&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
        window.open(url, "_self");
      }
    };

    validOpenId();
  }, []);

  return (
    <div className="login">
      <Form className="form" ref={form} layout="horizontal" hasFeedback={false}>
        <Form.Item name="phone">
          <Phone />
        </Form.Item>
        <Form.Item name="verificationCode">
          <SmsVerification sendVerificationCodeFn={sendVerificationCodeFn} />
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
