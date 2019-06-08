import React from "react"
import Image from "../components/image"

const StaffCard = (props) => (
  <div style={props.style}>
    <h4 style={{margin: `0.5em 0`, lineHeight: `1`}}>{props.name}<br /><small>(since {props.year})</small></h4>
    <Image alt={props.name} filename={props.image} />
    {props.children}
  </div>
)

export default StaffCard
