import React from "react"
import { Link, graphql } from "gatsby"

import { chunk, sum } from "lodash"

import SEO from "../components/seo"
import Gallery from "../templates/gallery.js"

import styles from "./index.module.css"

export default ({ data }) => {
  return (
    <>
      <Gallery items={data.allMarkdownRemark.edges} />

      <SEO title="Works" />
    </>
  )
}

export const query = graphql`
  query($tag: String = "") {
    allMarkdownRemark(
      sort: { fields: [frontmatter___serial] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      ...Items
    }
  }
`
