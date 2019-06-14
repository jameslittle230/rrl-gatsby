import React from "react"
import styles from "./grid.module.css"

class Grid extends React.Component {
    render() {
        var css = ""

        // We build up a media query block here and add it in a style tag
        // to the rendered component. This means the ordering of our columns
        // object matters: it has to go in a mobile-first manner.
        for (var breakpoint in this.props.columns) {
            let value = this.props.columns[breakpoint]
            let percentage = 100 * (1 / value ) + "%"
            css += `@media only screen and (min-width: ${breakpoint}) {
                .${styles.grid} > * {
                    flex-basis: calc(${percentage} ${this.props.gutter ? `- ${this.props.gutter}` : ``})
                }
            }`
        }

        return (
            <React.Fragment>
                <style>{ css }</style>
                <div className={styles.grid}>{this.props.children}</div>
            </React.Fragment>
        );
    }
}

export default Grid