import React from 'react'
import Home from '../components/Home'
import NavTop from '../components/NavTop'
import Projects from '../components/Projects'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Main() {
    return (
        <div>
            <NavTop />
            <Home />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}
