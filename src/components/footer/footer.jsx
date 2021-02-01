import React from "react"
import "./footer.styles.scss"
import { graphql, useStaticQuery } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className="footer__container">
      <h1>Created by {data.site.siteMetadata.author} -2021</h1>
    </div>
  )
}

export default Footer
