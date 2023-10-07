import PropTypes from "prop-types"
import classNames from "classnames"

import {
    Anchor,
    Image
} from "antd"
import { Link, NavLink } from "react-router-dom"

import ThemeSelect from "../themeSelect"
import FaIcon from "../faIcon"

import styles from "./Header.module.css"
import { isElement, isString } from "lodash"

const propTypes = {
    logo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    paths: PropTypes.array,
    extraContent: PropTypes.node
}

const Header = ({
    logo,
    paths = [],
    extraContent = null
}) => {

    let headerLogo = null

    if (isString(logo)) {
        headerLogo = <Image
            className={styles["header-logo"]}
            src={logo}
            preview={false}
        />
    } else if (isElement(logo)) {
        headerLogo = logo
    }

    return (
        <header className={styles["header-wrapper"]}>
            {headerLogo}
            <div className={styles["header-contents"]}>
                {paths.length > 0 && (
                    <nav className={styles["header-paths"]}>
                        {paths.map(({ path, title, icon }) => (
                            <NavLink
                                key={path}
                                className={({ isActive }) => classNames(
                                    styles["link"],
                                    {
                                        [styles["active-link"]]: isActive
                                    }
                                )}
                                to={path}
                            >
                                {!!icon && (
                                    <FaIcon
                                        icon={icon}
                                        padded
                                    />
                                )}
                                {title}
                            </NavLink>
                        ))}
                    </nav>
                )}
                {extraContent}
                <ThemeSelect />
            </div>
        </header>
    )
}
Header.propTypes = propTypes

export default Header