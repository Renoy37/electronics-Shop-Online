import * as React from "react"
import { useState } from "react"
import Home from "../components/Home.js"
import Products from "../components/Products.js"
import About from "../components/About.js"
import Contact from "../components/Contact.js"
import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js"
import scrollTo from "gatsby-plugin-smoothscroll"
import "./global.css"

const IndexPage = () => {
  const [showHambuger, setShowHambuger] = useState(false)

  const toggleMenu = () => {
    setShowHambuger(!showHambuger)
  }

  const scrollToSection = sectionid => {
    scrollTo(`#${sectionid}`)
  }

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Home
        onClick={() => scrollTo("#Shop")}
        showHambuger={showHambuger}
        toggleMenu={toggleMenu}
      />
      <Products onClick={() => scrollTo("#Products")} id="Products" />
      <About onClick={() => scrollTo("#About")} id="About" />
      <Contact onClick={() => scrollTo("#Contact")} id="Contact" />
      <Footer />
    </div>
  )
}

export default IndexPage
