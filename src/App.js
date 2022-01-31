import React from 'react'
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './views/Main'
import Home from './components/Home'
import Projects from './components/Projects'
export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        {/* <Route path="/home" exact element={<Home />} /> */}
        {/* <Link path="/home" componente={ Home } exact/> */}
      </Routes>
    </Router>
  )
  
}