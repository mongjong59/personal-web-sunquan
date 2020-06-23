import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./nav.module.css"

const Nav = ({ post, siteTitle, translucent }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___serial] }
        filter: { frontmatter: { hide: { ne: true } } }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                relativeDirectory
              }
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <nav className={styles.wrapper} style={{ color: translucent ? "rgba(0, 0, 0, 0.15)" : "black" }}>
      <div className={styles.main}>
        <h2 className={styles.siteTitle} style={{ borderColor: translucent ? "rgba(0, 0, 0, 0.15)" : "black" }}>
          <Link className={styles.siteTitleText} to="/">{siteTitle}</Link>
        </h2>

          <div className={styles.works}>
            {data.allMarkdownRemark.edges.map(r => {
              const { node } = r
              const { parent, frontmatter } = node
              const slug = parent.relativeDirectory

              return (
                <h3 style={{ color: !post || slug === post ? "black" : "rgba(0, 0, 0, 0.15)" }}><Link to={`/works/${slug}/`}>{frontmatter.title}</Link></h3>
              )
            })}
            {/*
              <h3><Link to="/">Works</Link></h3>
              <h5><Link to="/">Web</Link></h5>
              <h5><Link to="/">Unity (AR & VR & Animation)</Link></h5>
              <h5><Link to="/">Physical Computing</Link></h5>
            */}
          </div>

          {/*
            <h3>
              <Link to="/">About</Link>
            </h3>
          */}
        <h5 className={styles.contact} style={{ borderColor: translucent ? "rgba(0, 0, 0, 0.15)" : "black" }}>
          Email:{` `}
          qice.sun.7@gmail.com
          <br />
          Github:{` `}
          <a href="https://github.com/sunquan1991" target="_blank" rel="noopener noreferrer">sunquan1991</a>
          <br />
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a><br />
        </h5>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
