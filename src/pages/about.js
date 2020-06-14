import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        My name is Jeroen Tiggelman, frontend developer, graphic designer and
        photographer.
      </p>
      <p>
        Feel free to <Link to="/contact">contact</Link> me
      </p>
    </Layout>
  )
}

export default AboutPage
