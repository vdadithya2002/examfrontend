import React, { useState } from 'react';
import { FavouriteProvider } from './context/FavouriteContext';
import InternshipList from './components/InternshipList';
import Navbar from './components/Navbar';
import FavouriteList from './components/FavouriteList';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Toggle refresh state
  };

  return (
    <FavouriteProvider>
      <div className="App">
        <Navbar />
        <h1>Student Internship Portal</h1>
        <InternshipList refresh={refresh} />
      </div>
      <div className="favourites">    
        <h2>Favourites</h2>
        <FavouriteList refresh={refresh} onRefresh={handleRefresh} />
      </div> {/* Properly close this div */}
    </FavouriteProvider>
  );
}

export default App;
