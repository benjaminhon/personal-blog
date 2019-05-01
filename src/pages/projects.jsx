import React from "react"
import Layout from "../components/layout"
import PostBlock from "../components/postblock"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <h3>ON PROJECTS</h3>
    <PostBlock edges={data.allMarkdownRemark.edges}></PostBlock>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {fields: [fields___date], order: DESC}
      filter: {
        frontmatter: {
          tags: {
            in: "projects"
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