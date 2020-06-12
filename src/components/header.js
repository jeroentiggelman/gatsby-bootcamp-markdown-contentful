import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div>
        {/* brandname */}
        <Link to="/">Gatsby tutorial</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
