import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Stars = (props) => {
  return (
    <div className='col-md-4 stars'>
      {[...Array(props.numberOfStars).keys()]
        .map(i => <FontAwesomeIcon key={i} icon={faStar} size="lg" />
      )}
    </div>
  )
};
