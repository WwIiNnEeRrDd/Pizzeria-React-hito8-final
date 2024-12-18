import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { pizzaCart } from '../utils/pizzas.js'
import { formatter } from '../utils/formatter.js'

const Cart = () => {

    const [pizzaCartTotal, setPizzaCartTotal] = useState(pizzaCart);

    const handleAddCount = (id) => {      
        setPizzaCartTotal((prevCart) => {
            return prevCart.map((cart) => {
                if(cart.id === id){
                    return {...cart, count: cart.count + 1 };
                }else{
                    return cart;
                }
            })
        })
    }

    const handleRestCount = (id) => {
  
        setPizzaCartTotal((prevCart) => {

            return prevCart.map((cart) => {
                if(cart.id === id && cart.count > 0){
                    return {...cart, count: cart.count - 1 };
                }else{
                    return cart
                }
            }).filter((cart) => cart.count > 0);
        })
    }

    const calculateTotal = () => {
        let totalPrice = 0;
        pizzaCartTotal.forEach(cart => {
            totalPrice += cart.price * cart.count;
        });
        return formatter(totalPrice);
    }    

  return (
    <Container className="mt-4">
      <h4 className="mb-4">Detalles del pedido:</h4>
      {pizzaCartTotal.map((cart) => (

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
      ))}

      <Row className="mt-4">
        <Col>
          <h3 className="fw-bold mb-4">Total: ${calculateTotal()}</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="dark" size="lg" className="mb-4">
            Pagar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
