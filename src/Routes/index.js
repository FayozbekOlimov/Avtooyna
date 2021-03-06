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
import ContestRule from "../pages/Contest/ContestRule";
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
import InsideAbout from "../pages/Main/InsideAbout";

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
    path: "about-us/:page_url",
    element: <InsideAbout />
  },
  {
    path: "about-us",
    element: <About />,
    children: [
      {
        index: true,
        path: "babout",
        element: <AboutOrg />,
      },
      {
        path: "bkorxona",
        element: <Subsidiary />,
      },
      {
        path: "brahbar",
        element: <Leadership />,
      },
      {
        path: "blabaratoriya",
        element: <Laboratory />,
      },
      {
        path: "bmahalliy",
        element: <Localization />,
      },
      {
        path: "bsertifikat",
        element: <Certificates />,
      },
      {
        path: "bish",
        element: <Vacancies />,
      },
      {
        path: "bmuvofiq",
        element: <Compliance />,
      },
      {
        path: "byoshlar",
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
        path: "tnizom",
        element: <ContestRule />,
      },
      {
        path: "ttanlov",
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
        path: "msifat",
        element: <Quality />
      },
      {
        path: "mnomenklatura",
        element: <Nomenclature />
      },
      {
        path: "mmarka",
        element: <Brands />
      },
      {
        path: "msotish",
        element: <Sale />
      },
      {
        path: "mxalq",
        element: <Goods />
      },
    ]
  },
  {
    path: "contests/:contest_id",
    element: <InsideContest />
  },
  {
    path: "press-service",
    element: <PressService />,
    children: [
      {
        index: true,
        path: "yanilik",
        element: <News />
      },
      {
        path: "oferta",
        element: <PublicOffer />
      },
      {
        path: "foto",
        element: <PhotoGallery />
      },
      {
        path: "video",
        element: <VideoGallery />
      },

    ]
  },
  {
    path: "news/:news_id",
    element: <InsideNews />
  },
];
