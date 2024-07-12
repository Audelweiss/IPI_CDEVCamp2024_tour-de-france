import Header from "../components/header/header";
import { socket } from "../socket";
import { useState, useEffect } from "react";

const datas = `	{
		"nom": "Audrey's School",
		"date_creation": "2017-11-01",
		"adresse": "Route de la montagne",
		"code_postal": "05200",
		"ville": "Crots",
		"id_domaine": "1"
	}`;

function Schools() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	console.log(isConnected);

	socket.emit("user", "Je suis un nouvel utilisateur");

	useEffect(() => {
		fetch("http://localhost:8000/ecoles", {
			method: "POST",
			body: datas,
			headers: new Headers({ "content-type": "application/json" }),
		});

		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect() {
			setIsConnected(false);
		}

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("signup", (datas) => console.log(datas));
	}, []);
	return (
		<>
			<h1>Liste des écoles</h1>
			<p>Connecté au socket.io : {isConnected ? "oui" : "non"}</p>
		</>
	);
}
export default Schools;
