import React from 'react'; 

export const Answer = (props) => {
  return (
    <div className='col-md-5'>
      {props.selectedNumbers.map((number, i) => 
      <span 
      key={i}
      onClick={() => props.unselectNumber(number)}>{number}</span>)}
    </div>
  )
}