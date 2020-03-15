import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "rebass"

import Layout from "../components/layout"

import styles from "./gallery.module.css"

const Item = ({ parent, frontmatter, rowAspectRatioSum }) => {
  const { fluid } = frontmatter.cover.childImageSharp
  return(
    <Box
      as={"a"}
      href={`/works/${parent.relativeDirectory}`}
      key={frontmatter.serial}
      width={`${(fluid.aspectRatio / rowAspectRatioSum) * 100}%`}
      css={{ display: 'inline-block' }}
    >
      <Img fluid={fluid}></Img>
    </Box>
  )
}

export default ({ items }) => {
  const rows = chunk(items, 3);

  const itemsPerRowByBreakpoints = [2, 5]

  const aspectRatios = items.map(
    item => item.frontmatter.cover.childImageSharp.fluid.aspectRatio
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
            <Item
              {...{...item.node}} rowAspectRatioSum={rowAspectRatioSum} />
          ))
          return row.map(item =>

          )
        })}
      </div>
    </Layout>
  )
}


export const query = graphql`
  fragment Post on MarkdownRemarkEdge {
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
`
