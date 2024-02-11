import { useCallback, useEffect, useMemo, useState } from "react"

import { setStyleProperty, getStyleProperty } from "lib/helpers/domStyleHelper"

import { localStorageConstants } from "helpers/constants"
import useThemeDetector from "hooks/useThemeDetector"

import FaIcon from "../faIcon"

import styles from "./ThemeSelect.module.css"

const ThemeSelect = () => {
    
    const [isLightMode, setIsLightMode] = useState(true)

    const isBrowserInDarkMode = useThemeDetector()

    const themeTypes = useMemo(() => {
        return {
            light: {
                backgroundColor: getStyleProperty("--background-light"),
                textColor: getStyleProperty("--color-light"),
                accent: getStyleProperty("--accent-light"),
                accentRgb: getStyleProperty("--accent-light-rgb")
            },
            dark: {
                backgroundColor: getStyleProperty("--background-dark"),
                textColor: getStyleProperty("--color-dark"),
                accent: getStyleProperty("--accent-dark"),
                accentRgb: getStyleProperty("--accent-dark-rgb")
            }
        }
    }, [])

    const applyTheme = useCallback((isLightMode, saveLocal = true) => {
        const theme = isLightMode ? "light" : "dark"

        setStyleProperty("--background", themeTypes[theme].backgroundColor)
        setStyleProperty("--color", themeTypes[theme].textColor)
        setStyleProperty("--accent", themeTypes[theme].accent)
        setStyleProperty("--accent-rgb", themeTypes[theme].accentRgb)

        if (saveLocal) {
            localStorage.setItem(localStorageConstants.theme, theme)
        }
    }, [themeTypes])

    const onThemeChange = useCallback(() => {
        setIsLightMode(prevState => {
            const newValue = !prevState

            applyTheme(newValue)

            return newValue
        })
    }, [applyTheme])

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
    }, [applyTheme, isBrowserInDarkMode])

    return (
        <span
            className={styles["theme-wrapper"]}
            onClick={onThemeChange}
        >
            <FaIcon
                className={styles["icon"]}
                icon={["far", isLightMode ? "moon" : "sun"]}
                fixedWidth
            />
        </span>
    )
}

export default ThemeSelect