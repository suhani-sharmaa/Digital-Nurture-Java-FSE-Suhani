import React from 'react';
import Counter from './Counter';
import WelcomeButton from './WelcomeButton';
import OnPressButton from './OnPressButton';
import CurrencyConverter from './CurrencyConverter';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Examples App</h1>
      <Counter />
      <WelcomeButton />
      <OnPressButton />
      <CurrencyConverter />
    </div>
  );
};

export default App;
