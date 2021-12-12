import React from 'react'
import './styles/Footer.css'

export default function Footer() {
    return (
        <div>
            <div className='contain-footer'>
                <ul className='footer-icons'>
                    <li className='footer-icon'><i class="fab fa-facebook-f"></i></li>
                    <li className='footer-icon'><i class="fab fa-twitter"></i></li>
                    <li className='footer-icon'><i class="fab fa-github"></i></li>
                    <li className='footer-icon'><i class="fab fa-linkedin-in"></i></li>
                </ul>
                <p className='footer-p'>Copyright © 2021 Michael Elias • Web Designer & Developer</p>
            </div>
        </div>
    )
}
