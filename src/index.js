import React from 'react'
import ReactDOM from 'react-dom/client'

import Core from 'components/core'

import Components from 'pages/components'
import Home from 'pages/home'
import Todos from 'pages/todos'

import './index.css'

const routes = [
    {
        path: "/",
        title: "Home",
        icon: "home",
        element: Home,
        //menuHidden: true
    },
    {
        path: "/todos",
        title: "Todos",
        icon: "list-check",
        element: Todos,
        //menuHidden: true
    },
    {
        path: "/components",
        title: "Components",
        icon: "atom",
        element: Components,
        //menuHidden: true
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Core
            routes={routes}
            hideFooter
        />
    </React.StrictMode>
)
