/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./baseline.css"
import styles from "./layoutstyles.module.css"
import layoutStyles from "./layout.module.css"
import ThemeContext from "../context/themecontext"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? 'dark' : 'light'}>
            <div className={layoutStyles.gridContainer + ' ' + styles.darkBackdrop}>
              <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Cabin:400,700|Lato:400,700&display=swap" rel="stylesheet" /> 
              </Helmet>
              <Header />
              <main className={layoutStyles.main + ' ' + styles.main}>{children}</main>
              <footer className={layoutStyles.footer + ' ' + styles.footer}>
                Website Design © {new Date().getFullYear()} James Little<br />
                Content © {new Date().getFullYear()} Sally Roth, Sari Rotter, Susan Laster<br />
                Photos by Sari Rotter & Bill Gardner
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
