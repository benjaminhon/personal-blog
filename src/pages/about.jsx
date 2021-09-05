import React from "react"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p align="left">
      <a href="https://www.linkedin.com/in/benjamin-hon/">Linkedin</a><span>&nbsp;•&nbsp;</span>
      <a href="https://github.com/shirecoding">Github</a><span>&nbsp;•&nbsp;</span>
      <a href="https://github.com/benjaminhon">Github (Personal)</a>
    </p>
  
    <p>I'm Benjamin Hon and welcome to my blog. This is a blog of my interests, references, tutorials and hopefully you will find it useful.</p>

    <p>I am current a researcher in the National University of Singapore working on indoor positioning and continuous wireless vital signs monitoring.</p>
    
    <img src={withPrefix("/images/family.jpg")} align="middle"></img>
  </Layout>
)
