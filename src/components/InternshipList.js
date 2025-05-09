import React, { useEffect, useState, useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';
import InternshipCard from './InternshipCard';

const InternshipList = ({ refresh }) => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToFavourites } = useContext(FavouriteContext);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/internships');
        if (!response.ok) throw new Error('Failed to fetch internships');
        const data = await response.json();
        setInternships(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, [refresh]); // Re-fetch when `refresh` changes

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error) return <p style={styles.error}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      {internships.map((internship) => (
        <div key={internship._id} style={styles.card}>
          <InternshipCard
            internship={internship}
            onAddToFavourites={() => addToFavourites(internship)}
          />
        </div>
      ))}
    </div>
  );
};

// CSS styles as a JavaScript object
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    backgroundColor: '#fff',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#555',
  },
  error: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'red',
  },
};

export default InternshipList;