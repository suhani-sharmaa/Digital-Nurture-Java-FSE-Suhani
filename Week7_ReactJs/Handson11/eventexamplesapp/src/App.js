import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! Counter was incremented.");
  };

  const handleWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => handleWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handlePress}>Click on me</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
