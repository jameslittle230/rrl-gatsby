import React from "react"
import styles from "./header.module.css"
import layoutStyles from "./layout.module.css"
import Nav from "./navigation/nav"
import ThemeContext from "../context/themecontext"

const Header = () => (
  <ThemeContext.Consumer>
    {theme => (
      <React.Fragment>
        <div className={styles.headerBackground + ' ' + layoutStyles.headerBackground} />
        
        <header className={styles.header + ' ' + layoutStyles.header}>
          <button 
            className={styles.darkToggle + ' ' + (theme.dark ? styles.toggleDark : styles.toggleLight)} 
            onClick={theme.toggleDark}>
              {theme.dark 
                ? <span role="img" aria-label="Switch to light mode">☀️</span> 
                : <span role="img" aria-label="Switch to dark mode">🌙</span>
              }
          </button>
          <h1>Drs. Roth, Rotter&nbsp;&amp;&nbsp;Laster</h1>
          <p>637 Washington Street • Suite 202 • Brookline&nbsp;MA&nbsp;02446</p>
          <p>(617) 232-2811</p>
        </header>
        
        <Nav />
      </React.Fragment>
    )}
  </ThemeContext.Consumer>
)

export default Header
