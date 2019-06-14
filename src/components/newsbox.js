// import PropTypes from "prop-types"
import React from "react"
import styles from "./newsbox.module.css"

const NewsBox = (props) => (
  <div className={styles.newsbox}>
    <h1 className={styles.header}>{props.title}</h1>
    <div className={styles.body}>
        {props.children}
    </div>
  </div>
)

export default NewsBox
