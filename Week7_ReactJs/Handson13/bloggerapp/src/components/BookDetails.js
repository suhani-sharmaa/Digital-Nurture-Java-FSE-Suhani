import React from 'react';

const BookDetails = ({ show }) => {
  return (
    show && (
      <div style={{ borderLeft: '3px solid green', paddingLeft: '30px', marginRight: '30px' }}>
        <h2>Book Details</h2>
        <h3>Master React</h3>
        <p>670</p>
        <h3>Deep Dive into Angular 11</h3>
        <p>800</p>
        <h3>Mongo Essentials</h3>
        <p>450</p>
      </div>
    )
  );
};

export default BookDetails;
