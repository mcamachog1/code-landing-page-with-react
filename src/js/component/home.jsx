import React from "react";
import BarraDeNavegacion from './navbar'
import Carta from './carta'
import Button from 'react-bootstrap/Button';
import '../../styles/home.css'
import '../../styles/index.css'

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<BarraDeNavegacion />
			<div className="contenedor-principal">
				<div className="contenedor-jumbotron">
					<h1>A Warm Welcome!</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate illo illum laborum. Perspiciatis provident laboriosam tempora distinctio porro vitae doloribus at modi, et alias saepe quas labore fugit ea!</p>
					<div className="contenedor-boton-izquierda">					
						<Button variant="primary">Call to action!</Button>
					</div>
				</div>
				<div className="contenedor-cartas">
					<Carta />
					<Carta />
					<Carta />
					<Carta />					
				</div>
			</div>
			<div className="contenedor-pie-de-pagina">
				Copyright &copy; Your Web site 2022
			</div>
		</div>
	);
};

export default Home;
