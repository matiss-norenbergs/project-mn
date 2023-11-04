import PropTypes from "prop-types"
import classNames from "classnames"

import { Typography as AntdTypography } from "antd"

import styles from "./Typography.module.css"

const {
    Title: AntdTitle,
    Paragraph: AntdParagraph
} = AntdTypography

const propTypesTitle = {
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5])
}

const Title = ({
    children,
    className,
    level
}) => {
    return (
        <AntdTitle
            className={classNames(
                styles["typography"],
                className
            )}
            level={level}
        >
            {children}
        </AntdTitle>
    )
}
Title.propTypes = propTypesTitle

const propTypesParagraph = {
    className: PropTypes.string
}

const Paragraph = ({
    children,
    className
}) => {
    return (
        <AntdParagraph className={classNames(
            styles["typography"],
            className
        )}>
            {children}
        </AntdParagraph>
    )
}
Paragraph.propTypes = propTypesParagraph

const Typography = {
    Title,
    Paragraph
}

export default Typography