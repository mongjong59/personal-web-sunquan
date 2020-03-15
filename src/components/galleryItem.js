import React from "react"
import { Box } from "rebass"
import Img from "gatsby-image"

export default ({
  parent, frontmatter, i, rowAspectRatioSums, itemsPerRowByBreakpoints
}) => {
  const { fluid } = frontmatter.cover.childImageSharp
  const widths = rowAspectRatioSums.map((sum, j) => {
    const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])

    const rowAspectRatioSum = sum[rowIndex]
    const { aspectRatio } = frontmatter.cover.childImageSharp.fluid

    return `${( aspectRatio / rowAspectRatioSum) * 100}%`
  })

  return(
    <Box
      as={"a"}
      href={`/works/${parent.relativeDirectory}`}
      key={frontmatter.serial}
      width={widths}
      css={{ display: 'inline-block', maxWidth: "60%" }}
    >
      <Img fluid={fluid}></Img>
    </Box>
  )
}
