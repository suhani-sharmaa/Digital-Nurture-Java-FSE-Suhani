import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome back</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
