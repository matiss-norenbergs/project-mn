import PropTypes from "prop-types"

import Typography from "../typography"
import FaIcon from "../faIcon"

import styles from "./HeadingTitle.module.css"

const { Title } = Typography

const propTypes = {
    text: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    level: PropTypes.number
}

const HeadingTitle = ({
    text,
    icon,
    level = 3
}) => {
    return (
        <div className={styles["heading-title"]}>
            { !!icon && (
                <FaIcon
                    className={styles["icon"]}
                    icon={icon}
                    padded
                />
            )}
            <Title
                className={styles["title"]}
                level={level}
            >
                {text}
            </Title>
        </div>
    )
}
HeadingTitle.propTypes = propTypes

export default HeadingTitle