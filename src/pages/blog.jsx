import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>BLOG PAGE</h1>
      {
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.title}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      }
    </Layout>
  )
}

export default BlogPage
