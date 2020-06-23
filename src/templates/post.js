import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./post.module.css"

export default ({ data }) => {
  const { markdownRemark } = data
  const { parent, frontmatter, html } = markdownRemark
  const { title, excerpt, roles, technologies, sourceCode } = frontmatter
  const slug = parent.relativeDirectory
  const TECHNOLOGY_NAMES = {
    vuejs: "Vue.js",
    websocket: "WebSocket",
    webpeck: "webpack",
    jquery: "jQuery",
    p5js: "p5.js",
    "node-js": "Node.js",
    js: "Vanilla JavaScript",
    graphql: "GraphQL",
    "css3-alt": "CSS3",
    html5: "HTML5",
    xml: "XML",
    rails: "Rails",
    aws: "AWS"
  }

  const sourceCodeHref = `https://github.com/sunquan1991/${sourceCode}`

  return (
      <Layout navTranslucent post={slug}>
        <div className={styles.wrapper}>
          <h1 className={styles.header}>
            {title}
          </h1>
          <h3
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div>
            {
              technologies && technologies.map((t, i) => {
                let name = TECHNOLOGY_NAMES[t]
                if (!name) {
                  let string_array = t.split(" ")
                  string_array = string_array.map(str =>
                    str.charAt(0).toUpperCase() + str.slice(1)
                  )
                  name = string_array.join(" ")
                }

                return (
                  <span className={styles.technology}>
                    <FontAwesomeIcon icon={["fab", t]} /> {name}
                    {i < technologies.length - 1 && ","}
                  </span>
                )
              })
            }
          </div>
          <div className={styles.sourceCode}>
            {
              sourceCode &&
                <>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                  /> Source Code:  <a href={sourceCodeHref} target="_blank" rel="noopener noreferrer">{sourceCodeHref}</a>
                </>
            }
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <SEO title={title} />
      </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(
      id: { eq: $id }
    ) {
      parent {
        ... on File {
          relativeDirectory
        }
      }
      frontmatter {
        title
        excerpt
        roles
        technologies
        sourceCode
      }
      html
    }
  }
`
