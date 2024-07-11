import { useRouteError, Link } from "react-router-dom";

function Page404() {
	let error = useRouteError();
	console.error(error);
	return (
		<div>
			OUPS ! cette page n'existe pas. <br />
			<Link to="/">Revenir à l'accueil</Link>
		</div>
	);
}
export default Page404;
