import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import style from "./lyrics_template.module.scss"
import moment from "moment"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter, fields, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <p className={style.author}>{frontmatter.author}&nbsp;•&nbsp;{frontmatter.published_on}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
        <footer>Posted on {moment.unix(fields.date).format("MMMM Do YYYY")}</footer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        published_on
        author
      }
      fields {
        date
      }
    }
  }
`
