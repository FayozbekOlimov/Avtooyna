import { lazy } from "react";

// About sections
import AboutOrg from "../pages/About/AboutOrg";
import Compliance from "../pages/About/Compliance";
import Laboratory from "../pages/About/Laboratory";
import Leadership from "../pages/About/Leadership";
import Localization from "../pages/About/Localization";
import Subsidiary from "../pages/About/Subsidiary";
import Vacancies from "../pages/About/Vacancies";
import YouthUnion from "../pages/About/YouthUnion";
import Certificates from "../pages/About/Certificates";

// Contest sections
import ContestRules from "../pages/Contest/ContestRules";
import Contests from "../pages/Contest/Contests";

// Marketing sections
import Quality from "../pages/Marketing/Quality";
import Nomenclature from '../pages/Marketing/Nomenclature';
import Brands from '../pages/Marketing/Brands';
import Sale from '../pages/Marketing/Sale';
import Goods from '../pages/Marketing/Goods';

//PressService sections
import News from '../pages/PressService/News';
import PublicOffer from '../pages/PressService/PublicOffer';
import PhotoGallery from '../pages/PressService/PhotoGallery';
import VideoGallery from '../pages/PressService/VideoGallery';

const Main = lazy(() => import("../pages/Main"));
const About = lazy(() => import("../pages/About"));
const Contest = lazy(() => import("../pages/Contest"));
const Marketing = lazy(() => import("../pages/Marketing"));
const InsideContest = lazy(() => import("../pages/Contest/InsideContest"));
const PressService = lazy(() => import("../pages/PressService"));
const InsideNews = lazy(() => import("../pages/PressService/InsideNews"));


export const routes = [
  {
    index: true,
    path: "",
    element: <Main />,
  },
  {
    path: "about-us",
    element: <About />,
    children: [
      {
        index: true,
        path: "about-org",
        element: <AboutOrg />,
      },
      {
        path: "subsidiary",
        element: <Subsidiary />,
      },
      {
        path: "leadership",
        element: <Leadership />,
      },
      {
        path: "laboratory",
        element: <Laboratory />,
      },
      {
        path: "localization",
        element: <Localization />,
      },
      {
        path: "certificates",
        element: <Certificates />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
      {
        path: "compliance",
        element: <Compliance />,
      },
      {
        path: "youth-union",
        element: <YouthUnion />,
      },
    ],
  },
  {
    path: "contest-announcement",
    element: <Contest />,
    children: [
      {
        index: true,
        path: "contest-rules",
        element: <ContestRules />,
      },
      {
        path: "contests",
        element: <Contests />,
      },
    ],
  },
  {
    path: "marketing",
    element: <Marketing />,
    children: [
      {
        index: true,
        path: "quality",
        element: <Quality />
      },
      {
        path: "nomenclature",
        element: <Nomenclature />
      },
      {
        path: "brands",
        element: <Brands />
      },
      {
        path: "sale",
        element: <Sale />
      },
      {
        path: "goods",
        element: <Goods />
      },
    ]
  },
  {
    path: "contest-announcement-detail/:contest_id",
    element: <InsideContest />
  },
  {
    path: "press-service",
    element: <PressService />,
    children: [
      {
        index: true,
        path: "news",
        element: <News />
      },
      {
        path: "public-offer",
        element: <PublicOffer />
      },
      {
        path: "photogallery",
        element: <PhotoGallery />
      },
      {
        path: "videogallery",
        element: <VideoGallery />
      },

    ]
  },
  {
    path: "news-announcement-detail/:news_id",
    element: <InsideNews />
  },
];
