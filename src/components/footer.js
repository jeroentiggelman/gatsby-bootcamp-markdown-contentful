import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        <strong>{data.site.siteMetadata.title}</strong> created by{" "}
        {data.site.siteMetadata.author}, © 2020
      </p>
    </footer>
  )
}

export default Footer
