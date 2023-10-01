import {
    Anchor,
    Image
} from "antd"

import mnIcon from "../../assets/images/mnIcon.svg"

import ThemeSelect from "../themeSelect/ThemeSelect"

import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header className={styles["navigation-bar"]}>
            <Image
                className={styles["logo"]}
                src={mnIcon}
                preview={false}
            />
            <div className={styles["options"]}>
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
                            key: 'cartoons',
                            href: '/#cartoons',
                            title: 'Cartoons',
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
                <ThemeSelect className={styles["themes"]} />
            </div>
        </header>
    )
}

export default Navbar