import PropTypes from "prop-types"

import {
    HashRouter as Router, // HashRouter for github pages
} from "react-router-dom"

import Home from "pages/home"
import Footer from "../footer"

import styles from "./CoreView.module.css"

const propTypes = {
    hideFooter: PropTypes.bool
}

const CoreView = ({ hideFooter }) => {

    return (
        <div className={styles["core-view-wrapper"]}>
            <Router>
                <div className={styles["core-content"]}>
                    <Home />
                    {!hideFooter && (
                        <Footer />
                    )}
                </div>
            </Router>
        </div>
    )
}
CoreView.propTypes = propTypes

export default CoreView