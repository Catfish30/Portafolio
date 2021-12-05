import React from 'react'
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './views/Main'

export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />    
      </Routes>
    </Router>
  )
  
}