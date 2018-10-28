import React from 'react'; 

export const Numbers = (props) => {
  const arrayOfNumbers = [...Array(9).keys()];
  const numberClassname = (number) => {
    if(props.usedNumbers.includes(number)) return 'used';
    if(props.selectedNumbers.includes(number)) return 'selected';
  }
  return (
    <div className='card text-center'>
      <div>
        {arrayOfNumbers.map((number, i) => 
          <span 
            key={i}
            onClick={() => props.selectedNumber(number+1)}
            className={numberClassname(number+1)}
          >{number + 1}</span>
        )}
      </div>
    </div>
  );
};
