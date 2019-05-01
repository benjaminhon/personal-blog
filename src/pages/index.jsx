import React from "react"
import Layout from "../components/layout"
import Postit from "../components/postit"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <h1>Recent Posts</h1>
    {
      data.allMarkdownRemark.edges.map(
        ({node}) => <Postit node={node} key={node.id}></Postit>
      )
    }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {fields: [fields___date], order: DESC}
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