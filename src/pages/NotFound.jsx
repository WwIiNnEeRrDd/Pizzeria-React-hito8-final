import React from 'react'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-4 text-danger">Error 404</h1>
      <p className="lead">Oops... Parece que estás perdido.</p>
      <p>La página que buscas no existe o fue movida.</p>
      <Link to="/">
        <Button variant="outline-primary mb-5">
          <i className="fa-solid fa-arrow-left"></i> Volver al Inicio
        </Button>
      </Link>
    </Container>
  );
}

export default NotFound;
