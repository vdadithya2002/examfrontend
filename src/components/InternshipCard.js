import React from 'react';

const InternshipCard = ({ internship, onAddToFavourites }) => {
  return (
    <div>
      <h3>{internship.company}</h3>
      <p>Role: {internship.role}</p>
      <p>Duration: {internship.duration}</p>
      <button onClick={onAddToFavourites}>
        {internship.isFavourite ? 'Unfavourite' : 'Add to Favourites'}
      </button>
    </div>
  );
};

export default InternshipCard;