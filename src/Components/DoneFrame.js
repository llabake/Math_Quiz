import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const DoneFrame = ({ doneStatus, resetGame }) => {
  return (
    <div className='text-center'>
      <h2>{doneStatus}</h2>
      <button className="btn btn-secondary" onClick={resetGame}>Play Again</button>
    </div>
  )
};