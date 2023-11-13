import './ModalRealisation.scss'


function ModalRealisation ({ closeModal }) {

    return(
        <div className='ModalRealisation'>
            <h3>Salut</h3>
            <button onClick={closeModal}>fermer la modal</button>
        </div>
    )
}

export default ModalRealisation;