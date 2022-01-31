import React from 'react'
import './styles/Body.css'
import Webtip from '../assets/tip-fondo.png'
import Webeducation from '../assets/education-fondo.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import bootstrao from '../assets/bootstrap.png'
import django from '../assets/django.png'
import postgres from '../assets/postgres.png'
// import { useRef } from 'react'

export default function Projects() {


    return (
        <div className='contain-projects' >
            <h1 className='h1-projects'>Proyectos</h1>
            <div className='card-project'>
                <div className='info-project'>
                    <h2>App Tip Calculator</h2>
                    <ul className='list-icons'>
                        <li><img src={html} className='icon-projects'></img></li>
                        <li><img src={css} className='icon-projects'></img></li>
                        <li><img src={js} className='icon-projects'></img></li>
                    </ul>
                    <p>This website is used to calculate a tip according to an individual or fractional account.</p>
                    <button className='btn-web '><a target="_blank" href="https://catfish30.github.io/Practica02/">Website</a></button>
                    <button className='btn-git'><a target="_blank" href="https://github.com/Catfish30/Practica02">GitHub</a></button>
                </div>
                <img src={Webtip} className='img-project'></img>
            </div>

            <div className='card-project'>
                <div className='info-project'>
                    <h2>App Education System</h2>
                    <ul className='list-icons'>
                        <li><img src={html} className='icon-projects'></img></li>
                        <li><img src={bootstrao} className='icon-projects'></img></li>
                        <li><img src={js} className='icon-projects'></img></li>
                        <li><img src={react} className='icon-projects'></img></li>
                        <li><img src={django} className='icon-projects'></img></li>
                        <li><img src={postgres} className='icon-projects'></img></li>
                    </ul>
                    <p>This is a website of an educational system, both for teachers and students with a grade system.</p>
                    <button className='btn-web ' href="#">Website</button>
                    <button className='btn-git'><a target="_blank" href="https://github.com/Catfish30/Proyecto-Backend">GitHub</a></button>
                </div>
                <img src={Webeducation} className='img-project'></img>
            </div>

        </div>
    )
}
