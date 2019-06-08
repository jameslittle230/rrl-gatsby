import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const DoctorCard = (props) => (
  <div>
    <h3>{props.name}</h3>
    <Image alt={props.name} filename={props.image} />
    {props.children}
  </div>
)

export default DoctorCard
