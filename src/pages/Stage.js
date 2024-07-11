//imports fonctionnels
import { useState } from "react";
import { useParams } from "react-router-dom";
//css
import "./Home.css";
//datas
import { tourDeFrance2024 } from "../data/stage.js";
//composants
import Header from "../components/header/header.js";
import StageDetails from "../components/_molecules/stageDetails/index.js";

/**
 * APP
 */
function Stage({ h1 }) {
	const { id } = useParams();
	try {
		const stage = tourDeFrance2024[id];

		return (
			<div className="App">
				<Header
					title={
						h1 +
						" n°" +
						(parseInt(id) + 1) +
						" au départ de " +
						stage.start
					}
				></Header>
				<StageDetails stage={stage} />
			</div>
		);
	} catch (e) {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
}

export default Stage;
