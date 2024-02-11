import React from 'react'
import ReactDOM from 'react-dom/client'

import CoreView from './components/coreView'
import Anchor from './components/anchor'
import MNIcon from 'components/mnIcon'

import Home from './pages/home'
import Components from './pages/components'

import './index.css'

const routes = [
    {
        path: "/",
        title: "Home",
        icon: "home",
        element: Home,
        menuHidden: true
    },
    {
        path: "/components",
        title: "Components",
        icon: "atom",
        element: Components,
        menuHidden: true
    }
]

const anchors = [
    {
        key: "about",
        href: "/#about",
        title: "About",
    },
    {
        key: "cards",
        href: "/#cards",
        title: "Cards"
    },
    {
        key: "cartoons",
        href: "/#cartoons",
        title: "Cartoons"
    },
    {
        key: "skills",
        href: "/#skills",
        title: "Skills"
    },
    {
        key: "projects",
        href: "/#projects",
        title: "Projects"
    },
    // {
    //     key: "components",
    //     href: "/components",
    //     title: "Components",
    //     isNavLink: true
    // }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CoreView
            routes={routes}
            logo={<MNIcon />}
            //hideFooter
            extraHeaderContent={
                <Anchor
                    anchors={anchors}
                />
            }
        />
    </React.StrictMode>
)
