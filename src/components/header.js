import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from '@reach/router';
import styles from "./header.module.css"
import layoutStyles from "./layout.module.css"

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <div className={styles.headerBackground + ' ' + layoutStyles.headerBackground} />
    <header className={styles.header + ' ' + layoutStyles.header}>
      <h1>Drs. Roth, Rotter &amp; Laster</h1>
      <p>637 Washington Street • Suite 202 • Brookline MA 02446</p>
      <p>(617) 232-2811</p>
    </header>

    <Location>
    {({ location })=> {
      console.log(location.pathname)
    }}
    </Location>

    <nav className={styles.nav + ' ' + layoutStyles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li className={styles.active}><Link to="/how-to-reach">How to Reach your Pediatrician</Link></li>
        <li><Link to="/emergencies-after-hours">Emergencies &amp; After Hours</Link></li>
        <li><Link to="/new-patient">New Patient Information</Link></li>
        <li><Link to="/resources">Forms &amp; Resources</Link></li>
        <li><Link to="/policies">Office Policies</Link></li>
        <li><Link to="/insurance">Insurance &amp; Payments</Link></li>
        <li><Link to="/referrals">Referrals</Link></li>
      </ul>
    </nav>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
