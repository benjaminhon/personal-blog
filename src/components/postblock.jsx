import React from "react"
import style from "./postblock.module.scss"

export default ({edges}) => (
  <div className={style.postblock}>
  {
    edges.map(
      ({node}) => (
        <a href={node.fields.path} key={node.id}>{node.frontmatter.title}<span>&nbsp;•&nbsp;</span></a>
      )
    )
  }
  </div>
)