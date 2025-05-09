import React, { useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';

const FavouriteList = () => {
  const { favourites, removeFromFavourites } = useContext(FavouriteContext);

  if (favourites.length === 0) {
    return <p>No favorite internships added yet.</p>;
  }

  return (
    <div>
      <h2>Favorite Internships</h2>
      {favourites.map((internship) => (
        <div key={internship._id}>
          <h3>{internship.company}</h3>
          <p>Role: {internship.role}</p>
          <p>Duration: {internship.duration}</p>
          <button onClick={() => removeFromFavourites(internship._id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavouriteList;