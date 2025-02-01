import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by verifying JWT in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    setIsLoggedIn(false);
    navigate("/"); // Redirect to login page
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar bg-primary">
      <div className="container navbar-container" ref={menuRef}>
        <div className="logo navbar-brand" onClick={closeMenu}>
          <Link to="/">Well-Track Fusion</Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navLinks navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          </li>
          
          {isLoggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/dashboard" className="navbar-link" onClick={closeMenu}>Dashboard</Link>
              </li>
              <li className="navbar-item">
                <Link to="/food-history" className="navbar-link" onClick={closeMenu}>Food History</Link>
              </li>
              <li className="navbar-item">
                <Link to="/exercise-history" className="navbar-link" onClick={closeMenu}>Exercise History</Link>
              </li>
              <li className="navbar-item">
                <button className="navbar-link logout-button" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="navbar-item">
              <Link to="/login" className="navbar-link" onClick={closeMenu}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
