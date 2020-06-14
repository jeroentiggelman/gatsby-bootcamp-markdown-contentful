const path = require("path")

// create a new node field for the slug -> based on the filename without path and extension
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // get paths to templates
  const templates = {
    blogTemplate: path.resolve("./src/templates/blog.js"),
    contentfulTemplate: path.resolve("./src/templates/contentful.js"),
  }

  // get markdown data
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const markdownPosts = res.data.allMarkdownRemark.edges
    const contentfulPosts = res.data.allContentfulBlogPost.edges

    markdownPosts.forEach(({ node }) => {
      createPage({
        component: templates.blogTemplate,
        path: `/blog/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
    contentfulPosts.forEach(({ node }) => {
      createPage({
        component: templates.contentfulTemplate,
        path: `/contentful/${node.slug}`,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
