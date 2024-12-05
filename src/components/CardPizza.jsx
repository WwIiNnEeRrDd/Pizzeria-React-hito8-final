import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { formatter } from '../utils/formatter'

const CardPizza = (props) => {
  return (
    <>
        <Card className='card'>
            <Card.Img className="card-img-top" variant="top" src={props.img} />
            <Card.Body className='text-center'>
                <Card.Title>Pizza {props.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush height-100px">
                <ListGroup.Item className='text-center'>Ingredientes<br></br><br></br>
                <p><i className="fa-solid fa-pizza-slice"></i> {props.ingredients[0]}, {props.ingredients[1]}, {props.ingredients[2]}{props.ingredients[3] ? <span>, {props.ingredients[3]}</span> : ''}</p>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <h1 className='fs-4 text-center'>Precio: ${formatter(props.price)}</h1>
            </Card.Body>
            <Card.Body className='d-flex justify-content-evenly pt-0'>
                <Button variant="light border-black">Ver más <i className="fa-solid fa-eye"></i></Button>
                <Button variant="dark">Añadir 🛒</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default CardPizza