import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

export default ContactPage
