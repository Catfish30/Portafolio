import React from 'react'
import './styles/Body.css'
import perfil from '../assets/perfil.jpg'

export default function About() {
    return (
        <div className='contain-body'>
            <h1 className='h1-about'>About me</h1>
            <div className='card-about'>
                <img src={perfil} className='img-perfil'></img>
                <p className='p-about'>Hi, I'm Michael, I consider myself a person passionate about programming and learning new technologies, I am currently a web developer with skills in Fronted and Backend.</p>
            </div>
        </div>
    )
}
