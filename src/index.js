import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Contacts from './pages/contacts'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/contacts'
                    element={<Contacts />}
                />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
