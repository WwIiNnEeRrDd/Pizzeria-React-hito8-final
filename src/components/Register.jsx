import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../assets/styles.css';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(!email || !password || !confirmPassword){
            alert("All camps are required")    
        }else{
            if(password != confirmPassword){
                alert("The password and the confirmed password must be the same")      
            }else{
                if(password.length < 6){
                    alert("Password must be at least 6 characters")
                }else{
                    alert("Authentication Succesful")
                }
            }
            
        }
        
    }
    
  return (
    <div className='form-container'>
        <h1>Register</h1>
        <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleRegister}>
                Register
            </Button>
        </Form>
    </div>
  )
}

export default Register