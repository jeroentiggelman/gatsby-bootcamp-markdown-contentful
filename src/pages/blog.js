import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // put data array in 1 variable (not obligatory, more to keep code easier to read)
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {/* map posts from array with loop */}
        {posts.map(post => {
          return (
            <li key={post.node.id}>
              <h2>
                <Link to={`/blog/${post.node.fields.slug}`}>
                  {post.node.frontmatter.title}
                </Link>
              </h2>
              <p>{post.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
