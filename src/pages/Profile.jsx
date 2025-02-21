import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { UserContext } from "../context/UserContext";

function Profile() {

    const { userEmail, getProfile, logout } = useContext(UserContext);
  
    useEffect(() => {
      getProfile();
    }, []);

  return (
    <Card className="text-center mx-auto mt-5 mb-5" style={{ maxWidth: "500px" }}>
      <Card.Header className="bg-primary text-white">Perfil</Card.Header>
      <Card.Body>
        <Card.Title>Bienvenido</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {userEmail || "Cargando..."}
        </Card.Text>
        <Button variant="danger" onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
