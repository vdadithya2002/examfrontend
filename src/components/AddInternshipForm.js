import React, { useState } from 'react';

const AddInternshipForm = () => {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/internships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company, role, duration }),
      });

      if (!response.ok) throw new Error('Failed to add internship');
      setMessage('Internship added successfully!');
      setCompany('');
      setRole('');
      setDuration('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <h2>Add New Internship</h2>
      <div>
        <label>Company:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Duration:</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Internship</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AddInternshipForm;