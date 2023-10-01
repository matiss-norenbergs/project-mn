import { useEffect, useState } from "react"

import { localStorageConstants } from "../../helpers/constants"

import FaIcon from "../faIcon"

import styles from "./ThemeSelect.module.css"

const setStyle = document.querySelector(":root").style
const getStyle = (property) => getComputedStyle(document.documentElement).getPropertyValue(property)

const ThemeSelect = () => {
    const [isLightMode, setIsLightMode] = useState(true)

    const themeTypes = {
        light: {
            backgroundColor: getStyle("--white"),
            textColor: getStyle("--black")
        },
        dark: {
            backgroundColor: getStyle("--dark-gray"),
            textColor: getStyle("--white")
        }
    }

    useEffect(() => {
        const theme = localStorage.getItem(localStorageConstants.theme)

        if (theme === "dark") {
            setIsLightMode(false)
            applyTheme(false)
        }
        // eslint-disable-next-line
    }, [])

    function applyTheme(isLightMode) {
        const theme = isLightMode ? "light" : "dark"

        localStorage.setItem(localStorageConstants.theme, theme)

        setStyle.setProperty("--background-color", themeTypes[theme].backgroundColor)
        setStyle.setProperty("--text-color", themeTypes[theme].textColor)
    }

    function onThemeChange() {
        setIsLightMode(prevState => {
            const newValue = !prevState

            applyTheme(newValue)

            return newValue
        })
    }

    return (
        <span
            className={styles["theme-wrapper"]}
            onClick={onThemeChange}
        >
            <FaIcon
                icon={["far", isLightMode ? "moon" : "sun"]}
                fixedWidth
            />
        </span>
    )
}

export default ThemeSelect