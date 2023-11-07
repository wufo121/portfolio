import './Home.scss'
import Espace from "../../Assets/starry-sky.webp"


function Home () {
    return(
        <div className="mainPage">
            <section className="BannièreHome">
                <img src={Espace} alt="espace"></img>
                <div className='square'>
                    <h1>LEGER<br></br> ANTOINE</h1>
                    <h2>Développeur Front-end.</h2>
                    <p>Développeur de 21 ans,<br></br> passioné par le développement web</p>
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
            </section>
            <section id="Réalisation">
                <h2>Réalisations</h2>
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