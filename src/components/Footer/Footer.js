import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  return (
    <footer className="footer">
      <div className="footerContent container">
        <div className="footerSection">
          <h4>About Us</h4>
          <p>Well-Track Fusion: Your partner in achieving a healthier lifestyle through diet and activity synergy.</p>
        </div>
        <div className="footerSection">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            {isLoggedIn && (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/food-history">Food History</Link></li>
                <li><Link to="/exercise-history">Exercise History</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className="footerSection">
          <h4>Contact Us</h4>
          <p>Email: support@welltrackfusion.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2023 Well-Track Fusion. All rights reserved.</p>
        <div className="footerLinks">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
