import React from 'react'

import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { formatter } from '../utils/formatter';

const Navbar = () => {

 const total = 25000;
 const token = false;

  return (
    <div className='navbar'>
        <div className='menu'>
            <h2>Pizzeria Mamma Mia</h2>
            <Button variant="outline-light"><i className="fa-solid fa-pizza-slice"></i> Home</Button>
            {token ? 
            (
                <>
                <Button variant="outline-light"><i className="fa-solid fa-user"></i> Profile</Button>
                <Button variant="outline-light"><i className="fa-solid fa-lock"></i> Logout</Button>
                </>
            ) : 
            ( 
                <>
                <Button variant="outline-light"><i className="fa-solid fa-key"></i> Login</Button>
                <Button variant="outline-light"><i className="fa-solid fa-key"></i> Register</Button>
                </>
            )}

            
            
        </div>
        <div className='carrito'>
            <Button variant="outline-light"> 🛒Total: ${formatter(total)}</Button>
        </div>
        
        
    </div>
  )
}

export default Navbar