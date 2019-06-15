import React from "react"
import styles from "./header.module.css"
import layoutStyles from "./layout.module.css"
import Nav from "./navigation/nav"

const Header = () => (
  <React.Fragment>
    <div className={styles.headerBackground + ' ' + layoutStyles.headerBackground} />
    <header className={styles.header + ' ' + layoutStyles.header}>
      <h1>Drs. Roth, Rotter&nbsp;&amp;&nbsp;Laster</h1>
      <p>637 Washington Street • Suite 202 • Brookline&nbsp;MA&nbsp;02446</p>
      <p>(617) 232-2811</p>
    </header>
    <Nav />
  </React.Fragment>
)

export default Header
