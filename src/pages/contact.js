import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact me!</h1>
      <p>
        Feel free to join me on{" "}
        <a
          href="https:www.twitter.com/jeroentiggelman"
          rel="noopener noreferrer"
          target="_blank"
        >
          @jeroentiggelman
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
