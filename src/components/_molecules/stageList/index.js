import "./stageList.css";
import Stage from "../../_atoms/stage";

function StageList({ datas, setCurrent }) {
	return (
		<>
			{datas.length > 0 ? (
				<ul className="stage-list">
					{datas.map((stage, index) => (
						<li key={index} onClick={() => setCurrent(stage)}>
							<Stage {...stage} />
						</li>
					))}
				</ul>
			) : (
				<p>Il n'y a pas de ville qui correspond à la recherche. </p>
			)}
		</>
	);
}
export default StageList;
