import * as React from "react"
import "./navbar.css"
import { PiShoppingCartFill } from "react-icons/pi"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="header-content">
        <ul className="list-container">
          <li className="elms">
            <Link to="/#Shop">Shop</Link>
          </li>
          <li className="elms">
            <Link to="/#Products">Products</Link>
          </li>
          <li className="elms">
            <Link to="/#About">About</Link>
          </li>
          <li className="elms">
            <Link to="/#Contact">Contact</Link>
          </li>
          <li className="elms">
            <PiShoppingCartFill size={25} />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
