import React from "react"
import { Link, graphql } from "gatsby"
import { chunk, sum } from "lodash"

import SEO from "../components/seo"
import Layout from "../components/layout"
import GalleryItem from "../components/galleryItem"

import styles from "./gallery.module.css"

export default ({ items, itemsPerRow }) => {
  const itemsPerRowByBreakpoints = [2, 3]
  const aspectRatios = items.map(
    item => item.node.frontmatter.cover.childImageSharp.fluid.aspectRatio
  )

  const rowAspectRatioSums = itemsPerRowByBreakpoints.map(itemsPerRow =>
    chunk(aspectRatios, itemsPerRow).map(
      rowAspectRatios => sum(rowAspectRatios)
    )
  )

  return (
    <>
      <div className={styles.wrapper}>
        {
          items.map((item, i) => (
            <GalleryItem
              {...{...item.node}}
              i={i}
              key={i}
              rowAspectRatioSums={rowAspectRatioSums}
              itemsPerRowByBreakpoints={itemsPerRowByBreakpoints}
            />
          ))
        }
      </div>

      <SEO title="Works" />
    </>
  )
}


export const query = graphql`
  fragment Items on MarkdownRemarkConnection {
    edges {
      node{
        parent {
          ... on File {
            relativeDirectory
          }
        }
        frontmatter {
          title
          serial
          cover {
            childImageSharp {
              fluid {
                aspectRatio
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
