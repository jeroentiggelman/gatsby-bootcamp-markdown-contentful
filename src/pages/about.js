import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        My name is Jeroen Tiggelman, frontend developer, graphic designer and
        photographer.
      </p>
      <p>
        Feel free to <Link to="/contact">contact</Link> me
      </p>
    </div>
  )
}

export default AboutPage
