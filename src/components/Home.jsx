import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
        <Header></Header>
        <Row className='d-flex justify-content-evenly m-5'>
            <Col>
                <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                />
            </Col>
            <Col>
                <CardPizza
                    name="Española"
                    price={6950}
                    ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQjx4oD8CwzwH8qS7M_rhTtpdK5f4L_BE-Q&s"
                />
            </Col>
            <Col>
                <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano"]}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s"
                />
            </Col>
        </Row>
        
    </>
  )
}

export default Home