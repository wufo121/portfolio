import './Home.scss'
import React, { useState } from 'react';
import Espace from "../../Assets/starry-sky.webp"
import CardActivity from '../../Components/CardActivity'
import CardRealisation from '../../Components/CardRealisation';
import ModalRealisation from '../../Components/ModalRealisation';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import ArgentBankLogo from '../../Assets/ArgentBankLogo.png';
import ArgentBankBanière from '../../Assets/ArgentBank.webp'
import CompétenceComposents from '../../Components/CompétenceComposents';
import CardFormation from '../../Components/CardFormation';
import HtmlLogo from '../../Assets/HTML_Logo.webp'
import CssLogo from '../../Assets/Css_Logo.webp'
import javascriptLogo from '../../Assets/JavaScript-logo.webp'
import swaggerLogo from '../../Assets/Swagger_logo.webp'
import ReactLogo from '../../Assets/React_logo.webp'
import GitHubLogo from '../../Assets/githubLogo.svg'
import GitLogo from '../../Assets/git logo.jpg'


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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero enim inventore possimus
                     porro necessitatibus nulla harum eius, omnis ratione quasi animi id voluptate eligendi minima velit earum 
                     rem in accusamus!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident doloribus obcaecati eum, facilis dolorum,
                     pariatur illo atque quis quo id excepturi cum. Magnam ipsa cumque
                      in eaque dolores, neque dolor!</p>
            </section>
            <section id="Activité">
                <h2>Activités</h2>
                <div className='CardActivitySection'>
                    <div className='row'>
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Multi-plateforme"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
                        />
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Multi-plateforme"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
                        />
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Multi-plateforme"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
                        />
                    </div>
                    <div className='row'>
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Multi-plateforme"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
                        />
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Multi-plateforme"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
                        />
                        <CardActivity
                            iconCardActivity={faDesktop}
                            titleCardActivity="Multi-plateforme"
                            paragraphCardActivity="Compatible tous supports, tablette & application mobile"
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
                        onClick={openModal}
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={openModal}
                        />
                    </div>
                    <div className='row'>
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={openModal}
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={openModal}
                        />
                        <CardRealisation
                        RealisationImage={ArgentBankLogo}
                        nomRealisation="Argent Bank"
                        courteDescriptionRealisation="Gérer les States avec React-Redux"
                        onClick={openModal}
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
                        <div className='row'>
                            <img src={GitHubLogo} alt="GitHub logo"></img>
                            <img src ={GitLogo} alt="Git logo"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Formations">
                <h2>Formations</h2>
                <div className='SectionCardFormation'>
                    <CardFormation
                    TitreDeLaFormation="Intégrateur Web, OpenClassrooms"
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
            </section>
        </div>
    )
}

export default Home