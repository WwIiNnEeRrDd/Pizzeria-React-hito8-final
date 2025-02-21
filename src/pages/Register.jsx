import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../assets/styles.css';
import { UserContext } from '../context/UserContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { login } = useContext(UserContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            alert("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            alert("The password and the confirmed password must be the same");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        alert("Authentication Successful");
        await login(email, password);
    };

    return (
        <div className='form-container'>
            <h1>Register</h1>
            <Form className='form' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={handleEmail} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={handlePassword} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={handleConfirmPassword} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
