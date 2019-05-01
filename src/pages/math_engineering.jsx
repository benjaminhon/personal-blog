import React from "react"
import Layout from "../components/layout"
import PostBlock from "../components/postblock"
import { graphql } from "gatsby"

export default ({data}) => (

  <Layout>
    <h3>ON MATH</h3>
    <PostBlock edges={
      data.allMarkdownRemark.edges.filter(
        ({node}) => node.frontmatter.tags.includes('math')
      )
    }></PostBlock>

    <h3>ON ENGINEERING</h3>
    <PostBlock edges={
      data.allMarkdownRemark.edges.filter(
        ({node}) => node.frontmatter.tags.includes('engineering')
      )
    }></PostBlock>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {fields: [fields___date], order: DESC}
      filter: {
        frontmatter: {
          tags: {
            in: ["engineering", "math"]
          }
        } 
      }
    ) {
      edges {
        node {
          id
          fields {
            path
            date
          }
          frontmatter {
            title
            tags
          }
          html
        }
      }
    }
  }
`