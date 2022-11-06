import React from "react";
import BarraDeNavegacion from './navbar'
import Carta from './carta'
import Button from 'react-bootstrap/Button';
import '../../styles/home.css'
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<BarraDeNavegacion />
			<div className="contenedor-principal">
				<div className="contenedor-jumbotron">
					<h1>Titulo</h1>
					<p>Parrafo</p>
					<Button variant="primary">Call to action!</Button>
				</div>
				<div className="contenedor-cartas">
					<Carta />
					<Carta />
					<Carta />
					<Carta />					
				</div>
			</div>
			<div className="contenedor-pie-de-pagina">
				footer
			</div>
		</div>
	);
};

export default Home;
