/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/*' element={<NotFound />} exact />
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/about' element={<About />} exact />
        </Routes>
    )
}

export default MainRoute
