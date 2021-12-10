import React from 'react'
import { useState } from 'react';
import "./styles/Header.css"

export default function Header() {

    

    const [show,setShow] = useState(true)

    

    return (
        <div className="nav">
                <div className="logo">
                    Michael Elias
                </div>
                <button className="toggle" onClick={()=>setShow(!show)}>
                    <i class="fas fa-bars"></i>
                </button>
                {
                    show?<ul className="nav-menu_visible nav-menu ">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Habilidades
                        </li>
                        <li className="nav-item">
                            Proyectos
                        </li>
                        <li className="nav-item">
                            Contacto
                        </li>
                    </ul>:null
                }
        </div>
    )
}
