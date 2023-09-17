import PropTypes from "prop-types"
import { Typography } from "antd"

import styles from "./Section.module.css"

const { Title } = Typography

const propTypes = {
    title: PropTypes.string,
    titleLevel: PropTypes.number
}

const Section = ({ children, id, title, titleLevel = 2 }) => {
    return (
        <section
            className={styles["section-wrapper"]}
            id={id}
        >
            {!!title && (
                <Title
                    className={styles["section-title"]}
                    level={titleLevel}
                >
                    {title}
                </Title>
            )}
            <div
                className={styles["section-contents"]}
                id={id}
            >
                {children}
            </div>
        </section>
    )
}
Section.propTypes = propTypes

const Child = ({ children, title, titleLevel = 3 }) => {
    return (
        <div className={styles["section-child"]}>
            {!!title && (
                <Title
                    className={styles["section-title"]}
                    level={titleLevel}
                >
                    {title}
                </Title>
            )}
            {children}
        </div>
    )
}
Section.Child = Child
Child.propTypes = propTypes

export default Section