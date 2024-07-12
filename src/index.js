import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Stage from "./pages/Stage";
import Page404 from "./pages/404";
import Header from "./components/header/header";
import Schools from "./pages/Schools";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home h1="Tour de france 2024" />,
	},
	{
		path: "/about",
		element: <Header title="A propos du tour" />,
	},
	{
		path: "/stage/:id",
		element: <Stage h1="Étape" />,
		errorElement: <Page404 />,
	},
	{
		path: "/schools",
		element: <Schools />,
		errorElement: <Page404 />,
	},
	{
		path: "*",
		element: <Page404 />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
