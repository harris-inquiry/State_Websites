/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

/* import "../styles/layout.css" */
import "../styles/style.scss"
import "../styles/_custom_bootstrap.scss"

const Layout = ({ children }) => (
    <>
      <main>
        <Header />
        {children}
      </main>
      <footer>
        <div className="container">
          <p>Vote-2020</p>
        </div>
      </footer>
    </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
