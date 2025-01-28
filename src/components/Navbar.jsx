import React, { useContext } from 'react'

import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    const { calculateTotal } = useContext(CartContext);
    const { logout, userToken } = useContext(UserContext);
  
    const css = ({ isActive }) => `btn btn-outline-light me-3 ${isActive ? 'press' : ''}`

    return (
      <div className="navbar">
        <div className="menu">
          <h2>Pizzeria Mamma Mia</h2>
          <NavLink
            to="/"
            className={css}
          >
            <i className="fa-solid fa-pizza-slice"></i> Home
          </NavLink>
  
          {userToken ? (
            <>
                <NavLink
                    to="/profile"
                    className={css}
                >
                    <i className="fa-solid fa-user"></i> Profile
                </NavLink>
                <Button variant="outline-light" onClick={logout}>
                    <i className="fa-solid fa-lock"></i> Logout
                </Button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={css}
              >
                <i className="fa-solid fa-key"></i> Login
              </NavLink>
              <NavLink
                to="/register"
                className={css}
              >
                <i className="fa-solid fa-key"></i> Register
              </NavLink>
            </>
          )}
        </div>
        <div className="carrito">
          <NavLink
            to="/cart"
            className={css}
          >
            🛒Total: ${calculateTotal() || 0}
          </NavLink>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  