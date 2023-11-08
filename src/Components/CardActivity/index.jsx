import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cardActivity.scss'

function CardActivity({ iconCardActivity, titleCardActivity, paragraphCardActivity }) {
  return (
    <div className="cardActivity">
      <FontAwesomeIcon icon={iconCardActivity} size="3x" /> 
      <h3>{titleCardActivity}</h3>
      <p>{paragraphCardActivity}</p>
    </div>
  );
}

export default CardActivity;