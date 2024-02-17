import PropTypes from "prop-types"

import classNames from "classnames"
import { NavLink } from "react-router-dom"

import Button from "../button"
import MNIcon from "../mnIcon"
import ThemeSwitch from "components/themeSwitch"

import styles from "./Header.module.css"

const propTypes = {
    paths: PropTypes.array,
    extraContent: PropTypes.node
}
const defaultProps = {}

const Header = ({
    paths,
    extraContent
}) => {
    return (
        <header className={styles["header-wrapper"]}>
            <MNIcon scale={50} />
            <div className={styles["header-contents"]}>
                {paths.length > 0 && (
                    <nav className={styles["header-paths"]}>
                        {paths.map(({ path, title, icon }) => (
                            <NavLink
                                key={path}
                                className={({ isActive }) => classNames({
                                    [styles["active-link"]]: isActive
                                })}
                                to={path}
                            >
                                <Button
                                    type="ghost"
                                    faIcon={icon}
                                >
                                    {title}
                                </Button>
                            </NavLink>
                        ))}
                    </nav>
                )}
                {extraContent}
            </div>
            <ThemeSwitch />
        </header>
    )
}
Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header