import { Image } from "antd-mobile";
import RICHENG from '../assets/images/richeng.png'
import XUZHI from '../assets/images/xuzhi.png'
import JIUDIAN from '../assets/images/jiudian.png'
import GONGJIAO from '../assets/images/gongjiao.png'
import XINXI from '../assets/images/xinxi.png'
import CANYIN from '../assets/images/canyin.png'
import DAOLAN from '../assets/images/daolan.png'
import TISHI from '../assets/images/wenxintishi.png'
import DIANHUA from '../assets/images/dianhua.png'

export default [
    {
      name: "meetingSchedule",
      icon:  <Image src={RICHENG} />,
      text: "会议日程",
      path: "/meetingSchedule",
      bgColor: "#08c282",
    },
    {
      name: "meetingNotes",
      icon: <Image src={XUZHI} />,
      text: "参会须知",
      path: "/meetingNotes",
      bgColor: "#f720b9",
    },
    {
      name: "hotelIntroduction",
      icon: <Image src={JIUDIAN} />,
      text: "酒店介绍",
      path: "/hotelIntroduction",
      bgColor: "#feb455",
    },
    {
      name: "transportationRoutes",
      icon: <Image src={GONGJIAO} />,
      text: "交通路线",
      path: "/transportationRoutes",
      bgColor: "#5297ff",
    },
    {
      name: "exclusiveInfo",
      icon: <Image src={XINXI} />,
      text: "专属信息",
      path: "/exclusiveInfo",
      bgColor: "#0057da",
    },
    {
      name: "diningInfo",
      icon: <Image src={CANYIN} />,
      text: "餐饮信息",
      path: "/diningInfo",
      bgColor: "#f7756f",
    },
    {
      name: "venueGuide",
      icon: <Image src={DAOLAN} />,
      text: "会场导览",
      path: "/venueGuide",
      bgColor: "#e6bf53",
    },
    {
      name: "warmTips",
      icon: <Image src={TISHI} />,
      text: "温馨提示",
      path: "/warmTips",
      bgColor: "#2dbda8",
    },
    {
      name: "serviceForYou",
      icon: <Image src={DIANHUA} />,
      text: "为您服务",
      path: "/serviceForYou",
      bgColor: "#87cc73",
    },
  ]