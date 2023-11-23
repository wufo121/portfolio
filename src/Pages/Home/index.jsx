/*style*/
import './Home.scss'
/*modules*/
import { faDesktop, faEnvelope, faBullseye, faGlobe, faHandshake, faCodeFork, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
/*composants*/
import CardActivity from '../../Components/CardActivity'
import CardRealisation from '../../Components/CardRealisation';
import ModalRealisation from '../../Components/ModalRealisation';
import CompétenceComposents from '../../Components/CompétenceComposents';
import CardFormation from '../../Components/CardFormation';
/*Image*/
import HtmlLogo from '../../Assets/HTML_Logo.webp'
import CssLogo from '../../Assets/Css_Logo.webp'
import javascriptLogo from '../../Assets/JavaScript-logo.webp'
import swaggerLogo from '../../Assets/Swagger_logo.webp'
import ReactLogo from '../../Assets/React_logo.webp'
import GitHubLogo from '../../Assets/githubLogo.svg'
import GitLogo from '../../Assets/git logo.jpg'
import SassLogo from '../../Assets/Sass_Logo.webp'
import Espace from "../../Assets/starry-sky.webp"
import ArgentBankLogo from '../../Assets/ArgentBankLogo.png';
import ArgentBankBanière from '../../Assets/ArgentBank.webp'


function Home () {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRealisation, setSelectedRealisation] = useState(null);

    const openModal = (realisationData) => {
      setSelectedRealisation(realisationData);
      setIsModalOpen(true);
      
    };
  
    const closeModal = () => {
      setSelectedRealisation(null);
      setIsModalOpen(false);
    };

    const handleIconClickContact = () => {
        window.location.href = 'mailto:wufo121@gmail.com';
     };

     const linkToLinkedin = () => {
        window.open('https://fr.linkedin.com/', '_blank');
     };


    return(
        <div className="mainPage">
            <section className="BannièreHome">
                <img src={Espace} alt="espace"></img>
                <div className='ApparitionLettre'>
                    <ul className='nom'>
                        <li className='lettre'>L</li>
                        <li className='lettre'>E</li>
                        <li className='lettre'>G</li>
                        <li className='lettre'>E</li>
                        <li className='lettre'>R</li>
                        </ul>
                        <ul className='prenom'>
                        <li className='lettre'>A</li>
                        <li className='lettre'>N</li>
                        <li className='lettre'>T</li>
                        <li className='lettre'>O</li>
                        <li className='lettre'>I</li>
                        <li className='lettre'>N</li>
                        <li className='lettre'>E</li>
                    </ul>
                </div>
            </section>
            <section id="Présentation">
                <h2>Présentation</h2>
                <p>Je suis un développeur web spécialisé dans Le Front-end.</p>
                <p>Passionné par la création de sites sur mesure, je m'efforce de fournir des expériences utilisateur exceptionnelles.</p>
                <p>Découvrez mes projets récents dans mon portfolio et contactez-moi pour discuter de votre projet web.</p>
            </section>
            <section id="Activité">
                <h2>Activités</h2>
                <div className='CardActivitySection'>
                    <div className='row'>
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Code Responsive"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
                        />
                        <CardActivity
                            iconCardActivity={faBullseye}
                            titleCardActivity="Référencement"
                            paragraphCardActivity="Je peux créer du code optimisé pour le référencement"
                        />
                        <CardActivity
                            iconCardActivity={faGlobe}
                            titleCardActivity="Site Web"
                            paragraphCardActivity="Landing page, site vitrine, e-commerce, site responsive web & mobile."
                        />
                    </div>
                    <div className='row'>
                        <CardActivity
                            iconCardActivity={faHandshake}
                            titleCardActivity="Communication client"
                            paragraphCardActivity="Communication client transparente et proactive pour comprendre efficacement les besoins."
                        />
                        <CardActivity
                            iconCardActivity={faCodeFork}
                            titleCardActivity="Intégration de Systèmes"
                            paragraphCardActivity="interconnectivité fluide entre différentes plateformes et logiciels"
                        />
                        <CardActivity
                            iconCardActivity={faWrench}
                            titleCardActivity="Maintenance"
                            paragraphCardActivity="Services de maintenance continue, correction de bugs, mises à jour logicielles"
                        />
                    </div>
                </div>
            </section>
            <section id="Réalisation">
                <h2>Réalisations</h2>
                <div className='SectionCardRealisation'>
                    <div className='row'>
                    <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={() =>
                            openModal({
                                RealisationImage2: ArgentBankBanière,
                                nomRealisation: "Argent Bank",
                                longueDescriptionRealisation:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possim porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum rem in accusamus!",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={() =>
                            openModal({
                                RealisationImage2: ArgentBankBanière,
                                nomRealisation: "Argent Bank",
                                longueDescriptionRealisation:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possim porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum rem in accusamus!",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={() =>
                            openModal({
                                RealisationImage2: ArgentBankBanière,
                                nomRealisation: "Argent Bank",
                                longueDescriptionRealisation:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possim porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum rem in accusamus!",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                    </div>
                    <div className='row'>
                    <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={() =>
                            openModal({
                                RealisationImage2: ArgentBankBanière,
                                nomRealisation: "Argent Bank",
                                longueDescriptionRealisation:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possim porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum rem in accusamus!",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={() =>
                            openModal({
                                RealisationImage2: ArgentBankBanière,
                                nomRealisation: "Argent Bank",
                                longueDescriptionRealisation:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possim porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum rem in accusamus!",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={() =>
                            openModal({
                                RealisationImage2: ArgentBankBanière,
                                nomRealisation: "Argent Bank",
                                longueDescriptionRealisation:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possim porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum rem in accusamus!",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                    </div>
                </div>
                {isModalOpen && (
                    <ModalRealisation
                      closeModal={closeModal}
                      {...selectedRealisation}
                    />
                )}
            </section>
            <section id="Compétence">
                <h2>Compétences</h2>
                <div className='CompétenceSection'>
                    <div className='leftSection'>
                        <CompétenceComposents
                        logoLogiciel={HtmlLogo}
                        nameLogiciel="HTML"
                        pourcentageMaitrise={100}
                        />
                        <CompétenceComposents
                        logoLogiciel={CssLogo}
                        nameLogiciel="Css"
                        pourcentageMaitrise={100}
                        />
                        <CompétenceComposents
                        logoLogiciel={ReactLogo}
                        nameLogiciel="React"
                        pourcentageMaitrise={80}
                        />
                        <CompétenceComposents
                        logoLogiciel={javascriptLogo}
                        nameLogiciel="Javascript"
                        pourcentageMaitrise={70}
                        />
                        <CompétenceComposents
                        logoLogiciel={swaggerLogo}
                        nameLogiciel="Swagger"
                        pourcentageMaitrise={50}
                        />
                    </div>
                    <div className='rightSection'>
                        <h3>Les outils que j'utilises :</h3>
                        <div className='Column'>
                            <img src={GitHubLogo} alt="GitHub logo"></img>
                            <img src ={GitLogo} alt="Git logo"></img>
                            <img src={SassLogo} alt="Sass logo"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Formations">
                <h2>Formations</h2>
                <div className='SectionCardFormation'>
                    <CardFormation
                    TitreDeLaFormation="Intégrateur Web, OpenClassrooms (bac+2)"
                    AnnéeDeFormation="2023"
                    NoteFormation="En cours"
                    />
                    <CardFormation
                    TitreDeLaFormation="Baccalauréat Mathématiques et Physique"
                    AnnéeDeFormation="2020-2021"
                    NoteFormation="Mention Bien"
                    />
                </div>
            </section>
            <section id="Contact">
                <h2>Contact</h2>
                <div className='IconContact'>
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="envelope-icon"
                    onClick={handleIconClickContact}
                />
                <FontAwesomeIcon
                 icon={faLinkedin}
                 className='Linkedin-icon'
                 onClick={linkToLinkedin}
                 />
                 </div>
            </section>
        </div>
    )
}

export default Home