import React from 'react'
import { useState,useEffect } from 'react';
import './styles/Header.css'
import marca from '../assets/marca.png'
export default function NavTop() {


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
   

    return (

        <nav>
            {/* <img src={marca} className='img-marca'></img> */}
            <i class="fas fa-laptop-code img-marca"></i>
            <button className='btn' onClick={toggleNav}><i class="fas fa-bars"></i></button>
            {(toggleMenu || screamWidth >550 ) &&(
                <ul className='list'>
                <li className='items'>Home</li>
                <li className='items'>Projects</li>
                <li className='items'>Skills</li>
                <li className='items'>Contact</li>
            </ul>
            )}
                        
        </nav>

    )
}
