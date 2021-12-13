import React from 'react'
import { Router, Routes } from 'react-router'

function Route() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />               
            </Routes>
        </Router>
    )
}

export default Route
