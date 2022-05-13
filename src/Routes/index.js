import { lazy } from "react";
const Main = lazy(() => import("../pages/Main"));


export const routes = [
	{
		index: true,
		path: "",
		element: <Main />
	}
];