import React from 'react';

const BookDetails = (props) => {
  const bookdet = (
    <ul>
      {props.books.map(book => (
        <li key={book.id}>
          <h3>{book.bname}</h3>
          <h4>₹{book.price}</h4>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Book Details</h2>
      {bookdet}
    </div>
  );
};

export default BookDetails;
