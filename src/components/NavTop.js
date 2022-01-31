import React from 'react'
import { useState,useEffect, useRef } from 'react';
import './styles/Header.css'
import marca from '../assets/marca.png'
import { Link } from 'react-router-dom'
export default function NavTop({refSection,contactRefSection}) {


    const [toggleMenu, setToggleMenu]= useState(false)
    const [screamWidth, setScreamWidth]= useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect( () => {
        const changeWidth = () =>{
            setScreamWidth(window.innerWidth)
        }
        window.addEventListener('resize',changeWidth)

        return () =>{
            window.removeEventListener('resize',changeWidth)
        }

    },[])
   
    const homeSection = useRef(null)

    const goToHomeSection = () => window.scrollTo({ top: homeSection.current.offsetTop, behavior:"smooth" })


    return (

        <nav>
            {/* <img src={marca} className='img-marca'></img> */}
            <i class="fas fa-laptop-code img-marca"></i>
            <button className='btn' onClick={toggleNav}><i class="fas fa-bars"></i></button>
            {(toggleMenu || screamWidth >550 ) &&(
                <ul className='list'>
                <li className='items' ref={homeSection} onClick={goToHomeSection}>Home</li>
                <li className='items' onClick={refSection}>Projects</li>
                {/* <li className='items'>Skills</li> */}
                <li className='items' onClick={contactRefSection}>Contact</li>
            </ul>
            )}
                        
        </nav>

    )
}
