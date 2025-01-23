import React, { useContext } from 'react'

import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {

 const { calculateTotal } = useContext(CartContext);

 const token = false;

  return (
    <div className='navbar'>
        <div className='menu'>
            <h2>Pizzeria Mamma Mia</h2>
            <Link to="/" className="btn btn-outline-light me-3">
                <i className="fa-solid fa-pizza-slice "></i> Home
            </Link>
            {token ? 
            (
                <>
                    <Link to="/profile" className="btn btn-outline-light me-3"> 
                        <i className="fa-solid fa-user"></i> Profile
                    </Link>
                    <Link className="btn btn-outline-light me-3"> 
                        <i className="fa-solid fa-lock"></i> Logout
                    </Link>
                </>
            ) : 
            ( 
                <>
                    <Link to="/login" className="btn btn-outline-light me-3"> 
                        <i className="fa-solid fa-key"></i> Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-light me-3"> 
                        <i className="fa-solid fa-key"></i> Register
                    </Link>
                </>
            )}

            
            
        </div>
        <div className='carrito'>
            <Link to="/cart" className="btn btn-outline-light me-3"> 
                🛒Total: ${calculateTotal() || 0}
            </Link>
        </div>
        
        
    </div>
  )
}

export default Navbar