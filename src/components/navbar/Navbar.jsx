import {
    Anchor,
    Image
} from "antd"

import mnIcon from "../../assets/images/mnIcon2.svg"

import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header className={styles["navigation-bar"]}>
            <Image
                className={styles["logo"]}
                src={mnIcon}
            />
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