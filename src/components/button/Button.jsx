import PropTypes from "prop-types"

import classNames from "classnames"

import styles from "./Button.module.css"

const buttonType = {
    default: "default",
    primary: "primary"
}

const propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(buttonType))
}
const defaultProps = {
    type: buttonType.default
}

const Button = ({
    children,
    className,
    onClick,
    disabled,
    active,
    type,
    ...rest
}) => {

    return (
        <button
            className={classNames(
                styles["button-wrapper"],
                styles[type],
                {
                    [styles["button-disabled"]]: disabled,
                    [styles["button-active"]]: active
                },
                className
            )}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}
Button.propTypes = propTypes
Button.defaultProps = defaultProps

const Group = ({ children }) => {

    return (
        <div className={styles["button-group"]}>
            {children}
        </div>
    )
}
Button.Group = Group

export default Button