import * as React from "react"
import "./index.css"
import Hamburger from "./Hamburger.js"
import { RiMenu2Fill } from "react-icons/ri"
import { IoClose } from "react-icons/io5"
import background from "../images/tvBack3.webp"

const getBackgroundStyles = () => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  top: 0,
  margin: 0,
})

const Home = ({ toggleMenu, showHambuger }) => {
  return (
    <section id="Shop">
      <div className="content-main" style={getBackgroundStyles()}>
        <button className="hambuger-btn" style={{ color: "white" }}>
          {showHambuger ? (
            <IoClose size={30} onClick={toggleMenu} />
          ) : (
            <RiMenu2Fill size={23} onClick={toggleMenu} />
          )}
        </button>
        {showHambuger ? (
          <Hamburger toggleMenu={toggleMenu} />
        ) : (
          <div className="content-stuff" style={{ color: "White" }}>
            <h1 className="Renon">
              Welcome to Renon - Your One-Stop Shop for Electronics
            </h1>
            <p className="content-text hidden">
              Explore a world of possibilities as you shop with us and unlock
              incredible deals offered by our network of trusted suppliers
              spanning across the globe. From the latest tech gadgets to fashion
              trends, home essentials to unique finds, our curated selection
              ensures that you have access to a diverse range of high-quality
              products.
            </p>

            <p className="tablet">
              we provide electronics from phones, smartwatches ,woofers
              fashdrives, television set, laptops , wi-fi routers and memory
              cards.we have a wide selection of these products with a feedback
              pannel to hear from our customers
            </p>

            <button className="shop-btn">Shop now</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
