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
            <div className={layoutStyles.gridContainer}>
              <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Cabin:400,700|Lato:400,700&display=swap" rel="stylesheet" /> 
              </Helmet>
              <Header />
              <main 
                className={layoutStyles.main}
                style={{
                  background: theme.dark ? `#111111` : `#FFFFFF`,
                  color: theme.dark ? `#FFFFFF` : `#111111`,
                  border: `2px solid #474747`,
                  boxShadow: `0 2px 4px 0 rgba(0,0,0,0.50), 0 2px 25px 0 rgba(0,0,0,0.50)`,
                  padding: `2em`,
                  borderRadius: `1rem 1rem 0 0`,
                  fontSize: `1.1em`,
                  fontFamily: `Lato, sans-serif`
                }}
              >{children}</main>
              <footer 
                className={layoutStyles.footer}
                style={{
                  fontSize: `0.8em`,
                  marginTop: `1rem`,
                  paddingRight: `1rem`,
                  textAlign: `right`
                }}>
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
