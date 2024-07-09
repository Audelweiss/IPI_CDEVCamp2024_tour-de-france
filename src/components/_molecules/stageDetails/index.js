import "./stageDetails.css";

function StageDetails({ stage }) {
	console.log("StageDetails ", stage);
	let formatDate = new Date(stage.date);
	formatDate = formatDate.toLocaleDateString("fr-FR", {
		month: "long",
		year: "numeric",
		day: "2-digit",
	});
	return (
		<aside className="stage-details">
			<h3>Détail de l'étape</h3>
			{stage === false ? (
				<p>Cliquez sur une étape pour en voir le détail.</p>
			) : (
				<ul>
					<li>
						Numéro : <b>{stage.stageName}</b>
					</li>
					<li>
						Date : {formatDate}
						<hr />
					</li>
					<li>Départ : {stage.start}</li>
					<li>
						Arrivée : {stage.finish}
						<hr />
					</li>
					<li>Dénivelé : {stage.elevationGain}m</li>
					<li>Kilomètres : {stage.distanceKm}km</li>
				</ul>
			)}
		</aside>
	);
}
export default StageDetails;
