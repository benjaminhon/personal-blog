import React from "react"
import Layout from "../components/layout"
import PostBlock from "../components/postblock"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <h3>ON PHILOSOPHY</h3>
    <PostBlock edges={data.allMarkdownRemark.edges.filter(
      ({node}) => node.frontmatter.tags.includes('philosophy')
    )}></PostBlock>

    <h3>VERSES</h3>
    <PostBlock edges={
      data.allMarkdownRemark.edges.filter(
        ({node}) => node.frontmatter.tags.includes('verses')
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
            in: ["philosophy", "verses"]
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