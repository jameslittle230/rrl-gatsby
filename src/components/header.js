import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"
import layoutStyles from "./layout.module.css"
import NavListItem from "./navListItem";

const Header = () => (
  <React.Fragment>
    <div className={styles.headerBackground + ' ' + layoutStyles.headerBackground} />
    <header className={styles.header + ' ' + layoutStyles.header}>
      <h1>Drs. Roth, Rotter &amp; Laster</h1>
      <p>637 Washington Street • Suite 202 • Brookline MA 02446</p>
      <p>(617) 232-2811</p>
    </header>

    <nav className={styles.nav + ' ' + layoutStyles.nav}>
      <ul>
        <NavListItem to="/">Home</NavListItem>
        <NavListItem to="/about">About Us</NavListItem>
        <NavListItem to="/appointments">Appointments</NavListItem>
        <NavListItem to="/how-to-reach">How to Reach your Pediatrician</NavListItem>
        <NavListItem to="/emergencies-after-hours">Emergencies &amp; After Hours</NavListItem>
        <NavListItem to="/new-patient">New Patient Information</NavListItem>
        <NavListItem to="/resources">Forms &amp; Resources</NavListItem>
        <NavListItem to="/policies">Office Policies</NavListItem>
        <NavListItem to="/insurance">Insurance &amp; Payments</NavListItem>
        <NavListItem to="/referrals">Referrals</NavListItem>
      </ul>
    </nav>
  </React.Fragment>
)

export default Header
