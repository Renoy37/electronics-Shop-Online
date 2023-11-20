import React from "react"
import "./about.css"

import example from "../images/laptop2.png"

const About = () => {
  return (
    <section id="About">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <div className="about">
          <div>
            <img src={example} alt="/" className="laptop" />
          </div>
          <div className="about-stuff">
            <p className="about-text">
              At Renon, we offer a wide selection of high-quality electronics,
              from smartphones and smartwatches to woofers, flash drives,
              laptops, Wi-Fi routers, and memory cards. We are committed to
              providing the latest in technology and innovation to enhance your
              daily life. Our feedback panel ensures that we are always
              listening to our customers, to provide them with the best possible
              experience.
            </p>
            <span className="read-more-link">Read More</span>
          </div>
        </div>

        <div className="divider"></div>
        <h2 className="benefits-title">
          Discover the Benefits of Shopping with Renon
        </h2>
        <p className="benefits-text">
          At Renon, we pride ourselves on providing you with the latest in
          technology at competitive prices. Our products are of the highest
          quality, and our customer service is second to none. We offer a wide
          range of products to suit all your needs, from smartphones to
          televisions, and everything in between. Shop with us today and
          discover the difference that Renon can make in your life.
        </p>

        <div className="benefits-list">
          <div className="benefit-item">
            <span className="benefit-number">01.</span>
            <h3 className="benefit-heading">Wide Selection of Products</h3>
            <p>
              We offer a wide range of products, including smartphones, laptops,
              and televisions, to meet all your electronic needs.
            </p>
          </div>

          <div className="benefit-item">
            <span className="benefit-number">02.</span>
            <h3 className="benefit-heading">Competitive Prices</h3>
            <p>
              Our prices are competitive, ensuring that you get the best value
              for your money.
            </p>
          </div>

          <div className="benefit-item">
            <span className="benefit-number">03.</span>
            <h3 className="benefit-heading">High-Quality Products</h3>
            <p>
              Our products are of the highest quality, ensuring that they are
              reliable and long-lasting.
            </p>
          </div>

          <div className="benefit-item">
            <span className="benefit-number">04.</span>
            <h3 className="benefit-heading">Excellent Customer Service</h3>
            <p>
              Our customer service team is dedicated to providing you with the
              best possible experience, ensuring that your needs are always met.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
