import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
