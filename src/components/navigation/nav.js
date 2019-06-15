import React from "react"
import { Link } from "gatsby"
import styles from "./nav.module.css"
import layoutStyles from "../layout.module.css"
import NavListItem from "./navListItem"

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.nav + ' ' + layoutStyles.nav}>
        <ul>
          <NavListItem to="/">Home</NavListItem>
          <NavListItem to="/about/">About Us</NavListItem>
          <NavListItem to="/appointments/">Appointments</NavListItem>
          <NavListItem to="/how-to-reach/">How to Reach your Pediatrician</NavListItem>
          <NavListItem to="/emergencies-after-hours/">Emergencies &amp; After Hours</NavListItem>
          <NavListItem to="/new-patient/">New Patient Information</NavListItem>
          <NavListItem to="/resources/">Forms &amp; Resources</NavListItem>
          <NavListItem to="/policies/">Office Policies</NavListItem>
          <NavListItem to="/insurance/">Insurance &amp; Payments</NavListItem>
          <NavListItem to="/referrals/">Referrals</NavListItem>
        </ul>
      </nav>
    )
  }
}

export default Nav