import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../styles/carta.css'

function Carta() {
  return (
    <Card style={{ width: '18rem' }}>
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
        <div className="contenedor-boton-carta">
          <Button variant="primary">Go somewhere</Button>
        </div>
   
      </Card.Body>
    </Card>
  );
}

export default Carta;