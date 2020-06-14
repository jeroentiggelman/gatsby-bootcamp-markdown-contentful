import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
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
