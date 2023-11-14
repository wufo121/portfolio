import "./CardFormation.scss"


function CardFormation ({TitreDeLaFormation, AnnéeDeFormation, NoteFormation}) {

    return(
        <div className="CardFormation">
            <h3>{TitreDeLaFormation}</h3>
            <p>{AnnéeDeFormation}</p>
            <h4>{NoteFormation}</h4>
        </div>
    )
}

export default CardFormation