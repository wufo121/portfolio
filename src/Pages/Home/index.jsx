import './Home.scss'
import React, { useState } from 'react';
import Espace from "../../Assets/starry-sky.webp"
import CardActivity from '../../Components/CardActivity'
import CardRealisation from '../../Components/CardRealisation';
import ModalRealisation from '../../Components/ModalRealisation';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import ArgentBankLogo from '../../Assets/ArgentBankLogo.png';



function Home () {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        };
        
     const closeModal = () => {
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
                {isModalOpen && <ModalRealisation closeModal={closeModal} />}
            </section>
            <section id="Compétence">
                <h2>Compétences</h2>
            </section>
            <section id="Formations">
                <h2>Formations</h2>
            </section>
            <section id="Contact">
                <h2>Contact</h2>
            </section>
        </div>
    )
}

export default Home