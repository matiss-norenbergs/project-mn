import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

//import styles from "./FaIcon.module.css"

library.add(far, fas)

const propTypes = {
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    style: PropTypes.object,
    fixedWidth: PropTypes.bool
}
const defaultProps = {}

const FaIcon = ({ icon, style, fixedWidth }) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            style={style}
            fixedWidth={fixedWidth}
        />
    )
}
FaIcon.propTypes = propTypes
FaIcon.defaultProps = defaultProps

export default FaIcon