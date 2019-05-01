/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const moment = require("moment")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const _path = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `path`,
      value: _path,
    })
    createNodeField({
      node,
      name: `date`,
      value: moment(path.basename(_path).match(/[0-9]+-[0-9]+-[0-9]+/g)[0]).unix()
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogpost_template.jsx`)
  const lyricsTemplate = path.resolve(`src/templates/lyrics_template.jsx`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: {fields: [fields___date], order: DESC}
        limit: 1000
      ) {
        edges {
          node {
            fields {
              path
              date
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      
      console.log('create page in ', node.fields.path)
      
      if (node.frontmatter.tags.includes('music')) {
        createPage({
          path: node.fields.path,
          component: lyricsTemplate,
          context: {},
        })
      } else {
        createPage({
          path: node.fields.path,
          component: blogPostTemplate,
          context: {},
        })
      }
    })
  })
}
