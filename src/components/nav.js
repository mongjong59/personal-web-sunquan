import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./nav.module.css"

const Nav = ({ siteTitle, translucent }) => (
  <nav className={styles.wrapper} style={{ opacity: translucent ? "20%" : "100%" }}>
    <div className={styles.main}>
      <h1 className={styles.siteTitle}>
        <Link className={styles.siteTitleText} to="/">{siteTitle}</Link>
      </h1>
      <div className={styles.works}>
        <h3><Link to="/">Works</Link></h3>
        <h5><Link to="/">Web</Link></h5>
        <h5><Link to="/">Unity (AR & VR & Animation)</Link></h5>
        <h5><Link to="/">Physical Computing</Link></h5>
      </div>

      <h3>
        <Link to="/">About</Link>
      </h3>

      <h6 className={styles.contact}>
        Email: sunquan.1991@yahoo.com
        <br />
        GitHub: <a href="https://github.com/sunquan1991" target="_blank" rel="noopener noreferrer">https://github.com/sunquan1991</a>
        <br />
        © 2020, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        Source Code: 
      </h6>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
