import React from 'react';

const OnPressButton = () => {
  const handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event:", event);
  };

  return (
    <div>
      <h2>Synthetic Event</h2>
      <button onClick={handleClick}>Press Me</button>
    </div>
  );
};

export default OnPressButton;
