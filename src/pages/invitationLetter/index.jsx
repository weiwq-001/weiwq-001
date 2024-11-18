import React from "react";
import { motion } from "framer-motion";
import { Image } from "antd-mobile";
import Logo from "../../assets/react.svg";
import "./index.scss";

export default function InvitationLetter() {
  return (
    <div className="invitationLetter">
      <div className="page page1">
        <div className="logo">
          <Image src={Logo} width={64} height={64} fit="cover" />
        </div>
        <div className="meeting-name">伊利集团奶酪事业部2025年客户大会</div>
        {/* 从左向右平移，居中后向右偏一个文字距离 */}
        <motion.div
          className="publicity-title1"
          animate={{
            x: "calc(-50vw + 80px - 16px)",
          }}
          // spring: 抖动
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        >
          聚力共进化
        </motion.div>
        {/* 从右向左平移，居中后向左偏一个文字距离 */}
        <motion.div
          className="publicity-title2"
          animate={{
            x: "calc(50vw - 80px + 16px)",
          }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        >
          同心创未来
        </motion.div>
        {/* 从上向下平移, 水平垂直居中*/}
        <motion.div
          className="page-title"
          initial={{
            x: "-50%",
          }}
          animate={{
            x: "-50%",
            y: "calc(50vh - 50%)",
          }}
          transition={{ duration: 0.7 }}
        >
          邀请函
        </motion.div>
        {/* 从下向上平移, 在标题下*/}
        <motion.div
          className="triangle"
          initial={{
            x: "-50%",
          }}
          animate={{
            x: "-50%",
            y: "calc(-50vh + 100% + 50px)",
          }}
          transition={{ duration: 0.7 }}
        >
          邀请函
        </motion.div>
        {/* 从左向右移*/}
        <motion.div
          className="small-ball"
          animate={{
            x: "20vw",
          }}
          transition={{ duration: 0.7 }}
        >
          邀
        </motion.div>
        {/* 从右向左移*/}
        <motion.div
          className="big-ball"
          animate={{
            x: "-20vw",
          }}
          transition={{ duration: 0.7 }}
        >
          邀
        </motion.div>
        <div className="footer">
          <div className="region-cn">中国三亚</div>
          <div className="region-en">SANYA CHINE</div>
          <div className="line">---</div>
          <div className="date-cn">2024年12月20日</div>
          <div className="date-en">20 Dec.2024</div>
        </div>
      </div>
      <div className="page page2">
        <div className="logo">
          <Image src={Logo} width={64} height={64} fit="cover" />
        </div>
        <div className="meeting-name">伊利集团奶酪事业部2025年客户大会</div>
      </div>
      <div className="page page5">
        <div className="logo">
          <Image src={Logo} width={64} height={64} fit="cover" />
        </div>
        <div className="slogan">
          聚力共进化 同心创未来
        </div>
        <div className="meeting-name">伊利集团奶酪事业部2025年客户大会</div>
         {/* 从左向右平移，居中后向右偏一个文字距离 */}
         <motion.div
          className="publicity-title1"
          animate={{
            x: "calc(-50vw + 80px - 16px)",
          }}
          // spring: 抖动
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        >
          共赴三亚
        </motion.div>
        {/* 从右向左平移，居中后向左偏一个文字距离 */}
        <motion.div
          className="publicity-title2"
          animate={{
            x: "calc(50vw - 80px + 16px)",
          }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        >
          再续辉煌
        </motion.div>
        {/* 从下向上平移, 在标题下*/}
        <motion.div
          className="triangle"
          initial={{
            x: "-50%",
          }}
          animate={{
            x: "-50%",
            y: "calc(-50vh + 100% + 50px)",
          }}
          transition={{ duration: 0.7 }}
        >
          三角形
        </motion.div>
        {/* 从左向右移*/}
        <motion.div
          className="small-ball"
          animate={{
            x: "20vw",
          }}
          transition={{ duration: 0.7 }}
        >
          邀
        </motion.div>
        {/* 从右向左移*/}
        <motion.div
          className="big-ball"
          animate={{
            x: "-20vw",
          }}
          transition={{ duration: 0.7 }}
        >
          邀
        </motion.div>
        <div className="footer">
          <div className="region-cn">中国三亚</div>
          <div className="region-en">SANYA CHINE</div>
          <div className="line">---</div>
          <div className="date-cn">2024年12月20日</div>
          <div className="date-en">20 Dec.2024</div>
        </div>
      </div>
    </div>
  );
}
