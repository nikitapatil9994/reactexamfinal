import React, { useState, useEffect } from 'react';

const Reservetion = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:5000/reservations'); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReservations(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <p style={{ fontSize: '18px', color: '#555', textAlign: 'center' }}>Loading reservations...</p>;
  }

  if (error) {
    return <p style={{ fontSize: '18px', color: 'red', textAlign: 'center' }}>Error fetching reservations: {error}</p>;
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>Reservations</h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
        Welcome to the Reservations page. Manage your bookings here.
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reservations.map((reservation) => (
          <li
            key={reservation.id}
            style={{
              backgroundColor: '#fff',
              marginBottom: '15px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>Guest Name: {reservation.guestName}</p>
            <p style={{ margin: '5px 0', color: '#555' }}>Room: {reservation.roomNumber}</p>
            <p style={{ margin: '5px 0', color: '#555' }}>Date: {reservation.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservetion;
