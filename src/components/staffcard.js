import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const StaffCard = (props) => (
  <div>
    <h3>{props.name} (since {props.year})</h3>
    <Image alt={props.name} filename={props.image} />
    {props.children}
  </div>
)

export default StaffCard
