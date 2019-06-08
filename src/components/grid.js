import React from "react"
import styles from "./grid.module.css"

const Grid = (props) => (
    <div className={styles.grid}>
        {React.Children.map(props.children, ((child) => { 
            let basis = 100 * (1 / props.columns) + "%"
            return React.cloneElement(child, {style: {flexBasis: basis, padding: `0.5em`}})
        }))}
    </div>
)

export default Grid