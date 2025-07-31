import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai',
      image: 'https://postimg.cc/JsVLK4Sm'
    },
    {
      name: 'Regus',
      rent: 65000,
      address: 'Bangalore',
      image: 'https://via.placeholder.com/300x150?text=Office+Space+2'
    },
    {
      name: 'WeWork',
      rent: 55000,
      address: 'Mumbai',
      image: 'https://via.placeholder.com/300x150?text=Office+Space+3'
    }
  ];

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>
      {offices.map((office, index) => (
        <div key={index} className="office-card">
          <img src={office.image} alt={office.name} />
          <h2>{office.name}</h2>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: Rs. {office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
