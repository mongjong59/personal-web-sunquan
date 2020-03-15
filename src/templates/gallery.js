import React from "react"
import { Link, graphql } from "gatsby"
import { chunk, sum } from "lodash"

import Layout from "../components/layout"
import GalleryItem from "../components/galleryItem"

import styles from "./gallery.module.css"

export default ({ items, itemsPerRow }) => {
  const itemsPerRowByBreakpoints = [2, 5]
  console.log(items)
  const aspectRatios = items.map(
    item => item.node.frontmatter.cover.childImageSharp.fluid.aspectRatio
  )

  const rowAspectRatioSums = itemsPerRowByBreakpoints.map(itemsPerRow =>
    chunk(aspectRatios, itemsPerRow).map(
      rowAspectRatios => sum(rowAspectRatios)
    )
  )

  return (
    <Layout>
      <div className={styles.wrapper}>
        {
          items.map((item, i) => (
            <GalleryItem
              {...{...item.node}}
              i={i}
              rowAspectRatioSums={rowAspectRatioSums}
              itemsPerRowByBreakpoints={itemsPerRowByBreakpoints}
            />
          ))
        }
      </div>
    </Layout>
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
