import { Anchor } from "antd"
import { blue } from "@ant-design/colors"

import FaIcon from "../faIcon"

import styles from "./Navbar.module.css"

const iconStyles = {
    color: blue.primary
}

const Navbar = () => {
    return (
        <header className={styles["navigation-bar"]}>
            <h1 className={styles["logo"]}>
                <FaIcon
                    style={iconStyles}
                    icon="m"
                />
                <FaIcon
                    style={iconStyles}
                    icon="n"
                />
            </h1>
            <nav className={styles["navigation-options"]}>
                <Anchor
                    direction="horizontal"
                    targetOffset={48}
                    items={[
                        {
                            key: 'about',
                            href: '/#about',
                            title: 'About',
                        },
                        {
                            key: 'cards',
                            href: '/#cards',
                            title: 'Cards',
                        },
                        {
                            key: 'skills',
                            href: '/#skills',
                            title: 'Skills',
                        },
                        {
                            key: 'projects',
                            href: '/#projects',
                            title: 'Projects',
                        }
                    ]}
                />
            </nav>
        </header>
    )
}

export default Navbar