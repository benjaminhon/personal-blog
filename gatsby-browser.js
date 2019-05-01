/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// prismjs
require("prismjs/themes/prism-tomorrow.css")

exports.onRouteUpdate = ({location}) => {

  // bigfoot
  window.$.bigfoot({
    anchorPattern: /(fn|footnote|note)[:\-_\da-zA-Z]/gi,
    buttonMarkup: (
      `
      <div class="bigfoot-footnote__container">
        <button href="#" class="bigfoot-footnote__button" rel="footnote"
            id="{{SUP:data-footnote-backlink-ref}}"
            data-footnote-number="{{FOOTNOTENUM}}"
            data-footnote-identifier="{{FOOTNOTEID}}"
            alt="See Footnote {{FOOTNOTENUM}}"
            data-bigfoot-footnote="{{FOOTNOTECONTENT}}">
            <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg>
            <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg>
            <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg>
        </button>
      </div>
      `
    )
  })

  // biblia
  window.logos.biblia.init()

}
