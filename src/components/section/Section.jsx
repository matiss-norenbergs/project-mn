import PropTypes from "prop-types"
import classNames from "classnames"
import { useRef } from "react"

import Typography from "../typography"

import styles from "./Section.module.css"

const { Title } = Typography

const contentSizeTypes = {
    default: 1,
    medium: 2,
    large: 3
}

const contentStyle = {
    [contentSizeTypes.default]: styles["default"],
    [contentSizeTypes.medium]: styles["medium"],
    [contentSizeTypes.large]: styles["large"]
}

const propTypes = {
    title: PropTypes.string,
    titleLevel: PropTypes.number,
    contentSize: PropTypes.oneOf(Object.values(contentSizeTypes)),
    fullHeight: PropTypes.bool
}

const Section = ({
    children,
    id,
    title,
    titleLevel = 2,
    contentSize = contentSizeTypes.default,
    fullHeight = true
}) => {
    
    const sectionElement = useRef(null)

    return (
        <section
            ref={sectionElement}
            className={classNames(
                styles["section-wrapper"],
                {
                    [styles["full-size"]]: fullHeight
                }
            )}
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
                className={classNames(
                    styles["section-contents"],
                    contentStyle[contentSize]
                )}
                id={id}
            >
                {children}
            </div>
        </section>
    )
}
Section.propTypes = propTypes

const Child = ({
    children,
    title,
    titleLevel = 3,
    shadow = false,
    center = true
}) => {
    return (
        <div className={classNames(
            styles["section-child"],
            {
                [styles["shadow"]]: shadow,
                [styles["center"]]: center
            }
        )}>
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
Child.propTypes = propTypes

Section.Child = Child
Section.contentSizeTypes = contentSizeTypes

export default Section