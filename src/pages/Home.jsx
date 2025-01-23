import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
import { Col, Row } from 'react-bootstrap'
import { pizzas } from '../utils/pizzas.js'

const Home = () => {

    const [pizzaList, setPizzaList] = useState([]);

    useEffect(() => {
      async function getData() {
        const res = await fetch('http://localhost:5000/api/pizzas');
        const data = await res.json();

        setPizzaList(data)
        
      }

      getData();
    
    },[])
    

  return (
    <>
        <Header></Header>
        <Row className="d-flex justify-content-evenly m-5">
            {pizzaList.map((pizza) => (
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
                        id={pizza.id}
                    />
                </Col>
            ))}
        </Row>
        
    </>
  )
}

export default Home