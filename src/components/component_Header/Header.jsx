import React, { useState } from 'react';
import '../../assets/styles/style_Header/Header.css';
import {Link} from  'react-router'; 

export default function Header() 
{
    var [isMenuOpen, setIsMenuOpen] = useState(false);

    var toggleMenu = () => 
    {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <header>
                <div className="header-container">

                    {/* LOGO */}
                    <div className='container_img_header'>
                        <a href="#" className="logo">
                            <img src="./img/logo_.PNG" alt="Valencia" className='logo-img'/>
                        </a>
                    </div>

                    {/* MENÚ  */}
                    <nav className={`nav_container_header ${isMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><Link to="/Pg">Inicio</Link></li>
                            <li><Link to="/QuizBurjassot">Conoce Burjassot</Link></li>
                            <li>Eventos</li>
                            <li>Preguntas Frecuentes</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>

                    {/* IDIOMAS + HAMBURGUESA */}
                    <div className="right-section">

                        {/* 3. IDIOMAS */}
                        <div className='idiomas_header'>
                            <ul>
                                <li><img src="./img/spain.png" alt="spain" /></li>
                                <li><img src="./img/uk.png" alt="uk" /></li>
                                <li><img src="./img/valencia.png" alt="valencia" /></li>
                            </ul>
                        </div>

                        {/* HAMBURGUESA  */}
                        <div className="burger-menu" onClick={toggleMenu}>
                            <svg viewBox="0 0 100 80" width="25" height="25" fill="white">
                                <rect width="100" height="15" rx="8"></rect>
                                <rect y="30" width="100" height="15" rx="8"></rect>
                                <rect y="60" width="100" height="15" rx="8"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}