import React from 'react';

const flightData = [
  { id: 1, airline: 'Air India', from: 'Delhi', to: 'Mumbai', time: '10:00 AM' },
  { id: 2, airline: 'IndiGo', from: 'Bangalore', to: 'Chennai', time: '1:30 PM' },
];

function Flights({ allowBooking = false, onBook }) {
  return (
    <div>
      <h3>Flight Details</h3>
      <ul>
        {flightData.map(flight => (
          <li key={flight.id}>
            ✈️ {flight.airline} - {flight.from} to {flight.to} at {flight.time}
            {allowBooking && (
              <button style={{ marginLeft: 10 }} onClick={() => onBook(flight.airline)}>
                Book Ticket
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Flights;
