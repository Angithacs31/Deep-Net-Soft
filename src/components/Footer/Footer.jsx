import React from "react";
import "./Footer.css";
// import logo from "./logo.png"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      
        <div className="footer-box">
          <h4>CONNECT WITH US</h4>
          <p>📞 +91 9567434340</p>
          <p>📧 info@deepnetsoft.com</p>
        </div>

        
        <div className="footer-box center-box">
          <div className="footer-logo" />
          <h2>
  <span className="deep">DEEP</span> 

  <span className="net">NET</span> 
  
  <span className="soft">SOFT</span>
</h2>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          
        </div>

      
        <div className="footer-box">
          <h4>FIND US</h4>
          <p>📍 First Floor, Geo Infopark,</p>
          <p>Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
