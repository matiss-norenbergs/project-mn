import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./Heading.module.css"

const headingLevelTypes = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6"
}

const propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf(Object.values(headingLevelTypes))
}
const defaultProps = {
    level: headingLevelTypes[0]
}

const Heading = ({
    children,
    level
}) => (
    <div className={classNames(
        styles["heading-wrapper"],
        styles[level]
    )}>
        {children}
    </div>
)
Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading