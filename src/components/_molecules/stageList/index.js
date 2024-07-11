import "./stageList.css";
import Stage from "../../_atoms/stage";
import { Link } from "react-router-dom";

function StageList({ datas, setCurrent }) {
	return (
		<>
			{datas.length > 0 ? (
				<ul className="stage-list">
					{datas.map((stage, index) => (
						<li key={index}>
							<Link to={`/stage/${index}`}>
								<Stage {...stage} />
							</Link>
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
