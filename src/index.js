import React from 'react'
import ReactDOM from 'react-dom/client'

import { Anchor } from 'antd'

import CoreView from './components/coreView/CoreView'

import Home from './pages/home'
import Contacts from './pages/contacts'

import mnIcon from "./assets/images/mnIcon.svg"

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
        path: "/contacts",
        title: "Contacts",
        icon: "phone",
        element: Contacts,
        menuHidden: true
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CoreView
            routes={routes}
            logo={mnIcon}
            //hideFooter
            extraHeaderContent={
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
            }
        />
    </React.StrictMode>
)
