import { NavLink } from "react-router-dom";
import "./header.css";
//composants

function Header({ title, children }) {
	return (
		<>
			<nav>
				<NavLink to="/">Liste des étapes</NavLink>
				<NavLink to="/about">À propos du Tour</NavLink>
			</nav>
			<header>
				<h1>{title}</h1>
				{children}
			</header>
		</>
	);
}
export default Header;
