import * as React from "react"
import { useState } from "react"
import "./products.css"
import Explore from "./Explore.js"

import tv1 from "../images/tvBack1.jpg"
import laptop from "../images/laptop13.png"
import headphones from "../images/headphones.png"
import phone from "../images/phone.png"
import woofer from "../images/woofer.png"
import smartwatch from "../images/smartwatch.png"
import drives from "../images/drives.png"
import buds from "../images/earbuds.png"

import { AiOutlineCloseCircle } from "react-icons/ai"

function Products() {
  const [isExploreVisible, setExploreVisible] = useState(false)

  const handleExploreClick = () => {
    setExploreVisible(!isExploreVisible)
  }

  return (
    <section id="Products">
      <div
        id="Products"
        className="product-container"
        style={{ color: "black" }}
      >
        <p className="product" style={{ margin: "auto" }}>
          All Products
        </p>
        <div className="explore-btn-container">
          <button className="explore-btn" onClick={handleExploreClick}>
            {isExploreVisible ? <AiOutlineCloseCircle /> : "Explore"}
          </button>
        </div>
        <section className="display">
          {isExploreVisible ? (
            <Explore />
          ) : (
            <div className="btn-container">
              <button className="products">
                <span className="tag">
                  <img src={tv1} alt="/" className="pic" />
                  Televisions
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={laptop} alt="/" className="pic" />
                  Laptops
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={headphones} alt="/" className="pic" />
                  Headphones
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={phone} alt="/" className="pic" />
                  Smartphones
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={woofer} alt="/" className="pic" />
                  Woofers
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={smartwatch} alt="/" className="pic" />
                  Smart watches
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={drives} alt="/" className="pic" />
                  Flash Drives
                </span>
              </button>
              <button className="products">
                <span className="tag">
                  <img src={buds} alt="/" className="pic" />
                  Wireless Earbuds
                </span>
              </button>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}

export default Products
