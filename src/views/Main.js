import React from 'react'
import Home from '../components/Home'
import NavTop from '../components/NavTop'
import Projects from '../components/Projects'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { useRef, useEffect } from 'react'

export default function Main() {

    const projectSection = useRef(null)
    const aboutSection = useRef(null)
    const contactSection = useRef(null)

    // const goToprojectSection = () => window.scrollTo({ 
    //     top: projectSection, 
    //     behavior:"smooth" 
    // })

    // const goToprojectSection = () => window.scrollTo({ behavior: 'smooth', top: projectSection.current.offsetTop })

    // const goToprojectSection = () => {
    //     projectSection.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
    // }
    
    // useEffect(() => {
    //     goToprojectSection()
    // }, [])

    const refSection = () => {
        window.scrollTo({ top: projectSection.current.offsetTop, behavior:"smooth", alignToTop:true })
    }
    const aboutRefSection = () => {
        window.scrollTo({ top: aboutSection.current.offsetTop, behavior:"smooth", alignToTop:true })
    }
    const contactRefSection = () => {
        window.scrollTo({ top: contactSection.current.offsetTop, behavior:"smooth", alignToTop:true })
    }

    return (
        <div>
            <NavTop refSection={refSection} contactRefSection={contactRefSection}  />
            <Home aboutRefSection={aboutRefSection} />
            <div ref={aboutSection}></div> 
            <About />
            <div ref={projectSection} style={{visibility:"hidden"}}>Project section</div> 
            <Projects />
            {/* <Contact /> */}
            <Footer />
            <div ref={contactSection}></div> 
        </div>
    )
}
