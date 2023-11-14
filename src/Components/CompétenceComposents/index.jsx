import './CompétenceComposents.scss';

function CompétenceComposants({ logoLogiciel, nameLogiciel, pourcentageMaitrise,  }) {
    const pourcentage = Math.min(100, Math.max(0, pourcentageMaitrise));
   

    return (
        <div className='CompétenceComposants'>
            <div className='Column'>
                <img src={logoLogiciel} alt={nameLogiciel}></img>
                <h3>{nameLogiciel}</h3>
            </div>
            <div className='barreCompétence'>
                <div className='ProgressCompétence'> </div>
                <div className='HideProgressBar' style={{ width: `${100-pourcentage}%` }}></div>
            </div>
        </div>
    );
}

export default CompétenceComposants;