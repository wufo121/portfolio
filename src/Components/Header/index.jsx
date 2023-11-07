import HomePicture from '../../Assets/Home.svg'
import githubLogo from '../../Assets/githubLogo.svg'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <div className="Header">
            <div className="partLeftNavigation">
                <Link to ="/" className='LinkHome'>
                    <img
                     src={HomePicture}
                     alt="Retour page Home"
                     className='HomePicture'
                     />
                </Link>
            </div>
            <div className="PartRightNavigation">
                <nav>
                    <ul>
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
            </div>
        </div>
    )
}
export default Header