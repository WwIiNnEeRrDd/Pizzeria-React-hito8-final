import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(!email || !password ){
            alert("All camps are required")    
        }else{ 
            if(password.length < 6){
                alert("Password must be at least 6 characters")
            }else{
                alert("Authentication Succesful")
            }
        }
        
    }

  return (
    <div className='form-container'>
        <h1>Login</h1>
        <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleLogin}>
                Login
            </Button>
        </Form>
    </div>
  )
}

export default Login