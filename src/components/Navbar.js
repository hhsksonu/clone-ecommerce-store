import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { getTotalItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          EShop
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          
          {user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button onClick={handleLogout} className="nav-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="nav-link">Signup</Link>
            </>
          )}
          
          <Link to="/cart" className="cart-link">
            Cart ({getTotalItems()})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
