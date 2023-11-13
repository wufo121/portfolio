import React, { useEffect } from 'react';
import './ModalRealisation.scss';

function ModalRealisation({ closeModal, RealisationImage2, nomRealisation, longueDescriptionRealisation,lienDuProjet }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest('.ModalRealisation')) {
        closeModal();
      }
    };

    
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleOutsideClick);

    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className='ModalRealisation'>
      <img src={RealisationImage2} alt={`projet ${nomRealisation}`} />
      <h3>{nomRealisation}</h3>
      <p>{longueDescriptionRealisation}</p>
      <a href={lienDuProjet} target="_blank" rel="noopener noreferrer">Voir le projet</a>
      <button onClick={closeModal}>x</button>
    </div>
  );
}

export default ModalRealisation;
