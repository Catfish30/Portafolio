import React from 'react'
import fondo1 from "../assets/fondo.png"
import fondo2 from '../assets/fondo2.jpg'
import "./styles/Header.css"
import { Link } from 'react-router-dom'
export default function Home() {

    
    return (
        <div className='contain'>
            <img src={fondo2} className="main-photo"></img>
            <div className='main-text'> MICHAEL ELIAS 
            <p className='cape'>Hello, I am a Designer / Front End and Back End Developer living in Peru.</p>
            </div>
            
                <button className='btn-about' >More about me</button>
            
        </div>
    )
}
