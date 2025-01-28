import React, { useContext } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { formatter } from '../utils/formatter'
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CardPizza = (props) => {

    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddProducts = () => {
        addToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            img: props.img
        });
    }

    const handlePizzaDetails = () => {
        navigate(`/pizza/${props.id}`);
    }

  return (
    <>
        <Card className='card'>
            <Card.Img className="card-img-top" variant="top" src={props.img} />
            <Card.Body className='text-center'>
                <Card.Title>Pizza {props.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush height-100px">
                <ListGroup.Item className='text-center'>Ingredientes<br></br><br></br>
                    <li><i className="fa-solid fa-pizza-slice"></i> {props.ingredients.join(", ")}</li>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <h1 className='fs-4 text-center'>Precio: ${formatter(props.price)}</h1>
            </Card.Body>
            <Card.Body className='d-flex justify-content-evenly pt-0'>
                <Button variant="light border-black" onClick={handlePizzaDetails}>Ver más <i className="fa-solid fa-eye"></i></Button>
                <Button variant="dark" onClick={handleAddProducts}>Añadir 🛒</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default CardPizza