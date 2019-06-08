// import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import styles from "./doctorcard.module.css"

const DoctorCard = (props) => (
  <div className={styles.doctorcard}>
    <h3 style={{margin: `0.5em 0`, lineHeight:`1`}}>{props.name}</h3>
    <div className={styles.cardbody}>
        <div className={styles.imagecontainer}>
            <Image alt={props.name} filename={props.image} />
        </div>
        {props.children}
    </div>
  </div>
)

export default DoctorCard
