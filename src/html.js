import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          
          {/* jquery */}
          <script type="text/javascript" src={withPrefix("/js/jquery/jquery-1.8.3.min.js")}></script>

          {/* bigfoot */}
          <link rel="stylesheet" type="text/css" href={withPrefix("/js/bigfoot/bigfoot-bottom.css")}/>
          <script type="text/javascript" src={withPrefix("/js/bigfoot/bigfoot.min.js")}></script>

        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          {/* reftagger */}
          <script type="text/javascript" src={withPrefix("/js/reftagger/reftagger.js")}></script>

          {/* biblia */}
          <script src="//biblia.com/api/logos.biblia.js"></script>

          {/* mathjax */}
          <script type="text/javascript" async
            src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML" async>
          </script>
        
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
