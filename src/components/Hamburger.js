import * as React from "react"
import "./hambuger.css"
import { PiShoppingCartFill } from "react-icons/pi"
import scrollTo from "gatsby-plugin-smoothscroll"

function Hamburger() {
  return (
    <div className="container-hambuger">
      <div className="float-container">
        <div className="list-stuff">
          <ul className="list">
            <li className="items" onClick={() => scrollTo("#Shop")}>
              Shop
            </li>
            <li className="items" onClick={() => scrollTo("#Products")}>
              Products
            </li>
            <li className="items" onClick={() => scrollTo("#About")}>
              About
            </li>
            <li className="items" onClick={() => scrollTo("#Contact")}>
              Contact
            </li>
            <li className="items">
              Cart.
              <PiShoppingCartFill size={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
