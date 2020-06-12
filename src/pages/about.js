import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        My name is Jeroen Tiggelman, frontend developer, graphic designer and
        photographer.
      </p>
      <p>
        Feel free to <Link to="/contact">contact</Link> me
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
