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
import kasa1 from '../../Assets/Kasa1.webp'
import kasa2 from '../../Assets/Kasa2.webp'
import optimisation1 from '../../Assets/Optimisation1.webp'
import optimisation2 from '../../Assets/Optimisation2.webp'
import portfolioArchi1 from '../../Assets/PortfolioSophie.webp'
import portfolioArchi2 from '../../Assets/PortfolioSophie2.webp'
import débugguer1 from '../../Assets/77events1.webp'
import débugguer2 from '../../Assets/77events2.webp'
import OhmyFood1 from '../../Assets/OhMyFood1.webp'
import OhmyFood2 from "../../Assets/OhMyFood2.webp"
import ArgentBankLogo from '../../Assets/ArgentBankLogo.webp'
import ArgentBankBanière from "../../Assets/ArgentBank.webp"



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
        window.open('linkedin.com/in/antoine-leger-dev', '_blank');
     };


    return(
        <div className="mainPage">
            <section id="BannièreHome">
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
                                "J'ai créé un site bancaire avec React Router, structurant le code de manière réutilisable. Les appels fetch récupèrent les données utilisateur du backend, gérées globalement avec Redux. Les informations utilisateur sont enregistrées, tout comme la gestion des modales et de l'état de connexion. Côté backend, j'ai ajouté du code sur Swagger pour anticiper le solde, récupérer des transactions par date, et ajouter des notes. En résumé, le projet offre une expérience bancaire complète grâce à des technologies modernes.",
                                lienDuProjet:"https://github.com/wufo121/Projet-11",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={kasa2}
                        nomRealisation="Kasa"
                        courteDescriptionRealisation="Utilisation de React"
                        onClick={() =>
                            openModal({
                                RealisationImage2: kasa1,
                                nomRealisation: "Kasa",
                                longueDescriptionRealisation:
                                "Dans ce projet, j'ai pu réaliser le site d'une agence immobilière, le but était de m'initier à React et de comprendre son fonctionement. Chaque logement a son propre ID et est relié à sa propre page. Chaque page contient un slider,une note mais aussi des accordéons qui contiennent la description et les équipements du logements. ",
                                lienDuProjet:"https://github.com/wufo121/projet8-kasa",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={optimisation1}
                        nomRealisation="Optimisation"
                        courteDescriptionRealisation="code et reférencement"
                        onClick={() =>
                            openModal({
                                RealisationImage2: optimisation2,
                                nomRealisation: "Optimisation",
                                longueDescriptionRealisation:
                                "Dans ce projet j'ai récupéré le portfolio d'une photographe qui avait du mal à chargé, j'ai optimisé les images en les compressant et en les mettant à la bonne taille, minimifié le code et corrigé le HTML. Puis j'ai optimisé le SEO du site en rajoutant des balises comme title ou meta description. Pour finir j'ai rajouté un référencement local visible par l'outil ggole rich snippet et un référencement pour les réseaux pour contrôler l'apparence des liens partagés.  ",
                                lienDuProjet:"https://github.com/wufo121/projet9-optimisation",
                                })
                            }
                        />
                    </div>
                    <div className='row'>
                    <CardRealisation
                        RealisationImage={portfolioArchi1}
                        nomRealisation="Portfolio photographe"
                        courteDescriptionRealisation="Utilisation de Fetch"
                        onClick={() =>
                            openModal({
                                RealisationImage2: portfolioArchi2,
                                nomRealisation: "Portfolio photographe",
                                longueDescriptionRealisation:
                                "Le but de ce projet était de pouvoir m'initié à faire des demandes au backend avec feth, sur le portfolio du photographe on peut rajouter ou retirer une photo, choisir les photos par catégories",
                                lienDuProjet:"https://github.com/wufo121/Projet-6-Portfolio-architecte",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={débugguer2}
                        nomRealisation="Débugguer"
                        courteDescriptionRealisation="Débugguer un site deja codé"
                        onClick={() =>
                            openModal({
                                RealisationImage2: débugguer1,
                                nomRealisation: "Débugguer",
                                longueDescriptionRealisation:
                                "Le but de ce projet était de pouvoir relire du code deja écrit et de pouvoir corriger les lignes de codes qui n'allait pas et de corriger les erreurs consoles, j'ai pu aussi réaliser des tests fonctionnels et unitaires",
                                lienDuProjet:"https://github.com/wufo121/Projet-10",
                                })
                            }
                        />
                        <CardRealisation
                        RealisationImage={OhmyFood1}
                        nomRealisation="Oh My Food"
                        courteDescriptionRealisation="Création d'animation Css"
                        onClick={() =>
                            openModal({
                                RealisationImage2: OhmyFood2,
                                nomRealisation: "Oh My Food",
                                longueDescriptionRealisation:
                                "Ce projet avait pour but de crer des animations css celon une maquette et la demande du client, faire une page de chargement avant que le site ne s'affiche et d'apprendre à utiliser sass.",
                                lienDuProjet:"https://github.com/wufo121/Projet_4_ohmyfood",
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
                        pourcentageMaitrise={85}
                        />
                        <CompétenceComposents
                        logoLogiciel={javascriptLogo}
                        nameLogiciel="Javascript"
                        pourcentageMaitrise={80}
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