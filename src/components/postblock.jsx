import React from "react"
import style from "./postblock.module.scss"
import { withPrefix } from "gatsby"

export default ({edges}) => (
  <div className={style.postblock}>
  {
    edges.map(
      ({node}) => (
        <a href={withPrefix(node.fields.path)} key={node.id}>{node.frontmatter.title}<span>&nbsp;•&nbsp;</span></a>
      )
    )
  }
  </div>
)