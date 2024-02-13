import React, { useState } from 'react';
import HomePicture from '../../Assets/Home.svg';
import githubLogo from '../../Assets/githubLogo.svg';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };


    return (
        <header>
            <div className="Header">
                <a href ="#BannièreHome" className='LinkHome'>
                    <img
                        src={HomePicture}
                        alt="Retour page Home"
                        className='HomePicture'
                        />
                </a>
                <FontAwesomeIcon
                        icon={faBars}
                        className='faBars'
                        onClick={toggleMobileMenu}
                    />
                </div>
            <nav className={isMobileMenuVisible ? 'visible' : ''}>
                <ul className='navUl'>
                    <li>
                        <a href="#Présentation">Présentation</a>
                    </li>
                    <li>
                        <a href="#Activité">Activité</a>
                    </li>
                    <li>
                        <a href="#Réalisation">Réalisation</a>
                    </li>
                    <li>
                        <a href="#Compétence">Compétence</a>
                    </li>
                    <li>
                        <a href="#Formations">Formations</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <Link to="https://github.com/wufo121"target="_blank" rel="noopener noreferrer">
                            <img 
                            src={githubLogo}
                            alt="Github Logo"
                            className='githubLogo'
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header