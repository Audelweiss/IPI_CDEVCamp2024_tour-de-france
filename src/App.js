//imports fonctionnels
import { useState } from "react";
//css
import "./App.css";
//datas
import { tourDeFrance2024 } from "./data/stage.js";
//composants
import Header from "./components/header/header.js";
import StageList from "./components/_molecules/stageList";
import StageDetails from "./components/_molecules/stageDetails/index.js";
import SearchBar from "./components/_atoms/fields/searchbar.js";
import Checkbox from "./components/_atoms/fields/checkbox.js";

/**
 * APP
 */
function App() {
	const [currentStage, setCurrentStage] = useState(false);
	const [list, setList] = useState(tourDeFrance2024);

	const handleChangeDate = (coming) => {
		console.log("upcoming ", coming);
		const today = new Date();
		if (coming) {
			const newList = tourDeFrance2024.filter(
				(stage) => new Date(stage.date) > today
			);
			setList(newList);
		} else {
			setList(tourDeFrance2024);
		}
	};
	return (
		<div className="App">
			<Header title="Tour de France 2024">
				<SearchBar
					placeholder="Recherche par ville"
					list={{ tourDeFrance2024, setList }}
				/>
				<Checkbox
					label={"Voir les étapes à venir"}
					handleChange={handleChangeDate}
				/>
			</Header>
			<section className="stages">
				<StageList datas={list} setCurrent={setCurrentStage} />
				<StageDetails stage={currentStage} />
			</section>
		</div>
	);
}

export default App;
