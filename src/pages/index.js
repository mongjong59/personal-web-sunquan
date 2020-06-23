import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery.js"

import styles from "./index.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <Gallery items={data.allMarkdownRemark.edges} title="Works" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___serial] }
      filter: { frontmatter: { hide: { ne: true } } }
    ) {
      ...Items
    }
  }
`
