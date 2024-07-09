import "./stageList.css";
import Stage from "../../_atoms/stage";

function StageList({ datas, setCurrent }) {
	return (
		<ul className="stage-list">
			{datas.map((stage, index) => (
				<li key={index} onClick={() => setCurrent(stage)}>
					<Stage {...stage} />
				</li>
			))}
		</ul>
	);
}
export default StageList;
