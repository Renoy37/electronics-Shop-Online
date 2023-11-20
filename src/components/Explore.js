import * as React from "react"
import "./products.css"
import items from "./Data.js"

function Explore() {
  return (
    <div className="product-container" style={{ color: "black" }}>
      <div className="item-container">
        {items.map(menuitems => {
          const { id, price, img, title, desc, name } = menuitems
          return (
            <section key={id} className="section-container">
              <img src={img} alt={title} className="photo" />
              <div className="all-items">
                <header className="header">
                  <h3>{name}</h3>
                  <h3 className="price">ksh{price}</h3>
                </header>
                <footer>
                  <p>
                    <span>More</span>
                    {desc}
                  </p>
                </footer>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Explore
