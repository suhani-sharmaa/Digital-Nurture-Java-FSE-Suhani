import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // assuming 1 euro = 90 INR
    setEuros(euroValue);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount in Rupees"
        value={rupees}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>{euros && `Value in Euros: €${euros}`}</p>
    </div>
  );
};

export default CurrencyConverter;
