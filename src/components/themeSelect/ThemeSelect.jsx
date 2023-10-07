import { useEffect, useState } from "react"

import { localStorageConstants } from "../../helpers/constants"

import FaIcon from "../faIcon"

import styles from "./ThemeSelect.module.css"
import useThemeDetector from "../../hooks/useThemeDetector"

const setStyle = document.querySelector(":root").style
const getStyle = (property) => getComputedStyle(document.documentElement).getPropertyValue(property)

const ThemeSelect = () => {
    const [isLightMode, setIsLightMode] = useState(true)

    const isBrowserInDarkMode = useThemeDetector()

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
        let isDarkTheme = false
        let isLocalThemeSaved = false

        switch (localStorage.getItem(localStorageConstants.theme)) {
            case "dark":
                isDarkTheme = isLocalThemeSaved = true
                break
            case "light":
                isLocalThemeSaved = true
                break
            default:
                isDarkTheme = isBrowserInDarkMode
                break
        }

        if (isDarkTheme || isLocalThemeSaved) {
            setIsLightMode(!isDarkTheme)
            applyTheme(!isDarkTheme, false)
        }
        // eslint-disable-next-line
    }, [])

    function applyTheme(isLightMode, saveLocal = true) {
        const theme = isLightMode ? "light" : "dark"

        setStyle.setProperty("--background-color", themeTypes[theme].backgroundColor)
        setStyle.setProperty("--text-color", themeTypes[theme].textColor)

        if (saveLocal) {
            localStorage.setItem(localStorageConstants.theme, theme)
        }
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