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

/**
 * APP
 */
function App() {
	const [currentStage, setCurrentStage] = useState(false);
	console.log("App.js ", currentStage);
	return (
		<div className="App">
			<Header title="Tour de France 2024" />
			<section className="stages">
				<StageList
					datas={tourDeFrance2024}
					setCurrent={setCurrentStage}
				/>
				<StageDetails stage={currentStage} />
			</section>
		</div>
	);
}

export default App;
