import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: payaam@example.com</p>
          <p>Phone: (+254)712345678</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Products</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2023 All rights reserved. Designed by
          <span className="designer">Payaam</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
