import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../styles/carta.css'
import '../../styles/index.css'

function Carta() {
 
  const mystyle = {
    width: "18rem",
    padding: "5px",
    border: "0px",
  };

  return (
    
    <Card style={mystyle}>
      <div className="contenedor-gris-imagen">
        500 x 325
      </div>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <div className="contenedor-titulo-carta">        
          <Card.Title>Card Title</Card.Title>
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="contenedor-boton-centrado">
          <Button variant="primary">Find Out More!</Button>
        </div>
   
      </Card.Body>
    </Card>
  );
}

export default Carta;