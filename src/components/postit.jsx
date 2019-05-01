import React from "react"
import style from "./postit.module.scss"
import { Link } from 'gatsby'
import moment from "moment"

export default ({node}) => (
  <article className={style.post}>
    <h2><a href={node.fields.path}>{node.frontmatter.title}</a></h2>
    <time>{ moment.unix(node.fields.date).format("MMMM Do YYYY") }</time>
    <section>
    {
        node.frontmatter.tags.map(
            (tag) => (
                <span className={style.category} key={tag}>
                    <Link to={`/${tag}`}>{tag}</Link>
                </span>
            )
        )
    }
    </section>
  </article>
)