import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { pizzaCart } from '../utils/pizzas.js'
import { formatter } from '../utils/formatter.js'
import { CartContext } from "../context/CartContext.jsx";
import { UserContext } from "../context/UserContext.jsx";

const Cart = () => {

  const { pizzaCartTotal, handleAddCount, handleRestCount, calculateTotal } = useContext(CartContext);
  const { userToken } = useContext(UserContext);

  const handleCheckout = async () => {
    if (!userToken) return alert("Debes iniciar sesión para realizar la compra");

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ pizzaCartTotal }),
      });

      if (res.ok) {
        alert("Compra realizada con éxito");
      } else {
        alert("Hubo un problema con la compra");
      }
    } catch (error) {
      console.error("Error en checkout:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-4">Detalles del pedido:</h4>

      {pizzaCartTotal.length > 0 ? pizzaCartTotal.map((cart) => (

      <Row
        key={cart.id}
        className="align-items-center mb-3"
        style={{paddingBottom: "10px" }}
      >

        <Col xs={2} className="d-flex">
          <img
            src={cart.img}
            alt={cart.name}
            className="img-fluid rounded"
            style={{ maxHeight: "60px", width: "auto" }}
          />
        </Col>

        <Col xs={4}>
          <span className="fw-semibold">{cart.name}</span>
        </Col>

        <Col xs={2} className="text-center">
          <span>${formatter(cart.price*cart.count)}</span>
        </Col>

        <Col xs={4} className="d-flex align-items-center justify-content-end">
          <Button
            variant="outline-danger"
            size="sm"
            className="me-2 fw-bold border-2"
            onClick={() => handleRestCount(cart.id)}
          >
            -
          </Button>
          <span className="fw-semibold mx-2">{cart.count}</span>
          <Button
            variant="outline-primary"
            size="sm"
            className="fw-bold border-2"
            onClick={() => handleAddCount(cart.id)}
          >
            +
          </Button>
        </Col>
      </Row>
      )) : (
        <h4 className="mb-4"> No hay pedidos</h4>
      )}
      

      <Row className="mt-4">
        <Col>
          <h3 className="fw-bold mb-4">Total: ${calculateTotal()}</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="dark" size="lg" onClick={handleCheckout} className={`mb-4 ${userToken && pizzaCartTotal.length > 0 ? '' : 'disabled'}`}>
            Pagar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
