import React, { createContext, useState, useEffect } from 'react';

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Fetch favorites from the backend when the app starts
  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/internships/favourites');
        const data = await response.json();
        setFavourites(data);
      } catch (error) {
        console.error('Failed to fetch favourites:', error);
      }
    };

    fetchFavourites();
  }, []);

  const addToFavourites = async (internship) => {
    console.log('Adding to favourites:', internship); // Debugging
    try {
      const response = await fetch(`http://localhost:4000/api/internships/${internship._id}/favourite`, {
        method: 'PUT',
      });
      const updatedInternship = await response.json();
      setFavourites((prev) => [...prev, updatedInternship]);
    } catch (error) {
      console.error('Failed to add to favourites:', error);
    }
  };

  const removeFromFavourites = async (internshipId) => {
    try {
      await fetch(`http://localhost:4000/api/internships/${internshipId}/unfavourite`, {
        method: 'PUT',
      });
      setFavourites((prev) => prev.filter((fav) => fav._id !== internshipId));
    } catch (error) {
      console.error('Failed to remove from favourites:', error);
    }
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};