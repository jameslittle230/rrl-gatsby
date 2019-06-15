import React from "react"
import { Link } from "gatsby"
import { Location } from '@reach/router';
import styles from "./nav.module.css"

const NavListItem = (props) => (
  <Location>
    {({ location })=> (
      <li className={location.pathname === props.to ? styles.active : ``}>
            <Link to={props.to}>{props.children}</Link>
      </li>
    )}
  </Location>
)

export default NavListItem
