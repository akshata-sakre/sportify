import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
    
        <div className="footer-section">
          <h2 className="footer-logo">Sportify</h2>
          <p className="footer-text">
            Your one-stop destination for sports news, teams, and stats.
          </p>
        </div>

     
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

     
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@sportify.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

 
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sportify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
