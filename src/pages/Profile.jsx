import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Profile() {
  return (
    <Card className="text-center mx-auto mt-5 mb-5" style={{ maxWidth: "500px" }}>
      <Card.Header className="bg-primary text-white">Perfil</Card.Header>
      <Card.Body>
        <Card.Title>Bienvenido</Card.Title>
        <Card.Text>
          <strong>Email:</strong> exampleEstatico@gmail.com
        </Card.Text>
        <Button variant="danger">
          <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
