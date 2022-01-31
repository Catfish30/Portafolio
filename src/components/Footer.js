import React from 'react'
import './styles/Footer.css'

export default function Footer() {
    return (
        <div>
            <div className='contain-footer'>
                <ul className='footer-icons'>
                    <li className='footer-icon'><a target="_blank" href="https://www.facebook.com/elias.michael97/"><i class="fab fa-facebook-f"></i></a></li>
                    <li className='footer-icon'><a target="_blank" href="https://twitter.com/MichaelElias30"><i class="fab fa-twitter"></i></a></li>
                    <li className='footer-icon'><a target="_blank" href="https://github.com/Catfish30"><i class="fab fa-github"></i></a></li>
                    <li className='footer-icon'><a target="_blank" href="https://www.linkedin.com/in/michael-elias-7b2bb4140/"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
                <p className='footer-p'>e-mail: michael.huamani@tecsup.edu.pe</p>
                <p className='footer-p'>Copyright © 2021 Michael Elias • Web Designer & Developer</p>
            </div>
        </div>
    )
}
