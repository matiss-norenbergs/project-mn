import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "../header"
import Footer from "../footer"

import styles from "./CoreView.module.css"

const propTypes = {
    routes: PropTypes.array,
    logo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    hideFooter: PropTypes.bool,
    extraHeaderContent: PropTypes.node
}

const CoreView = ({
    routes = [],
    logo: headerLogo,
    hideFooter,
    extraHeaderContent
}) => {

    const headerPaths = routes.filter(({ menuHidden }) => !menuHidden).map(({ path, title, icon }) => ({
        path,
        title,
        icon
    }))

    return (
        <div className={styles["core-view-wrapper"]}>
            <Router>
                <Header
                    paths={headerPaths}
                    logo={headerLogo}
                    extraContent={extraHeaderContent}
                />
                <div className={styles["core-content"]}>
                    <Routes>
                        { routes.map(({ path, element: Element }) => (
                            <Route
                                key={path}
                                exact={path === "/"}
                                path={path}
                                element={<Element />}
                            />
                        ))}
                    </Routes>
                    {!hideFooter && (
                        <Footer />
                    )}
                </div>
            </Router>
        </div>
    )
}
CoreView.propTypes = propTypes

export default CoreView