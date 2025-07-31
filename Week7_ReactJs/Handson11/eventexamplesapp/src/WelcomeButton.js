import React from 'react';

const WelcomeButton = () => {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <h2>Welcome Button</h2>
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>
    </div>
  );
};

export default WelcomeButton;
