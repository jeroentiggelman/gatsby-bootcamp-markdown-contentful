import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.scss"

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
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `)

  // put data arrays in a variable (not obligatory, more to keep code easier to read)
  const posts = data.allMarkdownRemark.edges
  const contentfulPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Posts from Markdown files</h2>
      <ol className={blogStyles.posts}>
        {/* map posts from array with loop */}
        {posts.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <h2>Posts from Contentful</h2>
      <ol className={blogStyles.posts}>
        {/* map posts from array with loop */}
        {contentfulPosts.map(contentfulPost => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/contentful/${contentfulPost.node.slug}`}>
                <h3>{contentfulPost.node.title}</h3>
                <p>{contentfulPost.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
