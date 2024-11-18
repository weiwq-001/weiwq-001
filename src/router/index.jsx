import Layout from "../layout/index.jsx";
import Home from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import MeetingSchedule from "../pages/meetingSchedule/index.jsx";
import MeetingNotes from "../pages/meetingNotes/index.jsx";
import HotelIntroduction from "../pages/hotelIntroduction/index.jsx";
import TransportationRoutes from "../pages/transportationRoutes/index.jsx";
import ExclusiveInfo from "../pages/exclusiveInfo/index.jsx";
import DiningInfo from "../pages/diningInfo/index.jsx";
import VenueGuide from "../pages/venueGuide/index.jsx";
import WarmTips from "../pages/warmTips/index.jsx";
import ServiceForYou from "../pages/serviceForYou/index.jsx";
import InvitationLetter from "../pages/invitationLetter";

const Router = [
  {
    path: "/",
    element: <Layout />, // 根组件
    children: [
      {
        path: "", // 默认子路由
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "meetingSchedule",
        element: <MeetingSchedule />,
      },
      {
        path: "meetingNotes",
        element: <MeetingNotes />,
      },
      {
        path: "hotelIntroduction",
        element: <HotelIntroduction />,
      },
      {
        path: "transportationRoutes",
        element: <TransportationRoutes />,
      },
      {
        path: "exclusiveInfo",
        element: <ExclusiveInfo />,
      },
      {
        path: "diningInfo",
        element: <DiningInfo />,
      },
      {
        path: "venueGuide",
        element: <VenueGuide />,
      },
      {
        path: "warmTips",
        element: <WarmTips />,
      },
      {
        path: "serviceForYou",
        element: <ServiceForYou />,
      },
    ],
  },
  {
    path: "invitationLetter",
    element: <InvitationLetter />,
  },
];

export default Router;
