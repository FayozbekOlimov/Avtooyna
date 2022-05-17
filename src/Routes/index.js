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
// import Sifat from '../pages/Marketing/Sifat';
import Sifat from "../pages/Marketing/Quality";

const Main = lazy(() => import("../pages/Main"));
const About = lazy(() => import("../pages/About"));
const Marketing = lazy(() => import("../pages/Marketing"));



export const routes = [
	{
		index: true,
		path: "",
		element: <Main />
	},
	{
		path: "about-us",
		element: <About />,
		children: [
			{
				index: true,
				path: "",
				element: <AboutOrg />
			},
			{
				path: "subsidiary",
				element: <Subsidiary />
			},
			{
				path: "leadership",
				element: <Leadership />
			},
			{
				path: "laboratory",
				element: <Laboratory />
			},
			{
				path: "localization",
				element: <Localization />
			},
			{
				path: "certificates",
				element: <Certificates />
			},
			{
				path: "vacancies",
				element: <Vacancies />
			},
			{
				path: "compliance",
				element: <Compliance />
			},
			{
				path: "youth-union",
				element: <YouthUnion />
			}
		]
	},
	{
		path: "Marketing",
		element: <Marketing />,	
		children: [
			{
				index: true,
				path: "",
				element: <Sifat />
			},
			// {
			// 	path: "subsidiary",
			// 	element: <Subsidiary />
			// },
		
		]
	},
];