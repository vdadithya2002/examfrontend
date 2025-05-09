import React, { useContext, useState } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';
import AddInternshipForm from './AddInternshipForm';

const Navbar = () => {
  const { favourites } = useContext(FavouriteContext);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img
          src="https://via.placeholder.com/40" // Replace with your logo URL
          alt="Logo"
          style={styles.logo}
        />
        <h2 style={styles.title}>Student Internship Portal</h2>
      </div>
      <div style={styles.navLinks}>
        <span style={styles.favourites}>
          Favourites: <strong>{favourites.length}</strong>
        </span>
        <button onClick={toggleForm} style={styles.button}>
          {showForm ? 'Close Form' : 'Add Internship'}
        </button>
      </div>
      {showForm && <AddInternshipForm />}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#282c34',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
    borderRadius: '50%',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  favourites: {
    fontSize: '16px',
  },
  button: {
    padding: '8px 15px',
    background: '#61dafb',
    color: '#282c34',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  buttonHover: {
    background: '#21a1f1',
  },
};

export default Navbar;