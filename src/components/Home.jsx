import React, { useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { Col, Row } from 'react-bootstrap'
import { pizzas } from '../utils/pizzas.js'

const Home = () => {


  return (
    <>
        <Header></Header>
        <Row className="d-flex justify-content-evenly m-5">
            {pizzas.map((pizza) => (
                <Col 
                    key={pizza.id} 
                    xs={12} sm={6} md={4} 
                    className="mb-4"
                >
                    <CardPizza 
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                </Col>
            ))}
        </Row>
        
    </>
  )
}

export default Home