import React, { useState } from 'react';
import ListofPlayers from './Components/ListOfPlayers';
import IndianPlayers from './Components/IndianPlayers';
function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        Show {flag ? 'Indian Players' : 'List of Players'}
      </button>
      <hr />
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
