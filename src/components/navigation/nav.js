import React from "react"
import styles from "./nav.module.css"
import layoutStyles from "../layout.module.css"
import NavListItem from "./navListItem"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.animationStates = { closed: 1, open: 2, closing: 3 }
    this.state = {
      currentAnimationState: this.animationStates.closed,
    }

    this.handleOpenToggle = this.handleOpenToggle.bind(this)
  }

  handleOpenToggle() {
    var curr = this.state.currentAnimationState
    var animStates = this.animationStates
    if (curr === animStates.open) {
      this.setState({ currentAnimationState: animStates.closing })
      setTimeout(
        function() {
          this.setState({ currentAnimationState: animStates.closed })
        }.bind(this),
        1000
      )
    } else if (curr === animStates.closed) {
      this.setState({ currentAnimationState: animStates.open })
    }
  }

  getCurrentStateName() {
    switch (this.state.currentAnimationState) {
      case this.animationStates.closed:
        return styles.closed
      case this.animationStates.open:
        return styles.open
      case this.animationStates.closing:
        return styles.closing
      default:
        return null
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={styles.togglebutton + " " + styles.togglebuttonoutside}
          onClick={this.handleOpenToggle}
        >
          <svg
            width="25px"
            height="25px"
            viewBox="-7 -7 44 44"
            style={{ transform: `translateY(2px)` }}
          >
            <g
              id="Stuff"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              stroke="#fff"
              strokeWidth="7"
            >
              <path d="M0,0 L30,0"></path>
              <path d="M0,15 L30,15"></path>
              <path d="M0,30 L30,30"></path>
            </g>
          </svg>
        </button>
        <nav
          className={
            styles.nav +
            " " +
            layoutStyles.nav +
            " " +
            this.getCurrentStateName()
          }
        >
          <button
            className={styles.togglebutton}
            onClick={this.handleOpenToggle}
          >
            <svg width="30px" height="30px" viewBox="-7 -7 44 44">
              <g
                id="Stuff"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                stroke="#fff"
                strokeWidth="7"
              >
                <path d="M0,0 L30,30"></path>
                <path d="M30,0 L0,30"></path>
              </g>
            </svg>
          </button>
          <ul>
            <NavListItem to="/">Home</NavListItem>
            <NavListItem to="/about/">About Us</NavListItem>
            <NavListItem to="/appointments/">Appointments</NavListItem>
            <NavListItem to="/how-to-reach/">
              How to Reach your Pediatrician
            </NavListItem>
            <NavListItem to="/emergencies-after-hours/">
              Emergencies &amp; After Hours
            </NavListItem>
            <NavListItem to="/new-patient/">
              New Patient Information
            </NavListItem>
            <NavListItem
              to="https://files.rothrotterlaster.com/fever.pdf"
              ext={true}
            >
              Fever
            </NavListItem>
            <NavListItem
              to="https://files.rothrotterlaster.com/vomit-diarrhea.pdf"
              ext={true}
            >
              Vomiting &amp; Diarrhea
            </NavListItem>
            <NavListItem
              to="https://files.rothrotterlaster.com/drug-diarrhea.pdf"
              ext={true}
            >
              Medication Dosing
            </NavListItem>
            <NavListItem to="/resources/">
              Other Forms &amp; Resources
            </NavListItem>
            <NavListItem to="/policies/">Office Policies</NavListItem>
            <NavListItem to="/insurance/">Insurance &amp; Payments</NavListItem>
            <NavListItem to="/referrals/">Referrals</NavListItem>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Nav
