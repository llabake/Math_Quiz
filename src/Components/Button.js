import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSync } from '@fortawesome/free-solid-svg-icons';

export const Button = ({ 
  selectedNumbers, 
  answerIsCorrect,
  checkAnswer,
  acceptAnswer,
  redraw,
  redraws }) => {
  let button;
  switch (answerIsCorrect) {
    case true:
      button = <button 
      className="btn btn-success"
      onClick={acceptAnswer}
      >
      <FontAwesomeIcon icon={faCheck}/>
      </button>
      break;
    case false:
      button = <button 
      className="btn btn-danger"
      >
      <FontAwesomeIcon icon={faTimes}/>
      </button>
      break;
    default:
      button = 
      <button className="btn"
        onClick={checkAnswer}
      disabled={selectedNumbers.length === 0}>
      =
      </button>
      break;
  }
  return (
    <div className="col-md-2 text-center">
      {button}
      <br/> <br/> 
      <button 
      className="btn btn-warning btn-sm" 
      disabled={redraws === 0}
      onClick={redraw}>
        <FontAwesomeIcon icon={faSync}/>{redraws}
      </button>
    </div>
  );
};
