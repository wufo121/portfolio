
import './CardRealisation.scss'


function CardRealisation({ RealisationImage, nomRealisation, courteDescriptionRealisation }) {
    return (
      <div className='CardRealisation'>
        <img src={RealisationImage} alt={`projet ${nomRealisation}`}/>
        <h3>{nomRealisation}</h3>
        <p>{courteDescriptionRealisation}</p>
      </div>
    );
  }
  
  export default CardRealisation;
  
  
  