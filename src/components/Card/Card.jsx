import React from 'react'
import PropTypes from "prop-types"
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card} style={props.style}>{props.children}</div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card;