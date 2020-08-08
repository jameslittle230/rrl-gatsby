import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import styles from "./nav.module.css"

const NavListItem = ({ext, to, children}) =>
  ext ? (
    <li>
      <a href={to}>{children} →</a>
    </li>
  ) : (
    <Location>
      {({ location }) => (
        <li className={location.pathname === to ? styles.active : ``}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    </Location>
  )

export default NavListItem
